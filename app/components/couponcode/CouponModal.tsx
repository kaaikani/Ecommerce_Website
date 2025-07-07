'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useFetcher } from '@remix-run/react';
import ToastNotification from '../ToastNotification';
import { Clock, Users, Tag, X, ChevronDown, ChevronUp } from 'lucide-react';

// TypeScript interfaces
interface Coupon {
  id: string;
  name: string;
  couponCode?: string | null;
  description: string;
  enabled: boolean;
  endsAt?: string | null;
  startsAt?: any;
  usageLimit?: number | null;
  conditions: Array<{
    code: string;
    args: Array<{ name: string; value: string }>;
  }>;
}

interface Order {
  __typename?: 'Order';
  id: string;
  code: string;
  active: boolean;
  createdAt?: any;
  state: string;
  currencyCode: string;
  totalQuantity: number;
  subTotal: number;
  subTotalWithTax: number;
  total?: number;
  totalWithTax: number;
  couponCodes?: string[] | null;
  lines?: Array<{
    id: string;
    productVariant: { id: string; name?: string };
    quantity: number;
  }> | null;
  payments?: Array<{ id: string }> | null;
}

interface CouponFetcherData {
  success?: boolean;
  message?: string;
  error?: string;
  orderTotal?: number;
  appliedCoupon?: string | null;
}

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  coupons: Coupon[];
  activeOrder: Order | null;
  appliedCoupon: string | null;
}

// Error message formatter
const formatErrorMessage = (
  errorMsg: string,
): { title: string; message: string } => {
  const minimumAmountMatch = errorMsg.match(
    /Add ₹([\d.]+) more to apply this coupon/,
  );

  if (minimumAmountMatch) {
    const extraAmount = minimumAmountMatch[1];
    return {
      title: 'Minimum Amount Required',
      message: `Add ₹${extraAmount} more to unlock this coupon 🛒`,
    };
  }

  if (
    /(usage limit|limit reached|Coupon usage limit reached|exceed|exceeded)/i.test(
      errorMsg,
    )
  ) {
    return {
      title: 'Usage Limit Reached',
      message: 'This coupon is no longer available. Try another one! 🎫',
    };
  }

  if (/expired|expir/i.test(errorMsg)) {
    return {
      title: 'Coupon Expired',
      message: 'This coupon has expired. Check out our other offers! ⏰',
    };
  }

  if (/invalid|not found/i.test(errorMsg)) {
    return {
      title: 'Invalid Coupon',
      message: 'This coupon code is not valid. Please check and try again! ❌',
    };
  }

  return {
    title: 'Oops!',
    message: errorMsg || 'Something went wrong. Please try again.',
  };
};

