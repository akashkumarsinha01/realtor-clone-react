import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <main className="bg-white bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div className="spinner h-24">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
