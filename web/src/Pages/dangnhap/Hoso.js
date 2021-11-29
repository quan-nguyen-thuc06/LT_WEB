import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Thongtincanhan from './components/thongtincanhan'
import Diachithanhtoan from './components/diachithanhtoan'
import Danhsachdonhang from './components/danhsachdonhang'
import Doimatkhau from './components/doimatkhau'

export default function Dangnhap() {
    return(
        <Router>
        <div>        
            <Route exact path="/thongtincanhan">
              <Thongtincanhan />
            </Route>
            <Route exact path="/diachithanhtoan">
              <Diachithanhtoan />
            </Route>
            <Route exact path="/doimatkhau">
              <Doimatkhau />
            </Route>
            <Route exact path="/danhsachdonhang">
              <Danhsachdonhang  />
            </Route>
            <Route exact path="/dangnhap">
              <Thongtincanhan />
            </Route>
        </div>
      </Router>
    );
}