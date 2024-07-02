import { Table } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <div className='home-page'>
      <h1>Hello</h1>
      <Table
        className="pipe-status-table"
        rowKey={(record) => record.pipeID}
        scroll={{ y: 365 }}
      />
    </div>
  )
}
