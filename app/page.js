import Image from 'next/image'
import emojis from "../lib/emojis.json"
import { Noto_Color_Emoji } from 'next/font/google'
import TypeWriter2 from '@/components/typeWriter/typeWriter';
import Header from '@/components/header/header';
import CenteredPAgeWrapper from '@/components/setup/centeredPageWrapper';
import Title from '@/components/setup/title';
import { Caveat } from 'next/font/google';
import OneRem from '@/components/setup/oneRem';
import Footer from '@/components/footer/footer';
import Intro from '@/components/setup/intro';
import IconGithub from '@/components/icons/github';
import LinkButton from '@/components/setup/buttons/linkButton';
const noto = Noto_Color_Emoji({subsets: ['emoji'], weight:['400']})
const caveat = Caveat({subsets:['cyrillic'],weight:['400']})

export default function Home() {
  const emojiCodes = [9794, 128513, 128514];
  const myemoji = emojis[0].slice(2)
  const myCodes = emojis.map((item)=> item.slice(2))
  console.log(myemoji,"here")
  return (
    <>
    <Header/>
    <main >
      <CenteredPAgeWrapper>
        <Title name={"React Type Writer"}/>
        <OneRem/>
        <span className={caveat.className}>By <a href={"https://github.com/williambroberts/TyperWriter"} className='name-link'> William Roberts</a> <span className={noto.className}>&#128221;</span> </span> 
        <OneRem/>
        <TypeWriter2 words={["You can type","your own words!","..."]} pause={1000} interval={100} cursorTickRate={1} />
        <OneRem/>
        <Intro>
          You are welcome to view the source code and use this in your own work & projects.
        </Intro>
        <OneRem/>
       
        <LinkButton icon={<IconGithub/>} text={"Link to Code"} link={"https://github.com/williambroberts/TyperWriter"}/>
        <OneRem/>
        <Intro>The relevant files are called "typeWriter.jsx" and "typeWriter.css" <span className={noto.className}>&#x1F4C1;</span></Intro>
        <OneRem/>
        <div>Features</div>
        <OneRem/>
        <span>Pass as Props the following: </span>
        <ul>
          <li> words to type, <strong>any number & length</strong></li>
          <li><strong>pause</strong> time at the end of the word</li>
          <li>type <strong>speed</strong></li>
          <li>cursor tick rate</li>
         
        </ul>
      </CenteredPAgeWrapper>
    
     
      
      </main>
      <Footer/>
    </>
    
  )
}
