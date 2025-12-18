import { GoogleGenAI } from "@google/genai";
import { CardData } from "../types";

const GEMINI_API_KEY = process.env.API_KEY || '';

export const analyzeCardWithGemini = async (card: CardData): Promise<string> => {
  if (!GEMINI_API_KEY) {
    return "API Key 未配置，无法获取 AI 洞察。";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    
    // Using Flash for speed as this is an interactive UI element
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        请分析 "${card.title}" (${card.subtitle}) 这个概念在当前全球 AI 军备竞赛中的重要性。
        
        基于以下理论背景:
        "${card.description}"
        "${card.insight}"

        任务: 请用中文提供一段简短有力（约 80-100 字）的深度解析，重点提及一个近期的真实案例或趋势，来证明为什么这张“牌”在当下至关重要。侧重于地缘政治或经济影响。
        
        请直接输出纯文本，不要使用 Markdown 格式。
      `,
    });

    return response.text || "暂无分析结果。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "无法连接到 AI 分析师，请稍后再试。";
  }
};