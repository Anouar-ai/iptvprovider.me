
import { Suspense } from "react";
import SemanticContent from "./SemanticContent";
import { generateSemanticContent } from "@/lib/vector-seo";

export default async function SemanticContentContainer() {
    const semanticContent = await generateSemanticContent("Best IPTV Provider");

    return (
        <SemanticContent
            primaryEntity={semanticContent.primaryEntity}
            relatedEntities={semanticContent.relatedEntities}
            semanticClusters={semanticContent.semanticClusters}
            contextualKeywords={semanticContent.contextualKeywords}
        />
    );
}
