import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface HtmlEntitie {
  character: string;
  name: string;
  number: number;
  description: string;
}

@Component({
  selector: 'app-html-entities',
  templateUrl: './html-entities.component.html',
  styleUrls: ['./html-entities.component.scss'],
})
export class HtmlEntitiesComponent {
  isFav = false;

  displayedColumns: string[] = ['character', 'name', 'number', 'description'];

  ascii: HtmlEntitie[] = [
    { character: '', name: '', number: 32, description: 'Space' },
    { character: '!', name: '', number: 33, description: 'Exclamation mark' },
    { character: '"', name: '', number: 34, description: 'Quotation mark' },
    { character: '#', name: '', number: 35, description: 'Number sign' },
    { character: '$', name: '', number: 36, description: 'Dollar sign' },
    { character: '%', name: '', number: 37, description: 'Percent sign' },
    { character: '&', name: '&amp;', number: 38, description: 'Ampersand' },
    { character: "'", name: '', number: 39, description: 'Apostrophe' },
    {
      character: '(',
      name: '',
      number: 40,
      description: 'Opening/Left Parenthesis',
    },
    {
      character: ')',
      name: '',
      number: 41,
      description: 'Closing/Right Parenthesis',
    },
    { character: '*', name: '', number: 42, description: 'Asterisk' },
    { character: '+', name: '', number: 43, description: 'Plus sign' },
    { character: ',', name: '', number: 44, description: 'Comma' },
    { character: '-', name: '', number: 45, description: 'Hyphen' },
    { character: '.', name: '', number: 46, description: 'Period' },
    { character: '/', name: '', number: 47, description: 'Slash' },
    { character: '0', name: '', number: 48, description: 'Digit 0' },
    { character: '1', name: '', number: 49, description: 'Digit 1' },
    { character: '2', name: '', number: 50, description: 'Digit 2' },
    { character: '3', name: '', number: 51, description: 'Digit 3' },
    { character: '4', name: '', number: 52, description: 'Digit 4' },
    { character: '5', name: '', number: 53, description: 'Digit 5' },
    { character: '6', name: '', number: 54, description: 'Digit 6' },
    { character: '7', name: '', number: 55, description: 'Digit 7' },
    { character: '8', name: '', number: 56, description: 'Digit 8' },
    { character: '9', name: '', number: 57, description: 'Digit 9' },
    { character: ':', name: '', number: 58, description: 'Colon' },
    { character: ';', name: '', number: 59, description: 'Semicolon' },
    { character: '<', name: '&lt;', number: 60, description: 'Less-than' },
    { character: '=', name: '', number: 61, description: 'Equals sign' },
    { character: '>', name: '&gt;', number: 62, description: 'Greater-than' },
    { character: '?', name: '', number: 63, description: 'Question mark' },
    { character: '@', name: '', number: 64, description: 'At sign' },
    { character: 'A', name: '', number: 99, description: 'Uppercase A' },
    { character: 'B', name: '', number: 99, description: 'Uppercase B' },
    { character: 'C', name: '', number: 99, description: 'Uppercase C' },
    { character: 'D', name: '', number: 99, description: 'Uppercase D' },
    { character: 'E', name: '', number: 99, description: 'Uppercase E' },
    { character: 'F', name: '', number: 99, description: 'Uppercase F' },
    { character: 'G', name: '', number: 99, description: 'Uppercase G' },
    { character: 'H', name: '', number: 99, description: 'Uppercase H' },
    { character: 'I', name: '', number: 99, description: 'Uppercase I' },
    { character: 'J', name: '', number: 99, description: 'Uppercase J' },
    { character: 'K', name: '', number: 99, description: 'Uppercase K' },
    { character: 'L', name: '', number: 99, description: 'Uppercase L' },
    { character: 'M', name: '', number: 99, description: 'Uppercase M' },
    { character: 'N', name: '', number: 99, description: 'Uppercase N' },
    { character: 'O', name: '', number: 99, description: 'Uppercase O' },
    { character: 'P', name: '', number: 99, description: 'Uppercase P' },
    { character: 'Q', name: '', number: 99, description: 'Uppercase Q' },
    { character: 'R', name: '', number: 99, description: 'Uppercase R' },
    { character: 'S', name: '', number: 99, description: 'Uppercase S' },
    { character: 'T', name: '', number: 99, description: 'Uppercase T' },
    { character: 'U', name: '', number: 99, description: 'Uppercase U' },
    { character: 'V', name: '', number: 99, description: 'Uppercase V' },
    { character: 'W', name: '', number: 99, description: 'Uppercase W' },
    { character: 'X', name: '', number: 99, description: 'Uppercase X' },
    { character: 'Y', name: '', number: 99, description: 'Uppercase Y' },
    { character: 'Z', name: '', number: 99, description: 'Uppercase Z' },
    {
      character: '[',
      name: '',
      number: 91,
      description: 'Opening/Left square bracket',
    },
    { character: '\\', name: '', number: 91, description: 'Backslash' },
    {
      character: ']',
      name: '',
      number: 93,
      description: 'Closing/Right square bracket',
    },
    { character: '^', name: '', number: 94, description: 'Carret' },
    { character: '_', name: '', number: 95, description: 'Underscore' },
    { character: '`', name: '', number: 96, description: 'Grave accent' },
    { character: 'a', name: '', number: 97, description: 'Lowercase a' },
    { character: 'b', name: '', number: 98, description: 'Lowercase b' },
    { character: 'c', name: '', number: 99, description: 'Lowercase c' },
    { character: 'd', name: '', number: 100, description: 'Lowercase d' },
    { character: 'e', name: '', number: 101, description: 'Lowercase e' },
    { character: 'f', name: '', number: 102, description: 'Lowercase f' },
    { character: 'g', name: '', number: 103, description: 'Lowercase g' },
    { character: 'h', name: '', number: 104, description: 'Lowercase h' },
    { character: 'i', name: '', number: 105, description: 'Lowercase i' },
    { character: 'j', name: '', number: 106, description: 'Lowercase j' },
    { character: 'k', name: '', number: 107, description: 'Lowercase k' },
    { character: 'l', name: '', number: 108, description: 'Lowercase l' },
    { character: 'm', name: '', number: 109, description: 'Lowercase m' },
    { character: 'n', name: '', number: 110, description: 'Lowercase n' },
    { character: 'o', name: '', number: 111, description: 'Lowercase o' },
    { character: 'p', name: '', number: 112, description: 'Lowercase p' },
    { character: 'q', name: '', number: 113, description: 'Lowercase q' },
    { character: 'r', name: '', number: 114, description: 'Lowercase r' },
    { character: 's', name: '', number: 115, description: 'Lowercase s' },
    { character: 'r', name: '', number: 116, description: 'Lowercase t' },
    { character: 'u', name: '', number: 117, description: 'Lowercase u' },
    { character: 'v', name: '', number: 118, description: 'Lowercase v' },
    { character: 'w', name: '', number: 119, description: 'Lowercase w' },
    { character: 'x', name: '', number: 120, description: 'Lowercase x' },
    { character: 'y', name: '', number: 121, description: 'Lowercase y' },
    { character: 'z', name: '', number: 122, description: 'Lowercase z' },
    {
      character: '{',
      name: '',
      number: 123,
      description: 'Opening/Left curly brace',
    },
    { character: '|', name: '', number: 124, description: 'Vertical bar' },
    {
      character: '}',
      name: '',
      number: 125,
      description: 'Closing/Right curly brace',
    },
    { character: '~', name: '', number: 126, description: 'Tilde' },
  ];

