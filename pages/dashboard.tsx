import React from 'react'
import CreateService from '../components/CreateService/CreateService'
import Upload from '../components/UploadImage/Upload'
import Shoots from '../components/Shoots/Shoots'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Upload />
      <CreateService />
      <Shoots />
    </div>
  )
}

export default Dashboard