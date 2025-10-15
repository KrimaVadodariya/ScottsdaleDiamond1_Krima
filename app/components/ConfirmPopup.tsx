'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X } from 'lucide-react'

interface ConfirmPopupProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

export default function ConfirmPopup({ isOpen, onClose, onConfirm, title, message }: ConfirmPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-96 rounded-2xl p-6 shadow-2xl"
            style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle size={24} className="text-red-600" />
                <h3 className="text-lg font-bold" style={{ color: '#2F2F2F' }}>
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} style={{ color: '#6D6157' }} />
              </button>
            </div>
            
            <p className="mb-6" style={{ color: '#6D6157' }}>
              {message}
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
                style={{ backgroundColor: '#FAF8F3', color: '#6D6157', borderColor: '#D4C2A8', borderWidth: '2px' }}
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
                style={{ backgroundColor: '#dc2626', color: 'white' }}
              >
                Delete
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}