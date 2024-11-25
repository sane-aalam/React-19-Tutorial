import "./App.css";
import React from "react";

// #1 Interview Ques --> What is JSX?
// JSX is nothing,pure HTML+JAVASCRIPT
// JSX Stands for xml javascript, it allows you to write HTML elements in javascript code
// Wihout JSX you need to write this code -> React.createElement()
// JSX if you can create React.CreateElement(), then you can console it, it will return (object)
// behide the sence babel is working to convert JSX code into pure javascript + html code
// React.createElement(type_element,type_props,_content_)
// const HeadingTag = React.createElement("h1", "", "This is Heading Tag");
// <h1>This is Heading Tag.</h1>

// #2 Interview Question --> what is components?
// components are the building blocks of the user interface. They let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be written as JavaScript functions or classes.

// #3 Interview Quesiton --> what is props?
// It is way to transfer the data one component to others.
// It can be Parents to children.
//  <Card Heading={Heading3} ImageContainer={IMG_FIRST} />
// When we console.log(props)
// Heading: "Daredevil (2015- 2018)"
// ImageContainer:
// "https://images.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time2.png"

function Card(props) {
  const { Heading, ImageContainer } = props;
  console.log(ImageContainer);
  return (
    <div
      className="netflix-card"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1 className="card-title">{Heading}</h1>
      <img className="card-image" src={ImageContainer} alt="" />
      <p className="card-content">
        It is set in the Marvel Cinematic Universe (MCU), acknowledging the film
        franchise's continuity, and was the first Marvel Netflix series leading
        up to the crossover miniseries The Defenders. Daredevil was co-produced
        by Marvel Television and ABC Studios.
      </p>
      <button class="card-button">Watch Now</button>
    </div>
  );
}

// Just for pratice!
// variable used to pass data
// we will learn how to pass API:(data)
// we will learn how to map,filter,reduce,props using API
const Heading1 = "Daredevil (2015- 2018)";
const Heading2 = "Money Heist (2020-2023)";
const Heading3 = "Narcos (2015-2017)";
const Heading4 = "Top boy (2020-2020)";
const IMG_FIRST =
  "https://images.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time2.png";
const IMG_SECOND =
  "https://images.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time1.png";
const IMG_THRID =
  "https://images.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time3.png";
const IMG_FOUR =
  "https://images.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time4.png";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Card Heading={Heading1} ImageContainer={IMG_FIRST} />
        <Card Heading={Heading2} ImageContainer={IMG_SECOND} />
        <Card Heading={Heading3} ImageContainer={IMG_THRID} />
        <Card Heading={Heading4} ImageContainer={IMG_FOUR} />
      </div>
    </>
  );
}

export default App;