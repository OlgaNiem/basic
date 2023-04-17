import React from 'react'
import style from '../../styles/Contact.module.css'


export default function Home() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
  }
  return (
    <form className={style.container} onSubmit={handleSubmit}>
    <h1>Get in touch</h1>
    <div className="email block">
      <label htmlFor="frm-email">Email</label>
      <input id="frm-email" type="email" name="email" autoComplete="email" required />
      
    </div>
    
    <div className={style.nameblock}>
      <div>
        <label htmlFor="frm-first">First Name</label>
        <input
          id="frm-first"
          type="text"
          name="first"
          autoComplete="given-name"
          required
        />
      </div>
      <div>
        <label htmlFor="frm-last">Last Name</label>
        <input
          id="frm-last"
          type="text"
          name="last"
          autoComplete="family-name"
          required
        />
      </div>
    </div>
    <div className={style.textarea}>
      <label htmlFor="frm-message">Message</label>
      <textarea id="frm-message" name="message"></textarea>
    </div>
    <div className="button block">
      <button type="submit">Submit</button>
    </div>
  </form>

  );
}

