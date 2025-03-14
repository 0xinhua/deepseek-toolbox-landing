"use client"

import Image from "next/image";
import { useState, useCallback } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideo = useCallback(() => {
    setShowVideo(false);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-white via-[#EEF1FF] to-[#E8F3FF] flex flex-col overflow-hidden relative">
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
      <nav className="relative flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#013DC4] to-[#0129A3] rounded-xl p-1.5">
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
      </nav>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          DeepSeek Toolbox
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Enhance your DeepSeek experience with a suite of tools.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Video Preview Button */}
          <button 
            onClick={() => setShowVideo(true)}
            className="group cursor-pointer inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#013DC4]/20 to-transparent rounded-full hover:from-[#013DC4]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#013DC4] to-[#0129A3] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white"
                className="w-5 h-5 relative left-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-gray-600 group-hover:text-gray-800 transition-colors">One-Click Thought Content Copying</span>
          </button>
        </div>

        {/* Browser Extensions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center bg-white gap-2 px-5 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm shadow-lg w-full md:w-auto justify-center"
          >
            <Image
              src="/chrome.svg"
              alt="Chrome"
              width={24}
              height={24}
            />
            <span>Chrome Extension</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-white/60 border border-gray-200 text-gray-700 px-5 py-3 rounded-lg hover:bg-white/80 transition-colors text-sm shadow-md w-full md:w-auto justify-center"
          >
            <Image
              src="/firefox.svg"
              alt="Firefox"
              width={24}
              height={24}
            />
            <span>Firefox Add-on</span>
          </a>
        </div>
      </main>
    </div>
  );
}
