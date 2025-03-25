"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface BrowserExtensionProps {
  chromeLink: string;
  firefoxLink: string;
  availableText: string;
  chromeText: string;
  firefoxText: string;
}

export function BrowserExtensions({
  chromeLink,
  firefoxLink,
  availableText,
  chromeText,
  firefoxText
}: BrowserExtensionProps) {
  return (
    <div className="flex flex-col mb-14 mt-4">
      {/* Mobile CTA */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center">
          <div className="text-[#013DC4] font-semibold animate-pulse mb-1">{availableText}</div>
        </div>
      </div>
      
      {/* Browser buttons container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <motion.a
          href={chromeLink}
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
          <span className="font-semibold">{chromeText}</span>
        </motion.a>
        <motion.a
          href={firefoxLink}
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
          <span className="font-semibold">{firefoxText}</span>
        </motion.a>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnTop?: boolean;
}

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnTop = true
}: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {imageOnTop ? (
        <>
          {/* Image Section */}
          <div className="h-42 bg-[#dbeafe] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </>
      ) : (
        <>
          {/* Text Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          
          {/* Image Section */}
          <div className="h-42 bg-[#dbeafe] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </>
      )}
    </motion.div>
  );
}

interface FeatureGridProps {
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
}

export function FeatureGrid({ 
  feature1Title,
  feature1Desc,
  feature2Title,
  feature2Desc
}: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 max-w-4xl mx-auto w-full">
      <FeatureCard 
        title={feature1Title}
        description={feature1Desc}
        imageSrc="/feature-copy.png"
        imageAlt="One-Click Thought Copying Feature"
        imageOnTop={true}
      />
      
      <FeatureCard 
        title={feature2Title}
        description={feature2Desc}
        imageSrc="/feature-fold.png"
        imageAlt="Auto-Fold Thought Content Feature"
        imageOnTop={false}
      />
    </div>
  );
} 