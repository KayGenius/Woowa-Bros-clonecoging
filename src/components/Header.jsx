import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      
        <h1 className='header--left'>
           <img className='header--logo' src='https://www.beautifulstore.org/wp-content/uploads/2022/09/%EC%A3%BC%EC%9A%B0%EC%95%84%ED%95%9C%ED%98%95%EC%A0%9C%EB%93%A4-CI.png'></img>
        </h1>
        <div className='header--middle'>
            <span>회사소개</span>
            <span>서비스</span>
            <span>함께가치</span>
            <span>뉴스룸</span>
           
        </div>
        <div className='header--right'>
            <span>로그인</span>
            <span>회원가입</span>
        </div>

    </div>
  )
}

export default Header