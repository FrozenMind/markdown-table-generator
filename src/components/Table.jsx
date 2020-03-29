import React from 'react'
import './Table.css'

export default function TableComponent({setup, content}) {

  function getRows() {
    let rows = []
    for (let r = 0; r < setup.rows; r++) {
      let cols = []
      for (let c = 0; c < setup.cols; c++) {
        cols.push(<td><input type="text" placeholder="body"/></td>)
      }
      rows.push(<tr>{cols}</tr>)
    }
    return rows
  }

  return (<div>
    <table className="input-table">
      <thead>
        <tr>
          {new Array(setup.cols).map(el => <th><input type="text" placeholder="header"/></th>)}
        </tr>
      </thead>
      <tbody>
        {getRows()}
      </tbody>
    </table>
  </div>)
}
