import NavBar from "./NavBar";
import Footer from "./Footer";
interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  return (

    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
