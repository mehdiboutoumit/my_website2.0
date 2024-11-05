import React from 'react';
import { Card, CardContent, Typography, CardHeader, Box } from '@mui/material';

const ExperienceCard = (props) => {
  const { companyLogo,companyURL, position, date, description } = props;

  return (
    <Card
      className="card bg-primary hover-shadow"
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '20px auto',
        borderRadius: '15px',
        boxShadow: 3,
      }}
    >
      <CardHeader
        avatar={
          <Box sx={{ width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href={companyURL}><img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={companyLogo} alt="Company Logo" /></a>
          </Box>
        }
        title={<Typography variant="h6" color="primary">{position}</Typography>}
        subheader={<Typography variant="subtitle2" color="text.secondary">{date}</Typography>}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" component="div" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
