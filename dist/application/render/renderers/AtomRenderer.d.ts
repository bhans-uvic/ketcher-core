import { BaseRenderer } from "./BaseRenderer";
import { Atom } from "../../../domain/entities/CoreAtom";
export declare class AtomRenderer extends BaseRenderer {
    atom: Atom;
    private selectionElement?;
    private textElement?;
    constructor(atom: Atom);
    get scaledPosition(): import("../../..").Vec2;
    get center(): import("../../..").Vec2;
    private appendRootElement;
    private appendBody;
    private appendSelectionContour;
    protected appendHover(): any;
    showHover(): void;
    hideHover(): void;
    private get shouldHydrogenBeOnLeft();
    get isLabelVisible(): boolean;
    get labelLength(): 2 | 1 | 3;
    private appendLabel;
    appendSelection(): void;
    removeSelection(): void;
    drawSelection(): void;
    moveSelection(): void;
    show(): void;
    move(): void;
    remove(): void;
    protected appendHoverAreaElement(): void;
    protected removeHover(): void;
}
