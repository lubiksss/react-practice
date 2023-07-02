import Image from 'next/image'
import {CounterButton} from "@/app/counter/counterButton";

export default function Home() {
  return (
    <>
      <h1>
        <CounterButton />
      </h1>
    </>
  )
}
