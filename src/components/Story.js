import React from 'react'
import '../style/Story.css'
import Products from './Products'

const Story = () => {
  return (
    <>
        <div className='StorySection' id='story'>
            <div className='container'>
                <div className='StoryGroup'>
                    <img src='https://i.ibb.co/G7H0Xvh/vegan-cheese.png' alt='story header' className='story__header'/>

                    <img src='https://i.ibb.co/B4ZKnBG/vegan-cheese-title.png' alt='story Section Title' className='story__Title__Img'/>
                    <p className='plain_text'>
                    We love cheese. The real thing. Creamy and full of flavour. All types and shapes. But we also love flowers, birds and bees. And all other precious life that surrounds us. We care for the planet and want to make sure we pass it on in great shape for generations to come. All this comes together in Happy Dairy. Enjoy our new label of nature-friendly and seriously tasty cheese.
                    </p>
                </div>
            </div>

            {/* Our Products */}
            <Products />
        </div>

        
      
      {/* Mission */}
    </>
  )
}

export default Story