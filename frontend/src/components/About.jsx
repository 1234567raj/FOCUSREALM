import React from "react";
import { useState, useEffect } from 'react';


import sec3img from '../assets/images/young man rejoicing success.png'
import sec4img from '../assets/images/Group 359.png'

import im2 from '../assets/images/AI and artificial neural networks.png'
import im1 from '../assets/images/Gaming controller and retro game elements.png'
import im3 from '../assets/images/element3.png'
import im4 from '../assets/images/element4.png'
import im5 from '../assets/images/element5.png'
import im6 from '../assets/images/three parallelepipeds of different heights on the platform.png'
import im7 from '../assets/images/Reward badge with star and ribbon.png'
import im8 from '../assets/images/exercises with dumbbells.png'
import im9 from '../assets/images/young man work.png'

import girl1 from '../assets/images/girl1.png'
import girl2 from '../assets/images/girl2.png'




function Welcome() {
    return (
        <div className="">
            <div className="font-semibold text-17xl bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                <div>Welcome to Focus Realm,</div>
                <div>where education meets innovation to redefine your learning experience</div>
            </div>
            <div className="w-[100%] md:w-[50%] text-base mt-5">
                At Focus Realm, we believe that the journey of education should be dynamic, engaging, and tailored to your unique needs. Our platform is not just a study tool; it's your ally in achieving peak concentration and productivity.
            </div>
        </div>
    )
}

function MainCards({ heading, content }) {
    return (
        <div className="relative  text-base md:max-w-[33%]">
            <div className="w-full md:w-[35vw] md:max-w-[102%] bg-blue-700 absolute bottom-0 -left-[0%] rounded-full filter: blur-xl h-[50px]"></div>
            <div className="relative rounded-xl border-white border-solid border-[1px] border-t-0 w-[80vw] md:w-[33vw] md:max-w-[100%] z-10 flex flex-col items-center bg-gray px-2 pb-2 min-h-[250px]">
                <div className="relative w-[50%] ">
                    <div className="h-[10px] w-[110%] bg-blue-700 absolute top-0 -left-[5%] rounded-full filter: blur-lg"></div>
                    <div className="relative rounded-xl border-white border-solid border-[1px] p-4 flex items-center justify-center font-semibold bg-gradient-to-r from-[#32b8f645] to-gray">
                        {heading}
                    </div>
                </div>

                <div className="m-7 text-center text-sm">
                    {content}
                </div>
                <div className=" absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[#31b8f63f] h-[50px] w-[100%] rounded-b-xl"></div>
            </div>
        </div>
    )
}



function ApartCard({ image, heading, content }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="relative">
            <div className={`w-[100%] h-[100%] bg-gradient-to-b from-transparent from-50% to-blue-500 absolute bottom-0 rounded-full  ${isHovered ? "filter: blur-xl" : "filter: blur-md"}`}></div>

            <div className="w-full aspect-square rounded-full flex flex-col items-center justify-center relative border-solid border-[1px] border-x-0 border-white bg-gray"
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            >
                <img src={image} alt="" className={`${isHovered ? "hidden" : "block"} transition-all ease-in-out duration-300`} />
                <div className="relative text-base rounded-xl border-white border-solid border-[1px] px-6 py-4 flex items-center justify-center font-semibold transition-all ease-in-out duration-300 bg-gradient-to-r from-[#32b8f645] to-transparent mt-5">
                    {heading}
                </div>
                <div className={`${isHovered ? "block" : "hidden"} text-sm transition-all ease-in-out duration-300 w-[80%] text-center mt-5`}>
                    {content}
                </div>
                <div className=" absolute bottom-0 left-0 bg-gradient-to-b from-transparent from-70% to-[#31b8f63f] h-full w-[100%] rounded-full"></div>
            </div>
        </div>
    )
}

