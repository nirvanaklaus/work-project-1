import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Science & Programming", 8],
  ["Law Enforcement", 2],
  ["Art", 4],
  ["Others", 1],
  ["Banking & Finance", 9] // CSS-style declaration
];
const options = {
  title: "Most Popular Jobs",
  pieHole: 0.2,
  is3D: false
};
class Charty extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default Charty;