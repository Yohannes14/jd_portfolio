import React from 'react';

import { FiGithub, FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { roles } from '../../Constants/Roles';

const Work=()=> {
    return (
        <div id="work" className="text-stone-300 w-full h-auto md:min-h-screen grow grid grid-cols-12 gap-4 justify-start md:py-8 md:mb-8 md:pt-24 md:px-14">

        <div className="w-full col-span-12 flex flex-col items-center md:px-6 text-darker-2 rounded-xl">
            <div className="flex flex-row justify-between md:justify-between w-full items-center mb-8 md:mb-16">
                <div className='h-0.5 flex-grow bg-gradient-to-l from-darker-2 to-light-1'></div>
                <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                <div className="font-bold text-3xl md:text-5xl text-darker-2 mx-3 md:mx-6">
                    Work Experiences
                </div>
                <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                <div className='h-0.5 flex-grow bg-gradient-to-r from-darker-2 to-light-1'></div>
            </div>
            <div className="grow w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 pr-0  justify-center items-center">
                {roles.map((role, index) => (
                    <div key={index} className="flex flex-col w-full cursor-pointer">
                        <div className="flex flex-col gap-1 bg-white p-4 md:p-6 group-hover:translate-y-4 duration-200">
                            <div className="text-black text-xl md:text-2xl font-bold font-space-grotesk">
                                {role.company}
                            </div>
                            <div className="text-black text-md md:text-lg font-space-grotesk mb-2">
                                {role.title}
                            </div>
                            <div className="text-sm font-normal text-gray-400">
                                {role.duration}
                            </div>
                            <div className="flex flex-row items-start gap-4">
                                {role.description}
                            </div>
                            <div className="text-md font-bold text-darker-2 font-roboto mt-2">
                                Techs Used:
                            </div>
                            <div className="flex flex-row flex-wrap gap-5 my-2">
                                {role.techsUsed.map((tech, index) => (
                                    <span key={index} className="bg-gray-200 rounded-lg py-1 px-3 text-sm font-semibold text-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Work;