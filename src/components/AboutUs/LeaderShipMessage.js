import { Grid, Typography, Box, Container } from "@mui/material"
import Image from "next/image"
import WrapperPage from "../Container/WapperPage"

const LeaderShipMessage = () => {
    return (
        <WrapperPage tittle="TỔNG QUAN CÔNG TY" maxWidth="lg">
            <Grid container spacing={2}  >
                <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    xs
                    md
                >
                    <Image
                        src="/Aboutus/Enscape_2022-06-01-21-28-54.png"
                        width={500}
                        height={400}
                    ></Image>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    md={6}
                    spacing={2}>
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
                {/* <Grid container item xs={12} md={4} lg={4}>
                    <Grid item xs={12}>
                        <Typography color="blue">Liên hệ :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} color="red">
                        <Typography>VPĐD tại Tây Nguyên:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} paddingLeft={3}>
                        <Typography>+84-262-3 97.71.71
                        </Typography>
                    </Grid>
                    <Grid item xs={12} paddingLeft={3}>
                        <Typography>+84-968.17.47.47/+84-905.174.001
                        </Typography>
                    </Grid>
                    <Grid item xs={12} color="red">
                        <Typography>VPĐD tại TP. Quảng Ngãi:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} paddingLeft={3}>
                        <Typography>+84-942.503.822
                        </Typography>
                    </Grid>
                    <Grid item xs={12} paddingLeft={3}>
                        <Typography color="blue">vietnam.etc.ltd@gmail.com
                        </Typography>
                    </Grid>
                </Grid> */}
                {/* <Typography>Tên đầy đủ:	CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM</Typography>
                        <Typography>Tên tiếng anh :	VIET NAM ELECTROMECHANICAL TESTING JOINT STOCK COMPANY</Typography>
                        <Typography>Tên viết tắt :	VN.ETC</Typography>
                        <Typography>Mã số thuế : 6001706254</Typography>
                        <Typography>Trụ sở chính :	Số 22 Trần Hữu Dực, tổ 5, Phường Tân Lợi, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk, Việt Nam
                        </Typography>
                        <Typography>Điện thoại:	+84-262-3 97.71.71
                        </Typography>
                        <Typography>Hotline : <br></br>	+84-968.17.47.47 <br></br>+84-905.174.001
                        </Typography>
                        <Typography>Văn phòng đại diện tại Quảng Ngãi :	303 Phan Đình Phùng, P. Chánh Lộ, TP. Quảng Ngãi, T. Quảng Ngãi
                        </Typography>
                        <Typography>Điện thoại:	+84-942.503.822
                        </Typography>
                        <Typography>Website: vietnametc.com
                        </Typography>
                        <Typography>Email:	vietnam.etc.ltd@gmail.com
                        </Typography> */}


            </Grid>
        </WrapperPage>
    )
}

export default LeaderShipMessage