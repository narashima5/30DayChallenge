'use client'

import Image from 'next/image';
import google from './google-icon.png';
import fb from './fb-icon.webp';
import x from './x-icon.jpg';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './page.module.css';
import router from 'next/navigation';

export default function Login(){
    const [number, setNumber] = useState('');
    const [pswd, setPswd] = useState('');
    const [phone,setPhone] = useState(false);
    const [pass ,setPass]= useState(false);

    const handleInputNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
    
  }

  const handleInputpswd = (event: ChangeEvent<HTMLInputElement>) => {
    setPswd(event.target.value);
    
  }

  const handleBtnClick = () => {
      if((number.length) !== 10){
        alert("Enter valid Phone Number");
      }else{
        setPhone(true);
      }
  
      if((pswd.length) < 6){
        alert("Length of Password should be 6 or greater than 6");
      }else{
        setPass(true);
      }

      if(phone && pass){
        alert('login success')
      }
    }
  
    const hadleSubmit = (e: FormEvent) => {
      e.preventDefault()
      
    }


    return(
    <div className={styles.main}>
      <form onSubmit={hadleSubmit} className={styles.form}>
        <header className={styles.title}>
          LOGIN
        </header>
        <div className={styles.inputs}>
          <label htmlFor="Uname" className={styles.label}>PHONE NUMBER:</label>
          <input type="text" name="Uname" onChange={handleInputNumber} id="Uname" placeholder="Enter Your Number" className={styles.inpt}/>

          <label htmlFor="email" className={styles.label}>PASSWORD:</label>
          <input type="password" name="email" onChange={handleInputpswd} id="email" placeholder="Enter Your Password" className={styles.inpt}/>

          
          
          

        </div>

        <button type="button" onClick={handleBtnClick} className={styles.btn}>Login</button>

        <div className={styles.imgs}>
          <Image src={google} alt={'google'} width={45} height={45}></Image>
          <Image src={fb} alt={'fb'} width={50} height={50}></Image>
          <Image src={x} alt={'x'} width={35} height={35}></Image>
        </div>
      </form>
    </div>
    )
}