"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  let i = 0;
  const CurrencyValues = {
    AustralianDollar: 54.27,
    USDollar: 87.47,
    Euro: 90.74,
    KuwaitiDinar: 283.35,
    JapaneseYen: 0.58,
    ChineseYuan: 12.06,
    SouthKoreanWon: 0.06,
    NewZealandDollar: 48.96,
    UAEDirham: 23.82,
    RussianRuble: 0.98,
  };

  const Countries: string[] = Object.keys(CurrencyValues);

  const [selectedCountry, setSelectedCountry] = useState("");

  const [inputValue, setInputValue] = useState<number>(0);

  return (
    <div className={styles.screen}>
      <div className={styles.converterContainer}>
        <div className={styles.header}>
          {/* header */}
          <h1>CURRENCY CONVERTER</h1>
        </div>

        <div className={styles.Content}>
          <h3>{` Convert Indian Rupees to ${
            selectedCountry ? selectedCountry : "Foreign Currency"
          }`}</h3>
          {/* inputs */}
          <div className={styles.inputsContainer}>
            <select
              className={styles.select}
              name="From"
              id="fromCurrencySelection"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select an Option</option>
              {Countries.map((value) => (
                <option key={++i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <input
              type="number"
              className={styles.input}
              value={inputValue}
              placeholder="Enter Amount"
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.conversionDetailsContainer}>
          {" "}
          {/* conversion details */}
          <h4>{`Indian Rupee : ${inputValue.toFixed(3)}`}</h4>
          {selectedCountry && (
            <div>
              <h4>
                {`${selectedCountry} : ${(
                  inputValue /
                  CurrencyValues[selectedCountry as keyof typeof CurrencyValues]
                ).toFixed(3)}`}
              </h4>

              <h4>
                {
                  `1 ${selectedCountry} = ${
                    CurrencyValues[selectedCountry as keyof typeof CurrencyValues]
                  } INR`
                }
              </h4>

              <h4>
                {
                  `1 INR = ${
                    (1 / CurrencyValues[selectedCountry as keyof typeof CurrencyValues])
                      .toFixed(3)
                  } ${selectedCountry}`
                }
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
