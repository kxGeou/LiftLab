import { Instagram, Mail } from 'lucide-react'

function Footer() {
  const nav = [
    { name: 'O nas', link: '#about' },
    { name: 'Trening', link: '#training' },
    { name: 'Opinie', link: '#testimonials' },
    { name: 'Kontakt', link: '#contact' },
  ]


  return (
    <footer className="mt-20 pb-8 pt-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        {/* Logo i opis */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold uppercase">LiftLab</h3>
          <p className="opacity-75 text-sm leading-relaxed">
            Profesjonalne treningi personalne i indywidualne podejście do każdego klienta.
          </p>
          <div className="flex gap-4 mt-2">
         
            <a
              href="https://www.instagram.com/lift.lab_pl/"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Nawigacja */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold uppercase">Nawigacja</h4>
          <ul className="flex flex-col gap-3">
            {nav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold uppercase">Kontakt</h4>
          <ul className="flex flex-col gap-3">
            
            <li className="flex items-center gap-3 opacity-75 text-sm">
              <Mail size={18} className="opacity-60" />
              <a href="mailto:kontakt@liftlab.pl" className="hover:opacity-100 transition-opacity duration-300">
               matusikgrzegorz70@gmail.com
              </a>
            </li>
          
          </ul>
        </div>
      </div>

  
    </footer>
  )
}

export default Footer