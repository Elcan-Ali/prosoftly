import React, { useEffect } from 'react'
import AboutContainer from '../containers/AboutContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'


function About() {

    const { t } = useTranslation()

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0),
            dispatch(setHamburgerMenu(false))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("about")}</title>
            </Helmet>
            <AboutContainer />
        </>
    )
}

export default About