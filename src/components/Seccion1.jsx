import lautaro from '../assets/lautaro.jpeg'
import Seccion2 from "./Seccion2"

export function Seccion1 () {
    return (
        <>
        <div className="article">
            <article>
                <img className="lautaro" src={lautaro} alt="" />
            </article>
            <article className="article1">
                <h2>HOLAAA!!!</h2> 
                <h2>SOY LAUTARO</h2>
                <h3>FRONTEND DEVELOPER</h3>
                <button className= "boton" type="button">DESCARGAR CV</button>
            </article>
        </div>
        <Seccion2/>
        </>
    )
}

export default Seccion1