// ProtectedRoute.js

import React from 'react';
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {

  function tokenCheck() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // открываем модальное окно авторизации
  React.useEffect(() => {
    if (!tokenCheck()) {
      props.setIsMiniOpen(true);
    }
  });

  console.log(props.loggedIn);

  return (
    <Route>
      {
        () => tokenCheck() ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
)}

export default ProtectedRoute;



