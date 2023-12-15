import React, { useEffect } from 'react'
import ProjectContainer from '../containers/ProjectContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import ProjectContainerTest from '../containers/ProjectContainerTest'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function Project() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0),
            dispatch(setHamburgerMenu(false))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t("projects")}</title>
            </Helmet>
            <ProjectContainer />
        </>
        // <ProjectContainerTest />
    )
}

export default Project