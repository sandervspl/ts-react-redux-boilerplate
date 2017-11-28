/*
 * __NOTE: What are interfaces?
 * Interfaces are a blueprint for data. What should a data type/structure look like?
 * You can compare interfaces to propTypes.
 *
 * Differences:
 * - Stricter type checking
 * - Better IDE autocomplete/suggestion support (IDE now knows what the variable's type is,
     so it can make better suggestions)
 * - Better reusability.
 * - Can extend and modify
 * - With interfaces, everything is required UNLESS you tell otherwise (with propTypes it's the other way around)
 */

/*
 * REDUX
 */

// initial state
export interface IReducerState {
    error?: boolean;
    loading?: boolean;
}

// default action
export interface IAction {
    type: string;
    payload?: any;
    error?: boolean;
    meta?: any;
}
