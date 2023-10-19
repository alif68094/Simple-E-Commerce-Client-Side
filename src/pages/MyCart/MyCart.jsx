
import CartCard from "../../components/CartCard/CartCard";
import { useLoaderData } from "react-router-dom";



const MyCart = () => {
    const cartProduct = useLoaderData()
    const { _id, name, image, price, description } = cartProduct;

    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-4/5 mx-auto mt-16 mb-16">
            {
                cartProduct.map( product => <CartCard key={product._id} product={product}></CartCard>
                    
                )
            }
        </div>
    );
};

export default MyCart;