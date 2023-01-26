// importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart(`bread`, 5);
// console.log(price, qt);

console.log(`importing module`);

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart(`bread`, 5);
// console.log(shoppingCart.totalPrice);

// dont use default and named export like this
// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add(`pizza`, 2);
// add(`bread`, 5);
// add(`apples`, 4);

// console.log(cart);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart(`apple`, 4);
shoppingCart2.addToCart(`pizza`, 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);

///////////////////////////////////////////////
// COMMON JS
//export
// export.addToCart=function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

// //   import
// const {addToCart}=require('./shoppingCart.js')

///////////////////////////////////////
//////////////////////////////////////
// creating a clone

// import cloneDeep=from './'

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: `pizza`, quantity: 4 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(state);
// console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

class person {
  #greeting = `Hey`;
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const frk = new person(`farouk`);
