import { RecoilRoot } from 'recoil'
import './App.css'
import AddTask from './components/AddTask'
import InputTask from './components/InputTask'
import CompleteTask from './components/CompleteTask'
import Search from './components/Search'

const App = () => {

  return (
    <RecoilRoot>
      <InputTask  />
      <AddTask />
      < Search />
      <CompleteTask />
    </RecoilRoot>
  )
}

export default App
