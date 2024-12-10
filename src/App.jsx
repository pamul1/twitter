import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NewTweet } from './Components/NewTweet'
import { Posts } from './Components/Posts'
import { PostsCard } from './Components/PostsCard'
import { LogIn } from './assets/ScreenComponents/LogIn'
import { Wall } from './assets/ScreenComponents/Wall'
import { Error } from './assets/ScreenComponents/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/wall' element={<Wall />}></Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='/newtweet' element={<NewTweet />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/postscard' element={<PostsCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
