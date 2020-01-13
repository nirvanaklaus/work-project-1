import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Ethnicity/Race", "Quantity"],
  ["Black/African", 8],
  ["Arabs", 2],
  ["Asians", 4],
  ["Others", 1],
  ["Caucasian", 9] // CSS-style declaration
];
const options = {
  title: "Most Popular Ethnicities",
  pieHole: 0.2,
  is3D: false
};
class Charty2 extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="Bar"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default Charty2;