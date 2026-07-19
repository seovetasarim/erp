import {
    animationParagraph,
    splitTextAnimation,
} from "@/hooks/useGsapAnimation";

// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

export const animationConfig: Record<string, (() => void)[]> = {
    "/": [animationParagraph, splitTextAnimation],
    "/ozellikler": [animationParagraph, splitTextAnimation],
    "/moduller": [animationParagraph, splitTextAnimation],
    "/fiyatlandirma": [animationParagraph, splitTextAnimation],
    "/sss": [animationParagraph, splitTextAnimation],
    "/iletisim": [animationParagraph, splitTextAnimation],
};
