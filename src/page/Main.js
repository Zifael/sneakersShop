import React,{useState} from 'react';
import Drawer from '../components/Drawer';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FavoritePage from './FavoritePage';
import useRequest from '../hook/useRequest'

import sneaker from '../Img/sneaker.png'
import bakset from '../Img/basket.png'
import userIcon from '../Img/user-icon.png'
import unLike from '../Img/heartOff.png'
import Orders from './Orders';






const Main = (props) => {    
    const [cartItems,setCartItems] = useState([])
    const [drawer, setDrawer] = useState(false)
    const [favorits,setFavorits] = useState([])
    const [orders,setOrders] = useState([])    
    const [items,loading,error] = useRequest(fetchCart)
    
        
    function fetchCart () {
        return axios.get('https://614ded17e3cf1f001712d441.mockapi.io/items')
    }

    const setCart = (obj) => {
        if(cartItems.some(cart => cart.id === obj.id)){
            setCartItems(prev => prev.filter(cart=> cart.id !== obj.id))
        }
        else{
            setCartItems(prev=>[...prev,obj])
        }        
    }
    const removeCartItem = (id) => {   
        setCartItems(prev => prev.filter(cart=> cart.id !== id))
    }  

    const setFavorit = (obj) => {
        if(favorits.some(favorit => favorit.id === obj.id)){
            setFavorits(prev => prev.filter(cart=> cart.id !== obj.id))
        }
        else{
            setFavorits(prev => [...prev,obj])
        }    
    }
    const removeFavoritItem = (id) => {   
        setFavorits(prev => prev.filter(cart=> cart.id !== id))
    }

    const setOrder = (obj) => {
        for(let number of obj){            
            if(orders.some(order => order.id === number.id)){
                return null          
            }
        }
        setOrders(prev => [...prev, ...obj])        
        
    }
    

    if(loading){
        return <h1 style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>Идет загрузка</h1>
    }

    if(error){
        return <h1 style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>Ошибка...</h1>
    }
    
    

    return (
        <>
            <Drawer drawer={drawer} removeCartItem={removeCartItem} cartItems={cartItems} setDrawer={setDrawer} setCartItems={setCartItems} setOrder={setOrder}/>     
            <header className='header'>
                <div className='headerLeft'>
                    <img  src={sneaker} alt='sneaker'/>
                    <NavLink to='/' style={{color:'black'}}>
                        <div className='headerInfo'> 
                            <h3>REACT SNEAKERS</h3>
                            <p>Магазин кросcовок</p>                        
                        </div>
                    </NavLink>
                </div>
                <ul className='headerRight'>
                    <li>
                        <NavLink to='/favorit'>
                            <img  width={18} height={18} src={unLike} alt='basket'/>
                        </NavLink>
                    </li>                    
                    <li className='headerRight__basket'>
                        <div className='headerRight__basket__content'>                        
                            <img className='headerRight__basket__img' style={{cursor:'pointer'}} onClick={()=>setDrawer(true)} src={bakset} alt='basket'/>
                            <div className='headerRight__basket__items'>{cartItems.length === 0 ? null : cartItems.length }</div>
                        </div>
                        <span style={{marginLeft:20}}>1200 руб.</span>
                    </li>
                    <li>
                        <NavLink to='orders'>
                            <img src={userIcon} alt='userIcon'/>
                        </NavLink>
                    </li>
                </ul>
            </header>
            <div className='content'>
                <Route path='/' exact> 
                    <HomePage items={items} setCart={setCart} setFavorit={setFavorit} cartItems={cartItems} favorits={favorits}/>
                </Route>
                <Route path='/favorit'  exact > 
                    <FavoritePage  favorits={favorits} removeFavoritItem={removeFavoritItem}/>
                </Route>
                <Route path='/orders'  exact > 
                    <Orders  orders={orders}/>
                </Route> 
            </div>
        </>
    );
}

export default Main;