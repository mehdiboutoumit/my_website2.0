import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { skillsHeading as clientsPageHeading } from '../data/skillsData';
import { skillsData as skillsDataJson } from '../data/skillsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const skillsHeading = clientsPageHeading;

	const [skillsData, setskillsData] = useState(skillsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				skillsHeading,
				skillsData,
				setskillsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
