// list of states objects
/**
 
const states = [
  {
    'q0' : [
      {'0-9': 'q1'},
      {'a-z': 'q2'}
    ]
  }
]

 */

const acceptingStates = ['q1', 'q2', 'q3', 'q4', 'q5', 'q7', 'q9', 'q11',
  'q13', 'q23', 'q25', 'q31', 'q36', 'q42', 'q48', 'q57', 'q70', 'q76', 'q84', 'q87'
, 'q94', 'q101', 'q110', 'q119', 'q122']

const states =
{
  'q0': [
    { '1': 'q1' },
    { '2': 'q2' },
    { '3': 'q3' },
    { '4-9': 'q4' },
    { 'o': 'q14' },
    { 't': 'q15' },
    { 'f': 'q16' },
    { 'h': 'q17' },
    { 's': 'q18' },
    { 'e': 'q19' },
    { 'n': 'q20' },
    { 'b': 'q49' }, 
    { 'j': 'q88' },
    { 'a': 'q97' },
    { 'd': 'q111' },
    { 'm': 'q117' },
    //, , , , 
    // , , , , 
    // , , november, 
  ],
  'q1': [
    { '1': 'q1' },
    { '2': 'q2' },
    { '3': 'q3' },
    { '4-9': 'q5' },
    { '0': 'q5' },
    { 's': 'q6' },
    { '.': 'q12' },
    { '%': 'q13' },
  ],
  'q6': [
    { 't': 'q7' },
  ],
  'q5': [
    { 't': 'q8' },
    { '0-9': 'q9' },
    { '.': 'q12' },
    { '%': 'q13' },
  ],
  'q8': [
    { 'h': 'q7' },
  ],
  'q2': [
    { '4-9': 'q9' },
    { '1': 'q1' },
    { '2': 'q2' },
    { '3': 'q3' },
    { 'n': 'q10' },
    { '.': 'q12' },
    { '0': 'q5' },
    { '%': 'q13' },
  ],
  'q10': [
    { 'd': 'q7' },
  ],
  'q3': [
    { '4-9': 'q9' },
    { 'r': 'q10' },
    { '.': 'q12' },
    { '%': 'q13' },
    { '1': 'q1' },
    { '2': 'q2' },
    { '0': 'q5' },
    { '3': 'q3' },
  ],
  'q4': [
    { '1': 'q1' },
    { '2': 'q2' },
    { '3': 'q3' },
    { '4-9': 'q9' },
    { '0': 'q9' },
    { 't': 'q8' },
    { '.': 'q12' },
    { '%': 'q13' },
  ],
  'q9': [
    { '0-9': 'q11' },
    { 't': 'q8' },
    { '.': 'q12' },
    { '%': 'q13' },
  ],
  'q11': [
    { '0-9': 'q11' },
    { '.': 'q12' },
    { '%': 'q13' },
  ],
  'q12': [
    { '0-9': 'q11' },
  ],
  'q14': [
    { 'n': 'q22' },
    { 'c': 'q105' },
  ],
  'q15': [
    { 'w': 'q24' },
    { 'h': 'q33' },
    { 'e': 'q41' },
    { 'r': 'q49' },
  ],
  'q16': [
    { 'o': 'q55' },
    { 'i': 'q61' },
    { 'e': 'q115' },
  ],
  'q17': [
    { 'u': 'q65' },
  ],
  'q18': [
    { 'e': 'q71' },
    { 'i': 'q77' },
  ],
  'q19': [
    { 'l': 'q78' },
    { 'i': 'q81' },
  ],
  'q20': [
    { 'i': 'q85' },
    { 'o': 'q124' },
  ],
  'q21': [
    { 'i': '' },
  ],
  'q22': [
    { 'e': 'q23' },
  ],
  'q24': [
    { 'o': 'q25' },
    { 'e': 'q26' },
  ],
  'q26': [
    { 'l': 'q27' },
    { 'n': 'q28' },
  ],
  'q27': [
    { 'v': 'q22' },
    { 'f': 'q29' },
  ],
  'q29': [
    { 't': 'q8' },
  ],
  'q28': [
    { 't': 'q30' },
  ],
  'q30': [
    { 'y': 'q31' },
    { 'i': 'q32' },
  ],
  'q32': [
    { 'e': 'q29' },
  ],
  'q33': [
    { 'r': 'q34' },
    { 'i': 'q37' },
    { 'o': 'q43' },
  ],
  'q34': [
    { 'e': 'q35' },
  ],
  'q35': [
    { 'e': 'q36' },
  ],
  'q37': [
    { 'r': 'q38' },
  ],
  'q38': [
    { 'd': 'q7' },
    { 't': 'q39' },
  ],
  'q39': [
    { 'y': 'q31' },
    { 'i': 'q32' },
    { 'e': 'q40' },
  ],
  'q40': [
    { 'e': 'q41' },
  ],
  'q41': [
    { 'n': 'q42' },
  ],
  'q42': [
    { 't': 'q8' },
  ],
  'q43': [
    { 'u': 'q44' },
  ],
  'q44': [
    { 's': 'q45' },
  ],
  'q45': [
    { 'a': 'q46' },
  ],
  'q46': [
    { 'n': 'q47' },
  ],
  'q47': [
    { 'd': 'q48' },
  ],
  'q48': [
    { 't': 'q8' },
  ],
  'q49': [
    { 'i': 'q50' },
  ],
  'q50': [
    { 'l': 'q51' },
  ],
  'q51': [
    { 'l': 'q52' },
  ],
  'q52': [
    { 'i': 'q53' },
  ],
  'q53': [
    { 'o': 'q54' },
  ],
  'q54': [
    { 'n': 'q42' },
  ],
  'q55': [
    { 'u': 'q56' },
    { 'r': 'q59' },
  ],
  'q56': [
    { 'r': 'q57' },
  ],
  'q57': [
    { 't': 'q58' },
  ],
  'q58': [
    { 'e': 'q40' },
    { 'h': 'q7' },
  ],
  'q59': [
    { 't': 'q60' },
  ],
  'q60': [
    { 'y': 'q31' },
    { 'i': 'q32' },
  ],
  'q61': [
    { 'v': 'q22' },
    { 'r': 'q62' },
    { 'f': 'q63' },
  ],
  'q62': [
    { 's': 'q6' },
  ],
  'q63': [
    { 't': 'q64' }
  ],
  'q64': [
    { 'y': 'q31' },
    { 'h': 'q7' },
    { 'i': 'q32' },
    { 'e': 'q40' },
  ],
  'q65': [
    { 'n': 'q66' }
  ],
  'q66': [
    { 'd': 'q67' }
  ],
  'q67': [
    { 'r': 'q68' }
  ],
  'q68': [
    { 'e': 'q69' }
  ],
  'q69': [
    { 'd': 'q70' }
  ],
  'q70': [
    { 't': 'q8' }
  ],
  'q71': [
    { 'c': 'q72' },
    { 'v': 'q74' },
    { 'p': 'q123' },
  ],
  'q72': [
    { 'o': 'q73' }
  ],
  'q73': [
    { 'n': 'q10' }
  ],
  'q74': [
    { 'e': 'q75' }
  ],
  'q75': [
    { 'n': 'q76' }
  ],
  'q76': [
    { 't': 'q64' }
  ],
  'q77': [
    { 'x': 'q76' }
  ],
  'q78': [
    { 'e': 'q79' }
  ],
  'q79': [
    { 'v': 'q80' }
  ],
  'q80': [
    { 'e': 'q41' }
  ],
  'q81': [
    { 'g': 'q82' }
  ],
  'q82': [
    { 'h': 'q83' }
  ],
  'q83': [
    { 't': 'q84' }
  ],
  'q84': [
    { 'y': 'q31' },
    { 'h': 'q7' },
    { 'i': 'q32' },
    { 'e': 'q40' },
  ],
  'q85': [
    { 'n': 'q86' }
  ],
  'q86': [
    { 'e': 'q87' },
    { 't': 'q8' }
  ],
  'q87': [
    { 't': 'q39' },
  ],
  'q88': [
    { 'a': 'q89' },
    { 'u': 'q95' },
  ],
  'q89': [
    { 'n': 'q90' },
  ],
  'q90': [
    { 'u': 'q91' },
  ],
  'q91': [
    { 'a': 'q92' },
  ],
  'q92': [
    { 'r': 'q93' },
  ],
  'q93': [
    { 'y': 'q94' },
  ],
  'q95': [
    { 'n': 'q22' },
    { 'l': 'q96' },
  ],
  'q96': [
    { 'y': 'q94' },
  ],
  'q97': [
    { 'p': 'q98' },
    { 'u': 'q102' },
  ],
  'q98': [
    { 'r': 'q99' },
  ],
  'q99': [
    { 'i': 'q100' },
  ],
  'q100': [
    { 'l': 'q101' },
  ],
  'q102': [
    { 'g': 'q103' },
  ],
  'q103': [
    { 'u': 'q104' },
  ],
  'q104': [
    { 's': 'q6' },
  ],
  'q105': [
    { 't': 'q106' },
  ],
  'q106': [
    { 'o': 'q107' },
  ],
  'q107': [
    { 'b': 'q108' },
  ],
  'q108': [
    { 'e': 'q109' },
  ],
  'q109': [
    { 'r': 'q110' },
  ],
  'q111': [
    { 'e': 'q112' },
  ],
  'q112': [
    { 'c': 'q113' },
  ],
  'q113': [
    { 'e': 'q114' },
  ],
  'q114': [
    { 'm': 'q107' },
  ],
  'q115': [
    { 'b': 'q116' },
  ],
  'q116': [
    { 'r': 'q90' },
  ],
  'q117': [
    { 'i': 'q50' },
    { 'a': 'q118' },
  ],
  'q118': [
    { 'y': 'q119' },
    { 'r': 'q120' },
  ],
  'q120': [
    { 'c': 'q121' },
  ],
  'q121': [
    { 'h': 'q122' },
  ],
  'q123': [
    { 't': 'q113' },
  ],
  'q124': [
    { 'v': 'q113' },
  ],
}


