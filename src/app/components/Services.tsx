import Image from 'next/image';

const services = [
  {
    name: 'Swedish Massage',
    description: 'A gentle, relaxing massage that uses long strokes to ease tension and promote circulation.',
    price: '₹ 1599',
    image: '/services/swedishMassage.jpeg',
  },
  {
    name: 'Deep Tissue Massage',
    description: 'A therapeutic massage that targets deep layers of muscle to relieve chronic pain and tension.',
    price: '₹ 1999',
    image: '/services/deepTissueMassage1.jpg',
  },
  {
    name: 'Head Massage',
    description: 'A head massage relieves stress, improves circulation, and promotes relaxation and well-being.',
    price: '₹ 999',
    image: '/services/headMassage.jpeg',
  },
  {
    name: 'Foot Massage',
    description: 'A Foot massage relieves tension, improves circulation, and promotes overall relaxation and well-being.',
    price: '₹ 999',
    image: '/services/footMassage.jpeg',
  },
  {
    name: 'Hand Massage',
    description: 'A Hand massage relaxes muscles, improves circulation, and promotes overall hand wellness.',
    price: '₹ 999',
    image: '/services/handMassage.jpeg',
  },
  {
    name: 'Neck Massage',
    description: 'A Relieve tension and improve flexibility with a soothing, therapeutic neck massage.',
    price: '₹ 999',
    image: '/services/neckMassage.jpg',
  },
  {
    name: 'Full Body Massage',
    description: 'A Full body massage offers relaxation, stress relief, improved circulation, and overall wellness.',
    price: '₹ 1999',
    image: '/services/fullBodyMassage.jpg',
  },
  {
    name: 'Hot Stone Massage',
    description: 'A luxurious massage that uses heated stones to melt away tension and promote deep relaxation.',
    price: '₹ 1200',
    image: '/services/hotStoneMassage.jpeg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose from our range of professional massage services tailored to your needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 overflow-hidden shadow rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  <p className="mt-2 text-lg font-semibold text-indigo-600">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
