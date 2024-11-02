import { DrawingEntity } from "./DrawingEntity";
import { Vec2 } from "./vec2";
import { Atom } from "./CoreAtom";
import { BondRenderer } from "../../application/render/renderers/BondRenderer";
export declare class Bond extends DrawingEntity {
    firstAtom: Atom;
    secondAtom: Atom;
    type: number;
    stereo: number;
    endPosition: Vec2;
    renderer: BondRenderer | undefined;
    cycles: never[];
    constructor(firstAtom: Atom, secondAtom: Atom, type?: number, stereo?: number);
    setRenderer(renderer: BondRenderer): void;
    get startPosition(): Vec2;
    get center(): Vec2;
    moveBondStartAbsolute(x: any, y: any): void;
    moveBondEndAbsolute(x: any, y: any): void;
    moveToLinkedAtoms(): void;
}
