import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setSortType } from '../../redux/users-reducer';


const HeaderContainer = (props) => {

    const changeSortType = (sortType, sortOrder) => {
        if (sortType === props.sortType && sortOrder === props.sortOrder) {
            return undefined
        }
        props.setSortType(sortType, sortOrder)
    }

    return (
        <Header
            sortType={props.sortType}
            changeSortType={changeSortType}
            sortOrder={props.sortOrder} />
    );
}

const mapStateToProps = (state) => {
    return ({
        sortType: state.users.sortType,
        sortOrder: state.users.sortOrder
    })
}

export default connect(mapStateToProps, { setSortType })(HeaderContainer)
