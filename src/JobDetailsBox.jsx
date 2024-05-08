import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import sandclock from './img/sandclock.jpg';
import thunderbolt from './img/thunderboltfinal.jpg';
import referral from './img/referral.jpg';




const JobDetailsBox = ({ job }) => {
  // const [expanded, setExpanded] = useState(false);

  // const toggleExpand = () => {
  //   setExpanded(!expanded);
  // };


  return (
    <Box
      sx={{
        p: 2,
        width: '40vh',
        height: '100vh',
        border: '1px solid #ccc',
        borderRadius: '30px',
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop:'30px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between',
        '@media (min-width: 600px)': {
          width: 'calc(90% / 3 - 40px)',
          marginRight: '20px',
        },
        transition: 'transform 0.3s ease-in-out', // Add transition for smooth effect
        '&:hover': {
          transform: 'scale(1.05)', // Zoom in on hover
        },
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        p: 1,
        paddingBottom: '0px',
        paddingTop: '0px',
        marginTop: '20px',
        marginBottom: '0px',
        width: '140px',
        height: '25px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: '2px solid #ccc',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundClip: 'content-box',
        alignItems: 'center',
        textAlign: 'center'
      }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={sandclock} alt='clock' height="20px" width="20px" style={{ marginRight: '1px', marginTop: '0px' }} />
          <Typography variant="body2" color="textPrimary" sx={{ fontSize: '12px', margintop: '3px', marginBottom: '-1px' }}>
            {job.posted}
          </Typography>
        </div>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo on the left */}
        <img src={job.logo} alt='logo' height="50px" width="50px" style={{ marginRight: '8px' }} />

        {/* Job details on the right */}
        <Box sx={{ flex: 1 }}>
          <Typography marginTop="40px" variant="body2" color="textSecondary" gutterBottom>
            {job.companyName}
          </Typography>
          <Typography variant="body2" fontSize="16px" color="textPrimary" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="subtitle1" fontSize='12px' gutterBottom>
            {job.location}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" fontSize="16px" color="textPrimary" gutterBottom>
        Estimated Salary: {job.salary} ✅
      </Typography>
      <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }} >
        <div style={{ maskImage: 'linear-gradient(rgb(255 255 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))' }}>
          <Typography variant="body2" fontSize="16px" color="textPrimary" gutterBottom>
            About Company:
            <Typography variant="body2" fontSize="16px" color="textPrimary" fontWeight="bold" gutterBottom>
              About us

              <Typography variant="body2" fontSize="14px" color="textPrimary" gutterBottom>
                {job.description}
              </Typography>
            </Typography>
          </Typography>
        </div>
        <a href='https://jobs.weekday.works/fampay-backend-engineer-pmt9?candidateId=U2FsdGVkX1/vPgKY05TpuWF3H/Tq01185yYQpSIfQps=' style={{position: 'absolute', left: '150px', bottom: '0', right: '0', color: 'blue', textDecoration: 'none'}}>View Job</a>
      </div>



      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '30px',
        }}
      />
      {/* Link to view full job description */}
      {/* <Link
        to={`/jobs/${job.id}`}
        style={{
          alignSelf: 'flex-end',
          textDecoration: 'none',
          position: 'relative',
          zIndex: 1, // Ensure link is above the blurred overlay
        }}
      >
        View Job
      </Link> */}


      <Typography variant="body2" color="textSecondary" gutterBottom>
        Minimum Experience
        <Typography variant='body2' color="textPrimary" gutterBottom>{job.experience}</Typography>
      </Typography>
      <Box
        sx={{
          marginLeft: '5px',
          marginRight: '20x',
          width: 'auto',
          p: 1,
          border: '1px solid #ccc',
          borderRadius: '15px',
          backgroundColor: '#55efc4', // Bright green color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          minWidth: '120px',
          minHeight: '40px',
          '@media (max-width: 768px)': {
            minWidth: '80px', // Adjust the minimum width for smaller screens
            minHeight: '30px', // Adjust the minimum height for smaller screens
          },
        }}
      >
        <Button href={job.applyLink} target="_blank" sx={{ color: '#000', backgroundColor: '#55efc4', textAlign: 'center', fontWeight: 'bold', textTransform: 'capitalize', position: 'relative', justifyContent: 'space-between' }}>
          <img src={thunderbolt} alt='thunder' height="30px" width="30px" style={{ marginRight: '8px', alignItems: 'center' }} />
          Easy Apply
        </Button>
      </Box>
      <Box
        sx={{
          marginLeft: '5px',
          marginRight: '20x',
          marginTop: '5px',
          p: 1,
          width: 'auto',
          border: '1px solid #ccc',
          borderRadius: '15px',
          backgroundColor: '#4943da',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          minWidth: '120px',
          minHeight: '40px',
          '@media (max-width: 768px)': {
            minWidth: '80px', // Adjust the minimum width for smaller screens
            minHeight: '30px', // Adjust the minimum height for smaller screens
          },
        }}
      >
        <Button href={job.applyLink} target="_blank" sx={{ color: 'white', backgroundColor: '#4943da', textAlign: 'center', textTransform: 'capitalize', position: 'relative', justifyContent: 'space-between' }}>
          <img src={referral} alt='thunder' height="35px" width="40px" style={{ marginRight: '8px', alignItems: 'center' }} />
          Unlock referral asks
        </Button>
      </Box>

    </Box>
  );
};

export default JobDetailsBox;
