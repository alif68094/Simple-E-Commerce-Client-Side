import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData()
    const { full_description, name, image } = product;
    console.log(product);
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mt-16 mb-16">{name}</h1>
            <div className="flex flex-col lg:flex-row items-center">
                <img className="w-1/3 mx-auto" src={image} alt="" />
                <p className="text-sm w-2/4 mx-auto">{full_description}</p>
            </div>

            <div className="mt-16 mb-16 w-4/5 mx-auto bg-[#129cb8] text-center rounded">
                <button className=" bg-[#129cb8] text-white py-3 ">Add To Cart</button>
            </div>

        </div>
    );
};

export default Details;