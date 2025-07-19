import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { getActiveCustomer } from '~/providers/customer/customer';
import { Header } from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import { useActiveOrder } from '~/utils/use-active-order';
import { useState, useEffect } from 'react';
import Navbar from '~/components/landingPage/Navbar';

export async function loader({ request }: { request: Request }) {
  const collections = await getCollections(request, { take: 20 });
  const activeCustomer = await getActiveCustomer({ request });
  return json({ collections, activeCustomer });
}

export default function PrivacyAndPolicy() {
  const { collections, activeCustomer } = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(false);
  const { activeOrder, refresh } = useActiveOrder();
  const [isSignedIn, setIsSignedIn] = useState(
    !!activeCustomer?.activeCustomer?.id,
  );

  useEffect(() => {
    setIsSignedIn(!!activeCustomer?.activeCustomer?.id);
    refresh();
    // eslint-disable-next-line
  }, [activeCustomer]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {isSignedIn ? (
        <Header
          onCartIconClick={() => setOpen(!open)}
          cartQuantity={activeOrder?.totalQuantity ?? 0}
          isSignedIn={isSignedIn}
          collections={collections}
        />
      ) : (
        <Navbar />
      )}
      <main className="flex-1 px-4 py-12 sm:py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">
            Privacy and Policy
          </h1>
          <div className="space-y-5 text-gray-800 text-base leading-relaxed">
            <p>
              <strong>Return policy:</strong>
              <br />
              We will not accept return without order cancellation.
            </p>
            <p>
              <strong>Replacement policy:</strong>
              <br />
              Need to report to our customer care within 2 hours of delivery
              time if any product quality is not good.
            </p>
            <p>
              <strong>Cancellation policy:</strong>
              <br />
              We accept cancellation within 12:15AM only.
            </p>
            <p>
              <strong>Privacy & Refund policy:</strong>
              <br />A privacy policy is implemented because of how businesses
              handle digital data. It's used to communicate how companies take
              that information in all cases. Therefore, a privacy policy is a
              statement describing how a website collects, uses, and manages
              personal information. A privacy policy can appear in just about
              any medium as long as it's formally presented to the person or
              entity owning the personal or applicable information. Users can
              often request and receive a printed version of a privacy policy.
            </p>
            <p>
              <strong>Additional Refund Policy:</strong>
              <br />
              For prepaid orders, refunds will be processed within 2 to 4
              working days. If the ordered product was unavailable, the
              equivalent amount will be refunded the next day.
            </p>
          </div>
        </div>
      </main>
      <Footer collections={collections} />
    </div>
  );
}
