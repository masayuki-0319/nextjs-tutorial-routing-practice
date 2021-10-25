import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../hooks/dummy-data';

const AllEventsPage = () => {
  const events = getAllEvents();
  console.log(events);

  return (
    <div>
      <h1>All Events Page</h1>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
