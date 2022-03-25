import React from 'react'
import styles from './style.modules.css'

const Home = () => {
  return (
    <form action=''>
        <div>
        <label htmlFor="username">Username: </label>
        <input type="text" 
        value={} onchange ={} name="username" id="username" />
        </div>
        <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" />
        </div>
        <div>
        <label htmlFor="phone">Phone: </label>
        <input type="text" name="phone" id="phone" />
        </div>
        <div>
        <label htmlFor="password">Password: </label>
        <input type="text"
         name="password" id="password" />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Home