  iso8859: HtmlEntitie[] = [
    {
      character: '',
      name: '',
      number: 32,
      description: 'Space',
    },
    {
      character: '!',
      name: '',
      number: 33,
      description: 'Exclamation mark',
    },
    {
      character: '"',
      name: '',
      number: 34,
      description: 'Quotation mark',
    },
    {
      character: '#',
      name: '',
      number: 35,
      description: 'Number sign',
    },
    {
      character: '$',
      name: '',
      number: 36,
      description: 'Dollar sign',
    },
    {
      character: '%',
      name: '',
      number: 37,
      description: 'Percent sign',
    },
    {
      character: '&',
      name: '&amp;',
      number: 38,
      description: 'Ampersand',
    },
    {
      character: "'",
      name: '',
      number: 39,
      description: 'Apostrophe',
    },
    {
      character: '(',
      name: '',
      number: 40,
      description: 'Opening/Left Parenthesis',
    },
    {
      character: ')',
      name: '',
      number: 41,
      description: 'Closing/Right Parenthesis',
    },
    {
      character: '*',
      name: '',
      number: 42,
      description: 'Asterisk',
    },
    {
      character: '+',
      name: '',
      number: 43,
      description: 'Plus sign',
    },
    {
      character: ',',
      name: '',
      number: 44,
      description: 'Comma',
    },
    {
      character: '-',
      name: '',
      number: 45,
      description: 'Hyphen',
    },
    {
      character: '.',
      name: '',
      number: 46,
      description: 'Period',
    },
    {
      character: '/',
      name: '',
      number: 47,
      description: 'Slash',
    },
    {
      character: '0',
      name: '',
      number: 48,
      description: 'Digit 0',
    },
    {
      character: '1',
      name: '',
      number: 49,
      description: 'Digit 1',
    },
    {
      character: '2',
      name: '',
      number: 50,
      description: 'Digit 2',
    },
    {
      character: '3',
      name: '',
      number: 51,
      description: 'Digit 3',
    },
    {
      character: '4',
      name: '',
      number: 52,
      description: 'Digit 4',
    },
    {
      character: '5',
      name: '',
      number: 53,
      description: 'Digit 5',
    },
    {
      character: '6',
      name: '',
      number: 54,
      description: 'Digit 6',
    },
    {
      character: '7',
      name: '',
      number: 55,
      description: 'Digit 7',
    },
    {
      character: '8',
      name: '',
      number: 56,
      description: 'Digit 8',
    },
    {
      character: '9',
      name: '',
      number: 57,
      description: 'Digit 9',
    },
    {
      character: ':',
      name: '',
      number: 58,
      description: 'Colon',
    },
    {
      character: ';',
      name: '',
      number: 59,
      description: 'Semicolon',
    },
    {
      character: '<',
      name: '&lt;',
      number: 60,
      description: 'Less-than',
    },
    {
      character: '=',
      name: '',
      number: 61,
      description: 'Equals sign',
    },
    {
      character: '>',
      name: '&gt;',
      number: 62,
      description: 'Greater than',
    },
    {
      character: '?',
      name: '',
      number: 63,
      description: 'Question mark',
    },
    {
      character: '@',
      name: '',
      number: 64,
      description: 'At sign',
    },
    {
      character: 'A',
      name: '',
      number: 65,
      description: 'Uppercase A',
    },
    {
      character: 'B',
      name: '',
      number: 66,
      description: 'Uppercase B',
    },
    {
      character: 'C',
      name: '',
      number: 67,
      description: 'Uppercase C',
    },
    {
      character: 'D',
      name: '',
      number: 68,
      description: 'Uppercase D',
    },
    {
      character: 'E',
      name: '',
      number: 69,
      description: 'Uppercase E',
    },
    {
      character: 'F',
      name: '',
      number: 70,
      description: 'Uppercase F',
    },
    {
      character: 'G',
      name: '',
      number: 71,
      description: 'Uppercase G',
    },
    {
      character: 'H',
      name: '',
      number: 72,
      description: 'Uppercase H',
    },
    {
      character: 'I',
      name: '',
      number: 73,
      description: 'Uppercase I',
    },
    {
      character: 'J',
      name: '',
      number: 74,
      description: 'Uppercase J',
    },
    {
      character: 'K',
      name: '',
      number: 75,
      description: 'Uppercase K',
    },
    {
      character: 'L',
      name: '',
      number: 76,
      description: 'Uppercase L',
    },
    {
      character: 'M',
      name: '',
      number: 77,
      description: 'Uppercase M',
    },
    {
      character: 'N',
      name: '',
      number: 78,
      description: 'Uppercase N',
    },
    {
      character: 'O',
      name: '',
      number: 79,
      description: 'Uppercase O',
    },
    {
      character: 'Ü',
      name: '',
      number: 80,
      description: 'Uppercase P',
    },
    {
      character: 'Q',
      name: '',
      number: 81,
      description: 'Uppercase Q',
    },
    {
      character: 'R',
      name: '',
      number: 82,
      description: 'Uppercase R',
    },
    {
      character: 'S',
      name: '',
      number: 83,
      description: 'Uppercase S',
    },
    {
      character: 'T',
      name: '',
      number: 84,
      description: 'Uppercase T',
    },
    {
      character: 'U',
      name: '',
      number: 85,
      description: 'Uppercase U',
    },
    {
      character: 'V',
      name: '',
      number: 86,
      description: 'Uppercase V',
    },
    {
      character: 'W',
      name: '',
      number: 87,
      description: 'Uppercase W',
    },
    {
      character: 'X',
      name: '',
      number: 88,
      description: 'Uppercase X',
    },
    {
      character: 'Y',
      name: '',
      number: 89,
      description: 'Uppercase Y',
    },
    {
      character: 'Z',
      name: '',
      number: 90,
      description: 'Uppercase Z',
    },
    {
      character: '[',
      name: '',
      number: 91,
      description: 'Opening/Left square bracket',
    },
    {
      character: '\\',
      name: '',
      number: 92,
      description: 'Backslash',
    },
    {
      character: ']',
      name: '',
      number: 93,
      description: 'Closing/Right square bracket',
    },
    {
      character: '^',
      name: '',
      number: 94,
      description: 'Caret',
    },
    {
      character: '_',
      name: '',
      number: 95,
      description: 'Underscore',
    },
    {
      character: '`',
      name: '',
      number: 96,
      description: 'Grave accent',
    },
    {
      character: 'a',
      name: '',
      number: 97,
      description: 'Lowercase a',
    },
    {
      character: 'b',
      name: '',
      number: 98,
      description: 'Lowercase b',
    },
    {
      character: 'c',
      name: '',
      number: 99,
      description: 'Lowercase c',
    },
    {
      character: 'd',
      name: '',
      number: 100,
      description: 'Lowercase d',
    },
    {
      character: 'e',
      name: '',
      number: 101,
      description: 'Lowercase e',
    },
    {
      character: 'f',
      name: '',
      number: 102,
      description: 'Lowercase f',
    },
    {
      character: 'g',
      name: '',
      number: 103,
      description: 'Lowercase g',
    },
    {
      character: 'h',
      name: '',
      number: 104,
      description: 'Lowercase h',
    },
    {
      character: 'i',
      name: '',
      number: 105,
      description: 'Lowercase i',
    },
    {
      character: 'j',
      name: '',
      number: 106,
      description: 'Lowercase j',
    },
    {
      character: 'k',
      name: '',
      number: 107,
      description: 'Lowercase k',
    },
    {
      character: 'l',
      name: '',
      number: 108,
      description: 'Lowercase l',
    },
    {
      character: 'm',
      name: '',
      number: 109,
      description: 'Lowercase m',
    },
    {
      character: 'n',
      name: '',
      number: 110,
      description: 'Lowercase n',
    },
    {
      character: 'o',
      name: '',
      number: 111,
      description: 'Lowercase o',
    },
    {
      character: 'p',
      name: '',
      number: 112,
      description: 'Lowercase p',
    },
    {
      character: 'q',
      name: '',
      number: 113,
      description: 'Lowercase q',
    },
    {
      character: 'r',
      name: '',
      number: 114,
      description: 'Lowercase r',
    },
    {
      character: 's',
      name: '',
      number: 115,
      description: 'Lowercase s',
    },
    {
      character: 't',
      name: '',
      number: 116,
      description: 'Lowercase t',
    },
    {
      character: 'u',
      name: '',
      number: 117,
      description: 'Lowercase u',
    },
    {
      character: 'v',
      name: '',
      number: 118,
      description: 'Lowercase v',
    },
    {
      character: 'w',
      name: '',
      number: 119,
      description: 'Lowercase w',
    },
    {
      character: 'x',
      name: '',
      number: 120,
      description: 'Lowercase x',
    },
    {
      character: 'y',
      name: '',
      number: 121,
      description: 'Lowercase y',
    },
    {
      character: 'z',
      name: '',
      number: 122,
      description: 'Lowercase z',
    },
    {
      character: '{',
      name: '',
      number: 123,
      description: 'Opening/Left curly brace',
    },
    {
      character: '|',
      name: '',
      number: 124,
      description: 'Vertical bar',
    },
    {
      character: '}',
      name: '',
      number: 125,
      description: 'Closing/Right curly brace',
    },
    {
      character: '~',
      name: '',
      number: 126,
      description: 'Tilde',
    },
  ];

