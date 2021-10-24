import { VFC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Event } from '../../hooks/dummy-data';
import classes from './event-item.module.css';

type Props = {
  [K in keyof Pick<
    Event,
    'title' | 'image' | 'date' | 'location' | 'id'
  >]: Event[K];
};

const EventItem: VFC<Props> = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattetAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={image} alt={title} width='50' height='50' />
      <div className={classes.content}>
        <h2 className={classes.summary}>{title}</h2>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattetAddress}</address>
        </div>
        <div className={classes.action}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
