


export default function ErrorsReducers(state = {info:''},action){
    if(action.type == 'LittleMoney'){
        return {
            ...state,
            info: 'Недостаточно средств!'
        }
    }
    if(action.type == 'notSelectValute'){
        return{
            ...state,
            info: 'Выберите валюту!'
        }
    }
    if(action.type == 'accept-error'){
        return{
            ...state,
            info:''
        }
    }
    if(action.type == 'notMoney'){
        return{
            ...state,
            info:'Пополните баланс!'
        }
    }
    if(action.type == 'reset'){
        return{
            ...state,
            info:'Заберите деньги!'
        }
    }
    if(action.type == 'itemBay'){
        return{
            ...state,
            info:'Заберите товар!'
        }
    }
    return state;
}