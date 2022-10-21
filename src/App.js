import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewItemView from "./components/NewItemView/NewItemView";
import { GlobalProvider } from "./context/GlobalState";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div>
      <GlobalProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<NewItemView />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
