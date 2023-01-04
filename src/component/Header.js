import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

    const [top, setTop] = useState(true)
    const [menu, setMenu] = useState(false)
    const nav = [
        {label: "Grocessery", slug: "/"},
        {label: "Resturants", slug: "/resturants"},
        {label: "About Us", slug: "/about"},
    ]

    return (
        <React.Fragment>
            <div className={`header flex aic sticky anim ${menu ? 'open' : 'close'}`}>
                <div className="wrapper flex aic">
                    <div className="lef flex aic">
                        {
                            nav.map(item =>(
                                <Link to={item.slug} className="lin font s15 b black">{item.label}</Link>
                            ))
                        }
                    </div>
                    <div className="logo flex aic">
                        <img src="/images/logo.svg"  className="img"/>
                    </div>
                    <div className="rig flex aic">
                        <button className="button font s15 b5 cfff anim">Login</button>
                        <button className="button join font s15 b5 cfff anim">Join Us</button>
                        <button className="cleanbtn cart font s22 c000 icon-shopping-cart" />
                    </div>
                </div>
            </div>
            
            {/* Small Screen Header */}
            <div className="sml-hdr flex aic sticky anim">
                <div className="wrapper flex aic">
                    <div className="logo flex aic">
                        <img src="/images/logo.svg"  className="img"/>
                    </div>
                    <div className="rit flex aic">
                            <button onClick={(e)=>{setMenu(!menu)}} className="cleanbtn humburger flex flex-col aic">
                                <div className={`stick stick-1 ${menu ? 'open' : 'close'}`}></div>
                                <div className={`stick stick-2 ${menu ? 'open' : 'close'}`}></div>
                                <div className={`stick stick-3 ${menu ? 'open' : 'close'}`}></div>
                            </button> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;