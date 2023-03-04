import Card from "../../Container/Card"
import { Container, Divider, Grid, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import WrapperInfo from "../../Container/WrapperInfo";
import WrapperPage from "../../Container/WapperPage";

const Workdone = () => {
    const NewsData = useSelector(state => state.newsdata)
    const LimitRecords = (data) => {
        let result = data.slice(-1)
        // console.log('result',result)
        return result
    }
    return (
        <WrapperPage tittle="TIN TỨC" maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {
                    NewsData.map(e =>
                        <Grid key={e.id} item >
                            <Typography variant="h6" align="center" >{e.title}</Typography>
                            {LimitRecords(e.subcontent).map(el =>
                                <Card
                                    path={`/post/News/${e.group}/${el.subid}`}
                                    key={el.subid}
                                    // group={e.group}
                                    // productId={el.subid}
                                    PathImg={el.imagePath}
                                    description={el.Description}
                                    subcontent={el.subcontent}
                                    time={el.time}
                                />
                            )}
                        </Grid>

                    )
                }
                {/* <Grid  item xs={12} md={4} lg={4}>
                        <Typography variant="h6" >Tittle</Typography>
                 </Grid>
                 <Grid  item xs={12} md={4} lg={4}>
                    <Typography>
                        1
                    </Typography>
                 </Grid>
                */}
            </Grid>
        </WrapperPage>
    )
}

export default Workdone