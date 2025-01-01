import React from 'react'
import GridOne from '../../assets/images/grid-1.webp'
import GridTwo from '../../assets/images/grid-2.webp'
import GridThree from '../../assets/images/grid-3.webp'
import GridFour from '../../assets/images/grid-4.webp'
import GridFive from '../../assets/images/grid-5.webp'
import GridSix from '../../assets/images/grid-6.webp'
import GridSeven from '../../assets/images/grid-7.webp'
import GridEight from '../../assets/images/grid-8.webp'
import GridNine from '../../assets/images/grid-9.webp'
import GridTen from '../../assets/images/grid-10.webp'
import GridEleven from '../../assets/images/grid-11.webp'
import GridTwelve from '../../assets/images/grid-12.webp'

const Product = () => {
  return (
    <div className='product-section d-flex justify-content-center align-items-center h-100'>
      <div className='product-container'>
        <div className='d-flex flex-column gap-3 flex-xl-row'>
          <div className='product-card'>
            <h2 className='product-heading'>Product</h2>
            <p className='product-description m-0'>
              Due to the confusing nature of tax, the lack of awareness of the
              tax deduction system and the complicated tax refund process, we
              have experienced exceptional demand from the public for our
              service. From release in 2015, our original tax product has
              achieved 60x growth, bringing in over £5m revenue in 2022.
            </p>
            <p className='product-description m-0 pt-2'>
              With over 8 years of industry experience, we have listened to our
              clients to evolve our app into a whole-of-market product that will
              also meet the needs of the tax return market as well as the tax
              refund market. The App is packed with all the features users need
              to meet the requirements of the upcoming switch to Making Tax
              Digital.
            </p>
            <p className='product-description m-0 pt-2'>
              Once we establish ourselves in the UK, we plan to expand into
              other territories to take advantage of the £500 billion global
              market.
            </p>
            <p className='product-description m-0 pt-2'>
              We have highlighted some of our key features that will be the
              cornerstone of our product launch in April 23.
            </p>
          </div>
          <div className='d-flex grid-container justify-content-center align-items-center w-100 h-100'>
            <div className='d-grid grid-box h-100'>
              <div className='grid-item-1 d-flex'>
                <img className='grid-small-image' src={GridOne} alt='GridOne' />
                <img className='grid-large-image' src={GridTwo} alt='GridTwo' />
              </div>
              <div className='grid-item-2 d-flex'>
                <img
                  className='grid-small-image'
                  src={GridThree}
                  alt='GridThree'
                />
                <img
                  className='grid-large-image'
                  src={GridFour}
                  alt='GridFour'
                />
              </div>
              <div className='grid-item-3 d-flex'>
                <img
                  className='grid-large-image'
                  src={GridFive}
                  alt='GridFive'
                />
                <img className='grid-small-image' src={GridSix} alt='GridSix' />
              </div>
              <div className='grid-item-4 d-flex'>
                <img
                  className='grid-large-image'
                  src={GridSeven}
                  alt='GridSeven'
                />
                <img
                  className='grid-small-image'
                  src={GridEight}
                  alt='GridEight'
                />
              </div>
              <div className='grid-item-5 d-flex'>
                <img
                  className='grid-small-image'
                  src={GridNine}
                  alt='GridNine'
                />
                <img className='grid-large-image' src={GridTen} alt='GridTen' />
              </div>
              <div className='grid-item-6 d-flex'>
                <img
                  className='grid-small-image'
                  src={GridEleven}
                  alt='GridEleven'
                />
                <img
                  className='grid-large-image'
                  src={GridTwelve}
                  alt='GridTwelve'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
