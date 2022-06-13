import { Entity } from "./entity";

export class KeyboardController {
  private readonly pressedKeys: string[] = [];

  private readonly velocity = 32 / 4;

  #keyDownListener = (event: KeyboardEvent) => {
    if (this.pressedKeys.includes(event.key)) {
      return;
    }
    this.pressedKeys.push(event.key);
  };

  #keyUpListener = (event: KeyboardEvent) => {
    const keyIndex = this.pressedKeys.indexOf(event.key);
    if (keyIndex < 0) {
      return;
    }

    this.pressedKeys.splice(keyIndex, 1);
    console.log("keyup", this.pressedKeys);
  };

  constructor(private readonly player: Entity) {
    window.addEventListener("keydown", this.#keyDownListener);
    window.addEventListener("keyup", this.#keyUpListener);
  }

  onUpdate() {
    for (const key of this.pressedKeys) {
      console.log(key);

      switch (key) {
        case "w":
        case "ArrowUp": {
          this.player.position.y -= this.velocity;
          break;
        }
        case "s":
        case "ArrowDown": {
          this.player.position.y += this.velocity;
          break;
        }
        case "a":
        case "ArrowLeft": {
          this.player.position.x -= this.velocity;
          break;
        }
        case "d":
        case "ArrowRight": {
          this.player.position.x += this.velocity;
          break;
        }
      }
    }
  }

  destroy() {
    window.removeEventListener("keydown", this.#keyDownListener);
    window.removeEventListener("keyup", this.#keyUpListener);
  }
}
