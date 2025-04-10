import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export default function AddAddressCard() {
  const { t } = useTranslation();

  return (
    <>
      <Link
        preventScrollReset
        className="border border-green-500 p-5 min-h-[100px] h-full w-full flex flex-col justify-between mt-3"
        to="/account/addresses/new"
      >
        <span className="text-base-semi">{t('address.new')}</span>
        <PlusIcon className="w-6 h-6"></PlusIcon>
      </Link>
    </>
  );
}