  iso8859Symbols: HtmlEntitie[] = [
    {
      character: '',
      name: '&nbsp;',
      number: 160,
      description: 'Non-breaking space',
    },
    {
      character: '¡',
      name: '&iexcl;',
      number: 161,
      description: 'Inverted exclamation mark',
    },
    {
      character: '¢',
      name: '&cent;',
      number: 162,
      description: 'Cent',
    },
    {
      character: '£',
      name: '&pound;',
      number: 163,
      description: 'Pound',
    },
    {
      character: '¤',
      name: '&curren;',
      number: 164,
      description: 'Currency',
    },
    {
      character: '¥',
      name: '&yen;',
      number: 165,
      description: 'Yen',
    },
    {
      character: '¦',
      name: '&brvbar;',
      number: 166,
      description: 'Broken vertical bar',
    },
    {
      character: '§',
      name: '&sect;',
      number: 167,
      description: 'Section',
    },
    {
      character: '¨',
      name: '&uml;',
      number: 168,
      description: 'Spacing diaeresis',
    },
    {
      character: '©',
      name: '&copy;',
      number: 169,
      description: 'Copyright',
    },
    {
      character: 'ª',
      name: '&ordf;',
      number: 170,
      description: 'Feminine ordinal indicator',
    },
    {
      character: '«',
      name: '&laquo;',
      number: 171,
      description: 'Opening/Left angle quotation mark',
    },
    {
      character: '¬',
      name: '&not;',
      number: 172,
      description: 'Negation',
    },
    {
      character: '',
      name: '&shy;',
      number: 173,
      description: 'Soft hyphen',
    },
    {
      character: '®',
      name: '&reg;',
      number: 174,
      description: 'Registered trademark',
    },
    {
      character: '¯',
      name: '&macr;',
      number: 175,
      description: 'Spacing macron',
    },
    {
      character: '°',
      name: '&deg;',
      number: 176,
      description: 'Degree',
    },
    {
      character: '±',
      name: '&plusmn;',
      number: 177,
      description: 'Plus or minus',
    },
    {
      character: '²',
      name: '&sup2;',
      number: 178,
      description: 'Superscript 2',
    },
    {
      character: '³',
      name: '&sup3;',
      number: 179,
      description: 'Superscript 3',
    },
    {
      character: '´',
      name: '&acute;',
      number: 180,
      description: 'Spacing acute',
    },
    {
      character: 'µ',
      name: '&micro;',
      number: 181,
      description: 'Micro',
    },
    {
      character: '¶',
      name: '&para;',
      number: 182,
      description: 'Paragraph',
    },
    {
      character: '¸',
      name: '&cedil;',
      number: 184,
      description: 'Spacing cedilla',
    },
    {
      character: '¹',
      name: '&sup1;',
      number: 185,
      description: 'Superscript 1',
    },
    {
      character: 'º',
      name: '&ordm;',
      number: 186,
      description: 'Masculine ordinal indicator',
    },
    {
      character: '»',
      name: '&raquo;',
      number: 187,
      description: 'Closing/Right angle quotation mark',
    },
    {
      character: '¼',
      name: '&frac14;',
      number: 188,
      description: 'Fraction 1/4',
    },
    {
      character: '½',
      name: '&frac12;',
      number: 189,
      description: 'Fraction 1/2',
    },
    {
      character: '¾',
      name: '&frac34;',
      number: 190,
      description: 'Fraction 3/4',
    },
    {
      character: '¿',
      name: '&iquest;',
      number: 191,
      description: 'Inverted question mark',
    },
    {
      character: '×',
      name: '	&times;',
      number: 215,
      description: 'Multiplication',
    },
    {
      character: '÷',
      name: '&divide;',
      number: 247,
      description: 'Divide',
    },
  ];

