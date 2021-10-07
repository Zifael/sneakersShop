import React from 'react';
import Info from '../components/Info';
import Like from '../Img/heartOn.png';
import { NavLink } from 'react-router-dom';


function FavoritePage({favorits, removeFavoritItem}) {    

    return (
        <div className='favorite__card'>           
                {!favorits.length ?
                    <div className='favorite__no'>               
                        <div className='favorite__no__content'>                           
                            
                            <Info title='Закладок нет' img='https://mydrawing.net/wp-content/uploads/2015/12/990ab0c28086a68085e851a6ab4497c2.png' 
                            info='Вы ничего не добавляли в закладки !'/>
                            <NavLink to='/'> 
                                <button  className='info_button'>Вернуться назад <div className='info__arrow'>&#8592;</div></button>
                            </NavLink>
                        </div>
                    </div>                
                : favorits.map(favorit => 
                    <div key={favorit.id} className='card'>
                        <div>
                            <img  className='favorite' width={20} height={20} src={Like}  alt='favorit' onClick={()=>removeFavoritItem(favorit.id)}/>
                        </div> 
                        <img  width={133} height={112} src={favorit.img} alt='favorit'/>
                        <h5>{favorit.title}</h5>
                        <div className='card__info'>
                            <div className='card__price'>
                                <span>Цена:</span>
                                <b>{favorit.price} руб.</b>
                            </div>                
                        </div>
                    </div>
                )}                            
        </div>
    );
}

export default FavoritePage;