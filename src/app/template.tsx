"use client";
import LoadingScreen from "@/components/LoadingScreen";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
}
