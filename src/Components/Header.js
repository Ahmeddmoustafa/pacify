import React from 'react';
import './Header.css'
import NavBar from './NavBar'
const Header = ()=>{
    return(
        <div>
            <div className='header ma0 '>
                <NavBar></NavBar>
                <h1 id='h-tit' className='pl5 white mt6 mb0 f-subheadline lh-title '>Get Premium free for 1 month</h1>
                <h2 className='pl5 white mt0'>Just EGP 49.99/month after. Cancel anytime.</h2>
                <div className='pl5'><button  id='pr-btn' className='white grow' >GET PREMIUM</button></div>
                <p className='pl5 f7 white'><span className='underline'>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium</p>
            </div>
        </div>
    )
}
export default Header