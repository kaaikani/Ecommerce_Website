import gql from 'graphql-tag';
import {
  CheckUniquePhoneQuery, CustomBanner, CustomBannersQuery, GetChannelListQuery, GetChannelsByCustomerEmailQuery,
  GetChannelsByCustomerEmailQueryVariables, GetChannelsByCustomerPhonenumberQuery, GetPasswordResetTokenQuery, RequestPasswordResetMutation, RequestPasswordResetMutationVariables, ResetPasswordMutation, SendPhoneOtpMutation, SendPhoneOtpMutationVariables,
 CancelOrderOnClientRequestMutation,
  OtherInstructionsMutation
} from '~/generated/graphql';
import { QueryOptions, sdk, WithHeaders } from '~/graphqlWrapper';

export async function getChannelList(p0: { request: Request; }): Promise<WithHeaders<GetChannelListQuery['getChannelList']>> {
  return sdk.getChannelList().then((res) => {
    const data = res.getChannelList;


    const result = Object.assign([...data], { _headers: res._headers });
    return result;
  });
}

gql`
 query getChannelList{
  getChannelList {
    id
    token
    code
  }
 }
`;

export async function getChannelsByCustomerEmail(
  email: string
): Promise<WithHeaders<GetChannelsByCustomerEmailQuery['getChannelsByCustomerEmail']>> {
  const response = await sdk.GetChannelsByCustomerEmail({ email }); // 👈 lowercase "g"
  const result = Object.assign([...response.getChannelsByCustomerEmail], {
    _headers: response._headers,
  });
  return result;
}

export async function getChannelsByCustomerPhonenumber(
  phoneNumber: string
): Promise<WithHeaders<GetChannelsByCustomerPhonenumberQuery['getChannelsByCustomerPhoneNumber']>> {
  const response = await sdk.getChannelsByCustomerPhonenumber({ phoneNumber });
  const result = Object.assign([...response.getChannelsByCustomerPhoneNumber], {
    _headers: response._headers,
  });
  return result;
}


export async function getPasswordResetToken(email: string, p0: { request: Request; customHeaders: { 'vendure-token': string; }; }): Promise<WithHeaders<string>> {
  // Create a Headers instance and append the custom header
  const headers = new Headers();
  headers.append('vendure-token', p0.customHeaders['vendure-token']);

  // Pass the headers instance inside the QueryOptions
  const queryOptions: QueryOptions = {
    headers: headers,  // Pass the Headers object
  };

  return sdk.GetPasswordResetToken({}, queryOptions).then((res) => {
    const result = Object.assign(res.getPasswordResetToken, {
      _headers: res._headers,
    });
    return result;
  });
}




export async function requestPasswordReset(
  email: string
): Promise<WithHeaders<RequestPasswordResetMutation['requestPasswordReset']>> {
  const response = await sdk.RequestPasswordReset({ email });
  const { requestPasswordReset, _headers } = response;

  if (!requestPasswordReset) {
    // If it's null or undefined, return it with headers but explicitly typed
    return {
      __typename: 'NativeAuthStrategyError', // or some fallback typename if your schema expects it
      _headers,
    } as WithHeaders<RequestPasswordResetMutation['requestPasswordReset']>;
  }

  return {
    ...requestPasswordReset,
    _headers,
  };
}



export async function resetPassword(
  token: string, password: string, p0: { request: Request; customHeaders: { 'vendure-token': string; }; }): Promise<WithHeaders<any>> {
  const response = await sdk.ResetPassword({
    token,
    password,
  });

  const { resetPassword, _headers } = response;

  if (!resetPassword) {
    return {
      __typename: 'PasswordResetTokenInvalidError',
      _headers,
    };
  }

  return {
    ...resetPassword,
    _headers,
  };
}

export async function sendPhoneOtp(phoneNumber: string): Promise<string | false> {
  try {
    const response = await sdk.SendPhoneOtp({ phoneNumber });
    const otp = response.sendPhoneOtp;
    console.log('Generated OTP:', otp); // 👈 Log OTP to console
    return otp || false;
  } catch (error) {
    console.error('Error in sendPhoneOtp:', error);
    return false;
  }
}


export async function resendPhoneOtp(phoneNumber: string): Promise<string | false> {
  try {
    const response = await sdk.resendPhoneOtp({ phoneNumber });
    return response.resendPhoneOtp || false;
  } catch (error) {
    console.error('Error in resendPhoneOtp:', error);
    return false;
  }
}

export async function checkUniquePhone(
  phone: string
): Promise<WithHeaders<CheckUniquePhoneQuery['checkUniquePhone']>> {
  const response = await sdk.CheckUniquePhone({ phoneNumber: phone });

  const result = Object.assign(response.checkUniquePhone, {
    _headers: response._headers,
  });

  return result;
}




gql`
query GetChannelsByCustomerEmail($email: String!) {
    getChannelsByCustomerEmail(email: $email) {
      id
      code
      token
      defaultCurrencyCode
    }
  }
    `;

gql`
    query GetPasswordResetToken {
      getPasswordResetToken
    }
  `;


gql`
mutation RequestPasswordReset($email: String!){
    requestPasswordReset(emailAddress: $email){
        __typename
    }
}

`;

gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password) {
      ... on CurrentUser {
        id
        channels {
          token
          code
          permissions
        }
      }
      ...ErrorResult
      __typename
    }
  }

  fragment ErrorResult on ErrorResult {
    errorCode
    message
    __typename
}
`;

gql`
  mutation SendPhoneOtp($phoneNumber: String!) {
    sendPhoneOtp(phoneNumber: $phoneNumber)
  }
