import * as xe from "react";
import So, { useState as ni, useEffect as Rf, useRef as cy, useMemo as Jm, useLayoutEffect as s1, useCallback as Tf } from "react";
import * as ht from "three";
import { REVISION as o1, TrianglesDrawMode as c1, TriangleFanDrawMode as ry, TriangleStripDrawMode as q0, Mesh as Uh, IcosahedronGeometry as r1, ShaderMaterial as Cy, DoubleSide as I0, Vector3 as Ra, MOUSE as Ef, TOUCH as gf, Spherical as e0, Quaternion as Th, OrthographicCamera as Hm, Vector2 as Xl, PerspectiveCamera as Sh, Ray as f1, Plane as d1, Loader as Ty, LoaderUtils as Om, FileLoader as go, MeshPhysicalMaterial as Li, Color as Cc, SpotLight as m1, PointLight as p1, DirectionalLight as h1, Matrix4 as bh, InstancedMesh as v1, InstancedBufferAttribute as y1, Object3D as w0, TextureLoader as A1, ImageBitmapLoader as E1, BufferAttribute as Nm, InterleavedBuffer as g1, InterleavedBufferAttribute as S1, LinearMipmapLinearFilter as P0, NearestMipmapLinearFilter as B1, LinearMipmapNearestFilter as C1, NearestMipmapNearestFilter as T1, LinearFilter as Tu, NearestFilter as b1, RepeatWrapping as fy, MirroredRepeatWrapping as M1, ClampToEdgeWrapping as gs, PointsMaterial as R1, Material as jv, LineBasicMaterial as D1, MeshStandardMaterial as W0, MeshBasicMaterial as bf, PropertyBinding as _1, BufferGeometry as k0, SkinnedMesh as H1, LineSegments as O1, Line as N1, LineLoop as U1, Points as G1, Group as Lv, MathUtils as x1, Skeleton as z1, AnimationClip as j1, Bone as L1, InterpolateDiscrete as J1, InterpolateLinear as $0, Texture as Ao, VectorKeyframeTrack as t0, NumberKeyframeTrack as a0, QuaternionKeyframeTrack as n0, FrontSide as K1, Interpolant as Q1, Box3 as Y1, Sphere as X1, DataTextureLoader as eE, HalfFloatType as bu, FloatType as Ss, DataUtils as Mf, RGBAFormat as xm, RedFormat as V1, Scene as tE, PlaneGeometry as aE, WebGLRenderTarget as nE, UVMapping as Mh, WebGLRenderer as F1, DataTexture as Z1, LinearSRGBColorSpace as dy, IntType as q1, ShortType as I1, ByteType as w1, UnsignedIntType as P1, UnsignedByteType as my, LoadingManager as W1, LinearMipMapLinearFilter as l0, SRGBColorSpace as k1, NoBlending as $1, CubeReflectionMapping as eg, EquirectangularReflectionMapping as tg, CubeTextureLoader as ag, WebGLCubeRenderTarget as ng } from "three";
function lE(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var sh = { exports: {} }, bm = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0;
function lg() {
  if (u0) return bm;
  u0 = 1;
  var d = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function r(f, p, v) {
    var A = null;
    if (v !== void 0 && (A = "" + v), p.key !== void 0 && (A = "" + p.key), "key" in p) {
      v = {};
      for (var S in p)
        S !== "key" && (v[S] = p[S]);
    } else v = p;
    return p = v.ref, {
      $$typeof: d,
      type: f,
      key: A,
      ref: p !== void 0 ? p : null,
      props: v
    };
  }
  return bm.Fragment = u, bm.jsx = r, bm.jsxs = r, bm;
}
var Mm = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i0;
function ug() {
  return i0 || (i0 = 1, process.env.NODE_ENV !== "production" && function() {
    function d(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === me ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case J:
          return "Fragment";
        case G:
          return "Profiler";
        case Z:
          return "StrictMode";
        case oe:
          return "Suspense";
        case W:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case N:
            return "Portal";
          case $:
            return (x.displayName || "Context") + ".Provider";
          case U:
            return (x._context.displayName || "Context") + ".Consumer";
          case F:
            var de = x.render;
            return x = x.displayName, x || (x = de.displayName || de.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case Te:
            return de = x.displayName || null, de !== null ? de : d(x.type) || "Memo";
          case ne:
            de = x._payload, x = x._init;
            try {
              return d(x(de));
            } catch {
            }
        }
      return null;
    }
    function u(x) {
      return "" + x;
    }
    function r(x) {
      try {
        u(x);
        var de = !1;
      } catch {
        de = !0;
      }
      if (de) {
        de = console;
        var pe = de.error, Qe = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return pe.call(
          de,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Qe
        ), u(x);
      }
    }
    function f(x) {
      if (x === J) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === ne)
        return "<...>";
      try {
        var de = d(x);
        return de ? "<" + de + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var x = De.A;
      return x === null ? null : x.getOwner();
    }
    function v() {
      return Error("react-stack-top-frame");
    }
    function A(x) {
      if (Xe.call(x, "key")) {
        var de = Object.getOwnPropertyDescriptor(x, "key").get;
        if (de && de.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function S(x, de) {
      function pe() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          de
        ));
      }
      pe.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: pe,
        configurable: !0
      });
    }
    function E() {
      var x = d(this.type);
      return D[x] || (D[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function C(x, de, pe, Qe, Ge, we, at, ea) {
      return pe = we.ref, x = {
        $$typeof: O,
        type: x,
        key: de,
        props: we,
        _owner: Ge
      }, (pe !== void 0 ? pe : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: at
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ea
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function b(x, de, pe, Qe, Ge, we, at, ea) {
      var At = de.children;
      if (At !== void 0)
        if (Qe)
          if (te(At)) {
            for (Qe = 0; Qe < At.length; Qe++)
              T(At[Qe]);
            Object.freeze && Object.freeze(At);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(At);
      if (Xe.call(de, "key")) {
        At = d(x);
        var Rn = Object.keys(de).filter(function(Dn) {
          return Dn !== "key";
        });
        Qe = 0 < Rn.length ? "{key: someKey, " + Rn.join(": ..., ") + ": ...}" : "{key: someKey}", fe[At + Qe] || (Rn = 0 < Rn.length ? "{" + Rn.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Qe,
          At,
          Rn,
          At
        ), fe[At + Qe] = !0);
      }
      if (At = null, pe !== void 0 && (r(pe), At = "" + pe), A(de) && (r(de.key), At = "" + de.key), "key" in de) {
        pe = {};
        for (var bl in de)
          bl !== "key" && (pe[bl] = de[bl]);
      } else pe = de;
      return At && S(
        pe,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), C(
        x,
        At,
        we,
        Ge,
        p(),
        pe,
        at,
        ea
      );
    }
    function T(x) {
      typeof x == "object" && x !== null && x.$$typeof === O && x._store && (x._store.validated = 1);
    }
    var M = So, O = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), me = Symbol.for("react.client.reference"), De = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xe = Object.prototype.hasOwnProperty, te = Array.isArray, Ae = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var Ve, D = {}, Y = M.react_stack_bottom_frame.bind(
      M,
      v
    )(), X = Ae(f(v)), fe = {};
    Mm.Fragment = J, Mm.jsx = function(x, de, pe, Qe, Ge) {
      var we = 1e4 > De.recentlyCreatedOwnerStacks++;
      return b(
        x,
        de,
        pe,
        !1,
        Qe,
        Ge,
        we ? Error("react-stack-top-frame") : Y,
        we ? Ae(f(x)) : X
      );
    }, Mm.jsxs = function(x, de, pe, Qe, Ge) {
      var we = 1e4 > De.recentlyCreatedOwnerStacks++;
      return b(
        x,
        de,
        pe,
        !0,
        Qe,
        Ge,
        we ? Error("react-stack-top-frame") : Y,
        we ? Ae(f(x)) : X
      );
    };
  }()), Mm;
}
var s0;
function ig() {
  return s0 || (s0 = 1, process.env.NODE_ENV === "production" ? sh.exports = lg() : sh.exports = ug()), sh.exports;
}
var k = ig();
const sg = ({
  selectedProduct: d,
  onProductSelect: u,
  showWishlist: r = !0
}) => {
  const [f, p] = ni("shelf"), [v, A] = ni("All"), [S, E] = ni([]), C = ["All", "T-shirt", "Shirt", "Trouser", "Jeans", "Blazer"];
  console.log(d);
  const b = [
    {
      id: "1",
      brand: "Aristino",
      name: "Regular Fit Men's T-Shirt",
      price: "390.000 VND",
      image: "/images/Product-Images-1.png",
      addedToLook: !0,
      category: "T-shirt"
    },
    {
      id: "2",
      brand: "Aristino",
      name: "Regular Fit Men's T-Shirt",
      price: "390.000 VND",
      image: "/images/Product-Images-2.png",
      addedToLook: !1,
      category: "T-shirt"
    },
    {
      id: "3",
      brand: "Aristino",
      name: "White Men's Leather Sneakers",
      price: "6.850.000 VND",
      image: "/images/Product-Images-3.png",
      addedToLook: !1,
      category: "Shoes"
    }
  ], T = [];
  Rf(() => {
    const N = f === "shelf" ? b : T, J = v === "All" ? N : N.filter((Z) => Z.category === v);
    E(J);
  }, [f, v]);
  const M = (N) => {
    u && u(N);
  }, O = (N) => {
    console.log("Toggle wishlist for item:", N);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: "h-full overflow-y-auto flex flex-col", children: [
    /* @__PURE__ */ k.jsx("div", { className: "p-4 pb-2", children: /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: "flex gap-3 overflow-x-auto",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: [
          /* @__PURE__ */ k.jsx("style", { children: `
            div::-webkit-scrollbar {
              display: none;
            }
          ` }),
          C.map((N) => /* @__PURE__ */ k.jsx(
            "button",
            {
              onClick: () => A(N),
              className: `px-3 py-2 rounded-md text-sm whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${v === N ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
              children: N
            },
            N
          ))
        ]
      }
    ) }),
    /* @__PURE__ */ k.jsxs("div", { className: "flex border-b border-gray-200", children: [
      /* @__PURE__ */ k.jsxs(
        "button",
        {
          onClick: () => p("shelf"),
          className: `flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${f === "shelf" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-700"}`,
          children: [
            "Your Shelf (",
            b.length,
            ")"
          ]
        }
      ),
      r && /* @__PURE__ */ k.jsxs(
        "button",
        {
          onClick: () => p("wishlist"),
          className: `flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${f === "wishlist" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-700"}`,
          children: [
            "Wishlist (",
            T.length,
            ")"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: S.length === 0 ? /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-center h-32 text-gray-500", children: /* @__PURE__ */ k.jsx("p", { children: "No items found" }) }) : /* @__PURE__ */ k.jsx("div", { className: "space-y-4", children: S.map((N) => /* @__PURE__ */ k.jsxs("div", { className: "flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200", children: [
      /* @__PURE__ */ k.jsx(
        "img",
        {
          src: N.image,
          alt: N.name,
          className: "w-16 h-16 object-cover rounded",
          onError: (J) => {
            const Z = J.target;
            Z.src = "/images/placeholder.png";
          }
        }
      ),
      /* @__PURE__ */ k.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ k.jsx("p", { className: "text-xs text-gray-500 mb-1", children: N.brand }),
        /* @__PURE__ */ k.jsx("h4", { className: "text-sm font-medium text-gray-900 mb-1 line-clamp-2", children: N.name }),
        /* @__PURE__ */ k.jsx("p", { className: "text-sm font-semibold text-gray-900 mb-2", children: N.price }),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            className: "w-full bg-black text-white text-xs py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50",
            onClick: () => M(N),
            disabled: N.addedToLook,
            children: N.addedToLook ? "Added to look" : "Try now"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: "text-gray-400 hover:text-red-500 transition-colors duration-200",
          onClick: () => O(N.id),
          "aria-label": "Add to wishlist",
          children: "♡"
        }
      )
    ] }, N.id)) }) })
  ] });
};
var oh = { exports: {} }, ys = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0;
function og() {
  return o0 || (o0 = 1, ys.ConcurrentRoot = 1, ys.ContinuousEventPriority = 8, ys.DefaultEventPriority = 32, ys.DiscreteEventPriority = 2, ys.IdleEventPriority = 268435456, ys.LegacyRoot = 0, ys.NoEventPriority = 0), ys;
}
var As = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c0;
function cg() {
  return c0 || (c0 = 1, process.env.NODE_ENV !== "production" && (As.ConcurrentRoot = 1, As.ContinuousEventPriority = 8, As.DefaultEventPriority = 32, As.DiscreteEventPriority = 2, As.IdleEventPriority = 268435456, As.LegacyRoot = 0, As.NoEventPriority = 0)), As;
}
var r0;
function rg() {
  return r0 || (r0 = 1, process.env.NODE_ENV === "production" ? oh.exports = og() : oh.exports = cg()), oh.exports;
}
var Bh = rg(), ch = { exports: {} }, Jv = {}, rh = { exports: {} }, Kv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function fg() {
  if (f0) return Kv;
  f0 = 1;
  var d = So;
  function u(T, M) {
    return T === M && (T !== 0 || 1 / T === 1 / M) || T !== T && M !== M;
  }
  var r = typeof Object.is == "function" ? Object.is : u, f = d.useState, p = d.useEffect, v = d.useLayoutEffect, A = d.useDebugValue;
  function S(T, M) {
    var O = M(), N = f({ inst: { value: O, getSnapshot: M } }), J = N[0].inst, Z = N[1];
    return v(
      function() {
        J.value = O, J.getSnapshot = M, E(J) && Z({ inst: J });
      },
      [T, O, M]
    ), p(
      function() {
        return E(J) && Z({ inst: J }), T(function() {
          E(J) && Z({ inst: J });
        });
      },
      [T]
    ), A(O), O;
  }
  function E(T) {
    var M = T.getSnapshot;
    T = T.value;
    try {
      var O = M();
      return !r(T, O);
    } catch {
      return !0;
    }
  }
  function C(T, M) {
    return M();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C : S;
  return Kv.useSyncExternalStore = d.useSyncExternalStore !== void 0 ? d.useSyncExternalStore : b, Kv;
}
var Qv = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0;
function dg() {
  return d0 || (d0 = 1, process.env.NODE_ENV !== "production" && function() {
    function d(O, N) {
      return O === N && (O !== 0 || 1 / O === 1 / N) || O !== O && N !== N;
    }
    function u(O, N) {
      b || p.startTransition === void 0 || (b = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var J = N();
      if (!T) {
        var Z = N();
        v(J, Z) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), T = !0);
      }
      Z = A({
        inst: { value: J, getSnapshot: N }
      });
      var G = Z[0].inst, U = Z[1];
      return E(
        function() {
          G.value = J, G.getSnapshot = N, r(G) && U({ inst: G });
        },
        [O, J, N]
      ), S(
        function() {
          return r(G) && U({ inst: G }), O(function() {
            r(G) && U({ inst: G });
          });
        },
        [O]
      ), C(J), J;
    }
    function r(O) {
      var N = O.getSnapshot;
      O = O.value;
      try {
        var J = N();
        return !v(O, J);
      } catch {
        return !0;
      }
    }
    function f(O, N) {
      return N();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = So, v = typeof Object.is == "function" ? Object.is : d, A = p.useState, S = p.useEffect, E = p.useLayoutEffect, C = p.useDebugValue, b = !1, T = !1, M = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : u;
    Qv.useSyncExternalStore = p.useSyncExternalStore !== void 0 ? p.useSyncExternalStore : M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Qv;
}
var m0;
function uE() {
  return m0 || (m0 = 1, process.env.NODE_ENV === "production" ? rh.exports = fg() : rh.exports = dg()), rh.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p0;
function mg() {
  if (p0) return Jv;
  p0 = 1;
  var d = So, u = uE();
  function r(C, b) {
    return C === b && (C !== 0 || 1 / C === 1 / b) || C !== C && b !== b;
  }
  var f = typeof Object.is == "function" ? Object.is : r, p = u.useSyncExternalStore, v = d.useRef, A = d.useEffect, S = d.useMemo, E = d.useDebugValue;
  return Jv.useSyncExternalStoreWithSelector = function(C, b, T, M, O) {
    var N = v(null);
    if (N.current === null) {
      var J = { hasValue: !1, value: null };
      N.current = J;
    } else J = N.current;
    N = S(
      function() {
        function G(W) {
          if (!U) {
            if (U = !0, $ = W, W = M(W), O !== void 0 && J.hasValue) {
              var Te = J.value;
              if (O(Te, W))
                return F = Te;
            }
            return F = W;
          }
          if (Te = F, f($, W)) return Te;
          var ne = M(W);
          return O !== void 0 && O(Te, ne) ? ($ = W, Te) : ($ = W, F = ne);
        }
        var U = !1, $, F, oe = T === void 0 ? null : T;
        return [
          function() {
            return G(b());
          },
          oe === null ? void 0 : function() {
            return G(oe());
          }
        ];
      },
      [b, T, M, O]
    );
    var Z = p(C, N[0], N[1]);
    return A(
      function() {
        J.hasValue = !0, J.value = Z;
      },
      [Z]
    ), E(Z), Z;
  }, Jv;
}
var Yv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function pg() {
  return h0 || (h0 = 1, process.env.NODE_ENV !== "production" && function() {
    function d(C, b) {
      return C === b && (C !== 0 || 1 / C === 1 / b) || C !== C && b !== b;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var u = So, r = uE(), f = typeof Object.is == "function" ? Object.is : d, p = r.useSyncExternalStore, v = u.useRef, A = u.useEffect, S = u.useMemo, E = u.useDebugValue;
    Yv.useSyncExternalStoreWithSelector = function(C, b, T, M, O) {
      var N = v(null);
      if (N.current === null) {
        var J = { hasValue: !1, value: null };
        N.current = J;
      } else J = N.current;
      N = S(
        function() {
          function G(W) {
            if (!U) {
              if (U = !0, $ = W, W = M(W), O !== void 0 && J.hasValue) {
                var Te = J.value;
                if (O(Te, W))
                  return F = Te;
              }
              return F = W;
            }
            if (Te = F, f($, W))
              return Te;
            var ne = M(W);
            return O !== void 0 && O(Te, ne) ? ($ = W, Te) : ($ = W, F = ne);
          }
          var U = !1, $, F, oe = T === void 0 ? null : T;
          return [
            function() {
              return G(b());
            },
            oe === null ? void 0 : function() {
              return G(oe());
            }
          ];
        },
        [b, T, M, O]
      );
      var Z = p(C, N[0], N[1]);
      return A(
        function() {
          J.hasValue = !0, J.value = Z;
        },
        [Z]
      ), E(Z), Z;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Yv;
}
var v0;
function hg() {
  return v0 || (v0 = 1, process.env.NODE_ENV === "production" ? ch.exports = mg() : ch.exports = pg()), ch.exports;
}
var vg = hg();
const yg = /* @__PURE__ */ lE(vg), y0 = (d) => {
  let u;
  const r = /* @__PURE__ */ new Set(), f = (C, b) => {
    const T = typeof C == "function" ? C(u) : C;
    if (!Object.is(T, u)) {
      const M = u;
      u = b ?? (typeof T != "object" || T === null) ? T : Object.assign({}, u, T), r.forEach((O) => O(u, M));
    }
  }, p = () => u, S = { setState: f, getState: p, getInitialState: () => E, subscribe: (C) => (r.add(C), () => r.delete(C)) }, E = u = d(f, p, S);
  return S;
}, Ag = (d) => d ? y0(d) : y0, { useSyncExternalStoreWithSelector: Eg } = yg, gg = (d) => d;
function Sg(d, u = gg, r) {
  const f = Eg(
    d.subscribe,
    d.getState,
    d.getInitialState,
    u,
    r
  );
  return So.useDebugValue(f), f;
}
const A0 = (d, u) => {
  const r = Ag(d), f = (p, v = u) => Sg(r, p, v);
  return Object.assign(f, r), f;
}, iE = (d, u) => d ? A0(d, u) : A0, Bg = (d) => typeof d == "object" && typeof d.then == "function", Sc = [];
function sE(d, u, r = (f, p) => f === p) {
  if (d === u) return !0;
  if (!d || !u) return !1;
  const f = d.length;
  if (u.length !== f) return !1;
  for (let p = 0; p < f; p++) if (!r(d[p], u[p])) return !1;
  return !0;
}
function oE(d, u = null, r = !1, f = {}) {
  u === null && (u = [d]);
  for (const v of Sc)
    if (sE(u, v.keys, v.equal)) {
      if (r) return;
      if (Object.prototype.hasOwnProperty.call(v, "error")) throw v.error;
      if (Object.prototype.hasOwnProperty.call(v, "response"))
        return f.lifespan && f.lifespan > 0 && (v.timeout && clearTimeout(v.timeout), v.timeout = setTimeout(v.remove, f.lifespan)), v.response;
      if (!r) throw v.promise;
    }
  const p = {
    keys: u,
    equal: f.equal,
    remove: () => {
      const v = Sc.indexOf(p);
      v !== -1 && Sc.splice(v, 1);
    },
    promise: (
      // Execute the promise
      (Bg(d) ? d : d(...u)).then((v) => {
        p.response = v, f.lifespan && f.lifespan > 0 && (p.timeout = setTimeout(p.remove, f.lifespan));
      }).catch((v) => p.error = v)
    )
  };
  if (Sc.push(p), !r) throw p.promise;
}
const Cg = (d, u, r) => oE(d, u, !1, r), Tg = (d, u, r) => void oE(d, u, !0, r), bg = (d) => {
  if (d === void 0 || d.length === 0) Sc.splice(0, Sc.length);
  else {
    const u = Sc.find((r) => sE(d, r.keys, r.equal));
    u && u.remove();
  }
};
var fh = { exports: {} }, Xv = { exports: {} }, dh = { exports: {} }, Vv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E0;
function Mg() {
  return E0 || (E0 = 1, function(d) {
    function u(D, Y) {
      var X = D.length;
      D.push(Y);
      e: for (; 0 < X; ) {
        var fe = X - 1 >>> 1, x = D[fe];
        if (0 < p(x, Y))
          D[fe] = Y, D[X] = x, X = fe;
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function f(D) {
      if (D.length === 0) return null;
      var Y = D[0], X = D.pop();
      if (X !== Y) {
        D[0] = X;
        e: for (var fe = 0, x = D.length, de = x >>> 1; fe < de; ) {
          var pe = 2 * (fe + 1) - 1, Qe = D[pe], Ge = pe + 1, we = D[Ge];
          if (0 > p(Qe, X))
            Ge < x && 0 > p(we, Qe) ? (D[fe] = we, D[Ge] = X, fe = Ge) : (D[fe] = Qe, D[pe] = X, fe = pe);
          else if (Ge < x && 0 > p(we, X))
            D[fe] = we, D[Ge] = X, fe = Ge;
          else break e;
        }
      }
      return Y;
    }
    function p(D, Y) {
      var X = D.sortIndex - Y.sortIndex;
      return X !== 0 ? X : D.id - Y.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      d.unstable_now = function() {
        return v.now();
      };
    } else {
      var A = Date, S = A.now();
      d.unstable_now = function() {
        return A.now() - S;
      };
    }
    var E = [], C = [], b = 1, T = null, M = 3, O = !1, N = !1, J = !1, Z = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function $(D) {
      for (var Y = r(C); Y !== null; ) {
        if (Y.callback === null) f(C);
        else if (Y.startTime <= D)
          f(C), Y.sortIndex = Y.expirationTime, u(E, Y);
        else break;
        Y = r(C);
      }
    }
    function F(D) {
      if (J = !1, $(D), !N)
        if (r(E) !== null)
          N = !0, Ae();
        else {
          var Y = r(C);
          Y !== null && Ve(F, Y.startTime - D);
        }
    }
    var oe = !1, W = -1, Te = 5, ne = -1;
    function ie() {
      return !(d.unstable_now() - ne < Te);
    }
    function me() {
      if (oe) {
        var D = d.unstable_now();
        ne = D;
        var Y = !0;
        try {
          e: {
            N = !1, J && (J = !1, G(W), W = -1), O = !0;
            var X = M;
            try {
              t: {
                for ($(D), T = r(E); T !== null && !(T.expirationTime > D && ie()); ) {
                  var fe = T.callback;
                  if (typeof fe == "function") {
                    T.callback = null, M = T.priorityLevel;
                    var x = fe(
                      T.expirationTime <= D
                    );
                    if (D = d.unstable_now(), typeof x == "function") {
                      T.callback = x, $(D), Y = !0;
                      break t;
                    }
                    T === r(E) && f(E), $(D);
                  } else f(E);
                  T = r(E);
                }
                if (T !== null) Y = !0;
                else {
                  var de = r(C);
                  de !== null && Ve(
                    F,
                    de.startTime - D
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              T = null, M = X, O = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? De() : oe = !1;
        }
      }
    }
    var De;
    if (typeof U == "function")
      De = function() {
        U(me);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), te = Xe.port2;
      Xe.port1.onmessage = me, De = function() {
        te.postMessage(null);
      };
    } else
      De = function() {
        Z(me, 0);
      };
    function Ae() {
      oe || (oe = !0, De());
    }
    function Ve(D, Y) {
      W = Z(function() {
        D(d.unstable_now());
      }, Y);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, d.unstable_continueExecution = function() {
      N || O || (N = !0, Ae());
    }, d.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Te = 0 < D ? Math.floor(1e3 / D) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, d.unstable_getFirstCallbackNode = function() {
      return r(E);
    }, d.unstable_next = function(D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = M;
      }
      var X = M;
      M = Y;
      try {
        return D();
      } finally {
        M = X;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(D, Y) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var X = M;
      M = D;
      try {
        return Y();
      } finally {
        M = X;
      }
    }, d.unstable_scheduleCallback = function(D, Y, X) {
      var fe = d.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? fe + X : fe) : X = fe, D) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = X + x, D = {
        id: b++,
        callback: Y,
        priorityLevel: D,
        startTime: X,
        expirationTime: x,
        sortIndex: -1
      }, X > fe ? (D.sortIndex = X, u(C, D), r(E) === null && D === r(C) && (J ? (G(W), W = -1) : J = !0, Ve(F, X - fe))) : (D.sortIndex = x, u(E, D), N || O || (N = !0, Ae())), D;
    }, d.unstable_shouldYield = ie, d.unstable_wrapCallback = function(D) {
      var Y = M;
      return function() {
        var X = M;
        M = Y;
        try {
          return D.apply(this, arguments);
        } finally {
          M = X;
        }
      };
    };
  }(Vv)), Vv;
}
var Fv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function Rg() {
  return g0 || (g0 = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      function u() {
        if (ie) {
          var D = d.unstable_now();
          Xe = D;
          var Y = !0;
          try {
            e: {
              F = !1, oe && (oe = !1, Te(me), me = -1), $ = !0;
              var X = U;
              try {
                t: {
                  for (A(D), G = f(N); G !== null && !(G.expirationTime > D && E()); ) {
                    var fe = G.callback;
                    if (typeof fe == "function") {
                      G.callback = null, U = G.priorityLevel;
                      var x = fe(
                        G.expirationTime <= D
                      );
                      if (D = d.unstable_now(), typeof x == "function") {
                        G.callback = x, A(D), Y = !0;
                        break t;
                      }
                      G === f(N) && p(N), A(D);
                    } else p(N);
                    G = f(N);
                  }
                  if (G !== null) Y = !0;
                  else {
                    var de = f(J);
                    de !== null && b(
                      S,
                      de.startTime - D
                    ), Y = !1;
                  }
                }
                break e;
              } finally {
                G = null, U = X, $ = !1;
              }
              Y = void 0;
            }
          } finally {
            Y ? te() : ie = !1;
          }
        }
      }
      function r(D, Y) {
        var X = D.length;
        D.push(Y);
        e: for (; 0 < X; ) {
          var fe = X - 1 >>> 1, x = D[fe];
          if (0 < v(x, Y))
            D[fe] = Y, D[X] = x, X = fe;
          else break e;
        }
      }
      function f(D) {
        return D.length === 0 ? null : D[0];
      }
      function p(D) {
        if (D.length === 0) return null;
        var Y = D[0], X = D.pop();
        if (X !== Y) {
          D[0] = X;
          e: for (var fe = 0, x = D.length, de = x >>> 1; fe < de; ) {
            var pe = 2 * (fe + 1) - 1, Qe = D[pe], Ge = pe + 1, we = D[Ge];
            if (0 > v(Qe, X))
              Ge < x && 0 > v(we, Qe) ? (D[fe] = we, D[Ge] = X, fe = Ge) : (D[fe] = Qe, D[pe] = X, fe = pe);
            else if (Ge < x && 0 > v(we, X))
              D[fe] = we, D[Ge] = X, fe = Ge;
            else break e;
          }
        }
        return Y;
      }
      function v(D, Y) {
        var X = D.sortIndex - Y.sortIndex;
        return X !== 0 ? X : D.id - Y.id;
      }
      function A(D) {
        for (var Y = f(J); Y !== null; ) {
          if (Y.callback === null) p(J);
          else if (Y.startTime <= D)
            p(J), Y.sortIndex = Y.expirationTime, r(N, Y);
          else break;
          Y = f(J);
        }
      }
      function S(D) {
        if (oe = !1, A(D), !F)
          if (f(N) !== null)
            F = !0, C();
          else {
            var Y = f(J);
            Y !== null && b(
              S,
              Y.startTime - D
            );
          }
      }
      function E() {
        return !(d.unstable_now() - Xe < De);
      }
      function C() {
        ie || (ie = !0, te());
      }
      function b(D, Y) {
        me = W(function() {
          D(d.unstable_now());
        }, Y);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var T = performance;
        d.unstable_now = function() {
          return T.now();
        };
      } else {
        var M = Date, O = M.now();
        d.unstable_now = function() {
          return M.now() - O;
        };
      }
      var N = [], J = [], Z = 1, G = null, U = 3, $ = !1, F = !1, oe = !1, W = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, ie = !1, me = -1, De = 5, Xe = -1;
      if (typeof ne == "function")
        var te = function() {
          ne(u);
        };
      else if (typeof MessageChannel < "u") {
        var Ae = new MessageChannel(), Ve = Ae.port2;
        Ae.port1.onmessage = u, te = function() {
          Ve.postMessage(null);
        };
      } else
        te = function() {
          W(u, 0);
        };
      d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, d.unstable_continueExecution = function() {
        F || $ || (F = !0, C());
      }, d.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : De = 0 < D ? Math.floor(1e3 / D) : 5;
      }, d.unstable_getCurrentPriorityLevel = function() {
        return U;
      }, d.unstable_getFirstCallbackNode = function() {
        return f(N);
      }, d.unstable_next = function(D) {
        switch (U) {
          case 1:
          case 2:
          case 3:
            var Y = 3;
            break;
          default:
            Y = U;
        }
        var X = U;
        U = Y;
        try {
          return D();
        } finally {
          U = X;
        }
      }, d.unstable_pauseExecution = function() {
      }, d.unstable_requestPaint = function() {
      }, d.unstable_runWithPriority = function(D, Y) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var X = U;
        U = D;
        try {
          return Y();
        } finally {
          U = X;
        }
      }, d.unstable_scheduleCallback = function(D, Y, X) {
        var fe = d.unstable_now();
        switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? fe + X : fe) : X = fe, D) {
          case 1:
            var x = -1;
            break;
          case 2:
            x = 250;
            break;
          case 5:
            x = 1073741823;
            break;
          case 4:
            x = 1e4;
            break;
          default:
            x = 5e3;
        }
        return x = X + x, D = {
          id: Z++,
          callback: Y,
          priorityLevel: D,
          startTime: X,
          expirationTime: x,
          sortIndex: -1
        }, X > fe ? (D.sortIndex = X, r(J, D), f(N) === null && D === f(J) && (oe ? (Te(me), me = -1) : oe = !0, b(S, X - fe))) : (D.sortIndex = x, r(N, D), F || $ || (F = !0, C())), D;
      }, d.unstable_shouldYield = E, d.unstable_wrapCallback = function(D) {
        var Y = U;
        return function() {
          var X = U;
          U = Y;
          try {
            return D.apply(this, arguments);
          } finally {
            U = X;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Fv)), Fv;
}
var S0;
function cE() {
  return S0 || (S0 = 1, process.env.NODE_ENV === "production" ? dh.exports = Mg() : dh.exports = Rg()), dh.exports;
}
/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B0;
function Dg() {
  return B0 || (B0 = 1, function(d) {
    d.exports = function(u) {
      function r(a, n, i, c) {
        return new Wm(a, n, i, c);
      }
      function f() {
      }
      function p(a) {
        var n = "https://react.dev/errors/" + a;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var i = 2; i < arguments.length; i++)
            n += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified React error #" + a + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function v(a) {
        return a === null || typeof a != "object" ? null : (a = vd && a[vd] || a["@@iterator"], typeof a == "function" ? a : null);
      }
      function A(a) {
        if (a == null) return null;
        if (typeof a == "function")
          return a.$$typeof === jh ? null : a.displayName || a.name || null;
        if (typeof a == "string") return a;
        switch (a) {
          case wi:
            return "Fragment";
          case Qs:
            return "Portal";
          case yr:
            return "Profiler";
          case fd:
            return "StrictMode";
          case Er:
            return "Suspense";
          case pd:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case Ul:
              return (a.displayName || "Context") + ".Provider";
            case Ar:
              return (a._context.displayName || "Context") + ".Consumer";
            case md:
              var n = a.render;
              return a = a.displayName, a || (a = n.displayName || n.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
            case gr:
              return n = a.displayName || null, n !== null ? n : A(a.type) || "Memo";
            case Ju:
              n = a._payload, a = a._init;
              try {
                return A(a(n));
              } catch {
              }
          }
        return null;
      }
      function S(a) {
        if (yd === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            yd = n && n[1] || "", En = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + yd + a + En;
      }
      function E(a, n) {
        if (!a || Sr) return "";
        Sr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var c = {
            DetermineComponentFrameRoot: function() {
              try {
                if (n) {
                  var Je = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Je.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Je, []);
                    } catch (Ie) {
                      var ze = Ie;
                    }
                    Reflect.construct(a, [], Je);
                  } else {
                    try {
                      Je.call();
                    } catch (Ie) {
                      ze = Ie;
                    }
                    a.call(Je.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Ie) {
                    ze = Ie;
                  }
                  (Je = a()) && typeof Je.catch == "function" && Je.catch(function() {
                  });
                }
              } catch (Ie) {
                if (Ie && ze && typeof Ie.stack == "string")
                  return [Ie.stack, ze.stack];
              }
              return [null, null];
            }
          };
          c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var h = Object.getOwnPropertyDescriptor(
            c.DetermineComponentFrameRoot,
            "name"
          );
          h && h.configurable && Object.defineProperty(
            c.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var y = c.DetermineComponentFrameRoot(), R = y[0], z = y[1];
          if (R && z) {
            var w = R.split(`
`), he = z.split(`
`);
            for (h = c = 0; c < w.length && !w[c].includes("DetermineComponentFrameRoot"); )
              c++;
            for (; h < he.length && !he[h].includes(
              "DetermineComponentFrameRoot"
            ); )
              h++;
            if (c === w.length || h === he.length)
              for (c = w.length - 1, h = he.length - 1; 1 <= c && 0 <= h && w[c] !== he[h]; )
                h--;
            for (; 1 <= c && 0 <= h; c--, h--)
              if (w[c] !== he[h]) {
                if (c !== 1 || h !== 1)
                  do
                    if (c--, h--, 0 > h || w[c] !== he[h]) {
                      var Oe = `
` + w[c].replace(" at new ", " at ");
                      return a.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", a.displayName)), Oe;
                    }
                  while (1 <= c && 0 <= h);
                break;
              }
          }
        } finally {
          Sr = !1, Error.prepareStackTrace = i;
        }
        return (i = a ? a.displayName || a.name : "") ? S(i) : "";
      }
      function C(a) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            return S(a.type);
          case 16:
            return S("Lazy");
          case 13:
            return S("Suspense");
          case 19:
            return S("SuspenseList");
          case 0:
          case 15:
            return a = E(a.type, !1), a;
          case 11:
            return a = E(a.type.render, !1), a;
          case 1:
            return a = E(a.type, !0), a;
          default:
            return "";
        }
      }
      function b(a) {
        try {
          var n = "";
          do
            n += C(a), a = a.return;
          while (a);
          return n;
        } catch (i) {
          return `
Error generating stack: ` + i.message + `
` + i.stack;
        }
      }
      function T(a) {
        var n = a, i = a;
        if (a.alternate) for (; n.return; ) n = n.return;
        else {
          a = n;
          do
            n = a, (n.flags & 4098) !== 0 && (i = n.return), a = n.return;
          while (a);
        }
        return n.tag === 3 ? i : null;
      }
      function M(a) {
        if (T(a) !== a)
          throw Error(p(188));
      }
      function O(a) {
        var n = a.alternate;
        if (!n) {
          if (n = T(a), n === null) throw Error(p(188));
          return n !== a ? null : a;
        }
        for (var i = a, c = n; ; ) {
          var h = i.return;
          if (h === null) break;
          var y = h.alternate;
          if (y === null) {
            if (c = h.return, c !== null) {
              i = c;
              continue;
            }
            break;
          }
          if (h.child === y.child) {
            for (y = h.child; y; ) {
              if (y === i) return M(h), a;
              if (y === c) return M(h), n;
              y = y.sibling;
            }
            throw Error(p(188));
          }
          if (i.return !== c.return) i = h, c = y;
          else {
            for (var R = !1, z = h.child; z; ) {
              if (z === i) {
                R = !0, i = h, c = y;
                break;
              }
              if (z === c) {
                R = !0, c = h, i = y;
                break;
              }
              z = z.sibling;
            }
            if (!R) {
              for (z = y.child; z; ) {
                if (z === i) {
                  R = !0, i = y, c = h;
                  break;
                }
                if (z === c) {
                  R = !0, c = y, i = h;
                  break;
                }
                z = z.sibling;
              }
              if (!R) throw Error(p(189));
            }
          }
          if (i.alternate !== c) throw Error(p(190));
        }
        if (i.tag !== 3) throw Error(p(188));
        return i.stateNode.current === i ? a : n;
      }
      function N(a) {
        var n = a.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return a;
        for (a = a.child; a !== null; ) {
          if (n = N(a), n !== null) return n;
          a = a.sibling;
        }
        return null;
      }
      function J(a) {
        var n = a.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return a;
        for (a = a.child; a !== null; ) {
          if (a.tag !== 4 && (n = J(a), n !== null))
            return n;
          a = a.sibling;
        }
        return null;
      }
      function Z(a) {
        return { current: a };
      }
      function G(a) {
        0 > uu || (a.current = xl[uu], xl[uu] = null, uu--);
      }
      function U(a, n) {
        uu++, xl[uu] = a.current, a.current = n;
      }
      function $(a) {
        return a >>>= 0, a === 0 ? 32 : 31 - (Ur(a) / Wn | 0) | 0;
      }
      function F(a) {
        var n = a & 42;
        if (n !== 0) return n;
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return a & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return a;
        }
      }
      function oe(a, n) {
        var i = a.pendingLanes;
        if (i === 0) return 0;
        var c = 0, h = a.suspendedLanes, y = a.pingedLanes, R = a.warmLanes;
        a = a.finishedLanes !== 0;
        var z = i & 134217727;
        return z !== 0 ? (i = z & ~h, i !== 0 ? c = F(i) : (y &= z, y !== 0 ? c = F(y) : a || (R = z & ~R, R !== 0 && (c = F(R))))) : (z = i & ~h, z !== 0 ? c = F(z) : y !== 0 ? c = F(y) : a || (R = i & ~R, R !== 0 && (c = F(R)))), c === 0 ? 0 : n !== 0 && n !== c && (n & h) === 0 && (h = c & -c, R = n & -n, h >= R || h === 32 && (R & 4194176) !== 0) ? n : c;
      }
      function W(a, n) {
        return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & n) === 0;
      }
      function Te(a, n) {
        switch (a) {
          case 1:
          case 2:
          case 4:
          case 8:
            return n + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function ne() {
        var a = qo;
        return qo <<= 1, (qo & 4194176) === 0 && (qo = 128), a;
      }
      function ie() {
        var a = Gr;
        return Gr <<= 1, (Gr & 62914560) === 0 && (Gr = 4194304), a;
      }
      function me(a) {
        for (var n = [], i = 0; 31 > i; i++) n.push(a);
        return n;
      }
      function De(a, n) {
        a.pendingLanes |= n, n !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
      }
      function Xe(a, n, i, c, h, y) {
        var R = a.pendingLanes;
        a.pendingLanes = i, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= i, a.entangledLanes &= i, a.errorRecoveryDisabledLanes &= i, a.shellSuspendCounter = 0;
        var z = a.entanglements, w = a.expirationTimes, he = a.hiddenUpdates;
        for (i = R & ~i; 0 < i; ) {
          var Oe = 31 - Sn(i), Je = 1 << Oe;
          z[Oe] = 0, w[Oe] = -1;
          var ze = he[Oe];
          if (ze !== null)
            for (he[Oe] = null, Oe = 0; Oe < ze.length; Oe++) {
              var Ie = ze[Oe];
              Ie !== null && (Ie.lane &= -536870913);
            }
          i &= ~Je;
        }
        c !== 0 && te(a, c, 0), y !== 0 && h === 0 && a.tag !== 0 && (a.suspendedLanes |= y & ~(R & ~n));
      }
      function te(a, n, i) {
        a.pendingLanes |= n, a.suspendedLanes &= ~n;
        var c = 31 - Sn(n);
        a.entangledLanes |= n, a.entanglements[c] = a.entanglements[c] | 1073741824 | i & 4194218;
      }
      function Ae(a, n) {
        var i = a.entangledLanes |= n;
        for (a = a.entanglements; i; ) {
          var c = 31 - Sn(i), h = 1 << c;
          h & n | a[c] & n && (a[c] |= n), i &= ~h;
        }
      }
      function Ve(a) {
        return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function D(a) {
        if (jn && typeof jn.onCommitFiberRoot == "function")
          try {
            jn.onCommitFiberRoot(
              ts,
              a,
              void 0,
              (a.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function Y(a) {
        if (typeof Mp == "function" && Rp(a), jn && typeof jn.setStrictMode == "function")
          try {
            jn.setStrictMode(ts, a);
          } catch {
          }
      }
      function X(a, n) {
        return a === n && (a !== 0 || 1 / a === 1 / n) || a !== a && n !== n;
      }
      function fe(a, n) {
        if (typeof a == "object" && a !== null) {
          var i = zr.get(a);
          return i !== void 0 ? i : (n = {
            value: a,
            source: n,
            stack: b(n)
          }, zr.set(a, n), n);
        }
        return {
          value: a,
          source: n,
          stack: b(n)
        };
      }
      function x(a, n) {
        wa[Pa++] = jr, wa[Pa++] = La, La = a, jr = n;
      }
      function de(a, n, i) {
        Al[kn++] = Zu, Al[kn++] = qu, Al[kn++] = El, El = a;
        var c = Zu;
        a = qu;
        var h = 32 - Sn(c) - 1;
        c &= ~(1 << h), i += 1;
        var y = 32 - Sn(n) + h;
        if (30 < y) {
          var R = h - h % 5;
          y = (c & (1 << R) - 1).toString(32), c >>= R, h -= R, Zu = 1 << 32 - Sn(n) + h | i << h | c, qu = y + a;
        } else
          Zu = 1 << y | i << h | c, qu = a;
      }
      function pe(a) {
        a.return !== null && (x(a, 1), de(a, 1, 0));
      }
      function Qe(a) {
        for (; a === La; )
          La = wa[--Pa], wa[Pa] = null, jr = wa[--Pa], wa[Pa] = null;
        for (; a === El; )
          El = Al[--kn], Al[kn] = null, qu = Al[--kn], Al[kn] = null, Zu = Al[--kn], Al[kn] = null;
      }
      function Ge(a, n) {
        U(bi, n), U(Po, a), U(Wa, null), a = Xs(n), G(Wa), U(Wa, a);
      }
      function we() {
        G(Wa), G(Po), G(bi);
      }
      function at(a) {
        a.memoizedState !== null && U(qs, a);
        var n = Wa.current, i = ep(n, a.type);
        n !== i && (U(Po, a), U(Wa, i));
      }
      function ea(a) {
        Po.current === a && (G(Wa), G(Po)), qs.current === a && (G(qs), lu ? Vu._currentValue = Wi : Vu._currentValue2 = Wi);
      }
      function At(a) {
        var n = Error(p(418, ""));
        throw Ml(fe(n, a)), Wo;
      }
      function Rn(a, n) {
        if (!gn) throw Error(p(175));
        Gd(
          a.stateNode,
          a.type,
          a.memoizedProps,
          n,
          a
        ) || At(a);
      }
      function bl(a) {
        for (rn = a.return; rn; )
          switch (rn.tag) {
            case 3:
            case 27:
              iu = !0;
              return;
            case 5:
            case 13:
              iu = !1;
              return;
            default:
              rn = rn.return;
          }
      }
      function Dn(a) {
        if (!gn || a !== rn) return !1;
        if (!bt) return bl(a), bt = !0, !1;
        var n = !1;
        if (fa ? a.tag !== 3 && a.tag !== 27 && (a.tag !== 5 || Dr(a.type) && !Qu(a.type, a.memoizedProps)) && (n = !0) : a.tag !== 3 && (a.tag !== 5 || Dr(a.type) && !Qu(a.type, a.memoizedProps)) && (n = !0), n && _a && At(a), bl(a), a.tag === 13) {
          if (!gn) throw Error(p(316));
          if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(p(317));
          _a = xd(a);
        } else
          _a = rn ? vp(a.stateNode) : null;
        return !0;
      }
      function _n() {
        gn && (_a = rn = null, bt = !1);
      }
      function Ml(a) {
        zl === null ? zl = [a] : zl.push(a);
      }
      function Rl() {
        for (var a = ya, n = su = ya = 0; n < a; ) {
          var i = ga[n];
          ga[n++] = null;
          var c = ga[n];
          ga[n++] = null;
          var h = ga[n];
          ga[n++] = null;
          var y = ga[n];
          if (ga[n++] = null, c !== null && h !== null) {
            var R = c.pending;
            R === null ? h.next = h : (h.next = R.next, R.next = h), c.pending = h;
          }
          y !== 0 && ui(i, h, y);
        }
      }
      function Vl(a, n, i, c) {
        ga[ya++] = a, ga[ya++] = n, ga[ya++] = i, ga[ya++] = c, su |= c, a.lanes |= c, a = a.alternate, a !== null && (a.lanes |= c);
      }
      function li(a, n, i, c) {
        return Vl(a, n, i, c), Mu(a);
      }
      function Hn(a, n) {
        return Vl(a, null, null, n), Mu(a);
      }
      function ui(a, n, i) {
        a.lanes |= i;
        var c = a.alternate;
        c !== null && (c.lanes |= i);
        for (var h = !1, y = a.return; y !== null; )
          y.childLanes |= i, c = y.alternate, c !== null && (c.childLanes |= i), y.tag === 22 && (a = y.stateNode, a === null || a._visibility & 1 || (h = !0)), a = y, y = y.return;
        h && n !== null && a.tag === 3 && (y = a.stateNode, h = 31 - Sn(i), y = y.hiddenUpdates, a = y[h], a === null ? y[h] = [n] : a.push(n), n.lane = i | 536870912);
      }
      function Mu(a) {
        if (50 < ic)
          throw ic = 0, lo = null, Error(p(185));
        for (var n = a.return; n !== null; )
          a = n, n = a.return;
        return a.tag === 3 ? a.stateNode : null;
      }
      function On(a) {
        a !== as && a.next === null && (as === null ? Cn = as = a : as = as.next = a), ka = !0, Xd || (Xd = !0, bs(Ts));
      }
      function Tt(a, n) {
        if (!Iu && ka) {
          Iu = !0;
          do
            for (var i = !1, c = Cn; c !== null; ) {
              if (a !== 0) {
                var h = c.pendingLanes;
                if (h === 0) var y = 0;
                else {
                  var R = c.suspendedLanes, z = c.pingedLanes;
                  y = (1 << 31 - Sn(42 | a) + 1) - 1, y &= h & ~(R & ~z), y = y & 201326677 ? y & 201326677 | 1 : y ? y | 2 : 0;
                }
                y !== 0 && (i = !0, Qn(c, y));
              } else
                y = gt, y = oe(
                  c,
                  c === qt ? y : 0
                ), (y & 3) === 0 || W(c, y) || (i = !0, Qn(c, y));
              c = c.next;
            }
          while (i);
          Iu = !1;
        }
      }
      function Ts() {
        ka = Xd = !1;
        var a = 0;
        Is !== 0 && (ap() && (a = Is), Is = 0);
        for (var n = yl(), i = null, c = Cn; c !== null; ) {
          var h = c.next, y = Fl(c, n);
          y === 0 ? (c.next = null, i === null ? Cn = h : i.next = h, h === null && (as = i)) : (i = c, (a !== 0 || (y & 3) !== 0) && (ka = !0)), c = h;
        }
        Tt(a);
      }
      function Fl(a, n) {
        for (var i = a.suspendedLanes, c = a.pingedLanes, h = a.expirationTimes, y = a.pendingLanes & -62914561; 0 < y; ) {
          var R = 31 - Sn(y), z = 1 << R, w = h[R];
          w === -1 ? ((z & i) === 0 || (z & c) !== 0) && (h[R] = Te(z, n)) : w <= n && (a.expiredLanes |= z), y &= ~z;
        }
        if (n = qt, i = gt, i = oe(
          a,
          a === n ? i : 0
        ), c = a.callbackNode, i === 0 || a === n && Yt === 2 || a.cancelPendingCommit !== null)
          return c !== null && c !== null && Qd(c), a.callbackNode = null, a.callbackPriority = 0;
        if ((i & 3) === 0 || W(a, i)) {
          if (n = i & -i, n === a.callbackPriority) return n;
          switch (c !== null && Qd(c), Ve(i)) {
            case 2:
            case 8:
              i = Tp;
              break;
            case 32:
              i = xr;
              break;
            case 268435456:
              i = bp;
              break;
            default:
              i = xr;
          }
          return c = Nn.bind(null, a), i = Io(i, c), a.callbackPriority = n, a.callbackNode = i, n;
        }
        return c !== null && c !== null && Qd(c), a.callbackPriority = 2, a.callbackNode = null, 2;
      }
      function Nn(a, n) {
        var i = a.callbackNode;
        if (au() && a.callbackNode !== i)
          return null;
        var c = gt;
        return c = oe(
          a,
          a === qt ? c : 0
        ), c === 0 ? null : (or(a, c, n), Fl(a, yl()), a.callbackNode != null && a.callbackNode === i ? Nn.bind(null, a) : null);
      }
      function Qn(a, n) {
        if (au()) return null;
        or(a, n, !0);
      }
      function bs(a) {
        Kh ? Fu(function() {
          (Qt & 6) !== 0 ? Io(Yd, a) : a();
        }) : Io(Yd, a);
      }
      function Ru() {
        return Is === 0 && (Is = ne()), Is;
      }
      function sl(a, n) {
        if (ko === null) {
          var i = ko = [];
          Vd = 0, ws = Ru(), ns = {
            status: "pending",
            value: void 0,
            then: function(c) {
              i.push(c);
            }
          };
        }
        return Vd++, n.then(Du, Du), n;
      }
      function Du() {
        if (--Vd === 0 && ko !== null) {
          ns !== null && (ns.status = "fulfilled");
          var a = ko;
          ko = null, ws = 0, ns = null;
          for (var n = 0; n < a.length; n++) (0, a[n])();
        }
      }
      function Xa(a, n) {
        var i = [], c = {
          status: "pending",
          value: null,
          reason: null,
          then: function(h) {
            i.push(h);
          }
        };
        return a.then(
          function() {
            c.status = "fulfilled", c.value = n;
            for (var h = 0; h < i.length; h++) (0, i[h])(n);
          },
          function(h) {
            for (c.status = "rejected", c.reason = h, h = 0; h < i.length; h++)
              (0, i[h])(void 0);
          }
        ), c;
      }
      function Un(a) {
        a.updateQueue = {
          baseState: a.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function ii(a, n) {
        a = a.updateQueue, n.updateQueue === a && (n.updateQueue = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          callbacks: null
        });
      }
      function Na(a) {
        return { lane: a, tag: 0, payload: null, callback: null, next: null };
      }
      function Jt(a, n, i) {
        var c = a.updateQueue;
        if (c === null) return null;
        if (c = c.shared, (Qt & 2) !== 0) {
          var h = c.pending;
          return h === null ? n.next = n : (n.next = h.next, h.next = n), c.pending = n, n = Mu(a), ui(a, null, i), n;
        }
        return Vl(a, c, n, i), Mu(a);
      }
      function Ua(a, n, i) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194176) !== 0)) {
          var c = n.lanes;
          c &= a.pendingLanes, i |= c, n.lanes = i, Ae(a, i);
        }
      }
      function V(a, n) {
        var i = a.updateQueue, c = a.alternate;
        if (c !== null && (c = c.updateQueue, i === c)) {
          var h = null, y = null;
          if (i = i.firstBaseUpdate, i !== null) {
            do {
              var R = {
                lane: i.lane,
                tag: i.tag,
                payload: i.payload,
                callback: null,
                next: null
              };
              y === null ? h = y = R : y = y.next = R, i = i.next;
            } while (i !== null);
            y === null ? h = y = n : y = y.next = n;
          } else h = y = n;
          i = {
            baseState: c.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: y,
            shared: c.shared,
            callbacks: c.callbacks
          }, a.updateQueue = i;
          return;
        }
        a = i.lastBaseUpdate, a === null ? i.firstBaseUpdate = n : a.next = n, i.lastBaseUpdate = n;
      }
      function ge() {
        if (Lr) {
          var a = ns;
          if (a !== null) throw a;
        }
      }
      function je(a, n, i, c) {
        Lr = !1;
        var h = a.updateQueue;
        Mi = !1;
        var y = h.firstBaseUpdate, R = h.lastBaseUpdate, z = h.shared.pending;
        if (z !== null) {
          h.shared.pending = null;
          var w = z, he = w.next;
          w.next = null, R === null ? y = he : R.next = he, R = w;
          var Oe = a.alternate;
          Oe !== null && (Oe = Oe.updateQueue, z = Oe.lastBaseUpdate, z !== R && (z === null ? Oe.firstBaseUpdate = he : z.next = he, Oe.lastBaseUpdate = w));
        }
        if (y !== null) {
          var Je = h.baseState;
          R = 0, Oe = he = w = null, z = y;
          do {
            var ze = z.lane & -536870913, Ie = ze !== z.lane;
            if (Ie ? (gt & ze) === ze : (c & ze) === ze) {
              ze !== 0 && ze === ws && (Lr = !0), Oe !== null && (Oe = Oe.next = {
                lane: 0,
                tag: z.tag,
                payload: z.payload,
                callback: null,
                next: null
              });
              e: {
                var Ne = a, Jn = z;
                ze = n;
                var en = i;
                switch (Jn.tag) {
                  case 1:
                    if (Ne = Jn.payload, typeof Ne == "function") {
                      Je = Ne.call(
                        en,
                        Je,
                        ze
                      );
                      break e;
                    }
                    Je = Ne;
                    break e;
                  case 3:
                    Ne.flags = Ne.flags & -65537 | 128;
                  case 0:
                    if (Ne = Jn.payload, ze = typeof Ne == "function" ? Ne.call(en, Je, ze) : Ne, ze == null) break e;
                    Je = Lu({}, Je, ze);
                    break e;
                  case 2:
                    Mi = !0;
                }
              }
              ze = z.callback, ze !== null && (a.flags |= 64, Ie && (a.flags |= 8192), Ie = h.callbacks, Ie === null ? h.callbacks = [ze] : Ie.push(ze));
            } else
              Ie = {
                lane: ze,
                tag: z.tag,
                payload: z.payload,
                callback: z.callback,
                next: null
              }, Oe === null ? (he = Oe = Ie, w = Je) : Oe = Oe.next = Ie, R |= ze;
            if (z = z.next, z === null) {
              if (z = h.shared.pending, z === null)
                break;
              Ie = z, z = Ie.next, Ie.next = null, h.lastBaseUpdate = Ie, h.shared.pending = null;
            }
          } while (!0);
          Oe === null && (w = Je), h.baseState = w, h.firstBaseUpdate = he, h.lastBaseUpdate = Oe, y === null && (h.shared.lanes = 0), Hi |= R, a.lanes = R, a.memoizedState = Je;
        }
      }
      function tt(a, n) {
        if (typeof a != "function")
          throw Error(p(191, a));
        a.call(n);
      }
      function _e(a, n) {
        var i = a.callbacks;
        if (i !== null)
          for (a.callbacks = null, a = 0; a < i.length; a++)
            tt(i[a], n);
      }
      function na(a, n) {
        if (Bn(a, n)) return !0;
        if (typeof a != "object" || a === null || typeof n != "object" || n === null)
          return !1;
        var i = Object.keys(a), c = Object.keys(n);
        if (i.length !== c.length) return !1;
        for (c = 0; c < i.length; c++) {
          var h = i[c];
          if (!$h.call(n, h) || !Bn(a[h], n[h]))
            return !1;
        }
        return !0;
      }
      function Gn(a) {
        return a = a.status, a === "fulfilled" || a === "rejected";
      }
      function Da() {
      }
      function ol(a, n, i) {
        switch (i = a[i], i === void 0 ? a.push(n) : i !== n && (n.then(Da, Da), n = i), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw a = n.reason, a === ou ? Error(p(483)) : a;
          default:
            if (typeof n.status == "string") n.then(Da, Da);
            else {
              if (a = qt, a !== null && 100 < a.shellSuspendCounter)
                throw Error(p(482));
              a = n, a.status = "pending", a.then(
                function(c) {
                  if (n.status === "pending") {
                    var h = n;
                    h.status = "fulfilled", h.value = c;
                  }
                },
                function(c) {
                  if (n.status === "pending") {
                    var h = n;
                    h.status = "rejected", h.reason = c;
                  }
                }
              );
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw a = n.reason, a === ou ? Error(p(483)) : a;
            }
            throw Ps = n, ou;
        }
      }
      function Aa() {
        if (Ps === null) throw Error(p(459));
        var a = Ps;
        return Ps = null, a;
      }
      function Va(a) {
        var n = $o;
        return $o += 1, Ws === null && (Ws = []), ol(Ws, a, n);
      }
      function Fa(a, n) {
        n = n.props.ref, a.ref = n !== void 0 ? n : null;
      }
      function hn(a, n) {
        throw n.$$typeof === In ? Error(p(525)) : (a = Object.prototype.toString.call(n), Error(
          p(
            31,
            a === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : a
          )
        ));
      }
      function cl(a) {
        var n = a._init;
        return n(a._payload);
      }
      function Yn(a) {
        function n(P, I) {
          if (a) {
            var ae = P.deletions;
            ae === null ? (P.deletions = [I], P.flags |= 16) : ae.push(I);
          }
        }
        function i(P, I) {
          if (!a) return null;
          for (; I !== null; )
            n(P, I), I = I.sibling;
          return null;
        }
        function c(P) {
          for (var I = /* @__PURE__ */ new Map(); P !== null; )
            P.key !== null ? I.set(P.key, P) : I.set(P.index, P), P = P.sibling;
          return I;
        }
        function h(P, I) {
          return P = pl(P, I), P.index = 0, P.sibling = null, P;
        }
        function y(P, I, ae) {
          return P.index = ae, a ? (ae = P.alternate, ae !== null ? (ae = ae.index, ae < I ? (P.flags |= 33554434, I) : ae) : (P.flags |= 33554434, I)) : (P.flags |= 1048576, I);
        }
        function R(P) {
          return a && P.alternate === null && (P.flags |= 33554434), P;
        }
        function z(P, I, ae, be) {
          return I === null || I.tag !== 6 ? (I = hl(ae, P.mode, be), I.return = P, I) : (I = h(I, ae), I.return = P, I);
        }
        function w(P, I, ae, be) {
          var Ze = ae.type;
          return Ze === wi ? Oe(
            P,
            I,
            ae.props.children,
            be,
            ae.key
          ) : I !== null && (I.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === Ju && cl(Ze) === I.type) ? (I = h(I, ae.props), Fa(I, ae), I.return = P, I) : (I = pr(
            ae.type,
            ae.key,
            ae.props,
            null,
            P.mode,
            be
          ), Fa(I, ae), I.return = P, I);
        }
        function he(P, I, ae, be) {
          return I === null || I.tag !== 4 || I.stateNode.containerInfo !== ae.containerInfo || I.stateNode.implementation !== ae.implementation ? (I = hr(ae, P.mode, be), I.return = P, I) : (I = h(I, ae.children || []), I.return = P, I);
        }
        function Oe(P, I, ae, be, Ze) {
          return I === null || I.tag !== 7 ? (I = qi(
            ae,
            P.mode,
            be,
            Ze
          ), I.return = P, I) : (I = h(I, ae), I.return = P, I);
        }
        function Je(P, I, ae) {
          if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
            return I = hl(
              "" + I,
              P.mode,
              ae
            ), I.return = P, I;
          if (typeof I == "object" && I !== null) {
            switch (I.$$typeof) {
              case Xo:
                return ae = pr(
                  I.type,
                  I.key,
                  I.props,
                  null,
                  P.mode,
                  ae
                ), Fa(ae, I), ae.return = P, ae;
              case Qs:
                return I = hr(
                  I,
                  P.mode,
                  ae
                ), I.return = P, I;
              case Ju:
                var be = I._init;
                return I = be(I._payload), Je(P, I, ae);
            }
            if (on(I) || v(I))
              return I = qi(
                I,
                P.mode,
                ae,
                null
              ), I.return = P, I;
            if (typeof I.then == "function")
              return Je(P, Va(I), ae);
            if (I.$$typeof === Ul)
              return Je(
                P,
                No(P, I),
                ae
              );
            hn(P, I);
          }
          return null;
        }
        function ze(P, I, ae, be) {
          var Ze = I !== null ? I.key : null;
          if (typeof ae == "string" && ae !== "" || typeof ae == "number" || typeof ae == "bigint")
            return Ze !== null ? null : z(P, I, "" + ae, be);
          if (typeof ae == "object" && ae !== null) {
            switch (ae.$$typeof) {
              case Xo:
                return ae.key === Ze ? w(P, I, ae, be) : null;
              case Qs:
                return ae.key === Ze ? he(P, I, ae, be) : null;
              case Ju:
                return Ze = ae._init, ae = Ze(ae._payload), ze(P, I, ae, be);
            }
            if (on(ae) || v(ae))
              return Ze !== null ? null : Oe(P, I, ae, be, null);
            if (typeof ae.then == "function")
              return ze(
                P,
                I,
                Va(ae),
                be
              );
            if (ae.$$typeof === Ul)
              return ze(
                P,
                I,
                No(P, ae),
                be
              );
            hn(P, ae);
          }
          return null;
        }
        function Ie(P, I, ae, be, Ze) {
          if (typeof be == "string" && be !== "" || typeof be == "number" || typeof be == "bigint")
            return P = P.get(ae) || null, z(I, P, "" + be, Ze);
          if (typeof be == "object" && be !== null) {
            switch (be.$$typeof) {
              case Xo:
                return P = P.get(
                  be.key === null ? ae : be.key
                ) || null, w(I, P, be, Ze);
              case Qs:
                return P = P.get(
                  be.key === null ? ae : be.key
                ) || null, he(I, P, be, Ze);
              case Ju:
                var Xt = be._init;
                return be = Xt(be._payload), Ie(
                  P,
                  I,
                  ae,
                  be,
                  Ze
                );
            }
            if (on(be) || v(be))
              return P = P.get(ae) || null, Oe(I, P, be, Ze, null);
            if (typeof be.then == "function")
              return Ie(
                P,
                I,
                ae,
                Va(be),
                Ze
              );
            if (be.$$typeof === Ul)
              return Ie(
                P,
                I,
                ae,
                No(I, be),
                Ze
              );
            hn(I, be);
          }
          return null;
        }
        function Ne(P, I, ae, be) {
          for (var Ze = null, Xt = null, qe = I, st = I = 0, ta = null; qe !== null && st < ae.length; st++) {
            qe.index > st ? (ta = qe, qe = null) : ta = qe.sibling;
            var rt = ze(
              P,
              qe,
              ae[st],
              be
            );
            if (rt === null) {
              qe === null && (qe = ta);
              break;
            }
            a && qe && rt.alternate === null && n(P, qe), I = y(rt, I, st), Xt === null ? Ze = rt : Xt.sibling = rt, Xt = rt, qe = ta;
          }
          if (st === ae.length)
            return i(P, qe), bt && x(P, st), Ze;
          if (qe === null) {
            for (; st < ae.length; st++)
              qe = Je(P, ae[st], be), qe !== null && (I = y(
                qe,
                I,
                st
              ), Xt === null ? Ze = qe : Xt.sibling = qe, Xt = qe);
            return bt && x(P, st), Ze;
          }
          for (qe = c(qe); st < ae.length; st++)
            ta = Ie(
              qe,
              P,
              st,
              ae[st],
              be
            ), ta !== null && (a && ta.alternate !== null && qe.delete(
              ta.key === null ? st : ta.key
            ), I = y(
              ta,
              I,
              st
            ), Xt === null ? Ze = ta : Xt.sibling = ta, Xt = ta);
          return a && qe.forEach(function(dn) {
            return n(P, dn);
          }), bt && x(P, st), Ze;
        }
        function Jn(P, I, ae, be) {
          if (ae == null) throw Error(p(151));
          for (var Ze = null, Xt = null, qe = I, st = I = 0, ta = null, rt = ae.next(); qe !== null && !rt.done; st++, rt = ae.next()) {
            qe.index > st ? (ta = qe, qe = null) : ta = qe.sibling;
            var dn = ze(P, qe, rt.value, be);
            if (dn === null) {
              qe === null && (qe = ta);
              break;
            }
            a && qe && dn.alternate === null && n(P, qe), I = y(dn, I, st), Xt === null ? Ze = dn : Xt.sibling = dn, Xt = dn, qe = ta;
          }
          if (rt.done)
            return i(P, qe), bt && x(P, st), Ze;
          if (qe === null) {
            for (; !rt.done; st++, rt = ae.next())
              rt = Je(P, rt.value, be), rt !== null && (I = y(
                rt,
                I,
                st
              ), Xt === null ? Ze = rt : Xt.sibling = rt, Xt = rt);
            return bt && x(P, st), Ze;
          }
          for (qe = c(qe); !rt.done; st++, rt = ae.next())
            rt = Ie(
              qe,
              P,
              st,
              rt.value,
              be
            ), rt !== null && (a && rt.alternate !== null && qe.delete(rt.key === null ? st : rt.key), I = y(rt, I, st), Xt === null ? Ze = rt : Xt.sibling = rt, Xt = rt);
          return a && qe.forEach(function(Oi) {
            return n(P, Oi);
          }), bt && x(P, st), Ze;
        }
        function en(P, I, ae, be) {
          if (typeof ae == "object" && ae !== null && ae.type === wi && ae.key === null && (ae = ae.props.children), typeof ae == "object" && ae !== null) {
            switch (ae.$$typeof) {
              case Xo:
                e: {
                  for (var Ze = ae.key; I !== null; ) {
                    if (I.key === Ze) {
                      if (Ze = ae.type, Ze === wi) {
                        if (I.tag === 7) {
                          i(
                            P,
                            I.sibling
                          ), be = h(
                            I,
                            ae.props.children
                          ), be.return = P, P = be;
                          break e;
                        }
                      } else if (I.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === Ju && cl(Ze) === I.type) {
                        i(
                          P,
                          I.sibling
                        ), be = h(I, ae.props), Fa(be, ae), be.return = P, P = be;
                        break e;
                      }
                      i(P, I);
                      break;
                    } else n(P, I);
                    I = I.sibling;
                  }
                  ae.type === wi ? (be = qi(
                    ae.props.children,
                    P.mode,
                    be,
                    ae.key
                  ), be.return = P, P = be) : (be = pr(
                    ae.type,
                    ae.key,
                    ae.props,
                    null,
                    P.mode,
                    be
                  ), Fa(be, ae), be.return = P, P = be);
                }
                return R(P);
              case Qs:
                e: {
                  for (Ze = ae.key; I !== null; ) {
                    if (I.key === Ze)
                      if (I.tag === 4 && I.stateNode.containerInfo === ae.containerInfo && I.stateNode.implementation === ae.implementation) {
                        i(
                          P,
                          I.sibling
                        ), be = h(
                          I,
                          ae.children || []
                        ), be.return = P, P = be;
                        break e;
                      } else {
                        i(P, I);
                        break;
                      }
                    else n(P, I);
                    I = I.sibling;
                  }
                  be = hr(ae, P.mode, be), be.return = P, P = be;
                }
                return R(P);
              case Ju:
                return Ze = ae._init, ae = Ze(ae._payload), en(
                  P,
                  I,
                  ae,
                  be
                );
            }
            if (on(ae))
              return Ne(
                P,
                I,
                ae,
                be
              );
            if (v(ae)) {
              if (Ze = v(ae), typeof Ze != "function")
                throw Error(p(150));
              return ae = Ze.call(ae), Jn(
                P,
                I,
                ae,
                be
              );
            }
            if (typeof ae.then == "function")
              return en(
                P,
                I,
                Va(ae),
                be
              );
            if (ae.$$typeof === Ul)
              return en(
                P,
                I,
                No(P, ae),
                be
              );
            hn(P, ae);
          }
          return typeof ae == "string" && ae !== "" || typeof ae == "number" || typeof ae == "bigint" ? (ae = "" + ae, I !== null && I.tag === 6 ? (i(P, I.sibling), be = h(I, ae), be.return = P, P = be) : (i(P, I), be = hl(ae, P.mode, be), be.return = P, P = be), R(P)) : i(P, I);
        }
        return function(P, I, ae, be) {
          try {
            $o = 0;
            var Ze = en(
              P,
              I,
              ae,
              be
            );
            return Ws = null, Ze;
          } catch (qe) {
            if (qe === ou) throw qe;
            var Xt = r(29, qe, null, P.mode);
            return Xt.lanes = be, Xt.return = P, Xt;
          } finally {
          }
        };
      }
      function _u(a, n) {
        a = mu, U(Kr, a), U(ks, n), mu = a | n.baseLanes;
      }
      function Ji() {
        U(Kr, mu), U(ks, ks.current);
      }
      function si() {
        mu = Kr.current, G(ks), G(Kr);
      }
      function Zl(a) {
        var n = a.alternate;
        U(Ha, Ha.current & 1), U(fn, a), cu === null && (n === null || ks.current !== null || n.memoizedState !== null) && (cu = a);
      }
      function Hu(a) {
        if (a.tag === 22) {
          if (U(Ha, Ha.current), U(fn, a), cu === null) {
            var n = a.alternate;
            n !== null && n.memoizedState !== null && (cu = a);
          }
        } else nn();
      }
      function nn() {
        U(Ha, Ha.current), U(fn, fn.current);
      }
      function et(a) {
        G(fn), cu === a && (cu = null), G(Ha);
      }
      function Xn(a) {
        for (var n = a; n !== null; ) {
          if (n.tag === 13) {
            var i = n.memoizedState;
            if (i !== null && (i = i.dehydrated, i === null || Fo(i) || Mr(i)))
              return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === a) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === a) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function wt() {
        throw Error(p(321));
      }
      function B(a, n) {
        if (n === null) return !1;
        for (var i = 0; i < n.length && i < a.length; i++)
          if (!Bn(a[i], n[i])) return !1;
        return !0;
      }
      function H(a, n, i, c, h, y) {
        return Ri = y, dt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, $e.H = a === null || a.memoizedState === null ? us : Di, ls = !1, y = i(c, h), ls = !1, $s && (y = ee(
          n,
          i,
          c,
          h
        )), j(a), y;
      }
      function j(a) {
        $e.H = ru;
        var n = Kt !== null && Kt.next !== null;
        if (Ri = 0, Sa = Kt = dt = null, Qr = !1, ec = 0, eo = null, n) throw Error(p(300));
        a === null || Ja || (a = a.dependencies, a !== null && Kc(a) && (Ja = !0));
      }
      function ee(a, n, i, c) {
        dt = a;
        var h = 0;
        do {
          if ($s && (eo = null), ec = 0, $s = !1, 25 <= h) throw Error(p(301));
          if (h += 1, Sa = Kt = null, a.updateQueue != null) {
            var y = a.updateQueue;
            y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
          }
          $e.H = is, y = n(i, c);
        } while ($s);
        return y;
      }
      function re() {
        var a = $e.H, n = a.useState()[0];
        return n = typeof n.then == "function" ? Se(n) : n, a = a.useState()[0], (Kt !== null ? Kt.memoizedState : null) !== a && (dt.flags |= 1024), n;
      }
      function ce() {
        var a = Yr !== 0;
        return Yr = 0, a;
      }
      function Re(a, n, i) {
        n.updateQueue = a.updateQueue, n.flags &= -2053, a.lanes &= ~i;
      }
      function Ee(a) {
        if (Qr) {
          for (a = a.memoizedState; a !== null; ) {
            var n = a.queue;
            n !== null && (n.pending = null), a = a.next;
          }
          Qr = !1;
        }
        Ri = 0, Sa = Kt = dt = null, $s = !1, ec = Yr = 0, eo = null;
      }
      function Be() {
        var a = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Sa === null ? dt.memoizedState = Sa = a : Sa = Sa.next = a, Sa;
      }
      function ye() {
        if (Kt === null) {
          var a = dt.alternate;
          a = a !== null ? a.memoizedState : null;
        } else a = Kt.next;
        var n = Sa === null ? dt.memoizedState : Sa.next;
        if (n !== null)
          Sa = n, Kt = a;
        else {
          if (a === null)
            throw dt.alternate === null ? Error(p(467)) : Error(p(310));
          Kt = a, a = {
            memoizedState: Kt.memoizedState,
            baseState: Kt.baseState,
            baseQueue: Kt.baseQueue,
            queue: Kt.queue,
            next: null
          }, Sa === null ? dt.memoizedState = Sa = a : Sa = Sa.next = a;
        }
        return Sa;
      }
      function Se(a) {
        var n = ec;
        return ec += 1, eo === null && (eo = []), a = ol(eo, a, n), n = dt, (Sa === null ? n.memoizedState : Sa.next) === null && (n = n.alternate, $e.H = n === null || n.memoizedState === null ? us : Di), a;
      }
      function He(a) {
        if (a !== null && typeof a == "object") {
          if (typeof a.then == "function") return Se(a);
          if (a.$$typeof === Ul) return Za(a);
        }
        throw Error(p(438, String(a)));
      }
      function xt(a) {
        var n = null, i = dt.updateQueue;
        if (i !== null && (n = i.memoCache), n == null) {
          var c = dt.alternate;
          c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
            data: c.data.map(function(h) {
              return h.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = { data: [], index: 0 }), i === null && (i = Fd(), dt.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
          for (i = n.data[n.index] = Array(a), c = 0; c < a; c++)
            i[c] = hd;
        return n.index++, i;
      }
      function Le(a, n) {
        return typeof n == "function" ? n(a) : n;
      }
      function Fe(a) {
        var n = ye();
        return Pe(n, Kt, a);
      }
      function Pe(a, n, i) {
        var c = a.queue;
        if (c === null) throw Error(p(311));
        c.lastRenderedReducer = i;
        var h = a.baseQueue, y = c.pending;
        if (y !== null) {
          if (h !== null) {
            var R = h.next;
            h.next = y.next, y.next = R;
          }
          n.baseQueue = h = y, c.pending = null;
        }
        if (y = a.baseState, h === null) a.memoizedState = y;
        else {
          n = h.next;
          var z = R = null, w = null, he = n, Oe = !1;
          do {
            var Je = he.lane & -536870913;
            if (Je !== he.lane ? (gt & Je) === Je : (Ri & Je) === Je) {
              var ze = he.revertLane;
              if (ze === 0)
                w !== null && (w = w.next = {
                  lane: 0,
                  revertLane: 0,
                  action: he.action,
                  hasEagerState: he.hasEagerState,
                  eagerState: he.eagerState,
                  next: null
                }), Je === ws && (Oe = !0);
              else if ((Ri & ze) === ze) {
                he = he.next, ze === ws && (Oe = !0);
                continue;
              } else
                Je = {
                  lane: 0,
                  revertLane: he.revertLane,
                  action: he.action,
                  hasEagerState: he.hasEagerState,
                  eagerState: he.eagerState,
                  next: null
                }, w === null ? (z = w = Je, R = y) : w = w.next = Je, dt.lanes |= ze, Hi |= ze;
              Je = he.action, ls && i(y, Je), y = he.hasEagerState ? he.eagerState : i(y, Je);
            } else
              ze = {
                lane: Je,
                revertLane: he.revertLane,
                action: he.action,
                hasEagerState: he.hasEagerState,
                eagerState: he.eagerState,
                next: null
              }, w === null ? (z = w = ze, R = y) : w = w.next = ze, dt.lanes |= Je, Hi |= Je;
            he = he.next;
          } while (he !== null && he !== n);
          if (w === null ? R = y : w.next = z, !Bn(y, a.memoizedState) && (Ja = !0, Oe && (i = ns, i !== null)))
            throw i;
          a.memoizedState = y, a.baseState = R, a.baseQueue = w, c.lastRenderedState = y;
        }
        return h === null && (c.lanes = 0), [a.memoizedState, c.dispatch];
      }
      function nt(a) {
        var n = ye(), i = n.queue;
        if (i === null) throw Error(p(311));
        i.lastRenderedReducer = a;
        var c = i.dispatch, h = i.pending, y = n.memoizedState;
        if (h !== null) {
          i.pending = null;
          var R = h = h.next;
          do
            y = a(y, R.action), R = R.next;
          while (R !== h);
          Bn(y, n.memoizedState) || (Ja = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), i.lastRenderedState = y;
        }
        return [y, c];
      }
      function Dt(a, n, i) {
        var c = dt, h = ye(), y = bt;
        if (y) {
          if (i === void 0)
            throw Error(p(407));
          i = i();
        } else i = n();
        var R = !Bn(
          (Kt || h).memoizedState,
          i
        );
        if (R && (h.memoizedState = i, Ja = !0), h = h.queue, bc(Ft.bind(null, c, h, a), [
          a
        ]), h.getSnapshot !== n || R || Sa !== null && Sa.memoizedState.tag & 1) {
          if (c.flags |= 2048, Vn(
            9,
            Nt.bind(
              null,
              c,
              h,
              i,
              n
            ),
            { destroy: void 0 },
            null
          ), qt === null) throw Error(p(349));
          y || (Ri & 60) !== 0 || zt(c, n, i);
        }
        return i;
      }
      function zt(a, n, i) {
        a.flags |= 16384, a = { getSnapshot: n, value: i }, n = dt.updateQueue, n === null ? (n = Fd(), dt.updateQueue = n, n.stores = [a]) : (i = n.stores, i === null ? n.stores = [a] : i.push(a));
      }
      function Nt(a, n, i, c) {
        n.value = i, n.getSnapshot = c, _t(n) && oa(a);
      }
      function Ft(a, n, i) {
        return i(function() {
          _t(n) && oa(a);
        });
      }
      function _t(a) {
        var n = a.getSnapshot;
        a = a.value;
        try {
          var i = n();
          return !Bn(a, i);
        } catch {
          return !0;
        }
      }
      function oa(a) {
        var n = Hn(a, 2);
        n !== null && qa(n, a, 2);
      }
      function Ct(a) {
        var n = Be();
        if (typeof a == "function") {
          var i = a;
          if (a = i(), ls) {
            Y(!0);
            try {
              i();
            } finally {
              Y(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = a, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Le,
          lastRenderedState: a
        }, n;
      }
      function ca(a, n, i, c) {
        return a.baseState = i, Pe(
          a,
          Kt,
          typeof c == "function" ? c : Le
        );
      }
      function rl(a, n, i, c, h) {
        if (Os(a)) throw Error(p(485));
        if (a = n.action, a !== null) {
          var y = {
            payload: h,
            action: a,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(R) {
              y.listeners.push(R);
            }
          };
          $e.T !== null ? i(!0) : y.isTransition = !1, c(y), i = n.pending, i === null ? (y.next = n.pending = y, Ou(n, y)) : (y.next = i.next, n.pending = i.next = y);
        }
      }
      function Ou(a, n) {
        var i = n.action, c = n.payload, h = a.state;
        if (n.isTransition) {
          var y = $e.T, R = {};
          $e.T = R;
          try {
            var z = i(h, c), w = $e.S;
            w !== null && w(R, z), ln(a, n, z);
          } catch (he) {
            ha(a, n, he);
          } finally {
            $e.T = y;
          }
        } else
          try {
            y = i(h, c), ln(a, n, y);
          } catch (he) {
            ha(a, n, he);
          }
      }
      function ln(a, n, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
          function(c) {
            Ht(a, n, c);
          },
          function(c) {
            return ha(a, n, c);
          }
        ) : Ht(a, n, i);
      }
      function Ht(a, n, i) {
        n.status = "fulfilled", n.value = i, jt(n), a.state = i, n = a.pending, n !== null && (i = n.next, i === n ? a.pending = null : (i = i.next, n.next = i, Ou(a, i)));
      }
      function ha(a, n, i) {
        var c = a.pending;
        if (a.pending = null, c !== null) {
          c = c.next;
          do
            n.status = "rejected", n.reason = i, jt(n), n = n.next;
          while (n !== c);
        }
        a.action = null;
      }
      function jt(a) {
        a = a.listeners;
        for (var n = 0; n < a.length; n++) (0, a[n])();
      }
      function Ot(a, n) {
        return n;
      }
      function un(a, n) {
        if (bt) {
          var i = qt.formState;
          if (i !== null) {
            e: {
              var c = dt;
              if (bt) {
                if (_a) {
                  var h = Zo(
                    _a,
                    iu
                  );
                  if (h) {
                    _a = vp(h), c = qh(h);
                    break e;
                  }
                }
                At(c);
              }
              c = !1;
            }
            c && (n = i[0]);
          }
        }
        i = Be(), i.memoizedState = i.baseState = n, c = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ot,
          lastRenderedState: n
        }, i.queue = c, i = zf.bind(
          null,
          dt,
          c
        ), c.dispatch = i, c = Ct(!1);
        var y = Mo.bind(
          null,
          dt,
          !1,
          c.queue
        );
        return c = Be(), h = {
          state: n,
          dispatch: null,
          action: a,
          pending: null
        }, c.queue = h, i = rl.bind(
          null,
          dt,
          h,
          y,
          i
        ), h.dispatch = i, c.memoizedState = a, [n, i, !1];
      }
      function ql(a) {
        var n = ye();
        return Ga(n, Kt, a);
      }
      function Ga(a, n, i) {
        n = Pe(
          a,
          n,
          Ot
        )[0], a = Fe(Le)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? Se(n) : n;
        var c = ye(), h = c.queue, y = h.dispatch;
        return i !== c.memoizedState && (dt.flags |= 2048, Vn(
          9,
          fl.bind(null, h, i),
          { destroy: void 0 },
          null
        )), [n, y, a];
      }
      function fl(a, n) {
        a.action = n;
      }
      function Nu(a) {
        var n = ye(), i = Kt;
        if (i !== null)
          return Ga(n, i, a);
        ye(), n = n.memoizedState, i = ye();
        var c = i.queue.dispatch;
        return i.memoizedState = a, [n, c, !1];
      }
      function Vn(a, n, i, c) {
        return a = { tag: a, create: n, inst: i, deps: c, next: null }, n = dt.updateQueue, n === null && (n = Fd(), dt.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = a.next = a : (c = i.next, i.next = a, a.next = c, n.lastEffect = a), a;
      }
      function Ms() {
        return ye().memoizedState;
      }
      function Ki(a, n, i, c) {
        var h = Be();
        dt.flags |= a, h.memoizedState = Vn(
          1 | n,
          i,
          { destroy: void 0 },
          c === void 0 ? null : c
        );
      }
      function oi(a, n, i, c) {
        var h = ye();
        c = c === void 0 ? null : c;
        var y = h.memoizedState.inst;
        Kt !== null && c !== null && B(c, Kt.memoizedState.deps) ? h.memoizedState = Vn(n, i, y, c) : (dt.flags |= a, h.memoizedState = Vn(1 | n, i, y, c));
      }
      function Rs(a, n) {
        Ki(8390656, 8, a, n);
      }
      function bc(a, n) {
        oi(2048, 8, a, n);
      }
      function Xm(a, n) {
        return oi(4, 2, a, n);
      }
      function Nf(a, n) {
        return oi(4, 4, a, n);
      }
      function Bo(a, n) {
        if (typeof n == "function") {
          a = a();
          var i = n(a);
          return function() {
            typeof i == "function" ? i() : n(null);
          };
        }
        if (n != null)
          return a = a(), n.current = a, function() {
            n.current = null;
          };
      }
      function Uf(a, n, i) {
        i = i != null ? i.concat([a]) : null, oi(
          4,
          4,
          Bo.bind(null, n, a),
          i
        );
      }
      function Mc() {
      }
      function Co(a, n) {
        var i = ye();
        n = n === void 0 ? null : n;
        var c = i.memoizedState;
        return n !== null && B(n, c[1]) ? c[0] : (i.memoizedState = [a, n], a);
      }
      function Gf(a, n) {
        var i = ye();
        n = n === void 0 ? null : n;
        var c = i.memoizedState;
        if (n !== null && B(n, c[1]))
          return c[0];
        if (c = a(), ls) {
          Y(!0);
          try {
            a();
          } finally {
            Y(!1);
          }
        }
        return i.memoizedState = [c, n], c;
      }
      function Rc(a, n, i) {
        return i === void 0 || (Ri & 1073741824) !== 0 ? a.memoizedState = n : (a.memoizedState = i, a = Wf(), dt.lanes |= a, Hi |= a, i);
      }
      function xf(a, n, i, c) {
        return Bn(i, n) ? i : ks.current !== null ? (a = Rc(a, i, c), Bn(a, n) || (Ja = !0), a) : (Ri & 42) === 0 ? (Ja = !0, a.memoizedState = i) : (a = Wf(), dt.lanes |= a, Hi |= a, n);
      }
      function xa(a, n, i, c, h) {
        var y = Xu();
        cn(
          y !== 0 && 8 > y ? y : 8
        );
        var R = $e.T, z = {};
        $e.T = z, Mo(a, !1, n, i);
        try {
          var w = h(), he = $e.S;
          if (he !== null && he(z, w), w !== null && typeof w == "object" && typeof w.then == "function") {
            var Oe = Xa(
              w,
              c
            );
            Hs(
              a,
              n,
              Oe,
              An(a)
            );
          } else
            Hs(
              a,
              n,
              c,
              An(a)
            );
        } catch (Je) {
          Hs(
            a,
            n,
            { then: function() {
            }, status: "rejected", reason: Je },
            An()
          );
        } finally {
          cn(y), $e.T = R;
        }
      }
      function To(a) {
        var n = a.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Wi,
          baseState: Wi,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Le,
            lastRenderedState: Wi
          },
          next: null
        };
        var i = {};
        return n.next = {
          memoizedState: i,
          baseState: i,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Le,
            lastRenderedState: i
          },
          next: null
        }, a.memoizedState = n, a = a.alternate, a !== null && (a.memoizedState = n), n;
      }
      function Ds() {
        return Za(Vu);
      }
      function _s() {
        return ye().memoizedState;
      }
      function bo() {
        return ye().memoizedState;
      }
      function Dc(a) {
        for (var n = a.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var i = An();
              a = Na(i);
              var c = Jt(n, a, i);
              c !== null && (qa(c, n, i), Ua(c, n, i)), n = { cache: Yc() }, a.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function _c(a, n, i) {
        var c = An();
        i = {
          lane: c,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Os(a) ? Uu(n, i) : (i = li(a, n, i, c), i !== null && (qa(i, a, c), jf(i, n, c)));
      }
      function zf(a, n, i) {
        var c = An();
        Hs(a, n, i, c);
      }
      function Hs(a, n, i, c) {
        var h = {
          lane: c,
          revertLane: 0,
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Os(a)) Uu(n, h);
        else {
          var y = a.alternate;
          if (a.lanes === 0 && (y === null || y.lanes === 0) && (y = n.lastRenderedReducer, y !== null))
            try {
              var R = n.lastRenderedState, z = y(R, i);
              if (h.hasEagerState = !0, h.eagerState = z, Bn(z, R))
                return Vl(a, n, h, 0), qt === null && Rl(), !1;
            } catch {
            } finally {
            }
          if (i = li(a, n, h, c), i !== null)
            return qa(i, a, c), jf(i, n, c), !0;
        }
        return !1;
      }
      function Mo(a, n, i, c) {
        if (c = {
          lane: 2,
          revertLane: Ru(),
          action: c,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Os(a)) {
          if (n) throw Error(p(479));
        } else
          n = li(
            a,
            i,
            c,
            2
          ), n !== null && qa(n, a, 2);
      }
      function Os(a) {
        var n = a.alternate;
        return a === dt || n !== null && n === dt;
      }
      function Uu(a, n) {
        $s = Qr = !0;
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      function jf(a, n, i) {
        if ((i & 4194176) !== 0) {
          var c = n.lanes;
          c &= a.pendingLanes, i |= c, n.lanes = i, Ae(a, i);
        }
      }
      function Il(a, n, i, c) {
        n = a.memoizedState, i = i(c, n), i = i == null ? n : Lu({}, n, i), a.memoizedState = i, a.lanes === 0 && (a.updateQueue.baseState = i);
      }
      function wl(a, n, i, c, h, y, R) {
        return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(c, y, R) : n.prototype && n.prototype.isPureReactComponent ? !na(i, c) || !na(h, y) : !0;
      }
      function Ro(a, n, i, c) {
        a = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, c), n.state !== a && Zd.enqueueReplaceState(n, n.state, null);
      }
      function lt(a, n) {
        var i = n;
        if ("ref" in n) {
          i = {};
          for (var c in n)
            c !== "ref" && (i[c] = n[c]);
        }
        if (a = a.defaultProps) {
          i === n && (i = Lu({}, i));
          for (var h in a)
            i[h] === void 0 && (i[h] = a[h]);
        }
        return i;
      }
      function Ce(a, n) {
        try {
          var i = a.onUncaughtError;
          i(n.value, { componentStack: n.stack });
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      function Qi(a, n, i) {
        try {
          var c = a.onCaughtError;
          c(i.value, {
            componentStack: i.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (h) {
          setTimeout(function() {
            throw h;
          });
        }
      }
      function Ns(a, n, i) {
        return i = Na(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
          Ce(a, n);
        }, i;
      }
      function ra(a) {
        return a = Na(a), a.tag = 3, a;
      }
      function Hc(a, n, i, c) {
        var h = i.type.getDerivedStateFromError;
        if (typeof h == "function") {
          var y = c.value;
          a.payload = function() {
            return h(y);
          }, a.callback = function() {
            Qi(n, i, c);
          };
        }
        var R = i.stateNode;
        R !== null && typeof R.componentDidCatch == "function" && (a.callback = function() {
          Qi(n, i, c), typeof h != "function" && (pu === null ? pu = /* @__PURE__ */ new Set([this]) : pu.add(this));
          var z = c.stack;
          this.componentDidCatch(c.value, {
            componentStack: z !== null ? z : ""
          });
        });
      }
      function Lf(a, n, i, c, h) {
        if (i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          if (n = i.alternate, n !== null && Gs(
            n,
            i,
            h,
            !0
          ), i = fn.current, i !== null) {
            switch (i.tag) {
              case 13:
                return cu === null ? Nl() : i.alternate === null && ua === 0 && (ua = 3), i.flags &= -257, i.flags |= 65536, i.lanes = h, c === Jr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), mr(a, c, h)), !1;
              case 22:
                return i.flags |= 65536, c === Jr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([c])
                }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : i.add(c)), mr(a, c, h)), !1;
            }
            throw Error(p(435, i.tag));
          }
          return mr(a, c, h), Nl(), !1;
        }
        if (bt)
          return n = fn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = h, c !== Wo && (a = Error(p(422), { cause: c }), Ml(
            fe(a, i)
          ))) : (c !== Wo && (n = Error(p(423), {
            cause: c
          }), Ml(
            fe(n, i)
          )), a = a.current.alternate, a.flags |= 65536, h &= -h, a.lanes |= h, c = fe(c, i), h = Ns(
            a.stateNode,
            c,
            h
          ), V(a, h), ua !== 4 && (ua = 2)), !1;
        var y = Error(p(520), { cause: c });
        if (y = fe(y, i), Ca === null ? Ca = [y] : Ca.push(y), ua !== 4 && (ua = 2), n === null) return !0;
        c = fe(c, i), i = n;
        do {
          switch (i.tag) {
            case 3:
              return i.flags |= 65536, a = h & -h, i.lanes |= a, a = Ns(i.stateNode, c, a), V(i, a), !1;
            case 1:
              if (n = i.type, y = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (pu === null || !pu.has(
                y
              ))))
                return i.flags |= 65536, h &= -h, i.lanes |= h, h = ra(h), Hc(
                  h,
                  a,
                  i,
                  c
                ), V(i, h), !1;
          }
          i = i.return;
        } while (i !== null);
        return !1;
      }
      function za(a, n, i, c) {
        n.child = a === null ? Dp(n, null, i, c) : gl(
          n,
          a.child,
          i,
          c
        );
      }
      function Oc(a, n, i, c, h) {
        i = i.render;
        var y = n.ref;
        if ("ref" in c) {
          var R = {};
          for (var z in c)
            z !== "ref" && (R[z] = c[z]);
        } else R = c;
        return ri(n), c = H(
          a,
          n,
          i,
          R,
          y,
          h
        ), z = ce(), a !== null && !Ja ? (Re(a, n, h), Pl(a, n, h)) : (bt && z && pe(n), n.flags |= 1, za(a, n, c, h), n.child);
      }
      function Vm(a, n, i, c, h) {
        if (a === null) {
          var y = i.type;
          return typeof y == "function" && !Js(y) && y.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = y, Nc(
            a,
            n,
            y,
            c,
            h
          )) : (a = pr(
            i.type,
            null,
            c,
            n,
            n.mode,
            h
          ), a.ref = n.ref, a.return = n, n.child = a);
        }
        if (y = a.child, !zc(a, h)) {
          var R = y.memoizedProps;
          if (i = i.compare, i = i !== null ? i : na, i(R, c) && a.ref === n.ref)
            return Pl(
              a,
              n,
              h
            );
        }
        return n.flags |= 1, a = pl(y, c), a.ref = n.ref, a.return = n, n.child = a;
      }
      function Nc(a, n, i, c, h) {
        if (a !== null) {
          var y = a.memoizedProps;
          if (na(y, c) && a.ref === n.ref)
            if (Ja = !1, n.pendingProps = c = y, zc(a, h))
              (a.flags & 131072) !== 0 && (Ja = !0);
            else
              return n.lanes = a.lanes, Pl(a, n, h);
        }
        return Ut(
          a,
          n,
          i,
          c,
          h
        );
      }
      function Uc(a, n, i) {
        var c = n.pendingProps, h = c.children, y = (n.stateNode._pendingVisibility & 2) !== 0, R = a !== null ? a.memoizedState : null;
        if (ja(a, n), c.mode === "hidden" || y) {
          if ((n.flags & 128) !== 0) {
            if (c = R !== null ? R.baseLanes | i : i, a !== null) {
              for (h = n.child = a.child, y = 0; h !== null; )
                y = y | h.lanes | h.childLanes, h = h.sibling;
              n.childLanes = y & ~c;
            } else n.childLanes = 0, n.child = null;
            return Gc(
              a,
              n,
              c,
              i
            );
          }
          if ((i & 536870912) !== 0)
            n.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && Vi(
              n,
              R !== null ? R.cachePool : null
            ), R !== null ? _u(n, R) : Ji(), Hu(n);
          else
            return n.lanes = n.childLanes = 536870912, Gc(
              a,
              n,
              R !== null ? R.baseLanes | i : i,
              i
            );
        } else
          R !== null ? (Vi(n, R.cachePool), _u(n, R), nn(), n.memoizedState = null) : (a !== null && Vi(n, null), Ji(), nn());
        return za(a, n, h, i), n.child;
      }
      function Gc(a, n, i, c) {
        var h = fi();
        return h = h === null ? null : {
          parent: lu ? da._currentValue : da._currentValue2,
          pool: h
        }, n.memoizedState = {
          baseLanes: i,
          cachePool: h
        }, a !== null && Vi(n, null), Ji(), Hu(n), a !== null && Gs(a, n, c, !0), null;
      }
      function ja(a, n) {
        var i = n.ref;
        if (i === null)
          a !== null && a.ref !== null && (n.flags |= 2097664);
        else {
          if (typeof i != "function" && typeof i != "object")
            throw Error(p(284));
          (a === null || a.ref !== i) && (n.flags |= 2097664);
        }
      }
      function Ut(a, n, i, c, h) {
        return ri(n), i = H(
          a,
          n,
          i,
          c,
          void 0,
          h
        ), c = ce(), a !== null && !Ja ? (Re(a, n, h), Pl(a, n, h)) : (bt && c && pe(n), n.flags |= 1, za(a, n, i, h), n.child);
      }
      function Us(a, n, i, c, h, y) {
        return ri(n), n.updateQueue = null, i = ee(
          n,
          c,
          i,
          h
        ), j(a), c = ce(), a !== null && !Ja ? (Re(a, n, y), Pl(a, n, y)) : (bt && c && pe(n), n.flags |= 1, za(a, n, i, y), n.child);
      }
      function Gu(a, n, i, c, h) {
        if (ri(n), n.stateNode === null) {
          var y = Ti, R = i.contextType;
          typeof R == "object" && R !== null && (y = Za(R)), y = new i(c, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Zd, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = c, y.state = n.memoizedState, y.refs = {}, Un(n), R = i.contextType, y.context = typeof R == "object" && R !== null ? Za(R) : Ti, y.state = n.memoizedState, R = i.getDerivedStateFromProps, typeof R == "function" && (Il(
            n,
            i,
            R,
            c
          ), y.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (R = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), R !== y.state && Zd.enqueueReplaceState(
            y,
            y.state,
            null
          ), je(n, c, y, h), ge(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
        } else if (a === null) {
          y = n.stateNode;
          var z = n.memoizedProps, w = lt(i, z);
          y.props = w;
          var he = y.context, Oe = i.contextType;
          R = Ti, typeof Oe == "object" && Oe !== null && (R = Za(Oe));
          var Je = i.getDerivedStateFromProps;
          Oe = typeof Je == "function" || typeof y.getSnapshotBeforeUpdate == "function", z = n.pendingProps !== z, Oe || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (z || he !== R) && Ro(
            n,
            y,
            c,
            R
          ), Mi = !1;
          var ze = n.memoizedState;
          y.state = ze, je(n, c, y, h), ge(), he = n.memoizedState, z || ze !== he || Mi ? (typeof Je == "function" && (Il(
            n,
            i,
            Je,
            c
          ), he = n.memoizedState), (w = Mi || wl(
            n,
            i,
            w,
            c,
            ze,
            he,
            R
          )) ? (Oe || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = he), y.props = c, y.state = he, y.context = R, c = w) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
        } else {
          y = n.stateNode, ii(a, n), R = n.memoizedProps, Oe = lt(i, R), y.props = Oe, Je = n.pendingProps, ze = y.context, he = i.contextType, w = Ti, typeof he == "object" && he !== null && (w = Za(he)), z = i.getDerivedStateFromProps, (he = typeof z == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (R !== Je || ze !== w) && Ro(
            n,
            y,
            c,
            w
          ), Mi = !1, ze = n.memoizedState, y.state = ze, je(n, c, y, h), ge();
          var Ie = n.memoizedState;
          R !== Je || ze !== Ie || Mi || a !== null && a.dependencies !== null && Kc(a.dependencies) ? (typeof z == "function" && (Il(
            n,
            i,
            z,
            c
          ), Ie = n.memoizedState), (Oe = Mi || wl(
            n,
            i,
            Oe,
            c,
            ze,
            Ie,
            w
          ) || a !== null && a.dependencies !== null && Kc(a.dependencies)) ? (he || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(c, Ie, w), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
            c,
            Ie,
            w
          )), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || R === a.memoizedProps && ze === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === a.memoizedProps && ze === a.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Ie), y.props = c, y.state = Ie, y.context = w, c = Oe) : (typeof y.componentDidUpdate != "function" || R === a.memoizedProps && ze === a.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === a.memoizedProps && ze === a.memoizedState || (n.flags |= 1024), c = !1);
        }
        return y = c, ja(a, n), c = (n.flags & 128) !== 0, y || c ? (y = n.stateNode, i = c && typeof i.getDerivedStateFromError != "function" ? null : y.render(), n.flags |= 1, a !== null && c ? (n.child = gl(
          n,
          a.child,
          null,
          h
        ), n.child = gl(
          n,
          null,
          i,
          h
        )) : za(a, n, i, h), n.memoizedState = y.state, a = n.child) : a = Pl(
          a,
          n,
          h
        ), a;
      }
      function ci(a, n, i, c) {
        return _n(), n.flags |= 256, za(a, n, i, c), n.child;
      }
      function Fn(a) {
        return { baseLanes: a, cachePool: Kf() };
      }
      function Do(a, n, i) {
        return a = a !== null ? a.childLanes & ~i : 0, n && (a |= el), a;
      }
      function Yi(a, n, i) {
        var c = n.pendingProps, h = !1, y = (n.flags & 128) !== 0, R;
        if ((R = y) || (R = a !== null && a.memoizedState === null ? !1 : (Ha.current & 2) !== 0), R && (h = !0, n.flags &= -129), R = (n.flags & 32) !== 0, n.flags &= -33, a === null) {
          if (bt) {
            if (h ? Zl(n) : nn(), bt) {
              var z = _a, w;
              (w = z) && (z = Ih(
                z,
                iu
              ), z !== null ? (n.memoizedState = {
                dehydrated: z,
                treeContext: El !== null ? { id: Zu, overflow: qu } : null,
                retryLane: 536870912
              }, w = r(18, null, null, 0), w.stateNode = z, w.return = n, n.child = w, rn = n, _a = null, w = !0) : w = !1), w || At(n);
            }
            if (z = n.memoizedState, z !== null && (z = z.dehydrated, z !== null))
              return Mr(z) ? n.lanes = 16 : n.lanes = 536870912, null;
            et(n);
          }
          return z = c.children, c = c.fallback, h ? (nn(), h = n.mode, z = Xi(
            { mode: "hidden", children: z },
            h
          ), c = qi(
            c,
            h,
            i,
            null
          ), z.return = n, c.return = n, z.sibling = c, n.child = z, h = n.child, h.memoizedState = Fn(i), h.childLanes = Do(
            a,
            R,
            i
          ), n.memoizedState = Xr, c) : (Zl(n), _o(n, z));
        }
        if (w = a.memoizedState, w !== null && (z = w.dehydrated, z !== null)) {
          if (y)
            n.flags & 256 ? (Zl(n), n.flags &= -257, n = Ho(
              a,
              n,
              i
            )) : n.memoizedState !== null ? (nn(), n.child = a.child, n.flags |= 128, n = null) : (nn(), h = c.fallback, z = n.mode, c = Xi(
              { mode: "visible", children: c.children },
              z
            ), h = qi(
              h,
              z,
              i,
              null
            ), h.flags |= 2, c.return = n, h.return = n, c.sibling = h, n.child = c, gl(
              n,
              a.child,
              null,
              i
            ), c = n.child, c.memoizedState = Fn(i), c.childLanes = Do(
              a,
              R,
              i
            ), n.memoizedState = Xr, n = h);
          else if (Zl(n), Mr(z))
            R = pp(z).digest, c = Error(p(419)), c.stack = "", c.digest = R, Ml({ value: c, source: null, stack: null }), n = Ho(
              a,
              n,
              i
            );
          else if (Ja || Gs(
            a,
            n,
            i,
            !1
          ), R = (i & a.childLanes) !== 0, Ja || R) {
            if (R = qt, R !== null) {
              if (c = i & -i, (c & 42) !== 0) c = 1;
              else
                switch (c) {
                  case 2:
                    c = 1;
                    break;
                  case 8:
                    c = 4;
                    break;
                  case 32:
                    c = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    c = 64;
                    break;
                  case 268435456:
                    c = 134217728;
                    break;
                  default:
                    c = 0;
                }
              if (c = (c & (R.suspendedLanes | i)) !== 0 ? 0 : c, c !== 0 && c !== w.retryLane)
                throw w.retryLane = c, Hn(a, c), qa(R, a, c), Id;
            }
            Fo(z) || Nl(), n = Ho(
              a,
              n,
              i
            );
          } else
            Fo(z) ? (n.flags |= 128, n.child = a.child, n = Pm.bind(
              null,
              a
            ), hp(z, n), n = null) : (a = w.treeContext, gn && (_a = yp(z), rn = n, bt = !0, zl = null, iu = !1, a !== null && (Al[kn++] = Zu, Al[kn++] = qu, Al[kn++] = El, Zu = a.id, qu = a.overflow, El = n)), n = _o(
              n,
              c.children
            ), n.flags |= 4096);
          return n;
        }
        return h ? (nn(), h = c.fallback, z = n.mode, w = a.child, y = w.sibling, c = pl(w, {
          mode: "hidden",
          children: c.children
        }), c.subtreeFlags = w.subtreeFlags & 31457280, y !== null ? h = pl(y, h) : (h = qi(
          h,
          z,
          i,
          null
        ), h.flags |= 2), h.return = n, c.return = n, c.sibling = h, n.child = c, c = h, h = n.child, z = a.child.memoizedState, z === null ? z = Fn(i) : (w = z.cachePool, w !== null ? (y = lu ? da._currentValue : da._currentValue2, w = w.parent !== y ? { parent: y, pool: y } : w) : w = Kf(), z = {
          baseLanes: z.baseLanes | i,
          cachePool: w
        }), h.memoizedState = z, h.childLanes = Do(
          a,
          R,
          i
        ), n.memoizedState = Xr, c) : (Zl(n), i = a.child, a = i.sibling, i = pl(i, {
          mode: "visible",
          children: c.children
        }), i.return = n, i.sibling = null, a !== null && (R = n.deletions, R === null ? (n.deletions = [a], n.flags |= 16) : R.push(a)), n.child = i, n.memoizedState = null, i);
      }
      function _o(a, n) {
        return n = Xi(
          { mode: "visible", children: n },
          a.mode
        ), n.return = a, a.child = n;
      }
      function Xi(a, n) {
        return id(a, n, 0, null);
      }
      function Ho(a, n, i) {
        return gl(n, a.child, null, i), a = _o(
          n,
          n.pendingProps.children
        ), a.flags |= 2, n.memoizedState = null, a;
      }
      function Oo(a, n, i) {
        a.lanes |= n;
        var c = a.alternate;
        c !== null && (c.lanes |= n), Lc(a.return, n, i);
      }
      function xc(a, n, i, c, h) {
        var y = a.memoizedState;
        y === null ? a.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: i,
          tailMode: h
        } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = i, y.tailMode = h);
      }
      function Jf(a, n, i) {
        var c = n.pendingProps, h = c.revealOrder, y = c.tail;
        if (za(a, n, c.children, i), c = Ha.current, (c & 2) !== 0)
          c = c & 1 | 2, n.flags |= 128;
        else {
          if (a !== null && (a.flags & 128) !== 0)
            e: for (a = n.child; a !== null; ) {
              if (a.tag === 13)
                a.memoizedState !== null && Oo(a, i, n);
              else if (a.tag === 19)
                Oo(a, i, n);
              else if (a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === n) break e;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === n)
                  break e;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
          c &= 1;
        }
        switch (U(Ha, c), h) {
          case "forwards":
            for (i = n.child, h = null; i !== null; )
              a = i.alternate, a !== null && Xn(a) === null && (h = i), i = i.sibling;
            i = h, i === null ? (h = n.child, n.child = null) : (h = i.sibling, i.sibling = null), xc(
              n,
              !1,
              h,
              i,
              y
            );
            break;
          case "backwards":
            for (i = null, h = n.child, n.child = null; h !== null; ) {
              if (a = h.alternate, a !== null && Xn(a) === null) {
                n.child = h;
                break;
              }
              a = h.sibling, h.sibling = i, i = h, h = a;
            }
            xc(
              n,
              !0,
              i,
              null,
              y
            );
            break;
          case "together":
            xc(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function Pl(a, n, i) {
        if (a !== null && (n.dependencies = a.dependencies), Hi |= n.lanes, (i & n.childLanes) === 0)
          if (a !== null) {
            if (Gs(
              a,
              n,
              i,
              !1
            ), (i & n.childLanes) === 0)
              return null;
          } else return null;
        if (a !== null && n.child !== a.child)
          throw Error(p(153));
        if (n.child !== null) {
          for (a = n.child, i = pl(a, a.pendingProps), n.child = i, i.return = n; a.sibling !== null; )
            a = a.sibling, i = i.sibling = pl(a, a.pendingProps), i.return = n;
          i.sibling = null;
        }
        return n.child;
      }
      function zc(a, n) {
        return (a.lanes & n) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && Kc(a)));
      }
      function Fm(a, n, i) {
        switch (n.tag) {
          case 3:
            Ge(
              n,
              n.stateNode.containerInfo
            ), Wl(n, da, a.memoizedState.cache), _n();
            break;
          case 27:
          case 5:
            at(n);
            break;
          case 4:
            Ge(
              n,
              n.stateNode.containerInfo
            );
            break;
          case 10:
            Wl(
              n,
              n.type,
              n.memoizedProps.value
            );
            break;
          case 13:
            var c = n.memoizedState;
            if (c !== null)
              return c.dehydrated !== null ? (Zl(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Yi(
                a,
                n,
                i
              ) : (Zl(n), a = Pl(
                a,
                n,
                i
              ), a !== null ? a.sibling : null);
            Zl(n);
            break;
          case 19:
            var h = (a.flags & 128) !== 0;
            if (c = (i & n.childLanes) !== 0, c || (Gs(
              a,
              n,
              i,
              !1
            ), c = (i & n.childLanes) !== 0), h) {
              if (c)
                return Jf(
                  a,
                  n,
                  i
                );
              n.flags |= 128;
            }
            if (h = n.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), U(Ha, Ha.current), c) break;
            return null;
          case 22:
          case 23:
            return n.lanes = 0, Uc(a, n, i);
          case 24:
            Wl(n, da, a.memoizedState.cache);
        }
        return Pl(a, n, i);
      }
      function jc(a, n, i) {
        if (a !== null)
          if (a.memoizedProps !== n.pendingProps)
            Ja = !0;
          else {
            if (!zc(a, i) && (n.flags & 128) === 0)
              return Ja = !1, Fm(
                a,
                n,
                i
              );
            Ja = (a.flags & 131072) !== 0;
          }
        else
          Ja = !1, bt && (n.flags & 1048576) !== 0 && de(n, jr, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              a = n.pendingProps;
              var c = n.elementType, h = c._init;
              if (c = h(c._payload), n.type = c, typeof c == "function")
                Js(c) ? (a = lt(c, a), n.tag = 1, n = Gu(
                  null,
                  n,
                  c,
                  a,
                  i
                )) : (n.tag = 0, n = Ut(
                  null,
                  n,
                  c,
                  a,
                  i
                ));
              else {
                if (c != null) {
                  if (h = c.$$typeof, h === md) {
                    n.tag = 11, n = Oc(
                      null,
                      n,
                      c,
                      a,
                      i
                    );
                    break e;
                  } else if (h === gr) {
                    n.tag = 14, n = Vm(
                      null,
                      n,
                      c,
                      a,
                      i
                    );
                    break e;
                  }
                }
                throw n = A(c) || c, Error(p(306, n, ""));
              }
            }
            return n;
          case 0:
            return Ut(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 1:
            return c = n.type, h = lt(
              c,
              n.pendingProps
            ), Gu(
              a,
              n,
              c,
              h,
              i
            );
          case 3:
            e: {
              if (Ge(
                n,
                n.stateNode.containerInfo
              ), a === null) throw Error(p(387));
              var y = n.pendingProps;
              h = n.memoizedState, c = h.element, ii(a, n), je(n, y, null, i);
              var R = n.memoizedState;
              if (y = R.cache, Wl(n, da, y), y !== h.cache && Jc(
                n,
                [da],
                i,
                !0
              ), ge(), y = R.element, gn && h.isDehydrated)
                if (h = {
                  element: y,
                  isDehydrated: !1,
                  cache: R.cache
                }, n.updateQueue.baseState = h, n.memoizedState = h, n.flags & 256) {
                  n = ci(
                    a,
                    n,
                    y,
                    i
                  );
                  break e;
                } else if (y !== c) {
                  c = fe(
                    Error(p(424)),
                    n
                  ), Ml(c), n = ci(
                    a,
                    n,
                    y,
                    i
                  );
                  break e;
                } else
                  for (gn && (_a = Nd(
                    n.stateNode.containerInfo
                  ), rn = n, bt = !0, zl = null, iu = !0), i = Dp(
                    n,
                    null,
                    y,
                    i
                  ), n.child = i; i; )
                    i.flags = i.flags & -3 | 4096, i = i.sibling;
              else {
                if (_n(), y === c) {
                  n = Pl(
                    a,
                    n,
                    i
                  );
                  break e;
                }
                za(a, n, y, i);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (Pn)
              return ja(a, n), a === null ? (i = Ld(
                n.type,
                null,
                n.pendingProps,
                null
              )) ? n.memoizedState = i : bt || (n.stateNode = Wh(
                n.type,
                n.pendingProps,
                bi.current,
                n
              )) : n.memoizedState = Ld(
                n.type,
                a.memoizedProps,
                n.pendingProps,
                a.memoizedState
              ), null;
          case 27:
            if (fa)
              return at(n), a === null && fa && bt && (c = n.stateNode = es(
                n.type,
                n.pendingProps,
                bi.current,
                Wa.current,
                !1
              ), rn = n, iu = !0, _a = Bi(c)), c = n.pendingProps.children, a !== null || bt ? za(
                a,
                n,
                c,
                i
              ) : n.child = gl(
                n,
                null,
                c,
                i
              ), ja(a, n), n.child;
          case 5:
            return a === null && bt && (wh(
              n.type,
              n.pendingProps,
              Wa.current
            ), (h = c = _a) && (c = Ap(
              c,
              n.type,
              n.pendingProps,
              iu
            ), c !== null ? (n.stateNode = c, rn = n, _a = Bi(c), iu = !1, h = !0) : h = !1), h || At(n)), at(n), h = n.type, y = n.pendingProps, R = a !== null ? a.memoizedProps : null, c = y.children, Qu(h, y) ? c = null : R !== null && Qu(h, R) && (n.flags |= 32), n.memoizedState !== null && (h = H(
              a,
              n,
              re,
              null,
              null,
              i
            ), lu ? Vu._currentValue = h : Vu._currentValue2 = h), ja(a, n), za(a, n, c, i), n.child;
          case 6:
            return a === null && bt && (Sp(
              n.pendingProps,
              Wa.current
            ), (a = i = _a) && (i = Ud(
              i,
              n.pendingProps,
              iu
            ), i !== null ? (n.stateNode = i, rn = n, _a = null, a = !0) : a = !1), a || At(n)), null;
          case 13:
            return Yi(a, n, i);
          case 4:
            return Ge(
              n,
              n.stateNode.containerInfo
            ), c = n.pendingProps, a === null ? n.child = gl(
              n,
              null,
              c,
              i
            ) : za(
              a,
              n,
              c,
              i
            ), n.child;
          case 11:
            return Oc(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 7:
            return za(
              a,
              n,
              n.pendingProps,
              i
            ), n.child;
          case 8:
            return za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 12:
            return za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 10:
            return c = n.pendingProps, Wl(
              n,
              n.type,
              c.value
            ), za(
              a,
              n,
              c.children,
              i
            ), n.child;
          case 9:
            return h = n.type._context, c = n.pendingProps.children, ri(n), h = Za(h), c = c(h), n.flags |= 1, za(
              a,
              n,
              c,
              i
            ), n.child;
          case 14:
            return Vm(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 15:
            return Nc(
              a,
              n,
              n.type,
              n.pendingProps,
              i
            );
          case 19:
            return Jf(
              a,
              n,
              i
            );
          case 22:
            return Uc(a, n, i);
          case 24:
            return ri(n), c = Za(da), a === null ? (h = fi(), h === null && (h = qt, y = Yc(), h.pooledCache = y, y.refCount++, y !== null && (h.pooledCacheLanes |= i), h = y), n.memoizedState = {
              parent: c,
              cache: h
            }, Un(n), Wl(n, da, h)) : ((a.lanes & i) !== 0 && (ii(a, n), je(n, null, null, i), ge()), h = a.memoizedState, y = n.memoizedState, h.parent !== c ? (h = { parent: c, cache: c }, n.memoizedState = h, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h), Wl(n, da, c)) : (c = y.cache, Wl(n, da, c), c !== h.cache && Jc(
              n,
              [da],
              i,
              !0
            ))), za(
              a,
              n,
              n.pendingProps.children,
              i
            ), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(p(156, n.tag));
      }
      function Wl(a, n, i) {
        lu ? (U(tc, n._currentValue), n._currentValue = i) : (U(tc, n._currentValue2), n._currentValue2 = i);
      }
      function Dl(a) {
        var n = tc.current;
        lu ? a._currentValue = n : a._currentValue2 = n, G(tc);
      }
      function Lc(a, n, i) {
        for (; a !== null; ) {
          var c = a.alternate;
          if ((a.childLanes & n) !== n ? (a.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), a === i) break;
          a = a.return;
        }
      }
      function Jc(a, n, i, c) {
        var h = a.child;
        for (h !== null && (h.return = a); h !== null; ) {
          var y = h.dependencies;
          if (y !== null) {
            var R = h.child;
            y = y.firstContext;
            e: for (; y !== null; ) {
              var z = y;
              y = h;
              for (var w = 0; w < n.length; w++)
                if (z.context === n[w]) {
                  y.lanes |= i, z = y.alternate, z !== null && (z.lanes |= i), Lc(
                    y.return,
                    i,
                    a
                  ), c || (R = null);
                  break e;
                }
              y = z.next;
            }
          } else if (h.tag === 18) {
            if (R = h.return, R === null) throw Error(p(341));
            R.lanes |= i, y = R.alternate, y !== null && (y.lanes |= i), Lc(R, i, a), R = null;
          } else R = h.child;
          if (R !== null) R.return = h;
          else
            for (R = h; R !== null; ) {
              if (R === a) {
                R = null;
                break;
              }
              if (h = R.sibling, h !== null) {
                h.return = R.return, R = h;
                break;
              }
              R = R.return;
            }
          h = R;
        }
      }
      function Gs(a, n, i, c) {
        a = null;
        for (var h = n, y = !1; h !== null; ) {
          if (!y) {
            if ((h.flags & 524288) !== 0) y = !0;
            else if ((h.flags & 262144) !== 0) break;
          }
          if (h.tag === 10) {
            var R = h.alternate;
            if (R === null) throw Error(p(387));
            if (R = R.memoizedProps, R !== null) {
              var z = h.type;
              Bn(h.pendingProps.value, R.value) || (a !== null ? a.push(z) : a = [z]);
            }
          } else if (h === qs.current) {
            if (R = h.alternate, R === null) throw Error(p(387));
            R.memoizedState.memoizedState !== h.memoizedState.memoizedState && (a !== null ? a.push(Vu) : a = [Vu]);
          }
          h = h.return;
        }
        a !== null && Jc(
          n,
          a,
          i,
          c
        ), n.flags |= 262144;
      }
      function Kc(a) {
        for (a = a.firstContext; a !== null; ) {
          var n = a.context;
          if (!Bn(
            lu ? n._currentValue : n._currentValue2,
            a.memoizedValue
          ))
            return !0;
          a = a.next;
        }
        return !1;
      }
      function ri(a) {
        _i = a, jl = null, a = a.dependencies, a !== null && (a.firstContext = null);
      }
      function Za(a) {
        return Qc(_i, a);
      }
      function No(a, n) {
        return _i === null && ri(a), Qc(a, n);
      }
      function Qc(a, n) {
        var i = lu ? n._currentValue : n._currentValue2;
        if (n = { context: n, memoizedValue: i, next: null }, jl === null) {
          if (a === null) throw Error(p(308));
          jl = n, a.dependencies = { lanes: 0, firstContext: n }, a.flags |= 524288;
        } else jl = jl.next = n;
        return i;
      }
      function Yc() {
        return {
          controller: new wd(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function xs(a) {
        a.refCount--, a.refCount === 0 && ev(tv, function() {
          a.controller.abort();
        });
      }
      function fi() {
        var a = Pu.current;
        return a !== null ? a : qt.pooledCache;
      }
      function Vi(a, n) {
        n === null ? U(Pu, Pu.current) : U(Pu, n.pool);
      }
      function Kf() {
        var a = fi();
        return a === null ? null : {
          parent: lu ? da._currentValue : da._currentValue2,
          pool: a
        };
      }
      function Zn(a) {
        a.flags |= 4;
      }
      function Uo(a, n) {
        if (a !== null && a.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (a = n.child; a !== null; ) {
          if ((a.flags & 13878) !== 0 || (a.subtreeFlags & 13878) !== 0)
            return !0;
          a = a.sibling;
        }
        return !1;
      }
      function di(a, n, i, c) {
        if (Ea)
          for (i = n.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6)
              nu(a, i.stateNode);
            else if (!(i.tag === 4 || fa && i.tag === 27) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === n) break;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === n)
                return;
              i = i.return;
            }
            i.sibling.return = i.return, i = i.sibling;
          }
        else if (Yu)
          for (var h = n.child; h !== null; ) {
            if (h.tag === 5) {
              var y = h.stateNode;
              i && c && (y = dp(
                y,
                h.type,
                h.memoizedProps
              )), nu(a, y);
            } else if (h.tag === 6)
              y = h.stateNode, i && c && (y = mp(
                y,
                h.memoizedProps
              )), nu(a, y);
            else if (h.tag !== 4) {
              if (h.tag === 22 && h.memoizedState !== null)
                y = h.child, y !== null && (y.return = h), di(a, h, !0, !0);
              else if (h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
            }
            if (h === n) break;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === n)
                return;
              h = h.return;
            }
            h.sibling.return = h.return, h = h.sibling;
          }
      }
      function Xc(a, n, i, c) {
        if (Yu)
          for (var h = n.child; h !== null; ) {
            if (h.tag === 5) {
              var y = h.stateNode;
              i && c && (y = dp(
                y,
                h.type,
                h.memoizedProps
              )), br(a, y);
            } else if (h.tag === 6)
              y = h.stateNode, i && c && (y = mp(
                y,
                h.memoizedProps
              )), br(a, y);
            else if (h.tag !== 4) {
              if (h.tag === 22 && h.memoizedState !== null)
                y = h.child, y !== null && (y.return = h), Xc(
                  a,
                  h,
                  !(h.memoizedProps !== null && h.memoizedProps.mode === "manual"),
                  !0
                );
              else if (h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
            }
            if (h === n) break;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === n) return;
              h = h.return;
            }
            h.sibling.return = h.return, h = h.sibling;
          }
      }
      function mi(a, n) {
        if (Yu && Uo(a, n)) {
          a = n.stateNode;
          var i = a.containerInfo, c = Gt();
          Xc(c, n, !1, !1), a.pendingChildren = c, Zn(n), Zh(i, c);
        }
      }
      function sn(a, n, i, c) {
        if (Ea)
          a.memoizedProps !== c && Zn(n);
        else if (Yu) {
          var h = a.stateNode, y = a.memoizedProps;
          if ((a = Uo(a, n)) || y !== c) {
            var R = Wa.current;
            y = fp(
              h,
              i,
              y,
              c,
              !a,
              null
            ), y === h ? n.stateNode = h : (gd(
              y,
              i,
              c,
              R
            ) && Zn(n), n.stateNode = y, a ? di(y, n, !1, !1) : Zn(n));
          } else n.stateNode = h;
        }
      }
      function zs(a, n, i) {
        if (Jh(n, i)) {
          if (a.flags |= 16777216, !Td(n, i))
            if (cr()) a.flags |= 8192;
            else
              throw Ps = Jr, wu;
        } else a.flags &= -16777217;
      }
      function Vc(a, n) {
        if (Ia(n)) {
          if (a.flags |= 16777216, !Cp(n))
            if (cr()) a.flags |= 8192;
            else
              throw Ps = Jr, wu;
        } else a.flags &= -16777217;
      }
      function Go(a, n) {
        n !== null && (a.flags |= 4), a.flags & 16384 && (n = a.tag !== 22 ? ie() : 536870912, a.lanes |= n, ao |= n);
      }
      function Fi(a, n) {
        if (!bt)
          switch (a.tailMode) {
            case "hidden":
              n = a.tail;
              for (var i = null; n !== null; )
                n.alternate !== null && (i = n), n = n.sibling;
              i === null ? a.tail = null : i.sibling = null;
              break;
            case "collapsed":
              i = a.tail;
              for (var c = null; i !== null; )
                i.alternate !== null && (c = i), i = i.sibling;
              c === null ? n || a.tail === null ? a.tail = null : a.tail.sibling = null : c.sibling = null;
          }
      }
      function Zt(a) {
        var n = a.alternate !== null && a.alternate.child === a.child, i = 0, c = 0;
        if (n)
          for (var h = a.child; h !== null; )
            i |= h.lanes | h.childLanes, c |= h.subtreeFlags & 31457280, c |= h.flags & 31457280, h.return = a, h = h.sibling;
        else
          for (h = a.child; h !== null; )
            i |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = a, h = h.sibling;
        return a.subtreeFlags |= c, a.childLanes = i, n;
      }
      function Qf(a, n, i) {
        var c = n.pendingProps;
        switch (Qe(n), n.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Zt(n), null;
          case 1:
            return Zt(n), null;
          case 3:
            return i = n.stateNode, c = null, a !== null && (c = a.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Dl(da), we(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (a === null || a.child === null) && (Dn(n) ? Zn(n) : a === null || a.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, zl !== null && (jo(zl), zl = null))), mi(a, n), Zt(n), null;
          case 26:
            if (Pn) {
              i = n.type;
              var h = n.memoizedState;
              return a === null ? (Zn(n), h !== null ? (Zt(n), Vc(
                n,
                h
              )) : (Zt(n), zs(
                n,
                i,
                c
              ))) : h ? h !== a.memoizedState ? (Zn(n), Zt(n), Vc(
                n,
                h
              )) : (Zt(n), n.flags &= -16777217) : (Ea ? a.memoizedProps !== c && Zn(n) : sn(
                a,
                n,
                i,
                c
              ), Zt(n), zs(
                n,
                i,
                c
              )), null;
            }
          case 27:
            if (fa) {
              if (ea(n), i = bi.current, h = n.type, a !== null && n.stateNode != null)
                Ea ? a.memoizedProps !== c && Zn(n) : sn(
                  a,
                  n,
                  h,
                  c
                );
              else {
                if (!c) {
                  if (n.stateNode === null)
                    throw Error(p(166));
                  return Zt(n), null;
                }
                a = Wa.current, Dn(n) ? Rn(n, a) : (a = es(
                  h,
                  c,
                  i,
                  a,
                  !0
                ), n.stateNode = a, Zn(n));
              }
              return Zt(n), null;
            }
          case 5:
            if (ea(n), i = n.type, a !== null && n.stateNode != null)
              sn(a, n, i, c);
            else {
              if (!c) {
                if (n.stateNode === null)
                  throw Error(p(166));
                return Zt(n), null;
              }
              a = Wa.current, Dn(n) ? Rn(n, a) : (h = Ed(
                i,
                c,
                bi.current,
                a,
                n
              ), di(h, n, !1, !1), n.stateNode = h, gd(
                h,
                i,
                c,
                a
              ) && Zn(n));
            }
            return Zt(n), zs(
              n,
              n.type,
              n.pendingProps
            ), null;
          case 6:
            if (a && n.stateNode != null)
              i = a.memoizedProps, Ea ? i !== c && Zn(n) : Yu && (i !== c ? (n.stateNode = Sd(
                c,
                bi.current,
                Wa.current,
                n
              ), Zn(n)) : n.stateNode = a.stateNode);
            else {
              if (typeof c != "string" && n.stateNode === null)
                throw Error(p(166));
              if (a = bi.current, i = Wa.current, Dn(n)) {
                if (!gn) throw Error(p(176));
                if (a = n.stateNode, i = n.memoizedProps, c = null, h = rn, h !== null)
                  switch (h.tag) {
                    case 27:
                    case 5:
                      c = h.memoizedProps;
                  }
                Ci(
                  a,
                  i,
                  n,
                  c
                ) || At(n);
              } else
                n.stateNode = Sd(
                  c,
                  a,
                  i,
                  n
                );
            }
            return Zt(n), null;
          case 13:
            if (c = n.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
              if (h = Dn(n), c !== null && c.dehydrated !== null) {
                if (a === null) {
                  if (!h) throw Error(p(318));
                  if (!gn) throw Error(p(344));
                  if (h = n.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(p(317));
                  Ep(h, n);
                } else
                  _n(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                Zt(n), h = !1;
              } else
                zl !== null && (jo(zl), zl = null), h = !0;
              if (!h)
                return n.flags & 256 ? (et(n), n) : (et(n), null);
            }
            if (et(n), (n.flags & 128) !== 0)
              return n.lanes = i, n;
            if (i = c !== null, a = a !== null && a.memoizedState !== null, i) {
              c = n.child, h = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (h = c.alternate.memoizedState.cachePool.pool);
              var y = null;
              c.memoizedState !== null && c.memoizedState.cachePool !== null && (y = c.memoizedState.cachePool.pool), y !== h && (c.flags |= 2048);
            }
            return i !== a && i && (n.child.flags |= 8192), Go(n, n.updateQueue), Zt(n), null;
          case 4:
            return we(), mi(a, n), a === null && tp(n.stateNode.containerInfo), Zt(n), null;
          case 10:
            return Dl(n.type), Zt(n), null;
          case 19:
            if (G(Ha), h = n.memoizedState, h === null)
              return Zt(n), null;
            if (c = (n.flags & 128) !== 0, y = h.rendering, y === null)
              if (c) Fi(h, !1);
              else {
                if (ua !== 0 || a !== null && (a.flags & 128) !== 0)
                  for (a = n.child; a !== null; ) {
                    if (y = Xn(a), y !== null) {
                      for (n.flags |= 128, Fi(h, !1), a = y.updateQueue, n.updateQueue = a, Go(n, a), n.subtreeFlags = 0, a = i, i = n.child; i !== null; )
                        Wt(i, a), i = i.sibling;
                      return U(
                        Ha,
                        Ha.current & 1 | 2
                      ), n.child;
                    }
                    a = a.sibling;
                  }
                h.tail !== null && yl() > lc && (n.flags |= 128, c = !0, Fi(h, !1), n.lanes = 4194304);
              }
            else {
              if (!c)
                if (a = Xn(y), a !== null) {
                  if (n.flags |= 128, c = !0, a = a.updateQueue, n.updateQueue = a, Go(n, a), Fi(h, !0), h.tail === null && h.tailMode === "hidden" && !y.alternate && !bt)
                    return Zt(n), null;
                } else
                  2 * yl() - h.renderingStartTime > lc && i !== 536870912 && (n.flags |= 128, c = !0, Fi(h, !1), n.lanes = 4194304);
              h.isBackwards ? (y.sibling = n.child, n.child = y) : (a = h.last, a !== null ? a.sibling = y : n.child = y, h.last = y);
            }
            return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = yl(), n.sibling = null, a = Ha.current, U(
              Ha,
              c ? a & 1 | 2 : a & 1
            ), n) : (Zt(n), null);
          case 22:
          case 23:
            return et(n), si(), c = n.memoizedState !== null, a !== null ? a.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (Zt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Zt(n), i = n.updateQueue, i !== null && Go(n, i.retryQueue), i = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== i && (n.flags |= 2048), a !== null && G(Pu), null;
          case 24:
            return i = null, a !== null && (i = a.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), Dl(da), Zt(n), null;
          case 25:
            return null;
        }
        throw Error(p(156, n.tag));
      }
      function Fc(a, n) {
        switch (Qe(n), n.tag) {
          case 1:
            return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 3:
            return Dl(da), we(), a = n.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (n.flags = a & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return ea(n), null;
          case 13:
            if (et(n), a = n.memoizedState, a !== null && a.dehydrated !== null) {
              if (n.alternate === null)
                throw Error(p(340));
              _n();
            }
            return a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 19:
            return G(Ha), null;
          case 4:
            return we(), null;
          case 10:
            return Dl(n.type), null;
          case 22:
          case 23:
            return et(n), si(), a !== null && G(Pu), a = n.flags, a & 65536 ? (n.flags = a & -65537 | 128, n) : null;
          case 24:
            return Dl(da), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Zc(a, n) {
        switch (Qe(n), n.tag) {
          case 3:
            Dl(da), we();
            break;
          case 26:
          case 27:
          case 5:
            ea(n);
            break;
          case 4:
            we();
            break;
          case 13:
            et(n);
            break;
          case 19:
            G(Ha);
            break;
          case 10:
            Dl(n.type);
            break;
          case 22:
          case 23:
            et(n), si(), a !== null && G(Pu);
            break;
          case 24:
            Dl(da);
        }
      }
      function pi(a, n) {
        try {
          var i = n.updateQueue, c = i !== null ? i.lastEffect : null;
          if (c !== null) {
            var h = c.next;
            i = h;
            do {
              if ((i.tag & a) === a) {
                c = void 0;
                var y = i.create, R = i.inst;
                c = y(), R.destroy = c;
              }
              i = i.next;
            } while (i !== h);
          }
        } catch (z) {
          ot(n, n.return, z);
        }
      }
      function kl(a, n, i) {
        try {
          var c = n.updateQueue, h = c !== null ? c.lastEffect : null;
          if (h !== null) {
            var y = h.next;
            c = y;
            do {
              if ((c.tag & a) === a) {
                var R = c.inst, z = R.destroy;
                if (z !== void 0) {
                  R.destroy = void 0, h = n;
                  var w = i;
                  try {
                    z();
                  } catch (he) {
                    ot(
                      h,
                      w,
                      he
                    );
                  }
                }
              }
              c = c.next;
            } while (c !== y);
          }
        } catch (he) {
          ot(n, n.return, he);
        }
      }
      function Yf(a) {
        var n = a.updateQueue;
        if (n !== null) {
          var i = a.stateNode;
          try {
            _e(n, i);
          } catch (c) {
            ot(a, a.return, c);
          }
        }
      }
      function Xf(a, n, i) {
        i.props = lt(
          a.type,
          a.memoizedProps
        ), i.state = a.memoizedState;
        try {
          i.componentWillUnmount();
        } catch (c) {
          ot(a, n, c);
        }
      }
      function xu(a, n) {
        try {
          var i = a.ref;
          if (i !== null) {
            var c = a.stateNode;
            switch (a.tag) {
              case 26:
              case 27:
              case 5:
                var h = Ys(c);
                break;
              default:
                h = c;
            }
            typeof i == "function" ? a.refCleanup = i(h) : i.current = h;
          }
        } catch (y) {
          ot(a, n, y);
        }
      }
      function xn(a, n) {
        var i = a.ref, c = a.refCleanup;
        if (i !== null)
          if (typeof c == "function")
            try {
              c();
            } catch (h) {
              ot(a, n, h);
            } finally {
              a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
            }
          else if (typeof i == "function")
            try {
              i(null);
            } catch (h) {
              ot(a, n, h);
            }
          else i.current = null;
      }
      function Vf(a) {
        var n = a.type, i = a.memoizedProps, c = a.stateNode;
        try {
          Yh(c, n, i, a);
        } catch (h) {
          ot(a, a.return, h);
        }
      }
      function Ff(a, n, i) {
        try {
          op(
            a.stateNode,
            a.type,
            i,
            n,
            a
          );
        } catch (c) {
          ot(a, a.return, c);
        }
      }
      function qc(a) {
        return a.tag === 5 || a.tag === 3 || (Pn ? a.tag === 26 : !1) || (fa ? a.tag === 27 : !1) || a.tag === 4;
      }
      function Ic(a) {
        e: for (; ; ) {
          for (; a.sibling === null; ) {
            if (a.return === null || qc(a.return)) return null;
            a = a.return;
          }
          for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && (!fa || a.tag !== 27) && a.tag !== 18; ) {
            if (a.flags & 2 || a.child === null || a.tag === 4) continue e;
            a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function wc(a, n, i) {
        var c = a.tag;
        if (c === 5 || c === 6)
          a = a.stateNode, n ? Xh(i, a, n) : sp(i, a);
        else if (!(c === 4 || fa && c === 27) && (a = a.child, a !== null))
          for (wc(a, n, i), a = a.sibling; a !== null; )
            wc(a, n, i), a = a.sibling;
      }
      function $l(a, n, i) {
        var c = a.tag;
        if (c === 5 || c === 6)
          a = a.stateNode, n ? cp(i, a, n) : Dd(i, a);
        else if (!(c === 4 || fa && c === 27) && (a = a.child, a !== null))
          for ($l(a, n, i), a = a.sibling; a !== null; )
            $l(a, n, i), a = a.sibling;
      }
      function Pc(a, n, i) {
        a = a.containerInfo;
        try {
          Od(a, i);
        } catch (c) {
          ot(n, n.return, c);
        }
      }
      function Zf(a, n) {
        for (Ku(a.containerInfo), Ka = n; Ka !== null; )
          if (a = Ka, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
            n.return = a, Ka = n;
          else
            for (; Ka !== null; ) {
              a = Ka;
              var i = a.alternate;
              switch (n = a.flags, a.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if ((n & 1024) !== 0 && i !== null) {
                    n = void 0;
                    var c = a, h = i.memoizedProps;
                    i = i.memoizedState;
                    var y = c.stateNode;
                    try {
                      var R = lt(
                        c.type,
                        h,
                        c.elementType === c.type
                      );
                      n = y.getSnapshotBeforeUpdate(
                        R,
                        i
                      ), y.__reactInternalSnapshotBeforeUpdate = n;
                    } catch (z) {
                      ot(
                        c,
                        c.return,
                        z
                      );
                    }
                  }
                  break;
                case 3:
                  (n & 1024) !== 0 && Ea && Si(a.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if ((n & 1024) !== 0)
                    throw Error(p(163));
              }
              if (n = a.sibling, n !== null) {
                n.return = a.return, Ka = n;
                break;
              }
              Ka = a.return;
            }
        return R = Np, Np = !1, R;
      }
      function Zm(a, n, i) {
        var c = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            eu(a, i), c & 4 && pi(5, i);
            break;
          case 1:
            if (eu(a, i), c & 4)
              if (a = i.stateNode, n === null)
                try {
                  a.componentDidMount();
                } catch (z) {
                  ot(i, i.return, z);
                }
              else {
                var h = lt(
                  i.type,
                  n.memoizedProps
                );
                n = n.memoizedState;
                try {
                  a.componentDidUpdate(
                    h,
                    n,
                    a.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (z) {
                  ot(
                    i,
                    i.return,
                    z
                  );
                }
              }
            c & 64 && Yf(i), c & 512 && xu(i, i.return);
            break;
          case 3:
            if (eu(a, i), c & 64 && (c = i.updateQueue, c !== null)) {
              if (a = null, i.child !== null)
                switch (i.child.tag) {
                  case 27:
                  case 5:
                    a = Ys(i.child.stateNode);
                    break;
                  case 1:
                    a = i.child.stateNode;
                }
              try {
                _e(c, a);
              } catch (z) {
                ot(i, i.return, z);
              }
            }
            break;
          case 26:
            if (Pn) {
              eu(a, i), c & 512 && xu(i, i.return);
              break;
            }
          case 27:
          case 5:
            eu(a, i), n === null && c & 4 && Vf(i), c & 512 && xu(i, i.return);
            break;
          case 12:
            eu(a, i);
            break;
          case 13:
            eu(a, i), c & 4 && Wc(a, i);
            break;
          case 22:
            if (h = i.memoizedState !== null || fu, !h) {
              n = n !== null && n.memoizedState !== null || ma;
              var y = fu, R = ma;
              fu = h, (ma = n) && !R ? _l(
                a,
                i,
                (i.subtreeFlags & 8772) !== 0
              ) : eu(a, i), fu = y, ma = R;
            }
            c & 512 && (i.memoizedProps.mode === "manual" ? xu(i, i.return) : xn(i, i.return));
            break;
          default:
            eu(a, i);
        }
      }
      function qm(a) {
        var n = a.alternate;
        n !== null && (a.alternate = null, qm(n)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (n = a.stateNode, n !== null && Cr(n)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
      }
      function dl(a, n, i) {
        for (i = i.child; i !== null; )
          Zi(
            a,
            n,
            i
          ), i = i.sibling;
      }
      function Zi(a, n, i) {
        if (jn && typeof jn.onCommitFiberUnmount == "function")
          try {
            jn.onCommitFiberUnmount(ts, i);
          } catch {
          }
        switch (i.tag) {
          case 26:
            if (Pn) {
              ma || xn(i, n), dl(
                a,
                n,
                i
              ), i.memoizedState ? Hr(i.memoizedState) : i.stateNode && pt(i.stateNode);
              break;
            }
          case 27:
            if (fa) {
              ma || xn(i, n);
              var c = Ba, h = $n;
              Ba = i.stateNode, dl(
                a,
                n,
                i
              ), kh(i.stateNode), Ba = c, $n = h;
              break;
            }
          case 5:
            ma || xn(i, n);
          case 6:
            if (Ea) {
              if (c = Ba, h = $n, Ba = null, dl(
                a,
                n,
                i
              ), Ba = c, $n = h, Ba !== null)
                if ($n)
                  try {
                    Tr(Ba, i.stateNode);
                  } catch (y) {
                    ot(
                      i,
                      n,
                      y
                    );
                  }
                else
                  try {
                    Zs(Ba, i.stateNode);
                  } catch (y) {
                    ot(
                      i,
                      n,
                      y
                    );
                  }
            } else
              dl(
                a,
                n,
                i
              );
            break;
          case 18:
            Ea && Ba !== null && ($n ? zd(
              Ba,
              i.stateNode
            ) : gp(Ba, i.stateNode));
            break;
          case 4:
            Ea ? (c = Ba, h = $n, Ba = i.stateNode.containerInfo, $n = !0, dl(
              a,
              n,
              i
            ), Ba = c, $n = h) : (Yu && Pc(
              i.stateNode,
              i,
              Gt()
            ), dl(
              a,
              n,
              i
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            ma || kl(2, i, n), ma || kl(4, i, n), dl(
              a,
              n,
              i
            );
            break;
          case 1:
            ma || (xn(i, n), c = i.stateNode, typeof c.componentWillUnmount == "function" && Xf(
              i,
              n,
              c
            )), dl(
              a,
              n,
              i
            );
            break;
          case 21:
            dl(
              a,
              n,
              i
            );
            break;
          case 22:
            ma || xn(i, n), ma = (c = ma) || i.memoizedState !== null, dl(
              a,
              n,
              i
            ), ma = c;
            break;
          default:
            dl(
              a,
              n,
              i
            );
        }
      }
      function Wc(a, n) {
        if (gn && n.memoizedState === null && (a = n.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
          try {
            ki(a);
          } catch (i) {
            ot(n, n.return, i);
          }
      }
      function kc(a) {
        switch (a.tag) {
          case 13:
          case 19:
            var n = a.stateNode;
            return n === null && (n = a.stateNode = new Op()), n;
          case 22:
            return a = a.stateNode, n = a._retryCache, n === null && (n = a._retryCache = new Op()), n;
          default:
            throw Error(p(435, a.tag));
        }
      }
      function $c(a, n) {
        var i = kc(a);
        n.forEach(function(c) {
          var h = ld.bind(null, a, c);
          i.has(c) || (i.add(c), c.then(h, h));
        });
      }
      function vn(a, n) {
        var i = n.deletions;
        if (i !== null)
          for (var c = 0; c < i.length; c++) {
            var h = i[c], y = a, R = n;
            if (Ea) {
              var z = R;
              e: for (; z !== null; ) {
                switch (z.tag) {
                  case 27:
                  case 5:
                    Ba = z.stateNode, $n = !1;
                    break e;
                  case 3:
                    Ba = z.stateNode.containerInfo, $n = !0;
                    break e;
                  case 4:
                    Ba = z.stateNode.containerInfo, $n = !0;
                    break e;
                }
                z = z.return;
              }
              if (Ba === null) throw Error(p(160));
              Zi(y, R, h), Ba = null, $n = !1;
            } else Zi(y, R, h);
            y = h.alternate, y !== null && (y.return = null), h.return = null;
          }
        if (n.subtreeFlags & 13878)
          for (n = n.child; n !== null; )
            er(n, a), n = n.sibling;
      }
      function er(a, n) {
        var i = a.alternate, c = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            vn(n, a), yn(a), c & 4 && (kl(3, a, a.return), pi(3, a), kl(5, a, a.return));
            break;
          case 1:
            vn(n, a), yn(a), c & 512 && (ma || i === null || xn(i, i.return)), c & 64 && fu && (a = a.updateQueue, a !== null && (c = a.callbacks, c !== null && (i = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = i === null ? c : i.concat(c))));
            break;
          case 26:
            if (Pn) {
              var h = Ll;
              vn(n, a), yn(a), c & 512 && (ma || i === null || xn(i, i.return)), c & 4 && (c = i !== null ? i.memoizedState : null, n = a.memoizedState, i === null ? n === null ? a.stateNode === null ? a.stateNode = Ph(
                h,
                a.type,
                a.memoizedProps,
                a
              ) : Bp(
                h,
                a.type,
                a.stateNode
              ) : a.stateNode = Jd(
                h,
                n,
                a.memoizedProps
              ) : c !== n ? (c === null ? i.stateNode !== null && pt(i.stateNode) : Hr(c), n === null ? Bp(
                h,
                a.type,
                a.stateNode
              ) : Jd(
                h,
                n,
                a.memoizedProps
              )) : n === null && a.stateNode !== null && Ff(
                a,
                a.memoizedProps,
                i.memoizedProps
              ));
              break;
            }
          case 27:
            if (fa && c & 4 && a.alternate === null) {
              h = a.stateNode;
              var y = a.memoizedProps;
              try {
                Or(h), Kd(
                  a.type,
                  y,
                  h,
                  a
                );
              } catch (Oe) {
                ot(a, a.return, Oe);
              }
            }
          case 5:
            if (vn(n, a), yn(a), c & 512 && (ma || i === null || xn(i, i.return)), Ea) {
              if (a.flags & 32) {
                n = a.stateNode;
                try {
                  _d(n);
                } catch (Oe) {
                  ot(a, a.return, Oe);
                }
              }
              c & 4 && a.stateNode != null && (n = a.memoizedProps, Ff(
                a,
                n,
                i !== null ? i.memoizedProps : n
              )), c & 1024 && (Pd = !0);
            }
            break;
          case 6:
            if (vn(n, a), yn(a), c & 4 && Ea) {
              if (a.stateNode === null)
                throw Error(p(162));
              c = a.memoizedProps, i = i !== null ? i.memoizedProps : c, n = a.stateNode;
              try {
                Qh(n, i, c);
              } catch (Oe) {
                ot(a, a.return, Oe);
              }
            }
            break;
          case 3:
            if (Pn ? (zn(), h = Ll, Ll = _r(n.containerInfo), vn(n, a), Ll = h) : vn(n, a), yn(a), c & 4) {
              if (Ea && gn && i !== null && i.memoizedState.isDehydrated)
                try {
                  Rr(n.containerInfo);
                } catch (Oe) {
                  ot(a, a.return, Oe);
                }
              if (Yu) {
                c = n.containerInfo, i = n.pendingChildren;
                try {
                  Od(c, i);
                } catch (Oe) {
                  ot(a, a.return, Oe);
                }
              }
            }
            Pd && (Pd = !1, qf(a));
            break;
          case 4:
            Pn ? (i = Ll, Ll = _r(
              a.stateNode.containerInfo
            ), vn(n, a), yn(a), Ll = i) : (vn(n, a), yn(a)), c & 4 && Yu && Pc(
              a.stateNode,
              a,
              a.stateNode.pendingChildren
            );
            break;
          case 12:
            vn(n, a), yn(a);
            break;
          case 13:
            vn(n, a), yn(a), a.child.flags & 8192 && a.memoizedState !== null != (i !== null && i.memoizedState !== null) && (em = yl()), c & 4 && (c = a.updateQueue, c !== null && (a.updateQueue = null, $c(a, c)));
            break;
          case 22:
            c & 512 && (ma || i === null || xn(i, i.return)), h = a.memoizedState !== null;
            var R = i !== null && i.memoizedState !== null, z = fu, w = ma;
            if (fu = z || h, ma = w || R, vn(n, a), ma = w, fu = z, yn(a), n = a.stateNode, n._current = a, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, c & 8192 && (n._visibility = h ? n._visibility & -2 : n._visibility | 1, h && (n = fu || ma, i === null || R || n || ml(a)), Ea && (a.memoizedProps === null || a.memoizedProps.mode !== "manual"))) {
              e: if (i = null, Ea)
                for (n = a; ; ) {
                  if (n.tag === 5 || Pn && n.tag === 26 || fa && n.tag === 27) {
                    if (i === null) {
                      R = i = n;
                      try {
                        y = R.stateNode, h ? Hd(y) : Fh(
                          R.stateNode,
                          R.memoizedProps
                        );
                      } catch (Oe) {
                        ot(R, R.return, Oe);
                      }
                    }
                  } else if (n.tag === 6) {
                    if (i === null) {
                      R = n;
                      try {
                        var he = R.stateNode;
                        h ? Vh(he) : rp(he, R.memoizedProps);
                      } catch (Oe) {
                        ot(R, R.return, Oe);
                      }
                    }
                  } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === a) && n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue;
                  }
                  if (n === a) break e;
                  for (; n.sibling === null; ) {
                    if (n.return === null || n.return === a)
                      break e;
                    i === n && (i = null), n = n.return;
                  }
                  i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
                }
            }
            c & 4 && (c = a.updateQueue, c !== null && (i = c.retryQueue, i !== null && (c.retryQueue = null, $c(a, i))));
            break;
          case 19:
            vn(n, a), yn(a), c & 4 && (c = a.updateQueue, c !== null && (a.updateQueue = null, $c(a, c)));
            break;
          case 21:
            break;
          default:
            vn(n, a), yn(a);
        }
      }
      function yn(a) {
        var n = a.flags;
        if (n & 2) {
          try {
            if (Ea && (!fa || a.tag !== 27)) {
              e: {
                for (var i = a.return; i !== null; ) {
                  if (qc(i)) {
                    var c = i;
                    break e;
                  }
                  i = i.return;
                }
                throw Error(p(160));
              }
              switch (c.tag) {
                case 27:
                  if (fa) {
                    var h = c.stateNode, y = Ic(a);
                    $l(
                      a,
                      y,
                      h
                    );
                    break;
                  }
                case 5:
                  var R = c.stateNode;
                  c.flags & 32 && (_d(R), c.flags &= -33);
                  var z = Ic(a);
                  $l(a, z, R);
                  break;
                case 3:
                case 4:
                  var w = c.stateNode.containerInfo, he = Ic(a);
                  wc(
                    a,
                    he,
                    w
                  );
                  break;
                default:
                  throw Error(p(161));
              }
            }
          } catch (Oe) {
            ot(a, a.return, Oe);
          }
          a.flags &= -3;
        }
        n & 4096 && (a.flags &= -4097);
      }
      function qf(a) {
        if (a.subtreeFlags & 1024)
          for (a = a.child; a !== null; ) {
            var n = a;
            qf(n), n.tag === 5 && n.flags & 1024 && np(n.stateNode), a = a.sibling;
          }
      }
      function eu(a, n) {
        if (n.subtreeFlags & 8772)
          for (n = n.child; n !== null; )
            Zm(a, n.alternate, n), n = n.sibling;
      }
      function ml(a) {
        for (a = a.child; a !== null; ) {
          var n = a;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              kl(4, n, n.return), ml(n);
              break;
            case 1:
              xn(n, n.return);
              var i = n.stateNode;
              typeof i.componentWillUnmount == "function" && Xf(
                n,
                n.return,
                i
              ), ml(n);
              break;
            case 26:
            case 27:
            case 5:
              xn(n, n.return), ml(n);
              break;
            case 22:
              xn(n, n.return), n.memoizedState === null && ml(n);
              break;
            default:
              ml(n);
          }
          a = a.sibling;
        }
      }
      function _l(a, n, i) {
        for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
          var c = n.alternate, h = a, y = n, R = y.flags;
          switch (y.tag) {
            case 0:
            case 11:
            case 15:
              _l(
                h,
                y,
                i
              ), pi(4, y);
              break;
            case 1:
              if (_l(
                h,
                y,
                i
              ), c = y, h = c.stateNode, typeof h.componentDidMount == "function")
                try {
                  h.componentDidMount();
                } catch (he) {
                  ot(c, c.return, he);
                }
              if (c = y, h = c.updateQueue, h !== null) {
                var z = c.stateNode;
                try {
                  var w = h.shared.hiddenCallbacks;
                  if (w !== null)
                    for (h.shared.hiddenCallbacks = null, h = 0; h < w.length; h++)
                      tt(w[h], z);
                } catch (he) {
                  ot(c, c.return, he);
                }
              }
              i && R & 64 && Yf(y), xu(y, y.return);
              break;
            case 26:
            case 27:
            case 5:
              _l(
                h,
                y,
                i
              ), i && c === null && R & 4 && Vf(y), xu(y, y.return);
              break;
            case 12:
              _l(
                h,
                y,
                i
              );
              break;
            case 13:
              _l(
                h,
                y,
                i
              ), i && R & 4 && Wc(h, y);
              break;
            case 22:
              y.memoizedState === null && _l(
                h,
                y,
                i
              ), xu(y, y.return);
              break;
            default:
              _l(
                h,
                y,
                i
              );
          }
          n = n.sibling;
        }
      }
      function tr(a, n) {
        var i = null;
        a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== i && (a != null && a.refCount++, i != null && xs(i));
      }
      function xo(a, n) {
        a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && xs(a));
      }
      function tu(a, n, i, c) {
        if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; )
            ar(
              a,
              n,
              i,
              c
            ), n = n.sibling;
      }
      function ar(a, n, i, c) {
        var h = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            tu(
              a,
              n,
              i,
              c
            ), h & 2048 && pi(9, n);
            break;
          case 3:
            tu(
              a,
              n,
              i,
              c
            ), h & 2048 && (a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && xs(a)));
            break;
          case 12:
            if (h & 2048) {
              tu(
                a,
                n,
                i,
                c
              ), a = n.stateNode;
              try {
                var y = n.memoizedProps, R = y.id, z = y.onPostCommit;
                typeof z == "function" && z(
                  R,
                  n.alternate === null ? "mount" : "update",
                  a.passiveEffectDuration,
                  -0
                );
              } catch (w) {
                ot(n, n.return, w);
              }
            } else
              tu(
                a,
                n,
                i,
                c
              );
            break;
          case 23:
            break;
          case 22:
            y = n.stateNode, n.memoizedState !== null ? y._visibility & 4 ? tu(
              a,
              n,
              i,
              c
            ) : va(
              a,
              n
            ) : y._visibility & 4 ? tu(
              a,
              n,
              i,
              c
            ) : (y._visibility |= 4, js(
              a,
              n,
              i,
              c,
              (n.subtreeFlags & 10256) !== 0
            )), h & 2048 && tr(
              n.alternate,
              n
            );
            break;
          case 24:
            tu(
              a,
              n,
              i,
              c
            ), h & 2048 && xo(n.alternate, n);
            break;
          default:
            tu(
              a,
              n,
              i,
              c
            );
        }
      }
      function js(a, n, i, c, h) {
        for (h = h && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
          var y = a, R = n, z = i, w = c, he = R.flags;
          switch (R.tag) {
            case 0:
            case 11:
            case 15:
              js(
                y,
                R,
                z,
                w,
                h
              ), pi(8, R);
              break;
            case 23:
              break;
            case 22:
              var Oe = R.stateNode;
              R.memoizedState !== null ? Oe._visibility & 4 ? js(
                y,
                R,
                z,
                w,
                h
              ) : va(
                y,
                R
              ) : (Oe._visibility |= 4, js(
                y,
                R,
                z,
                w,
                h
              )), h && he & 2048 && tr(
                R.alternate,
                R
              );
              break;
            case 24:
              js(
                y,
                R,
                z,
                w,
                h
              ), h && he & 2048 && xo(R.alternate, R);
              break;
            default:
              js(
                y,
                R,
                z,
                w,
                h
              );
          }
          n = n.sibling;
        }
      }
      function va(a, n) {
        if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; ) {
            var i = a, c = n, h = c.flags;
            switch (c.tag) {
              case 22:
                va(i, c), h & 2048 && tr(
                  c.alternate,
                  c
                );
                break;
              case 24:
                va(i, c), h & 2048 && xo(
                  c.alternate,
                  c
                );
                break;
              default:
                va(i, c);
            }
            n = n.sibling;
          }
      }
      function hi(a) {
        if (a.subtreeFlags & ss)
          for (a = a.child; a !== null; )
            If(a), a = a.sibling;
      }
      function If(a) {
        switch (a.tag) {
          case 26:
            hi(a), a.flags & ss && (a.memoizedState !== null ? $i(
              Ll,
              a.memoizedState,
              a.memoizedProps
            ) : bd(a.type, a.memoizedProps));
            break;
          case 5:
            hi(a), a.flags & ss && bd(a.type, a.memoizedProps);
            break;
          case 3:
          case 4:
            if (Pn) {
              var n = Ll;
              Ll = _r(
                a.stateNode.containerInfo
              ), hi(a), Ll = n;
            } else hi(a);
            break;
          case 22:
            a.memoizedState === null && (n = a.alternate, n !== null && n.memoizedState !== null ? (n = ss, ss = 16777216, hi(a), ss = n) : hi(a));
            break;
          default:
            hi(a);
        }
      }
      function wf(a) {
        var n = a.alternate;
        if (n !== null && (a = n.child, a !== null)) {
          n.child = null;
          do
            n = a.sibling, a.sibling = null, a = n;
          while (a !== null);
        }
      }
      function Ls(a) {
        var n = a.deletions;
        if ((a.flags & 16) !== 0) {
          if (n !== null)
            for (var i = 0; i < n.length; i++) {
              var c = n[i];
              Ka = c, nr(
                c,
                a
              );
            }
          wf(a);
        }
        if (a.subtreeFlags & 10256)
          for (a = a.child; a !== null; )
            Pf(a), a = a.sibling;
      }
      function Pf(a) {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Ls(a), a.flags & 2048 && kl(9, a, a.return);
            break;
          case 3:
            Ls(a);
            break;
          case 12:
            Ls(a);
            break;
          case 22:
            var n = a.stateNode;
            a.memoizedState !== null && n._visibility & 4 && (a.return === null || a.return.tag !== 13) ? (n._visibility &= -5, vi(a)) : Ls(a);
            break;
          default:
            Ls(a);
        }
      }
      function vi(a) {
        var n = a.deletions;
        if ((a.flags & 16) !== 0) {
          if (n !== null)
            for (var i = 0; i < n.length; i++) {
              var c = n[i];
              Ka = c, nr(
                c,
                a
              );
            }
          wf(a);
        }
        for (a = a.child; a !== null; ) {
          switch (n = a, n.tag) {
            case 0:
            case 11:
            case 15:
              kl(8, n, n.return), vi(n);
              break;
            case 22:
              i = n.stateNode, i._visibility & 4 && (i._visibility &= -5, vi(n));
              break;
            default:
              vi(n);
          }
          a = a.sibling;
        }
      }
      function nr(a, n) {
        for (; Ka !== null; ) {
          var i = Ka;
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              kl(8, i, n);
              break;
            case 23:
            case 22:
              if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                var c = i.memoizedState.cachePool.pool;
                c != null && c.refCount++;
              }
              break;
            case 24:
              xs(i.memoizedState.cache);
          }
          if (c = i.child, c !== null) c.return = i, Ka = c;
          else
            e: for (i = a; Ka !== null; ) {
              c = Ka;
              var h = c.sibling, y = c.return;
              if (qm(c), c === i) {
                Ka = null;
                break e;
              }
              if (h !== null) {
                h.return = y, Ka = h;
                break e;
              }
              Ka = y;
            }
        }
      }
      function lr(a) {
        var n = Bd(a);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string")
            throw Error(p(364));
          return n;
        }
        if (a = Md(a), a === null) throw Error(p(362));
        return a.stateNode.current;
      }
      function ur(a, n) {
        var i = a.tag;
        switch (n.$$typeof) {
          case Vr:
            if (a.type === n.value) return !0;
            break;
          case Fr:
            e: {
              for (n = n.value, a = [a, 0], i = 0; i < a.length; ) {
                var c = a[i++], h = c.tag, y = a[i++], R = n[y];
                if (h !== 5 && h !== 26 && h !== 27 || !Fs(c)) {
                  for (; R != null && ur(c, R); )
                    y++, R = n[y];
                  if (y === n.length) {
                    n = !0;
                    break e;
                  } else
                    for (c = c.child; c !== null; )
                      a.push(c, y), c = c.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Zr:
            if ((i === 5 || i === 26 || i === 27) && up(a.stateNode, n.value))
              return !0;
            break;
          case nc:
            if ((i === 5 || i === 6 || i === 26 || i === 27) && (a = lp(a), a !== null && 0 <= a.indexOf(n.value)))
              return !0;
            break;
          case ac:
            if ((i === 5 || i === 26 || i === 27) && (a = a.memoizedProps["data-testname"], typeof a == "string" && a.toLowerCase() === n.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(p(365));
        }
        return !1;
      }
      function ir(a) {
        switch (a.$$typeof) {
          case Vr:
            return "<" + (A(a.value) || "Unknown") + ">";
          case Fr:
            return ":has(" + (ir(a) || "") + ")";
          case Zr:
            return '[role="' + a.value + '"]';
          case nc:
            return '"' + a.value + '"';
          case ac:
            return '[data-testname="' + a.value + '"]';
          default:
            throw Error(p(365));
        }
      }
      function sr(a, n) {
        var i = [];
        a = [a, 0];
        for (var c = 0; c < a.length; ) {
          var h = a[c++], y = h.tag, R = a[c++], z = n[R];
          if (y !== 5 && y !== 26 && y !== 27 || !Fs(h)) {
            for (; z != null && ur(h, z); )
              R++, z = n[R];
            if (R === n.length) i.push(h);
            else
              for (h = h.child; h !== null; )
                a.push(h, R), h = h.sibling;
          }
        }
        return i;
      }
      function zo(a, n) {
        if (!gi) throw Error(p(363));
        a = lr(a), a = sr(a, n), n = [], a = Array.from(a);
        for (var i = 0; i < a.length; ) {
          var c = a[i++], h = c.tag;
          if (h === 5 || h === 26 || h === 27)
            Fs(c) || n.push(c.stateNode);
          else
            for (c = c.child; c !== null; )
              a.push(c), c = c.sibling;
        }
        return n;
      }
      function An() {
        if ((Qt & 2) !== 0 && gt !== 0)
          return gt & -gt;
        if ($e.T !== null) {
          var a = ws;
          return a !== 0 ? a : Ru();
        }
        return Cd();
      }
      function Wf() {
        el === 0 && (el = (gt & 536870912) === 0 || bt ? ne() : 536870912);
        var a = fn.current;
        return a !== null && (a.flags |= 32), el;
      }
      function qa(a, n, i) {
        (a === qt && Yt === 2 || a.cancelPendingCommit !== null) && (yi(a, 0), Hl(
          a,
          gt,
          el,
          !1
        )), De(a, i), ((Qt & 2) === 0 || a !== qt) && (a === qt && ((Qt & 2) === 0 && (cs |= i), ua === 4 && Hl(
          a,
          gt,
          el,
          !1
        )), On(a));
      }
      function or(a, n, i) {
        if ((Qt & 6) !== 0) throw Error(p(327));
        var c = !i && (n & 60) === 0 && (n & a.expiredLanes) === 0 || W(a, n), h = c ? Ko(a, n) : Jo(a, n, !0), y = c;
        do {
          if (h === 0) {
            os && !c && Hl(a, n, 0, !1);
            break;
          } else if (h === 6)
            Hl(
              a,
              n,
              0,
              !du
            );
          else {
            if (i = a.current.alternate, y && !Im(i)) {
              h = Jo(a, n, !1), y = !1;
              continue;
            }
            if (h === 2) {
              if (y = n, a.errorRecoveryDisabledLanes & y)
                var R = 0;
              else
                R = a.pendingLanes & -536870913, R = R !== 0 ? R : R & 536870912 ? 536870912 : 0;
              if (R !== 0) {
                n = R;
                e: {
                  var z = a;
                  h = Ca;
                  var w = gn && z.current.memoizedState.isDehydrated;
                  if (w && (yi(z, R).flags |= 256), R = Jo(
                    z,
                    R,
                    !1
                  ), R !== 2) {
                    if (Wd && !w) {
                      z.errorRecoveryDisabledLanes |= y, cs |= y, h = 4;
                      break e;
                    }
                    y = Jl, Jl = h, y !== null && jo(y);
                  }
                  h = R;
                }
                if (y = !1, h !== 2) continue;
              }
            }
            if (h === 1) {
              yi(a, 0), Hl(a, n, 0, !0);
              break;
            }
            e: {
              switch (c = a, h) {
                case 0:
                case 1:
                  throw Error(p(345));
                case 4:
                  if ((n & 4194176) === n) {
                    Hl(
                      c,
                      n,
                      el,
                      !du
                    );
                    break e;
                  }
                  break;
                case 2:
                  Jl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(p(329));
              }
              if (c.finishedWork = i, c.finishedLanes = n, (n & 62914560) === n && (y = em + 300 - yl(), 10 < y)) {
                if (Hl(
                  c,
                  n,
                  el,
                  !du
                ), oe(c, 0) !== 0) break e;
                c.timeoutHandle = Vo(
                  kf.bind(
                    null,
                    c,
                    i,
                    Jl,
                    uc,
                    $d,
                    n,
                    el,
                    cs,
                    ao,
                    du,
                    2,
                    -0,
                    0
                  ),
                  y
                );
                break e;
              }
              kf(
                c,
                i,
                Jl,
                uc,
                $d,
                n,
                el,
                cs,
                ao,
                du,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        On(a);
      }
      function jo(a) {
        Jl === null ? Jl = a : Jl.push.apply(
          Jl,
          a
        );
      }
      function kf(a, n, i, c, h, y, R, z, w, he, Oe, Je, ze) {
        var Ie = n.subtreeFlags;
        if ((Ie & 8192 || (Ie & 16785408) === 16785408) && (wn(), If(n), n = la(), n !== null)) {
          a.cancelPendingCommit = n(
            Ei.bind(
              null,
              a,
              i,
              c,
              h,
              R,
              z,
              w,
              1,
              Je,
              ze
            )
          ), Hl(a, y, R, !he);
          return;
        }
        Ei(
          a,
          i,
          c,
          h,
          R,
          z,
          w,
          Oe,
          Je,
          ze
        );
      }
      function Im(a) {
        for (var n = a; ; ) {
          var i = n.tag;
          if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
            for (var c = 0; c < i.length; c++) {
              var h = i[c], y = h.getSnapshot;
              h = h.value;
              try {
                if (!Bn(y(), h)) return !1;
              } catch {
                return !1;
              }
            }
          if (i = n.child, n.subtreeFlags & 16384 && i !== null)
            i.return = n, n = i;
          else {
            if (n === a) break;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a) return !0;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return !0;
      }
      function Hl(a, n, i, c) {
        n &= ~kd, n &= ~cs, a.suspendedLanes |= n, a.pingedLanes &= ~n, c && (a.warmLanes |= n), c = a.expirationTimes;
        for (var h = n; 0 < h; ) {
          var y = 31 - Sn(h), R = 1 << y;
          c[y] = -1, h &= ~R;
        }
        i !== 0 && te(a, i, n);
      }
      function $f() {
        return (Qt & 6) === 0 ? (Tt(0), !1) : !0;
      }
      function Ol() {
        if (ke !== null) {
          if (Yt === 0)
            var a = ke.return;
          else
            a = ke, jl = _i = null, Ee(a), Ws = null, $o = 0, a = ke;
          for (; a !== null; )
            Zc(a.alternate, a), a = a.return;
          ke = null;
        }
      }
      function yi(a, n) {
        a.finishedWork = null, a.finishedLanes = 0;
        var i = a.timeoutHandle;
        i !== Br && (a.timeoutHandle = Br, Pi(i)), i = a.cancelPendingCommit, i !== null && (a.cancelPendingCommit = null, i()), Ol(), qt = a, ke = i = pl(a.current, null), gt = n, Yt = 0, Ln = null, du = !1, os = W(a, n), Wd = !1, ao = el = kd = cs = Hi = ua = 0, Jl = Ca = null, $d = !1, (n & 8) !== 0 && (n |= n & 32);
        var c = a.entangledLanes;
        if (c !== 0)
          for (a = a.entanglements, c &= n; 0 < c; ) {
            var h = 31 - Sn(c), y = 1 << h;
            n |= a[h], c &= ~y;
          }
        return mu = n, Rl(), i;
      }
      function wm(a, n) {
        dt = null, $e.H = ru, n === ou ? (n = Aa(), Yt = 3) : n === wu ? (n = Aa(), Yt = 4) : Yt = n === Id ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ln = n, ke === null && (ua = 1, Ce(
          a,
          fe(n, a.current)
        ));
      }
      function cr() {
        var a = fn.current;
        return a === null ? !0 : (gt & 4194176) === gt ? cu === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? a === cu : !1;
      }
      function Lo() {
        var a = $e.H;
        return $e.H = ru, a === null ? ru : a;
      }
      function zu() {
        var a = $e.A;
        return $e.A = av, a;
      }
      function Nl() {
        ua = 4, du || (gt & 4194176) !== gt && fn.current !== null || (os = !0), (Hi & 134217727) === 0 && (cs & 134217727) === 0 || qt === null || Hl(
          qt,
          gt,
          el,
          !1
        );
      }
      function Jo(a, n, i) {
        var c = Qt;
        Qt |= 2;
        var h = Lo(), y = zu();
        (qt !== a || gt !== n) && (uc = null, yi(a, n)), n = !1;
        var R = ua;
        e: do
          try {
            if (Yt !== 0 && ke !== null) {
              var z = ke, w = Ln;
              switch (Yt) {
                case 8:
                  Ol(), R = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  fn.current === null && (n = !0);
                  var he = Yt;
                  if (Yt = 0, Ln = null, ju(a, z, w, he), i && os) {
                    R = 0;
                    break e;
                  }
                  break;
                default:
                  he = Yt, Yt = 0, Ln = null, ju(a, z, w, he);
              }
            }
            ed(), R = ua;
            break;
          } catch (Oe) {
            wm(a, Oe);
          }
        while (!0);
        return n && a.shellSuspendCounter++, jl = _i = null, Qt = c, $e.H = h, $e.A = y, ke === null && (qt = null, gt = 0, Rl()), R;
      }
      function ed() {
        for (; ke !== null; ) Ai(ke);
      }
      function Ko(a, n) {
        var i = Qt;
        Qt |= 2;
        var c = Lo(), h = zu();
        qt !== a || gt !== n ? (uc = null, lc = yl() + 500, yi(a, n)) : os = W(
          a,
          n
        );
        e: do
          try {
            if (Yt !== 0 && ke !== null) {
              n = ke;
              var y = Ln;
              t: switch (Yt) {
                case 1:
                  Yt = 0, Ln = null, ju(a, n, y, 1);
                  break;
                case 2:
                  if (Gn(y)) {
                    Yt = 0, Ln = null, Pt(n);
                    break;
                  }
                  n = function() {
                    Yt === 2 && qt === a && (Yt = 7), On(a);
                  }, y.then(n, n);
                  break e;
                case 3:
                  Yt = 7;
                  break e;
                case 4:
                  Yt = 5;
                  break e;
                case 7:
                  Gn(y) ? (Yt = 0, Ln = null, Pt(n)) : (Yt = 0, Ln = null, ju(a, n, y, 7));
                  break;
                case 5:
                  var R = null;
                  switch (ke.tag) {
                    case 26:
                      R = ke.memoizedState;
                    case 5:
                    case 27:
                      var z = ke, w = z.type, he = z.pendingProps;
                      if (R ? Cp(R) : Td(w, he)) {
                        Yt = 0, Ln = null;
                        var Oe = z.sibling;
                        if (Oe !== null) ke = Oe;
                        else {
                          var Je = z.return;
                          Je !== null ? (ke = Je, Qo(Je)) : ke = null;
                        }
                        break t;
                      }
                  }
                  Yt = 0, Ln = null, ju(a, n, y, 5);
                  break;
                case 6:
                  Yt = 0, Ln = null, ju(a, n, y, 6);
                  break;
                case 8:
                  Ol(), ua = 6;
                  break e;
                default:
                  throw Error(p(462));
              }
            }
            rr();
            break;
          } catch (ze) {
            wm(a, ze);
          }
        while (!0);
        return jl = _i = null, $e.H = c, $e.A = h, Qt = i, ke !== null ? 0 : (qt = null, gt = 0, Rl(), ua);
      }
      function rr() {
        for (; ke !== null && !ue(); )
          Ai(ke);
      }
      function Ai(a) {
        var n = jc(
          a.alternate,
          a,
          mu
        );
        a.memoizedProps = a.pendingProps, n === null ? Qo(a) : ke = n;
      }
      function Pt(a) {
        var n = a, i = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = Us(
              i,
              n,
              n.pendingProps,
              n.type,
              void 0,
              gt
            );
            break;
          case 11:
            n = Us(
              i,
              n,
              n.pendingProps,
              n.type.render,
              n.ref,
              gt
            );
            break;
          case 5:
            Ee(n);
          default:
            Zc(i, n), n = ke = Wt(n, mu), n = jc(i, n, mu);
        }
        a.memoizedProps = a.pendingProps, n === null ? Qo(a) : ke = n;
      }
      function ju(a, n, i, c) {
        jl = _i = null, Ee(n), Ws = null, $o = 0;
        var h = n.return;
        try {
          if (Lf(
            a,
            h,
            n,
            i,
            gt
          )) {
            ua = 1, Ce(
              a,
              fe(i, a.current)
            ), ke = null;
            return;
          }
        } catch (y) {
          if (h !== null) throw ke = h, y;
          ua = 1, Ce(
            a,
            fe(i, a.current)
          ), ke = null;
          return;
        }
        n.flags & 32768 ? (bt || c === 1 ? a = !0 : os || (gt & 536870912) !== 0 ? a = !1 : (du = a = !0, (c === 2 || c === 3 || c === 6) && (c = fn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), fr(n, a)) : Qo(n);
      }
      function Qo(a) {
        var n = a;
        do {
          if ((n.flags & 32768) !== 0) {
            fr(
              n,
              du
            );
            return;
          }
          a = n.return;
          var i = Qf(
            n.alternate,
            n,
            mu
          );
          if (i !== null) {
            ke = i;
            return;
          }
          if (n = n.sibling, n !== null) {
            ke = n;
            return;
          }
          ke = n = a;
        } while (n !== null);
        ua === 0 && (ua = 5);
      }
      function fr(a, n) {
        do {
          var i = Fc(a.alternate, a);
          if (i !== null) {
            i.flags &= 32767, ke = i;
            return;
          }
          if (i = a.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (a = a.sibling, a !== null)) {
            ke = a;
            return;
          }
          ke = a = i;
        } while (a !== null);
        ua = 6, ke = null;
      }
      function Ei(a, n, i, c, h, y, R, z, w, he) {
        var Oe = $e.T, Je = Xu();
        try {
          cn(2), $e.T = null, Yo(
            a,
            n,
            i,
            c,
            Je,
            h,
            y,
            R,
            z,
            w,
            he
          );
        } finally {
          $e.T = Oe, cn(Je);
        }
      }
      function Yo(a, n, i, c, h, y, R, z) {
        do
          au();
        while (Tn !== null);
        if ((Qt & 6) !== 0) throw Error(p(327));
        var w = a.finishedWork;
        if (c = a.finishedLanes, w === null) return null;
        if (a.finishedWork = null, a.finishedLanes = 0, w === a.current) throw Error(p(177));
        a.callbackNode = null, a.callbackPriority = 0, a.cancelPendingCommit = null;
        var he = w.lanes | w.childLanes;
        if (he |= su, Xe(
          a,
          c,
          he,
          y,
          R,
          z
        ), a === qt && (ke = qt = null, gt = 0), (w.subtreeFlags & 10256) === 0 && (w.flags & 10256) === 0 || no || (no = !0, $a = he, tm = i, ud(xr, function() {
          return au(), null;
        })), i = (w.flags & 15990) !== 0, (w.subtreeFlags & 15990) !== 0 || i ? (i = $e.T, $e.T = null, y = Xu(), cn(2), R = Qt, Qt |= 4, Zf(a, w), er(w, a), Ad(a.containerInfo), a.current = w, Zm(a, w.alternate, w), wo(), Qt = R, cn(y), $e.T = i) : a.current = w, no ? (no = !1, Tn = a, Sl = c) : dr(a, he), he = a.pendingLanes, he === 0 && (pu = null), D(w.stateNode), On(a), n !== null)
          for (h = a.onRecoverableError, w = 0; w < n.length; w++)
            he = n[w], h(he.value, {
              componentStack: he.stack
            });
        return (Sl & 3) !== 0 && au(), he = a.pendingLanes, (c & 4194218) !== 0 && (he & 42) !== 0 ? a === lo ? ic++ : (ic = 0, lo = a) : ic = 0, Tt(0), null;
      }
      function dr(a, n) {
        (a.pooledCacheLanes &= n) === 0 && (n = a.pooledCache, n != null && (a.pooledCache = null, xs(n)));
      }
      function au() {
        if (Tn !== null) {
          var a = Tn, n = $a;
          $a = 0;
          var i = Ve(Sl), c = 32 > i ? 32 : i;
          i = $e.T;
          var h = Xu();
          try {
            if (cn(c), $e.T = null, Tn === null)
              var y = !1;
            else {
              c = tm, tm = null;
              var R = Tn, z = Sl;
              if (Tn = null, Sl = 0, (Qt & 6) !== 0)
                throw Error(p(331));
              var w = Qt;
              if (Qt |= 4, Pf(R.current), ar(
                R,
                R.current,
                z,
                c
              ), Qt = w, Tt(0, !1), jn && typeof jn.onPostCommitFiberRoot == "function")
                try {
                  jn.onPostCommitFiberRoot(ts, R);
                } catch {
                }
              y = !0;
            }
            return y;
          } finally {
            cn(h), $e.T = i, dr(a, n);
          }
        }
        return !1;
      }
      function td(a, n, i) {
        n = fe(i, n), n = Ns(a.stateNode, n, 2), a = Jt(a, n, 2), a !== null && (De(a, 2), On(a));
      }
      function ot(a, n, i) {
        if (a.tag === 3)
          td(a, a, i);
        else
          for (; n !== null; ) {
            if (n.tag === 3) {
              td(
                n,
                a,
                i
              );
              break;
            } else if (n.tag === 1) {
              var c = n.stateNode;
              if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (pu === null || !pu.has(c))) {
                a = fe(i, a), i = ra(2), c = Jt(n, i, 2), c !== null && (Hc(
                  i,
                  c,
                  n,
                  a
                ), De(c, 2), On(c));
                break;
              }
            }
            n = n.return;
          }
      }
      function mr(a, n, i) {
        var c = a.pingCache;
        if (c === null) {
          c = a.pingCache = new Up();
          var h = /* @__PURE__ */ new Set();
          c.set(n, h);
        } else
          h = c.get(n), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(n, h));
        h.has(i) || (Wd = !0, h.add(i), a = ad.bind(null, a, n, i), n.then(a, a));
      }
      function ad(a, n, i) {
        var c = a.pingCache;
        c !== null && c.delete(n), a.pingedLanes |= a.suspendedLanes & i, a.warmLanes &= ~i, qt === a && (gt & i) === i && (ua === 4 || ua === 3 && (gt & 62914560) === gt && 300 > yl() - em ? (Qt & 2) === 0 && yi(a, 0) : kd |= i, ao === gt && (ao = 0)), On(a);
      }
      function nd(a, n) {
        n === 0 && (n = ie()), a = Hn(a, n), a !== null && (De(a, n), On(a));
      }
      function Pm(a) {
        var n = a.memoizedState, i = 0;
        n !== null && (i = n.retryLane), nd(a, i);
      }
      function ld(a, n) {
        var i = 0;
        switch (a.tag) {
          case 13:
            var c = a.stateNode, h = a.memoizedState;
            h !== null && (i = h.retryLane);
            break;
          case 19:
            c = a.stateNode;
            break;
          case 22:
            c = a.stateNode._retryCache;
            break;
          default:
            throw Error(p(314));
        }
        c !== null && c.delete(n), nd(a, i);
      }
      function ud(a, n) {
        return Io(a, n);
      }
      function Wm(a, n, i, c) {
        this.tag = a, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Js(a) {
        return a = a.prototype, !(!a || !a.isReactComponent);
      }
      function pl(a, n) {
        var i = a.alternate;
        return i === null ? (i = r(
          a.tag,
          n,
          a.key,
          a.mode
        ), i.elementType = a.elementType, i.type = a.type, i.stateNode = a.stateNode, i.alternate = a, a.alternate = i) : (i.pendingProps = n, i.type = a.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = a.flags & 31457280, i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, n = a.dependencies, i.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, i.sibling = a.sibling, i.index = a.index, i.ref = a.ref, i.refCleanup = a.refCleanup, i;
      }
      function Wt(a, n) {
        a.flags &= 31457282;
        var i = a.alternate;
        return i === null ? (a.childLanes = 0, a.lanes = n, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, n = i.dependencies, a.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), a;
      }
      function pr(a, n, i, c, h, y) {
        var R = 0;
        if (c = a, typeof a == "function") Js(a) && (R = 1);
        else if (typeof a == "string")
          R = Pn && fa ? jd(a, i, Wa.current) ? 26 : Nr(a) ? 27 : 5 : Pn ? jd(
            a,
            i,
            Wa.current
          ) ? 26 : 5 : fa && Nr(a) ? 27 : 5;
        else
          e: switch (a) {
            case wi:
              return qi(
                i.children,
                h,
                y,
                n
              );
            case fd:
              R = 8, h |= 24;
              break;
            case yr:
              return a = r(12, i, n, h | 2), a.elementType = yr, a.lanes = y, a;
            case Er:
              return a = r(13, i, n, h), a.elementType = Er, a.lanes = y, a;
            case pd:
              return a = r(19, i, n, h), a.elementType = pd, a.lanes = y, a;
            case vl:
              return id(i, h, y, n);
            default:
              if (typeof a == "object" && a !== null)
                switch (a.$$typeof) {
                  case dd:
                  case Ul:
                    R = 10;
                    break e;
                  case Ar:
                    R = 9;
                    break e;
                  case md:
                    R = 11;
                    break e;
                  case gr:
                    R = 14;
                    break e;
                  case Ju:
                    R = 16, c = null;
                    break e;
                }
              R = 29, i = Error(
                p(
                  130,
                  a === null ? "null" : typeof a,
                  ""
                )
              ), c = null;
          }
        return n = r(R, i, n, h), n.elementType = a, n.type = c, n.lanes = y, n;
      }
      function qi(a, n, i, c) {
        return a = r(7, a, c, n), a.lanes = i, a;
      }
      function id(a, n, i, c) {
        a = r(22, a, c, n), a.elementType = vl, a.lanes = i;
        var h = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var y = h._current;
            if (y === null) throw Error(p(456));
            if ((h._pendingVisibility & 2) === 0) {
              var R = Hn(y, 2);
              R !== null && (h._pendingVisibility |= 2, qa(R, y, 2));
            }
          },
          attach: function() {
            var y = h._current;
            if (y === null) throw Error(p(456));
            if ((h._pendingVisibility & 2) !== 0) {
              var R = Hn(y, 2);
              R !== null && (h._pendingVisibility &= -3, qa(R, y, 2));
            }
          }
        };
        return a.stateNode = h, a;
      }
      function hl(a, n, i) {
        return a = r(6, a, null, n), a.lanes = i, a;
      }
      function hr(a, n, i) {
        return n = r(
          4,
          a.children !== null ? a.children : [],
          a.key,
          n
        ), n.lanes = i, n.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation
        }, n;
      }
      function sd(a, n, i, c, h, y, R, z) {
        this.tag = 1, this.containerInfo = a, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Br, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = me(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = me(0), this.hiddenUpdates = me(null), this.identifierPrefix = c, this.onUncaughtError = h, this.onCaughtError = y, this.onRecoverableError = R, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Ks(a, n, i, c, h, y, R, z, w, he, Oe, Je) {
        return a = new sd(
          a,
          n,
          i,
          R,
          z,
          w,
          he,
          Je
        ), n = 1, y === !0 && (n |= 24), y = r(3, null, null, n), a.current = y, y.stateNode = a, n = Yc(), n.refCount++, a.pooledCache = n, n.refCount++, y.memoizedState = {
          element: c,
          isDehydrated: i,
          cache: n
        }, Un(y), a;
      }
      function Ii(a) {
        return a ? (a = Ti, a) : Ti;
      }
      function od(a) {
        var n = a._reactInternals;
        if (n === void 0)
          throw typeof a.render == "function" ? Error(p(188)) : (a = Object.keys(a).join(","), Error(p(268, a)));
        return a = O(n), a = a !== null ? N(a) : null, a === null ? null : Ys(a.stateNode);
      }
      function vr(a, n, i, c, h, y) {
        h = Ii(h), c.context === null ? c.context = h : c.pendingContext = h, c = Na(n), c.payload = { element: i }, y = y === void 0 ? null : y, y !== null && (c.callback = y), i = Jt(a, c, n), i !== null && (qa(i, a, n), Ua(i, a, n));
      }
      function cd(a, n) {
        if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
          var i = a.retryLane;
          a.retryLane = i !== 0 && i < n ? i : n;
        }
      }
      function rd(a, n) {
        cd(a, n), (a = a.alternate) && cd(a, n);
      }
      var vt = {}, km = So, qn = cE(), Lu = Object.assign, In = Symbol.for("react.element"), Xo = Symbol.for("react.transitional.element"), Qs = Symbol.for("react.portal"), wi = Symbol.for("react.fragment"), fd = Symbol.for("react.strict_mode"), yr = Symbol.for("react.profiler"), dd = Symbol.for("react.provider"), Ar = Symbol.for("react.consumer"), Ul = Symbol.for("react.context"), md = Symbol.for("react.forward_ref"), Er = Symbol.for("react.suspense"), pd = Symbol.for("react.suspense_list"), gr = Symbol.for("react.memo"), Ju = Symbol.for("react.lazy"), vl = Symbol.for("react.offscreen"), hd = Symbol.for("react.memo_cache_sentinel"), vd = Symbol.iterator, jh = Symbol.for("react.client.reference"), $e = km.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, yd, En, Sr = !1, on = Array.isArray, $m = u.rendererVersion, Lh = u.rendererPackageName, Gl = u.extraDevToolsConfig, Ys = u.getPublicInstance, Xs = u.getRootHostContext, ep = u.getChildHostContext, Ku = u.prepareForCommit, Ad = u.resetAfterCommit, Ed = u.createInstance, nu = u.appendInitialChild, gd = u.finalizeInitialChildren, Qu = u.shouldSetTextContent, Sd = u.createTextInstance, Vo = u.scheduleTimeout, Pi = u.cancelTimeout, Br = u.noTimeout, lu = u.isPrimaryRenderer;
      u.warnsIfNotActing;
      var Ea = u.supportsMutation, Yu = u.supportsPersistence, gn = u.supportsHydration, Bd = u.getInstanceFromNode;
      u.beforeActiveInstanceBlur, u.afterActiveInstanceBlur;
      var tp = u.preparePortalMount;
      u.prepareScopeUpdate, u.getInstanceFromScope;
      var cn = u.setCurrentUpdatePriority, Xu = u.getCurrentUpdatePriority, Cd = u.resolveUpdatePriority;
      u.resolveEventType, u.resolveEventTimeStamp;
      var ap = u.shouldAttemptEagerTransition, Cr = u.detachDeletedInstance;
      u.requestPostPaintCallback;
      var Jh = u.maySuspendCommit, Td = u.preloadInstance, wn = u.startSuspendingCommit, bd = u.suspendInstance, la = u.waitForCommitToBeReady, Wi = u.NotPendingTransition, Vu = u.HostTransitionContext, np = u.resetFormInstance;
      u.bindToConsole;
      var Kh = u.supportsMicrotasks, Fu = u.scheduleMicrotask, gi = u.supportsTestSelectors, Md = u.findFiberRoot, Vs = u.getBoundingRect, lp = u.getTextContent, Fs = u.isHiddenSubtree, up = u.matchAccessibilityRole, ip = u.setFocusIfFocusable, Rd = u.setupIntersectionObserver, Dd = u.appendChild, sp = u.appendChildToContainer, Qh = u.commitTextUpdate, Yh = u.commitMount, op = u.commitUpdate, cp = u.insertBefore, Xh = u.insertInContainerBefore, Zs = u.removeChild, Tr = u.removeChildFromContainer, _d = u.resetTextContent, Hd = u.hideInstance, Vh = u.hideTextInstance, Fh = u.unhideInstance, rp = u.unhideTextInstance, Si = u.clearContainer, fp = u.cloneInstance, Gt = u.createContainerChildSet, br = u.appendChildToContainerChildSet, Zh = u.finalizeContainerChildren, Od = u.replaceContainerChildren, dp = u.cloneHiddenInstance, mp = u.cloneHiddenTextInstance, Fo = u.isSuspenseInstancePending, Mr = u.isSuspenseInstanceFallback, pp = u.getSuspenseInstanceFallbackErrorDetails, hp = u.registerSuspenseInstanceRetry, Zo = u.canHydrateFormStateMarker, qh = u.isFormStateMarkerMatching, vp = u.getNextHydratableSibling, Bi = u.getFirstHydratableChild, Nd = u.getFirstHydratableChildWithinContainer, yp = u.getFirstHydratableChildWithinSuspenseInstance, Ap = u.canHydrateInstance, Ud = u.canHydrateTextInstance, Ih = u.canHydrateSuspenseInstance, Gd = u.hydrateInstance, Ci = u.hydrateTextInstance, Ep = u.hydrateSuspenseInstance, xd = u.getNextHydratableInstanceAfterSuspenseInstance, Rr = u.commitHydratedContainer, ki = u.commitHydratedSuspenseInstance, gp = u.clearSuspenseBoundary, zd = u.clearSuspenseBoundaryFromContainer, Dr = u.shouldDeleteUnhydratedTailInstances;
      u.diffHydratedPropsForDevWarnings, u.diffHydratedTextForDevWarnings, u.describeHydratableInstanceForDevWarnings;
      var wh = u.validateHydratableInstance, Sp = u.validateHydratableTextInstance, Pn = u.supportsResources, jd = u.isHostHoistableType, _r = u.getHoistableRoot, Ld = u.getResource, Jd = u.acquireResource, Hr = u.releaseResource, Ph = u.hydrateHoistable, Bp = u.mountHoistable, pt = u.unmountHoistable, Wh = u.createHoistableInstance, zn = u.prepareToCommitHoistables, Ia = u.mayResourceSuspendCommit, Cp = u.preloadResource, $i = u.suspendResource, fa = u.supportsSingletons, es = u.resolveSingletonInstance, Or = u.clearSingleton, Kd = u.acquireSingletonInstance, kh = u.releaseSingletonInstance, Nr = u.isHostSingletonType, xl = [], uu = -1, Ti = {}, Sn = Math.clz32 ? Math.clz32 : $, Ur = Math.log, Wn = Math.LN2, qo = 128, Gr = 4194304, Io = qn.unstable_scheduleCallback, Qd = qn.unstable_cancelCallback, ue = qn.unstable_shouldYield, wo = qn.unstable_requestPaint, yl = qn.unstable_now, Yd = qn.unstable_ImmediatePriority, Tp = qn.unstable_UserBlockingPriority, xr = qn.unstable_NormalPriority, bp = qn.unstable_IdlePriority, Mp = qn.log, Rp = qn.unstable_setDisableYieldValue, ts = null, jn = null, Bn = typeof Object.is == "function" ? Object.is : X, zr = /* @__PURE__ */ new WeakMap(), wa = [], Pa = 0, La = null, jr = 0, Al = [], kn = 0, El = null, Zu = 1, qu = "", Wa = Z(null), Po = Z(null), bi = Z(null), qs = Z(null), rn = null, _a = null, bt = !1, zl = null, iu = !1, Wo = Error(p(519)), ga = [], ya = 0, su = 0, Cn = null, as = null, Xd = !1, ka = !1, Iu = !1, Is = 0, ko = null, Vd = 0, ws = 0, ns = null, Mi = !1, Lr = !1, $h = Object.prototype.hasOwnProperty, ou = Error(p(460)), wu = Error(p(474)), Jr = { then: function() {
      } }, Ps = null, Ws = null, $o = 0, gl = Yn(!0), Dp = Yn(!1), ks = Z(null), Kr = Z(0), fn = Z(null), cu = null, Ha = Z(0), Ri = 0, dt = null, Kt = null, Sa = null, Qr = !1, $s = !1, ls = !1, Yr = 0, ec = 0, eo = null, _p = 0, Fd = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, ru = {
        readContext: Za,
        use: He,
        useCallback: wt,
        useContext: wt,
        useEffect: wt,
        useImperativeHandle: wt,
        useLayoutEffect: wt,
        useInsertionEffect: wt,
        useMemo: wt,
        useReducer: wt,
        useRef: wt,
        useState: wt,
        useDebugValue: wt,
        useDeferredValue: wt,
        useTransition: wt,
        useSyncExternalStore: wt,
        useId: wt
      };
      ru.useCacheRefresh = wt, ru.useMemoCache = wt, ru.useHostTransitionStatus = wt, ru.useFormState = wt, ru.useActionState = wt, ru.useOptimistic = wt;
      var us = {
        readContext: Za,
        use: He,
        useCallback: function(a, n) {
          return Be().memoizedState = [
            a,
            n === void 0 ? null : n
          ], a;
        },
        useContext: Za,
        useEffect: Rs,
        useImperativeHandle: function(a, n, i) {
          i = i != null ? i.concat([a]) : null, Ki(
            4194308,
            4,
            Bo.bind(null, n, a),
            i
          );
        },
        useLayoutEffect: function(a, n) {
          return Ki(4194308, 4, a, n);
        },
        useInsertionEffect: function(a, n) {
          Ki(4, 2, a, n);
        },
        useMemo: function(a, n) {
          var i = Be();
          n = n === void 0 ? null : n;
          var c = a();
          if (ls) {
            Y(!0);
            try {
              a();
            } finally {
              Y(!1);
            }
          }
          return i.memoizedState = [c, n], c;
        },
        useReducer: function(a, n, i) {
          var c = Be();
          if (i !== void 0) {
            var h = i(n);
            if (ls) {
              Y(!0);
              try {
                i(n);
              } finally {
                Y(!1);
              }
            }
          } else h = n;
          return c.memoizedState = c.baseState = h, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: h
          }, c.queue = a, a = a.dispatch = _c.bind(
            null,
            dt,
            a
          ), [c.memoizedState, a];
        },
        useRef: function(a) {
          var n = Be();
          return a = { current: a }, n.memoizedState = a;
        },
        useState: function(a) {
          a = Ct(a);
          var n = a.queue, i = zf.bind(
            null,
            dt,
            n
          );
          return n.dispatch = i, [a.memoizedState, i];
        },
        useDebugValue: Mc,
        useDeferredValue: function(a, n) {
          var i = Be();
          return Rc(i, a, n);
        },
        useTransition: function() {
          var a = Ct(!1);
          return a = xa.bind(
            null,
            dt,
            a.queue,
            !0,
            !1
          ), Be().memoizedState = a, [!1, a];
        },
        useSyncExternalStore: function(a, n, i) {
          var c = dt, h = Be();
          if (bt) {
            if (i === void 0)
              throw Error(p(407));
            i = i();
          } else {
            if (i = n(), qt === null)
              throw Error(p(349));
            (gt & 60) !== 0 || zt(c, n, i);
          }
          h.memoizedState = i;
          var y = { value: i, getSnapshot: n };
          return h.queue = y, Rs(Ft.bind(null, c, y, a), [
            a
          ]), c.flags |= 2048, Vn(
            9,
            Nt.bind(
              null,
              c,
              y,
              i,
              n
            ),
            { destroy: void 0 },
            null
          ), i;
        },
        useId: function() {
          var a = Be(), n = qt.identifierPrefix;
          if (bt) {
            var i = qu, c = Zu;
            i = (c & ~(1 << 32 - Sn(c) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = Yr++, 0 < i && (n += "H" + i.toString(32)), n += ":";
          } else
            i = _p++, n = ":" + n + "r" + i.toString(32) + ":";
          return a.memoizedState = n;
        },
        useCacheRefresh: function() {
          return Be().memoizedState = Dc.bind(
            null,
            dt
          );
        }
      };
      us.useMemoCache = xt, us.useHostTransitionStatus = Ds, us.useFormState = un, us.useActionState = un, us.useOptimistic = function(a) {
        var n = Be();
        n.memoizedState = n.baseState = a;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = i, n = Mo.bind(
          null,
          dt,
          !0,
          i
        ), i.dispatch = n, [a, n];
      };
      var Di = {
        readContext: Za,
        use: He,
        useCallback: Co,
        useContext: Za,
        useEffect: bc,
        useImperativeHandle: Uf,
        useInsertionEffect: Xm,
        useLayoutEffect: Nf,
        useMemo: Gf,
        useReducer: Fe,
        useRef: Ms,
        useState: function() {
          return Fe(Le);
        },
        useDebugValue: Mc,
        useDeferredValue: function(a, n) {
          var i = ye();
          return xf(
            i,
            Kt.memoizedState,
            a,
            n
          );
        },
        useTransition: function() {
          var a = Fe(Le)[0], n = ye().memoizedState;
          return [
            typeof a == "boolean" ? a : Se(a),
            n
          ];
        },
        useSyncExternalStore: Dt,
        useId: _s
      };
      Di.useCacheRefresh = bo, Di.useMemoCache = xt, Di.useHostTransitionStatus = Ds, Di.useFormState = ql, Di.useActionState = ql, Di.useOptimistic = function(a, n) {
        var i = ye();
        return ca(i, Kt, a, n);
      };
      var is = {
        readContext: Za,
        use: He,
        useCallback: Co,
        useContext: Za,
        useEffect: bc,
        useImperativeHandle: Uf,
        useInsertionEffect: Xm,
        useLayoutEffect: Nf,
        useMemo: Gf,
        useReducer: nt,
        useRef: Ms,
        useState: function() {
          return nt(Le);
        },
        useDebugValue: Mc,
        useDeferredValue: function(a, n) {
          var i = ye();
          return Kt === null ? Rc(i, a, n) : xf(
            i,
            Kt.memoizedState,
            a,
            n
          );
        },
        useTransition: function() {
          var a = nt(Le)[0], n = ye().memoizedState;
          return [
            typeof a == "boolean" ? a : Se(a),
            n
          ];
        },
        useSyncExternalStore: Dt,
        useId: _s
      };
      is.useCacheRefresh = bo, is.useMemoCache = xt, is.useHostTransitionStatus = Ds, is.useFormState = Nu, is.useActionState = Nu, is.useOptimistic = function(a, n) {
        var i = ye();
        return Kt !== null ? ca(i, Kt, a, n) : (i.baseState = a, [a, i.queue.dispatch]);
      };
      var Zd = {
        isMounted: function(a) {
          return (a = a._reactInternals) ? T(a) === a : !1;
        },
        enqueueSetState: function(a, n, i) {
          a = a._reactInternals;
          var c = An(), h = Na(c);
          h.payload = n, i != null && (h.callback = i), n = Jt(a, h, c), n !== null && (qa(n, a, c), Ua(n, a, c));
        },
        enqueueReplaceState: function(a, n, i) {
          a = a._reactInternals;
          var c = An(), h = Na(c);
          h.tag = 1, h.payload = n, i != null && (h.callback = i), n = Jt(a, h, c), n !== null && (qa(n, a, c), Ua(n, a, c));
        },
        enqueueForceUpdate: function(a, n) {
          a = a._reactInternals;
          var i = An(), c = Na(i);
          c.tag = 2, n != null && (c.callback = n), n = Jt(a, c, i), n !== null && (qa(n, a, i), Ua(n, a, i));
        }
      }, qd = typeof reportError == "function" ? reportError : function(a) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
            error: a
          });
          if (!window.dispatchEvent(n)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", a);
          return;
        }
        console.error(a);
      }, Id = Error(p(461)), Ja = !1, Xr = { dehydrated: null, treeContext: null, retryLane: 0 }, tc = Z(null), _i = null, jl = null, wd = typeof AbortController < "u" ? AbortController : function() {
        var a = [], n = this.signal = {
          aborted: !1,
          addEventListener: function(i, c) {
            a.push(c);
          }
        };
        this.abort = function() {
          n.aborted = !0, a.forEach(function(i) {
            return i();
          });
        };
      }, ev = qn.unstable_scheduleCallback, tv = qn.unstable_NormalPriority, da = {
        $$typeof: Ul,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Hp = $e.S;
      $e.S = function(a, n) {
        typeof n == "object" && n !== null && typeof n.then == "function" && sl(a, n), Hp !== null && Hp(a, n);
      };
      var Pu = Z(null), fu = !1, ma = !1, Pd = !1, Op = typeof WeakSet == "function" ? WeakSet : Set, Ka = null, Np = !1, Ba = null, $n = !1, Ll = null, ss = 8192, av = {
        getCacheForType: function(a) {
          var n = Za(da), i = n.data.get(a);
          return i === void 0 && (i = a(), n.data.set(a, i)), i;
        }
      }, Vr = 0, Fr = 1, Zr = 2, ac = 3, nc = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var to = Symbol.for;
        Vr = to("selector.component"), Fr = to("selector.has_pseudo_class"), Zr = to("selector.role"), ac = to("selector.test_id"), nc = to("selector.text");
      }
      var Up = typeof WeakMap == "function" ? WeakMap : Map, Qt = 0, qt = null, ke = null, gt = 0, Yt = 0, Ln = null, du = !1, os = !1, Wd = !1, mu = 0, ua = 0, Hi = 0, cs = 0, kd = 0, el = 0, ao = 0, Ca = null, Jl = null, $d = !1, em = 0, lc = 1 / 0, uc = null, pu = null, no = !1, Tn = null, Sl = 0, $a = 0, tm = null, ic = 0, lo = null;
      return vt.attemptContinuousHydration = function(a) {
        if (a.tag === 13) {
          var n = Hn(a, 67108864);
          n !== null && qa(n, a, 67108864), rd(a, 67108864);
        }
      }, vt.attemptHydrationAtCurrentPriority = function(a) {
        if (a.tag === 13) {
          var n = An(), i = Hn(a, n);
          i !== null && qa(i, a, n), rd(a, n);
        }
      }, vt.attemptSynchronousHydration = function(a) {
        switch (a.tag) {
          case 3:
            if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
              var n = F(a.pendingLanes);
              if (n !== 0) {
                for (a.pendingLanes |= 2, a.entangledLanes |= 2; n; ) {
                  var i = 1 << 31 - Sn(n);
                  a.entanglements[1] |= i, n &= ~i;
                }
                On(a), (Qt & 6) === 0 && (lc = yl() + 500, Tt(0));
              }
            }
            break;
          case 13:
            n = Hn(a, 2), n !== null && qa(n, a, 2), $f(), rd(a, 2);
        }
      }, vt.batchedUpdates = function(a, n) {
        return a(n);
      }, vt.createComponentSelector = function(a) {
        return { $$typeof: Vr, value: a };
      }, vt.createContainer = function(a, n, i, c, h, y, R, z, w, he) {
        return Ks(
          a,
          n,
          !1,
          null,
          i,
          c,
          y,
          R,
          z,
          w,
          he,
          null
        );
      }, vt.createHasPseudoClassSelector = function(a) {
        return { $$typeof: Fr, value: a };
      }, vt.createHydrationContainer = function(a, n, i, c, h, y, R, z, w, he, Oe, Je, ze) {
        return a = Ks(
          i,
          c,
          !0,
          a,
          h,
          y,
          z,
          w,
          he,
          Oe,
          Je,
          ze
        ), a.context = Ii(null), i = a.current, c = An(), h = Na(c), h.callback = n ?? null, Jt(i, h, c), a.current.lanes = c, De(a, c), On(a), a;
      }, vt.createPortal = function(a, n, i) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Qs,
          key: c == null ? null : "" + c,
          children: a,
          containerInfo: n,
          implementation: i
        };
      }, vt.createRoleSelector = function(a) {
        return { $$typeof: Zr, value: a };
      }, vt.createTestNameSelector = function(a) {
        return { $$typeof: ac, value: a };
      }, vt.createTextSelector = function(a) {
        return { $$typeof: nc, value: a };
      }, vt.defaultOnCaughtError = function(a) {
        console.error(a);
      }, vt.defaultOnRecoverableError = function(a) {
        qd(a);
      }, vt.defaultOnUncaughtError = function(a) {
        qd(a);
      }, vt.deferredUpdates = function(a) {
        var n = $e.T, i = Xu();
        try {
          return cn(32), $e.T = null, a();
        } finally {
          cn(i), $e.T = n;
        }
      }, vt.discreteUpdates = function(a, n, i, c, h) {
        var y = $e.T, R = Xu();
        try {
          return cn(2), $e.T = null, a(n, i, c, h);
        } finally {
          cn(R), $e.T = y, Qt === 0 && (lc = yl() + 500);
        }
      }, vt.findAllNodes = zo, vt.findBoundingRects = function(a, n) {
        if (!gi) throw Error(p(363));
        n = zo(a, n), a = [];
        for (var i = 0; i < n.length; i++)
          a.push(Vs(n[i]));
        for (n = a.length - 1; 0 < n; n--) {
          i = a[n];
          for (var c = i.x, h = c + i.width, y = i.y, R = y + i.height, z = n - 1; 0 <= z; z--)
            if (n !== z) {
              var w = a[z], he = w.x, Oe = he + w.width, Je = w.y, ze = Je + w.height;
              if (c >= he && y >= Je && h <= Oe && R <= ze) {
                a.splice(n, 1);
                break;
              } else if (c !== he || i.width !== w.width || ze < y || Je > R) {
                if (!(y !== Je || i.height !== w.height || Oe < c || he > h)) {
                  he > c && (w.width += he - c, w.x = c), Oe < h && (w.width = h - he), a.splice(n, 1);
                  break;
                }
              } else {
                Je > y && (w.height += Je - y, w.y = y), ze < R && (w.height = R - Je), a.splice(n, 1);
                break;
              }
            }
        }
        return a;
      }, vt.findHostInstance = od, vt.findHostInstanceWithNoPortals = function(a) {
        return a = O(a), a = a !== null ? J(a) : null, a === null ? null : Ys(a.stateNode);
      }, vt.findHostInstanceWithWarning = function(a) {
        return od(a);
      }, vt.flushPassiveEffects = au, vt.flushSyncFromReconciler = function(a) {
        var n = Qt;
        Qt |= 1;
        var i = $e.T, c = Xu();
        try {
          if (cn(2), $e.T = null, a)
            return a();
        } finally {
          cn(c), $e.T = i, Qt = n, (Qt & 6) === 0 && Tt(0);
        }
      }, vt.flushSyncWork = $f, vt.focusWithin = function(a, n) {
        if (!gi) throw Error(p(363));
        for (a = lr(a), n = sr(a, n), n = Array.from(n), a = 0; a < n.length; ) {
          var i = n[a++], c = i.tag;
          if (!Fs(i)) {
            if ((c === 5 || c === 26 || c === 27) && ip(i.stateNode))
              return !0;
            for (i = i.child; i !== null; )
              n.push(i), i = i.sibling;
          }
        }
        return !1;
      }, vt.getFindAllNodesFailureDescription = function(a, n) {
        if (!gi) throw Error(p(363));
        var i = 0, c = [];
        a = [lr(a), 0];
        for (var h = 0; h < a.length; ) {
          var y = a[h++], R = y.tag, z = a[h++], w = n[z];
          if ((R !== 5 && R !== 26 && R !== 27 || !Fs(y)) && (ur(y, w) && (c.push(ir(w)), z++, z > i && (i = z)), z < n.length))
            for (y = y.child; y !== null; )
              a.push(y, z), y = y.sibling;
        }
        if (i < n.length) {
          for (a = []; i < n.length; i++)
            a.push(ir(n[i]));
          return `findAllNodes was able to match part of the selector:
  ` + (c.join(" > ") + `

No matching component was found for:
  `) + a.join(" > ");
        }
        return null;
      }, vt.getPublicRootInstance = function(a) {
        if (a = a.current, !a.child) return null;
        switch (a.child.tag) {
          case 27:
          case 5:
            return Ys(a.child.stateNode);
          default:
            return a.child.stateNode;
        }
      }, vt.injectIntoDevTools = function() {
        var a = {
          bundleType: 0,
          version: $m,
          rendererPackageName: Lh,
          currentDispatcherRef: $e,
          findFiberByHostInstance: Bd,
          reconcilerVersion: "19.0.0"
        };
        if (Gl !== null && (a.rendererConfig = Gl), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") a = !1;
        else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) a = !0;
          else {
            try {
              ts = n.inject(a), jn = n;
            } catch {
            }
            a = !!n.checkDCE;
          }
        }
        return a;
      }, vt.isAlreadyRendering = function() {
        return !1;
      }, vt.observeVisibleRects = function(a, n, i, c) {
        if (!gi) throw Error(p(363));
        a = zo(a, n);
        var h = Rd(
          a,
          i,
          c
        ).disconnect;
        return {
          disconnect: function() {
            h();
          }
        };
      }, vt.shouldError = function() {
        return null;
      }, vt.shouldSuspend = function() {
        return !1;
      }, vt.startHostTransition = function(a, n, i, c) {
        if (a.tag !== 5) throw Error(p(476));
        var h = To(a).queue;
        xa(
          a,
          h,
          n,
          Wi,
          i === null ? f : function() {
            var y = To(a).next.queue;
            return Hs(
              a,
              y,
              {},
              An()
            ), i(c);
          }
        );
      }, vt.updateContainer = function(a, n, i, c) {
        var h = n.current, y = An();
        return vr(
          h,
          y,
          a,
          n,
          i,
          c
        ), y;
      }, vt.updateContainerSync = function(a, n, i, c) {
        return n.tag === 0 && au(), vr(
          n.current,
          2,
          a,
          n,
          i,
          c
        ), 2;
      }, vt;
    }, d.exports.default = d.exports, Object.defineProperty(d.exports, "__esModule", { value: !0 });
  }(Xv)), Xv.exports;
}
var Zv = { exports: {} };
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function _g() {
  return C0 || (C0 = 1, function(d) {
    process.env.NODE_ENV !== "production" && (d.exports = function(u) {
      function r(e, t) {
        for (e = e.memoizedState; e !== null && 0 < t; )
          e = e.next, t--;
        return e;
      }
      function f(e, t, l, s) {
        if (l >= t.length) return s;
        var o = t[l], m = La(e) ? e.slice() : Ia({}, e);
        return m[o] = f(e[o], t, l + 1, s), m;
      }
      function p(e, t, l) {
        if (t.length !== l.length)
          console.warn("copyWithRename() expects paths of the same length");
        else {
          for (var s = 0; s < l.length - 1; s++)
            if (t[s] !== l[s]) {
              console.warn(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
          return v(e, t, l, 0);
        }
      }
      function v(e, t, l, s) {
        var o = t[s], m = La(e) ? e.slice() : Ia({}, e);
        return s + 1 === t.length ? (m[l[s]] = m[o], La(m) ? m.splice(o, 1) : delete m[o]) : m[o] = v(
          e[o],
          t,
          l,
          s + 1
        ), m;
      }
      function A(e, t, l) {
        var s = t[l], o = La(e) ? e.slice() : Ia({}, e);
        return l + 1 === t.length ? (La(o) ? o.splice(s, 1) : delete o[s], o) : (o[s] = A(e[s], t, l + 1), o);
      }
      function S() {
        return !1;
      }
      function E() {
        return null;
      }
      function C(e, t, l, s) {
        return new Ih(e, t, l, s);
      }
      function b(e, t) {
        e.context === Sl && (_r(t, e, null, null), gi());
      }
      function T(e, t) {
        if (Su !== null) {
          var l = t.staleFamilies;
          t = t.updatedFamilies, Si(), Ud(
            e.current,
            t,
            l
          ), gi();
        }
      }
      function M(e) {
        Su = e;
      }
      function O() {
        console.error(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
        );
      }
      function N() {
        console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      }
      function J() {
      }
      function Z() {
      }
      function G(e) {
        var t = [];
        return e.forEach(function(l) {
          t.push(l);
        }), t.sort().join(", ");
      }
      function U(e) {
        return e === null || typeof e != "object" ? null : (e = Io && e[Io] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function $(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Qd ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case es:
            return "Fragment";
          case fa:
            return "Portal";
          case Kd:
            return "Profiler";
          case Or:
            return "StrictMode";
          case Ti:
            return "Suspense";
          case Sn:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case xl:
              return (e.displayName || "Context") + ".Provider";
            case Nr:
              return (e._context.displayName || "Context") + ".Consumer";
            case uu:
              var t = e.render;
              return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ur:
              return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
            case Wn:
              t = e._payload, e = e._init;
              try {
                return $(e(t));
              } catch {
              }
          }
        return null;
      }
      function F(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t._context.displayName || "Context") + ".Consumer";
          case 10:
            return (t.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 26:
          case 27:
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return $(t);
          case 8:
            return t === Or ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 14:
          case 15:
            if (typeof t == "function")
              return t.displayName || t.name || null;
            if (typeof t == "string") return t;
            break;
          case 29:
            if (t = e._debugInfo, t != null) {
              for (var l = t.length - 1; 0 <= l; l--)
                if (typeof t[l].name == "string") return t[l].name;
            }
            if (e.return !== null)
              return F(e.return);
        }
        return null;
      }
      function oe() {
      }
      function W() {
        if (wo === 0) {
          yl = console.log, Yd = console.info, Tp = console.warn, xr = console.error, bp = console.group, Mp = console.groupCollapsed, Rp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        wo++;
      }
      function Te() {
        if (wo--, wo === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Ia({}, e, { value: yl }),
            info: Ia({}, e, { value: Yd }),
            warn: Ia({}, e, { value: Tp }),
            error: Ia({}, e, { value: xr }),
            group: Ia({}, e, { value: bp }),
            groupCollapsed: Ia({}, e, { value: Mp }),
            groupEnd: Ia({}, e, { value: Rp })
          });
        }
        0 > wo && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function ne(e) {
        if (ts === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            ts = t && t[1] || "", jn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + ts + e + jn;
      }
      function ie(e, t) {
        if (!e || Bn) return "";
        var l = zr.get(e);
        if (l !== void 0) return l;
        Bn = !0, l = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var s = null;
        s = ue.H, ue.H = null, W();
        try {
          var o = {
            DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var Ke = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Ke.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Ke, []);
                    } catch (Lt) {
                      var St = Lt;
                    }
                    Reflect.construct(e, [], Ke);
                  } else {
                    try {
                      Ke.call();
                    } catch (Lt) {
                      St = Lt;
                    }
                    e.call(Ke.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Lt) {
                    St = Lt;
                  }
                  (Ke = e()) && typeof Ke.catch == "function" && Ke.catch(function() {
                  });
                }
              } catch (Lt) {
                if (Lt && St && typeof Lt.stack == "string")
                  return [Lt.stack, St.stack];
              }
              return [null, null];
            }
          };
          o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var m = Object.getOwnPropertyDescriptor(
            o.DetermineComponentFrameRoot,
            "name"
          );
          m && m.configurable && Object.defineProperty(
            o.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var g = o.DetermineComponentFrameRoot(), _ = g[0], Q = g[1];
          if (_ && Q) {
            var le = _.split(`
`), Me = Q.split(`
`);
            for (g = m = 0; m < le.length && !le[m].includes(
              "DetermineComponentFrameRoot"
            ); )
              m++;
            for (; g < Me.length && !Me[g].includes(
              "DetermineComponentFrameRoot"
            ); )
              g++;
            if (m === le.length || g === Me.length)
              for (m = le.length - 1, g = Me.length - 1; 1 <= m && 0 <= g && le[m] !== Me[g]; )
                g--;
            for (; 1 <= m && 0 <= g; m--, g--)
              if (le[m] !== Me[g]) {
                if (m !== 1 || g !== 1)
                  do
                    if (m--, g--, 0 > g || le[m] !== Me[g]) {
                      var Ue = `
` + le[m].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", e.displayName)), typeof e == "function" && zr.set(e, Ue), Ue;
                    }
                  while (1 <= m && 0 <= g);
                break;
              }
          }
        } finally {
          Bn = !1, ue.H = s, Te(), Error.prepareStackTrace = l;
        }
        return le = (le = e ? e.displayName || e.name : "") ? ne(le) : "", typeof e == "function" && zr.set(e, le), le;
      }
      function me(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return ne(e.type);
          case 16:
            return ne("Lazy");
          case 13:
            return ne("Suspense");
          case 19:
            return ne("SuspenseList");
          case 0:
          case 15:
            return e = ie(e.type, !1), e;
          case 11:
            return e = ie(e.type.render, !1), e;
          case 1:
            return e = ie(e.type, !0), e;
          default:
            return "";
        }
      }
      function De(e) {
        try {
          var t = "";
          do {
            t += me(e);
            var l = e._debugInfo;
            if (l)
              for (var s = l.length - 1; 0 <= s; s--) {
                var o = l[s];
                if (typeof o.name == "string") {
                  var m = t, g = o.env, _ = ne(
                    o.name + (g ? " [" + g + "]" : "")
                  );
                  t = m + _;
                }
              }
            e = e.return;
          } while (e);
          return t;
        } catch (Q) {
          return `
Error generating stack: ` + Q.message + `
` + Q.stack;
        }
      }
      function Xe() {
        return wa === null ? "" : De(wa);
      }
      function te(e, t, l, s, o, m, g) {
        var _ = wa;
        ue.getCurrentStack = e === null ? null : Xe, Pa = !1, wa = e;
        try {
          return t(l, s, o, m, g);
        } finally {
          wa = _;
        }
        throw Error(
          "runWithFiberInDEV should never be called in production. This is a bug in React."
        );
      }
      function Ae(e) {
        var t = e, l = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? l : null;
      }
      function Ve(e) {
        if (Ae(e) !== e)
          throw Error("Unable to find node on an unmounted component.");
      }
      function D(e) {
        var t = e.alternate;
        if (!t) {
          if (t = Ae(e), t === null)
            throw Error("Unable to find node on an unmounted component.");
          return t !== e ? null : e;
        }
        for (var l = e, s = t; ; ) {
          var o = l.return;
          if (o === null) break;
          var m = o.alternate;
          if (m === null) {
            if (s = o.return, s !== null) {
              l = s;
              continue;
            }
            break;
          }
          if (o.child === m.child) {
            for (m = o.child; m; ) {
              if (m === l) return Ve(o), e;
              if (m === s) return Ve(o), t;
              m = m.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (l.return !== s.return) l = o, s = m;
          else {
            for (var g = !1, _ = o.child; _; ) {
              if (_ === l) {
                g = !0, l = o, s = m;
                break;
              }
              if (_ === s) {
                g = !0, s = o, l = m;
                break;
              }
              _ = _.sibling;
            }
            if (!g) {
              for (_ = m.child; _; ) {
                if (_ === l) {
                  g = !0, l = m, s = o;
                  break;
                }
                if (_ === s) {
                  g = !0, s = m, l = o;
                  break;
                }
                _ = _.sibling;
              }
              if (!g)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (l.alternate !== s)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (l.tag !== 3)
          throw Error("Unable to find node on an unmounted component.");
        return l.stateNode.current === l ? e : t;
      }
      function Y(e) {
        return e = D(e), e !== null ? X(e) : null;
      }
      function X(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (t = X(e), t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      function fe(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (t = fe(e), t !== null))
            return t;
          e = e.sibling;
        }
        return null;
      }
      function x(e) {
        return { current: e };
      }
      function de(e, t) {
        0 > Tn ? console.error("Unexpected pop.") : (t !== no[Tn] && console.error("Unexpected Fiber popped."), e.current = pu[Tn], pu[Tn] = null, no[Tn] = null, Tn--);
      }
      function pe(e, t, l) {
        Tn++, pu[Tn] = e.current, no[Tn] = l, e.current = t;
      }
      function Qe(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (tm(e) / ic | 0) | 0;
      }
      function Ge(e) {
        if (e & 1) return "SyncHydrationLane";
        if (e & 2) return "Sync";
        if (e & 4) return "InputContinuousHydration";
        if (e & 8) return "InputContinuous";
        if (e & 16) return "DefaultHydration";
        if (e & 32) return "Default";
        if (e & 64) return "TransitionHydration";
        if (e & 4194176) return "Transition";
        if (e & 62914560) return "Retry";
        if (e & 67108864) return "SelectiveHydration";
        if (e & 134217728) return "IdleHydration";
        if (e & 268435456) return "Idle";
        if (e & 536870912) return "Offscreen";
        if (e & 1073741824) return "Deferred";
      }
      function we(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), e;
        }
      }
      function at(e, t) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var s = 0, o = e.suspendedLanes, m = e.pingedLanes, g = e.warmLanes;
        e = e.finishedLanes !== 0;
        var _ = l & 134217727;
        return _ !== 0 ? (l = _ & ~o, l !== 0 ? s = we(l) : (m &= _, m !== 0 ? s = we(m) : e || (g = _ & ~g, g !== 0 && (s = we(g))))) : (_ = l & ~o, _ !== 0 ? s = we(_) : m !== 0 ? s = we(m) : e || (g = l & ~g, g !== 0 && (s = we(g)))), s === 0 ? 0 : t !== 0 && t !== s && (t & o) === 0 && (o = s & -s, g = t & -t, o >= g || o === 32 && (g & 4194176) !== 0) ? t : s;
      }
      function ea(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
      }
      function At(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
            return t + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), -1;
        }
      }
      function Rn() {
        var e = lo;
        return lo <<= 1, (lo & 4194176) === 0 && (lo = 128), e;
      }
      function bl() {
        var e = a;
        return a <<= 1, (a & 62914560) === 0 && (a = 4194304), e;
      }
      function Dn(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t;
      }
      function _n(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function Ml(e, t, l, s, o, m) {
        var g = e.pendingLanes;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
        var _ = e.entanglements, Q = e.expirationTimes, le = e.hiddenUpdates;
        for (l = g & ~l; 0 < l; ) {
          var Me = 31 - $a(l), Ue = 1 << Me;
          _[Me] = 0, Q[Me] = -1;
          var Ke = le[Me];
          if (Ke !== null)
            for (le[Me] = null, Me = 0; Me < Ke.length; Me++) {
              var St = Ke[Me];
              St !== null && (St.lane &= -536870913);
            }
          l &= ~Ue;
        }
        s !== 0 && Rl(e, s, 0), m !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(g & ~t));
      }
      function Rl(e, t, l) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var s = 31 - $a(t);
        e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | l & 4194218;
      }
      function Vl(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
          var s = 31 - $a(l), o = 1 << s;
          o & t | e[s] & t && (e[s] |= t), l &= ~o;
        }
      }
      function li(e, t, l) {
        if (en)
          for (e = e.pendingUpdatersLaneMap; 0 < l; ) {
            var s = 31 - $a(l), o = 1 << s;
            e[s].add(t), l &= ~o;
          }
      }
      function Hn(e, t) {
        if (en)
          for (var l = e.pendingUpdatersLaneMap, s = e.memoizedUpdaters; 0 < t; ) {
            var o = 31 - $a(t);
            e = 1 << o, o = l[o], 0 < o.size && (o.forEach(function(m) {
              var g = m.alternate;
              g !== null && s.has(g) || s.add(m);
            }), o.clear()), t &= ~e;
          }
      }
      function ui(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function Mu(e) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled) return !0;
        if (!t.supportsFiber)
          return console.error(
            "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
          ), !0;
        try {
          ze = t.inject(e), Ie = t;
        } catch (l) {
          console.error("React instrumentation encountered an error: %s.", l);
        }
        return !!t.checkDCE;
      }
      function On(e, t) {
        if (Ie && typeof Ie.onCommitFiberRoot == "function")
          try {
            var l = (e.current.flags & 128) === 128;
            switch (t) {
              case 2:
                var s = R;
                break;
              case 8:
                s = z;
                break;
              case 32:
                s = w;
                break;
              case 268435456:
                s = he;
                break;
              default:
                s = w;
            }
            Ie.onCommitFiberRoot(
              ze,
              e,
              s,
              l
            );
          } catch (o) {
            Jn || (Jn = !0, console.error(
              "React instrumentation encountered an error: %s",
              o
            ));
          }
      }
      function Tt(e) {
        if (typeof Oe == "function" && Je(e), Ie && typeof Ie.setStrictMode == "function")
          try {
            Ie.setStrictMode(ze, e);
          } catch (t) {
            Jn || (Jn = !0, console.error(
              "React instrumentation encountered an error: %s",
              t
            ));
          }
      }
      function Ts(e) {
        Ne = e;
      }
      function Fl() {
        Ne !== null && typeof Ne.markCommitStopped == "function" && Ne.markCommitStopped();
      }
      function Nn(e) {
        Ne !== null && typeof Ne.markComponentRenderStarted == "function" && Ne.markComponentRenderStarted(e);
      }
      function Qn() {
        Ne !== null && typeof Ne.markComponentRenderStopped == "function" && Ne.markComponentRenderStopped();
      }
      function bs(e) {
        Ne !== null && typeof Ne.markRenderStarted == "function" && Ne.markRenderStarted(e);
      }
      function Ru() {
        Ne !== null && typeof Ne.markRenderStopped == "function" && Ne.markRenderStopped();
      }
      function sl(e, t) {
        Ne !== null && typeof Ne.markStateUpdateScheduled == "function" && Ne.markStateUpdateScheduled(e, t);
      }
      function Du(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      function Xa(e, t) {
        if (typeof e == "object" && e !== null) {
          var l = I.get(e);
          return l !== void 0 ? l : (t = {
            value: e,
            source: t,
            stack: De(t)
          }, I.set(e, t), t);
        }
        return {
          value: e,
          source: t,
          stack: De(t)
        };
      }
      function Un(e, t) {
        Ua(), ae[be++] = Xt, ae[be++] = Ze, Ze = e, Xt = t;
      }
      function ii(e, t, l) {
        Ua(), qe[st++] = rt, qe[st++] = dn, qe[st++] = ta, ta = e;
        var s = rt;
        e = dn;
        var o = 32 - $a(s) - 1;
        s &= ~(1 << o), l += 1;
        var m = 32 - $a(t) + o;
        if (30 < m) {
          var g = o - o % 5;
          m = (s & (1 << g) - 1).toString(32), s >>= g, o -= g, rt = 1 << 32 - $a(t) + o | l << o | s, dn = m + e;
        } else
          rt = 1 << m | l << o | s, dn = e;
      }
      function Na(e) {
        Ua(), e.return !== null && (Un(e, 1), ii(e, 1, 0));
      }
      function Jt(e) {
        for (; e === Ze; )
          Ze = ae[--be], ae[be] = null, Xt = ae[--be], ae[be] = null;
        for (; e === ta; )
          ta = qe[--st], qe[st] = null, dn = qe[--st], qe[st] = null, rt = qe[--st], qe[st] = null;
      }
      function Ua() {
        Mt || console.error(
          "Expected to be hydrating. This is a bug in React. Please file an issue."
        );
      }
      function V(e) {
        return e === null && console.error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
        ), e;
      }
      function ge(e, t) {
        pe(uo, t, e), pe(am, e, e), pe(Oi, null, e), t = Zu(t), de(Oi, e), pe(Oi, t, e);
      }
      function je(e) {
        de(Oi, e), de(am, e), de(uo, e);
      }
      function tt() {
        return V(Oi.current);
      }
      function _e(e) {
        e.memoizedState !== null && pe(Gp, e, e);
        var t = V(Oi.current), l = qu(t, e.type);
        t !== l && (pe(am, e, e), pe(Oi, l, e));
      }
      function na(e) {
        am.current === e && (de(Oi, e), de(am, e)), Gp.current === e && (de(Gp, e), ga ? wu._currentValue = ou : wu._currentValue2 = ou);
      }
      function Gn(e, t) {
        return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Gn(e.children[0], t) : e;
      }
      function Da(e) {
        return "  " + "  ".repeat(e);
      }
      function ol(e) {
        return "+ " + "  ".repeat(e);
      }
      function Aa(e) {
        return "- " + "  ".repeat(e);
      }
      function Va(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return e.type;
          case 16:
            return "Lazy";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 0:
          case 15:
            return e = e.type, e.displayName || e.name || null;
          case 11:
            return e = e.type.render, e.displayName || e.name || null;
          case 1:
            return e = e.type, e.displayName || e.name || null;
          default:
            return null;
        }
      }
      function Fa(e, t) {
        return Ky.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
      }
      function hn(e, t, l) {
        var s = 120 - 2 * l;
        if (t === null)
          return ol(l) + Fa(e, s) + `
`;
        if (typeof t == "string") {
          for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
          return o > s - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), ol(l) + Fa(e, s) + `
` + Aa(l) + Fa(t, s) + `
`;
        }
        return Da(l) + Fa(e, s) + `
`;
      }
      function cl(e) {
        return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, l) {
          return l;
        });
      }
      function Yn(e, t) {
        switch (typeof e) {
          case "string":
            return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
          case "object":
            if (e === null) return "null";
            if (La(e)) return "[...]";
            if (e.$$typeof === $i)
              return (t = $(e.type)) ? "<" + t + ">" : "<...>";
            var l = cl(e);
            if (l === "Object") {
              l = "", t -= 2;
              for (var s in e)
                if (e.hasOwnProperty(s)) {
                  var o = JSON.stringify(s);
                  if (o !== '"' + s + '"' && (s = o), t -= s.length - 2, o = Yn(
                    e[s],
                    15 > t ? t : 15
                  ), t -= o.length, 0 > t) {
                    l += l === "" ? "..." : ", ...";
                    break;
                  }
                  l += (l === "" ? "" : ",") + s + ":" + o;
                }
              return "{" + l + "}";
            }
            return l;
          case "function":
            return (t = e.displayName || e.name) ? "function " + t : "function";
          default:
            return String(e);
        }
      }
      function _u(e, t) {
        return typeof e != "string" || Ky.test(e) ? "{" + Yn(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
      }
      function Ji(e, t, l) {
        var s = 120 - l.length - e.length, o = [], m;
        for (m in t)
          if (t.hasOwnProperty(m) && m !== "children") {
            var g = _u(
              t[m],
              120 - l.length - m.length - 1
            );
            s -= m.length + g.length + 2, o.push(m + "=" + g);
          }
        return o.length === 0 ? l + "<" + e + `>
` : 0 < s ? l + "<" + e + " " + o.join(" ") + `>
` : l + "<" + e + `
` + l + "  " + o.join(`
` + l + "  ") + `
` + l + `>
`;
      }
      function si(e, t, l) {
        var s = "", o = Ia({}, t), m;
        for (m in e)
          if (e.hasOwnProperty(m)) {
            delete o[m];
            var g = 120 - 2 * l - m.length - 2, _ = Yn(e[m], g);
            t.hasOwnProperty(m) ? (g = Yn(t[m], g), s += ol(l) + m + ": " + _ + `
`, s += Aa(l) + m + ": " + g + `
`) : s += ol(l) + m + ": " + _ + `
`;
          }
        for (var Q in o)
          o.hasOwnProperty(Q) && (e = Yn(
            o[Q],
            120 - 2 * l - Q.length - 2
          ), s += Aa(l) + Q + ": " + e + `
`);
        return s;
      }
      function Zl(e, t, l, s) {
        var o = "", m = /* @__PURE__ */ new Map();
        for (le in l)
          l.hasOwnProperty(le) && m.set(
            le.toLowerCase(),
            le
          );
        if (m.size === 1 && m.has("children"))
          o += Ji(
            e,
            t,
            Da(s)
          );
        else {
          for (var g in t)
            if (t.hasOwnProperty(g) && g !== "children") {
              var _ = 120 - 2 * (s + 1) - g.length - 1, Q = m.get(g.toLowerCase());
              if (Q !== void 0) {
                m.delete(g.toLowerCase());
                var le = t[g];
                Q = l[Q];
                var Me = _u(
                  le,
                  _
                );
                _ = _u(
                  Q,
                  _
                ), typeof le == "object" && le !== null && typeof Q == "object" && Q !== null && cl(le) === "Object" && cl(Q) === "Object" && (2 < Object.keys(le).length || 2 < Object.keys(Q).length || -1 < Me.indexOf("...") || -1 < _.indexOf("...")) ? o += Da(s + 1) + g + `={{
` + si(
                  le,
                  Q,
                  s + 2
                ) + Da(s + 1) + `}}
` : (o += ol(s + 1) + g + "=" + Me + `
`, o += Aa(s + 1) + g + "=" + _ + `
`);
              } else
                o += Da(s + 1) + g + "=" + _u(t[g], _) + `
`;
            }
          m.forEach(function(Ue) {
            if (Ue !== "children") {
              var Ke = 120 - 2 * (s + 1) - Ue.length - 1;
              o += Aa(s + 1) + Ue + "=" + _u(l[Ue], Ke) + `
`;
            }
          }), o = o === "" ? Da(s) + "<" + e + `>
` : Da(s) + "<" + e + `
` + o + Da(s) + `>
`;
        }
        return e = l.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (m = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (m = "" + t), o += hn(m, "" + e, s + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + hn("" + t, null, s + 1) : o + hn("" + t, void 0, s + 1)), o;
      }
      function Hu(e, t) {
        var l = Va(e);
        if (l === null) {
          for (l = "", e = e.child; e; )
            l += Hu(e, t), e = e.sibling;
          return l;
        }
        return Da(t) + "<" + l + `>
`;
      }
      function nn(e, t) {
        var l = Gn(e, t);
        if (l !== e && (e.children.length !== 1 || e.children[0] !== l))
          return Da(t) + `...
` + nn(l, t + 1);
        l = "";
        var s = e.fiber._debugInfo;
        if (s)
          for (var o = 0; o < s.length; o++) {
            var m = s[o].name;
            typeof m == "string" && (l += Da(t) + "<" + m + `>
`, t++);
          }
        if (s = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
          s = hn(o, e.serverProps, t), t++;
        else if (m = Va(e.fiber), m !== null)
          if (e.serverProps === void 0) {
            s = t;
            var g = 120 - 2 * s - m.length - 2, _ = "";
            for (le in o)
              if (o.hasOwnProperty(le) && le !== "children") {
                var Q = _u(o[le], 15);
                if (g -= le.length + Q.length + 2, 0 > g) {
                  _ += " ...";
                  break;
                }
                _ += " " + le + "=" + Q;
              }
            s = Da(s) + "<" + m + _ + `>
`, t++;
          } else
            e.serverProps === null ? (s = Ji(
              m,
              o,
              ol(t)
            ), t++) : typeof e.serverProps == "string" ? console.error(
              "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
            ) : (s = Zl(
              m,
              o,
              e.serverProps,
              t
            ), t++);
        var le = "";
        for (o = e.fiber.child, m = 0; o && m < e.children.length; )
          g = e.children[m], g.fiber === o ? (le += nn(g, t), m++) : le += Hu(o, t), o = o.sibling;
        for (o && 0 < e.children.length && (le += Da(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
          m = o[e], le = typeof m == "string" ? le + (Aa(t) + Fa(m, 120 - 2 * t) + `
`) : le + Ji(
            m.type,
            m.props,
            Aa(t)
          );
        return l + s + le;
      }
      function et(e) {
        try {
          return `

` + nn(e, 0);
        } catch {
          return "";
        }
      }
      function Xn(e, t) {
        if (e.return === null) {
          if (hu === null)
            hu = {
              fiber: e,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf: t
            };
          else {
            if (hu.fiber !== e)
              throw Error(
                "Saw multiple hydration diff roots in a pass. This is a bug in React."
              );
            hu.distanceFromLeaf > t && (hu.distanceFromLeaf = t);
          }
          return hu;
        }
        var l = Xn(
          e.return,
          t + 1
        ).children;
        return 0 < l.length && l[l.length - 1].fiber === e ? (l = l[l.length - 1], l.distanceFromLeaf > t && (l.distanceFromLeaf = t), l) : (t = {
          fiber: e,
          children: [],
          serverProps: void 0,
          serverTail: [],
          distanceFromLeaf: t
        }, l.push(t), t);
      }
      function wt(e, t) {
        rs || (e = Xn(e, 0), e.serverProps = null, t !== null && (t = Up(t), e.serverTail.push(t)));
      }
      function B(e) {
        var t = "", l = hu;
        throw l !== null && (hu = null, t = et(l)), ce(
          Xa(
            Error(
              `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
            ),
            e
          )
        ), nv;
      }
      function H(e, t) {
        if (!Cn)
          throw Error(
            "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
          );
        Ba(
          e.stateNode,
          e.type,
          e.memoizedProps,
          t,
          e
        ) || B(e);
      }
      function j(e) {
        for (tl = e.return; tl; )
          switch (tl.tag) {
            case 3:
            case 27:
              Ni = !0;
              return;
            case 5:
            case 13:
              Ni = !1;
              return;
            default:
              tl = tl.return;
          }
      }
      function ee(e) {
        if (!Cn || e !== tl) return !1;
        if (!Mt)
          return j(e), Mt = !0, !1;
        var t = !1;
        if (Ca ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || ac(e.type) && !_a(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || ac(e.type) && !_a(e.type, e.memoizedProps)) && (t = !0), t && bn) {
          for (t = bn; t; ) {
            var l = Xn(e, 0), s = Up(t);
            l.serverTail.push(s), t = s.type === "Suspense" ? ss(t) : Pu(t);
          }
          B(e);
        }
        if (j(e), e.tag === 13) {
          if (!Cn)
            throw Error(
              "Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          bn = ss(e);
        } else
          bn = tl ? Pu(e.stateNode) : null;
        return !0;
      }
      function re() {
        Cn && (bn = tl = null, rs = Mt = !1);
      }
      function ce(e) {
        Wu === null ? Wu = [e] : Wu.push(e);
      }
      function Re() {
        var e = hu;
        e !== null && (hu = null, e = et(e), console.error(
          `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
          "https://react.dev/link/hydration-mismatch",
          e
        ));
      }
      function Ee() {
        for (var e = qr, t = lv = qr = 0; t < e; ) {
          var l = vu[t];
          vu[t++] = null;
          var s = vu[t];
          vu[t++] = null;
          var o = vu[t];
          vu[t++] = null;
          var m = vu[t];
          if (vu[t++] = null, s !== null && o !== null) {
            var g = s.pending;
            g === null ? o.next = o : (o.next = g.next, g.next = o), s.pending = o;
          }
          m !== 0 && He(l, o, m);
        }
      }
      function Be(e, t, l, s) {
        vu[qr++] = e, vu[qr++] = t, vu[qr++] = l, vu[qr++] = s, lv |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
      }
      function ye(e, t, l, s) {
        return Be(e, t, l, s), xt(e);
      }
      function Se(e, t) {
        return Be(e, null, null, t), xt(e);
      }
      function He(e, t, l) {
        e.lanes |= l;
        var s = e.alternate;
        s !== null && (s.lanes |= l);
        for (var o = !1, m = e.return; m !== null; )
          m.childLanes |= l, s = m.alternate, s !== null && (s.childLanes |= l), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (o = !0)), e = m, m = m.return;
        o && t !== null && e.tag === 3 && (m = e.stateNode, o = 31 - $a(l), m = m.hiddenUpdates, e = m[o], e === null ? m[o] = [t] : e.push(t), t.lane = l | 536870912);
      }
      function xt(e) {
        if (Cm > t1)
          throw Ec = Cm = 0, Tm = xv = null, Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
          );
        Ec > a1 && (Ec = 0, Tm = null, console.error(
          "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
        )), e.alternate === null && (e.flags & 4098) !== 0 && hp(e);
        for (var t = e, l = t.return; l !== null; )
          t.alternate === null && (t.flags & 4098) !== 0 && hp(e), t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function Le() {
        var e = sc;
        return sc = 0, e;
      }
      function Fe(e) {
        var t = sc;
        return sc = e, t;
      }
      function Pe(e) {
        var t = sc;
        return sc += e, t;
      }
      function nt(e) {
        Bl = Ir(), 0 > e.actualStartTime && (e.actualStartTime = Bl);
      }
      function Dt(e) {
        if (0 <= Bl) {
          var t = Ir() - Bl;
          e.actualDuration += t, e.selfBaseDuration = t, Bl = -1;
        }
      }
      function zt(e) {
        if (0 <= Bl) {
          var t = Ir() - Bl;
          e.actualDuration += t, Bl = -1;
        }
      }
      function Nt() {
        if (0 <= Bl) {
          var e = Ir() - Bl;
          Bl = -1, sc += e;
        }
      }
      function Ft() {
        Bl = Ir();
      }
      function _t(e) {
        for (var t = e.child; t; )
          e.actualDuration += t.actualDuration, t = t.sibling;
      }
      function oa(e) {
        e !== wr && e.next === null && (wr === null ? Lp = wr = e : wr = wr.next = e), Jp = !0, ue.actQueue !== null ? iv || (iv = !0, ha(ca)) : uv || (uv = !0, ha(ca));
      }
      function Ct(e, t) {
        if (!sv && Jp) {
          sv = !0;
          do
            for (var l = !1, s = Lp; s !== null; ) {
              if (e !== 0) {
                var o = s.pendingLanes;
                if (o === 0) var m = 0;
                else {
                  var g = s.suspendedLanes, _ = s.pingedLanes;
                  m = (1 << 31 - $a(42 | e) + 1) - 1, m &= o & ~(g & ~_), m = m & 201326677 ? m & 201326677 | 1 : m ? m | 2 : 0;
                }
                m !== 0 && (l = !0, ln(s, m));
              } else
                m = Et, m = at(
                  s,
                  s === kt ? m : 0
                ), (m & 3) === 0 || ea(s, m) || (l = !0, ln(s, m));
              s = s.next;
            }
          while (l);
          sv = !1;
        }
      }
      function ca() {
        Jp = iv = uv = !1;
        var e = 0;
        Pr !== 0 && (ko() && (e = Pr), Pr = 0);
        for (var t = y(), l = null, s = Lp; s !== null; ) {
          var o = s.next, m = rl(s, t);
          m === 0 ? (s.next = null, l === null ? Lp = o : l.next = o, o === null && (wr = l)) : (l = s, (e !== 0 || (m & 3) !== 0) && (Jp = !0)), s = o;
        }
        Ct(e);
      }
      function rl(e, t) {
        for (var l = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
          var g = 31 - $a(m), _ = 1 << g, Q = o[g];
          Q === -1 ? ((_ & l) === 0 || (_ & s) !== 0) && (o[g] = At(_, t)) : Q <= t && (e.expiredLanes |= _), m &= ~_;
        }
        if (t = kt, l = Et, l = at(
          e,
          e === t ? l : 0
        ), s = e.callbackNode, l === 0 || e === t && $t === vc || e.cancelPendingCommit !== null)
          return s !== null && Ht(s), e.callbackNode = null, e.callbackPriority = 0;
        if ((l & 3) === 0 || ea(e, l)) {
          if (t = l & -l, t !== e.callbackPriority || ue.actQueue !== null && s !== ov)
            Ht(s);
          else return t;
          switch (ui(l)) {
            case 2:
            case 8:
              l = z;
              break;
            case 32:
              l = w;
              break;
            case 268435456:
              l = he;
              break;
            default:
              l = w;
          }
          return s = Ou.bind(null, e), ue.actQueue !== null ? (ue.actQueue.push(s), l = ov) : l = n(l, s), e.callbackPriority = t, e.callbackNode = l, t;
        }
        return s !== null && Ht(s), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ou(e, t) {
        jp = zp = !1;
        var l = e.callbackNode;
        if (Si() && e.callbackNode !== l)
          return null;
        var s = Et;
        return s = at(
          e,
          e === kt ? s : 0
        ), s === 0 ? null : (Wi(
          e,
          s,
          t
        ), rl(e, y()), e.callbackNode != null && e.callbackNode === l ? Ou.bind(null, e) : null);
      }
      function ln(e, t) {
        if (Si()) return null;
        zp = jp, jp = !1, Wi(e, t, !0);
      }
      function Ht(e) {
        e !== ov && e !== null && i(e);
      }
      function ha(e) {
        ue.actQueue !== null && ue.actQueue.push(function() {
          return e(), null;
        }), Ws ? $o(function() {
          (Vt & (Kn | xi)) !== ll ? n(R, e) : e();
        }) : n(R, e);
      }
      function jt() {
        return Pr === 0 && (Pr = Rn()), Pr;
      }
      function Ot(e, t) {
        if (nm === null) {
          var l = nm = [];
          cv = 0, oc = jt(), Wr = {
            status: "pending",
            value: void 0,
            then: function(s) {
              l.push(s);
            }
          };
        }
        return cv++, t.then(un, un), t;
      }
      function un() {
        if (--cv === 0 && nm !== null) {
          Wr !== null && (Wr.status = "fulfilled");
          var e = nm;
          nm = null, oc = 0, Wr = null;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function ql(e, t) {
        var l = [], s = {
          status: "pending",
          value: null,
          reason: null,
          then: function(o) {
            l.push(o);
          }
        };
        return e.then(
          function() {
            s.status = "fulfilled", s.value = t;
            for (var o = 0; o < l.length; o++) (0, l[o])(t);
          },
          function(o) {
            for (s.status = "rejected", s.reason = o, o = 0; o < l.length; o++)
              (0, l[o])(void 0);
          }
        ), s;
      }
      function Ga(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function fl(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
      }
      function Nu(e) {
        return {
          lane: e,
          tag: Qy,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Vn(e, t, l) {
        var s = e.updateQueue;
        if (s === null) return null;
        if (s = s.shared, fv === s && !Vy) {
          var o = F(e);
          console.error(
            `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
            o
          ), Vy = !0;
        }
        return (Vt & Kn) !== ll ? (o = s.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, t = xt(e), He(e, null, l), t) : (Be(e, s, t, l), xt(e));
      }
      function Ms(e, t, l) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194176) !== 0)) {
          var s = t.lanes;
          s &= e.pendingLanes, l |= s, t.lanes = l, Vl(e, l);
        }
      }
      function Ki(e, t) {
        var l = e.updateQueue, s = e.alternate;
        if (s !== null && (s = s.updateQueue, l === s)) {
          var o = null, m = null;
          if (l = l.firstBaseUpdate, l !== null) {
            do {
              var g = {
                lane: l.lane,
                tag: l.tag,
                payload: l.payload,
                callback: null,
                next: null
              };
              m === null ? o = m = g : m = m.next = g, l = l.next;
            } while (l !== null);
            m === null ? o = m = t : m = m.next = t;
          } else o = m = t;
          l = {
            baseState: s.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: m,
            shared: s.shared,
            callbacks: s.callbacks
          }, e.updateQueue = l;
          return;
        }
        e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
      }
      function oi() {
        if (dv) {
          var e = Wr;
          if (e !== null) throw e;
        }
      }
      function Rs(e, t, l, s) {
        dv = !1;
        var o = e.updateQueue;
        io = !1, fv = o.shared;
        var m = o.firstBaseUpdate, g = o.lastBaseUpdate, _ = o.shared.pending;
        if (_ !== null) {
          o.shared.pending = null;
          var Q = _, le = Q.next;
          Q.next = null, g === null ? m = le : g.next = le, g = Q;
          var Me = e.alternate;
          Me !== null && (Me = Me.updateQueue, _ = Me.lastBaseUpdate, _ !== g && (_ === null ? Me.firstBaseUpdate = le : _.next = le, Me.lastBaseUpdate = Q));
        }
        if (m !== null) {
          var Ue = o.baseState;
          g = 0, Me = le = Q = null, _ = m;
          do {
            var Ke = _.lane & -536870913, St = Ke !== _.lane;
            if (St ? (Et & Ke) === Ke : (s & Ke) === Ke) {
              Ke !== 0 && Ke === oc && (dv = !0), Me !== null && (Me = Me.next = {
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: null,
                next: null
              });
              e: {
                Ke = e;
                var Lt = _, yf = t, Af = l;
                switch (Lt.tag) {
                  case Yy:
                    if (Lt = Lt.payload, typeof Lt == "function") {
                      of = !0;
                      var ti = Lt.call(
                        Af,
                        Ue,
                        yf
                      );
                      if (Ke.mode & 8) {
                        Tt(!0);
                        try {
                          Lt.call(Af, Ue, yf);
                        } finally {
                          Tt(!1);
                        }
                      }
                      of = !1, Ue = ti;
                      break e;
                    }
                    Ue = Lt;
                    break e;
                  case rv:
                    Ke.flags = Ke.flags & -65537 | 128;
                  case Qy:
                    if (ti = Lt.payload, typeof ti == "function") {
                      if (of = !0, Lt = ti.call(
                        Af,
                        Ue,
                        yf
                      ), Ke.mode & 8) {
                        Tt(!0);
                        try {
                          ti.call(Af, Ue, yf);
                        } finally {
                          Tt(!1);
                        }
                      }
                      of = !1;
                    } else Lt = ti;
                    if (Lt == null) break e;
                    Ue = Ia({}, Ue, Lt);
                    break e;
                  case Xy:
                    io = !0;
                }
              }
              Ke = _.callback, Ke !== null && (e.flags |= 64, St && (e.flags |= 8192), St = o.callbacks, St === null ? o.callbacks = [Ke] : St.push(Ke));
            } else
              St = {
                lane: Ke,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null
              }, Me === null ? (le = Me = St, Q = Ue) : Me = Me.next = St, g |= Ke;
            if (_ = _.next, _ === null) {
              if (_ = o.shared.pending, _ === null)
                break;
              St = _, _ = St.next, St.next = null, o.lastBaseUpdate = St, o.shared.pending = null;
            }
          } while (!0);
          Me === null && (Q = Ue), o.baseState = Q, o.firstBaseUpdate = le, o.lastBaseUpdate = Me, m === null && (o.shared.lanes = 0), mo |= g, e.lanes = g, e.memoizedState = Ue;
        }
        fv = null;
      }
      function bc(e, t) {
        if (typeof e != "function")
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " + e
          );
        e.call(t);
      }
      function Xm(e, t) {
        var l = e.shared.hiddenCallbacks;
        if (l !== null)
          for (e.shared.hiddenCallbacks = null, e = 0; e < l.length; e++)
            bc(l[e], t);
      }
      function Nf(e, t) {
        var l = e.callbacks;
        if (l !== null)
          for (e.callbacks = null, e = 0; e < l.length; e++)
            bc(l[e], t);
      }
      function Bo(e, t) {
        if (P(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
        var l = Object.keys(e), s = Object.keys(t);
        if (l.length !== s.length) return !1;
        for (s = 0; s < l.length; s++) {
          var o = l[s];
          if (!VE.call(t, o) || !P(e[o], t[o]))
            return !1;
        }
        return !0;
      }
      function Uf() {
        return { didWarnAboutUncachedPromise: !1, thenables: [] };
      }
      function Mc(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function Co() {
      }
      function Gf(e, t, l) {
        ue.actQueue !== null && (ue.didUsePromise = !0);
        var s = e.thenables;
        switch (l = s[l], l === void 0 ? s.push(t) : l !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
          "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
        )), t.then(Co, Co), t = l), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, xf(e), e;
          default:
            if (typeof t.status == "string")
              t.then(Co, Co);
            else {
              if (e = kt, e !== null && 100 < e.shellSuspendCounter)
                throw Error(
                  "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
                );
              e = t, e.status = "pending", e.then(
                function(o) {
                  if (t.status === "pending") {
                    var m = t;
                    m.status = "fulfilled", m.value = o;
                  }
                },
                function(o) {
                  if (t.status === "pending") {
                    var m = t;
                    m.status = "rejected", m.reason = o;
                  }
                }
              );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw e = t.reason, xf(e), e;
            }
            throw kr = t, Xp = !0, Qp;
        }
      }
      function Rc() {
        if (kr === null)
          throw Error(
            "Expected a suspended thenable. This is a bug in React. Please file an issue."
          );
        var e = kr;
        return kr = null, Xp = !1, e;
      }
      function xf(e) {
        if (e === Qp)
          throw Error(
            "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
      }
      function xa(e) {
        var t = mt;
        return e != null && (mt = t === null ? e : t.concat(e)), t;
      }
      function To(e, t, l) {
        for (var s = Object.keys(e.props), o = 0; o < s.length; o++) {
          var m = s[o];
          if (m !== "children" && m !== "key") {
            t === null && (t = Rr(e, l.mode, 0), t._debugInfo = mt, t.return = l), te(
              t,
              function(g) {
                console.error(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  g
                );
              },
              m
            );
            break;
          }
        }
      }
      function Ds(e) {
        var t = rm;
        return rm += 1, $r === null && ($r = Uf()), Gf($r, e, t);
      }
      function _s(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
      }
      function bo(e, t) {
        throw t.$$typeof === Cp ? Error(
          `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
        ) : (e = Object.prototype.toString.call(t), Error(
          "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
        ));
      }
      function Dc(e, t) {
        var l = F(e) || "Component";
        iA[l] || (iA[l] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
          t,
          t,
          t
        ) : console.error(
          `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
          t,
          t,
          l,
          t,
          l
        ));
      }
      function _c(e, t) {
        var l = F(e) || "Component";
        sA[l] || (sA[l] = !0, t = String(t), e.tag === 3 ? console.error(
          `Symbols are not valid as a React child.
  root.render(%s)`,
          t
        ) : console.error(
          `Symbols are not valid as a React child.
  <%s>%s</%s>`,
          l,
          t,
          l
        ));
      }
      function zf(e) {
        function t(K, L) {
          if (e) {
            var q = K.deletions;
            q === null ? (K.deletions = [L], K.flags |= 16) : q.push(L);
          }
        }
        function l(K, L) {
          if (!e) return null;
          for (; L !== null; )
            t(K, L), L = L.sibling;
          return null;
        }
        function s(K) {
          for (var L = /* @__PURE__ */ new Map(); K !== null; )
            K.key !== null ? L.set(K.key, K) : L.set(K.index, K), K = K.sibling;
          return L;
        }
        function o(K, L) {
          return K = Ci(K, L), K.index = 0, K.sibling = null, K;
        }
        function m(K, L, q) {
          return K.index = q, e ? (q = K.alternate, q !== null ? (q = q.index, q < L ? (K.flags |= 33554434, L) : q) : (K.flags |= 33554434, L)) : (K.flags |= 1048576, L);
        }
        function g(K) {
          return e && K.alternate === null && (K.flags |= 33554434), K;
        }
        function _(K, L, q, ve) {
          return L === null || L.tag !== 6 ? (L = zd(
            q,
            K.mode,
            ve
          ), L.return = K, L._debugOwner = K, L._debugInfo = mt, L) : (L = o(L, q), L.return = K, L._debugInfo = mt, L);
        }
        function Q(K, L, q, ve) {
          var Ye = q.type;
          return Ye === es ? (L = Me(
            K,
            L,
            q.props.children,
            ve,
            q.key
          ), To(q, L, K), L) : L !== null && (L.elementType === Ye || yp(L, q) || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Wn && so(Ye) === L.type) ? (L = o(L, q.props), _s(L, q), L.return = K, L._debugOwner = q._owner, L._debugInfo = mt, L) : (L = Rr(q, K.mode, ve), _s(L, q), L.return = K, L._debugInfo = mt, L);
        }
        function le(K, L, q, ve) {
          return L === null || L.tag !== 4 || L.stateNode.containerInfo !== q.containerInfo || L.stateNode.implementation !== q.implementation ? (L = Dr(q, K.mode, ve), L.return = K, L._debugInfo = mt, L) : (L = o(L, q.children || []), L.return = K, L._debugInfo = mt, L);
        }
        function Me(K, L, q, ve, Ye) {
          return L === null || L.tag !== 7 ? (L = ki(
            q,
            K.mode,
            ve,
            Ye
          ), L.return = K, L._debugOwner = K, L._debugInfo = mt, L) : (L = o(L, q), L.return = K, L._debugInfo = mt, L);
        }
        function Ue(K, L, q) {
          if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
            return L = zd(
              "" + L,
              K.mode,
              q
            ), L.return = K, L._debugOwner = K, L._debugInfo = mt, L;
          if (typeof L == "object" && L !== null) {
            switch (L.$$typeof) {
              case $i:
                return q = Rr(
                  L,
                  K.mode,
                  q
                ), _s(q, L), q.return = K, K = xa(L._debugInfo), q._debugInfo = mt, mt = K, q;
              case fa:
                return L = Dr(
                  L,
                  K.mode,
                  q
                ), L.return = K, L._debugInfo = mt, L;
              case Wn:
                var ve = xa(L._debugInfo);
                return L = so(L), K = Ue(K, L, q), mt = ve, K;
            }
            if (La(L) || U(L))
              return q = ki(
                L,
                K.mode,
                q,
                null
              ), q.return = K, q._debugOwner = K, K = xa(L._debugInfo), q._debugInfo = mt, mt = K, q;
            if (typeof L.then == "function")
              return ve = xa(L._debugInfo), K = Ue(
                K,
                Ds(L),
                q
              ), mt = ve, K;
            if (L.$$typeof === xl)
              return Ue(
                K,
                ju(K, L),
                q
              );
            bo(K, L);
          }
          return typeof L == "function" && Dc(K, L), typeof L == "symbol" && _c(K, L), null;
        }
        function Ke(K, L, q, ve) {
          var Ye = L !== null ? L.key : null;
          if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
            return Ye !== null ? null : _(K, L, "" + q, ve);
          if (typeof q == "object" && q !== null) {
            switch (q.$$typeof) {
              case $i:
                return q.key === Ye ? (Ye = xa(q._debugInfo), K = Q(
                  K,
                  L,
                  q,
                  ve
                ), mt = Ye, K) : null;
              case fa:
                return q.key === Ye ? le(K, L, q, ve) : null;
              case Wn:
                return Ye = xa(q._debugInfo), q = so(q), K = Ke(
                  K,
                  L,
                  q,
                  ve
                ), mt = Ye, K;
            }
            if (La(q) || U(q))
              return Ye !== null ? null : (Ye = xa(q._debugInfo), K = Me(
                K,
                L,
                q,
                ve,
                null
              ), mt = Ye, K);
            if (typeof q.then == "function")
              return Ye = xa(q._debugInfo), K = Ke(
                K,
                L,
                Ds(q),
                ve
              ), mt = Ye, K;
            if (q.$$typeof === xl)
              return Ke(
                K,
                L,
                ju(K, q),
                ve
              );
            bo(K, q);
          }
          return typeof q == "function" && Dc(K, q), typeof q == "symbol" && _c(K, q), null;
        }
        function St(K, L, q, ve, Ye) {
          if (typeof ve == "string" && ve !== "" || typeof ve == "number" || typeof ve == "bigint")
            return K = K.get(q) || null, _(L, K, "" + ve, Ye);
          if (typeof ve == "object" && ve !== null) {
            switch (ve.$$typeof) {
              case $i:
                return q = K.get(
                  ve.key === null ? q : ve.key
                ) || null, K = xa(ve._debugInfo), L = Q(
                  L,
                  q,
                  ve,
                  Ye
                ), mt = K, L;
              case fa:
                return K = K.get(
                  ve.key === null ? q : ve.key
                ) || null, le(L, K, ve, Ye);
              case Wn:
                var Rt = xa(ve._debugInfo);
                return ve = so(ve), L = St(
                  K,
                  L,
                  q,
                  ve,
                  Ye
                ), mt = Rt, L;
            }
            if (La(ve) || U(ve))
              return q = K.get(q) || null, K = xa(ve._debugInfo), L = Me(
                L,
                q,
                ve,
                Ye,
                null
              ), mt = K, L;
            if (typeof ve.then == "function")
              return Rt = xa(ve._debugInfo), L = St(
                K,
                L,
                q,
                Ds(ve),
                Ye
              ), mt = Rt, L;
            if (ve.$$typeof === xl)
              return St(
                K,
                L,
                q,
                ju(L, ve),
                Ye
              );
            bo(L, ve);
          }
          return typeof ve == "function" && Dc(L, ve), typeof ve == "symbol" && _c(L, ve), null;
        }
        function Lt(K, L, q, ve) {
          if (typeof q != "object" || q === null) return ve;
          switch (q.$$typeof) {
            case $i:
            case fa:
              Z(K, L, q);
              var Ye = q.key;
              if (typeof Ye != "string") break;
              if (ve === null) {
                ve = /* @__PURE__ */ new Set(), ve.add(Ye);
                break;
              }
              if (!ve.has(Ye)) {
                ve.add(Ye);
                break;
              }
              te(L, function() {
                console.error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  Ye
                );
              });
              break;
            case Wn:
              q = so(q), Lt(K, L, q, ve);
          }
          return ve;
        }
        function yf(K, L, q, ve) {
          for (var Ye = null, Rt = null, it = null, ct = L, ft = L = 0, ia = null; ct !== null && ft < q.length; ft++) {
            ct.index > ft ? (ia = ct, ct = null) : ia = ct.sibling;
            var Oa = Ke(
              K,
              ct,
              q[ft],
              ve
            );
            if (Oa === null) {
              ct === null && (ct = ia);
              break;
            }
            Ye = Lt(
              K,
              Oa,
              q[ft],
              Ye
            ), e && ct && Oa.alternate === null && t(K, ct), L = m(Oa, L, ft), it === null ? Rt = Oa : it.sibling = Oa, it = Oa, ct = ia;
          }
          if (ft === q.length)
            return l(K, ct), Mt && Un(K, ft), Rt;
          if (ct === null) {
            for (; ft < q.length; ft++)
              ct = Ue(K, q[ft], ve), ct !== null && (Ye = Lt(
                K,
                ct,
                q[ft],
                Ye
              ), L = m(
                ct,
                L,
                ft
              ), it === null ? Rt = ct : it.sibling = ct, it = ct);
            return Mt && Un(K, ft), Rt;
          }
          for (ct = s(ct); ft < q.length; ft++)
            ia = St(
              ct,
              K,
              ft,
              q[ft],
              ve
            ), ia !== null && (Ye = Lt(
              K,
              ia,
              q[ft],
              Ye
            ), e && ia.alternate !== null && ct.delete(
              ia.key === null ? ft : ia.key
            ), L = m(
              ia,
              L,
              ft
            ), it === null ? Rt = ia : it.sibling = ia, it = ia);
          return e && ct.forEach(function(vs) {
            return t(K, vs);
          }), Mt && Un(K, ft), Rt;
        }
        function Af(K, L, q, ve) {
          if (q == null)
            throw Error("An iterable object provided no iterator.");
          for (var Ye = null, Rt = null, it = L, ct = L = 0, ft = null, ia = null, Oa = q.next(); it !== null && !Oa.done; ct++, Oa = q.next()) {
            it.index > ct ? (ft = it, it = null) : ft = it.sibling;
            var vs = Ke(K, it, Oa.value, ve);
            if (vs === null) {
              it === null && (it = ft);
              break;
            }
            ia = Lt(
              K,
              vs,
              Oa.value,
              ia
            ), e && it && vs.alternate === null && t(K, it), L = m(vs, L, ct), Rt === null ? Ye = vs : Rt.sibling = vs, Rt = vs, it = ft;
          }
          if (Oa.done)
            return l(K, it), Mt && Un(K, ct), Ye;
          if (it === null) {
            for (; !Oa.done; ct++, Oa = q.next())
              it = Ue(K, Oa.value, ve), it !== null && (ia = Lt(
                K,
                it,
                Oa.value,
                ia
              ), L = m(
                it,
                L,
                ct
              ), Rt === null ? Ye = it : Rt.sibling = it, Rt = it);
            return Mt && Un(K, ct), Ye;
          }
          for (it = s(it); !Oa.done; ct++, Oa = q.next())
            ft = St(
              it,
              K,
              ct,
              Oa.value,
              ve
            ), ft !== null && (ia = Lt(
              K,
              ft,
              Oa.value,
              ia
            ), e && ft.alternate !== null && it.delete(
              ft.key === null ? ct : ft.key
            ), L = m(
              ft,
              L,
              ct
            ), Rt === null ? Ye = ft : Rt.sibling = ft, Rt = ft);
          return e && it.forEach(function(i1) {
            return t(K, i1);
          }), Mt && Un(K, ct), Ye;
        }
        function ti(K, L, q, ve) {
          if (typeof q == "object" && q !== null && q.type === es && q.key === null && (To(q, null, K), q = q.props.children), typeof q == "object" && q !== null) {
            switch (q.$$typeof) {
              case $i:
                var Ye = xa(q._debugInfo);
                e: {
                  for (var Rt = q.key; L !== null; ) {
                    if (L.key === Rt) {
                      if (Rt = q.type, Rt === es) {
                        if (L.tag === 7) {
                          l(
                            K,
                            L.sibling
                          ), ve = o(
                            L,
                            q.props.children
                          ), ve.return = K, ve._debugOwner = q._owner, ve._debugInfo = mt, To(q, ve, K), K = ve;
                          break e;
                        }
                      } else if (L.elementType === Rt || yp(
                        L,
                        q
                      ) || typeof Rt == "object" && Rt !== null && Rt.$$typeof === Wn && so(Rt) === L.type) {
                        l(
                          K,
                          L.sibling
                        ), ve = o(L, q.props), _s(ve, q), ve.return = K, ve._debugOwner = q._owner, ve._debugInfo = mt, K = ve;
                        break e;
                      }
                      l(K, L);
                      break;
                    } else t(K, L);
                    L = L.sibling;
                  }
                  q.type === es ? (ve = ki(
                    q.props.children,
                    K.mode,
                    ve,
                    q.key
                  ), ve.return = K, ve._debugOwner = K, ve._debugInfo = mt, To(q, ve, K), K = ve) : (ve = Rr(
                    q,
                    K.mode,
                    ve
                  ), _s(ve, q), ve.return = K, ve._debugInfo = mt, K = ve);
                }
                return K = g(K), mt = Ye, K;
              case fa:
                e: {
                  for (Ye = q, q = Ye.key; L !== null; ) {
                    if (L.key === q)
                      if (L.tag === 4 && L.stateNode.containerInfo === Ye.containerInfo && L.stateNode.implementation === Ye.implementation) {
                        l(
                          K,
                          L.sibling
                        ), ve = o(
                          L,
                          Ye.children || []
                        ), ve.return = K, K = ve;
                        break e;
                      } else {
                        l(K, L);
                        break;
                      }
                    else t(K, L);
                    L = L.sibling;
                  }
                  ve = Dr(
                    Ye,
                    K.mode,
                    ve
                  ), ve.return = K, K = ve;
                }
                return g(K);
              case Wn:
                return Ye = xa(q._debugInfo), q = so(q), K = ti(
                  K,
                  L,
                  q,
                  ve
                ), mt = Ye, K;
            }
            if (La(q))
              return Ye = xa(q._debugInfo), K = yf(
                K,
                L,
                q,
                ve
              ), mt = Ye, K;
            if (U(q)) {
              if (Ye = xa(q._debugInfo), Rt = U(q), typeof Rt != "function")
                throw Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
                );
              var it = Rt.call(q);
              return it === q ? (K.tag !== 0 || Object.prototype.toString.call(K.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(it) !== "[object Generator]") && (lA || console.error(
                "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
              ), lA = !0) : q.entries !== Rt || vv || (console.error(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ), vv = !0), K = Af(
                K,
                L,
                it,
                ve
              ), mt = Ye, K;
            }
            if (typeof q.then == "function")
              return Ye = xa(q._debugInfo), K = ti(
                K,
                L,
                Ds(q),
                ve
              ), mt = Ye, K;
            if (q.$$typeof === xl)
              return ti(
                K,
                L,
                ju(K, q),
                ve
              );
            bo(K, q);
          }
          return typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint" ? (Ye = "" + q, L !== null && L.tag === 6 ? (l(
            K,
            L.sibling
          ), ve = o(L, Ye), ve.return = K, K = ve) : (l(K, L), ve = zd(
            Ye,
            K.mode,
            ve
          ), ve.return = K, ve._debugOwner = K, ve._debugInfo = mt, K = ve), g(K)) : (typeof q == "function" && Dc(K, q), typeof q == "symbol" && _c(K, q), l(K, L));
        }
        return function(K, L, q, ve) {
          var Ye = mt;
          mt = null;
          try {
            rm = 0;
            var Rt = ti(
              K,
              L,
              q,
              ve
            );
            return $r = null, Rt;
          } catch (ia) {
            if (ia === Qp) throw ia;
            var it = C(29, ia, null, K.mode);
            it.lanes = ve, it.return = K;
            var ct = it._debugInfo = mt;
            if (it._debugOwner = K._debugOwner, ct != null) {
              for (var ft = ct.length - 1; 0 <= ft; ft--)
                if (typeof ct[ft].stack == "string") {
                  it._debugOwner = ct[ft];
                  break;
                }
            }
            return it;
          } finally {
            mt = Ye;
          }
        };
      }
      function Hs(e, t) {
        var l = zi;
        pe(Vp, l, e), pe(ef, t, e), zi = l | t.baseLanes;
      }
      function Mo(e) {
        pe(Vp, zi, e), pe(
          ef,
          ef.current,
          e
        );
      }
      function Os(e) {
        zi = Vp.current, de(ef, e), de(Vp, e);
      }
      function Uu(e) {
        var t = e.alternate;
        pe(
          tn,
          tn.current & tf,
          e
        ), pe(yu, e, e), Ui === null && (t === null || ef.current !== null || t.memoizedState !== null) && (Ui = e);
      }
      function jf(e) {
        if (e.tag === 22) {
          if (pe(tn, tn.current, e), pe(yu, e, e), Ui === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Ui = e);
          }
        } else Il(e);
      }
      function Il(e) {
        pe(tn, tn.current, e), pe(
          yu,
          yu.current,
          e
        );
      }
      function wl(e) {
        de(yu, e), Ui === e && (Ui = null), de(tn, e);
      }
      function Ro(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var l = t.memoizedState;
            if (l !== null && (l = l.dehydrated, l === null || jl(l) || wd(l)))
              return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      function lt() {
        var e = se;
        gu === null ? gu = [e] : gu.push(e);
      }
      function Ce() {
        var e = se;
        if (gu !== null && (ds++, gu[ds] !== e)) {
          var t = F(
            ut
          );
          if (!cA.has(t) && (cA.add(t), gu !== null)) {
            for (var l = "", s = 0; s <= ds; s++) {
              var o = gu[s], m = s === ds ? e : o;
              for (o = s + 1 + ". " + o; 30 > o.length; )
                o += " ";
              o += m + `
`, l += o;
            }
            console.error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              t,
              l
            );
          }
        }
      }
      function Qi(e) {
        e == null || La(e) || console.error(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
          se,
          typeof e
        );
      }
      function Ns() {
        var e = F(ut);
        fA.has(e) || (fA.add(e), console.error(
          "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
          e
        ));
      }
      function ra() {
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      }
      function Hc(e, t) {
        if (mm) return !1;
        if (t === null)
          return console.error(
            "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
            se
          ), !1;
        e.length !== t.length && console.error(
          `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
          se,
          "[" + t.join(", ") + "]",
          "[" + e.join(", ") + "]"
        );
        for (var l = 0; l < t.length && l < e.length; l++)
          if (!P(e[l], t[l])) return !1;
        return !0;
      }
      function Lf(e, t, l, s, o, m) {
        oo = m, ut = t, gu = e !== null ? e._debugHookTypes : null, ds = -1, mm = e !== null && e.type !== t.type, (Object.prototype.toString.call(l) === "[object AsyncFunction]" || Object.prototype.toString.call(l) === "[object AsyncGeneratorFunction]") && (m = F(
          ut
        ), yv.has(m) || (yv.add(m), console.error(
          "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ue.H = e !== null && e.memoizedState !== null ? ro : gu !== null ? dc : co, fc = m = (t.mode & 8) !== aa;
        var g = pv(l, s, o);
        if (fc = !1, nf && (g = Oc(
          t,
          l,
          s,
          o
        )), m) {
          Tt(!0);
          try {
            g = Oc(
              t,
              l,
              s,
              o
            );
          } finally {
            Tt(!1);
          }
        }
        return za(e, t), g;
      }
      function za(e, t) {
        t._debugHookTypes = gu, t.dependencies === null ? fs !== null && (t.dependencies = {
          lanes: 0,
          firstContext: null,
          _debugThenableState: fs
        }) : t.dependencies._debugThenableState = fs, ue.H = Gi;
        var l = It !== null && It.next !== null;
        if (oo = 0, gu = se = Qa = It = ut = null, ds = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
          "Internal React error: Expected static flag was missing. Please notify the React team."
        ), Fp = !1, dm = 0, fs = null, l)
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        e === null || mn || (e = e.dependencies, e !== null && rr(e) && (mn = !0)), Xp ? (Xp = !1, e = !0) : e = !1, e && (t = F(t) || "Unknown", rA.has(t) || yv.has(t) || (rA.add(t), console.error(
          "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
        )));
      }
      function Oc(e, t, l, s) {
        ut = e;
        var o = 0;
        do {
          if (nf && (fs = null), dm = 0, nf = !1, o >= wE)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop."
            );
          if (o += 1, mm = !1, Qa = It = null, e.updateQueue != null) {
            var m = e.updateQueue;
            m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
          }
          ds = -1, ue.H = mc, m = pv(t, l, s);
        } while (nf);
        return m;
      }
      function Vm() {
        var e = ue.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? Us(t) : t, e = e.useState()[0], (It !== null ? It.memoizedState : null) !== e && (ut.flags |= 1024), t;
      }
      function Nc() {
        var e = Zp !== 0;
        return Zp = 0, e;
      }
      function Uc(e, t, l) {
        t.updateQueue = e.updateQueue, t.flags = (t.mode & 16) !== aa ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~l;
      }
      function Gc(e) {
        if (Fp) {
          for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
          }
          Fp = !1;
        }
        oo = 0, gu = Qa = It = ut = null, ds = -1, se = null, nf = !1, dm = Zp = 0, fs = null;
      }
      function ja() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Qa === null ? ut.memoizedState = Qa = e : Qa = Qa.next = e, Qa;
      }
      function Ut() {
        if (It === null) {
          var e = ut.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = It.next;
        var t = Qa === null ? ut.memoizedState : Qa.next;
        if (t !== null)
          Qa = t, It = e;
        else {
          if (e === null)
            throw ut.alternate === null ? Error(
              "Update hook called on initial render. This is likely a bug in React. Please file an issue."
            ) : Error("Rendered more hooks than during the previous render.");
          It = e, e = {
            memoizedState: It.memoizedState,
            baseState: It.baseState,
            baseQueue: It.baseQueue,
            queue: It.queue,
            next: null
          }, Qa === null ? ut.memoizedState = Qa = e : Qa = Qa.next = e;
        }
        return Qa;
      }
      function Us(e) {
        var t = dm;
        return dm += 1, fs === null && (fs = Uf()), e = Gf(fs, e, t), t = ut, (Qa === null ? t.memoizedState : Qa.next) === null && (t = t.alternate, ue.H = t !== null && t.memoizedState !== null ? ro : co), e;
      }
      function Gu(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Us(e);
          if (e.$$typeof === xl) return Pt(e);
        }
        throw Error("An unsupported type was passed to use(): " + String(e));
      }
      function ci(e) {
        var t = null, l = ut.updateQueue;
        if (l !== null && (t = l.memoCache), t == null) {
          var s = ut.alternate;
          s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
            data: s.data.map(function(o) {
              return o.slice();
            }),
            index: 0
          })));
        }
        if (t == null && (t = { data: [], index: 0 }), l === null && (l = Av(), ut.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0 || mm)
          for (l = t.data[t.index] = Array(e), s = 0; s < e; s++)
            l[s] = Gr;
        else
          l.length !== e && console.error(
            "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
            l.length,
            e
          );
        return t.index++, l;
      }
      function Fn(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Do(e, t, l) {
        var s = ja();
        if (l !== void 0) {
          var o = l(t);
          if (fc) {
            Tt(!0);
            try {
              l(t);
            } finally {
              Tt(!1);
            }
          }
        } else o = t;
        return s.memoizedState = s.baseState = o, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o
        }, s.queue = e, e = e.dispatch = qm.bind(
          null,
          ut,
          e
        ), [s.memoizedState, e];
      }
      function Yi(e) {
        var t = Ut();
        return _o(t, It, e);
      }
      function _o(e, t, l) {
        var s = e.queue;
        if (s === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        s.lastRenderedReducer = l;
        var o = e.baseQueue, m = s.pending;
        if (m !== null) {
          if (o !== null) {
            var g = o.next;
            o.next = m.next, m.next = g;
          }
          t.baseQueue !== o && console.error(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
          ), t.baseQueue = o = m, s.pending = null;
        }
        if (m = e.baseState, o === null) e.memoizedState = m;
        else {
          t = o.next;
          var _ = g = null, Q = null, le = t, Me = !1;
          do {
            var Ue = le.lane & -536870913;
            if (Ue !== le.lane ? (Et & Ue) === Ue : (oo & Ue) === Ue) {
              var Ke = le.revertLane;
              if (Ke === 0)
                Q !== null && (Q = Q.next = {
                  lane: 0,
                  revertLane: 0,
                  action: le.action,
                  hasEagerState: le.hasEagerState,
                  eagerState: le.eagerState,
                  next: null
                }), Ue === oc && (Me = !0);
              else if ((oo & Ke) === Ke) {
                le = le.next, Ke === oc && (Me = !0);
                continue;
              } else
                Ue = {
                  lane: 0,
                  revertLane: le.revertLane,
                  action: le.action,
                  hasEagerState: le.hasEagerState,
                  eagerState: le.eagerState,
                  next: null
                }, Q === null ? (_ = Q = Ue, g = m) : Q = Q.next = Ue, ut.lanes |= Ke, mo |= Ke;
              Ue = le.action, fc && l(m, Ue), m = le.hasEagerState ? le.eagerState : l(m, Ue);
            } else
              Ke = {
                lane: Ue,
                revertLane: le.revertLane,
                action: le.action,
                hasEagerState: le.hasEagerState,
                eagerState: le.eagerState,
                next: null
              }, Q === null ? (_ = Q = Ke, g = m) : Q = Q.next = Ke, ut.lanes |= Ue, mo |= Ue;
            le = le.next;
          } while (le !== null && le !== t);
          if (Q === null ? g = m : Q.next = _, !P(m, e.memoizedState) && (mn = !0, Me && (l = Wr, l !== null)))
            throw l;
          e.memoizedState = m, e.baseState = g, e.baseQueue = Q, s.lastRenderedState = m;
        }
        return o === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
      }
      function Xi(e) {
        var t = Ut(), l = t.queue;
        if (l === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        l.lastRenderedReducer = e;
        var s = l.dispatch, o = l.pending, m = t.memoizedState;
        if (o !== null) {
          l.pending = null;
          var g = o = o.next;
          do
            m = e(m, g.action), g = g.next;
          while (g !== o);
          P(m, t.memoizedState) || (mn = !0), t.memoizedState = m, t.baseQueue === null && (t.baseState = m), l.lastRenderedState = m;
        }
        return [m, s];
      }
      function Ho(e, t, l) {
        var s = ut, o = ja();
        if (Mt) {
          if (l === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          var m = l();
          af || m === l() || (console.error(
            "The result of getServerSnapshot should be cached to avoid an infinite loop"
          ), af = !0);
        } else {
          if (m = t(), af || (l = t(), P(m, l) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), af = !0)), kt === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          (Et & 60) !== 0 || xc(s, t, m);
        }
        return o.memoizedState = m, l = { value: m, getSnapshot: t }, o.queue = l, zs(
          Pl.bind(null, s, l, e),
          [e]
        ), s.flags |= 2048, di(
          Eu | an,
          Jf.bind(
            null,
            s,
            l,
            m,
            t
          ),
          { destroy: void 0 },
          null
        ), m;
      }
      function Oo(e, t, l) {
        var s = ut, o = Ut(), m = Mt;
        if (m) {
          if (l === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          l = l();
        } else if (l = t(), !af) {
          var g = t();
          P(l, g) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), af = !0);
        }
        (g = !P(
          (It || o).memoizedState,
          l
        )) && (o.memoizedState = l, mn = !0), o = o.queue;
        var _ = Pl.bind(null, s, o, e);
        if (sn(2048, an, _, [e]), o.getSnapshot !== t || g || Qa !== null && Qa.memoizedState.tag & Eu) {
          if (s.flags |= 2048, di(
            Eu | an,
            Jf.bind(
              null,
              s,
              o,
              l,
              t
            ),
            { destroy: void 0 },
            null
          ), kt === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          m || (oo & 60) !== 0 || xc(s, t, l);
        }
        return l;
      }
      function xc(e, t, l) {
        e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ut.updateQueue, t === null ? (t = Av(), ut.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
      }
      function Jf(e, t, l, s) {
        t.value = l, t.getSnapshot = s, zc(t) && Fm(e);
      }
      function Pl(e, t, l) {
        return l(function() {
          zc(t) && Fm(e);
        });
      }
      function zc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var l = t();
          return !P(e, l);
        } catch {
          return !0;
        }
      }
      function Fm(e) {
        var t = Se(e, 2);
        t !== null && la(t, e, 2);
      }
      function jc(e) {
        var t = ja();
        if (typeof e == "function") {
          var l = e;
          if (e = l(), fc) {
            Tt(!0);
            try {
              l();
            } finally {
              Tt(!1);
            }
          }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fn,
          lastRenderedState: e
        }, t;
      }
      function Wl(e) {
        e = jc(e);
        var t = e.queue, l = dl.bind(
          null,
          ut,
          t
        );
        return t.dispatch = l, [e.memoizedState, l];
      }
      function Dl(e) {
        var t = ja();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Wc.bind(
          null,
          ut,
          !0,
          l
        ), l.dispatch = t, [e, t];
      }
      function Lc(e, t) {
        var l = Ut();
        return Jc(l, It, e, t);
      }
      function Jc(e, t, l, s) {
        return e.baseState = l, _o(
          e,
          It,
          typeof s == "function" ? s : Fn
        );
      }
      function Gs(e, t) {
        var l = Ut();
        return It !== null ? Jc(l, It, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
      }
      function Kc(e, t, l, s, o) {
        if (kc(e))
          throw Error("Cannot update form state while rendering.");
        if (e = t.action, e !== null) {
          var m = {
            payload: o,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(g) {
              m.listeners.push(g);
            }
          };
          ue.T !== null ? l(!0) : m.isTransition = !1, s(m), l = t.pending, l === null ? (m.next = t.pending = m, ri(t, m)) : (m.next = l.next, t.pending = l.next = m);
        }
      }
      function ri(e, t) {
        var l = t.action, s = t.payload, o = e.state;
        if (t.isTransition) {
          var m = ue.T, g = {};
          ue.T = g, ue.T._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var _ = l(o, s), Q = ue.S;
            Q !== null && Q(g, _), Za(e, t, _);
          } catch (le) {
            Qc(e, t, le);
          } finally {
            ue.T = m, m === null && g._updatedFibers && (e = g._updatedFibers.size, g._updatedFibers.clear(), 10 < e && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ));
          }
        } else
          try {
            g = l(o, s), Za(e, t, g);
          } catch (le) {
            Qc(e, t, le);
          }
      }
      function Za(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? (l.then(
          function(s) {
            No(e, t, s);
          },
          function(s) {
            return Qc(e, t, s);
          }
        ), t.isTransition || console.error(
          "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
        )) : No(e, t, l);
      }
      function No(e, t, l) {
        t.status = "fulfilled", t.value = l, Yc(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, ri(e, l)));
      }
      function Qc(e, t, l) {
        var s = e.pending;
        if (e.pending = null, s !== null) {
          s = s.next;
          do
            t.status = "rejected", t.reason = l, Yc(t), t = t.next;
          while (t !== s);
        }
        e.action = null;
      }
      function Yc(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function xs(e, t) {
        return t;
      }
      function fi(e, t) {
        if (Mt) {
          var l = kt.formState;
          if (l !== null) {
            e: {
              var s = ut;
              if (Mt) {
                if (bn) {
                  var o = da(
                    bn,
                    Ni
                  );
                  if (o) {
                    bn = Pu(o), s = Hp(o);
                    break e;
                  }
                }
                B(s);
              }
              s = !1;
            }
            s && (t = l[0]);
          }
        }
        l = ja(), l.memoizedState = l.baseState = t, s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: xs,
          lastRenderedState: t
        }, l.queue = s, l = dl.bind(
          null,
          ut,
          s
        ), s.dispatch = l, s = jc(!1);
        var m = Wc.bind(
          null,
          ut,
          !1,
          s.queue
        );
        return s = ja(), o = {
          state: t,
          dispatch: null,
          action: e,
          pending: null
        }, s.queue = o, l = Kc.bind(
          null,
          ut,
          o,
          m,
          l
        ), o.dispatch = l, s.memoizedState = e, [t, l, !1];
      }
      function Vi(e) {
        var t = Ut();
        return Kf(t, It, e);
      }
      function Kf(e, t, l) {
        t = _o(
          e,
          t,
          xs
        )[0], e = Yi(Fn)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Us(t) : t;
        var s = Ut(), o = s.queue, m = o.dispatch;
        return l !== s.memoizedState && (ut.flags |= 2048, di(
          Eu | an,
          Zn.bind(null, o, l),
          { destroy: void 0 },
          null
        )), [t, m, e];
      }
      function Zn(e, t) {
        e.action = t;
      }
      function Uo(e) {
        var t = Ut(), l = It;
        if (l !== null)
          return Kf(t, l, e);
        Ut(), t = t.memoizedState, l = Ut();
        var s = l.queue.dispatch;
        return l.memoizedState = e, [t, s, !1];
      }
      function di(e, t, l, s) {
        return e = { tag: e, create: t, inst: l, deps: s, next: null }, t = ut.updateQueue, t === null && (t = Av(), ut.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (s = l.next, l.next = e, e.next = s, t.lastEffect = e), e;
      }
      function Xc(e) {
        var t = ja();
        return e = { current: e }, t.memoizedState = e;
      }
      function mi(e, t, l, s) {
        var o = ja();
        ut.flags |= e, o.memoizedState = di(
          Eu | t,
          l,
          { destroy: void 0 },
          s === void 0 ? null : s
        );
      }
      function sn(e, t, l, s) {
        var o = Ut();
        s = s === void 0 ? null : s;
        var m = o.memoizedState.inst;
        It !== null && s !== null && Hc(s, It.memoizedState.deps) ? o.memoizedState = di(t, l, m, s) : (ut.flags |= e, o.memoizedState = di(
          Eu | t,
          l,
          m,
          s
        ));
      }
      function zs(e, t) {
        (ut.mode & 16) !== aa && (ut.mode & 64) === aa ? mi(142608384, an, e, t) : mi(8390656, an, e, t);
      }
      function Vc(e, t) {
        var l = 4194308;
        return (ut.mode & 16) !== aa && (l |= 67108864), mi(l, Mn, e, t);
      }
      function Go(e, t) {
        if (typeof t == "function") {
          e = e();
          var l = t(e);
          return function() {
            typeof l == "function" ? l() : t(null);
          };
        }
        if (t != null)
          return t.hasOwnProperty("current") || console.error(
            "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
            "an object with keys {" + Object.keys(t).join(", ") + "}"
          ), e = e(), t.current = e, function() {
            t.current = null;
          };
      }
      function Fi(e, t, l) {
        typeof t != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          t !== null ? typeof t : "null"
        ), l = l != null ? l.concat([e]) : null;
        var s = 4194308;
        (ut.mode & 16) !== aa && (s |= 67108864), mi(
          s,
          Mn,
          Go.bind(null, t, e),
          l
        );
      }
      function Zt(e, t, l) {
        typeof t != "function" && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          t !== null ? typeof t : "null"
        ), l = l != null ? l.concat([e]) : null, sn(
          4,
          Mn,
          Go.bind(null, t, e),
          l
        );
      }
      function Qf(e, t) {
        return ja().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      }
      function Fc(e, t) {
        var l = Ut();
        t = t === void 0 ? null : t;
        var s = l.memoizedState;
        return t !== null && Hc(t, s[1]) ? s[0] : (l.memoizedState = [e, t], e);
      }
      function Zc(e, t) {
        var l = ja();
        t = t === void 0 ? null : t;
        var s = e();
        if (fc) {
          Tt(!0);
          try {
            e();
          } finally {
            Tt(!1);
          }
        }
        return l.memoizedState = [s, t], s;
      }
      function pi(e, t) {
        var l = Ut();
        t = t === void 0 ? null : t;
        var s = l.memoizedState;
        if (t !== null && Hc(t, s[1]))
          return s[0];
        if (s = e(), fc) {
          Tt(!0);
          try {
            e();
          } finally {
            Tt(!1);
          }
        }
        return l.memoizedState = [s, t], s;
      }
      function kl(e, t) {
        var l = ja();
        return xu(l, e, t);
      }
      function Yf(e, t) {
        var l = Ut();
        return xn(
          l,
          It.memoizedState,
          e,
          t
        );
      }
      function Xf(e, t) {
        var l = Ut();
        return It === null ? xu(l, e, t) : xn(
          l,
          It.memoizedState,
          e,
          t
        );
      }
      function xu(e, t, l) {
        return l === void 0 || (oo & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = bd(), ut.lanes |= e, mo |= e, l);
      }
      function xn(e, t, l, s) {
        return P(l, t) ? l : ef.current !== null ? (e = xu(e, l, s), P(e, t) || (mn = !0), e) : (oo & 42) === 0 ? (mn = !0, e.memoizedState = l) : (e = bd(), ut.lanes |= e, mo |= e, t);
      }
      function Vf(e, t, l, s, o) {
        var m = Iu();
        ka(
          m !== 0 && 8 > m ? m : 8
        );
        var g = ue.T, _ = {};
        ue.T = _, Wc(e, !1, t, l), _._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var Q = o(), le = ue.S;
          if (le !== null && le(_, Q), Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var Me = ql(
              Q,
              s
            );
            Zi(
              e,
              t,
              Me,
              wn(e)
            );
          } else
            Zi(
              e,
              t,
              s,
              wn(e)
            );
        } catch (Ue) {
          Zi(
            e,
            t,
            { then: function() {
            }, status: "rejected", reason: Ue },
            wn(e)
          );
        } finally {
          ka(m), ue.T = g, g === null && _._updatedFibers && (e = _._updatedFibers.size, _._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      }
      function Ff(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
          memoizedState: ou,
          baseState: ou,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fn,
            lastRenderedState: ou
          },
          next: null
        };
        var l = {};
        return t.next = {
          memoizedState: l,
          baseState: l,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fn,
            lastRenderedState: l
          },
          next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
      }
      function qc() {
        var e = jc(!1);
        return e = Vf.bind(
          null,
          ut,
          e.queue,
          !0,
          !1
        ), ja().memoizedState = e, [!1, e];
      }
      function Ic() {
        var e = Yi(Fn)[0], t = Ut().memoizedState;
        return [
          typeof e == "boolean" ? e : Us(e),
          t
        ];
      }
      function wc() {
        var e = Xi(Fn)[0], t = Ut().memoizedState;
        return [
          typeof e == "boolean" ? e : Us(e),
          t
        ];
      }
      function $l() {
        return Pt(wu);
      }
      function Pc() {
        var e = ja(), t = kt.identifierPrefix;
        if (Mt) {
          var l = dn, s = rt;
          l = (s & ~(1 << 32 - $a(s) - 1)).toString(32) + l, t = ":" + t + "R" + l, l = Zp++, 0 < l && (t += "H" + l.toString(32)), t += ":";
        } else
          l = IE++, t = ":" + t + "r" + l.toString(32) + ":";
        return e.memoizedState = t;
      }
      function Zf() {
        return ja().memoizedState = Zm.bind(
          null,
          ut
        );
      }
      function Zm(e, t) {
        for (var l = e.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var s = wn(l);
              e = Nu(s);
              var o = Vn(l, e, s);
              o !== null && (la(o, l, s), Ms(o, l, s)), l = fr(), t != null && o !== null && console.error(
                "The seed argument is not enabled outside experimental channels."
              ), e.payload = { cache: l };
              return;
          }
          l = l.return;
        }
      }
      function qm(e, t, l, s) {
        typeof s == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), s = wn(e), l = {
          lane: s,
          revertLane: 0,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, kc(e) ? $c(t, l) : (l = ye(
          e,
          t,
          l,
          s
        ), l !== null && (la(
          l,
          e,
          s
        ), vn(
          l,
          t,
          s
        ))), sl(e, s);
      }
      function dl(e, t, l, s) {
        typeof s == "function" && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        ), s = wn(e), Zi(
          e,
          t,
          l,
          s
        ), sl(e, s);
      }
      function Zi(e, t, l, s) {
        var o = {
          lane: s,
          revertLane: 0,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (kc(e)) $c(t, o);
        else {
          var m = e.alternate;
          if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = t.lastRenderedReducer, m !== null)) {
            var g = ue.H;
            ue.H = nl;
            try {
              var _ = t.lastRenderedState, Q = m(_, l);
              if (o.hasEagerState = !0, o.eagerState = Q, P(Q, _))
                return Be(e, t, o, 0), kt === null && Ee(), !1;
            } catch {
            } finally {
              ue.H = g;
            }
          }
          if (l = ye(e, t, o, s), l !== null)
            return la(l, e, s), vn(l, t, s), !0;
        }
        return !1;
      }
      function Wc(e, t, l, s) {
        if (ue.T === null && oc === 0 && console.error(
          "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
        ), s = {
          lane: 2,
          revertLane: jt(),
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, kc(e)) {
          if (t)
            throw Error("Cannot update optimistic state while rendering.");
          console.error("Cannot call startTransition while rendering.");
        } else
          t = ye(
            e,
            l,
            s,
            2
          ), t !== null && la(t, e, 2);
        sl(e, 2);
      }
      function kc(e) {
        var t = e.alternate;
        return e === ut || t !== null && t === ut;
      }
      function $c(e, t) {
        nf = Fp = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
      }
      function vn(e, t, l) {
        if ((l & 4194176) !== 0) {
          var s = t.lanes;
          s &= e.pendingLanes, l |= s, t.lanes = l, Vl(e, l);
        }
      }
      function er(e) {
        if (e !== null && typeof e != "function") {
          var t = String(e);
          BA.has(t) || (BA.add(t), console.error(
            "Expected the last optional `callback` argument to be a function. Instead received: %s.",
            e
          ));
        }
      }
      function yn(e, t, l, s) {
        var o = e.memoizedState, m = l(s, o);
        if (e.mode & 8) {
          Tt(!0);
          try {
            m = l(s, o);
          } finally {
            Tt(!1);
          }
        }
        m === void 0 && (t = $(t) || "Component", AA.has(t) || (AA.add(t), console.error(
          "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
          t
        ))), o = m == null ? o : Ia({}, o, m), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
      }
      function qf(e, t, l, s, o, m, g) {
        var _ = e.stateNode;
        if (typeof _.shouldComponentUpdate == "function") {
          if (l = _.shouldComponentUpdate(
            s,
            m,
            g
          ), e.mode & 8) {
            Tt(!0);
            try {
              l = _.shouldComponentUpdate(
                s,
                m,
                g
              );
            } finally {
              Tt(!1);
            }
          }
          return l === void 0 && console.error(
            "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
            $(t) || "Component"
          ), l;
        }
        return t.prototype && t.prototype.isPureReactComponent ? !Bo(l, s) || !Bo(o, m) : !0;
      }
      function eu(e, t, l, s) {
        var o = t.state;
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, s), t.state !== o && (e = F(e) || "Component", mA.has(e) || (mA.add(e), console.error(
          "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          e
        )), Ev.enqueueReplaceState(
          t,
          t.state,
          null
        ));
      }
      function ml(e, t) {
        var l = t;
        if ("ref" in t) {
          l = {};
          for (var s in t)
            s !== "ref" && (l[s] = t[s]);
        }
        if (e = e.defaultProps) {
          l === t && (l = Ia({}, l));
          for (var o in e)
            l[o] === void 0 && (l[o] = e[o]);
        }
        return l;
      }
      function _l(e, t) {
        try {
          lf = t.source ? F(t.source) : null, gv = null;
          var l = t.value;
          if (ue.actQueue !== null)
            ue.thrownErrors.push(l);
          else {
            var s = e.onUncaughtError;
            s(l, { componentStack: t.stack });
          }
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      function tr(e, t, l) {
        try {
          lf = l.source ? F(l.source) : null, gv = F(t);
          var s = e.onCaughtError;
          s(l.value, {
            componentStack: l.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null
          });
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      function xo(e, t, l) {
        return l = Nu(l), l.tag = rv, l.payload = { element: null }, l.callback = function() {
          te(t.source, _l, e, t);
        }, l;
      }
      function tu(e) {
        return e = Nu(e), e.tag = rv, e;
      }
      function ar(e, t, l, s) {
        var o = l.type.getDerivedStateFromError;
        if (typeof o == "function") {
          var m = s.value;
          e.payload = function() {
            return o(m);
          }, e.callback = function() {
            Ap(l), te(
              s.source,
              tr,
              t,
              l,
              s
            );
          };
        }
        var g = l.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
          Ap(l), te(
            s.source,
            tr,
            t,
            l,
            s
          ), typeof o != "function" && (ho === null ? ho = /* @__PURE__ */ new Set([this]) : ho.add(this)), FE(this, s), typeof o == "function" || (l.lanes & 2) === 0 && console.error(
            "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
            F(l) || "Unknown"
          );
        });
      }
      function js(e, t, l, s, o) {
        if (l.flags |= 32768, en && Zo(e, o), s !== null && typeof s == "object" && typeof s.then == "function") {
          if (t = l.alternate, t !== null && Ko(
            t,
            l,
            o,
            !0
          ), Mt && (rs = !0), l = yu.current, l !== null) {
            switch (l.tag) {
              case 13:
                return Ui === null ? Rd() : l.alternate === null && Ma === ps && (Ma = Mv), l.flags &= -257, l.flags |= 65536, l.lanes = o, s === Yp ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), br(e, s, o)), !1;
              case 22:
                return l.flags |= 65536, s === Yp ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([s])
                }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : l.add(s)), br(e, s, o)), !1;
            }
            throw Error(
              "Unexpected Suspense handler tag (" + l.tag + "). This is a bug in React."
            );
          }
          return br(e, s, o), Rd(), !1;
        }
        if (Mt)
          return rs = !0, t = yu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, s !== nv && ce(
            Xa(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
                { cause: s }
              ),
              l
            )
          )) : (s !== nv && ce(
            Xa(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
                { cause: s }
              ),
              l
            )
          ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, s = Xa(s, l), o = xo(
            e.stateNode,
            s,
            o
          ), Ki(e, o), Ma !== hc && (Ma = df)), !1;
        var m = Xa(
          Error(
            "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
            { cause: s }
          ),
          l
        );
        if (Em === null ? Em = [m] : Em.push(m), Ma !== hc && (Ma = df), t === null) return !0;
        s = Xa(s, l), l = t;
        do {
          switch (l.tag) {
            case 3:
              return l.flags |= 65536, e = o & -o, l.lanes |= e, e = xo(
                l.stateNode,
                s,
                e
              ), Ki(l, e), !1;
            case 1:
              if (t = l.type, m = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (ho === null || !ho.has(m))))
                return l.flags |= 65536, o &= -o, l.lanes |= o, o = tu(o), ar(
                  o,
                  e,
                  l,
                  s
                ), Ki(l, o), !1;
          }
          l = l.return;
        } while (l !== null);
        return !1;
      }
      function va(e, t, l, s) {
        t.child = e === null ? oA(t, null, l, s) : rc(
          t,
          e.child,
          l,
          s
        );
      }
      function hi(e, t, l, s, o) {
        l = l.render;
        var m = t.ref;
        if ("ref" in s) {
          var g = {};
          for (var _ in s)
            _ !== "ref" && (g[_] = s[_]);
        } else g = s;
        return Ai(t), Nn(t), s = Lf(
          e,
          t,
          l,
          g,
          m,
          o
        ), _ = Nc(), Qn(), e !== null && !mn ? (Uc(e, t, o), Ol(e, t, o)) : (Mt && _ && Na(t), t.flags |= 1, va(e, t, s, o), t.child);
      }
      function If(e, t, l, s, o) {
        if (e === null) {
          var m = l.type;
          return typeof m == "function" && !Gd(m) && m.defaultProps === void 0 && l.compare === null ? (l = Bi(m), t.tag = 15, t.type = l, sr(t, m), wf(
            e,
            t,
            l,
            s,
            o
          )) : (e = xd(
            l.type,
            null,
            s,
            t,
            t.mode,
            o
          ), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (m = e.child, !yi(e, o)) {
          var g = m.memoizedProps;
          if (l = l.compare, l = l !== null ? l : Bo, l(g, s) && e.ref === t.ref)
            return Ol(
              e,
              t,
              o
            );
        }
        return t.flags |= 1, e = Ci(m, s), e.ref = t.ref, e.return = t, t.child = e;
      }
      function wf(e, t, l, s, o) {
        if (e !== null) {
          var m = e.memoizedProps;
          if (Bo(m, s) && e.ref === t.ref && t.type === e.type)
            if (mn = !1, t.pendingProps = s = m, yi(e, o))
              (e.flags & 131072) !== 0 && (mn = !0);
            else
              return t.lanes = e.lanes, Ol(e, t, o);
        }
        return nr(
          e,
          t,
          l,
          s,
          o
        );
      }
      function Ls(e, t, l) {
        var s = t.pendingProps, o = s.children, m = (t.stateNode._pendingVisibility & 2) !== 0, g = e !== null ? e.memoizedState : null;
        if (vi(e, t), s.mode === "hidden" || m) {
          if ((t.flags & 128) !== 0) {
            if (s = g !== null ? g.baseLanes | l : l, e !== null) {
              for (o = t.child = e.child, m = 0; o !== null; )
                m = m | o.lanes | o.childLanes, o = o.sibling;
              t.childLanes = m & ~s;
            } else t.childLanes = 0, t.child = null;
            return Pf(
              e,
              t,
              s,
              l
            );
          }
          if ((l & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && au(
              t,
              g !== null ? g.cachePool : null
            ), g !== null ? Hs(t, g) : Mo(t), jf(t);
          else
            return t.lanes = t.childLanes = 536870912, Pf(
              e,
              t,
              g !== null ? g.baseLanes | l : l,
              l
            );
        } else
          g !== null ? (au(t, g.cachePool), Hs(t, g), Il(t), t.memoizedState = null) : (e !== null && au(t, null), Mo(t), Il(t));
        return va(e, t, o, l), t.child;
      }
      function Pf(e, t, l, s) {
        var o = dr();
        return o = o === null ? null : {
          parent: ga ? Ta._currentValue : Ta._currentValue2,
          pool: o
        }, t.memoizedState = {
          baseLanes: l,
          cachePool: o
        }, e !== null && au(t, null), Mo(t), jf(t), e !== null && Ko(e, t, s, !0), null;
      }
      function vi(e, t) {
        var l = t.ref;
        if (l === null)
          e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
          if (typeof l != "function" && typeof l != "object")
            throw Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
            );
          (e === null || e.ref !== l) && (t.flags |= 2097664);
        }
      }
      function nr(e, t, l, s, o) {
        if (l.prototype && typeof l.prototype.render == "function") {
          var m = $(l) || "Unknown";
          bA[m] || (console.error(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            m,
            m
          ), bA[m] = !0);
        }
        return t.mode & 8 && ku.recordLegacyContextWarning(
          t,
          null
        ), e === null && (sr(t, t.type), l.contextTypes && (m = $(l) || "Unknown", RA[m] || (RA[m] = !0, console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
          m
        )))), Ai(t), Nn(t), l = Lf(
          e,
          t,
          l,
          s,
          void 0,
          o
        ), s = Nc(), Qn(), e !== null && !mn ? (Uc(e, t, o), Ol(e, t, o)) : (Mt && s && Na(t), t.flags |= 1, va(e, t, l, o), t.child);
      }
      function lr(e, t, l, s, o, m) {
        return Ai(t), Nn(t), ds = -1, mm = e !== null && e.type !== t.type, t.updateQueue = null, l = Oc(
          t,
          s,
          l,
          o
        ), za(e, t), s = Nc(), Qn(), e !== null && !mn ? (Uc(e, t, m), Ol(e, t, m)) : (Mt && s && Na(t), t.flags |= 1, va(e, t, l, m), t.child);
      }
      function ur(e, t, l, s, o) {
        switch (E(t)) {
          case !1:
            var m = t.stateNode, g = new t.type(
              t.memoizedProps,
              m.context
            ).state;
            m.updater.enqueueSetState(m, g, null);
            break;
          case !0:
            t.flags |= 128, t.flags |= 65536, m = Error("Simulated error coming from DevTools");
            var _ = o & -o;
            if (t.lanes |= _, g = kt, g === null)
              throw Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            _ = tu(_), ar(
              _,
              g,
              t,
              Xa(m, t)
            ), Ki(t, _);
        }
        if (Ai(t), t.stateNode === null) {
          if (g = Sl, m = l.contextType, "contextType" in l && m !== null && (m === void 0 || m.$$typeof !== xl) && !SA.has(l) && (SA.add(l), _ = m === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? " However, it is set to a " + typeof m + "." : m.$$typeof === Nr ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", console.error(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
            $(l) || "Component",
            _
          )), typeof m == "object" && m !== null && (g = Pt(m)), m = new l(s, g), t.mode & 8) {
            Tt(!0);
            try {
              m = new l(s, g);
            } finally {
              Tt(!1);
            }
          }
          if (g = t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Ev, t.stateNode = m, m._reactInternals = t, m._reactInternalInstance = dA, typeof l.getDerivedStateFromProps == "function" && g === null && (g = $(l) || "Component", pA.has(g) || (pA.add(g), console.error(
            "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
            g,
            m.state === null ? "null" : "undefined",
            g
          ))), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function") {
            var Q = _ = g = null;
            if (typeof m.componentWillMount == "function" && m.componentWillMount.__suppressDeprecationWarning !== !0 ? g = "componentWillMount" : typeof m.UNSAFE_componentWillMount == "function" && (g = "UNSAFE_componentWillMount"), typeof m.componentWillReceiveProps == "function" && m.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _ = "componentWillReceiveProps" : typeof m.UNSAFE_componentWillReceiveProps == "function" && (_ = "UNSAFE_componentWillReceiveProps"), typeof m.componentWillUpdate == "function" && m.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof m.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), g !== null || _ !== null || Q !== null) {
              m = $(l) || "Component";
              var le = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              vA.has(m) || (vA.add(m), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                m,
                le,
                g !== null ? `
  ` + g : "",
                _ !== null ? `
  ` + _ : "",
                Q !== null ? `
  ` + Q : ""
              ));
            }
          }
          m = t.stateNode, g = $(l) || "Component", m.render || (l.prototype && typeof l.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            g
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            g
          )), !m.getInitialState || m.getInitialState.isReactClassApproved || m.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            g
          ), m.getDefaultProps && !m.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            g
          ), m.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            g
          ), l.childContextTypes && !gA.has(l) && (gA.add(l), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            g
          )), l.contextTypes && !EA.has(l) && (EA.add(l), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            g
          )), typeof m.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            g
          ), l.prototype && l.prototype.isPureReactComponent && typeof m.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            $(l) || "A pure component"
          ), typeof m.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            g
          ), typeof m.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            g
          ), typeof m.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            g
          ), typeof m.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            g
          ), _ = m.props !== s, m.props !== void 0 && _ && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            g
          ), m.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            g,
            g
          ), typeof m.getSnapshotBeforeUpdate != "function" || typeof m.componentDidUpdate == "function" || hA.has(l) || (hA.add(l), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            $(l)
          )), typeof m.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            g
          ), typeof m.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            g
          ), typeof l.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            g
          ), (_ = m.state) && (typeof _ != "object" || La(_)) && console.error("%s.state: must be set to an object or null", g), typeof m.getChildContext == "function" && typeof l.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            g
          ), m = t.stateNode, m.props = s, m.state = t.memoizedState, m.refs = {}, Ga(t), g = l.contextType, m.context = typeof g == "object" && g !== null ? Pt(g) : Sl, m.state === s && (g = $(l) || "Component", yA.has(g) || (yA.add(g), console.error(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            g
          ))), t.mode & 8 && ku.recordLegacyContextWarning(
            t,
            m
          ), ku.recordUnsafeLifecycleWarnings(
            t,
            m
          ), m.state = t.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (yn(
            t,
            l,
            g,
            s
          ), m.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (g = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), g !== m.state && (console.error(
            "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            F(t) || "Component"
          ), Ev.enqueueReplaceState(
            m,
            m.state,
            null
          )), Rs(t, s, m, o), oi(), m.state = t.memoizedState), typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== aa && (t.flags |= 67108864), m = !0;
        } else if (e === null) {
          m = t.stateNode;
          var Me = t.memoizedProps;
          _ = ml(l, Me), m.props = _;
          var Ue = m.context;
          Q = l.contextType, g = Sl, typeof Q == "object" && Q !== null && (g = Pt(Q)), le = l.getDerivedStateFromProps, Q = typeof le == "function" || typeof m.getSnapshotBeforeUpdate == "function", Me = t.pendingProps !== Me, Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (Me || Ue !== g) && eu(
            t,
            m,
            s,
            g
          ), io = !1;
          var Ke = t.memoizedState;
          m.state = Ke, Rs(t, s, m, o), oi(), Ue = t.memoizedState, Me || Ke !== Ue || io ? (typeof le == "function" && (yn(
            t,
            l,
            le,
            s
          ), Ue = t.memoizedState), (_ = io || qf(
            t,
            l,
            _,
            s,
            Ke,
            Ue,
            g
          )) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== aa && (t.flags |= 67108864)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== aa && (t.flags |= 67108864), t.memoizedProps = s, t.memoizedState = Ue), m.props = s, m.state = Ue, m.context = g, m = _) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & 16) !== aa && (t.flags |= 67108864), m = !1);
        } else {
          m = t.stateNode, fl(e, t), g = t.memoizedProps, Q = ml(l, g), m.props = Q, le = t.pendingProps, Ke = m.context, Ue = l.contextType, _ = Sl, typeof Ue == "object" && Ue !== null && (_ = Pt(Ue)), Me = l.getDerivedStateFromProps, (Ue = typeof Me == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== le || Ke !== _) && eu(
            t,
            m,
            s,
            _
          ), io = !1, Ke = t.memoizedState, m.state = Ke, Rs(t, s, m, o), oi();
          var St = t.memoizedState;
          g !== le || Ke !== St || io || e !== null && e.dependencies !== null && rr(e.dependencies) ? (typeof Me == "function" && (yn(
            t,
            l,
            Me,
            s
          ), St = t.memoizedState), (Q = io || qf(
            t,
            l,
            Q,
            s,
            Ke,
            St,
            _
          ) || e !== null && e.dependencies !== null && rr(e.dependencies)) ? (Ue || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, St, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
            s,
            St,
            _
          )), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Ke === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Ke === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = St), m.props = s, m.state = St, m.context = _, m = Q) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Ke === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Ke === e.memoizedState || (t.flags |= 1024), m = !1);
        }
        if (_ = m, vi(e, t), g = (t.flags & 128) !== 0, _ || g) {
          if (_ = t.stateNode, ue.getCurrentStack = t === null ? null : Xe, Pa = !1, wa = t, g && typeof l.getDerivedStateFromError != "function")
            l = null, Bl = -1;
          else {
            if (Nn(t), l = Iy(_), t.mode & 8) {
              Tt(!0);
              try {
                Iy(_);
              } finally {
                Tt(!1);
              }
            }
            Qn();
          }
          t.flags |= 1, e !== null && g ? (t.child = rc(
            t,
            e.child,
            null,
            o
          ), t.child = rc(
            t,
            null,
            l,
            o
          )) : va(
            e,
            t,
            l,
            o
          ), t.memoizedState = _.state, e = t.child;
        } else
          e = Ol(
            e,
            t,
            o
          );
        return o = t.stateNode, m && o.props !== s && (uf || console.error(
          "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
          F(t) || "a component"
        ), uf = !0), e;
      }
      function ir(e, t, l, s) {
        return re(), t.flags |= 256, va(e, t, l, s), t.child;
      }
      function sr(e, t) {
        t && t.childContextTypes && console.error(
          `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
          t.displayName || t.name || "Component"
        ), typeof t.getDerivedStateFromProps == "function" && (e = $(t) || "Unknown", DA[e] || (console.error(
          "%s: Function components do not support getDerivedStateFromProps.",
          e
        ), DA[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = $(t) || "Unknown", MA[t] || (console.error(
          "%s: Function components do not support contextType.",
          t
        ), MA[t] = !0));
      }
      function zo(e) {
        return { baseLanes: e, cachePool: td() };
      }
      function An(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Yl), e;
      }
      function Wf(e, t, l) {
        var s = t.pendingProps;
        S(t) && (t.flags |= 128);
        var o = !1, m = (t.flags & 128) !== 0, g;
        if ((g = m) || (g = e !== null && e.memoizedState === null ? !1 : (tn.current & fm) !== 0), g && (o = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Mt) {
            if (o ? Uu(t) : Il(t), Mt) {
              var _ = bn, Q;
              (Q = !_) || (Q = Np(
                _,
                Ni
              ), Q !== null ? (Ua(), t.memoizedState = {
                dehydrated: Q,
                treeContext: ta !== null ? { id: rt, overflow: dn } : null,
                retryLane: 536870912
              }, m = C(18, null, null, aa), m.stateNode = Q, m.return = t, t.child = m, tl = t, bn = null, Q = !0) : Q = !1, Q = !Q), Q && (wt(t, _), B(t));
            }
            if (_ = t.memoizedState, _ !== null && (_ = _.dehydrated, _ !== null))
              return wd(_) ? t.lanes = 16 : t.lanes = 536870912, null;
            wl(t);
          }
          return _ = s.children, s = s.fallback, o ? (Il(t), o = t.mode, _ = or(
            { mode: "hidden", children: _ },
            o
          ), s = ki(
            s,
            o,
            l,
            null
          ), _.return = t, s.return = t, _.sibling = s, t.child = _, o = t.child, o.memoizedState = zo(l), o.childLanes = An(
            e,
            g,
            l
          ), t.memoizedState = Bv, s) : (Uu(t), qa(t, _));
        }
        if (Q = e.memoizedState, Q !== null && (_ = Q.dehydrated, _ !== null)) {
          if (m)
            t.flags & 256 ? (Uu(t), t.flags &= -257, t = jo(
              e,
              t,
              l
            )) : t.memoizedState !== null ? (Il(t), t.child = e.child, t.flags |= 128, t = null) : (Il(t), o = s.fallback, _ = t.mode, s = or(
              { mode: "visible", children: s.children },
              _
            ), o = ki(
              o,
              _,
              l,
              null
            ), o.flags |= 2, s.return = t, o.return = t, s.sibling = o, t.child = s, rc(
              t,
              e.child,
              null,
              l
            ), s = t.child, s.memoizedState = zo(l), s.childLanes = An(
              e,
              g,
              l
            ), t.memoizedState = Bv, t = o);
          else if (Uu(t), Mt && console.error(
            "We should not be hydrating here. This is a bug in React. Please file a bug."
          ), wd(_))
            _ = ev(_), g = _.digest, o = _.message, s = _.stack, _ = _.componentStack, o = Error(o || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), o.stack = s || "", o.digest = g, g = _ === void 0 ? null : _, s = {
              value: o,
              source: null,
              stack: g
            }, typeof g == "string" && I.set(o, s), ce(s), t = jo(
              e,
              t,
              l
            );
          else if (mn || Ko(
            e,
            t,
            l,
            !1
          ), g = (l & e.childLanes) !== 0, mn || g) {
            if (g = kt, g !== null) {
              if (s = l & -l, (s & 42) !== 0) s = 1;
              else
                switch (s) {
                  case 2:
                    s = 1;
                    break;
                  case 8:
                    s = 4;
                    break;
                  case 32:
                    s = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    s = 64;
                    break;
                  case 268435456:
                    s = 134217728;
                    break;
                  default:
                    s = 0;
                }
              if (s = (s & (g.suspendedLanes | l)) !== 0 ? 0 : s, s !== 0 && s !== Q.retryLane)
                throw Q.retryLane = s, Se(e, s), la(g, e, s), TA;
            }
            jl(_) || Rd(), t = jo(
              e,
              t,
              l
            );
          } else
            jl(_) ? (t.flags |= 128, t.child = e.child, t = dp.bind(
              null,
              e
            ), tv(_, t), t = null) : (e = Q.treeContext, Cn && (bn = Pd(_), tl = t, Mt = !0, Wu = null, rs = !1, hu = null, Ni = !1, e !== null && (Ua(), qe[st++] = rt, qe[st++] = dn, qe[st++] = ta, rt = e.id, dn = e.overflow, ta = t)), t = qa(
              t,
              s.children
            ), t.flags |= 4096);
          return t;
        }
        return o ? (Il(t), o = s.fallback, _ = t.mode, Q = e.child, m = Q.sibling, s = Ci(Q, {
          mode: "hidden",
          children: s.children
        }), s.subtreeFlags = Q.subtreeFlags & 31457280, m !== null ? o = Ci(m, o) : (o = ki(
          o,
          _,
          l,
          null
        ), o.flags |= 2), o.return = t, s.return = t, s.sibling = o, t.child = s, s = o, o = t.child, _ = e.child.memoizedState, _ === null ? _ = zo(l) : (Q = _.cachePool, Q !== null ? (m = ga ? Ta._currentValue : Ta._currentValue2, Q = Q.parent !== m ? { parent: m, pool: m } : Q) : Q = td(), _ = {
          baseLanes: _.baseLanes | l,
          cachePool: Q
        }), o.memoizedState = _, o.childLanes = An(
          e,
          g,
          l
        ), t.memoizedState = Bv, s) : (Uu(t), l = e.child, e = l.sibling, l = Ci(l, {
          mode: "visible",
          children: s.children
        }), l.return = t, l.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = l, t.memoizedState = null, l);
      }
      function qa(e, t) {
        return t = or(
          { mode: "visible", children: t },
          e.mode
        ), t.return = e, e.child = t;
      }
      function or(e, t) {
        return gp(e, t, 0, null);
      }
      function jo(e, t, l) {
        return rc(t, e.child, null, l), e = qa(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function kf(e, t, l) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t), Jo(
          e.return,
          t,
          l
        );
      }
      function Im(e, t) {
        var l = La(e);
        return e = !l && typeof U(e) == "function", l || e ? (l = l ? "array" : "iterable", console.error(
          "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
          l,
          t,
          l
        ), !1) : !0;
      }
      function Hl(e, t, l, s, o) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: l,
          tailMode: o
        } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = l, m.tailMode = o);
      }
      function $f(e, t, l) {
        var s = t.pendingProps, o = s.revealOrder, m = s.tail;
        if (s = s.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !_A[o])
          if (_A[o] = !0, typeof o == "string")
            switch (o.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  o,
                  o.toLowerCase()
                );
                break;
              case "forward":
              case "backward":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  o,
                  o.toLowerCase()
                );
                break;
              default:
                console.error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  o
                );
            }
          else
            console.error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              o
            );
        m === void 0 || Sv[m] || (m !== "collapsed" && m !== "hidden" ? (Sv[m] = !0, console.error(
          '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
          m
        )) : o !== "forwards" && o !== "backwards" && (Sv[m] = !0, console.error(
          '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
          m
        )));
        e: if ((o === "forwards" || o === "backwards") && s !== void 0 && s !== null && s !== !1)
          if (La(s)) {
            for (var g = 0; g < s.length; g++)
              if (!Im(s[g], g)) break e;
          } else if (g = U(s), typeof g == "function") {
            if (g = g.call(s))
              for (var _ = g.next(), Q = 0; !_.done; _ = g.next()) {
                if (!Im(_.value, Q)) break e;
                Q++;
              }
          } else
            console.error(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              o
            );
        if (va(e, t, s, l), s = tn.current, (s & fm) !== 0)
          s = s & tf | fm, t.flags |= 128;
        else {
          if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                e.memoizedState !== null && kf(
                  e,
                  l,
                  t
                );
              else if (e.tag === 19)
                kf(e, l, t);
              else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break e;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
          s &= tf;
        }
        switch (pe(tn, s, t), o) {
          case "forwards":
            for (l = t.child, o = null; l !== null; )
              e = l.alternate, e !== null && Ro(e) === null && (o = l), l = l.sibling;
            l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), Hl(
              t,
              !1,
              o,
              l,
              m
            );
            break;
          case "backwards":
            for (l = null, o = t.child, t.child = null; o !== null; ) {
              if (e = o.alternate, e !== null && Ro(e) === null) {
                t.child = o;
                break;
              }
              e = o.sibling, o.sibling = l, l = o, o = e;
            }
            Hl(
              t,
              !0,
              l,
              null,
              m
            );
            break;
          case "together":
            Hl(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Ol(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies), Bl = -1, mo |= t.lanes, (l & t.childLanes) === 0)
          if (e !== null) {
            if (Ko(
              e,
              t,
              l,
              !1
            ), (l & t.childLanes) === 0)
              return null;
          } else return null;
        if (e !== null && t.child !== e.child)
          throw Error("Resuming work not yet implemented.");
        if (t.child !== null) {
          for (e = t.child, l = Ci(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
            e = e.sibling, l = l.sibling = Ci(e, e.pendingProps), l.return = t;
          l.sibling = null;
        }
        return t.child;
      }
      function yi(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && rr(e)));
      }
      function wm(e, t, l) {
        switch (t.tag) {
          case 3:
            ge(
              t,
              t.stateNode.containerInfo
            ), zu(
              t,
              Ta,
              e.memoizedState.cache
            ), re();
            break;
          case 27:
          case 5:
            _e(t);
            break;
          case 4:
            ge(
              t,
              t.stateNode.containerInfo
            );
            break;
          case 10:
            zu(
              t,
              t.type,
              t.memoizedProps.value
            );
            break;
          case 12:
            (l & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
            var s = t.stateNode;
            s.effectDuration = -0, s.passiveEffectDuration = -0;
            break;
          case 13:
            if (s = t.memoizedState, s !== null)
              return s.dehydrated !== null ? (Uu(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Wf(
                e,
                t,
                l
              ) : (Uu(t), e = Ol(
                e,
                t,
                l
              ), e !== null ? e.sibling : null);
            Uu(t);
            break;
          case 19:
            var o = (e.flags & 128) !== 0;
            if (s = (l & t.childLanes) !== 0, s || (Ko(
              e,
              t,
              l,
              !1
            ), s = (l & t.childLanes) !== 0), o) {
              if (s)
                return $f(
                  e,
                  t,
                  l
                );
              t.flags |= 128;
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(
              tn,
              tn.current,
              t
            ), s) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, Ls(e, t, l);
          case 24:
            zu(
              t,
              Ta,
              e.memoizedState.cache
            );
        }
        return Ol(e, t, l);
      }
      function cr(e, t, l) {
        if (t._debugNeedsRemount && e !== null) {
          l = xd(
            t.type,
            t.key,
            t.pendingProps,
            t._debugOwner || null,
            t.mode,
            t.lanes
          );
          var s = t.return;
          if (s === null) throw Error("Cannot swap the root fiber.");
          if (e.alternate = null, t.alternate = null, l.index = t.index, l.sibling = t.sibling, l.return = t.return, l.ref = t.ref, l._debugInfo = t._debugInfo, t === s.child)
            s.child = l;
          else {
            var o = s.child;
            if (o === null)
              throw Error("Expected parent to have a child.");
            for (; o.sibling !== t; )
              if (o = o.sibling, o === null)
                throw Error("Expected to find the previous sibling.");
            o.sibling = l;
          }
          return t = s.deletions, t === null ? (s.deletions = [e], s.flags |= 16) : t.push(e), l.flags |= 2, l;
        }
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
            mn = !0;
          else {
            if (!yi(e, l) && (t.flags & 128) === 0)
              return mn = !1, wm(
                e,
                t,
                l
              );
            mn = (e.flags & 131072) !== 0;
          }
        else
          mn = !1, (s = Mt) && (Ua(), s = (t.flags & 1048576) !== 0), s && (s = t.index, Ua(), ii(t, Xt, s));
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: if (s = t.pendingProps, e = so(t.elementType), t.type = e, typeof e == "function")
              Gd(e) ? (s = ml(
                e,
                s
              ), t.tag = 1, t.type = e = Bi(e), t = ur(
                null,
                t,
                e,
                s,
                l
              )) : (t.tag = 0, sr(t, e), t.type = e = Bi(e), t = nr(
                null,
                t,
                e,
                s,
                l
              ));
            else {
              if (e != null) {
                if (o = e.$$typeof, o === uu) {
                  t.tag = 11, t.type = e = Nd(e), t = hi(
                    null,
                    t,
                    e,
                    s,
                    l
                  );
                  break e;
                } else if (o === Ur) {
                  t.tag = 14, t = If(
                    null,
                    t,
                    e,
                    s,
                    l
                  );
                  break e;
                }
              }
              throw t = "", e !== null && typeof e == "object" && e.$$typeof === Wn && (t = " Did you wrap a component in React.lazy() more than once?"), e = $(e) || e, Error(
                "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
              );
            }
            return t;
          case 0:
            return nr(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 1:
            return s = t.type, o = ml(
              s,
              t.pendingProps
            ), ur(
              e,
              t,
              s,
              o,
              l
            );
          case 3:
            e: {
              if (ge(
                t,
                t.stateNode.containerInfo
              ), e === null)
                throw Error(
                  "Should have a current fiber. This is a bug in React."
                );
              var m = t.pendingProps;
              o = t.memoizedState, s = o.element, fl(e, t), Rs(t, m, null, l);
              var g = t.memoizedState;
              if (m = g.cache, zu(t, Ta, m), m !== o.cache && ed(
                t,
                [Ta],
                l,
                !0
              ), oi(), m = g.element, Cn && o.isDehydrated)
                if (o = {
                  element: m,
                  isDehydrated: !1,
                  cache: g.cache
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                  t = ir(
                    e,
                    t,
                    m,
                    l
                  );
                  break e;
                } else if (m !== s) {
                  s = Xa(
                    Error(
                      "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                    ),
                    t
                  ), ce(s), t = ir(
                    e,
                    t,
                    m,
                    l
                  );
                  break e;
                } else
                  for (Cn && (bn = ma(
                    t.stateNode.containerInfo
                  ), tl = t, Mt = !0, Wu = null, rs = !1, hu = null, Ni = !0), e = oA(
                    t,
                    null,
                    m,
                    l
                  ), t.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (re(), m === s) {
                  t = Ol(
                    e,
                    t,
                    l
                  );
                  break e;
                }
                va(
                  e,
                  t,
                  m,
                  l
                );
              }
              t = t.child;
            }
            return t;
          case 26:
            if (ke)
              return vi(e, t), e === null ? (e = Ln(
                t.type,
                null,
                t.pendingProps,
                null
              )) ? t.memoizedState = e : Mt || (t.stateNode = Hi(
                t.type,
                t.pendingProps,
                V(uo.current),
                t
              )) : t.memoizedState = Ln(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              ), null;
          case 27:
            if (Ca)
              return _e(t), e === null && Ca && Mt && (o = V(
                uo.current
              ), s = tt(), o = t.stateNode = Jl(
                t.type,
                t.pendingProps,
                o,
                s,
                !1
              ), rs || (s = nc(
                o,
                t.type,
                t.pendingProps,
                s
              ), s !== null && (Xn(t, 0).serverProps = s)), tl = t, Ni = !0, bn = fu(o)), s = t.pendingProps.children, e !== null || Mt ? va(
                e,
                t,
                s,
                l
              ) : t.child = rc(
                t,
                null,
                s,
                l
              ), vi(e, t), t.child;
          case 5:
            return e === null && Mt && (m = tt(), s = Qt(
              t.type,
              t.pendingProps,
              m
            ), o = bn, (g = !o) || (g = Op(
              o,
              t.type,
              t.pendingProps,
              Ni
            ), g !== null ? (t.stateNode = g, rs || (m = nc(
              g,
              t.type,
              t.pendingProps,
              m
            ), m !== null && (Xn(t, 0).serverProps = m)), tl = t, bn = fu(g), Ni = !1, m = !0) : m = !1, g = !m), g && (s && wt(t, o), B(t))), _e(t), o = t.type, m = t.pendingProps, g = e !== null ? e.memoizedProps : null, s = m.children, _a(o, m) ? s = null : g !== null && _a(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = Lf(
              e,
              t,
              Vm,
              null,
              null,
              l
            ), ga ? wu._currentValue = o : wu._currentValue2 = o), vi(e, t), va(
              e,
              t,
              s,
              l
            ), t.child;
          case 6:
            return e === null && Mt && (e = t.pendingProps, l = tt(), e = qt(e, l), l = bn, (s = !l) || (s = Ka(
              l,
              t.pendingProps,
              Ni
            ), s !== null ? (t.stateNode = s, tl = t, bn = null, s = !0) : s = !1, s = !s), s && (e && wt(t, l), B(t))), null;
          case 13:
            return Wf(e, t, l);
          case 4:
            return ge(
              t,
              t.stateNode.containerInfo
            ), s = t.pendingProps, e === null ? t.child = rc(
              t,
              null,
              s,
              l
            ) : va(
              e,
              t,
              s,
              l
            ), t.child;
          case 11:
            return hi(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 7:
            return va(
              e,
              t,
              t.pendingProps,
              l
            ), t.child;
          case 8:
            return va(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 12:
            return t.flags |= 4, t.flags |= 2048, s = t.stateNode, s.effectDuration = -0, s.passiveEffectDuration = -0, va(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 10:
            return s = t.type, o = t.pendingProps, m = o.value, "value" in o || HA || (HA = !0, console.error(
              "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
            )), zu(t, s, m), va(
              e,
              t,
              o.children,
              l
            ), t.child;
          case 9:
            return o = t.type._context, s = t.pendingProps.children, typeof s != "function" && console.error(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
            ), Ai(t), o = Pt(o), Nn(t), s = pv(
              s,
              o,
              void 0
            ), Qn(), t.flags |= 1, va(
              e,
              t,
              s,
              l
            ), t.child;
          case 14:
            return If(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 15:
            return wf(
              e,
              t,
              t.type,
              t.pendingProps,
              l
            );
          case 19:
            return $f(
              e,
              t,
              l
            );
          case 22:
            return Ls(e, t, l);
          case 24:
            return Ai(t), s = Pt(Ta), e === null ? (o = dr(), o === null && (o = kt, m = fr(), o.pooledCache = m, Ei(m), m !== null && (o.pooledCacheLanes |= l), o = m), t.memoizedState = {
              parent: s,
              cache: o
            }, Ga(t), zu(t, Ta, o)) : ((e.lanes & l) !== 0 && (fl(e, t), Rs(t, null, null, l), oi()), o = e.memoizedState, m = t.memoizedState, o.parent !== s ? (o = {
              parent: s,
              cache: s
            }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), zu(t, Ta, s)) : (s = m.cache, zu(t, Ta, s), s !== o.cache && ed(
              t,
              [Ta],
              l,
              !0
            ))), va(
              e,
              t,
              t.pendingProps.children,
              l
            ), t.child;
          case 29:
            throw t.pendingProps;
        }
        throw Error(
          "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function Lo() {
        sf = wp = null, of = !1;
      }
      function zu(e, t, l) {
        ga ? (pe(qp, t._currentValue, e), t._currentValue = l, pe(Cv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ip && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), t._currentRenderer = Ip) : (pe(qp, t._currentValue2, e), t._currentValue2 = l, pe(Tv, t._currentRenderer2, e), t._currentRenderer2 !== void 0 && t._currentRenderer2 !== null && t._currentRenderer2 !== Ip && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), t._currentRenderer2 = Ip);
      }
      function Nl(e, t) {
        var l = qp.current;
        ga ? (e._currentValue = l, l = Cv.current, de(Cv, t), e._currentRenderer = l) : (e._currentValue2 = l, l = Tv.current, de(Tv, t), e._currentRenderer2 = l), de(qp, t);
      }
      function Jo(e, t, l) {
        for (; e !== null; ) {
          var s = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === l) break;
          e = e.return;
        }
        e !== l && console.error(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function ed(e, t, l, s) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
          var m = o.dependencies;
          if (m !== null) {
            var g = o.child;
            m = m.firstContext;
            e: for (; m !== null; ) {
              var _ = m;
              m = o;
              for (var Q = 0; Q < t.length; Q++)
                if (_.context === t[Q]) {
                  m.lanes |= l, _ = m.alternate, _ !== null && (_.lanes |= l), Jo(
                    m.return,
                    l,
                    e
                  ), s || (g = null);
                  break e;
                }
              m = _.next;
            }
          } else if (o.tag === 18) {
            if (g = o.return, g === null)
              throw Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            g.lanes |= l, m = g.alternate, m !== null && (m.lanes |= l), Jo(
              g,
              l,
              e
            ), g = null;
          } else g = o.child;
          if (g !== null) g.return = o;
          else
            for (g = o; g !== null; ) {
              if (g === e) {
                g = null;
                break;
              }
              if (o = g.sibling, o !== null) {
                o.return = g.return, g = o;
                break;
              }
              g = g.return;
            }
          o = g;
        }
      }
      function Ko(e, t, l, s) {
        e = null;
        for (var o = t, m = !1; o !== null; ) {
          if (!m) {
            if ((o.flags & 524288) !== 0) m = !0;
            else if ((o.flags & 262144) !== 0) break;
          }
          if (o.tag === 10) {
            var g = o.alternate;
            if (g === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            if (g = g.memoizedProps, g !== null) {
              var _ = o.type;
              P(o.pendingProps.value, g.value) || (e !== null ? e.push(_) : e = [_]);
            }
          } else if (o === Gp.current) {
            if (g = o.alternate, g === null)
              throw Error("Should have a current fiber. This is a bug in React.");
            g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(wu) : e = [wu]);
          }
          o = o.return;
        }
        e !== null && ed(
          t,
          e,
          l,
          s
        ), t.flags |= 262144;
      }
      function rr(e) {
        for (e = e.firstContext; e !== null; ) {
          var t = e.context;
          if (!P(
            ga ? t._currentValue : t._currentValue2,
            e.memoizedValue
          ))
            return !0;
          e = e.next;
        }
        return !1;
      }
      function Ai(e) {
        wp = e, sf = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function Pt(e) {
        return of && console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        ), Qo(wp, e);
      }
      function ju(e, t) {
        return wp === null && Ai(e), Qo(e, t);
      }
      function Qo(e, t) {
        var l = ga ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: l, next: null }, sf === null) {
          if (e === null)
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          sf = t, e.dependencies = {
            lanes: 0,
            firstContext: t,
            _debugThenableState: null
          }, e.flags |= 524288;
        } else sf = sf.next = t;
        return l;
      }
      function fr() {
        return {
          controller: new PE(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Ei(e) {
        e.controller.signal.aborted && console.warn(
          "A cache instance was retained after it was already freed. This likely indicates a bug in React."
        ), e.refCount++;
      }
      function Yo(e) {
        e.refCount--, 0 > e.refCount && console.warn(
          "A cache instance was released after it was already freed. This likely indicates a bug in React."
        ), e.refCount === 0 && WE(kE, function() {
          e.controller.abort();
        });
      }
      function dr() {
        var e = pc.current;
        return e !== null ? e : kt.pooledCache;
      }
      function au(e, t) {
        t === null ? pe(pc, pc.current, e) : pe(pc, t.pool, e);
      }
      function td() {
        var e = dr();
        return e === null ? null : {
          parent: ga ? Ta._currentValue : Ta._currentValue2,
          pool: e
        };
      }
      function ot(e) {
        e.flags |= 4;
      }
      function mr(e, t) {
        if (e !== null && e.child === t.child) return !1;
        if ((t.flags & 16) !== 0) return !0;
        for (e = t.child; e !== null; ) {
          if ((e.flags & 13878) !== 0 || (e.subtreeFlags & 13878) !== 0)
            return !0;
          e = e.sibling;
        }
        return !1;
      }
      function ad(e, t, l, s) {
        if (ya)
          for (l = t.child; l !== null; ) {
            if (l.tag === 5 || l.tag === 6)
              qs(e, l.stateNode);
            else if (!(l.tag === 4 || Ca && l.tag === 27) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t)
                return;
              l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
          }
        else if (su)
          for (var o = t.child; o !== null; ) {
            if (o.tag === 5) {
              var m = o.stateNode;
              l && s && (m = tc(
                m,
                o.type,
                o.memoizedProps
              )), qs(e, m);
            } else if (o.tag === 6)
              m = o.stateNode, l && s && (m = _i(
                m,
                o.memoizedProps
              )), qs(e, m);
            else if (o.tag !== 4) {
              if (o.tag === 22 && o.memoizedState !== null)
                m = o.child, m !== null && (m.return = o), ad(e, o, !0, !0);
              else if (o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
            }
            if (o === t) break;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === t)
                return;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          }
      }
      function nd(e, t, l, s) {
        if (su)
          for (var o = t.child; o !== null; ) {
            if (o.tag === 5) {
              var m = o.stateNode;
              l && s && (m = tc(
                m,
                o.type,
                o.memoizedProps
              )), Id(e, m);
            } else if (o.tag === 6)
              m = o.stateNode, l && s && (m = _i(
                m,
                o.memoizedProps
              )), Id(e, m);
            else if (o.tag !== 4) {
              if (o.tag === 22 && o.memoizedState !== null)
                m = o.child, m !== null && (m.return = o), nd(
                  e,
                  o,
                  !(o.memoizedProps !== null && o.memoizedProps.mode === "manual"),
                  !0
                );
              else if (o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
            }
            if (o === t) break;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === t) return;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          }
      }
      function Pm(e, t) {
        if (su && mr(e, t)) {
          e = t.stateNode;
          var l = e.containerInfo, s = qd();
          nd(s, t, !1, !1), e.pendingChildren = s, ot(t), Ja(l, s);
        }
      }
      function ld(e, t, l, s) {
        if (ya)
          e.memoizedProps !== s && ot(t);
        else if (su) {
          var o = e.stateNode, m = e.memoizedProps;
          if ((e = mr(e, t)) || m !== s) {
            var g = tt();
            m = Zd(
              o,
              l,
              m,
              s,
              !e,
              null
            ), m === o ? t.stateNode = o : (rn(
              m,
              l,
              s,
              g
            ) && ot(t), t.stateNode = m, e ? ad(m, t, !1, !1) : ot(t));
          } else t.stateNode = o;
        }
      }
      function ud(e, t, l) {
        if (ws(t, l)) {
          if (e.flags |= 16777216, !ns(t, l))
            if (Fs()) e.flags |= 8192;
            else
              throw kr = Yp, mv;
        } else e.flags &= -16777217;
      }
      function Wm(e, t) {
        if (kd(t)) {
          if (e.flags |= 16777216, !el(t))
            if (Fs()) e.flags |= 8192;
            else
              throw kr = Yp, mv;
        } else e.flags &= -16777217;
      }
      function Js(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? bl() : 536870912, e.lanes |= t, yc |= t);
      }
      function pl(e, t) {
        if (!Mt)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var l = null; t !== null; )
                t.alternate !== null && (l = t), t = t.sibling;
              l === null ? e.tail = null : l.sibling = null;
              break;
            case "collapsed":
              l = e.tail;
              for (var s = null; l !== null; )
                l.alternate !== null && (s = l), l = l.sibling;
              s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
          }
      }
      function Wt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, l = 0, s = 0;
        if (t)
          if ((e.mode & 2) !== aa) {
            for (var o = e.selfBaseDuration, m = e.child; m !== null; )
              l |= m.lanes | m.childLanes, s |= m.subtreeFlags & 31457280, s |= m.flags & 31457280, o += m.treeBaseDuration, m = m.sibling;
            e.treeBaseDuration = o;
          } else
            for (o = e.child; o !== null; )
              l |= o.lanes | o.childLanes, s |= o.subtreeFlags & 31457280, s |= o.flags & 31457280, o.return = e, o = o.sibling;
        else if ((e.mode & 2) !== aa) {
          o = e.actualDuration, m = e.selfBaseDuration;
          for (var g = e.child; g !== null; )
            l |= g.lanes | g.childLanes, s |= g.subtreeFlags, s |= g.flags, o += g.actualDuration, m += g.treeBaseDuration, g = g.sibling;
          e.actualDuration = o, e.treeBaseDuration = m;
        } else
          for (o = e.child; o !== null; )
            l |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= s, e.childLanes = l, t;
      }
      function pr(e, t, l) {
        var s = t.pendingProps;
        switch (Jt(t), t.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Wt(t), null;
          case 1:
            return Wt(t), null;
          case 3:
            return l = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Nl(Ta, t), je(t), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ee(t) ? (Re(), ot(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wu !== null && (Vu(Wu), Wu = null))), Pm(e, t), Wt(t), null;
          case 26:
            if (ke) {
              l = t.type;
              var o = t.memoizedState;
              return e === null ? (ot(t), o !== null ? (Wt(t), Wm(
                t,
                o
              )) : (Wt(t), ud(
                t,
                l,
                s
              ))) : o ? o !== e.memoizedState ? (ot(t), Wt(t), Wm(
                t,
                o
              )) : (Wt(t), t.flags &= -16777217) : (ya ? e.memoizedProps !== s && ot(t) : ld(
                e,
                t,
                l,
                s
              ), Wt(t), ud(
                t,
                l,
                s
              )), null;
            }
          case 27:
            if (Ca) {
              if (na(t), l = V(uo.current), o = t.type, e !== null && t.stateNode != null)
                ya ? e.memoizedProps !== s && ot(t) : ld(
                  e,
                  t,
                  o,
                  s
                );
              else {
                if (!s) {
                  if (t.stateNode === null)
                    throw Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                    );
                  return Wt(t), null;
                }
                e = tt(), ee(t) ? H(t, e) : (e = Jl(
                  o,
                  s,
                  l,
                  e,
                  !0
                ), t.stateNode = e, ot(t));
              }
              return Wt(t), null;
            }
          case 5:
            if (na(t), l = t.type, e !== null && t.stateNode != null)
              ld(e, t, l, s);
            else {
              if (!s) {
                if (t.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return Wt(t), null;
              }
              e = tt(), ee(t) ? H(t, e) : (o = V(
                uo.current
              ), o = bi(
                l,
                s,
                o,
                e,
                t
              ), ad(o, t, !1, !1), t.stateNode = o, rn(
                o,
                l,
                s,
                e
              ) && ot(t));
            }
            return Wt(t), ud(
              t,
              t.type,
              t.pendingProps
            ), null;
          case 6:
            if (e && t.stateNode != null)
              l = e.memoizedProps, ya ? l !== s && ot(t) : su && (l !== s ? (e = V(
                uo.current
              ), l = tt(), t.stateNode = bt(
                s,
                e,
                l,
                t
              ), ot(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof s != "string" && t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              if (e = V(uo.current), l = tt(), ee(t)) {
                if (!Cn)
                  throw Error(
                    "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                  );
                e = t.stateNode, l = t.memoizedProps, o = !rs, s = null;
                var m = tl;
                if (m !== null)
                  switch (m.tag) {
                    case 3:
                      o && (o = to(
                        e,
                        l,
                        s
                      ), o !== null && (Xn(t, 0).serverProps = o));
                      break;
                    case 27:
                    case 5:
                      s = m.memoizedProps, o && (o = to(
                        e,
                        l,
                        s
                      ), o !== null && (Xn(
                        t,
                        0
                      ).serverProps = o));
                  }
                $n(
                  e,
                  l,
                  t,
                  s
                ) || B(t);
              } else
                t.stateNode = bt(
                  s,
                  e,
                  l,
                  t
                );
            }
            return Wt(t), null;
          case 13:
            if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (o = ee(t), s !== null && s.dehydrated !== null) {
                if (e === null) {
                  if (!o)
                    throw Error(
                      "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                    );
                  if (!Cn)
                    throw Error(
                      "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                    );
                  if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                    throw Error(
                      "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                    );
                  Ll(o, t), Wt(t), (t.mode & 2) !== aa && s !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
                } else
                  Re(), re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Wt(t), (t.mode & 2) !== aa && s !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
                o = !1;
              } else
                Wu !== null && (Vu(Wu), Wu = null), o = !0;
              if (!o)
                return t.flags & 256 ? (wl(t), t) : (wl(t), null);
            }
            return wl(t), (t.flags & 128) !== 0 ? (t.lanes = l, (t.mode & 2) !== aa && _t(t), t) : (l = s !== null, e = e !== null && e.memoizedState !== null, l && (s = t.child, o = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (o = s.alternate.memoizedState.cachePool.pool), m = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (m = s.memoizedState.cachePool.pool), m !== o && (s.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Js(t, t.updateQueue), Wt(t), (t.mode & 2) !== aa && l && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
          case 4:
            return je(t), Pm(e, t), e === null && Xd(t.stateNode.containerInfo), Wt(t), null;
          case 10:
            return Nl(t.type, t), Wt(t), null;
          case 19:
            if (de(tn, t), o = t.memoizedState, o === null)
              return Wt(t), null;
            if (s = (t.flags & 128) !== 0, m = o.rendering, m === null)
              if (s) pl(o, !1);
              else {
                if (Ma !== ps || e !== null && (e.flags & 128) !== 0)
                  for (e = t.child; e !== null; ) {
                    if (m = Ro(e), m !== null) {
                      for (t.flags |= 128, pl(o, !1), e = m.updateQueue, t.updateQueue = e, Js(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                        Ep(l, e), l = l.sibling;
                      return pe(
                        tn,
                        tn.current & tf | fm,
                        t
                      ), t.child;
                    }
                    e = e.sibling;
                  }
                o.tail !== null && y() > gm && (t.flags |= 128, s = !0, pl(o, !1), t.lanes = 4194304);
              }
            else {
              if (!s)
                if (e = Ro(m), e !== null) {
                  if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Js(t, e), pl(o, !0), o.tail === null && o.tailMode === "hidden" && !m.alternate && !Mt)
                    return Wt(t), null;
                } else
                  2 * y() - o.renderingStartTime > gm && l !== 536870912 && (t.flags |= 128, s = !0, pl(o, !1), t.lanes = 4194304);
              o.isBackwards ? (m.sibling = t.child, t.child = m) : (e = o.last, e !== null ? e.sibling = m : t.child = m, o.last = m);
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = y(), e.sibling = null, l = tn.current, l = s ? l & tf | fm : l & tf, pe(tn, l, t), e) : (Wt(t), null);
          case 22:
          case 23:
            return wl(t), Os(t), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Wt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Wt(t), l = t.updateQueue, l !== null && Js(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== l && (t.flags |= 2048), e !== null && de(pc, t), null;
          case 24:
            return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Nl(Ta, t), Wt(t), null;
          case 25:
            return null;
        }
        throw Error(
          "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function qi(e, t) {
        switch (Jt(t), t.tag) {
          case 1:
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== aa && _t(t), t) : null;
          case 3:
            return Nl(Ta, t), je(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
          case 26:
          case 27:
          case 5:
            return na(t), null;
          case 13:
            if (wl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                throw Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              re();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== aa && _t(t), t) : null;
          case 19:
            return de(tn, t), null;
          case 4:
            return je(t), null;
          case 10:
            return Nl(t.type, t), null;
          case 22:
          case 23:
            return wl(t), Os(t), e !== null && de(pc, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & 2) !== aa && _t(t), t) : null;
          case 24:
            return Nl(Ta, t), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function id(e, t) {
        switch (Jt(t), t.tag) {
          case 3:
            Nl(Ta, t), je(t);
            break;
          case 26:
          case 27:
          case 5:
            na(t);
            break;
          case 4:
            je(t);
            break;
          case 13:
            wl(t);
            break;
          case 19:
            de(tn, t);
            break;
          case 10:
            Nl(t.type, t);
            break;
          case 22:
          case 23:
            wl(t), Os(t), e !== null && de(pc, t);
            break;
          case 24:
            Nl(Ta, t);
        }
      }
      function hl(e) {
        return (e.mode & 2) !== aa;
      }
      function hr(e, t) {
        hl(e) ? (Ft(), Ks(t, e), Nt()) : Ks(t, e);
      }
      function sd(e, t, l) {
        hl(e) ? (Ft(), Ii(
          l,
          e,
          t
        ), Nt()) : Ii(
          l,
          e,
          t
        );
      }
      function Ks(e, t) {
        try {
          var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
          if (s !== null) {
            var o = s.next;
            l = o;
            do {
              if ((l.tag & e) === e && ((e & an) !== Au ? Ne !== null && typeof Ne.markComponentPassiveEffectMountStarted == "function" && Ne.markComponentPassiveEffectMountStarted(
                t
              ) : (e & Mn) !== Au && Ne !== null && typeof Ne.markComponentLayoutEffectMountStarted == "function" && Ne.markComponentLayoutEffectMountStarted(
                t
              ), s = void 0, (e & al) !== Au && (hf = !0), s = te(
                t,
                ZE,
                l
              ), (e & al) !== Au && (hf = !1), (e & an) !== Au ? Ne !== null && typeof Ne.markComponentPassiveEffectMountStopped == "function" && Ne.markComponentPassiveEffectMountStopped() : (e & Mn) !== Au && Ne !== null && typeof Ne.markComponentLayoutEffectMountStopped == "function" && Ne.markComponentLayoutEffectMountStopped(), s !== void 0 && typeof s != "function")) {
                var m = void 0;
                m = (l.tag & Mn) !== 0 ? "useLayoutEffect" : (l.tag & al) !== 0 ? "useInsertionEffect" : "useEffect";
                var g = void 0;
                g = s === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof s.then == "function" ? `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + s, te(
                  t,
                  function(_, Q) {
                    console.error(
                      "%s must not return anything besides a function, which is used for clean-up.%s",
                      _,
                      Q
                    );
                  },
                  m,
                  g
                );
              }
              l = l.next;
            } while (l !== o);
          }
        } catch (_) {
          Gt(t, t.return, _);
        }
      }
      function Ii(e, t, l) {
        try {
          var s = t.updateQueue, o = s !== null ? s.lastEffect : null;
          if (o !== null) {
            var m = o.next;
            s = m;
            do {
              if ((s.tag & e) === e) {
                var g = s.inst, _ = g.destroy;
                _ !== void 0 && (g.destroy = void 0, (e & an) !== Au ? Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStarted == "function" && Ne.markComponentPassiveEffectUnmountStarted(
                  t
                ) : (e & Mn) !== Au && Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStarted == "function" && Ne.markComponentLayoutEffectUnmountStarted(
                  t
                ), (e & al) !== Au && (hf = !0), te(
                  t,
                  qE,
                  t,
                  l,
                  _
                ), (e & al) !== Au && (hf = !1), (e & an) !== Au ? Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStopped == "function" && Ne.markComponentPassiveEffectUnmountStopped() : (e & Mn) !== Au && Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStopped == "function" && Ne.markComponentLayoutEffectUnmountStopped());
              }
              s = s.next;
            } while (s !== m);
          }
        } catch (Q) {
          Gt(t, t.return, Q);
        }
      }
      function od(e, t) {
        hl(e) ? (Ft(), Ks(t, e), Nt()) : Ks(t, e);
      }
      function vr(e, t, l) {
        hl(e) ? (Ft(), Ii(
          l,
          e,
          t
        ), Nt()) : Ii(
          l,
          e,
          t
        );
      }
      function cd(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var l = e.stateNode;
          e.type.defaultProps || "ref" in e.memoizedProps || uf || (l.props !== e.memoizedProps && console.error(
            "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
            F(e) || "instance"
          ), l.state !== e.memoizedState && console.error(
            "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
            F(e) || "instance"
          ));
          try {
            te(
              e,
              Nf,
              t,
              l
            );
          } catch (s) {
            Gt(e, e.return, s);
          }
        }
      }
      function rd(e, t, l) {
        return e.getSnapshotBeforeUpdate(t, l);
      }
      function vt(e, t) {
        var l = t.memoizedProps, s = t.memoizedState;
        t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || uf || (t.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          F(e) || "instance"
        ), t.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          F(e) || "instance"
        ));
        try {
          var o = ml(
            e.type,
            l,
            e.elementType === e.type
          ), m = te(
            e,
            rd,
            t,
            o,
            s
          );
          l = NA, m !== void 0 || l.has(e.type) || (l.add(e.type), te(e, function() {
            console.error(
              "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
              F(e)
            );
          })), t.__reactInternalSnapshotBeforeUpdate = m;
        } catch (g) {
          Gt(e, e.return, g);
        }
      }
      function km(e, t, l) {
        l.props = ml(
          e.type,
          e.memoizedProps
        ), l.state = e.memoizedState, hl(e) ? (Ft(), te(
          e,
          eA,
          e,
          t,
          l
        ), Nt()) : te(
          e,
          eA,
          e,
          t,
          l
        );
      }
      function qn(e) {
        var t = e.ref;
        if (t !== null) {
          var l = e.stateNode;
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              l = El(l);
          }
          if (typeof t == "function")
            if (hl(e))
              try {
                Ft(), e.refCleanup = t(l);
              } finally {
                Nt();
              }
            else e.refCleanup = t(l);
          else
            typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              F(e)
            ), t.current = l;
        }
      }
      function Lu(e, t) {
        try {
          te(e, qn, e);
        } catch (l) {
          Gt(e, t, l);
        }
      }
      function In(e, t) {
        var l = e.ref, s = e.refCleanup;
        if (l !== null)
          if (typeof s == "function")
            try {
              if (hl(e))
                try {
                  Ft(), te(e, s);
                } finally {
                  Nt(e);
                }
              else te(e, s);
            } catch (o) {
              Gt(e, t, o);
            } finally {
              e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
          else if (typeof l == "function")
            try {
              if (hl(e))
                try {
                  Ft(), te(e, l, null);
                } finally {
                  Nt(e);
                }
              else te(e, l, null);
            } catch (o) {
              Gt(e, t, o);
            }
          else l.current = null;
      }
      function Xo(e, t, l, s) {
        var o = e.memoizedProps, m = o.id, g = o.onCommit;
        o = o.onRender, t = t === null ? "mount" : "update", zp && (t = "nested-update"), typeof o == "function" && o(
          m,
          t,
          e.actualDuration,
          e.treeBaseDuration,
          e.actualStartTime,
          l
        ), typeof g == "function" && g(
          e.memoizedProps.id,
          t,
          s,
          l
        );
      }
      function Qs(e, t, l, s) {
        var o = e.memoizedProps;
        e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", zp && (t = "nested-update"), typeof o == "function" && o(
          e,
          t,
          s,
          l
        );
      }
      function wi(e) {
        var t = e.type, l = e.memoizedProps, s = e.stateNode;
        try {
          te(
            e,
            Qr,
            s,
            t,
            l,
            e
          );
        } catch (o) {
          Gt(e, e.return, o);
        }
      }
      function fd(e, t, l) {
        try {
          te(
            e,
            $s,
            e.stateNode,
            e.type,
            l,
            t,
            e
          );
        } catch (s) {
          Gt(e, e.return, s);
        }
      }
      function yr(e) {
        return e.tag === 5 || e.tag === 3 || (ke ? e.tag === 26 : !1) || (Ca ? e.tag === 27 : !1) || e.tag === 4;
      }
      function dd(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || yr(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && (!Ca || e.tag !== 27) && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Ar(e, t, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
          e = e.stateNode, t ? Yr(l, e, t) : Kt(l, e);
        else if (!(s === 4 || Ca && s === 27) && (e = e.child, e !== null))
          for (Ar(e, t, l), e = e.sibling; e !== null; )
            Ar(e, t, l), e = e.sibling;
      }
      function Ul(e, t, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
          e = e.stateNode, t ? ls(l, e, t) : dt(l, e);
        else if (!(s === 4 || Ca && s === 27) && (e = e.child, e !== null))
          for (Ul(e, t, l), e = e.sibling; e !== null; )
            Ul(e, t, l), e = e.sibling;
      }
      function md(e) {
        if (ya && (!Ca || e.tag !== 27)) {
          e: {
            for (var t = e.return; t !== null; ) {
              if (yr(t)) {
                var l = t;
                break e;
              }
              t = t.return;
            }
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          switch (l.tag) {
            case 27:
              if (Ca) {
                t = l.stateNode, l = dd(e), Ul(e, l, t);
                break;
              }
            case 5:
              t = l.stateNode, l.flags & 32 && (_p(t), l.flags &= -33), l = dd(e), Ul(e, l, t);
              break;
            case 3:
            case 4:
              t = l.stateNode.containerInfo, l = dd(e), Ar(
                e,
                l,
                t
              );
              break;
            default:
              throw Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
      }
      function Er(e, t, l) {
        e = e.containerInfo;
        try {
          te(
            t,
            Xr,
            e,
            l
          );
        } catch (s) {
          Gt(t, t.return, s);
        }
      }
      function pd(e, t) {
        for (Wa(e.containerInfo), pn = t; pn !== null; )
          if (e = pn, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e, pn = t;
          else
            for (; pn !== null; ) {
              t = e = pn;
              var l = t.alternate, s = t.flags;
              switch (t.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  (s & 1024) !== 0 && l !== null && vt(t, l);
                  break;
                case 3:
                  (s & 1024) !== 0 && ya && is(t.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if ((s & 1024) !== 0)
                    throw Error(
                      "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                    );
              }
              if (t = e.sibling, t !== null) {
                t.return = e.return, pn = t;
                break;
              }
              pn = e.return;
            }
        return e = GA, GA = !1, e;
      }
      function gr(e, t, l) {
        var s = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Gl(e, l), s & 4 && hr(l, Mn | Eu);
            break;
          case 1:
            if (Gl(e, l), s & 4)
              if (e = l.stateNode, t === null)
                l.type.defaultProps || "ref" in l.memoizedProps || uf || (e.props !== l.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  F(l) || "instance"
                ), e.state !== l.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  F(l) || "instance"
                )), hl(l) ? (Ft(), te(
                  l,
                  hv,
                  l,
                  e
                ), Nt()) : te(
                  l,
                  hv,
                  l,
                  e
                );
              else {
                var o = ml(
                  l.type,
                  t.memoizedProps
                );
                t = t.memoizedState, l.type.defaultProps || "ref" in l.memoizedProps || uf || (e.props !== l.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  F(l) || "instance"
                ), e.state !== l.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  F(l) || "instance"
                )), hl(l) ? (Ft(), te(
                  l,
                  Wy,
                  l,
                  e,
                  o,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                ), Nt()) : te(
                  l,
                  Wy,
                  l,
                  e,
                  o,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              }
            s & 64 && cd(l), s & 512 && Lu(l, l.return);
            break;
          case 3:
            if (t = Le(), Gl(e, l), s & 64 && (s = l.updateQueue, s !== null)) {
              if (o = null, l.child !== null)
                switch (l.child.tag) {
                  case 27:
                  case 5:
                    o = El(l.child.stateNode);
                    break;
                  case 1:
                    o = l.child.stateNode;
                }
              try {
                te(
                  l,
                  Nf,
                  s,
                  o
                );
              } catch (_) {
                Gt(l, l.return, _);
              }
            }
            e.effectDuration += Fe(t);
            break;
          case 26:
            if (ke) {
              Gl(e, l), s & 512 && Lu(l, l.return);
              break;
            }
          case 27:
          case 5:
            Gl(e, l), t === null && s & 4 && wi(l), s & 512 && Lu(l, l.return);
            break;
          case 12:
            if (s & 4) {
              s = Le(), Gl(e, l), e = l.stateNode, e.effectDuration += Pe(s);
              try {
                te(
                  l,
                  Xo,
                  l,
                  t,
                  xp,
                  e.effectDuration
                );
              } catch (_) {
                Gt(l, l.return, _);
              }
            } else Gl(e, l);
            break;
          case 13:
            Gl(e, l), s & 4 && vd(e, l);
            break;
          case 22:
            if (o = l.memoizedState !== null || ms, !o) {
              t = t !== null && t.memoizedState !== null || ba;
              var m = ms, g = ba;
              ms = o, (ba = t) && !g ? Ku(
                e,
                l,
                (l.subtreeFlags & 8772) !== 0
              ) : Gl(e, l), ms = m, ba = g;
            }
            s & 512 && (l.memoizedProps.mode === "manual" ? Lu(l, l.return) : In(l, l.return));
            break;
          default:
            Gl(e, l);
        }
      }
      function Ju(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Ju(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vd(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function vl(e, t, l) {
        for (l = l.child; l !== null; )
          hd(
            e,
            t,
            l
          ), l = l.sibling;
      }
      function hd(e, t, l) {
        if (Ie && typeof Ie.onCommitFiberUnmount == "function")
          try {
            Ie.onCommitFiberUnmount(ze, l);
          } catch (m) {
            Jn || (Jn = !0, console.error(
              "React instrumentation encountered an error: %s",
              m
            ));
          }
        switch (l.tag) {
          case 26:
            if (ke) {
              ba || In(l, t), vl(
                e,
                t,
                l
              ), l.memoizedState ? os(l.memoizedState) : l.stateNode && ua(l.stateNode);
              break;
            }
          case 27:
            if (Ca) {
              ba || In(l, t);
              var s = Ya, o = Kl;
              Ya = l.stateNode, vl(
                e,
                t,
                l
              ), lc(l.stateNode), Ya = s, Kl = o;
              break;
            }
          case 5:
            ba || In(l, t);
          case 6:
            if (ya) {
              if (s = Ya, o = Kl, Ya = null, vl(
                e,
                t,
                l
              ), Ya = s, Kl = o, Ya !== null)
                if (Kl)
                  try {
                    te(
                      l,
                      eo,
                      Ya,
                      l.stateNode
                    );
                  } catch (m) {
                    Gt(
                      l,
                      t,
                      m
                    );
                  }
                else
                  try {
                    te(
                      l,
                      ec,
                      Ya,
                      l.stateNode
                    );
                  } catch (m) {
                    Gt(
                      l,
                      t,
                      m
                    );
                  }
            } else
              vl(
                e,
                t,
                l
              );
            break;
          case 18:
            ya && Ya !== null && (Kl ? Zr(
              Ya,
              l.stateNode
            ) : Fr(Ya, l.stateNode));
            break;
          case 4:
            ya ? (s = Ya, o = Kl, Ya = l.stateNode.containerInfo, Kl = !0, vl(
              e,
              t,
              l
            ), Ya = s, Kl = o) : (su && Er(
              l.stateNode,
              l,
              qd()
            ), vl(
              e,
              t,
              l
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            ba || Ii(
              al,
              l,
              t
            ), ba || sd(
              l,
              t,
              Mn
            ), vl(
              e,
              t,
              l
            );
            break;
          case 1:
            ba || (In(l, t), s = l.stateNode, typeof s.componentWillUnmount == "function" && km(
              l,
              t,
              s
            )), vl(
              e,
              t,
              l
            );
            break;
          case 21:
            vl(
              e,
              t,
              l
            );
            break;
          case 22:
            ba || In(l, t), ba = (s = ba) || l.memoizedState !== null, vl(
              e,
              t,
              l
            ), ba = s;
            break;
          default:
            vl(
              e,
              t,
              l
            );
        }
      }
      function vd(e, t) {
        if (Cn && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            te(
              t,
              Vr,
              e
            );
          } catch (l) {
            Gt(t, t.return, l);
          }
      }
      function jh(e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new UA()), t;
          case 22:
            return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new UA()), t;
          default:
            throw Error(
              "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
            );
        }
      }
      function $e(e, t) {
        var l = jh(e);
        t.forEach(function(s) {
          var o = mp.bind(null, e, s);
          if (!l.has(s)) {
            if (l.add(s), en)
              if (cf !== null && rf !== null)
                Zo(rf, cf);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            s.then(o, o);
          }
        });
      }
      function yd(e, t, l) {
        cf = l, rf = e, Sr(t, e), rf = cf = null;
      }
      function En(e, t) {
        var l = t.deletions;
        if (l !== null)
          for (var s = 0; s < l.length; s++) {
            var o = e, m = t, g = l[s];
            if (ya) {
              var _ = m;
              e: for (; _ !== null; ) {
                switch (_.tag) {
                  case 27:
                  case 5:
                    Ya = _.stateNode, Kl = !1;
                    break e;
                  case 3:
                    Ya = _.stateNode.containerInfo, Kl = !0;
                    break e;
                  case 4:
                    Ya = _.stateNode.containerInfo, Kl = !0;
                    break e;
                }
                _ = _.return;
              }
              if (Ya === null)
                throw Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
                );
              hd(o, m, g), Ya = null, Kl = !1;
            } else hd(o, m, g);
            o = g, m = o.alternate, m !== null && (m.return = null), o.return = null;
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; )
            Sr(t, e), t = t.sibling;
      }
      function Sr(e, t) {
        var l = e.alternate, s = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            En(t, e), on(e), s & 4 && (Ii(
              al | Eu,
              e,
              e.return
            ), Ks(al | Eu, e), sd(
              e,
              e.return,
              Mn | Eu
            ));
            break;
          case 1:
            En(t, e), on(e), s & 512 && (ba || l === null || In(l, l.return)), s & 64 && ms && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? s : l.concat(s))));
            break;
          case 26:
            if (ke) {
              var o = $u;
              En(t, e), on(e), s & 512 && (ba || l === null || In(l, l.return)), s & 4 && (s = l !== null ? l.memoizedState : null, t = e.memoizedState, l === null ? t === null ? e.stateNode === null ? e.stateNode = Wd(
                o,
                e.type,
                e.memoizedProps,
                e
              ) : mu(
                o,
                e.type,
                e.stateNode
              ) : e.stateNode = du(
                o,
                t,
                e.memoizedProps
              ) : s !== t ? (s === null ? l.stateNode !== null && ua(l.stateNode) : os(s), t === null ? mu(
                o,
                e.type,
                e.stateNode
              ) : du(
                o,
                t,
                e.memoizedProps
              )) : t === null && e.stateNode !== null && fd(
                e,
                e.memoizedProps,
                l.memoizedProps
              ));
              break;
            }
          case 27:
            if (Ca && s & 4 && e.alternate === null) {
              o = e.stateNode;
              var m = e.memoizedProps;
              try {
                $d(o), te(
                  e,
                  em,
                  e.type,
                  m,
                  o,
                  e
                );
              } catch (Me) {
                Gt(e, e.return, Me);
              }
            }
          case 5:
            if (En(t, e), on(e), s & 512 && (ba || l === null || In(l, l.return)), ya) {
              if (e.flags & 32) {
                t = e.stateNode;
                try {
                  te(e, _p, t);
                } catch (Me) {
                  Gt(
                    e,
                    e.return,
                    Me
                  );
                }
              }
              s & 4 && e.stateNode != null && (t = e.memoizedProps, fd(
                e,
                t,
                l !== null ? l.memoizedProps : t
              )), s & 1024 && (bv = !0, e.type !== "form" && console.error(
                "Unexpected host component type. Expected a form. This is a bug in React."
              ));
            }
            break;
          case 6:
            if (En(t, e), on(e), s & 4 && ya) {
              if (e.stateNode === null)
                throw Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              s = e.memoizedProps, l = l !== null ? l.memoizedProps : s, t = e.stateNode;
              try {
                te(
                  e,
                  Sa,
                  t,
                  l,
                  s
                );
              } catch (Me) {
                Gt(e, e.return, Me);
              }
            }
            break;
          case 3:
            if (o = Le(), ke ? (cs(), m = $u, $u = Yt(t.containerInfo), En(t, e), $u = m) : En(t, e), on(e), s & 4) {
              if (ya && Cn && l !== null && l.memoizedState.isDehydrated)
                try {
                  te(
                    e,
                    av,
                    t.containerInfo
                  );
                } catch (Me) {
                  Gt(
                    e,
                    e.return,
                    Me
                  );
                }
              if (su) {
                s = t.containerInfo, l = t.pendingChildren;
                try {
                  te(
                    e,
                    Xr,
                    s,
                    l
                  );
                } catch (Me) {
                  Gt(
                    e,
                    e.return,
                    Me
                  );
                }
              }
            }
            bv && (bv = !1, $m(e)), t.effectDuration += Fe(o);
            break;
          case 4:
            ke ? (l = $u, $u = Yt(
              e.stateNode.containerInfo
            ), En(t, e), on(e), $u = l) : (En(t, e), on(e)), s & 4 && su && Er(
              e.stateNode,
              e,
              e.stateNode.pendingChildren
            );
            break;
          case 12:
            s = Le(), En(t, e), on(e), e.stateNode.effectDuration += Pe(s);
            break;
          case 13:
            En(t, e), on(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ov = y()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, $e(e, s)));
            break;
          case 22:
            s & 512 && (ba || l === null || In(l, l.return)), o = e.memoizedState !== null;
            var g = l !== null && l.memoizedState !== null, _ = ms, Q = ba;
            if (ms = _ || o, ba = Q || g, En(t, e), ba = Q, ms = _, on(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, s & 8192 && (t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (t = ms || ba, l === null || g || t || Xs(e)), ya && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
              e: if (l = null, ya)
                for (t = e; ; ) {
                  if (t.tag === 5 || ke && t.tag === 26 || Ca && t.tag === 27) {
                    if (l === null) {
                      g = l = t;
                      try {
                        m = g.stateNode, o ? te(g, Fd, m) : te(
                          g,
                          us,
                          g.stateNode,
                          g.memoizedProps
                        );
                      } catch (Me) {
                        Gt(
                          g,
                          g.return,
                          Me
                        );
                      }
                    }
                  } else if (t.tag === 6) {
                    if (l === null) {
                      g = t;
                      try {
                        var le = g.stateNode;
                        o ? te(
                          g,
                          ru,
                          le
                        ) : te(
                          g,
                          Di,
                          le,
                          g.memoizedProps
                        );
                      } catch (Me) {
                        Gt(
                          g,
                          g.return,
                          Me
                        );
                      }
                    }
                  } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                  }
                  if (t === e) break e;
                  for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                      break e;
                    l === t && (l = null), t = t.return;
                  }
                  l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
                }
            }
            s & 4 && (s = e.updateQueue, s !== null && (l = s.retryQueue, l !== null && (s.retryQueue = null, $e(e, l))));
            break;
          case 19:
            En(t, e), on(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, $e(e, s)));
            break;
          case 21:
            break;
          default:
            En(t, e), on(e);
        }
      }
      function on(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            te(e, md, e);
          } catch (l) {
            Gt(e, e.return, l);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function $m(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null; ) {
            var t = e;
            $m(t), t.tag === 5 && t.flags & 1024 && Jr(t.stateNode), e = e.sibling;
          }
      }
      function Lh(e, t, l) {
        cf = l, rf = t, gr(t, e.alternate, e), rf = cf = null;
      }
      function Gl(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null; )
            gr(e, t.alternate, t), t = t.sibling;
      }
      function Ys(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            sd(
              e,
              e.return,
              Mn
            ), Xs(e);
            break;
          case 1:
            In(e, e.return);
            var t = e.stateNode;
            typeof t.componentWillUnmount == "function" && km(
              e,
              e.return,
              t
            ), Xs(e);
            break;
          case 26:
          case 27:
          case 5:
            In(e, e.return), Xs(e);
            break;
          case 22:
            In(e, e.return), e.memoizedState === null && Xs(e);
            break;
          default:
            Xs(e);
        }
      }
      function Xs(e) {
        for (e = e.child; e !== null; )
          Ys(e), e = e.sibling;
      }
      function ep(e, t, l, s) {
        var o = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Ku(
              e,
              l,
              s
            ), hr(l, Mn);
            break;
          case 1:
            if (Ku(
              e,
              l,
              s
            ), t = l.stateNode, typeof t.componentDidMount == "function" && te(
              l,
              hv,
              l,
              t
            ), t = l.updateQueue, t !== null) {
              e = l.stateNode;
              try {
                te(
                  l,
                  Xm,
                  t,
                  e
                );
              } catch (m) {
                Gt(l, l.return, m);
              }
            }
            s && o & 64 && cd(l), Lu(l, l.return);
            break;
          case 26:
          case 27:
          case 5:
            Ku(
              e,
              l,
              s
            ), s && t === null && o & 4 && wi(l), Lu(l, l.return);
            break;
          case 12:
            if (s && o & 4) {
              o = Le(), Ku(
                e,
                l,
                s
              ), s = l.stateNode, s.effectDuration += Pe(o);
              try {
                te(
                  l,
                  Xo,
                  l,
                  t,
                  xp,
                  s.effectDuration
                );
              } catch (m) {
                Gt(l, l.return, m);
              }
            } else
              Ku(
                e,
                l,
                s
              );
            break;
          case 13:
            Ku(
              e,
              l,
              s
            ), s && o & 4 && vd(e, l);
            break;
          case 22:
            l.memoizedState === null && Ku(
              e,
              l,
              s
            ), Lu(l, l.return);
            break;
          default:
            Ku(
              e,
              l,
              s
            );
        }
      }
      function Ku(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
          ep(
            e,
            t.alternate,
            t,
            l
          ), t = t.sibling;
      }
      function Ad(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && Ei(e), l != null && Yo(l));
      }
      function Ed(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Ei(t), e != null && Yo(e));
      }
      function nu(e, t, l, s) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            gd(
              e,
              t,
              l,
              s
            ), t = t.sibling;
      }
      function gd(e, t, l, s) {
        var o = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            nu(
              e,
              t,
              l,
              s
            ), o & 2048 && od(t, an | Eu);
            break;
          case 3:
            var m = Le();
            nu(
              e,
              t,
              l,
              s
            ), o & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (Ei(t), l != null && Yo(l))), e.passiveEffectDuration += Fe(m);
            break;
          case 12:
            if (o & 2048) {
              m = Le(), nu(
                e,
                t,
                l,
                s
              ), e = t.stateNode, e.passiveEffectDuration += Pe(m);
              try {
                te(
                  t,
                  Qs,
                  t,
                  t.alternate,
                  xp,
                  e.passiveEffectDuration
                );
              } catch (g) {
                Gt(t, t.return, g);
              }
            } else
              nu(
                e,
                t,
                l,
                s
              );
            break;
          case 23:
            break;
          case 22:
            m = t.stateNode, t.memoizedState !== null ? m._visibility & 4 ? nu(
              e,
              t,
              l,
              s
            ) : Vo(
              e,
              t
            ) : m._visibility & 4 ? nu(
              e,
              t,
              l,
              s
            ) : (m._visibility |= 4, Qu(
              e,
              t,
              l,
              s,
              (t.subtreeFlags & 10256) !== 0
            )), o & 2048 && Ad(
              t.alternate,
              t
            );
            break;
          case 24:
            nu(
              e,
              t,
              l,
              s
            ), o & 2048 && Ed(t.alternate, t);
            break;
          default:
            nu(
              e,
              t,
              l,
              s
            );
        }
      }
      function Qu(e, t, l, s, o) {
        for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
          Sd(
            e,
            t,
            l,
            s,
            o
          ), t = t.sibling;
      }
      function Sd(e, t, l, s, o) {
        var m = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Qu(
              e,
              t,
              l,
              s,
              o
            ), od(t, an);
            break;
          case 23:
            break;
          case 22:
            var g = t.stateNode;
            t.memoizedState !== null ? g._visibility & 4 ? Qu(
              e,
              t,
              l,
              s,
              o
            ) : Vo(
              e,
              t
            ) : (g._visibility |= 4, Qu(
              e,
              t,
              l,
              s,
              o
            )), o && m & 2048 && Ad(
              t.alternate,
              t
            );
            break;
          case 24:
            Qu(
              e,
              t,
              l,
              s,
              o
            ), o && m & 2048 && Ed(t.alternate, t);
            break;
          default:
            Qu(
              e,
              t,
              l,
              s,
              o
            );
        }
      }
      function Vo(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) {
            var l = e, s = t, o = s.flags;
            switch (s.tag) {
              case 22:
                Vo(
                  l,
                  s
                ), o & 2048 && Ad(
                  s.alternate,
                  s
                );
                break;
              case 24:
                Vo(
                  l,
                  s
                ), o & 2048 && Ed(
                  s.alternate,
                  s
                );
                break;
              default:
                Vo(
                  l,
                  s
                );
            }
            t = t.sibling;
          }
      }
      function Pi(e) {
        if (e.subtreeFlags & ff)
          for (e = e.child; e !== null; )
            Br(e), e = e.sibling;
      }
      function Br(e) {
        switch (e.tag) {
          case 26:
            Pi(e), e.flags & ff && (e.memoizedState !== null ? ao(
              $u,
              e.memoizedState,
              e.memoizedProps
            ) : Lr(e.type, e.memoizedProps));
            break;
          case 5:
            Pi(e), e.flags & ff && Lr(e.type, e.memoizedProps);
            break;
          case 3:
          case 4:
            if (ke) {
              var t = $u;
              $u = Yt(
                e.stateNode.containerInfo
              ), Pi(e), $u = t;
            } else Pi(e);
            break;
          case 22:
            e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ff, ff = 16777216, Pi(e), ff = t) : Pi(e));
            break;
          default:
            Pi(e);
        }
      }
      function lu(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
          t.child = null;
          do
            t = e.sibling, e.sibling = null, e = t;
          while (e !== null);
        }
      }
      function Ea(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var l = 0; l < t.length; l++) {
              var s = t[l];
              pn = s, tp(
                s,
                e
              );
            }
          lu(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; )
            Yu(e), e = e.sibling;
      }
      function Yu(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ea(e), e.flags & 2048 && vr(
              e,
              e.return,
              an | Eu
            );
            break;
          case 3:
            var t = Le();
            Ea(e), e.stateNode.passiveEffectDuration += Fe(t);
            break;
          case 12:
            t = Le(), Ea(e), e.stateNode.passiveEffectDuration += Pe(t);
            break;
          case 22:
            t = e.stateNode, e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, gn(e)) : Ea(e);
            break;
          default:
            Ea(e);
        }
      }
      function gn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var l = 0; l < t.length; l++) {
              var s = t[l];
              pn = s, tp(
                s,
                e
              );
            }
          lu(e);
        }
        for (e = e.child; e !== null; )
          Bd(e), e = e.sibling;
      }
      function Bd(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            vr(
              e,
              e.return,
              an
            ), gn(e);
            break;
          case 22:
            var t = e.stateNode;
            t._visibility & 4 && (t._visibility &= -5, gn(e));
            break;
          default:
            gn(e);
        }
      }
      function tp(e, t) {
        for (; pn !== null; ) {
          var l = pn, s = l;
          switch (s.tag) {
            case 0:
            case 11:
            case 15:
              vr(
                s,
                t,
                an
              );
              break;
            case 23:
            case 22:
              s.memoizedState !== null && s.memoizedState.cachePool !== null && (s = s.memoizedState.cachePool.pool, s != null && Ei(s));
              break;
            case 24:
              Yo(s.memoizedState.cache);
          }
          if (s = l.child, s !== null) s.return = l, pn = s;
          else
            e: for (l = e; pn !== null; ) {
              s = pn;
              var o = s.sibling, m = s.return;
              if (Ju(s), s === l) {
                pn = null;
                break e;
              }
              if (o !== null) {
                o.return = m, pn = o;
                break e;
              }
              pn = m;
            }
        }
      }
      function cn(e) {
        var t = as(e);
        if (t != null) {
          if (typeof t.memoizedProps["data-testname"] != "string")
            throw Error(
              "Invalid host root specified. Should be either a React container or a node with a testname attribute."
            );
          return t;
        }
        if (e = Dp(e), e === null)
          throw Error(
            "Could not find React container within specified host subtree."
          );
        return e.stateNode.current;
      }
      function Xu(e, t) {
        var l = e.tag;
        switch (t.$$typeof) {
          case Pp:
            if (e.type === t.value) return !0;
            break;
          case Wp:
            e: {
              for (t = t.value, e = [e, 0], l = 0; l < e.length; ) {
                var s = e[l++], o = s.tag, m = e[l++], g = t[m];
                if (o !== 5 && o !== 26 && o !== 27 || !fn(s)) {
                  for (; g != null && Xu(s, g); )
                    m++, g = t[m];
                  if (m === t.length) {
                    t = !0;
                    break e;
                  } else
                    for (s = s.child; s !== null; )
                      e.push(s, m), s = s.sibling;
                }
              }
              t = !1;
            }
            return t;
          case kp:
            if ((l === 5 || l === 26 || l === 27) && cu(e.stateNode, t.value))
              return !0;
            break;
          case eh:
            if ((l === 5 || l === 6 || l === 26 || l === 27) && (e = Kr(e), e !== null && 0 <= e.indexOf(t.value)))
              return !0;
            break;
          case $p:
            if ((l === 5 || l === 26 || l === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error("Invalid selector type specified.");
        }
        return !1;
      }
      function Cd(e) {
        switch (e.$$typeof) {
          case Pp:
            return "<" + ($(e.value) || "Unknown") + ">";
          case Wp:
            return ":has(" + (Cd(e) || "") + ")";
          case kp:
            return '[role="' + e.value + '"]';
          case eh:
            return '"' + e.value + '"';
          case $p:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error("Invalid selector type specified.");
        }
      }
      function ap(e, t) {
        var l = [];
        e = [e, 0];
        for (var s = 0; s < e.length; ) {
          var o = e[s++], m = o.tag, g = e[s++], _ = t[g];
          if (m !== 5 && m !== 26 && m !== 27 || !fn(o)) {
            for (; _ != null && Xu(o, _); )
              g++, _ = t[g];
            if (g === t.length) l.push(o);
            else
              for (o = o.child; o !== null; )
                e.push(o, g), o = o.sibling;
          }
        }
        return l;
      }
      function Cr(e, t) {
        if (!gl)
          throw Error("Test selector API is not supported by this renderer.");
        e = cn(e), e = ap(e, t), t = [], e = Array.from(e);
        for (var l = 0; l < e.length; ) {
          var s = e[l++], o = s.tag;
          if (o === 5 || o === 26 || o === 27)
            fn(s) || t.push(s.stateNode);
          else
            for (s = s.child; s !== null; )
              e.push(s), s = s.sibling;
        }
        return t;
      }
      function Jh() {
        gl && th.forEach(function(e) {
          return e();
        });
      }
      function Td() {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return e || ue.actQueue === null || console.error(
          "The current testing environment is not configured to support act(...)"
        ), e;
      }
      function wn(e) {
        if ((Vt & Kn) !== ll && Et !== 0)
          return Et & -Et;
        var t = ue.T;
        return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = oc, e !== 0 ? e : jt()) : Is();
      }
      function bd() {
        Yl === 0 && (Yl = (Et & 536870912) === 0 || Mt ? Rn() : 536870912);
        var e = yu.current;
        return e !== null && (e.flags |= 32), Yl;
      }
      function la(e, t, l) {
        if (hf && console.error("useInsertionEffect must not schedule updates."), zv && (uh = !0), (e === kt && $t === vc || e.cancelPendingCommit !== null) && (Vs(e, 0), Fu(
          e,
          Et,
          Yl,
          !1
        )), _n(e, l), (Vt & Kn) !== 0 && e === kt) {
          if (Pa)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                e = yt && F(yt) || "Unknown", KA.has(e) || (KA.add(e), t = F(t) || "Unknown", console.error(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                  t,
                  e,
                  e
                ));
                break;
              case 1:
                JA || (console.error(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ), JA = !0);
            }
        } else
          en && li(e, t, l), vp(t), e === kt && ((Vt & Kn) === ll && (po |= l), Ma === hc && Fu(
            e,
            Et,
            Yl,
            !1
          )), oa(e);
      }
      function Wi(e, t, l) {
        if ((Vt & (Kn | xi)) !== ll)
          throw Error("Should not already be working.");
        var s = !l && (t & 60) === 0 && (t & e.expiredLanes) === 0 || ea(e, t), o = s ? Qh(e, t) : Dd(e, t, !0), m = s;
        do {
          if (o === ps) {
            pf && !s && Fu(e, t, 0, !1);
            break;
          } else if (o === ah)
            Fu(
              e,
              t,
              0,
              !hs
            );
          else {
            if (l = e.current.alternate, m && !Kh(l)) {
              o = Dd(e, t, !1), m = !1;
              continue;
            }
            if (o === df) {
              if (m = t, e.errorRecoveryDisabledLanes & m)
                var g = 0;
              else
                g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
              if (g !== 0) {
                t = g;
                e: {
                  o = e;
                  var _ = g;
                  g = Em;
                  var Q = Cn && o.current.memoizedState.isDehydrated;
                  if (Q && (Vs(
                    o,
                    _
                  ).flags |= 256), _ = Dd(
                    o,
                    _,
                    !1
                  ), _ !== df) {
                    if (_v && !Q) {
                      o.errorRecoveryDisabledLanes |= m, po |= m, o = hc;
                      break e;
                    }
                    o = ei, ei = g, o !== null && Vu(o);
                  }
                  o = _;
                }
                if (m = !1, o !== df) continue;
              }
            }
            if (o === hm) {
              Vs(e, 0), Fu(e, t, 0, !0);
              break;
            }
            e: {
              switch (s = e, o) {
                case ps:
                case hm:
                  throw Error("Root did not complete. This is a bug in React.");
                case hc:
                  if ((t & 4194176) === t) {
                    Fu(
                      s,
                      t,
                      Yl,
                      !hs
                    );
                    break e;
                  }
                  break;
                case df:
                  ei = null;
                  break;
                case Mv:
                case xA:
                  break;
                default:
                  throw Error("Unknown root exit status.");
              }
              if (s.finishedWork = l, s.finishedLanes = t, ue.actQueue !== null)
                Hd(
                  s,
                  ei,
                  Sm,
                  nh,
                  Yl,
                  po,
                  yc,
                  LA,
                  -0,
                  0
                );
              else {
                if ((t & 62914560) === t && (o = Ov + jA - y(), 10 < o)) {
                  if (Fu(
                    s,
                    t,
                    Yl,
                    !hs
                  ), at(s, 0) !== 0) break e;
                  s.timeoutHandle = zl(
                    np.bind(
                      null,
                      s,
                      l,
                      ei,
                      Sm,
                      nh,
                      t,
                      Yl,
                      po,
                      yc,
                      hs,
                      l1,
                      -0,
                      0
                    ),
                    o
                  );
                  break e;
                }
                np(
                  s,
                  l,
                  ei,
                  Sm,
                  nh,
                  t,
                  Yl,
                  po,
                  yc,
                  hs,
                  LA,
                  -0,
                  0
                );
              }
            }
          }
          break;
        } while (!0);
        oa(e);
      }
      function Vu(e) {
        ei === null ? ei = e : ei.push.apply(
          ei,
          e
        );
      }
      function np(e, t, l, s, o, m, g, _, Q, le, Me, Ue, Ke) {
        var St = t.subtreeFlags;
        if ((St & 8192 || (St & 16785408) === 16785408) && (Mi(), Br(t), t = $h(), t !== null)) {
          e.cancelPendingCommit = t(
            Hd.bind(
              null,
              e,
              l,
              s,
              o,
              g,
              _,
              Q,
              n1,
              Ue,
              Ke
            )
          ), Fu(
            e,
            m,
            g,
            !le
          );
          return;
        }
        Hd(
          e,
          l,
          s,
          o,
          g,
          _,
          Q,
          Me,
          Ue,
          Ke
        );
      }
      function Kh(e) {
        for (var t = e; ; ) {
          var l = t.tag;
          if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
            for (var s = 0; s < l.length; s++) {
              var o = l[s], m = o.getSnapshot;
              o = o.value;
              try {
                if (!P(m(), o)) return !1;
              } catch {
                return !1;
              }
            }
          if (l = t.child, t.subtreeFlags & 16384 && l !== null)
            l.return = t, t = l;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return !0;
      }
      function Fu(e, t, l, s) {
        t &= ~Hv, t &= ~po, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
        for (var o = t; 0 < o; ) {
          var m = 31 - $a(o), g = 1 << m;
          s[m] = -1, o &= ~g;
        }
        l !== 0 && Rl(e, l, t);
      }
      function gi() {
        return (Vt & (Kn | xi)) === ll ? (Ct(0), !1) : !0;
      }
      function Md() {
        if (yt !== null) {
          if ($t === Tl)
            var e = yt.return;
          else
            e = yt, Lo(), Gc(e), $r = null, rm = 0, e = yt;
          for (; e !== null; )
            id(e.alternate, e), e = e.return;
          yt = null;
        }
      }
      function Vs(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var l = e.timeoutHandle;
        l !== Wo && (e.timeoutHandle = Wo, iu(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Md(), kt = e, yt = l = Ci(e.current, null), Et = t, $t = Tl, Ql = null, hs = !1, pf = ea(e, t), _v = !1, Ma = ps, yc = Yl = Hv = po = mo = 0, ei = Em = null, nh = !1, (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
          for (e = e.entanglements, s &= t; 0 < s; ) {
            var o = 31 - $a(s), m = 1 << o;
            t |= e[o], s &= ~m;
          }
        return zi = t, Ee(), ku.discardPendingWarnings(), l;
      }
      function lp(e, t) {
        ut = null, ue.H = Gi, ue.getCurrentStack = null, Pa = !1, wa = null, t === Qp ? (t = Rc(), $t = ym) : t === mv ? (t = Rc(), $t = zA) : $t = t === TA ? Dv : t !== null && typeof t == "object" && typeof t.then == "function" ? mf : vm, Ql = t;
        var l = yt;
        if (l === null)
          Ma = hm, _l(
            e,
            Xa(t, e.current)
          );
        else
          switch (l.mode & 2 && Dt(l), Qn(), $t) {
            case vm:
              Ne !== null && typeof Ne.markComponentErrored == "function" && Ne.markComponentErrored(
                l,
                t,
                Et
              );
              break;
            case vc:
            case ym:
            case mf:
            case Am:
              Ne !== null && typeof Ne.markComponentSuspended == "function" && Ne.markComponentSuspended(
                l,
                t,
                Et
              );
          }
      }
      function Fs() {
        var e = yu.current;
        return e === null ? !0 : (Et & 4194176) === Et ? Ui === null : (Et & 62914560) === Et || (Et & 536870912) !== 0 ? e === Ui : !1;
      }
      function up() {
        var e = ue.H;
        return ue.H = Gi, e === null ? Gi : e;
      }
      function ip() {
        var e = ue.A;
        return ue.A = $E, e;
      }
      function Rd() {
        Ma = hc, hs || (Et & 4194176) !== Et && yu.current !== null || (pf = !0), (mo & 134217727) === 0 && (po & 134217727) === 0 || kt === null || Fu(
          kt,
          Et,
          Yl,
          !1
        );
      }
      function Dd(e, t, l) {
        var s = Vt;
        Vt |= Kn;
        var o = up(), m = ip();
        if (kt !== e || Et !== t) {
          if (en) {
            var g = e.memoizedUpdaters;
            0 < g.size && (Zo(e, Et), g.clear()), Hn(e, t);
          }
          Sm = null, Vs(e, t);
        }
        bs(t), t = !1, g = Ma;
        e: do
          try {
            if ($t !== Tl && yt !== null) {
              var _ = yt, Q = Ql;
              switch ($t) {
                case Dv:
                  Md(), g = ah;
                  break e;
                case ym:
                case vc:
                case mf:
                  yu.current === null && (t = !0);
                  var le = $t;
                  if ($t = Tl, Ql = null, Zs(e, _, Q, le), l && pf) {
                    g = ps;
                    break e;
                  }
                  break;
                default:
                  le = $t, $t = Tl, Ql = null, Zs(e, _, Q, le);
              }
            }
            sp(), g = Ma;
            break;
          } catch (Me) {
            lp(e, Me);
          }
        while (!0);
        return t && e.shellSuspendCounter++, Lo(), Vt = s, ue.H = o, ue.A = m, Ru(), yt === null && (kt = null, Et = 0, Ee()), g;
      }
      function sp() {
        for (; yt !== null; ) op(yt);
      }
      function Qh(e, t) {
        var l = Vt;
        Vt |= Kn;
        var s = up(), o = ip();
        if (kt !== e || Et !== t) {
          if (en) {
            var m = e.memoizedUpdaters;
            0 < m.size && (Zo(e, Et), m.clear()), Hn(e, t);
          }
          Sm = null, gm = y() + Nv, Vs(e, t);
        } else
          pf = ea(
            e,
            t
          );
        bs(t);
        e: do
          try {
            if ($t !== Tl && yt !== null)
              t: switch (t = yt, m = Ql, $t) {
                case vm:
                  $t = Tl, Ql = null, Zs(
                    e,
                    t,
                    m,
                    vm
                  );
                  break;
                case vc:
                  if (Mc(m)) {
                    $t = Tl, Ql = null, cp(t);
                    break;
                  }
                  t = function() {
                    $t === vc && kt === e && ($t = Am), oa(e);
                  }, m.then(t, t);
                  break e;
                case ym:
                  $t = Am;
                  break e;
                case zA:
                  $t = Rv;
                  break e;
                case Am:
                  Mc(m) ? ($t = Tl, Ql = null, cp(t)) : ($t = Tl, Ql = null, Zs(
                    e,
                    t,
                    m,
                    Am
                  ));
                  break;
                case Rv:
                  var g = null;
                  switch (yt.tag) {
                    case 26:
                      g = yt.memoizedState;
                    case 5:
                    case 27:
                      var _ = yt, Q = _.type, le = _.pendingProps;
                      if (g ? el(g) : ns(Q, le)) {
                        $t = Tl, Ql = null;
                        var Me = _.sibling;
                        if (Me !== null) yt = Me;
                        else {
                          var Ue = _.return;
                          Ue !== null ? (yt = Ue, Tr(Ue)) : yt = null;
                        }
                        break t;
                      }
                      break;
                    default:
                      console.error(
                        "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                      );
                  }
                  $t = Tl, Ql = null, Zs(
                    e,
                    t,
                    m,
                    Rv
                  );
                  break;
                case mf:
                  $t = Tl, Ql = null, Zs(
                    e,
                    t,
                    m,
                    mf
                  );
                  break;
                case Dv:
                  Md(), Ma = ah;
                  break e;
                default:
                  throw Error(
                    "Unexpected SuspendedReason. This is a bug in React."
                  );
              }
            ue.actQueue !== null ? sp() : Yh();
            break;
          } catch (Ke) {
            lp(e, Ke);
          }
        while (!0);
        return Lo(), ue.H = s, ue.A = o, Vt = l, yt !== null ? (Ne !== null && typeof Ne.markRenderYielded == "function" && Ne.markRenderYielded(), ps) : (Ru(), kt = null, Et = 0, Ee(), Ma);
      }
      function Yh() {
        for (; yt !== null && !c(); )
          op(yt);
      }
      function op(e) {
        var t = e.alternate;
        (e.mode & 2) !== aa ? (nt(e), t = te(
          e,
          cr,
          t,
          e,
          zi
        ), Dt(e)) : t = te(
          e,
          cr,
          t,
          e,
          zi
        ), e.memoizedProps = e.pendingProps, t === null ? Tr(e) : yt = t;
      }
      function cp(e) {
        var t = te(e, Xh, e);
        e.memoizedProps = e.pendingProps, t === null ? Tr(e) : yt = t;
      }
      function Xh(e) {
        var t = e.alternate, l = (e.mode & 2) !== aa;
        switch (l && nt(e), e.tag) {
          case 15:
          case 0:
            t = lr(
              t,
              e,
              e.pendingProps,
              e.type,
              void 0,
              Et
            );
            break;
          case 11:
            t = lr(
              t,
              e,
              e.pendingProps,
              e.type.render,
              e.ref,
              Et
            );
            break;
          case 5:
            Gc(e);
          default:
            id(t, e), e = yt = Ep(e, zi), t = cr(t, e, zi);
        }
        return l && Dt(e), t;
      }
      function Zs(e, t, l, s) {
        Lo(), Gc(t), $r = null, rm = 0;
        var o = t.return;
        try {
          if (js(
            e,
            o,
            t,
            l,
            Et
          )) {
            Ma = hm, _l(
              e,
              Xa(l, e.current)
            ), yt = null;
            return;
          }
        } catch (m) {
          if (o !== null) throw yt = o, m;
          Ma = hm, _l(
            e,
            Xa(l, e.current)
          ), yt = null;
          return;
        }
        t.flags & 32768 ? (Mt || s === vm ? e = !0 : pf || (Et & 536870912) !== 0 ? e = !1 : (hs = e = !0, (s === vc || s === ym || s === mf) && (s = yu.current, s !== null && s.tag === 13 && (s.flags |= 16384))), _d(t, e)) : Tr(t);
      }
      function Tr(e) {
        var t = e;
        do {
          if ((t.flags & 32768) !== 0) {
            _d(
              t,
              hs
            );
            return;
          }
          var l = t.alternate;
          if (e = t.return, nt(t), l = te(
            t,
            pr,
            l,
            t,
            zi
          ), (t.mode & 2) !== aa && zt(t), l !== null) {
            yt = l;
            return;
          }
          if (t = t.sibling, t !== null) {
            yt = t;
            return;
          }
          yt = t = e;
        } while (t !== null);
        Ma === ps && (Ma = xA);
      }
      function _d(e, t) {
        do {
          var l = qi(e.alternate, e);
          if (l !== null) {
            l.flags &= 32767, yt = l;
            return;
          }
          if ((e.mode & 2) !== aa) {
            zt(e), l = e.actualDuration;
            for (var s = e.child; s !== null; )
              l += s.actualDuration, s = s.sibling;
            e.actualDuration = l;
          }
          if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
            yt = e;
            return;
          }
          yt = e = l;
        } while (e !== null);
        Ma = ah, yt = null;
      }
      function Hd(e, t, l, s, o, m, g, _, Q, le) {
        var Me = ue.T, Ue = Iu();
        try {
          ka(2), ue.T = null, Vh(
            e,
            t,
            l,
            s,
            Ue,
            o,
            m,
            g,
            _,
            Q,
            le
          );
        } finally {
          ue.T = Me, ka(Ue);
        }
      }
      function Vh(e, t, l, s, o, m, g, _) {
        do
          Si();
        while (Ac !== null);
        if (ku.flushLegacyContextWarning(), ku.flushPendingUnsafeLifecycleWarnings(), (Vt & (Kn | xi)) !== ll)
          throw Error("Should not already be working.");
        var Q = e.finishedWork;
        if (s = e.finishedLanes, Ne !== null && typeof Ne.markCommitStarted == "function" && Ne.markCommitStarted(s), Q === null) return Fl(), null;
        if (s === 0 && console.error(
          "root.finishedLanes should not be empty during a commit. This is a bug in React."
        ), e.finishedWork = null, e.finishedLanes = 0, Q === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var le = Q.lanes | Q.childLanes;
        if (le |= lv, Ml(
          e,
          s,
          le,
          m,
          g,
          _
        ), e === kt && (yt = kt = null, Et = 0), (Q.subtreeFlags & 10256) === 0 && (Q.flags & 10256) === 0 || lh || (lh = !0, Uv = le, Gv = l, qh(w, function() {
          return Si(), null;
        })), xp = Ir(), l = (Q.flags & 15990) !== 0, (Q.subtreeFlags & 15990) !== 0 || l ? (l = ue.T, ue.T = null, m = Iu(), ka(2), g = Vt, Vt |= xi, pd(e, Q), yd(
          e,
          Q,
          s
        ), Po(e.containerInfo), e.current = Q, Ne !== null && typeof Ne.markLayoutEffectsStarted == "function" && Ne.markLayoutEffectsStarted(
          s
        ), Lh(Q, e, s), Ne !== null && typeof Ne.markLayoutEffectsStopped == "function" && Ne.markLayoutEffectsStopped(), h(), Vt = g, ka(m), ue.T = l) : e.current = Q, (l = lh) ? (lh = !1, Ac = e, Bm = s) : (rp(e, le), Ec = 0, Tm = null), le = e.pendingLanes, le === 0 && (ho = null), l || pp(e), On(Q.stateNode, o), en && e.memoizedUpdaters.clear(), Jh(), oa(e), t !== null)
          for (o = e.onRecoverableError, Q = 0; Q < t.length; Q++)
            le = t[Q], l = Fh(le.stack), te(
              le.source,
              o,
              le.value,
              l
            );
        return (Bm & 3) !== 0 && Si(), le = e.pendingLanes, (s & 4194218) !== 0 && (le & 42) !== 0 ? (jp = !0, e === xv ? Cm++ : (Cm = 0, xv = e)) : Cm = 0, Ct(0), Fl(), null;
      }
      function Fh(e) {
        return e = { componentStack: e }, Object.defineProperty(e, "digest", {
          get: function() {
            console.error(
              'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
            );
          }
        }), e;
      }
      function rp(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yo(t)));
      }
      function Si() {
        if (Ac !== null) {
          var e = Ac, t = Uv;
          Uv = 0;
          var l = ui(Bm), s = 32 > l ? 32 : l;
          l = ue.T;
          var o = Iu();
          try {
            if (ka(s), ue.T = null, Ac === null)
              var m = !1;
            else {
              s = Gv, Gv = null;
              var g = Ac, _ = Bm;
              if (Ac = null, Bm = 0, (Vt & (Kn | xi)) !== ll)
                throw Error(
                  "Cannot flush passive effects while already rendering."
                );
              zv = !0, uh = !1, Ne !== null && typeof Ne.markPassiveEffectsStarted == "function" && Ne.markPassiveEffectsStarted(_);
              var Q = Vt;
              if (Vt |= xi, Yu(g.current), gd(
                g,
                g.current,
                _,
                s
              ), Ne !== null && typeof Ne.markPassiveEffectsStopped == "function" && Ne.markPassiveEffectsStopped(), pp(g), Vt = Q, Ct(0, !1), uh ? g === Tm ? Ec++ : (Ec = 0, Tm = g) : Ec = 0, uh = zv = !1, Ie && typeof Ie.onPostCommitFiberRoot == "function")
                try {
                  Ie.onPostCommitFiberRoot(ze, g);
                } catch (Me) {
                  Jn || (Jn = !0, console.error(
                    "React instrumentation encountered an error: %s",
                    Me
                  ));
                }
              var le = g.current.stateNode;
              le.effectDuration = 0, le.passiveEffectDuration = 0, m = !0;
            }
            return m;
          } finally {
            ka(o), ue.T = l, rp(e, t);
          }
        }
        return !1;
      }
      function fp(e, t, l) {
        t = Xa(l, t), t = xo(e.stateNode, t, 2), e = Vn(e, t, 2), e !== null && (_n(e, 2), oa(e));
      }
      function Gt(e, t, l) {
        if (hf = !1, e.tag === 3)
          fp(e, e, l);
        else {
          for (; t !== null; ) {
            if (t.tag === 3) {
              fp(
                t,
                e,
                l
              );
              return;
            }
            if (t.tag === 1) {
              var s = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ho === null || !ho.has(s))) {
                e = Xa(l, e), l = tu(2), s = Vn(t, l, 2), s !== null && (ar(
                  l,
                  s,
                  t,
                  e
                ), _n(s, 2), oa(s));
                return;
              }
            }
            t = t.return;
          }
          console.error(
            `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
            l
          );
        }
      }
      function br(e, t, l) {
        var s = e.pingCache;
        if (s === null) {
          s = e.pingCache = new e1();
          var o = /* @__PURE__ */ new Set();
          s.set(t, o);
        } else
          o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
        o.has(l) || (_v = !0, o.add(l), s = Zh.bind(null, e, t, l), en && Zo(e, l), t.then(s, s));
      }
      function Zh(e, t, l) {
        var s = e.pingCache;
        s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Td() && ue.actQueue === null && console.error(
          `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
        ), kt === e && (Et & l) === l && (Ma === hc || Ma === Mv && (Et & 62914560) === Et && y() - Ov < jA ? (Vt & Kn) === ll && Vs(e, 0) : Hv |= l, yc === Et && (yc = 0)), oa(e);
      }
      function Od(e, t) {
        t === 0 && (t = bl()), e = Se(e, t), e !== null && (_n(e, t), oa(e));
      }
      function dp(e) {
        var t = e.memoizedState, l = 0;
        t !== null && (l = t.retryLane), Od(e, l);
      }
      function mp(e, t) {
        var l = 0;
        switch (e.tag) {
          case 13:
            var s = e.stateNode, o = e.memoizedState;
            o !== null && (l = o.retryLane);
            break;
          case 19:
            s = e.stateNode;
            break;
          case 22:
            s = e.stateNode._retryCache;
            break;
          default:
            throw Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        s !== null && s.delete(t), Od(e, l);
      }
      function Fo(e, t, l) {
        if ((t.subtreeFlags & 33562624) !== 0)
          for (t = t.child; t !== null; ) {
            var s = e, o = t, m = o.type === Or;
            m = l || m, o.tag !== 22 ? o.flags & 33554432 ? m && te(
              o,
              Mr,
              s,
              o,
              (o.mode & 64) === aa
            ) : Fo(
              s,
              o,
              m
            ) : o.memoizedState === null && (m && o.flags & 8192 ? te(
              o,
              Mr,
              s,
              o
            ) : o.subtreeFlags & 33554432 && te(
              o,
              Fo,
              s,
              o,
              m
            )), t = t.sibling;
          }
      }
      function Mr(e, t) {
        var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
        Tt(!0);
        try {
          Ys(t), l && Bd(t), ep(e, t.alternate, t, !1), l && Sd(e, t, 0, null, !1);
        } finally {
          Tt(!1);
        }
      }
      function pp(e) {
        var t = !0;
        e.current.mode & 24 || (t = !1), Fo(
          e,
          e.current,
          t
        );
      }
      function hp(e) {
        if ((Vt & Kn) === ll) {
          var t = e.tag;
          if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
            if (t = F(e) || "ReactComponent", ih !== null) {
              if (ih.has(t)) return;
              ih.add(t);
            } else ih = /* @__PURE__ */ new Set([t]);
            te(e, function() {
              console.error(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
            });
          }
        }
      }
      function Zo(e, t) {
        en && e.memoizedUpdaters.forEach(function(l) {
          li(e, l, t);
        });
      }
      function qh(e, t) {
        var l = ue.actQueue;
        return l !== null ? (l.push(t), u1) : n(e, t);
      }
      function vp(e) {
        Td() && ue.actQueue === null && te(e, function() {
          console.error(
            `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
            F(e)
          );
        });
      }
      function Bi(e) {
        if (Su === null) return e;
        var t = Su(e);
        return t === void 0 ? e : t.current;
      }
      function Nd(e) {
        if (Su === null) return e;
        var t = Su(e);
        return t === void 0 ? e != null && typeof e.render == "function" && (t = Bi(e.render), e.render !== t) ? (t = { $$typeof: uu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
      }
      function yp(e, t) {
        if (Su === null) return !1;
        var l = e.elementType;
        t = t.type;
        var s = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
        switch (e.tag) {
          case 1:
            typeof t == "function" && (s = !0);
            break;
          case 0:
            (typeof t == "function" || o === Wn) && (s = !0);
            break;
          case 11:
            (o === uu || o === Wn) && (s = !0);
            break;
          case 14:
          case 15:
            (o === Ur || o === Wn) && (s = !0);
            break;
          default:
            return !1;
        }
        return !!(s && (e = Su(l), e !== void 0 && e === Su(t)));
      }
      function Ap(e) {
        Su !== null && typeof WeakSet == "function" && (vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(e));
      }
      function Ud(e, t, l) {
        var s = e.alternate, o = e.child, m = e.sibling, g = e.tag, _ = e.type, Q = null;
        switch (g) {
          case 0:
          case 15:
          case 1:
            Q = _;
            break;
          case 11:
            Q = _.render;
        }
        if (Su === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var le = !1;
        _ = !1, Q !== null && (Q = Su(Q), Q !== void 0 && (l.has(Q) ? _ = !0 : t.has(Q) && (g === 1 ? _ = !0 : le = !0))), vf !== null && (vf.has(e) || s !== null && vf.has(s)) && (_ = !0), _ && (e._debugNeedsRemount = !0), (_ || le) && (s = Se(e, 2), s !== null && la(s, e, 2)), o === null || _ || Ud(
          o,
          t,
          l
        ), m !== null && Ud(
          m,
          t,
          l
        );
      }
      function Ih(e, t, l, s) {
        this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, QA || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
      }
      function Gd(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function Ci(e, t) {
        var l = e.alternate;
        switch (l === null ? (l = C(
          e.tag,
          t,
          e.key,
          e.mode
        ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l._debugOwner = e._debugOwner, l._debugHookTypes = e._debugHookTypes, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null, l.actualDuration = -0, l.actualStartTime = -1.1), l.flags = e.flags & 31457280, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext,
          _debugThenableState: t._debugThenableState
        }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l.selfBaseDuration = e.selfBaseDuration, l.treeBaseDuration = e.treeBaseDuration, l._debugInfo = e._debugInfo, l._debugNeedsRemount = e._debugNeedsRemount, l.tag) {
          case 0:
          case 15:
            l.type = Bi(e.type);
            break;
          case 1:
            l.type = Bi(e.type);
            break;
          case 11:
            l.type = Nd(e.type);
        }
        return l;
      }
      function Ep(e, t) {
        e.flags &= 31457282;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext,
          _debugThenableState: t._debugThenableState
        }, e.selfBaseDuration = l.selfBaseDuration, e.treeBaseDuration = l.treeBaseDuration), e;
      }
      function xd(e, t, l, s, o, m) {
        var g = 0, _ = e;
        if (typeof e == "function")
          Gd(e) && (g = 1), _ = Bi(_);
        else if (typeof e == "string")
          ke && Ca ? (g = tt(), g = gt(e, l, g) ? 26 : uc(e) ? 27 : 5) : ke ? (g = tt(), g = gt(e, l, g) ? 26 : 5) : g = Ca && uc(e) ? 27 : 5;
        else
          e: switch (e) {
            case es:
              return ki(
                l.children,
                o,
                m,
                t
              );
            case Or:
              g = 8, o |= 24;
              break;
            case Kd:
              return e = l, s = o, typeof e.id != "string" && console.error(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id
              ), t = C(12, e, t, s | 2), t.elementType = Kd, t.lanes = m, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
            case Ti:
              return t = C(13, l, t, o), t.elementType = Ti, t.lanes = m, t;
            case Sn:
              return t = C(19, l, t, o), t.elementType = Sn, t.lanes = m, t;
            case qo:
              return gp(l, o, m, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case kh:
                  case xl:
                    g = 10;
                    break e;
                  case Nr:
                    g = 9;
                    break e;
                  case uu:
                    g = 11, _ = Nd(_);
                    break e;
                  case Ur:
                    g = 14;
                    break e;
                  case Wn:
                    g = 16, _ = null;
                    break e;
                }
              _ = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : La(e) ? l = "array" : e !== void 0 && e.$$typeof === $i ? (l = "<" + ($(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, g = s ? typeof s.tag == "number" ? F(s) : typeof s.name == "string" ? s.name : null : null, g && (_ += `

Check the render method of \`` + g + "`."), g = 29, l = Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (l + "." + _)
              ), _ = null;
          }
        return t = C(g, l, t, o), t.elementType = e, t.type = _, t.lanes = m, t._debugOwner = s, t;
      }
      function Rr(e, t, l) {
        return t = xd(
          e.type,
          e.key,
          e.props,
          e._owner,
          t,
          l
        ), t._debugOwner = e._owner, t;
      }
      function ki(e, t, l, s) {
        return e = C(7, e, s, t), e.lanes = l, e;
      }
      function gp(e, t, l, s) {
        e = C(22, e, s, t), e.elementType = qo, e.lanes = l;
        var o = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var m = o, g = m._current;
            if (g === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if ((m._pendingVisibility & 2) === 0) {
              var _ = Se(g, 2);
              _ !== null && (m._pendingVisibility |= 2, la(_, g, 2));
            }
          },
          attach: function() {
            var m = o, g = m._current;
            if (g === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if ((m._pendingVisibility & 2) !== 0) {
              var _ = Se(g, 2);
              _ !== null && (m._pendingVisibility &= -3, la(_, g, 2));
            }
          }
        };
        return e.stateNode = o, e;
      }
      function zd(e, t, l) {
        return e = C(6, e, null, t), e.lanes = l, e;
      }
      function Dr(e, t, l) {
        return t = C(
          4,
          e.children !== null ? e.children : [],
          e.key,
          t
        ), t.lanes = l, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function wh(e, t, l, s, o, m, g, _) {
        for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Wo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dn(0), this.hiddenUpdates = Dn(null), this.identifierPrefix = s, this.onUncaughtError = o, this.onCaughtError = m, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
        this._debugRootType = l ? "hydrateRoot()" : "createRoot()";
      }
      function Sp(e, t, l, s, o, m, g, _, Q, le, Me, Ue) {
        return e = new wh(
          e,
          t,
          l,
          g,
          _,
          Q,
          le,
          Ue
        ), t = 1, m === !0 && (t |= 24), en && (t |= 2), m = C(3, null, null, t), e.current = m, m.stateNode = e, t = fr(), Ei(t), e.pooledCache = t, Ei(t), m.memoizedState = {
          element: s,
          isDehydrated: l,
          cache: t
        }, Ga(m), e;
      }
      function Pn(e) {
        return "" + e;
      }
      function jd(e) {
        return e ? (e = Sl, e) : Sl;
      }
      function _r(e, t, l, s) {
        return t.tag === 0 && Si(), Ld(
          t.current,
          2,
          e,
          t,
          l,
          s
        ), 2;
      }
      function Ld(e, t, l, s, o, m) {
        if (Ie && typeof Ie.onScheduleFiberRoot == "function")
          try {
            Ie.onScheduleFiberRoot(ze, s, l);
          } catch (g) {
            Jn || (Jn = !0, console.error(
              "React instrumentation encountered an error: %s",
              g
            ));
          }
        Ne !== null && typeof Ne.markRenderScheduled == "function" && Ne.markRenderScheduled(t), o = jd(o), s.context === null ? s.context = o : s.pendingContext = o, Pa && wa !== null && !XA && (XA = !0, console.error(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          F(wa) || "Unknown"
        )), s = Nu(t), s.payload = { element: l }, m = m === void 0 ? null : m, m !== null && (typeof m != "function" && console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          m
        ), s.callback = m), l = Vn(e, s, t), l !== null && (la(l, e, t), Ms(l, e, t));
      }
      function Jd(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var l = e.retryLane;
          e.retryLane = l !== 0 && l < t ? l : t;
        }
      }
      function Hr(e, t) {
        Jd(e, t), (e = e.alternate) && Jd(e, t);
      }
      function Ph() {
        return wa;
      }
      function Bp() {
        for (var e = /* @__PURE__ */ new Map(), t = 1, l = 0; 31 > l; l++) {
          var s = Ge(t);
          e.set(t, s), t *= 2;
        }
        return e;
      }
      var pt = {}, Wh = So, zn = cE(), Ia = Object.assign, Cp = Symbol.for("react.element"), $i = Symbol.for("react.transitional.element"), fa = Symbol.for("react.portal"), es = Symbol.for("react.fragment"), Or = Symbol.for("react.strict_mode"), Kd = Symbol.for("react.profiler"), kh = Symbol.for("react.provider"), Nr = Symbol.for("react.consumer"), xl = Symbol.for("react.context"), uu = Symbol.for("react.forward_ref"), Ti = Symbol.for("react.suspense"), Sn = Symbol.for("react.suspense_list"), Ur = Symbol.for("react.memo"), Wn = Symbol.for("react.lazy"), qo = Symbol.for("react.offscreen"), Gr = Symbol.for("react.memo_cache_sentinel"), Io = Symbol.iterator, Qd = Symbol.for("react.client.reference"), ue = Wh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, wo = 0, yl, Yd, Tp, xr, bp, Mp, Rp;
      oe.__reactDisabledLog = !0;
      var ts, jn, Bn = !1, zr = new (typeof WeakMap == "function" ? WeakMap : Map)(), wa = null, Pa = !1, La = Array.isArray, jr = u.rendererVersion, Al = u.rendererPackageName, kn = u.extraDevToolsConfig, El = u.getPublicInstance, Zu = u.getRootHostContext, qu = u.getChildHostContext, Wa = u.prepareForCommit, Po = u.resetAfterCommit, bi = u.createInstance, qs = u.appendInitialChild, rn = u.finalizeInitialChildren, _a = u.shouldSetTextContent, bt = u.createTextInstance, zl = u.scheduleTimeout, iu = u.cancelTimeout, Wo = u.noTimeout, ga = u.isPrimaryRenderer;
      u.warnsIfNotActing;
      var ya = u.supportsMutation, su = u.supportsPersistence, Cn = u.supportsHydration, as = u.getInstanceFromNode;
      u.beforeActiveInstanceBlur, u.afterActiveInstanceBlur;
      var Xd = u.preparePortalMount;
      u.prepareScopeUpdate, u.getInstanceFromScope;
      var ka = u.setCurrentUpdatePriority, Iu = u.getCurrentUpdatePriority, Is = u.resolveUpdatePriority;
      u.resolveEventType, u.resolveEventTimeStamp;
      var ko = u.shouldAttemptEagerTransition, Vd = u.detachDeletedInstance;
      u.requestPostPaintCallback;
      var ws = u.maySuspendCommit, ns = u.preloadInstance, Mi = u.startSuspendingCommit, Lr = u.suspendInstance, $h = u.waitForCommitToBeReady, ou = u.NotPendingTransition, wu = u.HostTransitionContext, Jr = u.resetFormInstance, Ps = u.bindToConsole, Ws = u.supportsMicrotasks, $o = u.scheduleMicrotask, gl = u.supportsTestSelectors, Dp = u.findFiberRoot, ks = u.getBoundingRect, Kr = u.getTextContent, fn = u.isHiddenSubtree, cu = u.matchAccessibilityRole, Ha = u.setFocusIfFocusable, Ri = u.setupIntersectionObserver, dt = u.appendChild, Kt = u.appendChildToContainer, Sa = u.commitTextUpdate, Qr = u.commitMount, $s = u.commitUpdate, ls = u.insertBefore, Yr = u.insertInContainerBefore, ec = u.removeChild, eo = u.removeChildFromContainer, _p = u.resetTextContent, Fd = u.hideInstance, ru = u.hideTextInstance, us = u.unhideInstance, Di = u.unhideTextInstance, is = u.clearContainer, Zd = u.cloneInstance, qd = u.createContainerChildSet, Id = u.appendChildToContainerChildSet, Ja = u.finalizeContainerChildren, Xr = u.replaceContainerChildren, tc = u.cloneHiddenInstance, _i = u.cloneHiddenTextInstance, jl = u.isSuspenseInstancePending, wd = u.isSuspenseInstanceFallback, ev = u.getSuspenseInstanceFallbackErrorDetails, tv = u.registerSuspenseInstanceRetry, da = u.canHydrateFormStateMarker, Hp = u.isFormStateMarkerMatching, Pu = u.getNextHydratableSibling, fu = u.getFirstHydratableChild, ma = u.getFirstHydratableChildWithinContainer, Pd = u.getFirstHydratableChildWithinSuspenseInstance, Op = u.canHydrateInstance, Ka = u.canHydrateTextInstance, Np = u.canHydrateSuspenseInstance, Ba = u.hydrateInstance, $n = u.hydrateTextInstance, Ll = u.hydrateSuspenseInstance, ss = u.getNextHydratableInstanceAfterSuspenseInstance, av = u.commitHydratedContainer, Vr = u.commitHydratedSuspenseInstance, Fr = u.clearSuspenseBoundary, Zr = u.clearSuspenseBoundaryFromContainer, ac = u.shouldDeleteUnhydratedTailInstances, nc = u.diffHydratedPropsForDevWarnings, to = u.diffHydratedTextForDevWarnings, Up = u.describeHydratableInstanceForDevWarnings, Qt = u.validateHydratableInstance, qt = u.validateHydratableTextInstance, ke = u.supportsResources, gt = u.isHostHoistableType, Yt = u.getHoistableRoot, Ln = u.getResource, du = u.acquireResource, os = u.releaseResource, Wd = u.hydrateHoistable, mu = u.mountHoistable, ua = u.unmountHoistable, Hi = u.createHoistableInstance, cs = u.prepareToCommitHoistables, kd = u.mayResourceSuspendCommit, el = u.preloadResource, ao = u.suspendResource, Ca = u.supportsSingletons, Jl = u.resolveSingletonInstance, $d = u.clearSingleton, em = u.acquireSingletonInstance, lc = u.releaseSingletonInstance, uc = u.isHostSingletonType, pu = [], no = [], Tn = -1, Sl = {};
      Object.freeze(Sl);
      var $a = Math.clz32 ? Math.clz32 : Qe, tm = Math.log, ic = Math.LN2, lo = 128, a = 4194304, n = zn.unstable_scheduleCallback, i = zn.unstable_cancelCallback, c = zn.unstable_shouldYield, h = zn.unstable_requestPaint, y = zn.unstable_now, R = zn.unstable_ImmediatePriority, z = zn.unstable_UserBlockingPriority, w = zn.unstable_NormalPriority, he = zn.unstable_IdlePriority, Oe = zn.log, Je = zn.unstable_setDisableYieldValue, ze = null, Ie = null, Ne = null, Jn = !1, en = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", P = typeof Object.is == "function" ? Object.is : Du, I = /* @__PURE__ */ new WeakMap(), ae = [], be = 0, Ze = null, Xt = 0, qe = [], st = 0, ta = null, rt = 1, dn = "", Oi = x(null), am = x(null), uo = x(null), Gp = x(null), Ky = /["'&<>\n\t]|^\s|\s$/, tl = null, bn = null, Mt = !1, rs = !1, hu = null, Wu = null, Ni = !1, nv = Error(
        "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), aa = 0, vu = [], qr = 0, lv = 0, Ir = zn.unstable_now, xp = -0, Bl = -1.1, sc = -0, zp = !1, jp = !1, Lp = null, wr = null, uv = !1, iv = !1, Jp = !1, sv = !1, Pr = 0, ov = {}, nm = null, cv = 0, oc = 0, Wr = null, Qy = 0, Yy = 1, Xy = 2, rv = 3, io = !1, Vy = !1, fv = null, dv = !1, VE = Object.prototype.hasOwnProperty, ku = {
        recordUnsafeLifecycleWarnings: function() {
        },
        flushPendingUnsafeLifecycleWarnings: function() {
        },
        recordLegacyContextWarning: function() {
        },
        flushLegacyContextWarning: function() {
        },
        discardPendingWarnings: function() {
        }
      }, lm = [], um = [], im = [], sm = [], om = [], cm = [], cc = /* @__PURE__ */ new Set();
      ku.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && lm.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillMount == "function" && um.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && im.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillReceiveProps == "function" && sm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && om.push(e), e.mode & 8 && typeof t.UNSAFE_componentWillUpdate == "function" && cm.push(e));
      }, ku.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        0 < lm.length && (lm.forEach(function(_) {
          e.add(
            F(_) || "Component"
          ), cc.add(_.type);
        }), lm = []);
        var t = /* @__PURE__ */ new Set();
        0 < um.length && (um.forEach(function(_) {
          t.add(
            F(_) || "Component"
          ), cc.add(_.type);
        }), um = []);
        var l = /* @__PURE__ */ new Set();
        0 < im.length && (im.forEach(function(_) {
          l.add(
            F(_) || "Component"
          ), cc.add(_.type);
        }), im = []);
        var s = /* @__PURE__ */ new Set();
        0 < sm.length && (sm.forEach(
          function(_) {
            s.add(
              F(_) || "Component"
            ), cc.add(_.type);
          }
        ), sm = []);
        var o = /* @__PURE__ */ new Set();
        0 < om.length && (om.forEach(function(_) {
          o.add(
            F(_) || "Component"
          ), cc.add(_.type);
        }), om = []);
        var m = /* @__PURE__ */ new Set();
        if (0 < cm.length && (cm.forEach(function(_) {
          m.add(
            F(_) || "Component"
          ), cc.add(_.type);
        }), cm = []), 0 < t.size) {
          var g = G(
            t
          );
          console.error(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            g
          );
        }
        0 < s.size && (g = G(
          s
        ), console.error(
          `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
          g
        )), 0 < m.size && (g = G(
          m
        ), console.error(
          `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
          g
        )), 0 < e.size && (g = G(e), console.warn(
          `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          g
        )), 0 < l.size && (g = G(
          l
        ), console.warn(
          `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          g
        )), 0 < o.size && (g = G(o), console.warn(
          `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
          g
        ));
      };
      var Kp = /* @__PURE__ */ new Map(), Fy = /* @__PURE__ */ new Set();
      ku.recordLegacyContextWarning = function(e, t) {
        for (var l = null, s = e; s !== null; )
          s.mode & 8 && (l = s), s = s.return;
        l === null ? console.error(
          "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
        ) : !Fy.has(e.type) && (s = Kp.get(l), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (s === void 0 && (s = [], Kp.set(l, s)), s.push(e));
      }, ku.flushLegacyContextWarning = function() {
        Kp.forEach(function(e) {
          if (e.length !== 0) {
            var t = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(o) {
              l.add(F(o) || "Component"), Fy.add(o.type);
            });
            var s = G(l);
            te(t, function() {
              console.error(
                `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
                s
              );
            });
          }
        });
      }, ku.discardPendingWarnings = function() {
        lm = [], um = [], im = [], sm = [], om = [], cm = [], Kp = /* @__PURE__ */ new Map();
      };
      var Qp = Error(
        "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
      ), mv = Error(
        "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), Yp = {
        then: function() {
          console.error(
            'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
          );
        }
      }, kr = null, Xp = !1, Zy = {
        "react-stack-bottom-frame": function(e, t, l) {
          var s = Pa;
          Pa = !0;
          try {
            return e(t, l);
          } finally {
            Pa = s;
          }
        }
      }, pv = Zy["react-stack-bottom-frame"].bind(Zy), qy = {
        "react-stack-bottom-frame": function(e) {
          var t = Pa;
          Pa = !0;
          try {
            return e.render();
          } finally {
            Pa = t;
          }
        }
      }, Iy = qy["react-stack-bottom-frame"].bind(qy), wy = {
        "react-stack-bottom-frame": function(e, t) {
          try {
            t.componentDidMount();
          } catch (l) {
            Gt(e, e.return, l);
          }
        }
      }, hv = wy["react-stack-bottom-frame"].bind(wy), Py = {
        "react-stack-bottom-frame": function(e, t, l, s, o) {
          try {
            t.componentDidUpdate(l, s, o);
          } catch (m) {
            Gt(e, e.return, m);
          }
        }
      }, Wy = Py["react-stack-bottom-frame"].bind(Py), ky = {
        "react-stack-bottom-frame": function(e, t) {
          var l = t.stack;
          e.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
          });
        }
      }, FE = ky["react-stack-bottom-frame"].bind(ky), $y = {
        "react-stack-bottom-frame": function(e, t, l) {
          try {
            l.componentWillUnmount();
          } catch (s) {
            Gt(e, t, s);
          }
        }
      }, eA = $y["react-stack-bottom-frame"].bind($y), tA = {
        "react-stack-bottom-frame": function(e) {
          var t = e.create;
          return e = e.inst, t = t(), e.destroy = t;
        }
      }, ZE = tA["react-stack-bottom-frame"].bind(tA), aA = {
        "react-stack-bottom-frame": function(e, t, l) {
          try {
            l();
          } catch (s) {
            Gt(e, t, s);
          }
        }
      }, qE = aA["react-stack-bottom-frame"].bind(aA), nA = {
        "react-stack-bottom-frame": function(e) {
          var t = e._init;
          return t(e._payload);
        }
      }, so = nA["react-stack-bottom-frame"].bind(nA), $r = null, rm = 0, mt = null, vv, lA = vv = !1, uA = {}, iA = {}, sA = {};
      Z = function(e, t, l) {
        if (l !== null && typeof l == "object" && l._store && (!l._store.validated && l.key == null || l._store.validated === 2)) {
          if (typeof l._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          l._store.validated = 1;
          var s = F(e), o = s || "null";
          if (!uA[o]) {
            uA[o] = !0, l = l._owner, e = e._debugOwner;
            var m = "";
            e && typeof e.tag == "number" && (o = F(e)) && (m = `

Check the render method of \`` + o + "`."), m || s && (m = `

Check the top-level render call using <` + s + ">.");
            var g = "";
            l != null && e !== l && (s = null, typeof l.tag == "number" ? s = F(l) : typeof l.name == "string" && (s = l.name), s && (g = " It was passed a child from " + s + ".")), te(t, function() {
              console.error(
                'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                m,
                g
              );
            });
          }
        }
      };
      var rc = zf(!0), oA = zf(!1), ef = x(null), Vp = x(0), yu = x(null), Ui = null, tf = 1, fm = 2, tn = x(0), Au = 0, Eu = 1, al = 2, Mn = 4, an = 8, af, cA = /* @__PURE__ */ new Set(), rA = /* @__PURE__ */ new Set(), yv = /* @__PURE__ */ new Set(), fA = /* @__PURE__ */ new Set(), oo = 0, ut = null, It = null, Qa = null, Fp = !1, nf = !1, fc = !1, Zp = 0, dm = 0, fs = null, IE = 0, wE = 25, se = null, gu = null, ds = -1, mm = !1, Av = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Gi = {
        readContext: Pt,
        use: Gu,
        useCallback: ra,
        useContext: ra,
        useEffect: ra,
        useImperativeHandle: ra,
        useLayoutEffect: ra,
        useInsertionEffect: ra,
        useMemo: ra,
        useReducer: ra,
        useRef: ra,
        useState: ra,
        useDebugValue: ra,
        useDeferredValue: ra,
        useTransition: ra,
        useSyncExternalStore: ra,
        useId: ra
      };
      Gi.useCacheRefresh = ra, Gi.useMemoCache = ra, Gi.useHostTransitionStatus = ra, Gi.useFormState = ra, Gi.useActionState = ra, Gi.useOptimistic = ra;
      var co = null, dc = null, ro = null, mc = null, Cl = null, nl = null, fo = null;
      co = {
        readContext: function(e) {
          return Pt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return se = "useCallback", lt(), Qi(t), Qf(e, t);
        },
        useContext: function(e) {
          return se = "useContext", lt(), Pt(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", lt(), Qi(t), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", lt(), Qi(l), Fi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          se = "useInsertionEffect", lt(), Qi(t), mi(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", lt(), Qi(t), Vc(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", lt(), Qi(t);
          var l = ue.H;
          ue.H = Cl;
          try {
            return Zc(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", lt();
          var s = ue.H;
          ue.H = Cl;
          try {
            return Do(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function(e) {
          return se = "useRef", lt(), Xc(e);
        },
        useState: function(e) {
          se = "useState", lt();
          var t = ue.H;
          ue.H = Cl;
          try {
            return Wl(e);
          } finally {
            ue.H = t;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", lt();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", lt(), kl(e, t);
        },
        useTransition: function() {
          return se = "useTransition", lt(), qc();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", lt(), Ho(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", lt(), Pc();
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", lt(), Zf();
        }
      }, co.useMemoCache = ci, co.useHostTransitionStatus = $l, co.useFormState = function(e, t) {
        return se = "useFormState", lt(), Ns(), fi(e, t);
      }, co.useActionState = function(e, t) {
        return se = "useActionState", lt(), fi(e, t);
      }, co.useOptimistic = function(e) {
        return se = "useOptimistic", lt(), Dl(e);
      }, dc = {
        readContext: function(e) {
          return Pt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return se = "useCallback", Ce(), Qf(e, t);
        },
        useContext: function(e) {
          return se = "useContext", Ce(), Pt(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", Ce(), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", Ce(), Fi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          se = "useInsertionEffect", Ce(), mi(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", Ce(), Vc(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", Ce();
          var l = ue.H;
          ue.H = Cl;
          try {
            return Zc(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", Ce();
          var s = ue.H;
          ue.H = Cl;
          try {
            return Do(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function(e) {
          return se = "useRef", Ce(), Xc(e);
        },
        useState: function(e) {
          se = "useState", Ce();
          var t = ue.H;
          ue.H = Cl;
          try {
            return Wl(e);
          } finally {
            ue.H = t;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", Ce();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", Ce(), kl(e, t);
        },
        useTransition: function() {
          return se = "useTransition", Ce(), qc();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", Ce(), Ho(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", Ce(), Pc();
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", Ce(), Zf();
        }
      }, dc.useMemoCache = ci, dc.useHostTransitionStatus = $l, dc.useFormState = function(e, t) {
        return se = "useFormState", Ce(), Ns(), fi(e, t);
      }, dc.useActionState = function(e, t) {
        return se = "useActionState", Ce(), fi(e, t);
      }, dc.useOptimistic = function(e) {
        return se = "useOptimistic", Ce(), Dl(e);
      }, ro = {
        readContext: function(e) {
          return Pt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return se = "useCallback", Ce(), Fc(e, t);
        },
        useContext: function(e) {
          return se = "useContext", Ce(), Pt(e);
        },
        useEffect: function(e, t) {
          se = "useEffect", Ce(), sn(2048, an, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", Ce(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", Ce(), sn(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", Ce(), sn(4, Mn, e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", Ce();
          var l = ue.H;
          ue.H = nl;
          try {
            return pi(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", Ce();
          var s = ue.H;
          ue.H = nl;
          try {
            return Yi(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function() {
          return se = "useRef", Ce(), Ut().memoizedState;
        },
        useState: function() {
          se = "useState", Ce();
          var e = ue.H;
          ue.H = nl;
          try {
            return Yi(Fn);
          } finally {
            ue.H = e;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", Ce();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", Ce(), Yf(e, t);
        },
        useTransition: function() {
          return se = "useTransition", Ce(), Ic();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", Ce(), Oo(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", Ce(), Ut().memoizedState;
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", Ce(), Ut().memoizedState;
        }
      }, ro.useMemoCache = ci, ro.useHostTransitionStatus = $l, ro.useFormState = function(e) {
        return se = "useFormState", Ce(), Ns(), Vi(e);
      }, ro.useActionState = function(e) {
        return se = "useActionState", Ce(), Vi(e);
      }, ro.useOptimistic = function(e, t) {
        return se = "useOptimistic", Ce(), Lc(e, t);
      }, mc = {
        readContext: function(e) {
          return Pt(e);
        },
        use: Gu,
        useCallback: function(e, t) {
          return se = "useCallback", Ce(), Fc(e, t);
        },
        useContext: function(e) {
          return se = "useContext", Ce(), Pt(e);
        },
        useEffect: function(e, t) {
          se = "useEffect", Ce(), sn(2048, an, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", Ce(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", Ce(), sn(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", Ce(), sn(4, Mn, e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", Ce();
          var l = ue.H;
          ue.H = fo;
          try {
            return pi(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", Ce();
          var s = ue.H;
          ue.H = fo;
          try {
            return Xi(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function() {
          return se = "useRef", Ce(), Ut().memoizedState;
        },
        useState: function() {
          se = "useState", Ce();
          var e = ue.H;
          ue.H = fo;
          try {
            return Xi(Fn);
          } finally {
            ue.H = e;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", Ce();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", Ce(), Xf(e, t);
        },
        useTransition: function() {
          return se = "useTransition", Ce(), wc();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", Ce(), Oo(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", Ce(), Ut().memoizedState;
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", Ce(), Ut().memoizedState;
        }
      }, mc.useMemoCache = ci, mc.useHostTransitionStatus = $l, mc.useFormState = function(e) {
        return se = "useFormState", Ce(), Ns(), Uo(e);
      }, mc.useActionState = function(e) {
        return se = "useActionState", Ce(), Uo(e);
      }, mc.useOptimistic = function(e, t) {
        return se = "useOptimistic", Ce(), Gs(e, t);
      }, Cl = {
        readContext: function(e) {
          return N(), Pt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", O(), lt(), Qf(e, t);
        },
        useContext: function(e) {
          return se = "useContext", O(), lt(), Pt(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", O(), lt(), zs(e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", O(), lt(), Fi(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          se = "useInsertionEffect", O(), lt(), mi(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", O(), lt(), Vc(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", O(), lt();
          var l = ue.H;
          ue.H = Cl;
          try {
            return Zc(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", O(), lt();
          var s = ue.H;
          ue.H = Cl;
          try {
            return Do(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function(e) {
          return se = "useRef", O(), lt(), Xc(e);
        },
        useState: function(e) {
          se = "useState", O(), lt();
          var t = ue.H;
          ue.H = Cl;
          try {
            return Wl(e);
          } finally {
            ue.H = t;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", O(), lt();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", O(), lt(), kl(e, t);
        },
        useTransition: function() {
          return se = "useTransition", O(), lt(), qc();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", O(), lt(), Ho(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", O(), lt(), Pc();
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", lt(), Zf();
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, Cl.useHostTransitionStatus = $l, Cl.useFormState = function(e, t) {
        return se = "useFormState", O(), lt(), fi(e, t);
      }, Cl.useActionState = function(e, t) {
        return se = "useActionState", O(), lt(), fi(e, t);
      }, Cl.useOptimistic = function(e) {
        return se = "useOptimistic", O(), lt(), Dl(e);
      }, nl = {
        readContext: function(e) {
          return N(), Pt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", O(), Ce(), Fc(e, t);
        },
        useContext: function(e) {
          return se = "useContext", O(), Ce(), Pt(e);
        },
        useEffect: function(e, t) {
          se = "useEffect", O(), Ce(), sn(2048, an, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", O(), Ce(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", O(), Ce(), sn(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", O(), Ce(), sn(4, Mn, e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", O(), Ce();
          var l = ue.H;
          ue.H = nl;
          try {
            return pi(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", O(), Ce();
          var s = ue.H;
          ue.H = nl;
          try {
            return Yi(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function() {
          return se = "useRef", O(), Ce(), Ut().memoizedState;
        },
        useState: function() {
          se = "useState", O(), Ce();
          var e = ue.H;
          ue.H = nl;
          try {
            return Yi(Fn);
          } finally {
            ue.H = e;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", O(), Ce();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", O(), Ce(), Yf(e, t);
        },
        useTransition: function() {
          return se = "useTransition", O(), Ce(), Ic();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", O(), Ce(), Oo(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", O(), Ce(), Ut().memoizedState;
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", Ce(), Ut().memoizedState;
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, nl.useHostTransitionStatus = $l, nl.useFormState = function(e) {
        return se = "useFormState", O(), Ce(), Vi(e);
      }, nl.useActionState = function(e) {
        return se = "useActionState", O(), Ce(), Vi(e);
      }, nl.useOptimistic = function(e, t) {
        return se = "useOptimistic", O(), Ce(), Lc(e, t);
      }, fo = {
        readContext: function(e) {
          return N(), Pt(e);
        },
        use: function(e) {
          return O(), Gu(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", O(), Ce(), Fc(e, t);
        },
        useContext: function(e) {
          return se = "useContext", O(), Ce(), Pt(e);
        },
        useEffect: function(e, t) {
          se = "useEffect", O(), Ce(), sn(2048, an, e, t);
        },
        useImperativeHandle: function(e, t, l) {
          return se = "useImperativeHandle", O(), Ce(), Zt(e, t, l);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", O(), Ce(), sn(4, al, e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", O(), Ce(), sn(4, Mn, e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", O(), Ce();
          var l = ue.H;
          ue.H = nl;
          try {
            return pi(e, t);
          } finally {
            ue.H = l;
          }
        },
        useReducer: function(e, t, l) {
          se = "useReducer", O(), Ce();
          var s = ue.H;
          ue.H = nl;
          try {
            return Xi(e, t, l);
          } finally {
            ue.H = s;
          }
        },
        useRef: function() {
          return se = "useRef", O(), Ce(), Ut().memoizedState;
        },
        useState: function() {
          se = "useState", O(), Ce();
          var e = ue.H;
          ue.H = nl;
          try {
            return Xi(Fn);
          } finally {
            ue.H = e;
          }
        },
        useDebugValue: function() {
          se = "useDebugValue", O(), Ce();
        },
        useDeferredValue: function(e, t) {
          return se = "useDeferredValue", O(), Ce(), Xf(e, t);
        },
        useTransition: function() {
          return se = "useTransition", O(), Ce(), wc();
        },
        useSyncExternalStore: function(e, t, l) {
          return se = "useSyncExternalStore", O(), Ce(), Oo(
            e,
            t,
            l
          );
        },
        useId: function() {
          return se = "useId", O(), Ce(), Ut().memoizedState;
        },
        useCacheRefresh: function() {
          return se = "useCacheRefresh", Ce(), Ut().memoizedState;
        },
        useMemoCache: function(e) {
          return O(), ci(e);
        }
      }, fo.useHostTransitionStatus = $l, fo.useFormState = function(e) {
        return se = "useFormState", O(), Ce(), Uo(e);
      }, fo.useActionState = function(e) {
        return se = "useActionState", O(), Ce(), Uo(e);
      }, fo.useOptimistic = function(e, t) {
        return se = "useOptimistic", O(), Ce(), Gs(e, t);
      };
      var dA = {}, mA = /* @__PURE__ */ new Set(), pA = /* @__PURE__ */ new Set(), hA = /* @__PURE__ */ new Set(), vA = /* @__PURE__ */ new Set(), yA = /* @__PURE__ */ new Set(), AA = /* @__PURE__ */ new Set(), EA = /* @__PURE__ */ new Set(), gA = /* @__PURE__ */ new Set(), SA = /* @__PURE__ */ new Set(), BA = /* @__PURE__ */ new Set();
      Object.freeze(dA);
      var Ev = {
        isMounted: function(e) {
          var t = wa;
          if (t !== null && Pa && t.tag === 1) {
            var l = t.stateNode;
            l._warnedAboutRefsInRender || console.error(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              F(t) || "A component"
            ), l._warnedAboutRefsInRender = !0;
          }
          return (e = e._reactInternals) ? Ae(e) === e : !1;
        },
        enqueueSetState: function(e, t, l) {
          e = e._reactInternals;
          var s = wn(e), o = Nu(s);
          o.payload = t, l != null && (er(l), o.callback = l), t = Vn(e, o, s), t !== null && (la(t, e, s), Ms(t, e, s)), sl(e, s);
        },
        enqueueReplaceState: function(e, t, l) {
          e = e._reactInternals;
          var s = wn(e), o = Nu(s);
          o.tag = Yy, o.payload = t, l != null && (er(l), o.callback = l), t = Vn(e, o, s), t !== null && (la(t, e, s), Ms(t, e, s)), sl(e, s);
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var l = wn(e), s = Nu(l);
          s.tag = Xy, t != null && (er(t), s.callback = t), t = Vn(e, s, l), t !== null && (la(t, e, l), Ms(t, e, l)), Ne !== null && typeof Ne.markForceUpdateScheduled == "function" && Ne.markForceUpdateScheduled(e, l);
        }
      }, CA = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, lf = null, gv = null, TA = Error(
        "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
      ), mn = !1, bA = {}, MA = {}, RA = {}, DA = {}, uf = !1, _A = {}, Sv = {}, Bv = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      }, HA = !1, qp = x(null), Cv = x(null), Tv = x(null), Ip = {}, wp = null, sf = null, of = !1, PE = typeof AbortController < "u" ? AbortController : function() {
        var e = [], t = this.signal = {
          aborted: !1,
          addEventListener: function(l, s) {
            e.push(s);
          }
        };
        this.abort = function() {
          t.aborted = !0, e.forEach(function(l) {
            return l();
          });
        };
      }, WE = zn.unstable_scheduleCallback, kE = zn.unstable_NormalPriority, Ta = {
        $$typeof: xl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
        _currentRenderer: null,
        _currentRenderer2: null
      }, OA = ue.S;
      ue.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Ot(e, t), OA !== null && OA(e, t);
      };
      var pc = x(null), NA = null;
      NA = /* @__PURE__ */ new Set();
      var ms = !1, ba = !1, bv = !1, UA = typeof WeakSet == "function" ? WeakSet : Set, pn = null, cf = null, rf = null, GA = !1, Ya = null, Kl = !1, $u = null, ff = 8192, $E = {
        getCacheForType: function(e) {
          var t = Pt(Ta), l = t.data.get(e);
          return l === void 0 && (l = e(), t.data.set(e, l)), l;
        },
        getOwner: function() {
          return wa;
        }
      }, Pp = 0, Wp = 1, kp = 2, $p = 3, eh = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var pm = Symbol.for;
        Pp = pm("selector.component"), Wp = pm("selector.has_pseudo_class"), kp = pm("selector.role"), $p = pm("selector.test_id"), eh = pm("selector.text");
      }
      var th = [], e1 = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, Kn = 2, xi = 4, ps = 0, hm = 1, df = 2, Mv = 3, hc = 4, xA = 5, ah = 6, Vt = ll, kt = null, yt = null, Et = 0, Tl = 0, vm = 1, vc = 2, ym = 3, zA = 4, Rv = 5, mf = 6, Am = 7, Dv = 8, $t = Tl, Ql = null, hs = !1, pf = !1, _v = !1, zi = 0, Ma = ps, mo = 0, po = 0, Hv = 0, Yl = 0, yc = 0, Em = null, ei = null, nh = !1, Ov = 0, jA = 300, gm = 1 / 0, Nv = 500, Sm = null, ho = null, lh = !1, Ac = null, Bm = 0, Uv = 0, Gv = null, t1 = 50, Cm = 0, xv = null, zv = !1, uh = !1, a1 = 50, Ec = 0, Tm = null, hf = !1, LA = 0, n1 = 1, l1 = 2, ih = null, JA = !1, KA = /* @__PURE__ */ new Set(), u1 = {}, Su = null, vf = null, QA = !1;
      try {
        var YA = Object.preventExtensions({});
      } catch {
        QA = !0;
      }
      var XA = !1, VA = {}, FA = null, ZA = null, qA = null, IA = null, wA = null, PA = null, WA = null, kA = null, $A = null;
      return FA = function(e, t, l, s) {
        t = r(e, t), t !== null && (l = f(t.memoizedState, l, 0, s), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ia({}, e.memoizedProps), l = Se(e, 2), l !== null && la(l, e, 2));
      }, ZA = function(e, t, l) {
        t = r(e, t), t !== null && (l = A(t.memoizedState, l, 0), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ia({}, e.memoizedProps), l = Se(e, 2), l !== null && la(l, e, 2));
      }, qA = function(e, t, l, s) {
        t = r(e, t), t !== null && (l = p(t.memoizedState, l, s), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ia({}, e.memoizedProps), l = Se(e, 2), l !== null && la(l, e, 2));
      }, IA = function(e, t, l) {
        e.pendingProps = f(e.memoizedProps, t, 0, l), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Se(e, 2), t !== null && la(t, e, 2);
      }, wA = function(e, t) {
        e.pendingProps = A(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Se(e, 2), t !== null && la(t, e, 2);
      }, PA = function(e, t, l) {
        e.pendingProps = p(
          e.memoizedProps,
          t,
          l
        ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Se(e, 2), t !== null && la(t, e, 2);
      }, WA = function(e) {
        var t = Se(e, 2);
        t !== null && la(t, e, 2);
      }, kA = function(e) {
        E = e;
      }, $A = function(e) {
        S = e;
      }, pt.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
          var t = Se(e, 67108864);
          t !== null && la(t, e, 67108864), Hr(e, 67108864);
        }
      }, pt.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
          var t = wn(e), l = Se(e, t);
          l !== null && la(l, e, t), Hr(e, t);
        }
      }, pt.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var t = we(e.pendingLanes);
              if (t !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                  var l = 1 << 31 - $a(t);
                  e.entanglements[1] |= l, t &= ~l;
                }
                oa(e), (Vt & (Kn | xi)) === ll && (gm = y() + Nv, Ct(0));
              }
            }
            break;
          case 13:
            t = Se(e, 2), t !== null && la(t, e, 2), gi(), Hr(e, 2);
        }
      }, pt.batchedUpdates = function(e, t) {
        return e(t);
      }, pt.createComponentSelector = function(e) {
        return { $$typeof: Pp, value: e };
      }, pt.createContainer = function(e, t, l, s, o, m, g, _, Q, le) {
        return Sp(
          e,
          t,
          !1,
          null,
          l,
          s,
          m,
          g,
          _,
          Q,
          le,
          null
        );
      }, pt.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Wp, value: e };
      }, pt.createHydrationContainer = function(e, t, l, s, o, m, g, _, Q, le, Me, Ue, Ke) {
        return e = Sp(
          l,
          s,
          !0,
          e,
          o,
          m,
          _,
          Q,
          le,
          Me,
          Ue,
          Ke
        ), e.context = jd(null), l = e.current, s = wn(l), o = Nu(s), o.callback = t ?? null, Vn(l, o, s), e.current.lanes = s, _n(e, s), oa(e), e;
      }, pt.createPortal = function(e, t, l) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        try {
          Pn(s);
          var o = !1;
        } catch {
          o = !0;
        }
        return o && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object"
        ), Pn(s)), {
          $$typeof: fa,
          key: s == null ? null : "" + s,
          children: e,
          containerInfo: t,
          implementation: l
        };
      }, pt.createRoleSelector = function(e) {
        return { $$typeof: kp, value: e };
      }, pt.createTestNameSelector = function(e) {
        return { $$typeof: $p, value: e };
      }, pt.createTextSelector = function(e) {
        return { $$typeof: eh, value: e };
      }, pt.defaultOnCaughtError = function(e, t) {
        var l = lf ? "The above error occurred in the <" + lf + "> component." : "The above error occurred in one of your React components.", s = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((gv || "Anonymous") + "."), o = ue.getCurrentStack, m = t.componentStack != null ? t.componentStack : "";
        ue.getCurrentStack = function() {
          return m;
        };
        try {
          typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Ps(
            "error",
            [
              `%o

%s

%s
`,
              e,
              l,
              s
            ],
            e.environmentName
          )() : console.error(
            `%o

%s

%s
`,
            e,
            l,
            s
          );
        } finally {
          ue.getCurrentStack = o;
        }
      }, pt.defaultOnRecoverableError = function(e) {
        CA(e);
      }, pt.defaultOnUncaughtError = function(e, t) {
        CA(e), e = lf ? "An error occurred in the <" + lf + "> component." : "An error occurred in one of your React components.";
        var l = ue.getCurrentStack, s = t.componentStack != null ? t.componentStack : "";
        ue.getCurrentStack = function() {
          return s;
        };
        try {
          console.warn(
            `%s

%s
`,
            e,
            `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
          );
        } finally {
          ue.getCurrentStack = l;
        }
      }, pt.deferredUpdates = function(e) {
        var t = ue.T, l = Iu();
        try {
          return ka(32), ue.T = null, e();
        } finally {
          ka(l), ue.T = t;
        }
      }, pt.discreteUpdates = function(e, t, l, s, o) {
        var m = ue.T, g = Iu();
        try {
          return ka(2), ue.T = null, e(t, l, s, o);
        } finally {
          ka(g), ue.T = m, Vt === ll && (gm = y() + Nv);
        }
      }, pt.findAllNodes = Cr, pt.findBoundingRects = function(e, t) {
        if (!gl)
          throw Error("Test selector API is not supported by this renderer.");
        t = Cr(e, t), e = [];
        for (var l = 0; l < t.length; l++)
          e.push(ks(t[l]));
        for (t = e.length - 1; 0 < t; t--) {
          l = e[t];
          for (var s = l.x, o = s + l.width, m = l.y, g = m + l.height, _ = t - 1; 0 <= _; _--)
            if (t !== _) {
              var Q = e[_], le = Q.x, Me = le + Q.width, Ue = Q.y, Ke = Ue + Q.height;
              if (s >= le && m >= Ue && o <= Me && g <= Ke) {
                e.splice(t, 1);
                break;
              } else if (s !== le || l.width !== Q.width || Ke < m || Ue > g) {
                if (!(m !== Ue || l.height !== Q.height || Me < s || le > o)) {
                  le > s && (Q.width += le - s, Q.x = s), Me < o && (Q.width = o - le), e.splice(t, 1);
                  break;
                }
              } else {
                Ue > m && (Q.height += Ue - m, Q.y = m), Ke < g && (Q.height = g - Ue), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, pt.findHostInstance = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + e
          ));
        return e = Y(t), e === null ? null : El(e.stateNode);
      }, pt.findHostInstanceWithNoPortals = function(e) {
        return e = D(e), e = e !== null ? fe(e) : null, e === null ? null : El(e.stateNode);
      }, pt.findHostInstanceWithWarning = function(e, t) {
        var l = e._reactInternals;
        if (l === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
            "Argument appears to not be a ReactComponent. Keys: " + e
          ));
        if (e = Y(l), e === null) return null;
        if (e.mode & 8) {
          var s = F(l) || "Component";
          VA[s] || (VA[s] = !0, te(e, function() {
            l.mode & 8 ? console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              t,
              t,
              s
            ) : console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              t,
              t,
              s
            );
          }));
        }
        return El(e.stateNode);
      }, pt.flushPassiveEffects = Si, pt.flushSyncFromReconciler = function(e) {
        var t = Vt;
        Vt |= 1;
        var l = ue.T, s = Iu();
        try {
          if (ka(2), ue.T = null, e)
            return e();
        } finally {
          ka(s), ue.T = l, Vt = t, (Vt & (Kn | xi)) === ll && Ct(0);
        }
      }, pt.flushSyncWork = gi, pt.focusWithin = function(e, t) {
        if (!gl)
          throw Error("Test selector API is not supported by this renderer.");
        for (e = cn(e), t = ap(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var l = t[e++], s = l.tag;
          if (!fn(l)) {
            if ((s === 5 || s === 26 || s === 27) && Ha(l.stateNode))
              return !0;
            for (l = l.child; l !== null; )
              t.push(l), l = l.sibling;
          }
        }
        return !1;
      }, pt.getFindAllNodesFailureDescription = function(e, t) {
        if (!gl)
          throw Error("Test selector API is not supported by this renderer.");
        var l = 0, s = [];
        e = [cn(e), 0];
        for (var o = 0; o < e.length; ) {
          var m = e[o++], g = m.tag, _ = e[o++], Q = t[_];
          if ((g !== 5 && g !== 26 && g !== 27 || !fn(m)) && (Xu(m, Q) && (s.push(Cd(Q)), _++, _ > l && (l = _)), _ < t.length))
            for (m = m.child; m !== null; )
              e.push(m, _), m = m.sibling;
        }
        if (l < t.length) {
          for (e = []; l < t.length; l++)
            e.push(Cd(t[l]));
          return `findAllNodes was able to match part of the selector:
  ` + (s.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, pt.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return El(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, pt.injectIntoDevTools = function() {
        var e = {
          bundleType: 1,
          version: jr,
          rendererPackageName: Al,
          currentDispatcherRef: ue,
          findFiberByHostInstance: as,
          reconcilerVersion: "19.0.0"
        };
        return kn !== null && (e.rendererConfig = kn), e.overrideHookState = FA, e.overrideHookStateDeletePath = ZA, e.overrideHookStateRenamePath = qA, e.overrideProps = IA, e.overridePropsDeletePath = wA, e.overridePropsRenamePath = PA, e.scheduleUpdate = WA, e.setErrorHandler = kA, e.setSuspenseHandler = $A, e.scheduleRefresh = T, e.scheduleRoot = b, e.setRefreshHandler = M, e.getCurrentFiber = Ph, e.getLaneLabelMap = Bp, e.injectProfilingHooks = Ts, Mu(e);
      }, pt.isAlreadyRendering = function() {
        return (Vt & (Kn | xi)) !== ll;
      }, pt.observeVisibleRects = function(e, t, l, s) {
        function o() {
          var le = Cr(e, t);
          m.forEach(function(Me) {
            0 > le.indexOf(Me) && Q(Me);
          }), le.forEach(function(Me) {
            0 > m.indexOf(Me) && _(Me);
          });
        }
        if (!gl)
          throw Error("Test selector API is not supported by this renderer.");
        var m = Cr(e, t);
        l = Ri(m, l, s);
        var g = l.disconnect, _ = l.observe, Q = l.unobserve;
        return th.push(o), {
          disconnect: function() {
            var le = th.indexOf(o);
            0 <= le && th.splice(le, 1), g();
          }
        };
      }, pt.shouldError = function(e) {
        return E(e);
      }, pt.shouldSuspend = function(e) {
        return S(e);
      }, pt.startHostTransition = function(e, t, l, s) {
        if (e.tag !== 5)
          throw Error(
            "Expected the form instance to be a HostComponent. This is a bug in React."
          );
        var o = Ff(e).queue;
        Vf(
          e,
          o,
          t,
          ou,
          l === null ? J : function() {
            ue.T === null && console.error(
              "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
            );
            var m = Ff(e).next.queue;
            return Zi(
              e,
              m,
              {},
              wn(e)
            ), l(s);
          }
        );
      }, pt.updateContainer = function(e, t, l, s) {
        var o = t.current, m = wn(o);
        return Ld(
          o,
          m,
          e,
          t,
          l,
          s
        ), m;
      }, pt.updateContainerSync = _r, pt;
    }, d.exports.default = d.exports, Object.defineProperty(d.exports, "__esModule", { value: !0 }));
  }(Zv)), Zv.exports;
}
var T0;
function Hg() {
  return T0 || (T0 = 1, process.env.NODE_ENV === "production" ? fh.exports = Dg() : fh.exports = _g()), fh.exports;
}
var Og = Hg();
const Ng = /* @__PURE__ */ lE(Og);
var mh = { exports: {} }, qv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0;
function Ug() {
  return b0 || (b0 = 1, function(d) {
    function u(D, Y) {
      var X = D.length;
      D.push(Y);
      e: for (; 0 < X; ) {
        var fe = X - 1 >>> 1, x = D[fe];
        if (0 < p(x, Y))
          D[fe] = Y, D[X] = x, X = fe;
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function f(D) {
      if (D.length === 0) return null;
      var Y = D[0], X = D.pop();
      if (X !== Y) {
        D[0] = X;
        e: for (var fe = 0, x = D.length, de = x >>> 1; fe < de; ) {
          var pe = 2 * (fe + 1) - 1, Qe = D[pe], Ge = pe + 1, we = D[Ge];
          if (0 > p(Qe, X))
            Ge < x && 0 > p(we, Qe) ? (D[fe] = we, D[Ge] = X, fe = Ge) : (D[fe] = Qe, D[pe] = X, fe = pe);
          else if (Ge < x && 0 > p(we, X))
            D[fe] = we, D[Ge] = X, fe = Ge;
          else break e;
        }
      }
      return Y;
    }
    function p(D, Y) {
      var X = D.sortIndex - Y.sortIndex;
      return X !== 0 ? X : D.id - Y.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      d.unstable_now = function() {
        return v.now();
      };
    } else {
      var A = Date, S = A.now();
      d.unstable_now = function() {
        return A.now() - S;
      };
    }
    var E = [], C = [], b = 1, T = null, M = 3, O = !1, N = !1, J = !1, Z = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function $(D) {
      for (var Y = r(C); Y !== null; ) {
        if (Y.callback === null) f(C);
        else if (Y.startTime <= D)
          f(C), Y.sortIndex = Y.expirationTime, u(E, Y);
        else break;
        Y = r(C);
      }
    }
    function F(D) {
      if (J = !1, $(D), !N)
        if (r(E) !== null)
          N = !0, Ae();
        else {
          var Y = r(C);
          Y !== null && Ve(F, Y.startTime - D);
        }
    }
    var oe = !1, W = -1, Te = 5, ne = -1;
    function ie() {
      return !(d.unstable_now() - ne < Te);
    }
    function me() {
      if (oe) {
        var D = d.unstable_now();
        ne = D;
        var Y = !0;
        try {
          e: {
            N = !1, J && (J = !1, G(W), W = -1), O = !0;
            var X = M;
            try {
              t: {
                for ($(D), T = r(E); T !== null && !(T.expirationTime > D && ie()); ) {
                  var fe = T.callback;
                  if (typeof fe == "function") {
                    T.callback = null, M = T.priorityLevel;
                    var x = fe(
                      T.expirationTime <= D
                    );
                    if (D = d.unstable_now(), typeof x == "function") {
                      T.callback = x, $(D), Y = !0;
                      break t;
                    }
                    T === r(E) && f(E), $(D);
                  } else f(E);
                  T = r(E);
                }
                if (T !== null) Y = !0;
                else {
                  var de = r(C);
                  de !== null && Ve(
                    F,
                    de.startTime - D
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              T = null, M = X, O = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? De() : oe = !1;
        }
      }
    }
    var De;
    if (typeof U == "function")
      De = function() {
        U(me);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), te = Xe.port2;
      Xe.port1.onmessage = me, De = function() {
        te.postMessage(null);
      };
    } else
      De = function() {
        Z(me, 0);
      };
    function Ae() {
      oe || (oe = !0, De());
    }
    function Ve(D, Y) {
      W = Z(function() {
        D(d.unstable_now());
      }, Y);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, d.unstable_continueExecution = function() {
      N || O || (N = !0, Ae());
    }, d.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Te = 0 < D ? Math.floor(1e3 / D) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, d.unstable_getFirstCallbackNode = function() {
      return r(E);
    }, d.unstable_next = function(D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = M;
      }
      var X = M;
      M = Y;
      try {
        return D();
      } finally {
        M = X;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(D, Y) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var X = M;
      M = D;
      try {
        return Y();
      } finally {
        M = X;
      }
    }, d.unstable_scheduleCallback = function(D, Y, X) {
      var fe = d.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? fe + X : fe) : X = fe, D) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = X + x, D = {
        id: b++,
        callback: Y,
        priorityLevel: D,
        startTime: X,
        expirationTime: x,
        sortIndex: -1
      }, X > fe ? (D.sortIndex = X, u(C, D), r(E) === null && D === r(C) && (J ? (G(W), W = -1) : J = !0, Ve(F, X - fe))) : (D.sortIndex = x, u(E, D), N || O || (N = !0, Ae())), D;
    }, d.unstable_shouldYield = ie, d.unstable_wrapCallback = function(D) {
      var Y = M;
      return function() {
        var X = M;
        M = Y;
        try {
          return D.apply(this, arguments);
        } finally {
          M = X;
        }
      };
    };
  }(qv)), qv;
}
var Iv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0;
function Gg() {
  return M0 || (M0 = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      function u() {
        if (ie) {
          var D = d.unstable_now();
          Xe = D;
          var Y = !0;
          try {
            e: {
              F = !1, oe && (oe = !1, Te(me), me = -1), $ = !0;
              var X = U;
              try {
                t: {
                  for (A(D), G = f(N); G !== null && !(G.expirationTime > D && E()); ) {
                    var fe = G.callback;
                    if (typeof fe == "function") {
                      G.callback = null, U = G.priorityLevel;
                      var x = fe(
                        G.expirationTime <= D
                      );
                      if (D = d.unstable_now(), typeof x == "function") {
                        G.callback = x, A(D), Y = !0;
                        break t;
                      }
                      G === f(N) && p(N), A(D);
                    } else p(N);
                    G = f(N);
                  }
                  if (G !== null) Y = !0;
                  else {
                    var de = f(J);
                    de !== null && b(
                      S,
                      de.startTime - D
                    ), Y = !1;
                  }
                }
                break e;
              } finally {
                G = null, U = X, $ = !1;
              }
              Y = void 0;
            }
          } finally {
            Y ? te() : ie = !1;
          }
        }
      }
      function r(D, Y) {
        var X = D.length;
        D.push(Y);
        e: for (; 0 < X; ) {
          var fe = X - 1 >>> 1, x = D[fe];
          if (0 < v(x, Y))
            D[fe] = Y, D[X] = x, X = fe;
          else break e;
        }
      }
      function f(D) {
        return D.length === 0 ? null : D[0];
      }
      function p(D) {
        if (D.length === 0) return null;
        var Y = D[0], X = D.pop();
        if (X !== Y) {
          D[0] = X;
          e: for (var fe = 0, x = D.length, de = x >>> 1; fe < de; ) {
            var pe = 2 * (fe + 1) - 1, Qe = D[pe], Ge = pe + 1, we = D[Ge];
            if (0 > v(Qe, X))
              Ge < x && 0 > v(we, Qe) ? (D[fe] = we, D[Ge] = X, fe = Ge) : (D[fe] = Qe, D[pe] = X, fe = pe);
            else if (Ge < x && 0 > v(we, X))
              D[fe] = we, D[Ge] = X, fe = Ge;
            else break e;
          }
        }
        return Y;
      }
      function v(D, Y) {
        var X = D.sortIndex - Y.sortIndex;
        return X !== 0 ? X : D.id - Y.id;
      }
      function A(D) {
        for (var Y = f(J); Y !== null; ) {
          if (Y.callback === null) p(J);
          else if (Y.startTime <= D)
            p(J), Y.sortIndex = Y.expirationTime, r(N, Y);
          else break;
          Y = f(J);
        }
      }
      function S(D) {
        if (oe = !1, A(D), !F)
          if (f(N) !== null)
            F = !0, C();
          else {
            var Y = f(J);
            Y !== null && b(
              S,
              Y.startTime - D
            );
          }
      }
      function E() {
        return !(d.unstable_now() - Xe < De);
      }
      function C() {
        ie || (ie = !0, te());
      }
      function b(D, Y) {
        me = W(function() {
          D(d.unstable_now());
        }, Y);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var T = performance;
        d.unstable_now = function() {
          return T.now();
        };
      } else {
        var M = Date, O = M.now();
        d.unstable_now = function() {
          return M.now() - O;
        };
      }
      var N = [], J = [], Z = 1, G = null, U = 3, $ = !1, F = !1, oe = !1, W = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, ie = !1, me = -1, De = 5, Xe = -1;
      if (typeof ne == "function")
        var te = function() {
          ne(u);
        };
      else if (typeof MessageChannel < "u") {
        var Ae = new MessageChannel(), Ve = Ae.port2;
        Ae.port1.onmessage = u, te = function() {
          Ve.postMessage(null);
        };
      } else
        te = function() {
          W(u, 0);
        };
      d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, d.unstable_continueExecution = function() {
        F || $ || (F = !0, C());
      }, d.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : De = 0 < D ? Math.floor(1e3 / D) : 5;
      }, d.unstable_getCurrentPriorityLevel = function() {
        return U;
      }, d.unstable_getFirstCallbackNode = function() {
        return f(N);
      }, d.unstable_next = function(D) {
        switch (U) {
          case 1:
          case 2:
          case 3:
            var Y = 3;
            break;
          default:
            Y = U;
        }
        var X = U;
        U = Y;
        try {
          return D();
        } finally {
          U = X;
        }
      }, d.unstable_pauseExecution = function() {
      }, d.unstable_requestPaint = function() {
      }, d.unstable_runWithPriority = function(D, Y) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var X = U;
        U = D;
        try {
          return Y();
        } finally {
          U = X;
        }
      }, d.unstable_scheduleCallback = function(D, Y, X) {
        var fe = d.unstable_now();
        switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? fe + X : fe) : X = fe, D) {
          case 1:
            var x = -1;
            break;
          case 2:
            x = 250;
            break;
          case 5:
            x = 1073741823;
            break;
          case 4:
            x = 1e4;
            break;
          default:
            x = 5e3;
        }
        return x = X + x, D = {
          id: Z++,
          callback: Y,
          priorityLevel: D,
          startTime: X,
          expirationTime: x,
          sortIndex: -1
        }, X > fe ? (D.sortIndex = X, r(J, D), f(N) === null && D === f(J) && (oe ? (Te(me), me = -1) : oe = !0, b(S, X - fe))) : (D.sortIndex = x, r(N, D), F || $ || (F = !0, C())), D;
      }, d.unstable_shouldYield = E, d.unstable_wrapCallback = function(D) {
        var Y = U;
        return function() {
          var X = U;
          U = Y;
          try {
            return D.apply(this, arguments);
          } finally {
            U = X;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Iv)), Iv;
}
var R0;
function xg() {
  return R0 || (R0 = 1, process.env.NODE_ENV === "production" ? mh.exports = Ug() : mh.exports = Gg()), mh.exports;
}
var D0 = xg();
function by(d, u, r) {
  if (!d) return;
  if (r(d) === !0) return d;
  let f = u ? d.return : d.child;
  for (; f; ) {
    const p = by(f, u, r);
    if (p) return p;
    f = u ? null : f.sibling;
  }
}
function rE(d) {
  try {
    return Object.defineProperties(d, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return d;
  }
}
const My = /* @__PURE__ */ rE(/* @__PURE__ */ xe.createContext(null));
class fE extends xe.Component {
  render() {
    return /* @__PURE__ */ xe.createElement(My.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function dE() {
  const d = xe.useContext(My);
  if (d === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const u = xe.useId();
  return xe.useMemo(() => {
    for (const r of [d, d?.alternate]) {
      if (!r) continue;
      const f = by(r, !1, (p) => {
        let v = p.memoizedState;
        for (; v; ) {
          if (v.memoizedState === u) return !0;
          v = v.next;
        }
      });
      if (f) return f;
    }
  }, [d, u]);
}
const zg = Symbol.for("react.context"), jg = (d) => d !== null && typeof d == "object" && "$$typeof" in d && d.$$typeof === zg;
function Lg() {
  const d = dE(), [u] = xe.useState(() => /* @__PURE__ */ new Map());
  u.clear();
  let r = d;
  for (; r; ) {
    const f = r.type;
    jg(f) && f !== My && !u.has(f) && u.set(f, xe.use(rE(f))), r = r.return;
  }
  return u;
}
function Jg() {
  const d = Lg();
  return xe.useMemo(
    () => Array.from(d.keys()).reduce(
      (u, r) => (f) => /* @__PURE__ */ xe.createElement(u, null, /* @__PURE__ */ xe.createElement(r.Provider, { ...f, value: d.get(r) })),
      (u) => /* @__PURE__ */ xe.createElement(fE, { ...u })
    ),
    [d]
  );
}
function mE(d) {
  let u = d.root;
  for (; u.getState().previousRoot; ) u = u.getState().previousRoot;
  return u;
}
const pE = (d) => d && d.isOrthographicCamera, Kg = (d) => d && d.hasOwnProperty("current"), Qg = (d) => d != null && (typeof d == "string" || typeof d == "number" || d.isColor), Km = /* @__PURE__ */ ((d, u) => typeof window < "u" && (((d = window.document) == null ? void 0 : d.createElement) || ((u = window.navigator) == null ? void 0 : u.product) === "ReactNative"))() ? xe.useLayoutEffect : xe.useEffect;
function Ry(d) {
  const u = xe.useRef(d);
  return Km(() => void (u.current = d), [d]), u;
}
function Yg() {
  const d = dE(), u = Jg();
  return xe.useMemo(() => ({
    children: r
  }) => {
    const p = !!by(d, !0, (v) => v.type === xe.StrictMode) ? xe.StrictMode : xe.Fragment;
    return /* @__PURE__ */ k.jsx(p, {
      children: /* @__PURE__ */ k.jsx(u, {
        children: r
      })
    });
  }, [d, u]);
}
function Xg({
  set: d
}) {
  return Km(() => (d(new Promise(() => null)), () => d(!1)), [d]), null;
}
const Vg = /* @__PURE__ */ ((d) => (d = class extends xe.Component {
  constructor(...r) {
    super(...r), this.state = {
      error: !1
    };
  }
  componentDidCatch(r) {
    this.props.set(r);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, d.getDerivedStateFromError = () => ({
  error: !0
}), d))();
function hE(d) {
  var u;
  const r = typeof window < "u" ? (u = window.devicePixelRatio) != null ? u : 2 : 1;
  return Array.isArray(d) ? Math.min(Math.max(d[0], r), d[1]) : d;
}
function Sf(d) {
  var u;
  return (u = d.__r3f) == null ? void 0 : u.root.getState();
}
const pa = {
  obj: (d) => d === Object(d) && !pa.arr(d) && typeof d != "function",
  fun: (d) => typeof d == "function",
  str: (d) => typeof d == "string",
  num: (d) => typeof d == "number",
  boo: (d) => typeof d == "boolean",
  und: (d) => d === void 0,
  nul: (d) => d === null,
  arr: (d) => Array.isArray(d),
  equ(d, u, {
    arrays: r = "shallow",
    objects: f = "reference",
    strict: p = !0
  } = {}) {
    if (typeof d != typeof u || !!d != !!u) return !1;
    if (pa.str(d) || pa.num(d) || pa.boo(d)) return d === u;
    const v = pa.obj(d);
    if (v && f === "reference") return d === u;
    const A = pa.arr(d);
    if (A && r === "reference") return d === u;
    if ((A || v) && d === u) return !0;
    let S;
    for (S in d) if (!(S in u)) return !1;
    if (v && r === "shallow" && f === "shallow") {
      for (S in p ? u : d) if (!pa.equ(d[S], u[S], {
        strict: p,
        objects: "reference"
      })) return !1;
    } else
      for (S in p ? u : d) if (d[S] !== u[S]) return !1;
    if (pa.und(S)) {
      if (A && d.length === 0 && u.length === 0 || v && Object.keys(d).length === 0 && Object.keys(u).length === 0) return !0;
      if (d !== u) return !1;
    }
    return !0;
  }
};
function Fg(d) {
  const u = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return d && d.traverse((r) => {
    r.name && (u.nodes[r.name] = r), r.material && !u.materials[r.material.name] && (u.materials[r.material.name] = r.material), r.isMesh && !u.meshes[r.name] && (u.meshes[r.name] = r);
  }), u;
}
function Zg(d) {
  d.type !== "Scene" && (d.dispose == null || d.dispose());
  for (const u in d) {
    const r = d[u];
    r?.type !== "Scene" && (r == null || r.dispose == null || r.dispose());
  }
}
const vE = ["children", "key", "ref"];
function qg(d) {
  const u = {};
  for (const r in d)
    vE.includes(r) || (u[r] = d[r]);
  return u;
}
function Rh(d, u, r, f) {
  const p = d;
  let v = p?.__r3f;
  return v || (v = {
    root: u,
    type: r,
    parent: null,
    children: [],
    props: qg(f),
    object: p,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, p && (p.__r3f = v)), v;
}
function zm(d, u) {
  let r = d[u];
  if (!u.includes("-")) return {
    root: d,
    key: u,
    target: r
  };
  r = d;
  for (const p of u.split("-")) {
    var f;
    u = p, d = r, r = (f = r) == null ? void 0 : f[u];
  }
  return {
    root: d,
    key: u,
    target: r
  };
}
const _0 = /-\d+$/;
function Dh(d, u) {
  if (pa.str(u.props.attach)) {
    if (_0.test(u.props.attach)) {
      const p = u.props.attach.replace(_0, ""), {
        root: v,
        key: A
      } = zm(d.object, p);
      Array.isArray(v[A]) || (v[A] = []);
    }
    const {
      root: r,
      key: f
    } = zm(d.object, u.props.attach);
    u.previousAttach = r[f], r[f] = u.object;
  } else pa.fun(u.props.attach) && (u.previousAttach = u.props.attach(d.object, u.object));
}
function _h(d, u) {
  if (pa.str(u.props.attach)) {
    const {
      root: r,
      key: f
    } = zm(d.object, u.props.attach), p = u.previousAttach;
    p === void 0 ? delete r[f] : r[f] = p;
  } else
    u.previousAttach == null || u.previousAttach(d.object, u.object);
  delete u.previousAttach;
}
const py = [
  ...vE,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], H0 = /* @__PURE__ */ new Map();
function Ig(d) {
  let u = H0.get(d.constructor);
  try {
    u || (u = new d.constructor(), H0.set(d.constructor, u));
  } catch {
  }
  return u;
}
function wg(d, u) {
  const r = {};
  for (const f in u)
    if (!py.includes(f) && !pa.equ(u[f], d.props[f])) {
      r[f] = u[f];
      for (const p in u)
        p.startsWith(`${f}-`) && (r[p] = u[p]);
    }
  for (const f in d.props) {
    if (py.includes(f) || u.hasOwnProperty(f)) continue;
    const {
      root: p,
      key: v
    } = zm(d.object, f);
    if (p.constructor && p.constructor.length === 0) {
      const A = Ig(p);
      pa.und(A) || (r[v] = A[v]);
    } else
      r[v] = 0;
  }
  return r;
}
const Pg = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], Wg = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ji(d, u) {
  var r;
  const f = d.__r3f, p = f && mE(f).getState(), v = f?.eventCount;
  for (const S in u) {
    let E = u[S];
    if (py.includes(S)) continue;
    if (f && Wg.test(S)) {
      typeof E == "function" ? f.handlers[S] = E : delete f.handlers[S], f.eventCount = Object.keys(f.handlers).length;
      continue;
    }
    if (E === void 0) continue;
    let {
      root: C,
      key: b,
      target: T
    } = zm(d, S);
    if (T instanceof ht.Layers && E instanceof ht.Layers)
      T.mask = E.mask;
    else if (T instanceof ht.Color && Qg(E))
      T.set(E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof T.copy == "function" && E != null && E.constructor && T.constructor === E.constructor)
      T.copy(E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && Array.isArray(E))
      typeof T.fromArray == "function" ? T.fromArray(E) : T.set(...E);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof E == "number")
      typeof T.setScalar == "function" ? T.setScalar(E) : T.set(E);
    else {
      var A;
      C[b] = E, p && !p.linear && Pg.includes(b) && (A = C[b]) != null && A.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      C[b].format === ht.RGBAFormat && C[b].type === ht.UnsignedByteType && (C[b].colorSpace = ht.SRGBColorSpace);
    }
  }
  if (f != null && f.parent && p != null && p.internal && (r = f.object) != null && r.isObject3D && v !== f.eventCount) {
    const S = f.object, E = p.internal.interaction.indexOf(S);
    E > -1 && p.internal.interaction.splice(E, 1), f.eventCount && S.raycast !== null && p.internal.interaction.push(S);
  }
  return f && f.props.attach === void 0 && (f.object.isBufferGeometry ? f.props.attach = "geometry" : f.object.isMaterial && (f.props.attach = "material")), f && Of(f), d;
}
function Of(d) {
  var u;
  if (!d.parent) return;
  d.props.onUpdate == null || d.props.onUpdate(d.object);
  const r = (u = d.root) == null || u.getState == null ? void 0 : u.getState();
  r && r.internal.frames === 0 && r.invalidate();
}
function yE(d, u) {
  d.manual || (pE(d) ? (d.left = u.width / -2, d.right = u.width / 2, d.top = u.height / 2, d.bottom = u.height / -2) : d.aspect = u.width / u.height, d.updateProjectionMatrix());
}
const ul = (d) => d?.isObject3D;
function ph(d) {
  return (d.eventObject || d.object).uuid + "/" + d.index + d.instanceId;
}
function AE(d, u, r, f) {
  const p = r.get(u);
  p && (r.delete(u), r.size === 0 && (d.delete(f), p.target.releasePointerCapture(f)));
}
function kg(d, u) {
  const {
    internal: r
  } = d.getState();
  r.interaction = r.interaction.filter((f) => f !== u), r.initialHits = r.initialHits.filter((f) => f !== u), r.hovered.forEach((f, p) => {
    (f.eventObject === u || f.object === u) && r.hovered.delete(p);
  }), r.capturedMap.forEach((f, p) => {
    AE(r.capturedMap, u, f, p);
  });
}
function $g(d) {
  function u(E) {
    const {
      internal: C
    } = d.getState(), b = E.offsetX - C.initialClick[0], T = E.offsetY - C.initialClick[1];
    return Math.round(Math.sqrt(b * b + T * T));
  }
  function r(E) {
    return E.filter((C) => ["Move", "Over", "Enter", "Out", "Leave"].some((b) => {
      var T;
      return (T = C.__r3f) == null ? void 0 : T.handlers["onPointer" + b];
    }));
  }
  function f(E, C) {
    const b = d.getState(), T = /* @__PURE__ */ new Set(), M = [], O = C ? C(b.internal.interaction) : b.internal.interaction;
    for (let G = 0; G < O.length; G++) {
      const U = Sf(O[G]);
      U && (U.raycaster.camera = void 0);
    }
    b.previousRoot || b.events.compute == null || b.events.compute(E, b);
    function N(G) {
      const U = Sf(G);
      if (!U || !U.events.enabled || U.raycaster.camera === null) return [];
      if (U.raycaster.camera === void 0) {
        var $;
        U.events.compute == null || U.events.compute(E, U, ($ = U.previousRoot) == null ? void 0 : $.getState()), U.raycaster.camera === void 0 && (U.raycaster.camera = null);
      }
      return U.raycaster.camera ? U.raycaster.intersectObject(G, !0) : [];
    }
    let J = O.flatMap(N).sort((G, U) => {
      const $ = Sf(G.object), F = Sf(U.object);
      return !$ || !F ? G.distance - U.distance : F.events.priority - $.events.priority || G.distance - U.distance;
    }).filter((G) => {
      const U = ph(G);
      return T.has(U) ? !1 : (T.add(U), !0);
    });
    b.events.filter && (J = b.events.filter(J, b));
    for (const G of J) {
      let U = G.object;
      for (; U; ) {
        var Z;
        (Z = U.__r3f) != null && Z.eventCount && M.push({
          ...G,
          eventObject: U
        }), U = U.parent;
      }
    }
    if ("pointerId" in E && b.internal.capturedMap.has(E.pointerId))
      for (let G of b.internal.capturedMap.get(E.pointerId).values())
        T.has(ph(G.intersection)) || M.push(G.intersection);
    return M;
  }
  function p(E, C, b, T) {
    if (E.length) {
      const M = {
        stopped: !1
      };
      for (const O of E) {
        let N = Sf(O.object);
        if (N || O.object.traverseAncestors((J) => {
          const Z = Sf(J);
          if (Z)
            return N = Z, !1;
        }), N) {
          const {
            raycaster: J,
            pointer: Z,
            camera: G,
            internal: U
          } = N, $ = new ht.Vector3(Z.x, Z.y, 0).unproject(G), F = (ie) => {
            var me, De;
            return (me = (De = U.capturedMap.get(ie)) == null ? void 0 : De.has(O.eventObject)) != null ? me : !1;
          }, oe = (ie) => {
            const me = {
              intersection: O,
              target: C.target
            };
            U.capturedMap.has(ie) ? U.capturedMap.get(ie).set(O.eventObject, me) : U.capturedMap.set(ie, /* @__PURE__ */ new Map([[O.eventObject, me]])), C.target.setPointerCapture(ie);
          }, W = (ie) => {
            const me = U.capturedMap.get(ie);
            me && AE(U.capturedMap, O.eventObject, me, ie);
          };
          let Te = {};
          for (let ie in C) {
            let me = C[ie];
            typeof me != "function" && (Te[ie] = me);
          }
          let ne = {
            ...O,
            ...Te,
            pointer: Z,
            intersections: E,
            stopped: M.stopped,
            delta: b,
            unprojectedPoint: $,
            ray: J.ray,
            camera: G,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const ie = "pointerId" in C && U.capturedMap.get(C.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!ie || // ... or if the hit object is capturing the pointer
                ie.has(O.eventObject)) && (ne.stopped = M.stopped = !0, U.hovered.size && Array.from(U.hovered.values()).find((me) => me.eventObject === O.eventObject))
              ) {
                const me = E.slice(0, E.indexOf(O));
                v([...me, O]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: F,
              setPointerCapture: oe,
              releasePointerCapture: W
            },
            currentTarget: {
              hasPointerCapture: F,
              setPointerCapture: oe,
              releasePointerCapture: W
            },
            nativeEvent: C
          };
          if (T(ne), M.stopped === !0) break;
        }
      }
    }
    return E;
  }
  function v(E) {
    const {
      internal: C
    } = d.getState();
    for (const b of C.hovered.values())
      if (!E.length || !E.find((T) => T.object === b.object && T.index === b.index && T.instanceId === b.instanceId)) {
        const M = b.eventObject.__r3f;
        if (C.hovered.delete(ph(b)), M != null && M.eventCount) {
          const O = M.handlers, N = {
            ...b,
            intersections: E
          };
          O.onPointerOut == null || O.onPointerOut(N), O.onPointerLeave == null || O.onPointerLeave(N);
        }
      }
  }
  function A(E, C) {
    for (let b = 0; b < C.length; b++) {
      const T = C[b].__r3f;
      T == null || T.handlers.onPointerMissed == null || T.handlers.onPointerMissed(E);
    }
  }
  function S(E) {
    switch (E) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => v([]);
      case "onLostPointerCapture":
        return (C) => {
          const {
            internal: b
          } = d.getState();
          "pointerId" in C && b.capturedMap.has(C.pointerId) && requestAnimationFrame(() => {
            b.capturedMap.has(C.pointerId) && (b.capturedMap.delete(C.pointerId), v([]));
          });
        };
    }
    return function(b) {
      const {
        onPointerMissed: T,
        internal: M
      } = d.getState();
      M.lastEvent.current = b;
      const O = E === "onPointerMove", N = E === "onClick" || E === "onContextMenu" || E === "onDoubleClick", Z = f(b, O ? r : void 0), G = N ? u(b) : 0;
      E === "onPointerDown" && (M.initialClick = [b.offsetX, b.offsetY], M.initialHits = Z.map(($) => $.eventObject)), N && !Z.length && G <= 2 && (A(b, M.interaction), T && T(b)), O && v(Z);
      function U($) {
        const F = $.eventObject, oe = F.__r3f;
        if (!(oe != null && oe.eventCount)) return;
        const W = oe.handlers;
        if (O) {
          if (W.onPointerOver || W.onPointerEnter || W.onPointerOut || W.onPointerLeave) {
            const Te = ph($), ne = M.hovered.get(Te);
            ne ? ne.stopped && $.stopPropagation() : (M.hovered.set(Te, $), W.onPointerOver == null || W.onPointerOver($), W.onPointerEnter == null || W.onPointerEnter($));
          }
          W.onPointerMove == null || W.onPointerMove($);
        } else {
          const Te = W[E];
          Te ? (!N || M.initialHits.includes(F)) && (A(b, M.interaction.filter((ne) => !M.initialHits.includes(ne))), Te($)) : N && M.initialHits.includes(F) && A(b, M.interaction.filter((ne) => !M.initialHits.includes(ne)));
        }
      }
      p(Z, b, G, U);
    };
  }
  return {
    handlePointer: S
  };
}
const O0 = (d) => !!(d != null && d.render), Dy = /* @__PURE__ */ xe.createContext(null), eS = (d, u) => {
  const r = iE((S, E) => {
    const C = new ht.Vector3(), b = new ht.Vector3(), T = new ht.Vector3();
    function M(G = E().camera, U = b, $ = E().size) {
      const {
        width: F,
        height: oe,
        top: W,
        left: Te
      } = $, ne = F / oe;
      U.isVector3 ? T.copy(U) : T.set(...U);
      const ie = G.getWorldPosition(C).distanceTo(T);
      if (pE(G))
        return {
          width: F / G.zoom,
          height: oe / G.zoom,
          top: W,
          left: Te,
          factor: 1,
          distance: ie,
          aspect: ne
        };
      {
        const me = G.fov * Math.PI / 180, De = 2 * Math.tan(me / 2) * ie, Xe = De * (F / oe);
        return {
          width: Xe,
          height: De,
          top: W,
          left: Te,
          factor: F / Xe,
          distance: ie,
          aspect: ne
        };
      }
    }
    let O;
    const N = (G) => S((U) => ({
      performance: {
        ...U.performance,
        current: G
      }
    })), J = new ht.Vector2();
    return {
      set: S,
      get: E,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: !0,
        connected: !1
      },
      scene: null,
      xr: null,
      invalidate: (G = 1) => d(E(), G),
      advance: (G, U) => u(G, U, E()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new ht.Clock(),
      pointer: J,
      mouse: J,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const G = E();
          O && clearTimeout(O), G.performance.current !== G.performance.min && N(G.performance.min), O = setTimeout(() => N(E().performance.max), G.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport: M
      },
      setEvents: (G) => S((U) => ({
        ...U,
        events: {
          ...U.events,
          ...G
        }
      })),
      setSize: (G, U, $ = 0, F = 0) => {
        const oe = E().camera, W = {
          width: G,
          height: U,
          top: $,
          left: F
        };
        S((Te) => ({
          size: W,
          viewport: {
            ...Te.viewport,
            ...M(oe, b, W)
          }
        }));
      },
      setDpr: (G) => S((U) => {
        const $ = hE(G);
        return {
          viewport: {
            ...U.viewport,
            dpr: $,
            initialDpr: U.viewport.initialDpr || $
          }
        };
      }),
      setFrameloop: (G = "always") => {
        const U = E().clock;
        U.stop(), U.elapsedTime = 0, G !== "never" && (U.start(), U.elapsedTime = 0), S(() => ({
          frameloop: G
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: /* @__PURE__ */ xe.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (G, U, $) => {
          const F = E().internal;
          return F.priority = F.priority + (U > 0 ? 1 : 0), F.subscribers.push({
            ref: G,
            priority: U,
            store: $
          }), F.subscribers = F.subscribers.sort((oe, W) => oe.priority - W.priority), () => {
            const oe = E().internal;
            oe != null && oe.subscribers && (oe.priority = oe.priority - (U > 0 ? 1 : 0), oe.subscribers = oe.subscribers.filter((W) => W.ref !== G));
          };
        }
      }
    };
  }), f = r.getState();
  let p = f.size, v = f.viewport.dpr, A = f.camera;
  return r.subscribe(() => {
    const {
      camera: S,
      size: E,
      viewport: C,
      gl: b,
      set: T
    } = r.getState();
    if (E.width !== p.width || E.height !== p.height || C.dpr !== v) {
      p = E, v = C.dpr, yE(S, E), C.dpr > 0 && b.setPixelRatio(C.dpr);
      const M = typeof HTMLCanvasElement < "u" && b.domElement instanceof HTMLCanvasElement;
      b.setSize(E.width, E.height, M);
    }
    S !== A && (A = S, T((M) => ({
      viewport: {
        ...M.viewport,
        ...M.viewport.getCurrentViewport(S)
      }
    })));
  }), r.subscribe((S) => d(S)), r;
};
function _y() {
  const d = xe.useContext(Dy);
  if (!d) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return d;
}
function il(d = (r) => r, u) {
  return _y()(d, u);
}
function Gh(d, u = 0) {
  const r = _y(), f = r.getState().internal.subscribe, p = Ry(d);
  return Km(() => f(p, u, r), [u, f, r]), null;
}
const N0 = /* @__PURE__ */ new WeakMap(), tS = (d) => {
  var u;
  return typeof d == "function" && (d == null || (u = d.prototype) == null ? void 0 : u.constructor) === d;
};
function EE(d, u) {
  return function(r, ...f) {
    let p;
    return tS(r) ? (p = N0.get(r), p || (p = new r(), N0.set(r, p))) : p = r, d && d(p), Promise.all(f.map((v) => new Promise((A, S) => p.load(v, (E) => {
      ul(E?.scene) && Object.assign(E, Fg(E.scene)), A(E);
    }, u, (E) => S(new Error(`Could not load ${v}: ${E?.message}`))))));
  };
}
function Cs(d, u, r, f) {
  const p = Array.isArray(u) ? u : [u], v = Cg(EE(r, f), [d, ...p], {
    equal: pa.equ
  });
  return Array.isArray(u) ? v : v[0];
}
Cs.preload = function(d, u, r) {
  const f = Array.isArray(u) ? u : [u];
  return Tg(EE(r), [d, ...f]);
};
Cs.clear = function(d, u) {
  const r = Array.isArray(u) ? u : [u];
  return bg([d, ...r]);
};
function aS(d) {
  const u = Ng(d);
  return u.injectIntoDevTools({
    bundleType: typeof process < "u" && process.env.NODE_ENV !== "production" ? 1 : 0,
    rendererPackageName: "@react-three/fiber",
    version: xe.version
  }), u;
}
const gE = 0, Hf = {}, nS = /^three(?=[A-Z])/, xh = (d) => `${d[0].toUpperCase()}${d.slice(1)}`;
let lS = 0;
const uS = (d) => typeof d == "function";
function SE(d) {
  if (uS(d)) {
    const u = `${lS++}`;
    return Hf[u] = d, u;
  } else
    Object.assign(Hf, d);
}
function BE(d, u) {
  const r = xh(d), f = Hf[r];
  if (d !== "primitive" && !f) throw new Error(`R3F: ${r} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (d === "primitive" && !u.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (u.args !== void 0 && !Array.isArray(u.args)) throw new Error("R3F: The args prop must be an array!");
}
function iS(d, u, r) {
  var f;
  return d = xh(d) in Hf ? d : d.replace(nS, ""), BE(d, u), d === "primitive" && (f = u.object) != null && f.__r3f && delete u.object.__r3f, Rh(u.object, r, d, u);
}
function sS(d) {
  if (!d.isHidden) {
    var u;
    d.props.attach && (u = d.parent) != null && u.object ? _h(d.parent, d) : ul(d.object) && (d.object.visible = !1), d.isHidden = !0, Of(d);
  }
}
function CE(d) {
  if (d.isHidden) {
    var u;
    d.props.attach && (u = d.parent) != null && u.object ? Dh(d.parent, d) : ul(d.object) && d.props.visible !== !1 && (d.object.visible = !0), d.isHidden = !1, Of(d);
  }
}
function Hy(d, u, r) {
  const f = u.root.getState();
  if (!(!d.parent && d.object !== f.scene)) {
    if (!u.object) {
      var p, v;
      const A = Hf[xh(u.type)];
      u.object = (p = u.props.object) != null ? p : new A(...(v = u.props.args) != null ? v : []), u.object.__r3f = u;
    }
    if (ji(u.object, u.props), u.props.attach)
      Dh(d, u);
    else if (ul(u.object) && ul(d.object)) {
      const A = d.object.children.indexOf(r?.object);
      if (r && A !== -1) {
        const S = d.object.children.indexOf(u.object);
        if (S !== -1) {
          d.object.children.splice(S, 1);
          const E = S < A ? A - 1 : A;
          d.object.children.splice(E, 0, u.object);
        } else
          u.object.parent = d.object, d.object.children.splice(A, 0, u.object), u.object.dispatchEvent({
            type: "added"
          }), d.object.dispatchEvent({
            type: "childadded",
            child: u.object
          });
      } else
        d.object.add(u.object);
    }
    for (const A of u.children) Hy(u, A);
    Of(u);
  }
}
function wv(d, u) {
  u && (u.parent = d, d.children.push(u), Hy(d, u));
}
function U0(d, u, r) {
  if (!u || !r) return;
  u.parent = d;
  const f = d.children.indexOf(r);
  f !== -1 ? d.children.splice(f, 0, u) : d.children.push(u), Hy(d, u, r);
}
function TE(d) {
  if (typeof d.dispose == "function") {
    const u = () => {
      try {
        d.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? u() : D0.unstable_scheduleCallback(D0.unstable_IdlePriority, u);
  }
}
function hy(d, u, r) {
  if (!u) return;
  u.parent = null;
  const f = d.children.indexOf(u);
  f !== -1 && d.children.splice(f, 1), u.props.attach ? _h(d, u) : ul(u.object) && ul(d.object) && (d.object.remove(u.object), kg(mE(u), u.object));
  const p = u.props.dispose !== null && r !== !1;
  for (let v = u.children.length - 1; v >= 0; v--) {
    const A = u.children[v];
    hy(u, A, p);
  }
  u.children.length = 0, delete u.object.__r3f, p && u.type !== "primitive" && u.object.type !== "Scene" && TE(u.object), r === void 0 && Of(u);
}
function oS(d, u) {
  for (const r of [d, d.alternate])
    if (r !== null)
      if (typeof r.ref == "function") {
        r.refCleanup == null || r.refCleanup();
        const f = r.ref(u);
        typeof f == "function" && (r.refCleanup = f);
      } else r.ref && (r.ref.current = u);
}
const Ch = [];
function cS() {
  for (const [r] of Ch) {
    const f = r.parent;
    if (f) {
      r.props.attach ? _h(f, r) : ul(r.object) && ul(f.object) && f.object.remove(r.object);
      for (const p of r.children)
        p.props.attach ? _h(r, p) : ul(p.object) && ul(r.object) && r.object.remove(p.object);
    }
    r.isHidden && CE(r), r.object.__r3f && delete r.object.__r3f, r.type !== "primitive" && TE(r.object);
  }
  for (const [r, f, p] of Ch) {
    r.props = f;
    const v = r.parent;
    if (v) {
      var d, u;
      const A = Hf[xh(r.type)];
      r.object = (d = r.props.object) != null ? d : new A(...(u = r.props.args) != null ? u : []), r.object.__r3f = r, oS(p, r.object), ji(r.object, r.props), r.props.attach ? Dh(v, r) : ul(r.object) && ul(v.object) && v.object.add(r.object);
      for (const S of r.children)
        S.props.attach ? Dh(r, S) : ul(S.object) && ul(r.object) && r.object.add(S.object);
      Of(r);
    }
  }
  Ch.length = 0;
}
const Pv = () => {
}, G0 = {};
let hh = gE;
const rS = 0, fS = 4, Hh = /* @__PURE__ */ aS({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: iS,
  removeChild: hy,
  appendChild: wv,
  appendInitialChild: wv,
  insertBefore: U0,
  appendChildToContainer(d, u) {
    const r = d.getState().scene.__r3f;
    !u || !r || wv(r, u);
  },
  removeChildFromContainer(d, u) {
    const r = d.getState().scene.__r3f;
    !u || !r || hy(r, u);
  },
  insertInContainerBefore(d, u, r) {
    const f = d.getState().scene.__r3f;
    !u || !r || !f || U0(f, u, r);
  },
  getRootHostContext: () => G0,
  getChildHostContext: () => G0,
  commitUpdate(d, u, r, f, p) {
    var v, A, S;
    BE(u, f);
    let E = !1;
    if ((d.type === "primitive" && r.object !== f.object || ((v = f.args) == null ? void 0 : v.length) !== ((A = r.args) == null ? void 0 : A.length) || (S = f.args) != null && S.some((b, T) => {
      var M;
      return b !== ((M = r.args) == null ? void 0 : M[T]);
    })) && (E = !0), E)
      Ch.push([d, {
        ...f
      }, p]);
    else {
      const b = wg(d, f);
      Object.keys(b).length && (Object.assign(d.props, b), ji(d.object, b));
    }
    (p.sibling === null || (p.flags & fS) === rS) && cS();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (d) => d?.object,
  prepareForCommit: () => null,
  preparePortalMount: (d) => Rh(d.getState().scene, d, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: sS,
  unhideInstance: CE,
  createTextInstance: Pv,
  hideTextInstance: Pv,
  unhideTextInstance: Pv,
  scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => !1,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => !1,
  preloadInstance: () => !0,
  // true indicates already loaded
  startSuspendingCommit() {
  },
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  // The reconciler types use the internal ReactContext with all the hidden properties
  // so we have to cast from the public React.Context type
  HostTransitionContext: /* @__PURE__ */ xe.createContext(null),
  setCurrentUpdatePriority(d) {
    hh = d;
  },
  getCurrentUpdatePriority() {
    return hh;
  },
  resolveUpdatePriority() {
    var d;
    if (hh !== gE) return hh;
    switch (typeof window < "u" && ((d = window.event) == null ? void 0 : d.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Bh.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Bh.ContinuousEventPriority;
      default:
        return Bh.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), Tc = /* @__PURE__ */ new Map(), Bf = {
  objects: "shallow",
  strict: !1
};
function dS(d, u) {
  if (!u && typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement && d.parentElement) {
    const {
      width: r,
      height: f,
      top: p,
      left: v
    } = d.parentElement.getBoundingClientRect();
    return {
      width: r,
      height: f,
      top: p,
      left: v
    };
  } else if (!u && typeof OffscreenCanvas < "u" && d instanceof OffscreenCanvas)
    return {
      width: d.width,
      height: d.height,
      top: 0,
      left: 0
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...u
  };
}
function mS(d) {
  const u = Tc.get(d), r = u?.fiber, f = u?.store;
  u && console.warn("R3F.createRoot should only be called once!");
  const p = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), v = f || eS(Ay, z0), A = r || Hh.createContainer(
    v,
    // container
    Bh.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    p,
    // onUncaughtError
    p,
    // onCaughtError
    p,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  u || Tc.set(d, {
    fiber: A,
    store: v
  });
  let S, E, C = !1, b = null;
  return {
    async configure(T = {}) {
      let M;
      b = new Promise((de) => M = de);
      let {
        gl: O,
        size: N,
        scene: J,
        events: Z,
        onCreated: G,
        shadows: U = !1,
        linear: $ = !1,
        flat: F = !1,
        legacy: oe = !1,
        orthographic: W = !1,
        frameloop: Te = "always",
        dpr: ne = [1, 2],
        performance: ie,
        raycaster: me,
        camera: De,
        onPointerMissed: Xe
      } = T, te = v.getState(), Ae = te.gl;
      if (!te.gl) {
        const de = {
          canvas: d,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, pe = typeof O == "function" ? await O(de) : O;
        O0(pe) ? Ae = pe : Ae = new ht.WebGLRenderer({
          ...de,
          ...O
        }), te.set({
          gl: Ae
        });
      }
      let Ve = te.raycaster;
      Ve || te.set({
        raycaster: Ve = new ht.Raycaster()
      });
      const {
        params: D,
        ...Y
      } = me || {};
      if (pa.equ(Y, Ve, Bf) || ji(Ve, {
        ...Y
      }), pa.equ(D, Ve.params, Bf) || ji(Ve, {
        params: {
          ...Ve.params,
          ...D
        }
      }), !te.camera || te.camera === E && !pa.equ(E, De, Bf)) {
        E = De;
        const de = De?.isCamera, pe = de ? De : W ? new ht.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new ht.PerspectiveCamera(75, 0, 0.1, 1e3);
        de || (pe.position.z = 5, De && (ji(pe, De), pe.manual || ("aspect" in De || "left" in De || "right" in De || "bottom" in De || "top" in De) && (pe.manual = !0, pe.updateProjectionMatrix())), !te.camera && !(De != null && De.rotation) && pe.lookAt(0, 0, 0)), te.set({
          camera: pe
        }), Ve.camera = pe;
      }
      if (!te.scene) {
        let de;
        J != null && J.isScene ? (de = J, Rh(de, v, "", {})) : (de = new ht.Scene(), Rh(de, v, "", {}), J && ji(de, J)), te.set({
          scene: de
        });
      }
      Z && !te.events.handlers && te.set({
        events: Z(v)
      });
      const X = dS(d, N);
      if (pa.equ(X, te.size, Bf) || te.setSize(X.width, X.height, X.top, X.left), ne && te.viewport.dpr !== hE(ne) && te.setDpr(ne), te.frameloop !== Te && te.setFrameloop(Te), te.onPointerMissed || te.set({
        onPointerMissed: Xe
      }), ie && !pa.equ(ie, te.performance, Bf) && te.set((de) => ({
        performance: {
          ...de.performance,
          ...ie
        }
      })), !te.xr) {
        var fe;
        const de = (Ge, we) => {
          const at = v.getState();
          at.frameloop !== "never" && z0(Ge, !0, at, we);
        }, pe = () => {
          const Ge = v.getState();
          Ge.gl.xr.enabled = Ge.gl.xr.isPresenting, Ge.gl.xr.setAnimationLoop(Ge.gl.xr.isPresenting ? de : null), Ge.gl.xr.isPresenting || Ay(Ge);
        }, Qe = {
          connect() {
            const Ge = v.getState().gl;
            Ge.xr.addEventListener("sessionstart", pe), Ge.xr.addEventListener("sessionend", pe);
          },
          disconnect() {
            const Ge = v.getState().gl;
            Ge.xr.removeEventListener("sessionstart", pe), Ge.xr.removeEventListener("sessionend", pe);
          }
        };
        typeof ((fe = Ae.xr) == null ? void 0 : fe.addEventListener) == "function" && Qe.connect(), te.set({
          xr: Qe
        });
      }
      if (Ae.shadowMap) {
        const de = Ae.shadowMap.enabled, pe = Ae.shadowMap.type;
        if (Ae.shadowMap.enabled = !!U, pa.boo(U))
          Ae.shadowMap.type = ht.PCFSoftShadowMap;
        else if (pa.str(U)) {
          var x;
          const Qe = {
            basic: ht.BasicShadowMap,
            percentage: ht.PCFShadowMap,
            soft: ht.PCFSoftShadowMap,
            variance: ht.VSMShadowMap
          };
          Ae.shadowMap.type = (x = Qe[U]) != null ? x : ht.PCFSoftShadowMap;
        } else pa.obj(U) && Object.assign(Ae.shadowMap, U);
        (de !== Ae.shadowMap.enabled || pe !== Ae.shadowMap.type) && (Ae.shadowMap.needsUpdate = !0);
      }
      return ht.ColorManagement.enabled = !oe, C || (Ae.outputColorSpace = $ ? ht.LinearSRGBColorSpace : ht.SRGBColorSpace, Ae.toneMapping = F ? ht.NoToneMapping : ht.ACESFilmicToneMapping), te.legacy !== oe && te.set(() => ({
        legacy: oe
      })), te.linear !== $ && te.set(() => ({
        linear: $
      })), te.flat !== F && te.set(() => ({
        flat: F
      })), O && !pa.fun(O) && !O0(O) && !pa.equ(O, Ae, Bf) && ji(Ae, O), S = G, C = !0, M(), this;
    },
    render(T) {
      return !C && !b && this.configure(), b.then(() => {
        Hh.updateContainer(/* @__PURE__ */ k.jsx(pS, {
          store: v,
          children: T,
          onCreated: S,
          rootElement: d
        }), A, null, () => {
        });
      }), v;
    },
    unmount() {
      bE(d);
    }
  };
}
function pS({
  store: d,
  children: u,
  onCreated: r,
  rootElement: f
}) {
  return Km(() => {
    const p = d.getState();
    p.set((v) => ({
      internal: {
        ...v.internal,
        active: !0
      }
    })), r && r(p), d.getState().events.connected || p.events.connect == null || p.events.connect(f);
  }, []), /* @__PURE__ */ k.jsx(Dy.Provider, {
    value: d,
    children: u
  });
}
function bE(d, u) {
  const r = Tc.get(d), f = r?.fiber;
  if (f) {
    const p = r?.store.getState();
    p && (p.internal.active = !1), Hh.updateContainer(null, f, null, () => {
      p && setTimeout(() => {
        try {
          var v, A, S, E;
          p.events.disconnect == null || p.events.disconnect(), (v = p.gl) == null || (A = v.renderLists) == null || A.dispose == null || A.dispose(), (S = p.gl) == null || S.forceContextLoss == null || S.forceContextLoss(), (E = p.gl) != null && E.xr && p.xr.disconnect(), Zg(p.scene), Tc.delete(d);
        } catch {
        }
      }, 500);
    });
  }
}
function hS(d, u, r) {
  return /* @__PURE__ */ k.jsx(vS, {
    children: d,
    container: u,
    state: r
  });
}
function vS({
  state: d = {},
  children: u,
  container: r
}) {
  const {
    events: f,
    size: p,
    ...v
  } = d, A = _y(), [S] = xe.useState(() => new ht.Raycaster()), [E] = xe.useState(() => new ht.Vector2()), C = Ry((T, M) => {
    let O;
    if (M.camera && p) {
      const N = M.camera;
      O = T.viewport.getCurrentViewport(N, new ht.Vector3(), p), N !== T.camera && yE(N, p);
    }
    return {
      // The intersect consists of the previous root state
      ...T,
      ...M,
      // Portals have their own scene, which forms the root, a raycaster and a pointer
      scene: r,
      raycaster: S,
      pointer: E,
      mouse: E,
      // Their previous root is the layer before it
      previousRoot: A,
      // Events, size and viewport can be overridden by the inject layer
      events: {
        ...T.events,
        ...M.events,
        ...f
      },
      size: {
        ...T.size,
        ...p
      },
      viewport: {
        ...T.viewport,
        ...O
      },
      // Layers are allowed to override events
      setEvents: (N) => M.set((J) => ({
        ...J,
        events: {
          ...J.events,
          ...N
        }
      }))
    };
  }), b = xe.useMemo(() => {
    const T = iE((O, N) => ({
      ...v,
      set: O,
      get: N
    })), M = (O) => T.setState((N) => C.current(O, N));
    return M(A.getState()), A.subscribe(M), T;
  }, [A, r]);
  return (
    // @ts-ignore, reconciler types are not maintained
    /* @__PURE__ */ k.jsx(k.Fragment, {
      children: Hh.createPortal(/* @__PURE__ */ k.jsx(Dy.Provider, {
        value: b,
        children: u
      }), b, null)
    })
  );
}
const yS = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set();
function Wv(d, u) {
  if (d.size)
    for (const {
      callback: r
    } of d.values())
      r(u);
}
function Um(d, u) {
  switch (d) {
    case "before":
      return Wv(yS, u);
    case "after":
      return Wv(AS, u);
    case "tail":
      return Wv(ES, u);
  }
}
let kv, $v;
function vy(d, u, r) {
  let f = u.clock.getDelta();
  u.frameloop === "never" && typeof d == "number" && (f = d - u.clock.elapsedTime, u.clock.oldTime = u.clock.elapsedTime, u.clock.elapsedTime = d), kv = u.internal.subscribers;
  for (let p = 0; p < kv.length; p++)
    $v = kv[p], $v.ref.current($v.store.getState(), f, r);
  return !u.internal.priority && u.gl.render && u.gl.render(u.scene, u.camera), u.internal.frames = Math.max(0, u.internal.frames - 1), u.frameloop === "always" ? 1 : u.internal.frames;
}
let Oh = !1, yy = !1, ey, x0, Cf;
function ME(d) {
  x0 = requestAnimationFrame(ME), Oh = !0, ey = 0, Um("before", d), yy = !0;
  for (const r of Tc.values()) {
    var u;
    Cf = r.store.getState(), Cf.internal.active && (Cf.frameloop === "always" || Cf.internal.frames > 0) && !((u = Cf.gl.xr) != null && u.isPresenting) && (ey += vy(d, Cf));
  }
  if (yy = !1, Um("after", d), ey === 0)
    return Um("tail", d), Oh = !1, cancelAnimationFrame(x0);
}
function Ay(d, u = 1) {
  var r;
  if (!d) return Tc.forEach((f) => Ay(f.store.getState(), u));
  (r = d.gl.xr) != null && r.isPresenting || !d.internal.active || d.frameloop === "never" || (u > 1 ? d.internal.frames = Math.min(60, d.internal.frames + u) : yy ? d.internal.frames = 2 : d.internal.frames = 1, Oh || (Oh = !0, requestAnimationFrame(ME)));
}
function z0(d, u = !0, r, f) {
  if (u && Um("before", d), r) vy(d, r, f);
  else for (const p of Tc.values()) vy(d, p.store.getState());
  u && Um("after", d);
}
const ty = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0]
};
function gS(d) {
  const {
    handlePointer: u
  } = $g(d);
  return {
    priority: 1,
    enabled: !0,
    compute(r, f, p) {
      f.pointer.set(r.offsetX / f.size.width * 2 - 1, -(r.offsetY / f.size.height) * 2 + 1), f.raycaster.setFromCamera(f.pointer, f.camera);
    },
    connected: void 0,
    handlers: Object.keys(ty).reduce((r, f) => ({
      ...r,
      [f]: u(f)
    }), {}),
    update: () => {
      var r;
      const {
        events: f,
        internal: p
      } = d.getState();
      (r = p.lastEvent) != null && r.current && f.handlers && f.handlers.onPointerMove(p.lastEvent.current);
    },
    connect: (r) => {
      const {
        set: f,
        events: p
      } = d.getState();
      if (p.disconnect == null || p.disconnect(), f((v) => ({
        events: {
          ...v.events,
          connected: r
        }
      })), p.handlers)
        for (const v in p.handlers) {
          const A = p.handlers[v], [S, E] = ty[v];
          r.addEventListener(S, A, {
            passive: E
          });
        }
    },
    disconnect: () => {
      const {
        set: r,
        events: f
      } = d.getState();
      if (f.connected) {
        if (f.handlers)
          for (const p in f.handlers) {
            const v = f.handlers[p], [A] = ty[p];
            f.connected.removeEventListener(A, v);
          }
        r((p) => ({
          events: {
            ...p.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function j0(d, u) {
  let r;
  return (...f) => {
    window.clearTimeout(r), r = window.setTimeout(() => d(...f), u);
  };
}
function SS({ debounce: d, scroll: u, polyfill: r, offsetSize: f } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const p = r || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!p) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [v, A] = ni({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), S = cy({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: v, orientationHandler: null }), E = d ? typeof d == "number" ? d : d.scroll : null, C = d ? typeof d == "number" ? d : d.resize : null, b = cy(!1);
  Rf(() => (b.current = !0, () => void (b.current = !1)));
  const [T, M, O] = Jm(() => {
    const G = () => {
      if (!S.current.element) return;
      const { left: U, top: $, width: F, height: oe, bottom: W, right: Te, x: ne, y: ie } = S.current.element.getBoundingClientRect(), me = { left: U, top: $, width: F, height: oe, bottom: W, right: Te, x: ne, y: ie };
      S.current.element instanceof HTMLElement && f && (me.height = S.current.element.offsetHeight, me.width = S.current.element.offsetWidth), Object.freeze(me), b.current && !bS(S.current.lastBounds, me) && A(S.current.lastBounds = me);
    };
    return [G, C ? j0(G, C) : G, E ? j0(G, E) : G];
  }, [A, f, E, C]);
  function N() {
    S.current.scrollContainers && (S.current.scrollContainers.forEach((G) => G.removeEventListener("scroll", O, !0)), S.current.scrollContainers = null), S.current.resizeObserver && (S.current.resizeObserver.disconnect(), S.current.resizeObserver = null), S.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", S.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", S.current.orientationHandler));
  }
  function J() {
    S.current.element && (S.current.resizeObserver = new p(O), S.current.resizeObserver.observe(S.current.element), u && S.current.scrollContainers && S.current.scrollContainers.forEach((G) => G.addEventListener("scroll", O, { capture: !0, passive: !0 })), S.current.orientationHandler = () => {
      O();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", S.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", S.current.orientationHandler));
  }
  const Z = (G) => {
    !G || G === S.current.element || (N(), S.current.element = G, S.current.scrollContainers = RE(G), J());
  };
  return CS(O, !!u), BS(M), Rf(() => {
    N(), J();
  }, [u, O, M]), Rf(() => N, []), [Z, v, T];
}
function BS(d) {
  Rf(() => {
    const u = d;
    return window.addEventListener("resize", u), () => void window.removeEventListener("resize", u);
  }, [d]);
}
function CS(d, u) {
  Rf(() => {
    if (u) {
      const r = d;
      return window.addEventListener("scroll", r, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", r, !0);
    }
  }, [d, u]);
}
function RE(d) {
  const u = [];
  if (!d || d === document.body) return u;
  const { overflow: r, overflowX: f, overflowY: p } = window.getComputedStyle(d);
  return [r, f, p].some((v) => v === "auto" || v === "scroll") && u.push(d), [...u, ...RE(d.parentElement)];
}
const TS = ["x", "y", "top", "bottom", "left", "right", "width", "height"], bS = (d, u) => TS.every((r) => d[r] === u[r]);
function MS({
  ref: d,
  children: u,
  fallback: r,
  resize: f,
  style: p,
  gl: v,
  events: A = gS,
  eventSource: S,
  eventPrefix: E,
  shadows: C,
  linear: b,
  flat: T,
  legacy: M,
  orthographic: O,
  frameloop: N,
  dpr: J,
  performance: Z,
  raycaster: G,
  camera: U,
  scene: $,
  onPointerMissed: F,
  onCreated: oe,
  ...W
}) {
  xe.useMemo(() => SE(ht), []);
  const Te = Yg(), [ne, ie] = SS({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...f
  }), me = xe.useRef(null), De = xe.useRef(null);
  xe.useImperativeHandle(d, () => me.current);
  const Xe = Ry(F), [te, Ae] = xe.useState(!1), [Ve, D] = xe.useState(!1);
  if (te) throw te;
  if (Ve) throw Ve;
  const Y = xe.useRef(null);
  Km(() => {
    const fe = me.current;
    if (ie.width > 0 && ie.height > 0 && fe) {
      Y.current || (Y.current = mS(fe));
      async function x() {
        await Y.current.configure({
          gl: v,
          scene: $,
          events: A,
          shadows: C,
          linear: b,
          flat: T,
          legacy: M,
          orthographic: O,
          frameloop: N,
          dpr: J,
          performance: Z,
          raycaster: G,
          camera: U,
          size: ie,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...de) => Xe.current == null ? void 0 : Xe.current(...de),
          onCreated: (de) => {
            de.events.connect == null || de.events.connect(S ? Kg(S) ? S.current : S : De.current), E && de.setEvents({
              compute: (pe, Qe) => {
                const Ge = pe[E + "X"], we = pe[E + "Y"];
                Qe.pointer.set(Ge / Qe.size.width * 2 - 1, -(we / Qe.size.height) * 2 + 1), Qe.raycaster.setFromCamera(Qe.pointer, Qe.camera);
              }
            }), oe?.(de);
          }
        }), Y.current.render(/* @__PURE__ */ k.jsx(Te, {
          children: /* @__PURE__ */ k.jsx(Vg, {
            set: D,
            children: /* @__PURE__ */ k.jsx(xe.Suspense, {
              fallback: /* @__PURE__ */ k.jsx(Xg, {
                set: Ae
              }),
              children: u ?? null
            })
          })
        }));
      }
      x();
    }
  }), xe.useEffect(() => {
    const fe = me.current;
    if (fe) return () => bE(fe);
  }, []);
  const X = S ? "none" : "auto";
  return /* @__PURE__ */ k.jsx("div", {
    ref: De,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: X,
      ...p
    },
    ...W,
    children: /* @__PURE__ */ k.jsx("div", {
      ref: ne,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ k.jsx("canvas", {
        ref: me,
        style: {
          display: "block"
        },
        children: r
      })
    })
  });
}
function RS(d) {
  return /* @__PURE__ */ k.jsx(fE, {
    children: /* @__PURE__ */ k.jsx(MS, {
      ...d
    })
  });
}
function jm() {
  return jm = Object.assign ? Object.assign.bind() : function(d) {
    for (var u = 1; u < arguments.length; u++) {
      var r = arguments[u];
      for (var f in r) ({}).hasOwnProperty.call(r, f) && (d[f] = r[f]);
    }
    return d;
  }, jm.apply(null, arguments);
}
const Oy = parseInt(o1.replace(/\D+/g, ""));
function L0(d, u) {
  if (u === c1)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d;
  if (u === ry || u === q0) {
    let r = d.getIndex();
    if (r === null) {
      const A = [], S = d.getAttribute("position");
      if (S !== void 0) {
        for (let E = 0; E < S.count; E++)
          A.push(E);
        d.setIndex(A), r = d.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), d;
    }
    const f = r.count - 2, p = [];
    if (r)
      if (u === ry)
        for (let A = 1; A <= f; A++)
          p.push(r.getX(0)), p.push(r.getX(A)), p.push(r.getX(A + 1));
      else
        for (let A = 0; A < f; A++)
          A % 2 === 0 ? (p.push(r.getX(A)), p.push(r.getX(A + 1)), p.push(r.getX(A + 2))) : (p.push(r.getX(A + 2)), p.push(r.getX(A + 1)), p.push(r.getX(A)));
    p.length / 3 !== f && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const v = d.clone();
    return v.setIndex(p), v.clearGroups(), v;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", u), d;
}
var Cu = Uint8Array, Eo = Uint16Array, Ey = Uint32Array, DE = new Cu([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), _E = new Cu([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), DS = new Cu([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), HE = function(d, u) {
  for (var r = new Eo(31), f = 0; f < 31; ++f)
    r[f] = u += 1 << d[f - 1];
  for (var p = new Ey(r[30]), f = 1; f < 30; ++f)
    for (var v = r[f]; v < r[f + 1]; ++v)
      p[v] = v - r[f] << 5 | f;
  return [r, p];
}, OE = HE(DE, 2), NE = OE[0], _S = OE[1];
NE[28] = 258, _S[258] = 28;
var HS = HE(_E, 0), OS = HS[0], gy = new Eo(32768);
for (var sa = 0; sa < 32768; ++sa) {
  var vo = (sa & 43690) >>> 1 | (sa & 21845) << 1;
  vo = (vo & 52428) >>> 2 | (vo & 13107) << 2, vo = (vo & 61680) >>> 4 | (vo & 3855) << 4, gy[sa] = ((vo & 65280) >>> 8 | (vo & 255) << 8) >>> 1;
}
var Gm = function(d, u, r) {
  for (var f = d.length, p = 0, v = new Eo(u); p < f; ++p)
    ++v[d[p] - 1];
  var A = new Eo(u);
  for (p = 0; p < u; ++p)
    A[p] = A[p - 1] + v[p - 1] << 1;
  var S;
  if (r) {
    S = new Eo(1 << u);
    var E = 15 - u;
    for (p = 0; p < f; ++p)
      if (d[p])
        for (var C = p << 4 | d[p], b = u - d[p], T = A[d[p] - 1]++ << b, M = T | (1 << b) - 1; T <= M; ++T)
          S[gy[T] >>> E] = C;
  } else
    for (S = new Eo(f), p = 0; p < f; ++p)
      d[p] && (S[p] = gy[A[d[p] - 1]++] >>> 15 - d[p]);
  return S;
}, Qm = new Cu(288);
for (var sa = 0; sa < 144; ++sa)
  Qm[sa] = 8;
for (var sa = 144; sa < 256; ++sa)
  Qm[sa] = 9;
for (var sa = 256; sa < 280; ++sa)
  Qm[sa] = 7;
for (var sa = 280; sa < 288; ++sa)
  Qm[sa] = 8;
var UE = new Cu(32);
for (var sa = 0; sa < 32; ++sa)
  UE[sa] = 5;
var NS = /* @__PURE__ */ Gm(Qm, 9, 1), US = /* @__PURE__ */ Gm(UE, 5, 1), ay = function(d) {
  for (var u = d[0], r = 1; r < d.length; ++r)
    d[r] > u && (u = d[r]);
  return u;
}, ai = function(d, u, r) {
  var f = u / 8 | 0;
  return (d[f] | d[f + 1] << 8) >> (u & 7) & r;
}, ny = function(d, u) {
  var r = u / 8 | 0;
  return (d[r] | d[r + 1] << 8 | d[r + 2] << 16) >> (u & 7);
}, GS = function(d) {
  return (d / 8 | 0) + (d & 7 && 1);
}, xS = function(d, u, r) {
  (r == null || r > d.length) && (r = d.length);
  var f = new (d instanceof Eo ? Eo : d instanceof Ey ? Ey : Cu)(r - u);
  return f.set(d.subarray(u, r)), f;
}, zS = function(d, u, r) {
  var f = d.length;
  if (!f || r && !r.l && f < 5)
    return u || new Cu(0);
  var p = !u || r, v = !r || r.i;
  r || (r = {}), u || (u = new Cu(f * 3));
  var A = function(at) {
    var ea = u.length;
    if (at > ea) {
      var At = new Cu(Math.max(ea * 2, at));
      At.set(u), u = At;
    }
  }, S = r.f || 0, E = r.p || 0, C = r.b || 0, b = r.l, T = r.d, M = r.m, O = r.n, N = f * 8;
  do {
    if (!b) {
      r.f = S = ai(d, E, 1);
      var J = ai(d, E + 1, 3);
      if (E += 3, J)
        if (J == 1)
          b = NS, T = US, M = 9, O = 5;
        else if (J == 2) {
          var $ = ai(d, E, 31) + 257, F = ai(d, E + 10, 15) + 4, oe = $ + ai(d, E + 5, 31) + 1;
          E += 14;
          for (var W = new Cu(oe), Te = new Cu(19), ne = 0; ne < F; ++ne)
            Te[DS[ne]] = ai(d, E + ne * 3, 7);
          E += F * 3;
          for (var ie = ay(Te), me = (1 << ie) - 1, De = Gm(Te, ie, 1), ne = 0; ne < oe; ) {
            var Xe = De[ai(d, E, me)];
            E += Xe & 15;
            var Z = Xe >>> 4;
            if (Z < 16)
              W[ne++] = Z;
            else {
              var te = 0, Ae = 0;
              for (Z == 16 ? (Ae = 3 + ai(d, E, 3), E += 2, te = W[ne - 1]) : Z == 17 ? (Ae = 3 + ai(d, E, 7), E += 3) : Z == 18 && (Ae = 11 + ai(d, E, 127), E += 7); Ae--; )
                W[ne++] = te;
            }
          }
          var Ve = W.subarray(0, $), D = W.subarray($);
          M = ay(Ve), O = ay(D), b = Gm(Ve, M, 1), T = Gm(D, O, 1);
        } else
          throw "invalid block type";
      else {
        var Z = GS(E) + 4, G = d[Z - 4] | d[Z - 3] << 8, U = Z + G;
        if (U > f) {
          if (v)
            throw "unexpected EOF";
          break;
        }
        p && A(C + G), u.set(d.subarray(Z, U), C), r.b = C += G, r.p = E = U * 8;
        continue;
      }
      if (E > N) {
        if (v)
          throw "unexpected EOF";
        break;
      }
    }
    p && A(C + 131072);
    for (var Y = (1 << M) - 1, X = (1 << O) - 1, fe = E; ; fe = E) {
      var te = b[ny(d, E) & Y], x = te >>> 4;
      if (E += te & 15, E > N) {
        if (v)
          throw "unexpected EOF";
        break;
      }
      if (!te)
        throw "invalid length/literal";
      if (x < 256)
        u[C++] = x;
      else if (x == 256) {
        fe = E, b = null;
        break;
      } else {
        var de = x - 254;
        if (x > 264) {
          var ne = x - 257, pe = DE[ne];
          de = ai(d, E, (1 << pe) - 1) + NE[ne], E += pe;
        }
        var Qe = T[ny(d, E) & X], Ge = Qe >>> 4;
        if (!Qe)
          throw "invalid distance";
        E += Qe & 15;
        var D = OS[Ge];
        if (Ge > 3) {
          var pe = _E[Ge];
          D += ny(d, E) & (1 << pe) - 1, E += pe;
        }
        if (E > N) {
          if (v)
            throw "unexpected EOF";
          break;
        }
        p && A(C + 131072);
        for (var we = C + de; C < we; C += 4)
          u[C] = u[C - D], u[C + 1] = u[C + 1 - D], u[C + 2] = u[C + 2 - D], u[C + 3] = u[C + 3 - D];
        C = we;
      }
    }
    r.l = b, r.p = fe, r.b = C, b && (S = 1, r.m = M, r.d = T, r.n = O);
  } while (!S);
  return C == u.length ? u : xS(u, 0, C);
}, jS = /* @__PURE__ */ new Cu(0), LS = function(d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    throw "invalid zlib data";
  if (d[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function vh(d, u) {
  return zS((LS(d), d.subarray(2, -4)), u);
}
var JS = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), KS = 0;
try {
  JS.decode(jS, { stream: !0 }), KS = 1;
} catch {
}
const QS = (d) => d && d.isCubeTexture;
class YS extends Uh {
  constructor(u, r) {
    var f, p;
    const v = QS(u), S = ((p = v ? (f = u.image[0]) == null ? void 0 : f.width : u.image.width) != null ? p : 1024) / 4, E = Math.floor(Math.log2(S)), C = Math.pow(2, E), b = 3 * Math.max(C, 112), T = 4 * C, M = [
      v ? "#define ENVMAP_TYPE_CUBE" : "",
      `#define CUBEUV_TEXEL_WIDTH ${1 / b}`,
      `#define CUBEUV_TEXEL_HEIGHT ${1 / T}`,
      `#define CUBEUV_MAX_MIP ${E}.0`
    ], O = (
      /* glsl */
      `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `
    ), N = M.join(`
`) + /* glsl */
    `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Oy >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, J = {
      map: { value: u },
      height: { value: r?.height || 15 },
      radius: { value: r?.radius || 100 }
    }, Z = new r1(1, 16), G = new Cy({
      uniforms: J,
      fragmentShader: N,
      vertexShader: O,
      side: I0
    });
    super(Z, G);
  }
  set radius(u) {
    this.material.uniforms.radius.value = u;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(u) {
    this.material.uniforms.height.value = u;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var XS = Object.defineProperty, VS = (d, u, r) => u in d ? XS(d, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : d[u] = r, FS = (d, u, r) => (VS(d, u + "", r), r);
class ZS {
  constructor() {
    FS(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(u, r) {
    this._listeners === void 0 && (this._listeners = {});
    const f = this._listeners;
    f[u] === void 0 && (f[u] = []), f[u].indexOf(r) === -1 && f[u].push(r);
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(u, r) {
    if (this._listeners === void 0)
      return !1;
    const f = this._listeners;
    return f[u] !== void 0 && f[u].indexOf(r) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(u, r) {
    if (this._listeners === void 0)
      return;
    const p = this._listeners[u];
    if (p !== void 0) {
      const v = p.indexOf(r);
      v !== -1 && p.splice(v, 1);
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(u) {
    if (this._listeners === void 0)
      return;
    const f = this._listeners[u.type];
    if (f !== void 0) {
      u.target = this;
      const p = f.slice(0);
      for (let v = 0, A = p.length; v < A; v++)
        p[v].call(this, u);
      u.target = null;
    }
  }
}
var qS = Object.defineProperty, IS = (d, u, r) => u in d ? qS(d, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : d[u] = r, We = (d, u, r) => (IS(d, typeof u != "symbol" ? u + "" : u, r), r);
const yh = /* @__PURE__ */ new f1(), J0 = /* @__PURE__ */ new d1(), wS = Math.cos(70 * (Math.PI / 180)), K0 = (d, u) => (d % u + u) % u;
let PS = class extends ZS {
  constructor(u, r) {
    super(), We(this, "object"), We(this, "domElement"), We(this, "enabled", !0), We(this, "target", new Ra()), We(this, "minDistance", 0), We(this, "maxDistance", 1 / 0), We(this, "minZoom", 0), We(this, "maxZoom", 1 / 0), We(this, "minPolarAngle", 0), We(this, "maxPolarAngle", Math.PI), We(this, "minAzimuthAngle", -1 / 0), We(this, "maxAzimuthAngle", 1 / 0), We(this, "enableDamping", !1), We(this, "dampingFactor", 0.05), We(this, "enableZoom", !0), We(this, "zoomSpeed", 1), We(this, "enableRotate", !0), We(this, "rotateSpeed", 1), We(this, "enablePan", !0), We(this, "panSpeed", 1), We(this, "screenSpacePanning", !0), We(this, "keyPanSpeed", 7), We(this, "zoomToCursor", !1), We(this, "autoRotate", !1), We(this, "autoRotateSpeed", 2), We(this, "reverseOrbit", !1), We(this, "reverseHorizontalOrbit", !1), We(this, "reverseVerticalOrbit", !1), We(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), We(this, "mouseButtons", {
      LEFT: Ef.ROTATE,
      MIDDLE: Ef.DOLLY,
      RIGHT: Ef.PAN
    }), We(this, "touches", { ONE: gf.ROTATE, TWO: gf.DOLLY_PAN }), We(this, "target0"), We(this, "position0"), We(this, "zoom0"), We(this, "_domElementKeyEvents", null), We(this, "getPolarAngle"), We(this, "getAzimuthalAngle"), We(this, "setPolarAngle"), We(this, "setAzimuthalAngle"), We(this, "getDistance"), We(this, "getZoomScale"), We(this, "listenToKeyEvents"), We(this, "stopListenToKeyEvents"), We(this, "saveState"), We(this, "reset"), We(this, "update"), We(this, "connect"), We(this, "dispose"), We(this, "dollyIn"), We(this, "dollyOut"), We(this, "getScale"), We(this, "setScale"), this.object = u, this.domElement = r, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => b.phi, this.getAzimuthalAngle = () => b.theta, this.setPolarAngle = (V) => {
      let ge = K0(V, 2 * Math.PI), je = b.phi;
      je < 0 && (je += 2 * Math.PI), ge < 0 && (ge += 2 * Math.PI);
      let tt = Math.abs(ge - je);
      2 * Math.PI - tt < tt && (ge < je ? ge += 2 * Math.PI : je += 2 * Math.PI), T.phi = ge - je, f.update();
    }, this.setAzimuthalAngle = (V) => {
      let ge = K0(V, 2 * Math.PI), je = b.theta;
      je < 0 && (je += 2 * Math.PI), ge < 0 && (ge += 2 * Math.PI);
      let tt = Math.abs(ge - je);
      2 * Math.PI - tt < tt && (ge < je ? ge += 2 * Math.PI : je += 2 * Math.PI), T.theta = ge - je, f.update();
    }, this.getDistance = () => f.object.position.distanceTo(f.target), this.listenToKeyEvents = (V) => {
      V.addEventListener("keydown", sl), this._domElementKeyEvents = V;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", sl), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      f.target0.copy(f.target), f.position0.copy(f.object.position), f.zoom0 = f.object.zoom;
    }, this.reset = () => {
      f.target.copy(f.target0), f.object.position.copy(f.position0), f.object.zoom = f.zoom0, f.object.updateProjectionMatrix(), f.dispatchEvent(p), f.update(), E = S.NONE;
    }, this.update = (() => {
      const V = new Ra(), ge = new Ra(0, 1, 0), je = new Th().setFromUnitVectors(u.up, ge), tt = je.clone().invert(), _e = new Ra(), na = new Th(), Gn = 2 * Math.PI;
      return function() {
        const ol = f.object.position;
        je.setFromUnitVectors(u.up, ge), tt.copy(je).invert(), V.copy(ol).sub(f.target), V.applyQuaternion(je), b.setFromVector3(V), f.autoRotate && E === S.NONE && Ae(Xe()), f.enableDamping ? (b.theta += T.theta * f.dampingFactor, b.phi += T.phi * f.dampingFactor) : (b.theta += T.theta, b.phi += T.phi);
        let Aa = f.minAzimuthAngle, Va = f.maxAzimuthAngle;
        isFinite(Aa) && isFinite(Va) && (Aa < -Math.PI ? Aa += Gn : Aa > Math.PI && (Aa -= Gn), Va < -Math.PI ? Va += Gn : Va > Math.PI && (Va -= Gn), Aa <= Va ? b.theta = Math.max(Aa, Math.min(Va, b.theta)) : b.theta = b.theta > (Aa + Va) / 2 ? Math.max(Aa, b.theta) : Math.min(Va, b.theta)), b.phi = Math.max(f.minPolarAngle, Math.min(f.maxPolarAngle, b.phi)), b.makeSafe(), f.enableDamping === !0 ? f.target.addScaledVector(O, f.dampingFactor) : f.target.add(O), f.zoomToCursor && ie || f.object.isOrthographicCamera ? b.radius = Qe(b.radius) : b.radius = Qe(b.radius * M), V.setFromSpherical(b), V.applyQuaternion(tt), ol.copy(f.target).add(V), f.object.matrixAutoUpdate || f.object.updateMatrix(), f.object.lookAt(f.target), f.enableDamping === !0 ? (T.theta *= 1 - f.dampingFactor, T.phi *= 1 - f.dampingFactor, O.multiplyScalar(1 - f.dampingFactor)) : (T.set(0, 0, 0), O.set(0, 0, 0));
        let Fa = !1;
        if (f.zoomToCursor && ie) {
          let hn = null;
          if (f.object instanceof Sh && f.object.isPerspectiveCamera) {
            const cl = V.length();
            hn = Qe(cl * M);
            const Yn = cl - hn;
            f.object.position.addScaledVector(Te, Yn), f.object.updateMatrixWorld();
          } else if (f.object.isOrthographicCamera) {
            const cl = new Ra(ne.x, ne.y, 0);
            cl.unproject(f.object), f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / M)), f.object.updateProjectionMatrix(), Fa = !0;
            const Yn = new Ra(ne.x, ne.y, 0);
            Yn.unproject(f.object), f.object.position.sub(Yn).add(cl), f.object.updateMatrixWorld(), hn = V.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), f.zoomToCursor = !1;
          hn !== null && (f.screenSpacePanning ? f.target.set(0, 0, -1).transformDirection(f.object.matrix).multiplyScalar(hn).add(f.object.position) : (yh.origin.copy(f.object.position), yh.direction.set(0, 0, -1).transformDirection(f.object.matrix), Math.abs(f.object.up.dot(yh.direction)) < wS ? u.lookAt(f.target) : (J0.setFromNormalAndCoplanarPoint(f.object.up, f.target), yh.intersectPlane(J0, f.target))));
        } else f.object instanceof Hm && f.object.isOrthographicCamera && (Fa = M !== 1, Fa && (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / M)), f.object.updateProjectionMatrix()));
        return M = 1, ie = !1, Fa || _e.distanceToSquared(f.object.position) > C || 8 * (1 - na.dot(f.object.quaternion)) > C ? (f.dispatchEvent(p), _e.copy(f.object.position), na.copy(f.object.quaternion), Fa = !1, !0) : !1;
      };
    })(), this.connect = (V) => {
      f.domElement = V, f.domElement.style.touchAction = "none", f.domElement.addEventListener("contextmenu", Un), f.domElement.addEventListener("pointerdown", Ts), f.domElement.addEventListener("pointercancel", Nn), f.domElement.addEventListener("wheel", Ru);
    }, this.dispose = () => {
      var V, ge, je, tt, _e, na;
      f.domElement && (f.domElement.style.touchAction = "auto"), (V = f.domElement) == null || V.removeEventListener("contextmenu", Un), (ge = f.domElement) == null || ge.removeEventListener("pointerdown", Ts), (je = f.domElement) == null || je.removeEventListener("pointercancel", Nn), (tt = f.domElement) == null || tt.removeEventListener("wheel", Ru), (_e = f.domElement) == null || _e.ownerDocument.removeEventListener("pointermove", Fl), (na = f.domElement) == null || na.ownerDocument.removeEventListener("pointerup", Nn), f._domElementKeyEvents !== null && f._domElementKeyEvents.removeEventListener("keydown", sl);
    };
    const f = this, p = { type: "change" }, v = { type: "start" }, A = { type: "end" }, S = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let E = S.NONE;
    const C = 1e-6, b = new e0(), T = new e0();
    let M = 1;
    const O = new Ra(), N = new Xl(), J = new Xl(), Z = new Xl(), G = new Xl(), U = new Xl(), $ = new Xl(), F = new Xl(), oe = new Xl(), W = new Xl(), Te = new Ra(), ne = new Xl();
    let ie = !1;
    const me = [], De = {};
    function Xe() {
      return 2 * Math.PI / 60 / 60 * f.autoRotateSpeed;
    }
    function te() {
      return Math.pow(0.95, f.zoomSpeed);
    }
    function Ae(V) {
      f.reverseOrbit || f.reverseHorizontalOrbit ? T.theta += V : T.theta -= V;
    }
    function Ve(V) {
      f.reverseOrbit || f.reverseVerticalOrbit ? T.phi += V : T.phi -= V;
    }
    const D = (() => {
      const V = new Ra();
      return function(je, tt) {
        V.setFromMatrixColumn(tt, 0), V.multiplyScalar(-je), O.add(V);
      };
    })(), Y = (() => {
      const V = new Ra();
      return function(je, tt) {
        f.screenSpacePanning === !0 ? V.setFromMatrixColumn(tt, 1) : (V.setFromMatrixColumn(tt, 0), V.crossVectors(f.object.up, V)), V.multiplyScalar(je), O.add(V);
      };
    })(), X = (() => {
      const V = new Ra();
      return function(je, tt) {
        const _e = f.domElement;
        if (_e && f.object instanceof Sh && f.object.isPerspectiveCamera) {
          const na = f.object.position;
          V.copy(na).sub(f.target);
          let Gn = V.length();
          Gn *= Math.tan(f.object.fov / 2 * Math.PI / 180), D(2 * je * Gn / _e.clientHeight, f.object.matrix), Y(2 * tt * Gn / _e.clientHeight, f.object.matrix);
        } else _e && f.object instanceof Hm && f.object.isOrthographicCamera ? (D(
          je * (f.object.right - f.object.left) / f.object.zoom / _e.clientWidth,
          f.object.matrix
        ), Y(
          tt * (f.object.top - f.object.bottom) / f.object.zoom / _e.clientHeight,
          f.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), f.enablePan = !1);
      };
    })();
    function fe(V) {
      f.object instanceof Sh && f.object.isPerspectiveCamera || f.object instanceof Hm && f.object.isOrthographicCamera ? M = V : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1);
    }
    function x(V) {
      fe(M / V);
    }
    function de(V) {
      fe(M * V);
    }
    function pe(V) {
      if (!f.zoomToCursor || !f.domElement)
        return;
      ie = !0;
      const ge = f.domElement.getBoundingClientRect(), je = V.clientX - ge.left, tt = V.clientY - ge.top, _e = ge.width, na = ge.height;
      ne.x = je / _e * 2 - 1, ne.y = -(tt / na) * 2 + 1, Te.set(ne.x, ne.y, 1).unproject(f.object).sub(f.object.position).normalize();
    }
    function Qe(V) {
      return Math.max(f.minDistance, Math.min(f.maxDistance, V));
    }
    function Ge(V) {
      N.set(V.clientX, V.clientY);
    }
    function we(V) {
      pe(V), F.set(V.clientX, V.clientY);
    }
    function at(V) {
      G.set(V.clientX, V.clientY);
    }
    function ea(V) {
      J.set(V.clientX, V.clientY), Z.subVectors(J, N).multiplyScalar(f.rotateSpeed);
      const ge = f.domElement;
      ge && (Ae(2 * Math.PI * Z.x / ge.clientHeight), Ve(2 * Math.PI * Z.y / ge.clientHeight)), N.copy(J), f.update();
    }
    function At(V) {
      oe.set(V.clientX, V.clientY), W.subVectors(oe, F), W.y > 0 ? x(te()) : W.y < 0 && de(te()), F.copy(oe), f.update();
    }
    function Rn(V) {
      U.set(V.clientX, V.clientY), $.subVectors(U, G).multiplyScalar(f.panSpeed), X($.x, $.y), G.copy(U), f.update();
    }
    function bl(V) {
      pe(V), V.deltaY < 0 ? de(te()) : V.deltaY > 0 && x(te()), f.update();
    }
    function Dn(V) {
      let ge = !1;
      switch (V.code) {
        case f.keys.UP:
          X(0, f.keyPanSpeed), ge = !0;
          break;
        case f.keys.BOTTOM:
          X(0, -f.keyPanSpeed), ge = !0;
          break;
        case f.keys.LEFT:
          X(f.keyPanSpeed, 0), ge = !0;
          break;
        case f.keys.RIGHT:
          X(-f.keyPanSpeed, 0), ge = !0;
          break;
      }
      ge && (V.preventDefault(), f.update());
    }
    function _n() {
      if (me.length == 1)
        N.set(me[0].pageX, me[0].pageY);
      else {
        const V = 0.5 * (me[0].pageX + me[1].pageX), ge = 0.5 * (me[0].pageY + me[1].pageY);
        N.set(V, ge);
      }
    }
    function Ml() {
      if (me.length == 1)
        G.set(me[0].pageX, me[0].pageY);
      else {
        const V = 0.5 * (me[0].pageX + me[1].pageX), ge = 0.5 * (me[0].pageY + me[1].pageY);
        G.set(V, ge);
      }
    }
    function Rl() {
      const V = me[0].pageX - me[1].pageX, ge = me[0].pageY - me[1].pageY, je = Math.sqrt(V * V + ge * ge);
      F.set(0, je);
    }
    function Vl() {
      f.enableZoom && Rl(), f.enablePan && Ml();
    }
    function li() {
      f.enableZoom && Rl(), f.enableRotate && _n();
    }
    function Hn(V) {
      if (me.length == 1)
        J.set(V.pageX, V.pageY);
      else {
        const je = Ua(V), tt = 0.5 * (V.pageX + je.x), _e = 0.5 * (V.pageY + je.y);
        J.set(tt, _e);
      }
      Z.subVectors(J, N).multiplyScalar(f.rotateSpeed);
      const ge = f.domElement;
      ge && (Ae(2 * Math.PI * Z.x / ge.clientHeight), Ve(2 * Math.PI * Z.y / ge.clientHeight)), N.copy(J);
    }
    function ui(V) {
      if (me.length == 1)
        U.set(V.pageX, V.pageY);
      else {
        const ge = Ua(V), je = 0.5 * (V.pageX + ge.x), tt = 0.5 * (V.pageY + ge.y);
        U.set(je, tt);
      }
      $.subVectors(U, G).multiplyScalar(f.panSpeed), X($.x, $.y), G.copy(U);
    }
    function Mu(V) {
      const ge = Ua(V), je = V.pageX - ge.x, tt = V.pageY - ge.y, _e = Math.sqrt(je * je + tt * tt);
      oe.set(0, _e), W.set(0, Math.pow(oe.y / F.y, f.zoomSpeed)), x(W.y), F.copy(oe);
    }
    function On(V) {
      f.enableZoom && Mu(V), f.enablePan && ui(V);
    }
    function Tt(V) {
      f.enableZoom && Mu(V), f.enableRotate && Hn(V);
    }
    function Ts(V) {
      var ge, je;
      f.enabled !== !1 && (me.length === 0 && ((ge = f.domElement) == null || ge.ownerDocument.addEventListener("pointermove", Fl), (je = f.domElement) == null || je.ownerDocument.addEventListener("pointerup", Nn)), ii(V), V.pointerType === "touch" ? Du(V) : Qn(V));
    }
    function Fl(V) {
      f.enabled !== !1 && (V.pointerType === "touch" ? Xa(V) : bs(V));
    }
    function Nn(V) {
      var ge, je, tt;
      Na(V), me.length === 0 && ((ge = f.domElement) == null || ge.releasePointerCapture(V.pointerId), (je = f.domElement) == null || je.ownerDocument.removeEventListener("pointermove", Fl), (tt = f.domElement) == null || tt.ownerDocument.removeEventListener("pointerup", Nn)), f.dispatchEvent(A), E = S.NONE;
    }
    function Qn(V) {
      let ge;
      switch (V.button) {
        case 0:
          ge = f.mouseButtons.LEFT;
          break;
        case 1:
          ge = f.mouseButtons.MIDDLE;
          break;
        case 2:
          ge = f.mouseButtons.RIGHT;
          break;
        default:
          ge = -1;
      }
      switch (ge) {
        case Ef.DOLLY:
          if (f.enableZoom === !1)
            return;
          we(V), E = S.DOLLY;
          break;
        case Ef.ROTATE:
          if (V.ctrlKey || V.metaKey || V.shiftKey) {
            if (f.enablePan === !1)
              return;
            at(V), E = S.PAN;
          } else {
            if (f.enableRotate === !1)
              return;
            Ge(V), E = S.ROTATE;
          }
          break;
        case Ef.PAN:
          if (V.ctrlKey || V.metaKey || V.shiftKey) {
            if (f.enableRotate === !1)
              return;
            Ge(V), E = S.ROTATE;
          } else {
            if (f.enablePan === !1)
              return;
            at(V), E = S.PAN;
          }
          break;
        default:
          E = S.NONE;
      }
      E !== S.NONE && f.dispatchEvent(v);
    }
    function bs(V) {
      if (f.enabled !== !1)
        switch (E) {
          case S.ROTATE:
            if (f.enableRotate === !1)
              return;
            ea(V);
            break;
          case S.DOLLY:
            if (f.enableZoom === !1)
              return;
            At(V);
            break;
          case S.PAN:
            if (f.enablePan === !1)
              return;
            Rn(V);
            break;
        }
    }
    function Ru(V) {
      f.enabled === !1 || f.enableZoom === !1 || E !== S.NONE && E !== S.ROTATE || (V.preventDefault(), f.dispatchEvent(v), bl(V), f.dispatchEvent(A));
    }
    function sl(V) {
      f.enabled === !1 || f.enablePan === !1 || Dn(V);
    }
    function Du(V) {
      switch (Jt(V), me.length) {
        case 1:
          switch (f.touches.ONE) {
            case gf.ROTATE:
              if (f.enableRotate === !1)
                return;
              _n(), E = S.TOUCH_ROTATE;
              break;
            case gf.PAN:
              if (f.enablePan === !1)
                return;
              Ml(), E = S.TOUCH_PAN;
              break;
            default:
              E = S.NONE;
          }
          break;
        case 2:
          switch (f.touches.TWO) {
            case gf.DOLLY_PAN:
              if (f.enableZoom === !1 && f.enablePan === !1)
                return;
              Vl(), E = S.TOUCH_DOLLY_PAN;
              break;
            case gf.DOLLY_ROTATE:
              if (f.enableZoom === !1 && f.enableRotate === !1)
                return;
              li(), E = S.TOUCH_DOLLY_ROTATE;
              break;
            default:
              E = S.NONE;
          }
          break;
        default:
          E = S.NONE;
      }
      E !== S.NONE && f.dispatchEvent(v);
    }
    function Xa(V) {
      switch (Jt(V), E) {
        case S.TOUCH_ROTATE:
          if (f.enableRotate === !1)
            return;
          Hn(V), f.update();
          break;
        case S.TOUCH_PAN:
          if (f.enablePan === !1)
            return;
          ui(V), f.update();
          break;
        case S.TOUCH_DOLLY_PAN:
          if (f.enableZoom === !1 && f.enablePan === !1)
            return;
          On(V), f.update();
          break;
        case S.TOUCH_DOLLY_ROTATE:
          if (f.enableZoom === !1 && f.enableRotate === !1)
            return;
          Tt(V), f.update();
          break;
        default:
          E = S.NONE;
      }
    }
    function Un(V) {
      f.enabled !== !1 && V.preventDefault();
    }
    function ii(V) {
      me.push(V);
    }
    function Na(V) {
      delete De[V.pointerId];
      for (let ge = 0; ge < me.length; ge++)
        if (me[ge].pointerId == V.pointerId) {
          me.splice(ge, 1);
          return;
        }
    }
    function Jt(V) {
      let ge = De[V.pointerId];
      ge === void 0 && (ge = new Xl(), De[V.pointerId] = ge), ge.set(V.pageX, V.pageY);
    }
    function Ua(V) {
      const ge = V.pointerId === me[0].pointerId ? me[1] : me[0];
      return De[ge.pointerId];
    }
    this.dollyIn = (V = te()) => {
      de(V), f.update();
    }, this.dollyOut = (V = te()) => {
      x(V), f.update();
    }, this.getScale = () => M, this.setScale = (V) => {
      fe(V), f.update();
    }, this.getZoomScale = () => te(), r !== void 0 && this.connect(r), this.update();
  }
};
function Nh(d) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(d);
  let u = "";
  for (let r = 0, f = d.length; r < f; r++)
    u += String.fromCharCode(d[r]);
  try {
    return decodeURIComponent(escape(u));
  } catch {
    return u;
  }
}
const Bc = "srgb", Bs = "srgb-linear", Q0 = 3001, WS = 3e3;
class Ny extends Ty {
  constructor(u) {
    super(u), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(r) {
      return new aB(r);
    }), this.register(function(r) {
      return new nB(r);
    }), this.register(function(r) {
      return new dB(r);
    }), this.register(function(r) {
      return new mB(r);
    }), this.register(function(r) {
      return new pB(r);
    }), this.register(function(r) {
      return new uB(r);
    }), this.register(function(r) {
      return new iB(r);
    }), this.register(function(r) {
      return new sB(r);
    }), this.register(function(r) {
      return new oB(r);
    }), this.register(function(r) {
      return new tB(r);
    }), this.register(function(r) {
      return new cB(r);
    }), this.register(function(r) {
      return new lB(r);
    }), this.register(function(r) {
      return new fB(r);
    }), this.register(function(r) {
      return new rB(r);
    }), this.register(function(r) {
      return new $S(r);
    }), this.register(function(r) {
      return new hB(r);
    }), this.register(function(r) {
      return new vB(r);
    });
  }
  load(u, r, f, p) {
    const v = this;
    let A;
    if (this.resourcePath !== "")
      A = this.resourcePath;
    else if (this.path !== "") {
      const C = Om.extractUrlBase(u);
      A = Om.resolveURL(C, this.path);
    } else
      A = Om.extractUrlBase(u);
    this.manager.itemStart(u);
    const S = function(C) {
      p ? p(C) : console.error(C), v.manager.itemError(u), v.manager.itemEnd(u);
    }, E = new go(this.manager);
    E.setPath(this.path), E.setResponseType("arraybuffer"), E.setRequestHeader(this.requestHeader), E.setWithCredentials(this.withCredentials), E.load(
      u,
      function(C) {
        try {
          v.parse(
            C,
            A,
            function(b) {
              r(b), v.manager.itemEnd(u);
            },
            S
          );
        } catch (b) {
          S(b);
        }
      },
      f,
      S
    );
  }
  setDRACOLoader(u) {
    return this.dracoLoader = u, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(u) {
    return this.ktx2Loader = u, this;
  }
  setMeshoptDecoder(u) {
    return this.meshoptDecoder = u, this;
  }
  register(u) {
    return this.pluginCallbacks.indexOf(u) === -1 && this.pluginCallbacks.push(u), this;
  }
  unregister(u) {
    return this.pluginCallbacks.indexOf(u) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(u), 1), this;
  }
  parse(u, r, f, p) {
    let v;
    const A = {}, S = {};
    if (typeof u == "string")
      v = JSON.parse(u);
    else if (u instanceof ArrayBuffer)
      if (Nh(new Uint8Array(u.slice(0, 4))) === GE) {
        try {
          A[Bt.KHR_BINARY_GLTF] = new yB(u);
        } catch (b) {
          p && p(b);
          return;
        }
        v = JSON.parse(A[Bt.KHR_BINARY_GLTF].content);
      } else
        v = JSON.parse(Nh(new Uint8Array(u)));
    else
      v = u;
    if (v.asset === void 0 || v.asset.version[0] < 2) {
      p && p(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const E = new HB(v, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    E.fileLoader.setRequestHeader(this.requestHeader);
    for (let C = 0; C < this.pluginCallbacks.length; C++) {
      const b = this.pluginCallbacks[C](E);
      b.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), S[b.name] = b, A[b.name] = !0;
    }
    if (v.extensionsUsed)
      for (let C = 0; C < v.extensionsUsed.length; ++C) {
        const b = v.extensionsUsed[C], T = v.extensionsRequired || [];
        switch (b) {
          case Bt.KHR_MATERIALS_UNLIT:
            A[b] = new eB();
            break;
          case Bt.KHR_DRACO_MESH_COMPRESSION:
            A[b] = new AB(v, this.dracoLoader);
            break;
          case Bt.KHR_TEXTURE_TRANSFORM:
            A[b] = new EB();
            break;
          case Bt.KHR_MESH_QUANTIZATION:
            A[b] = new gB();
            break;
          default:
            T.indexOf(b) >= 0 && S[b] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + b + '".');
        }
      }
    E.setExtensions(A), E.setPlugins(S), E.parse(f, p);
  }
  parseAsync(u, r) {
    const f = this;
    return new Promise(function(p, v) {
      f.parse(u, r, p, v);
    });
  }
}
function kS() {
  let d = {};
  return {
    get: function(u) {
      return d[u];
    },
    add: function(u, r) {
      d[u] = r;
    },
    remove: function(u) {
      delete d[u];
    },
    removeAll: function() {
      d = {};
    }
  };
}
const Bt = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class $S {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const u = this.parser, r = this.parser.json.nodes || [];
    for (let f = 0, p = r.length; f < p; f++) {
      const v = r[f];
      v.extensions && v.extensions[this.name] && v.extensions[this.name].light !== void 0 && u._addNodeRef(this.cache, v.extensions[this.name].light);
    }
  }
  _loadLight(u) {
    const r = this.parser, f = "light:" + u;
    let p = r.cache.get(f);
    if (p)
      return p;
    const v = r.json, E = ((v.extensions && v.extensions[this.name] || {}).lights || [])[u];
    let C;
    const b = new Cc(16777215);
    E.color !== void 0 && b.setRGB(E.color[0], E.color[1], E.color[2], Bs);
    const T = E.range !== void 0 ? E.range : 0;
    switch (E.type) {
      case "directional":
        C = new h1(b), C.target.position.set(0, 0, -1), C.add(C.target);
        break;
      case "point":
        C = new p1(b), C.distance = T;
        break;
      case "spot":
        C = new m1(b), C.distance = T, E.spot = E.spot || {}, E.spot.innerConeAngle = E.spot.innerConeAngle !== void 0 ? E.spot.innerConeAngle : 0, E.spot.outerConeAngle = E.spot.outerConeAngle !== void 0 ? E.spot.outerConeAngle : Math.PI / 4, C.angle = E.spot.outerConeAngle, C.penumbra = 1 - E.spot.innerConeAngle / E.spot.outerConeAngle, C.target.position.set(0, 0, -1), C.add(C.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + E.type);
    }
    return C.position.set(0, 0, 0), C.decay = 2, Es(C, E), E.intensity !== void 0 && (C.intensity = E.intensity), C.name = r.createUniqueName(E.name || "light_" + u), p = Promise.resolve(C), r.cache.add(f, p), p;
  }
  getDependency(u, r) {
    if (u === "light")
      return this._loadLight(r);
  }
  createNodeAttachment(u) {
    const r = this, f = this.parser, v = f.json.nodes[u], S = (v.extensions && v.extensions[this.name] || {}).light;
    return S === void 0 ? null : this._loadLight(S).then(function(E) {
      return f._getNodeRef(r.cache, S, E);
    });
  }
}
class eB {
  constructor() {
    this.name = Bt.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return bf;
  }
  extendParams(u, r, f) {
    const p = [];
    u.color = new Cc(1, 1, 1), u.opacity = 1;
    const v = r.pbrMetallicRoughness;
    if (v) {
      if (Array.isArray(v.baseColorFactor)) {
        const A = v.baseColorFactor;
        u.color.setRGB(A[0], A[1], A[2], Bs), u.opacity = A[3];
      }
      v.baseColorTexture !== void 0 && p.push(f.assignTexture(u, "map", v.baseColorTexture, Bc));
    }
    return Promise.all(p);
  }
}
class tB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name].emissiveStrength;
    return v !== void 0 && (r.emissiveIntensity = v), Promise.resolve();
  }
}
class aB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    if (A.clearcoatFactor !== void 0 && (r.clearcoat = A.clearcoatFactor), A.clearcoatTexture !== void 0 && v.push(f.assignTexture(r, "clearcoatMap", A.clearcoatTexture)), A.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = A.clearcoatRoughnessFactor), A.clearcoatRoughnessTexture !== void 0 && v.push(f.assignTexture(r, "clearcoatRoughnessMap", A.clearcoatRoughnessTexture)), A.clearcoatNormalTexture !== void 0 && (v.push(f.assignTexture(r, "clearcoatNormalMap", A.clearcoatNormalTexture)), A.clearcoatNormalTexture.scale !== void 0)) {
      const S = A.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new Xl(S, S);
    }
    return Promise.all(v);
  }
}
class nB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name];
    return r.dispersion = v.dispersion !== void 0 ? v.dispersion : 0, Promise.resolve();
  }
}
class lB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.iridescenceFactor !== void 0 && (r.iridescence = A.iridescenceFactor), A.iridescenceTexture !== void 0 && v.push(f.assignTexture(r, "iridescenceMap", A.iridescenceTexture)), A.iridescenceIor !== void 0 && (r.iridescenceIOR = A.iridescenceIor), r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]), A.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = A.iridescenceThicknessMinimum), A.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = A.iridescenceThicknessMaximum), A.iridescenceThicknessTexture !== void 0 && v.push(
      f.assignTexture(r, "iridescenceThicknessMap", A.iridescenceThicknessTexture)
    ), Promise.all(v);
  }
}
class uB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [];
    r.sheenColor = new Cc(0, 0, 0), r.sheenRoughness = 0, r.sheen = 1;
    const A = p.extensions[this.name];
    if (A.sheenColorFactor !== void 0) {
      const S = A.sheenColorFactor;
      r.sheenColor.setRGB(S[0], S[1], S[2], Bs);
    }
    return A.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = A.sheenRoughnessFactor), A.sheenColorTexture !== void 0 && v.push(f.assignTexture(r, "sheenColorMap", A.sheenColorTexture, Bc)), A.sheenRoughnessTexture !== void 0 && v.push(f.assignTexture(r, "sheenRoughnessMap", A.sheenRoughnessTexture)), Promise.all(v);
  }
}
class iB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.transmissionFactor !== void 0 && (r.transmission = A.transmissionFactor), A.transmissionTexture !== void 0 && v.push(f.assignTexture(r, "transmissionMap", A.transmissionTexture)), Promise.all(v);
  }
}
class sB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    r.thickness = A.thicknessFactor !== void 0 ? A.thicknessFactor : 0, A.thicknessTexture !== void 0 && v.push(f.assignTexture(r, "thicknessMap", A.thicknessTexture)), r.attenuationDistance = A.attenuationDistance || 1 / 0;
    const S = A.attenuationColor || [1, 1, 1];
    return r.attenuationColor = new Cc().setRGB(
      S[0],
      S[1],
      S[2],
      Bs
    ), Promise.all(v);
  }
}
class oB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_IOR;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const p = this.parser.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = p.extensions[this.name];
    return r.ior = v.ior !== void 0 ? v.ior : 1.5, Promise.resolve();
  }
}
class cB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    r.specularIntensity = A.specularFactor !== void 0 ? A.specularFactor : 1, A.specularTexture !== void 0 && v.push(f.assignTexture(r, "specularIntensityMap", A.specularTexture));
    const S = A.specularColorFactor || [1, 1, 1];
    return r.specularColor = new Cc().setRGB(S[0], S[1], S[2], Bs), A.specularColorTexture !== void 0 && v.push(
      f.assignTexture(r, "specularColorMap", A.specularColorTexture, Bc)
    ), Promise.all(v);
  }
}
class rB {
  constructor(u) {
    this.parser = u, this.name = Bt.EXT_MATERIALS_BUMP;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return r.bumpScale = A.bumpFactor !== void 0 ? A.bumpFactor : 1, A.bumpTexture !== void 0 && v.push(f.assignTexture(r, "bumpMap", A.bumpTexture)), Promise.all(v);
  }
}
class fB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(u) {
    const f = this.parser.json.materials[u];
    return !f.extensions || !f.extensions[this.name] ? null : Li;
  }
  extendMaterialParams(u, r) {
    const f = this.parser, p = f.json.materials[u];
    if (!p.extensions || !p.extensions[this.name])
      return Promise.resolve();
    const v = [], A = p.extensions[this.name];
    return A.anisotropyStrength !== void 0 && (r.anisotropy = A.anisotropyStrength), A.anisotropyRotation !== void 0 && (r.anisotropyRotation = A.anisotropyRotation), A.anisotropyTexture !== void 0 && v.push(f.assignTexture(r, "anisotropyMap", A.anisotropyTexture)), Promise.all(v);
  }
}
class dB {
  constructor(u) {
    this.parser = u, this.name = Bt.KHR_TEXTURE_BASISU;
  }
  loadTexture(u) {
    const r = this.parser, f = r.json, p = f.textures[u];
    if (!p.extensions || !p.extensions[this.name])
      return null;
    const v = p.extensions[this.name], A = r.options.ktx2Loader;
    if (!A) {
      if (f.extensionsRequired && f.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(u, v.source, A);
  }
}
class mB {
  constructor(u) {
    this.parser = u, this.name = Bt.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(u) {
    const r = this.name, f = this.parser, p = f.json, v = p.textures[u];
    if (!v.extensions || !v.extensions[r])
      return null;
    const A = v.extensions[r], S = p.images[A.source];
    let E = f.textureLoader;
    if (S.uri) {
      const C = f.options.manager.getHandler(S.uri);
      C !== null && (E = C);
    }
    return this.detectSupport().then(function(C) {
      if (C)
        return f.loadTextureImage(u, A.source, E);
      if (p.extensionsRequired && p.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return f.loadTexture(u);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(u) {
      const r = new Image();
      r.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", r.onload = r.onerror = function() {
        u(r.height === 1);
      };
    })), this.isSupported;
  }
}
class pB {
  constructor(u) {
    this.parser = u, this.name = Bt.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(u) {
    const r = this.name, f = this.parser, p = f.json, v = p.textures[u];
    if (!v.extensions || !v.extensions[r])
      return null;
    const A = v.extensions[r], S = p.images[A.source];
    let E = f.textureLoader;
    if (S.uri) {
      const C = f.options.manager.getHandler(S.uri);
      C !== null && (E = C);
    }
    return this.detectSupport().then(function(C) {
      if (C)
        return f.loadTextureImage(u, A.source, E);
      if (p.extensionsRequired && p.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return f.loadTexture(u);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(u) {
      const r = new Image();
      r.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", r.onload = r.onerror = function() {
        u(r.height === 1);
      };
    })), this.isSupported;
  }
}
class hB {
  constructor(u) {
    this.name = Bt.EXT_MESHOPT_COMPRESSION, this.parser = u;
  }
  loadBufferView(u) {
    const r = this.parser.json, f = r.bufferViews[u];
    if (f.extensions && f.extensions[this.name]) {
      const p = f.extensions[this.name], v = this.parser.getDependency("buffer", p.buffer), A = this.parser.options.meshoptDecoder;
      if (!A || !A.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return v.then(function(S) {
        const E = p.byteOffset || 0, C = p.byteLength || 0, b = p.count, T = p.byteStride, M = new Uint8Array(S, E, C);
        return A.decodeGltfBufferAsync ? A.decodeGltfBufferAsync(b, T, M, p.mode, p.filter).then(function(O) {
          return O.buffer;
        }) : A.ready.then(function() {
          const O = new ArrayBuffer(b * T);
          return A.decodeGltfBuffer(
            new Uint8Array(O),
            b,
            T,
            M,
            p.mode,
            p.filter
          ), O;
        });
      });
    } else
      return null;
  }
}
class vB {
  constructor(u) {
    this.name = Bt.EXT_MESH_GPU_INSTANCING, this.parser = u;
  }
  createNodeMesh(u) {
    const r = this.parser.json, f = r.nodes[u];
    if (!f.extensions || !f.extensions[this.name] || f.mesh === void 0)
      return null;
    const p = r.meshes[f.mesh];
    for (const C of p.primitives)
      if (C.mode !== Bu.TRIANGLES && C.mode !== Bu.TRIANGLE_STRIP && C.mode !== Bu.TRIANGLE_FAN && C.mode !== void 0)
        return null;
    const A = f.extensions[this.name].attributes, S = [], E = {};
    for (const C in A)
      S.push(
        this.parser.getDependency("accessor", A[C]).then((b) => (E[C] = b, E[C]))
      );
    return S.length < 1 ? null : (S.push(this.parser.createNodeMesh(u)), Promise.all(S).then((C) => {
      const b = C.pop(), T = b.isGroup ? b.children : [b], M = C[0].count, O = [];
      for (const N of T) {
        const J = new bh(), Z = new Ra(), G = new Th(), U = new Ra(1, 1, 1), $ = new v1(N.geometry, N.material, M);
        for (let F = 0; F < M; F++)
          E.TRANSLATION && Z.fromBufferAttribute(E.TRANSLATION, F), E.ROTATION && G.fromBufferAttribute(E.ROTATION, F), E.SCALE && U.fromBufferAttribute(E.SCALE, F), $.setMatrixAt(F, J.compose(Z, G, U));
        for (const F in E)
          if (F === "_COLOR_0") {
            const oe = E[F];
            $.instanceColor = new y1(oe.array, oe.itemSize, oe.normalized);
          } else F !== "TRANSLATION" && F !== "ROTATION" && F !== "SCALE" && N.geometry.setAttribute(F, E[F]);
        w0.prototype.copy.call($, N), this.parser.assignFinalMaterial($), O.push($);
      }
      return b.isGroup ? (b.clear(), b.add(...O), b) : O[0];
    }));
  }
}
const GE = "glTF", Rm = 12, Y0 = { JSON: 1313821514, BIN: 5130562 };
class yB {
  constructor(u) {
    this.name = Bt.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const r = new DataView(u, 0, Rm);
    if (this.header = {
      magic: Nh(new Uint8Array(u.slice(0, 4))),
      version: r.getUint32(4, !0),
      length: r.getUint32(8, !0)
    }, this.header.magic !== GE)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const f = this.header.length - Rm, p = new DataView(u, Rm);
    let v = 0;
    for (; v < f; ) {
      const A = p.getUint32(v, !0);
      v += 4;
      const S = p.getUint32(v, !0);
      if (v += 4, S === Y0.JSON) {
        const E = new Uint8Array(u, Rm + v, A);
        this.content = Nh(E);
      } else if (S === Y0.BIN) {
        const E = Rm + v;
        this.body = u.slice(E, E + A);
      }
      v += A;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class AB {
  constructor(u, r) {
    if (!r)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Bt.KHR_DRACO_MESH_COMPRESSION, this.json = u, this.dracoLoader = r, this.dracoLoader.preload();
  }
  decodePrimitive(u, r) {
    const f = this.json, p = this.dracoLoader, v = u.extensions[this.name].bufferView, A = u.extensions[this.name].attributes, S = {}, E = {}, C = {};
    for (const b in A) {
      const T = Sy[b] || b.toLowerCase();
      S[T] = A[b];
    }
    for (const b in u.attributes) {
      const T = Sy[b] || b.toLowerCase();
      if (A[b] !== void 0) {
        const M = f.accessors[u.attributes[b]], O = Df[M.componentType];
        C[T] = O.name, E[T] = M.normalized === !0;
      }
    }
    return r.getDependency("bufferView", v).then(function(b) {
      return new Promise(function(T, M) {
        p.decodeDracoFile(
          b,
          function(O) {
            for (const N in O.attributes) {
              const J = O.attributes[N], Z = E[N];
              Z !== void 0 && (J.normalized = Z);
            }
            T(O);
          },
          S,
          C,
          Bs,
          M
        );
      });
    });
  }
}
class EB {
  constructor() {
    this.name = Bt.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(u, r) {
    return (r.texCoord === void 0 || r.texCoord === u.channel) && r.offset === void 0 && r.rotation === void 0 && r.scale === void 0 || (u = u.clone(), r.texCoord !== void 0 && (u.channel = r.texCoord), r.offset !== void 0 && u.offset.fromArray(r.offset), r.rotation !== void 0 && (u.rotation = r.rotation), r.scale !== void 0 && u.repeat.fromArray(r.scale), u.needsUpdate = !0), u;
  }
}
class gB {
  constructor() {
    this.name = Bt.KHR_MESH_QUANTIZATION;
  }
}
class xE extends Q1 {
  constructor(u, r, f, p) {
    super(u, r, f, p);
  }
  copySampleValue_(u) {
    const r = this.resultBuffer, f = this.sampleValues, p = this.valueSize, v = u * p * 3 + p;
    for (let A = 0; A !== p; A++)
      r[A] = f[v + A];
    return r;
  }
  interpolate_(u, r, f, p) {
    const v = this.resultBuffer, A = this.sampleValues, S = this.valueSize, E = S * 2, C = S * 3, b = p - r, T = (f - r) / b, M = T * T, O = M * T, N = u * C, J = N - C, Z = -2 * O + 3 * M, G = O - M, U = 1 - Z, $ = G - M + T;
    for (let F = 0; F !== S; F++) {
      const oe = A[J + F + S], W = A[J + F + E] * b, Te = A[N + F + S], ne = A[N + F] * b;
      v[F] = U * oe + $ * W + Z * Te + G * ne;
    }
    return v;
  }
}
const SB = /* @__PURE__ */ new Th();
class BB extends xE {
  interpolate_(u, r, f, p) {
    const v = super.interpolate_(u, r, f, p);
    return SB.fromArray(v).normalize().toArray(v), v;
  }
}
const Bu = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Df = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, X0 = {
  9728: b1,
  9729: Tu,
  9984: T1,
  9985: C1,
  9986: B1,
  9987: P0
}, V0 = {
  33071: gs,
  33648: M1,
  10497: fy
}, ly = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Sy = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...Oy >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, yo = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, CB = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: $0,
  STEP: J1
}, uy = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function TB(d) {
  return d.DefaultMaterial === void 0 && (d.DefaultMaterial = new W0({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: K1
  })), d.DefaultMaterial;
}
function gc(d, u, r) {
  for (const f in r.extensions)
    d[f] === void 0 && (u.userData.gltfExtensions = u.userData.gltfExtensions || {}, u.userData.gltfExtensions[f] = r.extensions[f]);
}
function Es(d, u) {
  u.extras !== void 0 && (typeof u.extras == "object" ? Object.assign(d.userData, u.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + u.extras));
}
function bB(d, u, r) {
  let f = !1, p = !1, v = !1;
  for (let C = 0, b = u.length; C < b; C++) {
    const T = u[C];
    if (T.POSITION !== void 0 && (f = !0), T.NORMAL !== void 0 && (p = !0), T.COLOR_0 !== void 0 && (v = !0), f && p && v)
      break;
  }
  if (!f && !p && !v)
    return Promise.resolve(d);
  const A = [], S = [], E = [];
  for (let C = 0, b = u.length; C < b; C++) {
    const T = u[C];
    if (f) {
      const M = T.POSITION !== void 0 ? r.getDependency("accessor", T.POSITION) : d.attributes.position;
      A.push(M);
    }
    if (p) {
      const M = T.NORMAL !== void 0 ? r.getDependency("accessor", T.NORMAL) : d.attributes.normal;
      S.push(M);
    }
    if (v) {
      const M = T.COLOR_0 !== void 0 ? r.getDependency("accessor", T.COLOR_0) : d.attributes.color;
      E.push(M);
    }
  }
  return Promise.all([
    Promise.all(A),
    Promise.all(S),
    Promise.all(E)
  ]).then(function(C) {
    const b = C[0], T = C[1], M = C[2];
    return f && (d.morphAttributes.position = b), p && (d.morphAttributes.normal = T), v && (d.morphAttributes.color = M), d.morphTargetsRelative = !0, d;
  });
}
function MB(d, u) {
  if (d.updateMorphTargets(), u.weights !== void 0)
    for (let r = 0, f = u.weights.length; r < f; r++)
      d.morphTargetInfluences[r] = u.weights[r];
  if (u.extras && Array.isArray(u.extras.targetNames)) {
    const r = u.extras.targetNames;
    if (d.morphTargetInfluences.length === r.length) {
      d.morphTargetDictionary = {};
      for (let f = 0, p = r.length; f < p; f++)
        d.morphTargetDictionary[r[f]] = f;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function RB(d) {
  let u;
  const r = d.extensions && d.extensions[Bt.KHR_DRACO_MESH_COMPRESSION];
  if (r ? u = "draco:" + r.bufferView + ":" + r.indices + ":" + iy(r.attributes) : u = d.indices + ":" + iy(d.attributes) + ":" + d.mode, d.targets !== void 0)
    for (let f = 0, p = d.targets.length; f < p; f++)
      u += ":" + iy(d.targets[f]);
  return u;
}
function iy(d) {
  let u = "";
  const r = Object.keys(d).sort();
  for (let f = 0, p = r.length; f < p; f++)
    u += r[f] + ":" + d[r[f]] + ";";
  return u;
}
function By(d) {
  switch (d) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function DB(d) {
  return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const _B = /* @__PURE__ */ new bh();
class HB {
  constructor(u = {}, r = {}) {
    this.json = u, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new kS(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let f = !1, p = !1, v = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (f = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, p = navigator.userAgent.indexOf("Firefox") > -1, v = p ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || f || p && v < 98 ? this.textureLoader = new A1(this.options.manager) : this.textureLoader = new E1(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new go(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(u) {
    this.extensions = u;
  }
  setPlugins(u) {
    this.plugins = u;
  }
  parse(u, r) {
    const f = this, p = this.json, v = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(A) {
      return A._markDefs && A._markDefs();
    }), Promise.all(
      this._invokeAll(function(A) {
        return A.beforeRoot && A.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        f.getDependencies("scene"),
        f.getDependencies("animation"),
        f.getDependencies("camera")
      ]);
    }).then(function(A) {
      const S = {
        scene: A[0][p.scene || 0],
        scenes: A[0],
        animations: A[1],
        cameras: A[2],
        asset: p.asset,
        parser: f,
        userData: {}
      };
      return gc(v, S, p), Es(S, p), Promise.all(
        f._invokeAll(function(E) {
          return E.afterRoot && E.afterRoot(S);
        })
      ).then(function() {
        for (const E of S.scenes)
          E.updateMatrixWorld();
        u(S);
      });
    }).catch(r);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const u = this.json.nodes || [], r = this.json.skins || [], f = this.json.meshes || [];
    for (let p = 0, v = r.length; p < v; p++) {
      const A = r[p].joints;
      for (let S = 0, E = A.length; S < E; S++)
        u[A[S]].isBone = !0;
    }
    for (let p = 0, v = u.length; p < v; p++) {
      const A = u[p];
      A.mesh !== void 0 && (this._addNodeRef(this.meshCache, A.mesh), A.skin !== void 0 && (f[A.mesh].isSkinnedMesh = !0)), A.camera !== void 0 && this._addNodeRef(this.cameraCache, A.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(u, r) {
    r !== void 0 && (u.refs[r] === void 0 && (u.refs[r] = u.uses[r] = 0), u.refs[r]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(u, r, f) {
    if (u.refs[r] <= 1)
      return f;
    const p = f.clone(), v = (A, S) => {
      const E = this.associations.get(A);
      E != null && this.associations.set(S, E);
      for (const [C, b] of A.children.entries())
        v(b, S.children[C]);
    };
    return v(f, p), p.name += "_instance_" + u.uses[r]++, p;
  }
  _invokeOne(u) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let f = 0; f < r.length; f++) {
      const p = u(r[f]);
      if (p)
        return p;
    }
    return null;
  }
  _invokeAll(u) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const f = [];
    for (let p = 0; p < r.length; p++) {
      const v = u(r[p]);
      v && f.push(v);
    }
    return f;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(u, r) {
    const f = u + ":" + r;
    let p = this.cache.get(f);
    if (!p) {
      switch (u) {
        case "scene":
          p = this.loadScene(r);
          break;
        case "node":
          p = this._invokeOne(function(v) {
            return v.loadNode && v.loadNode(r);
          });
          break;
        case "mesh":
          p = this._invokeOne(function(v) {
            return v.loadMesh && v.loadMesh(r);
          });
          break;
        case "accessor":
          p = this.loadAccessor(r);
          break;
        case "bufferView":
          p = this._invokeOne(function(v) {
            return v.loadBufferView && v.loadBufferView(r);
          });
          break;
        case "buffer":
          p = this.loadBuffer(r);
          break;
        case "material":
          p = this._invokeOne(function(v) {
            return v.loadMaterial && v.loadMaterial(r);
          });
          break;
        case "texture":
          p = this._invokeOne(function(v) {
            return v.loadTexture && v.loadTexture(r);
          });
          break;
        case "skin":
          p = this.loadSkin(r);
          break;
        case "animation":
          p = this._invokeOne(function(v) {
            return v.loadAnimation && v.loadAnimation(r);
          });
          break;
        case "camera":
          p = this.loadCamera(r);
          break;
        default:
          if (p = this._invokeOne(function(v) {
            return v != this && v.getDependency && v.getDependency(u, r);
          }), !p)
            throw new Error("Unknown type: " + u);
          break;
      }
      this.cache.add(f, p);
    }
    return p;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(u) {
    let r = this.cache.get(u);
    if (!r) {
      const f = this, p = this.json[u + (u === "mesh" ? "es" : "s")] || [];
      r = Promise.all(
        p.map(function(v, A) {
          return f.getDependency(u, A);
        })
      ), this.cache.add(u, r);
    }
    return r;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(u) {
    const r = this.json.buffers[u], f = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && u === 0)
      return Promise.resolve(this.extensions[Bt.KHR_BINARY_GLTF].body);
    const p = this.options;
    return new Promise(function(v, A) {
      f.load(Om.resolveURL(r.uri, p.path), v, void 0, function() {
        A(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(u) {
    const r = this.json.bufferViews[u];
    return this.getDependency("buffer", r.buffer).then(function(f) {
      const p = r.byteLength || 0, v = r.byteOffset || 0;
      return f.slice(v, v + p);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(u) {
    const r = this, f = this.json, p = this.json.accessors[u];
    if (p.bufferView === void 0 && p.sparse === void 0) {
      const A = ly[p.type], S = Df[p.componentType], E = p.normalized === !0, C = new S(p.count * A);
      return Promise.resolve(new Nm(C, A, E));
    }
    const v = [];
    return p.bufferView !== void 0 ? v.push(this.getDependency("bufferView", p.bufferView)) : v.push(null), p.sparse !== void 0 && (v.push(this.getDependency("bufferView", p.sparse.indices.bufferView)), v.push(this.getDependency("bufferView", p.sparse.values.bufferView))), Promise.all(v).then(function(A) {
      const S = A[0], E = ly[p.type], C = Df[p.componentType], b = C.BYTES_PER_ELEMENT, T = b * E, M = p.byteOffset || 0, O = p.bufferView !== void 0 ? f.bufferViews[p.bufferView].byteStride : void 0, N = p.normalized === !0;
      let J, Z;
      if (O && O !== T) {
        const G = Math.floor(M / O), U = "InterleavedBuffer:" + p.bufferView + ":" + p.componentType + ":" + G + ":" + p.count;
        let $ = r.cache.get(U);
        $ || (J = new C(S, G * O, p.count * O / b), $ = new g1(J, O / b), r.cache.add(U, $)), Z = new S1(
          $,
          E,
          M % O / b,
          N
        );
      } else
        S === null ? J = new C(p.count * E) : J = new C(S, M, p.count * E), Z = new Nm(J, E, N);
      if (p.sparse !== void 0) {
        const G = ly.SCALAR, U = Df[p.sparse.indices.componentType], $ = p.sparse.indices.byteOffset || 0, F = p.sparse.values.byteOffset || 0, oe = new U(
          A[1],
          $,
          p.sparse.count * G
        ), W = new C(A[2], F, p.sparse.count * E);
        S !== null && (Z = new Nm(
          Z.array.slice(),
          Z.itemSize,
          Z.normalized
        ));
        for (let Te = 0, ne = oe.length; Te < ne; Te++) {
          const ie = oe[Te];
          if (Z.setX(ie, W[Te * E]), E >= 2 && Z.setY(ie, W[Te * E + 1]), E >= 3 && Z.setZ(ie, W[Te * E + 2]), E >= 4 && Z.setW(ie, W[Te * E + 3]), E >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return Z;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(u) {
    const r = this.json, f = this.options, v = r.textures[u].source, A = r.images[v];
    let S = this.textureLoader;
    if (A.uri) {
      const E = f.manager.getHandler(A.uri);
      E !== null && (S = E);
    }
    return this.loadTextureImage(u, v, S);
  }
  loadTextureImage(u, r, f) {
    const p = this, v = this.json, A = v.textures[u], S = v.images[r], E = (S.uri || S.bufferView) + ":" + A.sampler;
    if (this.textureCache[E])
      return this.textureCache[E];
    const C = this.loadImageSource(r, f).then(function(b) {
      b.flipY = !1, b.name = A.name || S.name || "", b.name === "" && typeof S.uri == "string" && S.uri.startsWith("data:image/") === !1 && (b.name = S.uri);
      const M = (v.samplers || {})[A.sampler] || {};
      return b.magFilter = X0[M.magFilter] || Tu, b.minFilter = X0[M.minFilter] || P0, b.wrapS = V0[M.wrapS] || fy, b.wrapT = V0[M.wrapT] || fy, p.associations.set(b, { textures: u }), b;
    }).catch(function() {
      return null;
    });
    return this.textureCache[E] = C, C;
  }
  loadImageSource(u, r) {
    const f = this, p = this.json, v = this.options;
    if (this.sourceCache[u] !== void 0)
      return this.sourceCache[u].then((T) => T.clone());
    const A = p.images[u], S = self.URL || self.webkitURL;
    let E = A.uri || "", C = !1;
    if (A.bufferView !== void 0)
      E = f.getDependency("bufferView", A.bufferView).then(function(T) {
        C = !0;
        const M = new Blob([T], { type: A.mimeType });
        return E = S.createObjectURL(M), E;
      });
    else if (A.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + u + " is missing URI and bufferView");
    const b = Promise.resolve(E).then(function(T) {
      return new Promise(function(M, O) {
        let N = M;
        r.isImageBitmapLoader === !0 && (N = function(J) {
          const Z = new Ao(J);
          Z.needsUpdate = !0, M(Z);
        }), r.load(Om.resolveURL(T, v.path), N, void 0, O);
      });
    }).then(function(T) {
      return C === !0 && S.revokeObjectURL(E), Es(T, A), T.userData.mimeType = A.mimeType || DB(A.uri), T;
    }).catch(function(T) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", E), T;
    });
    return this.sourceCache[u] = b, b;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(u, r, f, p) {
    const v = this;
    return this.getDependency("texture", f.index).then(function(A) {
      if (!A)
        return null;
      if (f.texCoord !== void 0 && f.texCoord > 0 && (A = A.clone(), A.channel = f.texCoord), v.extensions[Bt.KHR_TEXTURE_TRANSFORM]) {
        const S = f.extensions !== void 0 ? f.extensions[Bt.KHR_TEXTURE_TRANSFORM] : void 0;
        if (S) {
          const E = v.associations.get(A);
          A = v.extensions[Bt.KHR_TEXTURE_TRANSFORM].extendTexture(A, S), v.associations.set(A, E);
        }
      }
      return p !== void 0 && (typeof p == "number" && (p = p === Q0 ? Bc : Bs), "colorSpace" in A ? A.colorSpace = p : A.encoding = p === Bc ? Q0 : WS), u[r] = A, A;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(u) {
    const r = u.geometry;
    let f = u.material;
    const p = r.attributes.tangent === void 0, v = r.attributes.color !== void 0, A = r.attributes.normal === void 0;
    if (u.isPoints) {
      const S = "PointsMaterial:" + f.uuid;
      let E = this.cache.get(S);
      E || (E = new R1(), jv.prototype.copy.call(E, f), E.color.copy(f.color), E.map = f.map, E.sizeAttenuation = !1, this.cache.add(S, E)), f = E;
    } else if (u.isLine) {
      const S = "LineBasicMaterial:" + f.uuid;
      let E = this.cache.get(S);
      E || (E = new D1(), jv.prototype.copy.call(E, f), E.color.copy(f.color), E.map = f.map, this.cache.add(S, E)), f = E;
    }
    if (p || v || A) {
      let S = "ClonedMaterial:" + f.uuid + ":";
      p && (S += "derivative-tangents:"), v && (S += "vertex-colors:"), A && (S += "flat-shading:");
      let E = this.cache.get(S);
      E || (E = f.clone(), v && (E.vertexColors = !0), A && (E.flatShading = !0), p && (E.normalScale && (E.normalScale.y *= -1), E.clearcoatNormalScale && (E.clearcoatNormalScale.y *= -1)), this.cache.add(S, E), this.associations.set(E, this.associations.get(f))), f = E;
    }
    u.material = f;
  }
  getMaterialType() {
    return W0;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(u) {
    const r = this, f = this.json, p = this.extensions, v = f.materials[u];
    let A;
    const S = {}, E = v.extensions || {}, C = [];
    if (E[Bt.KHR_MATERIALS_UNLIT]) {
      const T = p[Bt.KHR_MATERIALS_UNLIT];
      A = T.getMaterialType(), C.push(T.extendParams(S, v, r));
    } else {
      const T = v.pbrMetallicRoughness || {};
      if (S.color = new Cc(1, 1, 1), S.opacity = 1, Array.isArray(T.baseColorFactor)) {
        const M = T.baseColorFactor;
        S.color.setRGB(M[0], M[1], M[2], Bs), S.opacity = M[3];
      }
      T.baseColorTexture !== void 0 && C.push(r.assignTexture(S, "map", T.baseColorTexture, Bc)), S.metalness = T.metallicFactor !== void 0 ? T.metallicFactor : 1, S.roughness = T.roughnessFactor !== void 0 ? T.roughnessFactor : 1, T.metallicRoughnessTexture !== void 0 && (C.push(r.assignTexture(S, "metalnessMap", T.metallicRoughnessTexture)), C.push(r.assignTexture(S, "roughnessMap", T.metallicRoughnessTexture))), A = this._invokeOne(function(M) {
        return M.getMaterialType && M.getMaterialType(u);
      }), C.push(
        Promise.all(
          this._invokeAll(function(M) {
            return M.extendMaterialParams && M.extendMaterialParams(u, S);
          })
        )
      );
    }
    v.doubleSided === !0 && (S.side = I0);
    const b = v.alphaMode || uy.OPAQUE;
    if (b === uy.BLEND ? (S.transparent = !0, S.depthWrite = !1) : (S.transparent = !1, b === uy.MASK && (S.alphaTest = v.alphaCutoff !== void 0 ? v.alphaCutoff : 0.5)), v.normalTexture !== void 0 && A !== bf && (C.push(r.assignTexture(S, "normalMap", v.normalTexture)), S.normalScale = new Xl(1, 1), v.normalTexture.scale !== void 0)) {
      const T = v.normalTexture.scale;
      S.normalScale.set(T, T);
    }
    if (v.occlusionTexture !== void 0 && A !== bf && (C.push(r.assignTexture(S, "aoMap", v.occlusionTexture)), v.occlusionTexture.strength !== void 0 && (S.aoMapIntensity = v.occlusionTexture.strength)), v.emissiveFactor !== void 0 && A !== bf) {
      const T = v.emissiveFactor;
      S.emissive = new Cc().setRGB(
        T[0],
        T[1],
        T[2],
        Bs
      );
    }
    return v.emissiveTexture !== void 0 && A !== bf && C.push(r.assignTexture(S, "emissiveMap", v.emissiveTexture, Bc)), Promise.all(C).then(function() {
      const T = new A(S);
      return v.name && (T.name = v.name), Es(T, v), r.associations.set(T, { materials: u }), v.extensions && gc(p, T, v), T;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(u) {
    const r = _1.sanitizeNodeName(u || "");
    return r in this.nodeNamesUsed ? r + "_" + ++this.nodeNamesUsed[r] : (this.nodeNamesUsed[r] = 0, r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(u) {
    const r = this, f = this.extensions, p = this.primitiveCache;
    function v(S) {
      return f[Bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(S, r).then(function(E) {
        return F0(E, S, r);
      });
    }
    const A = [];
    for (let S = 0, E = u.length; S < E; S++) {
      const C = u[S], b = RB(C), T = p[b];
      if (T)
        A.push(T.promise);
      else {
        let M;
        C.extensions && C.extensions[Bt.KHR_DRACO_MESH_COMPRESSION] ? M = v(C) : M = F0(new k0(), C, r), p[b] = { primitive: C, promise: M }, A.push(M);
      }
    }
    return Promise.all(A);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(u) {
    const r = this, f = this.json, p = this.extensions, v = f.meshes[u], A = v.primitives, S = [];
    for (let E = 0, C = A.length; E < C; E++) {
      const b = A[E].material === void 0 ? TB(this.cache) : this.getDependency("material", A[E].material);
      S.push(b);
    }
    return S.push(r.loadGeometries(A)), Promise.all(S).then(function(E) {
      const C = E.slice(0, E.length - 1), b = E[E.length - 1], T = [];
      for (let O = 0, N = b.length; O < N; O++) {
        const J = b[O], Z = A[O];
        let G;
        const U = C[O];
        if (Z.mode === Bu.TRIANGLES || Z.mode === Bu.TRIANGLE_STRIP || Z.mode === Bu.TRIANGLE_FAN || Z.mode === void 0)
          G = v.isSkinnedMesh === !0 ? new H1(J, U) : new Uh(J, U), G.isSkinnedMesh === !0 && G.normalizeSkinWeights(), Z.mode === Bu.TRIANGLE_STRIP ? G.geometry = L0(G.geometry, q0) : Z.mode === Bu.TRIANGLE_FAN && (G.geometry = L0(G.geometry, ry));
        else if (Z.mode === Bu.LINES)
          G = new O1(J, U);
        else if (Z.mode === Bu.LINE_STRIP)
          G = new N1(J, U);
        else if (Z.mode === Bu.LINE_LOOP)
          G = new U1(J, U);
        else if (Z.mode === Bu.POINTS)
          G = new G1(J, U);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + Z.mode);
        Object.keys(G.geometry.morphAttributes).length > 0 && MB(G, v), G.name = r.createUniqueName(v.name || "mesh_" + u), Es(G, v), Z.extensions && gc(p, G, Z), r.assignFinalMaterial(G), T.push(G);
      }
      for (let O = 0, N = T.length; O < N; O++)
        r.associations.set(T[O], {
          meshes: u,
          primitives: O
        });
      if (T.length === 1)
        return v.extensions && gc(p, T[0], v), T[0];
      const M = new Lv();
      v.extensions && gc(p, M, v), r.associations.set(M, { meshes: u });
      for (let O = 0, N = T.length; O < N; O++)
        M.add(T[O]);
      return M;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(u) {
    let r;
    const f = this.json.cameras[u], p = f[f.type];
    if (!p) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return f.type === "perspective" ? r = new Sh(
      x1.radToDeg(p.yfov),
      p.aspectRatio || 1,
      p.znear || 1,
      p.zfar || 2e6
    ) : f.type === "orthographic" && (r = new Hm(-p.xmag, p.xmag, p.ymag, -p.ymag, p.znear, p.zfar)), f.name && (r.name = this.createUniqueName(f.name)), Es(r, f), Promise.resolve(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(u) {
    const r = this.json.skins[u], f = [];
    for (let p = 0, v = r.joints.length; p < v; p++)
      f.push(this._loadNodeShallow(r.joints[p]));
    return r.inverseBindMatrices !== void 0 ? f.push(this.getDependency("accessor", r.inverseBindMatrices)) : f.push(null), Promise.all(f).then(function(p) {
      const v = p.pop(), A = p, S = [], E = [];
      for (let C = 0, b = A.length; C < b; C++) {
        const T = A[C];
        if (T) {
          S.push(T);
          const M = new bh();
          v !== null && M.fromArray(v.array, C * 16), E.push(M);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[C]);
      }
      return new z1(S, E);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(u) {
    const r = this.json, f = this, p = r.animations[u], v = p.name ? p.name : "animation_" + u, A = [], S = [], E = [], C = [], b = [];
    for (let T = 0, M = p.channels.length; T < M; T++) {
      const O = p.channels[T], N = p.samplers[O.sampler], J = O.target, Z = J.node, G = p.parameters !== void 0 ? p.parameters[N.input] : N.input, U = p.parameters !== void 0 ? p.parameters[N.output] : N.output;
      J.node !== void 0 && (A.push(this.getDependency("node", Z)), S.push(this.getDependency("accessor", G)), E.push(this.getDependency("accessor", U)), C.push(N), b.push(J));
    }
    return Promise.all([
      Promise.all(A),
      Promise.all(S),
      Promise.all(E),
      Promise.all(C),
      Promise.all(b)
    ]).then(function(T) {
      const M = T[0], O = T[1], N = T[2], J = T[3], Z = T[4], G = [];
      for (let U = 0, $ = M.length; U < $; U++) {
        const F = M[U], oe = O[U], W = N[U], Te = J[U], ne = Z[U];
        if (F === void 0)
          continue;
        F.updateMatrix && F.updateMatrix();
        const ie = f._createAnimationTracks(F, oe, W, Te, ne);
        if (ie)
          for (let me = 0; me < ie.length; me++)
            G.push(ie[me]);
      }
      return new j1(v, void 0, G);
    });
  }
  createNodeMesh(u) {
    const r = this.json, f = this, p = r.nodes[u];
    return p.mesh === void 0 ? null : f.getDependency("mesh", p.mesh).then(function(v) {
      const A = f._getNodeRef(f.meshCache, p.mesh, v);
      return p.weights !== void 0 && A.traverse(function(S) {
        if (S.isMesh)
          for (let E = 0, C = p.weights.length; E < C; E++)
            S.morphTargetInfluences[E] = p.weights[E];
      }), A;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(u) {
    const r = this.json, f = this, p = r.nodes[u], v = f._loadNodeShallow(u), A = [], S = p.children || [];
    for (let C = 0, b = S.length; C < b; C++)
      A.push(f.getDependency("node", S[C]));
    const E = p.skin === void 0 ? Promise.resolve(null) : f.getDependency("skin", p.skin);
    return Promise.all([v, Promise.all(A), E]).then(function(C) {
      const b = C[0], T = C[1], M = C[2];
      M !== null && b.traverse(function(O) {
        O.isSkinnedMesh && O.bind(M, _B);
      });
      for (let O = 0, N = T.length; O < N; O++)
        b.add(T[O]);
      return b;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(u) {
    const r = this.json, f = this.extensions, p = this;
    if (this.nodeCache[u] !== void 0)
      return this.nodeCache[u];
    const v = r.nodes[u], A = v.name ? p.createUniqueName(v.name) : "", S = [], E = p._invokeOne(function(C) {
      return C.createNodeMesh && C.createNodeMesh(u);
    });
    return E && S.push(E), v.camera !== void 0 && S.push(
      p.getDependency("camera", v.camera).then(function(C) {
        return p._getNodeRef(p.cameraCache, v.camera, C);
      })
    ), p._invokeAll(function(C) {
      return C.createNodeAttachment && C.createNodeAttachment(u);
    }).forEach(function(C) {
      S.push(C);
    }), this.nodeCache[u] = Promise.all(S).then(function(C) {
      let b;
      if (v.isBone === !0 ? b = new L1() : C.length > 1 ? b = new Lv() : C.length === 1 ? b = C[0] : b = new w0(), b !== C[0])
        for (let T = 0, M = C.length; T < M; T++)
          b.add(C[T]);
      if (v.name && (b.userData.name = v.name, b.name = A), Es(b, v), v.extensions && gc(f, b, v), v.matrix !== void 0) {
        const T = new bh();
        T.fromArray(v.matrix), b.applyMatrix4(T);
      } else
        v.translation !== void 0 && b.position.fromArray(v.translation), v.rotation !== void 0 && b.quaternion.fromArray(v.rotation), v.scale !== void 0 && b.scale.fromArray(v.scale);
      return p.associations.has(b) || p.associations.set(b, {}), p.associations.get(b).nodes = u, b;
    }), this.nodeCache[u];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(u) {
    const r = this.extensions, f = this.json.scenes[u], p = this, v = new Lv();
    f.name && (v.name = p.createUniqueName(f.name)), Es(v, f), f.extensions && gc(r, v, f);
    const A = f.nodes || [], S = [];
    for (let E = 0, C = A.length; E < C; E++)
      S.push(p.getDependency("node", A[E]));
    return Promise.all(S).then(function(E) {
      for (let b = 0, T = E.length; b < T; b++)
        v.add(E[b]);
      const C = (b) => {
        const T = /* @__PURE__ */ new Map();
        for (const [M, O] of p.associations)
          (M instanceof jv || M instanceof Ao) && T.set(M, O);
        return b.traverse((M) => {
          const O = p.associations.get(M);
          O != null && T.set(M, O);
        }), T;
      };
      return p.associations = C(v), v;
    });
  }
  _createAnimationTracks(u, r, f, p, v) {
    const A = [], S = u.name ? u.name : u.uuid, E = [];
    yo[v.path] === yo.weights ? u.traverse(function(M) {
      M.morphTargetInfluences && E.push(M.name ? M.name : M.uuid);
    }) : E.push(S);
    let C;
    switch (yo[v.path]) {
      case yo.weights:
        C = a0;
        break;
      case yo.rotation:
        C = n0;
        break;
      case yo.position:
      case yo.scale:
        C = t0;
        break;
      default:
        switch (f.itemSize) {
          case 1:
            C = a0;
            break;
          case 2:
          case 3:
          default:
            C = t0;
            break;
        }
        break;
    }
    const b = p.interpolation !== void 0 ? CB[p.interpolation] : $0, T = this._getArrayFromAccessor(f);
    for (let M = 0, O = E.length; M < O; M++) {
      const N = new C(
        E[M] + "." + yo[v.path],
        r.array,
        T,
        b
      );
      p.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(N), A.push(N);
    }
    return A;
  }
  _getArrayFromAccessor(u) {
    let r = u.array;
    if (u.normalized) {
      const f = By(r.constructor), p = new Float32Array(r.length);
      for (let v = 0, A = r.length; v < A; v++)
        p[v] = r[v] * f;
      r = p;
    }
    return r;
  }
  _createCubicSplineTrackInterpolant(u) {
    u.createInterpolant = function(f) {
      const p = this instanceof n0 ? BB : xE;
      return new p(this.times, this.values, this.getValueSize() / 3, f);
    }, u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function OB(d, u, r) {
  const f = u.attributes, p = new Y1();
  if (f.POSITION !== void 0) {
    const S = r.json.accessors[f.POSITION], E = S.min, C = S.max;
    if (E !== void 0 && C !== void 0) {
      if (p.set(new Ra(E[0], E[1], E[2]), new Ra(C[0], C[1], C[2])), S.normalized) {
        const b = By(Df[S.componentType]);
        p.min.multiplyScalar(b), p.max.multiplyScalar(b);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const v = u.targets;
  if (v !== void 0) {
    const S = new Ra(), E = new Ra();
    for (let C = 0, b = v.length; C < b; C++) {
      const T = v[C];
      if (T.POSITION !== void 0) {
        const M = r.json.accessors[T.POSITION], O = M.min, N = M.max;
        if (O !== void 0 && N !== void 0) {
          if (E.setX(Math.max(Math.abs(O[0]), Math.abs(N[0]))), E.setY(Math.max(Math.abs(O[1]), Math.abs(N[1]))), E.setZ(Math.max(Math.abs(O[2]), Math.abs(N[2]))), M.normalized) {
            const J = By(Df[M.componentType]);
            E.multiplyScalar(J);
          }
          S.max(E);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    p.expandByVector(S);
  }
  d.boundingBox = p;
  const A = new X1();
  p.getCenter(A.center), A.radius = p.min.distanceTo(p.max) / 2, d.boundingSphere = A;
}
function F0(d, u, r) {
  const f = u.attributes, p = [];
  function v(A, S) {
    return r.getDependency("accessor", A).then(function(E) {
      d.setAttribute(S, E);
    });
  }
  for (const A in f) {
    const S = Sy[A] || A.toLowerCase();
    S in d.attributes || p.push(v(f[A], S));
  }
  if (u.indices !== void 0 && !d.index) {
    const A = r.getDependency("accessor", u.indices).then(function(S) {
      d.setIndex(S);
    });
    p.push(A);
  }
  return Es(d, u), OB(d, u, r), Promise.all(p).then(function() {
    return u.targets !== void 0 ? bB(d, u.targets, r) : d;
  });
}
const NB = {
  uniforms: {
    tDiffuse: { value: null },
    h: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
  )
}, UB = {
  uniforms: {
    tDiffuse: { value: null },
    v: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `
  ),
  fragmentShader: (
    /* glsl */
    `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
  )
};
class GB extends eE {
  constructor(u) {
    super(u), this.type = bu;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(u) {
    const A = function(ne, ie) {
      switch (ne) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (ie || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (ie || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (ie || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (ie || ""));
      }
    }, T = function(ne, ie, me) {
      ie = ie || 1024;
      let Xe = ne.pos, te = -1, Ae = 0, Ve = "", D = String.fromCharCode.apply(null, new Uint16Array(ne.subarray(Xe, Xe + 128)));
      for (; 0 > (te = D.indexOf(`
`)) && Ae < ie && Xe < ne.byteLength; )
        Ve += D, Ae += D.length, Xe += 128, D += String.fromCharCode.apply(null, new Uint16Array(ne.subarray(Xe, Xe + 128)));
      return -1 < te ? (ne.pos += Ae + te + 1, Ve + D.slice(0, te)) : !1;
    }, M = function(ne) {
      const ie = /^#\?(\S+)/, me = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, De = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, Xe = /^\s*FORMAT=(\S+)\s*$/, te = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, Ae = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let Ve, D;
      for ((ne.pos >= ne.byteLength || !(Ve = T(ne))) && A(1, "no header found"), (D = Ve.match(ie)) || A(3, "bad initial token"), Ae.valid |= 1, Ae.programtype = D[1], Ae.string += Ve + `
`; Ve = T(ne), Ve !== !1; ) {
        if (Ae.string += Ve + `
`, Ve.charAt(0) === "#") {
          Ae.comments += Ve + `
`;
          continue;
        }
        if ((D = Ve.match(me)) && (Ae.gamma = parseFloat(D[1])), (D = Ve.match(De)) && (Ae.exposure = parseFloat(D[1])), (D = Ve.match(Xe)) && (Ae.valid |= 2, Ae.format = D[1]), (D = Ve.match(te)) && (Ae.valid |= 4, Ae.height = parseInt(D[1], 10), Ae.width = parseInt(D[2], 10)), Ae.valid & 2 && Ae.valid & 4)
          break;
      }
      return Ae.valid & 2 || A(3, "missing format specifier"), Ae.valid & 4 || A(3, "missing image size specifier"), Ae;
    }, O = function(ne, ie, me) {
      const De = ie;
      if (
        // run length encoding is not allowed so read flat
        De < 8 || De > 32767 || // this file is not run length encoded
        ne[0] !== 2 || ne[1] !== 2 || ne[2] & 128
      )
        return new Uint8Array(ne);
      De !== (ne[2] << 8 | ne[3]) && A(3, "wrong scanline width");
      const Xe = new Uint8Array(4 * ie * me);
      Xe.length || A(4, "unable to allocate buffer space");
      let te = 0, Ae = 0;
      const Ve = 4 * De, D = new Uint8Array(4), Y = new Uint8Array(Ve);
      let X = me;
      for (; X > 0 && Ae < ne.byteLength; ) {
        Ae + 4 > ne.byteLength && A(1), D[0] = ne[Ae++], D[1] = ne[Ae++], D[2] = ne[Ae++], D[3] = ne[Ae++], (D[0] != 2 || D[1] != 2 || (D[2] << 8 | D[3]) != De) && A(3, "bad rgbe scanline format");
        let fe = 0, x;
        for (; fe < Ve && Ae < ne.byteLength; ) {
          x = ne[Ae++];
          const pe = x > 128;
          if (pe && (x -= 128), (x === 0 || fe + x > Ve) && A(3, "bad scanline data"), pe) {
            const Qe = ne[Ae++];
            for (let Ge = 0; Ge < x; Ge++)
              Y[fe++] = Qe;
          } else
            Y.set(ne.subarray(Ae, Ae + x), fe), fe += x, Ae += x;
        }
        const de = De;
        for (let pe = 0; pe < de; pe++) {
          let Qe = 0;
          Xe[te] = Y[pe + Qe], Qe += De, Xe[te + 1] = Y[pe + Qe], Qe += De, Xe[te + 2] = Y[pe + Qe], Qe += De, Xe[te + 3] = Y[pe + Qe], te += 4;
        }
        X--;
      }
      return Xe;
    }, N = function(ne, ie, me, De) {
      const Xe = ne[ie + 3], te = Math.pow(2, Xe - 128) / 255;
      me[De + 0] = ne[ie + 0] * te, me[De + 1] = ne[ie + 1] * te, me[De + 2] = ne[ie + 2] * te, me[De + 3] = 1;
    }, J = function(ne, ie, me, De) {
      const Xe = ne[ie + 3], te = Math.pow(2, Xe - 128) / 255;
      me[De + 0] = Mf.toHalfFloat(Math.min(ne[ie + 0] * te, 65504)), me[De + 1] = Mf.toHalfFloat(Math.min(ne[ie + 1] * te, 65504)), me[De + 2] = Mf.toHalfFloat(Math.min(ne[ie + 2] * te, 65504)), me[De + 3] = Mf.toHalfFloat(1);
    }, Z = new Uint8Array(u);
    Z.pos = 0;
    const G = M(Z), U = G.width, $ = G.height, F = O(Z.subarray(Z.pos), U, $);
    let oe, W, Te;
    switch (this.type) {
      case Ss:
        Te = F.length / 4;
        const ne = new Float32Array(Te * 4);
        for (let me = 0; me < Te; me++)
          N(F, me * 4, ne, me * 4);
        oe = ne, W = Ss;
        break;
      case bu:
        Te = F.length / 4;
        const ie = new Uint16Array(Te * 4);
        for (let me = 0; me < Te; me++)
          J(F, me * 4, ie, me * 4);
        oe = ie, W = bu;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: U,
      height: $,
      data: oe,
      header: G.string,
      gamma: G.gamma,
      exposure: G.exposure,
      type: W
    };
  }
  setDataType(u) {
    return this.type = u, this;
  }
  load(u, r, f, p) {
    function v(A, S) {
      switch (A.type) {
        case Ss:
        case bu:
          "colorSpace" in A ? A.colorSpace = "srgb-linear" : A.encoding = 3e3, A.minFilter = Tu, A.magFilter = Tu, A.generateMipmaps = !1, A.flipY = !0;
          break;
      }
      r && r(A, S);
    }
    return super.load(u, v, f, p);
  }
}
const Dm = Oy >= 152;
class xB extends eE {
  constructor(u) {
    super(u), this.type = bu;
  }
  parse(u) {
    const ie = Math.pow(2.7182818, 2.2);
    function me(B, H) {
      for (var j = 0, ee = 0; ee < 65536; ++ee)
        (ee == 0 || B[ee >> 3] & 1 << (ee & 7)) && (H[j++] = ee);
      for (var re = j - 1; j < 65536; )
        H[j++] = 0;
      return re;
    }
    function De(B) {
      for (var H = 0; H < 16384; H++)
        B[H] = {}, B[H].len = 0, B[H].lit = 0, B[H].p = null;
    }
    const Xe = { l: 0, c: 0, lc: 0 };
    function te(B, H, j, ee, re) {
      for (; j < B; )
        H = H << 8 | Ua(ee, re), j += 8;
      j -= B, Xe.l = H >> j & (1 << B) - 1, Xe.c = H, Xe.lc = j;
    }
    const Ae = new Array(59);
    function Ve(B) {
      for (var H = 0; H <= 58; ++H)
        Ae[H] = 0;
      for (var H = 0; H < 65537; ++H)
        Ae[B[H]] += 1;
      for (var j = 0, H = 58; H > 0; --H) {
        var ee = j + Ae[H] >> 1;
        Ae[H] = j, j = ee;
      }
      for (var H = 0; H < 65537; ++H) {
        var re = B[H];
        re > 0 && (B[H] = re | Ae[re]++ << 6);
      }
    }
    function D(B, H, j, ee, re, ce, Re) {
      for (var Ee = j, Be = 0, ye = 0; re <= ce; re++) {
        if (Ee.value - j.value > ee)
          return !1;
        te(6, Be, ye, B, Ee);
        var Se = Xe.l;
        if (Be = Xe.c, ye = Xe.lc, Re[re] = Se, Se == 63) {
          if (Ee.value - j.value > ee)
            throw "Something wrong with hufUnpackEncTable";
          te(8, Be, ye, B, Ee);
          var He = Xe.l + 6;
          if (Be = Xe.c, ye = Xe.lc, re + He > ce + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; He--; )
            Re[re++] = 0;
          re--;
        } else if (Se >= 59) {
          var He = Se - 59 + 2;
          if (re + He > ce + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; He--; )
            Re[re++] = 0;
          re--;
        }
      }
      Ve(Re);
    }
    function Y(B) {
      return B & 63;
    }
    function X(B) {
      return B >> 6;
    }
    function fe(B, H, j, ee) {
      for (; H <= j; H++) {
        var re = X(B[H]), ce = Y(B[H]);
        if (re >> ce)
          throw "Invalid table entry";
        if (ce > 14) {
          var Re = ee[re >> ce - 14];
          if (Re.len)
            throw "Invalid table entry";
          if (Re.lit++, Re.p) {
            var Ee = Re.p;
            Re.p = new Array(Re.lit);
            for (var Be = 0; Be < Re.lit - 1; ++Be)
              Re.p[Be] = Ee[Be];
          } else
            Re.p = new Array(1);
          Re.p[Re.lit - 1] = H;
        } else if (ce)
          for (var ye = 0, Be = 1 << 14 - ce; Be > 0; Be--) {
            var Re = ee[(re << 14 - ce) + ye];
            if (Re.len || Re.p)
              throw "Invalid table entry";
            Re.len = ce, Re.lit = H, ye++;
          }
      }
      return !0;
    }
    const x = { c: 0, lc: 0 };
    function de(B, H, j, ee) {
      B = B << 8 | Ua(j, ee), H += 8, x.c = B, x.lc = H;
    }
    const pe = { c: 0, lc: 0 };
    function Qe(B, H, j, ee, re, ce, Re, Ee, Be, ye) {
      if (B == H) {
        ee < 8 && (de(j, ee, re, Re), j = x.c, ee = x.lc), ee -= 8;
        var Se = j >> ee, Se = new Uint8Array([Se])[0];
        if (Be.value + Se > ye)
          return !1;
        for (var He = Ee[Be.value - 1]; Se-- > 0; )
          Ee[Be.value++] = He;
      } else if (Be.value < ye)
        Ee[Be.value++] = B;
      else
        return !1;
      pe.c = j, pe.lc = ee;
    }
    function Ge(B) {
      return B & 65535;
    }
    function we(B) {
      var H = Ge(B);
      return H > 32767 ? H - 65536 : H;
    }
    const at = { a: 0, b: 0 };
    function ea(B, H) {
      var j = we(B), ee = we(H), re = ee, ce = j + (re & 1) + (re >> 1), Re = ce, Ee = ce - re;
      at.a = Re, at.b = Ee;
    }
    function At(B, H) {
      var j = Ge(B), ee = Ge(H), re = j - (ee >> 1) & 65535, ce = ee + re - 32768 & 65535;
      at.a = ce, at.b = re;
    }
    function Rn(B, H, j, ee, re, ce, Re) {
      for (var Ee = Re < 16384, Be = j > re ? re : j, ye = 1, Se; ye <= Be; )
        ye <<= 1;
      for (ye >>= 1, Se = ye, ye >>= 1; ye >= 1; ) {
        for (var He = 0, xt = He + ce * (re - Se), Le = ce * ye, Fe = ce * Se, Pe = ee * ye, nt = ee * Se, Dt, zt, Nt, Ft; He <= xt; He += Fe) {
          for (var _t = He, oa = He + ee * (j - Se); _t <= oa; _t += nt) {
            var Ct = _t + Pe, ca = _t + Le, rl = ca + Pe;
            Ee ? (ea(B[_t + H], B[ca + H]), Dt = at.a, Nt = at.b, ea(B[Ct + H], B[rl + H]), zt = at.a, Ft = at.b, ea(Dt, zt), B[_t + H] = at.a, B[Ct + H] = at.b, ea(Nt, Ft), B[ca + H] = at.a, B[rl + H] = at.b) : (At(B[_t + H], B[ca + H]), Dt = at.a, Nt = at.b, At(B[Ct + H], B[rl + H]), zt = at.a, Ft = at.b, At(Dt, zt), B[_t + H] = at.a, B[Ct + H] = at.b, At(Nt, Ft), B[ca + H] = at.a, B[rl + H] = at.b);
          }
          if (j & ye) {
            var ca = _t + Le;
            Ee ? ea(B[_t + H], B[ca + H]) : At(B[_t + H], B[ca + H]), Dt = at.a, B[ca + H] = at.b, B[_t + H] = Dt;
          }
        }
        if (re & ye)
          for (var _t = He, oa = He + ee * (j - Se); _t <= oa; _t += nt) {
            var Ct = _t + Pe;
            Ee ? ea(B[_t + H], B[Ct + H]) : At(B[_t + H], B[Ct + H]), Dt = at.a, B[Ct + H] = at.b, B[_t + H] = Dt;
          }
        Se = ye, ye >>= 1;
      }
      return He;
    }
    function bl(B, H, j, ee, re, ce, Re, Ee, Be, ye) {
      for (var Se = 0, He = 0, xt = Ee, Le = Math.trunc(re.value + (ce + 7) / 8); re.value < Le; )
        for (de(Se, He, j, re), Se = x.c, He = x.lc; He >= 14; ) {
          var Fe = Se >> He - 14 & 16383, Pe = H[Fe];
          if (Pe.len)
            He -= Pe.len, Qe(Pe.lit, Re, Se, He, j, ee, re, Be, ye, xt), Se = pe.c, He = pe.lc;
          else {
            if (!Pe.p)
              throw "hufDecode issues";
            var nt;
            for (nt = 0; nt < Pe.lit; nt++) {
              for (var Dt = Y(B[Pe.p[nt]]); He < Dt && re.value < Le; )
                de(Se, He, j, re), Se = x.c, He = x.lc;
              if (He >= Dt && X(B[Pe.p[nt]]) == (Se >> He - Dt & (1 << Dt) - 1)) {
                He -= Dt, Qe(
                  Pe.p[nt],
                  Re,
                  Se,
                  He,
                  j,
                  ee,
                  re,
                  Be,
                  ye,
                  xt
                ), Se = pe.c, He = pe.lc;
                break;
              }
            }
            if (nt == Pe.lit)
              throw "hufDecode issues";
          }
        }
      var zt = 8 - ce & 7;
      for (Se >>= zt, He -= zt; He > 0; ) {
        var Pe = H[Se << 14 - He & 16383];
        if (Pe.len)
          He -= Pe.len, Qe(Pe.lit, Re, Se, He, j, ee, re, Be, ye, xt), Se = pe.c, He = pe.lc;
        else
          throw "hufDecode issues";
      }
      return !0;
    }
    function Dn(B, H, j, ee, re, ce) {
      var Re = { value: 0 }, Ee = j.value, Be = Jt(H, j), ye = Jt(H, j);
      j.value += 4;
      var Se = Jt(H, j);
      if (j.value += 4, Be < 0 || Be >= 65537 || ye < 0 || ye >= 65537)
        throw "Something wrong with HUF_ENCSIZE";
      var He = new Array(65537), xt = new Array(16384);
      De(xt);
      var Le = ee - (j.value - Ee);
      if (D(B, H, j, Le, Be, ye, He), Se > 8 * (ee - (j.value - Ee)))
        throw "Something wrong with hufUncompress";
      fe(He, Be, ye, xt), bl(He, xt, B, H, j, Se, ye, ce, re, Re);
    }
    function _n(B, H, j) {
      for (var ee = 0; ee < j; ++ee)
        H[ee] = B[H[ee]];
    }
    function Ml(B) {
      for (var H = 1; H < B.length; H++) {
        var j = B[H - 1] + B[H] - 128;
        B[H] = j;
      }
    }
    function Rl(B, H) {
      for (var j = 0, ee = Math.floor((B.length + 1) / 2), re = 0, ce = B.length - 1; !(re > ce || (H[re++] = B[j++], re > ce)); )
        H[re++] = B[ee++];
    }
    function Vl(B) {
      for (var H = B.byteLength, j = new Array(), ee = 0, re = new DataView(B); H > 0; ) {
        var ce = re.getInt8(ee++);
        if (ce < 0) {
          var Re = -ce;
          H -= Re + 1;
          for (var Ee = 0; Ee < Re; Ee++)
            j.push(re.getUint8(ee++));
        } else {
          var Re = ce;
          H -= 2;
          for (var Be = re.getUint8(ee++), Ee = 0; Ee < Re + 1; Ee++)
            j.push(Be);
        }
      }
      return j;
    }
    function li(B, H, j, ee, re, ce) {
      var Ct = new DataView(ce.buffer), Re = j[B.idx[0]].width, Ee = j[B.idx[0]].height, Be = 3, ye = Math.floor(Re / 8), Se = Math.ceil(Re / 8), He = Math.ceil(Ee / 8), xt = Re - (Se - 1) * 8, Le = Ee - (He - 1) * 8, Fe = { value: 0 }, Pe = new Array(Be), nt = new Array(Be), Dt = new Array(Be), zt = new Array(Be), Nt = new Array(Be);
      for (let Ht = 0; Ht < Be; ++Ht)
        Nt[Ht] = H[B.idx[Ht]], Pe[Ht] = Ht < 1 ? 0 : Pe[Ht - 1] + Se * He, nt[Ht] = new Float32Array(64), Dt[Ht] = new Uint16Array(64), zt[Ht] = new Uint16Array(Se * 64);
      for (let Ht = 0; Ht < He; ++Ht) {
        var Ft = 8;
        Ht == He - 1 && (Ft = Le);
        var _t = 8;
        for (let jt = 0; jt < Se; ++jt) {
          jt == Se - 1 && (_t = xt);
          for (let Ot = 0; Ot < Be; ++Ot)
            Dt[Ot].fill(0), Dt[Ot][0] = re[Pe[Ot]++], Hn(Fe, ee, Dt[Ot]), ui(Dt[Ot], nt[Ot]), Mu(nt[Ot]);
          On(nt);
          for (let Ot = 0; Ot < Be; ++Ot)
            Tt(nt[Ot], zt[Ot], jt * 64);
        }
        let ha = 0;
        for (let jt = 0; jt < Be; ++jt) {
          const Ot = j[B.idx[jt]].type;
          for (let un = 8 * Ht; un < 8 * Ht + Ft; ++un) {
            ha = Nt[jt][un];
            for (let ql = 0; ql < ye; ++ql) {
              const Ga = ql * 64 + (un & 7) * 8;
              Ct.setUint16(ha + 0 * Ot, zt[jt][Ga + 0], !0), Ct.setUint16(ha + 2 * Ot, zt[jt][Ga + 1], !0), Ct.setUint16(ha + 4 * Ot, zt[jt][Ga + 2], !0), Ct.setUint16(ha + 6 * Ot, zt[jt][Ga + 3], !0), Ct.setUint16(ha + 8 * Ot, zt[jt][Ga + 4], !0), Ct.setUint16(ha + 10 * Ot, zt[jt][Ga + 5], !0), Ct.setUint16(ha + 12 * Ot, zt[jt][Ga + 6], !0), Ct.setUint16(ha + 14 * Ot, zt[jt][Ga + 7], !0), ha += 16 * Ot;
            }
          }
          if (ye != Se)
            for (let un = 8 * Ht; un < 8 * Ht + Ft; ++un) {
              const ql = Nt[jt][un] + 8 * ye * 2 * Ot, Ga = ye * 64 + (un & 7) * 8;
              for (let fl = 0; fl < _t; ++fl)
                Ct.setUint16(ql + fl * 2 * Ot, zt[jt][Ga + fl], !0);
            }
        }
      }
      for (var oa = new Uint16Array(Re), Ct = new DataView(ce.buffer), ca = 0; ca < Be; ++ca) {
        j[B.idx[ca]].decoded = !0;
        var rl = j[B.idx[ca]].type;
        if (j[ca].type == 2)
          for (var Ou = 0; Ou < Ee; ++Ou) {
            const Ht = Nt[ca][Ou];
            for (var ln = 0; ln < Re; ++ln)
              oa[ln] = Ct.getUint16(Ht + ln * 2 * rl, !0);
            for (var ln = 0; ln < Re; ++ln)
              Ct.setFloat32(Ht + ln * 2 * rl, _e(oa[ln]), !0);
          }
      }
    }
    function Hn(B, H, j) {
      for (var ee, re = 1; re < 64; )
        ee = H[B.value], ee == 65280 ? re = 64 : ee >> 8 == 255 ? re += ee & 255 : (j[re] = ee, re++), B.value++;
    }
    function ui(B, H) {
      H[0] = _e(B[0]), H[1] = _e(B[1]), H[2] = _e(B[5]), H[3] = _e(B[6]), H[4] = _e(B[14]), H[5] = _e(B[15]), H[6] = _e(B[27]), H[7] = _e(B[28]), H[8] = _e(B[2]), H[9] = _e(B[4]), H[10] = _e(B[7]), H[11] = _e(B[13]), H[12] = _e(B[16]), H[13] = _e(B[26]), H[14] = _e(B[29]), H[15] = _e(B[42]), H[16] = _e(B[3]), H[17] = _e(B[8]), H[18] = _e(B[12]), H[19] = _e(B[17]), H[20] = _e(B[25]), H[21] = _e(B[30]), H[22] = _e(B[41]), H[23] = _e(B[43]), H[24] = _e(B[9]), H[25] = _e(B[11]), H[26] = _e(B[18]), H[27] = _e(B[24]), H[28] = _e(B[31]), H[29] = _e(B[40]), H[30] = _e(B[44]), H[31] = _e(B[53]), H[32] = _e(B[10]), H[33] = _e(B[19]), H[34] = _e(B[23]), H[35] = _e(B[32]), H[36] = _e(B[39]), H[37] = _e(B[45]), H[38] = _e(B[52]), H[39] = _e(B[54]), H[40] = _e(B[20]), H[41] = _e(B[22]), H[42] = _e(B[33]), H[43] = _e(B[38]), H[44] = _e(B[46]), H[45] = _e(B[51]), H[46] = _e(B[55]), H[47] = _e(B[60]), H[48] = _e(B[21]), H[49] = _e(B[34]), H[50] = _e(B[37]), H[51] = _e(B[47]), H[52] = _e(B[50]), H[53] = _e(B[56]), H[54] = _e(B[59]), H[55] = _e(B[61]), H[56] = _e(B[35]), H[57] = _e(B[36]), H[58] = _e(B[48]), H[59] = _e(B[49]), H[60] = _e(B[57]), H[61] = _e(B[58]), H[62] = _e(B[62]), H[63] = _e(B[63]);
    }
    function Mu(B) {
      const H = 0.5 * Math.cos(0.7853975), j = 0.5 * Math.cos(3.14159 / 16), ee = 0.5 * Math.cos(3.14159 / 8), re = 0.5 * Math.cos(3 * 3.14159 / 16), ce = 0.5 * Math.cos(5 * 3.14159 / 16), Re = 0.5 * Math.cos(3 * 3.14159 / 8), Ee = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var Be = new Array(4), ye = new Array(4), Se = new Array(4), He = new Array(4), xt = 0; xt < 8; ++xt) {
        var Le = xt * 8;
        Be[0] = ee * B[Le + 2], Be[1] = Re * B[Le + 2], Be[2] = ee * B[Le + 6], Be[3] = Re * B[Le + 6], ye[0] = j * B[Le + 1] + re * B[Le + 3] + ce * B[Le + 5] + Ee * B[Le + 7], ye[1] = re * B[Le + 1] - Ee * B[Le + 3] - j * B[Le + 5] - ce * B[Le + 7], ye[2] = ce * B[Le + 1] - j * B[Le + 3] + Ee * B[Le + 5] + re * B[Le + 7], ye[3] = Ee * B[Le + 1] - ce * B[Le + 3] + re * B[Le + 5] - j * B[Le + 7], Se[0] = H * (B[Le + 0] + B[Le + 4]), Se[3] = H * (B[Le + 0] - B[Le + 4]), Se[1] = Be[0] + Be[3], Se[2] = Be[1] - Be[2], He[0] = Se[0] + Se[1], He[1] = Se[3] + Se[2], He[2] = Se[3] - Se[2], He[3] = Se[0] - Se[1], B[Le + 0] = He[0] + ye[0], B[Le + 1] = He[1] + ye[1], B[Le + 2] = He[2] + ye[2], B[Le + 3] = He[3] + ye[3], B[Le + 4] = He[3] - ye[3], B[Le + 5] = He[2] - ye[2], B[Le + 6] = He[1] - ye[1], B[Le + 7] = He[0] - ye[0];
      }
      for (var Fe = 0; Fe < 8; ++Fe)
        Be[0] = ee * B[16 + Fe], Be[1] = Re * B[16 + Fe], Be[2] = ee * B[48 + Fe], Be[3] = Re * B[48 + Fe], ye[0] = j * B[8 + Fe] + re * B[24 + Fe] + ce * B[40 + Fe] + Ee * B[56 + Fe], ye[1] = re * B[8 + Fe] - Ee * B[24 + Fe] - j * B[40 + Fe] - ce * B[56 + Fe], ye[2] = ce * B[8 + Fe] - j * B[24 + Fe] + Ee * B[40 + Fe] + re * B[56 + Fe], ye[3] = Ee * B[8 + Fe] - ce * B[24 + Fe] + re * B[40 + Fe] - j * B[56 + Fe], Se[0] = H * (B[Fe] + B[32 + Fe]), Se[3] = H * (B[Fe] - B[32 + Fe]), Se[1] = Be[0] + Be[3], Se[2] = Be[1] - Be[2], He[0] = Se[0] + Se[1], He[1] = Se[3] + Se[2], He[2] = Se[3] - Se[2], He[3] = Se[0] - Se[1], B[0 + Fe] = He[0] + ye[0], B[8 + Fe] = He[1] + ye[1], B[16 + Fe] = He[2] + ye[2], B[24 + Fe] = He[3] + ye[3], B[32 + Fe] = He[3] - ye[3], B[40 + Fe] = He[2] - ye[2], B[48 + Fe] = He[1] - ye[1], B[56 + Fe] = He[0] - ye[0];
    }
    function On(B) {
      for (var H = 0; H < 64; ++H) {
        var j = B[0][H], ee = B[1][H], re = B[2][H];
        B[0][H] = j + 1.5747 * re, B[1][H] = j - 0.1873 * ee - 0.4682 * re, B[2][H] = j + 1.8556 * ee;
      }
    }
    function Tt(B, H, j) {
      for (var ee = 0; ee < 64; ++ee)
        H[j + ee] = Mf.toHalfFloat(Ts(B[ee]));
    }
    function Ts(B) {
      return B <= 1 ? Math.sign(B) * Math.pow(Math.abs(B), 2.2) : Math.sign(B) * Math.pow(ie, Math.abs(B) - 1);
    }
    function Fl(B) {
      return new DataView(B.array.buffer, B.offset.value, B.size);
    }
    function Nn(B) {
      var H = B.viewer.buffer.slice(B.offset.value, B.offset.value + B.size), j = new Uint8Array(Vl(H)), ee = new Uint8Array(j.length);
      return Ml(j), Rl(j, ee), new DataView(ee.buffer);
    }
    function Qn(B) {
      var H = B.array.slice(B.offset.value, B.offset.value + B.size), j = vh(H), ee = new Uint8Array(j.length);
      return Ml(j), Rl(j, ee), new DataView(ee.buffer);
    }
    function bs(B) {
      for (var H = B.viewer, j = { value: B.offset.value }, ee = new Uint16Array(B.width * B.scanlineBlockSize * (B.channels * B.type)), re = new Uint8Array(8192), ce = 0, Re = new Array(B.channels), Ee = 0; Ee < B.channels; Ee++)
        Re[Ee] = {}, Re[Ee].start = ce, Re[Ee].end = Re[Ee].start, Re[Ee].nx = B.width, Re[Ee].ny = B.lines, Re[Ee].size = B.type, ce += Re[Ee].nx * Re[Ee].ny * Re[Ee].size;
      var Be = na(H, j), ye = na(H, j);
      if (ye >= 8192)
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (Be <= ye)
        for (var Ee = 0; Ee < ye - Be + 1; Ee++)
          re[Ee + Be] = V(H, j);
      var Se = new Uint16Array(65536), He = me(re, Se), xt = Jt(H, j);
      Dn(B.array, H, j, xt, ee, ce);
      for (var Ee = 0; Ee < B.channels; ++Ee)
        for (var Le = Re[Ee], Fe = 0; Fe < Re[Ee].size; ++Fe)
          Rn(ee, Le.start + Fe, Le.nx, Le.size, Le.ny, Le.nx * Le.size, He);
      _n(Se, ee, ce);
      for (var Pe = 0, nt = new Uint8Array(ee.buffer.byteLength), Dt = 0; Dt < B.lines; Dt++)
        for (var zt = 0; zt < B.channels; zt++) {
          var Le = Re[zt], Nt = Le.nx * Le.size, Ft = new Uint8Array(ee.buffer, Le.end * 2, Nt * 2);
          nt.set(Ft, Pe), Pe += Nt * 2, Le.end += Nt;
        }
      return new DataView(nt.buffer);
    }
    function Ru(B) {
      var H = B.array.slice(B.offset.value, B.offset.value + B.size), j = vh(H);
      const ee = B.lines * B.channels * B.width, re = B.type == 1 ? new Uint16Array(ee) : new Uint32Array(ee);
      let ce = 0, Re = 0;
      const Ee = new Array(4);
      for (let Be = 0; Be < B.lines; Be++)
        for (let ye = 0; ye < B.channels; ye++) {
          let Se = 0;
          switch (B.type) {
            case 1:
              Ee[0] = ce, Ee[1] = Ee[0] + B.width, ce = Ee[1] + B.width;
              for (let He = 0; He < B.width; ++He) {
                const xt = j[Ee[0]++] << 8 | j[Ee[1]++];
                Se += xt, re[Re] = Se, Re++;
              }
              break;
            case 2:
              Ee[0] = ce, Ee[1] = Ee[0] + B.width, Ee[2] = Ee[1] + B.width, ce = Ee[2] + B.width;
              for (let He = 0; He < B.width; ++He) {
                const xt = j[Ee[0]++] << 24 | j[Ee[1]++] << 16 | j[Ee[2]++] << 8;
                Se += xt, re[Re] = Se, Re++;
              }
              break;
          }
        }
      return new DataView(re.buffer);
    }
    function sl(B) {
      var H = B.viewer, j = { value: B.offset.value }, ee = new Uint8Array(B.width * B.lines * (B.channels * B.type * 2)), re = {
        version: ge(H, j),
        unknownUncompressedSize: ge(H, j),
        unknownCompressedSize: ge(H, j),
        acCompressedSize: ge(H, j),
        dcCompressedSize: ge(H, j),
        rleCompressedSize: ge(H, j),
        rleUncompressedSize: ge(H, j),
        rleRawSize: ge(H, j),
        totalAcUncompressedCount: ge(H, j),
        totalDcUncompressedCount: ge(H, j),
        acCompression: ge(H, j)
      };
      if (re.version < 2)
        throw "EXRLoader.parse: " + nn.compression + " version " + re.version + " is unsupported";
      for (var ce = new Array(), Re = na(H, j) - 2; Re > 0; ) {
        var Ee = Du(H.buffer, j), Be = V(H, j), ye = Be >> 2 & 3, Se = (Be >> 4) - 1, He = new Int8Array([Se])[0], xt = V(H, j);
        ce.push({
          name: Ee,
          index: He,
          type: xt,
          compression: ye
        }), Re -= Ee.length + 3;
      }
      for (var Le = nn.channels, Fe = new Array(B.channels), Pe = 0; Pe < B.channels; ++Pe) {
        var nt = Fe[Pe] = {}, Dt = Le[Pe];
        nt.name = Dt.name, nt.compression = 0, nt.decoded = !1, nt.type = Dt.pixelType, nt.pLinear = Dt.pLinear, nt.width = B.width, nt.height = B.lines;
      }
      for (var zt = {
        idx: new Array(3)
      }, Nt = 0; Nt < B.channels; ++Nt)
        for (var nt = Fe[Nt], Pe = 0; Pe < ce.length; ++Pe) {
          var Ft = ce[Pe];
          nt.name == Ft.name && (nt.compression = Ft.compression, Ft.index >= 0 && (zt.idx[Ft.index] = Nt), nt.offset = Nt);
        }
      if (re.acCompressedSize > 0)
        switch (re.acCompression) {
          case 0:
            var Ct = new Uint16Array(re.totalAcUncompressedCount);
            Dn(
              B.array,
              H,
              j,
              re.acCompressedSize,
              Ct,
              re.totalAcUncompressedCount
            );
            break;
          case 1:
            var _t = B.array.slice(j.value, j.value + re.totalAcUncompressedCount), oa = vh(_t), Ct = new Uint16Array(oa.buffer);
            j.value += re.totalAcUncompressedCount;
            break;
        }
      if (re.dcCompressedSize > 0) {
        var ca = {
          array: B.array,
          offset: j,
          size: re.dcCompressedSize
        }, rl = new Uint16Array(Qn(ca).buffer);
        j.value += re.dcCompressedSize;
      }
      if (re.rleRawSize > 0) {
        var _t = B.array.slice(j.value, j.value + re.rleCompressedSize), oa = vh(_t), Ou = Vl(oa.buffer);
        j.value += re.rleCompressedSize;
      }
      for (var ln = 0, Ht = new Array(Fe.length), Pe = 0; Pe < Ht.length; ++Pe)
        Ht[Pe] = new Array();
      for (var ha = 0; ha < B.lines; ++ha)
        for (var jt = 0; jt < Fe.length; ++jt)
          Ht[jt].push(ln), ln += Fe[jt].width * B.type * 2;
      li(zt, Ht, Fe, Ct, rl, ee);
      for (var Pe = 0; Pe < Fe.length; ++Pe) {
        var nt = Fe[Pe];
        if (!nt.decoded)
          switch (nt.compression) {
            case 2:
              for (var Ot = 0, un = 0, ha = 0; ha < B.lines; ++ha) {
                for (var ql = Ht[Pe][Ot], Ga = 0; Ga < nt.width; ++Ga) {
                  for (var fl = 0; fl < 2 * nt.type; ++fl)
                    ee[ql++] = Ou[un + fl * nt.width * nt.height];
                  un++;
                }
                Ot++;
              }
              break;
            case 1:
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
      }
      return new DataView(ee.buffer);
    }
    function Du(B, H) {
      for (var j = new Uint8Array(B), ee = 0; j[H.value + ee] != 0; )
        ee += 1;
      var re = new TextDecoder().decode(j.slice(H.value, H.value + ee));
      return H.value = H.value + ee + 1, re;
    }
    function Xa(B, H, j) {
      var ee = new TextDecoder().decode(new Uint8Array(B).slice(H.value, H.value + j));
      return H.value = H.value + j, ee;
    }
    function Un(B, H) {
      var j = Na(B, H), ee = Jt(B, H);
      return [j, ee];
    }
    function ii(B, H) {
      var j = Jt(B, H), ee = Jt(B, H);
      return [j, ee];
    }
    function Na(B, H) {
      var j = B.getInt32(H.value, !0);
      return H.value = H.value + 4, j;
    }
    function Jt(B, H) {
      var j = B.getUint32(H.value, !0);
      return H.value = H.value + 4, j;
    }
    function Ua(B, H) {
      var j = B[H.value];
      return H.value = H.value + 1, j;
    }
    function V(B, H) {
      var j = B.getUint8(H.value);
      return H.value = H.value + 1, j;
    }
    const ge = function(B, H) {
      let j;
      return "getBigInt64" in DataView.prototype ? j = Number(B.getBigInt64(H.value, !0)) : j = B.getUint32(H.value + 4, !0) + Number(B.getUint32(H.value, !0) << 32), H.value += 8, j;
    };
    function je(B, H) {
      var j = B.getFloat32(H.value, !0);
      return H.value += 4, j;
    }
    function tt(B, H) {
      return Mf.toHalfFloat(je(B, H));
    }
    function _e(B) {
      var H = (B & 31744) >> 10, j = B & 1023;
      return (B >> 15 ? -1 : 1) * (H ? H === 31 ? j ? NaN : 1 / 0 : Math.pow(2, H - 15) * (1 + j / 1024) : 6103515625e-14 * (j / 1024));
    }
    function na(B, H) {
      var j = B.getUint16(H.value, !0);
      return H.value += 2, j;
    }
    function Gn(B, H) {
      return _e(na(B, H));
    }
    function Da(B, H, j, ee) {
      for (var re = j.value, ce = []; j.value < re + ee - 1; ) {
        var Re = Du(H, j), Ee = Na(B, j), Be = V(B, j);
        j.value += 3;
        var ye = Na(B, j), Se = Na(B, j);
        ce.push({
          name: Re,
          pixelType: Ee,
          pLinear: Be,
          xSampling: ye,
          ySampling: Se
        });
      }
      return j.value += 1, ce;
    }
    function ol(B, H) {
      var j = je(B, H), ee = je(B, H), re = je(B, H), ce = je(B, H), Re = je(B, H), Ee = je(B, H), Be = je(B, H), ye = je(B, H);
      return {
        redX: j,
        redY: ee,
        greenX: re,
        greenY: ce,
        blueX: Re,
        blueY: Ee,
        whiteX: Be,
        whiteY: ye
      };
    }
    function Aa(B, H) {
      var j = [
        "NO_COMPRESSION",
        "RLE_COMPRESSION",
        "ZIPS_COMPRESSION",
        "ZIP_COMPRESSION",
        "PIZ_COMPRESSION",
        "PXR24_COMPRESSION",
        "B44_COMPRESSION",
        "B44A_COMPRESSION",
        "DWAA_COMPRESSION",
        "DWAB_COMPRESSION"
      ], ee = V(B, H);
      return j[ee];
    }
    function Va(B, H) {
      var j = Jt(B, H), ee = Jt(B, H), re = Jt(B, H), ce = Jt(B, H);
      return { xMin: j, yMin: ee, xMax: re, yMax: ce };
    }
    function Fa(B, H) {
      var j = ["INCREASING_Y"], ee = V(B, H);
      return j[ee];
    }
    function hn(B, H) {
      var j = je(B, H), ee = je(B, H);
      return [j, ee];
    }
    function cl(B, H) {
      var j = je(B, H), ee = je(B, H), re = je(B, H);
      return [j, ee, re];
    }
    function Yn(B, H, j, ee, re) {
      if (ee === "string" || ee === "stringvector" || ee === "iccProfile")
        return Xa(H, j, re);
      if (ee === "chlist")
        return Da(B, H, j, re);
      if (ee === "chromaticities")
        return ol(B, j);
      if (ee === "compression")
        return Aa(B, j);
      if (ee === "box2i")
        return Va(B, j);
      if (ee === "lineOrder")
        return Fa(B, j);
      if (ee === "float")
        return je(B, j);
      if (ee === "v2f")
        return hn(B, j);
      if (ee === "v3f")
        return cl(B, j);
      if (ee === "int")
        return Na(B, j);
      if (ee === "rational")
        return Un(B, j);
      if (ee === "timecode")
        return ii(B, j);
      if (ee === "preview")
        return j.value += re, "skipped";
      j.value += re;
    }
    function _u(B, H, j) {
      const ee = {};
      if (B.getUint32(0, !0) != 20000630)
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      ee.version = B.getUint8(4);
      const re = B.getUint8(5);
      ee.spec = {
        singleTile: !!(re & 2),
        longName: !!(re & 4),
        deepFormat: !!(re & 8),
        multiPart: !!(re & 16)
      }, j.value = 8;
      for (var ce = !0; ce; ) {
        var Re = Du(H, j);
        if (Re == 0)
          ce = !1;
        else {
          var Ee = Du(H, j), Be = Jt(B, j), ye = Yn(B, H, j, Ee, Be);
          ye === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${Ee}'.`) : ee[Re] = ye;
        }
      }
      if ((re & -5) != 0)
        throw console.error("EXRHeader:", ee), "THREE.EXRLoader: provided file is currently unsupported.";
      return ee;
    }
    function Ji(B, H, j, ee, re) {
      const ce = {
        size: 0,
        viewer: H,
        array: j,
        offset: ee,
        width: B.dataWindow.xMax - B.dataWindow.xMin + 1,
        height: B.dataWindow.yMax - B.dataWindow.yMin + 1,
        channels: B.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: B.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        [Dm ? "colorSpace" : "encoding"]: null
      };
      switch (B.compression) {
        case "NO_COMPRESSION":
          ce.lines = 1, ce.uncompress = Fl;
          break;
        case "RLE_COMPRESSION":
          ce.lines = 1, ce.uncompress = Nn;
          break;
        case "ZIPS_COMPRESSION":
          ce.lines = 1, ce.uncompress = Qn;
          break;
        case "ZIP_COMPRESSION":
          ce.lines = 16, ce.uncompress = Qn;
          break;
        case "PIZ_COMPRESSION":
          ce.lines = 32, ce.uncompress = bs;
          break;
        case "PXR24_COMPRESSION":
          ce.lines = 16, ce.uncompress = Ru;
          break;
        case "DWAA_COMPRESSION":
          ce.lines = 32, ce.uncompress = sl;
          break;
        case "DWAB_COMPRESSION":
          ce.lines = 256, ce.uncompress = sl;
          break;
        default:
          throw "EXRLoader.parse: " + B.compression + " is unsupported";
      }
      if (ce.scanlineBlockSize = ce.lines, ce.type == 1)
        switch (re) {
          case Ss:
            ce.getter = Gn, ce.inputSize = 2;
            break;
          case bu:
            ce.getter = na, ce.inputSize = 2;
            break;
        }
      else if (ce.type == 2)
        switch (re) {
          case Ss:
            ce.getter = je, ce.inputSize = 4;
            break;
          case bu:
            ce.getter = tt, ce.inputSize = 4;
        }
      else
        throw "EXRLoader.parse: unsupported pixelType " + ce.type + " for " + B.compression + ".";
      ce.blockCount = (B.dataWindow.yMax + 1) / ce.scanlineBlockSize;
      for (var Re = 0; Re < ce.blockCount; Re++)
        ge(H, ee);
      ce.outputChannels = ce.channels == 3 ? 4 : ce.channels;
      const Ee = ce.width * ce.height * ce.outputChannels;
      switch (re) {
        case Ss:
          ce.byteArray = new Float32Array(Ee), ce.channels < ce.outputChannels && ce.byteArray.fill(1, 0, Ee);
          break;
        case bu:
          ce.byteArray = new Uint16Array(Ee), ce.channels < ce.outputChannels && ce.byteArray.fill(15360, 0, Ee);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", re);
          break;
      }
      return ce.bytesPerLine = ce.width * ce.inputSize * ce.channels, ce.outputChannels == 4 ? ce.format = xm : ce.format = V1, Dm ? ce.colorSpace = "srgb-linear" : ce.encoding = 3e3, ce;
    }
    const si = new DataView(u), Zl = new Uint8Array(u), Hu = { value: 0 }, nn = _u(si, u, Hu), et = Ji(nn, si, Zl, Hu, this.type), Xn = { value: 0 }, wt = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let B = 0; B < et.height / et.scanlineBlockSize; B++) {
      const H = Jt(si, Hu);
      et.size = Jt(si, Hu), et.lines = H + et.scanlineBlockSize > et.height ? et.height - H : et.scanlineBlockSize;
      const ee = et.size < et.lines * et.bytesPerLine ? et.uncompress(et) : Fl(et);
      Hu.value += et.size;
      for (let re = 0; re < et.scanlineBlockSize; re++) {
        const ce = re + B * et.scanlineBlockSize;
        if (ce >= et.height)
          break;
        for (let Re = 0; Re < et.channels; Re++) {
          const Ee = wt[nn.channels[Re].name];
          for (let Be = 0; Be < et.width; Be++) {
            Xn.value = (re * (et.channels * et.width) + Re * et.width + Be) * et.inputSize;
            const ye = (et.height - 1 - ce) * (et.width * et.outputChannels) + Be * et.outputChannels + Ee;
            et.byteArray[ye] = et.getter(ee, Xn);
          }
        }
      }
    }
    return {
      header: nn,
      width: et.width,
      height: et.height,
      data: et.byteArray,
      format: et.format,
      [Dm ? "colorSpace" : "encoding"]: et[Dm ? "colorSpace" : "encoding"],
      type: this.type
    };
  }
  setDataType(u) {
    return this.type = u, this;
  }
  load(u, r, f, p) {
    function v(A, S) {
      Dm ? A.colorSpace = S.colorSpace : A.encoding = S.encoding, A.minFilter = Tu, A.magFilter = Tu, A.generateMipmaps = !1, A.flipY = !1, r && r(A, S);
    }
    return super.load(u, v, f, p);
  }
}
const sy = /* @__PURE__ */ new WeakMap();
class zB extends Ty {
  constructor(u) {
    super(u), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(u) {
    return this.decoderPath = u, this;
  }
  setDecoderConfig(u) {
    return this.decoderConfig = u, this;
  }
  setWorkerLimit(u) {
    return this.workerLimit = u, this;
  }
  load(u, r, f, p) {
    const v = new go(this.manager);
    v.setPath(this.path), v.setResponseType("arraybuffer"), v.setRequestHeader(this.requestHeader), v.setWithCredentials(this.withCredentials), v.load(
      u,
      (A) => {
        const S = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: !1
        };
        this.decodeGeometry(A, S).then(r).catch(p);
      },
      f,
      p
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(u, r, f, p) {
    const v = {
      attributeIDs: f || this.defaultAttributeIDs,
      attributeTypes: p || this.defaultAttributeTypes,
      useUniqueIDs: !!f
    };
    this.decodeGeometry(u, v).then(r);
  }
  decodeGeometry(u, r) {
    for (const E in r.attributeTypes) {
      const C = r.attributeTypes[E];
      C.BYTES_PER_ELEMENT !== void 0 && (r.attributeTypes[E] = C.name);
    }
    const f = JSON.stringify(r);
    if (sy.has(u)) {
      const E = sy.get(u);
      if (E.key === f)
        return E.promise;
      if (u.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let p;
    const v = this.workerNextTaskID++, A = u.byteLength, S = this._getWorker(v, A).then((E) => (p = E, new Promise((C, b) => {
      p._callbacks[v] = { resolve: C, reject: b }, p.postMessage({ type: "decode", id: v, taskConfig: r, buffer: u }, [u]);
    }))).then((E) => this._createGeometry(E.geometry));
    return S.catch(() => !0).then(() => {
      p && v && this._releaseTask(p, v);
    }), sy.set(u, {
      key: f,
      promise: S
    }), S;
  }
  _createGeometry(u) {
    const r = new k0();
    u.index && r.setIndex(new Nm(u.index.array, 1));
    for (let f = 0; f < u.attributes.length; f++) {
      const p = u.attributes[f], v = p.name, A = p.array, S = p.itemSize;
      r.setAttribute(v, new Nm(A, S));
    }
    return r;
  }
  _loadLibrary(u, r) {
    const f = new go(this.manager);
    return f.setPath(this.decoderPath), f.setResponseType(r), f.setWithCredentials(this.withCredentials), new Promise((p, v) => {
      f.load(u, p, void 0, v);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const u = typeof WebAssembly != "object" || this.decoderConfig.type === "js", r = [];
    return u ? r.push(this._loadLibrary("draco_decoder.js", "text")) : (r.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), r.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(r).then((f) => {
      const p = f[0];
      u || (this.decoderConfig.wasmBinary = f[1]);
      const v = jB.toString(), A = [
        "/* draco decoder */",
        p,
        "",
        "/* worker */",
        v.substring(v.indexOf("{") + 1, v.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([A]));
    }), this.decoderPending;
  }
  _getWorker(u, r) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const p = new Worker(this.workerSourceURL);
        p._callbacks = {}, p._taskCosts = {}, p._taskLoad = 0, p.postMessage({ type: "init", decoderConfig: this.decoderConfig }), p.onmessage = function(v) {
          const A = v.data;
          switch (A.type) {
            case "decode":
              p._callbacks[A.id].resolve(A);
              break;
            case "error":
              p._callbacks[A.id].reject(A);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + A.type + '"');
          }
        }, this.workerPool.push(p);
      } else
        this.workerPool.sort(function(p, v) {
          return p._taskLoad > v._taskLoad ? -1 : 1;
        });
      const f = this.workerPool[this.workerPool.length - 1];
      return f._taskCosts[u] = r, f._taskLoad += r, f;
    });
  }
  _releaseTask(u, r) {
    u._taskLoad -= u._taskCosts[r], delete u._callbacks[r], delete u._taskCosts[r];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((u) => u._taskLoad)
    );
  }
  dispose() {
    for (let u = 0; u < this.workerPool.length; ++u)
      this.workerPool[u].terminate();
    return this.workerPool.length = 0, this;
  }
}
function jB() {
  let d, u;
  onmessage = function(A) {
    const S = A.data;
    switch (S.type) {
      case "init":
        d = S.decoderConfig, u = new Promise(function(b) {
          d.onModuleLoaded = function(T) {
            b({ draco: T });
          }, DracoDecoderModule(d);
        });
        break;
      case "decode":
        const E = S.buffer, C = S.taskConfig;
        u.then((b) => {
          const T = b.draco, M = new T.Decoder(), O = new T.DecoderBuffer();
          O.Init(new Int8Array(E), E.byteLength);
          try {
            const N = r(T, M, O, C), J = N.attributes.map((Z) => Z.array.buffer);
            N.index && J.push(N.index.array.buffer), self.postMessage({ type: "decode", id: S.id, geometry: N }, J);
          } catch (N) {
            console.error(N), self.postMessage({ type: "error", id: S.id, error: N.message });
          } finally {
            T.destroy(O), T.destroy(M);
          }
        });
        break;
    }
  };
  function r(A, S, E, C) {
    const b = C.attributeIDs, T = C.attributeTypes;
    let M, O;
    const N = S.GetEncodedGeometryType(E);
    if (N === A.TRIANGULAR_MESH)
      M = new A.Mesh(), O = S.DecodeBufferToMesh(E, M);
    else if (N === A.POINT_CLOUD)
      M = new A.PointCloud(), O = S.DecodeBufferToPointCloud(E, M);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!O.ok() || M.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + O.error_msg());
    const J = { index: null, attributes: [] };
    for (const Z in b) {
      const G = self[T[Z]];
      let U, $;
      if (C.useUniqueIDs)
        $ = b[Z], U = S.GetAttributeByUniqueId(M, $);
      else {
        if ($ = S.GetAttributeId(M, A[b[Z]]), $ === -1)
          continue;
        U = S.GetAttribute(M, $);
      }
      J.attributes.push(p(A, S, M, Z, G, U));
    }
    return N === A.TRIANGULAR_MESH && (J.index = f(A, S, M)), A.destroy(M), J;
  }
  function f(A, S, E) {
    const b = E.num_faces() * 3, T = b * 4, M = A._malloc(T);
    S.GetTrianglesUInt32Array(E, T, M);
    const O = new Uint32Array(A.HEAPF32.buffer, M, b).slice();
    return A._free(M), { array: O, itemSize: 1 };
  }
  function p(A, S, E, C, b, T) {
    const M = T.num_components(), N = E.num_points() * M, J = N * b.BYTES_PER_ELEMENT, Z = v(A, b), G = A._malloc(J);
    S.GetAttributeDataArrayForAllPoints(E, T, Z, J, G);
    const U = new b(A.HEAPF32.buffer, G, N).slice();
    return A._free(G), {
      name: C,
      array: U,
      itemSize: M
    };
  }
  function v(A, S) {
    switch (S) {
      case Float32Array:
        return A.DT_FLOAT32;
      case Int8Array:
        return A.DT_INT8;
      case Int16Array:
        return A.DT_INT16;
      case Int32Array:
        return A.DT_INT32;
      case Uint8Array:
        return A.DT_UINT8;
      case Uint16Array:
        return A.DT_UINT16;
      case Uint32Array:
        return A.DT_UINT32;
    }
  }
}
let Ah;
const oy = () => {
  if (Ah)
    return Ah;
  const d = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", u = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", r = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]), f = new Uint8Array([
    32,
    0,
    65,
    253,
    3,
    1,
    2,
    34,
    4,
    106,
    6,
    5,
    11,
    8,
    7,
    20,
    13,
    33,
    12,
    16,
    128,
    9,
    116,
    64,
    19,
    113,
    127,
    15,
    10,
    21,
    22,
    14,
    255,
    66,
    24,
    54,
    136,
    107,
    18,
    23,
    192,
    26,
    114,
    118,
    132,
    17,
    77,
    101,
    130,
    144,
    27,
    87,
    131,
    44,
    45,
    74,
    156,
    154,
    70,
    167
  ]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  let p = d;
  WebAssembly.validate(r) && (p = u);
  let v;
  const A = WebAssembly.instantiate(S(p), {}).then((T) => {
    v = T.instance, v.exports.__wasm_call_ctors();
  });
  function S(T) {
    const M = new Uint8Array(T.length);
    for (let N = 0; N < T.length; ++N) {
      const J = T.charCodeAt(N);
      M[N] = J > 96 ? J - 71 : J > 64 ? J - 65 : J > 47 ? J + 4 : J > 46 ? 63 : 62;
    }
    let O = 0;
    for (let N = 0; N < T.length; ++N)
      M[O++] = M[N] < 60 ? f[M[N]] : (M[N] - 60) * 64 + M[++N];
    return M.buffer.slice(0, O);
  }
  function E(T, M, O, N, J, Z) {
    const G = v.exports.sbrk, U = O + 3 & -4, $ = G(U * N), F = G(J.length), oe = new Uint8Array(v.exports.memory.buffer);
    oe.set(J, F);
    const W = T($, O, N, F, J.length);
    if (W === 0 && Z && Z($, U, N), M.set(oe.subarray($, $ + O * N)), G($ - G(0)), W !== 0)
      throw new Error(`Malformed buffer data: ${W}`);
  }
  const C = {
    // legacy index-based enums for glTF
    0: "",
    1: "meshopt_decodeFilterOct",
    2: "meshopt_decodeFilterQuat",
    3: "meshopt_decodeFilterExp",
    // string-based enums for glTF
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, b = {
    // legacy index-based enums for glTF
    0: "meshopt_decodeVertexBuffer",
    1: "meshopt_decodeIndexBuffer",
    2: "meshopt_decodeIndexSequence",
    // string-based enums for glTF
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  return Ah = {
    ready: A,
    supported: !0,
    decodeVertexBuffer(T, M, O, N, J) {
      E(
        v.exports.meshopt_decodeVertexBuffer,
        T,
        M,
        O,
        N,
        v.exports[C[J]]
      );
    },
    decodeIndexBuffer(T, M, O, N) {
      E(v.exports.meshopt_decodeIndexBuffer, T, M, O, N);
    },
    decodeIndexSequence(T, M, O, N) {
      E(v.exports.meshopt_decodeIndexSequence, T, M, O, N);
    },
    decodeGltfBuffer(T, M, O, N, J, Z) {
      E(
        v.exports[b[J]],
        T,
        M,
        O,
        N,
        v.exports[C[Z]]
      );
    }
  }, Ah;
};
let Eh = null, zE = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function jE(d = !0, u = !0, r) {
  return (f) => {
    r && r(f), d && (Eh || (Eh = new zB()), Eh.setDecoderPath(typeof d == "string" ? d : zE), f.setDRACOLoader(Eh)), u && f.setMeshoptDecoder(typeof oy == "function" ? oy() : oy);
  };
}
const Ym = (d, u, r, f) => Cs(Ny, d, jE(u, r, f));
Ym.preload = (d, u, r, f) => Cs.preload(Ny, d, jE(u, r, f));
Ym.clear = (d) => Cs.clear(Ny, d);
Ym.setDecoderPath = (d) => {
  zE = d;
};
const LB = /* @__PURE__ */ xe.forwardRef(({
  makeDefault: d,
  camera: u,
  regress: r,
  domElement: f,
  enableDamping: p = !0,
  keyEvents: v = !1,
  onChange: A,
  onStart: S,
  onEnd: E,
  ...C
}, b) => {
  const T = il((W) => W.invalidate), M = il((W) => W.camera), O = il((W) => W.gl), N = il((W) => W.events), J = il((W) => W.setEvents), Z = il((W) => W.set), G = il((W) => W.get), U = il((W) => W.performance), $ = u || M, F = f || N.connected || O.domElement, oe = xe.useMemo(() => new PS($), [$]);
  return Gh(() => {
    oe.enabled && oe.update();
  }, -1), xe.useEffect(() => (v && oe.connect(v === !0 ? F : v), oe.connect(F), () => void oe.dispose()), [v, F, r, oe, T]), xe.useEffect(() => {
    const W = (ie) => {
      T(), r && U.regress(), A && A(ie);
    }, Te = (ie) => {
      S && S(ie);
    }, ne = (ie) => {
      E && E(ie);
    };
    return oe.addEventListener("change", W), oe.addEventListener("start", Te), oe.addEventListener("end", ne), () => {
      oe.removeEventListener("start", Te), oe.removeEventListener("end", ne), oe.removeEventListener("change", W);
    };
  }, [A, S, E, oe, T, J]), xe.useEffect(() => {
    if (d) {
      const W = G().controls;
      return Z({
        controls: oe
      }), () => Z({
        controls: W
      });
    }
  }, [d, oe]), /* @__PURE__ */ xe.createElement("primitive", jm({
    ref: b,
    object: oe,
    enableDamping: p
  }, C));
}), LE = (d, u, r) => {
  let f;
  switch (d) {
    case my:
      f = new Uint8ClampedArray(u * r * 4);
      break;
    case bu:
      f = new Uint16Array(u * r * 4);
      break;
    case P1:
      f = new Uint32Array(u * r * 4);
      break;
    case w1:
      f = new Int8Array(u * r * 4);
      break;
    case I1:
      f = new Int16Array(u * r * 4);
      break;
    case q1:
      f = new Int32Array(u * r * 4);
      break;
    case Ss:
      f = new Float32Array(u * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return f;
};
let gh;
const JB = (d, u, r, f) => {
  if (gh !== void 0)
    return gh;
  const p = new nE(1, 1, f);
  u.setRenderTarget(p);
  const v = new Uh(new aE(), new bf({ color: 16777215 }));
  u.render(v, r), u.setRenderTarget(null);
  const A = LE(d, p.width, p.height);
  return u.readRenderTargetPixels(p, 0, 0, p.width, p.height, A), p.dispose(), v.geometry.dispose(), v.material.dispose(), gh = A[0] !== 0, gh;
};
class Uy {
  /**
   * Constructs a new QuadRenderer
   *
   * @param options Parameters for this QuadRenderer
   */
  constructor(u) {
    var r, f, p, v, A, S, E, C, b, T, M, O, N, J, Z, G;
    this._rendererIsDisposable = !1, this._supportsReadPixels = !0, this.render = () => {
      this._renderer.setRenderTarget(this._renderTarget);
      try {
        this._renderer.render(this._scene, this._camera);
      } catch ($) {
        throw this._renderer.setRenderTarget(null), $;
      }
      this._renderer.setRenderTarget(null);
    }, this._width = u.width, this._height = u.height, this._type = u.type, this._colorSpace = u.colorSpace;
    const U = {
      // fixed options
      format: xm,
      depthBuffer: !1,
      stencilBuffer: !1,
      // user options
      type: this._type,
      // set in class property
      colorSpace: this._colorSpace,
      // set in class property
      anisotropy: ((r = u.renderTargetOptions) === null || r === void 0 ? void 0 : r.anisotropy) !== void 0 ? (f = u.renderTargetOptions) === null || f === void 0 ? void 0 : f.anisotropy : 1,
      generateMipmaps: ((p = u.renderTargetOptions) === null || p === void 0 ? void 0 : p.generateMipmaps) !== void 0 ? (v = u.renderTargetOptions) === null || v === void 0 ? void 0 : v.generateMipmaps : !1,
      magFilter: ((A = u.renderTargetOptions) === null || A === void 0 ? void 0 : A.magFilter) !== void 0 ? (S = u.renderTargetOptions) === null || S === void 0 ? void 0 : S.magFilter : Tu,
      minFilter: ((E = u.renderTargetOptions) === null || E === void 0 ? void 0 : E.minFilter) !== void 0 ? (C = u.renderTargetOptions) === null || C === void 0 ? void 0 : C.minFilter : Tu,
      samples: ((b = u.renderTargetOptions) === null || b === void 0 ? void 0 : b.samples) !== void 0 ? (T = u.renderTargetOptions) === null || T === void 0 ? void 0 : T.samples : void 0,
      wrapS: ((M = u.renderTargetOptions) === null || M === void 0 ? void 0 : M.wrapS) !== void 0 ? (O = u.renderTargetOptions) === null || O === void 0 ? void 0 : O.wrapS : gs,
      wrapT: ((N = u.renderTargetOptions) === null || N === void 0 ? void 0 : N.wrapT) !== void 0 ? (J = u.renderTargetOptions) === null || J === void 0 ? void 0 : J.wrapT : gs
    };
    if (this._material = u.material, u.renderer ? this._renderer = u.renderer : (this._renderer = Uy.instantiateRenderer(), this._rendererIsDisposable = !0), this._scene = new tE(), this._camera = new Hm(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !JB(this._type, this._renderer, this._camera, U)) {
      let $;
      switch (this._type) {
        case bu:
          $ = this._renderer.extensions.has("EXT_color_buffer_float") ? Ss : void 0;
          break;
      }
      $ !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Ss}`), this._type = $) : (this._supportsReadPixels = !1, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new Uh(new aE(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new nE(this.width, this.height, U), this._renderTarget.texture.mapping = ((Z = u.renderTargetOptions) === null || Z === void 0 ? void 0 : Z.mapping) !== void 0 ? (G = u.renderTargetOptions) === null || G === void 0 ? void 0 : G.mapping : Mh;
  }
  /**
   * Instantiates a temporary renderer
   *
   * @returns
   */
  static instantiateRenderer() {
    const u = new F1();
    return u.setSize(128, 128), u;
  }
  /**
   * Obtains a Buffer containing the rendered texture.
   *
   * @throws Error if the browser cannot read pixels from this RenderTarget type.
   * @returns a TypedArray containing RGBA values from this renderer
   */
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const u = LE(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, u), u;
  }
  /**
   * Performs a readPixel operation in the renderTarget
   * and returns a DataTexture containing the read data
   *
   * @param options options
   * @returns
   */
  toDataTexture(u) {
    const r = new Z1(
      // fixed values
      this.toArray(),
      this.width,
      this.height,
      xm,
      this._type,
      // user values
      u?.mapping || Mh,
      u?.wrapS || gs,
      u?.wrapT || gs,
      u?.magFilter || Tu,
      u?.minFilter || Tu,
      u?.anisotropy || 1,
      // fixed value
      dy
    );
    return r.generateMipmaps = u?.generateMipmaps !== void 0 ? u?.generateMipmaps : !1, r;
  }
  /**
   * If using a disposable renderer, it will dispose it.
   */
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  /**
   * Will dispose of **all** assets used by this renderer.
   *
   *
   * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
   * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
   * or are otherwise done with it.
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
   * // DO NOT dispose the renderTarget here,
   * // it is used directly in the material
   * result.dispose()
   * ```
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const pmremGenerator = new PMREMGenerator( renderer );
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
   * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
   * // renderTarget can be disposed here
   * // because it was used to generate a PMREM texture
   * result.dispose(true)
   * ```
   */
  dispose(u) {
    this.disposeOnDemandRenderer(), u && this.renderTarget.dispose(), this.material instanceof Cy && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof Ao && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof Ao && r.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  /**
   * Width of the texture
   */
  get width() {
    return this._width;
  }
  set width(u) {
    this._width = u, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * Height of the texture
   */
  get height() {
    return this._height;
  }
  set height(u) {
    this._height = u, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * The renderer used
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * The `WebGLRenderTarget` used.
   */
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(u) {
    this._renderTarget = u, this._width = u.width, this._height = u.height;
  }
  /**
   * The `Material` used.
   */
  get material() {
    return this._material;
  }
  /**
   *
   */
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
const KB = (
  /* glsl */
  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
), QB = (
  /* glsl */
  `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`
);
class YB extends Cy {
  /**
   *
   * @param params
   */
  constructor({ gamma: u, offsetHdr: r, offsetSdr: f, gainMapMin: p, gainMapMax: v, maxDisplayBoost: A, hdrCapacityMin: S, hdrCapacityMax: E, sdr: C, gainMap: b }) {
    super({
      name: "GainMapDecoderMaterial",
      vertexShader: KB,
      fragmentShader: QB,
      uniforms: {
        sdr: { value: C },
        gainMap: { value: b },
        gamma: { value: new Ra(1 / u[0], 1 / u[1], 1 / u[2]) },
        offsetHdr: { value: new Ra().fromArray(r) },
        offsetSdr: { value: new Ra().fromArray(f) },
        gainMapMin: { value: new Ra().fromArray(p) },
        gainMapMax: { value: new Ra().fromArray(v) },
        weightFactor: {
          value: (Math.log2(A) - S) / (E - S)
        }
      },
      blending: $1,
      depthTest: !1,
      depthWrite: !1
    }), this._maxDisplayBoost = A, this._hdrCapacityMin = S, this._hdrCapacityMax = E, this.needsUpdate = !0, this.uniformsNeedUpdate = !0;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(u) {
    this.uniforms.sdr.value = u;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(u) {
    this.uniforms.gainMap.value = u;
  }
  /**
   * @see {@link GainMapMetadata.offsetHdr}
   */
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(u) {
    this.uniforms.offsetHdr.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.offsetSdr}
   */
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(u) {
    this.uniforms.offsetSdr.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMin}
   */
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(u) {
    this.uniforms.gainMapMin.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMax}
   */
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(u) {
    this.uniforms.gainMapMax.value.fromArray(u);
  }
  /**
   * @see {@link GainMapMetadata.gamma}
   */
  get gamma() {
    const u = this.uniforms.gamma.value;
    return [1 / u.x, 1 / u.y, 1 / u.z];
  }
  set gamma(u) {
    const r = this.uniforms.gamma.value;
    r.x = 1 / u[0], r.y = 1 / u[1], r.z = 1 / u[2];
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(u) {
    this._hdrCapacityMin = u, this.calculateWeight();
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(u) {
    this._hdrCapacityMax = u, this.calculateWeight();
  }
  /**
   * @see {@link GainmapDecodingParameters.maxDisplayBoost}
   * @remarks Non Logarithmic space
   */
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(u) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, u)), this.calculateWeight();
  }
  calculateWeight() {
    const u = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, u));
  }
}
class JE extends Error {
}
class KE extends Error {
}
const _m = (d, u, r) => {
  const f = new RegExp(`${u}="([^"]*)"`, "i").exec(d);
  if (f)
    return f[1];
  const p = new RegExp(`<${u}[^>]*>([\\s\\S]*?)</${u}>`, "i").exec(d);
  if (p) {
    const v = p[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return v && v.length === 3 ? v.map((A) => A.replace(/<\/?rdf:li>/g, "")) : p[1].trim();
  }
  if (r !== void 0)
    return r;
  throw new Error(`Can't find ${u} in gainmap metadata`);
}, XB = (d) => {
  let u;
  typeof TextDecoder < "u" ? u = new TextDecoder().decode(d) : u = d.toString();
  let r = u.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const f = u.indexOf("x:xmpmeta>", r), p = u.slice(r, f + 10);
    try {
      const v = _m(p, "hdrgm:GainMapMin", "0"), A = _m(p, "hdrgm:GainMapMax"), S = _m(p, "hdrgm:Gamma", "1"), E = _m(p, "hdrgm:OffsetSDR", "0.015625"), C = _m(p, "hdrgm:OffsetHDR", "0.015625"), b = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(p), T = b ? b[1] : "0", M = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(p);
      if (!M)
        throw new Error("Incomplete gainmap metadata");
      const O = M[1];
      return {
        gainMapMin: Array.isArray(v) ? v.map((N) => parseFloat(N)) : [parseFloat(v), parseFloat(v), parseFloat(v)],
        gainMapMax: Array.isArray(A) ? A.map((N) => parseFloat(N)) : [parseFloat(A), parseFloat(A), parseFloat(A)],
        gamma: Array.isArray(S) ? S.map((N) => parseFloat(N)) : [parseFloat(S), parseFloat(S), parseFloat(S)],
        offsetSdr: Array.isArray(E) ? E.map((N) => parseFloat(N)) : [parseFloat(E), parseFloat(E), parseFloat(E)],
        offsetHdr: Array.isArray(C) ? C.map((N) => parseFloat(N)) : [parseFloat(C), parseFloat(C), parseFloat(C)],
        hdrCapacityMin: parseFloat(T),
        hdrCapacityMax: parseFloat(O)
      };
    } catch {
    }
    r = u.indexOf("<x:xmpmeta", f);
  }
};
class VB {
  constructor(u) {
    this.options = {
      debug: u && u.debug !== void 0 ? u.debug : !1,
      extractFII: u && u.extractFII !== void 0 ? u.extractFII : !0,
      extractNonFII: u && u.extractNonFII !== void 0 ? u.extractNonFII : !0
    };
  }
  extract(u) {
    return new Promise((r, f) => {
      const p = this.options.debug, v = new DataView(u.buffer);
      if (v.getUint16(0) !== 65496) {
        f(new Error("Not a valid jpeg"));
        return;
      }
      const A = v.byteLength;
      let S = 2, E = 0, C;
      for (; S < A; ) {
        if (++E > 250) {
          f(new Error(`Found no marker after ${E} loops 😵`));
          return;
        }
        if (v.getUint8(S) !== 255) {
          f(new Error(`Not a valid marker at offset 0x${S.toString(16)}, found: 0x${v.getUint8(S).toString(16)}`));
          return;
        }
        if (C = v.getUint8(S + 1), p && console.log(`Marker: ${C.toString(16)}`), C === 226) {
          p && console.log("Found APP2 marker (0xffe2)");
          const b = S + 4;
          if (v.getUint32(b) === 1297106432) {
            const T = b + 4;
            let M;
            if (v.getUint16(T) === 18761)
              M = !1;
            else if (v.getUint16(T) === 19789)
              M = !0;
            else {
              f(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (v.getUint16(T + 2, !M) !== 42) {
              f(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const O = v.getUint32(T + 4, !M);
            if (O < 8) {
              f(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const N = T + O, J = v.getUint16(N, !M), Z = N + 2;
            let G = 0;
            for (let oe = Z; oe < Z + 12 * J; oe += 12)
              v.getUint16(oe, !M) === 45057 && (G = v.getUint32(oe + 8, !M));
            const $ = N + 2 + J * 12 + 4, F = [];
            for (let oe = $; oe < $ + G * 16; oe += 16) {
              const W = {
                MPType: v.getUint32(oe, !M),
                size: v.getUint32(oe + 4, !M),
                // This offset is specified relative to the address of the MP Endian
                // field in the MP Header, unless the image is a First Individual Image,
                // in which case the value of the offset shall be NULL (0x00000000).
                dataOffset: v.getUint32(oe + 8, !M),
                dependantImages: v.getUint32(oe + 12, !M),
                start: -1,
                end: -1,
                isFII: !1
              };
              W.dataOffset ? (W.start = T + W.dataOffset, W.isFII = !1) : (W.start = 0, W.isFII = !0), W.end = W.start + W.size, F.push(W);
            }
            if (this.options.extractNonFII && F.length) {
              const oe = new Blob([v]), W = [];
              for (const Te of F) {
                if (Te.isFII && !this.options.extractFII)
                  continue;
                const ne = oe.slice(Te.start, Te.end + 1, "image/jpeg");
                W.push(ne);
              }
              r(W);
            }
          }
        }
        S += 2 + v.getUint16(S + 2);
      }
    });
  }
}
const FB = async (d) => {
  const u = XB(d);
  if (!u)
    throw new KE("Gain map XMP metadata not found");
  const f = await new VB({ extractFII: !0, extractNonFII: !0 }).extract(d);
  if (f.length !== 2)
    throw new JE("Gain map recovery image not found");
  return {
    sdr: new Uint8Array(await f[0].arrayBuffer()),
    gainMap: new Uint8Array(await f[1].arrayBuffer()),
    metadata: u
  };
}, Z0 = (d) => new Promise((u, r) => {
  const f = document.createElement("img");
  f.onload = () => {
    u(f);
  }, f.onerror = (p) => {
    r(p);
  }, f.src = URL.createObjectURL(d);
});
class QE extends Ty {
  /**
   *
   * @param renderer
   * @param manager
   */
  constructor(u, r) {
    super(r), u && (this._renderer = u), this._internalLoadingManager = new W1();
  }
  /**
   * Specify the renderer to use when rendering the gain map
   *
   * @param renderer
   * @returns
   */
  setRenderer(u) {
    return this._renderer = u, this;
  }
  /**
   * Specify the renderTarget options to use when rendering the gain map
   *
   * @param options
   * @returns
   */
  setRenderTargetOptions(u) {
    return this._renderTargetOptions = u, this;
  }
  /**
   * @private
   * @returns
   */
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const u = new YB({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new Ao(),
      sdr: new Ao()
    });
    return new Uy({
      width: 16,
      height: 16,
      type: bu,
      colorSpace: dy,
      material: u,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions
    });
  }
  /**
  * @private
  * @param quadRenderer
  * @param metadata
  * @param sdrBuffer
  * @param gainMapBuffer
  */
  async render(u, r, f, p) {
    const v = p ? new Blob([p], { type: "image/jpeg" }) : void 0, A = new Blob([f], { type: "image/jpeg" });
    let S, E, C = !1;
    if (typeof createImageBitmap > "u") {
      const M = await Promise.all([
        v ? Z0(v) : Promise.resolve(void 0),
        Z0(A)
      ]);
      E = M[0], S = M[1], C = !0;
    } else {
      const M = await Promise.all([
        v ? createImageBitmap(v, { imageOrientation: "flipY" }) : Promise.resolve(void 0),
        createImageBitmap(A, { imageOrientation: "flipY" })
      ]);
      E = M[0], S = M[1];
    }
    const b = new Ao(E || new ImageData(2, 2), Mh, gs, gs, Tu, l0, xm, my, 1, dy);
    b.flipY = C, b.needsUpdate = !0;
    const T = new Ao(S, Mh, gs, gs, Tu, l0, xm, my, 1, k1);
    T.flipY = C, T.needsUpdate = !0, u.width = S.width, u.height = S.height, u.material.gainMap = b, u.material.sdr = T, u.material.gainMapMin = r.gainMapMin, u.material.gainMapMax = r.gainMapMax, u.material.offsetHdr = r.offsetHdr, u.material.offsetSdr = r.offsetSdr, u.material.gamma = r.gamma, u.material.hdrCapacityMin = r.hdrCapacityMin, u.material.hdrCapacityMax = r.hdrCapacityMax, u.material.maxDisplayBoost = Math.pow(2, r.hdrCapacityMax), u.material.needsUpdate = !0, u.render();
  }
}
class ZB extends QE {
  /**
   * Loads a gainmap using separate data
   * * sdr image
   * * gain map image
   * * metadata json
   *
   * useful for webp gain maps
   *
   * @param urls An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a {@link ProgressEvent}
   * @param onError Error callback
   * @returns
   */
  load([u, r, f], p, v, A) {
    const S = this.prepareQuadRenderer();
    let E, C, b;
    const T = async () => {
      if (E && C && b) {
        try {
          await this.render(S, b, E, C);
        } catch (ie) {
          this.manager.itemError(u), this.manager.itemError(r), this.manager.itemError(f), typeof A == "function" && A(ie), S.disposeOnDemandRenderer();
          return;
        }
        typeof p == "function" && p(S), this.manager.itemEnd(u), this.manager.itemEnd(r), this.manager.itemEnd(f), S.disposeOnDemandRenderer();
      }
    };
    let M = !0, O = 0, N = 0, J = !0, Z = 0, G = 0, U = !0, $ = 0, F = 0;
    const oe = () => {
      if (typeof v == "function") {
        const ie = O + Z + $, me = N + G + F, De = M && J && U;
        v(new ProgressEvent("progress", { lengthComputable: De, loaded: me, total: ie }));
      }
    };
    this.manager.itemStart(u), this.manager.itemStart(r), this.manager.itemStart(f);
    const W = new go(this._internalLoadingManager);
    W.setResponseType("arraybuffer"), W.setRequestHeader(this.requestHeader), W.setPath(this.path), W.setWithCredentials(this.withCredentials), W.load(u, async (ie) => {
      if (typeof ie == "string")
        throw new Error("Invalid sdr buffer");
      E = ie, await T();
    }, (ie) => {
      M = ie.lengthComputable, N = ie.loaded, O = ie.total, oe();
    }, (ie) => {
      this.manager.itemError(u), typeof A == "function" && A(ie);
    });
    const Te = new go(this._internalLoadingManager);
    Te.setResponseType("arraybuffer"), Te.setRequestHeader(this.requestHeader), Te.setPath(this.path), Te.setWithCredentials(this.withCredentials), Te.load(r, async (ie) => {
      if (typeof ie == "string")
        throw new Error("Invalid gainmap buffer");
      C = ie, await T();
    }, (ie) => {
      J = ie.lengthComputable, G = ie.loaded, Z = ie.total, oe();
    }, (ie) => {
      this.manager.itemError(r), typeof A == "function" && A(ie);
    });
    const ne = new go(this._internalLoadingManager);
    return ne.setRequestHeader(this.requestHeader), ne.setPath(this.path), ne.setWithCredentials(this.withCredentials), ne.load(f, async (ie) => {
      if (typeof ie != "string")
        throw new Error("Invalid metadata string");
      b = JSON.parse(ie), await T();
    }, (ie) => {
      U = ie.lengthComputable, F = ie.loaded, $ = ie.total, oe();
    }, (ie) => {
      this.manager.itemError(f), typeof A == "function" && A(ie);
    }), S;
  }
}
class qB extends QE {
  /**
   * Loads a JPEG containing gain map metadata
   * Renders a normal SDR image if gainmap data is not found
   *
   * @param url An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a {@link ProgressEvent}
   * @param onError Error callback
   * @returns
   */
  load(u, r, f, p) {
    const v = this.prepareQuadRenderer(), A = new go(this._internalLoadingManager);
    return A.setResponseType("arraybuffer"), A.setRequestHeader(this.requestHeader), A.setPath(this.path), A.setWithCredentials(this.withCredentials), this.manager.itemStart(u), A.load(u, async (S) => {
      if (typeof S == "string")
        throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const E = new Uint8Array(S);
      let C, b, T;
      try {
        const M = await FB(E);
        C = M.sdr, b = M.gainMap, T = M.metadata;
      } catch (M) {
        if (M instanceof KE || M instanceof JE)
          console.warn(`Failure to reconstruct an HDR image from ${u}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), T = {
            gainMapMin: [0, 0, 0],
            gainMapMax: [1, 1, 1],
            gamma: [1, 1, 1],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [0, 0, 0],
            offsetSdr: [0, 0, 0]
          }, C = E;
        else
          throw M;
      }
      try {
        await this.render(v, T, C, b);
      } catch (M) {
        this.manager.itemError(u), typeof p == "function" && p(M), v.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(v), this.manager.itemEnd(u), v.disposeOnDemandRenderer();
    }, f, (S) => {
      this.manager.itemError(u), typeof p == "function" && p(S);
    }), v;
  }
}
const Lm = {
  apartment: "lebombo_1k.hdr",
  city: "potsdamer_platz_1k.hdr",
  dawn: "kiara_1_dawn_1k.hdr",
  forest: "forest_slope_1k.hdr",
  lobby: "st_fagans_interior_1k.hdr",
  night: "dikhololo_night_1k.hdr",
  park: "rooitou_park_1k.hdr",
  studio: "studio_small_03_1k.hdr",
  sunset: "venice_sunset_1k.hdr",
  warehouse: "empty_warehouse_01_1k.hdr"
}, YE = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", _f = (d) => Array.isArray(d), Gy = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function zh({
  files: d = Gy,
  path: u = "",
  preset: r = void 0,
  colorSpace: f = void 0,
  extensions: p
} = {}) {
  r && (xy(r), d = Lm[r], u = YE);
  const v = _f(d), {
    extension: A,
    isCubemap: S
  } = zy(d), E = jy(A);
  if (!E) throw new Error("useEnvironment: Unrecognized file extension: " + d);
  const C = il((O) => O.gl);
  s1(() => {
    if (A !== "webp" && A !== "jpg" && A !== "jpeg") return;
    function O() {
      Cs.clear(E, v ? [d] : d);
    }
    C.domElement.addEventListener("webglcontextlost", O, {
      once: !0
    });
  }, [d, C.domElement]);
  const b = Cs(E, v ? [d] : d, (O) => {
    (A === "webp" || A === "jpg" || A === "jpeg") && O.setRenderer(C), O.setPath == null || O.setPath(u), p && p(O);
  });
  let T = v ? (
    // @ts-ignore
    b[0]
  ) : b;
  if (A === "jpg" || A === "jpeg" || A === "webp") {
    var M;
    T = (M = T.renderTarget) == null ? void 0 : M.texture;
  }
  return T.mapping = S ? eg : tg, T.colorSpace = f ?? (S ? "srgb" : "srgb-linear"), T;
}
const IB = {
  files: Gy,
  path: "",
  preset: void 0,
  extensions: void 0
};
zh.preload = (d) => {
  const u = {
    ...IB,
    ...d
  };
  let {
    files: r,
    path: f = ""
  } = u;
  const {
    preset: p,
    extensions: v
  } = u;
  p && (xy(p), r = Lm[p], f = YE);
  const {
    extension: A
  } = zy(r);
  if (A === "webp" || A === "jpg" || A === "jpeg")
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const S = jy(A);
  if (!S) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Cs.preload(S, _f(r) ? [r] : r, (E) => {
    E.setPath == null || E.setPath(f), v && v(E);
  });
};
const wB = {
  files: Gy,
  preset: void 0
};
zh.clear = (d) => {
  const u = {
    ...wB,
    ...d
  };
  let {
    files: r
  } = u;
  const {
    preset: f
  } = u;
  f && (xy(f), r = Lm[f]);
  const {
    extension: p
  } = zy(r), v = jy(p);
  if (!v) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Cs.clear(v, _f(r) ? [r] : r);
};
function xy(d) {
  if (!(d in Lm)) throw new Error("Preset must be one of: " + Object.keys(Lm).join(", "));
}
function zy(d) {
  var u;
  const r = _f(d) && d.length === 6, f = _f(d) && d.length === 3 && d.some((A) => A.endsWith("json")), p = _f(d) ? d[0] : d;
  return {
    extension: r ? "cube" : f ? "webp" : p.startsWith("data:application/exr") ? "exr" : p.startsWith("data:application/hdr") ? "hdr" : p.startsWith("data:image/jpeg") ? "jpg" : (u = p.split(".").pop()) == null || (u = u.split("?")) == null || (u = u.shift()) == null ? void 0 : u.toLowerCase(),
    isCubemap: r,
    isGainmap: f
  };
}
function jy(d) {
  return d === "cube" ? ag : d === "hdr" ? GB : d === "exr" ? xB : d === "jpg" || d === "jpeg" ? qB : d === "webp" ? ZB : null;
}
const PB = (d) => d.current && d.current.isScene, WB = (d) => PB(d) ? d.current : d;
function Ly(d, u, r, f, p = {}) {
  var v, A, S, E;
  p = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...p
  };
  const C = WB(u || r), b = C.background, T = C.environment, M = {
    // @ts-ignore
    backgroundBlurriness: C.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: C.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (v = (A = C.backgroundRotation) == null || A.clone == null ? void 0 : A.clone()) !== null && v !== void 0 ? v : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: C.environmentIntensity,
    // @ts-ignore
    environmentRotation: (S = (E = C.environmentRotation) == null || E.clone == null ? void 0 : E.clone()) !== null && S !== void 0 ? S : [0, 0, 0]
  };
  return d !== "only" && (C.environment = f), d && (C.background = f), ji(C, p), () => {
    d !== "only" && (C.environment = T), d && (C.background = b), ji(C, M);
  };
}
function Jy({
  scene: d,
  background: u = !1,
  map: r,
  ...f
}) {
  const p = il((v) => v.scene);
  return xe.useLayoutEffect(() => {
    if (r) return Ly(u, d, p, r, f);
  }), null;
}
function XE({
  background: d = !1,
  scene: u,
  blur: r,
  backgroundBlurriness: f,
  backgroundIntensity: p,
  backgroundRotation: v,
  environmentIntensity: A,
  environmentRotation: S,
  ...E
}) {
  const C = zh(E), b = il((T) => T.scene);
  return xe.useLayoutEffect(() => Ly(d, u, b, C, {
    backgroundBlurriness: r ?? f,
    backgroundIntensity: p,
    backgroundRotation: v,
    environmentIntensity: A,
    environmentRotation: S
  })), xe.useEffect(() => () => {
    C.dispose();
  }, [C]), null;
}
function kB({
  children: d,
  near: u = 0.1,
  far: r = 1e3,
  resolution: f = 256,
  frames: p = 1,
  map: v,
  background: A = !1,
  blur: S,
  backgroundBlurriness: E,
  backgroundIntensity: C,
  backgroundRotation: b,
  environmentIntensity: T,
  environmentRotation: M,
  scene: O,
  files: N,
  path: J,
  preset: Z = void 0,
  extensions: G
}) {
  const U = il((ne) => ne.gl), $ = il((ne) => ne.scene), F = xe.useRef(null), [oe] = xe.useState(() => new tE()), W = xe.useMemo(() => {
    const ne = new ng(f);
    return ne.texture.type = bu, ne;
  }, [f]);
  xe.useEffect(() => () => {
    W.dispose();
  }, [W]), xe.useLayoutEffect(() => {
    if (p === 1) {
      const ne = U.autoClear;
      U.autoClear = !0, F.current.update(U, oe), U.autoClear = ne;
    }
    return Ly(A, O, $, W.texture, {
      backgroundBlurriness: S ?? E,
      backgroundIntensity: C,
      backgroundRotation: b,
      environmentIntensity: T,
      environmentRotation: M
    });
  }, [d, oe, W.texture, O, $, A, p, U]);
  let Te = 1;
  return Gh(() => {
    if (p === 1 / 0 || Te < p) {
      const ne = U.autoClear;
      U.autoClear = !0, F.current.update(U, oe), U.autoClear = ne, Te++;
    }
  }), /* @__PURE__ */ xe.createElement(xe.Fragment, null, hS(/* @__PURE__ */ xe.createElement(xe.Fragment, null, d, /* @__PURE__ */ xe.createElement("cubeCamera", {
    ref: F,
    args: [u, r, W]
  }), N || Z ? /* @__PURE__ */ xe.createElement(XE, {
    background: !0,
    files: N,
    preset: Z,
    path: J,
    extensions: G
  }) : v ? /* @__PURE__ */ xe.createElement(Jy, {
    background: !0,
    map: v,
    extensions: G
  }) : null), oe));
}
function $B(d) {
  var u, r, f, p;
  const v = zh(d), A = d.map || v;
  xe.useMemo(() => SE({
    GroundProjectedEnvImpl: YS
  }), []), xe.useEffect(() => () => {
    v.dispose();
  }, [v]);
  const S = xe.useMemo(() => [A], [A]), E = (u = d.ground) == null ? void 0 : u.height, C = (r = d.ground) == null ? void 0 : r.radius, b = (f = (p = d.ground) == null ? void 0 : p.scale) !== null && f !== void 0 ? f : 1e3;
  return /* @__PURE__ */ xe.createElement(xe.Fragment, null, /* @__PURE__ */ xe.createElement(Jy, jm({}, d, {
    map: A
  })), /* @__PURE__ */ xe.createElement("groundProjectedEnvImpl", {
    args: S,
    scale: b,
    height: E,
    radius: C
  }));
}
function eC(d) {
  return d.ground ? /* @__PURE__ */ xe.createElement($B, d) : d.map ? /* @__PURE__ */ xe.createElement(Jy, d) : d.children ? /* @__PURE__ */ xe.createElement(kB, d) : /* @__PURE__ */ xe.createElement(XE, d);
}
const tC = /* @__PURE__ */ xe.forwardRef(({
  scale: d = 10,
  frames: u = 1 / 0,
  opacity: r = 1,
  width: f = 1,
  height: p = 1,
  blur: v = 1,
  near: A = 0,
  far: S = 10,
  resolution: E = 512,
  smooth: C = !0,
  color: b = "#000000",
  depthWrite: T = !1,
  renderOrder: M,
  ...O
}, N) => {
  const J = xe.useRef(null), Z = il((Ae) => Ae.scene), G = il((Ae) => Ae.gl), U = xe.useRef(null);
  f = f * (Array.isArray(d) ? d[0] : d || 1), p = p * (Array.isArray(d) ? d[1] : d || 1);
  const [$, F, oe, W, Te, ne, ie] = xe.useMemo(() => {
    const Ae = new ht.WebGLRenderTarget(E, E), Ve = new ht.WebGLRenderTarget(E, E);
    Ve.texture.generateMipmaps = Ae.texture.generateMipmaps = !1;
    const D = new ht.PlaneGeometry(f, p).rotateX(Math.PI / 2), Y = new ht.Mesh(D), X = new ht.MeshDepthMaterial();
    X.depthTest = X.depthWrite = !1, X.onBeforeCompile = (de) => {
      de.uniforms = {
        ...de.uniforms,
        ucolor: {
          value: new ht.Color(b)
        }
      }, de.fragmentShader = de.fragmentShader.replace(
        "void main() {",
        //
        `uniform vec3 ucolor;
           void main() {
          `
      ), de.fragmentShader = de.fragmentShader.replace(
        "vec4( vec3( 1.0 - fragCoordZ ), opacity );",
        // Colorize the shadow, multiply by the falloff so that the center can remain darker
        "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );"
      );
    };
    const fe = new ht.ShaderMaterial(NB), x = new ht.ShaderMaterial(UB);
    return x.depthTest = fe.depthTest = !1, [Ae, D, X, Y, fe, x, Ve];
  }, [E, f, p, d, b]), me = (Ae) => {
    W.visible = !0, W.material = Te, Te.uniforms.tDiffuse.value = $.texture, Te.uniforms.h.value = Ae * 1 / 256, G.setRenderTarget(ie), G.render(W, U.current), W.material = ne, ne.uniforms.tDiffuse.value = ie.texture, ne.uniforms.v.value = Ae * 1 / 256, G.setRenderTarget($), G.render(W, U.current), W.visible = !1;
  };
  let De = 0, Xe, te;
  return Gh(() => {
    U.current && (u === 1 / 0 || De < u) && (De++, Xe = Z.background, te = Z.overrideMaterial, J.current.visible = !1, Z.background = null, Z.overrideMaterial = oe, G.setRenderTarget($), G.render(Z, U.current), me(v), C && me(v * 0.4), G.setRenderTarget(null), J.current.visible = !0, Z.overrideMaterial = te, Z.background = Xe);
  }), xe.useImperativeHandle(N, () => J.current, []), /* @__PURE__ */ xe.createElement("group", jm({
    "rotation-x": Math.PI / 2
  }, O, {
    ref: J
  }), /* @__PURE__ */ xe.createElement("mesh", {
    renderOrder: M,
    geometry: F,
    scale: [1, -1, 1],
    rotation: [-Math.PI / 2, 0, 0]
  }, /* @__PURE__ */ xe.createElement("meshBasicMaterial", {
    transparent: !0,
    map: $.texture,
    opacity: r,
    depthWrite: T
  })), /* @__PURE__ */ xe.createElement("orthographicCamera", {
    ref: U,
    args: [-f / 2, f / 2, p / 2, -p / 2, A, S]
  }));
}), aC = ({ selectedView: d, selectedProduct: u }) => {
  const r = cy(null), { scene: f, error: p } = Ym("/models/sample-man-model.glb");
  console.log(u);
  const v = Jm(() => f ? f.clone() : null, [f]);
  return Gh(() => {
    if (!r.current) return;
    const S = ((M) => {
      switch (M) {
        case "front":
          return 0;
        case "side":
          return Math.PI / 2;
        case "back":
          return Math.PI;
        default:
          return 0;
      }
    })(d), E = r.current.rotation.y, C = S - E, b = Math.atan2(Math.sin(C), Math.cos(C)), T = 0.1;
    r.current.rotation.y += b * T;
  }), p ? (console.error("Failed to load avatar model:", p), null) : v ? /* @__PURE__ */ k.jsx(
    "primitive",
    {
      ref: r,
      object: v,
      scale: 1.8,
      position: [0, -2.5, 0],
      castShadow: !0,
      receiveShadow: !0
    }
  ) : null;
}, nC = () => /* @__PURE__ */ k.jsxs(
  "mesh",
  {
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2.5, 0],
    receiveShadow: !0,
    children: [
      /* @__PURE__ */ k.jsx("planeGeometry", { args: [10, 10] }),
      /* @__PURE__ */ k.jsx(
        "meshStandardMaterial",
        {
          color: "#f5f5f5",
          transparent: !0,
          opacity: 0
        }
      )
    ]
  }
), lC = ({ selectedView: d, selectedProduct: u }) => {
  const r = Jm(() => ({
    ambient: { intensity: 0.6 },
    directional: {
      position: [5, 10, 5],
      intensity: 1.2,
      shadow: {
        mapSize: [2048, 2048],
        camera: {
          far: 50,
          left: -10,
          right: 10,
          top: 10,
          bottom: -10
        }
      }
    },
    point: {
      position: [-5, 5, -5],
      intensity: 0.3
    }
  }), []);
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx("ambientLight", { intensity: r.ambient.intensity }),
    /* @__PURE__ */ k.jsx(
      "directionalLight",
      {
        position: r.directional.position,
        intensity: r.directional.intensity,
        castShadow: !0,
        "shadow-mapSize": r.directional.shadow.mapSize,
        "shadow-camera-far": r.directional.shadow.camera.far,
        "shadow-camera-left": r.directional.shadow.camera.left,
        "shadow-camera-right": r.directional.shadow.camera.right,
        "shadow-camera-top": r.directional.shadow.camera.top,
        "shadow-camera-bottom": r.directional.shadow.camera.bottom
      }
    ),
    /* @__PURE__ */ k.jsx(
      "pointLight",
      {
        position: r.point.position,
        intensity: r.point.intensity
      }
    ),
    /* @__PURE__ */ k.jsx(eC, { preset: "apartment" }),
    /* @__PURE__ */ k.jsx(nC, {}),
    /* @__PURE__ */ k.jsx(
      tC,
      {
        position: [0, -2.49, 0],
        opacity: 0.6,
        scale: 4,
        blur: 2,
        far: 2.5,
        color: "#000000"
      }
    ),
    /* @__PURE__ */ k.jsx(aC, { selectedView: d, selectedProduct: u }),
    /* @__PURE__ */ k.jsx(
      LB,
      {
        enablePan: !1,
        enableZoom: !0,
        enableRotate: !0,
        minDistance: 4,
        maxDistance: 10,
        minPolarAngle: Math.PI / 2,
        maxPolarAngle: Math.PI / 2,
        target: [0, 0.75, 0],
        minAzimuthAngle: -1 / 0,
        maxAzimuthAngle: 1 / 0
      }
    )
  ] });
}, uC = () => /* @__PURE__ */ k.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ k.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-black" }) }), iC = ({ error: d }) => /* @__PURE__ */ k.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center text-red-500", children: [
  /* @__PURE__ */ k.jsx("p", { className: "text-lg font-semibold mb-2", children: "Error loading avatar" }),
  /* @__PURE__ */ k.jsx("p", { className: "text-sm", children: d })
] }), sC = ({ onCreateAvatar: d }) => /* @__PURE__ */ k.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center bg-gray-50", children: [
  /* @__PURE__ */ k.jsx("div", { className: "w-32 h-32 flex items-center justify-center mb-6", children: /* @__PURE__ */ k.jsx(
    "img",
    {
      src: "/icons/Vector.png",
      alt: "Avatar placeholder",
      className: "w-full h-full object-contain",
      onError: (u) => {
        const r = u.target;
        r.style.display = "none";
      }
    }
  ) }),
  /* @__PURE__ */ k.jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-6", children: "No avatar available" }),
  /* @__PURE__ */ k.jsxs(
    "button",
    {
      className: "flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50",
      onClick: d,
      disabled: !d,
      "aria-label": "Create new avatar",
      children: [
        /* @__PURE__ */ k.jsx(
          "img",
          {
            src: "/icons/box.png",
            alt: "",
            className: "w-5 h-5",
            onError: (u) => {
              const r = u.target;
              r.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ k.jsx("span", { children: "Create Avatar" })
      ]
    }
  )
] }), oC = ({ selectedView: d, onViewChange: u }) => {
  const r = Jm(() => [
    {
      id: "front",
      icon: "/icons/view-controls/set-standing-pose-man-silhouette-1.png",
      label: "Front"
    },
    {
      id: "side",
      icon: "/icons/view-controls/set-standing-pose-man-silhouette-2.png",
      label: "Side"
    },
    {
      id: "back",
      icon: "/icons/view-controls/set-standing-pose-man-silhouette-3.png",
      label: "Back"
    }
  ], []);
  return /* @__PURE__ */ k.jsx("div", { className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ k.jsx("div", { className: "flex space-x-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg", children: r.map((f) => /* @__PURE__ */ k.jsxs(
    "button",
    {
      onClick: () => u(f.id),
      className: `flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${d === f.id ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"}`,
      "aria-label": `Switch to ${f.label} view`,
      children: [
        /* @__PURE__ */ k.jsx(
          "img",
          {
            src: f.icon,
            alt: f.label,
            className: `w-8 h-8 object-contain mb-2 transition-all duration-200 ${d === f.id ? "filter invert" : ""}`,
            onError: (p) => {
              const v = p.target;
              v.style.opacity = "0.5";
            }
          }
        ),
        /* @__PURE__ */ k.jsx("span", { className: "text-xs font-medium", children: f.label })
      ]
    },
    f.id
  )) }) });
}, cC = ({
  hasAvatar: d = !0,
  onCreateAvatar: u,
  selectedProduct: r
}) => {
  const [f, p] = ni("front"), [v, A] = ni(!1), [S, E] = ni(null), C = Tf((M) => {
    p(M);
  }, []), b = Tf(() => {
    if (u) {
      A(!0);
      try {
        u();
      } catch (M) {
        E(M instanceof Error ? M.message : "Failed to create avatar");
      } finally {
        A(!1);
      }
    }
  }, [u]), T = Jm(() => ({
    shadows: !0,
    camera: {
      position: [0, 1, 3],
      fov: 35,
      near: 0.1,
      far: 100
    },
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f4f4f4ff"
    }
  }), []);
  return S ? /* @__PURE__ */ k.jsx("div", { className: "h-full flex flex-col relative bg-gray-50", children: /* @__PURE__ */ k.jsx(iC, { error: S }) }) : v ? /* @__PURE__ */ k.jsx("div", { className: "h-full flex flex-col relative bg-gray-50", children: /* @__PURE__ */ k.jsx(uC, {}) }) : /* @__PURE__ */ k.jsx("div", { className: "h-full flex flex-col relative bg-gray-50", children: /* @__PURE__ */ k.jsx("div", { className: "flex-1 relative", children: d ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(
      RS,
      {
        shadows: T.shadows,
        camera: T.camera,
        style: T.style,
        onError: (M) => {
          console.error("Canvas error:", M), E("Failed to initialize 3D viewer");
        },
        children: /* @__PURE__ */ k.jsx(lC, { selectedView: f, selectedProduct: r })
      }
    ),
    /* @__PURE__ */ k.jsx(
      oC,
      {
        selectedView: f,
        onViewChange: C
      }
    )
  ] }) : /* @__PURE__ */ k.jsx(sC, { onCreateAvatar: b }) }) });
};
try {
  Ym.preload("/models/sample-man-model.glb");
} catch (d) {
  console.warn("Failed to preload avatar model:", d);
}
const rC = ({
  selectedProduct: d,
  onClearLook: u,
  onShopLook: r
}) => {
  const [f, p] = ni("Medium"), [v, A] = ni("white"), S = ["Small", "Medium", "Large", "XL"], E = [
    { name: "white", value: "#FFFFFF" },
    { name: "black", value: "#000000" },
    { name: "blue", value: "#3B82F6" },
    { name: "gray", value: "#6B7280" }
  ], C = !!d?.id, b = C ? 1 : 0, T = Tf(() => {
    u && u();
  }, [u]), M = Tf(() => {
    r && d && r([d], {
      size: f,
      color: v
    });
  }, [r, d, f, v]), O = Tf(() => {
    T();
  }, [T]), N = Tf(() => {
    console.log("Style with AI clicked");
  }, []);
  return C ? /* @__PURE__ */ k.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ k.jsx("h3", { className: "text-lg font-semibold", children: "Your Look" }),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            className: "text-blue-600 text-sm hover:text-blue-800 transition-colors duration-200",
            onClick: T,
            children: "Clear"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("p", { className: "text-sm text-gray-500", children: [
        b,
        " item",
        b !== 1 ? "s" : "",
        " selected"
      ] })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "p-4", children: /* @__PURE__ */ k.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200",
        onClick: N,
        children: [
          /* @__PURE__ */ k.jsx("span", { children: "✨" }),
          /* @__PURE__ */ k.jsx("span", { className: "font-medium", children: "Style with AI" })
        ]
      }
    ) }),
    /* @__PURE__ */ k.jsx("div", { className: "flex-1 p-4 overflow-y-auto", children: /* @__PURE__ */ k.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-gray-100", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex items-start space-x-3 mb-4", children: [
        /* @__PURE__ */ k.jsx(
          "img",
          {
            src: d?.image || "/images/placeholder.png",
            alt: d?.name || "Product",
            className: "w-20 h-20 object-cover rounded",
            onError: (J) => {
              const Z = J.target;
              Z.src = "/images/placeholder.png";
            }
          }
        ),
        /* @__PURE__ */ k.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ k.jsx("p", { className: "text-xs text-gray-500 mb-1", children: d?.brand || "Unknown Brand" }),
          /* @__PURE__ */ k.jsx("h4", { className: "text-sm font-medium text-gray-900 mb-1 line-clamp-2", children: d?.name || "Unnamed Product" }),
          /* @__PURE__ */ k.jsx("p", { className: "text-sm font-semibold text-gray-900", children: d?.price || "Price not available" })
        ] }),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            className: "text-gray-400 hover:text-gray-600 transition-colors duration-200",
            onClick: O,
            "aria-label": "Remove item",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ k.jsxs("div", { children: [
          /* @__PURE__ */ k.jsx("label", { htmlFor: "size-select", className: "block text-sm font-medium text-gray-700 mb-2", children: "Size" }),
          /* @__PURE__ */ k.jsx(
            "select",
            {
              id: "size-select",
              value: f,
              onChange: (J) => p(J.target.value),
              className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
              children: S.map((J) => /* @__PURE__ */ k.jsx("option", { value: J, children: J }, J))
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs("div", { children: [
          /* @__PURE__ */ k.jsx("label", { htmlFor: "color-select", className: "block text-sm font-medium text-gray-700 mb-2", children: "Color" }),
          /* @__PURE__ */ k.jsx(
            "select",
            {
              id: "color-select",
              value: v,
              onChange: (J) => A(J.target.value),
              className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 capitalize",
              children: E.map((J) => /* @__PURE__ */ k.jsx("option", { value: J.name, children: J.name }, J.name))
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ k.jsx("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ k.jsx(
      "button",
      {
        className: "w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        onClick: M,
        disabled: !C,
        children: /* @__PURE__ */ k.jsx("span", { children: "Shop this look" })
      }
    ) })
  ] }) : /* @__PURE__ */ k.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ k.jsx("h3", { className: "text-lg font-semibold", children: "Your Look" }),
      /* @__PURE__ */ k.jsx("p", { className: "text-sm text-gray-500", children: "No items selected" })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "flex-1 flex items-center justify-center text-gray-500", children: /* @__PURE__ */ k.jsx("p", { children: "Select items to create your look" }) })
  ] });
}, fC = "/qr/sample-qr.png", dC = ({ onClose: d }) => /* @__PURE__ */ k.jsx("div", { className: "fixed inset-0 bg-[#00000085] flex justify-center items-center z-50", children: /* @__PURE__ */ k.jsxs("div", { className: "bg-white rounded-xl p-8 max-w-md w-full mx-4 relative", children: [
  /* @__PURE__ */ k.jsx(
    "button",
    {
      className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
      onClick: d,
      children: /* @__PURE__ */ k.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ k.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  ),
  /* @__PURE__ */ k.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ k.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: "Let's create you virtual avatar" }) }),
  /* @__PURE__ */ k.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ k.jsx("div", { className: "w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ k.jsx(
    "img",
    {
      src: fC,
      alt: "QR Code",
      className: "w-48 h-48 object-contain"
    }
  ) }) }),
  /* @__PURE__ */ k.jsxs("div", { className: "space-y-4 mb-8", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "flex items-start space-x-4", children: [
      /* @__PURE__ */ k.jsx("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ k.jsx("span", { className: "text-sm font-semibold text-gray-700", children: "1" }) }),
      /* @__PURE__ */ k.jsxs("div", { children: [
        /* @__PURE__ */ k.jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: "Scan QR from your phone" }),
        /* @__PURE__ */ k.jsx("p", { className: "text-sm text-gray-600", children: "Scan this QR from the camera app on your mobile." })
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { className: "flex items-start space-x-4", children: [
      /* @__PURE__ */ k.jsx("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ k.jsx("span", { className: "text-sm font-semibold text-gray-700", children: "2" }) }),
      /* @__PURE__ */ k.jsxs("div", { children: [
        /* @__PURE__ */ k.jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: "Upload or take a photo of your face & body" }),
        /* @__PURE__ */ k.jsx("p", { className: "text-sm text-gray-600", children: "Follow instructions to scan your face & body." })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ k.jsx(
    "button",
    {
      className: "w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium",
      onClick: d,
      children: "Close"
    }
  )
] }) }), yC = ({
  onClose: d,
  productData: u = {},
  config: r = {}
}) => {
  const [f, p] = ni(!1), [v, A] = ni(u), S = r.hasAvatar ?? !0, E = () => {
    d && d();
  }, C = () => {
    p(!0);
  }, b = (T) => {
    A(T);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: "relative w-full h-screen bg-gray-100 flex", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "absolute top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-between px-6", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ k.jsx("h1", { className: "text-xl font-semibold", children: "Virtual Trial Room" }),
        v.name && /* @__PURE__ */ k.jsxs("span", { className: "text-gray-600", children: [
          "- ",
          v.name
        ] })
      ] }),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: "text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200",
          onClick: E,
          "aria-label": "Close trial room",
          children: "✕"
        }
      )
    ] }),
    /* @__PURE__ */ k.jsxs("div", { className: "flex w-full pt-16", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "w-80 bg-white h-[calc(100vh-4rem)] border-r border-gray-200", children: [
        /* @__PURE__ */ k.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ k.jsx("h2", { className: "text-lg font-semibold", children: "Select Clothes" }) }),
        /* @__PURE__ */ k.jsx(
          sg,
          {
            selectedProduct: v,
            onProductSelect: b,
            showWishlist: r.showWishlist
          }
        )
      ] }),
      /* @__PURE__ */ k.jsx("div", { className: "flex-1 bg-white h-[calc(100vh-4rem)]", children: /* @__PURE__ */ k.jsx(
        cC,
        {
          hasAvatar: S,
          onCreateAvatar: C,
          selectedProduct: v
        }
      ) }),
      /* @__PURE__ */ k.jsxs("div", { className: "w-80 bg-white h-[calc(100vh-4rem)] border-l border-gray-200", children: [
        /* @__PURE__ */ k.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ k.jsx("h2", { className: "text-lg font-semibold", children: "Styling Options" }) }),
        /* @__PURE__ */ k.jsx(rC, { selectedProduct: v })
      ] })
    ] }),
    f && /* @__PURE__ */ k.jsx(dC, { onClose: () => p(!1) })
  ] });
};
export {
  yC as Trialroom
};
