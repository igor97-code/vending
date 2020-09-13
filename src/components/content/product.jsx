import React from 'react';




export default function Product(props){
   let item = props.item;
    let store = props.store;
    let checkWallet = ()=>{
        let state = store.getState();
        if(state.wallet.wallet == 0 || state.wallet.wallet < item.price ){
            store.dispatch({
                type:'notMoney'
            })
        }
        else{
            store.dispatch({
                type:'chooseItem',
                item: item.id
            })
        }
    }
    return(
        
        <tr onClick ={()=>{
            checkWallet();
        }}>
            <th>{item.id}</th>
            <th><img src ={item.product}></img></th>
            <th>{item.name}</th>
            <th>{item.price}</th>
            <th>{item.count}</th>
        </tr>
    )
}