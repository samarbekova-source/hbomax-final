import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";
import "antd/dist/antd.css";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoritesContext";
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <MovieContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <Routing />
            </CartContextProvider>
          </FavoriteContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
