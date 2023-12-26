import React from 'react'
import Button from './Button'

const Header = ({reqType,setReqType}) => {
  return (
   <div className='button-container'> 
   <Button 
      buttonText = "users"
      reqType ={reqType}
      setReqType ={setReqType}
   />
   <Button
      buttonText = "posts"
      reqType ={reqType}
      setReqType ={setReqType}
   />
   <Button
      buttonText = "comments"
      reqType ={reqType}
      setReqType ={setReqType}
   />
   </div>
  )
}

export default Header