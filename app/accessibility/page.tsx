'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import Footer from '../components/Footer'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Accessibility Statement
            </h1>
            <p className="text-text-secondary">
              Published: Mar 19, 2022
            </p>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Commitment to Accessibility
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We want everyone who visits the Scottsdale Diamond Company website and uses our platform to feel welcome and find the experience rewarding.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Upon request, Scottsdale Diamond Company will arrange for the provision of accessible formats and communication support for people with disabilities that takes into account each person's accessibility needs due to disability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                We Would Love Your Feedback
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                If you enjoyed using the Scottsdale Diamond Company website or our products — or if you had trouble with any part of it — please let us know. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please contact us in any of the following ways:
              </p>

              <div className="bg-secondary-bg rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cta" />
                  <span className="text-text-primary">Call our Customer Service team at </span>
                  <a 
                    href="tel:+18444000045" 
                    className="text-cta hover:text-highlight font-semibold focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 rounded"
                    aria-label="Call customer service at 844-400-0045"
                  >
                    +1 844 400 0045
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cta" />
                  <span className="text-text-primary">Email us at </span>
                  <a 
                    href="mailto:contactus@scottsdaledc.com?subject=Disabled Access" 
                    className="text-cta hover:text-highlight font-semibold focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 rounded"
                    aria-label="Email us about accessibility concerns"
                  >
                    contactus@scottsdaledc.com
                  </a>
                  <span className="text-text-secondary text-sm">with "Disabled Access" in the subject line</span>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-cta" />
                  <span className="text-text-primary">Get in touch with us via our </span>
                  <a 
                    href="/contact" 
                    className="text-cta hover:text-highlight font-semibold focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 rounded"
                    aria-label="Contact us through our contact form"
                  >
                    contact form
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-text-secondary leading-relaxed mb-4">
                We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers. We are committed to ensuring that digital solutions and content developed by Scottsdale Diamond Company meets a high level of accessibility.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Additionally, while we do not control third-party vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user-friendly.
              </p>
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}