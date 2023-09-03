import React from "react";

export interface Task {
  id: number;
  name: string;
  priority: 'High' | 'Low';
  status: 'pending' | 'inProgress' | 'Completed';
  errorMessage?: string;
}

export interface ToDo {
  header: string;
  message: string;
  tasks: Task[];
}


export interface ToDoBtn {
  clicked: (event: React.MouseEvent<HTMLButtonElement>) => void
}