function Section2() {

    const apartCardsData = [
        {
            image: im1,
            heading: "Mind-Stimulating Games",
            content: "Learning should be fun. Our platform features mind-stimulating games designed to boost cognitive skills during breaks, making your study sessions both effective and enjoyable."
        },
        {
            image: im2,
            heading: "Innovative AI Integration",
            content: "We've harnessed the power of artificial intelligence to create an interactive AI chatbot. Your study sessions are now accompanied by a motivating AI companion, providing assistance and keeping you on track."
        },
        {
            image: im3,
            heading: "Customizable Templates",
            content: "Tailor your study atmosphere with various calming templates to enhance concentration."
        },
        {
            image: im4,
            heading: "Mood-Enhancing Sounds",
            content: "Choose from a variety of calming sounds like rain or lo-fi beats to create an immersive study environment that suits your preferences."
        },
        {
            image: im5,
            heading: "Motivational Quotes",
            content: "Stay inspired with uplifting quotes that appear during your study sessions, fostering a positive mindset."
        },
        {
            image: im6,
            heading: "Progress Tracking",
            content: "Monitor your study time and achievements, allowing you to track your progress and improve productivity."
        },
        {
            image: im7,
            heading: "Reward System",
            content: "Earn rewards based on your focus time, growing your character and family within the platform. It's not just about studying; it's about achieving milestones and reaping the benefits."
        },
        {
            image: im8,
            heading: "Exercise Animations",
            content: "Access exercises designed to improve blood flow and concentration during study breaks, promoting a holistic approach to learning."
        },
        {
            image: im9,
            heading: "Concentration Test",
            content: " Our platform includes an ADHD test to detect concentration levels and provide valuable insights for students."
        },

    ];

    return (
        <div className="mx-10">
            <div className="text-center text-11xl font-semibold">What sets us apart?</div>
            <div class="flex flex-col md:grid grid-cols-3 gap-16 mt-20">
                {apartCardsData.map((cardData, index) => (
                    <ApartCard
                        key={index} // Key should be unique for each element
                        image={cardData.image}
                        heading={cardData.heading}
                        content={cardData.content}
                    />
                ))}
            </div>
        </div>
    )
}

function Section3() {
    return (
        <div className=" md:flex justify-center items-center">
            <div className="md:w-[60%] ">
                <div className="font-semibold text-17xl bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                    <div>Join the Focus Realm Community</div>
                </div>
                <div className="w-[100%] text-base mt-5">
                    Our commitment to your educational journey goes beyond technology.
                    <br /><br />
                    We invite you to join the Focus Realm community, where innovation meets dedication to provide you with a learning experience like never before.
                    <br /><br />
                    Together, let's explore the realms of focus and knowledge.
                </div>
            </div>
            <div className="md:w-[40%] flex md:justify-end mt-10 md:mt-0">
                <img src={sec3img} alt="Young man rejoicing success - focus realm" />
            </div>
        </div>
    )
}

function Section4() {
    return (
        <div className=" md:flex flex-col justify-center items-center text-center">
            <div className="md:w-[60%] font-semibold text-17xl bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                <div>Welcome to Focus Realm</div>
                <div>Your Ally for Effective Learning and Studying!</div>
            </div>
            <div className="flex items-center justify-center md:w-[40%] scale-75 md:scale-100">
                <img src={sec4img} alt="welcome to focus realm" />
            </div>
        </div>
    )
}

const ImageSwitcher = () => {
    const [currentImage, setCurrentImage] = useState(girl1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage === girl1 ? girl2 : girl1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex justify-center items-center w-0 transition-opacity duration-1000 ease-in-out">
            <img src={currentImage} alt="Girl" className="md:absolute -top-32 z-20 opacity-70 transition-opacity duration-1000 ease-in-out max-w-[100vw]" />
        </div>
    );
};

export default function About() {
    return (
        <div className="relative bg-gray-100 max-w-full min-h-screen overflow-y-auto text-5xs text-white font-sans overflow-x-hidden">
            <div className="max-w-[1800px] mx-auto">
                <div className="mx-10 my-28 md:mr-0">
                    <Welcome />
                </div>
                <div className="w-[100%] py-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-32 gap-x-30 my-28">

                    <div className="block md:hidden">
                        <ImageSwitcher />
                    </div>

                    <MainCards
                        heading="Our Vision"
                        content="We envision a world where learning transcends traditional boundaries, where education is a seamless blend of technology, psychology, and individualized attention. Focus Realm is the culmination of this vision, a transformative study platform that goes beyond the ordinary to empower students on their educational journey."
                    />

                    <div className="hidden md:block">
                        <ImageSwitcher />
                    </div>

                    <MainCards
                        heading="Our Mission"
                        content="At Focus Realm, our mission is to revolutionize the way you learn. We're not just building a platform; we're crafting an ecosystem that nurtures focus, harnesses the power of artificial intelligence, and integrates engaging elements to make learning an enjoyable and fruitful endeavor."
                    />
                    <MainCards
                        heading="Our Research Journey"
                        content="Our commitment to your better learning experience is reflected in the extensive research we've undertaken. From concept validity and feasibility studies to SWOT analyses, problem identification, and product opportunity tapping, we've left no stone unturned. Our research analysts have delved deep into understanding the intricacies of education, technology, and human behavior to create a platform that caters to your every need."
                    />
                </div>

                <div className="w-full">
                    <Section2 />
                </div>

                <div className="mx-10 my-28 md:mr-0">
                    <Section3 />
                </div>

                <div className="mx-10 my-28 md:mr-0">
                    <Section4 />
                </div>
            </div>
        </div>
    )
}