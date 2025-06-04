"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const FilterCompo = ({ title, data }) => {

  const [selected, setSelected] = useState([])
  console.log(selected);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="overflow-auto scrl-hide rounded-xl p-5 bg-white"
    >
      <div>
        <button className="flex items-center justify-between w-full text-[#333333] text-md font-medium">
          {title}
        </button>

        <div className="space-y-4 mt-5">
          {data.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`${title}-${item.id}`}
                defaultChecked={item.checked}
                onChange={() => {
                  if (selected.includes(item.label)) {
                    setSelected(selected.filter((i) => i !== item.label))
                  } else {
                    setSelected([...selected, item.label])
                  }
                }}
                className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0 cursor-pointer"
              />
              <label htmlFor={`vibe-${item.id}`} className="ml-2 text-sm text-[#333333]">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default FilterCompo
