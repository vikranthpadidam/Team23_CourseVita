import React from 'react';
import  course  from "../assets/home/course.png";
import { 
  BsTwitter, 
  BsFacebook, 
  BsLinkedin, 
  BsYoutube, 
  BsRss 
} from 'react-icons/bs';
import Container from "./Container";
// import Trusted from './Home/Trusted'

export default function Footer() {
  return (
    <footer className="bg-red-50 py-14 text-BLACK">
      <Container>
        <div className="grid place-items-center sm:text-left text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <img src={course} alt="CBIT Logo" className="w-50 h-75" />
          <div className="sm:mt-0 mt-14">
            <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4 text-[#410F11]">Company</h1>
            <ul className='text-center'>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4 text-[#410F11]">Browser</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Why Us?</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Eligibility</a>
              </li>
              <li>
                <a href="#">Ranking</a>
              </li>
              <li>
                <a href="#">Fee Structure</a>
              </li>
            </ul>
          </div>
          <div>
          <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4 text-[#410F11]">connect</h1>
            <ul>
              <li className="flex items-center"> {/* Added flex and items-center */}
                <a href="#" className="flex items-center"> {/* Added flex and items-center */}
                  <BsTwitter className="mr-2" /> Twitter {/* Added margin to the right */}
                </a>
              </li>
              <li className="flex items-center"> {/* Added flex and items-center */}
                <a href="#" className="flex items-center"> {/* Added flex and items-center */}
                  <BsFacebook className="mr-2" /> Facebook {/* Added margin to the right */}
                </a>
              </li>
              <li className="flex items-center"> {/* Added flex and items-center */}
                <a href="#" className="flex items-center"> {/* Added flex and items-center */}
                  <BsLinkedin className="mr-2" /> Linkedin {/* Added margin to the right */}
                </a>
              </li>
              <li className="flex items-center"> {/* Added flex and items-center */}
                <a href="#" className="flex items-center"> {/* Added flex and items-center */}
                  <BsYoutube className="mr-2" /> Youtube {/* Added margin to the right */}
                </a>
              </li>
              <li className="flex items-center"> {/* Added flex and items-center */}
                <a href="#" className="flex items-center"> {/* Added flex and items-center */}
                  <BsRss className="mr-2" /> RSS {/* Added margin to the right */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
