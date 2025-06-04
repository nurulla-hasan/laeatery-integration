"use client"
import Link from "next/link";
import HomeContainer from "../HomeContainer";
import { motion } from 'framer-motion';

const CuisineSection = () => {
  return (
    <section className="py-16">
      <HomeContainer>
        <div className="flex flex-col md:flex-row-reverse gap-">
          {/* Left Image Section */}
          <motion.div
            className="overflow-hidden flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/image/cuisine.png"
              alt="Rooftop restaurant with city view"
              className="w-full h-full object-cover "
            />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="relative overflow-hidden flex-1 flex items-center "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="/image/cuisine (1).png"
                alt="Restaurant atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/85"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 md:p-10">
              <motion.h2
                className="text-3xl md:text-4xl font-poltawski font-extrabold text-[#0A0A0A] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Crave by Cuisine
              </motion.h2>

              <motion.p
                className="text-[#333333] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                From spicy street tacos to elegant sushi platters — discover your favorite flavors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/cuisine"
                  className="inline-block px-7 py-3 border border-[#B3B3B3] text-xs rounded-sm hover:text-[#0A0A0A] hover:bg-inherit bg-black text-white transition-colors duration-300"
                >
                  Explore Cuisines
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </HomeContainer>
    </section>
  );
};

export default CuisineSection;
