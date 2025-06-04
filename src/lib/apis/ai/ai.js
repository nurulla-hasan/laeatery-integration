import { api } from "../auth/axiosInstance";

export const getAiResponse = async (messagePayload) => {
    try {
        const res = await api.post("http://119.148.56.252:5000/chat", messagePayload); 
        return res.data;
    } catch (error) {
        console.error("Error getting AI response:", error);
        throw error;
    }
};