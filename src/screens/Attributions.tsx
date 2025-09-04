import * as Preact from "preact";
import '../styles/app.css';
import ArrowIcon from "../assets/arrow.svg?react";
import windowsIcon from "../assets/windows.svg";
import cIcon from "../assets/c.svg";
import cppIcon from "../assets/cpp.svg";
import tsIcon from "../assets/ts.svg";
import browserIcon from "../assets/browser.svg";

export const Attributions: Preact.FunctionalComponent = () => {
  return (
    <main>
      <h1>Attributions</h1>
      <section>
        <span>
            <img src="icons/linux.png" alt="Linux penguin" className="icon-small" title="Linux" />
            <img src={cIcon} alt="C" className="icon-small" title="C" />
            <img src={cppIcon} alt="C++" className="icon-small" title="C++" />
            <img src="icons/rust.svg" alt="Rust" className="icon-small" title="Rust" />
            <img src={tsIcon} alt="TypeScript" className="icon-small" title="TypeScript" />
            <img src="icons/opengl.png" alt="OpenGL" className="icon-small" title="OpenGL" />
            <img src="icons/opencl.png" alt="OpenCL" className="icon-small" title="OpenCL" />
            <img src="icons/react.svg" alt="React" className="icon-small" title="React" />
        </span>
        <p>These icons were taken from <a href="https://techicons.dev/">techicons.dev</a>.</p>
      </section>
      <hr />
      <section>
        <span>
          <img src={browserIcon} alt="Web" className="icon-small" title="Browser" />
        </span>
        <p>This icon was taken from <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=4946'>Iconpacks</a>.</p>
      </section>
      <hr />
      <section>
        <span>
            <ArrowIcon className="icon-small" title="Up arrow" />
            <img src={windowsIcon} alt="Windows" className="icon-small" title="Windows" />
            <img src="blue.svg" alt="BSOD Blue" className="icon-small" title="BSOD Blue" />
        </span>
        <p>These icons were created by <a href="https://github.com/copilot">GitHub Copilot.</a></p>
      </section>
      <hr />
      <section>
        <p>
            All videos and GIFs were captured with <a href="https://github.com/Dezzmeister/cappls">cappls</a>{" "}
            and edited with <a href="https://online-video-cutter.com/">Online Video Cutter</a>.
        </p>
      </section>
      <hr />
      <section>
        <p>
            This site was built with <a href="https://preactjs.com/">Preact</a> and <a href="https://www.typescriptlang.org/">Typescript</a>.
            The site is served by <a href="https://github.com/Dezzmeister/gru-http">gru-http</a>.
        </p>
      </section>
    </main>
  )
};
