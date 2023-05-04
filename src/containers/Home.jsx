import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="welcome">
        <h1>Welcome To Notes</h1>
      </div>
      <div className="home-img">
        <span className="note-img">📝</span>
        <span className="note-img">📝</span>
        <span className="note-img">📝</span>
        <span className="folder-img">📂</span>
      </div>
      <Link to="/notes">
        <button className="btn">Get Started</button>
      </Link>

    </section>
  )
}

export default Home;