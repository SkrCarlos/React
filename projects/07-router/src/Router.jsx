/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { EVENTS } from './consts'

export function Router ({ routes = [], defaultComponent: DefaulComponent = () => <h1>404</h1> }) {
  
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(route => route.path === currentPath)?.component || DefaulComponent
  return  Page ? <Page /> : <DefaulComponent />
}