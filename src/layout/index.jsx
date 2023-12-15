import React, { useEffect } from 'react'
import Header from '../components/molecules/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/molecules/Footer'
import ApplyModalWrapper from '../components/organisms/ApplyModalWrapper'
import { useSelector } from 'react-redux'
import { layoutSlice } from '../store/slices/layoutSlice'
import HamburgerMenu from '../components/molecules/HamburgerMenu'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next'

function MainLayout() {
    const { applyModal, hamburgerMenu } = useSelector(store => store[layoutSlice.name])
    const { i18n } = useTranslation()

    useEffect(() => {
        Aos.init();
        // const control = localStorage.hasOwnProperty('language')
        // if (control) i18n.changeLanguage(localStorage.getItem("language"));
    }, []);

    useEffect(() => {
        document.body.style.overflowY = (applyModal || hamburgerMenu) ? "hidden" : "auto"
    }, [applyModal, hamburgerMenu])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ApplyModalWrapper />
            <HamburgerMenu />

        </>
    )
}

export default MainLayout