import Banner from '../Components/Banner';
import HotProducts from '../Components/HotProducts';
import HeaderAdmin from '../Components/HeaderAdmin';
import Footer from '../Components/Footer';
function HomeAdmin (){
    return (
      <div className="container">
          <Banner/>
          <HotProducts/>
      </div>
    );
  }
  
  export default HomeAdmin;