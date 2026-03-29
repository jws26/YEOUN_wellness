import { useLanguage } from "../context/LanguageContext";

const gymImg =
  "https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ3ltJTIwZml0bmVzcyUyMGNlbnRlciUyMGludGVyaW9yfGVufDF8fHx8MTc3NDc2NTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const groupHikingImg =
  "https://images.unsplash.com/photo-1603909070343-649482999bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYSUyMG1vdW50YWluJTIwaGlraW5nJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc0NzY1MzMwfDA&ixlib=rb-4.1.0&q=80&w=600";
const trainerImg =
  "https://images.unsplash.com/photo-1564282350350-a8355817fd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGF0aGxldGV8ZW58MXx8fHwxNzc0NzY1MzM0fDA&ixlib=rb-4.1.0&q=80&w=600";

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section className="bg-[#0d0d0d] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Large image left */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-auto min-h-[400px] group">
            <img
              src={gymImg}
              alt="Korea premium gym"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="text-amber-400 text-xs tracking-widest mb-1"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {e.gym.tag}
              </p>
              <p className="text-white text-lg" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {e.gym.title}
              </p>
              <p
                className="text-white/60 text-sm mt-1"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {e.gym.desc}
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden h-48 group">
              <img
                src={groupHikingImg}
                alt="Group hiking Korea"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-amber-400 text-xs"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {e.hiking.tag}
                </p>
                <p className="text-white text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {e.hiking.title}
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-48 group">
              <img
                src={trainerImg}
                alt="Personal trainer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-amber-400 text-xs"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {e.trainer.tag}
                </p>
                <p className="text-white text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {e.trainer.title}
                </p>
              </div>
            </div>

            {/* Quote block */}
            <div className="border border-amber-400/30 rounded-2xl p-5 bg-amber-400/5">
              <p
                className="text-white/70 text-sm leading-relaxed italic"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {e.quote}
              </p>
              <p
                className="text-amber-400 text-xs mt-3"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {e.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
