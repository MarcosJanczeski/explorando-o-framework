import Link from "next/link";
import Title from "../src/components/title";
import { useEffect, useState } from "react";

export default function Faq() {
  const [faqs, setFaqs] = useState([])
  useEffect(() => {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    fetch(FAQ_API_URL)
      .then(resp => {
        return resp.json()
      })
      .then(resp => {
        setFaqs(resp)
      })
  }, [])
  return <>
    <Title Tag='h1'>FAQ</Title>
    <ul>
      {faqs.map((faq, index) => <li key={index}>
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </li>)}
    </ul>
    <Link href='/'>Go to home page</Link>
  </>
}
