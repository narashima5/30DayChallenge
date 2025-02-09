'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {

  const [number, setNumber] = useState('');
  const [pswd, setPswd] = useState('');
  const [cpswd, setCpswd] = useState('');
  const router = useRouter();
  const [phone,setPhone] = useState(false);
  const [pass ,setPass]= useState(false);
  const [cPass,setCPass] = useState(false);

  const handleInputNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
    
  }

  const handleInputpswd = (event: ChangeEvent<HTMLInputElement>) => {
    setPswd(event.target.value);
    
  }

  const handleInputCPswd = (event: ChangeEvent<HTMLInputElement>) => {
    setCpswd(event.target.value);
    
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

    if(cpswd !== pswd){
      alert("Password doesn't match");
    }else{
      setCPass(true);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(phone && pass && cPass){
      alert('Successfully Registered!!')
      router.push('/login');
    }
  }


  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <header className={styles.title}>
          Registration Form
        </header>
        <div className={styles.inputs}>
          <label htmlFor="Uname" className={styles.label}>PHONE NUMBER:</label>
          <input type="text" name="Uname" onChange={handleInputNumber} id="Uname" placeholder="Enter Your Number" className={styles.inpt}/>

          <label htmlFor="email" className={styles.label}>PASSWORD:</label>
          <input type="password" name="email" onChange={handleInputpswd} id="email" placeholder="Enter Your Password" className={styles.inpt}/>

          <label htmlFor="pswd" className={styles.label}>CONFIRM PASSWORD:</label>
          <input type="password" name="pswd" onChange={handleInputCPswd} id="pswd" placeholder="Enter Your Password Again" className={styles.inpt}/>

        </div>

        <button type="submit" onClick={handleBtnClick} className={styles.btn}>Register</button>
      </form>
    </div>
  );
}
