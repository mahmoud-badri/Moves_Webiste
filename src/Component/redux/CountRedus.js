
const INITIAL_VALUES = {
    num: 0
}


export default function number(state=INITIAL_VALUES, action){

    switch(action.type){
        case 'CHANGE_COUNT':
            return{
                ...state,
                num: action.payload
            }
        default:
            return state
    }
}