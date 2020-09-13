
const initialWallet = {
    wallet: 0,
    Valute: '#'
}


export default function walletReducer(state = initialWallet,action){
   if(action.type == 'setValute'){
      return {
          ...state,
          Valute: action.Valute
      }
   }
   if(action.type == 'upWallet'){
        return {
            ...state,
            wallet:action.core
        }
   }
   if(action.type == 'itemBay'){
       let currentWallet = state.wallet - action.elem.price;
       return{
           ...state,
           wallet: currentWallet
       }
    }
    if(action.type == 'reset'){
        return{
            ...state,
            wallet: 0
        }
    }
   return state 
}