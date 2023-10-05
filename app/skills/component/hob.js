import React from 'react'
import styles from './hob.module.scss'
import { BiFootball } from "react-icons/bi";
import { BsBook,BsLaptop } from "react-icons/bs";

function hob() {
  return (
    <div className={styles.hob_background}>
      <div className={styles.hob_background_element}>
        <div className={styles.hob_child}>
          <div style={{position:'absolute',top:20+'%',left:10+'%'}}>COMUNICATION</div>
        </div>
        <div className={styles.hob_child}>
          <div className={styles.hob_child_element}>
            
              <div className={styles.hob_child_elements}></div>
              <div className={styles.hob_child_elements}></div>
              <div className={styles.hob_child_elements}></div>
              <div className={styles.hob_child_elements}></div>
            
            <div style={{position:'absolute',fontSize:0.3+'em',top:40+'%',left:30+'%',zIndex:-1}} id='word1'>intermediate</div>
          </div>
          <div className={styles.hob_child_element}>
              <div className={styles.flag}>
                <div style={{backgroundColor:'red'}}></div>
                <div style={{backgroundColor:'white'}}></div>
                <div style={{backgroundColor:'blue'}}></div>
                <div style={{backgroundColor:'white'}}></div>
                <div style={{backgroundColor:'red'}}></div>
              </div>
              <div style={{position:'absolute',fontSize:0.3+'em',top:40+'%',left:40+'%'}} className={styles.gog}>fluent</div>
          </div>
        </div>
      </div>
      <div className={styles.hob_background_element}>
        <div className={styles.hob_first}>
          <div style={{position:'absolute',top:20+'%',left:25+'%'}}>HOBBIES</div>
        </div>
      <div className={styles.hob_first}>
        <div className={styles.hob_second_bottom}>
          <li>- Playing football -</li>
          <li>- Watching football -</li>
          <BiFootball style={{position:'absolute',fontSize:4+'vw',left:40+'%',top:50+'%'}}/>
        </div>
        <div className={styles.hob_second_bottom}>
        <li>- Read a book -</li>
        <BsBook style={{position:'absolute',fontSize:4+'vw',left:40+'%',top:50+'%'}}/>
        </div>
        <div className={styles.hob_second_bottom}>
          <li>- Watching Cartoons -</li>
          <li>- Watching Series -</li>
          <li>- Playing games -</li>
        <BsLaptop style={{position:'absolute',fontSize:4+'vw',left:40+'%',top:50+'%'}}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default hob