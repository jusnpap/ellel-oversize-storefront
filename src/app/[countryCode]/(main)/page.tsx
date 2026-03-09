import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Ellel Oversize | Moda Minimalista",
  description:
    "Tienda oficial de Ellel Oversize. Buzos, conjuntos y camisetas con el mejor estilo.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  try {
    const region = await getRegion(countryCode)

    const { collections } = await listCollections({
      fields: "id, handle, title",
    })

    if (!collections || !region) {
      return null
    }

    return (
      <>
        <Hero />
        <div className="py-12 content-container">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-ellel-purple">
              NUEVOS MODELOS
            </h2>
            <div className="h-1 w-24 bg-ellel-yellow mt-2"></div>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </>
    )
  } catch (error) {
    console.warn("Skipping home page data fetching due to backend error:", error)
    return (
      <>
        <Hero />
        <div className="py-12 content-container text-center">
          <p className="text-ui-fg-subtle">
            Estamos preparando los nuevos modelos. Por favor, vuelve a intentarlo más tarde.
          </p>
        </div>
      </>
    )
  }
}
