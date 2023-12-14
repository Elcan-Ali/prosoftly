import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';




function ContactBox({ img, title, value }) {


    return (
        <div data-aos="fade-up" data-aos-delay={150} className='w-full md:w-[calc((100%-60px)/2)] pb-[30px] lg:w-[calc((100%-120px)/4)] text-center flex-col flex justify-center items-center'>
            <div className='bg-green w-[48px] h-[48px] flex-center rounded-full'>
                <img src={img} alt="img" />
            </div>
            <h3 className='text-[30px] font-bold'>{title}</h3>
            {
                value !== "social"
                    ? <p className='text-[20px] font-medium'>{value}</p>
                    : <div className='flex gap-[32px] pt-[6px]  items-center'>
                        <Link to="https://www.facebook.com/" target='_blank' className='w-1/4 '>
                            <FaFacebookF size={20} />
                        </Link>
                        <Link to="https://www.linkedin.com/feed/" target='_blank' className='w-1/4 '>
                            <FaInstagram size={20} />
                        </Link>
                        <Link to="https://www.instagram.com/" target='_blank' className='w-1/4 '>
                            <FaTwitter size={20} />
                        </Link>
                        <Link to="https://www.linkedin.com/feed/" target='_blank' className='w-1/4 '>
                            <FaLinkedin size={20} />
                        </Link>
                    </div>
            }
        </div>
    )
}

export default ContactBox