import React from "react";
// import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  JsDescription: {
    backgroundColor: "#30b5b5",
    margin: "20px",
    padding: "20px",
    color: "white",
    lineHeight:'25px',
    display: 'flex', 
    flexDirection: 'column',
},
  desc: {
      paddingTop:'20px'
  }
});

export const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.JsDescription} maxWidth="md">
        <h1>What is JavaScript?</h1>
        <p className={classes.desc}>
          JavaScript is a scripting or programming language that allows you to
          implement complex features on web pages — every time a web page does
          more than just sit there and display static information for you to
          look at — displaying timely content updates, interactive maps,
          animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet
          that JavaScript is probably involved. - MDN JavaScript Docs
        </p>
      </Container>

      <Button
        href="/lessons"
        variant="contained"
        color="secondary"
        size="large"
      >
        Get Started
      </Button>
    </>
  );
};

// const What = styled.div`
//   background-color: #48d6d2;
//   color: #fff;
//   width: 900px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 20px auto;
//   padding: 30px;
//   h1 {
//     font-size: 4rem;
//     padding: 10px;
//   }
//   p {
//     font-size: 1.5rem;
//   }
// `;
