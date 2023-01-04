import React from 'react';

function ProductCard(props) {

    const {label, txt, img, price} = props.data


    return (
        <div className="pdt-card flex aic">
            <div className="meta flex flex-col">
                <div className="tit font s18 b7 dark">{label}</div>
                <div className="dis font s14 dark">{txt}</div>
                <div className="ftr flex aic">
                    <div className="font s14 b6 dark">{`Rs. ${price}`}</div> 
                    <di className="acitons flex aic">
                        <button className="cleanbtn btn flex aic cfff icon-minus s16 anim" />
                        <input value="0" className="cleanbtn btn iput font s14 dark flex aic" />
                        <button className="cleanbtn btn plus flex aic cfff icon-plus s16 anim" />
                    </di>
                </div>
            </div>
            <div className="img" style={{backgroundImage: `url(${img})`}} />
        </div>
    );
}

export default ProductCard;