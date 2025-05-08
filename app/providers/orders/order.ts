import gql from 'graphql-tag';
import { QueryOptions, sdk } from '../../graphqlWrapper';
import { CreateAddressInput, CreateCustomerInput } from '~/generated/graphql';

export function getActiveOrder(options: QueryOptions) {
  return sdk
    .activeOrder(undefined, options)
    .then(({ activeOrder }) => activeOrder);
}

export function getOrderByCode(code: string, options: QueryOptions) {
  return sdk
    .orderByCode({ code }, options)
    .then(({ orderByCode }) => orderByCode);
}

export function addItemToOrder(
  productVariantId: string,
  quantity: number,
  options: QueryOptions,
) {
  return sdk.addItemToOrder(
    {
      productVariantId,
      quantity,
    },
    options,
  );
}

export function removeOrderLine(lineId: string, options: QueryOptions) {
  return sdk.removeOrderLine({ orderLineId: lineId }, options);
}

export function adjustOrderLine(
  lineId: string,
  quantity: number,
  options: QueryOptions,
) {
  return sdk.adjustOrderLine({ orderLineId: lineId, quantity }, options);
}

export function setCustomerForOrder(
  input: CreateCustomerInput,
  options: QueryOptions,
) {
  return sdk.setCustomerForOrder({ input }, options);
}

export function setOrderShippingAddress(
  input: CreateAddressInput,
  options: QueryOptions,
) {
  return sdk.setOrderShippingAddress({ input }, options);
}

export function setOrderShippingMethod(
  shippingMethodId: string,
  options: QueryOptions,
) {
  return sdk.setOrderShippingMethod({ shippingMethodId }, options);
}

export function applyCouponCode(input: string, options: QueryOptions) {
  return sdk.ApplyCouponCode ({ input }, options)
    .then(response => response.applyCouponCode);
}

export function removeCouponCode(couponCode: string, options: QueryOptions) {
  return sdk.RemoveCouponCode({ couponCode }, options)
    .then(response => response.removeCouponCode);
}

