import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';


const ExperienceCard = (props) => {
  const { companyLogo,company, position, date, description } = props;

  return (
    <Card className='card bg-primary hover-shadow'>
      <CardHeader
        avatar={
          <img style={{ width: '150px', height: '150px', objectFit: 'contain' }} className='rounded-circle' src={companyLogo} alt="Company Logo" />
        }
        title={position}
        subheader={date}
      />
      <CardContent>
        <Typography  variant="body2" color="textPrimary" component="pre">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
