import AsciiPortrait from "./AsciiPortrait";
import FitText from "./FitText";

export default function Hero() {
  return (
    <section className="hero">
      <FitText as="h1" className="hero-name">
        Bhuwan Koirala
      </FitText>
      <div className="hero-row">
        <p className="hero-lede">
          I build enterprise platforms with React, Next.js, Angular and React
          Native, and lead the teams that ship them.
        </p>
        <p className="hero-note">
          Project tech lead at Selise Digital Platforms. Five years of shipping
          software across e-commerce and telecom, mentoring six engineers along
          the way. From Thimphu, Bhutan; now in Perth.
        </p>
        <div className="hero-portrait">
          <AsciiPortrait size={5.5} />
        </div>
      </div>
    </section>
  );
}
