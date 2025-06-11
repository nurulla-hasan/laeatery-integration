import { api } from "../auth/axiosInstance";

export const getAiResponse = async (messagePayload) => {
    try {
        const res = await api.post("https://ai.laeatery.com/chat", messagePayload); 
        return res.data;
    } catch (error) {
        console.error("Error getting AI response:", error);
        throw error;
    }
};