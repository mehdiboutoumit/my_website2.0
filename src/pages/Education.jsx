import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import logo_CPGE from "../images/logo_CPGE.jpeg";
import logo_INPT from "../images/Logo_inpt.png";
import logo_HS from "../images/logo_highschool.jpg";

import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

 const Education = () =>{
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          className='text-secondary-dark dark:text-secondary-light'
        >
         2022 - 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
           
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <img src={logo_INPT}></img>
          <Typography variant="h6" component="span" className='text-secondary-dark dark:text-secondary-light'>
            INPT Rabat
          </Typography>
          <Typography className='text-secondary-dark dark:text-secondary-light'>Engineer's degree, Advanced Software Engineering for Digital Services (ASEDS)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          className='text-secondary-dark dark:text-secondary-light'
        >
         2020 - 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
        
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', alignItems: 'center' }}>
        <img src={logo_CPGE} style={{ marginRight: '10px'}}></img>
          <Typography variant="h6" component="span" className='text-secondary-dark dark:text-secondary-light'> 
            CPGE Bab Essahra Guelmim
          </Typography>
          <Typography className='text-secondary-dark dark:text-secondary-light'>PSI (Physics and Inducstrial Science) <br></br> National Rank : 19/911</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          className='text-secondary-dark dark:text-secondary-light'
        >
        2017 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <img src={logo_HS}></img>
          <Typography variant="h6" component="span" className='text-secondary-dark dark:text-secondary-light'>
            Mohamed V High School Guelmim
          </Typography>
          <Typography className='text-secondary-dark dark:text-secondary-light'>Baccalaureate in Physics</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default Education;