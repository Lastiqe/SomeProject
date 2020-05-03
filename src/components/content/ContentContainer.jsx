import React, { useEffect } from 'react';
import { getUsers, loadMoreUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Content from './Content';



const ContentContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.page, props.limit)
        console.log('рендер');

    }, [props.page])


    return (
        <Content users={props.users} loadMoreUsers={props.loadMoreUsers} page={props.page} loading={props.loading} />
    );
}

let mapStateToProps = (state) => {
    return ({
        users: state.users,
        limit: state.users.limit,
        page: state.users.page,
        loading: state.users.loading

    })
}

export default connect(mapStateToProps, { getUsers, loadMoreUsers })(ContentContainer);

