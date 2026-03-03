
import React from 'react';

export const COLORS = {
  NAVY: '#002855',
  GOLD: '#EAAA00',
  WHITE: '#FFFFFF',
  SLATE: '#F8FAFC',
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/mountainstatetraining/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586342221782', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg> },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Schedule Training', href: '#contact' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' }
];

export const PROGRAMS = [
  {
    title: 'Elite Technical',
    description: 'Master ball control, first touch, and passing accuracy through high-repetition technical drills.',
    icon: '⚽'
  },
  {
    title: 'Speed & Agility',
    description: 'Develop explosive first-step quickness and coordination specific to athletic performance.',
    icon: '🏃'
  },
  {
    title: 'Youth Discovery',
    description: 'A fun, engaging introduction to fundamentals for players just starting their journey.',
    icon: '🌱'
  }
];

export const WEEKLY_SCHEDULE = {
  sessions: [
    { id: 'private', name: 'Private 1-on-1', duration: '60 Min', price: '$60', icon: '👤' },
    { id: 'group', name: 'Small Group (2-5)', duration: '60 Min', price: '$40/ea', icon: '👥' },
  ],
  availableSlots: [
    { 
      day: 'Monday', 
      date: 'Oct 14', 
      times: ['4:00 PM', '5:00 PM', '7:00 PM'] 
    },
    { 
      day: 'Wednesday', 
      date: 'Oct 16', 
      times: ['5:00 PM', '6:30 PM'] 
    },
    { 
      day: 'Saturday', 
      date: 'Oct 19', 
      times: ['9:00 AM', '10:00 AM', '11:00 AM'] 
    },
  ],
  youthClinics: [
    {
      title: 'Soccer Skills Clinic (Ages 13 & Under)',
      date: 'Sunday, March 22nd',
      time: '2:00 PM - 4:00 PM',
      location: 'Mylan Park Multipurpose Field',
      address: '460 Mylan Park Lane',
      ages: '13 & Below',
      calendlyUrl: 'https://calendly.com/isaacscheer11/soccer-clinic-ages-13-below-clone-1'
    },
    {
      title: 'Soccer Skills Clinic (Ages 14+)',
      date: 'Sunday, March 22nd',
      time: '4:00 PM - 6:00 PM',
      location: 'Mylan Park Multipurpose Field',
      address: '460 Mylan Park Lane',
      ages: '14+',
      calendlyUrl: 'https://calendly.com/isaacscheer11/soccer-clinic-ages-13-below-clone'
    }
  ]
};

export const LIABILITY_WAIVER_TEXT = `
Participation Waiver 
By booking a Mountain State Training session, parents/guardians of the player/players hereby, give consent to their child to participate in training, and play in small sided games. 

Practicing and playing in any sport always runs the risk of injury, but if it is done in safe conditions, injuries can be kept to a minimum. It is understood that Mountain State Training cannot be held liable for any injuries that may occur to participants while taking part in sessions.  

Image rights

Parents/guardians also give Mountain State Training, the consent to take, record and publish images and videos of participants at training on social media or any other mediums. Parents/Guardians also acknowledge that any published images or videos taken of their child are therefore Mountain State Training’s property.
`;
