import '../styles/nav.css';

export default function Nav() {
  return(
    <div id="wrapper2">
      <a className='nav-a' href="/">
        <button className='nav-btn'>
        <img className='nav-img' src="/home.png" />
        메인</button>
      </a><hr />
      <a className='nav-a' href="/era/three">
        <button className='nav-btn'>
        <img className='nav-img' src="/fan.png" />
          삼국</button>
      </a><hr />
      <a className='nav-a' href="/era/korea">
        <button className='nav-btn'>
        <img className='nav-img' src="/janggu.png" />
        고려</button>
      </a><hr />
      <a className='nav-a' href="/era/josun">
        <button className='nav-btn'>
        <img className='nav-img' src="/gat.png" />
        조선</button>
      </a><hr />
      <a className='nav-a' href="/era/modern">
        <button className='nav-btn'>
        <img className='nav-img' src="/korea.png" />
        근대</button>
      </a><hr />
      <p id='footer'>© 무신정변</p>
    </div>
  )
}