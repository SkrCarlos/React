/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { BUTTON, EVENTS } from './consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento perzonalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {

  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTON.primary // Click izquierdo
    const isModifiedEvent = event.metaKey || event.altkey || event.ctrlKey || event.shiftKey // Click con modificador
    const isManageableEvent = target === undefined || target === '_self' // Click en la misma ventana

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    } 

  }

  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}