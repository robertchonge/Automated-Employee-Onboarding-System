import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
}
