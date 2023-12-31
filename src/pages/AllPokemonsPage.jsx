import {Results} from '../components/Pokemons/KantoPokemons';
import {Slider} from '../components/Slider/Slider'
import { useSlider } from '../hooks/useSlider';
import { useSelector } from 'react-redux';

const AllPokemons=()=>{

    const kantoPokemons=useSelector(state=>state.pokedex.pokemons)
    const loading=useSelector(state=>state.pokedex.isLoading)
      
    const pokemonsPorPagina = 18;
    const {paginaActual, totalPaginas, changePage, handleChange, }=useSlider(pokemonsPorPagina,kantoPokemons)

    if (loading) {
        return (
            <div id='pikachu-charging'>
                <p>Cargando...</p>
                <div>
                    <img className="pikachu" alt="Pikachu Cargando" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                </div>
            </div>
        )
    }

    return(
        <>  
            <h1>Kanto's Pokemons</h1>
            <div className="search">
                <input type="text" placeholder="Search..." onChange={handleChange} />
            </div>
            <Slider totalPaginas={totalPaginas} changePage={changePage} paginaActual={paginaActual}/>
            <Results allPokemons={paginaActual.pokemonsPaginados}/>
            <Slider totalPaginas={totalPaginas} changePage={changePage} paginaActual={paginaActual}/>
        </>
    )
}

export default AllPokemons