import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[40vh] w-full border-b border-ui-border-base relative bg-ellel-yellow flex flex-col justify-center items-center text-center p-8 gap-4">
      <Heading
        level="h1"
        className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tighter"
      >
        OFERTA
      </Heading>
      <Heading
        level="h2"
        className="text-2xl md:text-3xl font-semibold text-black italic"
      >
        OBTÉN 15% DTO.
      </Heading>
      <Button variant="primary" className="bg-black text-white hover:bg-grey-900 border-none rounded-full px-8 py-4">
        VER COLECCIÓN
      </Button>
    </div>
  )
}

export default Hero
