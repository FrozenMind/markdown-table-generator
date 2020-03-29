import React from 'react'

export default function Cell({value, handleContentChange, rowNum, colNum}) {

  function handleValueChange(event) {
    handleContentChange(rowNum, colNum, event.target.value)
    event.preventDefault()
  }

  return <td><input type="text" placeholder="header" value={value} onChange={handleValueChange}/></td>

}
