function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">{label}</div>
      <div className="mt-2 text-lg font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function TeamCard({ name, role, bio }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex aspect-[4/3.9] items-center justify-center overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_42%),linear-gradient(180deg,#ffffff,#f8fafc)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-2xl font-semibold text-sky-700">
          {initials}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(248,250,252,0.15),transparent_45%)]" />
      </div>
      <div className="p-6">
        <div className="text-xl font-semibold text-slate-900">{name}</div>
        <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">{role}</div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{bio}</p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      {body ? <p className="mt-6 text-base leading-8 text-slate-600">{body}</p> : null}
    </div>
  );
}

export default function IndelWebsite() {
  const sections = [
    { id: 'science', label: 'Science' },
    { id: 'platform', label: 'Platform' },
    { id: 'pipeline', label: 'Pipeline' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const coreTeam = [
    {
      name: 'Peyton Jackson',
      role: 'CEO & Co-Founder',
      bio: 'Leads company strategy, fundraising, and execution across Indel’s scientific and business roadmap.',
    },
    {
      name: 'Jared Wieland',
      role: 'CSO & Co-Founder',
      bio: 'Leads scientific strategy and platform development across the company’s oncology programs.',
    },
    {
      name: 'Jared Barrott, PhD',
      role: 'Scientific Advisor',
      bio: 'Provides scientific guidance across translational strategy and program development.',
    },
  ];

  const advisors = [
    {
      name: 'Greg Kunst',
      role: 'Advisor',
      bio: 'Advises on company building, capital formation, and commercialization strategy.',
    },
    {
      name: 'Laurens Bockheart',
      role: 'Advisor',
      bio: 'Advises on growth strategy, investor relationships, and long-term company development.',
    },
    {
      name: 'Jon Sparks, PhD, JD',
      role: 'IP Advisor',
      bio: 'Supports intellectual property strategy and protection around the company’s platform and programs.',
    },
  ];

  const employees = [
    {
      name: 'Will Penrod',
      role: 'Employee',
      bio: 'Supports company operations and execution across Indel’s growing platform efforts.',
    },
    {
      name: 'Spencer Nadauld',
      role: 'Research Assistant',
      bio: 'Supports execution of core research activities and preclinical development efforts.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 100 100" className="h-7 w-7 text-sky-600" fill="none" stroke="currentColor" strokeWidth="5">
                <path d="M24 18c18 0 18 64 36 64s18-64 36-64" />
                <path d="M24 82c18 0 18-64 36-64s18 64 36 64" />
                <path d="M37 31h25" />
                <path d="M41 50h19" />
                <path d="M37 69h25" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide text-slate-900">Indel Bioinnovations</div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-sky-600">Next-generation gene therapy</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-sm text-slate-600 transition hover:text-slate-900">
                {section.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow">
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Biotech platform company
              </div>
              <h1 className="mt-7 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Reintroducing tumor suppression with a more engineered gene therapy platform
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Indel Bioinnovations is developing a non-viral oncology platform designed to restore functional tumor suppressor activity in solid tumors, beginning with triple-negative breast cancer.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#science" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]">
                  Explore the science
                </a>
                <a href="#team" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  Meet the team
                </a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <Stat label="Lead indication" value="Triple-negative breast cancer" />
                <Stat label="Core modality" value="LNP + transposon design" />
                <Stat label="Stage" value="Preclinical" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)] p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Platform view</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-900">From delivery to durable tumor suppressor restoration</div>
                    </div>
                    <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm md:flex">
                      <svg viewBox="0 0 100 100" className="h-9 w-9 text-sky-600" fill="none" stroke="currentColor" strokeWidth="5">
                        <path d="M24 18c18 0 18 64 36 64s18-64 36-64" />
                        <path d="M24 82c18 0 18-64 36-64s18 64 36 64" />
                        <path d="M37 31h25" />
                        <path d="M41 50h19" />
                        <path d="M37 69h25" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-10 grid gap-4">
                    {[
                      ['01', 'LNP-enabled delivery architecture'],
                      ['02', 'Engineered transposon-based genomic payload strategy'],
                      ['03', 'Restoration of intracellular tumor suppressor signaling'],
                      ['04', 'Platform extension across additional oncology settings'],
                    ].map(([step, text]) => (
                      <div key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-sky-50 text-sm font-semibold text-sky-700">{step}</div>
                        <div className="text-sm leading-6 text-slate-700">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="science" className="border-t border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeader
              eyebrow="Science"
              title="A biotech-native story built around tumor suppressor restoration"
              body="Many aggressive solid tumors are shaped by loss of key tumor suppressor pathways. Indel is building a therapeutic strategy around reintroducing TP53 activity with a delivery system intended to combine the versatility of lipid nanoparticles with the durable potential of transposon-based engineering."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                ['Non-viral design', 'Built around non-viral delivery principles that may support streamlined manufacturing, modular payload design, and future adaptability across indications.'],
                ['Multi-copy delivery potential', 'The platform is being developed to enable introduction of multiple therapeutic copies, supporting more robust reconstitution of tumor suppressor signaling.'],
                ['Solid tumor focus', 'The first program targets triple-negative breast cancer, with longer-term potential across additional tumor suppressor-deficient cancers.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-sky-500" />
                    <div className="text-lg font-semibold text-slate-900">{title}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <SectionHeader
                  eyebrow="Platform"
                  title="Designed for modularity, scalability, and platform expansion"
                  body="Indel’s platform strategy sits at the intersection of delivery innovation and therapeutic gene restoration. The goal is to build a system that supports flexible cargo design while keeping translational relevance and manufacturing practicality in view from the start."
                />
              </div>
              <div className="grid gap-4">
                {[
                  'Enables a platform narrative instead of a single-asset story',
                  'Supports the need for repeatable, manufacturable oncology delivery systems',
                  'Creates room for future multi-gene and multi-indication expansion',
                  'Positions Indel at a differentiated interface between delivery and durable restoration biology',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <div className="text-sm leading-7 text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pipeline" className="border-t border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeader eyebrow="Pipeline" title="A platform company beginning with one urgent oncology problem" />
            <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:grid-cols-[1.15fr_1fr_0.75fr]">
                <div>Program</div>
                <div>Focus</div>
                <div>Stage</div>
              </div>
              <div className="grid grid-cols-1 px-6 py-6 text-sm text-slate-700 sm:grid-cols-[1.15fr_1fr_0.75fr]">
                <div className="font-medium text-slate-900">IND-001</div>
                <div>TP53 restoration in triple-negative breast cancer</div>
                <div>Preclinical</div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeader
              eyebrow="Team"
              title="Leadership, advisors, and operators shaping the company"
              body="Built by founders with scientific conviction and startup urgency, supported by advisors spanning translational science, intellectual property, company building, and capital strategy."
            />

            <div className="mt-12">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Core Team</div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {coreTeam.map((person) => (
                  <TeamCard key={person.name} {...person} />
                ))}
              </div>
            </div>

            <div className="mt-14">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Advisors</div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {advisors.map((person) => (
                  <TeamCard key={person.name} {...person} />
                ))}
              </div>
            </div>

            <div className="mt-14">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Employees</div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {employees.map((person) => (
                  <TeamCard key={person.name} {...person} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Contact"
                  title="Partner with Indel Bioinnovations"
                  body="Indel is interested in conversations with investors, scientific collaborators, and strategic partners who share a conviction that restoring tumor suppression can open new paths in oncology."
                />
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="text-lg font-semibold text-slate-900">Get in touch</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For partnership, investor, or scientific inquiries, reach out to the Indel team.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-700">
                  <div><span className="text-slate-500">Company:</span> Indel Bioinnovations</div>
                  <div><span className="text-slate-500">Email:</span> contact@indelbioinnovations.com</div>
                  <div><span className="text-slate-500">Phone:</span> 385-441-6287</div>
                  <div><span className="text-slate-500">Focus:</span> Oncology gene therapy, TP53 restoration, non-viral delivery</div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:contact@indelbioinnovations.com" className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                    Email the team
                  </a>
                  <a href="tel:3854416287" className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                    Call Indel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Indel Bioinnovations. All rights reserved.</div>
          <div>Built around next-generation gene therapy for high-need oncology indications.</div>
        </div>
      </footer>
    </div>
  );
}
