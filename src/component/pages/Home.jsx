import Filter from "../Filter";
import MovieList from "../MovieList";
import NavbarComponent from "../Navbar";


export default function Home(){
    return (
        <div className="App">
            <NavbarComponent />
            <MovieList />
            <Filter />
        </div>
    )
}