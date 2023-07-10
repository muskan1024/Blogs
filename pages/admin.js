import AdminPanel from '@/components/AdminPanel'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function admin() {
  return (
    <div className='bg-blue-100'>
        <NavBar />
        <AdminPanel />
    </div>
  )
}
