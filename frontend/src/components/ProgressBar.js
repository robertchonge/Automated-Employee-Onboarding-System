export default function ProgressBar({ percentage }) {
  return (
    <div className="bg-gray-300 h-4 w-full rounded">
      <div
        className="bg-green-500 h-4 rounded"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
