import logo from './logo.svg';
import './App.css';

function MemoryFilmWebsite() {
  const burgundy = '#6b1f2b';

  const headingStyle = {
    color: burgundy,
    fontFamily: 'DejaVu Sans, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  return (
    <div
      className="min-h-screen bg-black bg-cover bg-center bg-fixed text-gray-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.92)), url('/images/memory-background.png')",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-gray-800 bg-cover bg-center px-6 py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('/images/hero-shot.jpg')",
        }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-400">
            Short Film
          </p>

          <h1
            className="mb-6 text-6xl font-bold md:text-8xl"
            style={headingStyle}
          >
            Memory
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            A grieving husband turns to artificial intelligence and digital data
            reconstruction in a desperate attempt to resurrect the wife he lost.
            As memory and technology intertwine, he discovers that bringing
            someone back may come at the cost of what made them human.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#synopsis"
              className="rounded-2xl border border-gray-700 px-6 py-3 text-sm uppercase tracking-wider transition hover:border-gray-500 hover:bg-gray-900"
            >
              Explore Story
            </a>

            <a
              href="#publicity"
              className="rounded-2xl bg-[#6b1f2b] px-6 py-3 text-sm uppercase tracking-wider transition hover:opacity-90"
            >
              Release Info
            </a>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section id="synopsis" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold" style={headingStyle}>
            Plot Synopsis
          </h2>

          <div className="rounded-3xl border border-gray-800 bg-gray-950/90 p-8 shadow-2xl backdrop-blur-sm">
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Following the death of his wife, an unnamed husband becomes
              consumed by grief and isolation. Unable to accept her absence, he
              begins collecting fragments of her digital existence — voice
              notes, videos, photographs, messages, browsing habits, and
              archived memories.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Using experimental artificial intelligence systems, he attempts to
              reconstruct her personality and consciousness from the data she
              left behind. What begins as a coping mechanism slowly evolves
              into an obsession, blurring the boundaries between love, memory,
              and artificial life.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              As the recreated presence grows more convincing, the husband is
              forced to confront a devastating question: can technology truly
              restore the people we lose, or only imitate the memories we are
              unwilling to let go of?
            </p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="border-y border-gray-800 bg-black/70 px-6 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold" style={headingStyle}>
            Themes of AI
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Digital Resurrection',
                text: 'The film explores humanity’s growing desire to preserve consciousness and identity through artificial intelligence.',
              },
              {
                title: 'Memory & Grief',
                text: 'Memory examines how grief can distort reality, especially when technology offers impossible hope.',
              },
              {
                title: 'Ethics of AI',
                text: 'The story questions whether recreating a person digitally honours their memory or replaces it with imitation.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-800 bg-black/80 p-6 transition hover:border-[#6b1f2b]"
              >
                <h3
                  className="mb-4 text-2xl font-semibold"
                  style={headingStyle}
                >
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cast & Crew */}
      <section id="cast" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold" style={headingStyle}>
            Cast & Crew
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-800 bg-gray-950/90 p-8 backdrop-blur-sm">
              <h3
                className="mb-6 text-2xl font-semibold"
                style={headingStyle}
              >
                Principal Cast
              </h3>

              <ul className="space-y-4 text-lg text-gray-300">
                <li>
                  <span className="font-semibold text-white">Dan George</span>
                  {' '}— Husband
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Lauren Stones
                  </span>
                  {' '}— Wife
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950/90 p-8 backdrop-blur-sm">
              <h3
                className="mb-6 text-2xl font-semibold"
                style={headingStyle}
              >
                Crew
              </h3>

              <ul className="space-y-4 text-lg text-gray-300">
                <li>
                  <span className="font-semibold text-white">Dan George</span>
                  {' '}— Writer, Director, Lead Actor, Editor & Producer
                </li>

                <li>
                  <span className="font-semibold text-white">Dean Foley</span>
                  {' '}— Sound Recordist & DOP
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Bright Agbonwaneten
                  </span>
                  {' '}— Gaffer
                </li>

                <li>
                  <span className="font-semibold text-white">Adam Spuhler</span>
                  {' '}— Co-Editor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publicity */}
      <section
        id="publicity"
        className="border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold" style={headingStyle}>
            Publicity
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#6b1f2b] bg-black p-8 shadow-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
                Official Release Date
              </p>
              <p className="text-5xl font-bold text-white">31 May</p>
              <p className="mt-4 leading-relaxed text-gray-300">
                Memory premieres on 31st May. Additional screening and festival
                information can be announced here.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
                Teaser Trailer
              </p>

              <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-black text-center">
                <div>
                  <p className="mb-2 text-lg text-white">
                  https://www.youtube.com/watch?v=ZkXKbwF3mCs
                  </p>
                  <p className="text-sm text-gray-400">
                    MEMORY Teaser Trailer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-10 text-center text-sm text-gray-500">
        <p>© 2026 Memory — Short Film Project</p>
      </footer>
    </div>
  );
}

function App() {
  return (

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

  );
}

export default MemoryFilmWebsite;
