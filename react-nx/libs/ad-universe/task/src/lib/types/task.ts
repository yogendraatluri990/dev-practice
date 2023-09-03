export interface Task {
    id: number;
    name: string;
    status: 'Pending' | 'InProgress' | 'Completed';
}