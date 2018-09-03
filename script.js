const jokes = [
  {
    question: "Anong <i>tash</i> ang nilalagay sa kape?",
    answer: "Edi ga<i>tash</i>."
  },
  {
    question: "Anong <i>tash</i> ang nilalagay sa leeg?",
    answer: "Edi kwin<i>tash</i>."
  },
  {
    question: "Anong <i>tash</i> ang tinatakpan?",
    answer: "Edi bu<i>tash</i>."
  },
  {
    question: "Anong <i>tash</i> ang nakikita sa tv?",
    answer: "Edi patalas<i>tash</i>."
  }
]

const emojis = ["🤪", "😋", "😛", "💁"]

const nani = document.querySelector('button.nani')
const anek = document.querySelector('button.anek')

let randomize = function () {
  const question = document.querySelector('h2')
  const answer = document.querySelector('h1')
  const wat = Math.round(Math.random() * 10) % jokes.length
  const lel = Math.round(Math.random() * 10) % emojis.length

  question.innerHTML = jokes[wat].question
  answer.innerHTML = ""
  nani.style.display = 'block';
  anek.style.display = 'none';

  nani.addEventListener('click', function () {
    answer.innerHTML = `${jokes[wat].answer} ${emojis[lel]}`
    nani.style.display = 'none';
    anek.style.display = 'block';
  })
}

window.onload = randomize()

anek.addEventListener('click', function () {
  randomize()
})
