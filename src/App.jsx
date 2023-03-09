import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center font-bold text-3xl" data-theme="night">
      <div>
      <div className="flex flex-col w-full">
        <span className="grid h-20 card  rounded-box place-items-center">
          React
        </span>
        <div className="divider"></div>
        <span className="grid h-20 card  rounded-box place-items-center">
          Vite
        </span>
        <div className="divider"></div>
        <span className="grid h-20 card  rounded-box place-items-center">
          Tailwindcss
        </span>
        <div className="divider"></div>
        <span className="grid h-20 card  rounded-box place-items-center">
          DaisyUI
        </span>
      </div>
      </div>
    </div>
  );
}

export default App;
