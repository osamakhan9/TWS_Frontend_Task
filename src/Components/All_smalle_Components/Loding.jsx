import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div style={{width: "1200px", height : "800px"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="250px"
          src="https://media0.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif?cid=ecf05e47ugmj86wwhuplnb4r617ffcjvl8rv87heo6u5rr10&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="loading..."
          />
       
      </div>
   </div>
    </>
  );
};

export default Loading;
