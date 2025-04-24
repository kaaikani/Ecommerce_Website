var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// public/locales/en.json
var require_en = __commonJS({
  "public/locales/en.json"(exports, module) {
    module.exports = {
      common: {
        or: "Or",
        readMore: "Read more:",
        tokenError: "Verification token was not provided!",
        shopByCategory: "Shop by Category",
        browseCategories: "Browse all categories",
        resultsFor: "Results for",
        allResults: "All results",
        defaultError: "Something went wrong.",
        unknowError: "An unknown error occurred",
        save: "Save",
        cancel: "Cancel",
        edit: "Edit",
        yes: "Yes",
        shipping: "Shipping",
        billing: "Billing",
        default: "Default",
        remove: "Remove",
        quantity: "Quantity",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Close panel",
        closeMenu: "Close menu",
        perPage: "per Page",
        prev: "Prev.",
        next: "Next",
        filters: "Filters",
        select: "Select...",
        home: "Home",
        logoAlt: "Vendure logo",
        search: "Search",
        goHome: "Go home"
      },
      address: {
        new: "New address",
        edit: "Edit address",
        company: "Company",
        streetLine1: "Address",
        streetLine2: "Apartment, suite, etc.",
        city: "City",
        country: "Country",
        selectCountry: "Select a country...",
        province: "State / Province",
        postalCode: "Postal code",
        phoneNumber: "Phone",
        idError: "Parameter 'id' is missing",
        deleteModal: {
          title: "Remove Address",
          confirmation: "Do you want to remove this address?",
          error: "Address could not be removed"
        }
      },
      account: {
        title: "Title",
        firstName: "First Name",
        lastName: "Last Name",
        fullName: "Full Name",
        phoneNumber: "Phone Nr.",
        errorMessage: "We ran into a problem updating your details!",
        verifyMessage: "Your account has been verified successfully. Redirecting in 5s...",
        verifyEmailMessage: "Your new E-Mail address has been verified successfully. Redirecting in 5s...",
        signInTitle: "Sign in to your account",
        signUp: "Sign Up",
        signIn: "Sign In",
        signOut: "Sign out",
        create: "Create a new account",
        createError: "We ran into a problem while creating your account!",
        login: "login to your existing account",
        myAccount: "My Account",
        welcomeBack: "Welcome back",
        details: "Account Details",
        purchaseHistory: "Purchase History",
        addresses: "Addresses",
        register: "register a new account",
        email: "E-mail",
        emailAddress: "Email address",
        password: "Password",
        repeatPassword: "Repeat Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot your password?",
        errorSignIn: "We ran into a problem signing you in!",
        createdMessage: "Your account has been created successfully! A verification link has been sent to your e-mail address.",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        pwdSuccessHeading: "Success!",
        pwdSuccessMessage: "Your password has been updated.",
        pwdErrorMessage: "Your password has been updated.",
        savePassword: "Save Password",
        changePassword: "Change Password",
        changeEmailConfirmation: "awaiting confirmation",
        changeEmailButton: "awaiting confirmation",
        changeEmailModal: {
          title: "Change Email Address",
          heading: "We will send a verification email to your new email address.",
          currentEmail: "Your current email address: ",
          new: "New Email Address",
          errorMessage: "We ran into a problem changing your E-Mail!"
        }
      },
      cart: {
        title: "Shopping cart",
        empty: "Your cart is empty",
        shippingMessage: "Shipping will be calculated at checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "This is a dummy payment for demonstration purposes only",
        paymentErrorMessage: "There was an error processing the payment",
        payWith: "Pay with",
        deliveryMethod: "Delivery method",
        paymentProcessing: "Processing...",
        paymentLoading: "Loading options...",
        paymentMessage: "Note: your payment is still being processed. You will receive an email confirmation once the payment has completed.",
        pay: "Pay",
        progress: "Progress",
        orderNotFound: "No matching order found!",
        orderErrorTitle: "An error occured!",
        orderErrorMessage: "Unfortunately your payment could not be processed or this confirmation link has expired.",
        orderProcessing: "Please wait while we process your order...",
        orderSuccessMessage: "Your order has been received!",
        braintreeError: "Braintree error:",
        stripeError: "Stripe error:",
        detailsTitle: "Contact information",
        shippingTitle: "Shipping information",
        goToPayment: "Proceed to payment",
        steps: {
          shipping: "Shipping",
          payment: "Payment",
          confirmation: "Confirmation"
        }
      },
      order: {
        placedAt: "Date placed",
        totalSum: "Total sum",
        number: "Order number",
        actions: "Actions",
        actionsMessage: "Actions for this order (Not implemented)",
        expand: "Expand this order",
        notShipped: "Not shipped yet",
        trackAlert: "Here you'd need to Link your delivery service. Tracking code for this package is",
        trackPackage: "Track package",
        detailedOverview: "Detailed overview",
        summary: "Order summary",
        shippingAndHandling: "Shipping & handling:",
        totalWithoutTax: "Total before tax:",
        estimatedTax: "Estimated tax:",
        appliedCoupons: "Applied coupons:",
        total: "Total:",
        grandTotal: "Grand total:",
        historyEmpty: "Your future orders will appear here",
        historyEnd: "No more orders, end reached",
        items: {
          fulfilled: "items fulfilled",
          subtotal: "Item(s) Subtotal:"
        },
        states: {
          Draft: "Draft",
          AddingItems: "Adding items",
          ArrangingPayment: "Awaiting payment",
          PaymentAuthorized: "Payment authorized",
          PaymentSettled: "Payment settled",
          PartiallyShipped: "Partially shipped",
          Shipped: "Shipped",
          PartiallyDelivered: "Partially delivered",
          Delivered: "Delivered",
          Modifying: "Modifying",
          ArrangingAdditionalPayment: "Awaiting payment",
          Cancelled: "Cancelled",
          Unknown: "Unknown"
        }
      },
      product: {
        showing: "Showing products",
        to: "to",
        noResults: "No results!",
        filterTip: "Try changing your filter settings.",
        inStock: "In stock",
        outOfStock: "Out of stock",
        lowStock: "Low stock",
        notFound: "Product not found!",
        notFoundInfo: "We couldn't find any product at that address!",
        collections: "Collections",
        collectionNotFound: "Collection not found",
        description: "Description",
        selectOption: "Select option",
        inCart: "in cart",
        addToCart: "Add to cart",
        addToFavorites: "Add to favorites",
        shippingAndReturns: "Shipping & Returns",
        shippingInfo: "Standard shipping: 3 - 5 working days. Express shipping: 1 - 3 working days.",
        shippingCostsInfo: "Shipping costs depend on delivery address and will be calculated during checkout.",
        returnsInfo: "Returns are subject to terms. Please see the RETURNS PAGE for further information.",
        recentReviews: "Recent reviews",
        recentRating: "out of 5 stars"
      },
      footer: {
        title: "Footer",
        shop: "Shop",
        support: "Support",
        subscribeHeader: "Subscribe to our newsletter",
        subscribeIntro: "Be the first to know about exclusive offers & deals.",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe"
      },
      navigation: {
        support: {
          help: "Help",
          trackOrder: "Track order",
          shipping: "Shipping",
          returns: "Returns"
        },
        company: {
          about: "About",
          blog: "Blog",
          responsibility: "Corporate responsibility",
          press: "Press"
        }
      },
      vendure: {
        title: "Vendure Remix Starter",
        intro: "A headless commerce storefront starter kit built with",
        link: "Lightning Fast Headless Commerce with Vendure and Remix",
        demoCredentials: "Demo credentials",
        exclusive: "Exclusive: Get your own",
        repoLinkLabel: "FREE storefront starter kit",
        registrationMessage: "Account registration is not supported by the demo Vendure instance. In order to use it, please connect the Remix storefront to your own local / production instance.",
        registrationError: "Registration can't be used with Vendure demo shop! Please connect your own instance."
      }
    };
  }
});

