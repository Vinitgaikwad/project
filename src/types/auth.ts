import { User } from 'firebase/auth';

export interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

export interface UserData {
    uid: string;
    email: string;
    name: string;
    category: string;
    affiliation: string;
    whatsappNumber: string;
    vuAccountNumber?: string;
    createdAt: Date;
}