import React, {useEffect, useState, useContext} from 'react';
import { AppBar, HomePage, Work, Contact, Projects, Certification } from './components';
import {Social_link, Profile} from './Constants/Profile'

function LandingPage() {
  
  let lastYOffset = 0;
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollZero, setScrollZero] = useState(true);
  
  const onScroll = (event) => {
    
    const yoff = window.pageYOffset;
    
    if (yoff === 0){
      setScrollUp(true);
      setScrollZero(true);
      lastYOffset = 0;
    }else{
      setScrollZero(false);
      if (yoff > lastYOffset){
        setScrollUp(false);
        lastYOffset = window.pageYOffset;
      }else{
        setScrollUp(true);
        lastYOffset = window.pageYOffset;
      }
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onScroll={onScroll} className="flex flex-col bg-light-1 px-4 md:px-20 items-center scroll-smooth gap-6">
      <div className="flex flex-col w-full items-center justify-center md:min-h-screen px-0 md:px-12 pt-24 md:pt-4">
        <AppBar scrolldown={!scrollUp} scrollZero={scrollZero}/>
        <HomePage/>
      </div>
      <Work/>
      <Projects/>
      <Certification/>
      <Contact/>
      
      <div className='flex flex-col items-center'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
          <a className="text-md text-darker-2 font-medium" href='mailto:surafel.mulaw@gmail.com'>
            {Profile.email}
          </a>
          <div className="text-md text-darker-2 font-medium">
            {Profile.phone}
          </div>
          <div className="text-md text-darker-2 font-medium">
            {Profile.location}
          </div>
        </div>
        <div className="text-darker-2 flex justify-center mb-6 mt-2 text-md">
          Made with ❤ by <p className="ml-2 text-red-600 font-medium"> Yohannes Degu</p>
          </div>
      </div>

      <div className="hidden md:flex fixed z-200 bottom-0 left-0 flex-col justify-center items-center px-4 md:px-8 gap-6 min-h-screen">
        <div className="grow w-0.5 h-full bg-red-500 invisible md:visible md:mt-36 mb-2 bg-gradient-to-t from-slate-500 to-light-1 rounded-full"></div>

       {Social_link.map((social) =>(
         <a href={`${social.link}`} className='w-6 h-6 group'>
         {<social.icon className='w-6 h-6 text-darker-2 group-hover:text-red-400 duration-300 group-hover:-mt-2'/>}
       </a>

       ))}

        <div className="grow"></div>
      </div>

    </div>
  );
}

export default LandingPage;
