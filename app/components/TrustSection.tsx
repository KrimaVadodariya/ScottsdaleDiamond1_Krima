import { motion } from 'framer-motion';
import { Truck, Shield, RotateCcw, Award, CreditCard, Headphones, Gift, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TrustSection = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $500',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Complete coverage for all jewelry',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day return guarantee',
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Authenticated diamonds and gems',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Safe and encrypted transactions',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      description: 'Elegant packaging for occasions',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Handcrafted with finest materials',
    },
  ];

  return (
    <section className="section-luxury bg-secondary/20 py-12" style={{backgroundColor: '#F0EEE4'}}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-light text-[#A89F91] mb-6">Why Choose Scottsdale Diamond</h2>
            <p className="text-lg text-[#A89F91] opacity-80">
              We're committed to providing you with the finest jewelry experience from selection to aftercare.
            </p>
        </motion.div>

        {/* Horizontal Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000}
          allowTouchMove={false}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="overflow-hidden"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center text-center bg-background/50 p-3 sm:p-4 rounded-2xl shadow group mx-auto w-full border-2"
                  style={{ borderColor: '#deab1233', height: '120px', minHeight: '120px', maxHeight: '120px' }}
                >
                  <h3 className="text-lg font-playfair font-semibold text-[#A89F91] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#A89F91] font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustSection;