import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Card from "../../../components/Card/Card";

const FavoriteItems = () => {
  const [wishlistProducts, setWishlistProducts] = useState(
    JSON.parse(localStorage.getItem("WISHLIST_PRODUCTS")) || []
  );

  return (
    <div>
      <div className="rounded-lg border border-gray-200  p-4   md:p-8">
        {wishlistProducts?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {wishlistProducts?.map((item) => (
           <Card item={item}/>
          ))}
          </div>
        ) : (
          <p>لا توجد داتا</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteItems;
