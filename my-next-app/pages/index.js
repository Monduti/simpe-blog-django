import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts/');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Помилка при завантаженні постів');
        setLoading(false);
        console.error('Помилка:', err);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список постів</h1>
      {posts.length === 0 ? (
        <p>Постів поки немає.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li 
              key={post.id} 
              className="border p-3 rounded shadow"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}