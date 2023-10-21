import { audienceJoker } from "./audienceJoker";

describe("audienceJoker", () => {
  it("sum should always be 100", () => {
    for (let i = 0; i < 100; i++) {
      const result = audienceJoker(0, i / 100);
      expect(result.reduce((acc, val) => acc + val, 0)).toBe(100);
    }
  });
});
