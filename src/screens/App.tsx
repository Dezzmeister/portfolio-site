import * as Preact from "preact";
import '../styles/app.css';
import { Projects } from "../components/Projects";

export const App: Preact.FunctionalComponent = () => {
  return (
    <main>
      <h1>Joe Desmond</h1>
      <p>
        Software engineer focused on low-level systems, performance, and reliability.
        Experience in web development.
      </p>
      <a href="./attributions.html">Site Attributions</a>
      <Projects />
    </main>
  )
};
