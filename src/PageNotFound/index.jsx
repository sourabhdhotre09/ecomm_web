import React from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

    const handleRedirect= () =>{
        navigate('/');
    }

  return (
    <div className={styles.not_found_page}>
        <div className={styles.number}>404</div>
        <div className={styles.text}><span>Ooops...</span><br/>page not found</div>
        <button className='btn btn-primary mt-4' onClick={handleRedirect}> 
            Go to Home
        </button>
    </div>
  )
}

export default PageNotFound
