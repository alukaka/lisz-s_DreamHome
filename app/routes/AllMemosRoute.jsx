import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
} from '../actions';
/*
 * @class AllMemosRoute `全部事项`组件
 */
class AllMemosRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch} = this.props;
        return (
            <div>
            </div>
        );
    }
}
AllMemosRoute.propTypes = {
};
function mapStateToProps(state) {
}
export default connect(mapStateToProps)(AllMemosRoute);
