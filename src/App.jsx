import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Profile from "./pages/news/News";
import Shop from "./pages/shop/Shop";
import Team from "./pages/team/Team";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/News" element={<Profile />}> </Route>
        <Route path="/Shop" element={<Shop />}> </Route>
        <Route path="/Team" element={<Team />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
