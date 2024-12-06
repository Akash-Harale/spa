export default function AboutUs() {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Learn about Relaxing Touch Massage and our unwavering commitment to helping you achieve peace and well-being.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            At Relaxing Touch Massage, our mission is to create a sanctuary for relaxation and healing. We believe in the transformative power of touch to restore balance, relieve stress, and promote overall health.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Whether you are looking to unwind after a long day or seeking relief from chronic tension, our skilled therapists are here to tailor every session to your unique needs.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We take pride in providing a warm, welcoming environment where you can focus on your well-being and embark on a journey to total relaxation.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Why Choose Us</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Our professional therapists bring years of experience and passion to ensure every massage session exceeds your expectations.
                        </p>
                        <ul className="text-gray-700 space-y-2 list-disc pl-5">
                            <li>Personalized massage experiences</li>
                            <li>Relaxing and serene ambiance</li>
                            <li>Focus on holistic well-being</li>
                            <li>Highly trained and certified therapists</li>
                        </ul>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Relaxing Touch Massage isn not just about relaxation—it is about empowering your wellness journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
