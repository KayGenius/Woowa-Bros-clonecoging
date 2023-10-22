import React from 'react'
import styles from './Notice.module.css'
const Notice = () => {
  return (
    <section className={styles.notice}>
      <div className={styles.noticebox}>
      <h2>빠르고 정확한 <br></br>우아한 형제들의 새소식</h2>
      <ul className={styles.noticecontent}>
        <li className={styles.noticelist}>
             <video muted='muted' autoplay='autoplay' loop>
                   <source src='https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4' type='video/mp4' />
            </video>
            <div className={styles.noticetitle}>
              <h3>우아한형제들, 소상공인 대상 '우아한 노무 해결사' 진행</h3>
              <p>"갑자기 잠적한 직원…급여는 어떻게?”</p>
              <p>23.10.12</p>
            </div>
        </li>
        <li className={styles.noticelist}>
             <video muted='muted' autoplay='autoplay' loop>
                   <source src='https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4' type='video/mp4' />
            </video>
            <div className={styles.noticetitle}>
              <h3>우아한형제들, 소상공인 대상 '우아한 노무 해결사' 진행</h3>
              <p>"갑자기 잠적한 직원…급여는 어떻게?”</p>
              <p>23.10.12</p>
            </div>
        </li>
        <li className={styles.noticelist}>
             <video muted='muted' autoplay='autoplay' loop>
                   <source src='https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4' type='video/mp4' />
            </video>
            <div className={styles.noticetitle}>
              <h3>우아한형제들, 소상공인 대상 '우아한 노무 해결사' 진행</h3>
              <p>"갑자기 잠적한 직원…급여는 어떻게?”</p>
              <p>23.10.12</p>
            </div>
        </li>
      </ul>


      </div>

      
    </section>
  )
}

export default Notice