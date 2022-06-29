import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'

import { PostsList } from './features/posts/postsList';
import {SinglePostPage} from './features/posts/SinglePostPage';
import {EditPostForm} from './features/posts/EditPostForm';
import {UserList} from './features/users/userList';
import {AddUser} from './features/users/AddUser';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
              </React.Fragment>
            )}
          />
          <Route exact path="/postList" component={PostsList} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/userList" component={UserList} />
          <Route  exact path="/addUser" component={AddUser}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
