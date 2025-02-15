import { getFinishedPolymerBond } from '../../mock-data';
import { createPolymerEditorCanvas } from '../../helpers/dom';

describe('Polymer Bond', () => {
  it('should be finished if has links to two monomers', () => {
    createPolymerEditorCanvas();
    const polymerBond = getFinishedPolymerBond(0.25, 0.25, 2.25, 2.5);

    polymerBond.moveToLinkedEntities();

    expect(polymerBond.finished).toBe(true);
    expect(polymerBond.startPosition.x).toBe(0.25);
    expect(polymerBond.startPosition.y).toBe(0.25);
    expect(polymerBond.endPosition.x).toBe(2.25);
    expect(polymerBond.endPosition.y).toBe(2.5);
  });

  it('should change selection', () => {
    const polymerBond = getFinishedPolymerBond(0.25, 0.25, 2.25, 2.5);

    expect(polymerBond.selected).toBe(false);
    polymerBond.turnOnSelection();
    expect(polymerBond.selected).toBe(true);
    polymerBond.turnOffSelection();
    expect(polymerBond.selected).toBe(false);
  });
});
