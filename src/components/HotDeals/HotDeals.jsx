import { Link } from "react-router-dom";


const HotDeals = () => {
    return (
        <div className="mt-16 mb-16">
            <h1 className="text-center text-2xl mb-16">🔥 HOT DEAL OF THE DAY 🔥</h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-5 w-4/5 mx-auto">
                
                <div className="flex items-center shadow-2xl bg-white w-full md:w-1/2  rounded-xl">
                    
                 
                    <img className="w-1/3" src="https://i.ibb.co/gFFPfDM/JBL-CLIP4-card.webp" alt="" />
                    <div>
                        <p className="font-medium">JBL Clip 4 Portable Bluetooth Speaker</p>
                        <p>$550</p>
                        <Link><button className="px-3 py-1 bg-[#129cb8] text-white rounded mt-5">Buy Now</button></Link>
                    </div>
                    
                    
                </div>
                
                
                <div className="flex items-center shadow-2xl bg-white  w-full md:w-1/2  rounded-xl">
                    <img className="w-1/3" src="https://i.ibb.co/TgmYGVV/i-Phone-14-Plus-Cart-Images.webp" alt="" />
                    <div>
                        <p className="font-medium">iPhone 14 plus</p>
                        <p>$900</p>
                        <Link><button className="px-3 py-1 bg-[#129cb8] text-white rounded mt-5">Buy Now</button></Link>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default HotDeals;