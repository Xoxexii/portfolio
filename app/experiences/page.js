'use client'
import React, { useState } from 'react'
import styles from "./experience.module.scss"
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
  const[detail,setDetail] = useState(styles.background_detail_first)
  const[wire,setWire] = useState(styles.wire_back_first)
  const[status,setStatus] = useState(1)
  const Click = (param) => {
    if(param == 'first'){
      setDetail(styles.background_detail_first)
    }else if(param == 'sec'){
      setDetail(styles.background_detail_second)
    }else if(param == 'third'){
      setDetail(styles.background_detail_third)
    }
  }
  const Click1 = (param) => {
    if(param == 'first'){
      setWire(styles.wire_back_first)
    }else if(param == 'sec'){
      setWire(styles.wire_back_second)
    }else if(param == 'third'){
      setWire(styles.wire_back_third)
    }
  }

  const wheel = (param) => {
    window.addEventListener('wheel', function(event)
      {
      if (event.deltaY > 0 && status == 1){
        setDetail(styles.background_detail_second)
        setStatus(2)
        }
      else if(event.deltaY > 0 && status == 2){
          setDetail(styles.background_detail_third)
          setStatus(3)
        }
      else if(event.deltaY < 0 && status == 2){
          setDetail(styles.background_detail_first)
          setStatus(1)
      }
      else if(event.deltaY < 0 && status == 3){
        setDetail(styles.background_detail_second)
        setStatus(2)
    }
      
});
  }
  return (
    <>
    <div className={styles.ex_background} onWheel={()=>wheel()}>
            <div className={detail}>
                <div className={styles.detail_card} onClick={()=>Click('first')} >
                    <div className={styles.card_left_element}>
                        <div className={styles.image_area}>
                            <Image  src={technimal}
                                    alt="Picture of the technimal" 
                                    className={styles.image}
                                    priority={true}/>
                        </div>
                        <div className={styles.pos_area}>
                            <div style={{marginTop:10,color:'white'}}>- Position -</div>
                            <div style={{marginTop:140,color:'white',fontSize:20,fontWeight:'bold'}}>Frontend Developer</div>
                        </div>
                    </div>
                    <div className={styles.card_right_element}>
                        <div className={styles.topic_area}>
                              <div style={{width:'auto',height:50+'%',color:'white',fontSize:80,textAlign:'start',marginLeft:10,fontWeight:'bold'}}>Technimal co.ltd</div>
                              <div style={{width:'auto',height:40+'%',color:'white',fontSize:60,textAlign:'end',marginRight:10}}>internship</div>
                        </div>
                        <div className={styles.detail_area}>
                              <div style={{color:'white',fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>Build Wireframes, Mock-up Ideas and React.js projects to propose to senior developers for use in customer selection.</div>
                              <div style={{display:'flex',width:'auto',height:100+'%'}}>
                                  <div className={styles.wire_area}> 
                                        <div className={wire}>
                                        <Image  src={frame_2}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('first')}
                                                />
                                        <Image  src={frame}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('sec')}
                                                />
                                        <Image  src={frame_3}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('third')}
                                                />
                                        </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detail_card} onClick={()=>Click('sec')} >
                  <div className={styles.card_left_element}>
                        <div className={styles.image_area}>
                            <Image  src={mitsu}
                                    alt="Picture of the technimal" 
                                    className={styles.image}
                                    priority={true}/>
                        </div>
                        <div className={styles.pos_area}>
                            <div style={{marginTop:10,color:'white'}}>- Position -</div>
                            <div style={{marginTop:140,color:'white',fontSize:20,fontWeight:'bold'}}>IOT Engineer</div>
                        </div>
                    </div>
                    <div className={styles.card_right_element}>
                        <div className={styles.topic_area}>
                              <div style={{display:'flex',width:'auto',height:50+'%',color:'white',fontSize:55,textAlign:'start',marginLeft:10,marginTop:10,fontWeight:'bold',zIndex:1,alignItems:'center'}}>Mitsumaru electric <br />co. ltd
</div>
                              <div style={{width:'auto',height:40+'%',color:'white',fontSize:60,textAlign:'end',marginRight:10}}>cooperate</div>
                        </div>
                        <div className={styles.detail_area}>
                              <div style={{color:'white',fontSize:15.2,fontWeight:'bold',marginLeft:10,marginTop:10}}>Coding C language for command on microprocessor to count the number of products in productions line.Import number of products to database and made a dashboard to analyze.</div>
                              <div style={{display:'flex',width:'auto',height:100+'%'}}>
                                  <div className={styles.wire_area}> 
                                        <div className={wire}>
                                        <Image  src={mis1}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('first')}
                                                />
                                        <Image  src={mis2}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('sec')}
                                                />
                                        <Image  src={mis3}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('third')}
                                                />
                                        </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detail_card} onClick={()=>Click('third')} >
                <div className={styles.card_left_element}>
                        <div className={styles.image_area}>
                            <Image  src={kmitl}
                                    alt="Picture of the technimal" 
                                    className={styles.image}
                                    priority={true}/>
                        </div>
                        <div className={styles.pos_area}>
                            <div style={{marginTop:10,color:'white'}}>- Position -</div>
                            <div style={{marginTop:160,color:'white',fontSize:18,fontWeight:'bold'}}>Full-Stack Developer</div>
                        </div>
                    </div>
                    <div className={styles.card_right_element}>
                        <div className={styles.topic_area}>
                              <div style={{width:'auto',height:50+'%',color:'white',fontSize:70,textAlign:'start',marginLeft:10,fontWeight:'bold',alignItems:'center',display:'flex'}}>Smart Greenhouse</div>
                              <div style={{width:'auto',height:40+'%',color:'white',fontSize:60,textAlign:'end',marginRight:10}}>Graduated Project</div>
                        </div>
                        <div className={styles.detail_area}>
                              <div style={{color:'white',fontSize:12.5,fontWeight:'bold',marginLeft:10,marginTop:10}}>-  Coding C language for command on microprocessor to detect values and send values over the internet by MQTT protocol and get values in MQTT broker and send data to mySQL database by Node-red flow on Node.js <br /> -  Build React.js to show dashboards that include real-time data, graphs and buttons that command devices in the greenhouse.
</div>
                              <div style={{display:'flex',width:'auto',height:100+'%'}}>
                                  <div className={styles.wire_area}> 
                                        <div className={wire}>
                                        <Image  src={proj1}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('first')}
                                                />
                                        <Image  src={proj2}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('sec')}
                                                />
                                        <Image  src={proj3}
                                                alt="Picture of the technimal" 
                                                className={styles.wire_image}
                                                priority={true}
                                                onClick={()=>Click1('third')}
                                                />
                                        </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Experiences