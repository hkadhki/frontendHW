import {ChakraProvider, defaultSystem} from '@chakra-ui/react'
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import EditFilePage from "./pages/EditFilmPage.jsx";
import {BrowserRouter} from "react-router-dom";
import FavoritePage from "./pages/FavoritePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Route, Routes} from "react-router-dom";
import AddMovie from "./pages/AddMovie.jsx";
import axios from "axios";
import {DetailsPage} from "./pages/DetailsPage.jsx";


function App() {

    const clickeFavorite = (filmId) => {
        const fetchData = async () => {
            try {
                await axios.put('http://localhost:8080/films/' + filmId);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    };

    return (
        <ChakraProvider value={defaultSystem}>
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage clickeFavorite={clickeFavorite}/>}/>
                        <Route path="/favourite"
                               element={<FavoritePage clickeFavorite={clickeFavorite}/>}/>
                        <Route path="/addMovie" element={<AddMovie />}/>
                        <Route path="/details/:id" element={<DetailsPage clickeFavorite={clickeFavorite}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/edit/:id" element={<EditFilePage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;