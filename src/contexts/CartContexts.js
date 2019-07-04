import React, {Component} from 'react';
import { Alert } from 'react-native';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props){
    super(props);

    this.state = {
      cartItems : []
    };

    this.addToCart = this.addToCart.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.increaseCartItem = this.increaseCartItem.bind(this);
    this.reductionCartItem = this.reductionCartItem.bind(this);
  }

  addToCart(product) {
    // Alert.alert('adding to cart', product.name);
    const item = { ...product,quantity:[product.id] };
    const {cartItems} = this.state;
    // lấy tất cả các id trong carts 
    const arr = [];
    cartItems.forEach( (item) =>
      arr.push(item.id)
    )

       // so sánh id vừa add với các id trong cart
    const index = arr.indexOf(product.id);
    if( index === -1) {
      this.setState({
          cartItems: this.state.cartItems.concat(item)        
      });
    }else {
      this.setState({
        quantity: this.state.cartItems[index].quantity.concat(product.id)              
      });
      console.log(this.state);
    }    
  }

  getTotal() { 
    const {cartItems} = this.state;
    let sum = 0;
    cartItems.forEach( item => {
      sum += parseInt(item.price)*item.quantity.length
    });     
    return sum;
  }

  // tăng, code tiếng anh cho cố nao đọc lại đéo hiểu gì
  increaseCartItem(cart) {
    const {cartItems} = this.state;
    // lấy tất cả các id trong carts 
    const arr = [];
    cartItems.forEach( (item) =>
      arr.push(item.id)
    )
    // so sánh id vừa add với các id trong cart
    const index = arr.indexOf(cart.id);
    this.setState( state => {
      return {
        quantity: state.cartItems[index].quantity.push(cart.id) 
      }       
    });
  }
  // giảm
  reductionCartItem(cart) {
    const {cartItems} = this.state;
    // lấy tất cả các id trong carts 
    const arr = [];
    cartItems.forEach( (item) =>
      arr.push(item.id)
    )
    // so sánh id vừa add với các id trong cart
    const index = arr.indexOf(cart.id);
    //  tìm vị trí của cart đang ấn trong arr ( cũng như trong state)
    if( cart.quantity.length > 0 ) {
      this.setState( state => {
        return {
          quantity: state.cartItems[index].quantity.pop(cart.id) 
        }       
      });
    };
    //thiếu chức năng removeFromCart
    
  }

  render() {
    return <CartContext.Provider value={{
      cartItems : this.state.cartItems,
      addToCart : this.addToCart,
      getTotal : this.getTotal,
      increaseCartItem : this.increaseCartItem,
      reductionCartItem : this.reductionCartItem
    }}>
      {this.props.children}
    </CartContext.Provider>
  }
}