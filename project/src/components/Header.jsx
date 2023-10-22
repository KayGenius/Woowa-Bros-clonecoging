import React, { useState,useEffect,useRef } from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom';

const Header = () => {

const headerref=useRef()
const [tab,setTab] = useState(0)

const hidden = "transform:translateY(-100%);transition-duration:1s"
const appear = "transform:translateY(0%);transition-duration:0.5s"

const [position, setPosition] = useState(0);

function onScroll() {
  setPosition(window.scrollY);
}
useEffect(() => {
  window.addEventListener("scroll", onScroll);
  if(position > 1000){
     headerref.current.style=hidden
  }else if(position<1000){
    headerref.current.style=appear
  }
}, [position]);  


  function headerOver1 (){
    console.log(tab)
    if(tab == 1){
      return(
      <div  className={styles.headerover1}>
        <div className={styles.headerovercontent}>
          <Link>헤더 오버</Link>
          <Link>드디어</Link>
          <Link>됐다</Link>
        </div>
      </div>
      )}
    else if(tab == 2){
      return(
        <div  className={styles.headerover1}>
        <div className={styles.headerovercontent}>
          <Link>회사소개</Link>
          <Link>애네들</Link>
          <Link>js 잘했네...</Link>
        </div>
      </div>
      
        )}
    else if(tab == 3){
      return(
        <div  className={styles.headerover1}>
        <div className={styles.headerovercontent}>
          <Link>헤더 오버</Link>
          <Link>드디어</Link>
          <Link>됐다</Link>
        </div>
      </div>
      
        )}
    else if(tab == 4){return(
      <div  className={styles.headerover1}>
      <div className={styles.headerovercontent}>
        <Link to='/news'>보도자료</Link>
        <Link>검색</Link>
       
      </div>
    </div>
      
      )}
  }

  return (
    <div className={`${styles.header}`} ref={headerref} onMouseLeave={()=>setTab(0)}>           
        <h1 className={styles.headerleft}>
          <Link to='/'>  
             <img className={styles.headerlogo} src='https://www.beautifulstore.org/wp-content/uploads/2022/09/%EC%A3%BC%EC%9A%B0%EC%95%84%ED%95%9C%ED%98%95%EC%A0%9C%EB%93%A4-CI.png'></img>
          </Link>
        </h1>
     

        <div className={styles.headermiddle} >
          <Link onMouseEnter={()=>setTab(1)} className={styles.headermiddletab}>서비스</Link>      
          <Link onMouseEnter={()=>setTab(2)}  className={styles.headermiddletab}>회사소개</Link>
          <Link onMouseEnter={()=>setTab(3)} className={styles.headermiddletab}>함께가치</Link>
          <Link onMouseEnter={()=>setTab(4)}   className={styles.headermiddletab}>뉴스룸</Link>      
          {headerOver1()}          
        </div>
        
        <div className={styles.headerright}>
            <span>로그인</span>
            <span>회원가입</span>
        </div>

    </div>
  )
}




export default Header