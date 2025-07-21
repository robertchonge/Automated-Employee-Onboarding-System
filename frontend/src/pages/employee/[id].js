import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TaskTracker from '../../components/TaskTracker';

export default function EmployeeView() {
  const router = useRouter();
  const { id } = router.query;

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/api/tasks/employee/${id}`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, [id]);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Your Onboarding Tasks</h1>
      <TaskTracker tasks={tasks} employeeId={id} />
    </div>
  );
}
