import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const { Component } = props
  const navigate = useNavigate()
  useEffect(() => {
    let Login = localStorage.getItem('user')
    if (!Login) {
      navigate("/")
    }
  })
  return (
    <div>
      <Component />
    </div>
  )
}
