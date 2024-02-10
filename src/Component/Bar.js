// Navigation Bar Component
import React from 'react';
import { connect } from 'react-redux';

const NavigationBar = ({ count }) => {
    return (
        <div>
            <p>Count in Nav: {count}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(NavigationBar);