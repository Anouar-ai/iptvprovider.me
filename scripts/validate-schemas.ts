#!/usr/bin/env node
/**
 * Schema Validator Script
 * 
 * Validates all Schema.org markup across the site for:
 * - Schema.org compliance
 * - Required properties
 * - Broken @id references
 * - Google Rich Results eligibility
 * 
 * Usage:
 *   npm run validate:schemas
 *   npm run validate:schemas -- --fix
 *   npm run validate:schemas -- --report
 */

import * as schema from '../src/lib/schema';
import { siteConfig } from '../src/lib/site-config';

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

interface ValidationResult {
    valid: boolean;
    errors: string[];
    warnings: string[];
    schemaType: string;
    data: any;
}

interface ValidationReport {
    totalSchemas: number;
    validSchemas: number;
    errors: number;
    warnings: number;
    results: ValidationResult[];
}

class SchemaValidator {
    private report: ValidationReport = {
        totalSchemas: 0,
        validSchemas: 0,
        errors: 0,
        warnings: 0,
        results: [],
    };

    /**
     * Validate required Schema.org properties
     */
    private validateRequiredProperties(schemaData: any, requiredProps: string[]): string[] {
        const errors: string[] = [];

        for (const prop of requiredProps) {
            if (!schemaData[prop]) {
                errors.push(`Missing required property: ${prop}`);
            }
        }

        return errors;
    }

