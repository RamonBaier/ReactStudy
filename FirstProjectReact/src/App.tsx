import './App.css'
import HelloWorld from './components/HelloWorld'
import List from './components/List'

import Message from './Message'

function App() {
  return (
    <div>
      <Message />
      <HelloWorld nome="ramon" idade={22} />
      <List />

    </div>
  )
}

export default App
