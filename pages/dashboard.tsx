import React from 'react'
import CreateService from '../components/CreateService/CreateService'
import Upload from '../components/UploadImage/Upload'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Upload />
      <CreateService />
    </div>
  )
}

export default Dashboard