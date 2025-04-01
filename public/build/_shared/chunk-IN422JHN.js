import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";

// app/utils/validation.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/validation.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function shippingFormDataIsValid(data) {
  const shippingFormData = data instanceof FormData ? Object.fromEntries(data.entries()) : data;
  return !!(shippingFormData.streetLine1 && shippingFormData.city && shippingFormData.countryCode && shippingFormData.postalCode);
}
function replaceEmptyString(input) {
  if (!input || input.trim().length == 0) {
    return "-";
  }
  return input;
}

export {
  shippingFormDataIsValid,
  replaceEmptyString
};
//# sourceMappingURL=/build/_shared/chunk-IN422JHN.js.map
