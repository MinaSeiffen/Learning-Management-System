import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full'>
            <div className='h-[80px] fixed md:pl-56 inset-y-0 w-full z-50 '>
                <Navbar />
            </div>
            <div className='hidden md:flex h-full z-50 inset-y-0 fixed w-56 flex-col'>
                <Sidebar />
            </div>
            <main className='md:pl-56 h-full'>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout