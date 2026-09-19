export default function MeetFaculty() {
  return (
    <section id="faculty" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
          Meet Faculty
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-teal-800/80">
          Describe the supervision model here — that licensed faculty review
          your work, and how a patient can expect a supervising dentist to be
          involved in their visit.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-teal-900/5"
            >
              <div className="h-16 w-16 rounded-full bg-emerald-100" />
              <h3 className="mt-5 text-lg font-semibold text-teal-900">
                Faculty name
              </h3>
              <p className="mt-1 text-sm font-medium text-teal-700">
                Title, credentials
              </p>
              <p className="mt-4 leading-relaxed text-teal-800/75">
                A sentence or two about their role in the clinic.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-teal-700">
          Only list faculty who have agreed to appear here, with titles and
          credentials confirmed by your school.
        </p>
      </div>
    </section>
  );
}
