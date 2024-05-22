"use client";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <form className="contact-form">
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
      <button className="contact-form__submit-button">Submit</button>
    </form>
  )
}
