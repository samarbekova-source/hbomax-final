import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";
import "antd/dist/antd.css";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoritesContext";
import AuthContextProvider from "./context/authContext";
import ChatContextProvider from "./context/chatContext";

function App() {
  return (
    <>
      <ChatContextProvider>
        {/* <AuthContextProvider> */}
        <MovieContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <Routing />
            </CartContextProvider>
          </FavoriteContextProvider>
        </MovieContextProvider>
        {/* </AuthContextProvider> */}
      </ChatContextProvider>
    </>
  );
}

export default App;
