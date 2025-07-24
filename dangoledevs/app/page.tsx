import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-summer-sand font-sans">
      {/* Header */}
      <header className="bg-summer-yellow shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif text-summer-coral mb-2 drop-shadow-sm">
            Dang Ole Devs
          </h1>
          <p className="text-lg text-summer-green italic">
            Making fun & simple mobile apps and games, y’all!
          </p>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto max-w-2xl w-full mx-auto px-4 py-10 bg-summer-white rounded-lg shadow mt-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-summer-coral">
            Who We Are
          </h2>
          <p className="text-summer-green mb-4">
            Dang Ole Devs is a folksy little studio dedicated to making mobile games and apps that are simple, fun, and easy to pick up.
            We believe in keeping things light-hearted and accessible for everyone—just like a sunny afternoon on the porch.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-summer-yellow">
            Our Creations
          </h2>
          <ul className="list-disc list-inside text-summer-blue">
            <li>Tap-a-Doodle: A doodlin’ game for all ages</li>
            <li>Chick'n Clicker: The silliest chicken tapping you’ll ever see</li>
            <li>Y’all Note: The easiest notes app, as simple as pie</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-summer-blue mt-auto py-4 shadow-inner">
        <div className="max-w-2xl mx-auto px-4 text-center text-summer-coral text-sm">
          <div>
            Contact:{" "}
            <a
              href="mailto:hello@dangoledevs.com"
              className="underline hover:text-summer-yellow"
            >
              hello@dangoledevs.com
            </a>
          </div>
          <div className="mt-1">
            &copy; {new Date().getFullYear()} Dang Ole Devs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}