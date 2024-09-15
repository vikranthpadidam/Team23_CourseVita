import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import  course  from "../assets/home/course.png";
import Container from "./Container";

function MobileNavLinks({ handleNavLinkClick }) {
  return (
    <div className="bg-[#410F11] py-2 text-white mt-2">
      <ScrollLink
        to="/"
        spy={true}
        smooth={true}
        offset={-70}
        duration={900}
        className="block py-2 px-4 hover:bg-[#410F11] hover:text-white"
      >
        Home
      </ScrollLink>
      {/* ... (repeat for other ScrollLink components) */}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [notifications] = useState([
    "MBA & MCA TSICET-2023 CONVENOR QUOTA – SPOT ADMISSIONS",
    "B.E. and M.E./M.Tech Courses for Working Professionals",
    "TSICET-2023 Special Phase Admissions/Reporting at the Allotted College",
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Notifications */}
      <div className="bg-[#410F11] text-white py-2 text-center overflow-hidden">
        <div className="flex items-center justify-start">
          {/* Notification bar (optional) */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="py-3 z-42 relative"> {/* Reduced padding for thinner navbar */}
        <Container>
          <div className="flex items-center justify-between h-12"> {/* Reduced height */}
            <div className="flex items-center gap-4">
              <img
                className="h-20 w-20" // Adjusted logo size for thin navbar
                src={course}
                alt="Workflow"
              />
              {isMobileView ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden text-900 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              ) : (
                <div className="hidden md:block"></div>
              )}
            </div>

            <div className="flex gap-3 items-center">
              <Link to="/login" className="hidden md:block text-[#264C20] font-bold hover:bg-[#410F11] hover:text-white px-3 py-1 rounded-md cursor-pointer">
                Login
              </Link>
              <Link to="/register" className="hidden md:block text-[#264C20] font-bold hover:bg-[#410F11] hover:text-white px-3 py-1 rounded-md cursor-pointer">
                Signup
              </Link>
            </div>
          </div>

          {isMobileView && isOpen && (
            <MobileNavLinks handleNavLinkClick={handleNavLinkClick} />
          )}
        </Container>
      </nav>

      {/* Red color bar with centered columns separated by a white line */}
      {isMobileView ? null : (
        <div className="bg-[#410F11] h-8 flex items-center text-white"> {/* Reduced height */}
          <ScrollLink
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="flex-1 text-center"
          >
            Home
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="whycbit"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="flex-1 text-center"
          >
            Why Us?
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="courseinfo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="flex-1 text-center"
          >
            Courses
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          
          <div className="w-px h-full bg-white"></div> {/* White line */}
          
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="fees"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="flex-1 text-center"
          >
            Fee Structure
          </ScrollLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;