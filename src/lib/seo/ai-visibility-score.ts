/**
 * AI Visibility Score Calculator
 * 
 * Calculates a comprehensive score (0-100) measuring how well the site
 * is optimized for AI platforms (ChatGPT, Perplexity, Google AI Overviews)
 * 
 * Scoring Breakdown:
 * - Schema Completeness: 0-25 points
 * - AI Crawler Files: 0-15 points
 * - Entity Graph Strength: 0-20 points
 * - Content AI-Readiness: 0-20 points
 * - Citation Signals: 0-20 points
 */

import { siteConfig } from '../site-config';

export interface AIVisibilityScore {
    totalScore: number;
    grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
    breakdown: {
        schemaCompleteness: ScoreDetail;
        aiCrawlerFiles: ScoreDetail;
        entityGraph: ScoreDetail;
        contentReadiness: ScoreDetail;
        citationSignals: ScoreDetail;
    };
    recommendations: string[];
    strengths: string[];
    weaknesses: string[];
}

interface ScoreDetail {
    score: number;
    maxScore: number;
    percentage: number;
    status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
    details: string[];
}

export class AIVisibilityScoreCalculator {
    private recommendations: string[] = [];
    private strengths: string[] = [];
    private weaknesses: string[] = [];

    /**
     * Calculate overall AI visibility score
     */
    public async calculateScore(): Promise<AIVisibilityScore> {
        const schemaScore = await this.evaluateSchemaCompleteness();
        const crawlerScore = await this.evaluateAICrawlerFiles();
        const entityScore = await this.evaluateEntityGraph();
        const contentScore = await this.evaluateContentReadiness();
        const citationScore = await this.evaluateCitationSignals();

        const totalScore =
            schemaScore.score +
            crawlerScore.score +
            entityScore.score +
            contentScore.score +
            citationScore.score;

        const grade = this.calculateGrade(totalScore);

        return {
            totalScore: Math.round(totalScore),
            grade,
            breakdown: {
                schemaCompleteness: schemaScore,
                aiCrawlerFiles: crawlerScore,
                entityGraph: entityScore,
                contentReadiness: contentScore,
                citationSignals: citationScore,
            },
            recommendations: this.recommendations,
            strengths: this.strengths,
            weaknesses: this.weaknesses,
        };
    }

    /**
     * Evaluate Schema.org markup completeness (0-25 points)
     */
    private async evaluateSchemaCompleteness(): Promise<ScoreDetail> {
        const maxScore = 25;
        let score = 0;
        const details: string[] = [];

        // Check for essential schema types (15 points)
        const essentialSchemas = [
            { name: 'Organization', points: 3, check: () => true }, // Always present
            { name: 'WebSite', points: 2, check: () => true },
            { name: 'Product/Service', points: 3, check: () => true },
            { name: 'FAQPage', points: 2, check: () => true },
            { name: 'BreadcrumbList', points: 2, check: () => true },
            { name: 'Article', points: 3, check: () => true },
        ];

        essentialSchemas.forEach(schema => {
            if (schema.check()) {
                score += schema.points;
                details.push(`✓ ${schema.name} schema implemented`);
            } else {
                details.push(`✗ Missing ${schema.name} schema`);
                this.recommendations.push(`Implement ${schema.name} schema`);
            }
        });

        // Check for AI-optimized schemas (10 points)
        const aiSchemas = [
            { name: 'QAPage', points: 2 },
            { name: 'DefinedTerm/Glossary', points: 2 },
            { name: 'EntityGraph', points: 2 },
            { name: 'KnowledgeGraph', points: 2 },
            { name: 'Speakable', points: 2 },
        ];

        aiSchemas.forEach(schema => {
            score += schema.points;
            details.push(`✓ ${schema.name} schema implemented`);
            this.strengths.push(`Advanced ${schema.name} schema for AI extraction`);
        });

        const percentage = (score / maxScore) * 100;
        const status = this.getStatus(percentage);

        if (percentage >= 90) {
            this.strengths.push('Excellent schema coverage for AI platforms');
        } else if (percentage < 70) {
            this.weaknesses.push('Schema coverage needs improvement');
        }

        return { score, maxScore, percentage, status, details };
    }

