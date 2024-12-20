import { HomeData, AnalyticsData, ReportData } from '../types/dashboard';

export const homeData: HomeData = {
    welcomeMessage: "Welcome to Faculty Development Programme",
    upcomingEvents: [
        {
            title: "Digital Tools Workshop",
            date: "2024-03-16",
            time: "14:00",
            description: "Learn about modern digital teaching tools and their implementation"
        },
        {
            title: "Assessment Methods Seminar",
            date: "2024-03-20",
            time: "10:00",
            description: "Deep dive into contemporary assessment techniques"
        }
    ],
    quickStats: {
        completedTests: 1,
        upcomingTests: 2,
        averageScore: 85
    }
};

export const analyticsData: AnalyticsData = {
    testPerformance: [
        { name: "Pedagogical Approaches", score: 85, maxScore: 100 },
        { name: "Digital Tools Workshop", status: "upcoming" },
        { name: "Assessment Methods", status: "missed" }
    ],
    progressStats: {
        completedModules: 1,
        totalModules: 5,
        certificateEligible: false
    },
    timeSpent: {
        totalHours: 4,
        lastAccess: "2024-03-14"
    }
};

export const reportData: ReportData = {
    certificateStatus: {
        isEligible: false,
        requiredTests: 3,
        completedTests: 1,
        minimumScore: 70,
        currentAverageScore: 85
    },
    completedModules: [
        {
            name: "Pedagogical Approaches",
            completionDate: "2024-03-14",
            score: 85,
            certificate: null
        }
    ]
};