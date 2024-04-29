import Terminals from '@/components/products/terminals'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Terminals" />
            <Terminals firstSelected={true} />
        </Wrapper>
    )
}

export default index
