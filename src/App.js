
import React, { useEffect } from 'react';
import './css/App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { removeAll } from './hooks/hooks.localStorage';
import { useLocation } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import BasicRouting from './routing/hooks.basicRouting';
// import SecurityRouting from './routing/hooks.securityRouting';
// import ViewNavbar from './views/template/view.navbar';

function App() {

  //const user= useSelector((state)=> state.userReducer.user);
  const limit= useSelector((state)=>state?.userReducer?.limit);
  const dispatch= useDispatch();
  const location= useLocation();

  const logout= ()=>{
    dispatch({type: "logout"});
    removeAll();
  }

  useEffect(()=>{
    const now= moment();
    if(limit && now.diff(moment(limit), "M")>=1){
      logout();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, location])


  return (
    <div className="App">
      <div id="wrapper" className="fade-in">
        <BasicRouting />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
