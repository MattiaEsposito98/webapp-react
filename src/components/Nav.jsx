import { NavLink } from "react-router-dom"

export default function Nav() {

  const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ]
  return (
    <>
      <ul>
        {menu.map((item, i) => {
          return <li key={i}>
            <NavLink to={item.path} >   {item.label} </NavLink>

          </li>
        })
        }

      </ul>
    </>
  )
} 