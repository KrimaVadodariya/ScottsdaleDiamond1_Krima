'use client'

import Footer from '../components/Footer'

export default function FinancingOptions() {
  return (
    <div className="min-h-screen pt-24" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-4" style={{color: '#2F2F2F'}}>
            Buy Now, <span style={{color: '#9C7E6A'}}>Pay Later</span>
          </h1>
          <p className="text-lg" style={{color: '#6D6157'}}>
            Bringing Your Dream Jewelry Within Reach with Affirm
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-20 h-20" style={{color: '#6D6157'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2" style={{color: '#2F2F2F'}}>1.</h3>
            <h4 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>CUSTOMIZE</h4>
            <h4 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>& CHECKOUT</h4>
            <p className="text-sm leading-relaxed" style={{color: '#6D6157'}}>
              Customize your handcrafted jewelry, and add it to your shopping cart.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <div className="text-2xl font-bold border-2 rounded px-3 py-1" style={{color: '#6D6157', borderColor: '#D4C2A8'}}>
                ✓ affirm
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2" style={{color: '#2F2F2F'}}>2.</h3>
            <h4 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>CHOOSE AFFIRM</h4>
            <h4 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>AS PAYMENT TYPE</h4>
            <p className="text-sm leading-relaxed" style={{color: '#6D6157'}}>
              Select Affirm at checkout and complete a quick and easy application.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-20 h-20" style={{color: '#6D6157'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2" style={{color: '#2F2F2F'}}>3.</h3>
            <h4 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>GET REALTIME</h4>
            <h4 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>LOAN DECISION</h4>
            <p className="text-sm leading-relaxed" style={{color: '#6D6157'}}>
              If your financing is approved, we will handcraft your custom jewelry and ship it to you within 1-2 weeks.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-20 h-20" style={{color: '#6D6157'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2" style={{color: '#2F2F2F'}}>4.</h3>
            <h4 className="font-semibold mb-2" style={{color: '#2F2F2F'}}>PAY</h4>
            <h4 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>OVERTIME</h4>
            <p className="text-sm leading-relaxed" style={{color: '#6D6157'}}>
              Pay over 3, 6, or 12 months with rates from 10-36% APR based on your selected payment plan.
            </p>
          </div>

        </div>

        {/* Affirm Details Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Affirm Eligibility */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>AFFIRM ELIGIBILITY</h3>
            <p className="text-sm mb-2" style={{color: '#6D6157'}}>Affirm is available only if the billing and shipping address is within the US. Your rate will be 10-36% APR based on credit, and is subject to an eligibility check.</p>
            <p className="text-sm" style={{color: '#6D6157'}}>Payment options through Affirm are provided by these lending partners <span className="underline" style={{color: '#CBAE9B'}}>affirm.com/lenders</span>. Options depend on your purchase amount, and a down payment may be required.</p>
          </div>
          
          {/* Easy Checkout */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>EASY CHECKOUT</h3>
            <ol className="text-sm space-y-1" style={{color: '#6D6157'}}>
              <li>1. Select Affirm as your payment method</li>
              <li>2. Click to submit your order</li>
              <li>3. Complete Affirm's quick & easy application</li>
              <li>4. Finalize your order with Diamondere.com</li>
            </ol>
          </div>
          
          {/* Safe & Secure */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>SAFE & SECURE</h3>
            <p className="text-sm" style={{color: '#6D6157'}}>There's no card number to steal, so your account stays secure.</p>
          </div>
          
        </div>

        {/* How Does Affirm Work Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* How Does Affirm Work */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>HOW DOES AFFIRM WORK?</h3>
            <p className="text-sm" style={{color: '#6D6157'}}>Buy now with Affirm and pay over time. It's simple financing that fits your life</p>
          </div>
          
          {/* Monthly Payments */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>MONTHLY PAYMENTS</h3>
            <p className="text-sm" style={{color: '#6D6157'}}>Pay over time with Affirm and split your purchase into 3, 6, or 12 monthly payments Rates from 10%-36% APR. For example, a $500 purchase may cost $86.60 for 12 months at 20% APR.</p>
          </div>
          
          {/* You Are In Control */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: '#2F2F2F'}}>YOU ARE IN CONTROL</h3>
            <p className="text-sm" style={{color: '#6D6157'}}>Pick a loan that fits your budget, choose to pay off your purchase over 3, 6 or 12 months (rates from 10-36% APR). For example, a $500 purchase may cost $86.60 for 12 months at 20% APR.</p>
          </div>
          
        </div>

        {/* Real People Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4" style={{color: '#2F2F2F'}}>Real people, Real Support</h2>
          <p className="text-sm" style={{color: '#6D6157'}}>Affirm has a dedicated team in San Francisco at Affirm HQ,</p>
          <p className="text-sm" style={{color: '#6D6157'}}>ready to answer your questions and help out however they can</p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 mb-16">
          <div className="border-b" style={{borderColor: '#D4C2A8'}}>
            <button className="w-full flex justify-between items-center py-4 text-left">
              <span className="text-sm font-medium" style={{color: '#2F2F2F'}}>WHAT INFORMATION DOES AFFIRM REQUIRE?</span>
              <span className="text-xl" style={{color: '#6D6157'}}>+</span>
            </button>
          </div>
          
          <div className="border-b" style={{borderColor: '#D4C2A8'}}>
            <button className="w-full flex justify-between items-center py-4 text-left">
              <span className="text-sm font-medium" style={{color: '#2F2F2F'}}>HOW DO I PAY MY BILLS?</span>
              <span className="text-xl" style={{color: '#6D6157'}}>+</span>
            </button>
          </div>
          
          <div className="border-b" style={{borderColor: '#D4C2A8'}}>
            <button className="w-full flex justify-between items-center py-4 text-left">
              <span className="text-sm font-medium" style={{color: '#2F2F2F'}}>WHY WAS I PROMPTED TO PAY A DOWN PAYMENT WITH A DEBIT CARD?</span>
              <span className="text-xl" style={{color: '#6D6157'}}>+</span>
            </button>
          </div>
          
          <div className="border-b" style={{borderColor: '#D4C2A8'}}>
            <button className="w-full flex justify-between items-center py-4 text-left">
              <span className="text-sm font-medium" style={{color: '#2F2F2F'}}>WHY WAS I PROMPTED FOR A CHECKING ACCOUNT?</span>
              <span className="text-xl" style={{color: '#6D6157'}}>+</span>
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}