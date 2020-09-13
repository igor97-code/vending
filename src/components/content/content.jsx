import React, { useState } from 'react';
import Product from './product';
import ChooseBlock from './chooseBlock'

export default function Content({store}){
   let state = store.getState();
   let [errors,setErrors] = useState(state.Errors.info)
   let [chooseItem, setChooseItem] = useState('0');
   
   function showErrors(){
        setErrors(store.getState().Errors.info)
        let state = store.getState();
        if(state.chooseItem){
            setChooseItem(state.chooseItem.chooseCard);
        }
   }
   store.subscribe(showErrors);

    return(
        <div className="content">
            <div className= {`Errors ${errors? 'Errors-block' : ''}`}>
                {
                errors != 'Заберите деньги!' &&  errors != 'Заберите товар!' && <img src="/img/error.png" alt="Error"/>
                }
                <div className ="error-info">
                    {errors}
                </div>
                <button className="btn-error" onClick ={()=>{store.dispatch({type:'accept-error'})}}>
                    ок
                </button>
            </div>
            {chooseItem != 0 ? <ChooseBlock store ={store} chooseItem = {chooseItem}></ChooseBlock> : '' }
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>
                            <span class="material-icons">
                                menu_book
                            </span>
                            <span>Товар</span>
                        </th>
                        <th>
                            <span class="material-icons">
                                create
                            </span>
                            Название
                        </th>
                        <th>
                            <span class="material-icons">
                                 attach_money
                            </span>
                            Цена
                        </th>
                        <th>
                        <span class="material-icons">
                            shopping_basket
                        </span>
                            Количество
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state['items'].map( item =>( <Product item = {item} store={store}></Product>))}
                    {/* <Product items ={{id: '1',product: '/img/orbit.png', name: 'orbit', price: '25', count:'25'}}></Product> */}
                </tbody>
            </table>
        </div>
    )
}