const determineNextState = (currentState, character) => {
  const transitions = states[currentState]
  if (!transitions) return false
  for (const transition of transitions) {
    const [alphabets, nextState] = Object.entries(transition)[0];
    if (alphabets.includes('-')) {
      const [start, end] = alphabets.split('-');
      if (character >= start && character <= end) {
        return nextState;
      }
    } else if (alphabets.includes('/')) {
      const allAlphabets = alphabets.split('/');
      if (allAlphabets.includes(character)) {
        return nextState
      }
    } else {
      if (character == alphabets) {
        return nextState;
      }
    }
  }
}

/**
 * @param {string} word String to be fed into DFA to determine it is accepted or not by the DFA
 * @returns status whether accepted or rejected
 */
const dfa = (word) => {
  let currentState = 'q0'
  for (const character of word) {
    let nextState = determineNextState(currentState, character)
    if (!nextState) return false
    else currentState = nextState
  }
  return acceptingStates.includes(currentState)
}

// const testCasesCorrect = [
//   '1', '12', '1230', '1.2', '1.233.1', '1%', '1.334%',
//   '100%', '10023%', '1st', '2nd', '3rd', '44th', '41st', '132nd',
//   'ten', 'tenth', 'thousand', 'thousandth', 'twelfth', 'million', 'billionth', 'nine', 
//   'ninety', 'ninetieth', 'ninety-nine', 'twenty-nine']

// const testCasesWrong = ['111.', '12%%', '1rd', '2st', '10st', '100rd']

// for (let x = 0; x < testCasesCorrect.length; x++) {
//   let finalResult;
//   if (testCasesCorrect[x].includes('-')) {
//     const allWords = testCasesCorrect[x].split('-');
//     finalResult = true
//     for(let w of allWords){
//       if(!dfa(w)){
//         finalResult=false
//         break;
//       }
//     }
//   }else{
//     finalResult = dfa(testCasesCorrect[x])
//   }
//   console.log(`${testCasesCorrect[x]}: `, finalResult);
// }
