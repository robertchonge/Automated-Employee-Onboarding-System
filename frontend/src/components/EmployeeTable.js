import Link from 'next/link';

export default function EmployeeTable({ employees }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Position</th>
          <th className="py-2">Profile</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp._id} className="border-t">
            <td className="py-2">{emp.name}</td>
            <td className="py-2">{emp.email}</td>
            <td className="py-2">{emp.position}</td>
            <td className="py-2">
              <Link href={`/employee/${emp._id}`} className="text-blue-600 underline">
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
