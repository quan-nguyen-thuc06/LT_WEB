import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Sanpham from './sanpham/Sanpham'
import Lienhe from './lienhe/Lienhe';
import Dangnhap from './dangnhap/Hoso';
import EditItem from './EditItem'
import AddItem from './AddItem'
import HomeAdmin from "./HomeAdmin";
import ManageWebsite from "./ManageWebsite";
import ManageCustomer from "./ManageProduct";
import ManageUser from "./ManageUser"
import ProductPortfolio from "./ProductPortfolio"
import About from "./About"
import Hiring from "./Hiring"
import Tintuc from "./tintuc/Tintuc"
import Login from "./Login"
import Register from "./Register"
import ShoppingCarts from "./ShoppingCarts"
import ProductPortfolio from "./ProductPortfolio"
import Sanphamchitiet from "./sanpham/components/Sanphamchitiet";
export default function Routes(){
    return(
        <Router>
        <div>        
          <Switch>
            <Route exact path="/sanpham">
              <ProductPortfolio />
            </Route>
            <Route exact path="/tuyendung">
              <Hiring />
            </Route>
            <Route exact path="/lienhe">
              <Lienhe />
            </Route>
            <Route exact path="/dangnhap">
              <Dangnhap />
            </Route>
            <Route exact path="/tintuc">
              <Tintuc />
            </Route>
            <Route exact path="/chitietsanpham">
              <Sanphamchitiet />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/cart">
              <ShoppingCarts />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <ProductPortfolio />
            </Route>
            <Route exact path="/admin">
              <HomeAdmin />
            </Route>
            <Route exact path="/admin/website">
              <ManageWebsite />
            </Route>
            <Route exact path="/admin/product">
              <ManageCustomer />
            </Route>
            <Route exact path="/admin/user">
              <ManageUser />
            </Route>
            <Route exact path="/admin/user">
              <ManageUser />
            </Route>
            <Route exact path="/admin/additem">
              <AddItem />
            </Route>
            <Route exact path="/admin/edititem">
              <EditItem />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}