import React from 'react';
import ExperienceCard from '../components/Experience/ExperienceCard';
import logo212 from '../images/logo_212.png';
import logoA2S from '../images/logo_A2s.png';
import logoIngecys from '../images/logo_Ingecys.png';
import { Container, Typography, Grid } from '@mui/material';

function Experience() {
  const experienceData1 = {
    companyLogo: logo212,
    companyURL : "https://www.212agency.ma/",
    position: 'Software Development Intern',
    date: '212 Consulting Agency | June 2023 - Aout 2023',
    description: `As a first-year intern, I actively contributed to the development of a dynamic web application aimed at revolutionizing restaurant management. 
    My primary focus was on creating a comprehensive system that streamlines the process of managing restaurant menus and staff.

    Key Contributions:
    - Menu Customization: Developed features to easily customize menus for unique preferences.
    - Table Association with QR Codes: Linked menus to tables using QR codes for better access.
    - Frontend and Backend Development: Worked with React and Node.js for a full-stack approach.`,
  };

  const experienceData2 = {
    companyLogo: logoA2S,
    position: 'Head of IT Consulting Cell',
    date: 'A2S Junior Entreprise of INPT | June 2023 - Present',
    description: `Missions: 
    - Managing technical needs and leading IT team tasks.
    - Ensuring timely completion of projects through tracking systems.
    - Delivering development and project management courses to junior members.

    Key Contributions:
    - Successfully developed the official website of the junior enterprise.
    - Created a leaderboard for the club to foster member engagement.`,
  };

  const experienceData3 = {
    companyLogo: logoIngecys,
    companyURL : "https://www.ingecystelecom.com/",
    position: 'Software Development Intern',
    date: 'INGECYS Telecom | June 2024 - July 2024',
    description: `Contributed to the development of CELERYS 2.0, the optimized version of CELERYS, which is a real-time web analytics application 
    for telecom network performance. Responsibilities included implementing backend data retrieval processes, creating dynamic visualizations, and optimizing performance metrics. Utilized Java, Spring Boot, Angular, and Google Maps API and more to deliver a comprehensive solution for monitoring and analyzing Quality of Experience (QoE) measurements across various telecom operators and services.`,
  };

  return (
    <Container>
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <Typography variant="h4" color="primary" gutterBottom>
            Professional Experience
          </Typography>
        </div>
        <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
            <ExperienceCard {...experienceData3} />
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <ExperienceCard {...experienceData1} />
          </Grid>
        </Grid>
      </section>

      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <Typography variant="h4" color="primary" gutterBottom>
            Extracurricular Activities
          </Typography>
        </div>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <ExperienceCard {...experienceData2} />
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}

export default Experience;
