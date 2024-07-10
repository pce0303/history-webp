import '../styles/main.css';

export default function Main() {
  return(
    <div id="wrapper">
      <h1>title</h1>
      <a href="/era/three"><div className="era"><p>삼국</p></div></a>
      <a href="/era/korea"><div className="era"><p>고려</p></div></a>
      <a href="/era/josun"><div className="era"><p>조선</p></div></a>
      <a href="/era/modern"><div className="era"><p>근대</p></div></a>
    </div>
  )
}