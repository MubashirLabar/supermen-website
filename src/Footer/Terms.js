import React,{useEffect} from 'react';

function Terms() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    },[]);

    return (
        <div className="about-p terms">
            <div className="banner rel flex aic" style={{backgroundImage: `url(/images/food-banner.jpg)`}}>
                <div className="cvr abs" />
                <div className="title font s42 b6 cfff">T&C</div>
            </div>
             
            {/* About supermen */}
            <div className="content wrapper flex flex-col">
                <div className="title font s42 b5 c000">Terms and Conditions of Use</div>
                <div className="txt font s15 c000">After getting to this website, you agree to bound our all terms and conditions of use including all regulations, guidelines, and applicable laws. But if you disagree with any terms and conditions, then you are not permitted to utilize or use this website. All the materials of this website are secured by relevant copyright and brand name law.</div>

                <div className="tit font s22 b6 c000">Use License </div>
                <div className="txt font s15 c000">Super Men permits its user to download just one copy of the materials. Yet, you are not permitted to exchange titles, change or copy the materials. We don't concede authorization to use our materials for business reasons or to show publicly and industrially. Super Men doesn't permit you to eliminate any copyright or other prohibitive documentation from the materials. We won't permit you to move the materials to another person or "reflect" the materials on some other's server.</div>
                <div className="txt font s15 c000">This license will consequently end if you ignore any of these constraints and restrictions and at any time can be ended by Super Men. That is the reason after ending your viewing of these materials or upon the end of this license, you should obliterate and crush any downloaded materials( electronic or printed design) in your possession.</div>
                
                <div className="tit font s18 b6 c000">Disclaimer</div>
                <div className="txt font s15 c000">All the materials that are available on Super Men’s website do not provide guarantees, including without limitation. Super Men makes no guarantees, communicated or inferred.Further, Superman London doesn't warrant or make any portrayals concerning the precision, likely outcomes, or unwavering quality of the utilization of the materials on its website.</div>
                
                <div className="tit font s18 b6 c000">Limitations</div>
                <div className="txt font s15 c000">In any case, super Men and its suppliers will not be responsible for any harm, including loss of information, benefits, or business interference.</div>
                                
                <div className="tit font s18 b6 c000">Revisions and Errata</div>
                <div className="txt font s15 c000">On our Super Men website, there can be some technical, typographical, and photographic mistakes and we do not warrant that all the material on the website is correct or complete. We can bring some changes to the website at any time without intimation. Moreover, we do not make any commitment to update the materials. </div>
                                
                <div className="tit font s18 b6 c000">Links</div>
                <div className="txt font s15 c000">Super Men has not assessed the entirety of the sites connected to its website and isn't answerable for the contents of any such connected webpage. The consideration of any link doesn't suggest support by Supermen of the site.</div>
                                
                <div className="tit font s18 b6 c000">Modifications</div>
                <div className="txt font s15 c000">Super Men has right to change or revise its terms of use for website at any time without notification. Before using our website, you agree completely with our current Terms and Conditions of Use.</div>
            </div> 
        </div>
    );
}
 
export default Terms;