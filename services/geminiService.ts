import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

// Helper to check if API key is present provided by environment or build
export const hasApiKey = (): boolean => !!apiKey;

export const getHealthAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "抱歉，系统未配置API密钥，无法提供智能咨询服务。";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using a model appropriate for text reasoning
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `你是一位来自“国善达健康管理公司”的资深健康顾问。
        你的职责是为用户提供初步的健康建议、生活方式指导和营养咨询。
        
        回答原则：
        1. 语气亲切、专业、鼓励性。
        2. 始终强调：你的建议不能替代专业医生的诊断。如果用户描述严重症状，请务必建议立刻就医。
        3. 结合“国善达”的业务（线上营养品、线下中医调理和康复服务）进行适当的软性推荐，但不要生硬推销。
        4. 回答简洁明了，使用中文。
        `,
        temperature: 0.7,
      }
    });

    return response.text || "抱歉，我暂时无法回答这个问题，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "智能顾问正在休息，请检查网络或稍后再试。";
  }
};