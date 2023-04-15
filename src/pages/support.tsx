import Layout from "~/components/Layout"
import Structure from "~/components/Structure"
import Support from "~/components/Support"

function support() {
  return (
    <Layout>
      <Structure bgImg="bg-[url('/sky.jpg')]" wideRow={false}>
        <Support></Support>
      </Structure>
    </Layout>
  )
}

export default support
