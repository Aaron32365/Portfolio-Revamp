import React from "react"
import emailjs from 'emailjs-com';
import "./index.css"
import TypeWrite from "../../components/TypeWriter/index"
import Section from "../../components/Section/index"
export default function Contact(){

    function sendEmail(event){
        event.preventDefault()
        const service_id = "default_service";
        const template_id = "template_J6AbsuV6";
        emailjs.sendForm(service_id, template_id, event.target)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className="col container">
        <Section>
            <TypeWrite delay={120}>
                <div className="col-12 header" id="portfolioHeader">
                    Contact Me
                </div>
            </TypeWrite>
        </Section>
        <div className="row justify-content-center">
                <div className="col-11 itemContainer">
                            <div className="col centerText">
                                <span className="smallText"> Email me at </span><br/>
                                <span className="bigText">aaronsphone32365@gmail.com </span><br/>
                                <span className="smallText">or send me an email via the form below.</span>
                            </div>
                </div>
                <div className="col-10 formContainer">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <input type="hidden" name="from_name"/>
                            <label>Name</label>
                            <br/>
                            <input className="col-8 short" type="text" name="user_name"/>
                            <br/>
                            <label>Message</label> <br/>
                            <textarea className="col-8 tall" name="message_html"/> <br/>
                            <input className="submit col-4 col-md-2" type="submit" value="Send"/>
                        </form>
                </div>
            </div>
            {/* add in next and last buttons under the itemcontainer */}    
        </div>
    )
}