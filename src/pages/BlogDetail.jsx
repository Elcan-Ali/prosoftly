import React, { useEffect } from 'react'
import BlogDetailContainer from '../containers/BlogDetailContainer'

function BlogDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <BlogDetailContainer />
    )
}

export default BlogDetail