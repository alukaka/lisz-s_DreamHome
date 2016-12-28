History = require('react-router');
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Footer from '../components/Header';
import Navigation from '../components/Navigation';
import {} from '../actions';
import '../style/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
                <Footer />
            </div>
        );
    }
}
App.propTypes = {
};
function mapStateToProps(state) {
}
//导出组件
export default connect(mapStateToProps)(App);
