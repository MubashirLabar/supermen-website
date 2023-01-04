import React from 'react';
import DownloadCard from '../component/DownloadCard';
 
function Home(props) {

    const cities = [
        {label: "Multan", img: "/images/mul.jpg"},
        {label: "Karachi", img: "/images/kar.jpg"},
        {label: "Lahore", img: "/images/lar.jpg"},
        {label: "Islamabad", img: "/images/isb.jpg"},
        {label: "Rawalpindi", img: "/images/rawal.jpg"},
        {label: "Bahawalpur", img: "/images/bhawal.jpg"},
        {label: "Quetta", img: "/images/quetta.jpg"},
        {label: "Peshawar", img: "/images/peshawar.jpg"},
        {label: "Rahim Yar Khan", img: "/images/rahim-yar.jpg"},
        {label: "Hyderabad", img: "/images/hyd.jpg"},
    ]
    
    return (
        <div className="home-p">
            <div className="banner flex flex-col">
                <div className="wrapper content flex flex-col aic">
                    <div className="intro">
                        <div className="slogn font s36 b8">Search any Product from anywhere, anytime.</div>
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
                            <div className="button font s15 b3 cfff anim">Delivery</div>
                            <div className="font s14 gray">or</div>
                            <div className="button blu font s15 b3 cfff anim">Pickup</div>
                        </div>
                    </div>
                    </div>
                    <div className="elip-blk flex flex-col rel">
                        <img src="/images/mobile.png"  className="mbl abs" />
                        <img src="/images/elip-1.svg"  className="img abs" />
                        <img src="/images/elip-2.svg"  className="img abs rig" />
                    </div>
                </div> 
            </div> 

            <div className="wrapper flex flex-col">
               
                {/* Section */}             
                <div className="dlry-blk rel" style={{backgroundImage: "url(/images/food-banner.jpg)"}}>
                    <div className="cvr abs" />
                    <div className="hdr flex aic">
                        <div className="title font s15 b6 cfff abs">We Are Responsible For Delivery</div>
                    </div>
                    <div className="blk abs flex flex-col aic">
                        <div className="lbl font s15 b7 black">{`List your resturant on ${global.siteName}`}</div>
                        <div className="txt font s14 gray">Super Men, the speediest and the best delivery service. it's easy: SuperMen lis your Orders on the web, help you process, pick and deliver to Super Customers <span className="color b6">Interested?</span>&nbsp;Let's star our partnership today!</div>
                        <button className="button font s15 b6 cfff anim">Join Us!</button>
                    </div>
                </div>
                            
                {/* Cities Section */}
                <div className="cities flex flex-col aic">
                    <div className="title font s15 b6 cfff">Find Us Now In Your Living Area</div>
                    <div className="wrap flex aic">
                        {
                            cities.map(item => (
                                <div className="item rel">
                                    <div className="img anim" style={{backgroundImage: `url(${item.img})`}} />
                                    <div className="lbl font s18 b6 cfff abs">{item.label}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                        
                {/* App download section */}       
                <DownloadCard />

                {/* About supermen */}
                <div className="abt-blk flex flex-col">
                    <div className="label font s32 b8 c000">SuperMen <span className="b5">(We Never Sleep)</span></div>
                    <div className="txt font s15 c000">It's everything promptly accessible on your doorsteps. The all you want to deliver or receive. To find out the right track, go on, download Super Men.</div>
                    <div className="txt font s15 c000">Super Men’s central mission is to providet the total satisfaction and gratification for all consumers in delivering and receiving your orders and parcels on your doortseps on time by Super Men. </div>
                    <div className="txt font s15 c000">Super Men launched first time in Multan with super-fast delivery.</div>
                    <div className="li font s15 c000">Returned home but all of a sudden forgot to bring food items?</div>
                    <div className="li font s15 c000">Busy in your workplace, but still want to deliver or receive some stuff to your home?</div>
                    <div className="txt font s15 c000">Feeling ill and lethargic, but the cardinal things need to purchase from restaurants, markets, and pharmacies?</div>
                    <div className="txt font s15 c000">Just relax because Super Men will deliver whatever you want just in one click.  </div>

                    <div className="tit font s18 b6 c000">24/7 Non-stop Super-fast delivery</div>
                    <div className="txt font s15 c000">To cut your hunger, Super Men is the lone online platform that provides you 24/ 7 non-stop deliveries from the best restaurants in your town. It's everything promptly accessible on your doorsteps. The all you want to deliver or receive. To find out the right track, go on, download Super Men.</div>
                    <div className="txt font s15 c000">We deliver a vast scope of things super-fast with less cost. Because we have our own stores and own the products of merchants. For the first time in Pakistan, we have an innovative advertising and marketing platform for the merchandisers.</div>
                    <div className="txt font s15 c000">Currently, we are working from Multan to provide dispatch services. However, at the next stage, we will update our Super Men set up in Lahore and Islamabad.</div>
                    
                    <div className="tit font s18 b6 c000">Order all types of food and groceries online</div>
                    <div className="txt font s15 c000">Place your order for all types of foods like Pizzas, Burgers, Snacks, Pakistani, Indian, and Chinese tasty foods, because Super Men has delivery access to all local best restaurants. We have our own stores for groceries that are delivered to you at less cost. But at the next phase, for super-fast food delivery, we will also operate from metropolitan areas:  Lahore, Islamabad, Rawalpindi, and Karachi.</div>
                    
                    <div className="tit font s18 b6 c000">What Super Men Offers? </div>
                    <div className="txt font 15 c000"><span className="icon-check ico s20 c000" />Non-stop super-fast delivery.</div>
                    <div className="txt font 15 c000"><span className="icon-check ico s20 c000" />Super Men delivers all types of fresh food and groceries items.</div>
                    <div className="txt font 15 c000"><span className="icon-check ico s20 c000" />Select all kinds of restaurants, cuisines and cafés.</div>
                    <div className="txt font 15 c000"><span className="icon-check ico s20 c000" />24/7 live chat facility to provide uninterrupted help in case.</div>
                </div> 
            
            </div>
        </div>     
    );
}

export default Home; 