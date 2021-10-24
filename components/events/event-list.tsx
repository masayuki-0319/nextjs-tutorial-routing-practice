import { VFC } from 'react';

import { Event } from '../../hooks/dummy-data';
import EventItem from './event-item';

type Props = {
  items: Event[];
};

const EventList: VFC<Props> = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.title}
            image={event.image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
