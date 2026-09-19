export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
          Hi, I&rsquo;m your student dentist.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-teal-800/80">
          <p>
            Write a short, personal introduction here — where you are in your
            training, what drew you to dentistry, and how you like to work with
            patients. A few honest sentences build more trust than a long list
            of claims.
          </p>
          <p>
            Every treatment I provide is reviewed and supervised by licensed
            faculty at my school&rsquo;s clinic. Appointments tend to run longer
            than a private practice visit, which means more time to ask
            questions and understand what is happening.
          </p>
          <p className="text-sm text-teal-700">
            Treatment availability depends on clinical assessment and school
            guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
