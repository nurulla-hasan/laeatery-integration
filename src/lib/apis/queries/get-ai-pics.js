import { api }  from "../authApis/axiosInstance"


export const getAiPicks = async () => {
    try {
        const res =await api.get('https://ai.laeatery.com/trending')
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}