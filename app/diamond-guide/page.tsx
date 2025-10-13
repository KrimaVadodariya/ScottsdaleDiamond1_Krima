'use client'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function DiamondGuide() {
  return (
    <div style={{backgroundColor: '#FAF8F3'}} className="min-h-screen pt-32">
      {/* Header Section */}
      <div className="relative py-16" style={{backgroundColor: '#EFE9E3'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 max-w-7xl mx-auto items-center">
          <div>
            <h1 className="text-5xl font-bold mb-8" style={{color: '#2F2F2F'}}>
              Diamond Buying Guide
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{color: '#6D6157'}}>
              When you shop online at a jeweler, you're determined to find the most stunning diamond at a reasonable price. We're here to help.
            </p>
            <p className="text-base leading-relaxed" style={{color: '#6D6157'}}>
              Our diamond guide includes everything you need to know when picking out your engagement ring, diamond necklace, or anniversary present. We ditch the complicated lingo and help you feel confident in your big purchase.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg h-80 rounded-2xl shadow-lg" style={{backgroundColor: '#EFE9E3'}}>
              <div className="w-full h-full flex items-center justify-center" style={{color: '#6D6157'}}>
                <img
                  src = "/guide1.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four Cs Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#2F2F2F'}}>
            Exploring the Four Cs of Diamond Quality
          </h2>
          <p className="text-center mb-16 max-w-4xl mx-auto" style={{color: '#6D6157'}}>
            Have you heard about the four Cs of diamonds? The four Cs stand for cut, color, carat, and clarity. 
            What matters a lot is to know about diamond buying: understanding these four principles will put you 
            way ahead—and help you feel confident when approaching your purchase.
          </p>

          {/* Diamond Cut */}
          <div className="p-8" style={{backgroundColor: '#EFE9E3'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl font-bold mr-4" style={{color: '#D4C2A8'}}>1</span>
                  <h3 className="text-2xl font-bold" style={{color: '#2F2F2F'}}>Diamond Cut</h3>
                </div>
                <p className="mb-4" style={{color: '#6D6157'}}>
                  When it comes to cut, the goal is to bring out the brilliance and 
                  intensity of the stone. Exactly how your diamond shines and dazzles 
                  light will determine its beauty. The better cut quality will determine 
                  how much your diamond will sparkle and catch the light.
                </p>
                <Link href="#" className="font-medium" style={{color: '#CBAE9B'}}>
                  Read More →
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm h-58 rounded-lg flex items-center justify-center" >
                  <img src="/guide2.png"  >
                  </img>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Color */}
          <div className="p-8" style={{backgroundColor: '#EFE9E3'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-sm h-48 rounded-lg flex items-center justify-center">
                  <img src="/guide3.svg"></img>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl font-bold mr-4" style={{color: '#D4C2A8'}}>2</span>
                  <h3 className="text-2xl font-bold" style={{color: '#2F2F2F'}}>Diamond Color</h3>
                </div>
                <p className="mb-4" style={{color: '#6D6157'}}>
                  The whiter a diamond appears, the rarer it is. Colorless diamonds are the most 
                  expensive types of diamonds. Though most diamonds appear 
                  colorless, they actually have slight tints of yellow or brown.
                </p>
                <Link href="#" className="font-medium" style={{color: '#CBAE9B'}}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Diamond Clarity */}
          <div className="p-8" style={{backgroundColor: '#EFE9E3'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl font-bold mr-4" style={{color: '#D4C2A8'}}>3</span>
                  <h3 className="text-2xl font-bold" style={{color: '#2F2F2F'}}>Diamond Clarity</h3>
                </div>
                <p className="mb-4" style={{color: '#6D6157'}}>
                  Have you ever noticed black specks in a diamond? That's the 
                  clarity of the diamond (or lack thereof) peeking through. In 
                  determining clarity, the diamond is graded regarding the quantity and 
                  visibility of the internal characteristics.
                </p>
                <Link href="#" className="font-medium" style={{color: '#CBAE9B'}}>
                  Read More →
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm h-48 rounded-lg flex items-center justify-center">
                  <img src="/guide4.svg"></img>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Carat */}
          <div className="p-8" style={{backgroundColor: '#EFE9E3'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-sm h-48 rounded-lg flex items-center justify-center">
                  <img src="/guide5.svg"></img>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl font-bold mr-4" style={{color: '#D4C2A8'}}>4</span>
                  <h3 className="text-2xl font-bold" style={{color: '#2F2F2F'}}>Diamond Carat</h3>
                </div>
                <p className="mb-4" style={{color: '#6D6157'}}>
                  Of increasing diamond size is the easiest way to make your purchase 
                  count. It's the most noticeable part of a diamond ring — creating 
                  a more good impression from friends and family.
                </p>
                <Link href="#" className="font-medium" style={{color: '#CBAE9B'}}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conflict Free Diamonds */}
      <div className="py-16" style={{backgroundColor: '#FAF8F3'}}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4C2A8'}}>
              <span className="text-2xl">💎</span>
            </div>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#2F2F2F'}}>
              Conflict-Free Diamonds
            </h2>
          </div>
          <p className="text-lg leading-relaxed" style={{color: '#6D6157'}}>
            Conflict-free lab diamonds ensure that your stone is never responsibly. While the Kimberley Process has a lot to ensure ethical mining and conflict-free diamonds, we at Blue Nile take it one step responsible, starting with the most basic level of our supply chain. We source our diamonds from suppliers who, like us, proudly adhere to and enforce the standards against any have diamonds and gemstones from around the globe.
          </p>
        </div>
      </div>

      {/* Diamond Certifications */}
      <div className="py-16" style={{backgroundColor: '#EFE9E3'}}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4C2A8'}}>
              <span className="text-2xl">📋</span>
            </div>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#2F2F2F'}}>
              What Diamond Certifications Should You Look For?
            </h2>
          </div>
          <p className="text-lg mb-8 leading-relaxed" style={{color: '#6D6157'}}>
            Diamond certifications ensure that you receive the exact rock that you are paying for. Your diamond certification should provide you with all the information you need to make an informed purchase.
          </p>
          <p className="text-base mb-8" style={{color: '#6D6157'}}>
            While the Gemological Institute of America (GIA) is the most widely recognized certification, there are other accredited agencies like International Gemological Institute (IGI) and SSEF. Learn more about our certification process.
          </p>
          <button className="px-6 py-2 border-b-2" style={{color: '#CBAE9B', borderColor: '#CBAE9B'}}>
            Learn more about our certification process
          </button>
        </div>
      </div>

      {/* Natural vs Lab Created */}
      <div className="py-16 pt-6" style={{backgroundColor: '#FAF8F3'}}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FAF8F3'}}>
              <img src="/guide6.png"></img>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#2F2F2F'}}>
                Natural Diamonds Vs Lab Created Diamonds
              </h2>
              <p className="mb-6 leading-relaxed" style={{color: '#6D6157'}}>
                Choosing between lab-grown diamonds and natural diamonds is a big decision. Natural diamonds are formed deep within the Earth over billions of years, while lab-created diamonds, while offering beautiful brilliance over cost. While diamonds come from diamonds, diamonds made in from diamond materials, lab-created diamonds are identical in every way to natural diamonds.
              </p>
              <p className="mb-6" style={{color: '#6D6157'}}>
                Shop your perfect in-store, diamond lab-grown diamonds are created in a matter of days.
              </p>
              <p className="text-sm" style={{color: '#6D6157'}}>
                While natural diamonds are rare diamonds, are you quite content you to find a cut, style and a successful budget. One are both beautiful, they are both diamonds, and they are both perfect for any occasion. The choice is yours to make the choice affordable quality if you select the best option for you.
              </p>
              <button className="mt-4 px-6 py-2 border-b-2" style={{color: '#CBAE9B', borderColor: '#CBAE9B'}}>
                Shop Lab Grown Diamonds →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Experience The Diamondere Difference */}
      <div className="py-16 mt-6" style={{backgroundColor: '#ffffffff'}}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#705747ff'}}>
            Experience The Diamondere Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: 'rgba(250, 248, 243, 0.2)'}}>
                <span className="text-2xl" style={{color: '#705747ff'}}>💰</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#705747ff'}}>
                Quality Guaranteed
              </h3>
              <p className="text-sm mb-4" style={{color: '#705747ff'}}>
                Premium Quality and Craftsmanship Guaranteed
              </p>

            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: 'rgba(250, 248, 243, 0.2)'}}>
                <span className="text-2xl" style={{color: '#'}}>💎</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#705747ff'}}>
                Complimentary Care
              </h3>
              <p className="text-sm mb-4" style={{color: '#705747ff'}}>
                Complimentary Sizing & Cleaning Services Available
              </p>

            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: 'rgba(250, 248, 243, 0.2)'}}>
                <span className="text-2xl" style={{color: '#705747ff'}}>🌱</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#705747ff'}}>
                Positive Global Impact
              </h3>
              <p className="text-sm mb-4" style={{color: '#705747ff'}}>
                Ethically Sourced and Sustainably Made
              </p>

            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: 'rgba(250, 248, 243, 0.2)'}}>
                <span className="text-2xl" style={{color: '#705747ff'}}>📞</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#705747ff'}}>
                Customers Come First
              </h3>
              <p className="text-sm mb-4" style={{color: '#705747ff'}}>
                Dedicated Customer Service and Support
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  
  )
}