// import imgt1 from '../assets/frame-761@2x.png'
// import imgt2 from '../assets/group-333@2x.png'
// import imgt3 from '../assets/group@2x.png'

// import imgt4 from '../assets/frame-761@2x.png'
// import React, {useState} from 'react'


// export default function Clock() {

//     const [showClock, setShowClock] = useState(true);

//     const toggleClock = () => {
//         showClock===false ? setShowClock(true) : setShowClock(false);
//     }

//     return (
//         <div>
//             <div
//                 className={` flex items-center justify-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "hidden" : ""}`}>
//                 <div className="w-[380px] h-[380px]">
//                     <div
//                         className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
//                         <img
//                             className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
//                             alt="" src={imgt1} />
//                         <div
//                             className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
//                         </div>
//                         <div className="absolute top-[94.61px] left-[calc(50%_-_74.09px)] font-medium ">Chapter 1</div>
//                         <b
//                             className="absolute top-[calc(50%_-_28.93px)] left-[calc(50%_-_86.79px)] text-[39.09px] text-left ">00:48:02</b>

//                         <img
//                             className="absolute h-[8.23%] w-[26.75%] top-[66.87%] right-[36.63%] bottom-[24.9%] left-[36.63%] max-w-full overflow-hidden max-h-full object-cover"
//                             alt="" src={imgt2} />
//                         <img onClick={toggleClock}
//                             className="h-[6.17%] w-[5.86%] max-w-full cursor-pointer overflow-hidden max-h-full object-cover"
//                             alt="" src={imgt3} />
//                     </div>
//                 </div>
//             </div>

//             <div id="content"
//                 className={` flex justify-center items-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "" : "hidden"}`}>
//                 <div className="w-[380px] h-[380px]">
//                     <div
//                         className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
//                         <img
//                             className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
//                             alt="" src={imgt4} />
//                         <div className=" flex flex-col justify-between items-center mt-24 ">
//                             <div
//                                 className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
//                             </div>
//                             <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
//                                 <div className="text-xl">Focus time</div>
//                                 <div className="text-[39.09px] text-left d-flex">
//                                     <input type="number" className="w-[66px] h-[34px] border rounded-2xl text-center text-l" placeholder="00hr" />
//                                     <input type="number" className="w-[66px] h-[34px] rounded-2xl text-center text-l" placeholder="00min" />
//                                 </div>
//                             </div>
                            
//                             <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
//                                 <div
//                                     className="text-xl inline-block overflow-hidden max-h-full object-cover">
//                                     Break time</div>
//                                 <div className="text-[39.09px] text-left d-flex inline-block">
//                                     <input type="number" className="w-[66px] h-[34px] border rounded-m rounded-2xl text-center text-l"
//                                         placeholder="min" />
//                                 </div>
//                             </div>
                            
//                             <div className="text-[39.09px] text-left d-flex z-20">
//                                 <button className="w-[128px] h-[40px] rounded-2xl cursor-pointer">start</button>
//                             </div>
//                         </div>
                        
//                         {/* <img alt="" src={imgt2} /> */}
                        
//                     </div>
//                     <img onClick={toggleClock}
//                             className="aboslute top-0 left-0 cursor-pointer h-[6.17%] w-[5.86%]  max-w-full overflow-hidden max-h-full object-cover" alt=""
//                             src={imgt3} />
//                 </div>
//             </div>
//         </div>
//     )
// }




// import imgt1 from '../assets/frame-761@2x.png';
// import imgt2 from '../assets/group-333@2x.png';
// import imgt3 from '../assets/group@2x.png';
// import imgt4 from '../assets/frame-761@2x.png';
// import React, { useState, useEffect } from 'react';

// export default function Clock() {
//     const [showClock, setShowClock] = useState(true);
//     const [focusHours, setFocusHours] = useState(0);
//     const [focusMinutes, setFocusMinutes] = useState(0);
//     const [breakTime, setBreakTime] = useState(0);
//     const [totalTime, setTotalTime] = useState('00:00:00');

//     useEffect(() => {
//         let totalSeconds = (focusHours * 60 + focusMinutes + breakTime) * 60;
//         const timer = setInterval(() => {
//             totalSeconds--;
//             const hours = Math.floor(totalSeconds / 3600);
//             const minutes = Math.floor((totalSeconds % 3600) / 60);
//             const seconds = totalSeconds % 60;
//             setTotalTime(
//                 `${hours.toString().padStart(2, '0')}:${minutes
//                     .toString()
//                     .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
//             );
//             if (totalSeconds <= 0) clearInterval(timer);
//         }, 1000);
//         return () => clearInterval(timer);
//     }, [focusHours, focusMinutes, breakTime]);

//     const toggleClock = () => {
//         setShowClock(!showClock);
//     };

//     const handleStart = () => {
//         setShowClock(true);
//     };

//     return (
//         <div>
//             <div className={`flex items-center justify-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "hidden" : ""
//                 }`}>
//                 <div className="w-[380px] h-[380px]">
//                     <div className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
//                         <img
//                             className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
//                             alt="" src={imgt1} />
//                         <div
//                             className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
//                         </div>
//                         <div className="absolute top-[94.61px] left-[calc(50%_-_74.09px)] font-medium ">Chapter 1</div>
//                         <b className="absolute top-[calc(50%_-_28.93px)] left-[calc(50%_-_86.79px)] text-[39.09px] text-left ">{totalTime}</b>
//                         <img
//                             className="absolute h-[8.23%] w-[26.75%] top-[66.87%] right-[36.63%] bottom-[24.9%] left-[36.63%] max-w-full overflow-hidden max-h-full object-cover"
//                             alt="" src={imgt2} />
//                         <img onClick={toggleClock}
//                             className="h-[6.17%] w-[5.86%] max-w-full cursor-pointer overflow-hidden max-h-full object-cover"
//                             alt="" src={imgt3} />
//                     </div>
//                 </div>
//             </div>

