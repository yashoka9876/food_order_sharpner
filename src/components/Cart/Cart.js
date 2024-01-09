import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = props =>{

    const cartItems= <ul className={classes['cart-items']}>{[{id:'c1',name:'shushi',amount:2,price:12.99}].map((item)=><li>{item.name}</li>)}</ul>
    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.5</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>close</button>
            <button>Order</button>
        </div>
    </Modal>
}

export default Cart;