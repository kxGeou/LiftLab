function Testimonials() {
    const testimonials = [
  {
    author: "Michał K.",
    rating: 5,
    text: "Pierwszy raz mam wrażenie, że wiem po co robię każde ćwiczenie. Trening logiczny, spokojny i bardzo skuteczny."
  },
  {
    author: "Anna P.",
    rating: 5,
    text: "Zero chaosu i przypadkowych ćwiczeń. Wszystko wytłumaczone jasno, progres zauważalny już po kilku tygodniach."
  },
  {
    author: "Tomasz L.",
    rating: 5,
    text: "Podejście oparte na wiedzy, a nie modzie z social mediów. W końcu trening, który ma sens."
  },
  {
    author: "Karolina M.",
    rating: 5,
    text: "Duży nacisk na technikę i bezpieczeństwo. Czuję, że trenuję mądrze, a nie tylko ciężko."
  },
  {
    author: "Paweł S.",
    rating: 5,
    text: "Świetne połączenie teorii z praktyką. Treningi są przemyślane i łatwe do utrzymania długoterminowo."
  },
  {
    author: "Natalia W.",
    rating: 5,
    text: "Bardzo profesjonalne podejście. Widać, że wszystko jest oparte na analizie, a nie na zgadywaniu."
  }
]

  return (
    <section className="mt-46" id='testimonials'>
            <h2 className="bg-gray-500/30 backdrop-blur-3xl w-fit p-2 mb-4 uppercase">Opinie</h2>

      <h2 className="text-2xl md:text-3xl  font-semibold text-left uppercase">Opinie podopiecznych</h2>
      <p className='text-sm md:text-base mt-1 mb-6 opacity-75 uppercase'>Zobacz co piszą o nas ludzie którzy kupili nasz plan treningowy!</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {testimonials.map((t, i) => (
          <div key={i} className="p-5 flex flex-col gap-4 bg-gray-500/30 backdrop-blur-3xl">
            <div className="flex items-center gap-2">
              {/* Stars */}
              {[...Array(t.rating)].map((_, idx) => (
                <svg key={idx} width="18" height="18" viewBox="0 0 20 20" fill="#facc15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                </svg>
              ))}
            </div>
            <p className="opacity-75 italic">“{t.text}”</p>
            <div className="text-sm text-gray-500 font-semibold mt-2">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials