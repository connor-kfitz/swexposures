import ContactForm from "./components/ContactForm/ContactForm";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <p className="contact__text">Don’t hesitate to email us at info@swexposures.com, or send a message using the form below:</p>
        <h1 className="contact__header">Send us a message</h1>
        <ContactForm />
      </div>
    </section>
  )
}
