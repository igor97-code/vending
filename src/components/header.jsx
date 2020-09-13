import React from 'react';



export default function Header({store}){
    const rate = ['#','USD','EUR'];
    let [popup, setPopup] = React.useState(false);
    let [Valute,setValute] = React.useState(null);
    let [currentValue,setValue] = React.useState(0);
    let rateElement  = React.useRef();
    let input = React.useRef();
    let currentValute = store.getState().wallet.Valute;
    
    let addMoney = ()=>{
        let core =input.current.value;
        if(currentValute != '#' && core){
            let rub = Valute[currentValute] * input.current.value;
            let element = store.getState().items;
            let minPrice = Math.min.apply(null,element.map(item => item.price))
            minPrice * Valute['USD'] > rub ? store.dispatch({
                type: 'LittleMoney'
            }): store.dispatch({
                type: 'upWallet',
                core
            })
            input.current.value = '';
        }
        else{
            !core ? store.dispatch({type:'notMoney'}) :
            currentValute == '#' && store.dispatch({
                type: 'notSelectValute'
            }) 
        }
    }
    function updateWallet(){
            let state = store.getState();
            if(currentValute !='#'){

                setValue(state.wallet.wallet * Valute[currentValute]);
            }
    }
    store.subscribe(updateWallet);
    React.useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            if(!e.path.includes(rateElement.current)){
                setPopup(false);
            }
        })
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then( rez => rez.json())
            .then(rez =>{
                setValute({
                    [rez.Valute.USD.CharCode]:rez.Valute.USD.Value,
                    [rez.Valute.EUR.CharCode]:rez.Valute.EUR.Value,
                });
            })
    },[])
    return(
        <header>
            <div className="Header d-flex">
                <div className="Header_title">
                <span class="material-icons">
                    shopping_bag
                </span> 
                    Вендинговый автомат
                </div>
                <div className="Header-btn d-flex">
                    <div className="cash">
                    <span class="material-icons">
                        shopping_cart
                    </span>
                        {currentValue}
                    </div>
                    <div className="insert-cash d-flex">
                        <div className="rate-cash" ref ={rateElement} onClick ={()=>{setPopup(!popup);}}>
                            {currentValute}
                            <span class={`material-icons ${popup? 'open' : ''}`}>
                                 arrow_drop_down
                            </span>
                            <div className= {`rate-popup  ${popup? 'show': ''}`}>
                                {rate.map((elem,index) => (<div key={index} onClick = {(e)=>{
                                    store.dispatch({
                                        type: 'setValute',
                                        Valute: elem
                                    })
                                }}>{elem}</div>))}
                            </div>
                        </div>
                        <input ref={input} type="text" placeholder ="Сумма"/> 
                    </div>
                    <div className ="cash-add-off">
                       <button className="btn-add" onClick ={addMoney}>
                       <span class="material-icons">
                             control_point
                        </span>
                           Добавить
                        </button>
                       <button className="btn-off" onClick = {()=>{
                           store.dispatch({
                               type: 'reset'
                           })
                       }}>
                            <span class="material-icons">
                                delete
                             </span>
                                Сбросить
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}