
export default function Items() {
    return (
      <section className="grid grid-cols-2 gap-4 mb-5">
        { Array.from({length: 4}).map((_, i) =>
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={`assets/images/apartment${i}.jpg`} alt="Apartment building" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">Case study</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding a property for you.</a>
                <p className="mt-2 text-gray-500">Getting a new property is a lot of hard work. Here, we provide are five ideas you can use to find your property.</p>
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }