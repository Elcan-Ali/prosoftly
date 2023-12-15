import React, { useEffect, useState } from 'react'
import contactBoxImg1 from "../../public/img/contact-email.svg"
import contactBoxImg2 from "../../public/img/contact-phone.svg"
import contactBoxImg3 from "../../public/img/contact-location.svg"
import contactBoxImg4 from "../../public/img/contact-social.svg"
import ContactBox from '../components/atoms/ContactBox'
import { nanoid } from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getData } from '../service/getData'
function ContactContainer() {
    const { t } = useTranslation()

    const [settings, setSettings] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = await getData('contactinfo')
            setSettings(data.data[0])
            setLoading(false)
            console.log(data.data[0]);
        })()
    }, [])


    const contactItems = [
        { id: 1, img: contactBoxImg1, title: t("email"), link: `mailto:${settings?.email_addres}`, value: `${settings?.email_addres}` },
        { id: 2, img: contactBoxImg2, title: t("phone"), link: `tel:${settings?.phone}`, value: `${settings?.phone}` },
        { id: 3, img: contactBoxImg3, title: t("address"), link: "#map", value: `${settings?.addres}` },
        { id: 4, img: contactBoxImg4, title: t("social"), link: "social", value: "social", },
    ]



    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 data-aos="fade-up" className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><Link to={"/"}>{t("main-page")}</Link>  —  <p>{t("contact-us")}</p></h4>
                <h2 data-aos="fade-up" data-aos-delay={20} className='text-center font-bold xl:text-[48px] lg:text-[38px] text-[28px]'>
                    {t("contact-us")}
                </h2>
                <h4 data-aos="fade-up" data-aos-delay={80} className='text-center text-[16px] md:text-[20px] font-medium'>
                    {t("contact-us-title-text").split('\n').map(item => <p key={nanoid()}>{item}</p>)}
                </h4>
                <div className='container'>
                    <div className='flex pt-[60px] pb-[40px] flex-wrap items-start gap-[30px]'>
                        {contactItems.map(item => <ContactBox loading={loading} settings={settings} key={nanoid()} {...item} />)}
                    </div>
                </div>
                <div data-aos="fade-up" id='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.296585347811!2d49.83817618964113!3d40.38441151040233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9f915bf741%3A0x7e38e72dd9a2ba4c!2sVurgun%20Residence!5e0!3m2!1str!2saz!4v1701265919005!5m2!1str!2saz" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactContainer