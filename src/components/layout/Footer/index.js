import { Container, Box, Grid, Stack, Typography } from "@mui/material"
import { Colors } from '../../../lib/theme'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
const Footer = () => {
    return (
        <Box sx={{
            background: Colors.background,
            // backgroundImage : "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)",
            // color: Colors.letter,
            p: { xs: 4, md: 10 },
            pt: 12,
            fontSize: { xs: '12px', md: '14px' }
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid container item xs={12} md={8} lg={8}>
                        <Grid item xs={12} md={3}>
                            <Typography >Tên đầy đủ:</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography>Tên tiếng anh :</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>VIET NAM ELECTROMECHANICAL TESTING JOINT STOCK COMPANY</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography>Tên viết tắt:</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>VN.ETC</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography>Mã số thuế:</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>6001706254</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography>Trụ sở chính :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>	Số 22 Trần Hữu Dực, tổ 5, Phường Tân Lợi, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk, Việt Nam
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography>VPĐD tại Quảng Ngãi:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography>303 Phan Đình Phùng, P. Chánh Lộ, TP. Quảng Ngãi, T. Quảng Ngãi
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={4} lg={4}>
                        <Grid item xs={12}>
                            <Typography color="blue">Liên hệ :
                            </Typography>
                        </Grid>
                        <Grid item xs={12} color="red">
                            <Typography>VPĐD tại Tây Nguyên:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} paddingLeft={3}>
                            <Typography><LocalPhoneOutlinedIcon/>+84-262-3 97.71.71
                            </Typography>
                        </Grid>
                        <Grid item xs={12}paddingLeft={3}>
                            <Typography><LocalPhoneOutlinedIcon/>+84-968.17.47.47/+84-905.174.001
                            </Typography>
                        </Grid>
                        <Grid item xs={12} color="red">
                            <Typography>VPĐD tại TP. Quảng Ngãi:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} paddingLeft={3}>
                            <Typography><LocalPhoneOutlinedIcon/>+84-942.503.822
                            </Typography>
                        </Grid>
                        <Grid item xs={12} paddingLeft={3}>
                            <Typography color="blue">  <EmailOutlinedIcon/>	vietnam.etc.ltd@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md lg>
                        3
                    </Grid> */}
                </Grid>
                {/* <Stack  
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
            </Stack> */}
            </Container>
        </Box>

    )
}

export default Footer