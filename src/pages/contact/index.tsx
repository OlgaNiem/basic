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
      <h2>Contact form</h2>

      <div className={style.input}>
        <label htmlFor="frm-email">Email</label>
        <input id="frm-email" type="email" name="email" autoComplete="email" required />
      </div>

    <div className={style.input}>
      
        <label htmlFor="frm-first">Name</label>
        <input id="frm-first" type="text" name="first" autoComplete="given-name"  required />
      
    </div>

    <div className={style.textarea}>
      <label htmlFor="frm-message">Message</label>
      <textarea id="frm-message" name="message"></textarea>
    </div>

    <div className={style.button}>
      <button type="submit">Submit</button>
    </div>
  </form>

  );
}

