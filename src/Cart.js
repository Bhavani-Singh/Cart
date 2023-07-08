import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: '49,999',
                    title: 'MyPhone',
                    qty: 10,
                    img: ''
                },

                {
                    id: 2,
                    price: '100,000',
                    title: 'Rollex',
                    qty: 10,
                    img: ''
                },

                {
                    id: 3,
                    price: '35,999',
                    title: 'Gucci: T-Shrit',
                    qty: 10,
                    img: ''
                }
            ]
            
        }

    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);

    render(){
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem product={product} key={product.id} />
                })} 
            </div>
        );
    }
}
export default Cart;