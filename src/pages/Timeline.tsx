import { useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Timeline.css'



export function Timeline() {
  const [tweets, setTweets] = useState< string[]>([])
  const [newTweet, setNewTweet] = useState('')	
  function createNewTweet(event: React.FormEvent) {
    event.preventDefault();
    setTweets([ newTweet,...tweets])
    setNewTweet('')
  }
  function handleHotKeySubmint (event: React.KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      event.preventDefault();
      createNewTweet(event);
      setTweets([ newTweet,...tweets])
      setNewTweet('')
    }
  }
  return(
    <main className='timeline'>
         <Header 
          title='Home'
         />
          <form className='new-tweet-form' onSubmit={createNewTweet}>
            <label htmlFor="tweet">
              <img src="https://github.com/daniellevi22.png" alt="Daniel Levi" />
              <textarea
                id='tweet'
                placeholder='Whats happening?' 
                value={newTweet}
                onKeyDown={handleHotKeySubmint}
                onChange={event => setNewTweet(event.target.value)}
               />
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <Separator />

          {
            tweets.map((tweete) =>(
              <Tweet 
                key={tweete}
                tweet={tweete} 
              />
            ))
          }
       
        
        </main>
  )
}