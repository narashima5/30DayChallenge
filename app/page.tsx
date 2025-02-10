'use client'
import Image from "next/image";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpeg';
import styles from "./page.module.css";
import { SetStateAction, useState } from "react";

export default function Home() {

  const [topText,setTopText] = useState('');
  const [bottomText,setBottomText] = useState('');

  const images = [img1,img2,img3,img4,img5];
  const [imgSelect,setImgSelect] = useState(images[0]);

  const handleGenerateImg = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImgSelect(images[randomIndex]);
  }

  const handleTopInput = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTopText(event.target.value);
  }
  const handleBottomInput = (event: { target: { value: SetStateAction<string>; }; }) => {
    setBottomText(event.target.value);
  }

  return (
    <div className={styles.main}>
      <h2>MEME GENERATOR</h2>
      <div className={styles.inputs}>
        <label htmlFor="top">Enter top text</label>
        <input type="text" name="top" className={styles.input} onChange={handleTopInput}/>
        <label htmlFor="bottom">Enter bottom text</label>
        <input type="text" name="bottom" className={styles.input} onChange={handleBottomInput}/>
        <button className={styles.btn} onClick={handleGenerateImg}>Generate new image</button>
      </div>

      <div className={styles.memeContainer}>
        <Image src={imgSelect} alt="" className={styles.img}></Image>
        <h1 className={styles.top}>{topText}</h1>
        <h1 className={styles.bottom}>{bottomText}</h1>
      </div>
    </div>
  );
}
