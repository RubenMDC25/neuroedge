import Image from "next/image"
import Link from "next/link"

export function DrCarlsonSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="grid lg:grid-cols-[400px_1fr] gap-12 max-w-[1200px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] h-fit">
          <Image
            src="/images/picture-20of-20ana-20and-20me-20website-20marty.jpg"
            alt="Dr. Marty Carlson and Ana"
            width={400}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#235789] mb-6">About Dr. Carlson</h2>

          <p className="text-[#475569] mb-5 leading-relaxed">
            Dr. Carlson has been in practice since 2001 after graduating from Life West Chiropractic College in Northern
            California. He has been involved with Chiropractic Neurology for several years, focusing on the intricate
            relationship between the spine, nervous system, and overall health.
          </p>

          <p className="text-[#475569] mb-5 leading-relaxed">
            Dr. Carlson is married to his wonderful wife Ana and has three boys: Caiden, Cameron, and Cooper. Every
            member of his family enjoys great health due to a healthy lifestyle and regular chiropractic adjustments.
          </p>

          <p className="text-[#475569] mb-5 leading-relaxed">
            My hobbies include pickleball, camping, and spending time with my family. I am pleased and honored to treat
            every person that walks through my door. I love my job and look forward to serving humanity for many years
            to come. Thank you for being part of the NeuroEdge family.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#235789] mt-8 mb-4">Education & Credentials</h3>
          <ul className="text-[#475569] pl-6 mb-5 list-disc space-y-3">
            <li>Doctor of Chiropractic, Life West Chiropractic College, 2001</li>
            <li>Advanced Training in Chiropractic Neurology</li>
            <li>Certified in SoftWave Tissue Regeneration Therapy</li>
            <li>Class IV Laser Therapy Certification</li>
            <li>Spinal Decompression Specialist</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-[#235789] mt-8 mb-4">Philosophy of Care</h3>
          <p className="text-[#475569] mb-5 leading-relaxed">
            At NeuroEdge Chiropractic, our approach combines neurological assessment with structural correction to treat
            the root cause—not just the symptoms. We believe in empowering patients with knowledge about their condition
            and providing personalized treatment plans that support long-term wellness.
          </p>

          <p className="text-[#475569] mb-5 leading-relaxed">
            Our number one goal is to provide you with a level of service and commitment to your health that is
            unparalleled. Every patient receives individualized attention and comprehensive care designed to restore
            function, reduce pain, and improve quality of life.
          </p>

          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-[#235789] text-white shadow-md hover:bg-[#1a4166] transition-all hover:-translate-y-0.5"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
