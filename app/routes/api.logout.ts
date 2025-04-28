// import { LoaderFunctionArgs, redirect } from '@remix-run/server-runtime';
// import { logout } from '~/providers/account/account';

// export async function action({ request }: LoaderFunctionArgs) {
//   const result = await logout({ request });
//   return redirect('/', { headers: result._headers });
// }

// export async function loader() {
//   return redirect('/');
// }


// routes/api/logout.tsx (or .tsx)

import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { getSessionStorage } from '~/sessions';
import { logout } from '~/providers//account/account'; // your logout function

export const action = async ({ request }: ActionFunctionArgs) => {
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));

  const authToken = session.get('authToken');
  const channelToken = session.get('channelToken');

  if (authToken) {
    try {
      const headers = new Headers();
      headers.set('Authorization', `Bearer ${authToken}`);
      if (channelToken) {
        headers.set('vendure-token', channelToken);
      }

      await logout({
        headers,
      });
    } catch (err) {
      console.error('Error logging out:', err);
    }
  }

  // Always destroy local session
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
};






// import { LoaderFunctionArgs, redirect } from '@remix-run/server-runtime';
// import { logout } from '~/providers/account/account';
// import { getSessionStorage } from '~/sessions';

// export async function action({ request }: LoaderFunctionArgs) {
//   const sessionStorage = await getSessionStorage();
//   const session = await sessionStorage.getSession(request.headers.get('Cookie'));

//   // Call Vendure logout mutation
//   const result = await logout({ request });

//   // Clear tokens from session
//   session.unset('authToken');
//   session.unset('channelToken');

//   return redirect('/', {
//     headers: {
//       'Set-Cookie': await sessionStorage.commitSession(session),
//     },
//   });
// }

// export async function loader() {
//   return redirect('/');
// }


// import { LoaderFunctionArgs, redirect } from '@remix-run/server-runtime';
// import { getSessionStorage } from '~/sessions';
// import { logout } from '~/providers/account/account';

// export async function action({ request }: LoaderFunctionArgs) {
//   const sessionStorage = await getSessionStorage();
//   const session = await sessionStorage.getSession(request.headers.get('Cookie'));

//   // If you have your own logout logic like token invalidation, call it
//   await logout({ request });

//   // Clear session keys
//   session.unset('authToken');
//   session.unset('channelToken'); // ✅ Important: Clear the stale channel token

//   return redirect('/', {
//     headers: {
//       'Set-Cookie': await sessionStorage.commitSession(session),
//     },
//   });
// }

// export async function loader() {
//   return redirect('/');
// }