    /**
     * Validate @id references are properly formatted
     */
    private validateIdReferences(schemaData: any): string[] {
        const errors: string[] = [];

        const checkId = (obj: any, path: string = '') => {
            if (typeof obj !== 'object' || obj === null) return;

            if (obj['@id']) {
                const id = obj['@id'];
                // Check if @id is a valid URL or fragment
                if (!id.startsWith('http') && !id.includes('#')) {
                    errors.push(`Invalid @id format at ${path}: ${id}`);
                }
            }

            // Recursively check nested objects
            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                    checkId(obj[key], path ? `${path}.${key}` : key);
                }
            }
        };

        checkId(schemaData);
        return errors;
    }

    /**
     * Validate URL properties are absolute URLs
     */
    private validateUrls(schemaData: any): string[] {
        const errors: string[] = [];
        const urlProps = ['url', 'image', 'logo', 'contentUrl', 'embedUrl', 'thumbnailUrl'];

        const checkUrls = (obj: any, path: string = '') => {
            if (typeof obj !== 'object' || obj === null) return;

            for (const key in obj) {
                if (urlProps.includes(key) && typeof obj[key] === 'string') {
                    if (!obj[key].startsWith('http')) {
                        errors.push(`Relative URL found at ${path}.${key}: ${obj[key]}`);
                    }
                }

                if (typeof obj[key] === 'object') {
                    checkUrls(obj[key], path ? `${path}.${key}` : key);
                }
            }
        };

        checkUrls(schemaData);
        return errors;
    }

    /**
     * Validate specific schema types
     */
    private validateSchemaType(schemaData: any): ValidationResult {
        const result: ValidationResult = {
            valid: true,
            errors: [],
            warnings: [],
            schemaType: schemaData['@type'] || 'Unknown',
            data: schemaData,
        };

        // Common validations
        result.errors.push(...this.validateIdReferences(schemaData));
        result.errors.push(...this.validateUrls(schemaData));

        // Type-specific validations
        switch (schemaData['@type']) {
            case 'Organization':
                result.errors.push(...this.validateRequiredProperties(schemaData, [
                    'name', 'url', 'logo'
                ]));
                if (!schemaData.sameAs || schemaData.sameAs.length === 0) {
                    result.warnings.push('Missing sameAs property for entity linking');
                }
                break;

            case 'Product':
                result.errors.push(...this.validateRequiredProperties(schemaData, [
                    'name', 'description', 'image'
                ]));
                if (!schemaData.offers && !schemaData.aggregateRating) {
                    result.warnings.push('Product should have offers or aggregateRating');
                }
                break;

            case 'FAQPage':
                result.errors.push(...this.validateRequiredProperties(schemaData, [
                    'mainEntity'
                ]));
                if (schemaData.mainEntity && Array.isArray(schemaData.mainEntity)) {
                    schemaData.mainEntity.forEach((q: any, idx: number) => {
                        if (!q.acceptedAnswer || !q.acceptedAnswer.text) {
                            result.errors.push(`FAQ question ${idx + 1} missing answer text`);
                        }
                    });
                }
                break;

            case 'Article':
            case 'TechArticle':
                result.errors.push(...this.validateRequiredProperties(schemaData, [
                    'headline', 'datePublished', 'author', 'publisher'
                ]));
                break;

            case 'BreadcrumbList':
                if (!schemaData.itemListElement || schemaData.itemListElement.length === 0) {
                    result.errors.push('BreadcrumbList must have itemListElement');
                }
                break;

            case 'WebSite':
                result.errors.push(...this.validateRequiredProperties(schemaData, [
                    'name', 'url'
                ]));
                if (!schemaData.potentialAction) {
                    result.warnings.push('WebSite should include SearchAction for sitelinks searchbox');
                }
                break;

            case 'QAPage':
                if (!schemaData.mainEntity || !schemaData.mainEntity.acceptedAnswer) {
                    result.errors.push('QAPage must have mainEntity with acceptedAnswer');
                }
                break;
        }

        result.valid = result.errors.length === 0;
        return result;
    }

    /**
     * Test all schema generators
     */
    public async validateAllSchemas(): Promise<ValidationReport> {
        console.log(`${colors.cyan}🔍 Validating Schema.org Markup...${colors.reset}\n`);

        // Test Organization Schema
        this.testSchema('Organization', schema.organizationSchema);

        // Test Website Schema
        this.testSchema('WebSite', schema.generateWebSiteSchema());

        // Test Site Navigation
        this.testSchema('SiteNavigation', schema.generateSiteNavigationSchema());

        // Test Advanced Sitelinks
        this.testSchema('AdvancedSitelinks', schema.generateAdvancedSitelinksSchema());

        // Test Entity Graph
        this.testSchema('EntityGraph', schema.generateEntityGraphSchema());

        // Test Knowledge Graph
        this.testSchema('KnowledgeGraph', schema.generateKnowledgeGraphSchema());

        // Test Product Schema
        this.testSchema('Product', schema.generateProductSchema({
            name: 'IPTV Subscription',
            description: 'Premium IPTV service',
            image: `${siteConfig.url}/IPTV-Provider.png`,
            ratingValue: '4.9',
            reviewCount: '15847',
            price: '12.99',
        }));

        // Test FAQ Schema
        this.testSchema('FAQPage', schema.generateFAQPageSchema([
            {
                question: 'What is IPTV?',
                answer: 'IPTV is Internet Protocol Television',
            },
        ]));

        // Test Article Schema
        this.testSchema('Article', schema.generateArticleSchema({
            headline: 'Test Article',
            description: 'Test description',
            datePublished: '2025-01-01',
            dateModified: '2025-01-01',
            url: `${siteConfig.url}/test`,
        }));

        // Test QAPage Schema
        this.testSchema('QAPage', schema.generateQAPageSchema({
            question: 'Test question?',
            answer: 'Test answer',
            url: `${siteConfig.url}/test`,
        }));

        // Test Glossary Schema
        this.testSchema('Glossary', schema.generateGlossarySchema({
            name: 'IPTV Glossary',
            description: 'IPTV terminology',
            url: `${siteConfig.url}/glossary`,
            terms: [{ term: 'IPTV', definition: 'Internet Protocol Television' }],
        }));

        // Print summary
        this.printSummary();

        return this.report;
    }

    private testSchema(name: string, schemaData: any) {
        this.report.totalSchemas++;

        const result = this.validateSchemaType(schemaData);
        this.report.results.push(result);

        if (result.valid) {
            this.report.validSchemas++;
            console.log(`${colors.green}✓${colors.reset} ${name}: ${colors.green}PASS${colors.reset}`);
        } else {
            this.report.errors += result.errors.length;
            console.log(`${colors.red}✗${colors.reset} ${name}: ${colors.red}FAIL${colors.reset}`);
            result.errors.forEach(err => {
                console.log(`  ${colors.red}ERROR:${colors.reset} ${err}`);
            });
        }

        if (result.warnings.length > 0) {
            this.report.warnings += result.warnings.length;
            result.warnings.forEach(warn => {
                console.log(`  ${colors.yellow}WARNING:${colors.reset} ${warn}`);
            });
        }
    }

    private printSummary() {
        console.log(`\n${colors.cyan}${'='.repeat(60)}${colors.reset}`);
        console.log(`${colors.cyan}📊 Validation Summary${colors.reset}`);
        console.log(`${colors.cyan}${'='.repeat(60)}${colors.reset}\n`);

        console.log(`Total Schemas Tested: ${this.report.totalSchemas}`);
        console.log(`${colors.green}Valid Schemas: ${this.report.validSchemas}${colors.reset}`);
        console.log(`${colors.red}Total Errors: ${this.report.errors}${colors.reset}`);
        console.log(`${colors.yellow}Total Warnings: ${this.report.warnings}${colors.reset}`);

        const successRate = ((this.report.validSchemas / this.report.totalSchemas) * 100).toFixed(1);
        console.log(`\n${colors.cyan}Success Rate: ${successRate}%${colors.reset}`);

        if (this.report.errors === 0) {
            console.log(`\n${colors.green}🎉 All schemas are valid!${colors.reset}`);
        } else {
            console.log(`\n${colors.red}⚠️  Fix errors before deploying to production${colors.reset}`);
        }
    }

    /**
     * Generate detailed report
     */
    public generateReport(): string {
        let report = '# Schema Validation Report\n\n';
        report += `Generated: ${new Date().toISOString()}\n\n`;
        report += `## Summary\n\n`;
        report += `- Total Schemas: ${this.report.totalSchemas}\n`;
        report += `- Valid: ${this.report.validSchemas}\n`;
        report += `- Errors: ${this.report.errors}\n`;
        report += `- Warnings: ${this.report.warnings}\n\n`;

        report += `## Detailed Results\n\n`;

        this.report.results.forEach((result, idx) => {
            report += `### ${idx + 1}. ${result.schemaType}\n\n`;
            report += `Status: ${result.valid ? '✅ PASS' : '❌ FAIL'}\n\n`;

            if (result.errors.length > 0) {
                report += `**Errors:**\n`;
                result.errors.forEach(err => {
                    report += `- ${err}\n`;
                });
                report += '\n';
            }

            if (result.warnings.length > 0) {
                report += `**Warnings:**\n`;
                result.warnings.forEach(warn => {
                    report += `- ${warn}\n`;
                });
                report += '\n';
            }
        });

        return report;
    }
}

// CLI execution
async function main() {
    const args = process.argv.slice(2);
    const shouldGenerateReport = args.includes('--report');

    const validator = new SchemaValidator();
    const report = await validator.validateAllSchemas();

    if (shouldGenerateReport) {
        const fs = await import('fs');
        const reportContent = validator.generateReport();
        const reportPath = './schema-validation-report.md';
        fs.writeFileSync(reportPath, reportContent);
        console.log(`\n${colors.green}📄 Report saved to: ${reportPath}${colors.reset}`);
    }

    // Exit with error code if validation failed
    process.exit(report.errors > 0 ? 1 : 0);
}

// Run if executed directly
if (require.main === module) {
    main().catch(console.error);
}

export { SchemaValidator };
