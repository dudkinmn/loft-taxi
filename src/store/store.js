import { createStore } from "redux";

const SET_AUTHORIZED = "SET_AUTHORIZED"
const SET_USER = "SET_USER"

let initialState = {
    isAuthorized: false,
    User: {
        login: "",
        password: ""
    }
}

initialState = JSON.parse(localStorage.all) || {}

function setUser(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}

function setAuthorized(state = false, action) {
    switch (action.type) {
        case SET_AUTHORIZED:
            return action.payload;
        default:
            return state;
    }
}

function reducer(state = initialState, action) {
    return {
        User: setUser(state.User, action),
        isAuthorized: setAuthorized(state.isAuthorized, action)
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    localStorage.all = JSON.stringify(store.getState())
})

function actionAuthorize(action) {
    return {
        type: SET_AUTHORIZED,
        payload: action
    }
}

function actionSetUser(action) {
    return {
        type: SET_USER,
        payload: action
    }
}

store.dispatch(actionAuthorize(true))
store.dispatch(actionSetUser({ login: "petr", password: "yyy" }))


export {
    store,
    actionAuthorize,
    actionSetUser
};