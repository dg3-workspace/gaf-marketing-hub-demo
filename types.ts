import type { ReactElement } from 'react';

export interface Section {
  id: string;
  title: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
  subsections?: {
    id: string;
    title: string;
  }[];
}

/**
 * Represents a granular detail or sub-feature of a capability.
 */
export interface CapabilityDetail {
  title: string;
  description: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
}

/**
 * Represents a single video asset within a capability.
 */
export interface VideoDetail {
  id: string;
  label: string; // Full label for the placeholder
  shortLabel: string; // Short label for the button
  videoId?: string;
  embedUrl?: string;
}


/**
 * Represents a specific feature or function to be demonstrated
 * within a larger part of the demo timeline.
 */
export interface Capability {
  id: string;
  title:string;
  description: string;
  videos: VideoDetail[];
  details: CapabilityDetail[];
  enhancements?: CapabilityDetail[]; // New property for future enhancements
  exploreFurtherVideos?: VideoDetail[]; // New property for additional videos
  visualType?: 'video' | 'diagram';
  visualLabel?: string;
}

/**
 * Represents a key point in the strategic/support section of the demo.
 */
export interface StrategicPoint {
    title: string;
    description: string;
    // FIX: Specify props for the ReactElement to allow cloning with className.
    icon: ReactElement<{ className?: string }>;
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageComponent: ReactElement;
  isCompact?: boolean;
  additionalImages?: ReactElement[];
}

export interface Team {
  title: string;
  id: string;
  members: TeamMember[];
}

export interface ApproachPoint {
  title: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
  points: string[];
}

export interface ChoicePoint {
  title: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
  points: string[];
}

export interface ConsiderationPoint {
  text: string;
}

export interface EcosystemIntegration {
  name: string;
  category: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
}

// FIX: Add Feature interface to resolve missing type error.
/**
 * Represents a key capability of the platform.
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
}

// FIX: Add Role interface to resolve missing type error.
/**
 * Represents a user role for the interactive walkthrough.
 */
export interface Role {
  id: string;
  name: string;
  description: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: ReactElement<{ className?: string }>;
  featureSequence: string[];
}