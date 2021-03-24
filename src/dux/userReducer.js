import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {
    let respData = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: respData
    }
}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
                const {email, firstName, lastName} = action.payload.user
                return {
                    email,
                    firstName,
                    lastName
                }
                //ALSO COULD USE THE FOLLOWING:
                // return {
                //     email: action.payload.user.email,
                //     firstName: action.payload.user.firstName,
                //     lastName: action.payload.user.lastName
                // }
        default: return state;
    }
}
