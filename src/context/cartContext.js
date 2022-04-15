import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { CASE_GET_CART } from "../helpers/cases";

export const cartContext = React.createContext();
const INIT_STATE = {
  cart: {},
  cartLength: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        cart: action.payload,
        cartLength: action.payload.movies.length,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        movies: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart.totalPrice = calcTotalPrice(cart.movies);
    dispatch({
      type: CASE_GET_CART,
      payload: cart,
    });
  }
  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        movies: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = cart.movies.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInCart) {
      cart.movies = cart.movies.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      cart.movies.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart.movies);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkItemInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        movies: [],
        totalPrice: 0,
      };
    }
    let isProductInCart = cart.movies.some((item) => item.item.id == id);
    return isProductInCart;
  }

  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        movies: [],
        totalPrice: 0,
      };
    }
    cart.movies = cart.movies.filter((item) => item.item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        movies: [],
        totalPrice: 0,
      };
    }
    cart.movies = cart.movies.map((item) => {
      if (item.item.id == id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });

    calcTotalPrice.totalPrice = calcTotalPrice(cart.movies);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLength: state.cartLength,
        getCart,
        addProductToCart,
        checkItemInCart,
        deleteFromCart,
        changeProductCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
