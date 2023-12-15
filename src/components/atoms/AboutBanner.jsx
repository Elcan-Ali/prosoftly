import React from 'react'
import Img1 from "../../../public/img/about-img1.png"
import Img2 from "../../../public/img/about-img2.png"
import { useTranslation } from 'react-i18next'


function AboutBanner() {

    const { t } = useTranslation()

    return (
        <div  className='bg-[#000]  py-[70px]  text-[#fff] rounded-[40px] md:rounded-[70px]'>
            <div className='container  flex-wrap gap-y-[50px] gap-x-[100px] flex justify-between '>
                <div className='shrink-0 w-full lg:w-[calc((100%-100px)/2-30px)]'>
                    <div data-aos="fade-right" className='flex  gap-[10px] mb-[16px] items-center'>
                        <hr className='about-line border-0 w-[60px] h-[4px] ' />
                        <h4 className='flex items-center gap-[10px]'><p>{t("main-page")}</p>  —  <p>{t("about")}</p></h4>
                    </div>
                    <h3 data-aos="fade-right" data-aos-delay={20} className='lg:whitespace-nowrap text-green mb-[30px] text-[28px] lg:text-[38px] xl:text-[48px] font-bold'>
                        <p className='leading-[1] '>{t("about-banner-title-part1")}</p>
                        <p className='leading-[1]'>{t("about-banner-title-part2")}</p>
                    </h3>
                    <p data-aos-delay={50} data-aos="fade-right" >{t("about-banner-text")}</p>
                </div>
                <div className=' w-full md:w-[500px]   mx-auto lg:w-[calc((100%-100px)/2)] min-h-[30vh] sm:min-h-[50vh] lg:min-h-[0]  relative'>
                    <img data-aos="fade-left" data-aos-duration={750} className='absolute w-[62%] lg:max-h-[430px] object-cover rounded-[5px] right-0' src={Img1} alt="about-img" />
                    <img data-aos="fade-up" data-aos-duration={750} className='absolute w-[45%] left-[5%]  top-[53%]' src={Img2} alt="about-img" />
                </div>
            </div>
        </div>
    )
}

export default AboutBanner