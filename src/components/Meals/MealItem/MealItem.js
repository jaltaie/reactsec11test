import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
const cartCtx = useContext(CartContext);

const price = `$${props.price.toFixed(2)}`;

const addToCartHandler = amount => {
cartCtx.addItem({
    id: props.id,
    name: props.name,
    amount: props.amount,
    price: props.price
})
};

return <li className={classes.meal}>
        <div> {props.name}</div>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}> {price}</div>
        
        <div>
<MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
};

export default MealItem;