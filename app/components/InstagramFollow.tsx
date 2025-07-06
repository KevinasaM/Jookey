"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { XMarkIcon, HeartIcon, UserPlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"

export default function InstagramFollow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [hasFollowed, setHasFollowed] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Check if user has already followed
  useEffect(() => {
    const followedStatus = localStorage.getItem("jookey_instagram_followed")
    const dismissedStatus = localStorage.getItem("jookey_instagram_dismissed")

    if (followedStatus === "true" || dismissedStatus === "true") {
      setHasFollowed(true)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hasFollowed) return // Don't show popup if already followed

    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 0.5

      if (scrolled > threshold && !showPopup) {
        setShowPopup(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showPopup, hasFollowed])

  const handleFollow = () => {
    // Save follow status to localStorage
    localStorage.setItem("jookey_instagram_followed", "true")
    setHasFollowed(true)

    // Show thank you message
    setShowThankYou(true)

    // Hide popup after showing thank you
    setTimeout(() => {
      setShowPopup(false)
      setIsVisible(false)
    }, 2000)

    // Open Instagram
    window.open("https://instagram.com/jookey.co", "_blank")
  }

  const handleDismiss = () => {
    // Save dismiss status to localStorage
    localStorage.setItem("jookey_instagram_dismissed", "true")
    setHasFollowed(true)
    setIsVisible(false)
    setShowPopup(false)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  // Don't render anything if user has already followed or dismissed
  if (hasFollowed && !showThankYou) {
    return null
  }

  return (
    <>
      {/* Floating Instagram Button */}
      <AnimatePresence>
        {isVisible && !hasFollowed && (
          <motion.div
            className="fixed bottom-20 left-6 z-50"
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -100, rotate: -180 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.button
              onClick={handleFollow}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0.7)",
                  "0 0 0 10px rgba(168, 85, 247, 0)",
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
              <span className="hidden sm:inline text-sm font-medium">Follow IG</span>

              {/* Notification badge */}
              <motion.div
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                !
              </motion.div>
            </motion.button>

            <motion.button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full p-1 opacity-70 hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram Popup Modal */}
      <AnimatePresence>
        {showPopup && !hasFollowed && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
          >
            <motion.div
              className="bg-background rounded-3xl p-8 max-w-md w-full shadow-2xl border border-border relative"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                {!showThankYou ? (
                  <motion.div
                    key="follow-content"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">Follow JooKey di Instagram! 📸</h3>
                    <p className="text-muted-foreground mb-6">
                      Dapatkan tips coding, tutorial, dan update project terbaru dari tim JooKey!
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>✨ Daily coding tips</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>🎓 Tutorial programming</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>💼 Portfolio showcase</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>👥 Behind the scenes</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        onClick={handleLike}
                        className="flex-1 bg-secondary text-secondary-foreground py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLiked ? <HeartSolid className="w-5 h-5 text-red-500" /> : <HeartIcon className="w-5 h-5" />}
                        {isLiked ? "Liked!" : "Like"}
                      </motion.button>

                      <motion.button
                        onClick={handleFollow}
                        className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <UserPlusIcon className="w-5 h-5" />
                        Follow Now
                      </motion.button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-4">@jookey.co</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thank-you-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      <CheckCircleIcon className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-foreground mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Terima Kasih! 🎉
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Selamat datang di komunitas JooKey! Jangan lupa aktifkan notifikasi untuk mendapatkan update
                      terbaru.
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-center gap-2 text-sm text-green-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Instagram akan terbuka di tab baru</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset Button (for testing - remove in production) */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={() => {
            localStorage.removeItem("jookey_instagram_followed")
            localStorage.removeItem("jookey_instagram_dismissed")
            setHasFollowed(false)
            setShowThankYou(false)
            window.location.reload()
          }}
          className="fixed top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-xs z-50"
        >
          Reset IG Popup
        </button>
      )}
    </>
  )
}
