import "./App.css";
import profilePic from "./assets/pfp.jpg";

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo-container">
          <h2>ryan davila</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#links">links</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile-section">
          <div className="profile-content">
            <div className="profile-image">
              {/* Profile image */}
              <img
                src={profilePic}
                alt="Profile"
                className="profile-image-content"
              />
            </div>
            <div className="bio-content">
              <p>Hi, I'm Ryan.</p>

              <blockquote>
                Tech enthusiast, Homelabber, Software Developer, Native New
                Yorker. Doge lover, Turtle parent, Tinkerer.
              </blockquote>
              <blockquote>
                I'm probably yelling at a side project that went sideways, or
                just typing away at one of my many keyboards.
              </blockquote>

              <p>... yeah that's all I got, I don't do much.</p>

              <p>
                I'm passionate about building and maintaining my homelab setup,
                exploring new technologies, and spending time staring at this
                turtle. When I'm not coding or configuring servers, I'm perhaps
                happy for once.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Ryan Davila. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
