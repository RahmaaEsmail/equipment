import Card from "../../components/Card/Card";
import HomeAdvertisements from "../../components/HomePage/HomeAdvertisements/HomeAdvertisements";
import HomeBanner from "../../components/HomePage/HomeBanner/HomeBanner";
import HomeBrands from "../../components/HomePage/HomeBrands/HomeBrands";
import HomeCategories from "../../components/HomePage/HomeCategories/HomeCategories";
import HomeHealthyEating from "../../components/HomePage/HomeHealthyEating/HomeHealthyEating";
import HomeProducts from "../../components/HomePage/HomeProducts/HomeProducts";
import HomeStatistics from "../../components/HomePage/HomeStatistics/HomeStatistics";
import HomeTools from "../../components/HomePage/HomeTools/HomeTools";
import TopSeller from "../../components/HomePage/TopSeller/TopSeller";
import HomeOffers from "../../components/HomePage/HomeOffers/HomeOffers";
import EquipmentCategories from "../../components/HomePage/EquipmentCategories/EquipmentCategories";
import FoodCategories from "../../components/HomePage/FoodCategories/FoodCategories";

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <div className="!mx-8">
        <EquipmentCategories />
        <FoodCategories />
        <HomeCategories />
        <HomeProducts />
        <HomeStatistics />
        <HomeAdvertisements />
        <HomeOffers />
        <HomeTools />
        <HomeHealthyEating />
        <TopSeller />
        <HomeBrands />
      </div>
    </div>
  );
}
