/**
 * ADMIN PORTFOLIO PAGE
 *
 * - Protected by Appwrite email/password authentication
 * - Lets admin upload a tattoo image + details
 * - Saves file to Appwrite Storage and metadata to Appwrite database "portfolio"
 */

import { useEffect, useState } from "react";
import { ID } from "appwrite";
import { account, storage, databases, APPWRITE_IDS } from "../appwrite/client";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export default function AdminPortfolio() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [title, setTitle] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [accent, setAccent] = useState("");
  const [file, setFile] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");

  // ✅ Check admin session
  useEffect(() => {
    account
      .get()
      .then((u) => {
        setUser(u);
        setAuthLoading(false);
      })
      .catch(() => {
        setUser(null);
        setAuthLoading(false);
      });
  }, []);

  // ✅ Login
  async function handleLoginSubmit(event) {
    event.preventDefault();
    setAuthError("");

    try {
      await account.createEmailPasswordSession(
        loginForm.email,
        loginForm.password
      );

      const u = await account.get();
      setUser(u);
    } catch (err) {
      console.error("Admin login error:", err);
      setAuthError(err.message || "Login failed");
    }
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  }

  // ✅ Logout
  async function handleLogout() {
    try {
      await account.deleteSession("current");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null);
    }
  }

  // ✅ Save Portfolio Item
  async function handleSave(event) {
    event.preventDefault();

    setSaveMessage("");
    setSaveError("");

    if (!file) {
      setSaveError("Please choose an image file.");
      return;
    }

    if (!title) {
      setSaveError("Please enter a title.");
      return;
    }

    try {
      setSaving(true);

      // 1️⃣ Upload image
      const fileResult = await storage.createFile(
        APPWRITE_IDS.bucketId,
        ID.unique(),
        file
      );

      const fileId = fileResult.$id;

      // 2️⃣ Create public image URL
      const base = endpoint.replace(/\/+$/, "");
      const imageUrl = `${base}/storage/buckets/${APPWRITE_IDS.bucketId}/files/${fileId}/view?project=${projectId}`;

      // 3️⃣ Save document
      await databases.createDocument(
        APPWRITE_IDS.databaseId,
        APPWRITE_IDS.portfolioCollectionId,
        ID.unique(),
        {
          title,
          style,
          size,
          accent,
          imageId: fileId,
          imageUrl,
          createdAt: new Date().toISOString(),
        }
      );

      // ✅ Reset form
      setSaveMessage("Tattoo added to portfolio.");
      setTitle("");
      setStyle("");
      setSize("");
      setAccent("");
      setFile(null);

      // ✅ FIXED (pure JS — no TypeScript)
      const input = document.getElementById("tattoo-image");
      if (input) input.value = "";
    } catch (err) {
      console.error("Error saving portfolio item:", err);
      setSaveError(err.message || "Failed to save portfolio item.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="py-16 px-4 bg-stone-950">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <p className="text-amber-500/90 text-xs uppercase tracking-[0.3em]">
            Admin
          </p>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-stone-100">
              Manage Portfolio
            </h1>

            {user && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-stone-400 hover:text-amber-300 border border-stone-700 rounded-full px-3 py-1"
              >
                Sign out
              </button>
            )}
          </div>
        </header>

        {/* Loading */}
        {authLoading && (
          <div className="text-amber-200">Checking admin session…</div>
        )}

        {/* LOGIN FORM */}
        {!authLoading && !user && (
          <form
            onSubmit={handleLoginSubmit}
            className="space-y-4 bg-stone-900 border border-stone-800 p-6 rounded-2xl max-w-sm"
          >
            <h2 className="text-stone-100 text-sm font-semibold">
              Admin sign in
            </h2>

            {authError && (
              <div className="text-red-300 text-xs">{authError}</div>
            )}

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <button className="w-full bg-amber-600 py-2 rounded text-xs font-semibold">
              Sign in
            </button>
          </form>
        )}

        {/* ADMIN FORM */}
        {!authLoading && user && (
          <form
            onSubmit={handleSave}
            className="space-y-4 bg-stone-900 border border-stone-800 p-6 rounded-2xl"
          >
            <h2 className="text-stone-100 text-sm font-semibold">
              Add new tattoo
            </h2>

            {saveError && (
              <div className="text-red-300 text-xs">{saveError}</div>
            )}

            {saveMessage && (
              <div className="text-emerald-300 text-xs">{saveMessage}</div>
            )}

            <input
              required
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <input
              placeholder="Style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <input
              placeholder="Size / placement"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <input
              placeholder="Accent text"
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="w-full p-2 bg-stone-950 border border-stone-700 rounded text-xs text-white"
            />

            <input
              id="tattoo-image"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="text-xs text-white"
            />

            <button
              disabled={saving}
              className="bg-amber-600 px-4 py-2 rounded text-xs font-semibold"
            >
              {saving ? "Saving…" : "Save to portfolio"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}