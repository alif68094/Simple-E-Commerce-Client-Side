import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    
        return (
            <div className=" flex flex-col md:flex-row mt-5 justify-around items-center ">

                <div className="flex items-center mr-5">
                    <img src="https://i.ibb.co/YB2BVxy/rsz-tv.png" alt="" />
                    <h1>TechVista</h1>
                </div>
             <div className="flex items-center">
             <nav className="flex justify-between items-center  py-6  px-5">
        
        
        <ul className="flex gap-5">
          <li className="text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
              }
            >
              Home
            </NavLink>

          </li>
          <li className="text-lg">
            <NavLink
              to="/galleries"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
              }
            >
              Add Product
            </NavLink>


          </li>
          <li className="text-lg">
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
              }
            >
              My Card
            </NavLink>


          </li>

          
          <li className="text-lg hidden md:contents">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
              }
            >
              Login
            </NavLink>


          </li>
          
        </ul>

      </nav>
      <div className="">

              <button className="btn"><Link>Sign Up</Link></button>

      </div>
             </div>
            </div>
          );
};

export default Navbar;