import React from 'react'
import styles from './lan.module.scss'

function lan() {
  return (
    <>
    <div className={styles.lan_background}>
      <div className={styles.topic_area}>
        <span className={styles.child}>Passion</span>
        <span className={styles.child}>Soft Skills</span>
        <span className={styles.child}>Problem - Solving</span>
        <span className={styles.child}>Responsibility</span>
        <span className={styles.child}>Creativity</span>
        <span className={styles.child}>Flexibility</span>
        <span className={styles.child}>Independence</span>
        <span className={styles.child}>Time Management</span>
        <span className={styles.child}>Ethical Awareness</span>
        <span className={styles.child}>Adaptability</span>
        <span className={styles.child}>Empathy</span>
        <div className={styles.mid}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.goal}>
            <div className={styles.out}></div>
            <div className={styles.in}></div>
            <div className={styles.dot}></div>
            <div className={styles.semicircle}></div>
        </div>
        <div className={styles.goal2}>
            <div className={styles.out}></div>
            <div className={styles.in}></div>
            <div className={styles.dot}></div>
            <div className={styles.semicircle}></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default lan