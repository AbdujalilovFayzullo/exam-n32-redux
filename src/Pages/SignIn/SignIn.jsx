import React from 'react'
import { Navigate } from 'react-router-dom';

const SignIn = ({user}) => {

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>SignIn</div>
  )
}

export default SignIn