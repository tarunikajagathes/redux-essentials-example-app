import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const UserList = () => {
  const users = useSelector((state) => state.users)

  const usersList = users.map((user) => <li key={user.id}>{user.name}</li>)

  return (
    <div>
      <h4>Authors List</h4>
      <ol>{usersList}</ol>
      <Link to={`/addUser`} className="button">
        Add Author
      </Link>
    </div>
  )
}
