export interface State {
    token: string;
    authenticated: boolean;
}

export let initial: State = {
    token: null,
    authenticated: false
};
