'use client'
import React from 'react'
import styles from "./profile.module.css"
import image from '../../image/itim.jpg'
import Image from 'next/image'
import { useEffect } from "react"




function Profile() {
  
  return (
    <div className={styles.profile_background_area}>
        <div className={styles.profile_detail_area}>
          <Image  src={image}
                  alt="Picture of the author" 
                  className={styles.profile_image_area}
                  priority={true}/>
          <div className={styles.profile_describe_area}>
              <div className={styles.profile_describe_text}>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- NAME -</div>
                  <div style={{marginTop:5}}>CHANOKCHON KONGSUMRIT</div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- NICKNAME -</div>
                  <div style={{marginTop:5}}>ITIM ( ไอติม )</div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- DATE OF BIRTH -</div>
                  <div style={{marginTop:5}}>9 JANUARY 2001 ( 22 YEARS OLD )</div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- HOBBIES -</div>
                  <ul style={{marginTop:5}}>
                    <li>PLAYING COMPUTER GAMES</li>
                    <li>PLAYING FOOTBALL</li>
                    <li>WATCHING CARTOON</li>
                    </ul>
                </div>
              </div>
              <div className={styles.profile_describe_text}>
              <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- ADDRESS -</div>
                  <div style={{display:'flex',textAlign:'center',marginTop:5}}> Na Mueang Sub-district, Mueang District, Chachoengsao, Thailand 24000 </div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- TEL -</div>
                  <div style={{marginTop:5}}>080-567-8515</div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- EMAIL -</div>
                  <div style={{marginTop:5}}>chanokchonkzr@gmail.com</div>
                </div>
                <div className={styles.profile_describe_text_left}>
                  <div style={{marginTop:10,opacity:0.75}}>- SOCIAL MEDIA -</div>
                  <ul style={{marginTop:5}}>
                    <li>INSTRAGRAM : iittiijj</li>
                    <li>FACEBOOK &nbsp;&nbsp;&nbsp;&nbsp;: Chanokchon Kongsumrit</li>
                    <li>LINE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: itimkrupp</li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Profile