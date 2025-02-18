import React from 'react'
import"./item.css"
import { Link } from 'react-router-dom'

export default function Items({item}) {
  return (
    <div className='item'>
<Link to={`/product/${item.id}`}> <img onClick={window.scrollTo(0,0)} src={item.image} alt="" /></Link>
<p>{item.name}</p>
<div className="item-prices">
  <div className="item-price-new">
   ${item.new_price}
  </div>
  <div className="item-price-old">
  ${item.old_price}
  </div>
</div>
    </div>
  )
}
