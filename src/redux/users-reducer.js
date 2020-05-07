import { getData } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'
const LOAD_MORE_USERS = 'LOAD_MORE_USERS'
const LOADING = 'LOADING'
const SET_PAGES_TOTAL_COUNT = 'SET_PAGES_TOTAL_COUNT'
const SET_INITIALIZING_STATUS = 'SET_INITIALIZING_STATUS'
const SET_SORT_TYPE = 'SET_SORT_TYPE'
const SET_LIST_ORDER = 'SET_LIST_ORDER'

let initialState = {
    users: [],
    usersTotalCount: null,
    pagesTotalCount: null,
    page: 1,
    limit: 10,
    loading: null,
    initialize: false,
    sortType: 'id',
    sortOrder: 'fromGreat'
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                users: [...state.users, ...action.data],
                usersTotalCount: action.usersTotalCount
            }
        }
        case LOAD_MORE_USERS: {
            return {
                ...state,
                page: action.page
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: action.status
            }
        }
        case SET_PAGES_TOTAL_COUNT: {
            return {
                ...state,
                pagesTotalCount: action.count
            }
        }
        case SET_INITIALIZING_STATUS: {
            return {
                ...state,
                initialize: action.status
            }
        }
        case SET_SORT_TYPE: {
            return {
                ...state,
                sortType: action.sortType,
                page: 1,
                users: [],
                sortOrder: action.sortOrder
            }
        }
        default: return state
    }
}
export const getUsers = (page, limit, sortType, sortOrder) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    let response = await getData(page, limit, sortType, sortOrder)
    if (response.data.data.length > 0) {
        dispatch(setUsersData(response.data.data, response.data.totalCount))
        dispatch(loadMoreUsers(page))
        dispatch(setLoadingStatus(false))
    }
    if (!response) {
        alert('нет соединения с сервером')
    }
    if (response.data.data.length === 0) {
        return dispatch(setLoadingStatus(false))
    }

}
export const initializing = (page, limit, sortType, sortOrder) => async (dispatch) => {

    await dispatch(getUsers(page, limit, sortType, sortOrder))
    dispatch(setInitializingStatus(true))
}

export const setUsersData = (data, usersTotalCount) => ({ type: SET_USERS_DATA, data, usersTotalCount })
export const loadMoreUsers = (page) => ({ type: LOAD_MORE_USERS, page })
export const setLoadingStatus = (status) => ({ type: LOADING, status })
export const setPagesTotalCount = (count) => ({ type: SET_PAGES_TOTAL_COUNT, count })
export const setInitializingStatus = (status) => ({ type: SET_INITIALIZING_STATUS, status })
export const setSortType = (sortType, sortOrder) => ({ type: SET_SORT_TYPE, sortType, sortOrder })
// export const setListOrder = (order) => ({ type: SET_LIST_ORDER, order})