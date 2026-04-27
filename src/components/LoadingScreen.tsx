"use client";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <Image 
          src="/sansfond.png" 
          alt="StayZen" 
          width={200} 
          height={200} 
          priority 
          className="loading-logo"
        />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}
