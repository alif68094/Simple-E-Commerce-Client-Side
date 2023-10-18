import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("ABC"))
      .catch(error => console.log(error))
  }

  return (
    <div className=" flex flex-col md:flex-row mt-5 justify-around items-center ">

      <div className="flex items-center mr-5">
        <img src="https://i.ibb.co/YB2BVxy/rsz-tv.png" alt="" />
        <h1>TechVista</h1>
      </div>
      <div className="flex items-center">
        <nav className="flex justify-between items-center  md:py-6  md:px-5">


          <ul className="flex gap-5">
            <li className="text-sm md:text-lg">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
                }
              >
                Home
              </NavLink>

            </li>
            <li className="text-sm md:text-lg">
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
                }
              >
                Add Product
              </NavLink>


            </li>
            <li className="text-sm md:text-lg">
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
                }
              >
                My Cart
              </NavLink>


            </li>


            <li className="text-sm md:text-lg">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
                }
              >
                Login
              </NavLink>


            </li>
            <li className="text-sm md:text-lg hidden md:contents">
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
                }
              >
                Blogs
              </NavLink>


            </li>
            {/* <li className="text-sm md:text-lg">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600 font-bold" : ""
              }
            >
              Sign Up
            </NavLink>


          </li> */}

          </ul>

        </nav>
        <div className="">

          {
            user ? <Link><button onClick={handleLogOut} className="px-3 py-2 bg-[#129cb8] rounded text-white">Log Out</button></Link> :
              <Link to="/register"><button onClick={handleLogOut} className="px-3 py-2 bg-[#129cb8] rounded text-white">Sign Up</button></Link>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;