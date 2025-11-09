import {Seccion6} from './Seccion6';

export function Seccion5 () {
    return (
        <>
        <div className="seccion5">
            <h2>PROJECTS</h2>
            <div className='cards'>
                <div className="card" style={{width: '18rem'}}>
                    <img src="./src/assets/proyecto1.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Projecto 1</h5>
                        <p className='card-text1'>Plataforma online para estudiar Ingles</p>
                        <p className="card-text">Herramientas aplicadas en desarrollo web: HTML , CSS y SASS</p>
                        <button className= "botonProject" type="button">DESCARGAR CV</button>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="./src/assets/proyecto1.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Projecto 2</h5>
                        <p className='card-text1'>Ecommerce de productos con un carrito de compra</p>
                        <p className="card-text">Herramientas aplicadas en desarrollo web: HTML , CSS y Javascript</p>
                        <button className= "botonProject" type="button">DESCARGAR CV</button>
                    </div>
                </div>
            </div>
        </div>
        <Seccion6/>
        </>
    )
}

export default Seccion5