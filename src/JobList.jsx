import React,{useState,useEffect} from 'react';
import jobs from './jobs'
import { Box, Select, MenuItem, InputLabel, FormControl, TextField,CircularProgress } from '@mui/material';
import JobDetailsBox from './JobDetailsBox';




const JobList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration purposes
  }, []);
  

  const handleFilterChange = (event, filterName) => {
    const value = event.target.value;
    const updatedJobs = jobs.filter((job) => {
      if (filterName === 'roles') {
        return job.title.toLowerCase().includes(value.toLowerCase());
      }
      if (filterName === 'employees') {
        return job.employees === value;
      }
      if (filterName === 'experience') {
        return job.experience === value;
      }
      if (filterName === 'jobType') {
        return job.jobType.toLowerCase() === value.toLowerCase();
      }
      if (filterName === 'minimumSalary') {
        return job.minsalary === value;
      }
      if (filterName === 'companyName') {
        return job.companyName.toLowerCase().includes(value.toLowerCase());
      }
      return true;
    });

    setFilteredJobs(updatedJobs);
  };
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '20px', width: 'auto', marginLeft: '140px', flex: '1', p: 1, paddingRight: '20px' }}>
        <FormControl sx={{ marginRight: 1 }} >
          <InputLabel>Roles</InputLabel>
          <Select sx={{ width: '270px' }} label="Roles" placeholder='Roles' onChange={(e) => handleFilterChange(e, 'roles')}>
            <MenuItem value="Backend Engineer">Backend Engineer</MenuItem>
            <MenuItem value="Founding Engineer">Founding Engineer</MenuItem>
            <MenuItem value="Product Manager">Product Manager</MenuItem>
            <MenuItem value="Software Productivity Engineer">Software Productivity Engineer</MenuItem>
            <MenuItem value="Founding Fullstack Engineer">Founding Fullstack Engineer</MenuItem>
            <MenuItem value="Fullstack Engineer">Fullstack Engineer</MenuItem>
            <MenuItem value="Senior Engineer">Senior Engineer</MenuItem>
            <MenuItem value="Computer Vision Lead">Computer Vision Lead</MenuItem>
            <MenuItem value="Frontend Engineer">Frontend Engineer</MenuItem>
            <MenuItem value="Product Designer">Product Designer</MenuItem>
            <MenuItem value="Android developer">Android developer</MenuItem>
            <MenuItem value="CTO">CTO</MenuItem>
            <MenuItem value="Senior Backend/Staff Engineer">Senior Backend/Staff Engineer</MenuItem>
            <MenuItem value="Founding ML Engineer">Founding ML Engineer</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 1 }}>
          <InputLabel>Number Of Employees</InputLabel>
          <Select sx={{ width: '220px' }} label="Number of Employees" placeholder="Number of Employees" onChange={(e) => handleFilterChange(e, 'employees')}>
            <MenuItem value="1-10">1-10</MenuItem>
            <MenuItem value="11-20">11-20</MenuItem>
            <MenuItem value="21-50">21-50</MenuItem>
            <MenuItem value="51-100">51-100</MenuItem>
            <MenuItem value="101-200">101-200</MenuItem>
            <MenuItem value="201-500">201-500</MenuItem>
            <MenuItem value="500+">500+</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 1 }}>
          <InputLabel>Experience</InputLabel>
          <Select sx={{ width: '130px' }} label="Experience" placeholder="Experience" onChange={(e) => handleFilterChange(e, 'experience')}>
            <MenuItem value="1 year">1 year</MenuItem>
            <MenuItem value="2 years">2 years</MenuItem>
            <MenuItem value="3 years">3 years</MenuItem>
            <MenuItem value="4 years">4 years</MenuItem>
            <MenuItem value="5 years">5 years</MenuItem>
            <MenuItem value="6 years">6 years</MenuItem>
            <MenuItem value="7 years">7 years</MenuItem>
            <MenuItem value="8 years">8 years</MenuItem>
            <MenuItem value="9 years">9 years</MenuItem>
            <MenuItem value="10 years">10 years</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 1 }}>
          <InputLabel>Job Type</InputLabel>
          <Select sx={{ width: '130px' }} label="Job Type" placeholder="Job Type" onChange={(e) => handleFilterChange(e, 'jobType')}>
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="In-Office">In-Office</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 1 }}>
          <InputLabel>Minimum Salary</InputLabel>
          <Select sx={{ width: '160px' }} label="Job Type" placeholder="Job Type" onChange={(e) => handleFilterChange(e, 'minimumSalary')}>
            <MenuItem value="10L">10L</MenuItem>
            <MenuItem value="20L">20L</MenuItem>
            <MenuItem value="30L">30L</MenuItem>
            <MenuItem value="40L">40L</MenuItem>
            <MenuItem value="50L">50L</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Company Name" onChange={(e) => handleFilterChange(e, 'companyName')} />
      </Box>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {[...Array(Math.ceil(filteredJobs.length / 3))].map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {filteredJobs.slice(rowIndex * 3, rowIndex * 3 + 3).map((job, index) => (
              <JobDetailsBox key={index} job={job} />
            ))}
          {/* {[...Array(Math.ceil(jobs.length / 3))].map((_, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
              {jobs.slice(rowIndex * 3, rowIndex * 3 + 3).map((job, index) => (
                <JobDetailsBox key={index} job={job} />
              ))} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
