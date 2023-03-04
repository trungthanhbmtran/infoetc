import { Container,Box, Divider, Grid, Rating, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import LayOut from '../../src/components/layout'
import VerticalTabs from '../../src/components/Product/VerticalTabs'

const Product = () =>{
    const router = useRouter()
    const { slug } = router.query
    // console.log('pid',slug)
    const Product = useSelector(state=> state.product)
    const ProductFiler = useMemo(() => Product.find(e => e.productId == slug),[slug])
    
    // useEffect(()=>{
    //     console.log('re render')
    // })
    
    // console.log('productImage',ProductFiler)
    return (
        <LayOut>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{display : 'flex' , direction : 'rown' }}>
                            <VerticalTabs product={ProductFiler}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant='h6'> {ProductFiler.name}</Typography>
                            <Rating value={ProductFiler.rating} readOnly></Rating>
                            <Typography>{ProductFiler.cost} - {ProductFiler.total}</Typography>
                            <Typography variant=''>Đã bán: {ProductFiler.sales}</Typography>
                            <Divider />
                            <Typography variant=''>{ProductFiler.description}</Typography>
                            {/* <IncDec /> */}
                        </Stack>
                    </Grid>

                </Grid>
            </Container>
         </LayOut >
    )
}

export default Product