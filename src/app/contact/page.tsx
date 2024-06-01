import ContactForm from "./ContactForm/ContactForm";
import "./ContactPage.scss";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-section__container">
          <p className="contact-section__text">Don’t hesitate to email us at info@swexposures.com, or send a message using the form below:</p>
          <h1 className="contact-section__header">Send us a message</h1>
          <ContactForm/>
        </div>
      </section>
    </main>
  )
}
