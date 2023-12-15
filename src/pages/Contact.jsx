import React, { useEffect } from 'react'
import ContactContainer from '../containers/ContactContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

function Contact() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const location = useLocation()


    useEffect(() => {

        if (location.hash == "#map") {
            document.querySelector("iframe").scrollIntoView()
        } else {
            window.scrollTo(0, 0);
            dispatch(setHamburgerMenu(false))
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("contact")}</title>
            </Helmet>
            <ContactContainer />
        </>
    )
}

export default Contact