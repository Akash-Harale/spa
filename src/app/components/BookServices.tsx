'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { addBooking } from '../action/actions';

type FormData = {
    name: string;
    email?: string; // Make email optional
    phone: string;
    service: string;
    date: string;
    time: string;
};

export default function BookServices() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            // Send form data to Supabase
            const response = await addBooking(data, 'bookings'); // Replace 'bookings' with your Supabase table name
            console.log('Booking response:', response);
            alert('Booking submitted successfully!');
            reset(); // Reset the form after successful submission
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error submitting booking:', error.message);
                alert(`Failed to submit booking: ${error.message}`);
            } else {
                console.error('Unknown error occurred:', error);
                alert('An unknown error occurred while submitting the booking.');
            }
        }
    };

    return (
        <section id="book" className="py-12 bg-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book Your Massage</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Fill out the form below to schedule your relaxing massage session.
                    </p>
                </div>
                <div className="mt-10 max-w-xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid phone number',
                                    },
                                })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                        </div>

                        {/* Service */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                Service <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="service"
                                {...register('service', { required: 'Service selection is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Select a service</option>
                                <option value="swedish">Swedish Massage</option>
                                <option value="deep-tissue">Deep Tissue Massage</option>
                                <option value="hot-stone">Hot Stone Massage</option>
                                <option value="aromatherapy">Aromatherapy Massage</option>
                            </select>
                            {errors.service && <span className="text-red-500 text-sm">{errors.service.message}</span>}
                        </div>

                        {/* Date */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                Preferred Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="date"
                                {...register('date', { required: 'Date is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
                        </div>

                        {/* Time */}
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                Preferred Time <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="time"
                                {...register('time', { required: 'Time is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
                        </div>

                        {/* Submit */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
