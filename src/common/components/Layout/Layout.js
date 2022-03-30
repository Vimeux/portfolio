import Header from '../Header/Header'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main data-scroll-container>{children}</main>
    </>
  )
}
