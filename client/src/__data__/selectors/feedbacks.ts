import { Feedback, State, Status } from '../types';

export const status = (state: State): Status => {
    return state.feedbacks.status;
};

export const data = (state: State): Feedback[] => {
    return state.feedbacks.data;
};
