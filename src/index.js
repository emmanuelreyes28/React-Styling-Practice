//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const currentDate = new Date();
const time = currentDate.getHours();

let greeting = "";

const customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

// function Morning(props) {
//   return (
//     <h1 className="heading" style={{ color: "red" }}>
//       Good Morning
//     </h1>
//   );
// }

// function Afternoon(props) {
//   return (
//     <h1 className="heading" style={{ color: "green" }}>
//       Good Afternoon
//     </h1>
//   );
// }

// function Evening(props) {
//   return (
//     <h1 className="heading" style={{ color: "blue" }}>
//       Good Evening
//     </h1>
//   );
// }

// function Greeting(props) {
//   const timeOfDay = props.timeOfDay;
//   console.log(timeOfDay);
//   if (timeOfDay > 0 && timeOfDay < 12) {
//     return <Morning />;
//   } else if (timeOfDay > 12 && timeOfDay < 18) {
//     return <Afternoon />;
//   } else {
//     return <Evening />;
//   }
// }

// ReactDOM.render(<Greeting timeOfDay={time} />, document.getElementById("root"));
