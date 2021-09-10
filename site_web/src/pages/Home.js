import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div className="home">
          <nav>
              <Navigation />
          </nav>
          <header>
              <div className="banner">
                  <div className="banner-left">
                      <p>Je suis</p>
                      <h1>Laurent May</h1>
                      <p>Collecter, traiter, analyser et présenter les données - pour assister tous les jours
                          aux décisions business pour de meilleures performances.</p>
                      <p>La Réunion</p>
                  </div>
              </div>
          </header>
          <main>
              <div className="main-topic">
                  <ul>
                      <li>Mes projets</li>
                      <li>A propos de moi</li>
                  </ul>
              </div>
              <div className="fast-contact">
                  Formulaire Rapide
              </div>
          </main>
          <footer>
              <Footer />
          </footer>
      </div>
  )
}

export default Home;