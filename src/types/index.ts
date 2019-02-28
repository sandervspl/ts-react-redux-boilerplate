import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';
import { MapStateToProps as ReduxMapStateToProps } from 'react-redux';
import { ReduxState } from 'ducks/types';

export { History } from 'history';

export * from 'services/types';

export * from 'ducks/types';
export * from 'ducks/test/types';

export * from 'styles/types';

// Make generics optional
export interface RouteComponentProps<P = any, C = any> extends IRouteComponentProps<P, C> {}

// Add Redux state to type, component props optional
export type MapStateToProps<P = any> = ReduxMapStateToProps<any, P, ReduxState>;

export type AppType = 'client' | 'server';
export type EnvType = 'development' | 'acceptation' | 'production';
