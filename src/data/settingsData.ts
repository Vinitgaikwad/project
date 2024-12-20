// notificationData.ts
export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: Date;
    isRead: boolean;
}

export interface NotificationSettings {
    emailEnabled: boolean;
    pushEnabled: boolean;
}

export const notificationData = {
    notifications: [
        {
            id: '1',
            title: 'New Assessment Available',
            message: 'A new assessment has been added to your dashboard.',
            timestamp: new Date(),
            isRead: false
        },
        {
            id: '2',
            title: 'Profile Update Required',
            message: 'Please update your profile information.',
            timestamp: new Date(),
            isRead: false
        },
        {
            id: '3',
            title: 'System Maintenance',
            message: 'Scheduled maintenance in 2 days.',
            timestamp: new Date(),
            isRead: false
        }
    ],
    settings: {
        emailEnabled: true,
        pushEnabled: true
    },
    unreadCount: 3
};