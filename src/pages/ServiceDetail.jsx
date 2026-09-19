import { useParams, Navigate } from "react-router-dom";
import { SERVICES_CONTENT, getService } from "../data/services";
import ServiceHero from "../components/services/ServiceHero.jsx";
import ServiceInvolves from "../components/services/ServiceInvolves.jsx";
import ServiceTips from "../components/services/ServiceTips.jsx";
import ServiceSigns from "../components/services/ServiceSigns.jsx";
import ServiceExpect from "../components/services/ServiceExpect.jsx";
import ServiceFooterNav from "../components/services/ServiceFooterNav.jsx";
import ServiceFAQ from "../components/services/ServiceFAQ.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/services" replace />;

  const index = SERVICES_CONTENT.findIndex((s) => s.slug === slug);
  const prev = SERVICES_CONTENT[index - 1];
  const next = SERVICES_CONTENT[index + 1];

  return (
    <>
      <ServiceHero title={service.title} intro={service.intro} />
      <ServiceInvolves points={service.points} />
      <ServiceTips tips={service.tips} />
      <ServiceSigns signs={service.signs} />
      <ServiceExpect visit={service.visit} />
      {service.faq && (
        <ServiceFAQ items={service.faq} heading={service.faqHeading} />
      )}
      <ServiceFooterNav title={service.title} prev={prev} next={next} />
    </>
  );
}
