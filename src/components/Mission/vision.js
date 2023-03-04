import { Grid, Typography, Box, Container, styled } from "@mui/material"
import Image from "next/image"
// import TittleContent from "../../ContainerComponents/tittlecontent";
import { BoxImageContent } from "../../styles/Banner";
import BoxContentHaveBrand from "../Container/BoxContentHaveBrand";
import WrapperPage from "../Container/WapperPage";


export const BoxContentTags = styled(Typography)(() => ({
     position : 'relative', 
     top : 60 ,
     textAlign : 'center',
     background : 'url(./XXx/bg-gia-tri-cot-loi.png)',
     backgroundRepeat :'no-repeat',
     backgroundPositionX : 'center',
     backgroundPositionY:'center'
}));


export const BoxContentInsign = styled(Box)(() => ({
    marginTop : 40,
    paddingTop : 40,
    paddingLeft : 20,
    transition: 'opacity 1s', 
    opacity: 1,
    minHeight : 200 ,
    border : 'solid' , 
    borderRadius : '20px 20px 20px 20px'
}));

const Vision = () => {
    return (
        <WrapperPage src="/XXx/bg-tamnhinsumenh.jpg" tittle="TẦM NHÌN VÀ SỨ MỆNH">
        <Container maxWidth="lg" >
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                padding={3}
            >
                <Grid item xs={12} md={4}
                >
                    <BoxContentHaveBrand tittle="Sứ Mệnh">
                        Đảm bảo tính an toàn và chất lượng trong công tác Kiểm định
                        <br></br>
                        – Hiệu chuẩn
                        <br></br>
                        – Thử nghiệm thiết bị điện cho các công trình Điện công nghiệp và dân dụng.
                    </BoxContentHaveBrand>
                </Grid>
                <Grid item xs={12} md={4}
                >
                    <BoxContentHaveBrand tittle="Tầm Nhìn">
                        Phát triển bền vững và trở thành tổ chức tư nhân đầu tư về dịch vụ Kiểm định
                        <br></br>
                        – Hiệu chuẩn
                        <br></br>
                        – Thử nghiệm thiết bị điện;
                        <br></br>
                        Công nghệ thông tin;
                        <br></br>
                        An toàn thông tin trên môi trường mạng.
                    </BoxContentHaveBrand>
                </Grid>
                <Grid item xs={12} md={4}
                >
                    <BoxContentHaveBrand tittle="Giá trị cốt lõi">
                        ◉ Chất lượng.
                        <br></br>
                        ◉ Chuyên nghiệp.
                        <br></br>
                        ◉ Đoàn kết.
                        <br></br>
                        ◉ Lợi ích của Khách hàng.
                        <br></br>
                        ◉ Trách nhiệm xã hội.
                        <br></br>
                        ◉ Phát triển bền vững.
                    </BoxContentHaveBrand>
                </Grid>
            </Grid>
        </Container>
        </WrapperPage>
    )
}

export default Vision