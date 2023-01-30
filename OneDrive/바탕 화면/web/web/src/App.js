import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';

import Signup from './components/Signup/Signup';
import Signup2 from './components/Signup/Signup2';
import Signup3 from './components/Signup/Signup3';
import Signup4 from './components/Signup/Signup4';
import Signup5 from './components/Signup/Signup5';
import Signup6 from './components/Signup/Signup6';

import FindId from './components/Find_ID/FindId';
import FindId_complete from './components/Find_ID/FindId_complete';

import ChangePassword from './components/Change_Password/ChangePassword';
import ChangePassword_complete from './components/Change_Password/ChangePassword_complete';

import LentalList from './components/Main_Lental/LentalList';

import MyLental from './components/Main_MyLental/MyLental';
import Tendious from './components/Main_MyLental/Tendious';
import Management from './components/Main_MyLental/Management';

import EditInfor from './components/Main_EditInfor/EditInfor';

import Repair_Request from './components/Repair_Request/Repair_Request';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lentalList" element={<LentalList />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/signup3" element={<Signup3 />} />
      <Route path="/signup4" element={<Signup4 />} />
      <Route path="/signup5" element={<Signup5 />} />
      <Route path="/signup6" element={<Signup6 />} />

      <Route path="/findid" element={<FindId />} />
      <Route path="/findid_complete" element={<FindId_complete />} />

      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/changepassword_complete" element={<ChangePassword_complete />} />

      <Route path="/mylental" element={<MyLental />} />
      <Route path="/tendious" element={<Tendious />} />
      <Route path="/management" element={<Management />} />
      <Route path="/editInfor" element={<EditInfor />} />
      <Route path="/repairRequest" element={<Repair_Request />} />
    </Routes>
  </BrowserRouter>
);

export default App;