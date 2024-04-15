import { StateHistory } from "./state.model";
import { States } from "./states.model";

export class Task {
    title!: string;
    description!: string;
    dueDate!: Date;
    completed!: boolean;
    currentState!: string;
    notes: string[] = [""];
    stateHistory: StateHistory[] = [];
    state: string = ''
}