// import TicTacToe from "./games/assets/Tic-Tac-Toe.png";
import BlackJack from "./assets/blackjack.png";
import Guess from "./assets/guess.png";
import Sudoku from "./assets/sudoku.png";
import Trivia from "./assets/trivia.png";
import Typing from "./assets/typing.png";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from 'react'
import { useNavigate } from "react-router-dom";

export default function GameCardNew() {

  const navigate = useNavigate();
  const handleStartGame = (relatedGame) => {
    navigate(relatedGame);
  };

  const settings = {
    centerMode: true,
    centerPadding: "12%",

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
      swipeToSlide: true,
    touchThreshold: 1,
  };

  return (
    <div className="flex flex-col items-start py-12 pr-20 max-w-full bg-gray-950 max-md:pr-5 min-h-[100vh]">
      <Link to="/Home">
      <div className="flex gap-2.5 items-start mt-10 ml-16 max-md:ml-2.5">
        <img
          loading="eager"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea00b061e8ac5ed2286d600c0d39a9e2275b1e2fe316d15ac64aa8b06d9e89e6?"
          className="object-contain object-center shrink-0 aspect-square w-[50px]"
        />
       
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff2ab8c3ccfd27dc852c1a70a4155c0054dd22d42c71adfd3cd7bcc837810a?"
          className="object-contain object-center shrink-0 aspect-square w-[50px]"
        />
        <div className="grow self-stretch my-auto text-5xl font-semibold text-center text-white max-md:text-4xl">
          Games
        </div>
      
      </div>
      </Link>
      {/* flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full */}
      <div className="w-full m-auto">
        <div className="mt-20  max-md:flex-wrap max-md:max-w-full ">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="flex flex-col items-end w-850px h-[300px] px-8 py-12 font-semibold text-white rounded-3xl border border-sky-400 border-solid shadow-sm max-w-[777px] max-md:px-5">
                <div className="flex flex-row w-[45%] max-md:ml-0 max-md:w-full">
                  <img
                    className="object-contain float-left object-center mt-2.5 h-full w-full aspect-[1.11] max-md:mt-10"
                    src={d.img}
                    alt="#"
                  />
                  <div className="text-white text-3xl max-w-[25rem] text-center md:text-left">
                    <p className=" text-white text-3xl w-[25rem] text-center">
                      {d.name}
                    </p>
                    <p className="mt-4 text-white text-sm max-w-[25rem] text-center md:text-left ml-5">
                      {d.description}
                    </p>
                    <div className="ml-5">
                     <button onClick={() => handleStartGame(d.relatedGame)}  className=" m-auto justify-center items-end px-8 py-2  mt-10 text-lg whitespace-nowrap bg-blue-800 rounded-3xl cursor-pointer border border-sky-400 border-solid shadow-sm  max-md:px-5">
                      Start
                    </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    name: `BlackJack`,
    img: BlackJack,
    description: `Blackjack is a comparing card game where players compete against the dealer for the closest hand to 21.`,
    relatedGame: "/tictactoe" 
  },
  {
    name: `Sudoku`,
    img: Sudoku,
    description: `Sudoku is a logic-based puzzle game where players fill a 9x9 grid with digits, aiming for each row, column, and 3x3 subgrid to contain all numbers from 1 to 9.`,
    relatedGame: "/sudoku"
  },
  {
    name: `Trivia`,
    img: Trivia,
    description: `Trivia encompasses information of little value, commonly used in contests and board games like Trivial Pursuit.`,
    relatedGame: "/trivia" 
  },
  {
    name: `Guess The Logo`,
    img: Guess,
    description: `Guess the logo is an engaging trivia game challenging players to identify popular logos from around the world.`,
    relatedGame: "/guessthelogo" 
  },
  {
    name: `Typing Test`,
    img: Typing,
    description: `Improve typing speed with free timed tests, suitable for all ages and skill levels, to enhance your words per minute (WPM).`,
    relatedGame: "/typingtest"
  },
];


