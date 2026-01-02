import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            📚 StudySync
          </Link>
          
          <div className="space-x-6">
            <Link to="/dashboard" className="hover:text-blue-200 transition">
              Dashboard
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition">
              Courses
            </Link>
            <Link to="/assignments" className="hover:text-blue-200 transition">
              Assignments
            </Link>
            <Link to="/grades" className="hover:text-blue-200 transition">
              Grades
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
