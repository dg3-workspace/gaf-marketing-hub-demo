import React, { useState } from 'react';
import { ROLES, FEATURES } from '../../constants';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';
import type { Role, Feature } from '../../types';

export const InteractiveWalkthroughSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [animationState, setAnimationState] = useState<'in' | 'out'>('in');

  const handleRoleSelect = (role: Role) => {
    setAnimationState('out');
    setTimeout(() => {
      setSelectedRole(role);
      setAnimationState('in');
    }, 300);
  };

  const handleBackToRoles = () => {
    setAnimationState('out');
    setTimeout(() => {
      setSelectedRole(null);
      setAnimationState('in');
    }, 300);
  };

  const getFeatureById = (id: string): Feature | undefined => FEATURES.find(f => f.id === id);

  return (
    <section className="min-h-screen bg-gray-800 py-20 px-8 flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in-up">Interactive Walkthrough</h2>
          <p 
            className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto animate-fade-in-up" 
            style={{ animationDelay: '100ms' }}
          >
            Experience the platform from a specific user's perspective. Choose your role to begin a curated tour of relevant features.
          </p>
        </div>

        <div className={`transition-opacity duration-300 ${animationState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
          {!selectedRole ? (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ROLES.map((role, index) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role)}
                  className="group p-8 bg-gray-700 rounded-lg text-left transform transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700/80 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                    {/* FIX: Remove incorrect type cast on icon to allow props to be passed to cloneElement. */}
                    {React.cloneElement(role.icon, { className: 'w-10 h-10' })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{role.name}</h3>
                  <p className="text-gray-300">{role.description}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 animate-fade-in-up">
                <button onClick={handleBackToRoles} className="text-blue-400 hover:text-blue-300 transition-colors">
                  &larr; Choose a different role
                </button>
                <h3 className="text-2xl font-semibold text-white mt-4">
                  Walkthrough for: <span className="text-blue-400">{selectedRole.name}</span>
                </h3>
              </div>
              <div className="space-y-16">
                {selectedRole.featureSequence.map((featureId, index) => {
                  const feature = getFeatureById(featureId);
                  if (!feature) return null;
                  return (
                    <div
                      key={featureId}
                      className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <span className="text-sm font-bold text-blue-400 bg-gray-900/50 px-3 py-1 rounded-full">Step {index + 1}</span>
                        <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                        <VideoPlaceholder label={`Demo Video for ${feature.title}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};