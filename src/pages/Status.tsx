import { useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
  const [answers, setAnswers] = useState<string[]>([
    'concordo....',
    'olha,faz sentindo!',
    'Parabens pelo progresso.'
  ])	
  const [newAnswers, setNewAnswers] = useState ('')

  function createNewTweet(event: React.FormEvent) {
    event.preventDefault();
    setAnswers([ newAnswers,...answers ])
    setNewAnswers('')
  }

  function handleHotKeySubmint (event: React.KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      event.preventDefault();
      createNewTweet(event);
      setAnswers([ newAnswers,...answers ])
      setNewAnswers('')
    }
  }
  return(
    <main className='status'>
    <Header 
     title='Tweet'
    />
    <Tweet 
      tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod repudiandae, nobis, sit aliquid enim unde assumenda magnam repellendus id qui fugiat quisquam illum et doloremque ad inventore rem? Eligendi?
      "
    />
    <Separator />
     <form className='answer-tweet-form' onSubmit={createNewTweet}>
       <label htmlFor="tweet">
         <img src="https://github.com/daniellevi22.png" alt="Daniel Levi" />
         <textarea 
           id='tweet'
           placeholder='Tweet your answer?'
           value={newAnswers}
           onKeyDown={handleHotKeySubmint}
           onChange={event => setNewAnswers(event.target.value)}
          />
       </label>
       <button type='submit'>
        <PaperPlaneRight />
        <span>Answer</span></button>
     </form>
     

     {
      answers.map((answer) =>(
        <Tweet 
          key={answer}
          tweet={answer}
        />
      ))
     }
   
   </main>
  )
}