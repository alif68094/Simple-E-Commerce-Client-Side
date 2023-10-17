import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Explore from "../../components/Explore/Explore";
import HotDeals from "../../components/HotDeals/HotDeals";
import PreBook from "../../components/PreBook/PreBook";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Explore></Explore>
            <HotDeals></HotDeals>
            <PreBook></PreBook>
        </div>
    );
};

export default Home;