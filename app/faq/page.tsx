'use client'

import { useState } from 'react'
import Footer from '../components/Footer'

export default function FAQ() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const faqSections = [
    'GEMSTONE/DIAMOND QUALITY',
    'CUSTOMIZATION & PRICING PROMISE',
    'SHIPPING WITHIN USA',
    'INTERNATIONAL SHIPPING',
    'RETURNS & EXCHANGES',
    'SIZING & RESIZING',
    'WARRANTY'
  ]

  return (
    <div className="min-h-screen pt-24" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-6" style={{color: '#2F2F2F'}}>
            Frequently Asked Questions
          </h1>
          <p className="mb-2" style={{color: '#6D6157'}}>
            Find answers to your queries about our bespoke jewelry, personalization, shipping, and more.
          </p>
          <p style={{color: '#6D6157'}}>
            Still need assistance? Contact our customer service team via email, or phone for friendly support.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-4">
          {faqSections.map((section) => (
            <div key={section} className="border-b" style={{borderColor: '#D4C2A8'}}>
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center py-6 text-left transition-colors"
                style={{color: '#2F2F2F'}}
              >
                <span className="text-lg font-medium">{section}</span>
                <span className="text-2xl transition-transform duration-200" style={{
                  transform: openSection === section ? 'rotate(45deg)' : 'rotate(0deg)',
                  color: '#6D6157'
                }}>
                  +
                </span>
              </button>
              
              {openSection === section && (
                <div className="pb-6 transition-all duration-200">
                  <div className="p-6 rounded space-y-6" style={{backgroundColor: '#EFE9E3', color: '#6D6157'}}>
                    {section === 'GEMSTONE/DIAMOND QUALITY' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. Are your gemstones synthetic or natural?</p>
                          <p>We specialize in Natural AAAA and Heirloom quality gems, which are some of the best natural gemstones used in fine jewelry globally. We also offer some premium lab-created gemstones for beginner collectors. Whether natural or synthetic, our gems are always marked clearly on our website, so you know exactly what you're getting.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. How do I know that your diamonds/gemstones are authentic?</p>
                          <p>Each of Diamondere's exquisite diamonds, more than 1/2 carat, is certified by an accredited agency (e.g. GIA, IGI). For all other jewelry, our GIA-accredited gemologists will provide a digital certificate verifying the quality and weights of all the gemstones and metals used in your jewelry. Certification is a FREE service we offer.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>3. What quality are your gemstones?</p>
                          <p>All our gemstones are of Heirloom, Natural AAAA or AAA quality, the highest available qualities in the global market. We do NOT use lab created gemstones unless explicitly chosen. All our gemstones are eye-clean i.e. there are no inclusions visible to the unaided eye. The Emerald is an exception to this because Emeralds without inclusions are very rare in their natural form. We hand-pick all our natural gemstones with extreme care.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>4. Are the diamonds sold on the website conflict-free?</p>
                          <p>Diamondere recognizes the great harm caused by conflict diamond mining / trading. Diamondere does not sell, purchase or deal in diamonds which were used to fund any conflicts or traded in any way, in violation of any United Nations Resolution or the Kimberley Process.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>5. Why is 'Cut' missing for some diamonds?</p>
                          <p>If the diamond is NOT a round diamond, it may not have a "cut" grade. There are many ways to cut a Marquis, a Radiant or an Oval stone (to name just a few) in order to play up brilliance and beauty. For this reason, cut grades are always assigned to Round Diamonds but are not typically assigned to these other "fancy shaped" diamonds.</p>
                        </div>
                      </>
                    )}
                    {section === 'CUSTOMIZATION & PRICING PROMISE' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. Can I order gemstones which are not listed on the site?</p>
                          <p>Whether you want a specific quality of a listed gemstone, a specific carat size or you want to make your jewelry in a gemstone not listed on the site, our specially trained customer care team can fulfill all your requests.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. Can I create jewelry designs not listed on your site?</p>
                          <p>Absolutely! Our brand specializes in working with customers to create unique jewelry. We would love to see jewelry that inspires you and then within 48 hours our designers can send you images and prices of new designs that they create for you based on your specifications (with no commitments or deposits!). <span className="font-semibold underline" style={{color: '#2F2F2F'}}>START HERE</span></p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>3. Why are our prices so low compared to other online jewelers and retailers?</p>
                          <p className="mb-4">Jewelry exchange in a traditional market:</p>
                          
                          <div className="flex items-center justify-center mb-4 space-x-2 text-sm">
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>Manufacturer</div>
                            <span>→</span>
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>Wholesaler</div>
                            <span>→</span>
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>Mass Retailer</div>
                            <span>→</span>
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>Retailer</div>
                            <span>→</span>
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>You</div>
                          </div>
                          
                          <p className="text-center text-sm mb-4">200% - 500% markup</p>
                          
                          <p className="mb-4">Jewelry exchange at Diamondere.com:</p>
                          
                          <div className="flex items-center justify-center mb-4 space-x-2 text-sm">
                            <div className="px-4 py-2 rounded" style={{backgroundColor: '#9C7E6A', color: 'white'}}>Diamondere.com</div>
                            <span>→</span>
                            <div className="px-3 py-2 rounded" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>You</div>
                          </div>
                          
                          <p className="text-center text-sm mb-4">20% - 50% markup</p>
                          
                          <p>Diamondere ships directly to you from our atelier, eliminating middlemen, making sure that you have the best deal on the best jewelry, made exclusively for you!</p>
                        </div>
                      </>
                    )}
                    {section === 'SHIPPING WITHIN USA' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. How long will it take for the product to be delivered?</p>
                          <p>Your customized jewelry will be delivered at your doorstep within 1-3 weeks of the order being placed though we have an expedited option which is detailed below.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. Can I expedite my order and get a quicker delivery?</p>
                          <p>Yes, while checking out, you can choose the "Expedited Shipping" radio button. For some of our simpler designs, there is an even quicker "Priority Shipping" option. We then guarantee delivery of your handcrafted jewelry within 7-12 days via UPS. If you have a specific date/occasion for this delivery, please email our team who can assist you further.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>3. What are your shipping charges?</p>
                          <p>Diamondere provides FREE global shipping (Except for Express/Priority Orders, which will be charged an additional $25). All prices displayed are all-inclusive (for most states) and displayed in US Dollars. There may be Sales Taxes applicable for our US customers depending on the respective State Laws (if applicable, the sales tax amount will be clearly shown to you before check out).</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>4. What if I am unavailable when the product is delivered?</p>
                          <p>You will receive an email notification when the package is shipped out. If you are unavailable at the time of delivery, the courier company shall try and deliver the jewelry on two more occasions in the coming days. Alternatively, you may call the courier company to hold the package for a pick-up or to re-deliver it at a time convenient to you. An adult signature is mandatory to receive all shipments.</p>
                        </div>
                      </>
                    )}
                    {section === 'INTERNATIONAL SHIPPING' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. What are your shipping charges?</p>
                          <p>Diamondere provides FREE global shipping. (Except for Express/Priority Orders, which will be charged an additional $25)</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. How is duty/custom charges handled?</p>
                          <p className="mb-4">Canada, UK & Australia: We prepay all necessary custom duties, VAT and taxes for our Canadian, Australian and UK customers for a hassle-free shopping experience. You do NOT need to pay anything more to anyone and will receive your jewelry at your doorstep!</p>
                          <p><span className="font-medium" style={{color: '#2F2F2F'}}>All other countries:</span> Customers from other countries may have to pay VAT / TAX (as applicable in your respective countries) when their jewelry is delivered to them.</p>
                        </div>
                      </>
                    )}
                    {section === 'RETURNS & EXCHANGES' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. What is your Return, Exchange and Refund Policy?</p>
                          <p className="mb-4">Diamondere has a hundred days, no questions asked "FREE Return, Replacement and Resizing" policy.</p>
                          <p><span className="font-medium" style={{color: '#2F2F2F'}}>FULL CASHBACK</span> if the product is unworn. We also give FREE PRE-PAID UPS RETURN LABEL for the convenience of all customers within the US. You can read more about this <span className="font-semibold underline" style={{color: '#2F2F2F'}}>HERE</span></p>
                        </div>
                      </>
                    )}
                    {section === 'SIZING & RESIZING' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. How do I measure her (or my) ring size?</p>
                          <p>Refer to our <span className="font-semibold underline" style={{color: '#2F2F2F'}}>SIZING GUIDE</span> to see how you can get/measure anyone's ring size!</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. Do you resize the ring if I have a problem with its size? If yes, what are the charges for the same?</p>
                          <p>Yes, we will resize the ring FREE of cost, within 100 days of purchase. We can typically re-size rings up to a couple of sizes up or down. Please note that Eternity ring designs cannot be re-sized.</p>
                        </div>
                      </>
                    )}
                    {section === 'WARRANTY' && (
                      <>
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>1. Do you offer any Warranty?</p>
                          <p>We offer a Lifetime Manufacturing Warranty on all purchases from Diamondere.com. It covers manufacturing defects in materials or workmanship. Normal wear and tear, accidental damage, or third-party repairs are not included.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>2. What is the difference in your Free Lifetime warranty & the Product Protection Plan?</p>
                          <p>You can purchase our "Product Protection Plan offered by <span className="font-semibold underline" style={{color: '#2F2F2F'}}>Extend</span>" on the shopping cart. The Product Protection Plan is more extensive, covering accidental damage, ring resizing, rhodium plating, and more that are not included in the Free Lifetime Warranty. You can read more about it at <span className="font-semibold underline" style={{color: '#2F2F2F'}}>Extend</span></p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>3. How much do I have to pay to avail of the Product Protection Plan?</p>
                          <p>The price of the plan will vary depending on the product you choose. You'll find the exact price for this service below your product in the shopping cart.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>4. What are the advantages of the Product Protection Plan over Free Lifetime warranty?</p>
                          <p>With Free Lifetime warranty, you only get basic jewelry maintenance services. On the other hand, the Product Protection Plan is more extensive and covers several other wear and tear issues that are not included in the Free warranty.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>5. How can I opt for the Product Protection Plan?</p>
                          <p>While making a purchase, simply check "Protection Plan offered by extend <span className="font-semibold underline" style={{color: '#2F2F2F'}}>Extend</span>" on the shopping cart page and it will be automatically added to your purchase.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>6. How long is the Product Protection Plan valid?</p>
                          <p>You may purchase an Product Protection Plan for 3 Years, 5 Years & Lifetime.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>7. Can I cancel my order for Product Protection Plan?</p>
                          <p>Yes, you can cancel within 30 days of purchasing the plan. You may be issued a prorated refund depending on when you cancel the plan.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>8. What is the process to get my jewelry repaired or polished under the Product Protection Plan?</p>
                          <p>You may begin your claim with Extend <span className="font-semibold underline" style={{color: '#2F2F2F'}}>HERE</span></p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>9. Once I buy the Product Protection Plan, would I get a confirmation of the warranty?</p>
                          <p>Once you buy your jewelry with the Product Protection Plan, we will send you an invoice which indicates that you have purchased the Product Protection Plan. You will additionally receive an email from Extend with the necessary plan information.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>10. Under what circumstance will the warranty be void?</p>
                          <p>If you get any repair or resizing work done on the piece of jewelry from another jeweler or third party, the Product Protection Plan will be void and the jewelry piece will no longer be covered by the plan.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-2" style={{color: '#2F2F2F'}}>11. How do I file a claim under the Free Lifetime Warranty?</p>
                          <p className="mb-2">If you believe your jewelry has a manufacturing defect, please email us with:</p>
                          <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Your order number</li>
                            <li>Clear photos/videos showing the issue</li>
                            <li>Any helpful details on how or when the issue was noticed</li>
                          </ul>
                          <p className="mb-2">Our team will review your submission and confirm whether the repair falls under our warranty.</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>If it does, we'll send you shipping instructions, take care of the repair at no cost and ship it back to you within the US at our cost.</li>
                            <li>If the issue is not covered, we'll provide a repair estimate. Upon approval and payment, we'll send a prepaid shipping label and begin the repair. Most repairs are completed within <span className="font-semibold">1-3 weeks</span>.</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {section !== 'GEMSTONE/DIAMOND QUALITY' && section !== 'CUSTOMIZATION & PRICING PROMISE' && section !== 'SHIPPING WITHIN USA' && section !== 'INTERNATIONAL SHIPPING' && section !== 'RETURNS & EXCHANGES' && section !== 'SIZING & RESIZING' && section !== 'WARRANTY' && (
                      <p>Content for {section} will be added here...</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <div className="mt-16 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/contact1.jpg" 
                alt="Woman on phone" 
                className="w-full h-100 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm mb-2" style={{color: '#6D6157'}}>GOT MORE QUESTIONS?</p>
              <h2 className="text-3xl font-light mb-4" style={{color: '#2F2F2F'}}>Get in Touch</h2>
              <p className="mb-6" style={{color: '#6D6157'}}>Our customers are our first priority. Reach out using the method of your choice and we are happy to assist you!</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1" style={{color: '#2F2F2F'}}>EMAIL US</p>
                  <p className="text-sm mb-1" style={{color: '#6D6157'}}>Please Email Us At</p>
                  <p className="font-semibold mb-1" style={{color: '#2F2F2F'}}>contactus@diamondere.com</p>
                  <p className="text-sm mb-1" style={{color: '#6D6157'}}>Our best method of communication</p>
                  <p className="text-sm mb-2" style={{color: '#6D6157'}}>Guaranteed response within 24 hours</p>
                  <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Email us now</a>
                </div>
                
                <div>
                  <p className="font-semibold mb-1" style={{color: '#2F2F2F'}}>CALL US</p>
                  <p className="text-sm mb-2" style={{color: '#6D6157'}}>Speak to a real person at 1-844-400-0065</p>
                  <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Or request a callback</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Diamondere Section */}
        <div className="mt-16 mb-16">
          <div className="rounded-lg p-12" style={{backgroundColor: '#EFE9E3'}}>
            <h2 className="text-3xl font-light text-center mb-12" style={{color: '#2F2F2F'}}>Why Choose Diamondere For Your Fine Jewelry?</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{color: '#2F2F2F'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>LEGACY OF EXCELLENCE</h3>
                <p className="text-sm mb-2" style={{color: '#6D6157'}}>135+ years of handcrafting jewelry for Royal families</p>
                <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Learn More →</a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{color: '#2F2F2F'}} fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>CUSTOM-MADE</h3>
                <p className="text-sm mb-2" style={{color: '#6D6157'}}>Exclusive designs and hand-crafted quality</p>
                <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Learn More →</a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{color: '#2F2F2F'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84C10.19 11.15 10 11.57 10 12C10 12.43 10.19 12.85 10.5 13.16L11.84 14.5L7.17 19.17L8.83 20.83L13.5 16.16L14.84 17.5C15.15 17.81 15.57 18 16 18C16.43 18 16.85 17.81 17.16 17.5L22.83 11.83L21 10L19 12L17 10L21 9Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>FAIR PRICES</h3>
                <p className="text-sm mb-2" style={{color: '#6D6157'}}>No middlemen means you save up to 70%</p>
                <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Learn More →</a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{color: '#2F2F2F'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17V19H9V17H3M3 5V7H13V5H3M13 21V19H21V17H13V15H11V21H13M7 9V11H3V13H7V15H9V9H7M21 13V11H11V13H21M15 9H17V7H21V5H17V3H15V9Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>RESIZING</h3>
                <p className="text-sm mb-2" style={{color: '#6D6157'}}>We don't charge you to resize rings or bracelets</p>
                <a href="#" className="text-sm underline" style={{color: '#CBAE9B'}}>Learn More →</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}