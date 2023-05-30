import React from 'react'
import Data from '../data/Data';
import wallet from '../../assets/images/wallet.png'
import invite from '../../assets/images/invite.png'
import coupon from '../../assets/images/coupon.png'
import rupee from '../../assets/images/rupee.png'
import discount from '../../assets/images/discount.png'

import './referalInfo.css'

const ReferalInfo = () => {
    const data = [
        {
          id: 1,
          img: invite,
          title: "Invite your Friends",
          content: "Share the link tutedude.com with your friends",
        },
        {
          id: 2,
          img: coupon,
          title: "Friend purchases any course",
          content: "Using your REFERRAL CODE in the payments page",
        },
        {
          id: 3,
          img: rupee,
          title: "You get ₹ 200 as referral money",
          content: "On total purchase the friend makes, into your wallet",
        },
        {
          id: 4,
          img: discount,
          title: "Your Friend gets ₹ 200 Off ",
          content:
            "On his overall fee on successful purchase using your referral code ",
        },
        {
          id: 5,
          img: wallet,
          title: "Transfer money from wallet",
          content:
            "When the wallet balance reaches ₹200 or more, you can withdraw it",
        },
      ];
  return (
    <div className='referal-info'>
        <div className='heading'>How does it work ?</div>
        <div className='datas'>
            {data.map((item)=>{
                return <Data img = {item.img} title = {item.title} content={item.content}/>
            })}
        </div>
        <div className='bottom-text'>
          <div>Friends Who Enrolled</div>
          <div>Terms & Conditions</div>
        </div>
        
    </div>
  )
}

export default ReferalInfo