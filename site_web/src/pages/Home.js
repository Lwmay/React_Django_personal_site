import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import background from "../assets/img/main_img.png";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
      <div className="off-canvas-sidebar">
          <Navigation />
          <div className="wrapper wrapper-full-page">
              <div className="page-header home-page header-filter"
                   style={{ backgroundImage: `url(${background})` }}>
                  <div className="content-center">
                      <p>Je suis</p>
                      <h1 className="title">Laurent May</h1>
                      <h2>Candidat pour un emploi de <b>Data Analyst</b> à la Réunion</h2>
                      <div className="home-button">
                          <NavLink exact to="/portfolio" className="nav-link-home">
                              <button className="btn btn-warning">
                                  Mes réalisations
                              </button>
                          </NavLink>
                          <NavLink exact to="/a-propos" className="nav-link-home">
                              <button className="btn btn-warning">
                                  A propos de moi
                              </button>
                          </NavLink>
                      </div>
                  </div>
                  <footer>
                      <Footer />
                  </footer>
              </div>
          </div>
      </div>
  )
}

export default Home;