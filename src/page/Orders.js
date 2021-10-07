import React from 'react';

function Orders({orders}) {
    return (
        <div>
            <h1 style={{marginBottom:40}}>Ваши заказы</h1>
            {!orders.length ? <h1 style={{display:'flex',justifyContent:'center', padding:'200px'}}>Нет заказов</h1>
            : 
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {orders.map(order => 
                    <div key={order.id} className='card'>                
                    <img  width={133} height={112} src={order.img} alt='favorit'/>
                    <h5>{order.title}</h5>                        
                </div>
                    
                )}
            </div>
            }
        </div>   
    );
}

export default Orders;