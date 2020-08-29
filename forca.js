const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const words = ['macaco', 'tigre', 'foca', 'baleia', 'cadela']

function choose(arr) {
  const choosenIndex = Math.floor(0 + Math.random() * (arr.length - 0))
  return arr[choosenIndex].split('')
}

function getGuessedBlank(word) {
  let wordArray = []
  for (let i = 0; i < word.length; i++) {
    wordArray.push('_')
  }
  return wordArray
}

const word = choose(words)
const right_guessed_words = getGuessedBlank(word)

function setGuessedWords(guessed_word, Word = word) {
  const i = Word.indexOf(guessed_word)
  if (i > -1) {
    right_guessed_words[i] = guessed_word
    Word[i] = ''
    setGuessedWords(guessed_word, Word)
  }
}

function isWordValid(gussed_word) {
  return word.indexOf(gussed_word) > -1
}

async function MakeQuestion(question) {
  return new Promise((resolve, _) => {
    rl.question(question, answer => {
      if (answer.trim()) {
        if (answer.length > 1) {
          console.log('Your guess can only be a word')
          resolve(MakeQuestion(question))
        }
        resolve(answer)
        return
      }
      resolve(MakeQuestion(question))
    })
  })
}

function EveryThingGuessed() {
  return word.join('').trim()
}

function showStatus() {
  console.log(right_guessed_words.join(' '))
}

const default_question = `What's your guess?`
let lifes = 3

const main = async () => {
  console.log('Forca')
  showStatus()
  while (true) {
    if (lifes <= 0) {
      console.log('Not this time, try again!')
      break
    }

    const guessed_word = await MakeQuestion(default_question)

    if (!isWordValid(guessed_word)) {
      console.log('Missed!')
      lifes -= 1
      continue
    }

    setGuessedWords(guessed_word)

    if (!EveryThingGuessed()) {
      console.log('Good job!')
      break
    }

    showStatus()
  }
  rl.close()
}

main()