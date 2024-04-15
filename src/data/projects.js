// Import images
// import digi from '../images/digirestau.png';
// import restaumanage from '../images/Restaumanage.png';
// import BabyTrack from '../images/BabyTrack.png';
// import a2s from '../images/A2S.png';
//import krilya from '../images/projects/krilya/krilya.png';

// import warehouse from '../images/warehouse.png';
// import plagiat from '../images/plagiat.png';

const importAll = (r) => r.keys().map(r);
const digi = importAll(require.context('../images/projects/212', false, /\.(png|jpe?g|svg)$/));
const restaumanage = importAll(require.context('../images/projects/restau', false, /\.(png|jpe?g|svg)$/));
const BabyTrack = importAll(require.context('../images/projects/babytrack', false, /\.(png|jpe?g|svg)$/));
const a2s = importAll(require.context('../images/projects/a2s', false, /\.(png|jpe?g|svg)$/));
const krilya = importAll(require.context('../images/projects/krilya', false, /\.(png|jpe?g|svg)$/));
const warehouse = importAll(require.context('../images/projects/admin', false, /\.(png|jpe?g|svg)$/));
const plagiat = importAll(require.context('../images/projects/plagiarism', false, /\.(png|jpe?g|svg)$/));

export const projectsData = [
	{
		title : 'KriLya - Online Rental Platform',
		category: 'Web Application',
		img: krilya,
		url : 'https://github.com/mehdiboutoumit/KriLya'
	}
	,{
		id: 1,
		title: 'Digital Restaurant Menus',
		category: 'Web Application',
		img: digi,
		ProjectHeader: {
			title: 'Digital Restaurant Menus - From Context',
			publishDate: 'Aug 2023',
			tags: 'Full-Stack Development',
		},
		url : "agence212.ma"
	},{
		id: 6,
		title: 'The official website of the Junior Entreprise of INPT Engineering school',
		category: 'Web Application',
		img: a2s,
		url : "http://a2s.42web.io/"
	},
	{
		id: 2,
		title: 'BabyTrack - UX/UI of a Mobile app for pregnant women',
		category: 'UI/UX Design',
		img: BabyTrack,
		url : "https://www.figma.com/file/9gdcUmzfhiEshUXJULpPQT/BabyTrack?type=design&t=llbSAOPe5P2z2U5c-0"
	},
	{
		id: 3,
		title: 'Management of an administration\'s equipment warehouse website',
		category: 'Web Application',
		img: warehouse,
		url : "https://github.com/mehdiboutoumit/Gestion_depot1"
	},
	{
		id: 4,
		title: 'Plagiarism Detection website',
		category: 'Web Application',
		img: plagiat,
		url : "https://github.com/mehdiboutoumit/PlagiarismDetection"
	},
	{
		id: 5,
		title: 'Simple Restaurant Reservation Website',
		category: 'Web Application',
		img: restaumanage,
		url : "https://github.com/mehdiboutoumit/RestaurantReservation"
	},
];
