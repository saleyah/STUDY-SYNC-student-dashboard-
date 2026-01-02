import GradeCard from '../components/GradeCard'
import { grades } from '../data/sampleData'

export default function Grades() {
  const calculateGPA = () => {
    const total = grades.reduce((sum, grade) => sum + grade.score, 0)
    return (total / grades.length).toFixed(1)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Grades & Performance</h1>
      
      {/* GPA Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Current GPA</h2>
            <p className="text-blue-100">Based on all completed courses</p>
          </div>
          <div className="text-5xl font-bold">{calculateGPA()}</div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Recent Grades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grades.map((grade, index) => (
          <GradeCard key={index} grade={grade} />
        ))}
      </div>
      
      {/* Grade Summary */}
      <div className="mt-12 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Grade Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Course</th>
                <th className="text-left py-3">Assignment</th>
                <th className="text-left py-3">Score</th>
                <th className="text-left py-3">Weight</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">{grade.course}</td>
                  <td className="py-3">{grade.assignment}</td>
                  <td className="py-3 font-semibold">{grade.score}%</td>
                  <td className="py-3">{grade.weight}%</td>
                  <td className="py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Graded
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
