export type authcontextTypes = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    setAvailableUnits: any;
    availableUnits: number;
    loadingAuthState: boolean;
};
