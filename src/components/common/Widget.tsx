import { ReactChild } from 'react';

export interface WidgetProps {
  title: string;
  children?: ReactChild | ReactChild[];
}

export function Widget({ title, children }: WidgetProps) {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
}
