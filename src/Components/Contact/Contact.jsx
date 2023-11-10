import React from "react";
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
function Contact(){
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">  we always to help by providing the best service for you <br/>
                        you belive a good blace to live  can make your life better</span>
                    
                    <div className="flexColStart contactModes">
                        {/* first Row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={20}/>
                                        </div>
                                 <div className="flexColStart detail">
                                    <span className="primaryText">Call</span><span className="SecondaryText">002 783 453</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>
                            <br/>
                            {/* second */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={20}/>
                                        </div>
                                 <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span><span className="SecondaryText">002 783 453</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>

                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={20}/>
                                        </div>
                                 <div className="flexColStart detail">
                                    <span className="primaryText">vedio Call</span><span className="SecondaryText">002 783 453</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                    Vedio Call Now
                                </div>
                            </div>
                            <br/>
                            {/* second */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={20}/>
                                        </div>
                                 <div className="flexColStart detail">
                                    <span className="primaryText">Message</span><span className="SecondaryText">002 783 453</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                   Message
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="c-right">
                        <div className="image-container">
                            <img src="./contact.jpg" alt=""/>
                        </div>
                </div>
            </div>

        </section>
    )
}
export default Contact;