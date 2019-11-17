import React from "react";
import { connect } from "react-redux";
import { cartAddAction,cartRemoveAction } from "../actions/cartAction";
import PropTypes from "prop-types";

const Item = (props) => {
    return <div className={`menu-item ${props.disabled && 'disabled'}`}>
        <div className="top">
            <div className="name">
                {props.item.itemname}
            </div>
            <div className="price">
            ₹{props.item.price}
            </div>
        </div>
        <div className="bottom">
            
                {props.cart[props.item.itemname] ? 
                <span>
                <button className="remove-minus" type="button" onClick={() => props.cartRemoveAction(props.item.itemname)}>
                    -
                </button>
                <div className="count">
                    {props.cart[props.item.itemname]}
                </div>
                <button className="add-plus" type="button" onClick={() => props.cartAddAction(props.item.itemname)}>
                    +
                </button>
                </span>:            
            <button type="button" onClick={() => props.cartAddAction(props.item.itemname)} disabled={props.disabled}>Add</button>}
        </div>
    </div>
}

Item.propTypes= {
    cartAddAction: PropTypes.func,
    cartRemoveAction:PropTypes.func,
    item: PropTypes.object,
    disabled: PropTypes.bool,
    cart:PropTypes.object
}
Item.defaultProps = {
    disabled: false
}
Item.propTypes = {
    title: PropTypes.string,

}

export default connect(( state )=> ({cart: state.cartReducer}), {cartAddAction,cartRemoveAction}) (Item);