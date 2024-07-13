import { useState } from 'react'
import { FaLocationDot,FaBagShopping } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
  <div class="min-h-screen bg-background text-foreground">
  <nav className="">
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <img src="https://i.postimg.cc/qR347xMd/Vector.png" alt="Travlog logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-black">Travlog</span>
        </div>
        <div className="hidden md:flex space-x-8">
      <a href="#" className="hover:font-bold">Home</a>
      <a href="#" className="hover:font-bold">Discover</a>
      <a href="#" className="hover:font-bold">Special Deals</a>
      <a href="#" className="hover:font-bold">Contact</a>
    </div>
    <div className="hidden md:flex space-x-4">
      <a href="#" className="text-black-300 hover:text-black mt-2">Log In</a>
      <button className="bg-[#5D50c6] text-white px-4 py-2 rounded-3xl">Sign Up</button>
    </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Discover
          </a>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Special Deals
          </a>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Log In
          </a>
          <button className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      )}
    </nav>
    <div class="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 mb-12 ">
    <div class="md:w-[412px] w-full h-auto md:h-[577px] space-y-4 md:space-y-[43px] mt-12 md:mt-0">
        <div class="bg-accent text-accent-foreground px-4 py-2 rounded-full inline-block mt-8" ><span class="text-[#F85E9F] ">Explore the world!</span></div>
        <h1 class="text-3xl md:text-5xl font-bold mt-4 md:mt-6">
            Travel <span class="text-[#F85E9F]">top</span> <span class="text-[#F85E9F]">destination</span> <br />
            of the world
        </h1>
        <p class="text-muted-foreground mt-4 md:mt-6">We always make our customers happy by providing as many choices as possible</p>
        <div class="flex flex-col md:flex-row mt-4 md:mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <button class=" ml-4 bg-[#5D50c6] text-white px-4 py-2 md:px-6 md:py-3 rounded-3xl md:rounded-lg md:w-auto w-full">Get Started</button>
            <button class=" ml-3 border border-muted-foreground text-muted-foreground px-4 py-2 md:px-6 md:py-3 rounded-lg md:w-auto w-full mt-4 md:mt-0">Watch Demo</button>
        </div>
    </div>

    <div class="w-full md:w-1/2 h-auto top-[70px] grid grid-cols-2 gap-4 md:gap-[31px] -ml-4 md:-ml-8 relative">
        <img src="https://i.postimg.cc/5t3fGSN4/layer.png" alt="Vector Image Top" class="absolute h-[250px] top-[-70px] left-[-63px] max-w-[132%] z-0" />

        <div class="space-y-4 md:space-y-[32px] z-10">
            <div class="relative w-full h-[150px] md:h-[300px] rounded-[32px] overflow-hidden">
                <img src="https://i.postimg.cc/FswZfhjm/second.jpg" alt="Beautiful destination" class="w-full h-full object-cover shadow-lg rounded-[32px]" />
                <div class="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full">Top Places</div>
            </div>
            <div class="relative w-full h-[150px] md:h-[300px] rounded-[32px] overflow-hidden">
                <img src="https://i.postimg.cc/6qysYBjz/first.jpg" alt="Mountain view" class="w-full h-full object-cover shadow-lg rounded-[32px]" />
            </div>
        </div>

        <div class="relative w-full h-[200px] md:h-[400px] rounded-[32px] overflow-hidden mt-4 md:mt-[95px] z-10">
            <img src="https://i.postimg.cc/wM8JkQkB/dd0de72a24eb00dbce587d2a7a5767a1.jpg" alt="Traveler" class="w-full h-full object-cover shadow-lg rounded-[32px]" />
        </div>
    </div>
</div>


</div>

  {/* second */}
  <div class="max-w-full mx-auto px-4 md:px-6 w-full md:w-[1250px] h-auto md:h-[96px] top-[1000px] py-4 md:py-[32px] flex justify-center items-center bg-white z-50">
    <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
      
        <div class="flex justify-center space-x-2 md:space-x-4">
            <img src="https://i.postimg.cc/QM6tbT8B/Group.png" alt="tripadvisor logo" class="h-6 md:h-8" />
            <img src="https://i.postimg.cc/5013wDt9/Group-2.png" alt="Expedia logo" class="h-6 md:h-8" />
            <img src="https://i.postimg.cc/Kc1Nt7GM/Group-1.png" alt="Booking.com logo" class="h-6 md:h-8" />
        </div>
   
        <div class="flex justify-center space-x-2 md:space-x-4 mt-4 md:mt-0">
            <img src="https://i.postimg.cc/XqWYNcxz/Group-9235.png" alt="airbnb logo" class="h-6 md:h-8" />
            <img src="https://i.postimg.cc/W3b5BQcW/Group-3.png" alt="ORBITZ logo" class="h-6 md:h-8" />
        </div>
    </div>
</div>





  <section class="py-12">
    <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-1/3 md:mb-0 flex flex-col justify-center items-center md:items-start mx-auto">
        <h2 class="text-[#F85E9F] text-md font-medium mb-2 ms-6">SERVICES</h2>
        <h1 class="text-3xl font-bold text-center">Our top value categories for you</h1>
      </div>
      <div class="md:w-2/3 flex flex-col md:flex-row md:space-x-4 overflow-x-auto">
  <div class="bg-white p-16 rounded-lg shadow-md w-80 h-112 mx-auto mb-4 transition-transform transform hover:scale-105">
    <img src="https://i.postimg.cc/tCVc9qyL/95b42507bb1f398a48f75c5b82f8a709.png" alt="Best Tour Guide" class="w-16 h-16 mx-auto mb-4" />
    <h3 class="text-xl font-semibold mb-2">Best Tour Guide</h3>
    <p class="text-gray-500">What looked like a small patch of purple grass, above five feet.</p>
  </div>
  <div class="bg-white p-16 rounded-lg shadow-md w-80 h-112 mx-auto mb-4 transition-transform transform hover:scale-105">
    <img src="https://i.postimg.cc/LsmQkjfp/421be3c5eec7b9562b60e0e4c7449aeb.png" alt="Easy Booking" class="w-16 h-16 mx-auto mb-4" />
    <h3 class="text-xl font-semibold mb-2">Easy Booking</h3>
    <p class="text-gray-500">Square, was moving across the sand in their direction.</p>
  </div>
  <div class="bg-white p-16 rounded-lg shadow-md w-80 h-112 mx-auto mb-4 transition-transform transform hover:scale-105">
    <img src="https://i.postimg.cc/65NBfcTD/b60e2723cae3d209928c2337a1961b6f.png" alt="Weather Forecast" class="w-16 h-16 mx-auto mb-4" />
    <h3 class="text-xl font-semibold mb-2">Weather Forecast</h3>
    <p class="text-gray-500">Square, was moving across the sand in their direction.</p>
  </div>
</div>

        </div>
    </div>
</section>



{/* third */}
<div class="bg-background text-foreground p-6">
    <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div class="mb-4 md:mb-0">
                <h2 class="text-2xl text-[#F85E9F] font-semibold">TOP DESTINATION</h2>
                <h1 class="text-3xl font-bold">Explore top destination</h1>
            </div>
            <div class="flex justify-end space-x-2">
                <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-full transition-colors duration-300">
                    <img aria-hidden="true" alt="left-arrow" src="https://openui.fly.dev/openui/24x24.svg?text=←" />
                </button>
                <button class="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-full transition-colors duration-300">
                    <img aria-hidden="true" alt="right-arrow" src="https://openui.fly.dev/openui/24x24.svg?text=→" />
                </button>
            </div>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="bg-card rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img class="rounded-t-lg h-96 object-cover w-full" src="https://i.postimg.cc/fyRnh15H/79c7260df5f1156aad00eb37f61eb635.jpg"
                     alt="Paradise Beach, Bantayan Island" />
                <div class="p-12">
                    <h3 class="text-lg font-semibold">Paradise Beach, Bantayan Island</h3>
                    <p class="text-muted-foreground">Rome, Italy</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-red-500 font-bold">$550.16</span>
                        <span class="flex items-center text-yellow-500"> 4.8 <img aria-hidden="true" alt="star" src="https://openui.fly.dev/openui/16x16.svg?text=⭐" /> </span>
                    </div>
                </div>
            </div>
            <div class="bg-card rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img class="rounded-t-lg h-96 object-cover w-full" src="https://i.postimg.cc/W3MgPHtJ/58f473eb80bbbdacc2064524ba945ebc.jpg" alt="Ocean with full of Colors" />
                <div class="p-12">
                    <h3 class="text-lg font-semibold">Ocean with full of Colors</h3>
                    <p class="text-muted-foreground">Maldives</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-red-500 font-bold">$20.99</span>
                        <span class="flex items-center text-yellow-500"> 4.5 <img aria-hidden="true" alt="star" src="https://openui.fly.dev/openui/16x16.svg?text=⭐" /> </span>
                    </div>
                </div>
            </div>
            <div class="bg-card rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img class="rounded-t-lg h-96 object-cover w-full" src="https://i.postimg.cc/R0wN3nmk/29eac8d6cd489230a1670f433e7e6f8c.jpg" alt="Mountain View, Above the cloud" />
                <div class="p-12">
                    <h3 class="text-lg font-semibold">Mountain View, Above the cloud</h3>
                    <p class="text-muted-foreground">United Arab Emirates</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-red-500 font-bold">$150.99</span>
                        <span class="flex items-center text-yellow-500"> 5.0 <img aria-hidden="true" alt="star" src="https://openui.fly.dev/openui/16x16.svg?text=⭐" /> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





  {/* fourth */}
  <div class="bg-white p-8 flex flex-col md:flex-row items-center">
  <div class="w-full md:w-2/3 flex justify-center relative">
    <img src="https://i.postimg.cc/8cSr0dGH/f47d720edf01f241bef314e912060f6d.png" alt="Traveler with luggage" class="rounded-lg  md:max-w-full h-auto w-398px md:h-auto md:w-auto" />
  </div>
  <div class="md:w-1/3 mt-8 md:mt-0 ml-4 md:ml-8 w-full md:w-441px h-auto">
    <h2 class="text-pink-600 text-lg font-semibold">TRAVEL POINT</h2>
    <h1 class="text-4xl font-bold text-gray-800 mt-2">We helping you find your dream location</h1>
    <p class="text-gray-600 mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
    <div class="grid grid-cols-2 gap-4 mt-8">
      <div class=" p-4 rounded-lg shadow-md text-center">
        <p class="text-2xl font-bold text-[#FF5722]">500+</p>
        <p class=" ">Holiday Package</p>
      </div>
      <div class=" p-4 rounded-lg shadow-md text-center">
        <p class="text-2xl font-bold text-[#FF5722]">100</p>
        <p class="">Luxury Hotel</p>
      </div>
      <div class=" p-4 rounded-lg shadow-md text-center">
        <p class="text-2xl font-bold text-[#FF5722]">7</p>
        <p class="">Premium Airlines</p>
      </div>
      <div class=" p-4 rounded-lg shadow-md text-center">
        <p class="text-2xl font-bold text-[#FF5722]">2k+</p>
        <p class="">Happy Customer</p>
      </div>
    </div>
  </div>
</div>
  {/* fifth */}
  <div class="flex flex-col md:flex-row items-start justify-between p-16 bg-white w-1312 h-997 top-3377 left-128">
  <div class="md:w-549 md:h-772 gap-70">
    <h2 class="text-pink-500 font-semibold mb-8 text-left">KEY FEATURES</h2>
    <h1 class="text-3xl font-bold text-black mb-8 text-left">We offer best services</h1>
    <p class="text-black-600 dark:text-black-300 mb-8 text-left">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

    <div class="space-y-8">
      <div class="flex items-start space-x-8">
      <div className="bg-orange-500 p-8 rounded-lg w-600 h-250">
      <FaLocationDot className="text-white text-3xl" />
    </div>
        <div class="p-8">
          <h3 class="text-lg font-semibold text-black text-left">We offer best services</h3>
          <p class="text-black-600 dark:text-black-300 text-left">Lorem Ipsum is not simply random text</p>
        </div>
      </div>

      <div class="flex items-start space-x-8">
        <div class="bg-yellow-500 p-8 rounded-lg w-600 h-250">
          <FaBagShopping className="text-white text-3xl" />
        </div>
        <div class="p-8">
          <h3 class="text-lg font-semibold text-black text-left">Schedule your trip</h3>
          <p class="text-black-600 dark:text-black-300 text-left">It has roots in a piece of classical</p>
        </div>
      </div>

      <div class="flex items-start space-x-8">
        <div class="bg-pink-500 p-8 rounded-lg w-600 h-250">
        <RiCoupon2Fill className="text-white text-3xl" />
        </div>
        <div class="p-8">
          <h3 class="text-lg font-semibold text-black text-left">Get discounted coupons</h3>
          <p class="text-gray-600 dark:text-black-300 text-left">Lorem Ipsum is not simply random text</p>
        </div>
      </div>
    </div>
  </div>

  <div class="md:w-660 mt-16 md:mt-0 relative ml-14">
    <img class="rounded-none w-full h-full object-cover left-6" src="https://i.postimg.cc/rm8g4DyZ/9c9b3aaf6a23385c43c54d4d96437801.png" alt="Feature image" />
  </div>
</div>
 {/* fifth */}
 <div class="bg-card text-card-foreground py-10 px-5">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <div class="flex items-center mb-4">
        <img src="https://i.postimg.cc/qR347xMd/Vector.png" alt="Travlog logo" class="mr-2" />
        <span class="text-xl font-bold">Travlog</span>
      </div>
      <p class="text-muted-foreground mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
      <div class="flex space-x-4">
        <a href="#" class="text-primary"><img src="https://i.postimg.cc/k5nDpZch/Vector-1.png" alt="Facebook icon" /></a>
        <a href="#" class="text-primary"><img src="https://i.postimg.cc/TPkjB0qf/Group-2.png" alt="Twitter icon" /></a>
        <a href="#" class="text-primary"><img src="https://i.postimg.cc/8cGC4QJ5/Group-8.png" alt="Instagram icon" /></a>
      </div>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">Company</h3>
      <ul class="space-y-2">
        <li><a href="#" class="text-muted-foreground hover:text-primary">About</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-primary">Career</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-primary">Mobile</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">Contact</h3>
      <ul class="space-y-2">
        <li><a href="#" class="text-muted-foreground hover:text-primary">Why Travlog?</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-primary">Partner with us</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-primary">FAQ's</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-primary">Blog</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">Meet Us</h3>
      <ul class="space-y-2">
        <li class="text-muted-foreground">+00 92 1234 56789</li>
        <li class="text-muted-foreground">info@travlog.com</li>
        <li class="text-muted-foreground">205. R Street, New York</li>
        <li class="text-muted-foreground">BD23200</li>
      </ul>
    </div>
  </div>
</div>


    </>
  )
}

export default App
