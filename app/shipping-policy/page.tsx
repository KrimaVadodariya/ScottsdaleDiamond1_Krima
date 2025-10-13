'use client'

import Footer from '../components/Footer'

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-light text-gray-800 mb-8 tracking-wide">
              SHIPPING AND DELIVERY POLICY
            </h1>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We offer <span className="font-semibold text-gray-800">FREE</span> global shipping.
              </p>
              
              <p>
                Your handcrafted jewelry will be delivered in a gift box within 1-3 weeks.
              </p>
              
              <p>
                All <span className="font-semibold text-gray-800">our shipments are fully insured by us</span> till they reach your doorstep. UPS typically require an adult's signature to receive this package. You can also request them to hold the package at their nearest location to you (for a pick-up) or to deliver to you at a mutually convenient time.
              </p>
              
              <div>
                <p className="font-medium text-gray-700 mb-2">Note -</p>
                <p>
                  US Customers: There may be Sales Taxes applicable depending on the respective State Laws, which are then added at checkout.
                </p>
              </div>
              
              <p>
                Canadian, Australian and UK customers: We prepay all necessary custom duties, VAT and taxes for a hassle-free shopping experience.
              </p>
              
              <p>
                Customers from all other countries: You may have to pay the applicable VAT / GST / Custom Duty in your country before receiving the package.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/policy1.jpg" 
              alt="Hands holding a red jewelry gift box with DIAMONDERE branding" 
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}