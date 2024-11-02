import { SnakeModePolymerBondRenderer } from "../../application/render/renderers/PolymerBondRenderer/SnakeModePolymerBondRenderer";
import { BaseMonomer } from './BaseMonomer';
import { BaseBond } from './BaseBond';
export declare class HydrogenBond extends BaseBond {
    firstMonomer: BaseMonomer;
    secondMonomer?: BaseMonomer;
    renderer?: SnakeModePolymerBondRenderer;
    constructor(firstMonomer: BaseMonomer, secondMonomer?: BaseMonomer);
    setFirstMonomer(monomer: BaseMonomer): void;
    setSecondMonomer(monomer: BaseMonomer): void;
    setRenderer(renderer: SnakeModePolymerBondRenderer): void;
    get isBackBoneChainConnection(): boolean;
    get firstMonomerAttachmentPoint(): import("../types").AttachmentPointName | undefined;
    get secondMonomerAttachmentPoint(): import("../types").AttachmentPointName | undefined;
    get isSideChainConnection(): boolean;
    get firstEndEntity(): BaseMonomer;
    get secondEndEntity(): BaseMonomer | undefined;
    getAnotherMonomer(monomer: BaseMonomer): BaseMonomer | undefined;
}
