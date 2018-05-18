import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Tree from 'react-d3-tree';
const myTreeData = [
  {
    name: 'Parent Node',
    nodeSvgShape: {
      shape: 'circle',
      shapeProps: {
        r: 10,
        fill: '#04B4AE'
      }
    }
  }
];

class App extends Component {
  constructor(){
    super()
    this.state ={
      data: myTreeData,
      dataAlarm1: myTreeData,
    }

    var newData = []
    var dataFinal =[]
    axios.get('http://localhost:8000/tree').then(response => {newData= response.data[0]['data']; dataFinal.push(newData); this.setState({data: dataFinal}); this.filterData(this.state.data);})


  }

  filterData(data){
      var children_ps = [];
      for (var resUnit in data[0]['children'])
      {
          var houses1=[];
          for(var house in data[0]['children'][resUnit]['children']){
              if(data[0]['children'][resUnit]['children'][house]['nodeSvgShape']['shapeProps']['fill'] === 'red'){
                  houses1.push(data[0]['children'][resUnit]['children'][house])
              }
          }
          var res_unit1 = {'name': data[0]['children'][resUnit]['name'], 'children': houses1};
          children_ps.push(res_unit1);
      }
      var toAppend = [{'name':data[0]['name'], 'children':children_ps }];
      this.setState({dataAlarm1: toAppend});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <div id="treeWrapper" style={{width: '100%', height: '100%'}}>
             <Tree data={this.state.data} orientation = 'vertical'/>
            </div>
        </p>
        <p className="App-intro">
            <div id="treeWrapper" style={{width: '100%', height: '100%'}}>
             <Tree data={this.state.dataAlarm1} orientation = 'vertical'/>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
