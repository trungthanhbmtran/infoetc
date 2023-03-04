import { Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useSelector } from "react-redux"
import { Servicesdata } from '../../../../data/Servicesdata';
import WrapperPage from '../../Container/WapperPage';
import WrapperInfo from '../../Container/WrapperInfo';
import CarouselService from './Carousel';

const BoxProduct = () => {
    return (
            <WrapperPage tittle="CÁC DỰ ÁN ĐÃ TRIỂN KHAI">
            <Grid 
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}>
                {Servicesdata.map((e) =>
                    <Grid item key={e.id} xs={12} md={3} lg={3}>
                        <Typography variant='h6' align="center">{e.title}</Typography>
                            <CarouselService data={e.subcontent} />
                    </Grid>
                )}
            </Grid>
            </WrapperPage>
    )
}

export default BoxProduct