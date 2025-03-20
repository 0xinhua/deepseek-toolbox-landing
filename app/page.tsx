"use client"

import Image from "next/image";
import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import { cn } from "./utils";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideo = useCallback(() => {
    setShowVideo(false);
  }, []);

  return (
    <div className={cn(`h-screen bg-gradient-to-br from-white via-[#EEF1FF] to-[#E8F3FF] flex flex-col relative`, poppins.className)}>
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#013DC4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#013DC4]/5 rounded-full blur-3xl" />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <dialog className="modal modal-open">
          <div className="modal-box relative w-11/12 max-w-5xl h-[80vh] p-0 bg-black">
            <button 
              className="btn btn-sm btn-circle absolute right-2 top-2 z-10 bg-white/10 border-none hover:bg-white/20"
              onClick={closeVideo}
            >✕</button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nj55IKTpPaQ?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="modal-backdrop" onClick={closeVideo}>
            <button className="cursor-default">Close</button>
          </div>
        </dialog>
      )}

      {/* Navigation */}
      <nav className="relative flex items-center justify-between sm:px-8 px-4 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br bg-[#013DC4] rounded-xl p-1">
            <Image
              src="/logo.svg"
              alt="DeepSeek Toolbox Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
          </div>
          <span className="text-xl font-bold text-gray-800">DeepSeek Toolbox</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy" 
            className="text-gray-700 sm:block hidden hover:text-gray-900 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/privacy" 
            className="text-gray-700 sm:hidden block hover:text-gray-900 transition-colors text-sm"
          >
            Privacy
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">
         Supercharge Your DeepSeek Efficiency
        </h1>
        <p className="text-[22px] text-gray-600 mb-8 max-w-2xl mx-auto">
          ⚡️ Enhance your DeepSeek experience with a suite of tools.
        </p>

        {/* Browser Extensions */}
        <div className="flex flex-col mb-14 mt-4">
          {/* Mobile CTA */}
          <div className="flex justify-center mb-4">
            <div className="flex flex-col items-center">
              <div className="text-[#013DC4] font-semibold animate-pulse mb-1">Available on the Web Store and Add-on – Try It Now!</div>
            </div>
          </div>
          
          {/* Browser buttons container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Desktop CTA Arrow pointing to Chrome extension */}
            <motion.a
              href="https://chromewebstore.google.com/detail/deepseek-toolbox/eiccidaafienjjnpljcagalaoidhcdma"
              className="flex items-center bg-white gap-2 px-5 py-3 rounded-lg text-sm shadow-lg w-full md:w-auto justify-center"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(1, 61, 196, 0.1), 0 8px 10px -6px rgba(1, 61, 196, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/chrome.svg"
                  alt="Chrome"
                  width={24}
                  height={24}
                />
              </motion.div>
              <span className="font-semibold">Chrome Extension</span>
            </motion.a>
            <motion.a
              href="https://addons.mozilla.org/en-US/firefox/addon/deepseek-toolbox"
              className="flex items-center gap-2 bg-white/60 text-gray-700 px-5 py-3 rounded-lg text-sm shadow-md w-full md:w-auto justify-center"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 10px 25px -5px rgba(1, 61, 196, 0.1), 0 8px 10px -6px rgba(1, 61, 196, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                whileHover={{ rotate: -15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/firefox.svg"
                  alt="Firefox"
                  width={24}
                  height={24}
                />
              </motion.div>
              <span className="font-semibold">Firefox Add-on</span>
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 max-w-4xl mx-auto w-full">
          {/* Feature Card 1: Image on top, text on bottom */}
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Image Section */}
            <div className="h-42 bg-[#dbeafe] relative">
              <Image
                src="/feature-copy.png"
                alt="One-Click Thought Copying Feature"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">One-Click Thought Copying</h3>
              <p className="text-gray-600">Easily copy DeepSeek's thought content with a single click, boosting your productivity.</p>
            </div>
          </motion.div>
          
          {/* Feature Card 2: Text on top, image on bottom */}
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Text Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Auto-Fold Thought Content</h3>
              <p className="text-gray-600">Smart folding of thought content for a cleaner chat interface.</p>
            </div>
            
            {/* Image Section */}
            <div className="h-42 bg-[#dbeafe] relative">
              <Image
                src="/feature-fold.png"
                alt="Auto-Fold Thought Content Feature"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-6 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-8">
          <p>© {new Date().getFullYear()} DeepSeek Toolbox. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
