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

export async function loader({ params, request }: DataFunctionArgs) {
  try {
    const order = await getOrderByCode(params.orderCode!, { request });
    return {
      order,
      error: false,
    };
  } catch (ex) {
    return {
      order: null,
      error: true,
    };
  }
}

export default function CheckoutConfirmation() {
  const { order, error } = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();
  const [retries, setRetries] = useState(1);
  const { t } = useTranslation();

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
    if (orderErrored) {
      retry();
    }
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

  // Confetti effect with circles, squares, and triangles from top (below navbar)
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
      const navbarHeight = 64; // Assuming a 64px navbar height
      const confetti = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * canvas.width,
        y: navbarHeight - 10, // Start just below navbar
        size: Math.random() * 8 + 4,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 6, // Slight horizontal variation
        velocityY: Math.random() * 4 + 2, // Move downward
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

          // Reset confetti that moves out of bounds
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

  if (orderNotFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-pulse">
            {t('checkout.orderNotFound')}
          </h2>
          <p className="text-gray-600 animate-slide-up">
            Please check your order details and try again.
          </p>
        </div>
      </div>
    );
  }

  if (orderErrored && retriesExhausted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
          <div className="flex items-center justify-center space-x-3 mb-4 animate-spin-slow">
            <XCircleIcon className="text-red-600 w-9 h-9" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('checkout.orderErrorTitle')}
            </h2>
          </div>
          <p className="text-gray-600 animate-slide-up">
            {t('checkout.orderErrorMessage')}
          </p>
        </div>
      </div>
    );
  }

  if (orderErrored) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-pulse">
            {t('checkout.orderProcessing')}
          </h2>
          <p className="text-gray-600 animate-slide-up">
            We're processing your order, please wait...
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}> </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 animate-bounce-in">
          <div className="flex items-center space-x-4 mb-6 animate-slide-right">
            <CheckCircleIcon className="text-blue-600 w-10 h-10 animate-bounce-once" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('order.summary')}
            </h2>
          </div>
          <p className="text-gray-600 mb-8 text-base sm:text-lg animate-slide-up">
            {t('checkout.orderSuccessMessage')}{' '}
            <span className="font-semibold text-blue-600">{order!.code}</span>
          </p>

          {order!.active && (
            <div className="bg-blue-50 rounded-xl p-5 mb-8 flex items-start space-x-3 animate-pulse-slow transition-all duration-300 hover:bg-blue-100">
              <InformationCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 animate-spin-slow" />
              <p className="text-sm text-blue-800">{t('checkout.paymentMessage')}</p>
            </div>
          )}

          <div className="space-y-8">
            <div className="border-t border-gray-200 pt-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 animate-bounce-once">
                Order Items
              </h3>
              <CartContents
                orderLines={order!.lines}
                currencyCode={order!.currencyCode}
                editable={false}
              />
            </div>

            <div className="border-t border-gray-200 pt-6 animate-slide-up">
              <CartTotals order={order as OrderDetailFragment} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-right {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-in { animation: bounce-in 0.7s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-slide-right { animation: slide-right 0.6s ease-out; }
        .animate-bounce-once { animation: bounce-once 0.5s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
      `}</style>
    </div>
  );
}