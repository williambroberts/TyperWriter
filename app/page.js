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
import IconKeyboard from '@/components/icons/keyboard';
const noto = Noto_Color_Emoji({subsets: ['emoji'], weight:['400']})
const caveat = Caveat({subsets:['cyrillic'],weight:['400']})

export default function Home() {
  
  
  return (
    <>
    <Header/>
    <main >
      <CenteredPAgeWrapper>
        <Title name={"React Type Writer"}/>
        <OneRem/>
        <span className={`${caveat.className} name-span`}>By <a href={"https://github.com/williambroberts/TyperWriter"} className='name-link'> William Roberts</a> <span className={noto.className}>&#128221;</span> </span> 
        <OneRem/>
        <TypeWriter2 words={["You can type","your own words!","...","you can alter the speed","you can even pause at the end"]} pause={1000} interval={100} cursorTickRate={1} />
        <OneRem/>
        <Intro>
          You are welcome to view the source code and use this in your own work & projects.
        </Intro>
        <OneRem/>
       
        <LinkButton icon={<IconGithub/>} text={"Link to Code"} link={"https://github.com/williambroberts/TyperWriter"}/>
        <OneRem/>
        <Intro>The relevant files are called <em>typeWriter.jsx</em> and <em>typeWriter.css</em> </Intro>
        <OneRem/>
        <div className='underlined'>Features:</div>
        <OneRem/>
        <span>Pass the following as Variables: </span>
        <ul>
          <li> words to type, <strong>any number & length</strong></li>
          <li><strong>pause</strong> time at the end of the word</li>
          <li>type <strong>speed</strong></li>
          <li><strong>cursor</strong> tick rate</li>
         
        </ul>
       {/* <code className='code-1'>type writer effect....</code>
       <code className='code-2'>change the text..</code>
       <code className='code-3'>... write a letter </code>
       <code className='code-4'>type your name</code>
       <code className='code-5'>change the speed</code>
       <code className='code-6'>built in react</code> */}
      </CenteredPAgeWrapper>
    
     
      
      </main>
      <Footer/>
    </>
    
  )
}