export function CouponModal({
  isOpen,
  onClose,
  coupons,
  activeOrder,
  appliedCoupon,
}: CouponModalProps) {
  const couponFetcher = useFetcher<CouponFetcherData>();

  // State management
  const [errorState, setErrorState] = useState<{
    show: boolean;
    title: string;
    message: string;
    key: number;
  }>({
    show: false,
    title: '',
    message: '',
    key: 0,
  });

  const [expandedCoupons, setExpandedCoupons] = useState<Set<string>>(
    new Set(),
  );
  const [hasProcessedResponse, setHasProcessedResponse] = useState(false);
  const lastProcessedDataRef = useRef<string>('');

  // Filter enabled coupons
  const enabledCoupons = coupons.filter(
    (coupon) => coupon.enabled && typeof coupon.couponCode === 'string',
  );

  const isCouponApplied = !!activeOrder?.couponCodes?.length;

  // Handle coupon fetcher response with improved error handling
  useEffect(() => {
    if (!couponFetcher.data || hasProcessedResponse) return;

    const currentDataStr = JSON.stringify(couponFetcher.data);

    // Avoid processing the same response twice
    if (currentDataStr === lastProcessedDataRef.current) return;

    lastProcessedDataRef.current = currentDataStr;

    if (couponFetcher.data.error) {
      const { title, message } = formatErrorMessage(couponFetcher.data.error);

      setErrorState((prev) => ({
        show: true,
        title,
        message,
        key: prev.key + 1,
      }));
    } else if (couponFetcher.data.success) {
      // Close modal on success
      onClose();
    }

    setHasProcessedResponse(true);
  }, [couponFetcher.data, hasProcessedResponse, onClose]);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setErrorState((prev) => ({ ...prev, show: false }));
      setHasProcessedResponse(false);
      lastProcessedDataRef.current = '';
    }
  }, [isOpen]);

  // Reset processed flag when fetcher becomes idle
  useEffect(() => {
    if (couponFetcher.state === 'idle' && hasProcessedResponse) {
      const timer = setTimeout(() => setHasProcessedResponse(false), 100);
      return () => clearTimeout(timer);
    }
  }, [couponFetcher.state, hasProcessedResponse]);

  // Handlers
  const closeErrorToast = useCallback(() => {
    setErrorState((prev) => ({ ...prev, show: false }));
  }, []);

  const toggleCouponExpansion = useCallback((couponId: string) => {
    setExpandedCoupons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(couponId)) {
        newSet.delete(couponId);
      } else {
        newSet.add(couponId);
      }
      return newSet;
    });
  }, []);

  const getCouponIcon = (index: number) => {
    const icons = ['🎯', '💎', '🔥', '⚡', '🎁', '💰'];
    return icons[index % icons.length];
  };

  // Extract product variant names for a coupon
  const getVariantNames = (coupon: Coupon): string[] => {
    const variantNames: string[] = [];

    for (const condition of coupon.conditions) {
      if (condition.code === 'productVariantIds') {
        for (const arg of condition.args) {
          if (arg.name === 'productVariantIds') {
            try {
              const variantIds = JSON.parse(arg.value);
              const cartItems = activeOrder?.lines ?? [];

              const idsToCheck = Array.isArray(variantIds)
                ? variantIds
                : [arg.value];

              for (const variantId of idsToCheck) {
                const matchingItem = cartItems.find(
                  (item) => item.productVariant.id === variantId.toString(),
                );
                if (matchingItem?.productVariant.name) {
                  variantNames.push(matchingItem.productVariant.name);
                }
              }
            } catch {
              const cartItems = activeOrder?.lines ?? [];
              const matchingItem = cartItems.find(
                (item) => item.productVariant.id === arg.value,
              );
              if (matchingItem?.productVariant.name) {
                variantNames.push(matchingItem.productVariant.name);
              }
            }
          }
        }
      }
    }

    return variantNames;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-2xl font-bold text-gray-900">Apply Coupons</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
            {enabledCoupons.length > 0 ? (
              <div className="space-y-4">
                {enabledCoupons.map((coupon, index) => {
                  const isApplied =
                    appliedCoupon === coupon.couponCode &&
                    activeOrder?.couponCodes?.includes(coupon.couponCode!);
                  const isExpanded = expandedCoupons.has(coupon.id);
                  const variantNames = getVariantNames(coupon);
                  const isSubmitting = couponFetcher.state === 'submitting';

                  return (
                    <div
                      key={coupon.id}
                      className={`relative border rounded-xl overflow-hidden transition-all duration-200 ${
                        isApplied
                          ? 'border-green-400 bg-green-50 shadow-lg'
                          : 'border-gray-200 bg-white hover:shadow-md hover:border-gray-300'
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                              {getCouponIcon(index)}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900 tracking-wide">
                                  {coupon.couponCode}
                                </span>
                                {isApplied && (
                                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                    Applied
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 font-medium">
                                {coupon.name}
                              </p>
                            </div>
                          </div>

                          <couponFetcher.Form method="post">
                            <input
                              type="hidden"
                              name="action"
                              value="applyCoupon"
                            />
                            <input
                              type="hidden"
                              name="couponCode"
                              value={coupon.couponCode ?? ''}
                            />
                            <button
                              type="submit"
                              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                                isCouponApplied && !isApplied
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                  : isApplied
                                  ? 'bg-green-500 text-white'
                                  : 'bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-lg'
                              }`}
                              disabled={
                                typeof coupon.couponCode !== 'string' ||
                                (isCouponApplied && !isApplied) ||
                                isSubmitting
                              }
                            >
                              {isSubmitting
                                ? 'APPLYING...'
                                : isApplied
                                ? 'APPLIED'
                                : 'APPLY'}
                            </button>
                          </couponFetcher.Form>
                        </div>

                        {/* Coupon Description */}
                        <div className="mb-3">
                          <div
                            className="text-sm text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: isExpanded
                                ? coupon.description || 'No details available'
                                : (
                                    coupon.description || 'No details available'
                                  ).substring(0, 100) +
                                  (coupon.description &&
                                  coupon.description.length > 100
                                    ? '...'
                                    : ''),
                            }}
                          />
                          {coupon.description &&
                            coupon.description.length > 100 && (
                              <button
                                onClick={() => toggleCouponExpansion(coupon.id)}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center gap-1"
                              >
                                {isExpanded ? (
                                  <>
                                    <ChevronUp className="w-3 h-3" />
                                    LESS
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-3 h-3" />
                                    MORE
                                  </>
                                )}
                              </button>
                            )}
                        </div>

                        {/* Additional Details */}
                        {(variantNames.length > 0 ||
                          coupon.endsAt ||
                          coupon.usageLimit) && (
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            {variantNames.length > 0 && (
                              <div className="flex items-start gap-2">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                  Products:
                                </span>
                                <span className="text-xs text-gray-700">
                                  {variantNames.join(', ')}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              {coupon.endsAt && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>
                                    Expires:{' '}
                                    {new Date(
                                      coupon.endsAt,
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                              {coupon.usageLimit && (
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>Limit: {coupon.usageLimit} uses</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Tag className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Coupons Available
                </h3>
                <p className="text-gray-500">
                  Check back later for exclusive offers and discounts!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification for errors */}
      <ToastNotification
        key={errorState.key}
        show={errorState.show}
        type="error"
        title={errorState.title}
        message={errorState.message}
        onClose={closeErrorToast}
        autoDismiss={true}
        dismissDuration={4000}
      />
    </>
  );
}

export default CouponModal;
