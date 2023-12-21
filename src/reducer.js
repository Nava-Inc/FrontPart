import {reducerCases} from "./Components/Constants";

export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    token : null

}

const reducer = (state, action) => {
    //consol.log(action);

    switch(action.type){
       /* case reducerCases.SET_USER:
            return{
                ...state,
                user: action.user
            }*/
        case reducerCases.SET_TOKEN:
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;
