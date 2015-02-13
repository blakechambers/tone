
/**
 * @name tone
 * @author blakechambers
 * @desc    topn
 * @license mit
 * 
 * 
 */
 
import { stringToNote } from 'opendsp/note';
import { scales } from 'stagas/scales';

var scale = scales.major;

export default function NoteInKey(key) {
  var base  = stringToNote(key);

  return function(n) {
    if ('string' === typeof n) n = stringToOffset(n, scale);
    return Math.pow(2, ((base + n) - 57)/12) * 440;
  };
}

export function stringToOffset(s){
  s = s.split('');
  var octave = parseInt(s[s.length - 1], 10);
  if (isNaN(octave)) octave = 4;
  var note = parseInt(s[0]);
  
  return scale[note-1] + (octave * 12);
}

export function dsp(t) { return 0; }