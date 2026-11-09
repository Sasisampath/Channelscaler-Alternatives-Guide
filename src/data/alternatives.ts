import { channelscalerGuide } from "@/data/channelscaler-alternatives";

export type AlternativeArticle = {
  slug: string; title: string; description: string; image: string;
  wordCount: number; author?: {name: string; role?: string; photo?: string};
  publishedAt?: string; updatedAt?: string;
};
export const readingMinutes = (wordCount: number) => Math.max(1, Math.ceil(wordCount / 225));
export const alternativeArticles = [channelscalerGuide];
