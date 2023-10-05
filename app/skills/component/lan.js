import React from 'react'
import styles from './lan.module.scss'

function lan() {
  return (
    <div className={styles.lan_background}>
      <div className={styles.background_component}>
            <div className={styles.component_header}>
                  <div>Soft Skills</div>
            </div>
            <div className={styles.component_detail}>
                  <div className={styles.detail_element}>
                        <div className={styles.element_child}>
                            <div className={styles.child_fingers}>
                                <div>Passion</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Problem - Solving</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Responsibility</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Creativity</div>
                            </div>
                        </div>
                  </div>
                  <div className={styles.detail_element}>
                        <div className={styles.element_child}>
                            <div className={styles.child_fingers}>
                                <div>Critical Thinking</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Flexibility</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Independence</div>
                            </div>
                            <div className={styles.child_fingers}>
                                <div>Time Management</div>
                            </div>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default lan