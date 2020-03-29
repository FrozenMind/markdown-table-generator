import React from 'react'

export default function MarkdownPreview({content}) {

  function buildMdTable() {
    let rows = []

    // header column
    let headerCol = []
    headerCol.push(<span>|</span>)
    for (let col = 0; col < content[0].length; col++) {
      headerCol.push(<span>{content[0][col]}|</span>)
    }
    rows.push(<div>{headerCol}</div>)

    // separater column
    let sepCol = []
    sepCol.push(<span>|</span>)
    for (let col = 0; col < content[0].length; col++) {
      sepCol.push(<span>-|</span>)
    }
    rows.push(<div>{sepCol}</div>)

    // rows
    for (let row = 1; row < content.length; row++) {
      let bodyRow = []
      bodyRow.push(<span>|</span>)
      for (let col = 0; col < content[row].length; col++) {
        bodyRow.push(<span>{content[row][col]}|</span>)
      }
      rows.push(<div>{bodyRow}</div>)
    }
    return rows
  }

  return (<div>
    {buildMdTable()}
  </div>)

}
