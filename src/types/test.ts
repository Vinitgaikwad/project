export interface Test {
    id: string;
    name: string;
    link: string;
    score?: number;
    date: string;
    status: 'upcoming' | 'completed' | 'missed' | 'incomplete';
    description: string;
    resources: string[];
}