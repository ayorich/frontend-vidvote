import { ComponentType } from 'react';
export type privateRouteProps = {
    component: ComponentType;
    exact: boolean;
    path: string;
};
