import * as Preact from "preact";
import '../styles/app.css';
import windowsIcon from "../assets/windows.svg"
import ArrowIcon from "../assets/arrow.svg?react";
import cIcon from "../assets/c.svg";
import cppIcon from "../assets/cpp.svg";
import tsIcon from "../assets/ts.svg";
import browserIcon from "../assets/browser.svg";
import { useState } from "preact/hooks";

type PlatformType = "windows" | "linux" | "browser";
type Platform = {
    type: PlatformType;
    desc?: string;
};

type TechnologyType =  "c" | "c++" | "rust" | "ts" | "opengl" | "opencl" | "react";
type Technology = {
    type: TechnologyType;
    desc?: string;
};

type ProjectProps = {
    name: string;
    codeLink: string;
    shortDesc: string;
    platforms: Platform[];
    technologies: Technology[];
    children?: Preact.ComponentChildren;
};

type ProjectIconListProps = {
    platforms: Platform[];
    technologies: Technology[];
};

export const Projects: Preact.FunctionalComponent = () => {
  return (
      <section id="projects">
        <h2>Projects</h2>
        <ul>
            <Project
                name="Fizix"
                codeLink="https://github.com/Dezzmeister/fizix"
                shortDesc="A 3D engine with simple softbody physics simulation."
                platforms={[{
                    type: "windows"
                }]}
                technologies={[{
                    type: "c++"
                }, {
                    type: "opengl"
                }]}
            >
                <img src="./soft-physics-demo.gif" alt="A pendulum frame constructed of spheres and rods, with a double pendulum swinging from the apex." />
                <p>
                    Fizix can simulate particles interacting with simple constraints and surfaces. In this demo,
                    the particles are drawn as red spheres and rigid constraints are drawn as blue rods. Ropes,
                    which are drawn as black strings, are simulated as a series of small particles constrained
                    by rods. In this GIF the camera is not moving; the pendulum frame moves opposite the pendulum
                    to conserve momentum.
                </p>
            </Project>
            <Project
                name="FCAD"
                codeLink="https://github.com/Dezzmeister/fizix/tree/master/fcad"
                shortDesc="A simple parametric CAD program using the Fizix 3D engine, inspired by Vim."
                platforms={[{
                    type: "windows"
                }]}
                technologies={[{
                    type: "c++"
                }, {
                    type: "opengl"
                }]}
            >
                <img src="./fcad-demo.gif" alt="A Vim-like CAD interface being used to manipulate a model and adjust model parameters." />
                <p>
                    This is a simple CAD program based on the Fizix engine above. FCAD doesn't actually use any of
                    the physics code in Fizix: it uses the event system, OpenGL code, VClip code, and builds upon
                    it. FCAD supports parameters like <code>$s</code> (a scalar) and <code>@v</code> (a vector).
                    There is a small expression language built in that allows vertices to be defined by nontrivial
                    compositions of parameters, like <code>x (@v + @y)</code> (the x coordinate of parameter
                    {" "}<code>@v</code> plus parameter <code>@y</code>).
                </p>
            </Project>
            <Project
                name="cappls"
                codeLink="https://github.com/Dezzmeister/cappls"
                shortDesc="Zero-copy screen capture tool for Windows. Used to record all of the videos and animated GIFs on this site."
                platforms={[{
                    type: "windows"
                }]}
                technologies={[{
                    type: "c"
                }]}
            />
            <Project
                name="gru-http"
                codeLink="https://github.com/Dezzmeister/gru-http"
                shortDesc="Fast, simple HTTP server. Used to serve this site."
                platforms={[{
                    type: "linux"
                }]}
                technologies={[{
                    type: "c"
                }]}
            />
            <Project
                name="SynTypesTS"
                codeLink="https://github.com/Dezzmeister/SynTypesTS"
                shortDesc="Type-instantiation extension for WinDbg, and the first WinDbg extension written in TypeScript."
                platforms={[{
                    type: "windows"
                }]}
                technologies={[{
                    type: "ts"
                }]}
            >
                I wrote this to reverse engineer the mixing algorithm in the game Schedule One (described below).
                The Windows Debugger supports JavaScript extensions but not TypeScript extensions, so I
                created a build process and template repo for TypeScript WinDbg extensions. So far, this
                is the only WinDbg extension that makes use of modules and is written in TypeScript.
            </Project>
            <Project
                name="mix.ooo"
                codeLink="https://github.com/Dezzmeister/mix-calculator"
                shortDesc="Mix calculator for the game Schedule One, based on the actual mixing algorithm."
                platforms={[{
                    type: "browser"
                }]}
                technologies={[{
                    type: "ts"
                }]}
            >
                <a href="https://mix.ooo" target="_blank" rel="noopener noreferrer">https://mix.ooo</a>
                <p>
                    To my knowledge this is the only mix calculator that uses the actual mixing algorithm in Schedule One.
                    There are other mix calculators, but they rely on a list of empirical rules. The actual algorithm is simple
                    and elegant. I decompiled the game and analyzed the binary to understand this algorithm.
                </p>
            </Project>
            <Project
                name="TsengCoin Core"
                codeLink="https://github.com/Dezzmeister/tsengcoin"
                shortDesc="Core client for a custom cryptocurrency similar to Bitcoin. Built with a group for a semester-long Distributed Systems class."
                platforms={[{
                    type: "windows"
                }, {
                    type: "linux"
                }]}
                technologies={[{
                    type: "rust"
                }, {
                    type: "opencl",
                    desc: "One of the two block mining kernels is written in OpenCL C"
                }]}
            />
        </ul>
      </section>
  );
};

