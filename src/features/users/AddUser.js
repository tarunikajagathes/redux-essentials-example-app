import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {addUser} from './userSlice'

export const AddUser = () => {
  const [user, setUser] = useState('')
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const onUserChanged = (e) => setUser(e.target.value)

  const onSaveUserClicked = () => {
    const  id= users.length
    dispatch(addUser(id,user))
    setUser('');
  }

  return (
    <div>
      <form>
        <label htmlFor="user">Author Name:</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={onUserChanged}
        />
        <button
          type="button"
          onClick={onSaveUserClicked}
          disabled={!Boolean(user)}
        >
          Save User
        </button>
      </form>
      <Link to={`/userList`} className="button">
        Back
      </Link>
    </div>
  )
}
