import Image from 'next/image'
import Link from 'next/link'
import { Navigator } from './components/Navigator'

export default function Home( ) {
  return (
    
     
      <section>
        <h1>Home</h1>
        <Link href="/dashboard">Dashboard</Link>
      </section>
      
    
  )
}
