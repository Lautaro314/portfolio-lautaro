
export function Footer () {

    return (
        <>
            <footer>
                <form>
                    <h2>CONTACTO</h2>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{width: '97%'}}></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'97%'}}></input>
                    </div>
                    <div>
                        <label for="exampleInputText" className="form-laber"></label>
                        <textarea className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Write" style={{width:'97%', height:'120px' , resize: 'vertical' , overflow: 'auto'}}></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button className= "botonContact" type="button" style={{border:'7%'}}>SUBMIT</button>
            </form>
        </footer>
        </>
    )

}

export default Footer