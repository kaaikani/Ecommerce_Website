import gql from 'graphql-tag';
import {
  CreateAddressInput,
  LoginMutation,
  LogoutMutation,
  RegisterCustomerAccountMutation,
  RegisterCustomerAccountMutationVariables,
  UpdateAddressInput,
  UpdateCustomerInput,
  VerifyCustomerAccountMutation,
  AuthenticationInput,
  CurrentUser,
  ErrorResult
} from '~/generated/graphql';
import { QueryOptions, sdk, WithHeaders } from '~/graphqlWrapper';
import { redirect } from '@remix-run/server-runtime';
import { getSessionStorage } from '~/sessions';

// export const login = async (
//   email: string,
//   password: string,
//   rememberMe: boolean,
//   options: QueryOptions,
// ): Promise<WithHeaders<LoginMutation['login']>> => {
//   return sdk.login({ email, password, rememberMe }, options).then((res) => ({
//     ...res.login,
//     _headers: res._headers,
//   }));
// };

export async function login(
  email: string,
  password: string,
  rememberMe: boolean,
  p0: { request: Request; customHeaders: { 'vendure-token': string; } }
) {
  const response = await sdk.login({
    email, password, rememberMe 
  }, {
    customHeaders: p0.customHeaders,
    
  });
  

  return {
    ...response.login,
    _headers: response._headers, 
  };
}


// export const logout = async (
//   options: QueryOptions,
// ): Promise<WithHeaders<LogoutMutation['logout']>> => {
//   return sdk.logout({}, options).then((res) => ({
//     ...res.logout,
//     _headers: res._headers,
//   }));
// };


export const logout = async (
  options: QueryOptions
): Promise<WithHeaders<LogoutMutation['logout']> | Response> => {
  const logoutResult = await sdk.logout({}, options);
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    options?.request?.headers.get('Cookie')
  );
  const setCookie = await sessionStorage.destroySession(session);

  const headers = new Headers(logoutResult._headers);
  headers.set('Set-Cookie', setCookie);

  // Redirect to login page
  return redirect('/login', { headers });
};

export const registerCustomerAccount = async (
  options: QueryOptions,
  variables: RegisterCustomerAccountMutationVariables,
): Promise<
  WithHeaders<RegisterCustomerAccountMutation['registerCustomerAccount']>
> => {
  return sdk.registerCustomerAccount(variables, options).then((res) => ({
    ...res.registerCustomerAccount,
    _headers: res._headers,
  }));
};

export const verifyCustomerAccount = async (
  options: QueryOptions,
  token: string,
  password?: string,
): Promise<
  WithHeaders<VerifyCustomerAccountMutation['verifyCustomerAccount']>
> => {
  return sdk
    .verifyCustomerAccount({ token, password }, options)
    .then((res) => ({
      ...res.verifyCustomerAccount,
      _headers: res._headers,
    }));
};

export async function updateCustomer(
  input: UpdateCustomerInput,
  options: QueryOptions,
) {
  return sdk.updateCustomer({ input }, options);
}

export async function requestUpdateCustomerEmailAddress(
  password: string,
  newEmailAddress: string,
  options: QueryOptions,
) {
  return sdk
    .requestUpdateCustomerEmailAddress({ password, newEmailAddress }, options)
    .then((res) => res.requestUpdateCustomerEmailAddress);
}

export async function updateCustomerEmailAddress(
  token: string,
  options: QueryOptions,
) {
  return sdk
    .updateCustomerEmailAddress({ token }, options)
    .then((res) => res.updateCustomerEmailAddress);
}

export async function updateCustomerAddress(
  input: UpdateAddressInput,
  options: QueryOptions,
) {
  return sdk
    .updateCustomerAddress({ input }, options)
    .then((res) => res.updateCustomerAddress);
}

export async function createCustomerAddress(
  input: CreateAddressInput,
  options: QueryOptions,
) {
  return sdk
    .createCustomerAddress({ input }, options)
    .then((res) => res.createCustomerAddress);
}

export async function deleteCustomerAddress(id: string, options: QueryOptions) {
  return sdk
    .deleteCustomerAddress({ id }, options)
    .then((res) => res.deleteCustomerAddress);
}

export async function updateCustomerPassword(
  input: { currentPassword: string; newPassword: string },
  options: QueryOptions,
) {
  return sdk
    .updateCustomerPassword(input, options)
    .then((res) => res.updateCustomerPassword);
}


