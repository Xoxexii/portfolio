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
  
  const[first,SetFirst] = useState(styles.first_background);
  const[sec,SetSec] = useState(styles.sec_background);
  const[third,SetThird] = useState(styles.third_background);
  const[loader,setLoading] = useState("loading")
  
  const rightClick =  () =>{
    if(first == styles.first_background){

      SetFirst(styles.first_background_left_clicked)
      SetSec(styles.sec_background_left_clicked)
      SetThird(styles.third_background_left_clicked)
      setTimeout(() => {
              SetFirst(styles.sec_background)
              SetSec(styles.third_background)
              SetThird(styles.first_background)
            }, 550);
    }if(third == styles.first_background){
  
      SetFirst(styles.sec_background_left_clicked)
      SetSec(styles.third_background_left_clicked)
      SetThird(styles.first_background_left_clicked)
      setTimeout(() => {
        SetFirst(styles.third_background)
        SetSec(styles.first_background)
        SetThird(styles.sec_background)
      }, 550);
    }if(sec == styles.first_background){
  
      SetFirst(styles.third_background_left_clicked)
      SetSec(styles.first_background_left_clicked)
      SetThird(styles.sec_background_left_clicked)
      setTimeout(() => {
        SetFirst(styles.first_background)
        SetSec(styles.sec_background)
        SetThird(styles.third_background)
      }, 550);
      
    }
  }
  const leftClick =  () =>{
  if(first == styles.first_background){
    SetFirst(styles.first_background_right_clicked)
    SetSec(styles.sec_background_right_clicked)
    SetThird(styles.third_background_right_clicked)
        setTimeout(() => {
          SetFirst(styles.third_background)
          SetSec(styles.first_background)
          SetThird(styles.sec_background)
        }, 550);
  }
  if(sec == styles.first_background){
    SetFirst(styles.third_background_right_clicked)
    SetSec(styles.first_background_right_clicked)
    SetThird(styles.sec_background_right_clicked)
        setTimeout(() => {
          SetFirst(styles.sec_background)
          SetSec(styles.third_background)
          SetThird(styles.first_background)
        }, 550);
  }
  if(third == styles.first_background){
    SetFirst(styles.sec_background_right_clicked)
    SetSec(styles.third_background_right_clicked)
    SetThird(styles.first_background_right_clicked)
        setTimeout(() => {
          SetFirst(styles.first_background)
          SetSec(styles.sec_background)
          SetThird(styles.third_background)
        }, 550);
  }
}
useEffect((()=>{
    setLoading(document.readyState)
   }),[])
 
  
  return (
    <>
    <div className={styles.skills_background} >
    <div className={styles.skills_element}>
      <div className={styles.icon}><GoChevronLeft onClick={()=>leftClick()}/></div>
    </div>
    <div className={styles.skills_element}>
      <div className={sec}><Hob /></div>
      <div className={first}><Com /></div>
      <div className={third}><Lan/> </div>
    </div> 
    <div className={styles.skills_element}>
      <div className={styles.icon}><GoChevronRight  onClick={()=>rightClick()}/></div>
    </div>
  </div>
  
</>
  )
}

export default Skills