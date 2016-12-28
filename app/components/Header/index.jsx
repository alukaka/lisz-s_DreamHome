import React, {
 Component,
 PropTypes
 } from 'react';
import { findDOMNode } from 'react-dom';
import './style.css'
class Nav extends React.Component{
    render() {
    console.log('this  is  props',this.props)
        return(
            <div id="nav">
                <img src={require(this.props.icon)} id="img"/>
                <b id="name">{this.props.name}</b>
            </div>
        );
    }
};
let imageDatas = require("./imgdata.json");
console.log(imageDatas)

imageDatas = (function getImgUrl(imgDatasArr) {
for (var i = 0, j = imgDatasArr.length; i < j; i++) {
var oneimgData = imgDatasArr[i];
oneimgData.imageURL = require('./images/' + oneimgData.icon);
imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
}
return imgDatasArr;
})(imageDatas);
class Footer extends React.Component {
    render() {
        var $nodes = imageDatas.map(function (v) {
            return(<Nav className="footer-nav" icon={'./images/'+v.icon} name={v.name} />);
        });
        return(
          <div className="clumcontainer">
            <div className="footer">
              {$nodes}
            </div>
            <div className="line">
            </div>
          </div>
        );
    }
}

Footer.propTypes={
}
export default Footer;
