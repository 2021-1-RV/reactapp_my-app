import logo from './logo.svg'
import './App.css'
import Hello from './components/hello/index.jsx'

function App() {
  return (
    <>
      <Hello name={' Вася'} surname={' Васечкин'} />
      <Hello name={' Настя'} surname={' Коклюшкина'} />
      <Hello name={' Дима'} surname={' Пасенков'} />
    </>
  )
}

export default App
