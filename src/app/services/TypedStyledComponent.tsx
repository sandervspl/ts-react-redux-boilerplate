import * as React from 'react';

export default function<T>(Element: string): React.StatelessComponent<T> {
  const Component: React.StatelessComponent<T> = (props: T) => <Element {...props} />;
  return Component;
};
