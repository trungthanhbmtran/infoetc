import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LayOut from '../../src/components/layout'
import { NewsData } from '../../data/NewsData'
import Card from '../../src/components/Container/Card'
import { Container, Grid } from '@mui/material'
import WrapperBoxPage from '../../src/components/Container/WrapperBoxPage'


const NewInfo = () => {
    const router = useRouter()
    const { slug } = router.query

    const NewsDataFilter = useMemo(() => NewsData.find(e => e.id == slug), [slug])

    //   console.log('Service',NewsDataFilter)
    return (
        <WrapperBoxPage tittle={"Thông tin tin tức"}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                {NewsDataFilter.subcontent.map(e =>
                    <Grid key={e.subid} item >
                        <Card
                            path={`/post/News/${NewsDataFilter.group}/${e.subid}`}
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

export default NewInfo