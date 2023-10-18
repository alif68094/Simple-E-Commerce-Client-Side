import { Link } from "react-router-dom";


const ItemCard = ({ item }) => {
    const {_id, name, brand_name, type, rating, price, image, description } = item;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-2/5 ">
                <img src={image} alt={name} className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center h-3/5">
                <h2 className="card-title">{name}</h2>
                <h3 className="font-semibold">{brand_name}</h3>
                <p className="text-xs text-gray-500">{description}</p>
                <div className="flex gap-4 text-sm">
                    <p>Type: {type}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/details/${_id}`}><button className="px-3 py-1 bg-[#129cb8] rounded text-white">Details</button></Link>
                    <Link to={`/updateProduct/${_id}`}><button className="px-3 py-1 bg-[#129cb8] rounded text-white">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;