  math: HtmlEntitie[] = [
    {
      character: '∀',
      name: '&forall;',
      number: 8704,
      description: 'For all',
    },
    {
      character: '∂',
      name: '&part;',
      number: 8706,
      description: 'Part',
    },
    {
      character: '∃',
      name: '&exist;',
      number: 8707,
      description: 'Exist',
    },
    {
      character: '∅',
      name: '&empty;',
      number: 8709,
      description: 'Empty',
    },
    {
      character: '∇',
      name: '&nabla;',
      number: 8711,
      description: 'Nabla',
    },
    {
      character: '∈',
      name: '&isin;',
      number: 8712,
      description: 'Is in',
    },
    {
      character: '∉',
      name: '&notin;',
      number: 8713,
      description: 'Not in',
    },
    {
      character: '∋',
      name: '&ni;',
      number: 8715,
      description: 'Ni',
    },
    {
      character: '∏',
      name: '&prod;',
      number: 8719,
      description: 'Product',
    },
    {
      character: '∑',
      name: '&sum;',
      number: 8721,
      description: 'Sum',
    },
    {
      character: '−',
      name: '&minus;',
      number: 8722,
      description: 'Minus',
    },
    {
      character: '∗',
      name: '&lowast;',
      number: 8727,
      description: 'Asterisk (Lowast)',
    },
    {
      character: '√',
      name: '&radic;',
      number: 8730,
      description: 'Square root',
    },
    {
      character: '∝',
      name: '&prop;',
      number: 8733,
      description: 'Proportional to',
    },
    {
      character: '∞',
      name: '&infin;',
      number: 8734,
      description: 'Infinity',
    },
    {
      character: '∠',
      name: '&ang;',
      number: 8736,
      description: 'Angle',
    },
    {
      character: '∧',
      name: '&and;',
      number: 8743,
      description: 'And',
    },
    {
      character: '∨',
      name: '&or;',
      number: 8744,
      description: 'Or',
    },
    {
      character: '∩',
      name: '&cap;',
      number: 8745,
      description: 'Cap',
    },
    {
      character: '∪',
      name: '&cup;',
      number: 8746,
      description: 'Cup',
    },
    {
      character: '∫',
      name: '&int;',
      number: 8747,
      description: 'Integral',
    },
    {
      character: '∴',
      name: '&there4;',
      number: 8756,
      description: 'Therefore',
    },
    {
      character: '∼',
      name: '&sim;',
      number: 8764,
      description: 'Similar to',
    },
    {
      character: '≅',
      name: '&cong;',
      number: 8773,
      description: 'Congurent to',
    },
    {
      character: '≈',
      name: '&asymp;',
      number: 8776,
      description: 'Almost equal',
    },
    {
      character: '≠',
      name: '&ne;',
      number: 8800,
      description: 'Not equal',
    },
    {
      character: '≡',
      name: '&equiv;',
      number: 8801,
      description: 'Equivalent',
    },
    {
      character: '≤',
      name: '&le;',
      number: 8804,
      description: 'Less or equal',
    },
    {
      character: '≥',
      name: '&ge;',
      number: 8805,
      description: 'Greater or equal',
    },
    {
      character: '⊂',
      name: '&sub;',
      number: 8834,
      description: 'Subset of',
    },
    {
      character: '⊃',
      name: '&sup;',
      number: 8835,
      description: 'Superset of',
    },
    {
      character: '⊄',
      name: '&nsub;',
      number: 8836,
      description: 'Not subset of',
    },
    {
      character: '⊆',
      name: '&sube;',
      number: 8838,
      description: 'Subset or equal',
    },
    {
      character: '⊇',
      name: '&supe;',
      number: 8839,
      description: 'Superset or equal',
    },
    {
      character: '⊕',
      name: '&oplus;',
      number: 8853,
      description: 'Circled plus',
    },
    {
      character: '⊗',
      name: '&otimes;',
      number: 8855,
      description: 'Circled times',
    },
    {
      character: '⊥',
      name: '&perp;',
      number: 8869,
      description: 'Perpendicular',
    },
    {
      character: '⋅',
      name: '&sdot;',
      number: 8901,
      description: 'Dot operator',
    },
  ];

