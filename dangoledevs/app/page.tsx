import './globals.css';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Dang Ole Devs</h1>
        <p className="hero-tagline">Crafting Folksy and Whimsical Web Apps & Mobile Games</p>
      </section>

      <section className="folksy-section" id="about">
        <h2>About Us</h2>
        <p>
          At Dang Ole Devs, we believe in the magic of play.
          Our small team of creative folks builds web apps and mobile games that spark smiles, laughter, and a sense of community.
          Inspired by the warmth of summer and the charm of folk art, our creations are made to brighten your day!
        </p>
      </section>

      <section className="folksy-section" id="what-we-make">
        <h2>What We Make</h2>
        <ul>
          <li>🌻 Playful web apps to add a little sunshine to your day</li>
          <li>🍉 Cozy, casual mobile games for all ages</li>
          <li>🧩 Social experiences that bring friends together</li>
        </ul>
      </section>

      <section className="folksy-section" id="contact">
        <h2>Contact</h2>
        <p>
          Want to collaborate, say hello, or just share a fun idea?<br />
          Email us at <a href="mailto:admin@dangoledevs.com">admin@dangoledevs.com</a>
        </p>
      </section>
    </main>
  );
}