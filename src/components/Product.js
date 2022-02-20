import React from 'react'
import "../style/Products.css"

const Product = ({src, title}) => {
  return (
    <>
        <div className='product__item'>
            <a href='./'>
                <div className='product__item_Img'>
                    <img src={src}  alt={title}/>
                </div>

                <h3 className='plain_text .font-medium'>{title}</h3>
            </a>
        </div>
    </>
  )
}

export default Product