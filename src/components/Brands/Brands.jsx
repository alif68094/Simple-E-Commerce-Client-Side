import { useEffect, useState } from "react";
import BrandCart from "../Brandcart/BrandCart";

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('/brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    console.log(brands);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-4/5 mx-auto gap-3 mt-16 mb-16">
            {
                brands.map(brand => <BrandCart key={brand.id} brand={brand}></BrandCart>)
            }
        </div>
    );
};

export default Brands;