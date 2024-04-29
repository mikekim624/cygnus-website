import { useMemo } from 'react'
import SEO from '@/components/seo'
import ProductDetail from '@/components/products/terminals/product-detail'
import valorpay_data from '@/data/products/terminals/valorpay=data'
import pax_data from '@/data/products/terminals/pax-data'
import nmi_data from '@/data/products/terminals/nmi-data'
import firstdata_data from '@/data/products/terminals/firstdata-data'
import dejavoo_data from '@/data/products/terminals/dejavoo-data'
import Wrapper from '@/layout/wrapper'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import { useRouter } from 'next/router'

const ProductDetails = () => {
    const router = useRouter()

    const mergedProducts = useMemo(() => {
        return {
            1: [...pax_data],
            2: [...dejavoo_data],
            3: [...firstdata_data],
            4: [...nmi_data],
            5: [...valorpay_data],
        }
    }, [])

    const terminalId = useMemo(() => {
        return Number(router.query.terminal)
    }, [router.query.terminal])

    const productId = useMemo(() => {
        return Number(router.query.product)
    }, [router.query.product])

    const productDetail = useMemo(() => {
        if (!terminalId) return undefined
        const terminal = mergedProducts[terminalId]
        return terminal.filter((item) => {
            if (item.id === productId) {
                return true
            } else {
                return false
            }
        })[0]
    }, [terminalId, productId, mergedProducts])

    return (
        <>
            <Wrapper>
                <SEO pageTitle="PAX" />
                <Header />
                {productDetail && <ProductDetail item={productDetail} />}
                <Footer />
            </Wrapper>
        </>
    )
}

export default ProductDetails
