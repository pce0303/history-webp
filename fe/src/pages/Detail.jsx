import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/detail.css';

export default function Detail() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/title/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div id="wrapper4">
      {event ? (
        <div id='event-wrapper'>
          <h1 className="detail-title">{event.title}</h1>
          <p className="detail-value" id="process">{event.detail}</p>
        </div>
      ) : (
        <p id='load'>Loading...</p>
      )}
    </div>
  );
}
