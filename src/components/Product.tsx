import { BicepsFlexed } from "lucide-react"

function Product() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-46 gap-16 uppercase" id="training">
      <div className="w-full">
            <h2 className="bg-gray-500/30 backdrop-blur-3xl w-fit p-2 mb-4">Nasz trening</h2>

  <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Nasz <span className="text-[#497bec]">"Idealny"</span>  plan treningowy dla Ciebie
      </h2>
      <p className="opacity-75 text-sm md:text-base">Idealny to oczywiście za duże słowo ale dzięki niemu rozwiniesz wszystkie mieśnie które potrzebujesz do estetycznej i pożytecznej sylwetki. Każdy z dni nie wymaga od ciebie 3 godzin na siłowni. Każdy dzień treningu dasz radę wykonać w godzinę!</p>
            <a href="https://grzegorzwfb.gumroad.com/l/gopftr" target="_blank" className='p-3 md:p-4 bg-gray-500/30 backdrop-blur-2xl w-full uppercase font-medium  md:max-w-80 mt-6 flex items-center justify-center gap-3 transition-all hover:bg-white hover:text-gray-950 duration-300 cursor-pointer'>Zmień swoją sylwetkę <BicepsFlexed size={18}></BicepsFlexed></a>

      </div>
    
      <a href="https://grzegorzwfb.gumroad.com/l/gopftr" target="_blank" className="w-full md:w-3/5 p-4 bg-gray-500/30 backdrop-blur-2xl flex items-center justify-center">
        <img src="./trening.png" alt="obraz treningu" />
      </a>

    </section>
  )
}

export default Product