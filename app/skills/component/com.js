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
          <div className={styles.topic_area}>
            <div className={styles.topic1}><span className={styles.topic1_child}>Computer</span></div>
            <div className={styles.topic2}><div className={styles.topic2_child}>Language</div></div>
          </div>
          <div className={styles.icon_area}>
            <div className={styles.icon}><span className={styles.tooltip_html}>HTML</span><AiOutlineHtml5 className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_css}>CSS</span><TbBrandCss3 className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_js}>JAVASCRIPT</span><BiLogoJavascript className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_ts}>TYPESCRIPT</span><BiLogoTypescript className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_php}>PHP</span><SiPhp className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_csharp}>C#</span><SiCsharp className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_java}>JAVA</span><BiLogoJava className={styles.icon_child}/></div>
          </div>
      </div>
      <div className={styles.frontend_background}>
          <div className={styles.topic_area}>
            <div className={styles.topic1}><div className={styles.topic1_child}>Frontend</div></div>
            <div className={styles.topic2}><div className={styles.topic2_child}>Frameworks</div></div>
          </div>
          <div className={styles.icon_area}>
          
          <div className={styles.icon}><span className={styles.tooltip_next}>NEXT.JS</span><SiNextdotjs className={styles.icon_child}/></div>
          <div className={styles.icon}><span className={styles.tooltip_react}>REACT.JS</span><BiLogoReact className={styles.icon_child}/></div>
          <div className={styles.icon}><span className={styles.tooltip_redux}>REDUX</span><BiLogoRedux className={styles.icon_child}/></div>
          <div className={styles.icon}><span className={styles.tooltip_bs}>BOOTSTRAP</span><SiBootstrap className={styles.icon_child}/></div>
          <div className={styles.icon}><span className={styles.tooltip_tw}>TAILWIND</span><BiLogoTailwindCss className={styles.icon_child}/></div>
          <div className={styles.icon}><span className={styles.tooltip_sass}>SASS</span><SiSass className={styles.icon_child}/></div>
           
          </div>
      </div>
      <div className={styles.backend_background}>
          <div className={styles.topic_area}>
            <div className={styles.topic1}><div className={styles.topic1_child}>Backend</div></div>
            <div className={styles.topic2}><div className={styles.topic2_child}>Frameworks</div></div>
          </div>
          <div className={styles.icon_area}>
            <div className={styles.icon}><span className={styles.tooltip_node}>NODE.JS</span><BiLogoNodejs className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_ex}>EXPRESS.JS</span><SiExpress className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_lv}>LARAVEL</span><SiLaravel className={styles.icon_child}/></div>
            <div className={styles.icon}><span className={styles.tooltip_net}>ASP.NET</span><SiDotnet className={styles.icon_child}/></div>
          
          </div>
      </div>
    </div>
    </>
  )
}

export default com