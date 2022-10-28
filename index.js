const quizData = [
   {
      question: 'how old is florin?',
      a: '10',
      b: '17',
      c: '26',
      d: '110',
      correct: 'c'
    },
    {
      question: 'What is the most used programming language in 2019?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd'
    },
    {
      question: 'Who is the President of US?',
      a: 'Florin Pop',
      b: 'Joe Biden',
      c: 'Ivan Saldano',
      d: 'Mihai Andrei',
      correct: 'b'
    },
    {
      question: 'What year was JavaScript launched?',
      a: '2020',
      b: '2019',
      c: '2018',
      d: 'none of the above',
      correct: 'd'
    }
]



const aText  = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const question = document.getElementById('question')
const submitBtn = document.getElementById('btn')
let answer = document.querySelectorAll('input[name="answer"]')
let quiz = document.querySelector('.container')
let reload = document.querySelector('.reload-btn')


let index= 0


let testData = () => {
   question.innerText = quizData[index].question
   aText.innerText = quizData[index].a
   bText.innerText = quizData[index].b
   cText.innerText = quizData[index].c
   dText.innerText = quizData[index].d

   if(index == 1 && index < 3){
    submitBtn.innerText = 'Next'
   } else if( index == 3){
    submitBtn.innerText = 'Submit'
   }
}

testData()



submitBtn.addEventListener('click', () =>{
   answer.forEach(answer => {
    if(answer.checked){
      totalScore(answer.id)
      index++
      testData()
      answer.checked = false
    }
   })

  
})

let score = 0

let totalScore = (s) =>{
  if(quizData[index].correct == s){
    score++
  } if(quizData.length - 1 == index){
    question.innerText = ''
    quiz.innerHTML = `<h1>Your Score ${score}/${quizData.length}</h1>`
    reload.innerHTML = `<button class="cool-btn" onclick = location.reload()>Try Again</button> `
  }
}









