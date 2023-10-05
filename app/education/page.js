'use client'
import React, { useState } from 'react'
import "./education.css"
import image2 from '../../image/brr.png'
import image3 from '../../image/kmitl.png'
import Image from 'next/image'
import { GoArrowLeft } from "react-icons/go";
import { useEffect } from 'react'


function Education() {
  const[background,setBackground] = useState('education_school_area')
  const[child,setChild] = useState('education_school_element')
  const[loading,setLoading] = useState("loading")
  
  const clickBrr = () =>{
    setBackground('education_school_area_change');
    setChild('education_school_element_brr_change');
    setTimeout(() => {
      const t = document.querySelector(".education_school_element_brr_change:nth-child(2)").style.visibility = 'hidden';
    }, 500);
    
  

    
}
    
  
  const clickKmitl = () =>{
    setBackground('education_school_area_change')
    setChild('education_school_element_kmitl_change')
    setTimeout(() => {
      const t = document.querySelector(".education_school_element_kmitl_change:nth-child(1)").style.visibility = 'hidden';
    }, 500);
    
  }
  const backBrr = () =>{
    setBackground('education_school_area')
    setChild('education_school_element_brr_back')
    setTimeout(() => {
      const t = document.querySelector(".education_school_element_brr_back:nth-child(2)").style.visibility = 'visible';
    },);
  }
  const backKmitl = () =>{
    setBackground('education_school_area')
    setChild('education_school_element_kmitl_back')
    setTimeout(() => {
      const t = document.querySelector(".education_school_element_kmitl_back:nth-child(1)").style.visibility = 'visible';
    },);
  }
   useEffect((()=>{
    setLoading(document.readyState)
   }),[])
  

  return (
    <>
  
    <div className={'education_background_area'}>
      <div className={'education_detail_area'}>
          {background === 'education_school_area'? 
          <div className={background} id='education_school_area'>
            <Image  src={image2} alt="Picture of the author" className={child}  id='first' onClick={()=>clickBrr()} priority={false}/>
            <Image  src={image3} alt="Picture of the author" className={child}  id='second' onClick={()=>clickKmitl()} priority={true}/>
            </div>
          : <div className={background} id='education_school_area'>
            <Image  src={image2} alt="Picture of the author" className={child}  id='first'priority={false}/>
            <Image  src={image3} alt="Picture of the author" className={child}  id='second'priority={true}/>
          </div>
         } 
          {background === 'education_school_area_change' ? child === 'education_school_element_brr_change'? <GoArrowLeft onClick={()=>backBrr()} className='backIconBrr'/>: <GoArrowLeft onClick={()=>backKmitl()} className='backIconKmitl' /> : <div></div>}
          {background === 'education_school_area_change' ? child === 'education_school_element_brr_change'? 
          <div className='detail-brr'>
            <div className='detail-brr_element'>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'#87CEFA'}}>- Junior High School -<br /> ( Grade 7-9 ) </span><br />Benchamaratcharangsarit School</div>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'yellow'}}>- Program -<br /></span>Gifted<br />Mathemetics and Sciences Program</div>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'#87CEFA'}}>- GPAX -</span><br />3.31</div>
            </div>
            <div className='detail-brr_element'>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'#87CEFA'}}>- Senior High School -<br /> ( Grade 10-12 ) </span><br />Benchamaratcharangsarit School</div>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'yellow'}}>- Program -<br /></span>Gifted<br />Mathemetics and Sciences Program</div>
              <div className='detail-brr_element_child'><span style={{opacity:1,color:'#87CEFA'}}>- GPAX -</span><br />3.23</div>
            </div>
          </div>
          : <div className='detail-kmitl'>
              <div className='detail-kmitl_element'>
                <div className='detail-kmitl_element_child'><span style={{opacity:1,color:'#C74A19'}}>- Degree -</span><br />Bachelor's Degrees</div>
                <div className='detail-kmitl_element_child'><span style={{opacity:1,color:'#C74A19'}}>- University -<br /></span>King Mongkut's Institute of Technology Ladkrabang<br/>( KMITL )</div>
                <div className='detail-kmitl_element_child'><span style={{opacity:1,color:'#C74A19'}}>- Major -<br /></span>Faculty of Engineering</div>
                <div className='detail-kmitl_element_child'><span style={{opacity:1,color:'#C74A19'}}>- Minor -</span><br />Electronics Engineering</div>
              </div>
              <div className='detail-kmitl_element'>
                <div className='detail-brr_element_child'><span style={{opacity:1,color:'#C74A19'}}>- GPAX -</span><br />2.76</div>
                <div className='detail-brr_element_child'>
                  <div style={{opacity:1,color:'#C74A19'}}>
                    - Greduated Project -
                  </div>
                  <div style={{marginTop:10}}>
                  Smart Greenhouse ( IOT )
                  <li style={{fontSize:16}}>Coding C language for command on microprocessor to detect values and send values over the internet by MQTT protocol and get values in MQTT broker and send data to mySQL database by Node-red flow on Node.js</li>
                  <li style={{fontSize:16}}>Build React.js to show dashboards that include real-time data, graphs and buttons that command devices in the greenhouse.</li>
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