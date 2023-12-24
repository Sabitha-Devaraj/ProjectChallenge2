import React from 'react'
import ListItem from './ListItem'

const Content = ({items}) => {
  return (
    
    <ul>
      {
        items.map((item) => (
    
          <ListItem item={item} key={item.id} />

        ))
      }
    </ul>
  )
}

export default Content