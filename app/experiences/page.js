'use client'
import React, { useEffect, useState } from 'react'
import styles from "./experience.module.scss"
import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import technimal from '../../image/technimal.png'
import frame from '../../image/frame.png'
import frame_2 from '../../image/frame_2.png'
import frame_3 from '../../image/frame_3.png'
import mitsu from '../../image/mitsu.png'
import kmitl from '../../image/kmitl.png'
import mis1 from '../../image/mis1.png'
import mis2 from '../../image/mis2.png'
import mis3 from '../../image/mis3.png'
import proj1 from '../../image/proj1.png'
import proj2 from '../../image/proj2.png'
import proj3 from '../../image/proj3.png'
import Image from 'next/image'

function Experiences() {
  const[background,setBackground] = useState(styles.card_background)
  const[image,setImage] = useState(styles.image_container)
  const[image2,setImage2] = useState(styles.image2_container)
  const[image3,setImage3] = useState(styles.image3_container)
  const[arrow,setArrow] = useState(styles.arrow1)
  
  const[imageStatus,setImageStatus] = useState(1)
  const[image2Status,setImage2Status] = useState(1)
  const[image3Status,setImage3Status] = useState(1)
  
  const[card,setCard] = useState(1)

  const[status,setStatus] = useState(1)

  const Active = () => {
    if(card == 1){
      setArrow(styles.arrow1)
      var link = document.getElementsByClassName(styles.image_button)
    for(let i=0; i < link.length;i++){
      link[i].className = styles.image_button;
    }
    if(image == styles.image_container){
        link[0].className += ` ${styles.button_active}`;
    }else if(image == styles.image_container_second){
      link[1].className += ` ${styles.button_active}`;
    }else if(image == styles.image_container_third){
    link[2].className += ` ${styles.button_active}`;
}
var link = document.getElementsByClassName(styles.button)
    for(let i=0; i < link.length;i++){
      link[i].className = styles.button;
    }
        link[0].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background)
        setCard(1)
    
    }
    if(card == 2){
      setArrow(styles.arrow2)
      var link = document.getElementsByClassName(styles.image2_button)
    for(let i=0; i < link.length;i++){
      link[i].className = styles.image2_button;
    }
    if(image2 == styles.image2_container){
        link[0].className += ` ${styles.button2_active}`;
    }else if(image2 == styles.image2_container_second){
      link[1].className += ` ${styles.button2_active}`;
    }else if(image2 == styles.image2_container_third){
    link[2].className += ` ${styles.button2_active}`;
}
    }
    if(card == 3){
      setArrow(styles.arrow3)
      var link = document.getElementsByClassName(styles.image3_button)
    for(let i=0; i < link.length;i++){
      link[i].className = styles.image3_button;
    }
    if(image3 == styles.image3_container){
        link[0].className += ` ${styles.button3_active}`;
    }else if(image3 == styles.image3_container_second){
      link[1].className += ` ${styles.button3_active}`;
    }else if(image3 == styles.image3_container_third){
    link[2].className += ` ${styles.button3_active}`;
}
    }
     
    
  }
  const Click = (param) => {
    if(card == 1){
      setArrow(styles.arrow1)
      if(param == 'left'){
        if(imageStatus == 2){
          setImage(styles.image_container)
          setImageStatus(1)
        }else if(imageStatus == 3){
          setImage(styles.image_container_second)
          setImageStatus(2)
        }
      }else if(param == 'right'){
        if(imageStatus == 1){
          setImage(styles.image_container_second)
          setImageStatus(2)
        }else if(imageStatus == 2){
          setImage(styles.image_container_third)
          setImageStatus(3)
        }
      }
    }else if(card == 2){
      setArrow(styles.arrow2)
      if(param == 'left'){
        if(image2Status == 2){
          setImage2(styles.image2_container)
          setImage2Status(1)
        }else if(image2Status == 3){
          setImage2(styles.image2_container_second)
          setImage2Status(2)
        }
      }else if(param == 'right'){
        if(image2Status == 1){
          setImage2(styles.image2_container_second)
          setImage2Status(2)
        }else if(image2Status == 2){
          setImage2(styles.image2_container_third)
          setImage2Status(3)
        }
      }
    }else if(card == 3){
      setArrow(styles.arrow3)
      if(param == 'left'){
        if(image3Status == 2){
          setImage3(styles.image3_container)
          setImage3Status(1)
        }else if(image3Status == 3){
          setImage3(styles.image3_container_second)
          setImage3Status(2)
        }
      }else if(param == 'right'){
        if(image3Status == 1){
          setImage3(styles.image3_container_second)
          setImage3Status(2)
        }else if(image3Status == 2){
          setImage3(styles.image3_container_third)
          setImage3Status(3)
        }
      }
    }
  }
      
  const state = (param) => {
    var link = document.getElementsByClassName(styles.button)
    for(let i=0; i < link.length;i++){
      link[i].className = styles.button;
    }
    if(param == 1){
        link[0].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background)
        setCard(1)
    }else if(param == 2){
      link[1].className += ` ${styles.button_card_active}`;
      setBackground(styles.card_background2)
      setCard(2)
    }else if(param == 3){
    link[2].className += ` ${styles.button_card_active}`;
    setBackground(styles.card_background3)
    setCard(3)
  }
  }

  const wheel = (param) => {
    var link = document.getElementsByClassName(styles.button)
    window.addEventListener('wheel', function(event)
      {
      if (event.deltaY > 0 && card == 1){
        for(let i=0; i < link.length;i++){
          link[i].className = styles.button;
        }
        link[1].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background2)
        setCard(2)
        }
      else if(event.deltaY > 0 && card == 2){
        for(let i=0; i < link.length;i++){
          link[i].className = styles.button;
        }
        link[2].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background3)
        setCard(3)
        }
      else if(event.deltaY < 0 && card == 2){
        for(let i=0; i < link.length;i++){
          link[i].className = styles.button;
        }
        link[0].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background)
        setCard(1)
      }
      else if(event.deltaY < 0 && card == 3){
        for(let i=0; i < link.length;i++){
          link[i].className = styles.button;
        }
        link[1].className += ` ${styles.button_card_active}`;
        setBackground(styles.card_background2)
        setCard(2)
    }
      
});
  }
  useEffect((()=>{
    Active();
  }))
  return (
    <>
    <div className={styles.ex_background} onWheel={()=>{wheel()}}>
          <div className={styles.background_element_left}>
            <BiSolidRightArrow className={arrow}/>
          </div>
          <div className={styles.background_element_center}>
              <div className={background}>
                  <div className={styles.first_card_area}>
                      <div className={styles.first_card}>
                            <div className={styles.first_card_left}>
                                <div className={styles.logo_area}>
                                    <Image  src={technimal} alt="Technimal" className={styles.logo} priority={false}/>
                                </div>
                                <div className={styles.detail_area}>
                                    <div className={styles.position_area}>
                                        <div className={styles.position_head}>- POSITION -</div>
                                        <div className={styles.position_detail}>FRONTEND DEVELOPER</div>
                                    </div>
                                    <div className={styles.period_area}>
                                        <div className={styles.period_head}>- PERIOD -</div>
                                        <div className={styles.period_detail}><div>JUNE 2022</div><div style={{margin:10}}>||</div><div>AUGUST 2022</div></div>
                                    </div>
                                </div>
                              </div>
                            <div className={styles.first_card_right}>
                                <div className={styles.name_area}>
                                    <div style={{fontSize: 'calc(11.5vw - 11.5vh)',color:'#1665D8'}}>Technimal co.ltd</div>
                                    
                                </div>
                              <div className={styles.content_area}>
                                <div className={styles.content_image_area}>
                                    <div className={styles.image_background}>
                                        <div className={styles.image_frame}>
                                            <div className={image}>
                                            <Image  src={frame}
                                                alt="Picture of the technimal" 
                                                className={styles.tech_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={frame_2}
                                                alt="Picture of the technimal" 
                                                className={styles.tech_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={frame_3}
                                                alt="Picture of the technimal" 
                                                className={styles.tech_pic}
                                                priority={true}
                                            
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.image_button_background}>
                                        <div style={{display:'flex',justifyContent:'end',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowLeft className={styles.iconleft} onClick={()=> Click('left')}/>
                                        </div>
                                        <div className={styles.image_button_area}>
                                              <div className={styles.image_button}></div>
                                              <div className={styles.image_button}></div>
                                              <div className={styles.image_button}></div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'start',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowRight className={styles.iconright} onClick={()=> Click('right')}/>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className={styles.content_detail_area}>
                                    <div style={{height:50 + '%',display:'flex',alignItems:'center',justifyContent:'center',fontSize: 'calc(6vw - 6vh)',color: '#1665D8'}}>internship</div>
                                    <div style={{height:50 + '%',display:'flex',justifyContent:'center',fontSize: 'calc(2.5vw - 2.5vh)',margin:'0 5vh',color: 'white'}}>Build Wireframes, Mock-up Ideas and build in React.js projects to propose to senior developers for use in customer selection.</div>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
                  <div className={styles.second_card_area}>
                  <div className={styles.second_card}>
                            <div className={styles.second_card_left}>
                                <div className={styles.logo2_area}>
                                    <Image  src={mitsu} alt="Mitsumaru" className={styles.logo2} priority={false}/>
                                </div>
                                <div className={styles.detail2_area}>
                                    <div className={styles.position2_area}>
                                        <div className={styles.position2_head}>- POSITION -</div>
                                        <div className={styles.position2_detail}>IOT ENGINEER</div>
                                    </div>
                                    <div className={styles.period2_area}>
                                        <div className={styles.period2_head}>- PERIOD -</div>
                                        <div className={styles.period2_detail}><div>JANUARY 2021</div><div style={{margin:10}}>||</div><div>MAY 2021</div></div>
                                    </div>
                                </div>
                              </div>
                            <div className={styles.second_card_right}>
                                <div className={styles.name2_area}>
                                    <div style={{fontSize: 'calc(7.5vw - 7.5vh)'}}>Mitsumaru electric co. ltd</div>
                                    
                                </div>
                              <div className={styles.content2_area}>
                                <div className={styles.content2_image_area}>
                                    <div className={styles.image2_background}>
                                        <div className={styles.image2_frame}>
                                            <div className={image2}>
                                            <Image  src={mis1}
                                                alt="Picture of mitsu" 
                                                className={styles.mis_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={mis2}
                                                alt="Picture of mitsu" 
                                                className={styles.mis_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={mis3}
                                                alt="Picture of mitsu" 
                                                className={styles.mis_pic}
                                                priority={true}
                                            
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.image2_button_background}>
                                        <div style={{display:'flex',justifyContent:'end',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowLeft className={styles.icon2left} onClick={()=> Click('left')}/>
                                        </div>
                                        <div className={styles.image2_button_area}>
                                              <div className={styles.image2_button}></div>
                                              <div className={styles.image2_button}></div>
                                              <div className={styles.image2_button}></div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'start',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowRight className={styles.icon2right} onClick={()=> Click('right')}/>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className={styles.content2_detail_area}>
                                    <div style={{height:50 + '%',display:'flex',alignItems:'center',justifyContent:'center',fontSize: 'calc(6vw - 6vh)',color: '#EC1B24'}}>cooperate</div>
                                    <div style={{height:50 + '%',display:'flex',justifyContent:'center',fontSize: 'calc(2.5vw - 2.5vh)',margin:'0 5vh',color: 'white'}}>Coding C language for command on microprocessor to count the number of products in productions line.Import number of products to database and made a dashboard to analyze.</div>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
                  <div className={styles.third_card_area}>
                    <div className={styles.third_card}>
                            <div className={styles.third_card_left}>
                                <div className={styles.logo3_area}>
                                    <Image  src={kmitl} alt="Mitsumaru" className={styles.logo3} priority={false}/>
                                </div>
                                <div className={styles.detail3_area}>
                                    <div className={styles.position3_area}>
                                        <div className={styles.position3_head}>- POSITION -</div>
                                        <div className={styles.position3_detail}>FULLSTACK DEVELOPER</div>
                                    </div>
                                    <div className={styles.period3_area}>
                                        <div className={styles.period3_head}>- PERIOD -</div>
                                        <div className={styles.period3_detail}><div>2022</div><div style={{margin:10}}>||</div><div>2023</div></div>
                                    </div>
                                </div>
                              </div>
                            <div className={styles.third_card_right}>
                                <div className={styles.name3_area}>
                                    <div style={{fontSize: 'calc(5.5vw - 5.5vh)',marginLeft:6+'vw'}}>King Mongkut's Institute of Technology Ladkrabang</div>
                                </div>
                              <div className={styles.content3_area}>
                                <div className={styles.content3_image_area}>
                                    <div className={styles.image3_background}>
                                        <div className={styles.image3_frame}>
                                            <div className={image3}>
                                            <Image  src={proj1}
                                                alt="Picture of mitsu" 
                                                className={styles.proj_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={proj2}
                                                alt="Picture of mitsu" 
                                                className={styles.proj_pic}
                                                priority={true}
                                            
                                                />
                                            <Image  src={proj3}
                                                alt="Picture of mitsu" 
                                                className={styles.proj_pic}
                                                priority={true}
                                            
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.image3_button_background}>
                                        <div style={{display:'flex',justifyContent:'end',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowLeft className={styles.icon3left} onClick={()=> Click('left')}/>
                                        </div>
                                        <div className={styles.image3_button_area}>
                                              <div className={styles.image3_button}></div>
                                              <div className={styles.image3_button}></div>
                                              <div className={styles.image3_button}></div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'start',alignItems:'center',fontSize:'calc(5vw - 5vh)'}}>
                                          <MdOutlineKeyboardDoubleArrowRight className={styles.icon3right} onClick={()=> Click('right')}/>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className={styles.content3_detail_area}>
                                    <div style={{height:50 + '%',display:'flex',alignItems:'center',justifyContent:'center',fontSize: 'calc(6vw - 6vh)',color:'#C74A19'}}>graduated project</div>
                                    <div style={{height:50 + '%',display:'flex',justifyContent:'center',fontSize: 'calc(2vw - 2vh)',margin:'0 5vh',color:'white'}}>
                                      <li>
                                      Get values in MQTT broker and send data to mySQL database by Node-red flow on Node.js
                                      </li>
                                      <li>
                                      Build React.js to show dashboards that include real-time data, graphs and buttons that command devices in the greenhouse.
                                      </li>
                                    </div>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.background_element_right}>
              <div className={styles.button_area}>
                    <div className={styles.button} onClick={()=>{state(1)}}></div>
                    <div className={styles.button} onClick={()=>{state(2)}}></div>
                    <div className={styles.button} onClick={()=>{state(3)}}></div>
              </div>
          </div>
    </div>
    </>
  )
}

export default Experiences