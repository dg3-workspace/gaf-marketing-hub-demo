
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

// Wrapper to handle ReactPlayer with proper types
const VideoPlayer: any = ReactPlayer;

// Helper function to convert timestamp string to seconds
const parseTimestamp = (timestamp: string): number => {
  const parts = timestamp.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1]; // MM:SS
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2]; // HH:MM:SS
  }
  return 0;
};

// Icons for the new supplemental info panel
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
);

// Data for the clarification tabs, derived from the provided table
const clarifications = [
  {
    timestamp: '0:30',
    title: 'User Identification',
    content: `We plan to establish a method, working with GAF IT, to extract OU / BU / RC codes through the OKTA SAML exchange or Workday data feed. This will identify incoming users for departmental cost allocation and provide additional filtering and business-rule capability for GAF admins.`,
  },
  {
    timestamp: '2:39',
    title: 'Customization',
    content: `Contractors can store approved logos. Storage permissions can be managed by GAF or by contractor discretion. Text can be predefined, free-form, or persona-based auto-populated. We recommend automatic population to reduce approval needs. GAF can also upload and manage its own official logos for contractor use.`,
  },
  {
    timestamp: '6:57',
    title: 'Item Rejection',
    content: (
      <>
        <p className="mb-3">If a multi-item cart contains a custom product requiring approval, individual items can be rejected without canceling the entire order. The fulfillment workflow proceeds as follows:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Checkout & payment authorize the full order.</li>
          <li>Shopify Flow places the order on fulfillment hold.</li>
          <li>GAF approver rejects an item → partial refund issued manually.</li>
          <li>Hold removed, remaining items proceed to fulfillment.</li>
        </ol>
      </>
    ),
  },
  {
    timestamp: '7:37',
    title: 'Chili Integration',
    content: `During onboarding, Chili will be seamlessly integrated to edit video bumpers, allowing users to insert brand marks automatically within approved templates.`,
  },
  {
    timestamp: '10:40',
    title: 'Real-Time Rewards API',
    content: `DG3 currently integrates with GAF’s Rewards API for real-time balance validation (push/pull exchange). The same protocol powers this demonstration.`,
  },
  {
    timestamp: '11:10',
    title: 'RC Code Behavior',
    content: `We expect the RC code field to be pre-populated — or unnecessary — once the data is pulled via Okta or Workday. Only users with delegated authority can override it manually.`,
  },
  {
    timestamp: '12:30',
    title: 'Order & Shipment Emails',
    content: (
      <>
        <p className="mb-3">All system-generated emails (order confirmation, shipment, delivery) can be configured to send from GAF’s own domain for brand consistency and trust.</p>
        <h4 className="font-bold text-gray-700 mt-4 mb-2">Additional Context:</h4>
        <p>Email notifications are generated for each individual shipment or digital delivery, not only for the overall order. When an order includes multiple fulfillment sources (e.g., DG3 print center, merchandise warehouse, or digital file delivery), each shipment triggers its own tracking email. This ensures users receive clear, item-level visibility as each component of their order is fulfilled.</p>
      </>
    ),
  },
  {
    timestamp: '19:20',
    title: 'Shopify Embedded AI',
    content: `Shopify’s embedded AI features (“Shopify Magic”) are powered by the OpenAI LLM but are isolated to Shopify’s secure infrastructure — store data remains within the Shopify ecosystem.`,
  },
  {
    timestamp: '20:48',
    title: 'Persona-Based UI',
    content: `Admins can define multiple user personas and create up to ten fully unique sub-sites sharing the same master data. Emerging Shopify features will soon allow interface personalization down to the individual user level.`,
  },
  {
    timestamp: '26:00',
    title: 'Operational Reporting',
    content: `While this demo highlights commerce reporting, the platform also tracks operational metrics — category, persona, region, cost per user, and attributed revenue. Each asset carries cost data for granular ROI analysis.`,
  },
  {
    timestamp: '28:00',
    title: 'Program-Level Insights',
    content: `These performance metrics roll up into DG3’s Quarterly Business Review dashboards for strategic evaluation with GAF.`,
  },
  {
    timestamp: '33:04',
    title: 'Custom and Scheduled Reporting',
    content: (
      <>
        <p className="mb-3">Custom report templates can be pre-created and filtered to match each product owner’s area of responsibility or SKU set.</p>
        <h4 className="font-bold text-gray-700 mt-4 mb-2">Additional Context:</h4>
        <p className="mb-3">Reports can be scheduled to run automatically and delivered by email or published to dashboards at defined intervals. Examples include:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Weekly SKU-owner replenishment reports</li>
          <li>Monthly budget-consumption summaries</li>
          <li>Quarterly performance dashboards</li>
        </ul>
        <p className="mt-3">These schedules eliminate the need for manual report generation and ensure key stakeholders always receive up-to-date analytics.</p>
      </>
    ),
  },
  {
    timestamp: '34:13',
    title: 'Purchase Order Status and Inventory Re-Activation',
    content: `The admin interface allows SKU Owners and GAF administrators to track Purchase Order (PO) progress in real time. Each PO displays its current stage—Submitted, In Production, or Shipped—and automatically updates inventory counts upon fulfillment. When stock is received, associated products automatically return to “active” status on the storefront, ensuring accurate availability for end users without manual intervention.`,
  },
];

interface ClarificationTabsProps {
  onTimestampClick: (seconds: number) => void;
}

const ClarificationTabs: React.FC<ClarificationTabsProps> = ({ onTimestampClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    const seconds = parseTimestamp(clarifications[index].timestamp);
    onTimestampClick(seconds);
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden text-left">
        <div className="p-4 border-b border-gray-200 bg-gray-50/50">
            <h3 className="text-lg font-bold text-brand-gray flex items-center gap-3">
                <InfoIcon className="text-brand-green"/>
                <span>Supplemental Information & Context</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1 ml-9">Click a topic below for additional clarification related to the video.</p>
        </div>
        
        <div className="border-b border-gray-200">
            <div className="p-3 flex flex-wrap gap-2 justify-center">
                {clarifications.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-3 py-2 text-sm rounded-lg text-center transition-all duration-200 transform hover:-translate-y-0.5 ${
                            activeIndex === index 
                            ? 'bg-brand-green text-white shadow-md' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold opacity-80">
                            <ClockIcon className="w-3 h-3"/>
                            <span>{item.timestamp}</span>
                        </div>
                        <span className="mt-1 block text-xs font-medium">{item.title}</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="p-6 text-gray-700 leading-relaxed min-h-[100px]">
            {clarifications[activeIndex].content}
        </div>
    </div>
  );
}

interface IntroductionSectionProps {
  onNavigate: (id: string) => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimestampClick = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-patterned">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-gray mb-4 leading-tight">
            Comprehensive Video Walkthrough
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            This video provides a complete, unedited demonstration addressing the key features from your RFP follow-up. The sections below offer a deeper, self-guided exploration of each capability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gray-200 mb-8">
              <div className="relative pt-[56.25%] h-0">
                <video
                  ref={videoRef}
                  controls
                  className="absolute top-0 left-0 w-full h-full"
                  src="/videos/The_Complete_Demonstration.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <ClarificationTabs onTimestampClick={handleTimestampClick} />
        </div>
        
      </div>
    </section>
  );
};
