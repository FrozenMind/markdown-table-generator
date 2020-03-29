import React, {useState, useEffect} from 'react'
import './App.css'
import HeaderComponent from './components/Header'
import TableSetupComponent from './components/TableSetup'
import TableComponent from './components/Table'

export default function App() {
  const [setup, setSetup] = useState({cols: 2, rows: 2})
  const [content, setContent] = useState([new Array(2), new Array(2), new Array(2)])

  useEffect(() => {
    setSetup(JSON.parse(localStorage.getItem('table.setup')))
  }, [])

  useEffect(() => {
    localStorage.setItem('table.setup', JSON.stringify(setup))
  }, [setup])

  function handleSetupChange(el, operator) {
    console.log(`update setup el=${el}, operator=${operator}`);
    const newSetup = {
      ...setup
    }
    const newContent = [...content]
    if (el === 'r') {
      if (operator === '+') {
        newSetup.rows += 1
        newContent.push(new Array(newSetup.cols))
      } else {
        newSetup.rows -= 1
        newContent.length = newSetup.rows + 1
      }
    } else if (el === 'c') {
      if (operator === '+') {
        newSetup.cols += 1
      } else {
        newSetup.cols -= 1
      }
      for (let r = 0; r <= newSetup.rows; r++) {
        newContent[r].length = newSetup.cols
      }
    }
    console.log('newSetup=', newSetup);
    setSetup(newSetup)
    console.log('newContent=', newContent);
    setContent(newContent)
  }

  return (<div>
    <HeaderComponent/>
    <TableSetupComponent setup={setup} handleSetupChange={handleSetupChange}/>
    <TableComponent setup={setup} content={content}/>
  </div>)
}
