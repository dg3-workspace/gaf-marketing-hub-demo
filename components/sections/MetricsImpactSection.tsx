
import React from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Q1', engagement: 40, timeSaved: 24 },
  { name: 'Q2', engagement: 30, timeSaved: 13 },
  { name: 'Q3', engagement: 60, timeSaved: 58 },
  { name: 'Q4', engagement: 80, timeSaved: 49 },
];
const COLORS = ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-700 p-2 border border-gray-600 rounded">
                <p className="label text-white">{`${label}`}</p>
                <p className="text-blue-400">{`Engagement : ${payload[0].value}%`}</p>
                <p className="text-green-400">{`Time Saved : ${payload[1].value} Hours`}</p>
            </div>
        );
    }
    return null;
};

export const MetricsImpactSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-8 flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Metrics & Impact</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Driving tangible results. The platform is designed to boost efficiency, enhance engagement, and provide clear ROI. (Data shown is for illustrative purposes only.)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Time Saved Annually</h3>
                <p className="text-5xl font-extrabold text-white">
                    <AnimatedCounter target={1200} suffix=" hrs"/>
                </p>
            </div>
             <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Improved Engagement</h3>
                <p className="text-5xl font-extrabold text-white">
                    <AnimatedCounter target={45} suffix="%"/>
                </p>
            </div>
             <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Marketing Throughput</h3>
                <p className="text-5xl font-extrabold text-white">
                    <AnimatedCounter target={200} suffix="%+"/>
                </p>
            </div>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Engagement vs. Time Saved</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(107, 114, 128, 0.2)'}}/>
                        <Bar dataKey="engagement" name="Engagement" fill="#3b82f6">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                         <Bar dataKey="timeSaved" name="Time Saved" fill="#10b981" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </section>
  );
};
