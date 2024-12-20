import { Test } from '../types/test.ts';

export const testData: Test[] = [
    {
        id: '1',
        name: 'Pedagogical Approaches',
        link: '/test/1',
        score: 85,
        date: '2024-03-15T10:00:00',
        status: 'completed',
        description: 'Assessment covering modern teaching methodologies and their practical applications.',
        resources: [
            'Introduction to Modern Pedagogy (PDF)',
            'Interactive Teaching Methods Guide',
            'Case Studies in Educational Innovation'
        ]
    },
    {
        id: '2',
        name: 'Digital Tools Workshop',
        link: '/test/2',
        date: '2024-03-16T14:00:00',
        status: 'upcoming',
        description: 'Hands-on assessment of various digital teaching tools and their implementation.',
        resources: [
            'Digital Teaching Tools Overview',
            'LMS Implementation Guide',
            'Educational Technology Best Practices'
        ]
    },
    {
        id: '3',
        name: 'Assessment Methods',
        link: '/test/3',
        score: 0,
        date: '2024-03-14T09:00:00',
        status: 'missed',
        description: 'Evaluation of different assessment techniques and their effectiveness.',
        resources: [
            'Assessment Strategies Guide',
            'Rubric Development Tutorial',
            'Feedback Mechanisms Overview'
        ]
    }
];