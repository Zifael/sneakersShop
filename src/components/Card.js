import React, { useEffect, useState } from 'react'
import plus from '../Img/plus.png'
import check from '../Img/check.png'
import unLike from '../Img/heartOff.png'
import Like from '../Img/heartOn.png'

const  Card = ({item, setCart, setFavorit, addedBasket, addedFavorit}) => {        
    
    const [checkImgBasket,setCheckImgBasket] = useState(addedBasket)
    const [checkImgFavorit,setCheckImgFavorit] = useState(addedFavorit)

    useEffect(() => {
        setCheckImgBasket(addedBasket)
    }, [addedBasket])

    useEffect(() => {
        setCheckImgFavorit(addedFavorit)
    }, [addedFavorit])

    const onClickBasket =  (id,img,title,price) => {      
        setCart({id,img,title,price})     
    }
    
    const onClickFavourt = (id,img,title,price) => {        
        setFavorit({id,img,title,price})
        setCheckImgFavorit(!checkImgFavorit)
    }


    return (
        <div className='card'>            
            <div>
                <img  className='favorite' width={20} height={20} src={checkImgFavorit ? Like : unLike}  onClick={()=>onClickFavourt(item.id,item.img,item.title,item.price)}/>
            </div> 
            <img  width={133} height={112} src={item.img}/>
            <h5>{item.title}</h5>
            <div className='card__info'>
                <div className='card__price'>
                    <span>Цена:</span>
                    <b>{item.price} руб.</b>
                </div>
                
                    <img className='card__img__check' width={25} height={25} onClick={()=>onClickBasket(item.id,item.img,item.title,item.price)} src={checkImgBasket ? check : plus } />
                
            </div>            
        </div>
    )
}

export default Card
