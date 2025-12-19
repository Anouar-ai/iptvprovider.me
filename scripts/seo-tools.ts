#!/usr/bin/env node
/**
 * SEO Tools CLI
 * 
 * Command-line interface for all branded SEO tools
 * 
 * Usage:
 *   npm run seo:validate     - Run schema validator
 *   npm run seo:score        - Calculate AI visibility score
 *   npm run seo:brand        - Check brand consistency
 *   npm run seo:all          - Run all checks
 */

import { SchemaValidator } from './validate-schemas';
import {
    AIVisibilityScoreCalculator,
    AIVisibilityScore
} from '../src/lib/seo/ai-visibility-score';
import {
    BrandConsistencyValidator,
    BrandConsistencyReport
} from '../src/lib/seo/brand-consistency-validator';

// ANSI colors
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

class SEOToolsCLI {
    /**
     * Run schema validation
     */
    async runSchemaValidation(): Promise<void> {
        console.log(`\n${colors.cyan}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
        console.log(`${colors.cyan}${colors.bright}  📋 SCHEMA VALIDATION${colors.reset}`);
        console.log(`${colors.cyan}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

        const validator = new SchemaValidator();
        await validator.validateAllSchemas();
    }

    /**
     * Calculate and display AI visibility score
     */
    async runAIVisibilityScore(): Promise<void> {
        console.log(`\n${colors.magenta}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
        console.log(`${colors.magenta}${colors.bright}  🤖 AI VISIBILITY SCORE${colors.reset}`);
        console.log(`${colors.magenta}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

        const calculator = new AIVisibilityScoreCalculator();
        const score = await calculator.calculateScore();

        this.displayAIScore(score);
    }

    /**
     * Check brand consistency
     */
    async runBrandConsistency(): Promise<void> {
        console.log(`\n${colors.blue}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
        console.log(`${colors.blue}${colors.bright}  🏷️  BRAND CONSISTENCY CHECK${colors.reset}`);
        console.log(`${colors.blue}${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

        const validator = new BrandConsistencyValidator();
        const report = await validator.validate();

        this.displayBrandReport(report);
    }

    /**
     * Run all SEO checks
     */
    async runAllChecks(): Promise<void> {
        console.log(`\n${colors.green}${colors.bright}╔══════════════════════════════════════════════════════════════╗${colors.reset}`);
        console.log(`${colors.green}${colors.bright}║                  BRANDED SEO AUDIT SUITE                     ║${colors.reset}`);
        console.log(`${colors.green}${colors.bright}╚══════════════════════════════════════════════════════════════╝${colors.reset}\n`);

        await this.runSchemaValidation();
        await this.runAIVisibilityScore();
        await this.runBrandConsistency();

        console.log(`\n${colors.green}${colors.bright}✅ All checks completed!${colors.reset}\n`);
    }

    /**
     * Display AI visibility score
     */
    private displayAIScore(score: AIVisibilityScore): void {
        // Overall score
        const gradeColor = this.getGradeColor(score.grade);
        console.log(`${colors.bright}Overall Score:${colors.reset} ${gradeColor}${score.totalScore}/100 (${score.grade})${colors.reset}\n`);

        // Breakdown
        console.log(`${colors.bright}Breakdown:${colors.reset}\n`);

        Object.entries(score.breakdown).forEach(([key, detail]) => {
            const title = this.formatTitle(key);
            const statusIcon = this.getStatusIcon(detail.status);
            const percentage = detail.percentage.toFixed(1);

            console.log(`${statusIcon} ${colors.bright}${title}${colors.reset}`);
            console.log(`   Score: ${detail.score}/${detail.maxScore} (${percentage}%)`);

            if (detail.details.length > 0) {
                detail.details.slice(0, 3).forEach(d => {
                    console.log(`   ${d}`);
                });
            }
            console.log('');
        });

        // Strengths
        if (score.strengths.length > 0) {
            console.log(`${colors.green}${colors.bright}✅ Strengths:${colors.reset}`);
            score.strengths.slice(0, 3).forEach(s => {
                console.log(`   • ${s}`);
            });
            console.log('');
        }

        // Top recommendations
        if (score.recommendations.length > 0) {
            console.log(`${colors.yellow}${colors.bright}🎯 Top Recommendations:${colors.reset}`);
            score.recommendations.slice(0, 5).forEach((r, i) => {
                console.log(`   ${i + 1}. ${r}`);
            });
            console.log('');
        }
    }

    /**
     * Display brand consistency report
     */
    private displayBrandReport(report: BrandConsistencyReport): void {
        const statusIcon = report.isConsistent ? '✅' : '❌';
        const scoreColor = report.score >= 80 ? colors.green : report.score >= 60 ? colors.yellow : colors.red;

        console.log(`${colors.bright}Status:${colors.reset} ${statusIcon} ${report.isConsistent ? 'Consistent' : 'Issues Found'}`);
        console.log(`${colors.bright}Score:${colors.reset} ${scoreColor}${report.score}/100${colors.reset}\n`);

        // Critical issues
        const criticalIssues = report.issues.filter(i => i.severity === 'critical');
        if (criticalIssues.length > 0) {
            console.log(`${colors.red}${colors.bright}🔴 Critical Issues (${criticalIssues.length}):${colors.reset}`);
            criticalIssues.forEach(issue => {
                console.log(`   • ${issue.message}`);
                console.log(`     Location: ${issue.location}`);
                console.log(`     Found: "${issue.found}" → Expected: "${issue.expected}"`);
            });
            console.log('');
        }

        // High priority issues
        const highIssues = report.issues.filter(i => i.severity === 'high');
        if (highIssues.length > 0) {
            console.log(`${colors.yellow}${colors.bright}🟠 High Priority (${highIssues.length}):${colors.reset}`);
            highIssues.slice(0, 3).forEach(issue => {
                console.log(`   • ${issue.message} (${issue.location})`);
            });
            console.log('');
        }

        // Warnings
        if (report.warnings.length > 0) {
            console.log(`${colors.yellow}⚠️  Warnings (${report.warnings.length}):${colors.reset}`);
            report.warnings.slice(0, 3).forEach(warning => {
                console.log(`   • ${warning.message}`);
            });
            console.log('');
        }

        // Validations summary
        const passedValidations = report.validations.filter(v => v.passed).length;
        console.log(`${colors.green}✓ Passed Validations: ${passedValidations}/${report.validations.length}${colors.reset}\n`);
    }

    /**
     * Helper methods
     */
    private getGradeColor(grade: string): string {
        if (grade === 'A+' || grade === 'A') return colors.green;
        if (grade === 'B') return colors.yellow;
        return colors.red;
    }

    private getStatusIcon(status: string): string {
        const icons: Record<string, string> = {
            excellent: '🟢',
            good: '🟡',
            'needs-improvement': '🟠',
            critical: '🔴',
        };
        return icons[status] || '⚪';
    }

    private formatTitle(key: string): string {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }
}

// Main CLI execution
async function main() {
    const args = process.argv.slice(2);
    const command = args[0] || 'all';

    const cli = new SEOToolsCLI();

    try {
        switch (command) {
            case 'validate':
            case 'schema':
                await cli.runSchemaValidation();
                break;

            case 'score':
            case 'ai':
                await cli.runAIVisibilityScore();
                break;

            case 'brand':
            case 'consistency':
                await cli.runBrandConsistency();
                break;

            case 'all':
            default:
                await cli.runAllChecks();
                break;
        }
    } catch (error) {
        console.error(`${colors.red}Error:${colors.reset}`, error);
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

export { SEOToolsCLI };
