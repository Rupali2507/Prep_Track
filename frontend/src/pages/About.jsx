import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function About() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}

      <div
        className={`min-h-screen bg-[#0b1120] text-white flex flex-col items-center px-6 py-16 ${
          location.pathname === "/about" ? "pt-40" : ""
        }`}
      >
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-sky-400">Prep&Track</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            Prep&Track is designed to help students and professionals streamline
            their learning journey. Whether you're preparing for technical
            interviews, mastering algorithms, or collaborating with peers —
            we’ve got you covered. Our mission is to make preparation more
            organized, goal-driven, and measurable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#111a2b] p-6 rounded-2xl shadow-lg hover:shadow-sky-500/30 transition">
              <h3 className="text-2xl font-semibold mb-3 text-sky-400">
                📚 Learn Smart
              </h3>
              <p className="text-gray-400">
                Structured roadmaps and curated resources to help you learn more
                effectively and stay focused on what matters most.
              </p>
            </div>

            <div className="bg-[#111a2b] p-6 rounded-2xl shadow-lg hover:shadow-sky-500/30 transition">
              <h3 className="text-2xl font-semibold mb-3 text-sky-400">
                🧠 Track Progress
              </h3>
              <p className="text-gray-400">
                Monitor your daily performance, measure your consistency, and
                visualize your growth over time.
              </p>
            </div>

            <div className="bg-[#111a2b] p-6 rounded-2xl shadow-lg hover:shadow-sky-500/30 transition">
              <h3 className="text-2xl font-semibold mb-3 text-sky-400">
                🤝 Collaborate
              </h3>
              <p className="text-gray-400">
                Join Collab Rooms, share knowledge, discuss challenges, and grow
                together with like-minded learners.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              To empower learners worldwide by combining community, technology,
              and motivation — turning preparation into a consistent and
              enjoyable habit.
            </p>
          </div>

          <button className="mt-12 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-sky-500/40 transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </>
  );
}
