import React, { useEffect, useState } from 'react';

const ToggleTeme = () => {

    const [theme, setTheme] = useState("light");

    const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme); // DaisyUI er theme set kora
    };
  
  
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-base-100 text-base-content">
        <h1 className="text-4xl font-bold">Dark/Light Mode</h1>
        <p className="mt-4">
          This is an example of toggling between dark and light mode using DaisyUI.
        </p>
        <button
          onClick={handleToggle}
          className="btn btn-primary mt-6"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    );
};

export default ToggleTeme;