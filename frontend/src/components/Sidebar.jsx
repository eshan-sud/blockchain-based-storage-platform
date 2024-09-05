// frontend/src/components/Sidebar.jsx

import React, { useEffect, useRef, useState } from "react";
import { FiX, FiMenu, FiGrid, FiUsers, FiSettings } from "react-icons/fi";

import { SidebarItem } from "./Link";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const closeSidebar = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to document
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeSidebar);
    } else {
      document.removeEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={`shadow-right-md fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
        ref={sidebarRef}
      >
        <div className="flex flex-col justify-between bg-white h-full p-4">
          <div className="flex gap-2">
            <button
              ref={buttonRef}
              onClick={toggleSidebar}
              className="text-2xl focus:outline-none z-40"
            >
              <div className="hover:bg-gray-200 rounded-lg px-1 py-2 w-full flex">
                {isOpen ? <FiX /> : <FiMenu />}
              </div>
            </button>
            {isOpen && (
              <span className="text-2xl text-center font-bold text-nowrap">
                Code Bashers
              </span>
            )}
          </div>
          <ul className="flex flex-col align-middle space-y-4 overflow-hidden">
            <SidebarItem to="/logs" name="Audit logs" icon={<FiGrid />} />
            <SidebarItem to="/wallet" name="wallet" icon={<FiUsers />} />
            <SidebarItem
              to="/requests-permissions"
              name="Requests & Permissions"
              icon={<FiSettings />}
            />
          </ul>
        </div>
      </div>
      <style jsx="true">
        {`
          .shadow-right-md {
            box-shadow: 4px 0 10px -2px rgba(0, 0, 0, 0.1); /* Adjust values as needed */
          }
        `}
      </style>
    </div>
  );
};
