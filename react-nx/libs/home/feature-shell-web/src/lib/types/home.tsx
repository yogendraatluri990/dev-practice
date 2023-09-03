import React from "react";

export interface Home {
    title: string;
    message: string;
    isTag?: boolean;
}

export interface HomeState {
    hostElement: string;
    message: string;
}

export interface HomeDetail {
   content: React.ReactNode;
}