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
  },
  {
    question: "Sinong <i>tash</i> ang makata?",
    answer: "Edi si Francisco Balag<i>tash</i>."
  },
  {
    question: "Anong <i>tash</i> ang masustansya?",
    answer: "Edi mus<i>tash</i>a."
  },
  {
    question: "Anong <i>tash</i> ang favorite ng mga baby?",
    answer: "Edi ga<i>tash</i>."
  },
  {
    question: "Anong <i>tash</i> ang dapat sundin?",
    answer: "Edi ba<i>tash</i>."
  },
  {
    question: 'Ano ang mangyayari kay <i>Tash</i> pag namatay sa sya?',
    answer: "Magiging <i>Tash</i>per the friendly ghost 👻",
    skipEmoji: true
  },
  {
    question: 'Anong <i>tash</i> ang sikat na kanta?',
    answer: "Edi <i>Tash</i> my body - Mariah Carey"
  },
  {
    question: 'Sinong <i>Tash</i> ang na sa impyerno?',
    answer: "Edi si <i>Tash</i>manian Devil <br> <img src='https://user-images.githubusercontent.com/74385/46606416-95af5f80-cb2f-11e8-9dcc-311358d3fdc6.png' width='100'>"
  }
]

const emojis = ["🤪", "😋", "😛", "💁"]

const nani = document.querySelector('button.nani')
const anek = document.querySelector('button.anek')

let randomize = function () {
  const question = document.querySelector('h2')
  const answer = document.querySelector('h1')
  const wat = Math.round(Math.random() * (jokes.length - 1))
  const lel = Math.round(Math.random() * (emojis.length - 1))

  question.innerHTML = jokes[wat].question
  answer.innerHTML = ""
  nani.style.display = 'block';
  anek.style.display = 'none';

  nani.addEventListener('click', function () {
    const joke = jokes[wat]
    answer.innerHTML = joke.answer
    if (!joke.skipEmoji) {
      answer.innerHTML += ' ' + emojis[lel]
    }

    nani.style.display = 'none';
    anek.style.display = 'block';
  })
}

window.onload = randomize()

anek.addEventListener('click', randomize)
