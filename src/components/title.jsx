export default function Title({ children, Tag }) {
  return <>
    <Tag>{ children }</Tag>
    <style jsx>{`
      ${Tag}{
        color: red;
      }
    `}</style>
  </>
}
