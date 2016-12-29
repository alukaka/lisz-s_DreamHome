import React, {
 Component,
 PropTypes
 } from 'react';
import { findDOMNode } from 'react-dom';
import './style.css';
import  NavLink from '../Navigation/index.jsx'
class Index extends React.Component {
    render() {
        return(
          <div>
            <NavLink />
          </div>
        );
    }
}

Index.propTypes={
}
export default  Index;
