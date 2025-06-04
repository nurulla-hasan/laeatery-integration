"use client";
import Image from "next/image";
import HomeContainer from "../HomeContainer";
import { features } from "@/lib/data";
import { motion } from "framer-motion";

const FindGallery = () => {
  return (
    <section className="text-[#0A0A0A] py-16">
      <HomeContainer>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto font-semibold mb-6 font-latin leading-16">
            Discover LA&apos;s Hottest New Restaurants - Powered by AI
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-4xl overflow-hidden transition-transform hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative md:h-66 h-44 w-full">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="md:text-2xl text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[#333333] md:text-sm text-xs leading-6">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </HomeContainer>
    </section>
  );
};

export default FindGallery;
