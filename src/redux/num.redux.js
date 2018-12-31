const ADD_TEM="升温";

const initState={
    number:20
}

export function num(state=initState,action) {
    switch (action.type){
        case "升温":
            return {...state,number:state.number+1}
        default:
            return state;
    }
}

export function addTem() {
    return {type:ADD_TEM};
}