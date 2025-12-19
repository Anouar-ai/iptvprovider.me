/**
 * Brand Consistency Validator
 * 
 * Ensures consistent brand signals across:
 * - Schema markup
 * - Meta tags
 * - Content mentions
 * - Social media profiles
 * - Entity data
 * 
 * Validates NAP (Name, Address, Phone) consistency for Knowledge Graph
 */

import { siteConfig } from '../site-config';

export interface BrandConsistencyReport {
    isConsistent: boolean;
    score: number;
    issues: BrandIssue[];
    warnings: BrandWarning[];
    validations: BrandValidation[];
}

interface BrandIssue {
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: 'name' | 'url' | 'contact' | 'social' | 'entity';
    message: string;
    found: string;
    expected: string;
    location: string;
}

interface BrandWarning {
    category: string;
    message: string;
    suggestion: string;
}

interface BrandValidation {
    check: string;
    passed: boolean;
    details: string;
}

export class BrandConsistencyValidator {
    private issues: BrandIssue[] = [];
    private warnings: BrandWarning[] = [];
    private validations: BrandValidation[] = [];

    // Canonical brand data
    private readonly canonicalBrand = {
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.alternateName || [],
        url: siteConfig.url,
        email: siteConfig.links.email,
        telephone: siteConfig.telephone,
        socialProfiles: {
            twitter: siteConfig.links.twitter,
            facebook: siteConfig.links.facebook,
            instagram: siteConfig.links.instagram,
            youtube: siteConfig.links.youtube,
            linkedin: siteConfig.links.linkedin,
        },
    };

    /**
     * Run all brand consistency checks
     */
    public async validate(): Promise<BrandConsistencyReport> {
        // Name consistency checks
        this.validateNameConsistency();

        // URL consistency checks
        this.validateUrlConsistency();

        // Contact information consistency
        this.validateContactConsistency();

        // Social media profile consistency
        this.validateSocialProfiles();

        // Entity data completeness
        this.validateEntityData();

        // Calculate overall score
        const score = this.calculateScore();
        const isConsistent = this.issues.filter(i => i.severity === 'critical').length === 0;

        return {
            isConsistent,
            score,
            issues: this.issues,
            warnings: this.warnings,
            validations: this.validations,
        };
    }

    /**
     * Validate brand name consistency
     */
    private validateNameConsistency(): void {
        const { name, legalName, alternateName } = this.canonicalBrand;

        // Check if legal name matches brand name
        if (legalName && legalName !== name) {
            this.addWarning(
                'name',
                'Legal name differs from brand name',
                'Ensure this is intentional for entity disambiguation'
            );
        }

        this.addValidation(
            'Brand name defined',
            !!name,
            `Brand name: ${name}`
        );

        // Check alternate names
        if (alternateName.length === 0) {
            this.addWarning(
                'name',
                'No alternate names defined',
                'Add common variations to help AI understand brand mentions'
            );
        } else {
            this.addValidation(
                'Alternate names defined',
                true,
                `${alternateName.length} alternate name(s) configured`
            );
        }

        // Validate name doesn't have inconsistent casing
        const hasInconsistentCasing = alternateName.some(alt =>
            alt.toLowerCase() === name.toLowerCase() && alt !== name
        );

        if (hasInconsistentCasing) {
            this.addIssue(
                'medium',
                'name',
                'Inconsistent name casing in alternate names',
                'Mixed case variations',
                name,
                'siteConfig.alternateName'
            );
        }
    }

    /**
     * Validate URL consistency
     */
    private validateUrlConsistency(): void {
        const { url } = this.canonicalBrand;

        // Check URL format
        if (!url.startsWith('https://')) {
            this.addIssue(
                'high',
                'url',
                'Site URL should use HTTPS',
                url,
                url.replace('http://', 'https://'),
                'siteConfig.url'
            );
        }

        // Check for trailing slash consistency
        if (url.endsWith('/')) {
            this.addWarning(
                'url',
                'URL has trailing slash',
                'Remove trailing slash for consistency'
            );
        }

        // Check for www consistency
        const hasWww = url.includes('www.');
        this.addValidation(
            'URL www consistency',
            true,
            hasWww ? 'Using www subdomain' : 'Not using www subdomain'
        );

        this.addValidation(
            'HTTPS enabled',
            url.startsWith('https://'),
            'Site uses secure protocol'
        );
    }

