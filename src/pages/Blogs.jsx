import React, { useEffect } from 'react'
import BlogsContainer from '../containers/BlogsContainer'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

function Blogs() {
    const { t } = useTranslation()

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(setHamburgerMenu(false))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("blogs")}</title>
            </Helmet>
            <BlogsContainer />
        </>
    )
}

export default Blogs