import React, { useEffect } from 'react';
import { getUsers, loadMoreUsers, setPagesTotalCount, initializing } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Content from './Content';



const ContentContainer = (props) => {
    useEffect(() => {
        let pagesCount = Math.ceil(props.usersTotalCount / props.limit)
        props.setPagesTotalCount(pagesCount)
    }, [props.usersTotalCount])

    useEffect(() => {
        props.initializing(props.page, props.limit, props.sortType, props.sortOrder)
    }, [props.sortType, props.sortOrder])

    const getMoreUsers = () => {
        props.getUsers(props.page + 1, props.limit, props.sortType, props.sortOrder)
    }


    if (props.initializie) {
        return (
            <Content users={props.users}
                loadMoreUsers={props.loadMoreUsers}
                page={props.page}
                limit={props.limit}
                loading={props.loading}
                usersTotalCounting={props.usersTotalCount}
                pagesTotalCount={props.pagesTotalCount}
                getMoreUsers={getMoreUsers}
                sortType={props.sortType} />
        )
    }
    if (!props.initializie) {
        return (<div>LOADING...</div>)
    }

}

let mapStateToProps = (state) => {

    return ({
        users: state.users,
        limit: state.users.limit,
        page: state.users.page,
        loading: state.users.loading,
        usersTotalCount: state.users.usersTotalCount,
        pagesTotalCount: state.users.pagesTotalCount,
        initializie: state.users.initialize,
        sortType: state.users.sortType,
        sortOrder: state.users.sortOrder
    })
}

export default connect(mapStateToProps, { getUsers, loadMoreUsers, setPagesTotalCount, initializing })(ContentContainer);

