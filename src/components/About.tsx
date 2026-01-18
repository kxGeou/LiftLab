import { BicepsFlexed } from "lucide-react"

function About() {
  return (
    <section className="mt-46 flex items-center flex-col md:flex-row justify-between uppercase" id="about">
        <div>

            <h2 className="bg-gray-500/30 backdrop-blur-3xl w-fit p-2 mb-4">O nas</h2>

            <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-semibold">Łączymy pasję z pomaganiem innym</h3>
                <p className="opacity-75 w-full max-w-230 leading-relaxed text-sm md:text-base">Jesteśmy zespołem entuzjastów dobrej sylwetki i nauki, którzy wierzą, że skuteczny trening to coś więcej niż tylko podnoszenie ciężarów. Naszą misją jest dostarczanie planów treningowych opartych na solidnych podstawach naukowych, które pomagają naszym klientom osiągać ich cele w sposób bezpieczny i efektywny.</p>
            </div>
        </div>

        <div className="w-full  items-center justify-center bg-gray-500/30 p-6 backdrop-blur-2xl max-w-75 h-75 hidden md:flex">
            <BicepsFlexed size={60}></BicepsFlexed>
        </div>

    </section>
  )
}

export default About