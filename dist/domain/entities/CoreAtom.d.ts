import { DrawingEntity } from "./DrawingEntity";
import { Vec2 } from "./vec2";
import { BaseMonomer } from "./BaseMonomer";
import { Bond } from "./CoreBond";
import { AtomLabel } from "../constants";
import { AtomRenderer } from "../../application/render/renderers/AtomRenderer";
export declare class Atom extends DrawingEntity {
    monomer: BaseMonomer;
    atomIdInMicroMode: any;
    label: AtomLabel;
    bonds: Bond[];
    renderer: AtomRenderer | undefined;
    constructor(position: Vec2, monomer: BaseMonomer, atomIdInMicroMode: any, label: AtomLabel);
    get center(): Vec2;
    addBond(bond: Bond): void;
    setRenderer(renderer: AtomRenderer): void;
    private calculateConnections;
    private calculateCharge;
    private calculateRadicalAmount;
    calculateValence(): {
        valence: number;
        hydrogenAmount: number;
    };
}
