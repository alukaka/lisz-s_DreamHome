import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import './style.css';
import NavLink from '../Navigation/index.jsx'
class Index extends React.Component {
    render() {
        return (
            <div >
                <NavLink/>
                <Initindex />
            </div>
        );
    }
}
class Initindex extends React.Component{
  render(){
    let articDatas = require("../../myartic/other/others.json");

    return (
        <div className="initindex">
          <h className="title">
            标题：{articDatas[0].title}
          </h>

          <ol className="ol">时间：{articDatas[0].time} 分类：{articDatas[0].classify}</ol >
          <p className="artic">  {articDatas[0].message}</p >
        </div>
    );
  }
}
Index.propTypes = {}
export default Index;
