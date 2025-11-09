import certificado1 from '../assets/certificadoDeDesarrolloWebCoderHouse.png';
import certificado2 from '../assets/certificadoDeJavaScriptCoderHouse.png';
import certificado3 from '../assets/certificadoDeReact.png'
import {Footer} from './Footer'

export function Seccion6 () {
    return (
        <>
        <div className="certificates">
            <h2>CERTIFICATES</h2>
            <div className="certificates1">
                <img src= {certificado1} alt="" />
                <img src= {certificado2} alt="" />
                <img src= {certificado3} alt="" />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Seccion6