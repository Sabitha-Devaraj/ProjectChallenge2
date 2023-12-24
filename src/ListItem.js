import React from 'react'

const ListItem = ({item}) => {
  return (
    <li>
      <pre>
          {JSON.stringify(item) }
      </pre>
    </li>
  )
}

export default ListItem