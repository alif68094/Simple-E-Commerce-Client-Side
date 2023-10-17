import { Link } from "react-router-dom";


const Explore = () => {
    return (
        <div className="flex items-center w-4/5 mx-auto gap-5">
            <div className="w-1/3 rounded">
            <Link><img  src="https://i.ibb.co/gRdfnRP/Single-Data-1-Main.webp" alt="" /></Link>
            </div>
            <div className="w-2/3 rounded">
            <Link><img  src="https://i.ibb.co/DwFCnnq/Honor-90.webp" alt="" /></Link>
            </div>
        </div>
    );
};

export default Explore;