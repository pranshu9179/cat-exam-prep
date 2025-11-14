import React from 'react'
import BlogSection from '../sections/BlogSection'

export default function Blog(){
  return (
    <>
      {/* <h2 className="text-3xl font-bold mb-6">Blog</h2> */}
      <BlogSection showFilters={true}/>
    </>
  )
}