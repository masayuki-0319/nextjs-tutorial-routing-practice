import { VFC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Event } from '../../hooks/dummy-data';

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
    <li>
      <Image src={image} alt={title} width='200' height='100' />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattetAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
