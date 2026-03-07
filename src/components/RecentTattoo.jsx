import React, { useEffect, useState } from "react";
import { databases, APPWRITE_IDS } from "../appwrite/client";
import { Query } from "appwrite";
import { Link } from "react-router-dom";

const RecentTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchTattoos() {
      const res = await databases.listDocuments(
        APPWRITE_IDS.databaseId,
        APPWRITE_IDS.portfolioCollectionId,
        [Query.orderDesc("$createdAt"), Query.limit(3)],
      );

      setTattoos(res.documents);
    }

    fetchTattoos();
  }, []);

  return (
    <section className="py-10 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}

        <div className="text-center mb-12">
          <h2 className="font-cinzel font-semibold text-3xl tracking-wide">
            Recent Tattoos
          </h2>

          <div className="w-15 h-0.5 bg-amber-400 mx-auto mt-4"></div>
        </div>

        {/* Tattoo Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tattoos.map((tattoo) => (
            <div
              key={tattoo.$id}
              className="relative group overflow-hidden rounded-lg border border-zinc-800 hover:border-amber-400 transition cursor-pointer"
              onClick={() => setSelected(tattoo.imageUrl)}
            >
              <img
                src={tattoo.imageUrl}
                alt="tattoo"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* hover overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-amber-400 text-lg font-medium">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Button */}

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-block bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-md text-black font-medium transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>

      {/* Full Image Modal */}

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="full tattoo"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          <button className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400">
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default RecentTattoo;
