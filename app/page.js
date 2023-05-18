import Image from 'next/image'
import emojis from "../lib/emojis.json"
import { Noto_Color_Emoji } from 'next/font/google'
import TypeWriter2 from '@/components/typeWriter/typeWriter';
const noto = Noto_Color_Emoji({subsets: ['emoji'], weight:['400']})
export default function Home() {
  const emojiCodes = [9794, 128513, 128514];
  const myemoji = emojis[0].slice(2)
  const myCodes = emojis.map((item)=> item.slice(2))
  console.log(myemoji,"here")
  return (
    <main >
      
    
     
    <TypeWriter2 words={["123","abc","..."]} pause={1000} interval={100} cursorTickRate={1} />
    </main>
  )
}
