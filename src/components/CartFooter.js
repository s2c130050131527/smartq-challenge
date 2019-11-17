import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cartClearAction } from "../actions/cartAction";

const CartFooter = (props)=>{
    const entries = Object.entries(props.cart);
    let sum = 0;
    entries.forEach(el => {
        const price = props.menu.data.find(el1 => el1.itemname === el[0]);
        sum += price.price * el[1];

    })
    const displayStr = entries.filter(el=> el[1]).map(el => el[0] + ' X ' +el[1]).join(', ')
    if(sum){

        return (
            <div className="cart-footer">
                <div className="show">
                    {displayStr}
                </div>
                <div className="total">
                   Total: ₹{sum}
                </div>
            </div>
        )
    }
    return null;

}

CartFooter.propTypes={
    cart:PropTypes.object,
    menu: PropTypes.object,
    cartClearAction: PropTypes.func
}

export default connect((state) => ({
    cart: state.cartReducer,
    menu: state.menuReducer
}),{cartClearAction})(CartFooter);