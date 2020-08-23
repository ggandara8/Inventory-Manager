import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, CardMedia } from "@material-ui/core";
import background from "./globe.jpg";

function Jumbotron() {
   const classes = useStyles();
   
   return (
      <CardMedia className={classes.imageBackground} image={background} >
         <Typography variant="h2" className={classes.jumbotronTitleStyle}>
            Grow your manufacturing business with smarter inventory management
         </Typography>
         <Typography variant="h6" className={classes.h6Style}>
            Chief System’s inventory management software is perfectly suited to businesses in the manufacturing industry who require an accurate finished goods cost. Product assemblies, costed purchase orders, multi-currency, and advanced reporting are just a few of Chief System’s powerful features which make this possible
         </Typography>
         <Button className={classes.containedButtonStyle} >
            Start your free trial now
         </Button>
      </CardMedia>
   )
};

const useStyles = makeStyles({
   root: {
   },
   imageBackground: {
      backgroundColor: "red",
      height: "100vh",
   },
   jumbotronTitleStyle: {
      color: "#F2F2F2",
      width: "60%",
      margin: "0 auto",
      padding: "12% 0 3%",
   },
   h6Style: {
      letterSpacing: "2px",
      fontWeight: "300",
      color: "#F2F2F2",
      width: "60%",
      margin: "0 auto 3%",
   },
   containedButtonStyle: {
      backgroundColor: "#BF0426",
      color: "#F2F2F2",
      padding: "10px 20px",
      boxShadow: "none",
      textTransform: "lowercase",
      fontSize: "15px",
      fontWeight: "400",
      "&:hover": {
         backgroundColor: "#D97904",
         boxShadow: "none"
      }
   }
});

export default Jumbotron;
