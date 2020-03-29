import React from 'react'
import Cell from './Cell'

export default function Row({rowNum, colCount, content, handleContentChange}) {

  return (<tr>
    {Array.from(Array(colCount).keys()).map(el => <Cell key={rowNum + '_' + el} value={content[rowNum][el]} rowNum={rowNum} colNum={el} handleContentChange={handleContentChange}/>)}
  </tr>)

}
