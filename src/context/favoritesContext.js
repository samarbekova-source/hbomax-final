import React, { useReducer } from "react";

import { CASE_GET_CART } from "../helpers/cases";

export const favoritesContext = React.createContext();

const INIT_STATE = {
  favorite: {},
  favoriteLength: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        favorite: action.payload,
        favoriteLength: action.payload.movies.length,
      };
    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
      };
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    dispatch({
      type: CASE_GET_CART,
      payload: favorite,
    });
  }
  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
      };
    }
    let newProduct = {
      item: product,
      count: 1,
    };
    let isProductInFavorite = favorite.movies.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInFavorite) {
      favorite.movies = favorite.movies.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      favorite.movies.push(newProduct);
    }
    // cart.totalPrice = calcTotalPrice(cart.movies);

    localStorage.setItem("favorite", JSON.stringify(favorite));
    // getFavorite();
  }

  function checkItemInFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
        // totalPrice: 0,
      };
    }
    let isProductInFavorite = favorite.movies.some(
      (item) => item.item.id == id
    );
    return isProductInFavorite;
  }

  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
        // totalPrice: 0,
      };
    }
    favorite.movies = favorite.movies.filter((item) => item.item.id != id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  function changeProductCountFav(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
      };
    }
    favorite.movies = favorite.movies.map((item) => {
      if (item.item.id == id) {
        item.count = count;
      }
      return item;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  return (
    <favoritesContext.Provider
      value={{
        favorite: state.favorite,
        favoriteLength: state.favoriteLength,
        getFavorite,
        addProductToFavorite,
        checkItemInFavorite,
        deleteFromFavorite,
        changeProductCountFav,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
