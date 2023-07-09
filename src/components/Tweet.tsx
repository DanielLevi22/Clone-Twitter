import  './Tweet.css'
import {ChatCircle,ArrowClockwise,Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface Props {
  tweet: string
}

export function Tweet({tweet}: Props) {
  return(
    <Link to='/status' className='tweet'> 
     <img src="https://github.com/daniellevi22.png" alt="Daniel Levi" />
     <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Daniel Levi</strong>
          <span>@daniellevi2022</span>
        </div>
        <p>
          {tweet}
        </p>
        <div className='tweet-content-footer'>
          <button type='button'><ChatCircle /> 20</button>
          <button type='button'><ArrowClockwise /> 20</button>
          <button type='button'><Heart /> 20</button>

        </div>
     </div>
    </Link>
  )
}