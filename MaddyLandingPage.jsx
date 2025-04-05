
import React from "react";
import { Button } from "@/components/ui/button";

export default function MaddyLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Machine Automated Data-Driven Yieldbot - <span className="text-pink-500">M A D D Y</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Text Content */}
        <div className="text-left max-w-md">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-4">
            Hi, I'm Maddy
          </h2>
          <p className="text-xl md:text-2xl leading-snug mb-6">
            I am going to change <br /> your life.
          </p>
          <Button className="text-lg px-6 py-3 bg-pink-600 hover:bg-pink-700 transition-all">
            Launch Maddy
          </Button>
        </div>

        {/* Right Side Video Content */}
        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-xl">
          <video
            src="./Maddy Black Background 3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
}
