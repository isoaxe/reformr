import DropdownItem from '../dropdown-item';

export default function PatientDashboard() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="p-4 text-2xl text-sky-600 md:p-8 md:text-4xl">
        Patient Details
      </h1>
      <DropdownItem />
    </main>
  );
}
