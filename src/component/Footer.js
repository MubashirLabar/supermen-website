import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {

    const company = [
        {label: "About Us", slug: "/about"},
        {label: "Blog", slug: "/"},
        {label: "Contact Us", slug: "/"}, 
        {label: "Pricing", slug: "/"},
        {label: "Testimonials", slug: "/"},
    ]
    const support = [
        {label: "Help center", slug: "/"},
        {label: "Terms of service", slug: "/terms"},
        {label: "Legal", slug: "/"},
        {label: "Privacy Policy", slug: "/"},
        {label: "FAQ's", slug: "/faq"},
    ]
 
    const date = new Date()

    return ( 
        <div className="footer-p">
            <div className="wrapper flex">
                <div className="col flex flex-col">
                    <Link to="/" className="logo"><img src="/images/logo.svg"  className="img" /></Link>
                    <div className="lin font s14">Coypright &copy; <span>{date.getFullYear()}</span> SuperMen</div>
                    <div className="lin font s14">All rights reserved</div>
                    <div className="social flex aic">
                        <Link to="/" className="item flex aic anim"><div className="ico icon-facebook" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-instagram" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-twitter" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-youtube-play" /></Link>
                    </div>
                </div>
                <div className="col flex flex-col">
                    <div className="font b7 s20 lbl">Company</div>
                    {
                        company.map( (item, index) => (
                            <Link key={index} to={item.slug} className="lin font s16 flex aic anim">{item.label}</Link>
                        ))
                    }
                </div>
                <div className="col flex flex-col">
                    <div className="font b7 s20 lbl">Support</div>
                    {
                        support.map( (item, index) => (
                            <Link key={index} to={item.slug} className="lin font s16 flex aic anim">{item.label}</Link>
                        ))
                    }
                </div>
                <div className="col flex flex-col">
                    <div className="font b7 s20 lbl">Stay up to date</div>
                    <div className="srch flex aic">
                        <input type="text" placeholder="Your email address" className="iput cleanbtn font s15"/>
                        <div className="ico icon-send s20" /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;