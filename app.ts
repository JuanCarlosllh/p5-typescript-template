import p5 from "p5";
import init, { type p5SVG } from "p5.js-svg";

const HTML_BG = "#EAE0CF";
const CANVAS_BG = "#E0D3AF";

const CANVAS_WIDTH = 595;
const CANVAS_HEIGHT = 842;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;

// CSS variables
document.documentElement.style.setProperty("--bg-color", HTML_BG);

const USE_SVG = true;
const SCALE = 0.8;

if (USE_SVG) {
	init(p5);
}

const s = (p: p5SVG) => {
	const x = 100;
	const y = 100;

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

new p5(s);
