import type { ReactElement } from 'react';

export interface Section {
  id: string;
  title: string;
  icon: ReactElement;
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
  icon: ReactElement;
}

/**
 * Represents a single video asset within a capability.
 */
export interface VideoDetail {
  id: string;
  label: string; // Full label for the placeholder
  shortLabel: string; // Short label for the button
  path?: string; // Optional path to the video file
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
  visualType?: 'video' | 'diagram';
  visualLabel?: string;
  seeAlso?: { label: string; targetId: string; }[];
}

/**
 * Represents a key point in the strategic/support section of the demo.
 */
export interface StrategicPoint {
    title: string;
    description: string;
    icon: ReactElement;
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

export interface GanttTask {
  name: string;
  spans: { start: number; end: number }[];
  isHighlighted?: boolean;
}

export interface GanttMilestone {
  name: string;
  week: number;
}

export interface ApproachPoint {
  title: string;
  icon: ReactElement;
  points: string[];
}

export interface ChoicePoint {
  title: string;
  icon: ReactElement;
  points: string[];
}

export interface ConsiderationPoint {
  text: string;
}

export interface EcosystemIntegration {
  name: string;
  category: string;
  icon: ReactElement;
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
  icon: ReactElement;
  featureSequence: string[];
}