import HomeContainer from "@/components/home-container/HomeContainer";

const AboutUs = () => {
    return (
        <div>
            <div className=""></div>
            <HomeContainer>

                <section className="text-[#333333] py-10  space-y-12">
                    <h1 className="text-center text-[#0A0A0A] text-4xl font-bold mb-16 font-poltawski">About Us</h1>

                    <div className="space-y-4">
                        <h2 className="text-[22px] font-semibold">Discover the Way LA Eats</h2>
                        <p className=" text-sm leading-8">
                            Welcome to LAEATERY, your modern guide to the ever-evolving food
                            scene in Los Angeles. We're not just another restaurant directory —
                            we're your companion in finding the right spot, every time.
                        </p>
                        <p className=" text-sm leading-8">
                            Los Angeles is a city of hidden gems, bold flavors, and
                            unforgettable dining vibes. With hundreds of new places opening
                            each year, keeping up can be overwhelming. That’s where we come in.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            🍽️ What We Do
                        </h2>
                        <p className=" text-sm leading-8">
                            Born from a passion for fine jewelry, Cathy’s Jewelry was founded
                            to offer unique, high-quality designs that blend tradition with
                            modern artistry. Our team of expert jewelers and designers work
                            meticulously to craft pieces that are as special as the moments
                            they celebrate.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                        💬 What We Offer
                        </h2>
                        <ul className="list-disc text-sm ml-6  space-y-4">
                            <li>A rooftop with city views</li>
                            <li>A cozy brunch spot in Silver Lake</li>
                            <li>The latest viral sushi bar</li>
                            <li>Or just a solid taco at 2am</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                        🌟 Why LAEATERY?
                        </h2>
                        <p className=" text-sm leading-8">
                            We're not trying to list every restaurant. We're focused on
                            surfacing the ones that matter right now — where locals are going,
                            what’s buzzing on social media, and which tables are worth your
                            time. From hole-in-the-wall joints to luxe date-night spots, every
                            listing is handpicked or algorithmically surfaced to make sure
                            you’re always in the know.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                        🎯 Our Mission
                        </h2>
                        <p className=" text-sm leading-8">
                            To simplify the way people discover food in Los Angeles by
                            connecting taste, mood, and moment — one vibe at a time.
                        </p>
                    </div>
                </section>
            </HomeContainer>
        </div>
    );
};

export default AboutUs;
