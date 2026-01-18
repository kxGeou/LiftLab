import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='min-h-screen flex flex-col items-center bg-[url(./bg.jpg)] bg-cover main-font  text-white '>
      <div className='min-h-screen backdrop-blur-3xl bg-gray-950/40 w-full p-2 md:p-4'>
        <div className='max-w-400 mx-auto'>
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </main>
  )
}

export default Layout