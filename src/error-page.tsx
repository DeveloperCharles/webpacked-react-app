import React from 'react'
import { useRouteError } from 'react-router-dom'

type RouteError = {
  statusText?: string,
  message?: string,
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError | null
  console.log(error)

  return (
    <div>
      <h1>STH went wrong, please check the route...</h1>
      <p>
        <i>{ error?.statusText || error?.message }</i>
      </p>
    </div>
  )
}
