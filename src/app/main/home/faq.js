import { faqData } from '@/util/data';
import CollapsibleMenu from '@/components/collapsible-menu';
import Button from '@/components/button';

/* The Frequently Asked Questions section of the homepage. */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto flex max-w-7xl flex-col justify-between px-4 py-16 xs:px-9 sm:flex-row lg:py-28"
    >
      <div className="mb-5 flex w-full shrink-0 flex-row items-center justify-between sm:mb-0 sm:w-44 sm:flex-col sm:items-start sm:justify-start md:w-52">
        <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl">
          FAQs
        </h2>
        <div className="flex flex-col">
          <h3 className="mb-2 text-lg sm:mb-6 sm:mt-16 md:text-xl lg:text-2xl">
            Other Questions?
          </h3>
          <Button text="Contact Us" link="/contact" haloShade="dark" />
        </div>
      </div>
      <CollapsibleMenu data={faqData} />
    </section>
  );
}
