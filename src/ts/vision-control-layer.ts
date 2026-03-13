import { HandleEmptyObject } from 'fvtt-types/utils';

class VisisonControlLayer extends foundry.canvas.layers.InteractionLayer {
    public override draw(
        options?: HandleEmptyObject<CanvasLayer.DrawOptions>,
    ): Promise<this> {
        return super.draw();
    }
}

export { VisisonControlLayer };
