import { useEffect, useState } from "react";
import { databases, APPWRITE_IDS } from "../appwrite/client";

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const res = await databases.listDocuments(
          APPWRITE_IDS.databaseId,
          APPWRITE_IDS.portfolioCollectionId
        );

        setItems(
          res.documents.map((doc) => ({
            id: doc.$id,
            title: doc.title,
            style: doc.style,
            size: doc.size,
            accent: doc.accent,
            imageUrl: doc.imageUrl,
          }))
        );

        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load portfolio");
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  return (
    <section id="portfolio" className="py-10 sm:py-12 lg:py-16   px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <header className="mb-10 text-center">
          <p className="font-popins text-red-500 text-xs uppercase tracking-[0.3em] mb-3 font-medium">
            Our Work
          </p>

          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-stone-100 mb-4">
            Signature Ink Gallery
          </h1>

          <p className="font-popins text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
            A curated selection of healed and fresh tattoos from InkArt Studio.
          </p>
        </header>

        {/* Loading */}
        {loading && (
          <div className="text-center text-red-400">Loading portfolio...</div>
        )}

        {/* Error */}
        {error && <div className="text-red-400 text-center">{error}</div>}

        {/* Portfolio Grid */}
        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-stone-900/70 border border-stone-800 hover:border-red-500 transition"
              >
                {/* Image */}
                <div
                  className="relative h-52 cursor-pointer"
                  onClick={() => setSelected(item.imageUrl)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-amber-400 text-sm">View</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 space-y-2">
                  <h2 className="font-cinzel text-lg font-semibold text-stone-100 group-hover:text-red-400 transition">
                    {item.title}
                  </h2>

                  <p className="font-popins text-xs uppercase text-stone-400">
                    {item.size}
                  </p>

                  <p className="text-sm text-stone-400">{item.accent}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="tattoo full"
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />

          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}