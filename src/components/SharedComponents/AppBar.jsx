import React, {useState} from "react";

import { FiAlignJustify, FiX } from "react-icons/fi";
import { menus } from "../../Utils/Functions";

// FaDownload

function AppBar({scrolldown, scrollZero}){
    const [openSide, setOpenSide] = useState(false);

    const topClass = "fixed top-0 z-50 bg-darker-2 flex flex-col md:flex-row w-full h-16 md:h-20 items-center justify-center gap-6 px-8 py-4 md:py-0 duration-500 drop-shadow-xl";
    const  topClassScroll = topClass + " -translate-y-44 md:-translate-y-24 duration-500";

    const scrollToRef = (id) => {
        const reftp = document.getElementById(id);
        reftp.scrollIntoView({behavior:'smooth'});
    }

    return(
        <div className={scrolldown ? topClassScroll : topClass}>

            <div className="flex grow w-full items-center justify-between md:gap-4">
                <div className="text-orange-dark font-roboto font-bold text-3xl flex flex-col"> 
                    <div className="flex flex-row">
                    {openSide && (
                    <button className="group md:hidden" onClick={() => setOpenSide(false)}>
                        <FiX className="text-light-1 font-roboto text-3xl group-hover:text-light-1"/>
                    </button>
                )}

                {!openSide && (
                    <button className="group md:hidden" onClick={() => setOpenSide(true)}>
                        <FiAlignJustify className="text-light-1 font-roboto text-3xl group-hover:text-light-1"/>
                    </button>
                )}
                    <div className="flex md:hidden text-light-1 pl-3"> JD. </div>
                    </div>
                  
                    <div className="hidden md:flex"> JD </div>
                </div>
                
            </div>

            <ul className="gap-6 md:gap-8 items-center justify-center h-full hidden md:flex">
                {menus.map((menu) => {
                    return (
                        <li id={menu.id}>
                            <button 
                            onClick={(e)=>{
                                e.preventDefault();
                                scrollToRef(menu.url);
                                setOpenSide(false);
                            }}
                            className="group flex flex-col gap-1 tracking-wider md:tracking-widest text-md font-thin text-light-1 hover:text-orange-dark hover:cursor-pointer font-roboto duration-200">
                                <div className="flex gap-2 items-center">
                                 {menu.name}
                                </div>
                                <div className="flex w-0 group-hover:w-full h-0.5 bg-orange-dark rounded-full duration-200">
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className={"fixed top-0 left-0 flex flex-col w-full bg-darker-2 p-8 gap-6 md:hidden mt-20 duration-500 " + (openSide?"translate-x-0 opacity-100":"-translate-x-full opacity-0")}>
                <ul className="flex flex-col gap-6 h-full">
                    {menus.map((menu) => {
                        return (
                            <li id={menu.id}>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    scrollToRef(menu.url);
                                    setOpenSide(false);
                                }} className="group flex-col gap-1 tracking-wider md:tracking-widest text-md font-thin text-light-1 inline hover:text-red-400 hover:cursor-pointer font-roboto duration-200">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-red-400">{menu.icon}</span> {menu.name}
                                    </div>
                                    <div className="flex w-0 group-hover:w-full h-0.5 bg-red-500 rounded-full duration-200">

                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            
        </div>
    );
}

export default AppBar;