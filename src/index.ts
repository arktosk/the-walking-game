import "./assets/styles.css";
import { OverWorld } from "./over-world";
import { Player } from "./player";

const canvasElement = window.document.querySelector("canvas");

if (canvasElement == null) {
  throw new Error("Cannot find canvas element in DOM");
}

const overWorld = new OverWorld({ canvasElement });

const player = new Player();

const draw = (delta: number) => {
  player.update(delta);
  
  overWorld.context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  player.draw(overWorld.context);
  window.requestAnimationFrame(draw)
}

player.load().then(() => {
  draw(0);
});
