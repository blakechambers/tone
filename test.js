
/**
 * test
 */

import NoteInKey from "./index.js";
import { sin } from "opendsp/osc";

var note = NoteInKey("c1");

export function dsp(t) {
  return sin(t, note("13")) * 0.5;
}