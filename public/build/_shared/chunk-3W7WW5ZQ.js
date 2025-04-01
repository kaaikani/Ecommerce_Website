import {
  API_URL
} from "/build/_shared/chunk-2S5KDW4V.js";
import {
  getSdk,
  print
} from "/build/_shared/chunk-6IR2VAGI.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/cloudflare
var require_cloudflare = __commonJS({
  "empty-module:@remix-run/cloudflare"(exports, module) {
    module.exports = {};
  }
});

// app/sessions.ts
init_remix_hmr();

// app/utils/platform-adapter.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/platform-adapter.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
var IS_CF_PAGES = typeof process === "undefined";
async function safeRequireNodeDependency(module) {
  return import(module.split("").join(""));
}

// app/sessions.ts
var import_cloudflare = __toESM(require_cloudflare(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/sessions.ts"
  );
  import.meta.hot.lastModified = "1742363235111.9072";
}
async function getCookieSessionStorageFactory() {
  if (IS_CF_PAGES) {
    return import_cloudflare.createCookieSessionStorage;
  } else {
    return safeRequireNodeDependency("@remix-run/node").then(
      (module) => module.createCookieSessionStorage
    );
  }
}
var sessionStorage;
async function getSessionStorage() {
  if (sessionStorage) {
    return sessionStorage;
  }
  const factory = await getCookieSessionStorageFactory();
  sessionStorage = factory({
    cookie: {
      name: "vendure_remix_session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: ["awdbhbjahdbaw"]
    }
  });
  return sessionStorage;
}

// app/graphqlWrapper.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphqlWrapper.ts"
  );
  import.meta.hot.lastModified = "1742363235108.9072";
}
var AUTH_TOKEN_SESSION_KEY = "authToken";
async function sendQuery(options) {
  const headers = new Headers(options.headers);
  const req = options.request;
  headers.append("Content-Type", "application/json");
  const session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(options.request?.headers.get("Cookie"))
  );
  if (session) {
    const token = session.get(AUTH_TOKEN_SESSION_KEY);
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
  }
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(options),
    headers
  }).then(async (res) => ({
    ...await res.json(),
    headers: res.headers
  }));
}
var baseSdk = getSdk(requester);
var sdk = baseSdk;
function requester(doc, vars, options) {
  return sendQuery({
    query: print(doc),
    variables: vars,
    ...options
  }).then(async (response) => {
    const token = response.headers.get("vendure-auth-token");
    const headers = {};
    if (token) {
      const sessionStorage2 = await getSessionStorage();
      const session = await sessionStorage2.getSession(
        options?.request?.headers.get("Cookie")
      );
      if (session) {
        session.set(AUTH_TOKEN_SESSION_KEY, token);
        headers["Set-Cookie"] = await sessionStorage2.commitSession(session);
      }
    }
    headers["x-vendure-api-url"] = API_URL;
    if (response.errors) {
      console.log(
        response.errors[0].extensions?.exception?.stacktrace.join("\n") ?? response.errors
      );
      throw new Error(JSON.stringify(response.errors[0]));
    }
    return { ...response.data, _headers: new Headers(headers) };
  });
}

export {
  sdk
};
//# sourceMappingURL=/build/_shared/chunk-3W7WW5ZQ.js.map
