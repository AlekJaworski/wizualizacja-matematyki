/**
 * Permutation — a bijection on {0, …, n-1}.
 *
 * Used to shuffle multiple-choice answers once per question display
 * while keeping track of which display index maps to which original index
 * (so we can compare the user's pick against q.correct).
 */
export class Permutation {
  /**
   * @param {number[]} perm  e.g. [2, 0, 3, 1]
   *   perm[displayIndex] = originalIndex
   */
  constructor(perm) {
    this._perm = perm;
  }

  /** Number of elements. */
  get length() { return this._perm.length; }

  /** Original index for a given display position. */
  originalIndex(displayIndex) { return this._perm[displayIndex]; }

  /** Display position for a given original index. */
  displayIndex(originalIndex) { return this._perm.indexOf(originalIndex); }

  /** Apply permutation to an array: result[i] = arr[perm[i]] */
  apply(arr) { return this._perm.map(i => arr[i]); }

  /**
   * Create a random permutation of length n using Fisher-Yates.
   * @param {number} n
   * @returns {Permutation}
   */
  static random(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return new Permutation(arr);
  }

  /** Identity permutation (no shuffle). */
  static identity(n) {
    return new Permutation(Array.from({ length: n }, (_, i) => i));
  }
}
