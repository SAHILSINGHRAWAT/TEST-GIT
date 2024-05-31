import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, FormHelperText, Box } from '@mui/material';

const departments = [
  { id: 1, name: 'Gynaecology & Maternity' },
  { id: 2, name: 'General Physician' },
  { id: 3, name: 'General Surgery' },
  { id: 4, name: 'State of Art Operation Theater' },
  { id: 5, name: 'Pharmacy' },
  { id: 6, name: 'Pathology' },
];
const doctors = [
  { id: 1, name: 'Dr xyz' },
  { id: 2, name: 'Dr xyz' },
  { id: 3, name: 'Dr xyz' },
  { id: 4, name: 'Dr xyz' },
  { id: 5, name: 'Dr xyz' },
  { id: 6, name: 'Dr xyz' },
];
const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!selectedDoctor) {
      newErrors.doctor = 'Doctor selection is required';
    }
    if (!selectedDepartment) {
      newErrors.department = 'Department selection is required';
    }
    if (!selectedDate) {
      newErrors.date = 'Date selection is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, doctor: '' }));
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, department: '' }));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      
    }
  };

  return (
    <Box sx={{width:"80%",boxShadow:"0px 0px 10px 5px skyblue",borderRadius:"10px", backgroundColor:"white", margin:"0 10%", position:"absolute",top:"85%", padding:"20px 0", zIndex:"20"}}>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}  sx={{display: 'grid',gridTemplateColumns:"1fr 1fr",padding:"0 20%"}}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={!!errors.doctor}>
              <InputLabel>Select Doctor</InputLabel>
              <Select
                value={selectedDoctor}
                onChange={handleDoctorChange}
                label="Select Doctor"
              >
                {doctors.map((dr) => (
                  <MenuItem key={dr.id} value={dr.name}>
                    {dr.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.doctor}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={!!errors.department}>
              <InputLabel>Select Department</InputLabel>
              <Select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                label="Select Department"
              >
                {departments.map((dept) => (
                  <MenuItem key={dept.id} value={dept.name}>
                    {dept.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.department}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Select Date"
              type="date"
              variant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.date}
              helperText={errors.date}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Make Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AppointmentForm;
