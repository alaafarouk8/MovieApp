import { BrowserRouter, Route , Routes} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Movies from "./Pages/Movies";
import Favorites from "./Pages/Favorites";
import SignUp from "./Pages/register";
import LoginForm from "./Pages/loginform";
import MoviePage from "./Pages/MoviePage";
import { LanguageContext } from "./contexts/LanguageContext";
function App() {
  const [contextLang, setContextLang] = useState("en");

  return (
    <div className="App">
    <BrowserRouter>
    <LanguageContext.Provider value={{ contextLang, setContextLang }}>
    <Routes>
    <div
            className={contextLang === "ar" ? "text-end" : "text-start"}
            dir={contextLang === "ar" ? "rtl" : "ltr"}
          >
      <Route path="/" element={<Movies />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginForm />} />
      <Route exact path="/movie/:movieId" element={<MoviePage />} />
    </div>
    </Routes>
    </LanguageContext.Provider>
  </BrowserRouter>

    </div>
  );
}

export default App;