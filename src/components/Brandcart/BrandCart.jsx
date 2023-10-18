import { Link } from "react-router-dom";


const BrandCart = ({ brand }) => {
  const { brand_name, logo } = brand;
  return (
    <Link to={`/brand/${brand_name}`}>
      <div className="card bg-base-100 h-[200px] shadow-xl flex flex-col items-center">
        <figure className="px-10 pt-10 h-1/2">
          <img src={logo} alt="Shoes" className="rounded-xl h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>

        </div>
      </div>
    </Link>
  );
};

export default BrandCart;