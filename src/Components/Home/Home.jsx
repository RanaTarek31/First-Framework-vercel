import "./Home.css";
import img from '../../assets/profile.svg'


export default function Home() {
  return (
    <>
    <header>
      <div className="container d-flex align-items-center flex-column">
        <div className="img">
          <img width='250px' src={img} alt="profile" />
        </div>
        <h1 className="fw-semibold text-white">Start Framework</h1>
        <div className="divider" >
          <i className="fa-solid fa-star fa-xlg"></i>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
    </>
  )
}
