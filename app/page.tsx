'use client'
import styles from "./page.module.css";
import { useState } from "react";

interface Todo {
  id? : number,
  userId? : number,
  title? : String,
  completed? : Boolean
}

export default function Home() {
  const [users, setUsers] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hdData,setHdData] = useState<String[]>([]);
  const [filter,setFilter] = useState<String | number>("");
  const [filterData,setFilterData] = useState<String | number>('');
  const [url,setUrl] = useState('');
  
  let i = 0;
  
  const handleClick = () => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setUsers(json)
        setHdData(Object.keys(json[0]))
      })
      .catch((e) => {
        alert("Error: Not Valid Json");
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={styles.main}>
      <input type="text" className={styles.urlinput} onChange={(e) => setUrl(e.target.value)}/>
      <button className={styles.btn} onClick={handleClick}>
        CLICK TO MAKE API CALL
      </button>

      <div className={styles.selectContainer}>
        <select name="filters" id="fill" className={styles.selection} onChange={(e) => setFilter(e.target.value)}>
          <option value="none" selected disabled hidden={filter?true:false}>SELECT AN OPTION</option>
          {hdData.map((value) => <option key={++i} value={value.toString()}>{value.toUpperCase()}</option>)}
        </select>

        <input type="text" className={styles.fill_input} disabled={filter?false:true} placeholder={filter ? `SEARCH FOR ${filter.toString().toUpperCase()}` : "SEARCH"} onChange={(e) => setFilterData(e.target.value)}/>
      </div>
      
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                {
                  hdData.map((value) => <th key={++i}>{value.toUpperCase()}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                filter === '' || filterData === '' ? (
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.userId}</td>
                      <td>{user.id}</td>
                      <td>{user.title?.toUpperCase()}</td>
                      <td>{user.completed?.toString().toUpperCase() ?? 'N/A'}</td>
                    </tr>
                  ))
                ) : (
                  users.filter(user => 
                    (user as any)[filter as keyof typeof user]?.toString() === filterData.toString().toLocaleLowerCase()
                  ).map(user => (
                    <tr key={user.id}>
                      <td>{user.userId}</td>
                      <td>{user.id}</td>
                      <td>{user.title?.toUpperCase()}</td>
                      <td>{user.completed?.toString().toUpperCase() ?? 'N/A'}</td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}