import { useRouter } from 'next/dist/client/router';
import { getFilteredEvents } from '../../hooks/dummy-data';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug as [string, string];
  console.log(filterData);

  if (!filterData) {
    return <p className='center'>Loading... </p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter.</p>;
  }

  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
};

export default FilteredEventsPage;
