import React from 'react'
import "./NewsLetter.css"

export default function NewsLetter() {
  return (
    <div className="newsLetter">
      
       <h1>Get Exclusive Ofeers On Your Email</h1>
       <p>Subscribe to our newsLetter and stay updated</p>
       <div>
       <input type="email" placeholder='Your Email id' />
       <button>Subscribe</button>
       </div>
    </div>
  )
}
