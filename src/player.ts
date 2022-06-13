import { Entity } from "./entity";
import { KeyboardController } from "./keyboard-controller";
import { loadImage } from "./utils/load-image";

export class Player implements Entity {
  private sprite?: HTMLImageElement;
  private readonly keyboardController = new KeyboardController(this);
  position = { x: 50, y: 50 };

  async load() {
    const src = await import("./assets/pink-man-idle.png").then((module) => module.default);

    this.sprite = await loadImage(src);
  }

  update(deltaTime: number) {
    this.keyboardController.onUpdate();
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.sprite == null) {
      return;
    }
    const { x, y } = this.position;
    ctx.drawImage(this.sprite, 0, 0, 32, 32, x, y, 32, 32);
  }
}
