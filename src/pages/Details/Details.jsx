// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const product = useLoaderData()

    // const [remainingProduct, setRemainingProduct] =useState(product)


    const { full_description, name, image, price, description } = product;
    console.log(product);
    const handleAddCart = event => {
        event.preventDefault()
        const form = event.target 
        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const cartProduct = {image, name, price, description}
        console.log(cartProduct);

        fetch('http://localhost:5000/cart', {
            method: 'Post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Added To Cart',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
            
        })

    }
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mt-16 mb-16">{name}</h1>
            <div className="flex flex-col lg:flex-row items-center">
                <img className="w-1/3 mx-auto" src={image} alt="" />
                <p className="text-sm w-2/4 mx-auto">{full_description}</p>
            </div>

            <form onSubmit={handleAddCart}>
            <div className="mt-16 mb-16 w-4/5 mx-auto bg-[#129cb8] text-center rounded">
                <input type="text" className="hidden" name="name" defaultValue={name} />
                <input type="text" className="hidden" name="image" defaultValue={image} />
                <input type="text" className="hidden" name="price" defaultValue={price} />
                <input type="text" className="hidden" name="description" defaultValue={description} />
               <input className=" bg-[#129cb8] text-white py-3 " type="submit" value="Add To Cart" />
            </div>
            </form>

        </div>
    );
};

export default Details;