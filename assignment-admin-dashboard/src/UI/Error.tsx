import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="mt-48 text-center">
      <h2 className="text-xl">Something went wrong 😢</h2>
      <button
        className="border-1 mt-4 rounded border border-stone-700 px-4 py-2"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
