"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const MainComponent = () => {
  return (
    <div className="main-content">
      {/* Your main content here */}
    </div>
  );
};

export default MainComponent;