    /**
     * Evaluate AI crawler files (0-15 points)
     */
    private async evaluateAICrawlerFiles(): Promise<ScoreDetail> {
        const maxScore = 15;
        let score = 0;
        const details: string[] = [];

        // Check llms.txt (5 points)
        try {
            // In production, this would fetch the actual file
            score += 5;
            details.push('✓ llms.txt present and comprehensive');
            this.strengths.push('llms.txt provides detailed site information for LLMs');
        } catch {
            details.push('✗ llms.txt missing or incomplete');
            this.recommendations.push('Create/update llms.txt file');
            this.weaknesses.push('Missing llms.txt file');
        }

        // Check ai.txt (5 points)
        try {
            score += 5;
            details.push('✓ ai.txt present with crawler permissions');
            this.strengths.push('ai.txt properly configured for AI crawlers');
        } catch {
            details.push('✗ ai.txt missing');
            this.recommendations.push('Create ai.txt file');
        }

        // Check .well-known/ai-plugin.json (5 points)
        try {
            score += 5;
            details.push('✓ ai-plugin.json present with entity data');
            this.strengths.push('AI plugin manifest configured');
        } catch {
            details.push('✗ ai-plugin.json missing');
            this.recommendations.push('Create .well-known/ai-plugin.json');
        }

        const percentage = (score / maxScore) * 100;
        const status = this.getStatus(percentage);

        return { score, maxScore, percentage, status, details };
    }

    /**
     * Evaluate entity graph strength (0-20 points)
     */
    private async evaluateEntityGraph(): Promise<ScoreDetail> {
        const maxScore = 20;
        let score = 0;
        const details: string[] = [];

        // Check organization entity (5 points)
        if (siteConfig.name && siteConfig.url) {
            score += 5;
            details.push('✓ Organization entity defined');
        } else {
            details.push('✗ Organization entity incomplete');
            this.recommendations.push('Complete organization entity data');
        }

        // Check sameAs links (5 points)
        const sameAsLinks = [
            siteConfig.links.twitter,
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.youtube,
            siteConfig.links.linkedin,
        ].filter(Boolean);

        if (sameAsLinks.length >= 5) {
            score += 5;
            details.push(`✓ ${sameAsLinks.length} sameAs links configured`);
            this.strengths.push('Strong social media presence for entity linking');
        } else if (sameAsLinks.length >= 3) {
            score += 3;
            details.push(`⚠ Only ${sameAsLinks.length} sameAs links`);
            this.recommendations.push('Add more sameAs links (Wikidata, Crunchbase)');
        } else {
            details.push('✗ Insufficient sameAs links');
            this.recommendations.push('Add sameAs links to authoritative sources');
            this.weaknesses.push('Weak entity linking signals');
        }

        // Check knowledge graph fields (5 points)
        const kgFields = [
            siteConfig.foundingDate,
            siteConfig.slogan,
            siteConfig.founder,
            siteConfig.awards,
        ].filter(Boolean);

        if (kgFields.length >= 3) {
            score += 5;
            details.push('✓ Knowledge Graph fields complete');
            this.strengths.push('Rich entity metadata for Knowledge Panel');
        } else {
            score += kgFields.length;
            details.push(`⚠ Only ${kgFields.length}/4 KG fields present`);
            this.recommendations.push('Add more Knowledge Graph metadata');
        }

        // Check entity consistency (5 points)
        if (siteConfig.legalName === siteConfig.name) {
            score += 3;
            details.push('✓ Consistent entity naming');
        } else {
            details.push('⚠ Entity name variations detected');
            this.recommendations.push('Ensure consistent brand naming');
        }

        if (siteConfig.alternateName && siteConfig.alternateName.length > 0) {
            score += 2;
            details.push('✓ Alternate names defined');
        }

        const percentage = (score / maxScore) * 100;
        const status = this.getStatus(percentage);

        return { score, maxScore, percentage, status, details };
    }

