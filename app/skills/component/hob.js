import React from 'react'
import styles from './hob.module.scss'
import { BiFootball } from "react-icons/bi";
import { BsBook,BsLaptop } from "react-icons/bs";

function hob() {
  return (
    <>
    <div className={styles.hob_background}>
      <div className={styles.lan_area}>
          <div className={styles.thai_area}>
              <div className={styles.flag_area}>
                  <div className={styles.flag}>
                    <div style={{backgroundColor:'red'}}></div>
                    <div style={{backgroundColor:'white'}}></div>
                    <div style={{backgroundColor:'blue'}}></div>
                    <div style={{backgroundColor:'white'}}></div>
                    <div style={{backgroundColor:'red'}}></div>
                  </div>
              </div>
              <div className={styles.name_area}>fluent</div>
          </div>
          <div className={styles.eng_area}>
          <div className={styles.flag_area}>
                  <div className={styles.flag}>
                    <div style={{backgroundColor:'white'}}></div>
                    <div style={{backgroundColor:'white'}}></div>
                    <div style={{backgroundColor:'white'}}></div>
                    <div style={{backgroundColor:'white'}}></div>
                  </div>
              </div>
              <div className={styles.name_area}>
                <div>intermediate</div>
                <div>TOEIC( 555 / 990 )</div>
            </div>
          </div>
      </div>
      <div className={styles.hob_area}>
        <div className={styles.content_area}>
          <div className={styles.left_content}>
            <div className={styles.icon_area}><BsBook className={styles.icon}/></div>
            <div className={styles.detail_area}>
              <div style={{marginTop:1+'vh'}}>
                <li>Read a cartoon book</li>
                <li>Read a fiction book</li>
              </div>
            </div>
          </div>
          <div className={styles.center_content}>
          <div className={styles.icon_area}><BsLaptop className={styles.icon}/></div>
            <div className={styles.detail_area}>
              <div style={{marginTop:1+'vh'}}>
                <li>Watching a cartoon</li>
                <li>Watching a series</li>
                <li>Learning programming</li>
                <li>Watching streaming</li>
              </div>
            </div>
          </div>
          <div className={styles.right_content}>
          <div className={styles.icon_area}><BiFootball className={styles.icon}/></div>
            <div className={styles.detail_area}>
              <div style={{marginTop:1+'vh'}}>
                <li>Watching football</li>
                <li>Playing football</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default hob