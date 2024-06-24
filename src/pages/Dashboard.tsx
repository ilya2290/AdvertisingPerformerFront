import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

interface AdDataTable {
  pageName: string;
  views: number;
  visits: number;
  expenses: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AdDataTable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1999/api/v1/page-stats-today');
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
    <h2 className="pb-2 border-bottom" style={{ marginTop: '50px' }} >Add metrics:</h2>
      <div className="dashboard-container" style={{ paddingTop: '50px' }}>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 6" />
          <XAxis dataKey="pageName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#8884d8" />
          <Bar dataKey="visits" fill="#82ca9d" />
          <Bar dataKey="expenses" fill="#FFA500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Dashboard;