//             <div id="content"
//                 className={`flex justify-center items-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "" : "hidden"
//                 }`}>
//                 <div className="w-[380px] h-[380px]">
//                     <div className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
//                         <img
//                             className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
//                             alt="" src={imgt4} />
//                         <div className="flex flex-col justify-between items-center mt-24 ">
//                             <div className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
//                             </div>
//                             <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
//                                 <div className="text-xl">Focus time</div>
//                                 <div className="text-[39.09px] text-left d-flex">
//                                     <input type="number" className="w-[66px] h-[34px] border rounded-2xl text-center text-l" placeholder="00hr" onChange={(e) => setFocusHours(parseInt(e.target.value))} />
//                                     <input type="number" className="w-[66px] h-[34px] rounded-2xl text-center text-l" placeholder="00min" onChange={(e) => setFocusMinutes(parseInt(e.target.value))} />
//                                 </div>
//                             </div>
//                             <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
//                                 <div className="text-xl inline-block overflow-hidden max-h-full object-cover">
//                                     Break time</div>
//                                 <div className="text-[39.09px] text-left d-flex inline-block">
//                                     <input type="number" className="w-[66px] h-[34px] border rounded-m rounded-2xl text-center text-l" placeholder="min" onChange={(e) => setBreakTime(parseInt(e.target.value))} />
//                                 </div>
//                             </div>
//                             <div className="text-[39.09px] text-left d-flex z-20">
//                                 <button className="w-[128px] h-[40px] rounded-2xl cursor-pointer" onClick={handleStart}>start</button>
//                             </div>
//                         </div>
//                     </div>
//                     <img onClick={toggleClock}
//                         className="aboslute top-0 left-0 cursor-pointer h-[6.17%] w-[5.86%] max-w-full overflow-hidden max-h-full object-cover" alt=""
//                         src={imgt3} />
//                 </div>
//             </div>
//         </div>
//     );
// }


import imgt1 from '../assets/frame-761@2x.png';
import imgt2 from '../assets/group-333@2x.png';
import imgt3 from '../assets/group@2x.png';
import imgt4 from '../assets/frame-761@2x.png';
import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [showClock, setShowClock] = useState(true);
    const [focusHours, setFocusHours] = useState(0);
    const [focusMinutes, setFocusMinutes] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const [totalTime, setTotalTime] = useState('00:00:00');

    useEffect(() => {
        let totalSeconds = (focusHours * 60 + focusMinutes + breakTime) * 60;
        const timer = setInterval(() => {
            totalSeconds--;
            if (totalSeconds < 0) {
                clearInterval(timer);
                setTotalTime('00:00:00');
            } else {
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                setTotalTime(
                    `${hours.toString().padStart(2, '0')}:${minutes
                        .toString()
                        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [focusHours, focusMinutes, breakTime]);

    const toggleClock = () => {
        setShowClock(!showClock);
    };

    const handleStart = () => {
        setShowClock(true);
    };

    return (
        <div>
            <div className={`flex items-center justify-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "hidden" : ""
                }`}>
                <div className="w-[380px] h-[380px]">
                    <div className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
                            alt="" src={imgt1} />
                        <div
                            className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
                        </div>
                        <div className="absolute top-[94.61px] left-[calc(50%_-_74.09px)] font-medium ">Chapter 1</div>
                        <b className="absolute top-[calc(50%_-_28.93px)] left-[calc(50%_-_86.79px)] text-[39.09px] text-left ">{totalTime}</b>
                        <img
                            className="absolute h-[8.23%] w-[26.75%] top-[66.87%] right-[36.63%] bottom-[24.9%] left-[36.63%] max-w-full overflow-hidden max-h-full object-cover"
                            alt="" src={imgt2} />
                        <img onClick={toggleClock}
                            className="h-[6.17%] w-[5.86%] max-w-full cursor-pointer overflow-hidden max-h-full object-cover"
                            alt="" src={imgt3} />
                    </div>
                </div>
            </div>

            <div id="content"
                className={`flex justify-center items-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "" : "hidden"
                }`}>
                <div className="w-[380px] h-[380px]">
                    <div className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
                            alt="" src={imgt4} />
                        <div className=" flex flex-col justify-between items-center mt-24 ">
                            <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
                                <div className="text-xl">Focus time</div>
                                <div className="text-[39.09px] text-left d-flex">
                                    <input type="number" className="w-[66px] h-[34px] border rounded-2xl text-center text-l" placeholder="00hr" onChange={(e) => setFocusHours(parseInt(e.target.value))} />
                                    <input type="number" className="w-[66px] h-[34px] rounded-2xl text-center text-l" placeholder="00min" onChange={(e) => setFocusMinutes(parseInt(e.target.value))} />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
                                <div className="text-xl inline-block overflow-hidden max-h-full object-cover">
                                    Break time</div>
                                <div className="text-[39.09px] text-left d-flex inline-block">
                                    <input type="number" className="w-[66px] h-[34px] border rounded-m rounded-2xl text-center text-l" placeholder="min" onChange={(e) => setBreakTime(parseInt(e.target.value))} />
                                </div>
                            </div>
                            <div className="text-[39.09px] text-left d-flex z-20">
                                <button className="w-[128px] h-[40px] rounded-2xl cursor-pointer" onClick={handleStart}>start</button>
                            </div>
                        </div>
                    </div>
                    <img onClick={toggleClock}
                        className="absolute top-0 left-0 cursor-pointer h-[6.17%] w-[5.86%] max-w-full overflow-hidden max-h-full object-cover" alt=""
                        src={imgt3} />
                </div>
            </div>
        </div>
    );
}
