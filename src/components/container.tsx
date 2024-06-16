'use client';

import c from 'clsx';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isRow?: boolean;
}

export default function Container({ children, className, isRow }: ContainerProps) {
  return (
    <div
      className={c(
        'flex px-6 sm:px-8',
        isRow ? 'flex-row items-center' : 'flex-col justify-center',
        className
      )}
    >
      {children}
    </div>
  );
}
