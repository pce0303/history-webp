import '../styles/nav.css';

export default function Nav() {
  return(
    <div id="wrapper2">
      <a className='nav-a' href="/">
        <button className='nav-btn'>메인</button>
      </a><hr />
      <a className='nav-a' href="/era/three">
        <button className='nav-btn'>삼국</button>
      </a><hr />
      <a className='nav-a' href="/era/korea">
        <button className='nav-btn'>고려</button>
      </a><hr />
      <a className='nav-a' href="/era/josun">
        <button className='nav-btn'>조선</button>
      </a><hr />
      <a className='nav-a' href="/era/modern">
        <button className='nav-btn'>근대</button>
      </a><hr />
      <p id='footer'>© 무신정변</p>
    </div>
  )
}