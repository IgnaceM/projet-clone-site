import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Navbar from './Navbar';
import "./App.css";
import "./index.css";

function AppEn() {
	function toggleTheme() {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
	}

	if (localStorage.theme === "dark") {
		document.documentElement.classList.add("dark");
	} else if (localStorage.theme === "light") {
		document.documentElement.classList.remove("dark");
	}

	function language() {
		const down = document.getElementById("down");
		const language = document.getElementById("language");

		language.style.display = "block";
	}

	function remove() {
		const language = document.getElementById("language");
		language.style.display = "none";
	}

	return (
		<>
			<div className="flex justify-between mb-20 px-32 py-10 max-md:px-2 absolute w-full  left-0 z-20  bg-gray-50 p-2 items-center dark:bg-transparent">
				<img src="./logo.png" alt="" className="w-28 h-8 max-md:w-20 max-md:ml-2 max-md:mr-10" />
				<div className="flex gap-5 mr-20 max-md:mr-4">
					<h3 className="max-md:hidden font-bold text-[20px] flex items-center mr-5 justify-center">
						contact us
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 ml-5 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</h3>
					<h3 className="max-md:hidden flex font-bold text-[20px] items-center mr-5 justify-center">
						updev community
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 ml-5 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</h3>
					<div className="visible flex items-center gap-2 ml-5 mr-1 md:hidden ">
						<img src="./Chat Bubble_50px.png" alt="" className="h-[30px] w-[30px]" />
						<img src="./People_50px.png" alt="" className="h-[30px] w-[30px]" />
					</div>

					<div className="-ml-5 max-md:ml-2">
						<div id="lcont" onClick={language} className="">
							<img src="Translation_48px.png" className="h-[30px] w-[30px]" alt="" />
							<div className=" ml-3 mr-10 bg-red-500 mt-3">
								<img
									src="./Chevron Down_32px.png"
									alt=""
									id="down"
									onClick={language}
									className="absolute h-4 w-4 cursor-pointer"
								/>
								<img src="./Chevron Up_32px.png" alt="" id="up" className="absolute h-4 w-4 cursor-pointer hidden" />
							</div>
						</div>
						<div
							id="language"
							className="absolute hidden flex-col items-center justify-center w-44 h-20 -ml-32 bg-slate-400 dark:bg-black mt-20"
						>
							<Link to="/fr">
								<button className="px-2 py-0 w-full flex justify-left mt-3 font-bold text-lg">Français</button>
							</Link>

							<Link to="/en">
								<button className="px-2 py-0 w-full flex justify-left font-bold text-lg">English</button>
							</Link>
						</div>
					</div>

					<div className="">
						<button
							onClick={toggleTheme}
							className="bg-blue-300 z-20 cursor-pointer text-black ml-20 max-md:ml-10 p-2 rounded-md"
						>
							Thèmes
						</button>
					</div>
				</div>
			</div>

			<div className="z-10 relative flex flex-col justify-center text-center">
				<img
					src="https://updev.africa/_next/image?url=%2Flight1.png&w=1080&q=75"
					alt=""
					className="absolute z-20 opacity-40 -top-[250px] ml-[850px]"
				/>
				<img
					src="https://updev.africa/images/Afrique.svg"
					alt=""
					id=""
					className="z-0 top-36 max-md:top-20 max-sm:top-0 h-[750px] w-[750px]  absolute right-20 max-md:right-0 opacity-[5%] dark:opacity-10 "
				/>
				<img
					src="./africa.png"
					alt=""
					id=""
					className="z-0 top-36 max-md:top-40 dark:hidden max-sm:top-0 h-[750px] w-[750px] max-md:h-[500px] max-md:w-[500px] absolute max-md:mt-[120px] right-20 max-md:right-0 opacity-[5%]"
				/>

				<img
					src="https://updev.africa/_next/image?url=%2Flight2.png&w=1080&q=75"
					id="scale2"
					alt=""
					className="absolute opacity-20 dark:opacity-100 left-0 w-[800px] top-[35rem] max-md:top-[30rem] max-md:mt-[0px] max-md:-ml-[200px]"
				/>

				<div className="mb-56 mt-24 max-md:px-4">
					<h1 className=" text-blue-500 dark:text-[#ffb200] font-bold flex justify-center text-2xl mb-5 md:text-2xl mt-32 z-10">
						TECH-CENTERED
					</h1>
					<h1 className="text-5xl capitalize mt-0 lg:text-8xl md:text-[50px] flex justify-center font-bold w-[70%] mx-auto max-md:w-full max-md:text-5xl z-10">
						Innovating for a better Africa
					</h1>
					<p className="text-[29px] font-sans -mb-20 md-w-[75%] lg:w-60p flex justify-center z-10 text-gray-500  mt-10  max-md:text-[19px] max-md:mb-[10px] max-md:w-full mx-auto dark:text-gray-200 max-md:font-light">
						By leveraging innovative and sustainable technologies, UPDEV is dedicated to promoting social change and
						contributing to a better future for Africa 
					</p>
				</div>
			</div>

			<div className=" grid text-black px-36 max-md:px-4 relative lg:flex justify-between mt-[70px] max-md:-mt-[200px] dark:text-white">
				<img
					src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
					alt=""
					id="scale2"
					className="opacity-0 dark:opacity-[100%] -top-[19rem] animate-spin -ml-[350px] -mb-[350px] absolute  h-[900px] w-[1200px]  -z-10 md:block"
				></img>
				<div className="z-10">
					<h3 className="text-5xl -mt-0 font-bold lg:text-6xl  w-60p mx-auto flex text-left ml-0 max-md:mt-20 max-md:w-full ">
					Solving social problems with sustainable solutions 
					</h3>
				</div>
				<div>
					<h1 className="text-9xl lg:text-[10rem] mt-10 font-bold flex justify-left  ">8+</h1>
				</div>
			</div>
			<div className="px-36 max-md:px-4 z-20">
				<p className="text-2xl font-semi-bold max-md:font-light z-20  text-gray-500 mt-10 lg:text-2xl w-50p text-left  max-md:text-[19px] max-md:w-full dark:text-white">
				UPDEV has created innovative solutions to address social challenges in Africa, such as:

				</p>
			</div>
			<div className="flex flex-wrap gap-8 justify-center mt-20 max-md:px-4">
				<div className="p-5  bg-blue-100 shadow-lg  lg:p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./original.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">DEV PROFILES</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Web/mobile platform to showcase your skills and experience.</p>
						<li>create your profil</li>
						<li>Manage yours skills</li>
						<li>Find opportunities</li>
						<h3 className="">#Community-Driven</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Co-Ownede</h3>
						<h3 className="text-orange-400 font-bold">Launched</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./edu.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">EDUSTATE</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">We are contributing to expand Cardano in Africa through Cardano EduStake.</p>
						<li>Collaborative Approach</li>
						<li>Education and Awareness</li>
						<li>Economic Growth</li>
						<h3 className="">#stake pool</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Owned
						</h3>
						<h3 className="text-orange-400 font-bold">Beta</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./original.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">DEV COMMUNITY</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Web/mobile platform for exchange between developers.</p>
						<li>Knowledge sharing</li>
						<li>Skill improvement</li>
						<li>Networking opportunities</li>
						<h3 className="">#Collaboration-platform</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Owned</h3>
						<h3 className="text-orange-400 font-bold">Launched</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./Ekival-768x288-1.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">EKIVAL</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Web application for P2P money and cryptocurrency transfer.</p>
						<li>Send/receive Ada</li>
						<li>Send/receive stablecoins</li>
						<li>Sell/buy goods</li>
						<h3 className="">#P2Pmarketplace</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Co-Owned
						</h3>
						<h3 className="text-orange-400 font-bold">Beta</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./logo (1).png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">ADAEX</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Mobile application for exchanging ADA cryptocurrency via Mobile Money.</p>
						<li>ADA/USD Exchange</li>
						<li>ADA/USD Transactions</li>
						<li>Exchange rate tracking</li>
						<h3 className="">#CryptoExchange</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Owned</h3>
						<h3 className="text-orange-400 font-bold">Beta</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img
							src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FUpdev_Work_Suit_50228561c7.png&w=128&q=75g"
							alt=""
							className="w-20 h-10"
						/>
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">PROWORKSPACE</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Web-based collaboration application for efficient management.</p>
						<li>Better organization</li>
						<li>Progress tracking</li>
						<li>Facilitated communication</li>
						<h3 className="">#CryptoExchange</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Owned</h3>
						<h3 className="text-orange-400 font-bold">Launched</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./agro.jpg" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">AGRO APP</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Mobile application connected to soil sensors for precise planting.</p>
						<li>When to plant ?</li>
						<li>What to plant ?</li>
						<li>Where to plant ?</li>
						<h3 className="">#Agriculture</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Co-Owned</h3>
						<h3 className="text-orange-400 font-bold">Beta</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between mb-5">
						<img src="./pelek.jpg" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">PELEKAPP</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Mobile delivery application that allows for sending and receiving of packages.</p>
						<li>Package shipping.</li>
						<li>Package tracking.</li>
						<li>Delivery history.</li>
						<h3 className="">#DeliveryApp</h3>
					</div>
					<div className=" flex justify-between">
						<h3>Co-Owned</h3>
						<h3 className="text-orange-400 font-bold">Beta</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
				</div>
				<div className="-mt-[600px] max-md:-mt-[1500px] z-0">
					<img
						src="https://admin.updev.africa/uploads/Ampoule_a0ad6e880a.svg"
						alt=""
						id="image"
						className="w-[400px] h-[400px] z-0 opacity-20 dark:opacity-[5%] "
					/>
				</div>
			</div>
			<div className="mt-[300px] max-md:px-4 px-36 max-md:mt-56 w-full z-[-1] ">
				<img
					src="image(1).jpg"
					alt=""
					id="spin"
					className="  mt-[300px] absolute -ml-[500px] max-lg:hidden w-[600px] h-[600px] z-0 opacity-100 dark:opacity-10 max-md:hidden"
				/>
				<img
					src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
					alt=""
					className="opacity-0 dark:opacity-[100%]  hidden mt-[100px] absolute  h-[700px] w-[700px] -ml-[500px] z-0 md:block md:mt-[300px]"
				></img>
				<h1 className="flex text-left text-5xl">Roadmap</h1>
				<p className="flex font-semi-bold text-left text-2xl w-[40%] max-md:w-full  text-gray-500 mt-10 dark:text-gray-300">
				Updev's action and projects through the years
				</p>
				<div className="md:ml-[15%] md:w-[70%] lg:w-[90%] relative max-md:-ml-0 lg:ml-48 lg:mr-36 max-md:mr-5">
					<img
						src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
						id="scale2"
						alt=""
						className="opacity-10 dark:opacity-[100%] dark:max-md:opacity-50 absolute left-52 top-0 h-full w-[60%] -z-10"
					/>

					<div className="absolute left-1/2 h-full w-1 ml-5 max-md:ml-2  bg-[#ffb200] opacity-40 z-10"></div>

					<div className="absolute left-1/2 ml-[14px] max-md:ml-[1.5px] h-full z-10">
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[0%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[20%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[40%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[60%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[80%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-50 w-4 h-4 top-[100%] rounded-full"></div>
					</div>

					<div className="lg:ml-36 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2019</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#ffb200] font-bold mb-5">
						Early stages
						</h3>
						<h6 className="text-[14px] max-md:text-[13px] font-bold dark:text-gray-300 text-black">
						Uptodate Developers (UPDEV) was founded as a technology services company. Since its creation, UPDEV has been committed to providing innovative solutions to solve the technological and social problems faced by its clients.
						</h6>
					</div>

					<div className="lg:ml-[55%] z-20 text-left lg:w-[35%] md:w-full lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2020</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#ffb200] font-bold mb-5">
						Intensive web and mobile app development, including a solution in response to the Covid-19
						</h3>
						<h6 className="text-[14px] max-md:text-[13px] font-bold dark:text-gray-300 text-black">
						UPDEV company intensified its activities by focusing on the development of mobile applications for iOS and Android platforms. That same year, we organized Updev Challenge, a regional tech projects competition held in Goma. We also participated in the fight against the COVID-19 by designing a website that issues statistical data on COVID-19 in the DRC.
						</h6>
					</div>

					<div className="lg:ml-32 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2021</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#ffb200] font-bold mb-5">
						First products launching and a new workspace opening in Kinshasa
						</h3>
						<h6 className="text-[14px] max-md:text-[13px] font-bold dark:text-gray-300 text-black">
						Updev expanded its range of services by adding web application development to i skillset. Then launched AgroApp in partnership with ISDR/GL. We also launched Updev Community, a forum for developers to exchange ideas, and opened a workspace in Kinshasa in partnership with Ingenious City. Also took place, the second edition of Updev Challenge
						</h6>
					</div>

					<div className="lg:ml-[55%] z-20 text-left lg:w-[35%] md:w-full lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2022</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#ffb200] font-bold mb-5">
						Bolder portfolio and expertise in app development and Updev Challenge 3.
						</h3>
						<h6 className="text-[14px] max-md:text-[13px] font-bold dark:text-gray-300 text-black">
						UPDEV expanded its range of services by adding plugin development to its portfolio. In the same year, we organized the third edition of Updev Challenge in partnership with Ingenious City and sponsored by the Ministry of Digital Affairs.
						</h6>
					</div>

					<div className="lg:ml-32 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2023</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#ffb200] font-bold mb-5">
						Expansion to blockchain development and more new app products launching in Africa
						</h3>
						<h6 className="text-[14px] font-bold dark:text-gray-300 text-black">
						UPDEV is undertaking the development of blockchain-based applications with a contribution to the development of the Ekival application and plans to launch its own blockchain dedicated to Africans by the end of this year. During the same year, we launched the PelekappFood and Pelekapp applications in the DRC. We also expanded our services in East Africa through a partnership with Ukuaji Technologies!
						</h6>
					</div>
				</div>
			</div>
			<div className="z-10 mt-56  flex flex-col text-center justify-center w-full">
				<h1 className="center flex justify-center text-5xl max-md:text-4xl font-bold max-md:px-2">
				They trust us
				</h1>
				<p className="text-2xl font-light z-10 mt-10 mb-10">
				They trust us and rely on our capabilities and reliability
				</p>
				<div className="w-full px-32 mx-auto flex flex-wrap grid-cols-7 gap-8 justify-center  mt-20 max-md:grid-cols-2 max-md:flex max-md:flex-col max-md:w-full  max-md:justify-center max-md:items-center">
					<img
						src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
						alt=""
						className="opacity-0 dark:opacity-[100%] - animate-spin  hidden -mt-[350px] absolute  h-[800px] w-[1000px]  z-0 md:block"
					></img>

					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fp2_d6403d825c.png&w=256&q=75"
						className="grayscale hover:grayscale-0 bg-blue-300 dark:bg-transparent rounded-lg w-48 h-[60px]"
						alt=""
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fp4_3ef8666370.png&w=256&q=75"
						className="grayscale hover:grayscale-0 bg-blue-300 dark:bg-transparent rounded-lg w-48 h-[80px]"
						alt=""
					/>
					<img src="./edu.png" alt="" className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0" />
					<img src="./ukwaji.jpg" alt="" className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0" />
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FCardano_RGB_Logo_Full_White_6bc18bb598.png&w=1920&q=75"
						alt=""
						className="w-44 h-[70px] max-md:w-250px bg-blue-300 dark:bg-transparent grayscale hover:grayscale-0 p-5 rounded-lg"
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FMin_Num_45da2234eb.png&w=256&q=75"
						alt=""
						className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0"
					/>
					<img src="./pelek.jpg" alt="" className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0" />
					<img
						src="./wingo.png"
						alt=""
						className="w-44 h-[70px] max-md:w-250px bg-blue-300 p-5  rounded-lg grayscale hover:grayscale-0 dark:bg-transparent"
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FLogo_4384c2fe09.png&w=3840&q=75"
						alt=""
						className="w-44 h-[70px] max-md:w-250px  grayscale hover:grayscale-0 p-5 rounded-lg dark:bg-transparent"
					/>
					<img src="./ikn.png" alt="" className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0" />
					<img
						src="./Ekival-768x288-1.png"
						alt=""
						className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0"
					/>
					<img src="./agro.jpg" alt="" className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0" />
					<img
						src="./Updev_Comunity_Logo_e07b90d064.png"
						alt=""
						className="w-44 h-[70px] max-md:w-250px grayscale hover:grayscale-0"
					/>
					<img
						src="./Updev_Challenge_Logo_White_Sans_70b30f974d.avif"
						alt=""
						className="w-44 h-[70px] max-md:w-250px  grayscale hover:grayscale-0"
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fpartenairesb_AKARI_59909fd735.png&w=256&q=75"
						alt=""
						className="grayscale hover:grayscale-0 h-20"
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FPeleka_App_food_white_orange_2b27282d34.png&w=3840&q=75"
						className="grayscale hover:grayscale-0 w-44 h-[70px]"
						alt=""
					/>
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fcardanocommunity_FR_cb62f14a6e.png&w=1920&q=75"
						className="grayscale hover:grayscale-0 w-44 h-[70px]"
						alt=""
					/>

					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Flogo_Covid_Teamfull_Stand_ceb2d24ef1.png&w=640&q=75"
						className="grayscale hover:grayscale-0 w-44 h-[70px]"
						alt=""
					/>

					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fpartenaires_ISDRGL_new_d7fbfe902d.png&w=256&q=75"
						className="grayscale hover:grayscale-0 w-44 h-9"
						alt=""
					/>

					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Flogo_858e659aa7_bc8c013374.png&w=256&q=75"
						className="grayscale hover:grayscale-0 w-36 h-[120px]"
						alt=""
					/>
				</div>
			</div>

			<div className="flex justify-between relative px-32 max-md:px-4 items-center mt-[250px] max-md:flex-col">
				<img
					src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
					id=""
					alt=""
					className="opacity-0 absolute dark:opacity-100 ml-[200px] animate-spin mt-[150px] max-md:h-[300px] max-md:-ml-[100px] max-md:dark:opacity-70 h-[550px] w-[750px] -z-10 md:mt-[200px]"
				></img>
				<img
					src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2FUpdev_Community_Icon_512_White_Black_d2ab8771dc.png&w=640&q=75"
					id=""
					alt=""
					className="opacity-5 absolute dark:opacity-10 ml-[400px] animate-spin mt-[150px] max-md:h-[400px] max-md:-ml-[100px] max-md:dark:opacity-10 h-[400px] w-[400px]  md:mt-[550px]"
				></img>
				<div className="text-left relative w-[40%] mx-auto ml-0 max-md:w-full">
					<h1 className="text-6xl mb-5 z-20 font-bold">Our Community</h1>
					<p className="text-2xl z-20 text-gray-500 mt-10 font-semi-bold text-left max-md:text-[19px] max-md:w-full dark:text-gray-300">
					Creating room for developers and technologists to learn
					</p>
					<img
						src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
						id=""
						alt=""
						className="opacity-0 absolute dark:opacity-100 ml-[1100px] mt-[150px] max-md:h-[300px] max-md:-ml-[100px] max-md:dark:opacity-70 h-[750px] w-[800px]  md:-mt-[100px]"
					></img>
				</div>
				<div className="flex text-left max-md:w-full max-md:mt-10">
					<h1 className="text-[11rem] font-extrabold">12+</h1>
				</div>
			</div>
			<div className="flex justify-between px-32 max-md:px-4 max-md:flex-col">
				<div className="mt-20 w-[60%] bg-blue-100 h-48 shadow-lg p-10 max-md:w-full max-md:p-7 max-md:h-fit dark:bg-gray-700 dark:bg-opacity-30 ">
					<div className="flex justify-between items-center">
						<img src="./original.png" alt="" className="w-24" />
						<p className="max-md:hidden">Updev community</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="currentColor"
							class="w-6 h-6 cursor-pointer "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
							></path>
						</svg>
					</div>
					<div>
						<p className="flex text-left mt-5">
						Creating room for developers and technologists to learnCreating room for developers and technologists to learnCreating room for developers and technologists to learn.
						</p>
					</div>
				</div>
				<div className=" bg-blue-100 mt-20 w-25p p-10 flex flex-col gap-5 shadow-md max-lg:w-40p  max-md:w-full max-md:p-6 dark:bg-gray-700 dark:bg-opacity-30">
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Twitter_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Twitter</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Telegram App_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Telegram</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./LinkedIn_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">LinkedIn</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Facebook_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Facebook</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Instagram_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Instagram</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Discord_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Discord</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-6 h-6 cursor-pointer "
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25 "
								></path>
							</svg>
						</div>
					</div>
					<div>
						<p className="flex text-left w-full">Building the community by the community</p>
					</div>
				</div>
			</div>
			<footer className="max-md:text-[12px] mb-24 px-32 max-md:px-4">
				<div className="flex justify-between w-full mt-20 mb-5 max-md:flex ">
					<h3>clone of Updev Africa</h3>
					<h3 className="text-blue-500 dark:text-orange-500 font-bold italic">Ignace production</h3>
				</div>
				<hr />
				<h3 className="flex text-left mt-5">2024</h3>
			</footer>
		</>
	);
}

export default AppEn;
