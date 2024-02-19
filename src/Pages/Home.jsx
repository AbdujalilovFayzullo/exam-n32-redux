import React from 'react'
import Hero from '../assets/img/img1.svg'
import Hero2 from '../assets/img/img2.svg'
import Hero3 from '../assets/img/img3.svg'
import Hero4 from '../assets/img/Mask Group.png'
import Hero5 from '../assets/img/Food Image.png'
import Image1 from '../assets/img/Food Image (1).png'
import Image2 from '../assets/img/Food Image (2).png'
import Image3 from '../assets/img/Food Image (3).png'
import Image4 from '../assets/img/Food Image (4).png'
import Image5 from '../assets/img/1st.png'
import Image6 from '../assets/img/Purchase Illustration.png'
import Image7 from '../assets/img/Pic.png'
import Image8 from '../assets/img/divider.png'
import Image9 from '../assets/img/Mask Group (1).png'
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import './home.scss'
import { Navigate } from 'react-router-dom'


const Home = ({user}) => {

  if (!user) {
    return <Navigate to="/login" replace />;
  }


  return (
    <>
        <header className='mt-[150px]'>
          <div className="container flex justify-center">
           <div className='flex w-full justify-between flex-col items-center sm:flex-row sm:items-start'>
           <div className='w-full flex flex-col items-center gap-[5px] mt-[57px] sm:items-start sm:w-[403.91px] xl:w-[568px]'>
              <div className='w-full flex justify-center items-center gap-[12.33px] sm:justify-start sm:text-[#c4c2c2]'>
                <span className='w-[33.29px] h-0 border border-[#201F1F] sm:border-[#c4c2c2]'></span>
                <p className=' font-semibold text-[9.25px] leading-[11.1px] xl:text-[15px] xl:leading-[18px] xl:text-[#201F1F33 ]'>OVER 1000 USERS</p>
              </div>
              <div className=' w-full flex flex-col gap-[15.7px] items-center sm:items-start'>
                <h1 className=' sm:hidden text-[46.24px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods <br /> Over <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <h1 className='hidden sm:block text-[48.24px] xl:text-[70px] xl:leading-[90px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods All Over The <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <p className=' roundxl:leading-[28px] xl:text-[18px] xl:font-medium pp text-center text-[11.1px] leading-[17.26px] text-[#676767] sm:text-start sm:w-[354.84px] xl:w-[499px] sm:text-[12.8px]'>
                Eatly help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className='text-[#6155AE]'>$20 bonus</span>.
                </p>
              </div>
              <button className='mt-[36.3px] w-[125px] h-[47.24px] rounded-[9.94px] text-white font-medium text-[13.03px] bg-[#6C5FBC] xl:w-[159px]'>Get Started</button>
            </div>
            <img className=' inline-block w-[286.37px] h-[256.6px] sm:w-[429px] sm:h-[384.41px] xl:hidden mt-[119.34px] sm:mt-0' src={Hero} alt="alt" />
            <img className='hidden xl:inline-block' src={Hero2} alt="alt" />
           </div>
          </div>
        </header>
        <main>
          <section id='first' className='w-full pt-[99px] pb-[54.7px] mt-[91.81px] lg:mt-[147.47px]'>
            <div className="container">
            <div className='flex  flex-col items-center sm:flex-row w-full pl-[9px] pr-[9px] gap-[60px] sm:justify-around'>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>10K+</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0'></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>4M</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0 '></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>99.99%</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
            </div>
            </div>
          </section>
          <section className='w-full flex justify-center mt-[67px] border-b'>
            <div className="container">
              <div className='w-full flex flex-col items-center md:items-center md:flex-row md:justify-between'>
                  <div className=' order-1 md:order-2 md:w-[398.23px] lg:items-start lg:w-[559.71px]'>
                    <p className='text-[30px] text-center font-semibold leading-[34.23px] mb-[37px] lg:text-start lg:text-[50.92px] lg:leading-[58.2px]'>Premium <span className='text-[#6C5FBC]'>Quality</span> <br /> For Your Health</p>
                    <div className='flex mb-[16px]'>
                      <li className='lorem text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                    </div>
                    <div className='flex'>
                      <li className='lorem text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start mt-[35px]'>
                    <button className='w-[121.77px] flex items-center justify-center gap-[8.99px] text-[11.82px] font-medium leading-[14.78px] h-[41.24px] rounded-[9.61px] bg-[#6C5FBC] text-white lg:w-[186px] lg:h-[63px] lg:rounded-[14.68px] lg:text-[18.06px]'>Download <i class='bx bx-right-arrow-alt'></i></button>
                    </div>
                  </div>
                  <div className='w-full md:w-[216.18px] md:h-[433.07px] lg:w-[304px] lg:h-[609px] flex justify-center mt-[109.74px] order-2 md:order-1'>
                    <img src={Hero3} alt="alt" />
                  </div>
              </div>
            </div>
          </section>
          <section className='container'>
            <div className='mt-[60px]'>
                <img src={Hero4} alt="img" />
                <div className='flex justify-between items-center'>
                  <h2 className='text-[30px]'>The Chicken King</h2>
                  <p className='text'>24min • <FaStar className='icon' /> 4.8</p>
                  <FaBookmark  className='iconn'/>
                </div>
            </div>
          </section>
          <section className='container'>
            <div>
              <h1 className='titlee'>Our Top <span className='spann'>Dishes</span></h1>
              <div className='blockk'>
                <div className='box'>
                    <img src={Hero5} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
                <div className='box'>
                    <img className='h-[208px]' src={Image1} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
                <div className='box'>
                    <img className='h-[208px]' src={Image2} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
                <div className='box'>
                    <img src={Image3} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
                <div className='box'>
                    <img className='h-[208px]' src={Image4} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section className='container'>
                <div>
                  <div className='control'>
                    <div className='control__left'>
                      <h2 className='control__title'>Control <span className='control__span'>Purchases</span> Via Dashboard</h2>
                      <img src={Image5} alt="img" />
                      <img src={Image5} alt="img" />
                      <img src={Image5} alt="img" />
                    </div>
                    <div className='control__right'>
                      <img width={534} height={466} src={Image6} alt="img" />
                    </div>
                  </div>
                </div>
          </section>

          <section className='container'>
                  <div className='customer'>
                      <div className='customer__left'>
                        <div className='flex items-center gap-5'>
                            <img className='pl-5 pt-5' src={Image7} alt="img" />
                            <div>
                              <h3 className='pt-5'>Alexander R.</h3>
                              <p>01 Year With Us </p>
                            </div>
                        </div>
                        <p className='customer__text'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                        <div className='customer__icons'>
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                        </div>

                      </div>
                      <div className='customer__right'>
                            <div className='customer__block'>
                            <p className='customer__text'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                            <div className='customer__icons'>
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                            <FaStar className='customer__icon' />
                        </div>
                            </div>
                            <img src={Image8} alt="" />
                        </div>
                  </div>
          </section>

          <section className='container'>
                        <div className='last'>
                          <img src={Image9} alt="" />
                          <img className='last__img' src={Hero5} alt="img" />
                        </div>
          </section>
        </main>
    </>
  )
}

export default Home