  greek: HtmlEntitie[] = [
    {
      character: 'Α',
      name: '&Alpha;',
      number: 913,
      description: 'Alpha',
    },
    {
      character: 'Β',
      name: '&Beta;',
      number: 914,
      description: 'Beta',
    },
    {
      character: 'Γ',
      name: '&Gamma;',
      number: 915,
      description: 'Gamma',
    },
    {
      character: 'Δ',
      name: '&Delta;',
      number: 916,
      description: 'Delta',
    },
    {
      character: 'Ε',
      name: '&Epsilon;',
      number: 917,
      description: 'Epsilon',
    },
    {
      character: 'Ζ',
      name: '&Zeta;',
      number: 918,
      description: 'Zeta',
    },
    {
      character: 'Η',
      name: '&Eta;',
      number: 919,
      description: 'Eta',
    },
    {
      character: 'Θ',
      name: '&Theta;',
      number: 920,
      description: 'Theta',
    },
    {
      character: 'Ι',
      name: '&Iota;',
      number: 921,
      description: 'Iota',
    },
    {
      character: 'Κ',
      name: '&Kappa;',
      number: 922,
      description: 'Kappa',
    },
    {
      character: 'Λ',
      name: '&Lambda;',
      number: 923,
      description: 'Lambda',
    },
    {
      character: 'Μ',
      name: '&Mu;',
      number: 924,
      description: 'Mu',
    },
    {
      character: 'Ν',
      name: '&Nu;',
      number: 925,
      description: 'Nu',
    },
    {
      character: 'Ξ',
      name: '&Xi;',
      number: 926,
      description: 'Xi',
    },
    {
      character: 'Ο',
      name: '&Omicron;',
      number: 927,
      description: 'Omicron',
    },
    {
      character: 'Π',
      name: '&Pi;',
      number: 928,
      description: 'Pi',
    },
    {
      character: 'Ρ',
      name: '&Rho;',
      number: 929,
      description: 'Rho',
    },
    {
      character: 'Σ',
      name: '&Sigma;',
      number: 931,
      description: 'Sigma',
    },
    {
      character: 'Τ',
      name: '&Tau;',
      number: 932,
      description: 'Tau',
    },
    {
      character: 'Υ',
      name: '&Upsilon;',
      number: 933,
      description: 'Upsilon',
    },
    {
      character: 'Φ',
      name: '&Phi;',
      number: 934,
      description: 'Phi',
    },
    {
      character: 'Χ',
      name: '&Chi;',
      number: 935,
      description: 'Chi',
    },
    {
      character: 'Ψ',
      name: '&Psi;',
      number: 936,
      description: 'Psi',
    },
    {
      character: 'Ω',
      name: '&Omega;',
      number: 937,
      description: 'Omega',
    },
    {
      character: 'α',
      name: '&alpha;',
      number: 945,
      description: 'alpha',
    },
    {
      character: 'β',
      name: '&beta;',
      number: 946,
      description: 'beta',
    },
    {
      character: 'γ',
      name: '&gamma;',
      number: 947,
      description: 'gamma',
    },
    {
      character: 'δ',
      name: '&delta;',
      number: 948,
      description: 'delta',
    },
    {
      character: 'ε',
      name: '&epsilon;',
      number: 949,
      description: 'epsilon',
    },
    {
      character: 'ζ',
      name: '&zeta;',
      number: 950,
      description: 'zeta',
    },
    {
      character: 'η',
      name: '&eta;',
      number: 951,
      description: 'eta',
    },
    {
      character: 'θ',
      name: '&theta;',
      number: 952,
      description: 'theta',
    },
    {
      character: 'ι',
      name: '&iota;',
      number: 953,
      description: 'iota',
    },
    {
      character: 'κ',
      name: '&kappa;',
      number: 954,
      description: 'kappa',
    },
    {
      character: 'λ',
      name: '&lambda;',
      number: 955,
      description: 'lambda',
    },
    {
      character: 'μ',
      name: '&mu;',
      number: 956,
      description: 'mu',
    },
    {
      character: 'ν',
      name: '&nu;',
      number: 957,
      description: 'nu',
    },
    {
      character: 'ξ',
      name: '&xi;',
      number: 958,
      description: 'xi',
    },
    {
      character: 'ο',
      name: '&omicron;',
      number: 959,
      description: 'omicron',
    },
    {
      character: 'π',
      name: '&pi;',
      number: 960,
      description: 'pi',
    },
    {
      character: 'ρ',
      name: '&rho;',
      number: 961,
      description: 'rho',
    },
    {
      character: 'ς',
      name: '&sigmaf;',
      number: 962,
      description: 'sigmaf',
    },
    {
      character: 'σ',
      name: '&sigma;',
      number: 963,
      description: 'sigma',
    },
    {
      character: 'τ',
      name: '&tau;',
      number: 964,
      description: 'tau',
    },
    {
      character: 'υ',
      name: '&upsilon;',
      number: 965,
      description: 'upsilon',
    },
    {
      character: 'φ',
      name: '&phi;',
      number: 966,
      description: 'phi',
    },
    {
      character: 'χ',
      name: '&chi;',
      number: 967,
      description: 'chi',
    },
    {
      character: 'ψ',
      name: '&psi;',
      number: 968,
      description: 'psi',
    },
    {
      character: 'ω',
      name: '&omega;',
      number: 969,
      description: 'omega',
    },
    {
      character: 'ϑ',
      name: '&thetasym',
      number: 977,
      description: 'Theta symbol',
    },
    {
      character: 'ϒ',
      name: '&upsih;',
      number: 978,
      description: 'Upsilon symbol',
    },
    {
      character: 'ϖ',
      name: '&piv;',
      number: 982,
      description: 'Pi symbol',
    },
  ];