// export async function authenticate(
//   input: AuthenticationInput,
//   p0: { request: Request; customHeaders: { 'vendure-token': string } }
// ): Promise<{ result: CurrentUser | ErrorResult; headers: Headers }> {
//   const response = await sdk.authenticate(
//     { input },
//     { customHeaders: p0.customHeaders }
//   );

//   return {
//     result: response.authenticate,
//     headers: response._headers,
//   };
// }

// gql`
// mutation authenticate($input: AuthenticationInput!) {
//   authenticate(input: $input) {
//     __typename
//     ... on CurrentUser {
//       id
//       identifier
//       channels {
//         id
//         code
//         token
//         permissions
//       }
//     }
//     ... on InvalidCredentialsError {
//       message
//       errorCode
//     }
//     ... on NotVerifiedError {
//       message
//       errorCode
//     }
//   }
// }



// `;

gql`
  mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $email, password: $password, rememberMe: $rememberMe) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation logout {
    logout {
      success
    }
  }
`;

gql`
  mutation registerCustomerAccount($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      __typename
      ... on Success {
        success
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation verifyCustomerAccount($token: String!, $password: String) {
    verifyCustomerAccount(token: $token, password: $password) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation updateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      __typename
    }
  }
`;

gql`
  mutation requestUpdateCustomerEmailAddress(
    $password: String!
    $newEmailAddress: String!
  ) {
    requestUpdateCustomerEmailAddress(
      password: $password
      newEmailAddress: $newEmailAddress
    ) {
      __typename
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation updateCustomerEmailAddress($token: String!) {
    updateCustomerEmailAddress(token: $token) {
      __typename
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

gql`
  mutation updateCustomerAddress($input: UpdateAddressInput!) {
    updateCustomerAddress(input: $input) {
      __typename
    }
  }
`;

gql`
  mutation createCustomerAddress($input: CreateAddressInput!) {
    createCustomerAddress(input: $input) {
      __typename
    }
  }
`;

gql`
  mutation deleteCustomerAddress($id: ID!) {
    deleteCustomerAddress(id: $id) {
      success
    }
  }
`;

gql`
  mutation updateCustomerPassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    updateCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      __typename
      ... on Success {
        success
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;



// type AuthenticateResponse = {
//   data: {
//     authenticate: CurrentUser | ErrorResult;
//   };
// };

// export async function authenticate(
//   input: AuthenticationInput,
//   p0: { request: Request; customHeaders: { 'vendure-token': string } }
// ): Promise<{ result: CurrentUser | ErrorResult; headers: Headers }> {
//   const { phoneNumber, code } = input.phoneOtp!;
  
//   const fetchResponse = await fetch('http://localhost:3000/shop-api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'vendure-token': p0.customHeaders['vendure-token'],
//     },
//     body: JSON.stringify({
//       query: `
//         mutation authenticate($input: AuthenticationInput!) {
//           authenticate(input: $input) {
//             __typename
//             ... on CurrentUser {
//               id
//               identifier
//               channels {
//                 id
//                 code
//                 token
//                 permissions
//               }
//             }
//             ... on InvalidCredentialsError {
//               message
//               errorCode
//             }
//             ... on NotVerifiedError {
//               message
//               errorCode
//             }
//           }
//         }
//       `,
//       variables: {
//         input: {
//           phoneOtp: {
//             phoneNumber,
//             code,
//           },
//         },
//       },
//     }),
//   });

//   const json = (await fetchResponse.json()) as AuthenticateResponse;
//   return {
//     result: json.data.authenticate,
//     headers: fetchResponse.headers,
//   };
// }


export async function authenticate(
  input: AuthenticationInput,
  {
    request,
    customHeaders
  }: { request: Request; customHeaders: { 'vendure-token': string } }
): Promise<{ result: CurrentUser | ErrorResult; headers: Headers }> {
  const response = await fetch(process.env.VENDURE_API_URL as string, {
        method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'vendure-token': customHeaders['vendure-token'],
    },
    body: JSON.stringify({
      query: `
        mutation Authenticate($input: AuthenticationInput!) {
          authenticate(input: $input) {
            __typename
            ... on CurrentUser {
              id
              identifier
              channels {
                id
                code
                token
                permissions
              }
            }
            ... on InvalidCredentialsError {
              message
              errorCode
            }
            ... on NotVerifiedError {
              message
              errorCode
            }
          }
        }
      `,
      variables: { input },
    }),
  });

  const json = await response.json() as { data: { authenticate: CurrentUser | ErrorResult } };  // Type assertion here
  return {
    result: json.data.authenticate,
    headers: response.headers,
  };
}
