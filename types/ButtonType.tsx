import { ReactNode } from "react";

export interface ButtonType {
    icon?: ReactNode,
    iconPosition? : "left" | "right",
    title?: string
    extraStyle?:string
}

export interface ActionsButtonType {
    icon: ReactNode,
    id: number,
    count?: number,
    to: string
}