import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import NavLink from './naviLink';
/*
 * @class Navigation `导航`组件
 */
import './style.css'
let imageDatas = require("./imgdata.json");
imageDatas = (function getImgUrl(imgDatasArr) {
    for (var i = 0, j = imgDatasArr.length; i < j; i++) {
        var oneimgData = imgDatasArr[i];
        oneimgData.imageURL = require('./images/' + oneimgData.icon);
        imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
    }
    return imgDatasArr;
})(imageDatas);
class Nav extends React.Component {
    render() {
        return (
            <div id="nav">
                <img src={require(this.props.icon)} id="img"/>
                <b id="name">{this.props.name}</b>
            </div>
        );
    }
};
export default class Navigation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
          <div className="clumcontainer">
            <div className="footer">
                <NavLink to="/index">
                    <Nav icon={'./images/' + imageDatas[0].icon} name={imageDatas[0].name}/>
                </NavLink>
                <NavLink to="/classify">
                    <Nav icon={'./images/' + imageDatas[1].icon} name={imageDatas[1].name}/>
                </NavLink>
                <NavLink to="/lable">
                    <Nav icon={'./images/' + imageDatas[2].icon} name={imageDatas[2].name}/>
                </NavLink>
                <NavLink to="/demo">
                    <Nav icon={'./images/' + imageDatas[3].icon} name={imageDatas[3].name}/>
                </NavLink>
                <NavLink to="/footmark">
                    <Nav icon={'./images/' + imageDatas[4].icon} name={imageDatas[4].name}/>
                </NavLink>
            </div>
            <div className="line" />
          </div>

        )
    }
}
