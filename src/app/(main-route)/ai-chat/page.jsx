"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mic, Plus } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"
// import { useDispatch } from "react-redux"
// import { useRouter } from "next/navigation"
// import { setChattedTrue } from "@/redux/features/aiSlice"

const AIChatPage = () => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    const [message, setMessage] = useState("")

    // const handleChatStart = () => {
    //     dispatch(setChattedTrue(true));
    //     router.push('/');
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(setChattedTrue(true));
        // router.push('/');
        // Handle chat submission
        console.log("Submitted message:", message)
        setMessage("")
    }

    return (
        <div className="min-h-screen pt-5 pb-20">
            <HomeContainer>
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="relative mb-4">
                        <Image src="/image/logo2.png" alt="LA Eatery Logo" width={1920} height={1080} className="object-contain w-96" />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-semibold text-gray-800 text-center">LA Restaurant Concierge</h1>
                    <p className="text-xl text-gray-700 mt-1 mb-8 text-center">-Tailored by AI-</p>

                    {/* Prompt */}
                    <h2 className="text-2xl text-gray-700 mb-6 text-center">How can I help you today?</h2>

                    {/* Chat Input */}
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-16">
                        <div className="relative bg-white rounded-3xl shadow-md px-5 pb-3">

                            {/* Input field */}
                            <input
                                type="text"
                                placeholder="Start Chatting"
                                className="w-full placeholder:text-gray-400 text-sm bg-transparent outline-none pt-6 text-gray-800 "
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            {/* Bottom Icons */}
                            <div className="flex items-center justify-between mt-3">
                                {/* Left Icon - Upload */}
                                <button type="button" className="text-gray-600 cursor-pointer">
                                    <Plus className="h-5 w-5" />
                                </button>

                                {/* Right Icon - Mic */}
                                <button
                                    type="button"
                                    className="p-2 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
                                >
                                    <Mic className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </form>


                    {/* Discover Section */}
                    <div className="mt-8 text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-10">Discover LA's Hottest Restaurants</h2>

                        <Link href="/ai-picks">
                            <button className="bg-[#5C5C5C] cursor-pointer hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-colors">
                                Explore AI Picks
                            </button>
                        </Link>
                    </div>
                </div>
            </HomeContainer>
        </div>
    )
}

export default AIChatPage
