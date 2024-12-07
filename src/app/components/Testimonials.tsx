'use client'

import { useEffect, useRef, useState } from "react"

const testimonials = [
    {
        quote: "The most relaxing massage experience I've ever had. The convenience of having it at home made it even better!",
        author: "Sarah M.",
        role: "Regular Client"
    },
    {
        quote: "Professional, courteous, and incredibly skilled. Exactly what I needed for my stress relief.",
        author: "Michael R.",
        role: "Monthly Member"
    },
    {
        quote: "I've been getting regular massages here for months. The service is consistently excellent!",
        author: "Emma L.",
        role: "Wellness Enthusiast"
    },
    {
        quote: "The therapist's expertise in various techniques really helped with my chronic back pain.",
        author: "David K.",
        role: "Chronic Pain Patient"
    },
    {
        quote: "I love how they tailor each session to my specific needs. It's a truly personalized experience.",
        author: "Olivia P.",
        role: "Busy Professional"
    },
    {
        quote: "The aromatherapy options really enhance the relaxation. It's like a mini-vacation every time!",
        author: "James T.",
        role: "Stress Management Seeker"
    },
    {
        quote: "I've tried many massage services, but Relaxing Touch is by far the best in terms of quality and convenience.",
        author: "Sophie C.",
        role: "Massage Connoisseur"
    },
    {
        quote: "As an athlete, I appreciate how they focus on my problem areas. It's greatly improved my recovery time.",
        author: "Alex R.",
        role: "Amateur Athlete"
    }
]

export default function TestimonialsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible && marqueeRef.current) {
            const marqueeAnimation = marqueeRef.current.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-50%)' }
                ],
                {
                    duration: 40000,
                    iterations: Infinity,
                    easing: 'linear'
                }
            )

            return () => {
                marqueeAnimation.cancel()
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (isVisible) {
            const testimonialCards = document.querySelectorAll('.testimonial-card')
            testimonialCards.forEach((card, index) => {
                card.animate(
                    [
                        { opacity: 0, transform: 'translateY(20px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ],
                    {
                        duration: 500,
                        fill: 'forwards',
                        delay: index * 100,
                        easing: 'ease-out'
                    }
                )
            })
        }
    }, [isVisible])

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#F8F7FF] py-24"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Experience the difference of professional massage therapy
                    </p>
                </div>

                <div className="mt-16 overflow-hidden">
                    <div ref={marqueeRef} className="flex gap-8">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="testimonial-card flex-shrink-0 w-[300px] rounded-2xl bg-white p-6"
                            >
                                <div className="text-[#6C63FF] opacity-20">
                                    <svg
                                        width="44"
                                        height="32"
                                        viewBox="0 0 44 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.528 31.728C8.256 31.728 4.944 30.392 2.592 27.72C0.336 25.048 -0.792 21.352 0.528 16.632C1.944 11.816 4.32 7.816 7.656 4.632C11.088 1.448 15.12 0.0879999 19.752 0.552L20.808 6.472C17.76 6.184 15.024 7 12.6 8.92C10.176 10.744 8.592 13.32 7.848 16.648C7.944 16.616 8.448 16.6 9.36 16.6C11.616 16.6 13.536 17.352 15.12 18.856C16.8 20.264 17.64 22.12 17.64 24.424C17.64 26.728 16.848 28.632 15.264 30.136C13.776 31.544 11.952 31.728 12.528 31.728ZM34.288 31.728C30.016 31.728 26.704 30.392 24.352 27.72C22.096 25.048 20.968 21.352 22.288 16.632C23.704 11.816 26.08 7.816 29.416 4.632C32.848 1.448 36.88 0.0879999 41.512 0.552L42.568 6.472C39.52 6.184 36.784 7 34.36 8.92C31.936 10.744 30.352 13.32 29.608 16.648C29.704 16.616 30.208 16.6 31.12 16.6C33.376 16.6 35.296 17.352 36.88 18.856C38.56 20.264 39.4 22.12 39.4 24.424C39.4 26.728 38.608 28.632 37.024 30.136C35.536 31.544 33.712 31.728 34.288 31.728Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <blockquote className="mt-4">
                                    <p className="text-lg text-gray-700">{testimonial.quote}</p>
                                    <footer className="mt-4">
                                        <p className="font-semibold text-[#6C63FF]">{testimonial.author}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="#book"
                        className="inline-flex items-center rounded-lg bg-[#6C63FF] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#5B54FF]"
                    >
                        Book Your Massage Today
                    </a>
                </div>
            </div>
        </section>
    )
}
