import StudentCard from '../components/StudentCard'
import CourseCard from '../components/CourseCard'
import AssignmentCard from '../components/AssignmentCard'
import { studentData, courses, assignments } from '../data/sampleData'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student Info */}
        <div className="lg:col-span-1">
          <StudentCard student={studentData} />
          
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Assignments Due</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span>Average Grade</span>
                <span className="font-semibold">85%</span>
              </div>
              <div className="flex justify-between">
                <span>Study Hours</span>
                <span className="font-semibold">24h</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Courses & Assignments */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.slice(0, 4).map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Assignments</h2>
            <div className="space-y-4">
              {assignments.slice(0, 3).map((assignment, index) => (
                <AssignmentCard key={index} assignment={assignment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
