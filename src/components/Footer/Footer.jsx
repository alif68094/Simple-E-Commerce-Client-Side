import { GrMailOption } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            
            <div className="lg:flex gap-10 border-b-2 pb-2">
                <div className="lg:flex items-center gap-5">
                    <GrMailOption className="text-4xl"></GrMailOption>
                    <div>
                        <p className="font-semibold text-lg text-start">Subscribe To Our Newsletter</p>
                        <p>Get all the latest information on Events, Sales and Offers.</p>
                    </div>

                </div>
                <div className="lg:flex gap-3">
                <input type="text" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs" />
                <button className="mt-3 lg:mt-0 px-5 py-2 bg-[#129cb8] rounded text-lg text-white">Subscribe</button>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold">STAY CONNECTED</h1>
                <h2 className="text-lg">TechVista Ltd.</h2>
                <p className="text-[#129cb8]">contact@techvista.com</p>
                <p className="text-[#129cb8]">000 1111 2222</p>
            </div>
            
            <aside>
                <p>Copyright © 2023 - All right reserved by TechVista</p>
            </aside>
        </footer>
    );
};

export default Footer;