import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";


const BrandItems = () => {
    const [brandItem, setBrandItem] = useState([])
    const items = useLoaderData();
    const { name, brand_name, type, rating, price, image, description } = items;
    console.log(items);
    const brand = useParams();
    console.log(brand);
    useEffect(() => {
        const brandProduct = items.filter(item => item.brand_name === brand.brand_name)
        console.log(brandProduct);
        setBrandItem(brandProduct)
    }, [brand, items])
    console.log(brandItem);
    return (
        <div>
            { brandItem.length > 0?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-5 mt-16 mb-16">
                {
                    brandItem.map(item => <ItemCard key={item.name} item={item}></ItemCard>)
                }
            </div> : <h1 className="text-center font-semibold text-3xl mt-16 mb-16"> No Products Available Right Now</h1>

            }
        </div>
    );
};

export default BrandItems;