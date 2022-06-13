export interface Entity {
  position: { x: number; y: number };

  load(): Promise<void>;

  update(deltaTime: number): void;

  draw(ctx: CanvasRenderingContext2D): void;
}
