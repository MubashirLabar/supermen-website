import React from 'react';
import ProductCard from "../component/ProductCard"
import {Link} from 'react-router-dom'

function ResturantStore(props) {

    const cities = [
        {label: "Pakistani"},
        {label: "Chiness"},
        {label: "Italian"}, 
        {label: "Pakistani"},
        {label: "Chiness"},
        {label: "Italian"},
        {label: "Pakistani"},
        {label: "Chiness"},
        {label: "Italian"},
    ]

    const deals = [
        {label: "Hot Deals", img: "/images/hot.svg"},
        {label: "Burgers"},
        {label: "Pizza's"},
        {label: "Drink & Shakes"},
        {label: "Extras"},
    ]

    const pdts = [
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-1.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-2.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-3.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-4.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-5.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-6.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-7.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-8.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-9.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-10.png", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-11.jpg", price: "265"},
        {label: "Mighty Deal", txt: "2 Zinger Burger + 345ml Cold Drink", img: "/images/rest-12.jpg", price: "265"},
    ]

    return (
        <div className="rest-store">
            <div className="wrapper flex flex-col">
                {/* Section */}             
                <div className="dlry-blk rel" style={{backgroundImage: "url(/images/food-banner.jpg)"}}>
                    <div className="ftr abs"><div className="title font s32 b7 upc cfff">Fresh Fast Food</div></div>
                    <div className="cart-blk abs flex flex-col aic">
                        <div className="lbl font s22 b8 ">Order Cart</div>
                        <div className="txt font s13">Checkout your Order</div>
                        <div className="items flex flex-col">
                            <div className="item flex aic">
                                <div className="img" style={{backgroundImage: "url(/images/rest-1.jpg)"}} />
                                <div className="nam font s13 b5 dark">1x Mighty Deal</div>
                                <di className="acitons flex aic">
                                    <button className="cleanbtn btn flex aic cfff icon-minus s15 anim" />
                                    <input value="10" className="cleanbtn btn iput font s14 dark flex aic" />
                                    <button className="cleanbtn btn plus flex aic cfff icon-plus s15 anim" />
                                </di> 
                                <div className="price font s14 b6 dark">265.00</div>
                            </div>
                        </div>
                        <div className="row flex aic">
                            <div className="tit font s14">Subtotal:</div>
                            <div className="num font s14">{`PKR 0.00`}</div>
                        </div> 
                        <div className="row flex aic">
                            <div className="tit font s14 b7">Total:</div>
                            <div className="num font s14 b7">{`PKR 0.00`}</div>
                        </div>
                        <Link to ="/checkout" className="button font s15 b6 cfff anim">Checkout</Link>
                    </div>
                </div>
                <div className="content flex">
                    <div className="left flex flex-col">
                        <div className="menu">
                            <div className="rating font s15 b6 dark upc flex aic ">
                                <div className="lbl">Rating</div>
                                <div className="font">{`4.5/5`}</div>
                            </div>
                            <div className="cities flex aic">
                                <div className="item font s15 color">$$$</div>
                                {
                                    cities.map(item=>(
                                        <div className="item font s15 dark">&bull;&nbsp;{item.label}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="deals flex aic">
                            {
                                deals.map(item =>(
                                    <div className="item flex aic anim rel">
                                        {item.img && <img src={item.img}  className="img"/>}
                                        <div className="lin font s14 b4 dark">{item.label}</div>
                                    </div>
                                )) 
                            }
                        </div>
                        <div className="wrap flex">
                            {
                                pdts.map(item =>(
                                    <ProductCard data={item} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="right flex flex-col"></div>
                </div>
            </div>
        </div>  
    );
}

export default ResturantStore;