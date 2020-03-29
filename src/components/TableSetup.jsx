import React from 'react'
import './TableSetup.css'

export default function TableSetupComponent({setup, handleSetupChange}) {

  function addRow(e) {
    handleSetupChange('r', '+')
  }

  function delRow(e) {
    handleSetupChange('r', '-')
  }

  function addCol(e) {
    handleSetupChange('c', '+')
  }

  function delCol(e) {
    handleSetupChange('c', '-')
  }

  return (<div>
    <span>Rows ({setup.rows})</span>
    <button onClick={addRow}>+</button>
    <button onClick={delRow}>-</button>
    <span>Columns ({setup.cols})</span>
    <button onClick={addCol}>+</button>
    <button onClick={delCol}>-</button>
  </div>)

}
