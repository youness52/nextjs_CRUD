'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function courseList() {
  const [courses, setcourses] = useState([])

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setcourses(data))
  
  }, [])



  return (
<div className="container mt-5">
  <div className="row g-4">
    {courses.map((course: any) => (
      <div key={course.id} className="col-lg-3 col-md-4 col-sm-6">
        <div className="card h-100 shadow-sm border-0">
          <img 
            src={course.image || '/uploads/course_avatar.png'} 
            alt={course.title || 'Course Image'} 
            className="card-img-top img-fluid"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-truncate" title={course.description}>
              {course.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



   
  )
}
