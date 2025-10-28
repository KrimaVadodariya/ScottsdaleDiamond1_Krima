import { Mail, Phone, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-12 px-0 border-t" style={{backgroundColor: '#efede9ff', borderColor: '#EFE9E3'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Education */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{color: '#2F2F2F'}}>EDUCATION</h4>
            <div className="space-y-2">
              <Link href="/diamond-guide" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Diamond Guide</Link>
              <Link href="/gemstone-guide" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Colored Gems Guide</Link>
              <Link href="/birthstone-guide" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Birthstones Guide</Link>
              <Link href="/ring-sizer-guide" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Size Guide</Link>
            </div>
          </div>

          {/* Orders */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{color: '#2F2F2F'}}>ORDERS</h4>
            <div className="space-y-2">
              <Link href="/shipping-policy" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Free Shipping Both Ways</Link>
              <Link href="/jewelry-care" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Caring For Your Jewelry</Link>
              <Link href="/track-order" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Track Your Order</Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{color: '#2F2F2F'}}>CUSTOMER CARE</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Contact Us</Link>
              <Link href="#" className="flex items-center text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>
                <Mail size={16} className="mr-2" />
                Email Us
              </Link>
              <Link href="#" className="flex items-center text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>
                <Phone size={16} className="mr-2" />
                1-844-400-0065
              </Link>
              <Link href="/faq" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>FAQs</Link>
              <Link href="/financing-options" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Financing Options</Link>
              <Link href="/accessibility" className="block text-sm transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Accessibility</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{color: '#2F2F2F'}}>JOIN THE DIAMOND COMMUNITY</h4>
            <p className="text-sm mb-4" style={{color: '#6D6157'}}>
              Sign up for our newsletter to stay up to date on the latest designs and exciting jewelry news.
            </p>
            <div className="flex border" style={{borderColor: '#D4C2A8'}}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-2 text-sm focus:outline-none" style={{backgroundColor: '#FAF8F3', color: '#2F2F2F'}}
              />
              <button className="px-4 py-2 text-sm font-medium transition-colors" style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#9C7E6A'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#CBAE9B'}>
                send
              </button>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <span className="text-sm font-medium" style={{color: '#D4C2A8'}}>BLOG</span>
              <div className="flex space-x-2">
                <Instagram size={16} className="cursor-pointer transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'} />
                <Facebook size={16} className="cursor-pointer transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 text-center border-t w-full" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8'}}>
        <p className="text-xs" style={{color: '#6D6157'}}>
          © 2025 Scottsdale Diamond. All Rights Reserved | 
          <Link href="#" className="transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Disclaimer</Link> | 
          <Link href="#" className="transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>T&C</Link>
        </p>
        <p className="text-xs" style={{color: '#6D6157'}}>
          Developed By &nbsp; 
          <Link href="https://www.technovatechnologies.com/" className="transition-colors" style={{color: '#6D6157'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#CBAE9B'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6D6157'}>Technova Technologies</Link>        </p>
      </div>
    </footer>
  )
}