// public/locales/es.json
var require_es = __commonJS({
  "public/locales/es.json"(exports, module) {
    module.exports = {
      common: {
        or: "O",
        readMore: "Leer m\xE1s:",
        tokenError: "\xA1No se proporcion\xF3 el token de verificaci\xF3n!",
        shopByCategory: "Compra por categor\xEDa",
        browseCategories: "Explorar todas las categor\xEDas",
        resultsFor: "resultados para",
        allResults: "Todos los resultados",
        defaultError: "Algo sali\xF3 mal.",
        unknowError: "Un error desconocido ocurri\xF3",
        save: "Ahorrar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "S\xED",
        shipping: "Env\xEDo",
        billing: "Facturaci\xF3n",
        default: "Por defecto",
        remove: "Eliminar",
        quantity: "Cantidad",
        subtotal: "Total parcial",
        total: "Total",
        closePanel: "Cerrar panel",
        closeMenu: "Cerrar men\xFA",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Seleccionar...",
        home: "Hogar",
        logoAlt: "logotipo de empresa",
        search: "Buscar",
        goHome: "Vete a casa"
      },
      address: {
        new: "Nueva direccion",
        edit: "Editar direcci\xF3n",
        company: "Compa\xF1\xEDa",
        streetLine1: "DIRECCI\xD3N",
        streetLine2: "Apartamento, suite, etc.",
        city: "Ciudad",
        country: "Pa\xEDs",
        selectCountry: "Seleccione un pa\xEDs...",
        province: "Provincia del estado",
        postalCode: "C\xF3digo Postal",
        phoneNumber: "Tel\xE9fono",
        idError: "Falta el par\xE1metro 'id'",
        deleteModal: {
          title: "Eliminar direcci\xF3n",
          confirmation: "\xBFQuieres eliminar esta direcci\xF3n?",
          error: "No se pudo eliminar la direcci\xF3n"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Nombre de pila",
        lastName: "Apellido",
        fullName: "Nombre completo",
        phoneNumber: "Nr tel\xE9fono.",
        errorMessage: "\xA1Tuvimos un problema al actualizar sus datos!",
        verifyMessage: "Su cuenta ha sido verificada exitosamente. ",
        verifyEmailMessage: "Su nueva direcci\xF3n de correo electr\xF3nico se ha verificado correctamente. ",
        signInTitle: "Iniciar sesi\xF3n en su cuenta",
        signUp: "Inscribirse",
        signIn: "Iniciar sesi\xF3n",
        signOut: "desconectar",
        create: "Crea una cuenta nueva",
        createError: "\xA1Tuvimos un problema al crear tu cuenta!",
        login: "inicie sesi\xF3n en su cuenta existente",
        myAccount: "Mi cuenta",
        welcomeBack: "Bienvenido de nuevo",
        details: "detalles de la cuenta",
        purchaseHistory: "Historial de compras",
        addresses: "Direcciones",
        register: "registre una nueva cuenta",
        email: "Correo electr\xF3nico",
        emailAddress: "Direcci\xF3n de correo electr\xF3nico",
        password: "Contrase\xF1a",
        repeatPassword: "Repita la contrase\xF1a",
        rememberMe: "Acu\xE9rdate de m\xED",
        forgotPassword: "\xBFOlvidaste tu contrase\xF1a?",
        errorSignIn: "\xA1Tuvimos un problema al iniciar sesi\xF3n!",
        createdMessage: "\xA1Su cuenta ha sido creada con \xE9xito! ",
        currentPassword: "Contrase\xF1a actual",
        newPassword: "Nueva contrase\xF1a",
        confirmPassword: "confirmar Contrase\xF1a",
        pwdSuccessHeading: "\xA1\xC9xito!",
        pwdSuccessMessage: "Su contrase\xF1a ha sido actualizada.",
        pwdErrorMessage: "Su contrase\xF1a ha sido actualizada.",
        savePassword: "Guardar contrase\xF1a",
        changePassword: "Cambiar la contrase\xF1a",
        changeEmailConfirmation: "pendiente de confirmaci\xF3n",
        changeEmailButton: "pendiente de confirmaci\xF3n",
        changeEmailModal: {
          title: "Cambiar direcci\xF3n de correo electr\xF3nico",
          heading: "Le enviaremos un correo electr\xF3nico de verificaci\xF3n a su nueva direcci\xF3n de correo electr\xF3nico.",
          currentEmail: "Su direcci\xF3n de correo electr\xF3nico actual: ",
          new: "Nueva direcci\xF3n de correo electr\xF3nico",
          errorMessage: "\xA1Tuvimos un problema al cambiar tu correo electr\xF3nico!"
        }
      },
      cart: {
        title: "Carro de la compra",
        empty: "Tu carrito esta vac\xEDo",
        shippingMessage: "El env\xEDo se calcular\xE1 al finalizar la compra.",
        checkout: "Verificar"
      },
      checkout: {
        dummyPayment: "Este es un pago ficticio \xFAnicamente con fines de demostraci\xF3n.",
        paymentErrorMessage: "Hubo un error al procesar el pago.",
        payWith: "Pagar con",
        deliveryMethod: "M\xE9todo de entrega",
        paymentProcessing: "Procesando...",
        paymentLoading: "Cargando opciones...",
        paymentMessage: "Nota: su pago a\xFAn se est\xE1 procesando. ",
        pay: "Pagar",
        progress: "Progreso",
        orderNotFound: "\xA1No se encontr\xF3 ning\xFAn pedido coincidente!",
        orderErrorTitle: "\xA1Ocurri\xF3 un error!",
        orderErrorMessage: "Lamentablemente su pago no pudo ser procesado o este enlace de confirmaci\xF3n ha caducado.",
        orderProcessing: "Por favor espere mientras procesamos su orden...",
        orderSuccessMessage: "\xA1Tu orden ha sido recibida!",
        braintreeError: "Error de Braintree:",
        stripeError: "Error de raya:",
        detailsTitle: "Informaci\xF3n del contacto",
        shippingTitle: "Informaci\xF3n de env\xEDo",
        goToPayment: "Proceder al pago",
        steps: {
          shipping: "Env\xEDo",
          payment: "Pago",
          confirmation: "Confirmaci\xF3n"
        }
      },
      order: {
        placedAt: "Fecha de colocaci\xF3n",
        totalSum: "Suma total",
        number: "N\xFAmero de orden",
        actions: "Comportamiento",
        actionsMessage: "Acciones para esta orden (No implementada)",
        expand: "Ampliar este pedido",
        notShipped: "No enviado a\xFAn",
        trackAlert: "Aqu\xED deber\xE1 vincular su servicio de entrega. ",
        trackPackage: "Paquete de seguimiento",
        detailedOverview: "Descripci\xF3n detallada",
        summary: "Resumen del pedido",
        shippingAndHandling: "Env\xEDo",
        totalWithoutTax: "Total antes de los impuestos:",
        estimatedTax: "Impuesto estimado:",
        appliedCoupons: "Cupones aplicados:",
        total: "Total:",
        grandTotal: "Gran total:",
        historyEmpty: "Tus futuros pedidos aparecer\xE1n aqu\xED",
        historyEnd: "No m\xE1s pedidos, final alcanzado",
        items: {
          fulfilled: "art\xEDculos cumplidos",
          subtotal: "Subtotal del art\xEDculo(s):"
        },
        states: {
          Draft: "Borrador",
          AddingItems: "Agregar elementos",
          ArrangingPayment: "En espera de pago",
          PaymentAuthorized: "Pago autorizado",
          PaymentSettled: "Pago liquidado",
          PartiallyShipped: "Parcialmente Enviado",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregado",
          Delivered: "Entregado",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "En espera de pago",
          Cancelled: "Cancelado",
          Unknown: "Desconocido"
        }
      },
      product: {
        showing: "Mostrando productos",
        to: "a",
        noResults: "\xA1No hay resultados!",
        filterTip: "Intente cambiar la configuraci\xF3n de su filtro.",
        inStock: "En stock",
        outOfStock: "Agotado",
        lowStock: "Stock bajo",
        notFound: "\xA1Producto no encontrado!",
        notFoundInfo: "\xA1No pudimos encontrar ning\xFAn producto en esa direcci\xF3n!",
        collections: "Colecciones",
        collectionNotFound: "Colecci\xF3n no encontrada",
        description: "Descripci\xF3n",
        selectOption: "Seleccionar opci\xF3n",
        inCart: "en el carrito",
        addToCart: "A\xF1adir a la cesta",
        addToFavorites: "Agregar a los favoritos",
        shippingAndReturns: "Env\xEDo",
        shippingInfo: "Env\xEDo est\xE1ndar: 3 - 5 d\xEDas laborables. ",
        shippingCostsInfo: "Los costos de env\xEDo dependen de la direcci\xF3n de entrega y se calcular\xE1n durante el pago.",
        returnsInfo: "Las devoluciones est\xE1n sujetas a t\xE9rminos. ",
        recentReviews: "Rese\xF1as recientes",
        recentRating: "de 5 estrellas"
      },
      footer: {
        title: "Pie de p\xE1gina",
        shop: "Comercio",
        support: "Apoyo",
        subscribeHeader: "Suscr\xEDbete a nuestro bolet\xEDn",
        subscribeIntro: "S\xE9 el primero en enterarte de ofertas exclusivas",
        emailPlaceholder: "Introduce tu correo electr\xF3nico",
        subscribe: "Suscribir"
      },
      navigation: {
        support: {
          help: "Ayuda",
          trackOrder: "Orden de pista",
          shipping: "Env\xEDo",
          returns: "Devoluciones"
        },
        company: {
          about: "Acerca de",
          blog: "Blog",
          responsibility: "Responsabilidad Corporativa",
          press: "Prensa"
        }
      },
      vendure: {
        title: "Iniciador de remezcla de Vendure",
        intro: "Un kit inicial de escaparate de comercio sin cabeza construido con",
        link: "Comercio sin cabeza a la velocidad del rayo con Vendure y Remix",
        demoCredentials: "Credenciales de demostraci\xF3n",
        exclusive: "Exclusivo: consigue el tuyo",
        repoLinkLabel: "Kit de inicio de tienda GRATIS",
        registrationMessage: "La instancia de demostraci\xF3n de Vendure no admite el registro de cuenta. ",
        registrationError: "\xA1El registro no se puede utilizar con la tienda de demostraci\xF3n Vendure! "
      }
    };
  }
});

// public/locales/pt.json
var require_pt = __commonJS({
  "public/locales/pt.json"(exports, module) {
    module.exports = {
      common: {
        or: "Ou",
        readMore: "Consulte Mais informa\xE7\xE3o:",
        tokenError: "O token de verifica\xE7\xE3o n\xE3o foi fornecido!",
        shopByCategory: "Compre por categoria",
        browseCategories: "Navegue por todas as categorias",
        resultsFor: "Resultados para",
        allResults: "Todos os resultados",
        defaultError: "Algo deu errado.",
        unknowError: "Ocorreu um erro desconhecido",
        save: "Salvar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "Sim",
        shipping: "Envio",
        billing: "Cobran\xE7a",
        default: "Padr\xE3o",
        remove: "Remover",
        quantity: "Quantidade",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Fechar painel",
        closeMenu: "Fechar menu",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Selecione...",
        home: "Lar",
        logoAlt: "Logotipo da venda",
        search: "Procurar",
        goHome: "Ir para casa"
      },
      address: {
        new: "Novo endere\xE7o",
        edit: "Editar Endere\xE7o",
        company: "Empresa",
        streetLine1: "Endere\xE7o",
        streetLine2: "Apartamento, su\xEDte, etc.",
        city: "Cidade",
        country: "Pa\xEDs",
        selectCountry: "Selecione um pais...",
        province: "Estado/Prov\xEDncia",
        postalCode: "C\xF3digo postal",
        phoneNumber: "Telefone",
        idError: "O par\xE2metro 'id' est\xE1 faltando",
        deleteModal: {
          title: "Remover endere\xE7o",
          confirmation: "Deseja remover este endere\xE7o?",
          error: "N\xE3o foi poss\xEDvel remover o endere\xE7o"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Primeiro nome",
        lastName: "Sobrenome",
        fullName: "Nome completo",
        phoneNumber: "N\xFAmero de telefone.",
        errorMessage: "Tivemos um problema ao atualizar seus dados!",
        verifyMessage: "Sua conta foi verificada com sucesso. ",
        verifyEmailMessage: "Seu novo endere\xE7o de e-mail foi verificado com sucesso. ",
        signInTitle: "Fa\xE7a login em sua conta",
        signUp: "Inscrever-se",
        signIn: "Entrar",
        signOut: "sair",
        create: "Criar uma nova conta",
        createError: "Tivemos um problema ao criar sua conta!",
        login: "fa\xE7a login em sua conta existente",
        myAccount: "Minha conta",
        welcomeBack: "bem vindo de volta",
        details: "Detalhes da conta",
        purchaseHistory: "Hist\xF3rico de compras",
        addresses: "Endere\xE7os",
        register: "registrar uma nova conta",
        email: "E-mail",
        emailAddress: "Endere\xE7o de email",
        password: "Senha",
        repeatPassword: "Repita a senha",
        rememberMe: "Lembre de mim",
        forgotPassword: "Esqueceu sua senha?",
        errorSignIn: "Tivemos um problema ao fazer seu login!",
        createdMessage: "Sua conta foi criada com sucesso! ",
        currentPassword: "Senha atual",
        newPassword: "Nova Senha",
        confirmPassword: "Confirme sua senha",
        pwdSuccessHeading: "Sucesso!",
        pwdSuccessMessage: "Sua senha foi atualizada.",
        pwdErrorMessage: "Sua senha foi atualizada.",
        savePassword: "Salvar senha",
        changePassword: "Alterar a senha",
        changeEmailConfirmation: "aguardando confirma\xE7\xE3o",
        changeEmailButton: "aguardando confirma\xE7\xE3o",
        changeEmailModal: {
          title: "Mude o endere\xE7o de email",
          heading: "Enviaremos um e-mail de verifica\xE7\xE3o para seu novo endere\xE7o de e-mail.",
          currentEmail: "Seu endere\xE7o de e-mail atual: ",
          new: "Novo Endere\xE7o de Email",
          errorMessage: "Tivemos um problema ao alterar seu e-mail!"
        }
      },
      cart: {
        title: "Carrinho de compras",
        empty: "Seu carrinho est\xE1 vazio",
        shippingMessage: "O frete ser\xE1 calculado na finaliza\xE7\xE3o da compra.",
        checkout: "Confira"
      },
      checkout: {
        dummyPayment: "Este \xE9 um pagamento fict\xEDcio apenas para fins de demonstra\xE7\xE3o",
        paymentErrorMessage: "Ocorreu um erro ao processar o pagamento",
        payWith: "Pagar com",
        deliveryMethod: "M\xE9todo de Entrega",
        paymentProcessing: "Em processamento...",
        paymentLoading: "Carregando op\xE7\xF5es...",
        paymentMessage: "Observa\xE7\xE3o: seu pagamento ainda est\xE1 sendo processado. ",
        pay: "Pagar",
        progress: "Progresso",
        orderNotFound: "Nenhum pedido correspondente encontrado!",
        orderErrorTitle: "Um erro ocorreu!",
        orderErrorMessage: "Infelizmente, seu pagamento n\xE3o p\xF4de ser processado ou este link de confirma\xE7\xE3o expirou.",
        orderProcessing: "Aguarde enquanto processamos seu pedido...",
        orderSuccessMessage: "Seu pedido foi recebido!",
        braintreeError: "Erro cerebral:",
        stripeError: "Erro de faixa:",
        detailsTitle: "Informa\xE7\xF5es de contato",
        shippingTitle: "Informa\xE7\xE3o de envio",
        goToPayment: "Prossiga para o pagamento",
        steps: {
          shipping: "Envio",
          payment: "Pagamento",
          confirmation: "Confirma\xE7\xE3o"
        }
      },
      order: {
        placedAt: "Data colocada",
        totalSum: "Soma total",
        number: "N\xFAmero do pedido",
        actions: "A\xE7\xF5es",
        actionsMessage: "A\xE7\xF5es para este pedido (n\xE3o implementadas)",
        expand: "Expandir este pedido",
        notShipped: "Ainda n\xE3o foi enviado",
        trackAlert: "Aqui voc\xEA precisa vincular seu servi\xE7o de entrega. ",
        trackPackage: "Rastrear pacote",
        detailedOverview: "Vis\xE3o geral detalhada",
        summary: "Resumo do pedido",
        shippingAndHandling: "Envio",
        totalWithoutTax: "Total antes de impostos:",
        estimatedTax: "Imposto estimado:",
        appliedCoupons: "Cupons aplicados:",
        total: "Total:",
        grandTotal: "Total geral:",
        historyEmpty: "Seus pedidos futuros aparecer\xE3o aqui",
        historyEnd: "N\xE3o h\xE1 mais pedidos, fim alcan\xE7ado",
        items: {
          fulfilled: "itens cumpridos",
          subtotal: "Subtotal de itens:"
        },
        states: {
          Draft: "Rascunho",
          AddingItems: "Adicionando itens",
          ArrangingPayment: "Aguardando pagamento",
          PaymentAuthorized: "Pagamento autorizado",
          PaymentSettled: "Pagamento liquidado",
          PartiallyShipped: "Enviado parcialmente",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregue",
          Delivered: "Entregue",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "Aguardando pagamento",
          Cancelled: "Cancelado",
          Unknown: "Desconhecido"
        }
      },
      product: {
        showing: "Mostrando produtos",
        to: "para",
        noResults: "Sem resultados!",
        filterTip: "Tente alterar as configura\xE7\xF5es do filtro.",
        inStock: "Em estoque",
        outOfStock: "Fora de estoque",
        lowStock: "Baixo estoque",
        notFound: "Produto n\xE3o encontrado!",
        notFoundInfo: "N\xE3o encontramos nenhum produto nesse endere\xE7o!",
        collections: "Cole\xE7\xF5es",
        collectionNotFound: "Cole\xE7\xE3o n\xE3o encontrada",
        description: "Descri\xE7\xE3o",
        selectOption: "Selecione a op\xE7\xE3o",
        inCart: "no carrinho",
        addToCart: "Adicionar ao carrinho",
        addToFavorites: "Adicionar aos favoritos",
        shippingAndReturns: "Envio",
        shippingInfo: "Envio padr\xE3o: 3 a 5 dias \xFAteis. ",
        shippingCostsInfo: "Os custos de envio dependem do endere\xE7o de entrega e ser\xE3o calculados durante a finaliza\xE7\xE3o da compra.",
        returnsInfo: "As devolu\xE7\xF5es est\xE3o sujeitas a termos. ",
        recentReviews: "Avalia\xE7\xF5es recentes",
        recentRating: "de 5 estrelas"
      },
      footer: {
        title: "Rodap\xE9",
        shop: "Comprar",
        support: "Apoiar",
        subscribeHeader: "Assine a nossa newsletter",
        subscribeIntro: "Seja o primeiro a saber sobre ofertas exclusivas",
        emailPlaceholder: "Digite seu e-mail",
        subscribe: "Se inscrever"
      },
      navigation: {
        support: {
          help: "Ajuda",
          trackOrder: "Acompanhar Pedido",
          shipping: "Envio",
          returns: "Devolu\xE7\xF5es"
        },
        company: {
          about: "Sobre",
          blog: "Blogue",
          responsibility: "Responsabilidade corporativa",
          press: "Imprensa"
        }
      },
      vendure: {
        title: "Vendure Remix inicial",
        intro: "Um kit inicial para vitrine de com\xE9rcio sem cabe\xE7a desenvolvido com",
        link: "Com\xE9rcio extremamente r\xE1pido e sem cabe\xE7a com venda e remix",
        demoCredentials: "Credenciais de demonstra\xE7\xE3o",
        exclusive: "Exclusivo: Adquira o seu",
        repoLinkLabel: "Kit inicial GRATUITO para vitrine",
        registrationMessage: "O registro da conta n\xE3o \xE9 compat\xEDvel com a inst\xE2ncia de demonstra\xE7\xE3o do Vendure. ",
        registrationError: "O registro n\xE3o pode ser usado na loja de demonstra\xE7\xE3o Vendure! "
      }
    };
  }
});

// public/locales/pt-BR.json
var require_pt_BR = __commonJS({
  "public/locales/pt-BR.json"(exports, module) {
    module.exports = {
      common: {
        or: "Ou",
        readMore: "Consulte Mais informa\xE7\xE3o:",
        tokenError: "O token de verifica\xE7\xE3o n\xE3o foi fornecido!",
        shopByCategory: "Compre por categoria",
        browseCategories: "Navegue por todas as categorias",
        resultsFor: "Resultados para",
        allResults: "Todos os resultados",
        defaultError: "Algo deu errado.",
        unknowError: "Ocorreu um erro desconhecido",
        save: "Salvar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "Sim",
        shipping: "Envio",
        billing: "Cobran\xE7a",
        default: "Padr\xE3o",
        remove: "Remover",
        quantity: "Quantidade",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Fechar painel",
        closeMenu: "Fechar menu",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Selecione...",
        home: "Lar",
        logoAlt: "Logotipo da venda",
        search: "Procurar",
        goHome: "Ir para casa"
      },
      address: {
        new: "Novo endere\xE7o",
        edit: "Editar Endere\xE7o",
        company: "Empresa",
        streetLine1: "Endere\xE7o",
        streetLine2: "Apartamento, su\xEDte, etc.",
        city: "Cidade",
        country: "Pa\xEDs",
        selectCountry: "Selecione um pais...",
        province: "Estado/Prov\xEDncia",
        postalCode: "C\xF3digo postal",
        phoneNumber: "Telefone",
        idError: "O par\xE2metro 'id' est\xE1 faltando",
        deleteModal: {
          title: "Remover endere\xE7o",
          confirmation: "Deseja remover este endere\xE7o?",
          error: "N\xE3o foi poss\xEDvel remover o endere\xE7o"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Primeiro nome",
        lastName: "Sobrenome",
        fullName: "Nome completo",
        phoneNumber: "N\xFAmero de telefone.",
        errorMessage: "Tivemos um problema ao atualizar seus dados!",
        verifyMessage: "Sua conta foi verificada com sucesso. ",
        verifyEmailMessage: "Seu novo endere\xE7o de e-mail foi verificado com sucesso. ",
        signInTitle: "Fa\xE7a login em sua conta",
        signUp: "Inscrever-se",
        signIn: "Entrar",
        signOut: "sair",
        create: "Criar uma nova conta",
        createError: "Tivemos um problema ao criar sua conta!",
        login: "fa\xE7a login em sua conta existente",
        myAccount: "Minha conta",
        welcomeBack: "bem vindo de volta",
        details: "Detalhes da conta",
        purchaseHistory: "Hist\xF3rico de compras",
        addresses: "Endere\xE7os",
        register: "registrar uma nova conta",
        email: "E-mail",
        emailAddress: "Endere\xE7o de email",
        password: "Senha",
        repeatPassword: "Repita a senha",
        rememberMe: "Lembre de mim",
        forgotPassword: "Esqueceu sua senha?",
        errorSignIn: "Tivemos um problema ao fazer seu login!",
        createdMessage: "Sua conta foi criada com sucesso! ",
        currentPassword: "Senha atual",
        newPassword: "Nova Senha",
        confirmPassword: "Confirme sua senha",
        pwdSuccessHeading: "Sucesso!",
        pwdSuccessMessage: "Sua senha foi atualizada.",
        pwdErrorMessage: "Sua senha foi atualizada.",
        savePassword: "Salvar senha",
        changePassword: "Alterar a senha",
        changeEmailConfirmation: "aguardando confirma\xE7\xE3o",
        changeEmailButton: "aguardando confirma\xE7\xE3o",
        changeEmailModal: {
          title: "Mude o endere\xE7o de email",
          heading: "Enviaremos um e-mail de verifica\xE7\xE3o para seu novo endere\xE7o de e-mail.",
          currentEmail: "Seu endere\xE7o de e-mail atual: ",
          new: "Novo Endere\xE7o de Email",
          errorMessage: "Tivemos um problema ao alterar seu e-mail!"
        }
      },
      cart: {
        title: "Carrinho de compras",
        empty: "Seu carrinho est\xE1 vazio",
        shippingMessage: "O frete ser\xE1 calculado na finaliza\xE7\xE3o da compra.",
        checkout: "Confira"
      },
      checkout: {
        dummyPayment: "Este \xE9 um pagamento fict\xEDcio apenas para fins de demonstra\xE7\xE3o",
        paymentErrorMessage: "Ocorreu um erro ao processar o pagamento",
        payWith: "Pagar com",
        deliveryMethod: "M\xE9todo de Entrega",
        paymentProcessing: "Em processamento...",
        paymentLoading: "Carregando op\xE7\xF5es...",
        paymentMessage: "Observa\xE7\xE3o: seu pagamento ainda est\xE1 sendo processado. ",
        pay: "Pagar",
        progress: "Progresso",
        orderNotFound: "Nenhum pedido correspondente encontrado!",
        orderErrorTitle: "Um erro ocorreu!",
        orderErrorMessage: "Infelizmente, seu pagamento n\xE3o p\xF4de ser processado ou este link de confirma\xE7\xE3o expirou.",
        orderProcessing: "Aguarde enquanto processamos seu pedido...",
        orderSuccessMessage: "Seu pedido foi recebido!",
        braintreeError: "Erro cerebral:",
        stripeError: "Erro de faixa:",
        detailsTitle: "Informa\xE7\xF5es de contato",
        shippingTitle: "Informa\xE7\xE3o de envio",
        goToPayment: "Prossiga para o pagamento",
        steps: {
          shipping: "Envio",
          payment: "Pagamento",
          confirmation: "Confirma\xE7\xE3o"
        }
      },
      order: {
        placedAt: "Data colocada",
        totalSum: "Soma total",
        number: "N\xFAmero do pedido",
        actions: "A\xE7\xF5es",
        actionsMessage: "A\xE7\xF5es para este pedido (n\xE3o implementadas)",
        expand: "Expandir este pedido",
        notShipped: "Ainda n\xE3o foi enviado",
        trackAlert: "Aqui voc\xEA precisa vincular seu servi\xE7o de entrega. ",
        trackPackage: "Rastrear pacote",
        detailedOverview: "Vis\xE3o geral detalhada",
        summary: "Resumo do pedido",
        shippingAndHandling: "Envio",
        totalWithoutTax: "Total antes de impostos:",
        estimatedTax: "Imposto estimado:",
        appliedCoupons: "Cupons aplicados:",
        total: "Total:",
        grandTotal: "Total geral:",
        historyEmpty: "Seus pedidos futuros aparecer\xE3o aqui",
        historyEnd: "N\xE3o h\xE1 mais pedidos, fim alcan\xE7ado",
        items: {
          fulfilled: "itens cumpridos",
          subtotal: "Subtotal de itens:"
        },
        states: {
          Draft: "Rascunho",
          AddingItems: "Adicionando itens",
          ArrangingPayment: "Aguardando pagamento",
          PaymentAuthorized: "Pagamento autorizado",
          PaymentSettled: "Pagamento liquidado",
          PartiallyShipped: "Enviado parcialmente",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregue",
          Delivered: "Entregue",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "Aguardando pagamento",
          Cancelled: "Cancelado",
          Unknown: "Desconhecido"
        }
      },
      product: {
        showing: "Mostrando produtos",
        to: "para",
        noResults: "Sem resultados!",
        filterTip: "Tente alterar as configura\xE7\xF5es do filtro.",
        inStock: "Em estoque",
        outOfStock: "Fora de estoque",
        lowStock: "Baixo estoque",
        notFound: "Produto n\xE3o encontrado!",
        notFoundInfo: "N\xE3o encontramos nenhum produto nesse endere\xE7o!",
        collections: "Cole\xE7\xF5es",
        collectionNotFound: "Cole\xE7\xE3o n\xE3o encontrada",
        description: "Descri\xE7\xE3o",
        selectOption: "Selecione a op\xE7\xE3o",
        inCart: "no carrinho",
        addToCart: "Adicionar ao carrinho",
        addToFavorites: "Adicionar aos favoritos",
        shippingAndReturns: "Envio",
        shippingInfo: "Envio padr\xE3o: 3 a 5 dias \xFAteis. ",
        shippingCostsInfo: "Os custos de envio dependem do endere\xE7o de entrega e ser\xE3o calculados durante a finaliza\xE7\xE3o da compra.",
        returnsInfo: "As devolu\xE7\xF5es est\xE3o sujeitas a termos. ",
        recentReviews: "Avalia\xE7\xF5es recentes",
        recentRating: "de 5 estrelas"
      },
      footer: {
        title: "Rodap\xE9",
        shop: "Comprar",
        support: "Apoiar",
        subscribeHeader: "Assine a nossa newsletter",
        subscribeIntro: "Seja o primeiro a saber sobre ofertas exclusivas",
        emailPlaceholder: "Digite seu e-mail",
        subscribe: "Se inscrever"
      },
      navigation: {
        support: {
          help: "Ajuda",
          trackOrder: "Acompanhar Pedido",
          shipping: "Envio",
          returns: "Devolu\xE7\xF5es"
        },
        company: {
          about: "Sobre",
          blog: "Blogue",
          responsibility: "Responsabilidade corporativa",
          press: "Imprensa"
        }
      },
      vendure: {
        title: "Vendure Remix inicial",
        intro: "Um kit inicial para vitrine de com\xE9rcio sem cabe\xE7a desenvolvido com",
        link: "Com\xE9rcio extremamente r\xE1pido e sem cabe\xE7a com venda e remix",
        demoCredentials: "Credenciais de demonstra\xE7\xE3o",
        exclusive: "Exclusivo: Adquira o seu",
        repoLinkLabel: "Kit inicial GRATUITO para vitrine",
        registrationMessage: "O registro da conta n\xE3o \xE9 compat\xEDvel com a inst\xE2ncia de demonstra\xE7\xE3o do Vendure. ",
        registrationError: "O registro n\xE3o pode ser usado na loja de demonstra\xE7\xE3o Vendure! "
      }
    };
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import ReactDOM from "react-dom/server";
import { createInstance as createInstance2 } from "i18next";

// node_modules/remix-i18next/browser/react.js
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useMatches } from "@remix-run/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function useChangeLanguage(locale) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

// node_modules/remix-i18next/browser/server.js
import { pick } from "accept-language-parser";
import { createInstance } from "i18next";

// node_modules/remix-i18next/browser/lib/get-client-locales.js
import { parseAcceptLanguage } from "intl-parse-accept-language";
function getClientLocales(requestOrHeaders) {
  let acceptLanguage = getHeaders(requestOrHeaders).get("Accept-Language");
  if (!acceptLanguage)
    return;
  let locales = parseAcceptLanguage(acceptLanguage, {
    validate: Intl.DateTimeFormat.supportedLocalesOf,
    ignoreWildcard: !0
  });
  if (locales.length !== 0)
    return locales.length === 1 ? locales[0] : locales;
}
function getHeaders(requestOrHeaders) {
  return requestOrHeaders instanceof Request ? requestOrHeaders.headers : requestOrHeaders;
}

// node_modules/remix-i18next/browser/server.js
var DEFAULT_NS = "translation", RemixI18Next = class {
  constructor(options) {
    this.options = options, this.detector = new LanguageDetector(this.options.detection);
  }
  /**
   * Detect the current locale by following the order defined in the
   * `detection.order` option.
   * By default the order is
   * - searchParams
   * - cookie
   * - session
   * - header
   * And finally the fallback language.
   */
  async getLocale(request) {
    return this.detector.detect(request);
  }
  /**
   * Get the namespaces required by the routes which are going to be rendered
   * when doing SSR.
   *
   * @param context The EntryContext object received by `handleRequest` in entry.server
   *
   * @example
   * await instance.init({
   *   ns: i18n.getRouteNamespaces(context),
   *   // ...more options
   * });
   */
  getRouteNamespaces(context) {
    let namespaces = Object.values(context.routeModules).filter((route) => {
      var _a;
      return ((_a = route.handle) === null || _a === void 0 ? void 0 : _a.i18n) !== void 0;
    }).flatMap((route) => {
      let i18n = route.handle.i18n;
      return typeof i18n == "string" ? i18n : Array.isArray(i18n) ? i18n.every((ns) => typeof ns == "string") ? i18n : [] : [];
    });
    return [...new Set(namespaces)];
  }
  async getFixedT(requestOrLocale, namespaces, options = {}) {
    var _a;
    let parsedNamespaces = namespaces ?? DEFAULT_NS;
    (!namespaces || namespaces.length === 0) && (parsedNamespaces = ((_a = this.options.i18next) === null || _a === void 0 ? void 0 : _a.defaultNS) || "translation");
    let [instance, locale] = await Promise.all([
      this.createInstance({
        ...this.options.i18next,
        ...options,
        fallbackNS: parsedNamespaces,
        defaultNS: typeof parsedNamespaces == "string" ? parsedNamespaces : parsedNamespaces[0]
      }),
      typeof requestOrLocale == "string" ? requestOrLocale : this.getLocale(requestOrLocale)
    ]);
    return await instance.changeLanguage(locale), await instance.loadNamespaces(parsedNamespaces), instance.getFixedT(locale, parsedNamespaces);
  }
  async createInstance(options = {}) {
    let instance = createInstance(), plugins = [
      ...this.options.backend ? [this.options.backend] : [],
      ...this.options.plugins || []
    ];
    for (let plugin of plugins)
      instance.use(plugin);
    return await instance.init(options), instance;
  }
}, LanguageDetector = class {
  constructor(options) {
    this.options = options, this.isSessionOnly(options), this.isCookieOnly(options);
  }
  isSessionOnly(options) {
    var _a;
    if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "session" && !options.sessionStorage)
      throw new Error("You need a sessionStorage if you want to only get the locale from the session");
  }
  isCookieOnly(options) {
    var _a;
    if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "cookie" && !options.cookie)
      throw new Error("You need a cookie if you want to only get the locale from the cookie");
  }
  async detect(request) {
    var _a;
    let order = (_a = this.options.order) !== null && _a !== void 0 ? _a : [
      "searchParams",
      "cookie",
      "session",
      "header"
    ];
    for (let method of order) {
      let locale = null;
      if (method === "searchParams" && (locale = await this.fromSearchParams(request)), method === "cookie" && (locale = await this.fromCookie(request)), method === "session" && (locale = await this.fromSessionStorage(request)), method === "header" && (locale = await this.fromHeader(request)), locale)
        return locale;
    }
    return this.options.fallbackLanguage;
  }
  async fromSearchParams(request) {
    var _a, _b;
    let url = new URL(request.url);
    return url.searchParams.has((_a = this.options.searchParamKey) !== null && _a !== void 0 ? _a : "lng") ? this.fromSupported(url.searchParams.get((_b = this.options.searchParamKey) !== null && _b !== void 0 ? _b : "lng")) : null;
  }
  async fromCookie(request) {
    var _a;
    if (!this.options.cookie)
      return null;
    let lng = (_a = await this.options.cookie.parse(request.headers.get("Cookie"))) !== null && _a !== void 0 ? _a : "";
    return lng ? this.fromSupported(lng) : null;
  }
  async fromSessionStorage(request) {
    var _a;
    if (!this.options.sessionStorage)
      return null;
    let lng = (await this.options.sessionStorage.getSession(request.headers.get("Cookie"))).get((_a = this.options.sessionKey) !== null && _a !== void 0 ? _a : "lng");
    return lng ? this.fromSupported(lng) : null;
  }
  async fromHeader(request) {
    let locales = getClientLocales(request);
    return locales ? Array.isArray(locales) ? this.fromSupported(locales.join(",")) : this.fromSupported(locales) : null;
  }
  fromSupported(language) {
    return pick(this.options.supportedLanguages, language ?? this.options.fallbackLanguage, { loose: !1 }) || pick(this.options.supportedLanguages, language ?? this.options.fallbackLanguage, { loose: !0 });
  }
};

// app/i18n.ts
var i18n_default = {
  supportedLngs: ["en", "es", "pt", "pt-BR"],
  fallbackLng: "en",
  // Disabling suspense is recommended
  react: { useSuspense: !1 },
  backend: {
    loadPath: "../public/locales/{{lng}}/{{ns}}.json"
  }
};

// app/i18next.server.ts
import HttpBackend from "i18next-http-backend";

// app/utils/platform-adapter.ts
var IS_CF_PAGES = typeof process > "u";
async function safeRequireNodeDependency(module) {
  return import(module.split("").join(""));
}

// app/i18next.server.ts
import resourcesToBackend from "i18next-resources-to-backend";

// app/languages.server.ts
var languagesServer = {
  en: () => Promise.resolve().then(() => __toESM(require_en(), 1)),
  es: () => Promise.resolve().then(() => __toESM(require_es(), 1)),
  pt: () => Promise.resolve().then(() => __toESM(require_pt(), 1)),
  "pt-BR": () => Promise.resolve().then(() => __toESM(require_pt_BR(), 1))
};
function findLanguageJSON(language, namespace) {
  let lngNs = `${language}-${namespace}`, importFn = lngNs in languagesServer ? languagesServer[lngNs] : languagesServer[language];
  return importFn ? importFn() : Promise.reject();
}

// app/i18next.server.ts
async function getPlatformBackend() {
  return IS_CF_PAGES ? HttpBackend : await safeRequireNodeDependency("i18next-fs-backend").then(
    (module) => module.default
  );
}
async function getPlatformBackendApiCtx() {
  return IS_CF_PAGES ? resourcesToBackend(findLanguageJSON) : getPlatformBackend();
}
async function platformAdapti18nConfig(config) {
  let backend = await getPlatformBackendApiCtx();
  return Array.isArray(config.plugins) ? config.plugins = [...config.plugins, backend] : config.plugins = [backend], config;
}
async function getI18NextServer() {
  return platformAdapti18nConfig({
    detection: {
      supportedLanguages: i18n_default.supportedLngs,
      fallbackLanguage: i18n_default.fallbackLng
    },
    // This is the configuration for i18next used
    // when translating messages server-side only
    i18next: {
      ...i18n_default
    },
    // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
    // E.g. The Backend plugin for loading translations from the file system
    // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
    plugins: []
  }).then((config) => new RemixI18Next(config));
}
async function getFixedT(request) {
  return getI18NextServer().then((i18next) => i18next.getFixedT(request));
}

// app/entry.server.tsx
import { I18nextProvider, initReactI18next } from "react-i18next";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
async function handleCfRequest(request, responseStatusCode, responseHeaders, remixContext, jsx) {
  let body = await ReactDOM.renderToReadableStream(jsx, {
    signal: request.signal,
    onError(error) {
      console.error(error), responseStatusCode = 500;
    }
  });
  return isbot(request.headers.get("user-agent")) && await body.allReady, responseHeaders.set("Content-Type", "text/html"), new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
async function handleNodeRequest(request, responseStatusCode, responseHeaders, remixContext, jsx) {
  let callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = ReactDOM.renderToPipeableStream(jsx, {
      [callbackName]: async () => {
        let { PassThrough } = await safeRequireNodeDependency("node:stream"), { createReadableStreamFromReadable } = await safeRequireNodeDependency("@remix-run/node"), body = new PassThrough(), stream = createReadableStreamFromReadable(body);
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new Response(stream, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let instance = createInstance2(), lng = await getI18NextServer().then(
    (i18next) => i18next.getLocale(request)
  );
  await instance.use(initReactI18next).use(await getPlatformBackend()).init({
    ...i18n_default,
    lng
  });
  let jsx = /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
  return (IS_CF_PAGES ? handleCfRequest : handleNodeRequest)(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
    jsx
  );
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  shouldRevalidate: () => shouldRevalidate
});
import {
  isRouteErrorResponse,
  Link as Link5,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData as useLoaderData2,
  useRouteError
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DSGOW3AB.css";

// app/components/header/Header.tsx
import { Link } from "@remix-run/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

// app/components/header/SearchBar.tsx
import { Form } from "@remix-run/react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function SearchBar() {
  let { t } = useTranslation2(), initialQuery = "";
  return typeof window > "u" || (initialQuery = new URL(window.location.href).searchParams.get("q") ?? ""), /* @__PURE__ */ jsxDEV2(Form, { method: "get", action: "/search", children: /* @__PURE__ */ jsxDEV2(
    "input",
    {
      type: "search",
      name: "q",
      defaultValue: initialQuery,
      placeholder: t("common.search"),
      className: "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
    },
    void 0,
    !1,
    {
      fileName: "app/components/header/SearchBar.tsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, initialQuery, !1, {
    fileName: "app/components/header/SearchBar.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/utils/use-root-loader.ts
import { useMatches as useMatches2 } from "@remix-run/react";
function useRootLoader() {
  return useMatches2().find((match) => match.id === "root").data;
}

// app/components/header/Header.tsx
import { UserIcon } from "@heroicons/react/24/solid";

// app/utils/use-scrolling-up.ts
import { useEffect as useEffect2, useState } from "react";
var useScrollingUp = () => {
  let prevScroll;
  typeof window < "u" && (prevScroll = window.pageYOffset);
  let [scrollingUp, setScrollingUp] = useState(!1), handleScroll = () => {
    let currScroll = window.pageYOffset, isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled), prevScroll = currScroll;
  };
  return useEffect2(() => (window.addEventListener("scroll", handleScroll, { passive: !0 }), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), scrollingUp;
};

// app/utils/class-names.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/components/header/Header.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Header({
  onCartIconClick,
  cartQuantity
}) {
  let data = useRootLoader(), isSignedIn = !!data.activeCustomer.activeCustomer?.id, isScrollingUp = useScrollingUp(), { t } = useTranslation3();
  return /* @__PURE__ */ jsxDEV3(
    "header",
    {
      className: classNames(
        isScrollingUp ? "sticky top-0 z-10 animate-dropIn" : "",
        "bg-gradient-to-r from-zinc-700 to-gray-900 shadow-lg transform shadow-xl"
      ),
      children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "bg-zinc-100 text-gray-600 shadow-inner text-center text-sm py-2 px-2 xl:px-0", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-6xl mx-2 md:mx-auto flex items-center justify-between", children: /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: isSignedIn ? "/account" : "/sign-in",
            className: "flex space-x-1",
            children: [
              /* @__PURE__ */ jsxDEV3(UserIcon, { className: "w-4 h-4" }, void 0, !1, {
                fileName: "app/components/header/Header.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("span", { children: t(isSignedIn ? "account.myAccount" : "account.signIn") }, void 0, !1, {
                fileName: "app/components/header/Header.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 44,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "max-w-6xl mx-auto p-4 flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV3("h1", { className: "text-white w-10", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", children: /* @__PURE__ */ jsxDEV3(
            "img",
            {
              src: "/cube-logo-small.webp",
              width: 40,
              height: 31,
              alt: t("commmon.logoAlt")
            },
            void 0,
            !1,
            {
              fileName: "app/components/header/Header.tsx",
              lineNumber: 59,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex space-x-4 hidden sm:block", children: data.collections.map((collection) => /* @__PURE__ */ jsxDEV3(
            Link,
            {
              className: "text-sm md:text-base text-gray-200 hover:text-white",
              to: "/collections/" + collection.slug,
              prefetch: "intent",
              children: collection.name
            },
            collection.id,
            !1,
            {
              fileName: "app/components/header/Header.tsx",
              lineNumber: 69,
              columnNumber: 13
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 md:pr-8", children: /* @__PURE__ */ jsxDEV3(SearchBar, {}, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "", children: /* @__PURE__ */ jsxDEV3(
            "button",
            {
              className: "relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1",
              onClick: onCartIconClick,
              "aria-label": "Open cart tray",
              children: [
                /* @__PURE__ */ jsxDEV3(ShoppingBagIcon, {}, void 0, !1, {
                  fileName: "app/components/header/Header.tsx",
                  lineNumber: 88,
                  columnNumber: 13
                }, this),
                cartQuantity ? /* @__PURE__ */ jsxDEV3("div", { className: "absolute rounded-full -top-2 -right-2 bg-primary-600 min-w-6 min-h-6 flex items-center justify-center text-xs p-1", children: cartQuantity }, void 0, !1, {
                  fileName: "app/components/header/Header.tsx",
                  lineNumber: 90,
                  columnNumber: 15
                }, this) : ""
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/header/Header.tsx",
              lineNumber: 83,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  );
}

// app/root.tsx
import {
  json
} from "@remix-run/server-runtime";

// app/providers/collections/collections.ts
import gql2 from "graphql-tag";

// app/graphqlWrapper.ts
import { print } from "graphql";

// app/constants.ts
var APP_META_TITLE = "Vendure Remix Storefront", APP_META_DESCRIPTION = "A headless commerce storefront starter kit built with Remix & Vendure", DEMO_API_URL = "http://localhost:3000/shop-api", API_URL = typeof process < "u" ? process.env.VENDURE_API_URL ?? DEMO_API_URL : DEMO_API_URL;

// app/generated/graphql.ts
import gql from "graphql-tag";
var ErrorResultFragmentDoc = gql`
    fragment ErrorResult on ErrorResult {
  errorCode
  message
}
    `, OrderDetailFragmentDoc = gql`
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
    `, DetailedProductFragmentDoc = gql`
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
    `, ListedProductFragmentDoc = gql`
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
    `, LoginDocument = gql`
    mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
  login(username: $email, password: $password, rememberMe: $rememberMe) {
    __typename
    ... on CurrentUser {
      id
      __typename
      channels {
        token
        permissions
        code
        id
        __typename
      }
    }
    ...ErrorResult
    __typename
  }
}
    ${ErrorResultFragmentDoc}`, LogoutDocument = gql`
    mutation logout {
  logout {
    success
  }
}
    `, RegisterCustomerAccountDocument = gql`
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
    `, VerifyCustomerAccountDocument = gql`
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
    `, UpdateCustomerDocument = gql`
    mutation updateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    __typename
  }
}
    `, RequestUpdateCustomerEmailAddressDocument = gql`
    mutation requestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
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
    `, UpdateCustomerEmailAddressDocument = gql`
    mutation updateCustomerEmailAddress($token: String!) {
  updateCustomerEmailAddress(token: $token) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, UpdateCustomerAddressDocument = gql`
    mutation updateCustomerAddress($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
    __typename
  }
}
    `, CreateCustomerAddressDocument = gql`
    mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    __typename
  }
}
    `, DeleteCustomerAddressDocument = gql`
    mutation deleteCustomerAddress($id: ID!) {
  deleteCustomerAddress(id: $id) {
    success
  }
}
    `, UpdateCustomerPasswordDocument = gql`
    mutation updateCustomerPassword($currentPassword: String!, $newPassword: String!) {
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
    `, ActiveChannelDocument = gql`
    query activeChannel {
  activeChannel {
    id
    currencyCode
  }
}
    `, EligibleShippingMethodsDocument = gql`
    query eligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    description
    metadata
    price
    priceWithTax
  }
}
    `, EligiblePaymentMethodsDocument = gql`
    query eligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    code
    name
    description
    eligibilityMessage
    isEligible
  }
}
    `, NextOrderStatesDocument = gql`
    query nextOrderStates {
  nextOrderStates
}
    `, AvailableCountriesDocument = gql`
    query availableCountries {
  availableCountries {
    id
    name
    code
  }
}
    `, AddPaymentToOrderDocument = gql`
    mutation addPaymentToOrder($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, TransitionOrderToStateDocument = gql`
    mutation transitionOrderToState($state: String!) {
  transitionOrderToState(state: $state) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, CreateStripePaymentIntentDocument = gql`
    mutation createStripePaymentIntent {
  createStripePaymentIntent
}
    `, GenerateBraintreeClientTokenDocument = gql`
    query generateBraintreeClientToken {
  generateBraintreeClientToken
}
    `, CollectionsDocument = gql`
    query collections($options: CollectionListOptions) {
  collections(options: $options) {
    items {
      id
      name
      slug
      parent {
        name
      }
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `, CollectionDocument = gql`
    query collection($slug: String, $id: ID) {
  collection(slug: $slug, id: $id) {
    id
    name
    slug
    breadcrumbs {
      id
      name
      slug
    }
    children {
      id
      name
      slug
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `, ActiveCustomerDocument = gql`
    query activeCustomer {
  activeCustomer {
    id
    firstName
    lastName
  }
}
    `, ActiveCustomerDetailsDocument = gql`
    query activeCustomerDetails {
  activeCustomer {
    id
    title
    firstName
    lastName
    phoneNumber
    emailAddress
  }
}
    `, ActiveCustomerAddressesDocument = gql`
    query activeCustomerAddresses {
  activeCustomer {
    id
    addresses {
      id
      company
      fullName
      streetLine1
      streetLine2
      city
      province
      postalCode
      country {
        id
        code
        name
      }
      phoneNumber
      defaultShippingAddress
      defaultBillingAddress
    }
  }
}
    `, ActiveCustomerOrderListDocument = gql`
    query activeCustomerOrderList($orderListOptions: OrderListOptions) {
  activeCustomer {
    orders(options: $orderListOptions) {
      totalItems
      items {
        code
        state
        orderPlacedAt
        currencyCode
        subTotal
        subTotalWithTax
        total
        totalWithTax
        shippingWithTax
        shippingLines {
          priceWithTax
        }
        taxSummary {
          taxBase
          taxTotal
        }
        discounts {
          amountWithTax
        }
        fulfillments {
          trackingCode
        }
        lines {
          quantity
          discountedLinePriceWithTax
          discountedUnitPriceWithTax
          fulfillmentLines {
            quantity
            fulfillment {
              state
              updatedAt
            }
          }
          featuredAsset {
            name
            source
            preview
          }
          productVariant {
            name
            sku
            currencyCode
            priceWithTax
            product {
              slug
            }
          }
        }
      }
    }
  }
}
    `, SetCustomerForOrderDocument = gql`
    mutation setCustomerForOrder($input: CreateCustomerInput!) {
  setCustomerForOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, SetOrderShippingAddressDocument = gql`
    mutation setOrderShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, SetOrderShippingMethodDocument = gql`
    mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, AddItemToOrderDocument = gql`
    mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, RemoveOrderLineDocument = gql`
    mutation removeOrderLine($orderLineId: ID!) {
  removeOrderLine(orderLineId: $orderLineId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, AdjustOrderLineDocument = gql`
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
  adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, ActiveOrderDocument = gql`
    query activeOrder {
  activeOrder {
    ...OrderDetail
  }
}
    ${OrderDetailFragmentDoc}`, OrderByCodeDocument = gql`
    query orderByCode($code: String!) {
  orderByCode(code: $code) {
    ...OrderDetail
  }
}
    ${OrderDetailFragmentDoc}`, GetCouponCodeListDocument = gql`
    query GetCouponCodeList {
  getCouponCodeList {
    items {
      id
      name
      couponCode
      description
      enabled
      endsAt
      startsAt
      conditions {
        code
        args {
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
    `, ApplyCouponCodeDocument = gql`
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
    `, RemoveCouponCodeDocument = gql`
    mutation RemoveCouponCode($couponCode: String!) {
  removeCouponCode(couponCode: $couponCode) {
    __typename
  }
}
    `, ProductDocument = gql`
    query product($slug: String, $id: ID) {
  product(slug: $slug, id: $id) {
    ...DetailedProduct
  }
}
    ${DetailedProductFragmentDoc}`, SearchDocument = gql`
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
    ${ListedProductFragmentDoc}`, SearchFacetValuesDocument = gql`
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
    `;
function getSdk(requester2) {
  return {
    login(variables, options) {
      return requester2(LoginDocument, variables, options);
    },
    logout(variables, options) {
      return requester2(LogoutDocument, variables, options);
    },
    registerCustomerAccount(variables, options) {
      return requester2(RegisterCustomerAccountDocument, variables, options);
    },
    verifyCustomerAccount(variables, options) {
      return requester2(VerifyCustomerAccountDocument, variables, options);
    },
    updateCustomer(variables, options) {
      return requester2(UpdateCustomerDocument, variables, options);
    },
    requestUpdateCustomerEmailAddress(variables, options) {
      return requester2(RequestUpdateCustomerEmailAddressDocument, variables, options);
    },
    updateCustomerEmailAddress(variables, options) {
      return requester2(UpdateCustomerEmailAddressDocument, variables, options);
    },
    updateCustomerAddress(variables, options) {
      return requester2(UpdateCustomerAddressDocument, variables, options);
    },
    createCustomerAddress(variables, options) {
      return requester2(CreateCustomerAddressDocument, variables, options);
    },
    deleteCustomerAddress(variables, options) {
      return requester2(DeleteCustomerAddressDocument, variables, options);
    },
    updateCustomerPassword(variables, options) {
      return requester2(UpdateCustomerPasswordDocument, variables, options);
    },
    activeChannel(variables, options) {
      return requester2(ActiveChannelDocument, variables, options);
    },
    eligibleShippingMethods(variables, options) {
      return requester2(EligibleShippingMethodsDocument, variables, options);
    },
    eligiblePaymentMethods(variables, options) {
      return requester2(EligiblePaymentMethodsDocument, variables, options);
    },
    nextOrderStates(variables, options) {
      return requester2(NextOrderStatesDocument, variables, options);
    },
    availableCountries(variables, options) {
      return requester2(AvailableCountriesDocument, variables, options);
    },
    addPaymentToOrder(variables, options) {
      return requester2(AddPaymentToOrderDocument, variables, options);
    },
    transitionOrderToState(variables, options) {
      return requester2(TransitionOrderToStateDocument, variables, options);
    },
    createStripePaymentIntent(variables, options) {
      return requester2(CreateStripePaymentIntentDocument, variables, options);
    },
    generateBraintreeClientToken(variables, options) {
      return requester2(GenerateBraintreeClientTokenDocument, variables, options);
    },
    collections(variables, options) {
      return requester2(CollectionsDocument, variables, options);
    },
    collection(variables, options) {
      return requester2(CollectionDocument, variables, options);
    },
    activeCustomer(variables, options) {
      return requester2(ActiveCustomerDocument, variables, options);
    },
    activeCustomerDetails(variables, options) {
      return requester2(ActiveCustomerDetailsDocument, variables, options);
    },
    activeCustomerAddresses(variables, options) {
      return requester2(ActiveCustomerAddressesDocument, variables, options);
    },
    activeCustomerOrderList(variables, options) {
      return requester2(ActiveCustomerOrderListDocument, variables, options);
    },
    setCustomerForOrder(variables, options) {
      return requester2(SetCustomerForOrderDocument, variables, options);
    },
    setOrderShippingAddress(variables, options) {
      return requester2(SetOrderShippingAddressDocument, variables, options);
    },
    setOrderShippingMethod(variables, options) {
      return requester2(SetOrderShippingMethodDocument, variables, options);
    },
    addItemToOrder(variables, options) {
      return requester2(AddItemToOrderDocument, variables, options);
    },
    removeOrderLine(variables, options) {
      return requester2(RemoveOrderLineDocument, variables, options);
    },
    adjustOrderLine(variables, options) {
      return requester2(AdjustOrderLineDocument, variables, options);
    },
    activeOrder(variables, options) {
      return requester2(ActiveOrderDocument, variables, options);
    },
    orderByCode(variables, options) {
      return requester2(OrderByCodeDocument, variables, options);
    },
    GetCouponCodeList(variables, options) {
      return requester2(GetCouponCodeListDocument, variables, options);
    },
    ApplyCouponCode(variables, options) {
      return requester2(ApplyCouponCodeDocument, variables, options);
    },
    RemoveCouponCode(variables, options) {
      return requester2(RemoveCouponCodeDocument, variables, options);
    },
    product(variables, options) {
      return requester2(ProductDocument, variables, options);
    },
    search(variables, options) {
      return requester2(SearchDocument, variables, options);
    },
    searchFacetValues(variables, options) {
      return requester2(SearchFacetValuesDocument, variables, options);
    }
  };
}

// app/sessions.ts
import { createCookieSessionStorage } from "@remix-run/cloudflare";
async function getCookieSessionStorageFactory() {
  return IS_CF_PAGES ? createCookieSessionStorage : safeRequireNodeDependency("@remix-run/node").then(
    (module) => module.createCookieSessionStorage
  );
}
var sessionStorage;
async function getSessionStorage() {
  return sessionStorage || (sessionStorage = (await getCookieSessionStorageFactory())({
    cookie: {
      name: "vendure_remix_session",
      httpOnly: !0,
      path: "/",
      sameSite: "lax",
      secrets: ["awdbhbjahdbaw"]
    }
  }), sessionStorage);
}

// app/graphqlWrapper.ts
var AUTH_TOKEN_SESSION_KEY = "authToken";
async function sendQuery(options) {
  let headers = new Headers(options.headers);
  headers.set("vendure-token", "ind-coimbatore");
  let req = options.request;
  headers.append("Content-Type", "application/json");
  let session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(options.request?.headers.get("Cookie"))
  );
  if (session) {
    let token = session.get(AUTH_TOKEN_SESSION_KEY);
    token && headers.append("Authorization", `Bearer ${token}`);
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
var baseSdk = getSdk(requester), sdk = baseSdk;
function requester(doc, vars, options) {
  return sendQuery({
    query: print(doc),
    variables: vars,
    ...options
  }).then(async (response) => {
    let token = response.headers.get("vendure-auth-token"), headers = {};
    if (token) {
      let sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(
        options?.request?.headers.get("Cookie")
      );
      session && (session.set(AUTH_TOKEN_SESSION_KEY, token), headers["Set-Cookie"] = await sessionStorage2.commitSession(session));
    }
    if (headers["x-vendure-api-url"] = API_URL, response.errors)
      throw console.log(
        response.errors[0].extensions?.exception?.stacktrace.join(`
`) ?? response.errors
      ), new Error(JSON.stringify(response.errors[0]));
    return { ...response.data, _headers: new Headers(headers) };
  });
}

// app/providers/collections/collections.ts
function getCollections(request, options) {
  return sdk.collections({ options }, { request }).then((result) => result.collections?.items);
}
gql2`
  query collections($options: CollectionListOptions) {
    collections(options: $options) {
      items {
        id
        name
        slug
        parent {
          name
        }
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;
gql2`
  query collection($slug: String, $id: ID) {
    collection(slug: $slug, id: $id) {
      id
      name
      slug
      breadcrumbs {
        id
        name
        slug
      }
      children {
        id
        name
        slug
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;

// app/providers/channel/channel.ts
import gql3 from "graphql-tag";
function activeChannel(options) {
  return sdk.activeChannel(void 0, options).then(({ activeChannel: activeChannel2 }) => activeChannel2.id == "5" ? activeChannel2 : null);
}
gql3`
  query activeChannel {
    activeChannel {
      id
      currencyCode
    }
  }
`;

// app/root.tsx
import { useEffect as useEffect4, useState as useState2 } from "react";

// app/components/cart/CartTray.tsx
import { Fragment as Fragment2 } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// app/components/cart/CartContents.tsx
import { Form as Form2, Link as Link2 } from "@remix-run/react";

// app/components/products/Price.tsx
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Price({
  priceWithTax,
  currencyCode
}) {
  return priceWithTax == null || !currencyCode ? /* @__PURE__ */ jsxDEV4(Fragment, {}, void 0, !1, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this) : typeof priceWithTax == "number" ? /* @__PURE__ */ jsxDEV4(Fragment, { children: formatPrice(priceWithTax, currencyCode) }, void 0, !1, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 15,
    columnNumber: 12
  }, this) : "value" in priceWithTax ? /* @__PURE__ */ jsxDEV4(Fragment, { children: formatPrice(priceWithTax.value, currencyCode) }, void 0, !1, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this) : priceWithTax.min === priceWithTax.max ? /* @__PURE__ */ jsxDEV4(Fragment, { children: formatPrice(priceWithTax.min, currencyCode) }, void 0, !1, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 21,
    columnNumber: 12
  }, this) : /* @__PURE__ */ jsxDEV4(Fragment, { children: [
    formatPrice(priceWithTax.min, currencyCode),
    " -",
    " ",
    formatPrice(priceWithTax.max, currencyCode)
  ] }, void 0, !0, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function formatPrice(value, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(value / 100);
}

// app/components/cart/CartContents.tsx
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CartContents({
  orderLines,
  currencyCode,
  editable = !0,
  adjustOrderLine: adjustOrderLine2,
  removeItem
}) {
  let { t } = useTranslation4(), isEditable = editable !== !1;
  return /* @__PURE__ */ jsxDEV5("div", { className: "flow-root", children: /* @__PURE__ */ jsxDEV5("ul", { role: "list", className: "-my-6 divide-y divide-gray-200", children: (orderLines ?? []).map((line) => /* @__PURE__ */ jsxDEV5("li", { className: "py-6 flex", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ jsxDEV5(
      "img",
      {
        src: line.featuredAsset?.preview + "?preset=thumb",
        alt: line.productVariant.name,
        className: "w-full h-full object-center object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 28,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/cart/CartContents.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "ml-4 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
        /* @__PURE__ */ jsxDEV5("h3", { children: /* @__PURE__ */ jsxDEV5(Link2, { to: `/products/${line.productVariant.product.slug}`, children: line.productVariant.name }, void 0, !1, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 38,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "ml-4", children: /* @__PURE__ */ jsxDEV5(
          Price,
          {
            priceWithTax: line.linePriceWithTax,
            currencyCode
          },
          void 0,
          !1,
          {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 44,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex-1 flex items-center text-sm", children: [
        editable ? /* @__PURE__ */ jsxDEV5(Form2, { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: `quantity-${line.id}`, className: "mr-2", children: t("common.quantity") }, void 0, !1, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 54,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "select",
            {
              disabled: !isEditable,
              id: `quantity-${line.id}`,
              name: `quantity-${line.id}`,
              value: line.quantity,
              onChange: (e) => adjustOrderLine2 && adjustOrderLine2(line.id, +e.target.value),
              className: "max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
              children: [
                /* @__PURE__ */ jsxDEV5("option", { value: 1, children: "1" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 68,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 2, children: "2" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 69,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 3, children: "3" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 70,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 4, children: "4" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 71,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 5, children: "5" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 72,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 6, children: "6" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 73,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 7, children: "7" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 74,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5("option", { value: 8, children: "8" }, void 0, !1, {
                  fileName: "app/components/cart/CartContents.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 57,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 53,
          columnNumber: 19
        }, this) : /* @__PURE__ */ jsxDEV5("div", { className: "text-gray-800", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "mr-1", children: t("common.quantity") }, void 0, !1, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "font-medium", children: line.quantity }, void 0, !1, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 81,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 79,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: isEditable && /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "submit",
            name: "removeItem",
            value: line.id,
            className: "font-medium text-primary-600 hover:text-primary-500",
            onClick: () => removeItem && removeItem(line.id),
            children: t("common.remove")
          },
          void 0,
          !1,
          {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 87,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cart/CartContents.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, line.id, !0, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/components/cart/CartTray.tsx
import { Link as Link3, useLocation } from "@remix-run/react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function CartTray({
  open,
  onClose,
  activeOrder,
  adjustOrderLine: adjustOrderLine2,
  removeItem
}) {
  let currencyCode = activeOrder?.currencyCode || "USD" /* Usd */, editable = !useLocation().pathname.startsWith("/checkout"), { t } = useTranslation5();
  return /* @__PURE__ */ jsxDEV6(Transition.Root, { show: open, as: Fragment2, children: /* @__PURE__ */ jsxDEV6(
    Dialog,
    {
      as: "div",
      className: "fixed inset-0 overflow-hidden z-20",
      onClose,
      children: /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV6(
          Transition.Child,
          {
            as: Fragment2,
            enter: "ease-in-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in-out duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxDEV6(Dialog.Overlay, { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("div", { className: "fixed inset-y-0 right-0 pl-10 max-w-full flex", children: /* @__PURE__ */ jsxDEV6(
          Transition.Child,
          {
            as: Fragment2,
            enter: "transform transition ease-in-out duration-300 sm:duration-300",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "transform transition ease-in-out duration-300 sm:duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full",
            children: /* @__PURE__ */ jsxDEV6("div", { className: "w-screen max-w-md", children: /* @__PURE__ */ jsxDEV6("div", { className: "h-full flex flex-col bg-white shadow-xl overflow-y-scroll", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex-1 py-6 overflow-y-auto px-4 sm:px-6", children: [
                /* @__PURE__ */ jsxDEV6("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxDEV6(Dialog.Title, { className: "text-lg font-medium text-gray-900", children: t("cart.title") }, void 0, !1, {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 63,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV6("div", { className: "ml-3 h-7 flex items-center", children: /* @__PURE__ */ jsxDEV6(
                    "button",
                    {
                      type: "button",
                      className: "-m-2 p-2 text-gray-400 hover:text-gray-500",
                      onClick: () => onClose(!1),
                      children: [
                        /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: t("common.closePanel") }, void 0, !1, {
                          fileName: "app/components/cart/CartTray.tsx",
                          lineNumber: 72,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV6(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/components/cart/CartTray.tsx",
                          lineNumber: 75,
                          columnNumber: 27
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/cart/CartTray.tsx",
                      lineNumber: 67,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 66,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 62,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV6("div", { className: "mt-8", children: activeOrder?.totalQuantity ? /* @__PURE__ */ jsxDEV6(
                  CartContents,
                  {
                    orderLines: activeOrder?.lines ?? [],
                    currencyCode,
                    editable,
                    removeItem,
                    adjustOrderLine: adjustOrderLine2
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 82,
                    columnNumber: 25
                  },
                  this
                ) : /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center justify-center h-48 text-xl text-gray-400", children: t("cart.empty") }, void 0, !1, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 90,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 80,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/cart/CartTray.tsx",
                lineNumber: 61,
                columnNumber: 19
              }, this),
              activeOrder?.totalQuantity && editable && /* @__PURE__ */ jsxDEV6("div", { className: "border-t border-gray-200 py-6 px-4 sm:px-6", children: [
                /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
                  /* @__PURE__ */ jsxDEV6("p", { children: t("common.subtotal") }, void 0, !1, {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 100,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV6("p", { children: currencyCode && /* @__PURE__ */ jsxDEV6(
                    Price,
                    {
                      priceWithTax: activeOrder?.subTotalWithTax ?? 0,
                      currencyCode
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/cart/CartTray.tsx",
                      lineNumber: 103,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 101,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 99,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("p", { className: "mt-0.5 text-sm text-gray-500", children: t("cart.shippingMessage") }, void 0, !1, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 110,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6(
                  Link3,
                  {
                    to: "/checkout",
                    onClick: () => onClose(!1),
                    className: "flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700",
                    children: t("cart.checkout")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/cart/CartTray.tsx",
                    lineNumber: 114,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/cart/CartTray.tsx",
                  lineNumber: 113,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/cart/CartTray.tsx",
                lineNumber: 98,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cart/CartTray.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 31,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/providers/customer/customer.ts
import gql4 from "graphql-tag";
function getActiveCustomer(options) {
  return sdk.activeCustomer(void 0, options);
}
function getActiveCustomerDetails(options) {
  return sdk.activeCustomerDetails(void 0, options);
}
function getActiveCustomerAddresses(options) {
  return sdk.activeCustomerAddresses(void 0, options);
}
function getActiveCustomerOrderList(orderListOptions, options) {
  return sdk.activeCustomerOrderList({ orderListOptions }, options);
}
gql4`
  query activeCustomer {
    activeCustomer {
      id
      firstName
      lastName
    }
  }
`;
gql4`
  query activeCustomerDetails {
    activeCustomer {
      id
      title
      firstName
      lastName
      phoneNumber
      emailAddress
    }
  }
`;
gql4`
  query activeCustomerAddresses {
    activeCustomer {
      id
      addresses {
        id
        company
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
          id
          code
          name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
      }
    }
  }
`;
gql4`
  query activeCustomerOrderList($orderListOptions: OrderListOptions) {
    activeCustomer {
      orders(options: $orderListOptions) {
        totalItems
        items {
          code
          state
          orderPlacedAt
          currencyCode
          subTotal
          subTotalWithTax
          total
          totalWithTax
          shippingWithTax
          shippingLines {
            priceWithTax
          }
          taxSummary {
            taxBase
            taxTotal
          }
          discounts {
            amountWithTax
          }
          fulfillments {
            trackingCode
          }
          lines {
            quantity
            discountedLinePriceWithTax
            discountedUnitPriceWithTax
            fulfillmentLines {
              quantity
              fulfillment {
                state
                updatedAt
              }
            }
            featuredAsset {
              name
              source
              preview
            }
            productVariant {
              name
              sku
              currencyCode
              priceWithTax
              product {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

// app/components/footer/Footer.tsx
import { Link as Link4 } from "@remix-run/react";
import { useTranslation as useTranslation6 } from "react-i18next";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var navigation = {
  support: [
    { page: "help", href: "#" },
    { page: "trackOrder", href: "#" },
    { page: "shipping", href: "#" },
    { page: "returns", href: "#" }
  ],
  company: [
    { page: "about", href: "#" },
    { page: "blog", href: "#" },
    { page: "responsibility", href: "#" },
    { page: "press", href: "#" }
  ]
};
function Footer({
  collections
}) {
  let { t } = useTranslation6();
  return /* @__PURE__ */ jsxDEV7(
    "footer",
    {
      className: "mt-24 border-t bg-gray-50",
      "aria-labelledby": "footer-heading",
      children: [
        /* @__PURE__ */ jsxDEV7("h2", { id: "footer-heading", className: "sr-only", children: t("footer.title") }, void 0, !1, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
            /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
              /* @__PURE__ */ jsxDEV7("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.shop") }, void 0, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("ul", { role: "list", className: "mt-4 space-y-4", children: collections.map((collection) => /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
                    Link4,
                    {
                      className: "text-base text-gray-500 hover:text-gray-600",
                      to: "/collections/" + collection.slug,
                      prefetch: "intent",
                      children: collection.name
                    },
                    collection.id,
                    !1,
                    {
                      fileName: "app/components/footer/Footer.tsx",
                      lineNumber: 46,
                      columnNumber: 23
                    },
                    this
                  ) }, collection.id, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                  }, this)) }, void 0, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 39,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { className: "mt-12 md:mt-0", children: [
                  /* @__PURE__ */ jsxDEV7("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.support") }, void 0, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("ul", { role: "list", className: "mt-4 space-y-4", children: navigation.support.map(({ page, href }) => /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
                    "a",
                    {
                      href,
                      className: "text-base text-gray-500 hover:text-gray-600",
                      children: t(`navigation.support.${page}`)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/footer/Footer.tsx",
                      lineNumber: 65,
                      columnNumber: 23
                    },
                    this
                  ) }, page, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                  }, this)) }, void 0, !1, {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 58,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 38,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV7("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: /* @__PURE__ */ jsxDEV7("div", { children: [
                /* @__PURE__ */ jsxDEV7("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("account.company") }, void 0, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 78,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV7("ul", { role: "list", className: "mt-4 space-y-4", children: navigation.company.map(({ page, href }) => /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
                  "a",
                  {
                    href,
                    className: "text-base text-gray-500 hover:text-gray-600",
                    children: t(`navigation.company.${page}`)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 84,
                    columnNumber: 23
                  },
                  this
                ) }, page, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 83,
                  columnNumber: 21
                }, this)) }, void 0, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 37,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7("div", { className: "mt-8 xl:mt-0", children: [
              /* @__PURE__ */ jsxDEV7("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.subscribeHeader") }, void 0, !1, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 97,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV7("p", { className: "mt-4 text-base text-gray-500", children: t("footer.subscribeIntro") }, void 0, !1, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV7("form", { className: "mt-4 sm:flex sm:max-w-md", children: [
                /* @__PURE__ */ jsxDEV7("label", { htmlFor: "email-address", className: "sr-only", children: t("acount.emailAddress") }, void 0, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 104,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7(
                  "input",
                  {
                    type: "email",
                    name: "email-address",
                    id: "email-address",
                    autoComplete: "email",
                    required: !0,
                    className: "appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400",
                    placeholder: t("footer.emailPlaceholder")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV7("div", { className: "mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0", children: /* @__PURE__ */ jsxDEV7(
                  "button",
                  {
                    type: "submit",
                    className: "w-full bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500",
                    children: t("footer.subscribe")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 116,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 103,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 96,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "mt-8 border-t pt-8", children: /* @__PURE__ */ jsxDEV7(
            "a",
            {
              className: "flex items-center space-x-4 font-medium text-gray-500 hover:text-gray-700",
              href: "https://github.com/vendure-ecommerce/storefront-remix-starter",
              children: [
                /* @__PURE__ */ jsxDEV7(
                  "svg",
                  {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxDEV7(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                        clipRule: "evenodd"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/footer/Footer.tsx",
                        lineNumber: 138,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/footer/Footer.tsx",
                    lineNumber: 132,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV7("span", { children: "github.com/vendure-ecommerce/storefront-remix-starter" }, void 0, !1, {
                  fileName: "app/components/footer/Footer.tsx",
                  lineNumber: 144,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 128,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}

// app/utils/use-active-order.tsx
import { useFetcher } from "@remix-run/react";
import { useEffect as useEffect3 } from "react";
function useActiveOrder() {
  let activeOrderFetcher = useFetcher();
  useEffect3(() => {
    activeOrderFetcher.state === "idle" && !activeOrderFetcher.data && activeOrderFetcher.load("/api/active-order");
  }, [activeOrderFetcher]);
  function refresh() {
    activeOrderFetcher.load("/api/active-order");
  }
  let { activeOrder } = activeOrderFetcher.data ?? {};
  return {
    activeOrderFetcher,
    activeOrder,
    removeItem: (lineId) => {
      activeOrderFetcher.submit(
        {
          action: "removeItem",
          lineId
        },
        {
          method: "post",
          action: "/api/active-order"
        }
      );
    },
    adjustOrderLine: (lineId, quantity) => {
      activeOrderFetcher.submit(
        {
          action: "adjustItem",
          lineId,
          quantity: quantity.toString()
        },
        {
          method: "post",
          action: "/api/active-order"
        }
      );
    },
    refresh
  };
}

// app/root.tsx
import { useTranslation as useTranslation7 } from "react-i18next";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta = () => [{ title: APP_META_TITLE }, { description: APP_META_DESCRIPTION }], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], devMode = typeof process < "u" && !0, shouldRevalidate = ({
  nextUrl,
  currentUrl,
  formAction
}) => currentUrl.pathname === "/sign-in" || currentUrl.pathname === "/account" && nextUrl.pathname === "/" || formAction === "/checkout/payment";
async function loader({ request, params, context }) {
  let topLevelCollections = (await getCollections(request, { take: 20 })).filter(
    (collection) => collection.parent?.name === "__root_collection__"
  ), activeCustomer = await getActiveCustomer({ request }), locale = await getI18NextServer().then(
    (i18next) => i18next.getLocale(request)
  ), loaderData = {
    activeCustomer,
    activeChannel: await activeChannel({ request }),
    collections: topLevelCollections,
    locale
  };
  return json(loaderData, { headers: activeCustomer._headers });
}
function App() {
  let [open, setOpen] = useState2(!1), loaderData = useLoaderData2(), { collections } = loaderData, { locale } = useLoaderData2(), { i18n } = useTranslation7(), {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine: adjustOrderLine2,
    removeItem,
    refresh
  } = useActiveOrder();
  return useChangeLanguage(locale), useEffect4(() => {
    refresh();
  }, [loaderData]), /* @__PURE__ */ jsxDEV8("html", { lang: locale, dir: i18n.dir(), id: "app", children: [
    /* @__PURE__ */ jsxDEV8("head", { children: [
      /* @__PURE__ */ jsxDEV8("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("body", { children: [
      /* @__PURE__ */ jsxDEV8(
        Header,
        {
          onCartIconClick: () => setOpen(!open),
          cartQuantity: activeOrder?.totalQuantity ?? 0
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 126,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8("main", { className: "", children: /* @__PURE__ */ jsxDEV8(
        Outlet,
        {
          context: {
            activeOrderFetcher,
            activeOrder,
            adjustOrderLine: adjustOrderLine2,
            removeItem
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(
        CartTray,
        {
          open,
          onClose: setOpen,
          activeOrder,
          adjustOrderLine: adjustOrderLine2,
          removeItem
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 140,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Footer, { collections }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ jsxDEV8(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function DefaultSparseErrorPage({
  tagline,
  headline,
  description
}) {
  return /* @__PURE__ */ jsxDEV8("html", { lang: "en", id: "app", children: [
    /* @__PURE__ */ jsxDEV8("head", { children: [
      /* @__PURE__ */ jsxDEV8("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("body", { children: [
      /* @__PURE__ */ jsxDEV8("main", { className: "flex flex-col items-center px-4 py-16 sm:py-32 text-center", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wide", children: tagline }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("h1", { className: "mt-2 font-bold text-gray-900 tracking-tight text-4xl sm:text-5xl", children: headline }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "mt-4 text-base text-gray-500 max-w-full break-words", children: description }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV8(
          Link5,
          {
            to: "/",
            className: "text-base font-medium text-primary-600 hover:text-primary-500 inline-flex gap-2",
            children: "Go back home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 195,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ jsxDEV8(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 205,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let tagline = "Oopsy daisy", headline = "Unexpected error", description = "We couldn't handle your request. Please try again later.", error = useRouteError();
  return isRouteErrorResponse(error) && (tagline = `${error.status} error`, headline = error.statusText, description = error.data), /* @__PURE__ */ jsxDEV8(
    DefaultSparseErrorPage,
    {
      tagline,
      headline,
      description
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 227,
      columnNumber: 5
    },
    this
  );
}
function CatchBoundary() {
  return ErrorBoundary();
}

// app/routes/checkout.confirmation.$orderCode.tsx
var checkout_confirmation_orderCode_exports = {};
__export(checkout_confirmation_orderCode_exports, {
  default: () => CheckoutConfirmation,
  loader: () => loader2
});

// app/providers/orders/order.ts
import gql5 from "graphql-tag";
function getActiveOrder(options) {
  return sdk.activeOrder(void 0, options).then(({ activeOrder }) => activeOrder);
}
function getOrderByCode(code, options) {
  return sdk.orderByCode({ code }, options).then(({ orderByCode }) => orderByCode);
}
function addItemToOrder(productVariantId, quantity, options) {
  return sdk.addItemToOrder(
    {
      productVariantId,
      quantity
    },
    options
  );
}
function removeOrderLine(lineId, options) {
  return sdk.removeOrderLine({ orderLineId: lineId }, options);
}
function adjustOrderLine(lineId, quantity, options) {
  return sdk.adjustOrderLine({ orderLineId: lineId, quantity }, options);
}
function setCustomerForOrder(input, options) {
  return sdk.setCustomerForOrder({ input }, options);
}
function setOrderShippingAddress(input, options) {
  return sdk.setOrderShippingAddress({ input }, options);
}
function setOrderShippingMethod(shippingMethodId, options) {
  return sdk.setOrderShippingMethod({ shippingMethodId }, options);
}
function applyCouponCode(input, options) {
  return sdk.ApplyCouponCode({ input }, options).then((response) => response.applyCouponCode);
}
function removeCouponCode(couponCode, options) {
  return sdk.RemoveCouponCode({ couponCode }, options).then((response) => response.removeCouponCode);
}
function getCouponCodeList(options) {
  return sdk.GetCouponCodeList(void 0, options).then(
    (response) => response.getCouponCodeList.items.map((c) => ({
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
          value: arg.value
        }))
      }))
    }))
  );
}
gql5`
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
gql5`
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
gql5`
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
gql5`
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
gql5`
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
gql5`
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
gql5`
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
gql5`
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
gql5`
  query activeOrder {
    activeOrder {
      ...OrderDetail
    }
  }
`;
gql5`
  query orderByCode($code: String!) {
    orderByCode(code: $code) {
      ...OrderDetail
    }
  }
`;
gql5`
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
gql5`
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
gql5`
mutation RemoveCouponCode($couponCode: String!){
    removeCouponCode(couponCode: $couponCode){
        __typename
    }
}

`;

// app/routes/checkout.confirmation.$orderCode.tsx
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/cart/CartTotals.tsx
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function CartTotals({ order }) {
  let { t } = useTranslation8();
  return /* @__PURE__ */ jsxDEV9("dl", { className: "border-t mt-6 border-gray-200 py-6 space-y-6", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV9("dt", { className: "text-sm", children: t("common.subtotal") }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("dd", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsxDEV9(
        Price,
        {
          priceWithTax: order?.subTotalWithTax,
          currencyCode: order?.currencyCode
        },
        void 0,
        !1,
        {
          fileName: "app/components/cart/CartTotals.tsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cart/CartTotals.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV9("dt", { className: "text-sm", children: t("common.shipping") }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("dd", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsxDEV9(
        Price,
        {
          priceWithTax: order?.shippingWithTax ?? 0,
          currencyCode: order?.currencyCode
        },
        void 0,
        !1,
        {
          fileName: "app/components/cart/CartTotals.tsx",
          lineNumber: 22,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cart/CartTotals.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6", children: [
      /* @__PURE__ */ jsxDEV9("dt", { className: "text-base font-medium", children: t("common.total") }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("dd", { className: "text-base font-medium text-gray-900", children: /* @__PURE__ */ jsxDEV9(
        Price,
        {
          priceWithTax: order?.totalWithTax,
          currencyCode: order?.currencyCode
        },
        void 0,
        !1,
        {
          fileName: "app/components/cart/CartTotals.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/cart/CartTotals.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cart/CartTotals.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cart/CartTotals.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.confirmation.$orderCode.tsx
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRevalidator } from "@remix-run/react";
import { useEffect as useEffect5, useState as useState3 } from "react";
import { useTranslation as useTranslation9 } from "react-i18next";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
async function loader2({ params, request }) {
  try {
    return {
      order: await getOrderByCode(params.orderCode, { request }),
      error: !1
    };
  } catch {
    return {
      order: null,
      error: !0
    };
  }
}
function CheckoutConfirmation() {
  let { order, error } = useLoaderData3(), revalidator = useRevalidator(), [retries, setRetries] = useState3(1), { t } = useTranslation9(), orderNotFound = !order && !error, orderErrored = !order && error, maxRetries = 5, retriesExhausted = retries >= maxRetries, retryTimeout = 2500, retry = () => {
    window && (setRetries(retries + 1), window.setTimeout(() => {
      retries > maxRetries || revalidator.revalidate();
    }, retryTimeout));
  };
  return useEffect5(() => {
    orderErrored && retry();
  }, [order]), useEffect5(() => {
    revalidator.state === "idle" && orderErrored && retries <= maxRetries && retries > 1 && retry();
  }, [revalidator.state]), orderNotFound ? /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderNotFound") }, void 0, !1, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) : orderErrored && retriesExhausted ? /* @__PURE__ */ jsxDEV10("div", { children: [
    /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ jsxDEV10(XCircleIcon, { className: "text-red-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("span", { children: t("checkout.orderErrorTitle") }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg text-gray-700", children: t("checkout.orderErrorMessage") }, void 0, !1, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) : orderErrored ? /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderProcessing") }, void 0, !1, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV10("div", { children: [
    /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ jsxDEV10(CheckCircleIcon, { className: "text-green-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("span", { children: t("order.summary") }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg text-gray-700", children: [
      t("checkout.orderSuccessMessage"),
      " ",
      /* @__PURE__ */ jsxDEV10("span", { className: "font-bold", children: order.code }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    order.active && /* @__PURE__ */ jsxDEV10("div", { className: "rounded-md bg-blue-50 p-4 my-8", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV10(
        InformationCircleIcon,
        {
          className: "h-5 w-5 text-blue-400",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 114,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ jsxDEV10("p", { className: "text-sm text-blue-700", children: t("checkout.paymentMessage") }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 120,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV10(
        CartContents,
        {
          orderLines: order.lines,
          currencyCode: order.currencyCode,
          editable: !1
        },
        void 0,
        !1,
        {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 129,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10(CartTotals, { order }, void 0, !1, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/account.addresses.$addressId.tsx
var account_addresses_addressId_exports = {};
__export(account_addresses_addressId_exports, {
  action: () => action,
  default: () => EditAddress,
  loader: () => loader3
});
import {
  useActionData,
  useLoaderData as useLoaderData4,
  useNavigate,
  useSubmit,
  useNavigation
} from "@remix-run/react";
import { json as json2, redirect } from "@remix-run/server-runtime";
import { useRef, useEffect as useEffect6 } from "react";
import { validationError } from "remix-validated-form";

// app/components/Button.tsx
import clsx from "clsx";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Button(props) {
  return /* @__PURE__ */ jsxDEV11(
    "button",
    {
      ...props,
      className: clsx(
        "hover:text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-0 focus:ring-gray-800",
        "bg-gray-100 border rounded-md py-2 px-4 text-base font-medium text-black",
        "flex items-center justify-around gap-2",
        "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400",
        props.className
      ),
      children: props.children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/components/modal/Modal.tsx
import { Dialog as Dialog2, Transition as Transition2 } from "@headlessui/react";
import { XMarkIcon as XMarkIcon2 } from "@heroicons/react/24/solid";

// app/components/modal/modal-context.tsx
import { createContext, useContext } from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var ModalContext = createContext(null), ModalProvider = ({ children, close }) => /* @__PURE__ */ jsxDEV12(
  ModalContext.Provider,
  {
    value: {
      close
    },
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/modal/modal-context.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
), useModal = () => {
  let context = useContext(ModalContext);
  if (context === null)
    throw new Error("useModal must be used within a ModalProvider");
  return context;
};

// app/components/modal/Modal.tsx
import clsx2 from "clsx";
import { Fragment as Fragment3 } from "react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Modal = ({ isOpen, close, size = "medium", children, afterClose, afterOpen }) => /* @__PURE__ */ jsxDEV13(Transition2, { appear: !0, show: isOpen, as: Fragment3, children: /* @__PURE__ */ jsxDEV13(Dialog2, { as: "div", className: "relative z-[75]", onClose: close, children: [
  /* @__PURE__ */ jsxDEV13(
    Transition2.Child,
    {
      as: Fragment3,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      afterEnter: afterOpen,
      afterLeave: afterClose,
      children: /* @__PURE__ */ jsxDEV13("div", { className: "fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" }, void 0, !1, {
        fileName: "app/components/modal/Modal.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 24,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ jsxDEV13("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsxDEV13(
    Transition2.Child,
    {
      as: Fragment3,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsxDEV13(
        Dialog2.Panel,
        {
          className: clsx2(
            "flex flex-col justify-start w-full h-full overflow-auto transform bg-white p-10 text-left align-middle shadow-xl transition-all",
            {
              "max-w-md": size === "small",
              "max-w-xl": size === "medium",
              "max-w-3xl": size === "large"
            }
          ),
          children: /* @__PURE__ */ jsxDEV13(ModalProvider, { close, children }, void 0, !1, {
            fileName: "app/components/modal/Modal.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/modal/Modal.tsx",
          lineNumber: 49,
          columnNumber: 15
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 40,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 39,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/modal/Modal.tsx",
  lineNumber: 23,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/modal/Modal.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), Title = ({ children }) => {
  let { close } = useModal();
  return /* @__PURE__ */ jsxDEV13(Dialog2.Title, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "text-large-semi", children }, void 0, !1, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { children: /* @__PURE__ */ jsxDEV13("button", { onClick: close, type: "button", children: /* @__PURE__ */ jsxDEV13(XMarkIcon2, { className: "w-6 h-6" }, void 0, !1, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}, Description = ({ children }) => /* @__PURE__ */ jsxDEV13(Dialog2.Description, { className: "flex text-small-regular text-gray-700 items-center justify-center pt-2 pb-4 h-full", children }, void 0, !1, {
  fileName: "app/components/modal/Modal.tsx",
  lineNumber: 87,
  columnNumber: 5
}, this), Body = ({ children }) => /* @__PURE__ */ jsxDEV13("div", { className: "flex-1", children }, void 0, !1, {
  fileName: "app/components/modal/Modal.tsx",
  lineNumber: 94,
  columnNumber: 10
}, this), Footer2 = ({ children }) => /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center justify-end gap-x-4", children }, void 0, !1, {
  fileName: "app/components/modal/Modal.tsx",
  lineNumber: 99,
  columnNumber: 5
}, this);
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer2;
var Modal_default = Modal;

// app/components/HighlightedButton.tsx
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx3 from "clsx";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function HighlightedButton({ isSubmitting = !1, ...props }) {
  return /* @__PURE__ */ jsxDEV14(
    "button",
    {
      disabled: isSubmitting,
      ...props,
      className: clsx3(
        "bg-primary-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white",
        "focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-800 hover:bg-primary-600",
        "disabled:opacity-50 disabled:hover:opacity-30",
        "flex items-center justify-around gap-2",
        props.className
      ),
      children: [
        props.children,
        isSubmitting && /* @__PURE__ */ jsxDEV14(ArrowPathIcon, { className: "w-4 h-4 animate-spin" }, void 0, !1, {
          fileName: "app/components/HighlightedButton.tsx",
          lineNumber: 24,
          columnNumber: 24
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/HighlightedButton.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/utils/use-toggle-state.tsx
import { useState as useState4 } from "react";
var useToggleState = (initialState = !1) => {
  let [state, setState] = useState4(initialState), close = () => {
    setState(!1);
  }, open = () => {
    setState(!0);
  }, toggle = () => {
    setState((state2) => !state2);
  }, hookData = [state, open, close, toggle];
  return hookData.state = state, hookData.open = open, hookData.close = close, hookData.toggle = toggle, hookData;
}, use_toggle_state_default = useToggleState;

// node_modules/@remix-validated-form/with-zod/dist/index.esm.js
import { createValidator } from "remix-validated-form";
var __create2 = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc2 = Object.getOwnPropertyDescriptor, __getOwnPropNames2 = Object.getOwnPropertyNames, __getProtoOf2 = Object.getPrototypeOf, __hasOwnProp2 = Object.prototype.hasOwnProperty, __commonJS2 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames2(from))
      !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  return to;
}, __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), require_lodash = __commonJS2({
  "../../node_modules/lodash.get/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", INFINITY = 1 / 0, funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]", reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reEscapeChar = /\\(\\)?/g, reIsHostCtor = /^\[object .+?Constructor\]$/, freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
    function getValue(object, key) {
      return object?.[key];
    }
    function isHostObject(value) {
      var result = !1;
      if (value != null && typeof value.toString != "function")
        try {
          result = !!(value + "");
        } catch {
        }
      return result;
    }
    var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Symbol2 = root.Symbol, splice = arrayProto.splice, Map2 = getNative(root, "Map"), nativeCreate = getNative(Object, "create"), symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry2 = entries[index];
        this.set(entry2[0], entry2[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      return data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value, this;
    }
    Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry2 = entries[index];
        this.set(entry2[0], entry2[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0)
        return !1;
      var lastIndex = data.length - 1;
      return index == lastIndex ? data.pop() : splice.call(data, index, 1), !0;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? data.push([key, value]) : data[index][1] = value, this;
    }
    ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry2 = entries[index];
        this.set(entry2[0], entry2[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        hash: new Hash(),
        map: new (Map2 || ListCache)(),
        string: new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key).delete(key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      return getMapData(this, key).set(key, value), this;
    }
    MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      for (var length = array.length; length--; )
        if (eq(array[length][0], key))
          return length;
      return -1;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      for (var index = 0, length = path.length; object != null && index < length; )
        object = object[toKey(path[index++])];
      return index && index == length ? object : void 0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value))
        return !1;
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseToString(value) {
      if (typeof value == "string")
        return value;
      if (isSymbol(value))
        return symbolToString ? symbolToString.call(value) : "";
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray2(value) ? value : stringToPath(value);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKey(value, object) {
      if (isArray2(value))
        return !1;
      var type = typeof value;
      return type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      return reLeadingDot.test(string) && result.push(""), string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      }), result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value))
        return value;
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch {
        }
        try {
          return func + "";
        } catch {
        }
      }
      return "";
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key))
          return cache.get(key);
        var result = func.apply(this, args);
        return memoized.cache = cache.set(key, result), result;
      };
      return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArray2 = Array.isArray;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
}), __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++)
      (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
};
function purry(fn, args, lazy) {
  var diff = fn.length - args.length, arrayArgs = Array.from(args);
  if (diff === 0)
    return fn.apply(void 0, arrayArgs);
  if (diff === 1) {
    var ret = function(data) {
      return fn.apply(void 0, __spreadArray([data], arrayArgs, !1));
    };
    return (lazy || fn.lazy) && (ret.lazy = lazy || fn.lazy, ret.lazyArgs = args), ret;
  }
  throw new Error("Wrong number of arguments");
}
var isArray = Array.isArray, keyList = Object.keys, hasProp = Object.prototype.hasOwnProperty;
function equals() {
  return purry(_equals, arguments);
}
function _equals(a, b) {
  if (a === b)
    return !0;
  if (a && b && typeof a == "object" && typeof b == "object") {
    var arrA = isArray(a), arrB = isArray(b), i = void 0, length = void 0, key = void 0;
    if (arrA && arrB) {
      if (length = a.length, length !== b.length)
        return !1;
      for (i = length; i-- !== 0; )
        if (!equals(a[i], b[i]))
          return !1;
      return !0;
    }
    if (arrA !== arrB)
      return !1;
    var dateA = a instanceof Date, dateB = b instanceof Date;
    if (dateA !== dateB)
      return !1;
    if (dateA && dateB)
      return a.getTime() === b.getTime();
    var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
    if (regexpA !== regexpB)
      return !1;
    if (regexpA && regexpB)
      return a.toString() === b.toString();
    var keys = keyList(a);
    if (length = keys.length, length !== keyList(b).length)
      return !1;
    for (i = length; i-- !== 0; )
      if (!hasProp.call(b, keys[i]))
        return !1;
    for (i = length; i-- !== 0; )
      if (key = keys[i], !equals(a[key], b[key]))
        return !1;
    return !0;
  }
  return a !== a && b !== b;
}
var stringToPathArray = (path) => {
  if (path.length === 0)
    return [];
  let match = path.match(/^\[(.+?)\](.*)$/) || path.match(/^\.?([^\.\[\]]+)(.*)$/);
  if (match) {
    let [_, key, rest] = match;
    return [/^\d+$/.test(key) ? Number(key) : key, ...stringToPathArray(rest)];
  }
  return [path];
}, import_lodash = __toESM2(require_lodash()), getIssuesForError = (err) => err.issues.flatMap((issue) => "unionErrors" in issue ? issue.unionErrors.flatMap((err2) => getIssuesForError(err2)) : [issue]);
function pathToString(array) {
  return array.reduce(function(string, item) {
    let prefix = string === "" ? "" : ".";
    return string + (isNaN(Number(item)) ? prefix + item : "[" + item + "]");
  }, "");
}
function withZod(zodSchema, parseParams) {
  return createValidator({
    validate: async (value) => {
      let result = await zodSchema.safeParseAsync(value, parseParams);
      if (result.success)
        return { data: result.data, error: void 0 };
      let fieldErrors = {};
      return getIssuesForError(result.error).forEach((issue) => {
        let path = pathToString(issue.path);
        fieldErrors[path] || (fieldErrors[path] = issue.message);
      }), { error: fieldErrors, data: void 0 };
    },
    validateField: async (data, field) => {
      var _a;
      let result = await zodSchema.safeParseAsync(data, parseParams);
      return result.success ? { error: void 0 } : {
        error: (_a = getIssuesForError(result.error).find(
          (issue) => equals(issue.path, stringToPathArray(field))
        )) == null ? void 0 : _a.message
      };
    }
  });
}

// app/components/account/CustomerAddressForm.tsx
import { z } from "zod";
import { ValidatedForm } from "remix-validated-form";

// app/components/Input.tsx
import clsx5 from "clsx";
import React3 from "react";
import { useField as useField2 } from "remix-validated-form";

// app/components/FormElement.tsx
import clsx4 from "clsx";
import { useField } from "remix-validated-form";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var FormElement = ({
  children,
  label,
  name,
  required = !1
}) => {
  let { error } = useField(name);
  return /* @__PURE__ */ jsxDEV15("div", { children: [
    label && /* @__PURE__ */ jsxDEV15("label", { htmlFor: name, className: clsx4("text-sm text-gray-500"), children: [
      label,
      required && /* @__PURE__ */ jsxDEV15("span", { className: "text-rose-500", children: "*" }, void 0, !1, {
        fileName: "app/components/FormElement.tsx",
        lineNumber: 24,
        columnNumber: 24
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: label && "mt-1", children }, void 0, !1, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV15("div", { className: "pt-1 text-rose-500 text-sm", children: /* @__PURE__ */ jsxDEV15("span", { children: error }, void 0, !1, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormElement.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}, FormElement_default = FormElement;

// app/components/Input.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Input = React3.forwardRef(
  ({ name, label, required, ...props }, ref) => {
    let { error, getInputProps } = useField2(name);
    return /* @__PURE__ */ jsxDEV16(FormElement_default, { name, label, required, children: /* @__PURE__ */ jsxDEV16(
      "input",
      {
        ref,
        ...props,
        ...getInputProps(),
        className: clsx5(
          "block w-full py-2 px-4 shadow-sm border bg-white rounded-md text-base sm:text-sm text-gray-900 border-gray-300 placeholder-gray-500",
          "focus:ring-primary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:placeholder-gray-400",
          {
            "border-rose-500 focus:border-rose-500": error
          },
          props.className
        ),
        children: props.children
      },
      void 0,
      !1,
      {
        fileName: "app/components/Input.tsx",
        lineNumber: 20,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Input.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this);
  }
);

// app/components/Select.tsx
import React4 from "react";
import { useField as useField3 } from "remix-validated-form";
import { useTranslation as useTranslation10 } from "react-i18next";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var Select = React4.forwardRef(
  ({
    name,
    label,
    required,
    defaultValue,
    placeholder = "",
    noPlaceholder = !1,
    children,
    ...props
  }, ref) => {
    let { getInputProps } = useField3(name), { t } = useTranslation10();
    return /* @__PURE__ */ jsxDEV17(FormElement_default, { name, label, required, children: /* @__PURE__ */ jsxDEV17(
      "select",
      {
        ref,
        ...props,
        defaultValue,
        className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
        ...getInputProps({}),
        children: [
          !noPlaceholder && /* @__PURE__ */ jsxDEV17("option", { value: "", children: placeholder ?? t("common.select") }, void 0, !1, {
            fileName: "app/components/Select.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          children
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Select.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Select.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }
);

// app/components/account/CustomerAddressForm.tsx
import { useTranslation as useTranslation11 } from "react-i18next";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var validator = withZod(
  z.object({
    fullName: z.string().min(1, { message: "Name is required" }),
    city: z.string(),
    countryCode: z.string().min(1, { message: "Country is required" }),
    postalCode: z.string(),
    province: z.string(),
    streetLine1: z.string().min(1, { message: "Address is required" }),
    streetLine2: z.string(),
    phone: z.string(),
    company: z.string()
  })
);
function CustomerAddressForm({
  address,
  formRef,
  submit,
  availableCountries
}) {
  let { t } = useTranslation11();
  return /* @__PURE__ */ jsxDEV18(
    ValidatedForm,
    {
      id: "editAddressForm",
      validator,
      formRef,
      method: "post",
      onSubmit: submit,
      defaultValues: {
        fullName: address?.fullName || void 0,
        city: address?.city || void 0,
        streetLine1: address?.streetLine1 || void 0,
        streetLine2: address?.streetLine2 || void 0,
        countryCode: address?.country?.code || void 0,
        postalCode: address?.postalCode || void 0,
        phone: address?.phoneNumber || void 0,
        company: address?.company || void 0,
        province: address?.province || void 0
      },
      children: [
        /* @__PURE__ */ jsxDEV18("input", { type: "hidden", name: "intent", value: "updateAddress" }, void 0, !1, {
          fileName: "app/components/account/CustomerAddressForm.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "grid grid-cols-1 gap-y-2 my-8", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "grid grid-cols-2 gap-x-2", children: /* @__PURE__ */ jsxDEV18(
            Input,
            {
              label: t("account.fullName"),
              name: "fullName",
              required: !0,
              autoComplete: "full-name"
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 59,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/account/CustomerAddressForm.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV18(Input, { label: t("address.company"), name: "company" }, void 0, !1, {
            fileName: "app/components/account/CustomerAddressForm.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV18(
            Input,
            {
              label: t("address.streetLine1"),
              name: "streetLine1",
              required: !0,
              autoComplete: "address-line1"
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            Input,
            {
              label: t("address.streetLine2"),
              name: "streetLine2",
              autoComplete: "address-line2"
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 73,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18("div", { className: "grid grid-cols-[144px_1fr] gap-x-2", children: [
            /* @__PURE__ */ jsxDEV18(
              Input,
              {
                label: t("address.postalCode"),
                name: "postalCode",
                required: !0,
                autoComplete: "postal-code"
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/CustomerAddressForm.tsx",
                lineNumber: 79,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV18(
              Input,
              {
                label: t("address.city"),
                name: "city",
                required: !0,
                autoComplete: "locality"
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/CustomerAddressForm.tsx",
                lineNumber: 85,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/account/CustomerAddressForm.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV18(
            Input,
            {
              label: t("address.province"),
              name: "province",
              autoComplete: "address-level1"
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 92,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            Select,
            {
              name: "countryCode",
              autoComplete: "country",
              placeholder: t("address.selectCountry"),
              required: !0,
              label: "Country",
              children: availableCountries?.map((country) => /* @__PURE__ */ jsxDEV18("option", { value: country.code, children: country.name }, country.id, !1, {
                fileName: "app/components/account/CustomerAddressForm.tsx",
                lineNumber: 105,
                columnNumber: 13
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 97,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            Input,
            {
              label: t("address.phoneNumber"),
              name: "phone",
              autoComplete: "phone"
            },
            void 0,
            !1,
            {
              fileName: "app/components/account/CustomerAddressForm.tsx",
              lineNumber: 110,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18("input", { type: "submit", hidden: !0 }, void 0, !1, {
            fileName: "app/components/account/CustomerAddressForm.tsx",
            lineNumber: 115,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/account/CustomerAddressForm.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/account/CustomerAddressForm.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}

// app/providers/account/account.ts
import gql6 from "graphql-tag";
var login = async (email, password, rememberMe, options) => sdk.login({ email, password, rememberMe }, options).then((res) => ({
  ...res.login,
  _headers: res._headers
})), logout = async (options) => sdk.logout({}, options).then((res) => ({
  ...res.logout,
  _headers: res._headers
})), registerCustomerAccount = async (options, variables) => sdk.registerCustomerAccount(variables, options).then((res) => ({
  ...res.registerCustomerAccount,
  _headers: res._headers
})), verifyCustomerAccount = async (options, token, password) => sdk.verifyCustomerAccount({ token, password }, options).then((res) => ({
  ...res.verifyCustomerAccount,
  _headers: res._headers
}));
async function updateCustomer(input, options) {
  return sdk.updateCustomer({ input }, options);
}
async function requestUpdateCustomerEmailAddress(password, newEmailAddress, options) {
  return sdk.requestUpdateCustomerEmailAddress({ password, newEmailAddress }, options).then((res) => res.requestUpdateCustomerEmailAddress);
}
async function updateCustomerEmailAddress(token, options) {
  return sdk.updateCustomerEmailAddress({ token }, options).then((res) => res.updateCustomerEmailAddress);
}
async function updateCustomerAddress(input, options) {
  return sdk.updateCustomerAddress({ input }, options).then((res) => res.updateCustomerAddress);
}
async function createCustomerAddress(input, options) {
  return sdk.createCustomerAddress({ input }, options).then((res) => res.createCustomerAddress);
}
async function deleteCustomerAddress(id, options) {
  return sdk.deleteCustomerAddress({ id }, options).then((res) => res.deleteCustomerAddress);
}
async function updateCustomerPassword(input, options) {
  return sdk.updateCustomerPassword(input, options).then((res) => res.updateCustomerPassword);
}
gql6`
  mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $email, password: $password, rememberMe: $rememberMe) {
      __typename
      ... on CurrentUser {
      id
      __typename
      channels {
        token
        permissions
        code
        id
        __typename
      }
    }
    ...ErrorResult
    __typename
  }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
  mutation logout {
    logout {
      success
    }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
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
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
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
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
  mutation updateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      __typename
    }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
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
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
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
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
  mutation updateCustomerAddress($input: UpdateAddressInput!) {
    updateCustomerAddress(input: $input) {
      __typename
    }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
  mutation createCustomerAddress($input: CreateAddressInput!) {
    createCustomerAddress(input: $input) {
      __typename
    }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
  mutation deleteCustomerAddress($id: ID!) {
    deleteCustomerAddress(id: $id) {
      success
    }
  }
`;
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;
gql6`
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
gql6`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`;

// app/providers/checkout/checkout.ts
import gql7 from "graphql-tag";
function getAvailableCountries(options) {
  return sdk.availableCountries({}, options);
}
function getEligibleShippingMethods(options) {
  return sdk.eligibleShippingMethods({}, options);
}
function getEligiblePaymentMethods(options) {
  return sdk.eligiblePaymentMethods({}, options);
}
function generateBraintreeClientToken(options) {
  return sdk.generateBraintreeClientToken({}, options);
}
function createStripePaymentIntent(options) {
  return sdk.createStripePaymentIntent({}, options);
}
function getNextOrderStates(options) {
  return sdk.nextOrderStates({}, options);
}
function addPaymentToOrder(input, options) {
  return sdk.addPaymentToOrder({ input }, options);
}
function transitionOrderToState(state, options) {
  return sdk.transitionOrderToState({ state }, options);
}
gql7`
  query eligibleShippingMethods {
    eligibleShippingMethods {
      id
      name
      description
      metadata
      price
      priceWithTax
    }
  }
`;
gql7`
  query eligiblePaymentMethods {
    eligiblePaymentMethods {
      id
      code
      name
      description
      eligibilityMessage
      isEligible
    }
  }
`;
gql7`
  query nextOrderStates {
    nextOrderStates
  }
`;
gql7`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;
gql7`
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
gql7`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql7`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;
gql7`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;

// app/routes/account.addresses.$addressId.tsx
import { useTranslation as useTranslation12 } from "react-i18next";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
async function loader3({ request, params }) {
  let { activeCustomer } = await getActiveCustomerAddresses({ request }), address = activeCustomer?.addresses?.find(
    (address2) => address2.id === params.addressId
  );
  if (!address)
    return redirect("/account/addresses");
  let { availableCountries } = await getAvailableCountries({ request });
  return json2({ address, availableCountries });
}
async function action({ request, params }) {
  let body = await request.formData(), result = await validator.validate(body);
  if (result.error)
    return validationError(result.error);
  let { data } = result;
  return await updateCustomerAddress(
    {
      id: params.addressId,
      city: data.city,
      company: data.company,
      countryCode: data.countryCode,
      fullName: data.fullName,
      phoneNumber: data.phone,
      postalCode: data.postalCode,
      province: data.province,
      streetLine1: data.streetLine1,
      streetLine2: data.streetLine2
    },
    { request }
  ), json2({
    saved: !0
  });
}
function EditAddress() {
  let { address, availableCountries } = useLoaderData4(), actionData = useActionData(), navigation2 = useNavigation(), navigate = useNavigate(), { state, close } = use_toggle_state_default(!0), formRef = useRef(null), { t } = useTranslation12(), submit = useSubmit();
  useEffect6(() => {
    actionData?.saved && close();
  }, [actionData]);
  let submitForm = () => {
    submit(formRef.current);
  };
  return /* @__PURE__ */ jsxDEV19("div", { children: /* @__PURE__ */ jsxDEV19(Modal_default, { isOpen: state, close, afterClose: () => {
    navigate(-1);
  }, children: [
    /* @__PURE__ */ jsxDEV19(Modal_default.Title, { children: t("address.edit") }, void 0, !1, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19(Modal_default.Body, { children: /* @__PURE__ */ jsxDEV19(
      CustomerAddressForm,
      {
        address,
        availableCountries,
        formRef,
        submit: submitForm
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account.addresses.$addressId.tsx",
        lineNumber: 99,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19(Modal_default.Footer, { children: [
      /* @__PURE__ */ jsxDEV19(Button, { type: "button", onClick: close, children: t("common.cancel") }, void 0, !1, {
        fileName: "app/routes/account.addresses.$addressId.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19(
        HighlightedButton,
        {
          isSubmitting: navigation2.state === "submitting",
          type: "submit",
          onClick: submitForm,
          children: t("common.save")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/account.addresses.$addressId.tsx",
          lineNumber: 110,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.addresses.$addressId.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/account.addresses.$addressId.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/routes/verify-email-address-change.tsx
var verify_email_address_change_exports = {};
__export(verify_email_address_change_exports, {
  action: () => action2,
  default: () => VerifyEmailAddressChangeTokenPage,
  loader: () => loader4
});
import { useEffect as useEffect7, useRef as useRef2 } from "react";
import { useLoaderData as useLoaderData5, useSearchParams } from "@remix-run/react";
import { redirect as redirect2 } from "@remix-run/server-runtime";
import { CheckCircleIcon as CheckCircleIcon2, XCircleIcon as XCircleIcon2 } from "@heroicons/react/24/outline";
import { useTranslation as useTranslation13 } from "react-i18next";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
async function loader4({
  request
}) {
  let token = new URL(request.url).searchParams.get("token"), t = await getFixedT(request);
  if (!token)
    return {
      success: !1,
      error: t("tokenError")
    };
  let result = await updateCustomerEmailAddress(token, { request });
  return result.__typename !== "Success" ? { success: !1, error: result.message } : { success: !0 };
}
async function action2({ request }) {
  let redirectTarget = (await request.formData()).get("redirect");
  return redirect2(redirectTarget);
}
function VerifyEmailAddressChangeTokenPage() {
  let [searchParams] = useSearchParams(), result = useLoaderData5(), btnRef = useRef2(null), { t } = useTranslation13();
  return useEffect7(() => {
    if (!result.success || !btnRef.current)
      return;
    let submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]), /* @__PURE__ */ jsxDEV20("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV20("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV20("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ jsxDEV20("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxDEV20("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV20(
      CheckCircleIcon2,
      {
        className: "h-5 w-5 text-green-600",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/verify-email-address-change.tsx",
        lineNumber: 66,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV20("p", { className: "text-sm text-green-700", children: t("account.verifyEmailMessage") }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 72,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV20("form", { method: "post", children: [
      /* @__PURE__ */ jsxDEV20(
        "input",
        {
          type: "hidden",
          name: "redirect",
          value: searchParams.get("redirectTo") || "/"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/verify-email-address-change.tsx",
          lineNumber: 77,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ jsxDEV20(
        "button",
        {
          ref: btnRef,
          type: "submit",
          style: { display: "none " }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/verify-email-address-change.tsx",
          lineNumber: 82,
          columnNumber: 19
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 64,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 63,
    columnNumber: 13
  }, this) : /* @__PURE__ */ jsxDEV20("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV20("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV20("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV20(
      XCircleIcon2,
      {
        className: "h-5 w-5 text-red-400",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/verify-email-address-change.tsx",
        lineNumber: 94,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 93,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV20("p", { className: "text-sm text-red-700", children: result.error }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 100,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/verify-email-address-change.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 92,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 91,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify-email-address-change.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/api.create-razorpay-order.tsx
var api_create_razorpay_order_exports = {};
__export(api_create_razorpay_order_exports, {
  action: () => action3
});
import { json as json3 } from "@remix-run/node";
var action3 = async ({ request }) => {
  let requestBody = await request.json(), { amount, currency } = requestBody;
  try {
    let razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from("rzp_live_MT7BL3eZs3HHGB:IcFId4SLDKWbSUew1Fpb12xn").toString("base64")}`
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: "receipt#1",
        payment_capture: 1
      })
    }), data = await razorpayResponse.json();
    if (!razorpayResponse.ok)
      throw new Error(data.error?.description || "Failed to create Razorpay order");
    return json3({ orderId: data.id });
  } catch (error) {
    return console.error("Razorpay order creation failed:", error), json3({ error: error.message }, { status: 500 });
  }
};

// app/routes/account.addresses.new.tsx
var account_addresses_new_exports = {};
__export(account_addresses_new_exports, {
  action: () => action4,
  default: () => NewAddress,
  loader: () => loader5
});
import {
  useActionData as useActionData2,
  useLoaderData as useLoaderData6,
  useNavigate as useNavigate2,
  useNavigation as useNavigation2,
  useSubmit as useSubmit2
} from "@remix-run/react";
import { json as json4 } from "@remix-run/server-runtime";
import { useRef as useRef3, useEffect as useEffect8 } from "react";
import { validationError as validationError2 } from "remix-validated-form";
import { useTranslation as useTranslation14 } from "react-i18next";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
async function loader5({ request, params }) {
  let { availableCountries } = await getAvailableCountries({ request });
  return json4({ availableCountries });
}
async function action4({ request, params }) {
  let body = await request.formData(), result = await validator.validate(body);
  if (result.error)
    return validationError2(result.error);
  let { data } = result;
  return await createCustomerAddress(
    {
      city: data.city,
      company: data.company,
      countryCode: data.countryCode,
      fullName: data.fullName,
      phoneNumber: data.phone,
      postalCode: data.postalCode,
      province: data.province,
      streetLine1: data.streetLine1,
      streetLine2: data.streetLine2
    },
    { request }
  ), json4({
    saved: !0
  });
}
function NewAddress() {
  let { availableCountries } = useLoaderData6(), navigation2 = useNavigation2(), actionData = useActionData2(), navigate = useNavigate2(), { state, close } = use_toggle_state_default(!0), { t } = useTranslation14(), formRef = useRef3(null), submit = useSubmit2();
  useEffect8(() => {
    actionData?.saved && close();
  }, [actionData]);
  let submitForm = () => {
    submit(formRef.current);
  };
  return /* @__PURE__ */ jsxDEV21("div", { children: /* @__PURE__ */ jsxDEV21(Modal_default, { isOpen: state, close, afterClose: () => {
    navigate(-1);
  }, children: [
    /* @__PURE__ */ jsxDEV21(Modal_default.Title, { children: t("address.new") }, void 0, !1, {
      fileName: "app/routes/account.addresses.new.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21(Modal_default.Body, { children: /* @__PURE__ */ jsxDEV21(
      CustomerAddressForm,
      {
        availableCountries,
        formRef,
        submit: submitForm
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account.addresses.new.tsx",
        lineNumber: 87,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/account.addresses.new.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21(Modal_default.Footer, { children: [
      /* @__PURE__ */ jsxDEV21(Button, { type: "button", onClick: close, children: t("common.cancel") }, void 0, !1, {
        fileName: "app/routes/account.addresses.new.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(
        HighlightedButton,
        {
          isSubmitting: navigation2.state === "submitting",
          type: "submit",
          onClick: submitForm,
          children: t("common.save")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/account.addresses.new.tsx",
          lineNumber: 97,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/account.addresses.new.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.addresses.new.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/account.addresses.new.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/account.addresses.tsx
var account_addresses_exports = {};
__export(account_addresses_exports, {
  action: () => action5,
  default: () => AccountAddresses,
  loader: () => loader6
});
import { Outlet as Outlet2, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { json as json5 } from "@remix-run/server-runtime";

// app/components/account/AddAddressCard.tsx
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link as Link6 } from "@remix-run/react";
import { useTranslation as useTranslation15 } from "react-i18next";
import { Fragment as Fragment4, jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function AddAddressCard() {
  let { t } = useTranslation15();
  return /* @__PURE__ */ jsxDEV22(Fragment4, { children: /* @__PURE__ */ jsxDEV22(
    Link6,
    {
      preventScrollReset: !0,
      className: "border border-black-500 p-5 min-h-[100px] h-full w-full flex flex-col justify-between mt-3",
      to: "/account/addresses/new",
      children: [
        /* @__PURE__ */ jsxDEV22("span", { className: "text-base-semi", children: t("address.new") }, void 0, !1, {
          fileName: "app/components/account/AddAddressCard.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV22(PlusIcon, { className: "w-6 h-6" }, void 0, !1, {
          fileName: "app/components/account/AddAddressCard.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/account/AddAddressCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/account/AddAddressCard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/account/EditAddressCard.tsx
import {
  ArrowPathIcon as ArrowPathIcon2,
  CreditCardIcon,
  PencilIcon,
  TrashIcon,
  TruckIcon
} from "@heroicons/react/24/outline";
import { Link as Link7, useFetcher as useFetcher2 } from "@remix-run/react";
import clsx6 from "clsx";
import { useState as useState5 } from "react";

// app/components/ErrorMessage.tsx
import { XCircleIcon as XCircleIcon3 } from "@heroicons/react/24/solid";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function ErrorMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsxDEV23("div", { className: "rounded-md bg-red-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxDEV23("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV23("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV23(XCircleIcon3, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/ErrorMessage.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ErrorMessage.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsxDEV23("h3", { className: "text-sm font-medium text-red-800", children: heading }, void 0, !1, {
        fileName: "app/components/ErrorMessage.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV23("p", { className: "text-sm text-red-700 mt-2", children: message }, void 0, !1, {
        fileName: "app/components/ErrorMessage.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ErrorMessage.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ErrorMessage.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ErrorMessage.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/account/EditAddressCard.tsx
import { useTranslation as useTranslation16 } from "react-i18next";
import { Fragment as Fragment5, jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function EditAddressCard({
  address,
  isActive = !1
}) {
  let setShipping = useFetcher2(), setBilling = useFetcher2(), deleteAddress = useFetcher2(), [isDeleteModalVisible, setDeleteModalVisible] = useState5(!1), { t } = useTranslation16();
  return /* @__PURE__ */ jsxDEV24(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV24(
      Modal_default,
      {
        isOpen: isDeleteModalVisible,
        close: () => setDeleteModalVisible(deleteAddress.state !== "idle"),
        children: /* @__PURE__ */ jsxDEV24(deleteAddress.Form, { method: "post", preventScrollReset: !0, children: [
          /* @__PURE__ */ jsxDEV24(Modal_default.Title, { children: t("address.deleteModal.title") }, void 0, !1, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV24(Modal_default.Body, { children: /* @__PURE__ */ jsxDEV24("div", { className: "space-y-4 my-4", children: [
            t("address.deleteModal.confirmation"),
            /* @__PURE__ */ jsxDEV24("input", { type: "hidden", name: "id", value: address.id }, void 0, !1, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            deleteAddress.data && /* @__PURE__ */ jsxDEV24(
              ErrorMessage,
              {
                heading: t("address.deleteModal.error"),
                message: deleteAddress.data?.message ?? t("common.defaultError")
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 50,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV24(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsxDEV24(
              Button,
              {
                type: "button",
                onClick: () => setDeleteModalVisible(!1),
                disabled: deleteAddress.state !== "idle",
                children: t("common.cancel")
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 60,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV24(
              HighlightedButton,
              {
                type: "submit",
                name: "_action",
                value: "deleteAddress",
                disabled: deleteAddress.state !== "idle",
                isSubmitting: deleteAddress.state !== "idle",
                children: t("common.yes")
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 67,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "div",
      {
        className: clsx6(
          "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between gap-8 transition-colors",
          {
            "border-gray-900": isActive
          }
        ),
        children: [
          /* @__PURE__ */ jsxDEV24("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV24("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxDEV24("span", { className: "text-left text-base-semi", children: address.fullName }, void 0, !1, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this),
              address.company && /* @__PURE__ */ jsxDEV24("span", { className: "text-small-regular text-gray-700", children: address.company }, void 0, !1, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV24("div", { className: "flex flex-col text-left text-base-regular mt-2", children: [
                /* @__PURE__ */ jsxDEV24("span", { children: [
                  address.streetLine1,
                  address.streetLine2 && /* @__PURE__ */ jsxDEV24("span", { children: [
                    ", ",
                    address.streetLine2
                  ] }, void 0, !0, {
                    fileName: "app/components/account/EditAddressCard.tsx",
                    lineNumber: 99,
                    columnNumber: 41
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 97,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV24("span", { children: [
                  address.postalCode,
                  ", ",
                  address.city
                ] }, void 0, !0, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 101,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV24("span", { children: [
                  address.province && `${address.province}, `,
                  address.country?.code?.toUpperCase()
                ] }, void 0, !0, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 104,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 96,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            (address.defaultShippingAddress || address.defaultBillingAddress) && /* @__PURE__ */ jsxDEV24("div", { className: "text-end text-gray-500 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxDEV24("span", { className: "block text-sm font-medium", children: t("common.default") }, void 0, !1, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 114,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV24("span", { className: "block text-xs mt-1", children: [
                address.defaultShippingAddress && t("common.shipping"),
                address.defaultShippingAddress && address.defaultBillingAddress && /* @__PURE__ */ jsxDEV24(Fragment5, { children: [
                  /* @__PURE__ */ jsxDEV24("br", {}, void 0, !1, {
                    fileName: "app/components/account/EditAddressCard.tsx",
                    lineNumber: 122,
                    columnNumber: 23
                  }, this),
                  "&\xA0"
                ] }, void 0, !0, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 121,
                  columnNumber: 21
                }, this),
                address.defaultBillingAddress && t("common.billing")
              ] }, void 0, !0, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 117,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 113,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24("div", { className: "flex flex-col md:flex-row items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV24("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxDEV24(
                Link7,
                {
                  role: "button",
                  preventScrollReset: !0,
                  className: "text-gray-700 flex items-center gap-x-2",
                  to: `/account/addresses/${address.id}`,
                  children: [
                    /* @__PURE__ */ jsxDEV24(PencilIcon, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "app/components/account/EditAddressCard.tsx",
                      lineNumber: 140,
                      columnNumber: 15
                    }, this),
                    t("common.edit")
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV24(
                "button",
                {
                  type: "button",
                  title: "Delete this address",
                  className: "text-gray-700 flex items-center gap-x-2",
                  disabled: deleteAddress.state !== "idle",
                  onClick: () => setDeleteModalVisible(!0),
                  children: [
                    deleteAddress.state === "idle" ? /* @__PURE__ */ jsxDEV24(TrashIcon, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "app/components/account/EditAddressCard.tsx",
                      lineNumber: 151,
                      columnNumber: 17
                    }, this) : /* @__PURE__ */ jsxDEV24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }, void 0, !1, {
                      fileName: "app/components/account/EditAddressCard.tsx",
                      lineNumber: 153,
                      columnNumber: 17
                    }, this),
                    t("common.remove")
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 143,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 133,
              columnNumber: 11
            }, this),
            (!address.defaultShippingAddress || !address.defaultBillingAddress) && /* @__PURE__ */ jsxDEV24("div", { children: /* @__PURE__ */ jsxDEV24("span", { className: "text-gray-500 flex gap-4", children: [
              !address.defaultShippingAddress && /* @__PURE__ */ jsxDEV24(setShipping.Form, { method: "post", children: [
                /* @__PURE__ */ jsxDEV24("input", { type: "hidden", name: "id", value: address.id }, void 0, !1, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 165,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV24(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultShipping",
                    type: "submit",
                    title: "Set as default shipping address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setShipping.state !== "idle",
                    children: [
                      setShipping.state === "idle" ? /* @__PURE__ */ jsxDEV24(TruckIcon, { className: "w-4 h-4" }, void 0, !1, {
                        fileName: "app/components/account/EditAddressCard.tsx",
                        lineNumber: 175,
                        columnNumber: 25
                      }, this) : /* @__PURE__ */ jsxDEV24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }, void 0, !1, {
                        fileName: "app/components/account/EditAddressCard.tsx",
                        lineNumber: 177,
                        columnNumber: 25
                      }, this),
                      t("common.shipping")
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/account/EditAddressCard.tsx",
                    lineNumber: 166,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 164,
                columnNumber: 19
              }, this),
              !address.defaultBillingAddress && /* @__PURE__ */ jsxDEV24(setBilling.Form, { method: "post", children: [
                /* @__PURE__ */ jsxDEV24("input", { type: "hidden", name: "id", value: address.id }, void 0, !1, {
                  fileName: "app/components/account/EditAddressCard.tsx",
                  lineNumber: 186,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV24(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultBilling",
                    type: "submit",
                    title: "Set as default billing address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setBilling.state !== "idle",
                    children: [
                      setBilling.state === "idle" ? /* @__PURE__ */ jsxDEV24(CreditCardIcon, { className: "w-4 h-4" }, void 0, !1, {
                        fileName: "app/components/account/EditAddressCard.tsx",
                        lineNumber: 196,
                        columnNumber: 25
                      }, this) : /* @__PURE__ */ jsxDEV24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }, void 0, !1, {
                        fileName: "app/components/account/EditAddressCard.tsx",
                        lineNumber: 198,
                        columnNumber: 25
                      }, this),
                      t("common.billing")
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/account/EditAddressCard.tsx",
                    lineNumber: 187,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 185,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 161,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 132,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/account/EditAddressCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/account.addresses.tsx
import { Fragment as Fragment6, jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  let activeCustomerAddresses = (await getActiveCustomerAddresses({ request })).activeCustomer;
  return json5({ activeCustomerAddresses });
}
async function action5({ request }) {
  let formData = await request.formData(), id = formData.get("id"), _action = formData.get("_action"), t = await getFixedT(request);
  if (!id || id.length === 0)
    return json5(
      {
        errorCode: "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR" /* IdentifierChangeTokenInvalidError */,
        // TODO: I dont think this error is 100% appropriate - decide later
        message: t("address.idError")
      },
      {
        status: 400
        // Bad request
      }
    );
  if (_action === "setDefaultShipping")
    return updateCustomerAddress({ id, defaultShippingAddress: !0 }, { request }), null;
  if (_action === "setDefaultBilling")
    return updateCustomerAddress({ id, defaultBillingAddress: !0 }, { request }), null;
  if (_action === "deleteAddress") {
    let { success } = await deleteCustomerAddress(id, { request });
    return json5(null, { status: success ? 200 : 400 });
  }
  return json5(
    {
      message: t("common.unknowError"),
      errorCode: "UNKNOWN_ERROR" /* UnknownError */
    },
    {
      status: 400
    }
  );
}
function AccountAddresses() {
  let { activeCustomerAddresses } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV25(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV25(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV25("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4", children: [
      /* @__PURE__ */ jsxDEV25(AddAddressCard, {}, void 0, !1, {
        fileName: "app/routes/account.addresses.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      activeCustomerAddresses?.addresses.map((address) => /* @__PURE__ */ jsxDEV25(EditAddressCard, { address }, address.id, !1, {
        fileName: "app/routes/account.addresses.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.addresses.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// app/routes/collections.$slug.tsx
var collections_slug_exports = {};
__export(collections_slug_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => CollectionSlug,
  loader: () => loader7,
  meta: () => meta2
});
import { useLoaderData as useLoaderData8, useSubmit as useSubmit3 } from "@remix-run/react";
import { useRef as useRef5, useState as useState6 } from "react";
import { useTranslation as useTranslation23 } from "react-i18next";
import { ValidatedForm as ValidatedForm2 } from "remix-validated-form";

// app/components/Breadcrumbs.tsx
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link as Link8 } from "@remix-run/react";
import { useTranslation as useTranslation17 } from "react-i18next";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function Breadcrumbs({
  items
}) {
  let { t } = useTranslation17();
  return /* @__PURE__ */ jsxDEV26("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxDEV26("ol", { role: "list", className: "flex items-center space-x-1 md:space-x-4", children: [
    /* @__PURE__ */ jsxDEV26("li", { children: /* @__PURE__ */ jsxDEV26("div", { children: /* @__PURE__ */ jsxDEV26(Link8, { to: "/", className: "text-gray-400 hover:text-gray-500", children: [
      /* @__PURE__ */ jsxDEV26(HomeIcon, { className: "flex-shrink-0 h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV26("span", { className: "sr-only", children: t("home") }, void 0, !1, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    items.filter((item) => item.name !== "__root_collection__").map((item, index) => /* @__PURE__ */ jsxDEV26("li", { children: /* @__PURE__ */ jsxDEV26("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxDEV26(
        "svg",
        {
          className: "flex-shrink-0 h-5 w-5 text-gray-300",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxDEV26("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" }, void 0, !1, {
            fileName: "app/components/Breadcrumbs.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Breadcrumbs.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV26(
        Link8,
        {
          to: "/collections/" + item.slug,
          className: "ml-2 md:ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700",
          children: item.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/Breadcrumbs.tsx",
          lineNumber: 37,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) }, item.name, !1, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/Breadcrumbs.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Breadcrumbs.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/collections/CollectionCard.tsx
import { Link as Link9 } from "@remix-run/react";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function CollectionCard({
  collection
}) {
  return /* @__PURE__ */ jsxDEV27(
    Link9,
    {
      to: "/collections/" + collection.slug,
      prefetch: "intent",
      className: "max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto",
      children: [
        /* @__PURE__ */ jsxDEV27("span", { "aria-hidden": "true", className: "", children: /* @__PURE__ */ jsxDEV27("div", { className: "w-full h-full object-center object-cover", children: /* @__PURE__ */ jsxDEV27("img", { src: collection.featuredAsset?.preview + "?w=300&h=300" }, void 0, !1, {
          fileName: "app/components/collections/CollectionCard.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/collections/CollectionCard.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/collections/CollectionCard.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV27(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
          },
          void 0,
          !1,
          {
            fileName: "app/components/collections/CollectionCard.tsx",
            lineNumber: 21,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV27("span", { className: "absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white", children: collection.name }, void 0, !1, {
          fileName: "app/components/collections/CollectionCard.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    },
    collection.id,
    !0,
    {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// app/components/facet-filter/facet-filter-tracker.ts
var FacetFilterTracker = class {
  _facetsWithValues = [];
  get facetsWithValues() {
    return this._facetsWithValues;
  }
  update(searchResult, resultWithoutFacetValueFilters, activeFacetValueIds) {
    this._facetsWithValues = this.groupFacetValues(
      resultWithoutFacetValueFilters,
      searchResult.facetValues,
      activeFacetValueIds
    );
  }
  groupFacetValues(withoutFilters, current, activeFacetValueIds) {
    if (!current)
      return [];
    let facetMap = /* @__PURE__ */ new Map();
    for (let {
      facetValue: { id, name, facet },
      count
    } of withoutFilters.facetValues) {
      if (count === withoutFilters.totalItems)
        continue;
      let facetFromMap = facetMap.get(facet.id), selected = activeFacetValueIds.includes(id);
      facetFromMap ? facetFromMap.values.push({ id, name, selected }) : facetMap.set(facet.id, {
        id: facet.id,
        name: facet.name,
        values: [{ id, name, selected }]
      });
    }
    return Array.from(facetMap.values());
  }
};

// app/components/FiltersButton.tsx
import { FunnelIcon } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation18 } from "react-i18next";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function FiltersButton({
  filterCount,
  onClick
}) {
  let { t } = useTranslation18();
  return /* @__PURE__ */ jsxDEV28(
    "button",
    {
      type: "button",
      className: "flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden",
      onClick,
      children: [
        filterCount ? /* @__PURE__ */ jsxDEV28("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800", children: filterCount }, void 0, !1, {
          fileName: "app/components/FiltersButton.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this) : "",
        /* @__PURE__ */ jsxDEV28("span", { children: t("common.filters") }, void 0, !1, {
          fileName: "app/components/FiltersButton.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV28(FunnelIcon, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/FiltersButton.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/components/facet-filter/FacetFilterControls.tsx
import { Fragment as Fragment7 } from "react";
import { Dialog as Dialog3, Disclosure, Transition as Transition3 } from "@headlessui/react";
import { XMarkIcon as XMarkIcon3 } from "@heroicons/react/24/outline";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";
import { useTranslation as useTranslation19 } from "react-i18next";
import { Fragment as Fragment8, jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function FacetFilterControls({
  facetFilterTracker,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  let [searchParams] = useSearchParams2(), q = searchParams.getAll("q"), { t } = useTranslation19();
  return /* @__PURE__ */ jsxDEV29(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV29(Transition3.Root, { show: mobileFiltersOpen, as: Fragment7, children: /* @__PURE__ */ jsxDEV29(
      Dialog3,
      {
        as: "div",
        className: "relative z-40 lg:hidden",
        onClose: setMobileFiltersOpen,
        children: [
          /* @__PURE__ */ jsxDEV29(
            Transition3.Child,
            {
              as: Fragment7,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsxDEV29("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, !1, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 31,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV29("div", { className: "fixed inset-0 flex z-40", children: /* @__PURE__ */ jsxDEV29(
            Transition3.Child,
            {
              as: Fragment7,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "translate-x-full",
              children: /* @__PURE__ */ jsxDEV29(Dialog3.Panel, { className: "ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto", children: [
                /* @__PURE__ */ jsxDEV29("div", { className: "px-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxDEV29("h2", { className: "text-lg font-medium text-gray-900", children: t("common.filters") }, void 0, !1, {
                    fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                    lineNumber: 55,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV29(
                    "button",
                    {
                      type: "button",
                      className: "-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400",
                      onClick: () => setMobileFiltersOpen(!1),
                      children: [
                        /* @__PURE__ */ jsxDEV29("span", { className: "sr-only", children: t("common.closeMenu") }, void 0, !1, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 63,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ jsxDEV29(XMarkIcon3, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 64,
                          columnNumber: 21
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                      lineNumber: 58,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                  lineNumber: 54,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV29("div", { className: "mt-4 border-t border-gray-200", children: [
                  /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "q", value: q }, void 0, !1, {
                    fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                    lineNumber: 68,
                    columnNumber: 19
                  }, this),
                  facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsxDEV29(
                    Disclosure,
                    {
                      as: "div",
                      defaultOpen: !0,
                      className: "border-t border-gray-200 px-4 py-6",
                      children: ({ open }) => /* @__PURE__ */ jsxDEV29(Fragment8, { children: [
                        /* @__PURE__ */ jsxDEV29("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ jsxDEV29(Disclosure.Button, { className: "px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500", children: [
                          /* @__PURE__ */ jsxDEV29("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, !1, {
                            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                            lineNumber: 80,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV29("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsxDEV29(
                            MinusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                              lineNumber: 85,
                              columnNumber: 35
                            },
                            this
                          ) : /* @__PURE__ */ jsxDEV29(
                            PlusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                              lineNumber: 90,
                              columnNumber: 35
                            },
                            this
                          ) }, void 0, !1, {
                            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                            lineNumber: 83,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 79,
                          columnNumber: 29
                        }, this) }, void 0, !1, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 78,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV29(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsxDEV29("div", { className: "space-y-6", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxDEV29(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              /* @__PURE__ */ jsxDEV29(
                                "input",
                                {
                                  id: `filter-mobile-${facet.id}-${optionIdx}`,
                                  defaultValue: value.id,
                                  type: "checkbox",
                                  checked: value.selected,
                                  onChange: (ev) => {
                                    document.getElementById(
                                      `filter-${facet.id}-${optionIdx}`
                                    ).checked = ev.target.checked;
                                  },
                                  className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                                  lineNumber: 105,
                                  columnNumber: 35
                                },
                                this
                              ),
                              /* @__PURE__ */ jsxDEV29(
                                "label",
                                {
                                  htmlFor: `filter-mobile-${facet.id}-${optionIdx}`,
                                  className: "ml-3 min-w-0 flex-1 text-gray-500",
                                  children: value.name
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                                  lineNumber: 120,
                                  columnNumber: 35
                                },
                                this
                              )
                            ]
                          },
                          value.id,
                          !0,
                          {
                            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                            lineNumber: 101,
                            columnNumber: 33
                          },
                          this
                        )) }, void 0, !1, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 99,
                          columnNumber: 29
                        }, this) }, void 0, !1, {
                          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                          lineNumber: 98,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                        lineNumber: 77,
                        columnNumber: 25
                      }, this)
                    },
                    facet.id,
                    !1,
                    {
                      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                      lineNumber: 70,
                      columnNumber: 21
                    },
                    this
                  ))
                ] }, void 0, !0, {
                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                  lineNumber: 67,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 53,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 44,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "q", value: q }, void 0, !1, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsxDEV29(
        Disclosure,
        {
          as: "div",
          defaultOpen: !0,
          className: "border-b border-gray-200 py-6",
          children: ({ open }) => /* @__PURE__ */ jsxDEV29(Fragment8, { children: [
            /* @__PURE__ */ jsxDEV29("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ jsxDEV29(Disclosure.Button, { className: "py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ jsxDEV29("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, !1, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV29("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsxDEV29(
                MinusSmallIcon,
                {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                  lineNumber: 159,
                  columnNumber: 25
                },
                this
              ) : /* @__PURE__ */ jsxDEV29(PlusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 164,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV29(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsxDEV29("div", { className: "space-y-4", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxDEV29("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV29(
                "input",
                {
                  id: `filter-${facet.id}-${optionIdx}`,
                  name: "fvid",
                  defaultValue: value.id,
                  type: "checkbox",
                  checked: value.selected,
                  onChange: () => {
                  },
                  className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                  lineNumber: 173,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV29(
                "label",
                {
                  htmlFor: `filter-${facet.id}-${optionIdx}`,
                  className: "ml-3 text-sm text-gray-600",
                  children: value.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                  lineNumber: 182,
                  columnNumber: 25
                },
                this
              )
            ] }, value.id, !0, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 172,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 170,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 169,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        },
        facet.id,
        !1,
        {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 144,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/facet-filter/FacetFilterControls.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/components/products/ProductCard.tsx
import { Link as Link10 } from "@remix-run/react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode
}) {
  return /* @__PURE__ */ jsxDEV30(Link10, { className: "flex flex-col", prefetch: "intent", to: `/products/${slug}`, children: [
    /* @__PURE__ */ jsxDEV30(
      "img",
      {
        className: "rounded-xl flex-grow object-cover aspect-[7/8]",
        alt: "",
        src: productAsset?.preview + "?w=300&h=400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV30("div", { className: "h-2" }, void 0, !1, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "text-sm text-gray-700", children: productName }, void 0, !1, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsxDEV30(Price, { priceWithTax, currencyCode }, void 0, !1, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/products/ProductCard.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/utils/pagination.ts
import { z as z2 } from "zod";
function paginationValidationSchema(allowedPaginationLimits4) {
  let paginationLimitsAsArray = Array.from(allowedPaginationLimits4), paginationLimitDerivedMin = Math.min(...paginationLimitsAsArray), paginationLimitDerivedMax = Math.max(...paginationLimitsAsArray), paginationLimitSchema = z2.number({
    required_error: "Limit is required",
    invalid_type_error: "Limit must be a number",
    coerce: !0
  }).int().min(paginationLimitDerivedMin, {
    message: `Limit must be at least ${paginationLimitDerivedMin}`
  }).max(paginationLimitDerivedMax, {
    message: `Maximum limit is ${paginationLimitDerivedMax}`
  }).refine((x) => allowedPaginationLimits4.has(x)), paginationPageSchema = z2.number({
    required_error: "Page is required",
    invalid_type_error: "Page must be a number",
    coerce: !0
  }).int().min(1, { message: "Page must be at least 1" }).max(1e3, { message: "Page can't be over 1000" });
  return z2.object({
    limit: paginationLimitSchema,
    page: paginationPageSchema
  });
}
function translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) {
  return (appliedPaginationPage - 1) * appliedPaginationLimit + 1;
}
function translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, totalItems) {
  return translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) + totalItems - 1;
}

// app/components/Pagination.tsx
import { ArrowPathIcon as ArrowPathIcon3 } from "@heroicons/react/24/solid";
import { useNavigation as useNavigation3 } from "@remix-run/react";
import clsx7 from "clsx";
import { useTranslation as useTranslation20 } from "react-i18next";
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
function Pagination({
  appliedPaginationLimit,
  allowedPaginationLimits: allowedPaginationLimits4,
  totalItems,
  appliedPaginationPage,
  ...props
}) {
  let navigation2 = useNavigation3(), { t } = useTranslation20();
  return /* @__PURE__ */ jsxDEV31(
    "div",
    {
      ...props,
      className: clsx7(
        "flex flex-col md:flex-row justify-center items-end md:items-center gap-4 lg:gap-6",
        props.className
      ),
      children: [
        /* @__PURE__ */ jsxDEV31("span", { className: "flex gap-4 items-center", children: [
          navigation2.state !== "idle" && /* @__PURE__ */ jsxDEV31(ArrowPathIcon3, { className: "animate-spin h-6 w-6 text-gray-500" }, void 0, !1, {
            fileName: "app/components/Pagination.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV31(
            Select,
            {
              name: "limit",
              required: !0,
              noPlaceholder: !0,
              defaultValue: appliedPaginationLimit,
              children: Array.from(allowedPaginationLimits4).map((x) => /* @__PURE__ */ jsxDEV31("option", { value: x, children: [
                x,
                " ",
                t("common.perPage")
              ] }, x, !0, {
                fileName: "app/components/Pagination.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/components/Pagination.tsx",
              lineNumber: 38,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Pagination.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV31("div", { className: "flex", role: "group", children: [
          /* @__PURE__ */ jsxDEV31(
            Button,
            {
              name: "page",
              type: "submit",
              value: appliedPaginationPage - 1,
              disabled: appliedPaginationPage <= 1 || navigation2.state !== "idle",
              className: "!text-sm rounded-r-none border-r-0",
              children: t("common.prev")
            },
            void 0,
            !1,
            {
              fileName: "app/components/Pagination.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV31(
            Button,
            {
              name: "page",
              type: "submit",
              value: appliedPaginationPage + 1,
              disabled: appliedPaginationPage * appliedPaginationLimit >= totalItems || navigation2.state !== "idle",
              className: "!text-sm rounded-l-none",
              children: t("common.next")
            },
            void 0,
            !1,
            {
              fileName: "app/components/Pagination.tsx",
              lineNumber: 62,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Pagination.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/components/products/NoResultsHint.tsx
import { useTranslation as useTranslation21 } from "react-i18next";
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
function NoResultsHint({
  facetFilterTracker,
  ...props
}) {
  let { t } = useTranslation21();
  return /* @__PURE__ */ jsxDEV32("div", { ...props, children: [
    /* @__PURE__ */ jsxDEV32("h2", { className: "text-2xl sm:text-4xl font-light tracking-tight text-gray-900", children: t("product.noResults") }, void 0, !1, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    facetFilterTracker?.facetsWithValues.some(
      (f) => f.values.some((v) => v.selected)
    ) && /* @__PURE__ */ jsxDEV32("h3", { className: "text-lg sm:text-2xl font-light tracking-tight text-gray-900", children: t("product.filterTip") }, void 0, !1, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/products/NoResultsHint.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/products/FilterableProductGrid.tsx
import { useRef as useRef4 } from "react";
import { useTranslation as useTranslation22 } from "react-i18next";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function FilterableProductGrid({
  result,
  resultWithoutFacetValueFilters,
  facetValueIds,
  appliedPaginationPage,
  appliedPaginationLimit,
  allowedPaginationLimits: allowedPaginationLimits4,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  let { t } = useTranslation22(), facetValuesTracker = useRef4(new FacetFilterTracker());
  return facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  ), /* @__PURE__ */ jsxDEV33("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
    /* @__PURE__ */ jsxDEV33(
      FacetFilterControls,
      {
        facetFilterTracker: facetValuesTracker.current,
        mobileFiltersOpen,
        setMobileFiltersOpen
      },
      void 0,
      !1,
      {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    ),
    result.items.length > 0 ? /* @__PURE__ */ jsxDEV33("div", { className: "sm:col-span-5 lg:col-span-4 space-y-6", children: [
      /* @__PURE__ */ jsxDEV33("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: result.items.map((item) => /* @__PURE__ */ jsxDEV33(ProductCard, { ...item }, item.productId, !1, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV33("span", { className: "self-start text-gray-500 text-sm mt-2", children: [
          t("product.showing"),
          " ",
          translatePaginationFrom(
            appliedPaginationPage,
            appliedPaginationLimit
          ),
          " ",
          t("product.to"),
          " ",
          translatePaginationTo(
            appliedPaginationPage,
            appliedPaginationLimit,
            result.items.length
          )
        ] }, void 0, !0, {
          fileName: "app/components/products/FilterableProductGrid.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV33(
          Pagination,
          {
            appliedPaginationLimit,
            allowedPaginationLimits: allowedPaginationLimits4,
            totalItems: result.totalItems,
            appliedPaginationPage
          },
          void 0,
          !1,
          {
            fileName: "app/components/products/FilterableProductGrid.tsx",
            lineNumber: 71,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV33(
      NoResultsHint,
      {
        facetFilterTracker: facetValuesTracker.current,
        className: "sm:col-span-4 sm:p-4"
      },
      void 0,
      !1,
      {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 80,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/products/FilterableProductGrid.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/providers/products/products.ts
import gql8 from "graphql-tag";
function search(variables, options) {
  return sdk.search(variables, options);
}
function searchFacetValues(variables, options) {
  return sdk.searchFacetValues(variables, options);
}
function getProductBySlug(slug, options) {
  return sdk.product({ slug }, options);
}
var detailedProductFragment = gql8`
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
gql8`
  query product($slug: String, $id: ID) {
    product(slug: $slug, id: $id) {
      ...DetailedProduct
    }
  }
`;
var listedProductFragment = gql8`
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
gql8`
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
gql8`
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

// app/utils/filtered-search-loader.ts
import { redirect as redirect3 } from "@remix-run/server-runtime";
function filteredSearchLoaderFromPagination(allowedPaginationLimits4, paginationLimitMinimumDefault4) {
  let searchPaginationSchema = paginationValidationSchema(
    allowedPaginationLimits4
  );
  return {
    validator: searchPaginationSchema,
    filteredSearchLoader: async ({ params, request }) => {
      let url = new URL(request.url), term = url.searchParams.get("q"), facetValueIds = url.searchParams.getAll("fvid"), limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault4, page = url.searchParams.get("page") ?? 1, zodResult = searchPaginationSchema.safeParse({ limit, page });
      if (!zodResult.success)
        throw url.search = "", redirect3(url.href);
      let resultPromises, searchResultPromise = search(
        {
          input: {
            groupByProduct: !0,
            term,
            facetValueFilters: [{ or: facetValueIds }],
            collectionSlug: params.slug,
            take: zodResult.data.limit,
            skip: (zodResult.data.page - 1) * zodResult.data.limit
          }
        },
        { request }
      );
      facetValueIds.length ? resultPromises = [
        searchResultPromise,
        searchFacetValues(
          {
            input: {
              groupByProduct: !0,
              term,
              collectionSlug: params.slug
            }
          },
          { request }
        )
      ] : resultPromises = [searchResultPromise, searchResultPromise];
      let [result, resultWithoutFacetValueFilters] = await Promise.all(
        resultPromises
      );
      return {
        term,
        facetValueIds,
        result: result.search,
        resultWithoutFacetValueFilters: resultWithoutFacetValueFilters.search,
        appliedPaginationLimit: zodResult.data.limit,
        appliedPaginationPage: zodResult.data.page
      };
    }
  };
}

// app/routes/collections.$slug.tsx
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
var meta2 = ({ data }) => [
  {
    title: data?.collection ? `${data.collection?.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }
], paginationLimitMinimumDefault = 25, allowedPaginationLimits = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault,
  50,
  100
]), { validator: validator2, filteredSearchLoader } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits,
  paginationLimitMinimumDefault
);
async function loader7({ params, request, context }) {
  let {
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
    term
  } = await filteredSearchLoader({
    params,
    request,
    context
  }), collection = (await sdk.collection({ slug: params.slug })).collection;
  if (!collection?.id || !collection?.name)
    throw new Response("Not Found", {
      status: 404
    });
  return {
    term,
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage
  };
}
function CollectionSlug() {
  let loaderData = useLoaderData8(), { collection, result, resultWithoutFacetValueFilters, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState6(!1);
  useRef5(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit3(), { t } = useTranslation23();
  return /* @__PURE__ */ jsxDEV34("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV34("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV34("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: collection.name }, void 0, !1, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV34(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 89,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV34(Breadcrumbs, { items: collection.breadcrumbs }, void 0, !1, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    collection.children?.length ? /* @__PURE__ */ jsxDEV34("div", { className: "max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16", children: [
      /* @__PURE__ */ jsxDEV34("h2", { className: "text-2xl font-light text-gray-900", children: t("product.collections") }, void 0, !1, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV34("div", { className: "mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4", children: collection.children.map((child) => /* @__PURE__ */ jsxDEV34(
        CollectionCard,
        {
          collection: child
        },
        child.id,
        !1,
        {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 103,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) : "",
    /* @__PURE__ */ jsxDEV34(
      ValidatedForm2,
      {
        validator: withZod(validator2),
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsxDEV34(
          FilterableProductGrid,
          {
            allowedPaginationLimits,
            mobileFiltersOpen,
            setMobileFiltersOpen,
            ...loaderData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/collections.$slug.tsx",
            lineNumber: 119,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/collections.$slug.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let { t } = useTranslation23();
  return /* @__PURE__ */ jsxDEV34("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV34("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.collectionNotFound") }, void 0, !1, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV34("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
      /* @__PURE__ */ jsxDEV34("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV34("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV34("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV34("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV34("div", { className: "sm:col-span-5 lg:col-span-4", children: /* @__PURE__ */ jsxDEV34("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: [
        /* @__PURE__ */ jsxDEV34("div", { className: "h-64 bg-slate-200 rounded" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV34("div", { className: "h-64 bg-slate-200 rounded" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV34("div", { className: "h-64 bg-slate-200 rounded" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV34("div", { className: "h-64 bg-slate-200 rounded" }, void 0, !1, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/collections.$slug.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/account.password.tsx
var account_password_exports = {};
__export(account_password_exports, {
  action: () => action6,
  default: () => AccountPassword,
  validator: () => validator3
});
import { PencilIcon as PencilIcon2 } from "@heroicons/react/24/outline";
import { useActionData as useActionData3, useNavigation as useNavigation4 } from "@remix-run/react";
import { json as json6 } from "@remix-run/server-runtime";
import { useEffect as useEffect9, useRef as useRef6, useState as useState7 } from "react";
import { ValidatedForm as ValidatedForm3, validationError as validationError3 } from "remix-validated-form";
import { z as z3 } from "zod";

// app/components/SuccessMessage.tsx
import { CheckIcon } from "@heroicons/react/24/solid";
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function SuccessMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsxDEV35("div", { className: "rounded-md bg-green-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxDEV35("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV35("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV35(CheckIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsxDEV35("h3", { className: "text-sm font-medium text-green-800", children: heading }, void 0, !1, {
        fileName: "app/components/SuccessMessage.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV35("p", { className: "text-sm text-green-700 mt-2", children: message }, void 0, !1, {
        fileName: "app/components/SuccessMessage.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SuccessMessage.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SuccessMessage.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/utils/validation-helper.ts
function isErrorResult(input) {
  return input && input.message !== void 0 && input.errorCode !== void 0;
}
function isValidationErrorResponseData(input) {
  return input && input.fieldErrors !== void 0;
}

// app/routes/account.password.tsx
import { useTranslation as useTranslation24 } from "react-i18next";
import { Fragment as Fragment9, jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
var validator3 = withZod(
  z3.object({
    currentPassword: z3.string().min(1, { message: "Password is required" }),
    newPassword: z3.string().min(1, { message: "Password is required" }),
    confirmPassword: z3.string().min(1, { message: "Password is required" })
  }).refine(
    ({ newPassword, confirmPassword }) => newPassword === confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords must match"
    }
  )
);
async function action6({ request }) {
  let body = await request.formData(), result = await validator3.validate(body);
  if (result.error)
    return validationError3(result.error);
  let { currentPassword, newPassword } = result.data, res = await updateCustomerPassword(
    { currentPassword, newPassword },
    { request }
  );
  return res.__typename !== "Success" ? json6(res, { status: 401 }) : json6(res);
}
function AccountPassword() {
  let [editing, setEditing] = useState7(!1), [isSaved, setIsSaved] = useState7(!1), [errorMessage, setErrorMessage] = useState7(), actionDataHook = useActionData3(), { state } = useNavigation4(), formRef = useRef6(null), { t } = useTranslation24();
  return useEffect9(() => {
    if (!isValidationErrorResponseData(actionDataHook)) {
      if (isErrorResult(actionDataHook)) {
        setErrorMessage(actionDataHook.message), setIsSaved(!1);
        return;
      }
      actionDataHook?.success && (setErrorMessage(void 0), setIsSaved(!0), setEditing(!1), formRef.current?.reset());
    }
  }, [actionDataHook]), /* @__PURE__ */ jsxDEV36(ValidatedForm3, { validator: validator3, method: "post", formRef, children: /* @__PURE__ */ jsxDEV36("div", { className: "p-4 space-y-4", children: [
    editing && /* @__PURE__ */ jsxDEV36(Fragment9, { children: [
      /* @__PURE__ */ jsxDEV36("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: /* @__PURE__ */ jsxDEV36("div", { children: /* @__PURE__ */ jsxDEV36(
        Input,
        {
          required: !0,
          label: t("account.currentPassword"),
          name: "currentPassword",
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 96,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV36("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV36("div", { children: /* @__PURE__ */ jsxDEV36(
          Input,
          {
            required: !0,
            label: t("account.newPassword"),
            name: "newPassword",
            type: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/account.password.tsx",
            lineNumber: 106,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV36("div", { children: /* @__PURE__ */ jsxDEV36(
          Input,
          {
            required: !0,
            label: t("account.confirmPassword"),
            name: "confirmPassword",
            type: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/account.password.tsx",
            lineNumber: 114,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    isSaved && /* @__PURE__ */ jsxDEV36(
      SuccessMessage,
      {
        heading: t("account.pwdSuccessHeading"),
        message: t("account.pwdSuccessMessage")
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 125,
        columnNumber: 11
      },
      this
    ),
    errorMessage && /* @__PURE__ */ jsxDEV36(
      ErrorMessage,
      {
        heading: t("account.pwdErrorMessage"),
        message: errorMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 131,
        columnNumber: 11
      },
      this
    ),
    editing ? /* @__PURE__ */ jsxDEV36("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxDEV36(
        HighlightedButton,
        {
          type: "submit",
          isSubmitting: state === "submitting",
          children: t("account.savePassword")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 138,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV36(Button, { type: "reset", onClick: () => setEditing(!1), children: t("common.cancel") }, void 0, !1, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV36(Fragment9, { children: /* @__PURE__ */ jsxDEV36(HighlightedButton, { type: "button", onClick: () => setEditing(!0), children: [
      /* @__PURE__ */ jsxDEV36(PencilIcon2, { className: "w-4 h-4" }, void 0, !1, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this),
      " ",
      t("account.changePassword")
    ] }, void 0, !0, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.password.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/account.password.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/api.active-order.tsx
var api_active_order_exports = {};
__export(api_active_order_exports, {
  action: () => action7,
  loader: () => loader8
});
import { json as json7 } from "@remix-run/server-runtime";

// app/utils/validation.ts
function shippingFormDataIsValid(data) {
  let shippingFormData = data instanceof FormData ? Object.fromEntries(data.entries()) : data;
  return !!(shippingFormData.streetLine1 && shippingFormData.city && shippingFormData.countryCode && shippingFormData.postalCode);
}
function replaceEmptyString(input) {
  return !input || input.trim().length == 0 ? "-" : input;
}

// app/routes/api.active-order.tsx
async function loader8({ request }) {
  return {
    activeOrder: await getActiveOrder({ request })
  };
}
async function action7({ request, params }) {
  let body = await request.formData(), formAction = body.get("action"), activeOrder, error = {
    errorCode: "NO_ACTIVE_ORDER_ERROR" /* NoActiveOrderError */,
    message: ""
  };
  switch (formAction) {
    case "setCheckoutShipping":
      if (shippingFormDataIsValid(body)) {
        let shippingFormData = Object.fromEntries(
          body.entries()
        ), result = await setOrderShippingAddress(
          {
            city: shippingFormData.city,
            company: shippingFormData.company,
            countryCode: shippingFormData.countryCode,
            customFields: shippingFormData.customFields,
            fullName: shippingFormData.fullName,
            phoneNumber: shippingFormData.phoneNumber,
            postalCode: shippingFormData.postalCode,
            province: shippingFormData.province,
            streetLine1: shippingFormData.streetLine1,
            streetLine2: shippingFormData.streetLine2
          },
          { request }
        );
        result.setOrderShippingAddress.__typename === "Order" ? activeOrder = result.setOrderShippingAddress : error = result.setOrderShippingAddress;
      }
      break;
    case "setOrderCustomer": {
      let customerData = Object.fromEntries(
        body.entries()
      ), result = await setCustomerForOrder(
        {
          emailAddress: customerData.emailAddress,
          firstName: customerData.firstName,
          lastName: customerData.lastName
        },
        { request }
      );
      result.setCustomerForOrder.__typename === "Order" ? activeOrder = result.setCustomerForOrder : error = result.setCustomerForOrder;
      break;
    }
    case "setShippingMethod": {
      let shippingMethodId = body.get("shippingMethodId");
      if (typeof shippingMethodId == "string") {
        let result = await setOrderShippingMethod(shippingMethodId, {
          request
        });
        result.setOrderShippingMethod.__typename === "Order" ? activeOrder = result.setOrderShippingMethod : error = result.setOrderShippingMethod;
      }
      break;
    }
    case "removeItem": {
      let lineId = body.get("lineId"), result = await removeOrderLine(lineId?.toString() ?? "", {
        request
      });
      result.removeOrderLine.__typename === "Order" ? activeOrder = result.removeOrderLine : error = result.removeOrderLine;
      break;
    }
    case "adjustItem": {
      let lineId = body.get("lineId"), quantity = body.get("quantity");
      if (lineId && quantity != null) {
        let result = await adjustOrderLine(lineId?.toString(), +quantity, {
          request
        });
        result.adjustOrderLine.__typename === "Order" ? activeOrder = result.adjustOrderLine : error = result.adjustOrderLine;
      }
      break;
    }
    case "addItemToOrder": {
      let variantId = body.get("variantId")?.toString(), quantity = Number(body.get("quantity")?.toString() ?? 1);
      if (!variantId || !(quantity > 0))
        throw new Error(
          `Invalid input: variantId ${variantId}, quantity ${quantity}`
        );
      let result = await addItemToOrder(variantId, quantity, {
        request
      });
      result.addItemToOrder.__typename === "Order" ? activeOrder = result.addItemToOrder : error = result.addItemToOrder;
      break;
    }
    case "addPaymentToOrder":
    default:
  }
  let headers = {}, sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(
    request?.headers.get("Cookie")
  );
  return session.flash("activeOrderError", error), headers = {
    "Set-Cookie": await sessionStorage2.commitSession(session)
  }, json7(
    { activeOrder: activeOrder || await getActiveOrder({ request }) },
    {
      headers
    }
  );
}

// app/routes/checkout.payment.tsx
var checkout_payment_exports = {};
__export(checkout_payment_exports, {
  action: () => action8,
  default: () => CheckoutPayment,
  loader: () => loader9
});
import { json as json9, redirect as redirect4 } from "@remix-run/server-runtime";
import { useLoaderData as useLoaderData11, useOutletContext } from "@remix-run/react";

// app/components/checkout/stripe/StripePayments.tsx
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// app/components/checkout/stripe/CheckoutForm.tsx
import {
  useStripe,
  useElements,
  PaymentElement
} from "@stripe/react-stripe-js";
import { CreditCardIcon as CreditCardIcon2 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation25 } from "react-i18next";
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
var CheckoutForm = ({ orderCode }) => {
  let stripe = useStripe(), elements = useElements(), { t } = useTranslation25();
  return /* @__PURE__ */ jsxDEV37("form", { onSubmit: async (event) => {
    if (event.preventDefault(), !stripe || !elements)
      return;
    let result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: location.origin + `/checkout/confirmation/${orderCode}`
      }
    });
    result.error && console.log(result.error.message);
  }, children: [
    /* @__PURE__ */ jsxDEV37(PaymentElement, {}, void 0, !1, {
      fileName: "app/components/checkout/stripe/CheckoutForm.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV37(
      "button",
      {
        disabled: !stripe,
        className: "flex w-full px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 my-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: [
          /* @__PURE__ */ jsxDEV37(CreditCardIcon2, { className: "w-5 h-5" }, void 0, !1, {
            fileName: "app/components/checkout/stripe/CheckoutForm.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV37("span", { children: [
            t("checkout.payWith"),
            " Stripe"
          ] }, void 0, !0, {
            fileName: "app/components/checkout/stripe/CheckoutForm.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/checkout/stripe/CheckoutForm.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/checkout/stripe/CheckoutForm.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

// app/components/checkout/stripe/StripePayments.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
var _stripe;
function getStripe(publishableKey) {
  return _stripe || (_stripe = loadStripe(publishableKey)), _stripe;
}
function StripePayments({
  clientSecret,
  publishableKey,
  orderCode
}) {
  let options = {
    // passing the client secret obtained from the server
    clientSecret
  }, stripePromise = getStripe(publishableKey);
  return /* @__PURE__ */ jsxDEV38(Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ jsxDEV38(CheckoutForm, { orderCode }, void 0, !1, {
    fileName: "app/components/checkout/stripe/StripePayments.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/checkout/stripe/StripePayments.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/checkout/DummyPayments.tsx
import { CreditCardIcon as CreditCardIcon3, XCircleIcon as XCircleIcon4 } from "@heroicons/react/24/solid";
import { Form as Form3, useLoaderData as useLoaderData9 } from "@remix-run/react";
import { useTranslation as useTranslation26 } from "react-i18next";
import { useState as useState8 } from "react";
import { json as json8 } from "@remix-run/server-runtime";
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function DummyPayments({
  paymentMethod,
  paymentError,
  order
}) {
  let { t } = useTranslation26(), [razorpayError, setRazorpayError] = useState8(null), { activeCustomer } = useLoaderData9(), amountInPaise = order?.totalWithTax ? Math.round(order.totalWithTax * 1) : 1e3, currency = order?.currencyCode || "INR";
  console.log("check3", activeCustomer);
  let loadRazorpayScript = () => new Promise((resolve) => {
    let script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js", script.onload = () => {
      console.log("Razorpay script loaded successfully"), resolve(!0);
    }, script.onerror = () => {
      console.error("Failed to load Razorpay script"), resolve(!1);
    }, document.body.appendChild(script);
  }), handleRazorpayPayment = async () => {
    if (setRazorpayError(null), console.log("Initiating Razorpay payment for method:", paymentMethod.name), !await loadRazorpayScript()) {
      setRazorpayError("Failed to load Razorpay SDK. Please try again.");
      return;
    }
    let orderData;
    try {
      let response = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency
        })
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      if (orderData = await response.json(), !orderData.orderId)
        throw new Error("No order ID received from backend");
      console.log("Order ID received:", orderData.orderId);
    } catch (error) {
      console.error("Error fetching order ID:", error), setRazorpayError(`Failed to create order: ${error.message || "Please try again."}`);
      return;
    }
    let options = {
      key: "rzp_live_MT7BL3eZs3HHGB",
      amount: amountInPaise,
      currency,
      name: "Kaaikani",
      description: "Online Payment",
      order_id: orderData.orderId,
      prefill: {
        name: activeCustomer?.firstName ? `${activeCustomer.firstName} ${activeCustomer.lastName || ""}`.trim() : "",
        email: activeCustomer?.emailAddress || "",
        contact: activeCustomer?.phoneNumber || ""
      },
      notes: {
        address: "Customer Address"
      },
      theme: {
        color: "#3399cc"
      }
    };
    console.log(activeCustomer?.firstName), console.log(activeCustomer?.phoneNumber), console.log(activeCustomer?.emailAddress);
    try {
      let rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function(response) {
        console.error("Payment failed:", response.error), setRazorpayError(
          `Payment failed: ${response.error.description || "Please try again."}`
        );
      }), console.log("Opening Razorpay checkout"), rzp.open();
    } catch (error) {
      console.error("Error initializing Razorpay:", error), setRazorpayError("Failed to initialize payment. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxDEV39("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxDEV39("p", { className: "text-gray-600 text-sm p-6", children: t("") }, void 0, !1, {
      fileName: "app/components/checkout/DummyPayments.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    paymentError && /* @__PURE__ */ jsxDEV39("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxDEV39("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV39("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV39(XCircleIcon4, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV39("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsxDEV39("h3", { className: "text-sm font-medium text-red-800", children: t("checkout.paymentErrorMessage") }, void 0, !1, {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV39("div", { className: "mt-2 text-sm text-red-700", children: paymentError }, void 0, !1, {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/checkout/DummyPayments.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/checkout/DummyPayments.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this),
    razorpayError && /* @__PURE__ */ jsxDEV39("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxDEV39("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV39("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV39(XCircleIcon4, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 176,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV39("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsxDEV39("h3", { className: "text-sm font-medium text-red-800", children: "Razorpay Error" }, void 0, !1, {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV39("div", { className: "mt-2 text-sm text-red-700", children: razorpayError }, void 0, !1, {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/checkout/DummyPayments.tsx",
      lineNumber: 174,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/checkout/DummyPayments.tsx",
      lineNumber: 173,
      columnNumber: 9
    }, this),
    paymentMethod.name.toLowerCase() === "online" ? (
      // Button for Online (Razorpay) payment
      /* @__PURE__ */ jsxDEV39(
        "button",
        {
          onClick: handleRazorpayPayment,
          className: "flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: [
            /* @__PURE__ */ jsxDEV39(CreditCardIcon3, { className: "w-5 h-5" }, void 0, !1, {
              fileName: "app/components/checkout/DummyPayments.tsx",
              lineNumber: 191,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV39("span", { children: [
              t("checkout.payWith"),
              " ",
              paymentMethod.name
            ] }, void 0, !0, {
              fileName: "app/components/checkout/DummyPayments.tsx",
              lineNumber: 192,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 187,
          columnNumber: 9
        },
        this
      )
    ) : (
      // Form for Offline payment
      /* @__PURE__ */ jsxDEV39(Form3, { method: "post", children: [
        /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "paymentMethodCode", value: paymentMethod.code }, void 0, !1, {
          fileName: "app/components/checkout/DummyPayments.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV39(
          "button",
          {
            type: "submit",
            className: "flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
            children: [
              /* @__PURE__ */ jsxDEV39(CreditCardIcon3, { className: "w-5 h-5" }, void 0, !1, {
                fileName: "app/components/checkout/DummyPayments.tsx",
                lineNumber: 204,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV39("span", { children: [
                t("checkout.payWith"),
                " ",
                paymentMethod.name
              ] }, void 0, !0, {
                fileName: "app/components/checkout/DummyPayments.tsx",
                lineNumber: 205,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/checkout/DummyPayments.tsx",
            lineNumber: 200,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/checkout/DummyPayments.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this)
    )
  ] }, void 0, !0, {
    fileName: "app/components/checkout/DummyPayments.tsx",
    lineNumber: 155,
    columnNumber: 5
  }, this);
}

// app/components/checkout/braintree/BraintreePayments.tsx
import { useEffect as useEffect10, useState as useState9 } from "react";
import dropin from "braintree-web-drop-in";
import { useSubmit as useSubmit4 } from "@remix-run/react";
import { useTranslation as useTranslation27 } from "react-i18next";
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
function BraintreeDropIn(props) {
  let { show, authorization, fullAmount, currencyCode } = props, { t } = useTranslation27(), [braintreeInstance, setBraintreeInstance] = useState9(), [enablePaymentButton, setEnablePaymentButton] = useState9(), [processing, setProcessing] = useState9(!1), submit = useSubmit4(), submitPayment = async () => {
    if (setProcessing(!0), braintreeInstance)
      try {
        let result = await braintreeInstance.requestPaymentMethod(), formData = new FormData();
        formData.set("paymentMethodCode", "braintree"), formData.set("paymentNonce", result.nonce);
        let request;
        request = new Request(""), await addPaymentToOrder(
          { method: "braintree", metadata: result },
          { request }
        ), submit(formData, { method: "post" });
      } catch (e) {
        alert(e), setProcessing(!1);
      }
  };
  return useEffect10(() => {
    if (show) {
      let initializeBraintree = () => dropin.create(
        {
          authorization,
          container: "#braintree-drop-in-div",
          paypal: {
            flow: "checkout",
            amount: fullAmount / 100,
            currency: currencyCode.toString()
          }
        },
        function(error, instance) {
          error ? console.error(error) : instance != null && (setBraintreeInstance(instance), instance.on("paymentMethodRequestable", (payload) => {
            setEnablePaymentButton(!0);
          }), instance.on("noPaymentMethodRequestable", () => {
            setEnablePaymentButton(!1);
          }));
        }
      );
      braintreeInstance ? braintreeInstance.teardown().then(() => {
        initializeBraintree();
      }) : initializeBraintree();
    }
  }, [show]), /* @__PURE__ */ jsxDEV40(
    "div",
    {
      style: { display: `${show ? "block" : "none"}` },
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsxDEV40("div", { id: "braintree-drop-in-div" }, void 0, !1, {
          fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "paymentMethodCode", value: "braintree" }, void 0, !1, {
          fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV40(
          "button",
          {
            onClick: submitPayment,
            className: classNames(
              enablePaymentButton && !processing ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400",
              "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            ),
            disabled: !braintreeInstance || !enablePaymentButton,
            children: [
              t(processing ? "checkout.paymentProcessing" : braintreeInstance ? "checkout.pay" : "checkout.paymentLoading"),
              processing ? /* @__PURE__ */ jsxDEV40(
                "svg",
                {
                  "aria-hidden": "true",
                  className: "ml-3 w-4 h-4 text-indigo-100 animate-spin dark:text-gray-100 fill-white",
                  viewBox: "0 0 100 101",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsxDEV40(
                      "path",
                      {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV40(
                      "path",
                      {
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
                  lineNumber: 111,
                  columnNumber: 11
                },
                this
              ) : ""
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
            lineNumber: 95,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/checkout/braintree/BraintreePayments.tsx",
      lineNumber: 88,
      columnNumber: 5
    },
    this
  );
}

// app/routes/checkout.payment.tsx
import { useTranslation as useTranslation28 } from "react-i18next";

// app/components/checkout/razopay/RezopayPayments.tsx
import { useEffect as useEffect11 } from "react";
import { useFetcher as useFetcher3, useLoaderData as useLoaderData10 } from "@remix-run/react";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function RazorpayPayments({ orderCode, amount, currency }) {
  let { razorpayOrderId, razorpayKeyId, razorpayError } = useLoaderData10(), fetcher = useFetcher3();
  useEffect11(() => {
    let script = document.createElement("script");
    return script.src = "https://checkout.razorpay.com/v1/checkout.js", script.async = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []);
  let handlePayment = () => {
    if (!razorpayOrderId || !razorpayKeyId) {
      alert("Razorpay configuration is missing.");
      return;
    }
    let options = {
      key: razorpayKeyId,
      amount,
      currency: currency || "INR",
      name: "Your Store Name",
      description: `Payment for order ${orderCode}`,
      order_id: razorpayOrderId,
      handler: async (response) => {
        let formData = new FormData();
        formData.append("paymentMethodCode", "razorpay"), formData.append("razorpay_payment_id", response.razorpay_payment_id), formData.append("razorpay_order_id", response.razorpay_order_id), formData.append("razorpay_signature", response.razorpay_signature), fetcher.submit(formData, { method: "post" });
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "111111"
      },
      theme: {
        color: "#3399cc"
      }
    };
    new window.Razorpay(options).open();
  };
  return razorpayError ? /* @__PURE__ */ jsxDEV41("div", { children: [
    /* @__PURE__ */ jsxDEV41("p", { className: "text-red-700 font-bold", children: "Razorpay Error" }, void 0, !1, {
      fileName: "app/components/checkout/razopay/RezopayPayments.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV41("p", { className: "text-sm", children: razorpayError }, void 0, !1, {
      fileName: "app/components/checkout/razopay/RezopayPayments.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/checkout/razopay/RezopayPayments.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV41("div", { className: "py-3 w-full", children: /* @__PURE__ */ jsxDEV41(
    "button",
    {
      onClick: handlePayment,
      className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
      disabled: fetcher.state !== "idle",
      children: "Pay with Razorpay"
    },
    void 0,
    !1,
    {
      fileName: "app/components/checkout/razopay/RezopayPayments.tsx",
      lineNumber: 82,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/checkout/razopay/RezopayPayments.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.payment.tsx
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
async function loader9({ params, request }) {
  let session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(request?.headers.get("Cookie"))
  ), activeOrder = await getActiveOrder({ request });
  if (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0)
    return redirect4("/");
  let { eligiblePaymentMethods } = await getEligiblePaymentMethods({
    request
  }), error = session.get("activeOrderError"), stripePaymentIntent, stripePublishableKey, stripeError, razorpayOrderId, razorpayKeyId, razorpayError;
  if (eligiblePaymentMethods.find((method) => method.code.includes("stripe")))
    try {
      stripePaymentIntent = (await createStripePaymentIntent({
        request
      })).createStripePaymentIntent ?? void 0, stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    } catch (e) {
      stripeError = e.message;
    }
  let brainTreeKey, brainTreeError;
  if (eligiblePaymentMethods.find((method) => method.code.includes("braintree")))
    try {
      brainTreeKey = (await generateBraintreeClientToken({
        request
      })).generateBraintreeClientToken ?? "";
    } catch (e) {
      brainTreeError = e.message;
    }
  let razorpayEnabled = eligiblePaymentMethods.some(
    (m) => m.code.includes("razorpay")
  );
  if (razorpayEnabled && activeOrder)
    try {
      let response = await fetch(
        `http://localhost:3000/payments/razorpay/order/${activeOrder.id}`,
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      if (!response.ok)
        throw new Error("Failed to create Razorpay order");
      let data = await response.json();
      razorpayOrderId = data.orderId, razorpayKeyId = data.keyId;
    } catch (e) {
      razorpayError = e.message;
    }
  return json9({
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error,
    razorpayEnabled,
    razorpayOrderId,
    razorpayKeyId,
    razorpayError
  });
}
async function action8({ params, request }) {
  let body = await request.formData(), paymentMethodCode = body.get("paymentMethodCode");
  if (!paymentMethodCode)
    throw new Response("Payment method code is required", { status: 400 });
  let { nextOrderStates } = await getNextOrderStates({ request });
  if (nextOrderStates.includes("ArrangingPayment")) {
    let transitionResult = await transitionOrderToState("ArrangingPayment", {
      request
    });
    if (transitionResult.transitionOrderToState?.__typename !== "Order")
      throw new Response("Order state transition failed", {
        status: 400,
        statusText: transitionResult.transitionOrderToState?.message
      });
  }
  let metadata = {};
  paymentMethodCode === "razorpay" ? metadata = {
    razorpay_payment_id: body.get("razorpay_payment_id"),
    razorpay_order_id: body.get("razorpay_order_id"),
    razorpay_signature: body.get("razorpay_signature")
  } : metadata = { nonce: body.get("paymentNonce") };
  let result = await addPaymentToOrder(
    { method: paymentMethodCode, metadata },
    { request }
  );
  if (result.addPaymentToOrder.__typename === "Order")
    return redirect4(`/checkout/confirmation/${result.addPaymentToOrder.code}`);
  throw new Response("Payment failed", {
    status: 400,
    statusText: result.addPaymentToOrder?.message
  });
}
function CheckoutPayment() {
  let {
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error,
    razorpayOrderId,
    razorpayKeyId,
    razorpayError
  } = useLoaderData11(), { activeOrderFetcher, activeOrder } = useOutletContext(), { t } = useTranslation28(), paymentError = getPaymentError(error);
  return /* @__PURE__ */ jsxDEV42("div", { className: "flex flex-col items-center divide-gray-200 divide-y", children: eligiblePaymentMethods.map(
    (paymentMethod) => paymentMethod.code.includes("braintree") ? /* @__PURE__ */ jsxDEV42("div", { className: "py-3 w-full", children: brainTreeError ? /* @__PURE__ */ jsxDEV42("div", { children: [
      /* @__PURE__ */ jsxDEV42("p", { className: "text-red-700 font-bold", children: t("checkout.braintreeError") }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 186,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV42("p", { className: "text-sm", children: brainTreeError }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 189,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 185,
      columnNumber: 15
    }, this) : /* @__PURE__ */ jsxDEV42(
      BraintreeDropIn,
      {
        fullAmount: activeOrder?.totalWithTax ?? 0,
        currencyCode: activeOrder?.currencyCode ?? "USD",
        show: !0,
        authorization: brainTreeKey
      },
      void 0,
      !1,
      {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 192,
        columnNumber: 15
      },
      this
    ) }, paymentMethod.id, !1, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 183,
      columnNumber: 11
    }, this) : paymentMethod.code.includes("stripe") ? /* @__PURE__ */ jsxDEV42("div", { className: "py-12", children: stripeError ? /* @__PURE__ */ jsxDEV42("div", { children: [
      /* @__PURE__ */ jsxDEV42("p", { className: "text-red-700 font-bold", children: t("checkout.stripeError") }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 206,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV42("p", { className: "text-sm", children: stripeError }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 209,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 205,
      columnNumber: 15
    }, this) : /* @__PURE__ */ jsxDEV42(
      StripePayments,
      {
        orderCode: activeOrder?.code ?? "",
        clientSecret: stripePaymentIntent,
        publishableKey: stripePublishableKey
      },
      void 0,
      !1,
      {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 212,
        columnNumber: 15
      },
      this
    ) }, paymentMethod.id, !1, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 203,
      columnNumber: 11
    }, this) : paymentMethod.code.includes("razorpay") ? /* @__PURE__ */ jsxDEV42("div", { className: "py-12", children: razorpayError ? /* @__PURE__ */ jsxDEV42("div", { children: [
      /* @__PURE__ */ jsxDEV42("p", { className: "text-red-700 font-bold", children: t("checkout.razorpayError", { defaultValue: "Razorpay Error" }) }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 223,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV42("p", { className: "text-sm", children: razorpayError }, void 0, !1, {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 226,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 222,
      columnNumber: 15
    }, this) : /* @__PURE__ */ jsxDEV42(
      RazorpayPayments,
      {
        orderCode: activeOrder?.code ?? "",
        amount: activeOrder?.totalWithTax ?? 0,
        currency: activeOrder?.currencyCode ?? "INR"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 229,
        columnNumber: 15
      },
      this
    ) }, paymentMethod.id, !1, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 220,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV42("div", { className: "py-12", children: /* @__PURE__ */ jsxDEV42(
      DummyPayments,
      {
        paymentMethod,
        paymentError,
        order: activeOrder
      },
      void 0,
      !1,
      {
        fileName: "app/routes/checkout.payment.tsx",
        lineNumber: 238,
        columnNumber: 12
      },
      this
    ) }, paymentMethod.id, !1, {
      fileName: "app/routes/checkout.payment.tsx",
      lineNumber: 237,
      columnNumber: 11
    }, this)
  ) }, void 0, !1, {
    fileName: "app/routes/checkout.payment.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
}
function getPaymentError(error) {
  if (!(!error || !error.errorCode))
    switch (error.errorCode) {
      case "ORDER_PAYMENT_STATE_ERROR" /* OrderPaymentStateError */:
      case "INELIGIBLE_PAYMENT_METHOD_ERROR" /* IneligiblePaymentMethodError */:
      case "PAYMENT_FAILED_ERROR" /* PaymentFailedError */:
      case "PAYMENT_DECLINED_ERROR" /* PaymentDeclinedError */:
      case "ORDER_STATE_TRANSITION_ERROR" /* OrderStateTransitionError */:
      case "NO_ACTIVE_ORDER_ERROR" /* NoActiveOrderError */:
        return error.message;
    }
}

// app/routes/account.history.tsx
var account_history_exports = {};
__export(account_history_exports, {
  default: () => AccountHistory,
  loader: () => loader10
});
import { useLoaderData as useLoaderData12, useNavigation as useNavigation5, useSubmit as useSubmit5 } from "@remix-run/react";
import { json as json10, redirect as redirect5 } from "@remix-run/server-runtime";

// app/components/account/OrderHistoryItem.tsx
import { useState as useState10 } from "react";

// app/components/account/OrderStateBadge.tsx
import { useTranslation as useTranslation29 } from "react-i18next";
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
function OrderStateBadge({ state }) {
  let { t } = useTranslation29(), colorClasses = "";
  switch (state) {
    default:
    case "Draft":
    case "AddingItems":
      colorClasses = "bg-gray-100 text-gray-800";
      break;
    case "PaymentAuthorized":
    case "PaymentSettled":
    case "Shipped":
      colorClasses = "bg-blue-100 text-blue-800";
      break;
    case "Delivered":
      colorClasses = "bg-green-100 text-green-800";
      break;
    case "PartiallyShipped":
    case "PartiallyDelivered":
    case "Modifying":
    case "ArrangingPayment":
    case "ArrangingAdditionalPayment":
      colorClasses = "bg-yellow-100 text-yellow-800";
      break;
    case "Cancelled":
      colorClasses = "bg-red-100 text-red-800";
      break;
  }
  return /* @__PURE__ */ jsxDEV43(
    "span",
    {
      className: `text-xs font-medium px-2.5 py-0.5 rounded uppercase whitespace-nowrap ${colorClasses}`,
      children: t(`order.states.${state}`) ?? t("order.states.Unknown")
    },
    void 0,
    !1,
    {
      fileName: "app/components/account/OrderStateBadge.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}

// app/components/account/OrderHistoryItem.tsx
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link as Link11 } from "@remix-run/react";
import { useTranslation as useTranslation30 } from "react-i18next";
import { Fragment as Fragment10, jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
function OrderHistoryItem({
  order,
  isInitiallyExpanded = !1,
  areDetailsInitiallyExpanded = !1,
  className
}) {
  let [isExpanded, setIsExpanded] = useState10(isInitiallyExpanded), [areDetailsExpanded, setAreDetailsExpanded] = useState10(
    areDetailsInitiallyExpanded
  ), [isLineCalcExpanded, setIsLineCalcExpanded] = useState10(!1), { t } = useTranslation30();
  return /* @__PURE__ */ jsxDEV44("div", { className: `border rounded-lg overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxDEV44(
      "div",
      {
        className: `p-4 lg:p-6
            flex flex-row justify-between items-center
            bg-gray-50 border-b
        `,
        children: [
          /* @__PURE__ */ jsxDEV44("div", { className: "flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm", children: [
            /* @__PURE__ */ jsxDEV44("div", { children: [
              /* @__PURE__ */ jsxDEV44("span", { className: "block font-medium", children: t("order.placedAt") }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV44(
                "span",
                {
                  className: "text-gray-500",
                  title: new Date(order?.orderPlacedAt).toLocaleString(),
                  children: order?.orderPlacedAt ? new Date(order.orderPlacedAt).toLocaleDateString(void 0, {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  }) : "--"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 47,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV44("div", { children: [
              /* @__PURE__ */ jsxDEV44("span", { className: "block font-medium", children: t("order.totalSum") }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV44("span", { className: "text-gray-500", children: /* @__PURE__ */ jsxDEV44(
                Price,
                {
                  currencyCode: order?.currencyCode,
                  priceWithTax: order?.totalWithTax
                },
                void 0,
                !1,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 64,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV44("div", { children: [
              /* @__PURE__ */ jsxDEV44("span", { className: "block font-medium", children: t("order.number") }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 72,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV44("span", { className: "text-gray-500", children: order?.code || "--" }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 73,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV44("div", { className: "gap-4 lg:gap-6 flex flex-col items-end self-stretch justify-between md:flex-row md:items-center self-start", children: [
            /* @__PURE__ */ jsxDEV44(OrderStateBadge, { state: order?.state }, void 0, !1, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV44("div", { className: "flex", role: "group", children: [
              /* @__PURE__ */ jsxDEV44(
                Button,
                {
                  title: t("order.actionsMessage"),
                  className: "bg-white text-sm rounded-r-none border-r-0",
                  children: [
                    /* @__PURE__ */ jsxDEV44("span", { className: "text-xs hidden", children: t("order.actions") }, void 0, !1, {
                      fileName: "app/components/account/OrderHistoryItem.tsx",
                      lineNumber: 85,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV44(EllipsisVerticalIcon, { className: "w-5 h-5" }, void 0, !1, {
                      fileName: "app/components/account/OrderHistoryItem.tsx",
                      lineNumber: 86,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 81,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV44(
                Button,
                {
                  className: "bg-white text-sm rounded-l-none",
                  onClick: () => setIsExpanded(!isExpanded),
                  title: t("order.expand"),
                  children: /* @__PURE__ */ jsxDEV44(
                    ChevronRightIcon,
                    {
                      className: `w-5 h-5 transition-transform duration-100 ${isExpanded && "rotate-90"}`
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/account/OrderHistoryItem.tsx",
                      lineNumber: 93,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 88,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    isExpanded && /* @__PURE__ */ jsxDEV44("div", { className: "flex flex-col", children: [
      order?.lines.map((line, key) => /* @__PURE__ */ jsxDEV44(
        "div",
        {
          className: "p-4 lg:p-6 border-b flex flex-row gap-8 justify-between group",
          children: /* @__PURE__ */ jsxDEV44("div", { className: "inline-flex justify-center items-center justify gap-4", children: [
            /* @__PURE__ */ jsxDEV44(
              Link11,
              {
                to: `/products/${line.productVariant.product.slug}`,
                className: "hover:opacity-50 transition-opacity",
                children: /* @__PURE__ */ jsxDEV44(
                  "img",
                  {
                    src: line.featuredAsset?.source,
                    className: "w-24 h-24 object-cover rounded-md"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/account/OrderHistoryItem.tsx",
                    lineNumber: 117,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 113,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV44("span", { className: "flex flex-1 flex-col gap-0", children: [
              /* @__PURE__ */ jsxDEV44(
                Link11,
                {
                  to: `/products/${line.productVariant.product.slug}`,
                  className: "text-black text-sm font-semibold line-clamp-3 md:line-clamp-2 max-w-md hover:text-black/50",
                  title: line.productVariant.name,
                  children: line.productVariant.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 124,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV44(
                "button",
                {
                  className: "inline-flex gap-2 items-center w-fit text-gray-500 text-sm mt-1",
                  onClick: () => setIsLineCalcExpanded(!isLineCalcExpanded),
                  children: [
                    isLineCalcExpanded && /* @__PURE__ */ jsxDEV44(Fragment10, { children: [
                      /* @__PURE__ */ jsxDEV44("span", { title: t("common.quantity"), children: line.quantity }, void 0, !1, {
                        fileName: "app/components/account/OrderHistoryItem.tsx",
                        lineNumber: 138,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV44("span", { className: "text-gray-300 select-none", children: "\xD7" }, void 0, !1, {
                        fileName: "app/components/account/OrderHistoryItem.tsx",
                        lineNumber: 141,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV44("span", { title: "Price per unit", children: /* @__PURE__ */ jsxDEV44(
                        Price,
                        {
                          currencyCode: line.productVariant.currencyCode,
                          priceWithTax: line.discountedUnitPriceWithTax
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/account/OrderHistoryItem.tsx",
                          lineNumber: 143,
                          columnNumber: 27
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/components/account/OrderHistoryItem.tsx",
                        lineNumber: 142,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV44("span", { className: "text-gray-300 select-none", children: "\u039E" }, void 0, !1, {
                        fileName: "app/components/account/OrderHistoryItem.tsx",
                        lineNumber: 148,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/account/OrderHistoryItem.tsx",
                      lineNumber: 137,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV44("span", { title: "Subtotal", children: /* @__PURE__ */ jsxDEV44(
                      Price,
                      {
                        currencyCode: line.productVariant.currencyCode,
                        priceWithTax: line.discountedLinePriceWithTax
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/account/OrderHistoryItem.tsx",
                        lineNumber: 152,
                        columnNumber: 23
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/components/account/OrderHistoryItem.tsx",
                      lineNumber: 151,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 132,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV44("span", { className: "text-gray-500 text-xs mt-2 tracking-wide", children: [
                line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                ) === 0 ? t("order.notShipped") : `${line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                )} ${t("common.or")} ${line.quantity} ${t(
                  "order.items.fulfilled"
                )}`,
                line.fulfillmentLines?.filter((fLine) => fLine.quantity > 0).map((fLine, key2) => /* @__PURE__ */ jsxDEV44(
                  "span",
                  {
                    className: "block first:mt-2",
                    title: new Date(
                      fLine.fulfillment.updatedAt
                    ).toLocaleString(),
                    children: [
                      fLine.fulfillment.state,
                      ":",
                      " ",
                      new Intl.DateTimeFormat(void 0, {
                        dateStyle: "medium"
                      }).format(new Date(fLine.fulfillment.updatedAt))
                    ]
                  },
                  key2,
                  !0,
                  {
                    fileName: "app/components/account/OrderHistoryItem.tsx",
                    lineNumber: 174,
                    columnNumber: 25
                  },
                  this
                ))
              ] }, void 0, !0, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 159,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        },
        key,
        !1,
        {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 107,
          columnNumber: 13
        },
        this
      )),
      /* @__PURE__ */ jsxDEV44("div", { className: "p-2 lg:py-3 lg:px-6 gap-2 lg:gap-6 grid grid-cols-2 sm:flex justify-end items-center", children: [
        order?.fulfillments?.map((f, i) => /* @__PURE__ */ jsxDEV44(
          Button,
          {
            onClickCapture: () => alert(`${t("trackAlert")} "${f.trackingCode}"`),
            className: "text-xs",
            children: [
              t("order.trackPackage"),
              " ",
              order.fulfillments?.length == 1 ? "" : `#${i + 1}`
            ]
          },
          i,
          !0,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 196,
            columnNumber: 15
          },
          this
        )),
        /* @__PURE__ */ jsxDEV44(
          Button,
          {
            onClick: () => setAreDetailsExpanded(!areDetailsExpanded),
            className: "col-start-2",
            children: [
              /* @__PURE__ */ jsxDEV44("span", { className: "text-xs", children: t("order.detailedOverview") }, void 0, !1, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 212,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV44(
                ChevronRightIcon,
                {
                  className: `w-5 h-5 transition-transform duration-100 ${areDetailsExpanded && "rotate-90"}`
                },
                void 0,
                !1,
                {
                  fileName: "app/components/account/OrderHistoryItem.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 208,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      areDetailsExpanded && /* @__PURE__ */ jsxDEV44("div", { className: "p-2 lg:p-3 grid grid-cols-2 gap-1 text-sm max-w-sm self-center md:self-end", children: [
        /* @__PURE__ */ jsxDEV44("h6", { className: "font-medium col-span-full", children: t("order.summary") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 224,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.items.subtotal") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.subTotalWithTax
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 229,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.shippingAndHandling") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 235,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.shippingLines.reduce(
              (acc, s) => acc + s.priceWithTax,
              0
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 237,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.totalWithoutTax") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxBase,
              0
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 248,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.estimatedTax") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxTotal,
              0
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 259,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.total") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 268,
          columnNumber: 15
        }, this),
        order?.totalWithTax && order.discounts ? /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order.totalWithTax - order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 271,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 270,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: "--" }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 283,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { children: t("order.appliedCoupons") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 288,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 287,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "font-medium", children: t("order.grandTotal") }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV44("span", { className: "font-medium text-end", children: /* @__PURE__ */ jsxDEV44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.totalWithTax
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 299,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 298,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 223,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/OrderHistoryItem.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/account/OrderHistoryItem.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/account.history.tsx
import { ValidatedForm as ValidatedForm4 } from "remix-validated-form";
import { useTranslation as useTranslation31 } from "react-i18next";
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
var paginationLimitMinimumDefault2 = 10, allowedPaginationLimits2 = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault2,
  20,
  30
]), orderPaginationSchema = paginationValidationSchema(
  allowedPaginationLimits2
);
async function loader10({ request }) {
  let url = new URL(request.url), limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault2, page = url.searchParams.get("page") ?? 1, zodResult = orderPaginationSchema.safeParse({ limit, page });
  if (!zodResult.success)
    return url.search = "", redirect5(url.href);
  let orderListOptions = {
    take: zodResult.data.limit,
    skip: (zodResult.data.page - 1) * zodResult.data.limit,
    // Page is one-base-indexed so we gotta decrement first
    sort: { createdAt: "DESC" /* Desc */ },
    filter: { active: { eq: !1 } }
  }, res = await getActiveCustomerOrderList(orderListOptions, { request });
  return res.activeCustomer ? json10({
    orderList: res.activeCustomer.orders,
    appliedPaginationLimit: zodResult.data.limit,
    appliedPaginationPage: zodResult.data.page
  }) : redirect5("/sign-in");
}
function AccountHistory() {
  let { orderList, appliedPaginationLimit, appliedPaginationPage } = useLoaderData12(), submit = useSubmit5(), navigation2 = useNavigation5(), { t } = useTranslation31(), showingOrdersFrom = translatePaginationFrom(
    appliedPaginationPage,
    appliedPaginationLimit
  ), showingOrdersTo = translatePaginationTo(
    appliedPaginationPage,
    appliedPaginationLimit,
    orderList.items.length
  );
  return /* @__PURE__ */ jsxDEV45("div", { className: "pt-10 relative", children: [
    navigation2.state !== "idle" && /* @__PURE__ */ jsxDEV45("div", { className: "absolute top-0 left-0 w-full h-full z-100 bg-white bg-opacity-75" }, void 0, !1, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    orderList.items.length === 0 && /* @__PURE__ */ jsxDEV45("div", { className: "py-16 text-3xl text-center italic text-gray-300 select-none flex justify-center items-center", children: orderList.totalItems === 0 ? t("order.historyEmpty") : t("order.historyEnd") }, void 0, !1, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    orderList.items?.map((item) => /* @__PURE__ */ jsxDEV45(
      OrderHistoryItem,
      {
        order: item,
        isInitiallyExpanded: !0,
        className: "mb-10"
      },
      item.code,
      !1,
      {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    )),
    /* @__PURE__ */ jsxDEV45("div", { className: "flex flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV45("span", { className: "self-start text-gray-500 text-sm ml-4 lg:ml-6 mt-2", children: [
        "Showing orders ",
        showingOrdersFrom,
        " to ",
        showingOrdersTo,
        " of",
        " ",
        orderList.totalItems
      ] }, void 0, !0, {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV45(
        ValidatedForm4,
        {
          validator: withZod(
            paginationValidationSchema(allowedPaginationLimits2)
          ),
          method: "get",
          onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
          preventScrollReset: !0,
          children: /* @__PURE__ */ jsxDEV45(
            Pagination,
            {
              appliedPaginationLimit,
              allowedPaginationLimits: allowedPaginationLimits2,
              totalItems: orderList.totalItems,
              appliedPaginationPage
            },
            void 0,
            !1,
            {
              fileName: "app/routes/account.history.tsx",
              lineNumber: 120,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/account.history.tsx",
          lineNumber: 110,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.history.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/checkout._index.tsx
var checkout_index_exports = {};
__export(checkout_index_exports, {
  default: () => CheckoutShipping,
  loader: () => loader11
});
import { useState as useState11 } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Form as Form4,
  useLoaderData as useLoaderData13,
  useNavigate as useNavigate3,
  useOutletContext as useOutletContext2
} from "@remix-run/react";
import { json as json11, redirect as redirect6 } from "@remix-run/server-runtime";

// app/components/account/AddressForm.tsx
import { useTranslation as useTranslation32 } from "react-i18next";
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function AddressForm({
  address,
  defaultFullName,
  availableCountries
}) {
  let { t } = useTranslation32();
  return /* @__PURE__ */ jsxDEV46("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
    /* @__PURE__ */ jsxDEV46("div", { children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "fullName",
          className: "block text-sm font-medium text-gray-700",
          children: t("account.fullName")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          id: "fullName",
          name: "fullName",
          defaultValue: defaultFullName,
          autoComplete: "given-name",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "company",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.company")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "company",
          id: "company",
          defaultValue: address?.company ?? "",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "streetLine1",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.streetLine1")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "streetLine1",
          id: "streetLine1",
          defaultValue: address?.streetLine1 ?? "",
          autoComplete: "street-address",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "streetLine2",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.streetLine2")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "streetLine2",
          id: "streetLine2",
          defaultValue: address?.streetLine2 ?? "",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 81,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "city",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.city")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "city",
          id: "city",
          autoComplete: "address-level2",
          defaultValue: address?.city ?? "",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "countryCode",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.country")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 111,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: availableCountries && /* @__PURE__ */ jsxDEV46(
        "select",
        {
          id: "countryCode",
          name: "countryCode",
          defaultValue: address?.countryCode ?? "US",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
          children: availableCountries.map((item) => /* @__PURE__ */ jsxDEV46("option", { value: item.code, children: item.name }, item.id, !1, {
            fileName: "app/components/account/AddressForm.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 119,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "province",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.province")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 136,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "province",
          id: "province",
          defaultValue: address?.province ?? "",
          autoComplete: "address-level1",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 143,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "postalCode",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.postalCode")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 155,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "postalCode",
          id: "postalCode",
          defaultValue: address?.postalCode ?? "",
          autoComplete: "postal-code",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 162,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxDEV46(
        "label",
        {
          htmlFor: "phoneNumber",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.phoneNumber")
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 174,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV46(
        "input",
        {
          type: "text",
          name: "phoneNumber",
          id: "phoneNumber",
          defaultValue: address?.phoneNumber ?? "",
          autoComplete: "tel",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        },
        void 0,
        !1,
        {
          fileName: "app/components/account/AddressForm.tsx",
          lineNumber: 181,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/account/AddressForm.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/checkout/ShippingMethodSelector.tsx
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon3 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation33 } from "react-i18next";
import { Fragment as Fragment11, jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
function ShippingMethodSelector({
  eligibleShippingMethods,
  currencyCode,
  shippingMethodId,
  onChange
}) {
  let { t } = useTranslation33();
  return /* @__PURE__ */ jsxDEV47(RadioGroup, { value: shippingMethodId, onChange, children: [
    /* @__PURE__ */ jsxDEV47(RadioGroup.Label, { className: "text-lg font-medium text-gray-900", children: t("checkout.deliveryMethod") }, void 0, !1, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: eligibleShippingMethods.map((shippingMethod) => /* @__PURE__ */ jsxDEV47(
      RadioGroup.Option,
      {
        value: shippingMethod.id,
        className: ({ checked, active }) => classNames(
          checked ? "border-transparent" : "border-gray-300",
          active ? "ring-2 ring-primary-500" : "",
          "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
        ),
        children: ({ checked, active }) => /* @__PURE__ */ jsxDEV47(Fragment11, { children: [
          /* @__PURE__ */ jsxDEV47("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxDEV47("span", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxDEV47(
              RadioGroup.Label,
              {
                as: "span",
                className: "block text-sm font-medium text-gray-900",
                children: shippingMethod.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/checkout/ShippingMethodSelector.tsx",
                lineNumber: 47,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV47(
              RadioGroup.Description,
              {
                as: "span",
                className: "mt-6 text-sm font-medium text-gray-900",
                children: /* @__PURE__ */ jsxDEV47(
                  Price,
                  {
                    priceWithTax: shippingMethod.priceWithTax,
                    currencyCode
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/checkout/ShippingMethodSelector.tsx",
                    lineNumber: 57,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/checkout/ShippingMethodSelector.tsx",
                lineNumber: 53,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/checkout/ShippingMethodSelector.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/checkout/ShippingMethodSelector.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          checked ? /* @__PURE__ */ jsxDEV47(
            CheckCircleIcon3,
            {
              className: "h-5 w-5 text-primary-600",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/checkout/ShippingMethodSelector.tsx",
              lineNumber: 65,
              columnNumber: 19
            },
            this
          ) : null,
          /* @__PURE__ */ jsxDEV47(
            "span",
            {
              className: classNames(
                active ? "border" : "border-2",
                checked ? "border-primary-500" : "border-transparent",
                "absolute -inset-px rounded-lg pointer-events-none"
              ),
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/components/checkout/ShippingMethodSelector.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this)
      },
      shippingMethod.id,
      !1,
      {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/checkout/ShippingMethodSelector.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/checkout/ShippingAddressSelector.tsx
import { RadioGroup as RadioGroup2 } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon4 } from "@heroicons/react/24/solid";
import { Fragment as Fragment12, jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange
}) {
  return /* @__PURE__ */ jsxDEV48(RadioGroup2, { value: selectedAddressIndex, onChange, children: /* @__PURE__ */ jsxDEV48("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: (addresses || []).map((address, index) => /* @__PURE__ */ jsxDEV48(
    RadioGroup2.Option,
    {
      value: index,
      className: ({ checked, active }) => classNames(
        checked ? "border-transparent" : "border-gray-300",
        active ? "ring-2 ring-primary-500" : "",
        "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
      ),
      children: ({ checked, active }) => /* @__PURE__ */ jsxDEV48(Fragment12, { children: [
        /* @__PURE__ */ jsxDEV48("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxDEV48("span", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV48(
            RadioGroup2.Label,
            {
              as: "span",
              className: "block text-sm font-medium text-gray-900",
              children: [
                address.streetLine1,
                ", ",
                address.postalCode
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/checkout/ShippingAddressSelector.tsx",
              lineNumber: 43,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(
            RadioGroup2.Description,
            {
              as: "span",
              className: "mt-6 text-sm text-gray-800",
              children: /* @__PURE__ */ jsxDEV48("ul", { children: [
                /* @__PURE__ */ jsxDEV48("li", { children: address.streetLine1 }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 54,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV48("li", { children: address.streetLine2 }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 55,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV48("li", { children: address.city }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 56,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV48("li", { children: address.province }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 57,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV48("li", { children: address.postalCode }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 58,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV48("li", { children: address.country.name }, void 0, !1, {
                  fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                  lineNumber: 59,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/checkout/ShippingAddressSelector.tsx",
                lineNumber: 53,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/checkout/ShippingAddressSelector.tsx",
              lineNumber: 49,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        checked ? /* @__PURE__ */ jsxDEV48(
          CheckCircleIcon4,
          {
            className: "h-5 w-5 text-primary-600",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/checkout/ShippingAddressSelector.tsx",
            lineNumber: 65,
            columnNumber: 19
          },
          this
        ) : null,
        /* @__PURE__ */ jsxDEV48(
          "span",
          {
            className: classNames(
              active ? "border" : "border-2",
              checked ? "border-primary-500" : "border-transparent",
              "absolute -inset-px rounded-lg pointer-events-none"
            ),
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/checkout/ShippingAddressSelector.tsx",
            lineNumber: 70,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    },
    index,
    !1,
    {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 28,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/checkout._index.tsx
import { useTranslation as useTranslation34 } from "react-i18next";
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
async function loader11({ request }) {
  let session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(request?.headers.get("Cookie"))
  ), activeOrder = await getActiveOrder({ request });
  if (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0)
    return redirect6("/");
  let { availableCountries } = await getAvailableCountries({ request }), { eligibleShippingMethods } = await getEligibleShippingMethods({
    request
  }), { activeCustomer } = await getActiveCustomerAddresses({ request }), error = session.get("activeOrderError");
  return json11({
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error
  });
}
function CheckoutShipping() {
  let { availableCountries, eligibleShippingMethods, activeCustomer, error } = useLoaderData13(), { activeOrderFetcher, activeOrder } = useOutletContext2(), [customerFormChanged, setCustomerFormChanged] = useState11(!1), [addressFormChanged, setAddressFormChanged] = useState11(!1), [selectedAddressIndex, setSelectedAddressIndex] = useState11(0), navigate = useNavigate3(), { t } = useTranslation34(), { customer, shippingAddress } = activeOrder ?? {}, isSignedIn = !!activeCustomer?.id, addresses = activeCustomer?.addresses ?? [], defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ""), canProceedToPayment = customer && (shippingAddress?.streetLine1 && shippingAddress?.postalCode || selectedAddressIndex != null) && activeOrder?.shippingLines?.length && activeOrder?.lines?.length, submitCustomerForm = (event) => {
    let formData = new FormData(event.currentTarget), { emailAddress, firstName, lastName } = Object.fromEntries(
      formData.entries()
    ), isValid = event.currentTarget.checkValidity();
    customerFormChanged && isValid && emailAddress && firstName && lastName && (activeOrderFetcher.submit(formData, {
      method: "post",
      action: "/api/active-order"
    }), setCustomerFormChanged(!1));
  }, submitAddressForm = (event) => {
    let formData = new FormData(event.currentTarget), isValid = event.currentTarget.checkValidity();
    addressFormChanged && isValid && setShippingAddress(formData);
  }, submitSelectedAddress = (index) => {
    let selectedAddress = activeCustomer?.addresses?.[index];
    if (selectedAddress) {
      setSelectedAddressIndex(index);
      let formData = new FormData();
      Object.keys(selectedAddress).forEach(
        (key) => formData.append(key, selectedAddress[key])
      ), formData.append("countryCode", selectedAddress.country.code), formData.append("action", "setCheckoutShipping"), setShippingAddress(formData);
    }
  };
  function setShippingAddress(formData) {
    shippingFormDataIsValid(formData) && (activeOrderFetcher.submit(formData, {
      method: "post",
      action: "/api/active-order"
    }), setAddressFormChanged(!1));
  }
  let submitSelectedShippingMethod = (value) => {
    value && activeOrderFetcher.submit(
      {
        action: "setShippingMethod",
        shippingMethodId: value
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  };
  function navigateToPayment() {
    navigate("./payment");
  }
  return /* @__PURE__ */ jsxDEV49("div", { children: [
    /* @__PURE__ */ jsxDEV49("div", { children: [
      /* @__PURE__ */ jsxDEV49("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.detailsTitle") }, void 0, !1, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      isSignedIn ? /* @__PURE__ */ jsxDEV49("div", { children: [
        /* @__PURE__ */ jsxDEV49("p", { className: "mt-2 text-gray-600", children: [
          customer?.firstName,
          " ",
          customer?.lastName
        ] }, void 0, !0, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV49("p", { children: customer?.emailAddress }, void 0, !1, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV49(
        Form4,
        {
          method: "post",
          action: "/api/active-order",
          onBlur: submitCustomerForm,
          onChange: () => setCustomerFormChanged(!0),
          hidden: isSignedIn,
          children: [
            /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "action", value: "setOrderCustomer" }, void 0, !1, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV49("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxDEV49(
                "label",
                {
                  htmlFor: "emailAddress",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("account.emailAddress")
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout._index.tsx",
                  lineNumber: 172,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV49("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV49(
                "input",
                {
                  type: "email",
                  id: "emailAddress",
                  name: "emailAddress",
                  autoComplete: "email",
                  defaultValue: customer?.emailAddress,
                  className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout._index.tsx",
                  lineNumber: 179,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/checkout._index.tsx",
                lineNumber: 178,
                columnNumber: 15
              }, this),
              error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && /* @__PURE__ */ jsxDEV49("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: error.message }, void 0, !1, {
                fileName: "app/routes/checkout._index.tsx",
                lineNumber: 189,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 171,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV49("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
              /* @__PURE__ */ jsxDEV49("div", { children: [
                /* @__PURE__ */ jsxDEV49(
                  "label",
                  {
                    htmlFor: "firstName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.firstName")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/checkout._index.tsx",
                    lineNumber: 196,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV49("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV49(
                  "input",
                  {
                    type: "text",
                    id: "firstName",
                    name: "firstName",
                    autoComplete: "given-name",
                    defaultValue: customer?.firstName,
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/checkout._index.tsx",
                    lineNumber: 203,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/checkout._index.tsx",
                  lineNumber: 202,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout._index.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV49("div", { children: [
                /* @__PURE__ */ jsxDEV49(
                  "label",
                  {
                    htmlFor: "lastName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.lastName")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/checkout._index.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV49("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV49(
                  "input",
                  {
                    type: "text",
                    id: "lastName",
                    name: "lastName",
                    autoComplete: "family-name",
                    defaultValue: customer?.lastName,
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/checkout._index.tsx",
                    lineNumber: 222,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/checkout._index.tsx",
                  lineNumber: 221,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout._index.tsx",
                lineNumber: 214,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 163,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV49(
      Form4,
      {
        method: "post",
        action: "/api/active-order",
        onBlur: submitAddressForm,
        onChange: () => setAddressFormChanged(!0),
        children: [
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "action", value: "setCheckoutShipping" }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 243,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV49("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsxDEV49("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.shippingTitle") }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 245,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 244,
            columnNumber: 9
          }, this),
          isSignedIn && activeCustomer.addresses?.length ? /* @__PURE__ */ jsxDEV49("div", { children: /* @__PURE__ */ jsxDEV49(
            ShippingAddressSelector,
            {
              addresses: activeCustomer.addresses,
              selectedAddressIndex,
              onChange: submitSelectedAddress
            },
            void 0,
            !1,
            {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 251,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 250,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV49(
            AddressForm,
            {
              availableCountries: activeOrder ? availableCountries : void 0,
              address: shippingAddress,
              defaultFullName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 258,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 237,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV49(AddAddressCard, {}, void 0, !1, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 265,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV49("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsxDEV49(
      ShippingMethodSelector,
      {
        eligibleShippingMethods,
        currencyCode: activeOrder?.currencyCode,
        shippingMethodId: activeOrder?.shippingLines[0]?.shippingMethod.id ?? "",
        onChange: submitSelectedShippingMethod
      },
      void 0,
      !1,
      {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 267,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV49(
      "button",
      {
        type: "button",
        disabled: !canProceedToPayment,
        onClick: navigateToPayment,
        className: classNames(
          canProceedToPayment ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400",
          "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        ),
        children: [
          /* @__PURE__ */ jsxDEV49(LockClosedIcon, { className: "w-5 h-5" }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 288,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV49("span", { children: t("checkout.goToPayment") }, void 0, !1, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 289,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 277,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/checkout._index.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.success.tsx
var sign_up_success_exports = {};
__export(sign_up_success_exports, {
  action: () => action9,
  default: () => SuccessPage
});
import { CheckCircleIcon as CheckCircleIcon5 } from "@heroicons/react/24/outline";
import { Form as Form5 } from "@remix-run/react";
import { redirect as redirect7 } from "@remix-run/server-runtime";
import { useTranslation as useTranslation35 } from "react-i18next";
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
async function action9() {
  return redirect7("/");
}
function SuccessPage() {
  let { t } = useTranslation35();
  return /* @__PURE__ */ jsxDEV50("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV50("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md border-2 rounded-md border-green-600", children: /* @__PURE__ */ jsxDEV50("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxDEV50(Form5, { className: "space-y-6", method: "post", children: /* @__PURE__ */ jsxDEV50("div", { children: [
    /* @__PURE__ */ jsxDEV50("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV50("div", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV50(
      CheckCircleIcon5,
      {
        className: "h-20 w-20 m-auto mb-2 text-green-600",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sign-up.success.tsx",
        lineNumber: 21,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 19,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV50("p", { className: "text-center mb-5", children: t("account.createdMessage") }, void 0, !1, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV50(
      "button",
      {
        type: "submit",
        className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: t("account.goHome")
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sign-up.success.tsx",
        lineNumber: 28,
        columnNumber: 15
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 17,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/account._index.tsx
var account_index_exports = {};
__export(account_index_exports, {
  action: () => action10,
  default: () => AccountDetails,
  loader: () => loader12,
  validator: () => validator4
});
import { CheckIcon as CheckIcon2, PencilIcon as PencilIcon3, XMarkIcon as XMarkIcon4 } from "@heroicons/react/24/outline";
import { useActionData as useActionData4, useLoaderData as useLoaderData14, useNavigation as useNavigation6 } from "@remix-run/react";
import { json as json12, redirect as redirect8 } from "@remix-run/server-runtime";
import { useEffect as useEffect12, useRef as useRef7, useState as useState12 } from "react";
import { ValidatedForm as ValidatedForm5, validationError as validationError4 } from "remix-validated-form";
import { z as z4 } from "zod";
import { useTranslation as useTranslation36 } from "react-i18next";
import { Fragment as Fragment13, jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
var validator4 = withZod(
  z4.object({
    title: z4.string(),
    firstName: z4.string().min(1, { message: "First name is required" }),
    lastName: z4.string().min(1, { message: "Last name is required" }),
    phoneNumber: z4.string()
  })
), changeEmailValidator = withZod(
  z4.object({
    email: z4.string().min(1, { message: "Email is required" }).email("Must be a valid email"),
    password: z4.string().min(1, { message: "Password is required" })
  })
);
async function loader12({ request }) {
  let { activeCustomer } = await getActiveCustomerDetails({ request });
  return activeCustomer ? json12({ activeCustomer }) : redirect8("/sign-in");
}
function isFormError(err) {
  return err.message !== void 0;
}
function isEmailSavedResponse(response) {
  return response.newEmailAddress !== void 0;
}
function isCustomerUpdatedResponse(response) {
  return response.customerUpdated !== void 0;
}
async function action10({ request }) {
  let body = await request.formData(), intent = body.get("intent"), formError = (formError2, init) => json12(formError2, init);
  if (intent === "updateEmail" /* UpdateEmail */) {
    let result = await changeEmailValidator.validate(body);
    if (result.error)
      return validationError4(result.error);
    let { email, password } = result.data, updateResult = await requestUpdateCustomerEmailAddress(
      password,
      email,
      { request }
    );
    return updateResult.__typename !== "Success" ? formError(
      { message: updateResult.message, intent: "updateEmail" /* UpdateEmail */ },
      {
        status: 401
      }
    ) : json12(
      {
        newEmailAddress: email
      },
      { status: 200 }
    );
  }
  if (intent === "updateDetails" /* UpdateDetails */) {
    let result = await validator4.validate(body);
    if (result.error)
      return validationError4(result.error);
    let { title, firstName, lastName, phoneNumber } = result.data;
    return await updateCustomer(
      { title, firstName, lastName, phoneNumber },
      { request }
    ), json12({
      customerUpdated: !0
    });
  }
  return formError({ message: "No valid form intent" }, { status: 401 });
}
function AccountDetails() {
  let { activeCustomer } = useLoaderData14(), actionDataHook = useActionData4(), { t } = useTranslation36(), { firstName, lastName, title, phoneNumber, emailAddress } = activeCustomer, fullName = `${title ? title + " " : ""}${firstName} ${lastName}`, { state } = useNavigation6(), [formError, setFormError] = useState12(), [emailSavedResponse, setEmailSavedResponse] = useState12(), [showChangeEmailModal, openChangeEmailModal, closeChangeEmailModal] = use_toggle_state_default(!1), [isEditing, setIsEditing] = useState12(!1), emailInputRef = useRef7(null), formRef = useRef7(null);
  return console.log("First Name:", firstName), console.log("Email:", emailAddress), console.log("Phone Number:", phoneNumber), useEffect12(() => {
    if (actionDataHook) {
      if (isEmailSavedResponse(actionDataHook)) {
        setEmailSavedResponse(actionDataHook), closeChangeEmailModal();
        return;
      }
      if (isCustomerUpdatedResponse(actionDataHook)) {
        setIsEditing(!1), setFormError(void 0);
        return;
      }
      if (isFormError(actionDataHook)) {
        setFormError(actionDataHook);
        return;
      }
    }
  }, [actionDataHook]), useEffect12(() => {
    formRef.current?.reset();
  }, [isEditing]), /* @__PURE__ */ jsxDEV51(Fragment13, { children: [
    /* @__PURE__ */ jsxDEV51(
      Modal_default,
      {
        isOpen: showChangeEmailModal,
        close: () => closeChangeEmailModal(),
        afterOpen: () => emailInputRef.current?.focus(),
        size: "small",
        children: /* @__PURE__ */ jsxDEV51(ValidatedForm5, { validator: changeEmailValidator, method: "post", children: [
          /* @__PURE__ */ jsxDEV51(Modal_default.Title, { children: t("account.changeEmailModal.title") }, void 0, !1, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 201,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV51(Modal_default.Body, { children: /* @__PURE__ */ jsxDEV51("div", { className: "space-y-4 my-8", children: [
            /* @__PURE__ */ jsxDEV51("p", { children: t("account.changeEmailModal.heading") }, void 0, !1, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV51("p", { children: [
              t("account.changeEmailModal.currentEmail"),
              " ",
              /* @__PURE__ */ jsxDEV51("strong", { children: emailAddress }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 207,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV51("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxDEV51(
                "input",
                {
                  type: "hidden",
                  name: "intent",
                  value: "updateEmail" /* UpdateEmail */
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 211,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV51(
                Input,
                {
                  ref: emailInputRef,
                  autoFocus: !0,
                  label: t("account.changeEmailModal.new"),
                  name: "email",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 216,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV51(
                Input,
                {
                  label: t("account.password"),
                  type: "password",
                  name: "password",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 223,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV51("input", { type: "submit", hidden: !0 }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 229,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this),
            formError && formError.intent === "updateEmail" /* UpdateEmail */ && /* @__PURE__ */ jsxDEV51(
              ErrorMessage,
              {
                heading: t("account.changeEmailModal.errorMessage"),
                message: formError.message
              },
              void 0,
              !1,
              {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 232,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 203,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 202,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV51(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsxDEV51(Button, { type: "reset", onClick: () => closeChangeEmailModal(), children: t("common.cancel") }, void 0, !1, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 240,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV51(
              HighlightedButton,
              {
                type: "submit",
                isSubmitting: state === "submitting",
                children: t("common.save")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 243,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 239,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 200,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 194,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV51("div", { className: "space-y-10 p-4 mt-5", children: [
      /* @__PURE__ */ jsxDEV51("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxDEV51("div", { className: "space-y-10 p-4 mt-5", children: [
            /* @__PURE__ */ jsxDEV51("div", { className: "border border-gray-200 rounded-lg p-6 bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxDEV51("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: t("account.contactDetails") }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 259,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ jsxDEV51("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxDEV51("div", { children: [
                  /* @__PURE__ */ jsxDEV51("span", { className: "text-sm text-gray-500", children: t("account.fullName") }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ jsxDEV51("p", { className: "text-gray-800", children: replaceEmptyString(fullName) }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 261,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ jsxDEV51("div", { children: [
                  /* @__PURE__ */ jsxDEV51("span", { className: "text-sm text-gray-500", children: t("account.email") }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ jsxDEV51("p", { className: "text-gray-800", children: emailSavedResponse ? emailSavedResponse.newEmailAddress : emailAddress }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 265,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ jsxDEV51("div", { children: [
                  /* @__PURE__ */ jsxDEV51("span", { className: "text-sm text-gray-500", children: t("account.phoneNumber") }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ jsxDEV51("p", { className: "text-gray-800", children: replaceEmptyString(phoneNumber) }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 271,
                  columnNumber: 7
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 260,
                columnNumber: 5
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 258,
              columnNumber: 3
            }, this),
            /* @__PURE__ */ jsxDEV51("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxDEV51("h3", { className: "text-sm text-gray-500", children: t("account.email") }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 281,
                  columnNumber: 7
                }, this),
                emailSavedResponse ? /* @__PURE__ */ jsxDEV51("span", { children: [
                  /* @__PURE__ */ jsxDEV51("span", { className: "italic text-gray-800", children: emailSavedResponse.newEmailAddress }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ jsxDEV51("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: t("account.changeEmailConfirmation") }, void 0, !1, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 283,
                  columnNumber: 9
                }, this) : /* @__PURE__ */ jsxDEV51("span", { children: emailAddress }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 292,
                  columnNumber: 9
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 280,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: /* @__PURE__ */ jsxDEV51(
                HighlightedButton,
                {
                  type: "button",
                  onClick: () => openChangeEmailModal(),
                  children: [
                    /* @__PURE__ */ jsxDEV51(PencilIcon3, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "app/routes/account._index.tsx",
                      lineNumber: 300,
                      columnNumber: 9
                    }, this),
                    " ",
                    t("account.changeEmailButton")
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 296,
                  columnNumber: 7
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 295,
                columnNumber: 5
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 279,
              columnNumber: 3
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 256,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV51("h3", { className: "text-sm text-gray-500", children: t("account.email") }, void 0, !1, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 307,
            columnNumber: 13
          }, this),
          emailSavedResponse ? /* @__PURE__ */ jsxDEV51("span", { children: [
            /* @__PURE__ */ jsxDEV51("span", { className: "italic text-gray-800", children: emailSavedResponse.newEmailAddress }, void 0, !1, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 310,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV51("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: t("account.changeEmailConfirmation") }, void 0, !1, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 313,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 309,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV51("span", { children: emailAddress }, void 0, !1, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: /* @__PURE__ */ jsxDEV51(
          HighlightedButton,
          {
            type: "button",
            onClick: () => openChangeEmailModal(),
            children: [
              /* @__PURE__ */ jsxDEV51(PencilIcon3, { className: "w-4 h-4" }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 326,
                columnNumber: 15
              }, this),
              " ",
              t("account.changeEmailButton")
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 322,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV51("div", { className: "border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsxDEV51(
        ValidatedForm5,
        {
          validator: validator4,
          formRef,
          method: "post",
          id: "details",
          defaultValues: {
            title: title ?? void 0,
            firstName,
            lastName,
            phoneNumber: phoneNumber ?? void 0
          },
          children: [
            /* @__PURE__ */ jsxDEV51(
              "input",
              {
                type: "hidden",
                name: "intent",
                value: "updateDetails" /* UpdateDetails */
              },
              void 0,
              !1,
              {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 344,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV51("div", { className: "gap-4 grid sm:grid-cols-2", children: [
              isEditing && /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: /* @__PURE__ */ jsxDEV51(
                Input,
                {
                  label: t("account.title"),
                  name: "title",
                  className: "sm:w-1/4"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 352,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 351,
                columnNumber: 17
              }, this),
              isEditing ? /* @__PURE__ */ jsxDEV51(Fragment13, { children: [
                /* @__PURE__ */ jsxDEV51("div", { children: /* @__PURE__ */ jsxDEV51(
                  Input,
                  {
                    label: t("account.firstName"),
                    name: "firstName",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 362,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 361,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV51("div", { children: /* @__PURE__ */ jsxDEV51(
                  Input,
                  {
                    label: t("account.lastName"),
                    name: "lastName",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 369,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 368,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 360,
                columnNumber: 17
              }, this) : /* @__PURE__ */ jsxDEV51("div", { children: [
                /* @__PURE__ */ jsxDEV51("h3", { className: "text-sm text-gray-500", children: t("account.fullName") }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 378,
                  columnNumber: 19
                }, this),
                replaceEmptyString(fullName)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 377,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV51("div", { children: isEditing ? /* @__PURE__ */ jsxDEV51(Input, { label: t("account.phoneNumber"), name: "phoneNumber" }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 387,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV51("div", { children: [
                /* @__PURE__ */ jsxDEV51("h3", { className: "text-sm text-gray-500", children: t("account.phoneNumber") }, void 0, !1, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 390,
                  columnNumber: 21
                }, this),
                replaceEmptyString(phoneNumber)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 389,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 385,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV51("div", { className: "col-span-2", children: isEditing ? /* @__PURE__ */ jsxDEV51(Fragment13, { children: [
                formError && formError.intent === "updateDetails" /* UpdateDetails */ && /* @__PURE__ */ jsxDEV51(
                  ErrorMessage,
                  {
                    heading: t("account.errorMessage"),
                    message: formError.message
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 402,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV51("div", { className: "flex gap-x-4", children: [
                  /* @__PURE__ */ jsxDEV51(
                    HighlightedButton,
                    {
                      type: "submit",
                      isSubmitting: state === "submitting",
                      children: [
                        /* @__PURE__ */ jsxDEV51(CheckIcon2, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "app/routes/account._index.tsx",
                          lineNumber: 413,
                          columnNumber: 25
                        }, this),
                        " ",
                        t("common.save")
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/account._index.tsx",
                      lineNumber: 409,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV51(Button, { type: "reset", onClick: () => setIsEditing(!1), children: [
                    /* @__PURE__ */ jsxDEV51(XMarkIcon4, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "app/routes/account._index.tsx",
                      lineNumber: 417,
                      columnNumber: 25
                    }, this),
                    " ",
                    t("common.cancel")
                  ] }, void 0, !0, {
                    fileName: "app/routes/account._index.tsx",
                    lineNumber: 416,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 408,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV51(
                HighlightedButton,
                {
                  type: "button",
                  onClick: () => setIsEditing(!0),
                  children: [
                    /* @__PURE__ */ jsxDEV51(PencilIcon3, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "app/routes/account._index.tsx",
                      lineNumber: 426,
                      columnNumber: 21
                    }, this),
                    " ",
                    t("common.edit")
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 422,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 397,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 349,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 332,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/account._index.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account._index.tsx",
    lineNumber: 193,
    columnNumber: 5
  }, this);
}

// app/routes/products.$slug.tsx
var products_slug_exports = {};
__export(products_slug_exports, {
  CatchBoundary: () => CatchBoundary3,
  default: () => ProductSlug,
  loader: () => loader13,
  meta: () => meta3,
  shouldRevalidate: () => shouldRevalidate2
});
import { json as json13 } from "@remix-run/server-runtime";
import { useState as useState13 } from "react";
import {
  useLoaderData as useLoaderData15,
  useOutletContext as useOutletContext3
} from "@remix-run/react";
import { CheckIcon as CheckIcon3, HeartIcon, PhotoIcon } from "@heroicons/react/24/solid";

// app/components/Alert.tsx
import { XCircleIcon as XCircleIcon5 } from "@heroicons/react/24/solid";
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
function Alert({ message }) {
  return /* @__PURE__ */ jsxDEV52("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV52("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV52("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV52(XCircleIcon5, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV52("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV52("h3", { className: "text-sm font-medium text-red-800", children: message }, void 0, !1, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Alert.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Alert.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/products/StockLevelLabel.tsx
import { useTranslation as useTranslation37 } from "react-i18next";
import { jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
function StockLevelLabel({ stockLevel }) {
  let { t } = useTranslation37(), stockLevelLabel = "", badgeClasses = "bg-gray-100 text-gray-800";
  switch (stockLevel) {
    case "IN_STOCK":
      stockLevelLabel = t("product.inStock"), badgeClasses = "bg-green-100 text-green-800";
      break;
    case "OUT_OF_STOCK":
      stockLevelLabel = t("product.outOfStock"), badgeClasses = "bg-red-100 text-red-800";
      break;
    case "LOW_STOCK":
      stockLevelLabel = t("product.lowStock"), badgeClasses = "bg-yellow-100 text-yellow-800";
      break;
  }
  return /* @__PURE__ */ jsxDEV53(
    "span",
    {
      className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium " + badgeClasses,
      children: stockLevelLabel
    },
    void 0,
    !1,
    {
      fileName: "app/components/products/StockLevelLabel.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/components/products/TopReviews.tsx
import { StarIcon } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation38 } from "react-i18next";
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
var reviews = [
  {
    id: 1,
    title: "I love it!",
    rating: 5,
    content: `
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `,
    author: "Ryan F",
    date: "May 25, 2022",
    datetime: "2022-05-25"
  },
  {
    id: 2,
    title: "Awesome product",
    rating: 5,
    content: `
              <p>Ornare quam viverra orci sagittis eu volutpat odio. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Ultrices tincidunt arcu non sodales neque.</p> 
              <p>Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sodales ut etiam sit amet nisl purus in mollis nunc. Turpis egestas integer eget aliquet nibh praesent tristique magna. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Justo laoreet sit amet cursus sit amet.</p>
            `,
    author: "Kent D",
    date: "May 24, 2022",
    datetime: "2022-05-24"
  },
  {
    id: 3,
    title: "Really happy with this purchase",
    rating: 5,
    content: `
              <p>Nisi est sit amet facilisis magna etiam tempor orci eu.</p> 
              <p>Elit duis tristique sollicitudin nibh sit amet commodo. Dolor sit amet consectetur adipiscing elit. Lorem dolor sed viverra ipsum nunc. Accumsan tortor posuere ac ut consequat semper. Augue mauris augue neque gravida in fermentum et sollicitudin ac.</p>
            `,
    author: "Michael J",
    date: "May 24, 2022",
    datetime: "2022-05-24"
  }
];
function TopReviews() {
  let { t } = useTranslation38();
  return /* @__PURE__ */ jsxDEV54("div", { className: "", children: /* @__PURE__ */ jsxDEV54("div", { className: "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8", children: [
    /* @__PURE__ */ jsxDEV54("h2", { className: "text-lg font-medium text-gray-900", children: t("product.recentReviews") }, void 0, !1, {
      fileName: "app/components/products/TopReviews.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV54("div", { className: "mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10", children: reviews.map((review) => /* @__PURE__ */ jsxDEV54(
      "div",
      {
        className: "pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8",
        children: [
          /* @__PURE__ */ jsxDEV54("div", { className: "lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start", children: [
            /* @__PURE__ */ jsxDEV54("div", { className: "flex items-center xl:col-span-1", children: [
              /* @__PURE__ */ jsxDEV54("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ jsxDEV54(
                StarIcon,
                {
                  className: classNames(
                    review.rating > rating ? "text-yellow-400" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  ),
                  "aria-hidden": "true"
                },
                rating,
                !1,
                {
                  fileName: "app/components/products/TopReviews.tsx",
                  lineNumber: 73,
                  columnNumber: 23
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/products/TopReviews.tsx",
                lineNumber: 71,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV54("p", { className: "ml-3 text-sm text-gray-700", children: [
                review.rating,
                /* @__PURE__ */ jsxDEV54("span", { className: "sr-only", children: [
                  " ",
                  t("product.recentRating")
                ] }, void 0, !0, {
                  fileName: "app/components/products/TopReviews.tsx",
                  lineNumber: 87,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/products/TopReviews.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/products/TopReviews.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV54("div", { className: "mt-4 lg:mt-6 xl:mt-0 xl:col-span-2", children: [
              /* @__PURE__ */ jsxDEV54("h3", { className: "text-sm font-medium text-gray-900", children: review.title }, void 0, !1, {
                fileName: "app/components/products/TopReviews.tsx",
                lineNumber: 95,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV54(
                "div",
                {
                  className: "mt-3 space-y-6 text-sm text-gray-500",
                  dangerouslySetInnerHTML: {
                    __html: review.content
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/products/TopReviews.tsx",
                  lineNumber: 99,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/products/TopReviews.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV54("div", { className: "mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3", children: [
            /* @__PURE__ */ jsxDEV54("p", { className: "font-medium text-gray-900", children: review.author }, void 0, !1, {
              fileName: "app/components/products/TopReviews.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV54(
              "time",
              {
                dateTime: review.datetime,
                className: "ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0",
                children: review.date
              },
              void 0,
              !1,
              {
                fileName: "app/components/products/TopReviews.tsx",
                lineNumber: 110,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this)
        ]
      },
      review.id,
      !0,
      {
        fileName: "app/components/products/TopReviews.tsx",
        lineNumber: 65,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/products/TopReviews.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/products/TopReviews.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/products/TopReviews.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/components/products/ScrollableContainer.tsx
import { useRef as useRef8, useEffect as useEffect13 } from "react";
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
function ScrollableContainer({ children }) {
  let spanRef = useRef8(null), pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  }, mouseDownHandler = (e) => {
    let span = spanRef.current;
    pos = {
      left: span.scrollLeft,
      top: span.scrollTop,
      x: e.clientX,
      y: e.clientY
    }, span.style.cursor = "grabbing", span.style.userSelect = "none", document.addEventListener("mousemove", mouseMoveHandler), document.addEventListener("mouseup", mouseUpHandler);
  }, mouseMoveHandler = (e) => {
    let span = spanRef.current, dx = e.clientX - pos.x, dy = e.clientY - pos.y;
    span.scrollTop = pos.top - dy, span.scrollLeft = pos.left - dx;
  }, mouseUpHandler = () => {
    let span = spanRef.current;
    document.removeEventListener("mousemove", mouseMoveHandler), document.removeEventListener("mouseup", mouseUpHandler), span.style.cursor = "grab", span.style.removeProperty("user-select");
  }, wheelHandler = (e) => {
    let diff = e.deltaY || e.deltaX;
    spanRef.current.scrollLeft += diff * 0.5, e.preventDefault();
  };
  return useEffect13(() => {
    spanRef.current.addEventListener("wheel", wheelHandler, {
      passive: !1
    });
  }), /* @__PURE__ */ jsxDEV55(
    "span",
    {
      className: "py-2 mt-2 flex flex-row flex-nowrap space-x-4 md:overflow-x-hidden overflow-x-auto cursor-grab touch-pan-x",
      ref: spanRef,
      onMouseDown: mouseDownHandler,
      onClickCapture: (e) => {
        (e.clientX != pos.x || e.clientY != pos.y) && e.stopPropagation();
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/products/ScrollableContainer.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}

// app/routes/products.$slug.tsx
import { useTranslation as useTranslation39 } from "react-i18next";
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
var meta3 = ({ data }) => [
  {
    title: data?.product?.name ? `${data.product.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }
];
async function loader13({ params, request }) {
  let { product } = await getProductBySlug(params.slug, { request });
  if (!product)
    throw new Response("Not Found", {
      status: 404
    });
  let sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(
    request?.headers.get("Cookie")
  ), error = session.get("activeOrderError");
  return json13(
    { product, error },
    {
      headers: {
        "Set-Cookie": await sessionStorage2.commitSession(session)
      }
    }
  );
}
var shouldRevalidate2 = () => !0;
function ProductSlug() {
  let { product, error } = useLoaderData15(), { activeOrderFetcher } = useOutletContext3(), { activeOrder } = activeOrderFetcher.data ?? {}, addItemToOrderError = getAddItemToOrderError(error), { t } = useTranslation39();
  if (!product)
    return /* @__PURE__ */ jsxDEV56("div", { children: t("product.notFound") }, void 0, !1, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 68,
      columnNumber: 12
    }, this);
  let findVariantById = (id) => product.variants.find((v) => v.id === id), [selectedVariantId, setSelectedVariantId] = useState13(
    product.variants[0].id
  ), selectedVariant = findVariantById(selectedVariantId);
  selectedVariant || setSelectedVariantId(product.variants[0].id);
  let qtyInCart = activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)?.quantity ?? 0, asset = product.assets[0], brandName = product.facetValues.find(
    (fv) => fv.facet.code === "brand"
  )?.name, [featuredAsset, setFeaturedAsset] = useState13(
    selectedVariant?.featuredAsset
  );
  return /* @__PURE__ */ jsxDEV56("div", { children: [
    /* @__PURE__ */ jsxDEV56("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV56("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: product.name }, void 0, !1, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV56(
        Breadcrumbs,
        {
          items: product.collections[product.collections.length - 1]?.breadcrumbs ?? []
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 101,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV56("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
        /* @__PURE__ */ jsxDEV56("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: [
          /* @__PURE__ */ jsxDEV56("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsxDEV56("div", { className: "w-full h-full object-center object-cover rounded-lg", children: /* @__PURE__ */ jsxDEV56(
            "img",
            {
              src: (featuredAsset?.preview || product.featuredAsset?.preview) + "?w=800",
              alt: product.name,
              className: "w-full h-full object-center object-cover rounded-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 112,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          product.assets.length > 1 && /* @__PURE__ */ jsxDEV56(ScrollableContainer, { children: product.assets.map((asset2) => /* @__PURE__ */ jsxDEV56(
            "div",
            {
              className: `basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${featuredAsset?.id == asset2.id ? "outline outline-2 outline-primary outline-offset-[-2px]" : ""}`,
              onClick: () => {
                setFeaturedAsset(asset2);
              },
              children: /* @__PURE__ */ jsxDEV56(
                "img",
                {
                  draggable: "false",
                  className: "rounded-lg select-none h-24 w-full object-cover",
                  src: asset2.preview + "?preset=full"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 136,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 126,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV56("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
          /* @__PURE__ */ jsxDEV56("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV56("h3", { className: "sr-only", children: t("product.description") }, void 0, !1, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV56(
              "div",
              {
                className: "text-base text-gray-700",
                dangerouslySetInnerHTML: {
                  __html: product.description
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 155,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV56(activeOrderFetcher.Form, { method: "post", action: "/api/active-order", children: [
            /* @__PURE__ */ jsxDEV56("input", { type: "hidden", name: "action", value: "addItemToOrder" }, void 0, !1, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this),
            1 < product.variants.length ? /* @__PURE__ */ jsxDEV56("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxDEV56(
                "label",
                {
                  htmlFor: "option",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("product.selectOption")
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 166,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV56(
                "select",
                {
                  className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md",
                  id: "productVariant",
                  value: selectedVariantId,
                  name: "variantId",
                  onChange: (e) => {
                    setSelectedVariantId(e.target.value);
                    let variant = findVariantById(e.target.value);
                    variant && setFeaturedAsset(variant.featuredAsset);
                  },
                  children: product.variants.map((variant) => /* @__PURE__ */ jsxDEV56("option", { value: variant.id, children: variant.name }, variant.id, !1, {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 172,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV56(
              "input",
              {
                type: "hidden",
                name: "variantId",
                value: selectedVariantId
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 194,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV56("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxDEV56("p", { className: "text-3xl text-gray-900 mr-4", children: /* @__PURE__ */ jsxDEV56(
                Price,
                {
                  priceWithTax: selectedVariant?.priceWithTax,
                  currencyCode: selectedVariant?.currencyCode
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 203,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 202,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56("div", { className: "flex sm:flex-col1 align-baseline", children: [
                /* @__PURE__ */ jsxDEV56(
                  "button",
                  {
                    type: "submit",
                    className: `max-w-xs flex-1 ${activeOrderFetcher.state !== "idle" ? "bg-gray-400" : qtyInCart === 0 ? "bg-primary-600 hover:bg-primary-700" : "bg-green-600 active:bg-green-700 hover:bg-green-700"}
                                     transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                      justify-center text-base font-medium text-white focus:outline-none
                                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`,
                    disabled: activeOrderFetcher.state !== "idle",
                    children: qtyInCart ? /* @__PURE__ */ jsxDEV56("span", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxDEV56(CheckIcon3, { className: "w-5 h-5 mr-1" }, void 0, !1, {
                        fileName: "app/routes/products.$slug.tsx",
                        lineNumber: 225,
                        columnNumber: 25
                      }, this),
                      " ",
                      qtyInCart,
                      " ",
                      t("product.inCart")
                    ] }, void 0, !0, {
                      fileName: "app/routes/products.$slug.tsx",
                      lineNumber: 224,
                      columnNumber: 23
                    }, this) : t("product.addToCart")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 209,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV56(
                  "button",
                  {
                    type: "button",
                    className: "ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500",
                    children: [
                      /* @__PURE__ */ jsxDEV56(
                        HeartIcon,
                        {
                          className: "h-6 w-6 flex-shrink-0",
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/products.$slug.tsx",
                          lineNumber: 237,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV56("span", { className: "sr-only", children: t("product.addToFavorites") }, void 0, !1, {
                        fileName: "app/routes/products.$slug.tsx",
                        lineNumber: 241,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 233,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 208,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 201,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV56("div", { className: "mt-2 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxDEV56("span", { className: "text-gray-500", children: selectedVariant?.sku }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 248,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56(StockLevelLabel, { stockLevel: selectedVariant?.stockLevel }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 247,
              columnNumber: 15
            }, this),
            addItemToOrderError && /* @__PURE__ */ jsxDEV56("div", { className: "mt-4", children: /* @__PURE__ */ jsxDEV56(Alert, { message: addItemToOrderError }, void 0, !1, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 253,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV56("section", { className: "mt-12 pt-12 border-t text-xs", children: [
              /* @__PURE__ */ jsxDEV56("h3", { className: "text-gray-600 font-bold mb-2", children: t("product.shippingAndReturns") }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 258,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56("div", { className: "text-gray-500 space-y-1", children: [
                /* @__PURE__ */ jsxDEV56("p", { children: t("product.shippingInfo") }, void 0, !1, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 262,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV56("p", { children: t("product.shippingCostsInfo") }, void 0, !1, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 263,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV56("p", { children: t("product.returnsInfo") }, void 0, !1, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 264,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 261,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 257,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV56("div", { className: "mt-24", children: /* @__PURE__ */ jsxDEV56(TopReviews, {}, void 0, !1, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 272,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$slug.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let { t } = useTranslation39();
  return /* @__PURE__ */ jsxDEV56("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV56("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.notFound") }, void 0, !1, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 283,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV56("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
      /* @__PURE__ */ jsxDEV56("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: /* @__PURE__ */ jsxDEV56("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsxDEV56("div", { className: "w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center", children: /* @__PURE__ */ jsxDEV56(PhotoIcon, { className: "w-48 text-white" }, void 0, !1, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 291,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 289,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV56("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
        /* @__PURE__ */ jsxDEV56("div", { className: "", children: t("product.notFoundInfo") }, void 0, !1, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV56("div", { className: "flex-1 space-y-3 py-1", children: [
          /* @__PURE__ */ jsxDEV56("div", { className: "h-2 bg-slate-200 rounded" }, void 0, !1, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV56("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV56("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxDEV56("div", { className: "h-2 bg-slate-200 rounded col-span-2" }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 303,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, !1, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 304,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 302,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV56("div", { className: "h-2 bg-slate-200 rounded" }, void 0, !1, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 306,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 301,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 286,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$slug.tsx",
    lineNumber: 282,
    columnNumber: 5
  }, this);
}
function getAddItemToOrderError(error) {
  if (!(!error || !error.errorCode))
    switch (error.errorCode) {
      case "ORDER_MODIFICATION_ERROR" /* OrderModificationError */:
      case "ORDER_LIMIT_ERROR" /* OrderLimitError */:
      case "NEGATIVE_QUANTITY_ERROR" /* NegativeQuantityError */:
      case "INSUFFICIENT_STOCK_ERROR" /* InsufficientStockError */:
        return error.message;
    }
}

// app/routes/sign-up.index.tsx
var sign_up_index_exports = {};
__export(sign_up_index_exports, {
  action: () => action11,
  default: () => SignUpPage
});
import { Form as Form6, Link as Link12, useActionData as useActionData5, useSearchParams as useSearchParams3 } from "@remix-run/react";
import { json as json14, redirect as redirect9 } from "@remix-run/server-runtime";
import { XCircleIcon as XCircleIcon6 } from "@heroicons/react/24/solid";

// app/utils/registration-helper.ts
var EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, validateRegistrationForm = (formData) => {
  let errors = {}, email = formData.get("email"), password = formData.get("password"), repeatPassword = formData.get("repeatPassword");
  return (!email || typeof email != "string" || !email.match(EMAIL_REGEX)) && (errors.email = "A valid e-mail address is required."), (!password || typeof password != "string" || password.length < 4) && (errors.password = "Minimum password length is 4 symbols."), (!repeatPassword || typeof repeatPassword != "string") && (errors.repeatPassword = "Please repeat password!"), repeatPassword !== password && (errors.repeatPassword = "Passwords do not match!"), console.log(errors), errors;
}, extractRegistrationFormValues = (formData) => ({ input: {
  emailAddress: formData.get("email"),
  firstName: formData.get("firstName") || void 0,
  lastName: formData.get("lastName") || void 0,
  password: formData.get("password")
} });

// app/routes/sign-up.index.tsx
import { useTranslation as useTranslation40 } from "react-i18next";
import { Fragment as Fragment14, jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
async function action11({ request }) {
  if (API_URL === DEMO_API_URL)
    return {
      form: (await getFixedT(request))("vendure.registrationError")
    };
  let body = await request.formData(), fieldErrors = validateRegistrationForm(body);
  if (Object.keys(fieldErrors).length !== 0)
    return fieldErrors;
  let variables = extractRegistrationFormValues(body), result = await registerCustomerAccount({ request }, variables);
  if (result.__typename === "Success")
    return redirect9("/sign-up/success");
  {
    let formError = {
      form: result.errorCode
    };
    return json14(formError, { status: 401 });
  }
}
function SignUpPage() {
  let [searchParams] = useSearchParams3(), formErrors = useActionData5(), { t } = useTranslation40();
  return /* @__PURE__ */ jsxDEV57(Fragment14, { children: /* @__PURE__ */ jsxDEV57("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV57("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsxDEV57("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.create") }, void 0, !1, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV57("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsxDEV57(
          Link12,
          {
            to: "/sign-in",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.login")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 55,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV57("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV57("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxDEV57(Form6, { className: "space-y-6", method: "post", children: [
      /* @__PURE__ */ jsxDEV57(
        "input",
        {
          type: "hidden",
          name: "redirectTo",
          value: searchParams.get("redirectTo") ?? void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 70,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV57("div", { children: [
        /* @__PURE__ */ jsxDEV57(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.emailAddress")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 76,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("div", { className: "mt-1", children: [
          /* @__PURE__ */ jsxDEV57(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 83,
              columnNumber: 19
            },
            this
          ),
          formErrors?.email && /* @__PURE__ */ jsxDEV57("div", { className: "text-xs text-red-700", children: formErrors.email }, void 0, !1, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV57("div", { children: [
        /* @__PURE__ */ jsxDEV57(
          "label",
          {
            htmlFor: "firstName",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.firstName")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 99,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV57(
          "input",
          {
            id: "firstName",
            name: "firstName",
            type: "text",
            autoComplete: "given-name",
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 106,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV57("div", { children: [
        /* @__PURE__ */ jsxDEV57(
          "label",
          {
            htmlFor: "lastName",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.lastName")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 117,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV57(
          "input",
          {
            id: "lastName",
            name: "lastName",
            type: "text",
            autoComplete: "family-name",
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 124,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV57("div", { children: [
        /* @__PURE__ */ jsxDEV57(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.password")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 135,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("div", { className: "mt-1", children: [
          /* @__PURE__ */ jsxDEV57(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 142,
              columnNumber: 19
            },
            this
          ),
          formErrors?.password && /* @__PURE__ */ jsxDEV57("div", { className: "text-xs text-red-700", children: formErrors.password }, void 0, !1, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 150,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 134,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV57("div", { children: [
        /* @__PURE__ */ jsxDEV57(
          "label",
          {
            htmlFor: "repeatPassword",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.repeatPassword")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 157,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("div", { className: "mt-1", children: [
          /* @__PURE__ */ jsxDEV57(
            "input",
            {
              id: "repeatPassword",
              name: "repeatPassword",
              type: "password",
              autoComplete: "current-password",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 164,
              columnNumber: 19
            },
            this
          ),
          formErrors?.repeatPassword && /* @__PURE__ */ jsxDEV57("div", { className: "text-xs text-red-700", children: formErrors.repeatPassword }, void 0, !1, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 172,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 156,
        columnNumber: 15
      }, this),
      formErrors?.form && /* @__PURE__ */ jsxDEV57("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV57("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV57("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV57(
          XCircleIcon6,
          {
            className: "h-5 w-5 text-red-400",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 182,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 181,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV57("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxDEV57("h3", { className: "text-sm font-medium text-red-800", children: t("account.createError") }, void 0, !1, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 188,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV57("p", { className: "text-sm text-red-700 mt-2", children: formErrors.form }, void 0, !1, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 191,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 187,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 180,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 179,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV57("div", { children: /* @__PURE__ */ jsxDEV57(
        "button",
        {
          type: "submit",
          className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: t("account.signUp")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 200,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 199,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-up.index.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/api.logout.ts
var api_logout_exports = {};
__export(api_logout_exports, {
  action: () => action12,
  loader: () => loader14
});
import { redirect as redirect10 } from "@remix-run/server-runtime";
async function action12({ request }) {
  let result = await logout({ request });
  return redirect10("/", { headers: result._headers });
}
async function loader14() {
  return redirect10("/");
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  action: () => action13,
  default: () => Checkout,
  loader: () => loader15
});
import { useLoaderData as useLoaderData16 } from "@remix-run/react";
import { json as json15, redirect as redirect11 } from "@remix-run/node";
import { useTranslation as useTranslation41 } from "react-i18next";
import { ChevronRightIcon as ChevronRightIcon2 } from "@heroicons/react/24/solid";
import { useLocation as useLocation2, useOutletContext as useOutletContext4 } from "@remix-run/react";
import { Link as Link13 } from "@remix-run/react";
import { jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
async function loader15({ request }) {
  let session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(request?.headers.get("Cookie"))
  ), activeOrder = await getActiveOrder({ request }), couponCodes = await getCouponCodeList({ request });
  (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0) && console.log("Redirect would occur, but bypassed for debugging");
  let { availableCountries } = await getAvailableCountries({ request }), { eligibleShippingMethods } = await getEligibleShippingMethods({ request }), { activeCustomer } = await getActiveCustomerAddresses({ request }), error = session.get("activeOrderError");
  return json15({
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes
  });
}
async function action13({ request }) {
  let formData = await request.formData(), actionType = formData.get("actionType"), couponCode = formData.get("couponCode");
  if (actionType === "apply") {
    if (!couponCode)
      return json15({ couponError: "Coupon code is required." }, { status: 400 });
    try {
      let result = await applyCouponCode(couponCode, { request });
      return result?.__typename === "Order" ? redirect11("/checkout") : result?.__typename === "CouponCodeInvalidError" ? json15({ couponError: result.message || "Invalid coupon code." }, { status: 400 }) : json15({ couponError: "Failed to apply coupon." }, { status: 500 });
    } catch (error) {
      return console.error("Failed to apply coupon:", error), json15({ couponError: "An error occurred while applying the coupon." }, { status: 500 });
    }
  } else if (actionType === "remove") {
    if (!couponCode)
      return json15({ couponError: "Coupon code is required for removal." }, { status: 400 });
    try {
      return (await removeCouponCode(couponCode, { request }))?.__typename === "Order" ? redirect11("/checkout") : json15({ couponError: "Failed to remove coupon." }, { status: 500 });
    } catch (error) {
      return console.error("Failed to remove coupon:", error), json15({ couponError: "An error occurred while removing the coupon." }, { status: 500 });
    }
  }
  return json15({ couponError: "Invalid action type." }, { status: 400 });
}
function Checkout() {
  let {
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes
  } = useLoaderData16(), { activeOrderFetcher, removeItem, adjustOrderLine: adjustOrderLine2, refresh } = useOutletContext4(), location2 = useLocation2(), { t } = useTranslation41(), state = "shipping";
  location2.pathname === "/checkout/payment" ? state = "payment" : location2.pathname.startsWith("/checkout/confirmation") && (state = "confirmation");
  let isConfirmationPage = state === "confirmation";
  return /* @__PURE__ */ jsxDEV58("div", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV58(
    "div",
    {
      className: classNames(
        isConfirmationPage ? "lg:max-w-3xl mx-auto" : "lg:max-w-7xl",
        "max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8"
      ),
      children: [
        /* @__PURE__ */ jsxDEV58("h2", { className: "sr-only", children: t("cart.checkout") }, void 0, !1, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV58(
          "nav",
          {
            "aria-label": t("cart.progress"),
            className: "hidden sm:block pb-8 mb-8 border-b border-gray-200",
            children: /* @__PURE__ */ jsxDEV58("ol", { role: "list", className: "flex space-x-4 justify-center", children: steps.map((step, stepIdx) => /* @__PURE__ */ jsxDEV58("li", { className: "flex items-center", children: [
              step === state ? /* @__PURE__ */ jsxDEV58("span", { "aria-current": "page", className: "text-primary-600 font-medium", children: t(`checkout.steps.${step}`) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 148,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV58("span", { className: "text-gray-500", children: t(`checkout.steps.${step}`) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 152,
                columnNumber: 19
              }, this),
              stepIdx !== steps.length - 1 ? /* @__PURE__ */ jsxDEV58(
                ChevronRightIcon2,
                {
                  className: "w-5 h-5 text-gray-300 ml-4",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                },
                this
              ) : null
            ] }, step, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, this)) }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 144,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 140,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV58("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
          /* @__PURE__ */ jsxDEV58("div", { className: isConfirmationPage ? "lg:col-span-2" : "", children: /* @__PURE__ */ jsxDEV58(CheckoutShipping, {}, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 167,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this),
          !isConfirmationPage && /* @__PURE__ */ jsxDEV58("div", { className: "mt-10 lg:mt-0", children: [
            /* @__PURE__ */ jsxDEV58("h2", { className: "text-lg font-medium text-gray-900 mb-6", children: t("order.summary") }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV58("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: [
              /* @__PURE__ */ jsxDEV58(
                CartContents,
                {
                  orderLines: activeOrder?.lines ?? [],
                  currencyCode: activeOrder?.currencyCode,
                  editable: state === "shipping",
                  removeItem,
                  adjustOrderLine: adjustOrderLine2
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 175,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV58("div", { className: "mt-4", children: /* @__PURE__ */ jsxDEV58(Link13, { to: "/coupon", children: /* @__PURE__ */ jsxDEV58(
                "button",
                {
                  type: "button",
                  className: "w-full bg-primary-600 text-white font-medium py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200",
                  children: [
                    t("checkout.availOffer"),
                    " "
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 184,
                  columnNumber: 5
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 183,
                columnNumber: 3
              }, this) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 182,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ jsxDEV58(CartTotals, { order: activeOrder }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 164,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 133,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}
var steps = ["shipping", "payment", "confirmation"];

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => AccountDashboard,
  loader: () => loader16
});
import {
  HashtagIcon,
  MapPinIcon,
  ShoppingBagIcon as ShoppingBagIcon2,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import { Form as Form8, Outlet as Outlet3, useLoaderData as useLoaderData17 } from "@remix-run/react";
import { json as json16, redirect as redirect12 } from "@remix-run/server-runtime";

// app/components/tabs/Tab.tsx
import { NavLink, useMatches as useMatches3, useResolvedPath } from "@remix-run/react";
import { jsxDEV as jsxDEV59 } from "react/jsx-dev-runtime";
function Tab({ Icon, text, to }) {
  let resolved = useResolvedPath(to), isActive = useMatches3().find((m) => m.pathname === resolved.pathname);
  return /* @__PURE__ */ jsxDEV59("li", { className: isActive ? "cursor-default" : "cursor-pointer", children: /* @__PURE__ */ jsxDEV59(
    NavLink,
    {
      to,
      className: `group w-full gap-x-2 max-w-[12rem] inline-flex items-center justify-around p-4 rounded-t-lg border-b-2 ${isActive ? "text-primary-500 border-primary-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`,
      children: [
        /* @__PURE__ */ jsxDEV59(
          Icon,
          {
            className: `w-5 h-5 ${isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-500"}`
          },
          void 0,
          !1,
          {
            fileName: "app/components/tabs/Tab.tsx",
            lineNumber: 30,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV59("p", { className: "flex-1", children: text }, void 0, !1, {
          fileName: "app/components/tabs/Tab.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/tabs/Tab.tsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/tabs/Tab.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/tabs/TabsContainer.tsx
import { Fragment as Fragment15, jsxDEV as jsxDEV60 } from "react/jsx-dev-runtime";
function TabsContainer({
  tabs,
  children
}) {
  return /* @__PURE__ */ jsxDEV60(Fragment15, { children: [
    /* @__PURE__ */ jsxDEV60("div", { className: "border-b border-gray-200 mt-4", children: /* @__PURE__ */ jsxDEV60("ul", { className: "gap-x-4 grid grid-cols-2 sm:grid-0 sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500", children: tabs.map((props) => /* @__PURE__ */ jsxDEV60(
      Tab,
      {
        Icon: props.Icon,
        text: props.text,
        to: props.to
      },
      props.text,
      !1,
      {
        fileName: "app/components/tabs/TabsContainer.tsx",
        lineNumber: 16,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/tabs/TabsContainer.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/tabs/TabsContainer.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/tabs/TabsContainer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/account.tsx
import { useTranslation as useTranslation42 } from "react-i18next";
import { jsxDEV as jsxDEV61 } from "react/jsx-dev-runtime";
async function loader16({ request }) {
  let { activeCustomer } = await getActiveCustomerDetails({ request });
  return activeCustomer ? json16({ activeCustomer }) : redirect12("/sign-in");
}
function AccountDashboard() {
  let { activeCustomer } = useLoaderData17(), { firstName, lastName } = activeCustomer, { t } = useTranslation42(), tabs = [
    {
      Icon: UserCircleIcon,
      text: t("account.details"),
      to: "./_index"
    },
    {
      Icon: ShoppingBagIcon2,
      text: t("account.purchaseHistory"),
      to: "./history"
    },
    {
      Icon: MapPinIcon,
      text: t("account.addresses"),
      to: "./addresses"
    },
    {
      Icon: HashtagIcon,
      text: t("account.password"),
      to: "./password"
    }
  ];
  return /* @__PURE__ */ jsxDEV61("div", { className: "max-w-6xl xl:mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV61("h2", { className: "text-3xl sm:text-5xl font-light text-gray-900 my-8", children: t("account.myAccount") }, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61("p", { className: "text-gray-700 text-lg -mt-4", children: [
      t("account.welcomeBack"),
      ", ",
      firstName,
      " ",
      lastName
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61(Form8, { method: "post", action: "/api/logout", children: /* @__PURE__ */ jsxDEV61(
      "button",
      {
        type: "submit",
        className: "underline text-primary-600 hover:text-primary-800",
        children: t("account.signOut")
      },
      void 0,
      !1,
      {
        fileName: "app/routes/account.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61(TabsContainer, { tabs, children: /* @__PURE__ */ jsxDEV61(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action14,
  default: () => SignInPage
});
import { Link as Link14, useFetcher as useFetcher4, useSearchParams as useSearchParams4 } from "@remix-run/react";
import { json as json17, redirect as redirect13 } from "@remix-run/server-runtime";
import { XCircleIcon as XCircleIcon7 } from "@heroicons/react/24/solid";
import { ArrowPathIcon as ArrowPathIcon4 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation43 } from "react-i18next";
import { Fragment as Fragment16, jsxDEV as jsxDEV62 } from "react/jsx-dev-runtime";
async function action14({ params, request }) {
  let body = await request.formData(), email = body.get("email"), password = body.get("password");
  if (typeof email == "string" && typeof password == "string") {
    let rememberMe = !!body.get("rememberMe"), redirectTo = body.get("redirectTo") || "/account", result = await login(email, password, rememberMe, { request });
    return result.__typename === "CurrentUser" ? redirect13(redirectTo, { headers: result._headers }) : json17(result, {
      status: 401
    });
  }
}
function SignInPage() {
  let [searchParams] = useSearchParams4(), login2 = useFetcher4(), { t } = useTranslation43();
  return /* @__PURE__ */ jsxDEV62(Fragment16, { children: /* @__PURE__ */ jsxDEV62("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV62("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsxDEV62("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.signInTitle") }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV62("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsxDEV62(
          Link14,
          {
            to: "/sign-up",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.register")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV62("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV62("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxDEV62(login2.Form, { method: "post", children: /* @__PURE__ */ jsxDEV62("fieldset", { disabled: login2.state !== "idle", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV62(
        "input",
        {
          type: "hidden",
          name: "redirectTo",
          value: searchParams.get("redirectTo") ?? void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 66,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV62("div", { children: [
        /* @__PURE__ */ jsxDEV62(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.emailAddress")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 72,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ jsxDEV62("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV62(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: !0,
            defaultValue: "test@vendure.io",
            placeholder: t("account.emailAddress"),
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 79,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV62("div", { children: [
        /* @__PURE__ */ jsxDEV62(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: t("account.password")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 93,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ jsxDEV62("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV62(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: !0,
            placeholder: t("account.password"),
            defaultValue: "test",
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 100,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 99,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV62("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV62("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV62(
            "input",
            {
              id: "rememberMe",
              name: "rememberMe",
              type: "checkbox",
              className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:bg-gray-300 disabled:cursor-not-allowed",
              defaultChecked: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 115,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV62(
            "label",
            {
              htmlFor: "rememberMe",
              className: "ml-2 block text-sm text-gray-900",
              children: t("account.rememberMe")
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 122,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV62("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV62(
          "a",
          {
            href: "#",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.forgotPassword")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 131,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 130,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      login2.data && login2.state === "idle" && /* @__PURE__ */ jsxDEV62("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV62("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV62("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV62(
          XCircleIcon7,
          {
            className: "h-5 w-5 text-red-400",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 144,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 143,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV62("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxDEV62("h3", { className: "text-sm font-medium text-red-800", children: t("account.errorSignIn") }, void 0, !1, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 150,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV62("p", { className: "text-sm text-red-700 mt-2", children: login2.data.message }, void 0, !1, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 149,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 141,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV62("div", { children: /* @__PURE__ */ jsxDEV62(
        Button,
        {
          type: "submit",
          className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: /* @__PURE__ */ jsxDEV62("span", { className: "flex gap-4 items-center", children: [
            login2.state !== "idle" && /* @__PURE__ */ jsxDEV62(ArrowPathIcon4, { className: "animate-spin h-5 w-5 text-gray-500" }, void 0, !1, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 168,
              columnNumber: 25
            }, this),
            t("account.signIn")
          ] }, void 0, !0, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 166,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 162,
          columnNumber: 19
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 161,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 65,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/coupon.tsx
var coupon_exports = {};
__export(coupon_exports, {
  action: () => action15,
  default: () => CouponsComponent,
  loader: () => loader17
});
import { json as json18 } from "@remix-run/node";
import { useLoaderData as useLoaderData18, Form as Form9, useActionData as useActionData7 } from "@remix-run/react";
import { useEffect as useEffect14, useState as useState14 } from "react";
import { jsxDEV as jsxDEV63 } from "react/jsx-dev-runtime";
var loader17 = async ({ request }) => {
  let options = { request }, couponCodes = await getCouponCodeList(options), activeOrder = await getActiveOrder(options);
  return json18({ couponCodes, activeOrder });
}, action15 = async ({ request }) => {
  let formData = await request.formData(), couponCode = formData.get("couponCode"), actionType = formData.get("actionType");
  if (actionType === "apply") {
    if (!couponCode)
      return json18({ error: "Coupon code is required." }, { status: 400 });
    try {
      let options = { request }, coupon = (await getCouponCodeList(options)).find((c) => c.couponCode === couponCode);
      if (!coupon || !coupon.couponCode)
        return json18({ error: "Invalid coupon code." }, { status: 400 });
      let minAmountCondition = coupon.conditions.find(
        (c) => c.code === "minimum_order_amount" || c.code === "minimumOrderAmount" || c.code === "minimumAmount"
      );
      if (minAmountCondition) {
        let amountArg = minAmountCondition.args.find((a) => a.name === "amount") ?? minAmountCondition.args[0], minAmountPaise = parseInt(amountArg.value, 10) || 0, totalWithTaxPaise = (await getActiveOrder(options))?.totalWithTax ?? 0;
        if (totalWithTaxPaise < minAmountPaise) {
          let diffRupees = ((minAmountPaise - totalWithTaxPaise) / 100).toFixed(2);
          return json18(
            { error: `Add \u20B9${diffRupees} more to apply this coupon. Current total: \u20B9${(totalWithTaxPaise / 100).toFixed(2)}.` },
            { status: 400 }
          );
        }
      }
      let cartItems = (await getActiveOrder(options))?.lines ?? [], variantIds = [];
      if (cartItems.length === 0) {
        for (let condition of coupon.conditions)
          if (condition.code === "productVariantIds") {
            for (let arg of condition.args)
              if (arg.name === "productVariantIds")
                try {
                  let parsedIds = JSON.parse(arg.value);
                  Array.isArray(parsedIds) ? variantIds.push(...parsedIds.map((id) => id.toString())) : variantIds.push(arg.value);
                } catch {
                  variantIds.push(arg.value);
                }
          }
        let existingVariantIds = new Set(cartItems.map((item) => item.productVariant.id));
        for (let variantId of variantIds)
          if (!existingVariantIds.has(variantId)) {
            let addFormData = new FormData();
            addFormData.append("action", "addItemToOrder"), addFormData.append("variantId", variantId);
            let addResult = await (await fetch("/api/active-order", {
              method: "POST",
              body: addFormData,
              headers: { Cookie: request.headers.get("Cookie") || "" }
            })).json();
            if (addResult.error)
              return json18(
                { error: `Failed to add product variant ${variantId} to cart: ${addResult.error}` },
                { status: 400 }
              );
          }
      }
      let result = await applyCouponCode(couponCode, options);
      if (result?.__typename === "Order") {
        let order = result;
        return json18({
          success: !0,
          message: `Coupon "${couponCode}" applied to your order!${cartItems.length === 0 && variantIds.length > 0 ? " Required products added to cart." : ""}`,
          orderTotal: order.totalWithTax,
          appliedCoupon: couponCode
        });
      } else {
        if (result?.__typename === "CouponCodeExpiredError")
          return json18({ error: result.message || "Coupon code has expired." }, { status: 400 });
        if (result?.__typename === "CouponCodeInvalidError")
          return json18({ error: result.message || "Invalid coupon code." }, { status: 400 });
        if (result?.__typename === "CouponCodeLimitError")
          return json18({ error: result.message || "Coupon usage limit reached." }, { status: 400 });
      }
      return json18({ error: "Unexpected response from server." }, { status: 500 });
    } catch (error) {
      return console.error("Failed to apply coupon:", error), json18({ error: "An error occurred while applying the coupon." }, { status: 500 });
    }
  } else if (actionType === "remove") {
    if (!couponCode)
      return json18({ error: "Coupon code is required for removal." }, { status: 400 });
    try {
      let options = { request }, coupon = (await getCouponCodeList(options)).find((c) => c.couponCode === couponCode);
      if (!coupon || !coupon.couponCode)
        return json18({ error: "Invalid coupon code." }, { status: 400 });
      let variantIdsToRemove = [];
      for (let condition of coupon.conditions)
        if (condition.code === "productVariantIds") {
          for (let arg of condition.args)
            if (arg.name === "productVariantIds")
              try {
                let parsedIds = JSON.parse(arg.value);
                Array.isArray(parsedIds) ? variantIdsToRemove.push(...parsedIds.map((id) => id.toString())) : variantIdsToRemove.push(arg.value);
              } catch {
                variantIdsToRemove.push(arg.value);
              }
        }
      let cartItems = (await getActiveOrder(options))?.lines ?? [];
      for (let item of cartItems)
        if (variantIdsToRemove.includes(item.productVariant.id)) {
          let removeFormData = new FormData();
          removeFormData.append("action", "removeOrderLine"), removeFormData.append("orderLineId", item.id);
          let removeResult = await (await fetch("/api/active-order", {
            method: "POST",
            body: removeFormData,
            headers: { Cookie: request.headers.get("Cookie") || "" }
          })).json();
          if (removeResult.error)
            return json18(
              { error: `Failed to remove product variant ${item.productVariant.id} from cart: ${removeResult.error}` },
              { status: 400 }
            );
        }
      let result = await removeCouponCode(couponCode, { request });
      return result?.__typename === "Order" ? json18({
        success: !0,
        message: "Coupon and associated products removed from your order.",
        orderTotal: result.totalWithTax,
        appliedCoupon: null
      }) : json18({ error: "Failed to remove coupon." }, { status: 400 });
    } catch (error) {
      return console.error("Failed to remove coupon:", error), json18({ error: "An error occurred while removing the coupon." }, { status: 500 });
    }
  }
  return json18({ error: "Invalid action type." }, { status: 400 });
}, couponGradients = [
  ["#FF6F61", "#DE1A82"],
  // Coral to Magenta
  ["#6B7280", "#1F2937"],
  // Gray to Dark Gray
  ["#FBBF24", "#F59E0B"],
  // Amber to Deep Orange
  ["#34D399", "#059669"],
  // Teal to Emerald
  ["#A78BFA", "#7C3AED"]
  // Lavender to Purple
];
function CouponsComponent({ order }) {
  let { couponCodes, activeOrder } = useLoaderData18(), actionData = useActionData7(), [showErrorModal, setShowErrorModal] = useState14(!1), [errorMessage, setErrorMessage] = useState14(""), [showConfirmModal, setShowConfirmModal] = useState14(!1), [couponToRemove, setCouponToRemove] = useState14(null);
  useEffect14(() => {
    if (actionData?.error) {
      let match = actionData.error.match(/Add ₹([\d.]+) more to apply this coupon/);
      if (match) {
        let extraAmount = match[1];
        setErrorMessage(
          `\u{1F6AB} Not eligible yet! Add \u20B9${extraAmount} more to unlock this coupon.`
        );
      } else
        setErrorMessage(actionData.error);
      setShowErrorModal(!0);
    }
  }, [actionData?.error]);
  let closeErrorModal = () => {
    setShowErrorModal(!1), setErrorMessage("");
  }, openConfirmModal = (couponCode) => {
    setCouponToRemove(couponCode), setShowConfirmModal(!0);
  }, closeConfirmModal = () => {
    setShowConfirmModal(!1), setCouponToRemove(null);
  }, confirmRemoveCoupon = () => {
    if (couponToRemove) {
      let form = document.createElement("form");
      form.method = "POST", form.style.display = "none";
      let actionInput = document.createElement("input");
      actionInput.type = "hidden", actionInput.name = "actionType", actionInput.value = "remove";
      let couponInput = document.createElement("input");
      couponInput.type = "hidden", couponInput.name = "couponCode", couponInput.value = couponToRemove, form.appendChild(actionInput), form.appendChild(couponInput), document.body.appendChild(form), form.submit(), closeConfirmModal();
    }
  }, enabledCoupons = couponCodes.filter((coupon) => coupon.enabled && coupon.couponCode), appliedCoupon = actionData?.appliedCoupon || activeOrder?.couponCodes?.[0], rawTotal = actionData?.orderTotal ?? activeOrder?.totalWithTax ?? order?.totalWithTax ?? 0;
  return /* @__PURE__ */ jsxDEV63("div", { className: "max-w-5xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl", children: [
    /* @__PURE__ */ jsxDEV63("link", { href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400&display=swap", rel: "stylesheet" }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this),
    showErrorModal && /* @__PURE__ */ jsxDEV63("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxDEV63("div", { className: "bg-white rounded-xl p-6 max-w-sm w-full shadow-lg backdrop-blur-md bg-opacity-90", children: [
      /* @__PURE__ */ jsxDEV63("h3", { className: "text-xl font-bold text-gray-900 mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV63("span", { className: "text-red-500", children: "\u26A0\uFE0F" }, void 0, !1, {
          fileName: "app/routes/coupon.tsx",
          lineNumber: 337,
          columnNumber: 15
        }, this),
        " Oops!"
      ] }, void 0, !0, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 336,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV63("p", { className: "text-gray-700 mb-4", children: errorMessage }, void 0, !1, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV63(
        "button",
        {
          onClick: closeErrorModal,
          className: "w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
          children: "Got It"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/coupon.tsx",
          lineNumber: 340,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 335,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 334,
      columnNumber: 9
    }, this),
    showConfirmModal && /* @__PURE__ */ jsxDEV63("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxDEV63("div", { className: "bg-white rounded-xl p-6 max-w-sm w-full shadow-lg backdrop-blur-md bg-opacity-90", children: [
      /* @__PURE__ */ jsxDEV63("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Confirm Removal" }, void 0, !1, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 354,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV63("p", { className: "text-gray-700 mb-4", children: "Remove this coupon and its products from your cart?" }, void 0, !1, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 355,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV63("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxDEV63(
          "button",
          {
            onClick: closeConfirmModal,
            className: "flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors",
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/coupon.tsx",
            lineNumber: 359,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV63(
          "button",
          {
            onClick: confirmRemoveCoupon,
            className: "flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
            children: "Remove"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/coupon.tsx",
            lineNumber: 365,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 358,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 353,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 352,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV63("div", { className: "mb-8 text-center", children: /* @__PURE__ */ jsxDEV63("h2", { className: "text-3xl font-bold text-gray-800 ", children: [
      "Order Total: ",
      /* @__PURE__ */ jsxDEV63(Price, { priceWithTax: rawTotal, currencyCode: activeOrder?.currencyCode ?? "INR" /* Inr */ }, void 0, !1, {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 378,
        columnNumber: 24
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 377,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 376,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV63("h3", { className: "text-2xl font-semibold text-gray-800 mb-6  text-center", children: "Exclusive Offers" }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 381,
      columnNumber: 7
    }, this),
    actionData?.message && /* @__PURE__ */ jsxDEV63(
      "div",
      {
        className: `mb-6 p-4 rounded-lg flex items-center gap-2 text-sm ${actionData.success ? "bg-green-100 text-green-800 border-green-300" : "bg-red-100 text-red-800 border-red-300"} border`,
        children: [
          /* @__PURE__ */ jsxDEV63("span", { children: actionData.success ? "\u2705" : "\u274C" }, void 0, !1, {
            fileName: "app/routes/coupon.tsx",
            lineNumber: 393,
            columnNumber: 11
          }, this),
          " ",
          actionData.message
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/coupon.tsx",
        lineNumber: 386,
        columnNumber: 9
      },
      this
    ),
    enabledCoupons.length > 0 ? /* @__PURE__ */ jsxDEV63("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: enabledCoupons.map((coupon, index) => {
      let isApplied = appliedCoupon === coupon.couponCode, gradient = couponGradients[index % couponGradients.length], variantNames = [];
      for (let condition of coupon.conditions)
        if (condition.code === "productVariantIds") {
          for (let arg of condition.args)
            if (arg.name === "productVariantIds")
              try {
                let variantIds = JSON.parse(arg.value), cartItems = activeOrder?.lines ?? [];
                for (let variantId of Array.isArray(variantIds) ? variantIds : [arg.value]) {
                  let matchingItem = cartItems.find(
                    (item) => item.productVariant.id === variantId.toString()
                  );
                  matchingItem?.productVariant.name && variantNames.push(matchingItem.productVariant.name);
                }
              } catch {
                let matchingItem = (activeOrder?.lines ?? []).find(
                  (item) => item.productVariant.id === arg.value
                );
                matchingItem?.productVariant.name && variantNames.push(matchingItem.productVariant.name);
              }
        }
      return /* @__PURE__ */ jsxDEV63(
        "div",
        {
          className: `coupon-ticket relative p-6 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 backdrop-blur-md ${isApplied ? "ring-2 ring-green-500" : "ring-1 ring-gray-200"}`,
          style: {
            background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`
          },
          children: [
            /* @__PURE__ */ jsxDEV63("div", { className: "absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full" }, void 0, !1, {
              fileName: "app/routes/coupon.tsx",
              lineNumber: 442,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full" }, void 0, !1, {
              fileName: "app/routes/coupon.tsx",
              lineNumber: 443,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV63("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxDEV63("div", { children: [
                  /* @__PURE__ */ jsxDEV63("span", { className: "coupon-code text-xl font-bold text-white tracking-wide", children: coupon.couponCode }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 448,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV63("span", { className: "ml-2 text-sm text-white/90", children: [
                    "(",
                    coupon.name,
                    ")"
                  ] }, void 0, !0, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 451,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 447,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV63(Form9, { method: "post", children: [
                  /* @__PURE__ */ jsxDEV63("input", { type: "hidden", name: "actionType", value: isApplied ? "remove" : "apply" }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 454,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV63("input", { type: "hidden", name: "couponCode", value: coupon.couponCode ?? "" }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 455,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV63(
                    "button",
                    {
                      type: "submit",
                      onClick: (e) => {
                        isApplied && (e.preventDefault(), openConfirmModal(coupon.couponCode ?? ""));
                      },
                      className: `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md ${isApplied ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white hover:bg-gray-100 text-gray-800"}`,
                      children: isApplied ? "Remove" : "Apply"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/coupon.tsx",
                      lineNumber: 456,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 453,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/coupon.tsx",
                lineNumber: 446,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV63("div", { className: "text-sm text-white/90 space-y-2 ", children: [
                /* @__PURE__ */ jsxDEV63("p", { children: [
                  /* @__PURE__ */ jsxDEV63("strong", { className: "", children: "Details:" }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 472,
                    columnNumber: 21
                  }, this),
                  " ",
                  /* @__PURE__ */ jsxDEV63("span", { dangerouslySetInnerHTML: { __html: coupon.description || "No details" } }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 473,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 471,
                  columnNumber: 19
                }, this),
                variantNames.length > 0 && /* @__PURE__ */ jsxDEV63("p", { children: [
                  /* @__PURE__ */ jsxDEV63("strong", { className: "", children: "Products:" }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 477,
                    columnNumber: 23
                  }, this),
                  " ",
                  variantNames.join(", ")
                ] }, void 0, !0, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 476,
                  columnNumber: 21
                }, this),
                coupon.conditions.length > 0 && /* @__PURE__ */ jsxDEV63("div", {}, void 0, !1, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 481,
                  columnNumber: 21
                }, this),
                coupon.endsAt && /* @__PURE__ */ jsxDEV63("p", { children: [
                  /* @__PURE__ */ jsxDEV63("strong", { className: "", children: "Expires:" }, void 0, !1, {
                    fileName: "app/routes/coupon.tsx",
                    lineNumber: 501,
                    columnNumber: 23
                  }, this),
                  " ",
                  new Date(coupon.endsAt).toLocaleDateString()
                ] }, void 0, !0, {
                  fileName: "app/routes/coupon.tsx",
                  lineNumber: 500,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/coupon.tsx",
                lineNumber: 470,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coupon.tsx",
              lineNumber: 445,
              columnNumber: 15
            }, this)
          ]
        },
        coupon.id,
        !0,
        {
          fileName: "app/routes/coupon.tsx",
          lineNumber: 434,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 398,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV63("p", { className: "text-center text-gray-600 py-4 ", children: "No exclusive offers available right now." }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 511,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV63("style", { children: `
          .coupon-ticket {
            position: relative;
            background-size: 200% 200%;
            animation: gradientShift 8s ease-in-out infinite;
          }
          .coupon-ticket::before,
          .coupon-ticket::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            opacity: 0;
            animation: particle 3s infinite ease-in-out;
          }
          .coupon-ticket::before {
            top: 15%;
            left: 10%;
            animation-delay: 0.5s;
          }
          .coupon-ticket::after {
            bottom: 20%;
            right: 15%;
            animation-delay: 1.5s;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes particle {
            0%, 100% { opacity: 0; transform: scale(0.5) translateY(10px); }
            50% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .coupon-code {
            font-family: '['Playfair_Display']', serif;
          }
        ` }, void 0, !1, {
      fileName: "app/routes/coupon.tsx",
      lineNumber: 513,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/coupon.tsx",
    lineNumber: 328,
    columnNumber: 5
  }, this);
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader18
});
import { useLoaderData as useLoaderData19, useSubmit as useSubmit6 } from "@remix-run/react";
import { useRef as useRef9, useState as useState15 } from "react";
import { ValidatedForm as ValidatedForm6 } from "remix-validated-form";
import { useTranslation as useTranslation44 } from "react-i18next";
import { jsxDEV as jsxDEV64 } from "react/jsx-dev-runtime";
var paginationLimitMinimumDefault3 = 25, allowedPaginationLimits3 = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault3,
  50,
  100
]), validator5 = withZod(paginationValidationSchema(allowedPaginationLimits3)), { filteredSearchLoader: loader18 } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits3,
  paginationLimitMinimumDefault3
);
function Search() {
  let loaderData = useLoaderData19(), { result, resultWithoutFacetValueFilters, term, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState15(!1);
  useRef9(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit6(), { t } = useTranslation44();
  return /* @__PURE__ */ jsxDEV64("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV64("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV64("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: term ? `${t("common.resultsFor")} "${term}"` : t("common.allResults") }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV64(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/search.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV64(
      ValidatedForm6,
      {
        validator: validator5,
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsxDEV64(
          FilterableProductGrid,
          {
            allowedPaginationLimits: allowedPaginationLimits3,
            mobileFiltersOpen,
            setMobileFiltersOpen,
            ...loaderData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/search.tsx",
            lineNumber: 60,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/search.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/search.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/verify.tsx
var verify_exports = {};
__export(verify_exports, {
  action: () => action16,
  default: () => VerifyTokenPage,
  loader: () => loader19
});
import { useEffect as useEffect15, useRef as useRef10 } from "react";
import { useLoaderData as useLoaderData20, useSearchParams as useSearchParams5 } from "@remix-run/react";
import { redirect as redirect14 } from "@remix-run/server-runtime";
import { CheckCircleIcon as CheckCircleIcon6, XCircleIcon as XCircleIcon8 } from "@heroicons/react/24/outline";
import { useTranslation as useTranslation45 } from "react-i18next";
import { jsxDEV as jsxDEV65 } from "react/jsx-dev-runtime";
async function loader19({
  request
}) {
  let token = new URL(request.url).searchParams.get("token");
  if (!token)
    return {
      success: !1,
      error: (await getFixedT(request))("common.tokenError")
    };
  let result = await verifyCustomerAccount({ request }, token);
  return result.__typename !== "CurrentUser" ? { success: !1, error: result.message } : { success: !0, headersJson: JSON.stringify(Object.fromEntries(result._headers)) };
}
async function action16({ request }) {
  let body = await request.formData(), headersJson = body.get("headers"), redirectTarget = body.get("redirect");
  if (!headersJson)
    return null;
  let headers = new Headers(), headerData = JSON.parse(headersJson);
  return Object.keys(headerData).forEach((key) => {
    headers.set(key, headerData[key]);
  }), redirect14(redirectTarget, { headers });
}
function VerifyTokenPage() {
  let [searchParams] = useSearchParams5(), result = useLoaderData20(), btnRef = useRef10(null), { t } = useTranslation45();
  return useEffect15(() => {
    if (!result.success || !btnRef.current)
      return;
    let submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]), /* @__PURE__ */ jsxDEV65("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV65("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV65("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ jsxDEV65("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ jsxDEV65("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxDEV65("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV65(
      CheckCircleIcon6,
      {
        className: "h-5 w-5 text-green-600",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/verify.tsx",
        lineNumber: 80,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV65("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV65("p", { className: "text-sm text-green-700", children: t("account.verifyMessage") }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 86,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV65("form", { method: "post", children: [
      /* @__PURE__ */ jsxDEV65(
        "input",
        {
          type: "hidden",
          name: "redirect",
          value: searchParams.get("redirectTo") || "/"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/verify.tsx",
          lineNumber: 91,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ jsxDEV65(
        "input",
        {
          type: "hidden",
          name: "headers",
          value: result.headersJson
        },
        void 0,
        !1,
        {
          fileName: "app/routes/verify.tsx",
          lineNumber: 96,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ jsxDEV65(
        "button",
        {
          ref: btnRef,
          type: "submit",
          style: { display: "none " }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/verify.tsx",
          lineNumber: 101,
          columnNumber: 19
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 90,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 78,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 77,
    columnNumber: 13
  }, this) : /* @__PURE__ */ jsxDEV65("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV65("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV65("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV65(
      XCircleIcon8,
      {
        className: "h-5 w-5 text-red-400",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/verify.tsx",
        lineNumber: 113,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV65("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV65("p", { className: "text-sm text-red-700", children: result.error }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 119,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 111,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 110,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader20
});
import { useLoaderData as useLoaderData21 } from "@remix-run/react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation46 } from "react-i18next";
import { Fragment as Fragment17, jsxDEV as jsxDEV66 } from "react/jsx-dev-runtime";
async function loader20({ request }) {
  return {
    collections: await getCollections(request, { take: 20 })
  };
}
function Index() {
  let { collections } = useLoaderData21(), { t } = useTranslation46(), headerImage = collections[0]?.featuredAsset?.preview;
  return /* @__PURE__ */ jsxDEV66(Fragment17, { children: [
    /* @__PURE__ */ jsxDEV66("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV66("div", { "aria-hidden": "true", className: "absolute inset-0 overflow-hidden", children: [
        headerImage && /* @__PURE__ */ jsxDEV66(
          "img",
          {
            className: "absolute inset-0 w-full",
            src: headerImage + "?w=800",
            alt: "header"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 26,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV66("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-400 to-black mix-blend-darken" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV66(
        "div",
        {
          "aria-hidden": "true",
          className: "absolute inset-0 bg-gray-900 opacity-50"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV66("div", { className: "relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0", children: [
        /* @__PURE__ */ jsxDEV66("div", { className: "relative bg-zinc-800 bg-opacity-0 rounded-lg p-0", children: /* @__PURE__ */ jsxDEV66("h1", { className: "text-6xl text-transparent bg-clip-text font-extrabold tracking-normal lg:text-6xl bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600", children: t("vendure.title") }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV66("p", { className: "mt-4 text-2xl text-white", children: [
          t("vendure.intro"),
          " ",
          /* @__PURE__ */ jsxDEV66(
            "a",
            {
              href: "https://www.vendure.io",
              className: "text-blue-300 hover:text-blue-500",
              children: "Vendure"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 47,
              columnNumber: 13
            },
            this
          ),
          " ",
          "&",
          " ",
          /* @__PURE__ */ jsxDEV66(
            "a",
            {
              href: "~/routes/__cart/index",
              className: "text-red-300 hover:text-red-500",
              children: "Remix"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV66("p", { className: "mt-4 text-gray-300 space-x-1", children: [
          /* @__PURE__ */ jsxDEV66(BookOpenIcon, { className: "w-5 h-5 inline" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV66("span", { children: t("common.readMore") }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV66(
            "a",
            {
              className: "text-primary-200 hover:text-primary-400",
              href: "https://www.vendure.io/blog/2022/05/lightning-fast-headless-commerce-with-vendure-and-remix",
              children: t("vendure.link")
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 64,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV66(
      "section",
      {
        "aria-labelledby": "category-heading",
        className: "pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8",
        children: [
          /* @__PURE__ */ jsxDEV66("div", { className: "px-4 sm:px-6 lg:px-8 xl:px-0", children: /* @__PURE__ */ jsxDEV66(
            "h2",
            {
              id: "category-heading",
              className: "text-2xl font-light tracking-tight text-gray-900",
              children: t("common.shopByCategory")
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 79,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV66("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ jsxDEV66("div", { className: "-my-2", children: /* @__PURE__ */ jsxDEV66("div", { className: "box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible", children: /* @__PURE__ */ jsxDEV66("div", { className: "grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8", children: collections.map((collection) => /* @__PURE__ */ jsxDEV66(CollectionCard, { collection }, collection.id, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV66("div", { className: "mt-6 px-4 sm:hidden", children: /* @__PURE__ */ jsxDEV66(
            "a",
            {
              href: "~/routes/__cart/index#",
              className: "block text-sm font-semibold text-primary-600 hover:text-primary-500",
              children: [
                t("common.browseCategories"),
                /* @__PURE__ */ jsxDEV66("span", { "aria-hidden": "true", children: " \u2192" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 105,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 100,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HWFSSZYX.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-7LRNVKNK.js", "/build/_shared/chunk-R6B7HXW6.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-IL77MFZH.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KFMW3N5X.js", imports: ["/build/_shared/chunk-G4FX3M25.js", "/build/_shared/chunk-FFLUTPB2.js", "/build/_shared/chunk-DYN6EWA5.js", "/build/_shared/chunk-VJPBPB7U.js", "/build/_shared/chunk-2QJY4JOV.js", "/build/_shared/chunk-QZYG7WHP.js", "/build/_shared/chunk-65HDGKFV.js", "/build/_shared/chunk-R5BHNF67.js", "/build/_shared/chunk-4KYYPW5T.js", "/build/_shared/chunk-76TTLXDT.js", "/build/_shared/chunk-L7FVEPUN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-CQGX52OB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account._index": { id: "routes/account._index", parentId: "root", path: "account/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/account._index-2QLVVQLL.js", imports: ["/build/_shared/chunk-5CXR2TVW.js", "/build/_shared/chunk-VWA7GDXL.js", "/build/_shared/chunk-WMBKO5J4.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-4DGX6SSC.js", "/build/_shared/chunk-M7P3TKQF.js", "/build/_shared/chunk-IF5DKD3W.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses": { id: "routes/account.addresses", parentId: "root", path: "account/addresses", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses-RR66KNND.js", imports: ["/build/_shared/chunk-UK3THWQT.js", "/build/_shared/chunk-4DGX6SSC.js", "/build/_shared/chunk-M7P3TKQF.js", "/build/_shared/chunk-IF5DKD3W.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.$addressId": { id: "routes/account.addresses.$addressId", parentId: "root", path: "account/addresses/:addressId", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.$addressId-VQNQG4N4.js", imports: ["/build/_shared/chunk-TSQXDFFW.js", "/build/_shared/chunk-S5VQQFJR.js", "/build/_shared/chunk-5XA5FETG.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-VWA7GDXL.js", "/build/_shared/chunk-WMBKO5J4.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-M7P3TKQF.js", "/build/_shared/chunk-IF5DKD3W.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.new": { id: "routes/account.addresses.new", parentId: "root", path: "account/addresses/new", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.new-KWSH7RWI.js", imports: ["/build/_shared/chunk-TSQXDFFW.js", "/build/_shared/chunk-S5VQQFJR.js", "/build/_shared/chunk-5XA5FETG.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-VWA7GDXL.js", "/build/_shared/chunk-WMBKO5J4.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-M7P3TKQF.js", "/build/_shared/chunk-IF5DKD3W.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.history": { id: "routes/account.history", parentId: "root", path: "account/history", index: void 0, caseSensitive: void 0, module: "/build/routes/account.history-KZPTFVTN.js", imports: ["/build/_shared/chunk-6LMZTMWA.js", "/build/_shared/chunk-S5VQQFJR.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.password": { id: "routes/account.password", parentId: "root", path: "account/password", index: void 0, caseSensitive: void 0, module: "/build/routes/account.password-6JZK2FGO.js", imports: ["/build/_shared/chunk-WMBKO5J4.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-4DGX6SSC.js", "/build/_shared/chunk-IF5DKD3W.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.active-order": { id: "routes/api.active-order", parentId: "root", path: "api/active-order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.active-order-VQJ67ND7.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.create-razorpay-order": { id: "routes/api.create-razorpay-order", parentId: "root", path: "api/create-razorpay-order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.create-razorpay-order-OKLRUALR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.logout": { id: "routes/api.logout", parentId: "root", path: "api/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.logout-O22KF3EY.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-3KLQLOCB.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-U7EXLWMY.js", "/build/_shared/chunk-5CXR2TVW.js", "/build/_shared/chunk-2ZR7LTHW.js", "/build/_shared/chunk-5XA5FETG.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-UK3THWQT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout._index": { id: "routes/checkout._index", parentId: "root", path: "checkout/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout._index-TGNZ2PNP.js", imports: ["/build/_shared/chunk-U7EXLWMY.js", "/build/_shared/chunk-5CXR2TVW.js", "/build/_shared/chunk-5XA5FETG.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-UK3THWQT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.confirmation.$orderCode": { id: "routes/checkout.confirmation.$orderCode", parentId: "root", path: "checkout/confirmation/:orderCode", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.confirmation.$orderCode-S4BAI4SP.js", imports: ["/build/_shared/chunk-2ZR7LTHW.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.payment": { id: "routes/checkout.payment", parentId: "root", path: "checkout/payment", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.payment-2KLA36TQ.js", imports: ["/build/_shared/chunk-5XA5FETG.js", "/build/_shared/chunk-4AREG525.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/collections.$slug": { id: "routes/collections.$slug", parentId: "root", path: "collections/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$slug-JWG6E52K.js", imports: ["/build/_shared/chunk-644AQX3J.js", "/build/_shared/chunk-UT3TQV5A.js", "/build/_shared/chunk-N7INIBU6.js", "/build/_shared/chunk-V4CT6AUT.js", "/build/_shared/chunk-6LMZTMWA.js", "/build/_shared/chunk-S5VQQFJR.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/coupon": { id: "routes/coupon", parentId: "root", path: "coupon", index: void 0, caseSensitive: void 0, module: "/build/routes/coupon-DREI2JI3.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QYTMMFZM.js", imports: ["/build/_shared/chunk-644AQX3J.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products.$slug": { id: "routes/products.$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$slug-JS7L4UOI.js", imports: ["/build/_shared/chunk-UT3TQV5A.js", "/build/_shared/chunk-V4CT6AUT.js", "/build/_shared/chunk-4AREG525.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-AMLAM5V7.js", imports: ["/build/_shared/chunk-N7INIBU6.js", "/build/_shared/chunk-V4CT6AUT.js", "/build/_shared/chunk-6LMZTMWA.js", "/build/_shared/chunk-S5VQQFJR.js", "/build/_shared/chunk-4AREG525.js", "/build/_shared/chunk-DDSMDN2F.js", "/build/_shared/chunk-GSW4U3VK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-N27ZGLBY.js", imports: ["/build/_shared/chunk-GSW4U3VK.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.index": { id: "routes/sign-up.index", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.index-DU7ZB4RP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.success": { id: "routes/sign-up.success", parentId: "root", path: "sign-up/success", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.success-T5IWIIEU.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify": { id: "routes/verify", parentId: "root", path: "verify", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-F4IVJ7BF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify-email-address-change": { id: "routes/verify-email-address-change", parentId: "root", path: "verify-email-address-change", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-email-address-change-3IJDNB6S.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "cddf03a7", hmr: { runtime: "/build/_shared/chunk-IL77MFZH.js", timestamp: 1745494571905 }, url: "/build/manifest-CDDF03A7.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/checkout.confirmation.$orderCode": {
    id: "routes/checkout.confirmation.$orderCode",
    parentId: "root",
    path: "checkout/confirmation/:orderCode",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_confirmation_orderCode_exports
  },
  "routes/account.addresses.$addressId": {
    id: "routes/account.addresses.$addressId",
    parentId: "root",
    path: "account/addresses/:addressId",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_addressId_exports
  },
  "routes/verify-email-address-change": {
    id: "routes/verify-email-address-change",
    parentId: "root",
    path: "verify-email-address-change",
    index: void 0,
    caseSensitive: void 0,
    module: verify_email_address_change_exports
  },
  "routes/api.create-razorpay-order": {
    id: "routes/api.create-razorpay-order",
    parentId: "root",
    path: "api/create-razorpay-order",
    index: void 0,
    caseSensitive: void 0,
    module: api_create_razorpay_order_exports
  },
  "routes/account.addresses.new": {
    id: "routes/account.addresses.new",
    parentId: "root",
    path: "account/addresses/new",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_new_exports
  },
  "routes/account.addresses": {
    id: "routes/account.addresses",
    parentId: "root",
    path: "account/addresses",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_exports
  },
  "routes/collections.$slug": {
    id: "routes/collections.$slug",
    parentId: "root",
    path: "collections/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: collections_slug_exports
  },
  "routes/account.password": {
    id: "routes/account.password",
    parentId: "root",
    path: "account/password",
    index: void 0,
    caseSensitive: void 0,
    module: account_password_exports
  },
  "routes/api.active-order": {
    id: "routes/api.active-order",
    parentId: "root",
    path: "api/active-order",
    index: void 0,
    caseSensitive: void 0,
    module: api_active_order_exports
  },
  "routes/checkout.payment": {
    id: "routes/checkout.payment",
    parentId: "root",
    path: "checkout/payment",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_payment_exports
  },
  "routes/account.history": {
    id: "routes/account.history",
    parentId: "root",
    path: "account/history",
    index: void 0,
    caseSensitive: void 0,
    module: account_history_exports
  },
  "routes/checkout._index": {
    id: "routes/checkout._index",
    parentId: "root",
    path: "checkout/_index",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_index_exports
  },
  "routes/sign-up.success": {
    id: "routes/sign-up.success",
    parentId: "root",
    path: "sign-up/success",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_success_exports
  },
  "routes/account._index": {
    id: "routes/account._index",
    parentId: "root",
    path: "account/_index",
    index: void 0,
    caseSensitive: void 0,
    module: account_index_exports
  },
  "routes/products.$slug": {
    id: "routes/products.$slug",
    parentId: "root",
    path: "products/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: products_slug_exports
  },
  "routes/sign-up.index": {
    id: "routes/sign-up.index",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_index_exports
  },
  "routes/api.logout": {
    id: "routes/api.logout",
    parentId: "root",
    path: "api/logout",
    index: void 0,
    caseSensitive: void 0,
    module: api_logout_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/coupon": {
    id: "routes/coupon",
    parentId: "root",
    path: "coupon",
    index: void 0,
    caseSensitive: void 0,
    module: coupon_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/verify": {
    id: "routes/verify",
    parentId: "root",
    path: "verify",
    index: void 0,
    caseSensitive: void 0,
    module: verify_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
