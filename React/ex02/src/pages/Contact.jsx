import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/contact.css"

function Contact () {

    return(
        <>
        <Header/>
        <section className="container-contact">
            <ul className="contact-list">
                <li>GitHub</li>
                <li>Linkedln</li>
            </ul>
        </section>
        <Footer/>        
        </>
    )
}

export default Contact;