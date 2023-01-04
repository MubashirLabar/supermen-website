import React,{useState, useEffect} from 'react'
import DownloadCard from "../component/DownloadCard"
import ResturantCard from '../component/ResturantCard'
 
function Resturants(props) {

    let section = props.match.params.section;

    const [dropPrice, setDropPrice] = useState(false)
    const [price, setPrice] = useState("Price Filter")
    const sortItems = [
        {label: "Price Filter", slug:"/"},
        {label: "Sort by average rating", slug:"/"},
        {label: "Sort by latest", slug:"/"},
        {label: "Price: low to high", slug:"/"},
        {label: "Price: high to low", slug:"/"}, 
    ] 

    const restaurants = [
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-1.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-2.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-3.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-4.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-5.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-6.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-7.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-8.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-9.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-10.png", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-11.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-1.jpg", slug:"/resturants/fresh"}, 
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-13.jpeg", slug:"/resturants/fresh"}, 
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-9.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-7.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "blu", img : "/images/rest-6.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-6.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-7.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-8.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "rd", img : "/images/rest-9.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-10.png", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-11.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-4.jpg", slug:"/resturants/fresh"},
        {label: "Inam’s Fast Food", rating: 4.5, dsc:"Lorem ipsum dolor sit amet, consectetursnes", price: "$$$", discount: "50% Special Discount", discountColor: "yl", img : "/images/rest-5.jpg", slug:"/resturants/fresh"}
    ]

    useEffect(() => {
        section = props.match.params.section;
        document.body.addEventListener("click", ()=>{
            setDropPrice(false);
        }) 
    }, [])

    return (
        <div className="resturant-p">
            <div className="banner flex flex-col">
                <div className="wrapper content flex flex-col aic">
                    <div className="intro">
                        <div className="slogn font s36 b8">Food Delivery from Multan's Best Resturants</div>
                        <div className="srch-blk flex aic">
                            <div className="blk flex aic">
                                <input  
                                    type="text" 
                                    className="cleanbtn iput font s15 b3 black" 
                                    placeholder= "Enter your Location Here"
                                />
                                <button className="cleanbtn ico icon-gps_fixed s22 gray"/>
                            </div>
                            <div className="actions flex aic">
                                <div className="button font s15 b3 cfff anim">Find Resturants Near You</div>
                            </div>
                        </div>
                        <div className="btns flex aic">
                            <button className="button font s18 cfff anim">Resturants</button>
                            <button className="button font s18 blue anim">Pickups</button>
                            <button className="button font s18 blue anim">Marts</button>
                        </div>
                    </div>
                </div> 
            </div> 
            {/* Resturants list */} 
            <div className="rst-list wrapper flex flex-col">
                <div className="hdr flex aic">
                    <div className="lef flex"><div className="font s16 b7 c000">&bull; 12 Resturants Near You</div></div>
                    <div className="rit flex aic">
                        {/* Select Currency */}
                        <button className="cleanbtn cstm-slt flex aic rel" onClick={(e)=>{
                            e.stopPropagation();
                            setDropPrice(!dropPrice);  
                        }}> 
                            { 
                                sortItems.map(item=>(
                                    price == item.label  && <div className="iput flex aic">
                                        <img src="./images/lines.svg" className="arrow"/> 
                                        <div className="txt font b6 s16 c000">{item.label}</div>         
                                    </div>
                                ))
                            }  
                            {dropPrice && <div className="options flex flex-col abs">
                                {
                                    sortItems.map(item=>(
                                        <button className="cleanbtn item flex aic anim" onClick={()=>{
                                            setDropPrice(!dropPrice); 
                                            setPrice(item.label);
            
                                        }}>        
                                            <div className="txt font s15 black">{item.label}</div> 
                                        </button> 
                                    ))
                                }
                                </div> 
                            }
                        </button>
                    </div>
                </div>
                        
                <div className="wrap flex aic">
                    {
                        restaurants.map(item=>(
                            <ResturantCard data={item}/>
                        ))
                    }
                    
                </div>
            </div>
                                    
            {/* App download section */}       
            <div className="download wrapper">
                <DownloadCard />
            </div>
 
        </div>
    );
}

export default Resturants;