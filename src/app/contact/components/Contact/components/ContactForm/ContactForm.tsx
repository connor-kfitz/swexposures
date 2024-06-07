"use client";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import "./ContactForm.scss";

class ContactFormData {
  name: string
  number: string
  email: string
  website: string
  message: string

  constructor(name: string, number: string, email: string, website: string, message: string) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.website = website;
    this.message = message
  }
}

export default function ContactForm() {

  const [formData, setFormData] = useState(new ContactFormData("", "", "", "", ""))

  const formRef = useRef<HTMLFormElement>(null);

  const serviceId = process.env.EMAIL_JS_SERVICE_ID;
  const templateId = process.env.EMAIL_JS_TEMPLATE_ID;
  const publicKey = process.env.EMAIL_JS_PUBLIC_KEY;

  async function sendEmail(event: React.MouseEvent) {
    event.preventDefault()
    if (!serviceId || !templateId || !formRef.current || !publicKey || !checkInputFields()) return;
    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setFormData(new ContactFormData("", "", "", "", ""));
    } catch (error) {
      console.log(error);
    }
  }

  function checkInputFields() {
    var sendEmail = true
    if (!formData.name) { sendEmail = false }
    if (!formData.number) { sendEmail = false }
    if (!formData.email) { sendEmail = false }
    if (!formData.message) { sendEmail = false }
    return sendEmail
  }

  return (
    <form className="contact-form" ref={formRef}>
      <div className="contact-form__row">
        <div className="contact-form__item name">
          <label className="contact-form__label"><strong className="contact-form__label-title">Name </strong><span className="contact-form__label-light">(required)</span></label>
          <input className="contact-form__input"/>
        </div>
        <div className="contact-form__item">
          <label className="contact-form__label"><strong className="contact-form__label-title">Phone Number</strong></label>
          <input className="contact-form__input"/>
        </div>
      </div>
      <div className="contact-form__item">
        <label className="contact-form__label"><strong className="contact-form__label-title">Email </strong><span className="contact-form__label-light">(required)</span></label>
        <input className="contact-form__input"/>
      </div>
      <div className="contact-form__item">
        <label className="contact-form__label"><strong className="contact-form__label-title">Website</strong></label>
        <input className="contact-form__input"/>
      </div>
      <div className="contact-form__item">
          <label className="contact-form__label"><strong className="contact-form__label-title">Products Requested </strong><span className="contact-form__label-light">(required)</span></label>
          <textarea className="contact-form__text-input"></textarea>
      </div>
      <button className="contact-form__submit-button" onClick={(event) => sendEmail(event)}>Submit</button>
    </form>
  )
}
