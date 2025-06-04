import { ChevronDown, ChevronUp } from 'lucide-react';
import { cuisines, neighborhoods, vibes } from "@/lib/data"
import { useState } from 'react';

const FindFilter = () => {

    // Toggle expanded state for a section
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    // State to track which filter sections are expanded
    const [expandedSections, setExpandedSections] = useState({
        neighborhood: false,
        cuisine: false,
        vibe: false,
    })



    return (
        <>
            <div className="bg-white  border md:h-[94vh] overflow-auto scrl-hide rounded-xl p-5">
                {/* Neighborhood filter - Collapsible */}
                <div className="mb-6">
                    <button
                        className="flex items-center justify-between w-full text-[#333333] text-md font-medium mb-5"
                        onClick={() => toggleSection("neighborhood")}
                    >
                        <span>Neighborhood</span>
                        {expandedSections.neighborhood ? (
                            <ChevronUp className="h-5 w-5 text-[#333333] cursor-pointer" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-[#333333] cursor-pointer" />
                        )}
                    </button>

                    {expandedSections.neighborhood && (
                        <div className="space-y-4">
                            {neighborhoods.map((item) => (
                                <div key={item.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`neighborhood-${item.id}`}
                                        className="h-4 w-4 rounded border-gray-600 text-[#333333] focus:ring-0 cursor-pointer"
                                    />
                                    <label htmlFor={`neighborhood-${item.id}`} className="ml-2 text-sm text-[#333333]">
                                        {item.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cuisine filter - Collapsible */}
                <div className="mb-6">
                    <button
                        className="flex items-center justify-between w-full text-[#333333] text-md font-medium mb-5"
                        onClick={() => toggleSection("cuisine")}
                    >
                        <span>Cuisine</span>
                        {expandedSections.cuisine ? (
                            <ChevronUp className="h-5 w-5 text-[#333333] cursor-pointer" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-[#333333] cursor-pointer" />
                        )}
                    </button>

                    {expandedSections.cuisine && (
                        <div className="space-y-4">
                            {cuisines.map((item) => (
                                <div key={item.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`cuisine-${item.id}`}
                                        defaultChecked={item.checked}
                                        className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0 cursor-pointer"
                                    />
                                    <label htmlFor={`cuisine-${item.id}`} className="ml-2 text-sm text-[#333333]">
                                        {item.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Vibe filter - Collapsible */}
                <div className="">
                    <button
                        className="flex items-center justify-between w-full text-[#333333] text-md font-medium mb-"
                        onClick={() => toggleSection("vibe")}
                    >
                        <span>Vibe</span>
                        {expandedSections.vibe ? (
                            <ChevronUp className="h-5 w-5 text-[#333333] cursor-pointer" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-[#333333] cursor-pointer" />
                        )}
                    </button>

                    {expandedSections.vibe && (
                        <div className="space-y-4 mt-5">
                            {vibes.map((item) => (
                                <div key={item.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`vibe-${item.id}`}
                                        defaultChecked={item.checked}
                                        className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0 cursor-pointer"
                                    />
                                    <label htmlFor={`vibe-${item.id}`} className="ml-2 text-sm text-[#333333]">
                                        {item.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FindFilter;