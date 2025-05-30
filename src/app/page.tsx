export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start px-6 py-12">
      {/* Header / Hero Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          DAREMIND
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Créateur d’expériences immersives en VR, IA et applications web & mobiles.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-xl transition duration-200"
        >
          Nous contacter
        </a>
      </section>

      {/* Services */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">VR & Réalité immersive</h2>
          <p className="text-gray-400">
            Simulations et formations immersives conçues sur mesure avec Unity et des casques VR.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">Applications Web & Mobiles</h2>
          <p className="text-gray-400">
            Développement d’applications interactives multiplateformes, modernes et performantes.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">IA & Automatisation</h2>
          <p className="text-gray-400">
            Intégration de l’intelligence artificielle pour automatiser, prédire et optimiser.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 border-t border-gray-800 pt-6 w-full max-w-4xl">
        <p>© {new Date().getFullYear()} DAREMIND — Tous droits réservés.</p>
      </footer>
    </main>
  );
}
