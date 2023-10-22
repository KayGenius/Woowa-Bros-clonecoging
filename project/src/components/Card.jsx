import React from 'react'
import { Stack } from 'react-bootstrap';
import styles from './Card.module.css'


const Card = () => {
  return (
    <section className={styles.cardboxmain}>
          <div className={styles.cardboxtitle}>
            <h2>우아한형제들이 일하는 이야기</h2>
            <p>평범한 사람들이 모여 비범한 성과를 만들어 내도록</p>
          </div>
        <div className={styles.cardbox}>

        <Stack direction="horizontal" gap={3}>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
        </Stack>
        </div>
        <div className={styles.cardbox2}>
        <Stack direction="horizontal" gap={3}>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`}></div>
            <div className={styles.cardboxcontent}></div>
        </Stack>
        </div>
            
            
    </section>
  )
}

export default Card
