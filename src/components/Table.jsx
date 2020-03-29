import React from 'react'
import './Table.css'
import Row from './Row'

export default function TableComponent({setup, content, handleContentChange}) {

  return (<div>
    <table className="input-table">
      <thead>
        <Row key="0" rowNum="0" colCount={setup.cols} content={content} handleContentChange={handleContentChange}/>
      </thead>
      <tbody>
        {Array.from(Array(setup.rows).keys()).map(el => <Row key={el + 1} rowNum={el + 1} colCount={setup.cols} content={content} handleContentChange={handleContentChange}/>)}
        <tr></tr>
      </tbody>
    </table>
  </div>)
}
