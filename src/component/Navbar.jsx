

const Navbar = () => {
  return (
    
    <nav class="bg-white border-gray-200 dark:bg-[#800000] shadow-lg fixed w-full z-50">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div class="flex items-center"><a href="/" class="flex items-center">
     
        </a><span class="self-center text-2xl font-semibold whitespace-nowrap text-[#B22222]
                dark:text-white hidden sm:inline-block">Shri Vinayaga Hr. Sec. School</span>
                      <span class="self-center text-xl font-semibold whitespace-nowrap text-[#B22222]
                           dark:text-white sm:hidden">SVHSS</span>
                           </div>
       <button class="md:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2
              focus:ring-[#F9BF3B]" aria-expanded="false" aria-label="Toggle navigation menu">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                     class="lucide lucide-menu w-6 h-6 text-[#3E2723] dark:text-white"><line x1="4" 
                                           x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6">
                                                  </line><line x1="4" x2="20" y1="18" y2="18"></line>
                                                     </svg></button><ul class="hidden md:flex space-x-8 font-medium">
                                                         <li><a class="text-[#3E2723] cursor-pointer hover:text-[#B22222]
                                                          dark:text-white dark:hover:text-[#F9BF3B] transition-all
                                                           text-[#E25822] font-bold">Home</a>
                                                           </li><li>
                                                            
          <a class="text-[#3E2723] cursor-pointer hover:text-[#B22222] dark:text-white 
          dark:hover:text-[#F9BF3B] transition-all">About</a></li><li>
            <a class="text-[#3E2723] cursor-pointer hover:text-[#B22222] dark:text-white
             dark:hover:text-[#F9BF3B] transition-all">Achievements</a></li><li>
              <a class="text-[#3E2723] cursor-pointer hover:text-[#B22222] dark:text-white
               dark:hover:text-[#F9BF3B] transition-all">Gallery</a></li><li>
            <a class="text-[#3E2723] cursor-pointer hover:text-[#B22222] dark:text-whit
             dark:hover:text-[#F9BF3B] transition-all">Activity</a></li><li>
            <a class="text-[#3E2723] cursor-pointer hover:text-[#B22222] dark:text-white 
             dark:hover:text-[#F9BF3B] transition-all">Contact</a></li></ul></div>

              <div class="absolute top-0 left-0 w-3/4 h-full bg-[#800000] dark:bg-[#800000]
                  md:hidden transition-transform duration-300 shadow-lg z-50 -translate-x-full">
                     <div class="flex items-center justify-between p-4 border-b border-gray-600">
                      <span class="text-white text-xl font-bold">SVHSS</span>
                      <button class="p-2 rounded-lg focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-white">
                            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div>
                            
                  <ul class="flex flex-col p-4 space-y-4"><li><a class="block py-2 px-4 text-white cursor-pointer *
                        hover:bg-[#B22222] transition-all active">Home</a></li><li>
                  <a class="block py-2 px-4 text-white cursor-pointer hover:bg-[#B22222] transition-all">About</a></li><li>
                <a class="block py-2 px-4 text-white cursor-pointer hover:bg-[#B22222] transition-all">Achievements</a></li><li>
                <a class="block py-2 px-4 text-white cursor-pointer hover:bg-[#B22222] transition-all">Gallery</a></li><li>
                <a class="block py-2 px-4 text-white cursor-pointer hover:bg-[#B22222] transition-all">Activity</a></li><li>
              <a class="block py-2 px-4 text-white cursor-pointer hover:bg-[#B22222] transition-all">Contact</a></li></ul></div>
              </nav>
    
   
   
  )
}

export default Navbar;
