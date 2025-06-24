import React, { useState } from "react"
import Waitlist from "./Waitlist"
// import SearchBar from "./SearchBar"


const Hero: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/grid-pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider">
            EMPOWER YOUR DIGITAL PRESENCE
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Lisk Name Service enhances your on-chain journey.
          </p>

          <button
            className="water-drain-btn px-3 py-1 sm:px-6 sm:py-2 border border-white rounded-full bg-white font-medium text-xs sm:text-base text-black hover:bg-gray-200 transition"
            onClick={() => setIsWaitlistOpen(true)}
          >
            <span>Join our waitlist</span>
          </button>
	  {/* <SearchBar /> */}
        </div>
      </div>

      <Waitlist isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  )
}

export default Hero
