import { BrowserRouter, Route , Routes} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Movies from "./Pages/Movies";
import Favorites from "./Pages/Favorites";
import SignUp from "./Pages/register";
import LoginForm from "./Pages/loginform";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginForm />} />

    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;