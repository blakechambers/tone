
/**
 * @module  tone
 * @author  blakechambers
 * @license mit
 */

import { stringToNote } from 'opendsp/note';
import { scales } from 'stagas/scales';

var scale = scales['major'];

export default function NoteInKey(key) {
  var base  = stringToNote(key);

  return function(n) {
    if ('string' === typeof n) n = stringToOffset(n);
    return Math.pow(2, ((base + n) - 57)/12) * 440;
  };
}

function stringToOffset(s){
  var value = s.split('');
  
  var octave = parseInt(value[value.length - 1], 10);
  if (isNaN(octave)) octave = 4;
  var note = parseInt(value[0], 10);

  return scale[note-1] + (octave * 12);
}