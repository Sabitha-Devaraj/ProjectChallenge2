import React from 'react'

const Header = ({fetchItems}) => {
  return (
   <div className='button-container'> 
    <button type='submit' onClick={() => fetchItems('users')}>users</button>
    <button type='submit' onClick={() => fetchItems('post')}>posts</button>
    <button type='submit' onClick={() => fetchItems('comment')}>comments</button>
   </div>
  )
}

export default Header