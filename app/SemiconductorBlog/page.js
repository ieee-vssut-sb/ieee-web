"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function SemiconductorsInIndiaPage() {
  const citations = [
    {
      title: "India's Semiconductor Sector Outlook 2025",
      url: "https://www.india-briefing.com/news/india-semiconductor-sector-outlook-2025-39067.html/",
    },
    {
      title:
        "The Semiconductor and AI Revolution that will Power the Future (PIB)",
      url: "https://www.pib.gov.in/FactsheetDetails.aspx?id=149242&NoteId=149242&ModuleId=16",
    },
    {
      title:
        "Academia's Contribution to Building India's Semiconductor Industry",
      url: "https://www.abhiyantha.com/blogs/from-classrooms-to-cleanrooms-academia-role-in-shaping-india-semiconductor-industry",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Paragraph section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                Semiconductors in India:{" "}
                <span className="text-white/90">
                  Catalyzing a Technology Revolution
                </span>
              </h1>
              <p className="mt-6 text-gray-300">
                Walk through India's leading engineering campuses or successful
                innovation centers, and you can feel the buzz driving the next
                generation of technology. In 2025, India's semiconductor ride is
                speeding up exponentially, fueled by visionary policy,
                tremendous investments, international collaborations, and the
                indefatigable fervor of tomorrow's researchers and engineers.
              </p>
            </motion.div>
            {/* Image section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/SemiconductorBlog1.jpg"
                  alt="Futuristic semiconductor chip concept art"
                  width={1365}
                  height={768}
                  className="w-full h-auto object-cover"
                  // priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Growth */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Paragraph section */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              The Pulse of Growth: From Vision to Fabrication
            </h2>
            <p className="text-gray-300">
              India's semiconductor industry, valued at approximately $38
              billion in 2023, is expected to grow to $45–50 billion by the end
              of 2025 and potentially cross over $100 billion by 2030. This
              swift rise is fueled by the India Semiconductor Mission (ISM) with
              an ambitious push of a ₹76,000 crore (~$9.2 billion) program
              towards domestic fabrication facilities, design hubs, and display
              units across the country.
            </p>
            <p className="text-gray-300">
              Recent government approvals are converting plans into reality.
              Indian and global giants' facilities are emerging in Gujarat,
              Assam, Uttar Pradesh, Odisha, and Andhra Pradesh.
            </p>
          </motion.div>
          {/* Image section */}
          <motion.div variants={fadeUp}>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <img
                src="/assets/SemiconductorBlog2.jpg"
                alt="Engineer holding a processor die with gloves"
                width={1000}
                height={563}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Investments */}
      <motion.section
        id="investments"
        className="max-w-7xl mx-auto px-4 py-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">
            Recent Milestones (Last 2 Years)
          </h3>
          <ul className="mt-4 space-y-3 list-disc pl-5 text-gray-300">
            <li>
              <em>Micron Technology (US):</em> ₹22,516 crore investment in
              Gujarat for a large ATMP plant.
            </li>
            <li>
              <em>Tata Electronics & Powerchip (Taiwan):</em> ₹91,000 crore
              factory in Dholera, producing ~50,000 wafers/month.
            </li>
            <li>
              <em>
                CG Power & Renesas (Japan), Stars Microelectronics (Thailand):
              </em>{" "}
              ₹7,600 crore fab making ~15 million chips per day.
            </li>
            <li>
              <em>Tata Semiconductor ATMP (Assam):</em> ₹27,000 crore facility
              for ~48 million chips a day.
            </li>
            <li>
              <em>HCL–Foxconn JV (Uttar Pradesh):</em> ₹3,700 crore fab to make
              ~20,000 wafers/month.
            </li>
            <li>
              <em>SicSem Pvt Ltd (Odisha):</em> ₹2,066 crore fab, making ~60,000
              wafers annually.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Ecosystem */}
      <motion.section
        id="ecosystem"
        className="max-w-7xl mx-auto px-4 py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Complete, Vertically Integrated Ecosystem",
              text: "India's mission spans chip-to-consumer—designing, producing, packaging, and testing chips for 5G, EVs, defense, and medical devices.",
            },
            {
              title: "Policy & Partnerships",
              text: "ISM and PLI programs catalyze the ecosystem with subsidies, grants, and fast-track approvals, while global collaborations like iCET deepen R&D ties.",
            },
            {
              title: "Academic & Talent Engine",
              text: "Specialized degrees, VLSI labs, and industry partnerships are producing IP, patents, and startup momentum across top Indian universities.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
              variants={fadeUp}
              transition={{ delay: idx * 0.2 }}
            >
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-3 text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Closing paragraph */}
      <motion.section
        className="max-w-7xl mx-auto px-4 pb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-300">
          India's strongest resource is its innovation and student community...
        </p>
      </motion.section>

      {/* Citations */}
      <motion.section
        className="max-w-7xl mx-auto px-4 pb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl md:text-2xl font-semibold">Citations</h3>
          <ol className="mt-4 space-y-2 list-decimal pl-5 text-gray-300">
            {citations.map((c) => (
              <li key={c.url}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-gray-400 py-6 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-md">© 2025 IEEE VSSUT Student Branch</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
