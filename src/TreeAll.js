import React, { Component } from 'react';
import axios from 'axios'
import Tree from 'react-d3-tree';
import Navbar from './Navbar'
import {Panel} from 'react-bootstrap';

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
  height: '60%',
}

class TreeAll extends Component {

  constructor(){
    super()
    this.state ={
      data: myTreeData,
      house: 'Seleccione una casa',
      name:'a',
      last_name:'b',
      res_unit:'c',
      email:'d'
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
        y: dimensions.height / 14
      }
    });
  }

  houseDetail(nodeData, evt){
      console.log(nodeData);
  };

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Navbar/>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
         <Tree data={this.state.data} orientation = 'vertical' translate={this.state.translate} onClick= {this.houseDetail()}/>
        </div>
        <div>
            <Panel>
              <Panel.Heading>{this.state.house}</Panel.Heading>
              <Panel.Body>
              {this.state.name}
              <hr/>
              {this.state.last_name}
              <hr/>
              {this.state.email}
              <hr/>
              {this.state.res_unit}
              </Panel.Body>
            </Panel>
        </div>
      </div>
    );
  }
}

  export default TreeAll;
