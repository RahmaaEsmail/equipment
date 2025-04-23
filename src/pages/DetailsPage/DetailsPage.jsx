import MainProduct from "../../components/DetailsPage/MainProduct/MainProduct"
import ProductInfo from "../../components/DetailsPage/ProductInfo/ProductInfo"
import RelatedProducts from "../../components/DetailsPage/RelatedProducts/RelatedProducts"
import OtherProducts from "../../components/DetailsPage/OtherProducts/OtherProducts"
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import '../../sass/DetailsPage/DetailsPage.modules.css'
import { PRODUCT_DATA_2 } from "../../utils/productData"
import { useParams } from "react-router-dom";

export default function DetailsPage() {
      const { id } = useParams();
      const item = PRODUCT_DATA_2[id - 1]?.title
    const data = [
        {
            id:1,
            title:"الصفحه الرئيسية",
            route:"/",
        },
        {
            id:2,
            title:"المنتجات",
            route:"/products",
        },
        {
            id:3,
            title:item
        }
    ]
    return (
       <div className="!mx-8">
        <BreadCrumb  data={data}/>
         <div className="">
            <MainProduct />
            <ProductInfo />
            <RelatedProducts />
            <OtherProducts/>
        </div>
       </div>
    )
}
