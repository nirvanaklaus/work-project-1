import React from 'react';
import Card from '../../components/card/card.component';
import BarChart from '../../components/charts/barchart';
import PieChart from '../../components/charts/piechart';
import Calendar1 from '../../components/charts/calendar';
import Charty from '../../components/charts/google-chart';
import Charty2 from '../../components/charts/google-bar-chart';


import './dashboard.styles.scss'




class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            chartData:{}
          }
        }

        componentWillMount(){
            // Ajax calls here
            this.setState({
              chartData:{
                labels: ['Likan', 'Vorst', 'Manikk', 'Hidarth', 'Brefht', 'Plemrs'],
                datasets:[
                  {
                    label:'Population',
                    data:[
                      617594,
                      181045,
                      153060,
                      106519,
                      105162,
                      95072
                    ],
                    backgroundColor:[
                        'rgba(255, 0, 55, 0.6)',
                        'rgba(0, 150, 250, 0.6)',
                        'rgba(255, 183, 0, 0.6)',
                        'rgba(0, 255, 255, 0.6)',
                        'rgba(85, 0, 255, 0.6)',
                        'rgba(255, 128, 0, 0.6)',
                        'rgba(255, 0, 55, 0.6)'                    ]
                  }
                ]
              }
            });
        }
      

    render() {
        const anArray = [<PieChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>,<BarChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>];
        const sidebarArray = ['Overview', 'Information', 'Contributions', 'Results', 'Profile'];
        return (
            <div className="grid">

                <div className="div1" id="abc">
                    <h1 style={{color:"#ffffff", fontFamily:"times", textTransform:"uppercase"}}> City Dashboard</h1>
                    <ul style={{listStyle: "none"}}>
                        {
                            sidebarArray.map(sbarr => (
                                <li className="sidebar-list" key={sbarr.length*Math.round(Math.random()*13)}  style={{fontSize: "20px"}}> <img src="https://img.icons8.com/material-outlined/24/000000/home-page.png" alt=""/>{sbarr}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="main">
                    <div>
                    <h3 style={{color:"#ffffff", fontFamily:"times", textTransform:"uppercase"}}>City Statistics</h3>
                    </div>
                    <div className="div2">
                    <Card display={<Charty2/>}/>
                    <Card display={<Charty/>}/>
                    <Card display={<Calendar1/>}/>
                    </div>
                    <div className="div3">
                        {anArray.map(arr => (
                                <Card display = {arr} key={Math.round(Math.random()*13)} />
                        ))}
                    </div>
                </div>

            </div>

        )
    }
}

export default Dashboard;