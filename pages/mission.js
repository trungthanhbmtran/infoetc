import WrapperBanner from "../src/components/Container/WrapperBanner"
import LayOut from "../src/components/layout"
import BussinessPhilosophy from "../src/components/Mission/BussinessPhilosophy"
import Vision from "../src/components/Mission/vision"

const Mission = () => {
    return (
        <LayOut>
            <WrapperBanner  path='/XXx/banner-trach-nhiem-xa-hoi-02.jpg'/>
            <Vision/>
            <BussinessPhilosophy />
        </LayOut>
    )
}

export default Mission