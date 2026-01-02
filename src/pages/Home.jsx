import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">StudySync</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Your all-in-one student dashboard for managing courses, assignments, and grades.
        Stay organized and excel in your academic journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-3">Course Management</h3>
          <p className="text-gray-600">Track all your courses, schedules, and progress in one place.</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-3">Assignment Tracker</h3>
          <p className="text-gray-600">Never miss a deadline with our smart assignment tracker.</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-3">Grade Analytics</h3>
          <p className="text-gray-600">Monitor your performance and calculate your GPA.</p>
        </div>
      </div>
      
      <Link 
        to="/dashboard"
        className="inline-block mt-12 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard →
      </Link>
    </div>
  )
}
