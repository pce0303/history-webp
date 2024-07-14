import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/era.css';

export default function Era() {
  const [events, setEvents] = useState([]);
  const { era } = useParams();
  console.log(`Using era parameter: ${era}`); // 디버그 로그 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/era/${era}`);
        console.log('Fetched data:', res.data);
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [era]);

  return (
    <div id="wrapper3">
      {Array.isArray(events) && events.length > 0 ? (
        events.map((event) => (
          <a key={event.id} href={`/title/${event.id}`} className='event-link'>
            <div className="event">
              <h3 className="event-title">{event.title}</h3>
              <p className="sum">{event.summary}</p>
            </div>
          </a>
        ))
      ) : (
        <p>Loading...</p> // 데이터가 없을 때 로딩 상태 표시
      )}
    </div>
  );
}
