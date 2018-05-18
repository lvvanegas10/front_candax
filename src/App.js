import React, { Component } from 'react';
import axios from 'axios'
import Tree from 'react-d3-tree';
import Navbar from './Navbar'

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

const containerStyles = {
  width: '100%',
  height: '100vh',
}

class App extends Component {

  constructor(){
    super()
    this.state ={
      data: myTreeData,
      dataAlarm1: myTreeData,
    }

    var newData = []
    var dataFinal =[]
    axios.get('http://localhost:8000/tree').then(response => {newData= response.data[0]['data']; dataFinal.push(newData); this.setState({data: dataFinal});})
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 8
      }
    });
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Navbar/>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
         <Tree data={this.state.data} orientation = 'vertical' translate={this.state.translate} />
        </div>
      </div>
    );
  }
}

  export default App;
