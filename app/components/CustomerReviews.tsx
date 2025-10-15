'use client'

import { Star } from 'lucide-react'

const CustomerReviews = () => {
  const reviews = [
    { name: 'Sarah Johnson', rating: 5, text: 'Absolutely stunning jewelry! The quality exceeded my expectations.', location: 'New York' },
    { name: 'Michael Chen', rating: 5, text: 'Perfect engagement ring. The service was exceptional throughout.', location: 'California' },
    { name: 'Emma Davis', rating: 5, text: 'Beautiful craftsmanship and fast delivery. Highly recommend!', location: 'Texas' },
    { name: 'James Wilson', rating: 4, text: 'Great selection and competitive prices. Will shop here again.', location: 'Florida' },
    { name: 'Lisa Brown', rating: 5, text: 'The custom design process was smooth and the result was perfect.', location: 'Illinois' },
    { name: 'David Miller', rating: 5, text: 'Outstanding customer service and beautiful jewelry pieces.', location: 'Arizona' }
  ]

  return (
    <section className="py-16" style={{backgroundColor: '#f6f3f0ff'}}>
      <div className="max-w-full mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#2F2F2F'}}>
          What Our Customers Say
        </h2>
        
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-80 p-6 rounded-xl shadow-lg"
                style={{backgroundColor: '#FAF8F3'}}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      size={16} 
                      className={j < review.rating ? 'fill-current' : ''} 
                      style={{color: '#D4C2A8'}} 
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed" style={{color: '#6D6157'}}>
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold" style={{color: '#2F2F2F'}}>{review.name}</p>
                  <p className="text-xs" style={{color: '#6D6157'}}>{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}

export default CustomerReviews