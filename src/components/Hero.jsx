import AsciiPortrait from "./AsciiPortrait";

export default function Hero() {
  return (
    <section className="title-page">
      <div className="title-copy">
        <h1 className="title-name">
          Bhuwan
          <br />
          S. Koirala
        </h1>
        <p className="title-lede">
          Software engineer and tech lead in Perth, Western Australia. I build
          enterprise platforms with React, Next.js, Angular and React Native,
          and lead the teams that ship them.
        </p>
        <p className="title-note">
          Five years building software, currently project tech lead at Selise
          Digital Platforms. Originally from Thimphu, Bhutan. Speaks English,
          Nepali, Hindi and Dzongkha.
        </p>
      </div>
      <AsciiPortrait />
    </section>
  );
}
