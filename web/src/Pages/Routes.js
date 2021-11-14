import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './home/Home';
import Sanpham from './sanpham/Sanpham'
import Tuyendung from './tuyendung/Tuyendung';
import Lienhe from './lienhe/Lienhe';
import Dangnhap from './dangnhap/Hoso';

export default function Routes(){
    return(
        <Router>
        <div>        
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sanpham">Sanpham</Link>
              </li>
              <li>
                <Link to="/tuyendung">Tuyendung</Link>
              </li>
              <li>
                <Link to="/lienhe">Lienhe</Link>
              </li>
              <li>
                <Link to="/dangnhap">Dangnhap</Link>
              </li>
            </ul>
        </nav>
          <Switch>
            <Route exact path="/sanpham">
              <Sanpham />
            </Route>
            <Route exact path="/tuyendung">
              <Tuyendung />
            </Route>
            <Route exact path="/lienhe">
              <Lienhe />
            </Route>
            <Route exact path="/dangnhap">
              <Dangnhap  />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}