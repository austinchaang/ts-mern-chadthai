"use client";
import {
  createComponent,
  createSignal,
  lazy,
  mergeProps,
  render,
  setupStyleSheet
} from "./chunk-2BF3WH45.js";
import {
  onlineManager,
  useQueryClient
} from "./chunk-42HNEJ3T.js";
import {
  require_react
} from "./chunk-VJU3K2M7.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __toESM
} from "./chunk-QY3AG7D4.js";

// node_modules/@tanstack/react-query-devtools/build/modern/devtools.js
var import_react = __toESM(require_react(), 1);

// node_modules/@tanstack/query-devtools/build/dev.js
var _client, _onlineManager, _queryFlavor, _version, _isMounted, _styleNonce, _buttonPosition, _position, _initialIsOpen, _errorTypes, _Component, _dispose, _a;
var TanstackQueryDevtools = (_a = class {
  constructor(config) {
    __privateAdd(this, _client, void 0);
    __privateAdd(this, _onlineManager, void 0);
    __privateAdd(this, _queryFlavor, void 0);
    __privateAdd(this, _version, void 0);
    __privateAdd(this, _isMounted, false);
    __privateAdd(this, _styleNonce, void 0);
    __privateAdd(this, _buttonPosition, void 0);
    __privateAdd(this, _position, void 0);
    __privateAdd(this, _initialIsOpen, void 0);
    __privateAdd(this, _errorTypes, void 0);
    __privateAdd(this, _Component, void 0);
    __privateAdd(this, _dispose, void 0);
    const {
      client,
      queryFlavor,
      version,
      onlineManager: onlineManager2,
      buttonPosition,
      position,
      initialIsOpen,
      errorTypes,
      styleNonce
    } = config;
    __privateSet(this, _client, createSignal(client));
    __privateSet(this, _queryFlavor, queryFlavor);
    __privateSet(this, _version, version);
    __privateSet(this, _onlineManager, onlineManager2);
    __privateSet(this, _styleNonce, styleNonce);
    __privateSet(this, _buttonPosition, createSignal(buttonPosition));
    __privateSet(this, _position, createSignal(position));
    __privateSet(this, _initialIsOpen, createSignal(initialIsOpen));
    __privateSet(this, _errorTypes, createSignal(errorTypes));
  }
  setButtonPosition(position) {
    __privateGet(this, _buttonPosition)[1](position);
  }
  setPosition(position) {
    __privateGet(this, _position)[1](position);
  }
  setInitialIsOpen(isOpen) {
    __privateGet(this, _initialIsOpen)[1](isOpen);
  }
  setErrorTypes(errorTypes) {
    __privateGet(this, _errorTypes)[1](errorTypes);
  }
  setClient(client) {
    __privateGet(this, _client)[1](client);
  }
  mount(el) {
    if (__privateGet(this, _isMounted)) {
      throw new Error("Devtools is already mounted");
    }
    const dispose = render(() => {
      const [btnPosition] = __privateGet(this, _buttonPosition);
      const [pos] = __privateGet(this, _position);
      const [isOpen] = __privateGet(this, _initialIsOpen);
      const [errors] = __privateGet(this, _errorTypes);
      const [queryClient] = __privateGet(this, _client);
      let Devtools;
      if (__privateGet(this, _Component)) {
        Devtools = __privateGet(this, _Component);
      } else {
        Devtools = lazy(() => import("./VZTWBJH5-NK7YRCIJ.js"));
        __privateSet(this, _Component, Devtools);
      }
      setupStyleSheet(__privateGet(this, _styleNonce));
      const _self$ = this;
      return createComponent(Devtools, mergeProps({
        get queryFlavor() {
          return __privateGet(_self$, _queryFlavor);
        },
        get version() {
          return __privateGet(_self$, _version);
        },
        get onlineManager() {
          return __privateGet(_self$, _onlineManager);
        }
      }, {
        get client() {
          return queryClient();
        },
        get buttonPosition() {
          return btnPosition();
        },
        get position() {
          return pos();
        },
        get initialIsOpen() {
          return isOpen();
        },
        get errorTypes() {
          return errors();
        }
      }));
    }, el);
    __privateSet(this, _isMounted, true);
    __privateSet(this, _dispose, dispose);
  }
  unmount() {
    var _a2;
    if (!__privateGet(this, _isMounted)) {
      throw new Error("Devtools is not mounted");
    }
    (_a2 = __privateGet(this, _dispose)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _isMounted, false);
  }
}, _client = new WeakMap(), _onlineManager = new WeakMap(), _queryFlavor = new WeakMap(), _version = new WeakMap(), _isMounted = new WeakMap(), _styleNonce = new WeakMap(), _buttonPosition = new WeakMap(), _position = new WeakMap(), _initialIsOpen = new WeakMap(), _errorTypes = new WeakMap(), _Component = new WeakMap(), _dispose = new WeakMap(), _a);

// node_modules/@tanstack/react-query-devtools/build/modern/devtools.js
var import_react2 = __toESM(require_react(), 1);
function ReactQueryDevtools(props) {
  const queryClient = useQueryClient();
  const client = props.client || queryClient;
  const ref = (0, import_react.useRef)(null);
  const { buttonPosition, position, initialIsOpen, errorTypes, styleNonce } = props;
  const [devtools] = (0, import_react.useState)(
    new TanstackQueryDevtools({
      client,
      queryFlavor: "React Query",
      version: "5",
      onlineManager,
      buttonPosition,
      position,
      initialIsOpen,
      errorTypes,
      styleNonce
    })
  );
  (0, import_react.useEffect)(() => {
    devtools.setClient(client);
  }, [client, devtools]);
  (0, import_react.useEffect)(() => {
    if (buttonPosition) {
      devtools.setButtonPosition(buttonPosition);
    }
  }, [buttonPosition, devtools]);
  (0, import_react.useEffect)(() => {
    if (position) {
      devtools.setPosition(position);
    }
  }, [position, devtools]);
  (0, import_react.useEffect)(() => {
    devtools.setInitialIsOpen(initialIsOpen || false);
  }, [initialIsOpen, devtools]);
  (0, import_react.useEffect)(() => {
    devtools.setErrorTypes(errorTypes || []);
  }, [errorTypes, devtools]);
  (0, import_react.useEffect)(() => {
    if (ref.current) {
      devtools.mount(ref.current);
    }
    return () => {
      devtools.unmount();
    };
  }, [devtools]);
  return import_react2.default.createElement("div", { className: "tsqd-parent-container", ref });
}

// node_modules/@tanstack/react-query-devtools/build/modern/index.js
var ReactQueryDevtools2 = false ? function() {
  return null;
} : ReactQueryDevtools;
export {
  ReactQueryDevtools2 as ReactQueryDevtools
};
//# sourceMappingURL=@tanstack_react-query-devtools.js.map
