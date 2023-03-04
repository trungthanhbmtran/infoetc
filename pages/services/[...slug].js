import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LayOut from '../../src/components/layout'
import { Servicesdata } from '../../data/Servicesdata'
import Card from '../../src/components/Container/Card'
import { Container, Grid } from '@mui/material'
import WrapperBoxPage from '../../src/components/Container/WrapperBoxPage'


const Service = () => {
    const router = useRouter()
    const { slug } = router.query

    const ServiceFiler = useMemo(() => Servicesdata.find(e => e.id == slug), [slug])

    //   console.log('Service',ServiceFiler)
    return (
        // <LayOut>
        //     <Container maxWidth="lg" sx={{ p : 5}}>
        //         <Grid 
        //             container
        //             justifyContent="center"
        //             alignItems="center" 
        //             spacing={2}>
        //             {ServiceFiler.subcontent.map(e =>
        //                 <Grid  key={e.subid} item >
        //                     <Card
        //                         path={`/post/Services/${ServiceFiler.group}/${e.subid}`}
        //                         PathImg={e.imagePath}
        //                         description={e.Description}
        //                         time={e.time}
        //                     />
        //                 </Grid>
        //             )}
        //         </Grid>
        //     </Container>
        // </LayOut>
        <WrapperBoxPage tittle={ServiceFiler.title} description={ServiceFiler.description}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                {ServiceFiler.subcontent.map(e =>
                    <Grid key={e.subid} item >
                        <Card
                            path={`/post/Services/${ServiceFiler.group}/${e.subid}`}
                            PathImg={e.imagePath}
                            description={e.Description}
                            time={e.time}
                        />
                    </Grid>
                )}
            </Grid>
        </WrapperBoxPage>
    )
}

export default Service