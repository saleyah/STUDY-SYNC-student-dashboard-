export default function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 card-hover">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">👨‍🎓</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{student.name}</h3>
          <p className="text-gray-600">{student.major}</p>
          <p className="text-sm text-gray-500">Semester: {student.semester}</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">GPA</p>
          <p className="text-2xl font-bold text-blue-600">{student.gpa}</p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600">Courses</p>
          <p className="text-2xl font-bold text-green-600">{student.courses}</p>
        </div>
      </div>
    </div>
  )
}
