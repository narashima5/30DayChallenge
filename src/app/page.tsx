'use client'
import { useState } from "react";
import styles from "./page.module.css";

interface GenderData {
  name: string,
  gender: string,
  probability: number,
  count: number
}

export default function Home() {
  const [name, setName] = useState<string>("");
  const [prediction, setPrediction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<GenderData>();

  const handlePrediction = () => {
    setPrediction("");
    setLoading(true);
    fetch(`https://api.genderapi.io/api/?name=${name}&key=67cdb1ada38315664282b08c`)
      .then((res) => {
        return (res.json());
      })
      .then((data) => {
        setData(data)
        setLoading(false);
        setPrediction(data.gender); 
      })
    }

  const handleReset = () => {
    setName("");
    setPrediction("");
    setData(undefined);
    
  }
  return (


    <div className={styles.container}>

      <div className={styles.card} style={{
        backgroundColor: data ? (data.gender === "male" ? "#3276f5" : data.gender === "female" ? "pink" : data.gender === "null" ? "red" : "white") : "white"
      }}>

        <div className={styles.cardContent}>
          <h1>Predict Gender By Name</h1>
          <p>Using an external API to predict the gender from given name</p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
              if (!(e.target.value)) {
                setPrediction("");
                setData(undefined)
              }
            }}
            placeholder="Enter A Name To Predict"
            className={styles.input}
          />
          {loading ? (
            <div className={styles.loader}></div>) : null
            }
          {(prediction !== "null" && prediction !== "" && name) ? <p>{`${name} is ${prediction}`}</p>:null}
          {(data &&data.gender === "null") ? <p>{`${name} is not valid`}</p> : null}
          <button className={styles.button} onClick={handlePrediction}>Predict</button>
          <button className={styles.button} onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
