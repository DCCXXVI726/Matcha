import { Feedback, State, Status } from '../../types';

export const status = (state: State): Status => state.loginPage.feedbacks.status;

export const data = (state: State): Feedback[] => state.loginPage.feedbacks.data;
