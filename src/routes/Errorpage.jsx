import './Error.css'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {

    const error = useRouteError
    console.error(error)
  return (
    <div id='error'>
        <h1>Oops</h1>
        <p>Temos um problema..</p>
        <span> Voltar a</span>
        <Link to={"/"} className='home-btn'> Home</Link>       
    </div>
  )
}

export default ErrorPage