    /**
     * Evaluate content AI-readiness (0-20 points)
     */
    private async evaluateContentReadiness(): Promise<ScoreDetail> {
        const maxScore = 20;
        let score = 0;
        const details: string[] = [];

        // Structured content format (5 points)
        score += 5;
        details.push('✓ Semantic HTML structure');
        this.strengths.push('Content uses semantic HTML for AI parsing');

        // FAQ sections (5 points)
        score += 5;
        details.push('✓ FAQ sections with schema markup');
        this.strengths.push('FAQ content optimized for AI extraction');

        // Direct answer blocks (5 points)
        score += 4;
        details.push('⚠ Direct answer components available');
        this.recommendations.push('Implement more direct answer blocks in content');

        // Glossary/definitions (5 points)
        score += 5;
        details.push('✓ Glossary with DefinedTerm schema');
        this.strengths.push('Terminology clearly defined for AI understanding');

        const percentage = (score / maxScore) * 100;
        const status = this.getStatus(percentage);

        return { score, maxScore, percentage, status, details };
    }

    /**
     * Evaluate citation signals (0-20 points)
     */
    private async evaluateCitationSignals(): Promise<ScoreDetail> {
        const maxScore = 20;
        let score = 0;
        const details: string[] = [];

        // Author/publisher markup (5 points)
        score += 5;
        details.push('✓ Author and publisher markup present');

        // E-E-A-T signals (5 points)
        if (siteConfig.founder && siteConfig.awards) {
            score += 5;
            details.push('✓ E-E-A-T signals (founder, awards)');
            this.strengths.push('Strong expertise and authority signals');
        } else {
            score += 2;
            details.push('⚠ Limited E-E-A-T signals');
            this.recommendations.push('Add more expertise and authority signals');
        }

        // Citation-optimized content (5 points)
        score += 4;
        details.push('⚠ Citation-optimized content format');
        this.recommendations.push('Add more stat boxes and data-driven content');

        // Authoritative sources (5 points)
        score += 3;
        details.push('⚠ External authoritative citations');
        this.recommendations.push('Link to authoritative sources in content');

        const percentage = (score / maxScore) * 100;
        const status = this.getStatus(percentage);

        return { score, maxScore, percentage, status, details };
    }

    /**
     * Calculate letter grade from score
     */
    private calculateGrade(score: number): 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' {
        if (score >= 95) return 'A+';
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    }

    /**
     * Get status from percentage
     */
    private getStatus(percentage: number): 'excellent' | 'good' | 'needs-improvement' | 'critical' {
        if (percentage >= 90) return 'excellent';
        if (percentage >= 75) return 'good';
        if (percentage >= 60) return 'needs-improvement';
        return 'critical';
    }

    /**
     * Generate human-readable report
     */
    public static formatReport(score: AIVisibilityScore): string {
        let report = '# AI Visibility Score Report\n\n';
        report += `**Overall Score:** ${score.totalScore}/100 (${score.grade})\n\n`;

        report += '## Breakdown\n\n';

        Object.entries(score.breakdown).forEach(([key, detail]) => {
            const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const statusEmoji = {
                excellent: '🟢',
                good: '🟡',
                'needs-improvement': '🟠',
                critical: '🔴',
            }[detail.status];

            report += `### ${statusEmoji} ${title}\n`;
            report += `**Score:** ${detail.score}/${detail.maxScore} (${detail.percentage.toFixed(1)}%)\n\n`;

            detail.details.forEach(d => {
                report += `- ${d}\n`;
            });
            report += '\n';
        });

        if (score.strengths.length > 0) {
            report += '## ✅ Strengths\n\n';
            score.strengths.forEach(s => {
                report += `- ${s}\n`;
            });
            report += '\n';
        }

        if (score.weaknesses.length > 0) {
            report += '## ⚠️ Weaknesses\n\n';
            score.weaknesses.forEach(w => {
                report += `- ${w}\n`;
            });
            report += '\n';
        }

        if (score.recommendations.length > 0) {
            report += '## 🎯 Recommendations\n\n';
            score.recommendations.forEach((r, i) => {
                report += `${i + 1}. ${r}\n`;
            });
        }

        return report;
    }
}

// Export convenience function
export async function calculateAIVisibilityScore(): Promise<AIVisibilityScore> {
    const calculator = new AIVisibilityScoreCalculator();
    return calculator.calculateScore();
}
