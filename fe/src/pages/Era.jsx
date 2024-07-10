import '../styles/era.css';

export default function Era() {
  const events = [
    {
      id: 1,
      title: '첫 번째 사건',
      summary: '사건 요약 내용'
    },
    {
      id: 2,
      title: '두 번째 사건',
      summary: '사건 요약 내용'
    },
    {
      id: 3,
      title: '세 번째 사건',
      summary: '사건 요약 내용'
    }
  ];

  return (
    <div id="wrapper3">
      {events.map((event) => (
        <a key={event.id} href={`/title/${event.id}`} className='event-link'>
          <div className="event">
            <h3 className="event-title">{event.title}</h3>
            <p className="sum">{event.summary}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
