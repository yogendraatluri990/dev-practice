import React from "react";



export interface ToDo {
  header: string;
  caption: string;
  tasks?: React.ReactNode[];
  clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ToDoButton {
    onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void
}