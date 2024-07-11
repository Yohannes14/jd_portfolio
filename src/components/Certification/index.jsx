import React, { useState, useEffect } from "react";

import { FiAward, FiArrowRightCircle } from "react-icons/fi";
import { Certifications } from "../../Constants/Certifications";

function Certification() {

    return (
        <div id="certificates" className="text-slate-400 font-roboto w-full flex flex-col items-center md:items-start gap-0 md:gap-4 justify-start md:py-8 md:px-20 md:mb-32 md:pt-24">
            <div className="flex flex-row justify-between md:justify-between w-full items-center mb-8 md:mb-16">
                <div className='h-0.5 flex-grow bg-gradient-to-l from-darker-2 to-light-1'></div>
                <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                <div className="font-bold text-3xl md:text-5xl text-darker-2 mx-3 md:mx-6">
                    Certifications
                </div>
                <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                <div className='h-0.5 flex-grow bg-gradient-to-r from-darker-2 to-light-1'></div>
            </div>
            {Certifications !== null && (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
                    {Certifications.map(({ name, org, date, id, link }) => {
                        return (
                            <a href={link}>
                                <div className="col-span-1 h-full flex hover:-translate-y-2 hover:shadow-lg rounded-2xl duration-300 hover:cursor-pointer group">
                                    <div className="w-full flex flex-col p-3 md:p-6 rounded-lg md:rounded-2xl bg-darker-2">

                                        {/* <br /> */}
                                        <div className="text-md md:text-xl font-bold mb-2 group-hover:text-red-400 duration-200">
                                            {name}
                                        </div>
                                        <div className="text-md font-normal mb-4 hidden md:flex">
                                            {date}
                                        </div>

                                        <div className="flex flex-col">
                                            <div className="text-sm font-normal mr-2">
                                                Provider: {org}
                                            </div>
                                        </div>

                                        <div className="grow"></div>
                                        <div className="flex justify-end mt-4">
                                            <div className="flex gap-4">
                                                <a href={link} className="hover:text-red-400"> <FiArrowRightCircle className="w-4 h-4 md:w-8 md:h-8 " /> </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Certification;