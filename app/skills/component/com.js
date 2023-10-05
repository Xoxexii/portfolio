import React from 'react'
import styles from './com.module.scss'
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoJavascript,BiLogoTypescript,BiLogoJava,BiLogoReact,BiLogoRedux,BiLogoTailwindCss,BiLogoNodejs } from "react-icons/bi";
import { SiPhp,SiCsharp,SiNextdotjs,SiBootstrap,SiExpress,SiLaravel,SiDotnet,SiSass } from "react-icons/si";


function com() {
  return (
    <>
  

    
    <div className={styles.com_background}>
      <div className={styles.comlan_background}>
        <div className={styles.comlan_background_element}>
          <div style={{textAlign:'center'}}>Computer</div><div style={{right:10,position:'absolute'}}>Language</div>
        </div>
        <div className={styles.comlan_background_element}>
          <div className={styles.child}>
            <AiOutlineHtml5 className={styles.child_icon}/>
            <span className={styles.tooltip_html}>HTML</span>
          </div>
          <div className={styles.child}>
            <TbBrandCss3 className={styles.child_icon}/>
            <span className={styles.tooltip_css}>CSS</span>
          </div>
          <div className={styles.child}>
            <BiLogoJavascript className={styles.child_icon}/>
            <span className={styles.tooltip_js}>JAVASCRIPT</span>
          </div>
          <div className={styles.child}>
            <BiLogoTypescript className={styles.child_icon}/>
            <span className={styles.tooltip_ts}>TYPESCRIPT</span>
          </div>
          <div className={styles.child}>
            <SiPhp className={styles.child_icon}/>
            <span className={styles.tooltip_php}>PHP</span>
          </div>
          <div className={styles.child}>
            <SiCsharp className={styles.child_icon}/>
            <span className={styles.tooltip_cs}>C#</span>
          </div>
          <div className={styles.child}>
            <BiLogoJava className={styles.child_icon}/>
            <span className={styles.tooltip_java}>JAVA</span>
          </div>
        </div>
      </div>
      <div className={styles.front_background}>
        <div className={styles.front_background_element}>
          <div style={{textAlign:'center'}}>Frontend</div><div style={{right:10,position:'absolute'}}>Framework</div>
        </div>
        <div className={styles.front_background_element}>
        <div className={styles.child}>
            <SiNextdotjs className={styles.child_icon}/>
            <span className={styles.tooltip_next}>NEXT.JS</span>
          </div>
          <div className={styles.child}>
            <BiLogoReact className={styles.child_icon}/>
            <span className={styles.tooltip_react}>REACT.JS</span>
          </div>
          <div className={styles.child}>
            <BiLogoRedux className={styles.child_icon}/>
            <span className={styles.tooltip_redux}>REDUX</span>
          </div>
          <div className={styles.child}>
            <SiBootstrap className={styles.child_icon}/>
            <span className={styles.tooltip_bs}>BOOTSTRAP</span>
          </div>
          <div className={styles.child}>
            <BiLogoTailwindCss className={styles.child_icon}/>
            <span className={styles.tooltip_tail}>TAILWIND</span>
          </div>
          <div className={styles.child}>
            <SiSass className={styles.child_icon}/>
            <span className={styles.tooltip_sass}>SASS</span>
          </div>
        </div>
      </div>
      <div className={styles.back_background}>
        <div className={styles.back_background_element}>
          <div style={{textAlign:'center'}}>Backend</div><div style={{right:10,position:'absolute'}}>Framework</div>
        </div>
        <div className={styles.back_background_element}>
        <div className={styles.child}>
            <BiLogoNodejs className={styles.child_icon}/>
            <span className={styles.tooltip_node}>NODE.JS</span>
          </div>
          <div className={styles.child}>
            <SiExpress className={styles.child_icon}/>
            <span className={styles.tooltip_express}>EXPRESS.JS</span>
          </div>
          <div className={styles.child}>
            <SiLaravel className={styles.child_icon}/>
            <span className={styles.tooltip_laravel}>LARAVEL</span>
          </div>
          <div className={styles.child}>
            <SiDotnet className={styles.child_icon}/>
            <span className={styles.tooltip_net}>ASP.NET</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default com