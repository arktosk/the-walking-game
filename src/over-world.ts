export interface OverWorldConfig {
  canvasElement: HTMLCanvasElement;
}

export class OverWorld {
  canvasElement: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor({ canvasElement }: OverWorldConfig) {
    this.canvasElement = canvasElement;
    const context = canvasElement.getContext("2d");
    if (context == null) {
      throw new Error("The 2D context of canvas is unreachable");
    }
    this.context = context;
  }
}
