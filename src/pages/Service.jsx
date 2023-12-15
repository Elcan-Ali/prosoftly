import React, { useEffect } from 'react'
import ServiceContainer from '../containers/ServiceContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

function Service() {
    
    const { t } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0),
            dispatch(setHamburgerMenu(false))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("services")}</title>
            </Helmet>
        <ServiceContainer />
        </>
    )
}

export default Service