

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/NTjZyYY/sample-1.jpg')] bg-no-repeat bg-cover w-full h-[150px] md:h-[250px] lg:h-[400px] mt-8 ">
           <div className="flex flex-col justify-center h-full md:space-y-5 lg:space-y-9">
           <p className=" text-xs lg:text-xl ml-5 lg:ml-36">Up To 50% Discount</p>
            <h1 className="lg:text-3xl ml-5 font-semibold lg:ml-36">Microsoft Surface <br />
                Book Laptop</h1>
            <button className="bg-[#129cb8] px-3 py-1 rounded text-white w-28 ml-5 lg:ml-36">Shop Now</button>
           </div>
        </div>
    );
};

export default Banner;