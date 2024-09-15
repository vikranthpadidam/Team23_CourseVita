import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const AdminDashboard = () => {
  const [appointmentStats, setAppointmentStats] = useState({
    approved: 0,
    pending: 0,
    rejected: 0
  });

  useEffect(() => {
    const fetchAppointmentStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/admin/appointment-stats', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAppointmentStats(response.data);
      } catch (error) {
        console.error('Error fetching appointment stats:', error);
      }
    };

    fetchAppointmentStats();
  }, []);

  const data = [
    { name: 'Approved', value: appointmentStats.approved },
    { name: 'Pending', value: appointmentStats.pending },
    { name: 'Rejected', value: appointmentStats.rejected },
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Appointment Statistics</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Approved Tasks:</span>
              <span className="font-bold">{appointmentStats.approved}</span>
            </li>
            <li className="flex justify-between">
              <span>Pending Tasks:</span>
              <span className="font-bold">{appointmentStats.pending}</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected Tasks:</span>
              <span className="font-bold">{appointmentStats.rejected}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;