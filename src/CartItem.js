import React from "react";

class CartItem extends React.Component {
    
    increaseQuantity = () => {
        //console.log('itme qunatity increased');
        //console.log('this ',this);
        
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {});

        // setState form 2
        this.setState( (prevState) => {
            return {
                qty: prevState.qty + 1
            }
            
        });
    }
    decreaseQuantity = () => {
        const { qty } = this.state;

        if(qty === 0){
            return;
        }

        this.setState( (prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    removeItem = () => {
        console.log('item removed');
    }
    render(){
        // object destructing
        const { price, title, qty} = this.props.product;
        const { product, onIncreaseQuantity, 
                onDecreaseQuantity, 
                onDeleteItem
            } = this.props;
        return(
            <div className="cart-item">
                {this.props.jsx}
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
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/7792/7792491.png"
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png"
                            onClick={() => onDeleteItem(product.id)}
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