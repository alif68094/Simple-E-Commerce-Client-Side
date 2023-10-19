import Swal from "sweetalert2";


const CartCard = ({ product }) => {
    const { _id, name, image, price, description } = product;
    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                              )
                        }
                    })
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-white">{name}</h2>
                <p className="font-semibold text-xs mt-6">{description}</p>
                <p className="font-semibold text-lg mt-6 text-white">Price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-[#129cb8]">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;