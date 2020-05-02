import { getData } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'
const LOAD_MORE_USERS = 'LOAD_MORE_USERS'
const LOADING = 'LOADING'

let initialState = {
    users: [],
    page: 1,
    limit: 10,
    loading: null
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                users: [...state.users, ...action.data],
                loading: false
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
        default: return state
    }
}
export const getUsers = (page, limit) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    let response = await getData(page, limit)
    response ? dispatch(setUsersData(response.data.results)) : alert('нет соединения с сервером')
}
export const setUsersData = (data) => ({ type: SET_USERS_DATA, data })
export const loadMoreUsers = (page) => ({ type: LOAD_MORE_USERS, page })
export const setLoadingStatus = (status) => ({ type: LOADING, status })