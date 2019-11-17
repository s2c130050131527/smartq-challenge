import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
    return <div className="menu-item">
        <div className="top">
            <div className="name">
                {props.item.itemname}
            </div>
            <div className="price">
            ₹{props.item.price}
            </div>
        </div>
        <div className="bottom">
            <button type="button" onClick={() => props.addToCart()} disabled={props.disabled}>Add</button>
        </div>
    </div>
}

Item.propTypes= {
    addToCart: PropTypes.func,
    item: PropTypes.object,
    disabled: PropTypes.bool,
}
Item.defaultProps = {
    disabled: false
}
Item.propTypes = {
    title: PropTypes.string,

}

export default Item;