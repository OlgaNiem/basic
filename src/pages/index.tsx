import style from '../styles/Home.module.css'
import Box from '@/components/Box/Box'
import Form from '@/components/Form/Form'
import Link from 'next/link';

export default function Home() {
  // Logic
  function consoleLog(e: any){
    e.preventDefault();
    console.log('hej')
  }
  return (
    <div>
      
      <h1>Welcome</h1>
      <h2 className="title">
        Read <Link href="/about">about page!</Link>
      </h2>
      <h2 className="title">
        Read <Link href="/contact">contact page!</Link>
      </h2>
      <form className={style.form}>
        <input type="text" placeholder='Write something' />
        <button type='submit' color={'yellow'} onClick={consoleLog}>Submit</button>
      </form> 

      <div className={style.main}>
      <button onClick={consoleLog}>click</button>
      <Box color={'red'} num={1} />
      <Box color={'yellow'} num={2} />
      <Box color={'green'} num={3} />
      
      </div>
    </div>
  )
}
