import { Feedback, State, Status } from '../../types';

export const status = (state: State): Status => {
    return state.loginPage.feedbacks.status;
};

export const data = (state: State): Feedback[] => {
    return state.loginPage.feedbacks.data;
};
