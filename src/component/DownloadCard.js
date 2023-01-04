import React from 'react';
import { Link } from 'react-router-dom'

function DownloadCard(props) {
    return (
        <div className="dnld-blk flex rel">
            <div className="lef flex flex-col">
                <div className="tit font s22 b8 cfff">Put us in your Pocket</div>
                <div className="blk">
                    <div className="txt font s18 b3 cfff">Download the food you love</div>
                    <div className="txt font s15 b3 cfff">It's all at your fingertips - the restaurants you love. Find the right food to suit your mood, and make the first bite last.</div>
                </div>
                <div className="actions">
                    <div className="lbl font s15 b6 cfff">Go ahead, download us.</div>
                    <div className="flex aic">
                        <Link to="/" className="lin"><img src="/images/playstore.svg" className="img"/></Link>
                        <Link to="/" className="lin"><img src="/images/appstore.svg" className="img"/></Link>
                    </div>
                </div>
            </div>
            <div className="rig">
                <img src="/images/double-mob.png" className="img abs" />
            </div>
        </div>
    );
}

export default DownloadCard;