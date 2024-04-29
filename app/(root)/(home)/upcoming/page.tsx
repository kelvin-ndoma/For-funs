'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Interface for DadJoke type
interface DadJoke {
  joke: string;
}

const DadJokesComponent: React.FC = () => {
  // State variables with types
  const [dadJokes, setDadJokes] = useState<DadJoke[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(10);

  // UseEffect with dependency array
  useEffect(() => {
    const fetchDadJokes = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/dadjokes`, {
          headers: {
            'X-Api-Key': 'zjnBzW71pK2KBff/o8Rdrg==jmmLmig5gY3oVOHX' // Replace with your actual API key
          }
        });
        setDadJokes(response.data);
      } catch (error) {
        console.error('Error fetching dad jokes:', error);
        setError('Error fetching dad jokes');
      } finally {
        setLoading(false);
      }
    };

    fetchDadJokes();
  }, [limit]);

  // handleLoadMore function
  const handleLoadMore = () => {
    setLoading(true);
    setLimit((prevLimit) => prevLimit + 100);
  };

  // Loading and error states
  if (loading) {
    return <div className="text-white text-4xl">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Rendering jokes
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-white text-4xl font-bold mb-4">Dad Jokes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dadJokes.map((joke, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <p className="text-gray-800">{joke.joke}</p>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Next Jokes
      </button>
    </div>
  );
};

export default DadJokesComponent;