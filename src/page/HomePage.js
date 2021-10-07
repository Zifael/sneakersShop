import React,{useState,useEffect} from 'react';
import Card from '../components/Card';

import search from '../Img/search.png'
import cross from '../Img/cross.png'

function HomePage({items, cartItems, setCart, favorits, setFavorit}) {

    const [searchValue,setSearchValue] = useState('')
    
    return (
        <div>
            <div className='content__header'>
                    <h1>{searchValue ? `Поиск по : ${searchValue}`: 'Все кроссовки'}</h1>
                    <div className='search'>
                        <img width={14} height={14} src={search} alt='Search'/>
                        <input                 
                            placeholder='Поиск'
                            value={searchValue}
                            onChange={event=>setSearchValue(event.target.value)}
                        />
                        <img className='searchCross' onClick={()=>setSearchValue('')} width={11} height={11} src={cross} alt='clearSearch' />
                    </div>                
                </div>
                <div className='content__card'>
                    {items && items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item=>
                        <Card key={item.id} item={item}  setCart={setCart} setFavorit={setFavorit} 
                            addedBasket = {cartItems.some( cartItem => cartItem.id === item.id)}
                            addedFavorit = {favorits.some( favorit => favorit.id === item.id)}
                        />
                    )}                
            </div>
        </div>
    );
}

export default HomePage;