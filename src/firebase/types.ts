export type authcontextTypes = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    setAvailablePoints: any;
    availablePoints: number;
    loadingAuthState: boolean;
};
