import FAQSection from "../FAQ/FAQSection";

export default function ServiceFAQ({
  items,
  heading = "Frequently Asked Questions",
}) {
  return <FAQSection heading={heading} items={items} />;
}
