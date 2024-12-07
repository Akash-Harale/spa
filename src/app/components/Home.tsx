
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const phrases = [
        {
            line1: "Experience Ultimate Relaxation",
            line2: "with Relaxing Touch Massage"
        },
        {
            line1: "Doorstep Service Just for You",
            line2: "Enjoy a Massage at Your Home"
        },
        {
            line1: "Unwind Your Body and Mind",
            line2: "with Our Expert Therapists"
        },
        {
            line1: "Revitalize Your Energy",
            line2: "with Healing Massage Sessions"
        },
        {
            line1: "Convenience Meets Comfort",
            line2: "Professional Massage at Your Door"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
                setIsFadingOut(false);
            }, 500); // Matches the fade-out duration
        }, 3400); // Total time before switching phrases (including fade animation)
        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    <span
                        className={`block transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"
                            } text-gray-900`}
                    >
                        {phrases[currentPhrase].line1}
                    </span>
                    <span
                        className={`block transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"
                            } text-indigo-600`}
                    >
                        {phrases[currentPhrase].line2}
                    </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Feel the soothing touch of relaxation and wellness delivered directly to {" "}
                    <span className="text-indigo-600 font-bold">your home</span>
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <Link
                            href="#book"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Book Your Massage Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
