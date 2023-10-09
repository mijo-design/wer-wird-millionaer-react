import { findPriceMoney } from "./findPriceMoney";

const GERMAN_MONEY_TREE = [
  50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  500000, 1000000,
];

describe("findPriceMoney", () => {
  it("should return -1 when index is higher than money tree length", () => {
    expect(findPriceMoney(1, [50], [])).toBe(-1);
  });
  describe("Sicherheits Variante", () => {
    const CHECKPOINTS_SICHERHEIT = [500, 16000];

    it("should fallback to 16_000 when 32_000 question is wrong", () => {
      expect(
        findPriceMoney(10, GERMAN_MONEY_TREE, CHECKPOINTS_SICHERHEIT)
      ).toBe(16000);
    });
    it("should fallback to 500 when 16_00 question is wrong", () => {
      expect(findPriceMoney(9, GERMAN_MONEY_TREE, CHECKPOINTS_SICHERHEIT)).toBe(
        500
      );
    });
    it("should fallback to 16_000 when 1_000_000 question is wrong", () => {
      expect(
        findPriceMoney(14, GERMAN_MONEY_TREE, CHECKPOINTS_SICHERHEIT)
      ).toBe(16000);
    });
    it("should return 0 when wrong before 500 question", () => {
      [0, 1, 2, 3, 4].forEach((gamePositionBefore500) => {
        expect(
          findPriceMoney(
            gamePositionBefore500,
            GERMAN_MONEY_TREE,
            CHECKPOINTS_SICHERHEIT
          )
        ).toBe(0);
      });
    });
  });
  describe("Risiko Variante", () => {
    const CHECKPOINTS_RISIKO = [500];

    it("should fallback to 500 when 1_000_000 question is wrong", () => {
      expect(findPriceMoney(14, GERMAN_MONEY_TREE, CHECKPOINTS_RISIKO)).toBe(
        500
      );
    });
  });
});
