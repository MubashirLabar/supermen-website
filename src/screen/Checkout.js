import React,{useState} from 'react';
import { Link } from 'react-router-dom'

function Checkout() {

    const [checkbox, setCheckbox] = useState(false)
    const [method, setMethod] = useState(null) 

    const DeliveryDetail = () => {
        return(
            <div className="block">
                <div className="hdr flex aic">
                    <div className="step flex aic font s16 cfff">1</div>
                    <div className="label font s20 b6 c000">Delivery Details</div>
                </div>
                <div className="strip flex aic rel">
                    <div className="meta flex flex-col">
                        <div className="font s16 b c000">Contactless delivery</div>
                        <div className="font s13 b3 tt">To keep you safe, the rider will place your order at your door</div>
                    </div>
                    <button className={`cleanbtn checkbox-btn rel ${checkbox && 'on'}`} onClick={() => setCheckbox(!checkbox)}></button>
                </div>
                <div className="stamp flex flex-col">
                    <div className="lbl font s18 b6 c000">Delivery Time:</div>
                    <div className="feilds flex aic">
                        <div className="item flex aic">
                            <input placeholder="Sat, Apr 17" className="cleanbtn iput font s15" />
                            <div className="icon-chevron-down s20 blue" />
                        </div>
                        <div className="item flex aic">
                            <input placeholder="ASPS" className="cleanbtn iput font s15" />
                            <div className="icon-chevron-down s20 blue" />
                        </div>
                    </div>
                </div>
                <div className="address flex flex-col">
                    <div className="hd flex aic">
                        <div className="lbl font s18 b6 c000">Delivery Address:</div>
                        <div className="btns flex aic">
                            <button className="btn cleanbtn font s15 blue">Add New Address</button>
                            <button className="btn cleanbtn font s15 blue">Cancel</button>
                        </div>
                    </div>
                    <div className="adr-blk">
                        <div className="map"></div>
                        <div className="meta flex flex-col">
                            <div className="adr flex">
                                <div className="path flex flex-col">
                                    <div className="font s20 b7 c36">Gulghast Link Road</div>
                                    <div className="font s15 c36">Multan</div>
                                </div>
                                <button className="cleanbtn font s15 blue">Edit</button>
                            </div>
                            <div className="street">
                                <div className="lbl font s16 b7 c36">We're missing your street number</div>
                                <input 
                                    placeholder="We're Missing Your Building Name"
                                    className="iput font s15 b3 c000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form flex flex-col">
                    <input 
                        placeholder="Floor (Optional)"
                        className="iput font s15 b3 c000"
                    />
                    <input 
                        placeholder="Note to Rider e.g. Directions/Landmarks"
                        className="iput font s15 b3 c000"
                    />
                    <button className="button font s15 b6 cfff anim">Submit</button>
                </div>
            </div>
        )
    }

    const PersonalDetails = () => {
        return(
            <div className="block">
                <div className="hdr flex aic">
                    <div className="step flex aic font s16 cfff">2</div>
                    <div className="label font s20 b6 c000">Personal Details</div>
                </div>
                <div className="form flex flex-col">
                    <input 
                        placeholder="Email"
                        className="iput font s15 b3 c000"
                    />
                    <div className="dbl flex aic">
                        <input 
                            placeholder="First Name"
                            className="iput marg-r font s15 b3 c000"
                        />  
                        <input 
                            placeholder="Last Name"
                            className="iput font s15 b3 c000"
                        />
                    </div>
                        <input 
                            placeholder="Phone Number"
                            className="iput font s15 b3 c000"
                        />
                    <button className="button font upc s15 b6 cfff anim">Save</button>
                </div>
            </div>
        )
    }

    const Payments = () => {
        const items = [
            {label: "Cash On Delivery",  img: "/images/cash-on-delivery.svg"},
            {label: "Credit / Debit Card", img: "/images/master-card.svg"},
            {label: "JazzCash", img: "/images/jazzcash.svg"},
            {label: "Easypaisa", img: "/images/easypaisa.svg"},
        ]
 
        return(
            <div className="block">
                <div className="hdr flex aic">
                    <div className="step flex aic font s16 cfff">3</div>
                    <div className="label font s20 b6 c000">Payments</div>
                </div>
                <div className="form method flex flex-col">
                    {
                        items.map(data=>(
                            <label className={`${data.label} item flex aic`} onClick={() => setMethod(data.label)}>
                                <div className={`cirlce anim ${method == data.label && 'on'}`} />
                                <div className="lbl font s16 b6 c36">{data.label}</div>
                                <img className="img" src={data.img} />
                            </label>
                        ))
                    }
                    <button className="button font upc s15 b6 cfff anim">Place Order</button>
                </div>
            </div>
        )
    }


    return (
        <div className="checkout-p">
            <div className="wrapper flex flex-col">
                <div className="title font s24 b c000">Checkout</div>
                <div className="wrap flex">
                    <div className="lft">
                        <DeliveryDetail /> 
                        <PersonalDetails />
                        <Payments />
                    </div> 
                    <div className="rit flex">
                        <div className="cart-blk abs flex flex-col aic">
                            <div className="lbl font s22 b8 ">Your order from fresh fast food</div>
                            <div className="items flex flex-col">
                                <div className="item flex aic">
                                    <div className="nam font s13 b5 dark">1x Mighty Deal</div>
                                    <div className="price font s14 b6 dark">265.00</div>
                                </div>
                            </div>
                            <div className="row flex aic">
                                <div className="tit font s14">Subtotal</div>
                                <div className="num font s14">{`PKR 256.00`}</div>
                            </div> 
                            <div className="row flex aic">
                                <div className="tit font s14">Delivery Charges</div>
                                <div className="num font s14">{`PKR 0.00`}</div>
                            </div> 
                            <div className="row flex aic">
                                <div className="tit font s15 b7">Total&nbsp;<span className="s12 b3">(Include GST)</span></div>
                                <div className="num font s15 b7">{`PKR 315.00`}</div>
                            </div>
                        </div> 
                    </div>
            
                </div>
            </div>
        </div>
    );
}

export default Checkout;