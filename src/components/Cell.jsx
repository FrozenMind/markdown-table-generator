import React from 'react'

export default function Cell({value, handleContentChange, rowNum, colNum}) {

  function handleValueChange(event) {
    handleContentChange(rowNum, colNum, event.target.value)
    event.preventDefault()
  }

  return <td>
    <input type="text" placeholder={rowNum == 0
        ? 'Header'
        : 'Body'} value={value} onChange={handleValueChange}/>
  </td>

}
