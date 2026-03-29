import { NavLink } from "react-router-dom";
import menu from "../data/menu"

export default function AppHeader() {

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <img className="navbar-brand" src="/boolflix-logo.png" alt="Logo"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            {menu.map(item=> <NavLink className="nav-link" to={item.path} key={item.id} > {item.text}
                            </NavLink>)}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}