`;

gql`
mutation resendPhoneOtp($phoneNumber: String!){
  resendPhoneOtp(phoneNumber: $phoneNumber)
}
`;


gql`
    query getChannelsByCustomerPhonenumber($phoneNumber: String!){
    getChannelsByCustomerPhoneNumber(phoneNumber:$phoneNumber) {
      id
      code
      token
      defaultCurrencyCode
    }
  }
`;

gql`
query CheckUniquePhone($phoneNumber: String!){
    checkUniquePhone(phone:$phoneNumber)
}
`;


export async function getCustomBanners(
  request: Request,
  channelToken?: string,
): Promise<{ data: CustomBannersQuery["customBanners"]; headers: any } | false> {
  try {
    // Create custom headers with the channel token if provided
    const customHeaders: Record<string, string> = {}
    if (channelToken) {
      customHeaders["vendure-token"] = channelToken
    }

    // Pass the request and custom headers to ensure the channel token is used
    const response = await sdk.customBanners(
      {}, // No parameters needed for the query
      {
        request,
        customHeaders, // Pass the channel token in headers
      },
    )

    return {
      data: response.customBanners,
      headers: response._headers,
    }
  } catch (error) {
    console.error("Error in getCustomBanners:", error)
    return false
  }
}




gql`
query customBanners{
    customBanners {
        id
        assets {
            id
            name
            source
        }
        channels {
            id
            code
        }
    }
}
`;


export async function getRazorpayOrderId(
  orderId: number | string,
  request: Request,
  channelToken?: string,
): Promise<
  | {
      razorpayOrderId: string;
      keyId: string;
      keySecret: string;
      headers: any;
    }
  | { message: string; headers: any }
  | false
> {
  try {
    const customHeaders: Record<string, string> = {}
    if (channelToken) {
      customHeaders['vendure-token'] = channelToken
    }

    const response = await sdk.generateRazorpayOrderId(
      { orderId: String(orderId) },
      {
        request,
        customHeaders,
      },
    )

    const result = response.generateRazorpayOrderId

    if ('razorpayOrderId' in result) {
      return {
        razorpayOrderId: result.razorpayOrderId,
        keyId: result.keyId,
        keySecret: result.keySecret,
        headers: response._headers,
      }
    } else if ('message' in result) {
      return {
        message: result.message ?? 'Unknown error',
        headers: response._headers,
      }
    }

    return false
  } catch (error) {
    console.error('Error in getRazorpayOrderId:', error)
    return false
  }
}


gql`
mutation generateRazorpayOrderId($orderId: ID!) {
  generateRazorpayOrderId(orderId: $orderId) {
    ... on RazorpayOrderIdSuccess {
      razorpayOrderId
      keyId
      keySecret
    }
    ... on RazorpayOrderIdGenerationError {
      message
    }
  }
}
`

export async function cancelOrderOnClientRequest(
  orderId: string,
  value: number,
  options?: { request: Request; customHeaders?: Record<string, string> }
): Promise<WithHeaders<CancelOrderOnClientRequestMutation['cancelOrderOnClientRequest']>> {
  const response = await sdk.CancelOrderOnClientRequest(
    { orderId, value },
    options
  );

  return Object.assign(response.cancelOrderOnClientRequest, {
    _headers: response._headers,
  });
}

gql`
 mutation CancelOrderOnClientRequest($orderId: ID!, $value: Int!) {
    cancelOrderOnClientRequest(orderId: $orderId, value: $value) {
              ...Cart
    }
  }

  fragment Cart on Order {
    id
    code
    state
    active
    couponCodes
    promotions {
        couponCode
        name
        enabled
        actions {
            args {
                value
                name
            }
            code
        }
        conditions {
            code
            args {
                name
                value
            }
        }
    }
    lines {
        id
        customFields
        featuredAsset {
            ...Asset
            __typename
        }
        unitPrice
        unitPriceWithTax
        quantity
        linePriceWithTax
        discountedLinePriceWithTax
        productVariant {
            id
            name
            __typename
        }
        discounts {
            amount
            amountWithTax
            description
            adjustmentSource
            type
            __typename
        }
        __typename
    }
    totalQuantity
    subTotal
    subTotalWithTax
    total
    totalWithTax
    shipping
    shippingWithTax
    shippingLines {
        priceWithTax
        shippingMethod {
            id
            code
            name
            description
            __typename
        }
        __typename
    }
    discounts {
        amount
        amountWithTax
        description
        adjustmentSource
        type
        __typename
    }
    customFields {
        clientRequestToCancel
    }
    __typename
}

fragment Asset on Asset {
    id
    width
    height
    name
    preview
    focalPoint {
        x
        y
        __typename
    }
    __typename
}
`


export async function otherInstructions(
  orderId: string,
  value: string,
  options?: { request: Request; customHeaders?: Record<string, string> }
): Promise<WithHeaders<OtherInstructionsMutation['otherInstructions']>> {
  const response = await sdk.OtherInstructions(
    { orderId, value },
    options
  );

  return Object.assign(response.otherInstructions, {
    _headers: response._headers,
  });
}
gql`
  mutation OtherInstructions($orderId: ID!, $value: String!) {
    otherInstructions(orderId: $orderId, value: $value) {
      id
      customFields {
        otherInstructions
      }
    }
  }
`

