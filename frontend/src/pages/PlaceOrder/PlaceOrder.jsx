import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Informação de Delivery</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email adress' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='País' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total do pedido</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : + 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button >PAGAR</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
