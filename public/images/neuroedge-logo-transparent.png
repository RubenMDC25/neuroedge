import Image from "next/image"

const teamMembers = [
  {
    name: "Rebecca Ford",
    role: "Office Manager",
    image: "/images/1.jpg",
    bio: "Rebecca grew up in Orange County and moved out here 25 years ago. She loves staying active and spending time outdoors. She is happiest when she is with her family, especially when she is cheering on her daughter at her soccer games. She has been working as a Chiropractic Assistant for twenty nine years and she has been a part of the NeuroEdge Chiropractic team for the past twenty years. She is our office manager, and she is dedicated to helping our patients with any questions or concerns they may have. She takes pride in creating a welcoming, supportive environment for everyone she meets. Rebecca is here to help you achieve your health goals.",
  },
  {
    name: "Arwen Frison",
    role: "Chiropractic Assistant",
    image: "/images/2.jpg",
    bio: "I am a dedicated healthcare professional with 22 years of experience in the medical field. I take pride in providing compassionate, high-quality care and contributing to the wellbeing of the patients and communities I serve. I am from Canada, and my values are shaped by a strong sense of integrity, respect, and commitment. I am deeply devoted to my family, who remain at the center of my motivation and purpose. Outside of work, I am an enthusiastic Edmonton Oilers fan and enjoy watching their games whenever I can. I also love to travel, especially to tropical destinations where I can recharge, explore new cultures, and appreciate time away from my busy schedule.",
  },
]

export function TeamSection() {
  return (
    <section className="pt-5 pb-20 px-6 bg-white" aria-labelledby="team-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6">
          <h2 id="team-heading" className="text-3xl md:text-4xl font-extrabold text-[#235789]">
            Meet Our Team
          </h2>
          <p className="sr-only">Our dedicated staff supporting patient care at NeuroEdge Chiropractic.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-md flex flex-col gap-5"
            >
              <div className="w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden bg-[#e5e7eb]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} and family`}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] m-0">{member.name}</h3>
                <div className="text-[#235789] font-bold text-sm mt-1 mb-3">{member.role}</div>
                <p className="text-[#475569] text-sm leading-relaxed m-0">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
