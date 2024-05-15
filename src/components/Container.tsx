import { PropsWithChildren, HTMLAttributes, createElement } from 'react';
import { cn } from '@/lib/common';
import styles from '@/styles/components/Container.module.scss';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  as: 'main' | 'section' | 'div' | 'footer' | 'nav'; // TODO, GET DYNAMIC
}

export const Container = ({ children, className, as, ...rest }: Props) => {
  return createElement(
    as,
    {
      ...rest,
      className: cn([styles.root, className]),
    },
    children
  );
}