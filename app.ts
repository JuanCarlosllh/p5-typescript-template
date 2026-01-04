import p5 from "p5";
import init, { type p5SVG } from "p5.js-svg";

const HTML_BG = "#1a1a1a";
const CANVAS_BG = "#f6f6f6";

const CANVAS_WIDTH = 595;
const CANVAS_HEIGHT = 842;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;
const SCALE = 0.8;

// CSS variables
document.documentElement.style.setProperty("--bg-color", HTML_BG);

const USE_SVG = true;

if (USE_SVG) {
	init(p5);
}

const s = (p: p5SVG) => {
	p.setup = () => {
		p.noLoop();
		p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, p.SVG);
	};

	p.draw = () => {
		p.background(CANVAS_BG);
		p.fill(255);
		p.circle(100, 100, 100);
	};
};

const canvasElement = document.getElementById("canvas");
if (!canvasElement) {
	throw new Error("canvas container elemt not found");
}
new p5(s, canvasElement);
