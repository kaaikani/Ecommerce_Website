import {
  sdk
} from "/build/_shared/chunk-3W7WW5ZQ.js";
import {
  lib_default
} from "/build/_shared/chunk-6IR2VAGI.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";

// app/providers/products/products.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/providers/products/products.ts"
  );
  import.meta.hot.lastModified = "1742363235109.9072";
}
function search(variables, options) {
  return sdk.search(variables, options);
}
function searchFacetValues(variables, options) {
  return sdk.searchFacetValues(variables, options);
}
var detailedProductFragment = lib_default`
  fragment DetailedProduct on Product {
    id
    name
    description
    collections {
      id
      slug
      name
      breadcrumbs {
        id
        name
        slug
      }
    }
    facetValues {
      facet {
        id
        code
        name
      }
      id
      code
      name
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      priceWithTax
      currencyCode
      sku
      stockLevel
      featuredAsset {
        id
        preview
      }
    }
  }
`;
lib_default`
  query product($slug: String, $id: ID) {
    product(slug: $slug, id: $id) {
      ...DetailedProduct
    }
  }
`;
var listedProductFragment = lib_default`
  fragment ListedProduct on SearchResult {
    productId
    productName
    slug
    productAsset {
      id
      preview
    }
    currencyCode
    priceWithTax {
      ... on PriceRange {
        min
        max
      }
      ... on SinglePrice {
        value
      }
    }
  }
`;
lib_default`
  query search($input: SearchInput!) {
    search(input: $input) {
      totalItems
      items {
        ...ListedProduct
      }
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${listedProductFragment}
`;
lib_default`
  query searchFacetValues($input: SearchInput!) {
    search(input: $input) {
      totalItems
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${listedProductFragment}
`;

export {
  search,
  searchFacetValues
};
//# sourceMappingURL=/build/_shared/chunk-WLLYEG7R.js.map
