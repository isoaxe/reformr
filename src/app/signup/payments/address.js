import { AddressInput } from '@/components/quiz/address-input';

export default function Address({ address, setAddress }) {
  return (
    <div className="my-8 w-full">
      <AddressInput
        label="Address 1"
        text={address?.address1 || ''}
        setText={(input) => setAddress({ ...address, address1: input })}
      />
      <AddressInput
        label="Address 2"
        text={address?.address2 || ''}
        setText={(input) => setAddress({ ...address, address2: input })}
      />
      <AddressInput
        label="Address 3"
        text={address?.address3 || ''}
        setText={(input) => setAddress({ ...address, address3: input })}
      />
      <AddressInput
        label="Zip Code"
        text={address?.postcode || ''}
        setText={(input) => setAddress({ ...address, postcode: input })}
      />
    </div>
  );
}