const Project: Preact.FunctionalComponent<ProjectProps> = ({
    name,
    codeLink,
    shortDesc,
    platforms,
    technologies,
    children
}) => {
    const [expanded, setExpanded] = useState(true);
    const hasDetails = !!children;

    return (
        <li className="project">
            <h3>
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name}
                </a>
            </h3>
            <p>{shortDesc}</p>
            <ProjectIconList platforms={platforms} technologies={technologies} />
            {hasDetails && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-label={expanded ? "Collapse details" : "Expand details"}
                    onClick={() => setExpanded(e => !e)}
                    className="details-button"
                    title={expanded ? "Hide details" : "Show details"}
                >
                    <ArrowIcon className={expanded ? "" : "down-arrow"} />
                </button>
            )}
            {expanded && (
                <div className="project-details">
                    {children}
                </div>
            )}
        </li>
    );
};

const ProjectIconList: Preact.FunctionalComponent<ProjectIconListProps> = ({
    platforms,
    technologies
}) => {
    return (
        <div className="project-icon-list">
            <div className="platforms">
                {platforms.map((platform, i) => <PlatformIcon {...platform} key={i} />)}
            </div>
            <div className="technologies">
                {technologies.map((technology, i) => <TechnologyIcon {...technology} key={i} />)}
            </div>
        </div>
    );
}

const PlatformIcon: Preact.FunctionalComponent<Platform> = ({ type, desc }) => {
    switch (type) {
        case "windows":
            return (
                <img
                    src={windowsIcon}
                    alt="Windows"
                    className="icon"
                    title={desc || "Runs on Windows 10 and up"}
                />
            );
        case "linux":
            return (
                <img
                    src="icons/linux.png"
                    alt="Linux"
                    className="icon"
                    title={desc || "Runs on Linux"}
                />
            );
        case "browser":
            return (
                <img
                    src={browserIcon}
                    alt="Browser"
                    className="icon"
                    title={desc || "Runs in the browser"}
                />
            );
    }
};

const TechnologyIcon: Preact.FunctionalComponent<Technology> = ({ type, desc }) => {
    switch (type) {
        case "c":
            return (
                <img
                    src={cIcon}
                    alt="C"
                    className="icon"
                    title={desc || "Written in C"}
                />
            );
        case "c++":
            return (
                <img
                    src={cppIcon}
                    alt="C++"
                    className="icon"
                    title={desc || "Written in C++"}
                />
            );
        case "rust":
            return (
                <img
                    src="icons/rust.svg"
                    alt="Rust"
                    className="icon"
                    title={desc || "Written in Rust"}
                />
            );
        case "ts":
            return (
                <img
                    src={tsIcon}
                    alt="TypeScript"
                    className="icon"
                    title={desc || "Written in TypeScript"}
                />
            );
        case "opengl":
            return (
                <img
                    src="icons/opengl.png"
                    alt="OpenGL"
                    className="icon"
                    title={desc || "Uses OpenGL"}
                />
            );
        case "opencl":
            return (
                <img
                    src="icons/opencl.png"
                    alt="OpenCL"
                    className="icon"
                    title={desc || "Uses OpenCL"}
                />
            );
        case "react":
            return (
                <img
                    src="icons/react.svg"
                    alt="React"
                    className="icon"
                    title={desc || "Uses React"}
                />
            );
    }
}