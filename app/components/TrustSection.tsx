import Image from 'next/image';

const TrustSection = () => {
  const features = [
    { image: '/trust1.png', title: 'Quality Guaranteed', desc: 'Premium Quality and Craftsmanship Guaranteed' },
    { image: '/trust2.png', title: 'Complimentary Care', desc: 'Complimentary Sizing & Cleaning Services Available' },
    { image: '/trust3.svg', title: 'Positive Global Impact', desc: 'Ethically Sourced and Sustainably Made' },
    { image: '/trust4.svg', title: 'Customers Come First', desc: 'Dedicated Customer Service and Support' }
  ];

  return (
    <section className="py-16" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#2F2F2F'}}>
          Experience The Scottsdale Diamond Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-6 rounded-xl" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <Image src={feature.image} alt={feature.title} width={32} height={32} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#2F2F2F'}}>{feature.title}</h3>
              <p className="text-sm" style={{color: '#6D6157'}}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;