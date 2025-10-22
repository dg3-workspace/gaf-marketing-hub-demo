
import React from 'react';
import { DiagramPlaceholder } from '../ui/DiagramPlaceholder';
import { Button } from '../ui/Button';

export const PlatformOverviewSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-800 flex items-center py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Platform Overview</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            The GAF Marketing Hub connects multiple systems and stakeholders, creating a single source of truth for all marketing activities. From national campaigns to local contractor needs, the platform provides the right tools for the right audience.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <DiagramPlaceholder label="Placeholder for System Architecture Diagram" />
            </div>
            <div className="md:col-span-2 space-y-6">
                <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-blue-400 text-lg mb-2">Centralized Asset Management</h3>
                    <p className="text-gray-300">All brand-approved assets in one place, ensuring consistency and compliance across the board.</p>
                </div>
                 <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-blue-400 text-lg mb-2">Role-Based Access</h3>
                    <p className="text-gray-300">Users only see the tools and information relevant to their roles, simplifying the user experience.</p>
                </div>
                <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-blue-400 text-lg mb-2">Data Unification</h3>
                    <p className="text-gray-300">Connects CRM, sales data, and marketing analytics for a holistic view of performance.</p>
                </div>
                <Button variant="secondary" className="w-full">Learn More</Button>
            </div>
        </div>
      </div>
    </section>
  );
};