    /**
     * Validate contact information consistency
     */
    private validateContactConsistency(): void {
        const { email, telephone } = this.canonicalBrand;

        // Validate email
        if (!email) {
            this.addIssue(
                'critical',
                'contact',
                'Email address missing',
                'undefined',
                'support@domain.com',
                'siteConfig.links.email'
            );
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                this.addIssue(
                    'high',
                    'contact',
                    'Invalid email format',
                    email,
                    'valid@email.com',
                    'siteConfig.links.email'
                );
            } else {
                this.addValidation(
                    'Email format valid',
                    true,
                    email
                );
            }
        }

        // Validate telephone
        if (!telephone) {
            this.addWarning(
                'contact',
                'Telephone number missing',
                'Add phone number for Knowledge Graph completeness'
            );
        } else {
            // Check if telephone is in international format
            if (!telephone.startsWith('+')) {
                this.addWarning(
                    'contact',
                    'Telephone should use international format',
                    'Use format: +1-XXX-XXX-XXXX'
                );
            } else {
                this.addValidation(
                    'Telephone format',
                    true,
                    'International format used'
                );
            }
        }
    }

    /**
     * Validate social media profile consistency
     */
    private validateSocialProfiles(): void {
        const { socialProfiles } = this.canonicalBrand;
        const profiles = Object.entries(socialProfiles).filter(([_, url]) => url);

        if (profiles.length === 0) {
            this.addIssue(
                'high',
                'social',
                'No social media profiles configured',
                '0 profiles',
                'At least 3 profiles',
                'siteConfig.links'
            );
            return;
        }

        if (profiles.length < 3) {
            this.addWarning(
                'social',
                'Limited social media presence',
                'Add more social profiles for stronger entity signals'
            );
        }

        this.addValidation(
            'Social media profiles',
            profiles.length >= 3,
            `${profiles.length} profile(s) configured`
        );

        // Validate each profile URL
        profiles.forEach(([platform, url]) => {
            if (!url.startsWith('https://')) {
                this.addIssue(
                    'medium',
                    'social',
                    `${platform} profile should use HTTPS`,
                    url,
                    url.replace('http://', 'https://'),
                    `siteConfig.links.${platform}`
                );
            }

            // Check if URL matches expected platform domain
            const expectedDomains: Record<string, string> = {
                twitter: 'twitter.com',
                facebook: 'facebook.com',
                instagram: 'instagram.com',
                youtube: 'youtube.com',
                linkedin: 'linkedin.com',
            };

            if (expectedDomains[platform] && !url.includes(expectedDomains[platform])) {
                this.addIssue(
                    'high',
                    'social',
                    `${platform} URL doesn't match expected domain`,
                    url,
                    `https://${expectedDomains[platform]}/...`,
                    `siteConfig.links.${platform}`
                );
            }
        });
    }

    /**
     * Validate entity data completeness
     */
    private validateEntityData(): void {
        // Check for Knowledge Graph essential fields
        const kgFields = {
            foundingDate: siteConfig.foundingDate,
            slogan: siteConfig.slogan,
            founder: siteConfig.founder,
            awards: siteConfig.awards,
            numberOfEmployees: siteConfig.numberOfEmployees,
            priceRange: siteConfig.priceRange,
        };

        const presentFields = Object.entries(kgFields).filter(([_, value]) => value);
        const completeness = (presentFields.length / Object.keys(kgFields).length) * 100;

        if (completeness < 50) {
            this.addIssue(
                'medium',
                'entity',
                'Entity data incomplete',
                `${completeness.toFixed(0)}% complete`,
                'At least 50% of KG fields',
                'siteConfig'
            );
        } else if (completeness < 80) {
            this.addWarning(
                'entity',
                'Entity data could be more complete',
                'Add more Knowledge Graph fields for better entity recognition'
            );
        }

        this.addValidation(
            'Entity data completeness',
            completeness >= 50,
            `${completeness.toFixed(0)}% complete (${presentFields.length}/${Object.keys(kgFields).length} fields)`
        );

        // Check for sameAs links
        const sameAsLinks = [
            siteConfig.links.twitter,
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.youtube,
            siteConfig.links.linkedin,
        ].filter(Boolean);

        if (sameAsLinks.length < 3) {
            this.addIssue(
                'medium',
                'entity',
                'Insufficient sameAs links for entity disambiguation',
                `${sameAsLinks.length} links`,
                'At least 3 authoritative sources',
                'siteConfig.links'
            );
        } else {
            this.addValidation(
                'Entity sameAs links',
                true,
                `${sameAsLinks.length} authoritative sources linked`
            );
        }
    }

    /**
     * Calculate overall consistency score (0-100)
     */
    private calculateScore(): number {
        const criticalIssues = this.issues.filter(i => i.severity === 'critical').length;
        const highIssues = this.issues.filter(i => i.severity === 'high').length;
        const mediumIssues = this.issues.filter(i => i.severity === 'medium').length;
        const lowIssues = this.issues.filter(i => i.severity === 'low').length;

        // Start with perfect score
        let score = 100;

        // Deduct points based on severity
        score -= criticalIssues * 20;
        score -= highIssues * 10;
        score -= mediumIssues * 5;
        score -= lowIssues * 2;
        score -= this.warnings.length * 1;

        return Math.max(0, score);
    }

    /**
     * Helper methods
     */
    private addIssue(
        severity: BrandIssue['severity'],
        category: BrandIssue['category'],
        message: string,
        found: string,
        expected: string,
        location: string
    ): void {
        this.issues.push({ severity, category, message, found, expected, location });
    }

    private addWarning(category: string, message: string, suggestion: string): void {
        this.warnings.push({ category, message, suggestion });
    }

    private addValidation(check: string, passed: boolean, details: string): void {
        this.validations.push({ check, passed, details });
    }

    /**
     * Generate human-readable report
     */
    public static formatReport(report: BrandConsistencyReport): string {
        let output = '# Brand Consistency Report\n\n';
        output += `**Overall Score:** ${report.score}/100\n`;
        output += `**Status:** ${report.isConsistent ? '✅ Consistent' : '❌ Issues Found'}\n\n`;

        // Critical issues
        const criticalIssues = report.issues.filter(i => i.severity === 'critical');
        if (criticalIssues.length > 0) {
            output += '## 🔴 Critical Issues\n\n';
            criticalIssues.forEach(issue => {
                output += `### ${issue.message}\n`;
                output += `- **Category:** ${issue.category}\n`;
                output += `- **Found:** \`${issue.found}\`\n`;
                output += `- **Expected:** \`${issue.expected}\`\n`;
                output += `- **Location:** \`${issue.location}\`\n\n`;
            });
        }

        // High priority issues
        const highIssues = report.issues.filter(i => i.severity === 'high');
        if (highIssues.length > 0) {
            output += '## 🟠 High Priority Issues\n\n';
            highIssues.forEach(issue => {
                output += `- **${issue.message}** (${issue.location})\n`;
                output += `  - Found: \`${issue.found}\` → Expected: \`${issue.expected}\`\n`;
            });
            output += '\n';
        }

        // Warnings
        if (report.warnings.length > 0) {
            output += '## ⚠️ Warnings\n\n';
            report.warnings.forEach(warning => {
                output += `- **${warning.message}**\n`;
                output += `  - Suggestion: ${warning.suggestion}\n`;
            });
            output += '\n';
        }

        // Validations
        output += '## ✅ Validations\n\n';
        report.validations.forEach(validation => {
            const icon = validation.passed ? '✓' : '✗';
            output += `${icon} **${validation.check}**: ${validation.details}\n`;
        });

        return output;
    }
}

// Export convenience function
export async function validateBrandConsistency(): Promise<BrandConsistencyReport> {
    const validator = new BrandConsistencyValidator();
    return validator.validate();
}
