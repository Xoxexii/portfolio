'use client'
import React, { useState,useEffect } from 'react'
import styles from "./skills.module.scss"
import { SlArrowLeftCircle,SlArrowRightCircle } from "react-icons/sl";
import { GoChevronRight,GoChevronLeft } from "react-icons/go";
import dynamic from 'next/dynamic';
import Com from './component/com'
import Hob from './component/hob'
import Lan from './component/lan'



function Skills() {
  
  const[status,setStatus] = useState("com_center");
  const[center,setCenter] = useState(styles.center_card);
  const[right,setRight] = useState(styles.right_card);
  const[left,setLeft] = useState(styles.left_card);
  const[l_detail,setL] = useState(<Hob />);
  const[c_detail,setC] = useState(<Com />);
  const[r_detail,setR] = useState(<Lan />);
  
  const rightClick =  () =>{
    if(status == "com_center"){
      
      setCenter(styles.center_card_right_move)
      setRight(styles.right_card_right_move)
      setLeft(styles.left_card_right_move)
      
    setTimeout(() => {
      setStatus("lan_center")
      setCenter(styles.center_card)
      setRight(styles.right_card)
      setLeft(styles.left_card)
      setL(<Com />)
      setC(<Lan />)
      setR(<Hob />)
      
    }, 1200);
    }
    if(status == "lan_center"){
   
    setCenter(styles.center_card_right_move)
    setRight(styles.right_card_right_move)
    setLeft(styles.left_card_right_move)
   
    setTimeout(() => {
      setStatus("hob_center")
      setCenter(styles.center_card)
      setRight(styles.right_card)
      setLeft(styles.left_card)
      setL(<Lan />)
      setC(<Hob />)
      setR(<Com />)
      
    }, 1200);
    }
    if(status == "hob_center"){
      
    setCenter(styles.center_card_right_move)
    setRight(styles.right_card_right_move)
    setLeft(styles.left_card_right_move)
   
    setTimeout(() => {
      setStatus("com_center")
      setCenter(styles.center_card)
      setRight(styles.right_card)
      setLeft(styles.left_card)
      setL(<Hob />)
      setC(<Com />)
      setR(<Lan />)
      
    }, 1200);
    }
  
}
const leftClick =  () =>{
  if(status == "com_center"){
  var third = document.getElementById('right');
  var fisrt = document.getElementById('center');
  var second = document.getElementById('left');
  setCenter(styles.center_card_left_move)
  setRight(styles.right_card_left_move)
  setLeft(styles.left_card_left_move)
  setTimeout(() => {
    fisrt.style.zIndex = "2";
    third.style.zIndex = "1";
    second.style.zIndex = "3";
  }, 500);
  setTimeout(() => {
    setStatus("hob_center")
    setCenter(styles.center_card)
    setRight(styles.right_card)
    setLeft(styles.left_card)
    setL(<Lan />)
    setC(<Hob />)
    setR(<Com />)
    fisrt.style.zIndex = "3";
    third.style.zIndex = "2"
    second.style.zIndex = "1";
  }, 1300);
  }
  if(status == "hob_center"){
  var third = document.getElementById('right');
  var fisrt = document.getElementById('center');
  var second = document.getElementById('left');
  setCenter(styles.center_card_left_move)
  setRight(styles.right_card_left_move)
  setLeft(styles.left_card_left_move)
  setTimeout(() => {
    fisrt.style.zIndex = "2";
    third.style.zIndex = "1";
    second.style.zIndex = "3";
  }, 500);
  setTimeout(() => {
    setStatus("lan_center")
    setCenter(styles.center_card)
    setRight(styles.right_card)
    setLeft(styles.left_card)
    setL(<Com />)
    setC(<Lan />)
    setR(<Hob />)
    fisrt.style.zIndex = "3";
    third.style.zIndex = "2"
    second.style.zIndex = "1";
  }, 1300);
  }
  if(status == "lan_center"){
    var third = document.getElementById('right');
  var fisrt = document.getElementById('center');
  var second = document.getElementById('left');
  setCenter(styles.center_card_left_move)
  setRight(styles.right_card_left_move)
  setLeft(styles.left_card_left_move)
  setTimeout(() => {
    fisrt.style.zIndex = "2";
    third.style.zIndex = "1";
    second.style.zIndex = "3";
  }, 500);
  setTimeout(() => {
    setStatus("com_center")
    setCenter(styles.center_card)
    setRight(styles.right_card)
    setLeft(styles.left_card)
    setL(<Hob />)
    setC(<Com />)
    setR(<Lan />)
    fisrt.style.zIndex = "3";
    third.style.zIndex = "2"
    second.style.zIndex = "1";
  }, 1300);
  }

}

 
  
  return (
    <>
    <div className={styles.skills_background} >
    <div className={styles.skills_element_left}></div>
    <div className={styles.skills_element_center}>
      
        
          <div className={left} onClick={()=>leftClick()} id='left'>{l_detail}</div>
      
        
          <div className={center} id='center'>{c_detail}</div>
        
        
          <div className={right} onClick={()=>rightClick()} id='right'>{r_detail}</div>
        
        
        
    </div> 
    <div className={styles.skills_element_right}></div>
  </div>
  
</>
  )
}

export default Skills