import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: '49,999',
            title: 'MyPhone',
            qty: 10,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        //console.log('itme qunatity increased');
        console.log('this ',this);
    }
    decreaseQuantity = () => {
        console.log('items qunatity decreased')
    }
    removeItem = () => {
        console.log('item removed');
    }
    render(){
        // object destructing
        const { price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs. {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/5421/5421484.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/7792/7792491.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png"
                            onClick={this.removeItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;