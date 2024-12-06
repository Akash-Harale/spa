import Image from 'next/image'

export default function AboutUs() {
    return (
        <section id="about" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
                        Discover the story behind Relaxing Touch Massage and our commitment to your well-being.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Our team"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 mb-4">
                                    At Relaxing Touch Massage, our mission is to provide a sanctuary of relaxation and healing for our clients. We believe in the power of touch to restore balance, reduce stress, and promote overall well-being.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our team of skilled therapists is dedicated to delivering personalized massage experiences that cater to your unique needs. Whether you are seeking relief from chronic pain, looking to de-stress, or simply want to indulge in some self-care, we are here to help you achieve your wellness goals.
                                </p>
                                <p className="text-gray-600">
                                    We pride ourselves on creating a warm, welcoming environment where you can escape the pressures of daily life and focus on your health and relaxation. Your journey to wellness starts here at Relaxing Touch Massage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

