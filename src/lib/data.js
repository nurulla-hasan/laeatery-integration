export const features = [
    {
        id: 1,
        image: "/image/findGallery (3).png",
        title: "Discover LA's Dining Scene",
        description:
            "Explore the most popular, trending, and hidden gem restaurants across Los Angeles. Whether you're after casual bites or upscale dining, we've got it covered.",
    },
    {
        id: 2,
        image: "/image/findGallery (2).png",
        title: "Find Spots by Vibe & Cuisine",
        description:
            "Search smarter with filters like mood, ambiance, and cuisine. From rooftop vibes to cozy corners, find places that fit your energy and cravings.",
    },
    {
        id: 3,
        image: "/image/findGallery (1).png",
        title: "Real-Time Trends & Hot Picks",
        description:
            "Stay in the loop with what's buzzing. Our Trend Score™ and curated lists keep you updated with new openings, viral hotspots, and crowd favorites.",
    },
]


export const allRestaurantData = [
    {
        id: "1",
        favorite: false,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Gulshan, Dhaka",
        coordinates: {
            lat: 23.7916,
            lng: 90.4072
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "2",
        favorite: false,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Connaught Place, New Delhi, India",
        coordinates: {
            lat: 28.6315,
            lng: 77.2167
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "3",
        favorite: true,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Shinjuku, Tokyo, Japan",
        coordinates: {
            lat: 35.6938,
            lng: 139.7034
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "4",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Times Square, New York, USA",
        coordinates: {
            lat: 40.7580,
            lng: -73.9855
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "5",
        favorite: false,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "La Rambla, Barcelona, Spain",
        coordinates: {
            lat: 41.3809,
            lng: 2.1735
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "6",
        favorite: true,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Le Marais, Paris, France",
        coordinates: {
            lat: 48.8590,
            lng: 2.3580
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "7",
        favorite: false,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Downtown, Dubai, UAE",
        coordinates: {
            lat: 25.1972,
            lng: 55.2744
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "8",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Queen Street, Auckland, New Zealand",
        coordinates: {
            lat: -36.8485,
            lng: 174.7633
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
]



export const vibeRestaurantData = [
    {
        id: "1",
        favorite: true,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Gulshan, Dhaka",
        coordinates: {
            lat: 23.7916,
            lng: 90.4072
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "2",
        favorite: false,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Connaught Place, New Delhi, India",
        coordinates: {
            lat: 28.6315,
            lng: 77.2167
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "3",
        favorite: true,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Shinjuku, Tokyo, Japan",
        coordinates: {
            lat: 35.6938,
            lng: 139.7034
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "4",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Times Square, New York, USA",
        coordinates: {
            lat: 40.7580,
            lng: -73.9855
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "5",
        favorite: false,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "La Rambla, Barcelona, Spain",
        coordinates: {
            lat: 41.3809,
            lng: 2.1735
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "6",
        favorite: false,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Le Marais, Paris, France",
        coordinates: {
            lat: 48.8590,
            lng: 2.3580
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "7",
        favorite: false,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Downtown, Dubai, UAE",
        coordinates: {
            lat: 25.1972,
            lng: 55.2744
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "8",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Queen Street, Auckland, New Zealand",
        coordinates: {
            lat: -36.8485,
            lng: 174.7633
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
]



export const cuiseneRestaurantData = [
    {
        id: "1",
        favorite: true,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Gulshan, Dhaka",
        coordinates: {
            lat: 23.7916,
            lng: 90.4072
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "2",
        favorite: false,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Connaught Place, New Delhi, India",
        coordinates: {
            lat: 28.6315,
            lng: 77.2167
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "3",
        favorite: true,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Shinjuku, Tokyo, Japan",
        coordinates: {
            lat: 35.6938,
            lng: 139.7034
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "4",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Times Square, New York, USA",
        coordinates: {
            lat: 40.7580,
            lng: -73.9855
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "5",
        favorite: false,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "La Rambla, Barcelona, Spain",
        coordinates: {
            lat: 41.3809,
            lng: 2.1735
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "6",
        favorite: false,
        name: "The Drizzle Room",
        image: "/image/nearby (2).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Rooftop", icon: "🔥" },
            { label: "Italian", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Le Marais, Paris, France",
        coordinates: {
            lat: 48.8590,
            lng: 2.3580
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "7",
        favorite: false,
        name: "Baja & Bloom",
        image: "/image/nearby (3).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Downtown, Dubai, UAE",
        coordinates: {
            lat: 25.1972,
            lng: 55.2744
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: "8",
        favorite: true,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        gallery: [
            "/image/gallery (1).png",
            "/image/gallery (2).png",
            "/image/gallery (3).png",
            "/image/gallery (4).png",
            "/image/gallery (5).png",
            "/image/gallery (6).png",
            "/image/gallery (7).png",
            "/image/gallery (8).png",
        ],
        dishes: [
            {
                title: "Charred Octopus Tacos",
                description: "Tender Spanish octopus, flame-charred for a smoky finish, laid over soft blue corn tortillas. Topped with mango-habanero salsa, pickled onions, micro cilantro, and a drizzle of cilantro aioli.",
                image: "/image/dishes (1).png"
            },
            {
                title: "Truffle Yuca Fries",
                description: "Crispy golden yuca, double-fried for crunch, tossed with white truffle oil and sea salt. Served with a side of smoked paprika aioli and cilantro chimichurri.",
                image: "/image/dishes (2).png"
            },
            {
                title: "Smoked Pineapple Mezcalita",
                description: "A smoky, sweet, and spicy cocktail made with artisanal mezcal, fresh pineapple juice, lime, agave nectar, & a tajín rim. Garnished with a grilled pineapple slice and a sprig of mint.",
                image: "/image/dishes (3).png"
            }
        ],
        rating: 4.8,
        reviews: 248,
        tags: [
            { label: "Trending", icon: "🔥" },
            { label: "Rooftop", icon: "🏨" },
            { label: "Romantic", icon: "💖" },
        ],
        locationImage: "/image/location-image.png",
        location: "Queen Street, Auckland, New Zealand",
        coordinates: {
            lat: -36.8485,
            lng: 174.7633
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
]




// Filter categories
export const neighborhoods = [
    { id: "downtown", label: "Downtown LA (DTLA)" },
    { id: "west-hollywood", label: "West Hollywood", checked: false },
    { id: "santa-monica", label: "Santa Monica", checked: false },
    { id: "venice", label: "Venice", checked: false },
    { id: "silver-lake", label: "Silver Lake", checked: false },
    { id: "hollywood", label: "Hollywood", checked: false },
    { id: "beverly-hills", label: "Beverly Hills", checked: false },
    { id: "koreatown", label: "Koreatown (K-Town)", checked: false },
    { id: "echo-park", label: "Echo Park", checked: false },
    { id: "culver-city", label: "Culver City", checked: false },
    { id: "los-feliz", label: "Los Feliz", checked: false },
    { id: "brentwood", label: "Brentwood", checked: false },
    { id: "malibu", label: "Malibu", checked: false },
    { id: "highland-park", label: "Highland Park", checked: false },
    { id: "pasadena", label: "Pasadena", checked: false },
]

export const cuisines = [
    { id: "italian", label: "Italian", checked: false },
    { id: "japanese", label: "Japanese", checked: false },
    { id: "mexican", label: "Mexican", checked: false },
    { id: "chinese", label: "Chinese", checked: false },
    { id: "indian", label: "Indian", checked: false },
    { id: "french", label: "French", checked: false },
    { id: "thai", label: "Thai", checked: false },
    { id: "mediterranean", label: "Mediterranean", checked: false },
    { id: "korean", label: "Korean", checked: false },
    { id: "vegetarian", label: "Vegetarian", checked: false },
]

export const vibes = [
    { id: "romantic", label: "Romantic", checked: false },
    { id: "trendy", label: "Trendy", checked: false },
    { id: "family-friendly", label: "Family Friendly", checked: false },
    { id: "outdoor-seating", label: "Outdoor Seating", checked: false },
    { id: "casual", label: "Casual", checked: false },
    { id: "luxury", label: "Luxury / Fine Dining", checked: false },
    { id: "late-night", label: "Late-Night", checked: false },
    { id: "live-music", label: "Live Music", checked: false },
    { id: "pet-friendly", label: "Pet-Friendly", checked: false },
    { id: "group-friendly", label: "Group-Friendly", checked: false },
]