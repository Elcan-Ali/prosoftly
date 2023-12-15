import React, { useEffect } from 'react'

import HomeContainer from '../containers/HomeContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
function Home() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <>
            <Helmet>
                <title>Prosofly</title>
            </Helmet>
            <HomeContainer />
        </>
    )
}

export default Home