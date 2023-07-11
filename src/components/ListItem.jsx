import React from 'react'

function ListItem(props) {
    console.log(props.person)
  return ( //can only return one parent element
    <div>
      <h2>Name: {props.person.name}</h2>
      <h3>Grade: {props.person.grade}</h3>
      <h3>Coolness Level: {props.person.coolLevel}</h3>
    </div>
  )
}

export default ListItem
