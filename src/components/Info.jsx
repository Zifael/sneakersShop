import React from 'react';

function Info({title,img,info}) {


    return (
        <>            
            <img className='info__img' width='100px' src={img}/>
            <h2 className='info__titile'>{title}</h2>
            <div className='info__content'>{info}</div>            
        </>
    );
}

export default Info;