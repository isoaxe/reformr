import { AddressInput } from '@/components/quiz/address-input';

export default function Address({ address, setAddress }) {
  return (
    <div className="my-8 w-full">
      <AddressInput
        isFocused={true}
        label="Street*"
        text={address?.address1}
        setText={(input) => setAddress({ ...address, address1: input })}
      />
      <AddressInput
        label="Suburb"
        text={address?.address2}
        setText={(input) => setAddress({ ...address, address2: input })}
      />
      <AddressInput
        label="Town / City*"
        text={address?.address3}
        setText={(input) => setAddress({ ...address, address3: input })}
      />
      <AddressInput
        label="Post Code*"
        text={address?.postcode}
        setText={(input) => setAddress({ ...address, postcode: input })}
      />
    </div>
  );
}
