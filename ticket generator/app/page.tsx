'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(0);
  const [formDisplay, setFormDisplay] = useState(true);
  const [ticketDisplay, setTicketDisplay] = useState(false);

  const handleSubmit = () => {
    setFormDisplay(false);
    setTicketDisplay(true);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1>Ticket Generator</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <h1>{formDisplay ? "Book Your Tickets Now!" : `Congrats ${name}!`}</h1>
          <p>{formDisplay ? "Buy Tickets to Your Favourite Shows with One Click." : "Your Ticket Has Been Booked Successfully"}</p>
        </div>

        <form className={styles.form} style={{display: formDisplay ? "flex" : "none"}}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="tickets">No.Of Tickets</label>
            <input type="number" id="tickets" name="tickets" required onChange={(e) => setTickets(Number(e.target.value))}/>
          </div>

          <button type="button" onClick={handleSubmit} className={styles.btn}>Generate Ticket</button>
          
        </form>

        <div className={styles.ticket} style={{display: ticketDisplay ? "flex" : "none"}}>
          <div className={styles.showInfo}>
            <h1>Ticket For The Show</h1>
            <p>Mar,20 2025 / Chennai</p>
          </div>
          <div className={styles.personDetail}>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>Tickets : {tickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
