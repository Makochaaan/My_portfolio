import Image from "next/image";
import NextLink from "next/link";

export type Proof = { label: string; href?: string };

export type Skill = {
  name: string;
  icon?: string;
  tools?: string[];
  body: string;
  proofs?: Proof[];
};

export type Section = {
  title: string;
  lead: string;
  skills: Skill[];
  otherTools?: { label: string; tools: string[] };
};

export type SkillPageContent = {
  sections: Section[];
  certs: { title: string; items: { date: string; name: string }[] };
  languages: { title: string; items: { name: string; flag: string; level: string; body: string }[] };
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-3">{children}</h2>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-700 border border-gray-300">{children}</span>
);

export default function SkillContent({ content }: { content: SkillPageContent }) {
  return (
    <div className="mt-20 w-full max-w-5xl">
      {content.sections.map((section) => (
        <section key={section.title} className="mb-16">
          <SectionTitle>{section.title}</SectionTitle>
          <p className="mb-6 text-sm md:text-base text-gray-700">{section.lead}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {section.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col rounded-lg bg-gray-200 p-5">
                <div className="flex items-center gap-3 mb-2">
                  {skill.icon && <Image src={skill.icon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />}
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
                {skill.tools && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {skill.tools.map((t) => <Chip key={t}>{t}</Chip>)}
                  </div>
                )}
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">{skill.body}</p>
                {skill.proofs && (
                  <ul className="mt-3 pt-3 border-t border-gray-300 space-y-1 text-sm">
                    {skill.proofs.map((p) => (
                      <li key={p.label} className="flex gap-2">
                        <span className="text-blue-700">▸</span>
                        {p.href ? (
                          <NextLink
                            href={p.href}
                            target={p.href.startsWith("http") ? "_blank" : undefined}
                            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-blue-700 hover:underline"
                          >
                            {p.label}
                          </NextLink>
                        ) : (
                          <span>{p.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {section.otherTools && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-sm">
              <span className="font-semibold text-gray-600 mr-1">{section.otherTools.label}</span>
              {section.otherTools.tools.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
          )}
        </section>
      ))}

      <section className="mb-16">
        <SectionTitle>{content.certs.title}</SectionTitle>
        <ul className="divide-y divide-gray-300">
          {content.certs.items.map((c) => (
            <li key={c.name} className="flex gap-4 py-3">
              <time className="font-mono text-sm text-gray-500 w-20 shrink-0">{c.date}</time>
              <span className="font-semibold">{c.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <SectionTitle>{content.languages.title}</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.languages.items.map((l) => (
            <div key={l.name} className="rounded-lg bg-gray-200 p-5">
              <div className="flex items-center gap-3 mb-2">
                <Image src={l.flag} alt="" width={40} height={27} className="h-7 w-10 rounded-sm object-cover" />
                <h3 className="font-bold text-lg">{l.name}</h3>
              </div>
              <p className="mb-2 text-xs font-semibold text-blue-800">{l.level}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
