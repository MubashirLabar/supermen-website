import React,{useState, useEffect} from 'react';

function FAQ() {

    const items = [
        {label: "How can I receive Delivery?", txt: "To receive super men delivery, search the closest restaurants by typing your name and address from your area. At that point put in the order from your favorite cuisines and restaurants by adding your dishes in the quantity section. So very soon you will receive your selected delicious food at your doorsteps."},
        {label: "Does Super Men deliver 24/7?", txt: "Of course, Super Men delivers 24/7. Moreover, numerous restaurants might be inaccessible for late-night delivery mainly because of their closing schedules. That is why you can search all those restaurants which remain open 24 hours but we also have mentioned their timing in their menu section. "},
        {label: "Does Super Men offer minimum order", txt: "Yes, in your location, several restaurants provide minimum order facilities according to their minimum order policy that shows during the processing of your order."},
        {label: "How much to pay for delivery?", txt: "Super Men relies upon numerous operational elements, in particular - areas and a restaurant you are placing an order from. You can generally check the delivery expenses while placing your order. Moreover, there is also a “Free Delivery Restaurants” section from where you can avail free delivery from those restaurants."},
    ]

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    },[]);

    const Questions = (data) => {
        console.log(data)
        const [dropblk, setDropBlk] = useState(false)
        const {label, txt} = data.data;
        return(
            <div key={label} className="item anim">
                <label  className={`hdr flex aic ${dropblk && "bg"}`} onClick={() => setDropBlk(!dropblk)}>
                    <div className={`lbl font s20 anim ${dropblk ? "cfff" : "c000"}`}>{label}</div>
                    <div className={`ico  s22 anim ${dropblk ? "icon-chevron-up cfff" : "icon-chevron-down c000"}`} />
                </label>
                <div className={`blk anim ${dropblk ? "display" : "none"}`}>
                    <div className="tt font s15 c000">{txt}</div>
                </div>
            </div>
        ) 
    }

    return (
        <div className="about-p faq">
            <div className="banner rel flex aic" style={{backgroundImage: `url(/images/food-banner.jpg)`}}>
                <div className="cvr abs" />
                <div className="title font s42 b6 cfff">FAQ</div>
            </div>
            <div className="content wrapper flex flex-col">
                <div className="title font s42 b5 c000">Frequently Asked Questions?</div>
                <div className="wrap flex flex-col">
                    {
                        items.map((item) => (
                            <Questions data={item}/>
                        ))
                    }
                </div>   
            </div>
        </div>
    );
}

export default FAQ;