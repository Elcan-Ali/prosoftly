import { Skeleton } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';




function ContactBox({ img, title, value, settings, loading }) {


    return (
        <div data-aos="fade-up" data-aos-delay={150} className='w-full md:w-[calc((100%-60px)/2)] pb-[30px] lg:w-[calc((100%-120px)/4)] text-center flex-col flex justify-center items-center'>
            <div className='bg-green w-[48px] h-[48px] flex-center rounded-full'>
                <img src={img} alt="img" />
            </div>
            <h3 className='text-[30px] font-bold'>{title}</h3>
            {

                (value !== "social" && loading)
                    ? <div className='pt-[6px] w-full flex-center'><Skeleton variant='rounded' width={"70%"} height={"28    px"} /></div>
                    : (value !== "social" && !loading)
                        ? <p className='text-[20px] font-medium'>{value}</p>
                        : <div className='flex gap-[32px] pt-[6px]  items-center'>
                            {
                                !loading ?
                                    <>
                                        <Link to={`${settings?.facebook_link}`} target='_blank' className='w-1/4 '>
                                            <FaFacebookF size={20} />
                                        </Link>
                                        <Link to={`${settings?.instagram_link}`} target='_blank' className='w-1/4 '>
                                            <FaInstagram size={20} />
                                        </Link>
                                        <Link to={`${settings?.twitter_link}`} target='_blank' className='w-1/4 '>
                                            <FaTwitter size={20} />
                                        </Link>
                                        <Link to={`${settings?.linkedin_link}`} target='_blank' className='w-1/4 '>
                                            <FaLinkedin size={20} />
                                        </Link>
                                    </> : Array.from({ length: 4 }).map(item => <Skeleton key={nanoid()} variant='avatar' className='rounded-full' width={"30px"} height={"30px"} />)
                            }
                        </div>
            }
        </div>
    )
}

export default ContactBox