import AssignmentCard from '../components/AssignmentCard'
import { assignments } from '../data/sampleData'

export default function Assignments() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + Add Assignment
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <AssignmentCard key={index} assignment={assignment} />
        ))}
      </div>
    </div>
  )
}
