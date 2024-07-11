import {  FaChevronLeft } from "react-icons/fa";
import { Skills } from '../../Constants/Skills';
import { Profile } from '../../Constants/Profile';

function HomePage() {

    return (
        <div id="home" className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2 lg:mt-[32px] md:mt-[32px]">
            <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
                <div className="grid grid-cols-12 grid-flow-row w-full items-center justify-center">
                    <div className="col-span-12 w-full flex flex-col items-center">
                        <div className='flex flex-col md:flex-row md:items-center gap-6'>
                            <div className='flex flex-col justify-start text-center md:text-left'>
                                <div className='group flex flex-col items-center md:items-start'>
                                    <p
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roboto font-bold duration-300 uppercase">
                                        {Profile.name}
                                    </p>
   
                                        <div className='flex flex-row gap-4 items-center'>
                                            <p className="text-xl lg:text-3xl text-slate-500 font-roboto font-thin text-center">{Profile.position}</p>
                                            <div className='hidden md:flex h-0 w-0 bg-orange-dark rotate-45 group-hover:w-2 group-hover:h-2 duration-300'></div>
                                        </div>
                                </div>
                                <br />
                                <div className="flex justify-center md:justify-start">
                                    <div className="font-roboto font-normal text-md md:text-lg text-slate-500 lg:w-2/3 text-justify md:text-left">
                                        {Profile.statement}
                                    </div>
                                </div>
                                <br />
                                <div className="flex gap-6 justify-center md:justify-start items-center">
                                    <div className="flex group items-center">
                                        <a href={Profile.resume} target="_blank" rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-full font-roboto text-white text-md bg-darker-2 group-hover:bg-white group-hover:text-orange-dark duration-200">
                                            My Resume
                                        </a>
                                        <FaChevronLeft className='w-2 h-2 -rotate-180 group-hover:w-4 group-hover:h-4 invisible -mr-2 group-hover:mr-0 group-hover:visible duration-200' />
                                    </div>
                                </div>
                            </div>
                            <img
                                src={Profile.picture}
                                alt="profile pic"
                                className="hidden sm:block w-40 md:w-64 h-42 md:h-66 bg-white rounded-full hover:cursor-pointer object-cover duration-200"
                            />
                        </div>
                        <div className='flex flex-col gap-2 items-center mt-8'>
                            <p className="text-md lg:text-lg text-slate-500 font-roboto text-center"> SKILLS </p>
                                <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                                    {Skills.map((skill) => (
                                        <div key={skill.id} className='px-5 py-3 rounded-full bg-white flex gap-3 items-center hover:scale-110 duration-200'>
                                            <skill.icon size={24} className='text-blue-600'  />
                                            <p className="text-sm text-slate-500 font-roboto text-center">{skill.title}</p>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
