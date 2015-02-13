
/**
 * @module  tone
 * @author  blakechambers
 * @license mit
 */

import { stringToNote } from 'opendsp/note';
import { scales } from 'stagas/scales';

export default function NoteInKey(key) {
  var base  = stringToNote(key);
  var scale = scales.major;

  return function(n) {
    if ('string' === typeof n) n = stringToOffset(n, scale);
    return Math.pow(2, ((base + n) - 57)/12) * 440;
  };
}

function stringToOffset(s, scale){
  var value = s.split('');
  
  var octave = parseInt(value[1], 10);
  if (isNaN(octave)) octave = 4;
  var note = parseInt(value[0], 10);

  return scale[note-1] + (octave * 12);
}