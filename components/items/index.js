import Image from "next/image"
import Link from "next/link"


export default function Items({properties}) {
    return (
      <section className="grid md:grid-cols-2 gap-4 mb-5">
        { properties.map(property =>
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="h-full md:flex">
              <div className=" md:flex-shrink-0">
                <Image
                  className="h-full w-full object-cover md:w-48"
                  src={property.coverImage}
                  alt={property.title}
                  width="200"
                  height="230"
                />
              </div> 
              <div className="p-8">
                <div
                  className="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                  {property.type}
                </div>
                <Link href={`/apartments/${property.slug}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    {property.title}
                </Link>
                <p
                  className="mt-2 text-gray-500">
                  {property.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }