import { DataFunctionArgs } from '@remix-run/server-runtime';
import { getOrderByCode } from '~/providers/orders/order';
import { useLoaderData } from '@remix-run/react';
import { CartContents } from '~/components/cart/CartContents';
import { CartTotals } from '~/components/cart/CartTotals';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useRevalidator } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { OrderDetailFragment } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';

import { Header } from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import { useActiveOrder } from '~/utils/use-active-order';
import { getCollections } from '~/providers/collections/collections';

export async function loader({ params, request }: DataFunctionArgs) {
  const collections = await getCollections(request);
  try {
    const order = await getOrderByCode(params.orderCode!, { request });
    return {
      order,
      error: false,
      collections,
    };
  } catch (ex) {
    return {
      order: null,
      error: true,
      collections,
    };
  }
}

export default function CheckoutConfirmation() {
  const { order, error, collections } = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();
  const [retries, setRetries] = useState(1);
  const [showAllItems, setShowAllItems] = useState(false);
  const { t } = useTranslation();
  const { activeOrder } = useActiveOrder();

  const orderNotFound = !order && !error;
  const orderErrored = !order && error;
  const maxRetries = 5;
  const retriesExhausted = retries >= maxRetries;
  const retryTimeout = 2500;

  const retry = () => {
    if (!window) return;
    setRetries(retries + 1);
    window.setTimeout(() => {
      if (retries > maxRetries) return;
      revalidator.revalidate();
    }, retryTimeout);
  };

  useEffect(() => {
    if (orderErrored) retry();
  }, [order]);

  useEffect(() => {
    if (
      revalidator.state === 'idle' &&
      orderErrored &&
      retries <= maxRetries &&
      retries > 1
    ) {
      retry();
    }
  }, [revalidator.state]);

  // 🎉 Confetti effect (same as your version, preserved)
  useEffect(() => {
    if (order && !orderErrored && !orderNotFound) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const shapes = ['circle', 'square', 'triangle'];
      const navbarHeight = 64;
      const confetti = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * canvas.width,
        y: navbarHeight - 10,
        size: Math.random() * 8 + 4,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 6,
        velocityY: Math.random() * 4 + 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
      }));

      let animationFrame: number;
      const drawConfetti = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
          c.x += c.velocityX;
          c.y += c.velocityY;
          c.rotation += c.rotationSpeed;

          if (c.y > canvas.height || c.x > canvas.width + 20 || c.x < -20) {
            confetti[i] = {
              ...c,
              x: Math.random() * canvas.width,
              y: navbarHeight - 10,
              rotation: Math.random() * 360,
            };
          }

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;

          if (c.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (c.shape === 'square') {
            ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
          } else if (c.shape === 'triangle') {
            ctx.beginPath();
            ctx.moveTo(0, -c.size / 2);
            ctx.lineTo(c.size / 2, c.size / 2);
            ctx.lineTo(-c.size / 2, c.size / 2);
            ctx.closePath();
            ctx.fill();
          }

          ctx.restore();
        });

        animationFrame = requestAnimationFrame(drawConfetti);
      };

      drawConfetti();
      setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        document.body.removeChild(canvas);
      }, 5000);

      return () => {
        cancelAnimationFrame(animationFrame);
        if (document.body.contains(canvas)) {
          document.body.removeChild(canvas);
        }
      };
    }
  }, [order, orderErrored, orderNotFound]);

  if (orderNotFound || (orderErrored && retriesExhausted)) {
    return (
      <>
        <Header
          onCartIconClick={() => {}}
          cartQuantity={activeOrder?.totalQuantity ?? 0}
          isSignedIn={true}
          collections={collections}
        />
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t(
                orderNotFound
                  ? 'checkout.orderNotFound'
                  : 'checkout.orderErrorTitle',
              )}
            </h2>
            <p className="text-gray-600">
              {t(
                orderNotFound
                  ? 'checkout.orderNotFoundMessage'
                  : 'checkout.orderErrorMessage',
              )}
            </p>
          </div>
        </div>
        <Footer collections={collections} />
      </>
    );
  }

  const displayedLines = showAllItems ? order!.lines : order!.lines.slice(0, 3);

  return (

    <>
      <Header
        onCartIconClick={() => {}}
        cartQuantity={activeOrder?.totalQuantity ?? 0}
        isSignedIn={true}
        collections={collections}
      />


      <main className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto shadow-lg">
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10">
            <div className="flex items-center space-x-4 mb-6">
              <CheckCircleIcon className="text-blue-600 w-10 h-10" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t('order.summary')}
              </h2>
            </div>

            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              {t('checkout.orderSuccessMessage')}{' '}
              <span className="font-semibold text-blue-600">{order!.code}</span>
            </p>

            {order!.active && (
              <div className="bg-blue-50 rounded-xl p-5 mb-8 flex items-start space-x-3">
                <InformationCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {t('checkout.paymentMessage')}
                </p>
              </div>
            )}

            <div className="space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Order Items
                </h3>
                <CartContents
                  orderLines={displayedLines}
                  currencyCode={order!.currencyCode}
                  editable={false}
                />

                {order!.lines.length > 3 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowAllItems(!showAllItems)}
                      className="text-blue-600 hover:underline text-sm font-medium flex items-center justify-center mx-auto"
                      aria-label={showAllItems ? 'Show Less' : 'View More'}
                    >
                      {showAllItems ? (
                        <img
                          src="/show-more.png"
                          alt="Show less"
                          className="w-6 h-6 transform rotate-180"
                          style={{ transform: 'rotate(180deg)' }}
                        />
                      ) : (
                        <img
                          src="/show-more.png"
                          alt={`View More (${order!.lines.length - 3} more)`}
                          className="w-6 h-6"
                        />
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <CartTotals order={order as OrderDetailFragment} />
                <div className="mt-8 text-center">
                  <a
                    href="/home"
                    className="inline-block bg-black text-white px-6 py-2 border rounded-full shadow hover:bg-white hover:border-black hover:text-black transition-colors duration-200 text-sm sm:text-base"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer collections={collections} />
    </>
  );
}
