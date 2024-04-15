import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import "./ProjectsStyle.css";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSingle = ({ title, category, image, url }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, 
        autoplaySpeed: 3000
	  };
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-5 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div className="image-container">
				{/* <img
					src={image}
					className="rounded-t-xl border image-content"
					alt="Single Project"
				/> */}
				<Slider {...settings}>
					{image.map((image, index) => (
						<div key={index}>
						<img src={image} className="rounded-t-xl border image-content" alt={`Image ${index + 1}`} />
						</div>
					))}
					</Slider>
				</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					
						<div >
						<div>
						<div className="p-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500">
						<a href={url} target="_blank">
							<div className="justify-content-center align-items-center">
							
							<div className="icon-container">
								<BsGithub />
							</div>
							<span className="mr-2">  View Project</span>
							</div>
						</a>
						</div>
						</div>
						</div>
   
					
					</div>
					
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
