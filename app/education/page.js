'use client'
import React, { useState } from 'react'
import styles from "./education.module.scss"
import image2 from '../../image/brr.png'
import image3 from '../../image/kmitl.png'
import Image from 'next/image'
import { GoArrowLeft } from "react-icons/go";
import { useEffect } from 'react'


function Education() {
  const[background,setBackground] = useState(styles.edu_background)
  const[buttonArea,setButtonArea] = useState(styles.button_area)
  const[brrChoose,setBrrChoose] = useState(styles.brr_image)
  const[kmitlChoose,setKmitlChoose] = useState(styles.kmitl_image)
  const[brr,setBrr] = useState(styles.brr_detail)
  const[kmitl,setKmitl] = useState(styles.kmitl_detail)
  const[backk,setBack] = useState(styles.back)
  
  const click = (param) =>{
    if(param == 'brr'){
      setBrrChoose(styles.brr_brr_image_move)
      setKmitlChoose(styles.brr_kmitl_image_move)
      setTimeout(() => {
        setBackground(styles.edu_background_change)
        setButtonArea(styles.button_area_brr)
        setBrrChoose(styles.brr_change_image)
        setKmitlChoose(styles.kmitl_image)
      }, 650);
      
      
      
    }else if(param == "kmitl"){
      setBrrChoose(styles.kmitl_brr_image_move)
      setKmitlChoose(styles.kmitl_kmitl_image_move)
      setTimeout(() => {
        setBackground(styles.edu_background_change)
        setButtonArea(styles.button_area_kmitl)
        setKmitlChoose(styles.kmitl_change_image)
        setBrrChoose(styles.brr_kmitl)
      }, 650);
    }
  
}
    
  
const back = (param) =>{
  if(param == 'brr'){
    setBrrChoose(styles.brr_change_image_back)
    setBrr(styles.brr_detail_back)
    setBack(styles.backmove)
    setTimeout(() => {
      setBackground(styles.edu_background)
      setButtonArea(styles.button_area)
      setBrrChoose(styles.brr_image)
      setKmitlChoose(styles.kmitl_image)
      setBrr(styles.brr_detail)
      setBack(styles.back)
    }, 650);

  } else if(param == 'kmitl'){
    setKmitlChoose(styles.kmitl_change_image_back)
    setBrrChoose(styles.kmitl_brr_back)
    setKmitl(styles.kmitl_detail_back)
    setBack(styles.backmove)
    setTimeout(() => {
      setBackground(styles.edu_background)
      setButtonArea(styles.button_area)
      setKmitlChoose(styles.kmitl_image)
      setBrrChoose(styles.brr_image)
      setKmitl(styles.kmitl_detail)
      setBack(styles.back)
    }, 650);
  }
  
    
  }
  

  return (
    <>
      <div className={background}>
        {buttonArea === styles.button_area ? 
          <div className={styles.button_area}>
            <div className={brrChoose}><Image  src={image2} alt="Picture of the author"   onClick={()=>click('brr')} priority={true} placeholder='blur'/></div>
            <div className={kmitlChoose}><Image  src={image3} alt="Picture of the author"   onClick={()=>click('kmitl')} priority={true} placeholder='blur'/></div>
            
            
            
          </div> : buttonArea === styles.button_area_brr ?
          <div className={styles.button_area_brr}>
            <GoArrowLeft className={backk} onClick={()=>back('brr')}/>
            <div className={brrChoose}><Image  src={image2} alt="Picture of the author"    priority={true} placeholder='blur'/></div>
          </div> : 
          <div className={styles.button_area_kmitl}>
            <GoArrowLeft className={backk} onClick={()=>back('kmitl')}/>
            <div className={kmitlChoose}><Image  src={image3} alt="Picture of the author"   priority={true} placeholder='blur'/></div>
            
          </div> 
        }
        <div className={styles.detail_area}>
          {buttonArea === styles.button_area_brr ? 
          <div className={brr}>
            <div className={styles.detail_brr_element}>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#3D4EA7'}}>
                    <div>- Junior High School -</div>
                    <div>( Grade 7-9 )</div>
                  </div>
                  <div className={styles.detail}>
                    Benchamaratcharangsarit School
                  </div>
                </div>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#FED686'}}>
                    <div>- Program -</div>
                    <div>( Gifted )</div>
                  </div>
                  <div className={styles.detail}>
                  Mathemetics and Sciences Program
                  </div>
                </div>
                <div className={styles.left_element}>
                  <div className={styles.head}>
                    <div style={{color:'#3D4EA7'}}>- GPAX -</div>
                  </div>
                  <div className={styles.detail}>
                    3.31
                  </div>
                </div>
            </div>
            <div className={styles.detail_brr_element}>
              <div className={styles.right_element}>
                  <div className={styles.head} style={{color:'#FED686'}}>
                    <div>- Senior High School -</div>
                    <div>( Grade 10-12 )</div>
                  </div>
                  <div className={styles.detail}>
                    Benchamaratcharangsarit School
                  </div>
                </div>
                <div className={styles.right_element}>
                  <div className={styles.head} style={{color:'#3D4EA7'}}>
                    <div>- Program -</div>
                    <div>( Gifted )</div>
                  </div>
                  <div className={styles.detail}>
                  Mathemetics and Sciences Program
                  </div>
                </div>
                <div className={styles.right_element}>
                  <div className={styles.head} style={{color:'#FED686'}}>
                    <div>- GPAX -</div>
                  </div>
                  <div className={styles.detail}>
                    3.23
                  </div>
                </div>
            </div>
          </div> : buttonArea === styles.button_area_kmitl ?
          <div className={kmitl}>
            <div className={styles.detail_kmitl_element}>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#C74A19'}}>
                    <div>- Degree -</div>
                  </div>
                  <div className={styles.detail}>
                    Bachelor's Degrees
                  </div>
                </div>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#C74A19'}}>
                    <div>- University -</div>
                    <div style={{display:'flex',justifyContent:'center',color:'white'}}>King Mongkut's Institute of Technology Ladkrabang</div>
                  </div>
                  <div className={styles.detail}>
                  <div>( KMITL )</div>
                  </div>
                </div>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#C74A19'}}>
                    <div>- Major -</div>
                  </div>
                  <div className={styles.detail}>
                  Faculty of Engineering
                  </div>
                </div>
                <div className={styles.left_element}>
                  <div className={styles.head} style={{color:'#C74A19'}}>
                    <div>- Minor -</div>
                  </div>
                  <div className={styles.detail}>
                  Electronics Engineering
                  </div>
                </div>
            </div>
            <div className={styles.detail_kmitl_element}>
              <div className={styles.right_element}>
                  <div className={styles.head} style={{color:'#C74A19'}}>
                    <div>- GPAX -</div>
                  </div>
                  <div className={styles.detail}>
                  2.76
                  </div>
                </div>
                <div className={styles.right_element}>
                  <div className={styles.head}>
                    <div style={{color:'#C74A19'}}>- Greduated Project -</div>
                    <div>Smart Greenhouse ( IOT )</div>
                  </div>
                  <div className={styles.detail} style={{opacity:0.7}}>
                   <li>Coding C language for command on microprocessor to detect values and send values over the internet by MQTT protocol and get values in MQTT broker and send data to mySQL database by Node-red flow on Node.js</li>
                   <li>Build React.js to show dashboards that include real-time data, graphs and buttons that command devices in the greenhouse.</li>
                  </div>
                </div>

            </div>
          </div>
          : <div></div>}
        </div>
      </div>
    </>
  )
}

export default Education