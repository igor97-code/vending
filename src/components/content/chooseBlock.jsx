import React from 'react';



export default function ChooseBlock(props){
   let store = props.store.getState();
   let item = store.items.find(elem=>{
        return elem.id == props.chooseItem
   })
  
    return(
        <div className ="chooseItem" >
            <img src={item.product} alt=""/>
            <div className="info">
                Выбрать данный товар?
            </div> 
            <div className="choose-item-price">
                {`Цена ${item.price}$`}
            </div>
            <div className ="chooseItem-btn">
                <button className="cansel" onClick ={()=>{
                    props.store.dispatch({type:'canselItem'});
                }} >Отмена!</button>
                <button className="ok" onClick ={()=>{
                     props.store.dispatch({type:'itemBay',elem:item});
                }}>Да</button>
            </div>
        </div>
    )
}