import "./App.css";
import "./index.css";

function App() {
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

	return (
		<>
			<div className="flex justify-between mb-20  fixed w-full top-0 left-0 z-20  bg-white shadow-md p-4 items-center dark:bg-[#000030] max-md:items-center">
				<img src="./logo.png" alt="" className="w-38 h-10 max-md:w-20 ml-5p" />
				<div className="flex gap-5 mr-5p">
					<h3 className="max-md:hidden flex items-center justify-center">
						contactez-nous{" "}
						<img src="./link.png" alt="" className="w-5 h-5 ml-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</h3>
					<h3 className="max-md:hidden flex items-center justify-center">
						updev community{" "}
						<img src="./link.png" alt="" className="w-5 h-5 ml-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</h3>
					<div className="visible flex items-center gap-2 ml-5 md:hidden ">
						<img src="./Chat Bubble_50px.png" alt="" className="h-[20px] w-[20px]" />
						<img src="./People_50px.png" alt="" className="h-[20px] w-[20px]" />
					</div>

					<select
						name=""
						id=""
						className="outline-none bg-white text-black dark:bg-[#000030] dark:text-white border-none"
					>
						<option value="">Fr</option>
						<option value="">En</option>
					</select>
					<div>
						<button onClick={toggleTheme} className="bg-blue-300 text-black ml-5 max-md:ml-1 p-2 rounded-md">
							Thèmes
						</button>
					</div>
				</div>
			</div>
			<div className="z-10">
				<img
					src="https://updev.africa/_next/image?url=%2Flight1.png&w=1080&q=75"
					alt=""
					className="absolute -top-[250px] ml-[800px]"
				/>
				<h1 className=" text-blue-500 dark:text-orange-500 font-bold text-2xl mb-10 md:text-4xl mt-44 max-md:mt-[200px] z-10">
					AXÉ SUR LA TECHNOLOGIE
				</h1>
				<h1 className="text-5xl mt-0 lg:text-[110px] md:text-[50px] font-bold w-[90%] mx-auto max-md:w-95p max-md:text-5xl z-10">
					Innover pour une Afrique meilleure
				</h1>
				<p className="text-[23px] font-bold -mb-20 md-w-[80%] lg:w-60p z-10 text-gray-500  mt-10  max-md:text-[19px] max-md:mb-[200px] max-md:w-full mx-auto dark:text-gray-200 max-md:font-light">
					En tirant parti des technologies innoventes et durables,Updev se consacre à promouvoir un changement social et
					un avenir meilleur pour l'Afrique
				</p>
			</div>
			<img
				src="https://updev.africa/images/Afrique.svg"
				alt=""
				id=""
				className="z-0 flex justify-center sm:-mt-[500px] lg:-mt-[500px] h-[800px] lg:ml-[500px] md:-mt-[500px]  md:ml-[0px]   w-[850px] opacity-[5%] dark:opacity-10  mx-auto max-md:-[800px] max-sm:-mt-[600px] max-md:w-[100%] max-md:h-[380px]"
			/>
			<img
				src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
				alt=""
				className="opacity-0 dark:opacity-[100%] animate-spin -ml-[350px] hidden -mb-[350px] absolute  h-[900px] w-[1200px]  z-0 md:block md:-mt-[400px]"
			></img>
			<img
				src="https://updev.africa/_next/image?url=%2Flight2.png&w=1080&q=75"
				id="scale2"
				alt=""
				className="absolute left-0 w-[800px] -mt-[330px] max-md:mt-[0px] max-md:-ml-[200px]"
			/>
			<div className=" grid  text-black relative lg:flex justify-between mt-[50px] md:-mt-[120px] dark:text-white">
				<div className="z-10">
					<h3 className="text-5xl -mt-0 font-bold lg:text-6xl  w-60p mx-auto flex text-left ml-0 max-md:mt-20 max-md:w-full ">
						Resolution Des Problèmes Sociaux Avec Des Solutions Durables
					</h3>
				</div>
				<div>
					<h1 className="text-9xl lg:text-12xl mt-10 font-bold flex justify-left float-start ">8+</h1>
				</div>
			</div>
			<div>
				<p className="text-2xl font-bold z-10  text-gray-500 mt-10 lg:text-2xl w-50p text-left  max-md:text-[19px] max-md:w-full dark:text-white">
					Updev a créé desolutions novatrices pour les défis sociaux en Afrique comme :
				</p>
			</div>
			<div className="flex flex-wrap gap-8 justify-center mt-20">
				<div className="p-5  bg-blue-100 shadow-lg  lg:p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./original.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">DEV PROFILES</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Plateforme Web/mobile pour présenter ses expériences et compétences</p>
						<li>créer votre profil</li>
						<li>Gérer vos compétences</li>
						<li>Trouver des opportunités</li>
						<h3 className="">#Community-Driven</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./edu.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">EDUSTATE</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Nous contribuons à étendre cardano en Afrique</p>
						<li>Approche collaborative</li>
						<li>Education et sensibilisation</li>
						<li>Croissance économique</li>
						<h3 className="">#stake pool</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./original.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">DEV COMMUNITY</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Plateforme web/mobile d'échange et de connexion entre développeurs</p>
						<li>Partage de connaissances</li>
						<li>Évolution des compétences</li>
						<li>opportunités de réseautage</li>
						<h3 className="">#Collaboration-platform</h3>
					</div>
					<div className=" flex justify-between">
						<h3>propriétaire</h3>
						<h3 className="text-orange-400 font-bold">Lancé</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./Ekival-768x288-1.png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">EKIVAL</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Application web pour transfert d'argent et decryoto-monnaies de pair à pair</p>
						<li>Envoyer/Recevoir de l'Ada</li>
						<li>des stablecoins</li>
						<li>Vendre et acheter des biens</li>
						<h3 className="">#P2Pmarketplace</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./logo (1).png" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">ADAEX</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Application mobile d'échange de crypto-monnaies via mobile money en USD</p>
						<li>Échange ADA/USD</li>
						<li>Transaction ADA/USD</li>
						<li>Suivie du taux d'échange</li>
						<h3 className="">#CryptoExchange</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./ex.png" alt="" className="w-12 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">PROWORKSPACE</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Application web de collaboration pour une gestion efficace et productive</p>
						<li>meilleure organisation</li>
						<li>suivie de l'avancement</li>
						<li>communication facilitée</li>
						<h3 className="">#CryptoExchange</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./agro.jpg" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">AGRO APP</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Application mobile connectée à des capteurs de sol pour une plantation précise</p>
						<li>Quand planté ?</li>
						<li>quoi planté ?</li>
						<li>où planté</li>
						<h3 className="">#Agriculture</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
				</div>
				<div className="bg-blue-100 shadow-lg p-4 w-280px max-md:w-full dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between mb-5">
						<img src="./pelek.jpg" alt="" className="w-24 h-10" />
						<p className="bg-blue-200 p-1 rounded-md dark:bg-gray-400">PELEKAPP</p>
					</div>
					<div className="text-left mb-5">
						<p className="mb-5">Plateforme Web/mobile pour présenter ses expériences et compétences</p>
						<li>Expédition des colis</li>
						<li>suivie des colis</li>
						<li>Historique des courses</li>
						<h3 className="">#DeliveryApp</h3>
					</div>
					<div className=" flex justify-between">
						<h3>co-propriétaire</h3>
						<h3 className="text-orange-400 font-bold">beta</h3>
						<img src="./link.png" alt="" className="w-5 h-5 opacity-20 dark:opacity-100 cursor-pointer" />
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
			<div className="mt-[300px] max-md:mt-56 w-full z-[-1] ">
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
				<p className="flex font-bold text-left text-2xl  text-gray-500 mt-10 dark:text-gray-300">
					les projets et l'action de UPDEV au fil des années :
				</p>
				<div className="md:ml-[15%] md:w-[70%] lg:w-[90%] relative max-md:-ml-0 lg:ml-48 lg:mr-36 max-md:mr-5">
					<img
						src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
						id="scale2"
						alt=""
						className="opacity-10 dark:opacity-[100%] dark:max-md:opacity-50 absolute left-0 top-0 h-full w-full -z-10"
					/>

					<div className="absolute left-1/2 h-full w-1 ml-5 max-md:ml-2  bg-[#ff772e] opacity-40 z-10"></div>

					<div className="absolute left-1/2 ml-[14px] max-md:ml-[3px] h-full z-10">
						<div className="absolute bg-orange-400 opacity-30 w-4 h-4 top-[10%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-30 w-4 h-4 top-[30%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-30 w-4 h-4 top-[50%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-30 w-4 h-4 top-[70%] rounded-full"></div>
						<div className="absolute bg-orange-400 opacity-30 w-4 h-4 top-[90%] rounded-full"></div>
					</div>

					<div className="lg:ml-36 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2019</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#fca758] font-bold mb-5">
							Création de l'Entreprise UPDEV
						</h3>
						<h6 className="text-[16px] font-bold">
							Uptodate Developers (UPDEV) a été fondée en tant qu'entreprise technologique de services. Depuis sa
							création, UPDEV s'est engagée à fournir des solutions innovantes pour résoudre les problèmes
							technologiques et sociaux auxquels sont confrontés ses clients.
						</h6>
					</div>

					<div className="lg:ml-[55%] z-20 text-left lg:w-[35%] md:w-full lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2020</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#fca758] font-bold mb-5">
							Développement intensif des App mobiles ios/android et contribution à la réponse à la COVID-19
						</h3>
						<h6 className="text-[16px] font-bold">
							L'entreprise UPDEV a intensifié ses activités en se concentrant sur le développement d'applications
							mobiles pour les plateformes iOS et Android. Au cours de cette même année, UPDEV organisé un concours de
							projets technologiques, Updev Challenge, dans la ville de Goma. Nous avons également contribué à la lutte
							contre la COVID-19 en mettant en place un site web fournissant des données statistiques sur la COVID-19 en
							RDC.
						</h6>
					</div>

					<div className="lg:ml-32 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2021</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#fca758] font-bold mb-5">
							UPDEV lance des produits : AgroApp et UPDEV community...
						</h3>
						<h6 className="text-[16px] font-bold">
							UPDEV a élargi sa gamme de services en ajoutant le développement d'applications web à ses compétences. Au
							cours de la même année, nous avons lancé AgroApp en partenariat avec ISDR/GL et organisé la deuxième
							édition du concours Updev Challenge. Nous avons également lancé Updev Community, un forum d'échange pour
							les développeurs, et ouvert un espace de travail à Kinshasa en partenariat avec Ingenious City.
						</h6>
					</div>

					<div className="lg:ml-[55%] z-20 text-left lg:w-[35%] md:w-full lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2022</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#fca758] font-bold mb-5">
							Développement de plugins et organisation du concours UPDEV challenge troisième édition
						</h3>
						<h6 className="text-[16px] font-bold">
							UPDEV a élargi son offre de services en ajoutant le développement de plugins à son portefeuille. Cette
							même année, nous avons organisé la troisième édition de Updev Challenge en partenariat avec Ingenious City
							et parrainé par le ministère du numérique.
						</h6>
					</div>

					<div className="lg:ml-32 z-20 text-left lg:w-[35%] md:w-full md:mr-0 lg:mr-20 mt-10 max-md:ml-5p max-md:w-full">
						<p className="mb-5 font-bold text-2xl ml-85p max-md:ml-0p">2023</p>
						<h3 className="text-2xl text-blue-500 dark:text-[#fca758] font-bold mb-5">
							UPDEV s'engage dans le développement de la Blockchain en Afrique...
						</h3>
						<h6 className="text-[16px] font-bold">
							UPDEV entreprend le développement d'applications basées sur la technologie de la Blockchain avec la
							contribution au développement de l'application Ekival et prévoit de lancer sa propre Blockchain dédiée aux
							Africains d'ici la fin de cette année. Durant cette même année, nous avons lancé les applications
							PelekappFood et Pelekapp en RDC. Nous avons également étendu nos services en Afrique de l'Est en
							partenariat avec l'entreprise Ukuaji Technologies.
						</h6>
					</div>
				</div>
			</div>
			<div className="z-10 mt-56 md:mt-[600px] w-full">
				<h1 className="center text-5xl">Ils nous font confiance</h1>
				<div className="w-70p mx-auto flex flex-wrap  gap-8 justify-center  mt-20 max-md:grid-cols-2 max-md:flex max-md:flex-col max-md:w- max-md:justify-center">
					<img src="./edu.png" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./ukwaji.jpg" alt="" className="w-56 h-25 max-md:w-280px" />
					<img
						src="./cardano.png"
						alt=""
						className="w-56 h-25 bg-blue-300 p-5 rounded-lg dark:bg-transparent max-md:w-280px"
					/>
					<img src="./ministere.jpg" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./pelek.jpg" alt="" className="w-56 h-25 max-md:w-280px" />
					<img
						src="./wingo.png"
						alt=""
						className="w-56 h-25 bg-blue-300 p-5 rounded-lg dark:bg-transparent max-md:w-280px"
					/>
					<img
						src="./safrochain.png"
						alt=""
						className="w-56 h-25 bg-blue-300 p-5 rounded-lg dark:bg-transparent max-md:w-280px"
					/>
					<img src="./ikn.png" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./Ekival-768x288-1.png" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./agro.jpg" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./Updev_Comunity_Logo_e07b90d064.png" alt="" className="w-56 h-25 max-md:w-280px" />
					<img src="./Updev_Challenge_Logo_White_Sans_70b30f974d.avif" alt="" className="w-56 h-25 max-md:w-280px" />
					<img
						src="https://updev.africa/_next/image?url=https%3A%2F%2Fadmin.updev.africa%2Fuploads%2Fpartenairesb_AKARI_59909fd735.png&w=256&q=75"
						alt=""
					/>
				</div>
			</div>
			<img
				src="https://updev.africa/_next/image?url=%2Flight4.png&w=1200&q=75"
				id=""
				alt=""
				className="opacity-0 absolute dark:opacity-100 animate-spin mt-[50px] -mb-[450px] max-md:h-full max-md:dark:opacity-30 h-[550px] w-[700px] -z-10 md:mt-[0px]"
			></img>
			<div className="flex justify-between items-center mt-32 max-md:flex-col">
				<div className="text-left w-60p mx-auto ml-0 max-md:w-full">
					<h1 className="text-5xl mb-5 z-20">Notre communauté</h1>
					<p className="text-2xl z-20 text-gray-500 mt-10  text-left max-md:text-[19px] max-md:w-full dark:text-gray-300">
						Favoriser l'innovation technologique en permettant aux développeurs et aux technologues d'apprendre.
					</p>
				</div>
				<div className="flex text-left max-md:w-full max-md:mt-10">
					<h1 className="text-8xl">12+</h1>
				</div>
			</div>
			<div className="flex justify-between max-md:flex-col">
				<div className="mt-28 w-50p bg-blue-100 h-48 shadow-lg p-10 max-md:w-full max-md:p-7 max-md:h-fit dark:bg-gray-700 dark:bg-opacity-70 ">
					<div className="flex justify-between items-center">
						<img src="./original.png" alt="" className="w-24" />
						<p className="max-md:hidden">Updev community</p>
						<img src="link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
					</div>
					<div>
						<p className="flex text-left mt-5">
							Plateforme d'échange et de connexion entre développeurs pour partager et améliorer leurs connaissances et
							grandir en tant que communauté
						</p>
					</div>
				</div>
				<div className=" bg-blue-100 mt-28 w-25p p-10 flex flex-col gap-5 shadow-md max-lg:w-40p  max-md:w-full max-md:p-6 dark:bg-gray-700 dark:bg-opacity-70">
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Twitter_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Twitter</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Telegram App_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Telegram</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer " />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./LinkedIn_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">LinkedIn</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Facebook_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Facebook</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Instagram_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Instagram</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center">
							<img src="./Discord_48px.png" alt="" className="w-8 h-8" />
							<p className="ml-2 font-bold">Discord</p>
						</div>
						<div>
							<img src="./link.png" alt="" className="w-6 h-6 opacity-20 dark:opacity-100 cursor-pointer" />
						</div>
					</div>
					<div>
						<p className="flex text-left w-full">Nous construisons la communauté par la communauté</p>
					</div>
				</div>
			</div>
			<footer className="max-md:text-[12px]">
				<div className="flex justify-between w-full mt-20 mb-5 max-md:flex ">
					<h3>clone Updev Africa</h3>
					<h3 className="text-blue-500 dark:text-orange-500 font-bold italic">Ignace production</h3>
				</div>
				<hr />
				<h3 className="flex text-left mt-5">2024</h3>
			</footer>
			<style></style>
			<script></script>
		</>
	);
}

export default App;

