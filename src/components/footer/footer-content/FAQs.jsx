"use client"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"

const faqs = [
  {
    question: "What is LAEATERY?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
  {
    question: "Do I need to create an account to use LAEATERY?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
  {
    question: "How do I search for restaurants?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
  {
    question: "Are all restaurants in LA listed?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
  {
    question: "Can I book a table directly through LAEATERY?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
  {
    question: "How do you decide what’s trending?",
    answer:
      "LAEATERY is a restaurant discovery platform focused on helping users find trending, vibe-based, and cuisine-specific dining spots across Los Angeles. We update trending and featured restaurants regularly, and always aim to reflect what’s hot and relevant in real time.",
  },
]

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="min-h-screen text-[#333333]">
      <div className="" />
      <HomeContainer>
        <section className="py-10 space-y-10">
          <h1 className="text-center text-[#0A0A0A] text-4xl font-bold font-poltawski">FAQs</h1>
          <p className="text-center text-sm  max-w-2xl mx-auto leading-7">
            Welcome to the LAEATERY FAQ! Here you’ll find answers to common questions about using our platform to discover the best restaurants in Los Angeles.
          </p>

          <div className="space-y-3 mt-10">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#333] rounded-lg"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronDown className="w-5 h-5 border bg-white text-black rounded-full" />
                  ) : (
                    <ChevronRight className="w-5 h-5 border  rounded-full" />
                  )}
                </button>

                {openIndex === index && item.answer && (
                  <div className="px-5 pb-4 text-sm  leading-7">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </HomeContainer>
    </div>
  )
}

export default Faqs
