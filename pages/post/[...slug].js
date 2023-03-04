import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  // console.log('pid',slug)
  // const NewsData = useSelector(state => state.newsdata)
  // const ProductFiler = useMemo(() => NewsData.find(e => e.productId == slug.at(0)), [slug])

  const DynamicHeader = dynamic(() => import(`../../src/components/${slug.at(0)}/${slug.at(1)}/${slug.at(2)}`), {
    suspense: true,
  })
  
  // useEffect(()=>{
  //     console.log('re render')
  // })

  // console.log('productImage',slug.at(0))
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>
  )
}

export default Post