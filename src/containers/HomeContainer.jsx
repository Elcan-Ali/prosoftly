import React from 'react'
import MainFirstSection from '../components/molecules/MainFirstSection'
import HomeLastSection from '../components/organisms/HomeLastSection'
import SectionProject from '../components/organisms/SectionProject'

function HomeContainer() {
    return (
        <>
            <MainFirstSection />
            <SectionProject />
            <HomeLastSection />
        </>
    )
}

export default HomeContainer