export function getCouponCodeList(options: QueryOptions) {
  return sdk.GetCouponCodeList(undefined, options).then((response) =>
    response.getCouponCodeList.items.map((c) => ({
      id: c.id,
      name: c.name,
      couponCode: c.couponCode,
      description: c.description,
      enabled: c.enabled,
      endsAt: c.endsAt,
      startsAt: c.startsAt,
      usageLimit: c.usageLimit,
      conditions: c.conditions.map((condition) => ({
        code: condition.code,
        args: condition.args.map((arg) => ({
          name: arg.name,
          value: arg.value,
        })),
      })),
    }))
  );
}
export async function addCouponProductToCart(couponCode: string, options: QueryOptions) {
  try {
    console.log(`Fetching coupon code: ${couponCode}`);
    const couponList = await getCouponCodeList(options);
    const coupon = couponList.find((c) => c.couponCode === couponCode);

    if (!coupon) {
      console.error(`Coupon code ${couponCode} not found in list`, couponList);
      throw new Error(`Coupon code ${couponCode} not found`);
    }

    console.log('Coupon found:', coupon);
    let productVariantId: string | null = null;
    for (const condition of coupon.conditions) {
      const variantArg = condition.args.find((arg) => arg.name === 'productVariantIds');
      if (variantArg && variantArg.value) {
        console.log('Found productVariantIds arg:', variantArg.value);
        try {
          // Handle both array and single value formats
          let parsedIds: string[] | string = variantArg.value;
          if (variantArg.value.startsWith('[')) {
            parsedIds = JSON.parse(variantArg.value);
          } else {
            parsedIds = [variantArg.value];
          }
          if (Array.isArray(parsedIds) && parsedIds.length > 0) {
            productVariantId = parsedIds[0].toString();
            break;
          } else if (typeof parsedIds === 'string') {
            productVariantId = parsedIds;
            break;
          }
        } catch (e) {
          console.error('Failed to parse productVariantIds:', variantArg.value, e);
          throw new Error(`Invalid productVariantIds format for coupon ${couponCode}`);
        }
      }
    }

    if (!productVariantId) {
      console.error(`No product variant ID found for coupon ${couponCode}`);
      throw new Error(`No product variant ID found for coupon code ${couponCode}`);
    }

    // Check current cart state before adding
    const initialOrder = await getActiveOrder(options);
    const initialQuantity = initialOrder?.lines?.find(
      (line) => line.productVariant.id === productVariantId
    )?.quantity || 0;
    console.log(`Initial quantity of product variant ${productVariantId}: ${initialQuantity}`);

    console.log(`Adding product variant ID: ${productVariantId} to cart with quantity 1`);
    const addResult = await addItemToOrder(productVariantId, 1, options);
    console.log('addItemToOrder result:', addResult);

    // Verify the cart update
    const updatedOrder = await getActiveOrder(options);
    const updatedQuantity = updatedOrder?.lines?.find(
      (line) => line.productVariant.id === productVariantId
    )?.quantity || 0;
    console.log(`Updated quantity of product variant ${productVariantId}: ${updatedQuantity}`);

    if (updatedQuantity < initialQuantity + 1) {
      console.error(`Failed to increase quantity for product variant ${productVariantId}`);
      throw new Error(`Failed to add product to cart: quantity did not increase`);
    }

    return addResult;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error in addCouponProductToCart: ${errorMessage}`);
    throw new Error(`Failed to add product to cart: ${errorMessage}`);
  }
}
export async function removeCouponProductFromCart(couponCode: string, options: QueryOptions) {
  try {
    console.log(`Fetching coupon code for removal: ${couponCode}`);
    const couponList = await getCouponCodeList(options);
    const coupon = couponList.find((c) => c.couponCode === couponCode);

    if (!coupon) {
      console.error(`Coupon code ${couponCode} not found in list`, couponList);
      throw new Error(`Coupon code ${couponCode} not found`);
    }

    console.log('Coupon found:', coupon);
    let productVariantId: string | null = null;
    for (const condition of coupon.conditions) {
      const variantArg = condition.args.find((arg) => arg.name === 'productVariantIds');
      if (variantArg && variantArg.value) {
        console.log('Found productVariantIds arg:', variantArg.value);
        try {
          // Handle both array and single value formats
          let parsedIds: string[] | string = variantArg.value;
          if (variantArg.value.startsWith('[')) {
            parsedIds = JSON.parse(variantArg.value);
          } else {
            parsedIds = [variantArg.value];
          }
          if (Array.isArray(parsedIds) && parsedIds.length > 0) {
            productVariantId = parsedIds[0].toString();
            break;
          } else if (typeof parsedIds === 'string') {
            productVariantId = parsedIds;
            break;
          }
        } catch (e) {
          console.error('Failed to parse productVariantIds:', variantArg.value, e);
          throw new Error(`Invalid productVariantIds format for coupon ${couponCode}`);
        }
      }
    }

    if (!productVariantId) {
      console.log(`No product variant ID found for coupon ${couponCode}, skipping removal`);
      return null; // No product variant to remove
    }

    console.log(`Fetching active order to find line with product variant ID: ${productVariantId}`);
    const activeOrder = await getActiveOrder(options);
    if (!activeOrder?.lines) {
      console.log('No lines found in active order, skipping removal');
      return activeOrder;
    }

    // Find the order line matching the productVariantId
    const lineToAdjust = activeOrder.lines.find(
      (line) => line.productVariant.id === productVariantId
    );

    if (!lineToAdjust) {
      console.log(`No order line found for product variant ID: ${productVariantId}, skipping removal`);
      return activeOrder;
    }

    // Adjust quantity or remove line
    if (lineToAdjust.quantity > 1) {
      console.log(`Adjusting quantity for order line ID: ${lineToAdjust.id} from ${lineToAdjust.quantity} to ${lineToAdjust.quantity - 1}`);
      const adjustResult = await adjustOrderLine(lineToAdjust.id, lineToAdjust.quantity - 1, options);
      console.log('adjustOrderLine result:', adjustResult);
    } else {
      console.log(`Removing order line ID: ${lineToAdjust.id} as quantity is 1`);
      const removeResult = await removeOrderLine(lineToAdjust.id, options);
      console.log('removeOrderLine result:', removeResult);
    }

    // Verify the cart update
    const updatedOrder = await getActiveOrder(options);
    console.log('Updated order after adjusting/removing item:', updatedOrder);

    return updatedOrder;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error in removeCouponProductFromCart: ${errorMessage}`);
    throw new Error(`Failed to adjust product quantity in cart: ${errorMessage}`);
  }
}
gql`
  mutation setCustomerForOrder($input: CreateCustomerInput!) {
    setCustomerForOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation setOrderShippingAddress($input: CreateAddressInput!) {
    setOrderShippingAddress(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
    setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation removeOrderLine($orderLineId: ID!) {
    removeOrderLine(orderLineId: $orderLineId) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  fragment OrderDetail on Order {
    __typename
    id
    code
    active
    createdAt
    state
    currencyCode
    totalQuantity
    subTotal
    subTotalWithTax
    taxSummary {
      description
      taxRate
      taxTotal
    }
    shippingWithTax
    totalWithTax
    couponCodes
    customer {
      id
      firstName
      lastName
      emailAddress
    }
    shippingAddress {
      fullName
      streetLine1
      streetLine2
      company
      city
      province
      postalCode
      countryCode
      phoneNumber
    }
    shippingLines {
      shippingMethod {
        id
        name
      }
      priceWithTax
    }
    lines {
      id
      unitPriceWithTax
      linePriceWithTax
      quantity
      featuredAsset {
        id
        preview
      }
      productVariant {
        id
        name
        price
        product {
          id
          slug
        }
      }
    }
    payments {
      id
      state
      method
      amount
      metadata
    }
  }
`;

gql`
  query activeOrder {
    activeOrder {
      ...OrderDetail
      couponCodes
    }
  }
`;

gql`
  query orderByCode($code: String!) {
    orderByCode(code: $code) {
      ...OrderDetail
    }
  }
`;

gql`
query GetCouponCodeList{
    getCouponCodeList{
        items {
            id
            name
            couponCode
            description
            enabled
            endsAt
            startsAt
            conditions{
                code
                args{
                    name
                    value
                }
            }
            usageLimit
        }
        totalItems
        __typename
    }
}
`;

gql`
  mutation ApplyCouponCode($input: String!) {
    applyCouponCode(couponCode: $input) {
        __typename
        ... on Order {
            id
            couponCodes
            total
        }
        ... on CouponCodeInvalidError {
            message
        }
    }
}
`;

gql`
mutation RemoveCouponCode($couponCode: String!){
    removeCouponCode(couponCode: $couponCode){
        __typename
    }
}
`;