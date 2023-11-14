import { BsFillPersonFill } from 'react-icons/bs';
import DropdownItem from '../dropdown-item';

/* Props for patient info section. */
const patientInfoIcon = <BsFillPersonFill size={30} />;
const patientInfoContent = <p>Some placeholder content for now</p>;

export default function PatientDashboard() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="py-4 text-2xl text-sky-600 md:py-8 md:text-4xl">
        Patient Details
      </h1>
      <DropdownItem
        text="Your Info"
        icon={patientInfoIcon}
        hidden={patientInfoContent}
      />
    </main>
  );
}