  misc: HtmlEntitie[] = [
    {
      character: 'Œ',
      name: '&OElig;',
      number: 338,
      description: 'Uppercase ligature OE',
    },
    {
      character: 'œ',
      name: '&oelig;',
      number: 339,
      description: 'Lowercase ligature OE',
    },
    {
      character: 'Š',
      name: '&Scaron;',
      number: 352,
      description: 'Uppercase S with caron',
    },
    {
      character: 'š',
      name: '&scaron;',
      number: 353,
      description: 'Lowercase S with caron',
    },
    {
      character: 'Ÿ',
      name: '&Yuml;',
      number: 376,
      description: 'Capital Y with diaeres',
    },
    {
      character: 'ƒ',
      name: '&fnof;',
      number: 402,
      description: 'Lowercase with hook',
    },
    {
      character: 'ˆ',
      name: '&circ;',
      number: 710,
      description: 'Circumflex accent',
    },
    {
      character: '˜',
      name: '&tilde;',
      number: 732,
      description: 'Tilde',
    },
    {
      character: ' ',
      name: '&ensp;',
      number: 8194,
      description: 'En space',
    },
    {
      character: ' ',
      name: '&emsp;',
      number: 8195,
      description: 'Em space',
    },
    {
      character: ' ',
      name: '&thinsp;',
      number: 8201,
      description: 'Thin space',
    },
    {
      character: '',
      name: '&zwnj;',
      number: 8204,
      description: 'Zero width non-joiner',
    },
    {
      character: '',
      name: '&zwj;',
      number: 8205,
      description: 'Zero width joiner',
    },
    {
      character: '',
      name: '&lrm;',
      number: 8206,
      description: 'Left-to-right mark',
    },
    {
      character: '',
      name: '&rlm;',
      number: 8207,
      description: 'Right-to-left mark',
    },
    {
      character: '–',
      name: '&ndash;',
      number: 8211,
      description: 'En dash',
    },
    {
      character: '—',
      name: '&mdash;',
      number: 8212,
      description: 'Em dash',
    },
    {
      character: '‘',
      name: '&lsquo;',
      number: 8216,
      description: 'Left single quotation mark',
    },
    {
      character: '’',
      name: '&rsquo;',
      number: 8217,
      description: 'Right single quotation mark',
    },
    {
      character: '‚',
      name: '&sbquo;',
      number: 8218,
      description: 'Single low-9 quotation mark',
    },
    {
      character: '“',
      name: '&ldquo;',
      number: 8220,
      description: 'Left double quotation mark',
    },
    {
      character: '”',
      name: '&rdquo;',
      number: 8221,
      description: 'Right double quotation mark',
    },
    {
      character: '„',
      name: '&bdquo;',
      number: 8222,
      description: 'Double low-9 quotation mark',
    },
    {
      character: '†',
      name: '&dagger;',
      number: 8224,
      description: 'Dagger',
    },
    {
      character: '‡',
      name: '&Dagger;',
      number: 8225,
      description: 'Double Dagger',
    },
    {
      character: '•',
      name: '&bull;',
      number: 8226,
      description: 'Bullet',
    },
    {
      character: '…',
      name: '&hellip;',
      number: 8230,
      description: 'Horizontal ellipsis',
    },
    {
      character: '‰',
      name: '&permil;',
      number: 8240,
      description: 'Per mille',
    },
    {
      character: '′',
      name: '&prime;',
      number: 8242,
      description: 'Minutes (Degrees)',
    },
    {
      character: '″',
      name: '&Prime;',
      number: 8243,
      description: 'Seconds (Degrees)',
    },
    {
      character: '‹',
      name: '&lsaquo;',
      number: 8249,
      description: 'Single left angle quotation',
    },
    {
      character: '›',
      name: '&rsaquo;',
      number: 8250,
      description: 'Single right angle quotation',
    },
    {
      character: '‾',
      name: '&oline;',
      number: 8254,
      description: 'Overline',
    },
    {
      character: '€',
      name: '&euro;',
      number: 8364,
      description: 'Euro',
    },
    {
      character: '™',
      name: '&trade;',
      number: 8482,
      description: 'Trademark',
    },
    {
      character: '←',
      name: '&larr;',
      number: 8592,
      description: 'Left arrow',
    },
    {
      character: '↑',
      name: '&uarr;',
      number: 8593,
      description: 'Up arrow',
    },
    {
      character: '→',
      name: '&rarr;',
      number: 8594,
      description: 'Right arrow',
    },
    {
      character: '↓',
      name: '&darr;',
      number: 8595,
      description: 'Down arrow',
    },
    {
      character: '↔',
      name: '&harr;',
      number: 8596,
      description: 'Horizontal arrow',
    },
    {
      character: '↵',
      name: '&crarr;',
      number: 8629,
      description: 'Carriage return arrow',
    },
    {
      character: '⌈',
      name: '&lceil;',
      number: 8968,
      description: 'Left ceiling',
    },
    {
      character: '⌉',
      name: '&rceil;',
      number: 8969,
      description: 'Right ceiling',
    },
    {
      character: '⌊',
      name: '&lfloor;',
      number: 8970,
      description: 'Left floor',
    },
    {
      character: '⌋',
      name: '&rfloor;',
      number: 8971,
      description: 'Right floor',
    },
    {
      character: '◊',
      name: '&loz;',
      number: 9674,
      description: 'Lozenge',
    },
    {
      character: '♠',
      name: '&spades;',
      number: 9824,
      description: 'Spade',
    },
    {
      character: '♣',
      name: '&clubs;',
      number: 9827,
      description: 'Club',
    },
    {
      character: '♥',
      name: '&hearts;',
      number: 9829,
      description: 'Heart',
    },
    {
      character: '♦',
      name: '&diams;',
      number: 9830,
      description: 'Diamond',
    },
  ];

  constructor(private _snackBar: MatSnackBar, private favS: FavoritesService) {
    this.isFav = this.favS.isFavorite('html-entities');
  }

  copy(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this._snackBar.open('Successfully copied.', 'Close');
  }

  addToFav() {
    let fav = {
      name: 'HTML Entities',
      description: 'Encode/decode and overview for all html entities',
      category: 'Work in progess',
      icon: 'assets/icons/html5.svg',
      url: 'html-entities',
    };

    this.isFav = true;
    this.favS.addToFavorites(fav);
  }
}
