


export default function chooseItem(state = '',action){
    if(action.type == 'chooseItem'){
        return{
            ...state,
            chooseCard: action.item
        }
    }
    if(action.type == 'canselItem' || action.type == 'itemBay' ){
        return{
            ...state,
            chooseCard: 0
        }
    }
    return state
} 