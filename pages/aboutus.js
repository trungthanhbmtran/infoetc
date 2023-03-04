import Commit from "../src/components/AboutUs/commit"
import LeaderShipMessage from "../src/components/AboutUs/LeaderShipMessage"
import TradeMark from "../src/components/AboutUs/trademark"
import WrapperBanner from "../src/components/Container/WrapperBanner"
import LayOut from "../src/components/layout"

const AboutUs = () => {
    return (
        <LayOut>
            <WrapperBanner path='/Aboutus/Enscape_2022-06-01-21-28-54.png' />
            <LeaderShipMessage />
            <Commit />
            <TradeMark />
        </LayOut>
    )
}

export default AboutUs