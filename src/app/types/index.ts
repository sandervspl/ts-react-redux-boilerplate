export { History } from 'history';
import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';

// Make generics optional
export interface RouteComponentProps<P = any, C = any> extends IRouteComponentProps<P, C> {}

export * from 'services/types';

export * from 'app/ducks';
export * from 'ducks/types';
export * from 'ducks/test/types';

export * from 'styles/types';
