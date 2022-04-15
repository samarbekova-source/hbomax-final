import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";
import "antd/dist/antd.css";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoritesContext";

function App() {
  return (
    <>
      <MovieContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <Routing />
          </CartContextProvider>
        </FavoriteContextProvider>
      </MovieContextProvider>
    </>
  );
}

export default App;
