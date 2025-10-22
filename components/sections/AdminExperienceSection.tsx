import React, { useState } from 'react';
// FIX: Import END_USER_CAPABILITIES to resolve missing variable error.
import { ADMIN_CAPABILITIES, END_USER_CAPABILITIES } from '../../constants';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';
import { DiagramPlaceholder } from '../ui/DiagramPlaceholder';
import { ExpandableDetail } from '../ui/ExpandableDetail';
import type { Capability } from '../../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'East', orders: 400, items: 240 },
  { name: 'West', orders: 300, items: 139 },
  { name: 'Central', orders: 600, items: 580 },
  { name: 'South', orders: 800, items: 490 },
];
const COLORS = ['#33A556', '#2C8D49', '#25753D', '#1E5E31'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
                <p className="label text-brand-gray">{`Region: ${label}`}</p>
                <p className="text-brand-green">{`Total Orders : ${payload[0].value}`}</p>
                <p className="text-green-400">{`Items Ordered : ${payload[1].value}`}</p>
            </div>
        );
    }
    return null;
};


const CapabilityModule: React.FC<{ capability: Capability; index: number }> = ({ capability, index }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const isReversed = index % 2 !== 0;

  const PlayIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  );

  const videoSection = (
    <div>
      <VideoPlaceholder 
        label={capability.videos[activeVideoIndex].label} 
        videoPath={capability.videos[activeVideoIndex].path}
      />
      {capability.videos.length > 1 && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-sm font-semibold text-gray-500 mb-3">Demonstration Videos:</p>
          <div className="flex flex-wrap gap-3">
            {capability.videos.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => setActiveVideoIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-105 ${
                  activeVideoIndex === idx
                    ? 'bg-brand-green text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {PlayIcon}
                <span>{video.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={`space-y-4 ${isReversed ? 'md:order-2' : ''}`}>
        <span className="text-6xl font-extrabold text-gray-200">0{index + 1 + END_USER_CAPABILITIES.length}</span>
        <h3 className="text-2xl font-bold text-brand-gray mt-[-1rem]">{capability.title}</h3>
        <p className="text-gray-600 leading-relaxed">{capability.description}</p>
        
        <div className="pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Deep Dive:</h4>
          {capability.details.map((detail) => (
            <ExpandableDetail key={detail.title} detail={detail} />
          ))}
        </div>
      </div>
      <div className={isReversed ? 'md:order-1' : ''}>
        {capability.visualType === 'diagram' ? (
            <DiagramPlaceholder label={capability.visualLabel || 'System Diagram'} />
        ) : (
          videoSection
        )}
        
        {capability.seeAlso && capability.seeAlso.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase">See Also:</h4>
              <div className="flex flex-col items-start gap-2">
                  {capability.seeAlso.map(link => (
                      <a 
                          key={link.targetId} 
                          href={`#${link.targetId}`}
                          className="text-brand-green hover:underline text-sm font-medium flex items-center gap-2"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          <span>{link.label}</span>
                      </a>
                  ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};


export const AdminExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-patterned py-20 px-8 flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray">Part 2: The Administrator Experience & Analytics</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Demonstrating the tools GAF will use to manage the platform, gain insights, and leverage AI without vendor intervention.
          </p>
        </div>
        <div className="space-y-20 max-w-6xl mx-auto">
          {ADMIN_CAPABILITIES.map((capability, index) => (
            <div id={capability.id} key={capability.id}>
              <CapabilityModule capability={capability} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};