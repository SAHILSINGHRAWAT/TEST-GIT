import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({ img, heading, para }) {
  return (
    <Card sx={{ minWidth: 280, margin:"0 15px",  ":hover": {
      backgroundColor: '#d1e7f7'// Change background color on hover
    },}}>
      <CardMedia
        sx={{ height: 150}}
        image={img}
        title="Medical Department"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{borderBottom:"1px solid gray"}}>
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {para}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{backgroundColor:"#FF6D02", color:"white", ":hover": {
      backgroundColor: '#004A7C'}}}>Read More</Button>
      </CardActions>
    </Card>
  );
}
