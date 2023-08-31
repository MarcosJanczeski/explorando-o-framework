import Link from "next/link";
import Head from "next/head";
import Footer from '../src/components/patterns/Footer';
import { theme } from '../src/styles/theme';
import { Box, Text } from '../src/styles/components';
//import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const resp = await fetch(FAQ_API_URL)
  const faqs = await resp.json()
  return { props: { faqs } }
}
/*
export default function Faq({ faqs }) {
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
*/
// FAQScreen.js

export default function Faq({ faqs = [] }) {
  return <>
    <Head>
      <title>FAQs - EXPLORANDO NEXTJS - ALURA</title>
    </Head>
    <Box
      stylesheet={{
        backgroundColor: theme.colors.neutral["050"]
      }}
    >
      <Box
        as="main"
        stylesheet={{
          flex: 1,
          maxWidth: theme.space.xcontainer_xl,
          marginHorizontal: "auto",
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical: {
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box
          stylesheet={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(3,minmax(0,1fr))",
            },
            gap: {
              lg: theme.space.x8,
            }
          }}
        >
          <Box>
            <Text
              as="h2"
              stylesheet={{
                textVariant: theme.typography.variants.heading2,
                color: theme.colors.neutral[900],
              }}
            >
              FAQ: Perguntas Frequentes
            </Text>
            <Text
              as="p"
              stylesheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Não consegue encontrar a resposta que procura? entre em contato com nosso{' '}
              <Link
                href="mailto:contato@alura.com.br"
                stylesheet={{
                  color: theme.colors.primary[400],
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                time de suporte ao consumidor
              </Link>
            </Text>

            <Text
              as="p"
              stylesheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link
                href="/"
                stylesheet={{
                  color: theme.colors.primary[400],
                  fontWeight: '500',
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                Voltar para home
              </Link>
            </Text>
          </Box>
          <Box
            stylesheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: "span 2 / span 2;",
              }
            }}
          >
            {faqs.length === 0 && (
              <Box
                stylesheet={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderTop: {
                    xs: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                    sm: 'none',
                  },
                  paddingTop: {
                    xs: theme.space.x6,
                    sm: 0,
                  },
                  borderLeft: {
                    sm: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                  },
                  paddingLeft: {
                    sm: theme.space.x6,
                  },
                  textAlign: "center",
                  minHeight: theme.space['x1/1']
                }}
              >
                <Text
                  as="h1"
                  stylesheet={{
                    textVariant: theme.typography.variants.heading1,
                  }}
                >
                  Nada por aqui
                </Text>
                <Text
                  as="p"
                  stylesheet={{
                    marginTop: theme.space.x1,
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.neutral[500],
                  }}
                >
                  Talvez ainda não existam dúvidas frequentes.
                </Text>
              </Box>
            )}
            <Box as="dl">
              {faqs.map((faq, index) => (
                <Box
                  key={index}
                  stylesheet={{
                    marginBottom: theme.space.x12,
                  }}
                >
                  <Text
                    as="dt"
                    stylesheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Text
                    as="dd"
                    stylesheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    {faq.answer}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  </>
}
