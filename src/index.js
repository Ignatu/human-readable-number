module.exports = function toReadable (number) {
  number = number.toString().split('');

  /* 1 stage*/

  if (number.length === 3) {
  /* first number*/
  if (number[0] === '1'){
    number[0] = 'one hundred'
    } else
  if (number[0] === '2'){
    number[0] = 'two hundred'
    } else
  if (number[0] === '3'){
    number[0] = 'three hundred'
    } else
  if (number[0] === '4'){
    number[0] = 'four hundred'
    } else
  if (number[0] === '5'){
    number[0] = 'five hundred'
  } else
  if (number[0] === '6'){
    number[0] = 'six hundred'
    } else
  if (number[0] === '7'){
    number[0] = 'seven hundred'
    } else
  if (number[0] === '8'){
    number[0] = 'eight hundred'
    } else
  if (number[0] === '9'){
    number[0] = 'nine hundred'
    }
  /* second number*/
  if (number[1] === '0'){number.splice(1,1)} else
  if (number[1] === '1'){
    if (number[2] === '0'){
      number[1] = 'ten'; number.splice(2,1)
      } else
    if (number[2] === '1'){
      number[1] = 'eleven'; number.splice(2,1)
      } else
    if (number[2] === '2'){
      number[1] = 'twelve'; number.splice(2,1)
      } else
    if (number[2] === '3'){
      number[1] = 'thirteen'; number.splice(2,1)
      } else
    if (number[2] === '4'){
      number[1] = 'fourteen'; number.splice(2,1)
      } else
    if (number[2] === '5'){
      number[1] = 'fifteen'; number.splice(2,1)
      } else
    if (number[2] === '6'){
      number[1] = 'sixteen'; number.splice(2,1)
      } else
    if (number[2] === '7'){
      number[1] = 'seventeen'; number.splice(2,1)
      } else
    if (number[2] === '8'){
      number[1] = 'eighteen'; number.splice(2,1)
      } else
    if (number[2] === '9'){
      number[1] = 'nineteen'; number.splice(2,1)
      }
    } else
  if (number[1] === '2'){
    number[1] = 'twenty'
    } else
  if (number[1] === '3'){
    number[1] = 'thirty'
    } else
  if (number[1] === '4'){
    number[1] = 'forty'
    } else
  if (number[1] === '5'){
    number[1] = 'fifty'
    } else
  if (number[1] === '6'){
    number[1] = 'sixty'
    } else
  if (number[1] === '7'){
    number[1] = 'seventy'
    } else
  if (number[1] === '8'){
    number[1] = 'eighty'
    } else
  if (number[1] === '9'){
  number[1] = 'ninety'
  }
  /* third number*/
  if (number[2] === '0'){
    number.splice(2,1)
    } else
  if (number[2] === '1'){
    number[2] = 'one'
    } else
  if (number[2] === '2'){
    number[2] = 'two'
    } else
  if (number[2] === '3'){
    number[2] = 'three'
    } else
  if (number[2] === '4'){
    number[2] = 'four'
    } else
  if (number[2] === '5'){
    number[2] = 'five'
    } else
  if (number[2] === '6'){
    number[2] = 'six'
    } else
  if (number[2] === '7'){
    number[2] = 'seven'
    } else
  if (number[2] === '8'){
    number[2] = 'eight'
    } else
  if (number[2] === '9'){
    number[2] = 'nine'
    }
  }
  /* 2 stage */
if (number.length === 2){
  /* first number*/
  if (number[0] === '1'){
     if (number[1] === '0'){
      number[0] = 'ten'; number.splice(1,1)
      } else
    if (number[1] === '1'){
      number[0] = 'eleven'; number.splice(1,1)
      } else
    if (number[1] === '2'){
      number[0] = 'twelve'; number.splice(1,1)
      } else
    if (number[1] === '3'){
      number[0] = 'thirteen'; number.splice(1,1)
      } else
    if (number[1] === '4'){
      number[0] = 'fourteen'; number.splice(1,1)
      } else
    if (number[1] === '5'){
      number[0] = 'fifteen'; number.splice(1,1)
      } else
    if (number[1] === '6'){
      number[0] = 'sixteen'; number.splice(1,1)
      } else
    if (number[1] === '7'){
      number[0] = 'seventeen'; number.splice(1,1)
      } else
    if (number[1] === '8'){
      number[0] = 'eighteen'; number.splice(1,1)
      } else
    if (number[1] === '9'){
      number[0] = 'nineteen'; number.splice(1,1)
      }
    } else
  if (number[0] === '2'){
    number[0] = 'twenty'
    } else
  if (number[0] === '3'){
    number[0] = 'thirty'
    } else
  if (number[0] === '4'){
    number[0] = 'forty'
    } else
  if (number[0] === '5'){
    number[0] = 'fifty'
    } else
  if (number[0] === '6'){
    number[0] = 'sixty'
    } else
  if (number[0] === '7'){
    number[0] = 'seventy'
    } else
  if (number[0] === '8'){
    number[0] = 'eighty'
    } else
  if (number[0] === '9'){
  number[0] = 'ninety'
  }
  /* second number*/
if (number[1] === '0'){
  number.splice(1,1)
  } else
if (number[1] === '1'){
  number[1] = 'one'
  } else
if (number[1] === '2'){
  number[1] = 'two'
  } else
if (number[1] === '3'){
  number[1] = 'three'
  } else
if (number[1] === '4'){
  number[1] = 'four'
  } else
if (number[1] === '5'){
  number[1] = 'five'
  } else
if (number[1] === '6'){
  number[1] = 'six'
  } else
if (number[1] === '7'){
  number[1] = 'seven'
  } else
if (number[1] === '8'){
  number[1] = 'eight'
  } else
if (number[1] === '9'){
  number[1] = 'nine'
  }
}
  /* 3 stage */
if (number.length === 1){
if (number[0] === '0'){
  number[0] = 'zero'
  } else
if (number[0] === '1'){
  number[0] = 'one'
  } else
if (number[0] === '2'){
  number[0] = 'two'
  } else
if (number[0] === '3'){
  number[0] = 'three'
  } else
if (number[0] === '4'){
  number[0] = 'four'
  } else
if (number[0] === '5'){
  number[0] = 'five'
  } else
if (number[0] === '6'){
  number[0] = 'six'
  } else
if (number[0] === '7'){
  number[0] = 'seven'
  } else
if (number[0] === '8'){
  number[0] = 'eight'
  } else
if (number[0] === '9'){
  number[0] = 'nine'
  }
}
  return number.join(' ')
}
