import React from 'react'
import { Link } from 'react-router-dom'

function ResturantCard(props) {

    const {label, rating, dsc, price, discount, discountColor, img, slug} = props.data;
 
    return (
        <Link to={slug} className="rest-card flex flex-col">
            <div className="media rel">
                <div className="img anim" style={{backgroundImage: `url(${img})`}}/>
                <div className={`lbl font s11 cfff abs ${discountColor}`}>{discount}</div> 
            </div>  
            <div className="row flex aic">
                <div className="lbl font s14 b7 c000">{label}</div>
                <div className="font s14 b7 flex aic">
                    <div className="ico flex aic icon-star1 s16 cfff" />
                    <span>{rating}/5</span>
                </div>
            </div>
            <div className="txt font s13 c000 wordwrap"><span className="red">{price}</span>&nbsp;{dsc}</div>
        </Link>
    );  
}

export default ResturantCard;