import useScrollToAnchor from "../hooks/useScrollToAnchor";
import MeetNathan from "../sections/about/MeetNathan";
import MeetFaculty from "../sections/about/MeetFaculty";
import OurTechnology from "../sections/about/OurTechnology";
import PatientExperience from "../sections/about/PatientExperience";

export default function AboutPage() {
  useScrollToAnchor();

  return (
    <>
      <header className="px-4 pb-4 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-700">
            ABOUT
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-5xl">
            Care you understand, from people you&rsquo;ve met.
          </h1>
        </div>
      </header>

      <MeetNathan />
      <MeetFaculty />
      <OurTechnology />
      <PatientExperience />
    </>
  );
}
