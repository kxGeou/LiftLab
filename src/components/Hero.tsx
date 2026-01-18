import { BicepsFlexed, Gem, Hourglass, ScanFace } from 'lucide-react'

function Hero() {

  const hero =
  [
    {icon: <Hourglass size={16}></Hourglass>, title: "Wieloletnie doświadczenie", description: "Trening tworzy osoba z wieloletnim doświadczeniem w budowie treningów siłowych oraz wiedzą z zakresu biomechaniki."},
    {icon: <ScanFace size={16}></ScanFace>, title: "Wygodne ukazanie treningu", description: "W pakiecie trening jest przedstawiony w formie graficznej oraz w tabeli do prostego przepisania ćwiczeń."},
    {icon: <Gem size={16}></Gem> , title: "Dogodna cena", description: "Nie wymagamy kilkuset złotych za plan treningowy. Nasze ceny są na tyle przystępne by każdy mógł sobie pozwolić na trening."},
  ]

  return (
    <section className='flex flex-col md:flex-row items-center justify-between gap-16 mt-12 md:mt-32 uppercase' id='hero'>
        <div  className='flex flex-col w-full gap-3'>
                 <div className="flex items-center gap-1 mt-3 w-fit bg-gray-500/30 p-2 justify-center mb-2">
              {[...Array(4)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#facc15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                </svg>
              ))}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stop-color="#facc15"/>
                    <stop offset="50%" stop-color="#e5e7eb"/>
                  </linearGradient>
                </defs>
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" fill="url(#half)"/>
              </svg>
              <span className="ml-2 text-sm opacity-75">4.5/5 </span>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Trening oparty na nauce. <span className='second-font italic text-[#497bec]'>Nie na mitach</span> </h1>
            <p className='leading-relaxed opacity-75 text-sm md:text-base'>Łączymy trening siłowy z wiedzą naukową, abyś trenował skuteczniej, bezpieczniej i z realnymi efektami. Analiza, planowanie i progres — wszystko oparte na faktach, nie trendach.</p>

            <a href='https://grzegorzwfb.gumroad.com/l/gopftr' target='_blank' className='p-3 md:p-4 bg-gray-500/30 backdrop-blur-2xl w-full uppercase font-medium  md:max-w-80 mt-8 flex items-center justify-center gap-3 transition-all hover:bg-white hover:text-gray-950 duration-300 cursor-pointer'>Zmień swoją sylwetkę <BicepsFlexed size={18}></BicepsFlexed></a>

       
        </div>

        <ul className='w-full flex flex-col gap-4'>
            {hero.map((item,index) => (
                <li key={index} className='flex items-center gap-6 bg-gray-500/30 p-2 md:p-3 backdrop-blur-2xl'>
                    <div className='p-2 md:p-3 bg-white/20 flex items-center justify-center'>
                        {item.icon}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold text-sm md:text-base'>{item.title}</h3>
                        <p className='text-sm opacity-75'>{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Hero