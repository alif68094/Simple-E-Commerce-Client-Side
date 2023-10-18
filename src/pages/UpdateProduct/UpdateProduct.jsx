import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData()




    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const name = form.name.value;
        const updatedProduct = {_id, name, brand_name, type, rating, price, image, description}
        console.log(updatedProduct);

        fetch(`http://localhost:5000/product/${_id }`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
            form.reset()
        })
    }
    const {_id, name, brand_name, type, rating, price, image, description } = product;
    return (
        <div className="w-3/5 mx-auto mt-16 mb-16">
            <h1 className="text-center text-3xl font-semibold mb-7">Product Information</h1>
            <form onSubmit={handleUpdateProduct}>

                <div className="flex gap-5">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
                <div className="flex gap-5">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Product Type</span>
                        </label>
                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
                <div className="flex gap-5">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
                <div className="flex gap-5">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Image" className="input input-bordered w-full max-w-xs" />
                    </div>


                </div>
                <div className="flex justify-center">
                   <input className="px-3 py-1 bg-[#129cb8] text-white mt-10 rounded" type="submit" value="Update Products" />
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;