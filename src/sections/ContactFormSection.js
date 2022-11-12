import React from 'react'


const ContactFormSection = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <h2>Come in Contact with Us</h2>
                <form noValidate>
                <div>
                    <imput id="name" type="text" placeholder="Your Name" />
                    <div className="errorMessage"></div>
                    </div>
                    <div>
                    <imput id="name" type="email" placeholder="Your Mail" />
                    <div className="errorMail"></div>
                    </div>
                    <div className="textarea">
                    <textarea id="comment" placeholder="Comments"></textarea>                   
                    </div>
                  
                    <div>
                        <button type="submit" className="btn-theme">Post Comments</button> 
                     </div>
                </form>
            </div>
        </section>
        
    )
}
export default ContactFormSection