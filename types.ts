// Fix: Import React to resolve the 'Cannot find namespace React' error on the SocialIcon interface.
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialIcon {
  name: string;
  icon: React.ReactNode;
  url: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
  icon: string;
}