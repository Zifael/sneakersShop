import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import cross from '../Img/cross.png'
import arrow from '../Img/arrow.png'
import Info from './Info'

export const Drawer = ({drawer, cartItems,removeCartItem, setDrawer, setCartItems, setOrder}) => {
    
    const [buy,setBuy] = useState(false)

    const buyItems = () => {
        setCartItems([])
        setBuy(true)
        setOrder(cartItems)        
    }


    const closeeDrawer = () => {
        setDrawer(false)
        setBuy(false)
    }
    
    let sum = 0   
        for(let value of cartItems){            
            sum += value.price            
        }        
    
    let sumPercent = Math.round(sum - sum / 100 * 5)     
        
    return (        
        <div className={`overlay ${drawer ? 'overlayVisibility' : ''}`} >    
            <div className='drawer'>
                <h2 className='drawe__close'>
                    Корзина
                    <img onClick={closeeDrawer} width={20} height={20} src={cross} alt='close'/>                    
                </h2>                                  
                <div>
                    {!cartItems.length ?  
                        <div className='basket__no'>               
                            <div style={{marginTop:'50%',marginBottom:'100px'}}>
                                {!buy ?
                                <>                            
                                <Info img='https://all-psd.ru/uploads/posts/2011-07/00064.jpg' title='Товара в корзине нет' />
                                <button  onClick={closeeDrawer} className='info_button'>Вернуться назад <div className='info__arrow'>&#8592;</div></button>
                                </>
                                
                                :
                                <>
                                    <Info img ='https://krot.mobi/uploads/posts/2021-02/thumbs/1613663630_3-p-fon-bloknotnii-list-3.jpg'
                                    title = 'Товара оформлен' 
                                    info = 'Товар скоро будет передан курьерской службе доставке'
                                    />
                                    <NavLink to='orders'>
                                        <button  onClick={closeeDrawer} className='info_button'>Перейти к мои покупкам <div className='info__arrow'>&#8592;</div></button>
                                    </NavLink>
                                </>                                    
                                
                                }
                            </div>
                        </div>                    
                        :cartItems.map(cartitem =>           
                        <div key={cartitem.id} className='cartItem'>
                            <img className='cartImg'  width={70} height={70} src={cartitem.img} alt='cartItem'/>                    
                            <div className='cartInfo'>
                                <p>{cartitem.title}</p>
                                <b>{cartitem.price} руб.</b>
                            </div>
                            <img onClick={()=>removeCartItem(cartitem.id)} className='cartRemove' width={13} height={13} src={cross} alt='removeCart'/>
                        </div> 
                        )
                    }           
                </div>
                {cartItems.length ? <div className='drawerPrice'>                    
                    <ul className='drawerTotalBLock'>                        
                        <li className='drawerSum'>
                            <span>Комиссия:</span>
                            <div></div>
                            <b>5%</b>
                        </li>
                        <li className='drawerSum'>
                            <span>Общая стоимость:</span>
                            <div></div>
                            <b>{sumPercent} руб.</b>
                        </li>
                    </ul>
                    <button onClick={buyItems}>
                        Оформить заказ 
                        <img width={20} height={20} src={arrow} alt='arrow'/>
                    </button> 
                </div> : null}                        
            </div>
        </div>
    )
}



export default Drawer
