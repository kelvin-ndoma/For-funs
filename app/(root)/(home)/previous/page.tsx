'use client'
import React, { useState, useEffect } from 'react';


const Facts = () => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(30); // Initial limit

  // API endpoint with placeholder for your actual API key
  const url = `https://api.api-ninjas.com/v1/facts?limit=${limit}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'zjnBzW71pK2KBff/o8Rdrg==jmmLmig5gY3oVOHX', // Replace with your actual API key
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching facts: ${response.statusText}`);
        }

        const data = await response.json();
        setFacts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limit]); // Fetch data whenever limit changes

  const handleLearnMore = () => {
    // Increase the limit by 30 to fetch more facts
    setLimit(prevLimit => prevLimit + 30);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-white text-4xl font-bold mb-4">Facts</h1>
      <p className="text-white text-2xl mb-4">This component fetches random facts using an external API. Click "Learn More" to load additional facts.</p>
      {isLoading && <p>Loading facts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {facts.length > 0 && (
        <>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {facts.map((fact, index) => (
              <li key={index} className="bg-white shadow-md rounded-md p-4">
                <p className="text-gray-800">{fact.fact}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleLearnMore} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </>
      )}
      {facts.length === 0 && !isLoading && <p>No facts found.</p>}
    </div>
  );
};

export default Facts;
