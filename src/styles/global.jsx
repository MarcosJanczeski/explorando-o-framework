import { theme } from './theme';

export default function GlobalStyle() {
  return (
    <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@100;300;400;500;700&display=swap');
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: ${theme.typography.fontFamily}, sans-serif;
        }
        img, video {
          max-width: 100%;
          height: auto;
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          display: block;
          vertical-align: middle;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          height: 100%;
        }
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        #__next > * {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }
      `}</style>
  )
}
