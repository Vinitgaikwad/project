export interface Event {
    title: string;
    date: string;
    time: string;
    description: string;
}

export interface QuickStats {
    completedTests: number;
    upcomingTests: number;
    averageScore: number;
}

export interface HomeData {
    welcomeMessage: string;
    upcomingEvents: Event[];
    quickStats: QuickStats;
}

export interface TestPerformance {
    name: string;
    score?: number;
    maxScore?: number;
    status?: 'upcoming' | 'missed';
}

export interface ProgressStats {
    completedModules: number;
    totalModules: number;
    certificateEligible: boolean;
}

export interface TimeSpent {
    totalHours: number;
    lastAccess: string;
}

export interface AnalyticsData {
    testPerformance: TestPerformance[];
    progressStats: ProgressStats;
    timeSpent: TimeSpent;
}

export interface CertificateStatus {
    isEligible: boolean;
    requiredTests: number;
    completedTests: number;
    minimumScore: number;
    currentAverageScore: number;
}

export interface CompletedModule {
    name: string;
    completionDate: string;
    score: number;
    certificate: string | null;
}

export interface ReportData {
    certificateStatus: CertificateStatus;
    completedModules: CompletedModule[];
}