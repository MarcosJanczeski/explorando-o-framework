import Link from "next/link";
import Title from "../src/components/title";
export default function Home(){
  return <>
    <Title Tag='h1'>Home Page</Title>
    <Link href='/faq'>Go to FAQ</Link>
  </>
}
