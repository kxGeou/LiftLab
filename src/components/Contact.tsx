import { Instagram, Mail } from 'lucide-react'

function Contact() {
    const contact = 
    [
        {
            icon: <Instagram></Instagram>,
            title: "Instagram",
            link: "https://www.instagram.com/lift.lab_pl/",
        },
    ]
  return (
    <section className='uppercase my-46' id='contact'>
         <div className="">
            <h2 className="bg-gray-500/30 backdrop-blur-3xl w-fit p-2 mb-4">Kontakt</h2>

  <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Masz pytania? Skontaktuj się z nami!
      </h2>
        <p className="opacity-75 text-sm md:text-base max-w-200">Jeśli masz jakiekolwiek pytania dotyczące naszych planów treningowych, chcesz uzyskać więcej informacji lub potrzebujesz pomocy w treningu, nie wahaj się z nami skontaktować. Jesteśmy tutaj, aby Ci pomóc!</p>             
      </div>

      <div className='grid  w-full gap-8'>
        {
            contact.map((contact, index) => (
                <a key={index} href={contact.link} className='w-full bg-gray-500/30 backdrop-blur-3xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-gray-950 transition-all duration-300 mt-8'>
                    <div>{contact.icon}</div>
                    <p>{contact.title}</p>
                </a>
            ))
        }
      </div>
    </section>
  )
}

export default Contact