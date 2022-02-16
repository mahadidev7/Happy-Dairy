import React from 'react'
import "../style/Products.css"

const Products = () => {
  return (
    <>
        <div className='ProductSection' id='product'>
            <div className='container'>
                <div className='product__Group'>
                    <h1 className='section__Title'>
                        Our 
                        <span> Products</span> 
                    </h1>

                    <div className='productItems'>
                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/KX9F9Tx/HD-Vegan-Cheddar-block-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                            
                            </a>
                        </div>
                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/ws7CFC2/HD-Vegan-Cheddar-slices-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                            
                            </a>
                        </div>
                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/J7XnnrK/HD-Vegan-Gouda-block-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                            </a>
                        </div>

                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/fY7yF4R/HD-Vegan-Gouda-slices-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                           
                            </a> 
                        </div>
                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/BPkmjyj/HD-Vegan-Mozzarella-block-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                            </a>
                        </div>
                        <div className='product__item'>
                            <a href='./'>
                                <div className='product__item_Img'>
                                    <img src='https://i.ibb.co/MpdtMSZ/HD-Vegan-Mozzarella-slices-200g.png'  alt='product'/>
                                </div>
                                <h3 className='plain_text .font-medium'>HD Veganstyle - Cheddar block 200g</h3>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Products