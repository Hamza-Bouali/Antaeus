import { useState } from 'react'




export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
  }

  const [focus, setFocus] = useState({1: false, 2: false, 3: false, 4: false});
    
    return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 m-0 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 m-0">
              <a href="https://flowbite.com/" className="flex items-center space-x-0 rtl:space-x-reverse"> 
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">anti-7awadit</span>
              </a>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                  <button 
                      onClick={toggleMenu}
                      type="button" 
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  >
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
              </div>
              <div className={`items-start  ${isMenuOpen ? '' : 'hidden'} w-full md:flex md:justify-start md:w-auto `} id="navbar-sticky">
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  r md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                      <a href="#" onClick={()=>{setFocus([true,false,false,false])}} class={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</a>
                    </li>
                    <li>
                      <a href="#" onClick={()=>{setFocus([false,true,false,false])}} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                      <a href="#" onClick={()=>{setFocus([false,false,true,false])}} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                      <a href="#" onClick={()=>{setFocus([false,false,false,true])}} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                 </ul>
              </div>
          </div>
      </nav>
  )
}