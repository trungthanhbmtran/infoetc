import LayOut from '../src/components/layout'
import styles from '../styles/Home.module.css'
import {  Stack } from '@mui/material'
import Carosel from '../src/lib/carousel'
import BoxProduct from '../src/components/Index/Product/BoxProduct'
import Info from '../src/components/Index/Info'
import Workdone from '../src/components/Index/Workdone'
import Brand from '../src/components/Index/Brand'
import Activities from '../src/components/Index/Activities'


export default function Home() {
  return (
    <LayOut>
      <Stack >
        <Carosel/>
        <BoxProduct/>
        <Workdone/>
        <Activities/>
        <Brand/>
        {/* <Info/> */}
      </Stack>
    </LayOut>
  )
}

// export async function getStaticProps() {
//   const store = initializeStore()
//   store.dispatch(serverRenderClock())
//   return {
//     props: {},
//   }
// }

