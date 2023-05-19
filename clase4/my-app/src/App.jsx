import Card from './Components/Card'
import './App.css'
import React from 'react'

const Components = () => {
  return (
    <div className='container'>
      <Card>card children</Card>
      <Card title='Card title'>card children</Card>
      <Card footer='Card footer'>card children</Card>
      <Card title='Card title' footer='card footer'>
        card children
      </Card>
    </div>
  )
}

export default Components