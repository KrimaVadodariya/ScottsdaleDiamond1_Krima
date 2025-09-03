import { Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-2xl p-8 mb-12 text-center border border-yellow-400/30">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-yellow-400 mr-2" size={24} />
            <h3 className="text-2xl font-bold">Stay Connected</h3>
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our community for exclusive offers, styling tips, and first access to new collections!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-transform duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:scale-110 transition-transform duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:scale-110 transition-transform duration-300">
                <Facebook size={20} />
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-2" size={16} />
                hello@luxejewelry.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2" size={16} />
                +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="text-yellow-400" size={24} />
              <span className="text-2xl font-space font-bold">Luxe</span>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting beautiful jewelry for life's special moments.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin className="mr-2" size={16} />
              <span className="text-sm">123 Luxury Ave, NYC 10001</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/jewelry" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Jewelry Collection
              </Link>
              <Link href="/boutique" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Personal Styling
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Style Blog
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Collections</h4>
            <div className="space-y-3">
              <Link href="/jewelry?category=daily-wear" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Daily Wear
              </Link>
              <Link href="/jewelry?category=office-wear" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Office Wear
              </Link>
              <Link href="/jewelry?category=party-wear" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Party Wear
              </Link>
              <Link href="/jewelry?category=bridal-wear" className="block text-gray-400 hover:text-yellow-400 transition-colors hover:translate-x-1 duration-300">
                → Bridal Collection
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Customer Care</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">📞 Mon-Sat 9AM-7PM EST</p>
              <p className="text-gray-400 text-sm">✨ Free shipping over $200</p>
              <p className="text-gray-400 text-sm">🔄 30-day returns</p>
              <p className="text-gray-400 text-sm">💎 Lifetime warranty</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Luxe Jewelry. All rights reserved. Made with ❤️ for jewelry lovers.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Size Guide</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}