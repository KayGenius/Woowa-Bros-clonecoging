import React, { useState,useEffect, useRef } from 'react';
import styles from './News.module.css'
import axios from 'axios';
const News = () => {
    const [news,setNews] = useState([])
    const [search,setSearch] = useState('')
    const inputRef = useRef()



    useEffect(()=>{
      if(search !=''){
      axios.post('/v1/news/search',{input:search}).then((res)=>{return(console.log(res))}); 
      }else{console.log('실패')}
    },[search])

  return (
      <main>
        <section className={styles.newsSearch}>
            <h1>뉴스룸</h1>
            <form className={styles.newsSearchForm}>
            <input ref={inputRef} placeholder='내용을 입력해주세요'></input>
            <button type='submit' onClick={()=>{setSearch(inputRef.current.value)}}>보내기</button>
            </form>
        </section>
        <section className={styles.newsTab}>
            <div className={styles.newsTabBox}>
              <span>최신순</span>
              <span>정확도순</span>
              <span>인기순</span>
            </div>
        </section>
        <section className={styles.newsContent}>
          <h2>언론보도</h2>
          <ul>

            {news !=undefined? news.map((res,i)=>{return(
                                <li>
                                  <h3>{res.title}</h3>
                                  <p>{res.description}</p>
                                  <span>{res.pubDate}</span><span>날짜입력하는 칸</span>
                                </li>
            )

            }):null}

            <li></li>
            <li></li>
            <li></li>
            <li></li>
       
          </ul>

        </section>
      </main>
  )
}

export default News