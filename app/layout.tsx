import './globals.css'
import { Lato } from 'next/font/google'
import Navbar from './components/Navbar'
import ChatWidget from './components/ChatWidget'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { AuthProvider } from './context/AuthContext'

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata = {
  title: 'Jewelry Collection - Modern Luxury',
  description: 'Discover our exclusive collection of modern jewelry pieces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="min-h-screen relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-amber-50/95" />
          
          {/* Visible Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-5 w-24 h-24 bg-yellow-400/30 morph-animation blur-lg" />
            <div className="absolute top-32 right-12 w-20 h-20 bg-amber-300/40 float-animation blur-md" />
            <div className="absolute top-64 left-1/3 w-32 h-32 bg-yellow-200/35 morph-animation blur-xl" style={{animationDelay: '2s'}} />
            <div className="absolute top-96 right-1/4 w-16 h-16 bg-amber-400/45 animate-pulse blur-sm" />
            <div className="absolute bottom-40 left-8 w-28 h-28 bg-yellow-300/40 float-animation blur-lg" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-80 right-16 w-24 h-24 bg-amber-200/50 animate-pulse blur-md" />
            <div className="absolute top-1/2 left-1/5 w-20 h-20 bg-yellow-400/35 morph-animation blur-lg" style={{animationDelay: '3s'}} />
            <div className="absolute bottom-1/3 right-1/3 w-36 h-18 bg-amber-300/30 float-animation blur-xl" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-3/4 left-2/3 w-22 h-22 bg-yellow-200/40 animate-pulse blur-md" />
            <div className="absolute bottom-16 left-1/2 w-26 h-26 bg-amber-400/35 morph-animation blur-lg" style={{animationDelay: '1.5s'}} />
          </div>
          
          {/* Animated Mesh Grid */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-400/20 animate-pulse" style={{animationDuration: '4s'}} />
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}} />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" style={{animationDelay: '1.5s'}} />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <Navbar />
                <main className="pt-19 relative z-10">
                  {children}
                </main>
                <ChatWidget />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}