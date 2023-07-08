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

    handleIncreaseQuantity = (product) => {
        console.log('Hey increase the quantity', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hey decrease the quantity', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        const { qty } = this.state;

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id != id);

        this.setState({
            products: items
        })
    }
    

    render(){
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                         product={product} 
                         key={product.id}
                         onIncreaseQuantity = {this.handleIncreaseQuantity}
                         onDecreaseQuantity = {this.handleDecreaseQuantity}
                         onDeleteItem = {this.handleDeleteProduct}
                        />
                    )
                })} 
            </div>
        );
    }
}
export default Cart;