import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

//change to functional component if state isn't necessary
class BarChart extends Component {
    constructor(props){
        super(props);

        this.state = {
            chartData:props.chartData
          }
        }
      
        static defaultProps = {
          displayTitle:true,
          displayLegend: true,
          legendPosition:'right',
          location:''
        }

        render(){
            return (
              <div className="chart">
                <Bar
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      text:'Largest Cities In Loprek',
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    }
                  }}
                />
              </div>
            )
          }}

export default BarChart;