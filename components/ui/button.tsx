import { VFC } from 'react';
import Link from 'next/link';

import classes from './button.module.css';

type Props = {
  link: string;
  children: JSX.Element[];
};

export const Button: VFC<Props> = (props) => {
  const { link, children } = props;

  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};
