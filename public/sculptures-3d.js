var yr = 1e3, hn = 1001, ps = 1002, Pt = 1003, _l = 1004, Ml = 1005, Ot = 1006, Sl = 1007, Es = 1008, Sn = 1009, xl = 1010, yl = 1011, Qa = 1012, El = 1013, Cn = 1014, Vi = 1015, xn = 1016, ja = 1017, eo = 1018, to = 1020, Tl = 35902, bl = 35899, Al = 1021, wl = 1022, Ni = 1023, Ui = 1026, no = 1027, io = 1028, ro = 1029, Er = 1030, so = 1031, ao = 1033, Rl = 33776, Cl = 33777, Pl = 33778, Ll = 33779, Il = 35840, Nl = 35841, Ul = 35842, Dl = 35843, Ol = 36196, Fl = 37492, Bl = 37496, zl = 37488, Vl = 37489, Gl = 37490, Hl = 37491, kl = 37808, Wl = 37809, Xl = 37810, ql = 37811, Yl = 37812, Zl = 37813, Kl = 37814, Jl = 37815, $l = 37816, Ql = 37817, jl = 37818, ec = 37819, tc = 37820, nc = 37821, ic = 36492, rc = 36494, sc = 36495, ac = 36283, oc = 36284, lc = 36285, cc = 36286, Tr = 2300, ms = 2301, Ur = 2302, Xs = 2303, qs = 2400, Ys = 2401, Zs = 2402, hc = 3200;
var Ct = "srgb", gs = "srgb-linear", br = "linear", Ar = "srgb", Dr = 7680;
var uc = 35044;
var hi = 2e3;
function fc(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function dc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function wr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function pc() {
  const e = wr("canvas");
  return e.style.display = "block", e;
}
var Ks = {}, ui = null;
function Js(...e) {
  const t = "THREE." + e.shift();
  ui ? ui("log", t, ...e) : console.log(t, ...e);
}
function oo(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const n = e[1];
    n && n.isStackTrace ? e[0] += " " + n.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function Oe(...e) {
  e = oo(e);
  const t = "THREE." + e.shift();
  if (ui) ui("warn", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function Be(...e) {
  e = oo(e);
  const t = "THREE." + e.shift();
  if (ui) ui("error", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function oi(...e) {
  const t = e.join(" ");
  t in Ks || (Ks[t] = !0, Oe(...e));
}
function mc(e, t, n) {
  return new Promise(function(i, r) {
    function s() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          r();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(s, n);
          break;
        default:
          i();
      }
    }
    setTimeout(s, n);
  });
}
var gc = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
}, Nn = class {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, s = i.length; r < s; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}, bt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff"
], $s = 1234567, Ci = Math.PI / 180, Di = 180 / Math.PI;
function Un() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (bt[e & 255] + bt[e >> 8 & 255] + bt[e >> 16 & 255] + bt[e >> 24 & 255] + "-" + bt[t & 255] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 15 | 64] + bt[t >> 24 & 255] + "-" + bt[n & 63 | 128] + bt[n >> 8 & 255] + "-" + bt[n >> 16 & 255] + bt[n >> 24 & 255] + bt[i & 255] + bt[i >> 8 & 255] + bt[i >> 16 & 255] + bt[i >> 24 & 255]).toLowerCase();
}
function qe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ts(e, t) {
  return (e % t + t) % t;
}
function vc(e, t, n, i, r) {
  return i + (e - t) * (r - i) / (n - t);
}
function _c(e, t, n) {
  return e !== t ? (n - e) / (t - e) : 0;
}
function Pi(e, t, n) {
  return (1 - n) * e + n * t;
}
function Mc(e, t, n, i) {
  return Pi(e, t, 1 - Math.exp(-n * i));
}
function Sc(e, t = 1) {
  return t - Math.abs(Ts(e, t * 2) - t);
}
function xc(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function yc(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Ec(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function Tc(e, t) {
  return e + Math.random() * (t - e);
}
function bc(e) {
  return e * (0.5 - Math.random());
}
function Ac(e) {
  e !== void 0 && ($s = e);
  let t = $s += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function wc(e) {
  return e * Ci;
}
function Rc(e) {
  return e * Di;
}
function Cc(e) {
  return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function Pc(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function Lc(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function Ic(e, t, n, i, r) {
  const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((t + i) / 2), u = a((t + i) / 2), d = s((t - i) / 2), h = a((t - i) / 2), p = s((i - t) / 2), _ = a((i - t) / 2);
  switch (r) {
    case "XYX":
      e.set(o * u, l * d, l * h, o * c);
      break;
    case "YZY":
      e.set(l * h, o * u, l * d, o * c);
      break;
    case "ZXZ":
      e.set(l * d, l * h, o * u, o * c);
      break;
    case "XZX":
      e.set(o * u, l * _, l * p, o * c);
      break;
    case "YXY":
      e.set(l * p, o * u, l * _, o * c);
      break;
    case "ZYZ":
      e.set(l * _, l * p, o * u, o * c);
      break;
    default:
      Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function ni(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function wt(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
var Nc = {
  DEG2RAD: Ci,
  RAD2DEG: Di,
  generateUUID: Un,
  clamp: qe,
  euclideanModulo: Ts,
  mapLinear: vc,
  inverseLerp: _c,
  lerp: Pi,
  damp: Mc,
  pingpong: Sc,
  smoothstep: xc,
  smootherstep: yc,
  randInt: Ec,
  randFloat: Tc,
  randFloatSpread: bc,
  seededRandom: Ac,
  degToRad: wc,
  radToDeg: Rc,
  isPowerOfTwo: Cc,
  ceilPowerOfTwo: Pc,
  floorPowerOfTwo: Lc,
  setQuaternionFromProperEuler: Ic,
  normalize: wt,
  denormalize: ni
}, de = class lo {
  static {
    lo.prototype.isVector2 = !0;
  }
  constructor(t = 0, n = 0) {
    this.x = t, this.y = n;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, n) {
    return this.x = t, this.y = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, n) {
    switch (t) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, n) {
    return this.x = t.x + n.x, this.y = t.y + n.y, this;
  }
  addScaledVector(t, n) {
    return this.x += t.x * n, this.y += t.y * n, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, n) {
    return this.x = t.x - n.x, this.y = t.y - n.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const n = this.x, i = this.y, r = t.elements;
    return this.x = r[0] * n + r[3] * i + r[6], this.y = r[1] * n + r[4] * i + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, n) {
    return this.x = qe(this.x, t.x, n.x), this.y = qe(this.y, t.y, n.y), this;
  }
  clampScalar(t, n) {
    return this.x = qe(this.x, t, n), this.y = qe(this.y, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, t, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const n = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(t) / n;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const n = this.x - t.x, i = this.y - t.y;
    return n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, n) {
    return this.x += (t.x - this.x) * n, this.y += (t.y - this.y) * n, this;
  }
  lerpVectors(t, n, i) {
    return this.x = t.x + (n.x - t.x) * i, this.y = t.y + (n.y - t.y) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, n = 0) {
    return this.x = t[n], this.y = t[n + 1], this;
  }
  toArray(t = [], n = 0) {
    return t[n] = this.x, t[n + 1] = this.y, t;
  }
  fromBufferAttribute(t, n) {
    return this.x = t.getX(n), this.y = t.getY(n), this;
  }
  rotateAround(t, n) {
    const i = Math.cos(n), r = Math.sin(n), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * i - a * r + t.x, this.y = s * r + a * i + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}, Dn = class {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, a) {
    let o = n[i + 0], l = n[i + 1], c = n[i + 2], u = n[i + 3], d = r[s + 0], h = r[s + 1], p = r[s + 2], _ = r[s + 3];
    if (u !== _ || o !== d || l !== h || c !== p) {
      let M = o * d + l * h + c * p + u * _;
      M < 0 && (d = -d, h = -h, p = -p, _ = -_, M = -M);
      let g = 1 - a;
      if (M < 0.9995) {
        const f = Math.acos(M), T = Math.sin(f);
        g = Math.sin(g * f) / T, a = Math.sin(a * f) / T, o = o * g + d * a, l = l * g + h * a, c = c * g + p * a, u = u * g + _ * a;
      } else {
        o = o * g + d * a, l = l * g + h * a, c = c * g + p * a, u = u * g + _ * a;
        const f = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
        o *= f, l *= f, c *= f, u *= f;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], u = r[s], d = r[s + 1], h = r[s + 2], p = r[s + 3];
    return e[t] = a * p + c * u + o * h - l * d, e[t + 1] = o * p + c * d + l * u - a * h, e[t + 2] = l * p + c * h + a * d - o * u, e[t + 3] = c * p - a * u - o * d - l * h, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, s = e._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), u = a(r / 2), d = o(n / 2), h = o(i / 2), p = o(r / 2);
    switch (s) {
      case "XYZ":
        this._x = d * c * u + l * h * p, this._y = l * h * u - d * c * p, this._z = l * c * p + d * h * u, this._w = l * c * u - d * h * p;
        break;
      case "YXZ":
        this._x = d * c * u + l * h * p, this._y = l * h * u - d * c * p, this._z = l * c * p - d * h * u, this._w = l * c * u + d * h * p;
        break;
      case "ZXY":
        this._x = d * c * u - l * h * p, this._y = l * h * u + d * c * p, this._z = l * c * p + d * h * u, this._w = l * c * u - d * h * p;
        break;
      case "ZYX":
        this._x = d * c * u - l * h * p, this._y = l * h * u + d * c * p, this._z = l * c * p - d * h * u, this._w = l * c * u + d * h * p;
        break;
      case "YZX":
        this._x = d * c * u + l * h * p, this._y = l * h * u + d * c * p, this._z = l * c * p - d * h * u, this._w = l * c * u - d * h * p;
        break;
      case "XZY":
        this._x = d * c * u - l * h * p, this._y = l * h * u - d * c * p, this._z = l * c * p + d * h * u, this._w = l * c * u + d * h * p;
        break;
      default:
        Oe("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const h = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / h, this._x = (c - o) * h, this._y = (r - l) * h, this._z = (s - i) * h;
    } else if (n > a && n > u) {
      const h = 2 * Math.sqrt(1 + n - a - u);
      this._w = (c - o) / h, this._x = 0.25 * h, this._y = (i + s) / h, this._z = (r + l) / h;
    } else if (a > u) {
      const h = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - l) / h, this._x = (i + s) / h, this._y = 0.25 * h, this._z = (o + c) / h;
    } else {
      const h = 2 * Math.sqrt(1 + u - n - a);
      this._w = (s - i) / h, this._x = (r + l) / h, this._y = (o + c) / h, this._z = 0.25 * h;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(qe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._w, a = t._x, o = t._y, l = t._z, c = t._w;
    return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let n = e._x, i = e._y, r = e._z, s = e._w, a = this.dot(e);
    a < 0 && (n = -n, i = -i, r = -r, s = -s, a = -a);
    let o = 1 - t;
    if (a < 0.9995) {
      const l = Math.acos(a), c = Math.sin(l);
      o = Math.sin(o * l) / c, t = Math.sin(t * l) / c, this._x = this._x * o + n * t, this._y = this._y * o + i * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this._onChangeCallback();
    } else
      this._x = this._x * o + n * t, this._y = this._y * o + i * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}, I = class co {
  static {
    co.prototype.isVector3 = !0;
  }
  constructor(t = 0, n = 0, i = 0) {
    this.x = t, this.y = n, this.z = i;
  }
  set(t, n, i) {
    return i === void 0 && (i = this.z), this.x = t, this.y = n, this.z = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, n) {
    switch (t) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, n) {
    return this.x = t.x + n.x, this.y = t.y + n.y, this.z = t.z + n.z, this;
  }
  addScaledVector(t, n) {
    return this.x += t.x * n, this.y += t.y * n, this.z += t.z * n, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, n) {
    return this.x = t.x - n.x, this.y = t.y - n.y, this.z = t.z - n.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, n) {
    return this.x = t.x * n.x, this.y = t.y * n.y, this.z = t.z * n.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Qs.setFromEuler(t));
  }
  applyAxisAngle(t, n) {
    return this.applyQuaternion(Qs.setFromAxisAngle(t, n));
  }
  applyMatrix3(t) {
    const n = this.x, i = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * n + s[3] * i + s[6] * r, this.y = s[1] * n + s[4] * i + s[7] * r, this.z = s[2] * n + s[5] * i + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const n = this.x, i = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * n + s[7] * i + s[11] * r + s[15]);
    return this.x = (s[0] * n + s[4] * i + s[8] * r + s[12]) * a, this.y = (s[1] * n + s[5] * i + s[9] * r + s[13]) * a, this.z = (s[2] * n + s[6] * i + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const n = this.x, i = this.y, r = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * r - o * i), u = 2 * (o * n - s * r), d = 2 * (s * i - a * n);
    return this.x = n + l * c + a * d - o * u, this.y = i + l * u + o * c - s * d, this.z = r + l * d + s * u - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const n = this.x, i = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * n + s[4] * i + s[8] * r, this.y = s[1] * n + s[5] * i + s[9] * r, this.z = s[2] * n + s[6] * i + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, n) {
    return this.x = qe(this.x, t.x, n.x), this.y = qe(this.y, t.y, n.y), this.z = qe(this.z, t.z, n.z), this;
  }
  clampScalar(t, n) {
    return this.x = qe(this.x, t, n), this.y = qe(this.y, t, n), this.z = qe(this.z, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, t, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, n) {
    return this.x += (t.x - this.x) * n, this.y += (t.y - this.y) * n, this.z += (t.z - this.z) * n, this;
  }
  lerpVectors(t, n, i) {
    return this.x = t.x + (n.x - t.x) * i, this.y = t.y + (n.y - t.y) * i, this.z = t.z + (n.z - t.z) * i, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, n) {
    const i = t.x, r = t.y, s = t.z, a = n.x, o = n.y, l = n.z;
    return this.x = r * l - s * o, this.y = s * a - i * l, this.z = i * o - r * a, this;
  }
  projectOnVector(t) {
    const n = t.lengthSq();
    if (n === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / n;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return Or.copy(this).projectOnVector(t), this.sub(Or);
  }
  reflect(t) {
    return this.sub(Or.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const n = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(t) / n;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const n = this.x - t.x, i = this.y - t.y, r = this.z - t.z;
    return n * n + i * i + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, n, i) {
    const r = Math.sin(n) * t;
    return this.x = r * Math.sin(i), this.y = Math.cos(n) * t, this.z = r * Math.cos(i), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, n, i) {
    return this.x = t * Math.sin(n), this.y = i, this.z = t * Math.cos(n), this;
  }
  setFromMatrixPosition(t) {
    const n = t.elements;
    return this.x = n[12], this.y = n[13], this.z = n[14], this;
  }
  setFromMatrixScale(t) {
    const n = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = n, this.y = i, this.z = r, this;
  }
  setFromMatrixColumn(t, n) {
    return this.fromArray(t.elements, n * 4);
  }
  setFromMatrix3Column(t, n) {
    return this.fromArray(t.elements, n * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, n = 0) {
    return this.x = t[n], this.y = t[n + 1], this.z = t[n + 2], this;
  }
  toArray(t = [], n = 0) {
    return t[n] = this.x, t[n + 1] = this.y, t[n + 2] = this.z, t;
  }
  fromBufferAttribute(t, n) {
    return this.x = t.getX(n), this.y = t.getY(n), this.z = t.getZ(n), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, n = Math.random() * 2 - 1, i = Math.sqrt(1 - n * n);
    return this.x = i * Math.cos(t), this.y = n, this.z = i * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}, Or = /* @__PURE__ */ new I(), Qs = /* @__PURE__ */ new Dn(), ke = class ho {
  static {
    ho.prototype.isMatrix3 = !0;
  }
  constructor(t, n, i, r, s, a, o, l, c) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, l, c);
  }
  set(t, n, i, r, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = t, u[1] = r, u[2] = o, u[3] = n, u[4] = s, u[5] = l, u[6] = i, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const n = this.elements, i = t.elements;
    return n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], this;
  }
  extractBasis(t, n, i) {
    return t.setFromMatrix3Column(this, 0), n.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const n = t.elements;
    return this.set(n[0], n[4], n[8], n[1], n[5], n[9], n[2], n[6], n[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, n) {
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[3], l = i[6], c = i[1], u = i[4], d = i[7], h = i[2], p = i[5], _ = i[8], M = r[0], g = r[3], f = r[6], T = r[1], S = r[4], v = r[7], E = r[2], R = r[5], w = r[8];
    return s[0] = a * M + o * T + l * E, s[3] = a * g + o * S + l * R, s[6] = a * f + o * v + l * w, s[1] = c * M + u * T + d * E, s[4] = c * g + u * S + d * R, s[7] = c * f + u * v + d * w, s[2] = h * M + p * T + _ * E, s[5] = h * g + p * S + _ * R, s[8] = h * f + p * v + _ * w, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= t, n[4] *= t, n[7] *= t, n[2] *= t, n[5] *= t, n[8] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return n * a * u - n * o * c - i * s * u + i * o * l + r * s * c - r * a * l;
  }
  invert() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = u * a - o * c, h = o * l - u * s, p = c * s - a * l, _ = n * d + i * h + r * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / _;
    return t[0] = d * M, t[1] = (r * c - u * i) * M, t[2] = (o * i - r * a) * M, t[3] = h * M, t[4] = (u * n - r * l) * M, t[5] = (r * s - o * n) * M, t[6] = p * M, t[7] = (i * l - c * n) * M, t[8] = (a * n - i * s) * M, this;
  }
  transpose() {
    let t;
    const n = this.elements;
    return t = n[1], n[1] = n[3], n[3] = t, t = n[2], n[2] = n[6], n[6] = t, t = n[5], n[5] = n[7], n[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const n = this.elements;
    return t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8], this;
  }
  setUvTransform(t, n, i, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(i * l, i * c, -i * (l * a + c * o) + a + t, -r * c, r * l, -r * (-c * a + l * o) + o + n, 0, 0, 1), this;
  }
  scale(t, n) {
    return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Fr.makeScale(t, n)), this;
  }
  rotate(t) {
    return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Fr.makeRotation(-t)), this;
  }
  translate(t, n) {
    return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Fr.makeTranslation(t, n)), this;
  }
  makeTranslation(t, n) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, n, 0, 0, 1), this;
  }
  makeRotation(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(n, -i, 0, i, n, 0, 0, 0, 1), this;
  }
  makeScale(t, n) {
    return this.set(t, 0, 0, 0, n, 0, 0, 0, 1), this;
  }
  equals(t) {
    const n = this.elements, i = t.elements;
    for (let r = 0; r < 9; r++) if (n[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(t, n = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = t[i + n];
    return this;
  }
  toArray(t = [], n = 0) {
    const i = this.elements;
    return t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3], t[n + 4] = i[4], t[n + 5] = i[5], t[n + 6] = i[6], t[n + 7] = i[7], t[n + 8] = i[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}, Fr = /* @__PURE__ */ new ke(), js = /* @__PURE__ */ new ke().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ea = /* @__PURE__ */ new ke().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Uc() {
  const e = {
    enabled: !0,
    workingColorSpace: gs,
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === "srgb" && (r.r = un(r.r), r.g = un(r.g), r.b = un(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === "srgb" && (r.r = li(r.r), r.g = li(r.g), r.b = li(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? br : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    fromWorkingColorSpace: function(r, s) {
      return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(r, s);
    }
  }, t = [
    0.64,
    0.33,
    0.3,
    0.6,
    0.15,
    0.06
  ], n = [
    0.2126,
    0.7152,
    0.0722
  ], i = [0.3127, 0.329];
  return e.define({
    [gs]: {
      primaries: t,
      whitePoint: i,
      transfer: br,
      toXYZ: js,
      fromXYZ: ea,
      luminanceCoefficients: n,
      workingColorSpaceConfig: { unpackColorSpace: Ct },
      outputColorSpaceConfig: { drawingBufferColorSpace: Ct }
    },
    [Ct]: {
      primaries: t,
      whitePoint: i,
      transfer: Ar,
      toXYZ: js,
      fromXYZ: ea,
      luminanceCoefficients: n,
      outputColorSpaceConfig: { drawingBufferColorSpace: Ct }
    }
  }), e;
}
var $e = /* @__PURE__ */ Uc();
function un(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function li(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
var Vn, Dc = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Vn === void 0 && (Vn = wr("canvas")), Vn.width = e.width, Vn.height = e.height;
      const i = Vn.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Vn;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = wr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++) r[s] = un(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(un(t[n] / 255) * 255) : t[n] = un(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, Oc = 0, bs = class {
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Oc++ }), this.uuid = Un(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let s = 0, a = i.length; s < a; s++) i[s].isDataTexture ? r.push(Br(i[s].image)) : r.push(Br(i[s]));
      } else r = Br(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
};
function Br(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Dc.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (Oe("Texture: Unable to serialize Texture."), {});
}
var Fc = 0, zr = /* @__PURE__ */ new I(), Gt = class Mr extends Nn {
  constructor(t = Mr.DEFAULT_IMAGE, n = Mr.DEFAULT_MAPPING, i = hn, r = hn, s = Ot, a = Es, o = Ni, l = Sn, c = Mr.DEFAULT_ANISOTROPY, u = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Fc++ }), this.uuid = Un(), this.name = "", this.source = new bs(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new de(0, 0), this.repeat = new de(1, 1), this.center = new de(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ke(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  get width() {
    return this.source.getSize(zr).x;
  }
  get height() {
    return this.source.getSize(zr).y;
  }
  get depth() {
    return this.source.getSize(zr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, n) {
    this.updateRanges.push({
      start: t,
      count: n
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  setValues(t) {
    for (const n in t) {
      const i = t[n];
      if (i === void 0) {
        Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);
        continue;
      }
      const r = this[n];
      if (r === void 0) {
        Oe(`Texture.setValues(): property '${n}' does not exist.`);
        continue;
      }
      r && i && r.isVector2 && i.isVector2 || r && i && r.isVector3 && i.isVector3 || r && i && r.isMatrix3 && i.isMatrix3 ? r.copy(i) : this[n] = i;
    }
  }
  toJSON(t) {
    const n = t === void 0 || typeof t == "string";
    if (!n && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), n || (t.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case yr:
        t.x = t.x - Math.floor(t.x);
        break;
      case hn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case ps:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case yr:
        t.y = t.y - Math.floor(t.y);
        break;
      case hn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case ps:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
};
Gt.DEFAULT_IMAGE = null;
Gt.DEFAULT_MAPPING = 300;
Gt.DEFAULT_ANISOTROPY = 1;
var gt = class uo {
  static {
    uo.prototype.isVector4 = !0;
  }
  constructor(t = 0, n = 0, i = 0, r = 1) {
    this.x = t, this.y = n, this.z = i, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, n, i, r) {
    return this.x = t, this.y = n, this.z = i, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, n) {
    switch (t) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      case 3:
        this.w = n;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, n) {
    return this.x = t.x + n.x, this.y = t.y + n.y, this.z = t.z + n.z, this.w = t.w + n.w, this;
  }
  addScaledVector(t, n) {
    return this.x += t.x * n, this.y += t.y * n, this.z += t.z * n, this.w += t.w * n, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, n) {
    return this.x = t.x - n.x, this.y = t.y - n.y, this.z = t.z - n.z, this.w = t.w - n.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const n = this.x, i = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * n + a[4] * i + a[8] * r + a[12] * s, this.y = a[1] * n + a[5] * i + a[9] * r + a[13] * s, this.z = a[2] * n + a[6] * i + a[10] * r + a[14] * s, this.w = a[3] * n + a[7] * i + a[11] * r + a[15] * s, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const n = Math.sqrt(1 - t.w * t.w);
    return n < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / n, this.y = t.y / n, this.z = t.z / n), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let n, i, r, s;
    const l = t.elements, c = l[0], u = l[4], d = l[8], h = l[1], p = l[5], _ = l[9], M = l[2], g = l[6], f = l[10];
    if (Math.abs(u - h) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(_ - g) < 0.01) {
      if (Math.abs(u + h) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(_ + g) < 0.1 && Math.abs(c + p + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      n = Math.PI;
      const S = (c + 1) / 2, v = (p + 1) / 2, E = (f + 1) / 2, R = (u + h) / 4, w = (d + M) / 4, m = (_ + g) / 4;
      return S > v && S > E ? S < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(S), r = R / i, s = w / i) : v > E ? v < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(v), i = R / r, s = m / r) : E < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(E), i = w / s, r = m / s), this.set(i, r, s, n), this;
    }
    let T = Math.sqrt((g - _) * (g - _) + (d - M) * (d - M) + (h - u) * (h - u));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (g - _) / T, this.y = (d - M) / T, this.z = (h - u) / T, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const n = t.elements;
    return this.x = n[12], this.y = n[13], this.z = n[14], this.w = n[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, n) {
    return this.x = qe(this.x, t.x, n.x), this.y = qe(this.y, t.y, n.y), this.z = qe(this.z, t.z, n.z), this.w = qe(this.w, t.w, n.w), this;
  }
  clampScalar(t, n) {
    return this.x = qe(this.x, t, n), this.y = qe(this.y, t, n), this.z = qe(this.z, t, n), this.w = qe(this.w, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, t, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, n) {
    return this.x += (t.x - this.x) * n, this.y += (t.y - this.y) * n, this.z += (t.z - this.z) * n, this.w += (t.w - this.w) * n, this;
  }
  lerpVectors(t, n, i) {
    return this.x = t.x + (n.x - t.x) * i, this.y = t.y + (n.y - t.y) * i, this.z = t.z + (n.z - t.z) * i, this.w = t.w + (n.w - t.w) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, n = 0) {
    return this.x = t[n], this.y = t[n + 1], this.z = t[n + 2], this.w = t[n + 3], this;
  }
  toArray(t = [], n = 0) {
    return t[n] = this.x, t[n + 1] = this.y, t[n + 2] = this.z, t[n + 3] = this.w, t;
  }
  fromBufferAttribute(t, n) {
    return this.x = t.getX(n), this.y = t.getY(n), this.z = t.getZ(n), this.w = t.getW(n), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}, Bc = class extends Nn {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Ot,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveColorBuffer: !0,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      storeMultisampledColorBuffer: !0,
      storeMultisampledDepthBuffer: !0,
      storeMultisampledStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1,
      useArrayDepthTexture: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new gt(0, 0, e, t), this.scissorTest = !1, this.viewport = new gt(0, 0, e, t), this.textures = [];
    const i = new Gt({
      width: e,
      height: t,
      depth: n.depth
    }), r = n.count;
    for (let s = 0; s < r; s++)
      this.textures[s] = i.clone(), this.textures[s].isRenderTargetTexture = !0, this.textures[s].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: Ot,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n, this.textures[i].isData3DTexture !== !0 && (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new bs(i);
    }
    if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) if (e.depthTexture.renderTarget === e) {
      const t = e.depthTexture.clone();
      t.renderTarget = null, this.depthTexture = t;
    } else this.depthTexture = e.depthTexture;
    return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, qt = class extends Bc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}, fo = class extends Gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = hn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}, zc = class extends Gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = hn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}, ht = class vs {
  static {
    vs.prototype.isMatrix4 = !0;
  }
  constructor(t, n, i, r, s, a, o, l, c, u, d, h, p, _, M, g) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, l, c, u, d, h, p, _, M, g);
  }
  set(t, n, i, r, s, a, o, l, c, u, d, h, p, _, M, g) {
    const f = this.elements;
    return f[0] = t, f[4] = n, f[8] = i, f[12] = r, f[1] = s, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = u, f[10] = d, f[14] = h, f[3] = p, f[7] = _, f[11] = M, f[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new vs().fromArray(this.elements);
  }
  copy(t) {
    const n = this.elements, i = t.elements;
    return n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], n[9] = i[9], n[10] = i[10], n[11] = i[11], n[12] = i[12], n[13] = i[13], n[14] = i[14], n[15] = i[15], this;
  }
  copyPosition(t) {
    const n = this.elements, i = t.elements;
    return n[12] = i[12], n[13] = i[13], n[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const n = t.elements;
    return this.set(n[0], n[3], n[6], 0, n[1], n[4], n[7], 0, n[2], n[5], n[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, n, i) {
    return this.determinantAffine() === 0 ? (t.set(1, 0, 0), n.set(0, 1, 0), i.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), n.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(t, n, i) {
    return this.set(t.x, n.x, i.x, 0, t.y, n.y, i.y, 0, t.z, n.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    if (t.determinantAffine() === 0) return this.identity();
    const n = this.elements, i = t.elements, r = 1 / Gn.setFromMatrixColumn(t, 0).length(), s = 1 / Gn.setFromMatrixColumn(t, 1).length(), a = 1 / Gn.setFromMatrixColumn(t, 2).length();
    return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * s, n[5] = i[5] * s, n[6] = i[6] * s, n[7] = 0, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (t.order === "XYZ") {
      const h = a * u, p = a * d, _ = o * u, M = o * d;
      n[0] = l * u, n[4] = -l * d, n[8] = c, n[1] = p + _ * c, n[5] = h - M * c, n[9] = -o * l, n[2] = M - h * c, n[6] = _ + p * c, n[10] = a * l;
    } else if (t.order === "YXZ") {
      const h = l * u, p = l * d, _ = c * u, M = c * d;
      n[0] = h + M * o, n[4] = _ * o - p, n[8] = a * c, n[1] = a * d, n[5] = a * u, n[9] = -o, n[2] = p * o - _, n[6] = M + h * o, n[10] = a * l;
    } else if (t.order === "ZXY") {
      const h = l * u, p = l * d, _ = c * u, M = c * d;
      n[0] = h - M * o, n[4] = -a * d, n[8] = _ + p * o, n[1] = p + _ * o, n[5] = a * u, n[9] = M - h * o, n[2] = -a * c, n[6] = o, n[10] = a * l;
    } else if (t.order === "ZYX") {
      const h = a * u, p = a * d, _ = o * u, M = o * d;
      n[0] = l * u, n[4] = _ * c - p, n[8] = h * c + M, n[1] = l * d, n[5] = M * c + h, n[9] = p * c - _, n[2] = -c, n[6] = o * l, n[10] = a * l;
    } else if (t.order === "YZX") {
      const h = a * l, p = a * c, _ = o * l, M = o * c;
      n[0] = l * u, n[4] = M - h * d, n[8] = _ * d + p, n[1] = d, n[5] = a * u, n[9] = -o * u, n[2] = -c * u, n[6] = p * d + _, n[10] = h - M * d;
    } else if (t.order === "XZY") {
      const h = a * l, p = a * c, _ = o * l, M = o * c;
      n[0] = l * u, n[4] = -d, n[8] = c * u, n[1] = h * d + M, n[5] = a * u, n[9] = p * d - _, n[2] = _ * d - p, n[6] = o * u, n[10] = M * d + h;
    }
    return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Vc, t, Gc);
  }
  lookAt(t, n, i) {
    const r = this.elements;
    return Ut.subVectors(t, n), Ut.lengthSq() === 0 && (Ut.z = 1), Ut.normalize(), pn.crossVectors(i, Ut), pn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ut.x += 1e-4 : Ut.z += 1e-4, Ut.normalize(), pn.crossVectors(i, Ut)), pn.normalize(), Zi.crossVectors(Ut, pn), r[0] = pn.x, r[4] = Zi.x, r[8] = Ut.x, r[1] = pn.y, r[5] = Zi.y, r[9] = Ut.y, r[2] = pn.z, r[6] = Zi.z, r[10] = Ut.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, n) {
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], u = i[1], d = i[5], h = i[9], p = i[13], _ = i[2], M = i[6], g = i[10], f = i[14], T = i[3], S = i[7], v = i[11], E = i[15], R = r[0], w = r[4], m = r[8], b = r[12], V = r[1], P = r[5], O = r[9], Y = r[13], N = r[2], C = r[6], k = r[10], F = r[14], ee = r[3], X = r[7], Z = r[11], J = r[15];
    return s[0] = a * R + o * V + l * N + c * ee, s[4] = a * w + o * P + l * C + c * X, s[8] = a * m + o * O + l * k + c * Z, s[12] = a * b + o * Y + l * F + c * J, s[1] = u * R + d * V + h * N + p * ee, s[5] = u * w + d * P + h * C + p * X, s[9] = u * m + d * O + h * k + p * Z, s[13] = u * b + d * Y + h * F + p * J, s[2] = _ * R + M * V + g * N + f * ee, s[6] = _ * w + M * P + g * C + f * X, s[10] = _ * m + M * O + g * k + f * Z, s[14] = _ * b + M * Y + g * F + f * J, s[3] = T * R + S * V + v * N + E * ee, s[7] = T * w + S * P + v * C + E * X, s[11] = T * m + S * O + v * k + E * Z, s[15] = T * b + S * Y + v * F + E * J, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[4] *= t, n[8] *= t, n[12] *= t, n[1] *= t, n[5] *= t, n[9] *= t, n[13] *= t, n[2] *= t, n[6] *= t, n[10] *= t, n[14] *= t, n[3] *= t, n[7] *= t, n[11] *= t, n[15] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], d = t[6], h = t[10], p = t[14], _ = t[3], M = t[7], g = t[11], f = t[15], T = l * p - c * h, S = o * p - c * d, v = o * h - l * d, E = a * p - c * u, R = a * h - l * u, w = a * d - o * u;
    return n * (M * T - g * S + f * v) - i * (_ * T - g * E + f * R) + r * (_ * S - M * E + f * w) - s * (_ * v - M * R + g * w);
  }
  determinantAffine() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], u = t[10];
    return n * (a * u - o * c) - i * (s * u - o * l) + r * (s * c - a * l);
  }
  transpose() {
    const t = this.elements;
    let n;
    return n = t[1], t[1] = t[4], t[4] = n, n = t[2], t[2] = t[8], t[8] = n, n = t[6], t[6] = t[9], t[9] = n, n = t[3], t[3] = t[12], t[12] = n, n = t[7], t[7] = t[13], t[13] = n, n = t[11], t[11] = t[14], t[14] = n, this;
  }
  setPosition(t, n, i) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = n, r[14] = i), this;
  }
  invert() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = t[9], h = t[10], p = t[11], _ = t[12], M = t[13], g = t[14], f = t[15], T = n * o - i * a, S = n * l - r * a, v = n * c - s * a, E = i * l - r * o, R = i * c - s * o, w = r * c - s * l, m = u * M - d * _, b = u * g - h * _, V = u * f - p * _, P = d * g - h * M, O = d * f - p * M, Y = h * f - p * g, N = T * Y - S * O + v * P + E * V - R * b + w * m;
    if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / N;
    return t[0] = (o * Y - l * O + c * P) * C, t[1] = (r * O - i * Y - s * P) * C, t[2] = (M * w - g * R + f * E) * C, t[3] = (h * R - d * w - p * E) * C, t[4] = (l * V - a * Y - c * b) * C, t[5] = (n * Y - r * V + s * b) * C, t[6] = (g * v - _ * w - f * S) * C, t[7] = (u * w - h * v + p * S) * C, t[8] = (a * O - o * V + c * m) * C, t[9] = (i * V - n * O - s * m) * C, t[10] = (_ * R - M * v + f * T) * C, t[11] = (d * v - u * R - p * T) * C, t[12] = (o * b - a * P - l * m) * C, t[13] = (n * P - i * b + r * m) * C, t[14] = (M * S - _ * E - g * T) * C, t[15] = (u * E - d * S + h * T) * C, this;
  }
  scale(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z;
    return n[0] *= i, n[4] *= r, n[8] *= s, n[1] *= i, n[5] *= r, n[9] *= s, n[2] *= i, n[6] *= r, n[10] *= s, n[3] *= i, n[7] *= r, n[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(n, i, r));
  }
  makeTranslation(t, n, i) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, n, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, n) {
    const i = Math.cos(n), r = Math.sin(n), s = 1 - i, a = t.x, o = t.y, l = t.z, c = s * a, u = s * o;
    return this.set(c * a + i, c * o - r * l, c * l + r * o, 0, c * o + r * l, u * o + i, u * l - r * a, 0, c * l - r * o, u * l + r * a, s * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, n, i) {
    return this.set(t, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, n, i, r, s, a) {
    return this.set(1, i, s, 0, t, 1, a, 0, n, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, n, i) {
    const r = this.elements, s = n._x, a = n._y, o = n._z, l = n._w, c = s + s, u = a + a, d = o + o, h = s * c, p = s * u, _ = s * d, M = a * u, g = a * d, f = o * d, T = l * c, S = l * u, v = l * d, E = i.x, R = i.y, w = i.z;
    return r[0] = (1 - (M + f)) * E, r[1] = (p + v) * E, r[2] = (_ - S) * E, r[3] = 0, r[4] = (p - v) * R, r[5] = (1 - (h + f)) * R, r[6] = (g + T) * R, r[7] = 0, r[8] = (_ + S) * w, r[9] = (g - T) * w, r[10] = (1 - (h + M)) * w, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, n, i) {
    const r = this.elements;
    t.x = r[12], t.y = r[13], t.z = r[14];
    const s = this.determinantAffine();
    if (s === 0)
      return i.set(1, 1, 1), n.identity(), this;
    let a = Gn.set(r[0], r[1], r[2]).length();
    const o = Gn.set(r[4], r[5], r[6]).length(), l = Gn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Ht.copy(this);
    const c = 1 / a, u = 1 / o, d = 1 / l;
    return Ht.elements[0] *= c, Ht.elements[1] *= c, Ht.elements[2] *= c, Ht.elements[4] *= u, Ht.elements[5] *= u, Ht.elements[6] *= u, Ht.elements[8] *= d, Ht.elements[9] *= d, Ht.elements[10] *= d, n.setFromRotationMatrix(Ht), i.x = a, i.y = o, i.z = l, this;
  }
  makePerspective(t, n, i, r, s, a, o = hi, l = !1) {
    const c = this.elements, u = 2 * s / (n - t), d = 2 * s / (i - r), h = (n + t) / (n - t), p = (i + r) / (i - r);
    let _, M;
    if (l)
      _ = s / (a - s), M = a * s / (a - s);
    else if (o === 2e3)
      _ = -(a + s) / (a - s), M = -2 * a * s / (a - s);
    else if (o === 2001)
      _ = -a / (a - s), M = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = h, c[12] = 0, c[1] = 0, c[5] = d, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = _, c[14] = M, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, n, i, r, s, a, o = hi, l = !1) {
    const c = this.elements, u = 2 / (n - t), d = 2 / (i - r), h = -(n + t) / (n - t), p = -(i + r) / (i - r);
    let _, M;
    if (l)
      _ = 1 / (a - s), M = a / (a - s);
    else if (o === 2e3)
      _ = -2 / (a - s), M = -(a + s) / (a - s);
    else if (o === 2001)
      _ = -1 / (a - s), M = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = 0, c[12] = h, c[1] = 0, c[5] = d, c[9] = 0, c[13] = p, c[2] = 0, c[6] = 0, c[10] = _, c[14] = M, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const n = this.elements, i = t.elements;
    for (let r = 0; r < 16; r++) if (n[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(t, n = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = t[i + n];
    return this;
  }
  toArray(t = [], n = 0) {
    const i = this.elements;
    return t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3], t[n + 4] = i[4], t[n + 5] = i[5], t[n + 6] = i[6], t[n + 7] = i[7], t[n + 8] = i[8], t[n + 9] = i[9], t[n + 10] = i[10], t[n + 11] = i[11], t[n + 12] = i[12], t[n + 13] = i[13], t[n + 14] = i[14], t[n + 15] = i[15], t;
  }
}, Gn = /* @__PURE__ */ new I(), Ht = /* @__PURE__ */ new ht(), Vc = /* @__PURE__ */ new I(0, 0, 0), Gc = /* @__PURE__ */ new I(1, 1, 1), pn = /* @__PURE__ */ new I(), Zi = /* @__PURE__ */ new I(), Ut = /* @__PURE__ */ new I(), ta = /* @__PURE__ */ new ht(), na = /* @__PURE__ */ new Dn(), Pn = class po {
  constructor(t = 0, n = 0, i = 0, r = po.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = n, this._z = i, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, n, i, r = this._order) {
    return this._x = t, this._y = n, this._z = i, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, n = this._order, i = !0) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], d = r[2], h = r[6], p = r[10];
    switch (n) {
      case "XYZ":
        this._y = Math.asin(qe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(h, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-qe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(qe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-qe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(qe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-qe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        Oe("Euler: .setFromRotationMatrix() encountered an unknown order: " + n);
    }
    return this._order = n, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, n, i) {
    return ta.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ta, n, i);
  }
  setFromVector3(t, n = this._order) {
    return this.set(t.x, t.y, t.z, n);
  }
  reorder(t) {
    return na.setFromEuler(this), this.setFromQuaternion(na, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], n = 0) {
    return t[n] = this._x, t[n + 1] = this._y, t[n + 2] = this._z, t[n + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
Pn.DEFAULT_ORDER = "XYZ";
var mo = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}, Hc = 0, ia = /* @__PURE__ */ new I(), Hn = /* @__PURE__ */ new Dn(), sn = /* @__PURE__ */ new ht(), Ki = /* @__PURE__ */ new I(), vi = /* @__PURE__ */ new I(), kc = /* @__PURE__ */ new I(), Wc = /* @__PURE__ */ new Dn(), ra = /* @__PURE__ */ new I(1, 0, 0), sa = /* @__PURE__ */ new I(0, 1, 0), aa = /* @__PURE__ */ new I(0, 0, 1), oa = { type: "added" }, Xc = { type: "removed" }, kn = {
  type: "childadded",
  child: null
}, Vr = {
  type: "childremoved",
  child: null
}, Lt = class Sr extends Nn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Hc++ }), this.uuid = Un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Sr.DEFAULT_UP.clone();
    const t = new I(), n = new Pn(), i = new Dn(), r = new I(1, 1, 1);
    function s() {
      i.setFromEuler(n, !1);
    }
    function a() {
      n.setFromQuaternion(i, void 0, !1);
    }
    n._onChange(s), i._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: { value: new ht() },
      normalMatrix: { value: new ke() }
    }), this.matrix = new ht(), this.matrixWorld = new ht(), this.matrixAutoUpdate = Sr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Sr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new mo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, n) {
    this.quaternion.setFromAxisAngle(t, n);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, n) {
    return Hn.setFromAxisAngle(t, n), this.quaternion.multiply(Hn), this;
  }
  rotateOnWorldAxis(t, n) {
    return Hn.setFromAxisAngle(t, n), this.quaternion.premultiply(Hn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(ra, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(sa, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(aa, t);
  }
  translateOnAxis(t, n) {
    return ia.copy(t).applyQuaternion(this.quaternion), this.position.add(ia.multiplyScalar(n)), this;
  }
  translateX(t) {
    return this.translateOnAxis(ra, t);
  }
  translateY(t) {
    return this.translateOnAxis(sa, t);
  }
  translateZ(t) {
    return this.translateOnAxis(aa, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(sn.copy(this.matrixWorld).invert());
  }
  lookAt(t, n, i) {
    t.isVector3 ? Ki.copy(t) : Ki.set(t, n, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), vi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? sn.lookAt(vi, Ki, this.up) : sn.lookAt(Ki, vi, this.up), this.quaternion.setFromRotationMatrix(sn), r && (sn.extractRotation(r.matrixWorld), Hn.setFromRotationMatrix(sn), this.quaternion.premultiply(Hn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return t === this ? (Be("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(oa), kn.child = t, this.dispatchEvent(kn), kn.child = null) : Be("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(t);
    return n !== -1 && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(Xc), Vr.child = t, this.dispatchEvent(Vr), Vr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), sn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), sn.multiply(t.parent.matrixWorld)), t.applyMatrix4(sn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(oa), kn.child = t, this.dispatchEvent(kn), kn.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, n) {
    if (this[t] === n) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const s = this.children[i].getObjectByProperty(t, n);
      if (s !== void 0) return s;
    }
  }
  getObjectsByProperty(t, n, i = []) {
    this[t] === n && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(t, n, i);
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vi, t, kc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vi, Wc, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const n = this.matrixWorld.elements;
    return t.set(n[8], n[9], n[10]).normalize();
  }
  raycast() {
  }
  intersectsFrustum() {
  }
  traverse(t) {
    t(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const n = this.parent;
    n !== null && (t(n), n.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const n = t.x, i = t.y, r = t.z, s = this.matrix.elements;
      s[12] += n - s[0] * n - s[4] * i - s[8] * r, s[13] += i - s[1] * n - s[5] * i - s[9] * r, s[14] += r - s[2] * n - s[6] * i - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, n, i = !1) {
    const r = this.parent;
    if (t === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, i = !0), n === !0) {
      const s = this.children;
      for (let a = 0, o = s.length; a < o; a++) s[a].updateWorldMatrix(!1, !0, i);
    }
  }
  toJSON(t) {
    const n = t === void 0 || typeof t == "string", i = {};
    n && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(t), r.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const d = l[c];
          s(t.shapes, d);
        }
        else s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(t.materials, this.material[l]));
      r.material = o;
    } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (n) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), d = a(t.shapes), h = a(t.skeletons), p = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u), d.length > 0 && (i.shapes = d), h.length > 0 && (i.skeletons = h), p.length > 0 && (i.animations = p), _.length > 0 && (i.nodes = _);
    }
    return i.object = r, i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, n = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), n === !0) for (let i = 0; i < t.children.length; i++) {
      const r = t.children[i];
      this.add(r.clone());
    }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
Lt.DEFAULT_UP = /* @__PURE__ */ new I(0, 1, 0);
Lt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Xt = class extends Lt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, qc = { type: "move" }, Gr = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Xt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Xt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Xt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I(), this._grip.eventsEnabled = !1), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({
      type: "connected",
      data: e
    }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({
      type: "disconnected",
      data: e
    }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, s = null;
    const a = this._targetRay, o = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const _ of e.hand.values()) {
          const M = t.getJointPose(_, n), g = this._getHandJoint(l, _);
          M !== null && (g.matrix.fromArray(M.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.matrixWorldNeedsUpdate = !0, g.jointRadius = M.radius), g.visible = M !== null;
        }
        const c = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = c.position.distanceTo(u.position), h = 0.02, p = 5e-3;
        l.inputState.pinching && d > h + p ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= h - p && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else o !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, o.eventsEnabled && o.dispatchEvent({
        type: "gripUpdated",
        data: e,
        target: this
      })));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(qc)));
    }
    return a !== null && (a.visible = i !== null), o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Xt();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}, go = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, mn = {
  h: 0,
  s: 0,
  l: 0
}, Ji = {
  h: 0,
  s: 0,
  l: 0
};
function Hr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Xe = class {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ct) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, i = $e.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, $e.colorSpaceToWorking(this, i), this;
  }
  setHSL(e, t, n, i = $e.workingColorSpace) {
    if (e = Ts(e, 1), t = qe(t, 0, 1), n = qe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Hr(s, r, e + 1 / 3), this.g = Hr(s, r, e), this.b = Hr(s, r, e - 1 / 3);
    }
    return $e.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = Ct) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Oe("Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const s = i[1], a = i[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          Oe("Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(r, 16), t);
      Oe("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ct) {
    const n = go[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Oe("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = un(e.r), this.g = un(e.g), this.b = un(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = li(e.r), this.g = li(e.g), this.b = li(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ct) {
    return $e.workingToColorSpace(At.copy(this), e), Math.round(qe(At.r * 255, 0, 255)) * 65536 + Math.round(qe(At.g * 255, 0, 255)) * 256 + Math.round(qe(At.b * 255, 0, 255));
  }
  getHexString(e = Ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.workingToColorSpace(At.copy(this), t);
    const n = At.r, i = At.g, r = At.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
    let o, l;
    const c = (a + s) / 2;
    if (a === s)
      o = 0, l = 0;
    else {
      const u = s - a;
      switch (l = c <= 0.5 ? u / (s + a) : u / (2 - s - a), s) {
        case n:
          o = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / u + 2;
          break;
        case r:
          o = (n - i) / u + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = l, e.l = c, e;
  }
  getRGB(e, t = $e.workingColorSpace) {
    return $e.workingToColorSpace(At.copy(this), t), e.r = At.r, e.g = At.g, e.b = At.b, e;
  }
  getStyle(e = Ct) {
    $e.workingToColorSpace(At.copy(this), e);
    const t = At.r, n = At.g, i = At.b;
    return e !== "srgb" ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(mn), this.setHSL(mn.h + e, mn.s + t, mn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(mn), e.getHSL(Ji);
    const n = Pi(mn.h, Ji.h, t), i = Pi(mn.s, Ji.s, t), r = Pi(mn.l, Ji.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, At = /* @__PURE__ */ new Xe();
Xe.NAMES = go;
var vo = class extends Lt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Pn(), this.environmentIntensity = 1, this.environmentRotation = new Pn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, kt = /* @__PURE__ */ new I(), an = /* @__PURE__ */ new I(), kr = /* @__PURE__ */ new I(), on = /* @__PURE__ */ new I(), Wn = /* @__PURE__ */ new I(), Xn = /* @__PURE__ */ new I(), la = /* @__PURE__ */ new I(), Wr = /* @__PURE__ */ new I(), Xr = /* @__PURE__ */ new I(), qr = /* @__PURE__ */ new I(), Yr = /* @__PURE__ */ new gt(), Zr = /* @__PURE__ */ new gt(), Kr = /* @__PURE__ */ new gt(), _i = class ii {
  constructor(t = new I(), n = new I(), i = new I()) {
    this.a = t, this.b = n, this.c = i;
  }
  static getNormal(t, n, i, r) {
    r.subVectors(i, n), kt.subVectors(t, n), r.cross(kt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, n, i, r, s) {
    kt.subVectors(r, n), an.subVectors(i, n), kr.subVectors(t, n);
    const a = kt.dot(kt), o = kt.dot(an), l = kt.dot(kr), c = an.dot(an), u = an.dot(kr), d = a * c - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const h = 1 / d, p = (c * l - o * u) * h, _ = (a * u - o * l) * h;
    return s.set(1 - p - _, _, p);
  }
  static containsPoint(t, n, i, r) {
    return this.getBarycoord(t, n, i, r, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(t, n, i, r, s, a, o, l) {
    return this.getBarycoord(t, n, i, r, on) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, on.x), l.addScaledVector(a, on.y), l.addScaledVector(o, on.z), l);
  }
  static getInterpolatedAttribute(t, n, i, r, s, a) {
    return Yr.setScalar(0), Zr.setScalar(0), Kr.setScalar(0), Yr.fromBufferAttribute(t, n), Zr.fromBufferAttribute(t, i), Kr.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(Yr, s.x), a.addScaledVector(Zr, s.y), a.addScaledVector(Kr, s.z), a;
  }
  static isFrontFacing(t, n, i, r) {
    return kt.subVectors(i, n), an.subVectors(t, n), kt.cross(an).dot(r) < 0;
  }
  set(t, n, i) {
    return this.a.copy(t), this.b.copy(n), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, n, i, r) {
    return this.a.copy(t[n]), this.b.copy(t[i]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, n, i, r) {
    return this.a.fromBufferAttribute(t, n), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return kt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), kt.cross(an).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return ii.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, n) {
    return ii.getBarycoord(t, this.a, this.b, this.c, n);
  }
  getInterpolation(t, n, i, r, s) {
    return ii.getInterpolation(t, this.a, this.b, this.c, n, i, r, s);
  }
  containsPoint(t) {
    return ii.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return ii.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, n) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Wn.subVectors(r, i), Xn.subVectors(s, i), Wr.subVectors(t, i);
    const l = Wn.dot(Wr), c = Xn.dot(Wr);
    if (l <= 0 && c <= 0) return n.copy(i);
    Xr.subVectors(t, r);
    const u = Wn.dot(Xr), d = Xn.dot(Xr);
    if (u >= 0 && d <= u) return n.copy(r);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), n.copy(i).addScaledVector(Wn, a);
    qr.subVectors(t, s);
    const p = Wn.dot(qr), _ = Xn.dot(qr);
    if (_ >= 0 && p <= _) return n.copy(s);
    const M = p * c - l * _;
    if (M <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), n.copy(i).addScaledVector(Xn, o);
    const g = u * _ - p * d;
    if (g <= 0 && d - u >= 0 && p - _ >= 0)
      return la.subVectors(s, r), o = (d - u) / (d - u + (p - _)), n.copy(r).addScaledVector(la, o);
    const f = 1 / (g + M + h);
    return a = M * f, o = h * f, n.copy(i).addScaledVector(Wn, a).addScaledVector(Xn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, On = class {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Wt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Wt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Wt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let s = 0, a = r.count; s < a; s++)
        e.isMesh === !0 ? e.getVertexPosition(s, Wt) : Wt.fromBufferAttribute(r, s), Wt.applyMatrix4(e.matrixWorld), this.expandByPoint(Wt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), $i.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), $i.copy(n.boundingBox)), $i.applyMatrix4(e.matrixWorld), this.union($i);
    }
    const i = e.children;
    for (let r = 0, s = i.length; r < s; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Wt), Wt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Mi), Qi.subVectors(this.max, Mi), qn.subVectors(e.a, Mi), Yn.subVectors(e.b, Mi), Zn.subVectors(e.c, Mi), gn.subVectors(Yn, qn), vn.subVectors(Zn, Yn), En.subVectors(qn, Zn);
    let t = [
      0,
      -gn.z,
      gn.y,
      0,
      -vn.z,
      vn.y,
      0,
      -En.z,
      En.y,
      gn.z,
      0,
      -gn.x,
      vn.z,
      0,
      -vn.x,
      En.z,
      0,
      -En.x,
      -gn.y,
      gn.x,
      0,
      -vn.y,
      vn.x,
      0,
      -En.y,
      En.x,
      0
    ];
    return !Jr(t, qn, Yn, Zn, Qi) || (t = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], !Jr(t, qn, Yn, Zn, Qi)) ? !1 : (ji.crossVectors(gn, vn), t = [
      ji.x,
      ji.y,
      ji.z
    ], Jr(t, qn, Yn, Zn, Qi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Wt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Wt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (ln[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ln[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ln[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ln[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ln[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ln[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ln[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ln[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ln), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}, ln = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], Wt = /* @__PURE__ */ new I(), $i = /* @__PURE__ */ new On(), qn = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), Zn = /* @__PURE__ */ new I(), gn = /* @__PURE__ */ new I(), vn = /* @__PURE__ */ new I(), En = /* @__PURE__ */ new I(), Mi = /* @__PURE__ */ new I(), Qi = /* @__PURE__ */ new I(), ji = /* @__PURE__ */ new I(), Tn = /* @__PURE__ */ new I();
function Jr(e, t, n, i, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    Tn.fromArray(e, s);
    const o = r.x * Math.abs(Tn.x) + r.y * Math.abs(Tn.y) + r.z * Math.abs(Tn.z), l = t.dot(Tn), c = n.dot(Tn), u = i.dot(Tn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
var vt = /* @__PURE__ */ new I(), er = /* @__PURE__ */ new de(), Yc = 0, jt = class extends Nn {
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Yc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = uc, this.updateRanges = [], this.gpuType = Vi, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)
      er.fromBufferAttribute(this, t), er.applyMatrix3(e), this.setXY(t, er.x, er.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix3(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ni(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = wt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), i = wt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), i = wt(i, this.array), r = wt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, _o = class extends jt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}, Mo = class extends jt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}, it = class extends jt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}, Zc = /* @__PURE__ */ new On(), Si = /* @__PURE__ */ new I(), $r = /* @__PURE__ */ new I(), Gi = class {
  constructor(e = new I(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zc.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++) i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Si.subVectors(e, this.center);
    const t = Si.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Si, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : ($r.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Si.copy(e.center).add($r)), this.expandByPoint(Si.copy(e.center).sub($r))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}, Kc = 0, Bt = /* @__PURE__ */ new ht(), Qr = /* @__PURE__ */ new Lt(), Kn = /* @__PURE__ */ new I(), Dt = /* @__PURE__ */ new On(), xi = /* @__PURE__ */ new On(), Et = /* @__PURE__ */ new I(), It = class So extends Nn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Kc++ }), this.uuid = Un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = !1;
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (fc(t) ? Mo : _o)(t, 1) : this.index = t, this;
  }
  setIndirect(t, n = 0) {
    return this.indirect = t, this.indirectOffset = n, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, n) {
    return this.attributes[t] = n, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, n, i = 0) {
    this.groups.push({
      start: t,
      count: n,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, n) {
    this.drawRange.start = t, this.drawRange.count = n;
  }
  applyMatrix4(t) {
    const n = this.attributes.position;
    n !== void 0 && (n.applyMatrix4(t), n.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new ke().getNormalMatrix(t);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
  }
  applyQuaternion(t) {
    return Bt.makeRotationFromQuaternion(t), this.applyMatrix4(Bt), this;
  }
  rotateX(t) {
    return Bt.makeRotationX(t), this.applyMatrix4(Bt), this;
  }
  rotateY(t) {
    return Bt.makeRotationY(t), this.applyMatrix4(Bt), this;
  }
  rotateZ(t) {
    return Bt.makeRotationZ(t), this.applyMatrix4(Bt), this;
  }
  translate(t, n, i) {
    return Bt.makeTranslation(t, n, i), this.applyMatrix4(Bt), this;
  }
  scale(t, n, i) {
    return Bt.makeScale(t, n, i), this.applyMatrix4(Bt), this;
  }
  lookAt(t) {
    return Qr.lookAt(t), Qr.updateMatrix(), this.applyMatrix4(Qr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Kn).negate(), this.translate(Kn.x, Kn.y, Kn.z), this;
  }
  setFromPoints(t) {
    const n = this.getAttribute("position");
    if (n === void 0) {
      const i = [];
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new it(i, 3));
    } else {
      const i = Math.min(t.length, n.count);
      for (let r = 0; r < i; r++) {
        const s = t[r];
        n.setXYZ(r, s.x, s.y, s.z || 0);
      }
      t.length > n.count && Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), n.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new On());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new I(-1 / 0, -1 / 0, -1 / 0), new I(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), n) for (let i = 0, r = n.length; i < r; i++) {
        const s = n[i];
        Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Et.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(Et), Et.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(Et)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Gi());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(t), n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        xi.setFromBufferAttribute(o), this.morphTargetsRelative ? (Et.addVectors(Dt.min, xi.min), Dt.expandByPoint(Et), Et.addVectors(Dt.max, xi.max), Dt.expandByPoint(Et)) : (Dt.expandByPoint(xi.min), Dt.expandByPoint(xi.max));
      }
      Dt.getCenter(i);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        Et.fromBufferAttribute(t, s), r = Math.max(r, i.distanceToSquared(Et));
      if (n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++)
          Et.fromBufferAttribute(o, c), l && (Kn.fromBufferAttribute(t, c), Et.add(Kn)), r = Math.max(r, i.distanceToSquared(Et));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, n = this.attributes;
    if (t === null || n.position === void 0 || n.normal === void 0 || n.uv === void 0) {
      Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = n.position, r = n.normal, s = n.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== i.count) && (a = new jt(new Float32Array(4 * i.count), 4), this.setAttribute("tangent", a));
    const o = [], l = [];
    for (let m = 0; m < i.count; m++)
      o[m] = new I(), l[m] = new I();
    const c = new I(), u = new I(), d = new I(), h = new de(), p = new de(), _ = new de(), M = new I(), g = new I();
    function f(m, b, V) {
      c.fromBufferAttribute(i, m), u.fromBufferAttribute(i, b), d.fromBufferAttribute(i, V), h.fromBufferAttribute(s, m), p.fromBufferAttribute(s, b), _.fromBufferAttribute(s, V), u.sub(c), d.sub(c), p.sub(h), _.sub(h);
      const P = 1 / (p.x * _.y - _.x * p.y);
      isFinite(P) && (M.copy(u).multiplyScalar(_.y).addScaledVector(d, -p.y).multiplyScalar(P), g.copy(d).multiplyScalar(p.x).addScaledVector(u, -_.x).multiplyScalar(P), o[m].add(M), o[b].add(M), o[V].add(M), l[m].add(g), l[b].add(g), l[V].add(g));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let m = 0, b = T.length; m < b; ++m) {
      const V = T[m], P = V.start, O = V.count;
      for (let Y = P, N = P + O; Y < N; Y += 3) f(t.getX(Y + 0), t.getX(Y + 1), t.getX(Y + 2));
    }
    const S = new I(), v = new I(), E = new I(), R = new I();
    function w(m) {
      E.fromBufferAttribute(r, m), R.copy(E);
      const b = o[m];
      S.copy(b), S.sub(E.multiplyScalar(E.dot(b))).normalize(), v.crossVectors(R, b);
      const V = v.dot(l[m]) < 0 ? -1 : 1;
      a.setXYZW(m, S.x, S.y, S.z, V);
    }
    for (let m = 0, b = T.length; m < b; ++m) {
      const V = T[m], P = V.start, O = V.count;
      for (let Y = P, N = P + O; Y < N; Y += 3)
        w(t.getX(Y + 0)), w(t.getX(Y + 1)), w(t.getX(Y + 2));
    }
    this._transformed = !0;
  }
  computeVertexNormals() {
    const t = this.index, n = this.getAttribute("position");
    if (n !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== n.count)
        i = new jt(new Float32Array(n.count * 3), 3), this.setAttribute("normal", i);
      else for (let h = 0, p = i.count; h < p; h++) i.setXYZ(h, 0, 0, 0);
      const r = new I(), s = new I(), a = new I(), o = new I(), l = new I(), c = new I(), u = new I(), d = new I();
      if (t) for (let h = 0, p = t.count; h < p; h += 3) {
        const _ = t.getX(h + 0), M = t.getX(h + 1), g = t.getX(h + 2);
        r.fromBufferAttribute(n, _), s.fromBufferAttribute(n, M), a.fromBufferAttribute(n, g), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), o.fromBufferAttribute(i, _), l.fromBufferAttribute(i, M), c.fromBufferAttribute(i, g), o.add(u), l.add(u), c.add(u), i.setXYZ(_, o.x, o.y, o.z), i.setXYZ(M, l.x, l.y, l.z), i.setXYZ(g, c.x, c.y, c.z);
      }
      else for (let h = 0, p = n.count; h < p; h += 3)
        r.fromBufferAttribute(n, h + 0), s.fromBufferAttribute(n, h + 1), a.fromBufferAttribute(n, h + 2), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), i.setXYZ(h + 0, u.x, u.y, u.z), i.setXYZ(h + 1, u.x, u.y, u.z), i.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let n = 0, i = t.count; n < i; n++)
      Et.fromBufferAttribute(t, n), Et.normalize(), t.setXYZ(n, Et.x, Et.y, Et.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, d = o.normalized, h = new c.constructor(l.length * u);
      let p = 0, _ = 0;
      for (let M = 0, g = l.length; M < g; M++) {
        o.isInterleavedBufferAttribute ? p = l[M] * o.data.stride + o.offset : p = l[M] * u;
        for (let f = 0; f < u; f++) h[_++] = c[p++];
      }
      return new jt(h, u, d);
    }
    if (this.index === null)
      return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const n = new So(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, i);
      n.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u], p = t(h, i);
        l.push(p);
      }
      n.morphAttributes[o] = l;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      n.addGroup(c.start, c.count, c.materialIndex);
    }
    return n;
  }
  toJSON() {
    const t = { metadata: {
      version: 4.7,
      type: "BufferGeometry",
      generator: "BufferGeometry.toJSON"
    } };
    if (t.uuid = this.uuid, t.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, t.name = this.name, Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const n = this.index;
    n !== null && (t.data.index = {
      type: n.array.constructor.name,
      array: Array.prototype.slice.call(n.array)
    });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, h = c.length; d < h; d++) {
        const p = c[d];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const n = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone());
    const r = t.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(n));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const u = [], d = s[c];
      for (let h = 0, p = d.length; h < p; h++) u.push(d[h].clone(n));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, jr = /* @__PURE__ */ new I(), Jc = /* @__PURE__ */ new I(), $c = /* @__PURE__ */ new ke(), Mn = class {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = jr.subVectors(n, t).cross(Jc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, n = !0) {
    const i = e.delta(jr), r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return n === !0 && (s < 0 || s > 1) ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || $c.getNormalMatrix(e), i = this.coplanarPoint(jr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      normal: this.normal.toArray(),
      constant: this.constant
    };
  }
  fromJSON(e) {
    return this.normal.fromArray(e.normal), this.constant = e.constant, this;
  }
}, Qc = 0, Fn = class extends Nn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qc++ }), this.uuid = Un(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Dr, this.stencilZFail = Dr, this.stencilZPass = Dr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Oe(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector2 && n && n.isVector2 || i && i.isEuler && n && n.isEuler || i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = { metadata: {
      version: 4.7,
      type: "Material",
      generator: "Material.toJSON"
    } };
    n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((r) => r.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const s = [];
      for (const a in r) {
        const o = r[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (t) {
      const r = i(e.textures), s = i(e.images);
      r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s);
    }
    return n;
  }
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Xe().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new Mn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]), this.normalScale = new de().fromArray(n);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new de().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}, cn = /* @__PURE__ */ new I(), es = /* @__PURE__ */ new I(), tr = /* @__PURE__ */ new I(), nr = /* @__PURE__ */ new I(), jc = class {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, cn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = cn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (cn.copy(this.origin).addScaledVector(this.direction, t), cn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    es.copy(e).add(t).multiplyScalar(0.5), tr.copy(t).sub(e).normalize(), nr.copy(this.origin).sub(es);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(tr), a = nr.dot(this.direction), o = -nr.dot(tr), l = nr.lengthSq(), c = Math.abs(1 - s * s);
    let u, d, h, p;
    if (c > 0)
      if (u = s * o - a, d = s * a - o, p = r * c, u >= 0) if (d >= -p) if (d <= p) {
        const _ = 1 / c;
        u *= _, d *= _, h = u * (u + s * d + 2 * a) + d * (s * u + d + 2 * o) + l;
      } else
        d = r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + l;
      else
        d = -r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + l;
      else d <= -p ? (u = Math.max(0, -(-s * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -o), r), h = -u * u + d * (d + 2 * o) + l) : d <= p ? (u = 0, d = Math.min(Math.max(-r, -o), r), h = d * (d + 2 * o) + l) : (u = Math.max(0, -(s * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -o), r), h = -u * u + d * (d + 2 * o) + l);
    else
      d = s > 0 ? -r : r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(es).addScaledVector(tr, d), h;
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    cn.subVectors(e.center, this.origin);
    const n = cn.dot(this.direction), i = cn.dot(cn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const s = Math.sqrt(r - i), a = n - s, o = n + s;
    return o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, s, a, o;
    const l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), c >= 0 ? (r = (e.min.y - d.y) * c, s = (e.max.y - d.y) * c) : (r = (e.max.y - d.y) * c, s = (e.min.y - d.y) * c), n > s || r > i || ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), u >= 0 ? (a = (e.min.z - d.z) * u, o = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, o = (e.min.z - d.z) * u), n > o || a > i) || ((a > n || n !== n) && (n = a), (o < i || i !== i) && (i = o), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, cn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    const s = this.origin, a = this.direction, o = a.x, l = a.y, c = a.z, u = e.x - s.x, d = e.y - s.y, h = e.z - s.z, p = t.x - s.x, _ = t.y - s.y, M = t.z - s.z, g = n.x - s.x, f = n.y - s.y, T = n.z - s.z, S = Math.abs(o), v = Math.abs(l), E = Math.abs(c);
    let R, w, m, b, V, P, O, Y, N, C, k, F;
    if (S >= v && S >= E ? (m = o, P = u, N = p, F = g, o >= 0 ? (R = l, w = c, b = d, V = h, O = _, Y = M, C = f, k = T) : (R = c, w = l, b = h, V = d, O = M, Y = _, C = T, k = f)) : v >= E ? (m = l, P = d, N = _, F = f, l >= 0 ? (R = c, w = o, b = h, V = u, O = M, Y = p, C = T, k = g) : (R = o, w = c, b = u, V = h, O = p, Y = M, C = g, k = T)) : (m = c, P = h, N = M, F = T, c >= 0 ? (R = o, w = l, b = u, V = d, O = p, Y = _, C = g, k = f) : (R = l, w = o, b = d, V = u, O = _, Y = p, C = f, k = g)), m === 0) return null;
    const ee = R / m, X = w / m, Z = 1 / m, J = b - ee * P, Le = V - X * P, we = O - ee * N, rt = Y - X * N, Ge = C - ee * F, K = k - X * F, re = Ge * rt - K * we, ae = J * K - Le * Ge, Ce = we * Le - rt * J;
    if (i) {
      if (re < 0 || ae < 0 || Ce < 0) return null;
    } else if ((re < 0 || ae < 0 || Ce < 0) && (re > 0 || ae > 0 || Ce > 0)) return null;
    const Ue = re + ae + Ce;
    if (Ue === 0) return null;
    const ue = Z * (re * P + ae * N + Ce * F);
    return (Ue > 0 ? ue < 0 : ue > 0) ? null : this.at(ue / Ue, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, fi = class extends Fn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, ca = /* @__PURE__ */ new ht(), bn = /* @__PURE__ */ new jc(), ir = /* @__PURE__ */ new Gi(), ha = /* @__PURE__ */ new I(), rr = /* @__PURE__ */ new I(), sr = /* @__PURE__ */ new I(), ar = /* @__PURE__ */ new I(), ts = /* @__PURE__ */ new I(), or = /* @__PURE__ */ new I(), ua = /* @__PURE__ */ new I(), lr = /* @__PURE__ */ new I(), ut = class extends Lt {
  constructor(e = new It(), t = new fi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i].name || String(i);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = i;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      or.set(0, 0, 0);
      for (let o = 0, l = r.length; o < l; o++) {
        const c = a[o], u = r[o];
        c !== 0 && (ts.fromBufferAttribute(u, e), s ? or.addScaledVector(ts, c) : or.addScaledVector(ts.sub(t), c));
      }
      t.add(or);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ir.copy(n.boundingSphere), ir.applyMatrix4(r), bn.copy(e.ray).recast(e.near), !(ir.containsPoint(bn.origin) === !1 && (bn.intersectSphere(ir, ha) === null || bn.origin.distanceToSquared(ha) > (e.far - e.near) ** 2)) && (ca.copy(r).invert(), bn.copy(e.ray).applyMatrix4(ca), !(n.boundingBox !== null && bn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, bn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, u = r.attributes.normal, d = r.groups, h = r.drawRange;
    if (a !== null) if (Array.isArray(s)) for (let p = 0, _ = d.length; p < _; p++) {
      const M = d[p], g = s[M.materialIndex], f = Math.max(M.start, h.start), T = Math.min(a.count, Math.min(M.start + M.count, h.start + h.count));
      for (let S = f, v = T; S < v; S += 3) {
        const E = a.getX(S), R = a.getX(S + 1), w = a.getX(S + 2);
        i = cr(this, g, e, n, l, c, u, E, R, w), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = M.materialIndex, t.push(i));
      }
    }
    else {
      const p = Math.max(0, h.start), _ = Math.min(a.count, h.start + h.count);
      for (let M = p, g = _; M < g; M += 3) {
        const f = a.getX(M), T = a.getX(M + 1), S = a.getX(M + 2);
        i = cr(this, s, e, n, l, c, u, f, T, S), i && (i.faceIndex = Math.floor(M / 3), t.push(i));
      }
    }
    else if (o !== void 0) if (Array.isArray(s)) for (let p = 0, _ = d.length; p < _; p++) {
      const M = d[p], g = s[M.materialIndex], f = Math.max(M.start, h.start), T = Math.min(o.count, Math.min(M.start + M.count, h.start + h.count));
      for (let S = f, v = T; S < v; S += 3) {
        const E = S, R = S + 1, w = S + 2;
        i = cr(this, g, e, n, l, c, u, E, R, w), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = M.materialIndex, t.push(i));
      }
    }
    else {
      const p = Math.max(0, h.start), _ = Math.min(o.count, h.start + h.count);
      for (let M = p, g = _; M < g; M += 3) {
        const f = M, T = M + 1, S = M + 2;
        i = cr(this, s, e, n, l, c, u, f, T, S), i && (i.faceIndex = Math.floor(M / 3), t.push(i));
      }
    }
  }
};
function eh(e, t, n, i, r, s, a, o) {
  let l;
  if (t.side === 1 ? l = i.intersectTriangle(a, s, r, !0, o) : l = i.intersectTriangle(r, s, a, t.side === 0, o), l === null) return null;
  lr.copy(o), lr.applyMatrix4(e.matrixWorld);
  const c = n.ray.origin.distanceTo(lr);
  return c < n.near || c > n.far ? null : {
    distance: c,
    point: lr.clone(),
    object: e
  };
}
function cr(e, t, n, i, r, s, a, o, l, c) {
  e.getVertexPosition(o, rr), e.getVertexPosition(l, sr), e.getVertexPosition(c, ar);
  const u = eh(e, t, n, i, rr, sr, ar, ua);
  if (u) {
    const d = new I();
    _i.getBarycoord(ua, rr, sr, ar, d), r && (u.uv = _i.getInterpolatedAttribute(r, o, l, c, d, new de())), s && (u.uv1 = _i.getInterpolatedAttribute(s, o, l, c, d, new de())), a && (u.normal = _i.getInterpolatedAttribute(a, o, l, c, d, new I()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: l,
      c,
      normal: new I(),
      materialIndex: 0
    };
    _i.getNormal(rr, sr, ar, h.normal), u.face = h, u.barycoord = d;
  }
  return u;
}
var xo = class extends Gt {
  constructor(e = null, t = 1, n = 1, i, r, s, a, o, l = Pt, c = Pt, u, d) {
    super(null, s, a, o, l, c, i, r, u, d), this.isDataTexture = !0, this.image = {
      data: e,
      width: t,
      height: n
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, fa = class extends jt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}, Jn = /* @__PURE__ */ new ht(), da = /* @__PURE__ */ new ht(), hr = [], pa = /* @__PURE__ */ new On(), th = /* @__PURE__ */ new ht(), yi = /* @__PURE__ */ new ut(), Ei = /* @__PURE__ */ new Gi(), nh = class extends ut {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new fa(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, th);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new On()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Jn), pa.copy(e.boundingBox).applyMatrix4(Jn), this.boundingBox.union(pa);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Gi()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Jn), Ei.copy(e.boundingSphere).applyMatrix4(Jn), this.boundingSphere.union(Ei);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = e * (n.length + 1) + 1;
    for (let s = 0; s < n.length; s++) n[s] = i[r + s];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (yi.geometry = this.geometry, yi.material = this.material, yi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ei.copy(this.boundingSphere), Ei.applyMatrix4(n), e.ray.intersectsSphere(Ei) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Jn), da.multiplyMatrices(n, Jn), yi.matrixWorld = da, yi.raycast(e, hr);
        for (let s = 0, a = hr.length; s < a; s++) {
          const o = hr[s];
          o.instanceId = r, o.object = this, t.push(o);
        }
        hr.length = 0;
      }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new fa(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new xo(new Float32Array(i * this.count), i, this.count, io, Vi));
    const r = this.morphTexture.source.data.data;
    let s = 0;
    for (let l = 0; l < n.length; l++) s += n[l];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - s, o = i * e;
    return r[o] = a, r.set(n, o + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    super.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}, An = /* @__PURE__ */ new Gi(), ih = /* @__PURE__ */ new de(0.5, 0.5), ur = /* @__PURE__ */ new I(), As = class {
  constructor(e = new Mn(), t = new Mn(), n = new Mn(), i = new Mn(), r = new Mn(), s = new Mn()) {
    this.planes = [
      e,
      t,
      n,
      i,
      r,
      s
    ];
  }
  set(e, t, n, i, r, s) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = hi, n = !1) {
    const i = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], d = r[6], h = r[7], p = r[8], _ = r[9], M = r[10], g = r[11], f = r[12], T = r[13], S = r[14], v = r[15];
    if (i[0].setComponents(l - s, h - c, g - p, v - f).normalize(), i[1].setComponents(l + s, h + c, g + p, v + f).normalize(), i[2].setComponents(l + a, h + u, g + _, v + T).normalize(), i[3].setComponents(l - a, h - u, g - _, v - T).normalize(), n)
      i[4].setComponents(o, d, M, S).normalize(), i[5].setComponents(l - o, h - d, g - M, v - S).normalize();
    else if (i[4].setComponents(l - o, h - d, g - M, v - S).normalize(), t === 2e3) i[5].setComponents(l + o, h + d, g + M, v + S).normalize();
    else if (t === 2001) i[5].setComponents(o, d, M, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(An);
  }
  intersectsSprite(e) {
    return An.center.set(0, 0, 0), An.radius = 0.7071067811865476 + ih.distanceTo(e.center), An.applyMatrix4(e.matrixWorld), this.intersectsSphere(An);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (ur.x = i.normal.x > 0 ? e.max.x : e.min.x, ur.y = i.normal.y > 0 ? e.max.y : e.min.y, ur.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ur) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, yo = class extends Gt {
  constructor(e = [], t = 301, n, i, r, s, a, o, l, c) {
    super(e, t, n, i, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, si = class extends Gt {
  constructor(e, t, n, i, r, s, a, o, l) {
    super(e, t, n, i, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}, Oi = class extends Gt {
  constructor(e, t, n = Cn, i, r, s, a = Pt, o = Pt, l, c = Ui, u = 1) {
    if (c !== 1026 && c !== 1027) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({
      width: e,
      height: t,
      depth: u
    }, i, r, s, a, o, c, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new bs(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}, rh = class extends Oi {
  constructor(e, t = Cn, n = 301, i, r, s = Pt, a = Pt, o, l = Ui) {
    const c = {
      width: e,
      height: e,
      depth: 1
    }, u = [
      c,
      c,
      c,
      c,
      c,
      c
    ];
    super(e, e, t, n, i, r, s, a, o, l), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Eo = class extends Gt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, Hi = class To extends It {
  constructor(t = 1, n = 1, i = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], d = [];
    let h = 0, p = 0;
    _("z", "y", "x", -1, -1, i, n, t, a, s, 0), _("z", "y", "x", 1, -1, i, n, -t, a, s, 1), _("x", "z", "y", 1, 1, t, i, n, r, a, 2), _("x", "z", "y", 1, -1, t, i, -n, r, a, 3), _("x", "y", "z", 1, -1, t, n, i, r, s, 4), _("x", "y", "z", -1, -1, t, n, -i, r, s, 5), this.setIndex(l), this.setAttribute("position", new it(c, 3)), this.setAttribute("normal", new it(u, 3)), this.setAttribute("uv", new it(d, 2));
    function _(M, g, f, T, S, v, E, R, w, m, b) {
      const V = v / w, P = E / m, O = v / 2, Y = E / 2, N = R / 2, C = w + 1, k = m + 1;
      let F = 0, ee = 0;
      const X = new I();
      for (let Z = 0; Z < k; Z++) {
        const J = Z * P - Y;
        for (let Le = 0; Le < C; Le++)
          X[M] = (Le * V - O) * T, X[g] = J * S, X[f] = N, c.push(X.x, X.y, X.z), X[M] = 0, X[g] = 0, X[f] = R > 0 ? 1 : -1, u.push(X.x, X.y, X.z), d.push(Le / w), d.push(1 - Z / m), F += 1;
      }
      for (let Z = 0; Z < m; Z++) for (let J = 0; J < w; J++) {
        const Le = h + J + C * Z, we = h + J + C * (Z + 1), rt = h + (J + 1) + C * (Z + 1), Ge = h + (J + 1) + C * Z;
        l.push(Le, we, Ge), l.push(we, rt, Ge), ee += 6;
      }
      o.addGroup(p, ee, b), p += ee, h += F;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new To(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}, ci = class bo extends It {
  constructor(t = 1, n = 1, i = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: n,
      height: i,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const u = [], d = [], h = [], p = [];
    let _ = 0;
    const M = [], g = i / 2;
    let f = 0;
    T(), a === !1 && (t > 0 && S(!0), n > 0 && S(!1)), this.setIndex(u), this.setAttribute("position", new it(d, 3)), this.setAttribute("normal", new it(h, 3)), this.setAttribute("uv", new it(p, 2));
    function T() {
      const v = new I(), E = new I();
      let R = 0;
      const w = (n - t) / i;
      for (let m = 0; m <= s; m++) {
        const b = [], V = m / s, P = V * (n - t) + t;
        for (let O = 0; O <= r; O++) {
          const Y = O / r, N = Y * l + o, C = Math.sin(N), k = Math.cos(N);
          E.x = P * C, E.y = -V * i + g, E.z = P * k, d.push(E.x, E.y, E.z), v.set(C, w, k).normalize(), h.push(v.x, v.y, v.z), p.push(Y, 1 - V), b.push(_++);
        }
        M.push(b);
      }
      for (let m = 0; m < r; m++) for (let b = 0; b < s; b++) {
        const V = M[b][m], P = M[b + 1][m], O = M[b + 1][m + 1], Y = M[b][m + 1];
        (t > 0 || b !== 0) && (u.push(V, P, Y), R += 3), (n > 0 || b !== s - 1) && (u.push(P, O, Y), R += 3);
      }
      c.addGroup(f, R, 0), f += R;
    }
    function S(v) {
      const E = _, R = new de(), w = new I();
      let m = 0;
      const b = v === !0 ? t : n, V = v === !0 ? 1 : -1;
      for (let O = 1; O <= r; O++)
        d.push(0, g * V, 0), h.push(0, V, 0), p.push(0.5, 0.5), _++;
      const P = _;
      for (let O = 0; O <= r; O++) {
        const Y = O / r * l + o, N = Math.cos(Y), C = Math.sin(Y);
        w.x = b * C, w.y = g * V, w.z = b * N, d.push(w.x, w.y, w.z), h.push(0, V, 0), R.x = N * 0.5 + 0.5, R.y = C * 0.5 * V + 0.5, p.push(R.x, R.y), _++;
      }
      for (let O = 0; O < r; O++) {
        const Y = E + O, N = P + O;
        v === !0 ? u.push(N, N + 1, Y) : u.push(N + 1, N, Y), m += 3;
      }
      c.addGroup(f, m, v === !0 ? 1 : 2), f += m;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new bo(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, sh = class Ao extends ci {
  constructor(t = 1, n = 1, i = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, t, n, i, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new Ao(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, tn = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  getPoint() {
    Oe("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), r = 0;
    t.push(0);
    for (let s = 1; s <= e; s++)
      n = this.getPoint(s / e), r += n.distanceTo(i), t.push(r), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let s;
    t ? s = t : s = e * n[r - 1];
    let a = 0, o = r - 1, l;
    for (; a <= o; )
      if (i = Math.floor(a + (o - a) / 2), l = n[i] - s, l < 0) a = i + 1;
      else if (l > 0) o = i - 1;
      else {
        o = i;
        break;
      }
    if (i = o, n[i] === s) return i / (r - 1);
    const c = n[i], u = n[i + 1] - c, d = (s - c) / u;
    return (i + d) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const s = this.getPoint(i), a = this.getPoint(r), o = t || (s.isVector2 ? new de() : new I());
    return o.copy(a).sub(s).normalize(), o;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = !1) {
    const n = new I(), i = [], r = [], s = [], a = new I(), o = new ht();
    for (let h = 0; h <= e; h++) {
      const p = h / e;
      i[h] = this.getTangentAt(p, new I());
    }
    r[0] = new I(), s[0] = new I();
    let l = Number.MAX_VALUE;
    const c = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    c <= l && (l = c, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
    for (let h = 1; h <= e; h++) {
      if (r[h] = r[h - 1].clone(), s[h] = s[h - 1].clone(), a.crossVectors(i[h - 1], i[h]), a.length() > Number.EPSILON) {
        a.normalize();
        const p = Math.acos(qe(i[h - 1].dot(i[h]), -1, 1));
        r[h].applyMatrix4(o.makeRotationAxis(a, p));
      }
      s[h].crossVectors(i[h], r[h]);
    }
    if (t === !0) {
      let h = Math.acos(qe(r[0].dot(r[e]), -1, 1));
      h /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (h = -h);
      for (let p = 1; p <= e; p++)
        r[p].applyMatrix4(o.makeRotationAxis(i[p], h * p)), s[p].crossVectors(i[p], r[p]);
    }
    return {
      tangents: i,
      normals: r,
      binormals: s
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: {
      version: 4.7,
      type: "Curve",
      generator: "Curve.toJSON"
    } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}, ws = class extends tn {
  constructor(e = 0, t = 0, n = 1, i = 1, r = 0, s = Math.PI * 2, a = !1, o = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
  }
  getPoint(e, t = new de()) {
    const n = t, i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const s = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (s ? r = 0 : r = i), this.aClockwise === !0 && !s && (r === i ? r = -i : r = r - i);
    const a = this.aStartAngle + e * r;
    let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const c = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = o - this.aX, h = l - this.aY;
      o = d * c - h * u + this.aX, l = d * u + h * c + this.aY;
    }
    return n.set(o, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}, ah = class extends ws {
  constructor(e, t, n, i, r, s) {
    super(e, t, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
  }
};
function Rs() {
  let e = 0, t = 0, n = 0, i = 0;
  function r(s, a, o, l) {
    e = s, t = o, n = -3 * s + 3 * a - 2 * o - l, i = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      r(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, u, d) {
      let h = (a - s) / c - (o - s) / (c + u) + (o - a) / u, p = (o - a) / u - (l - a) / (u + d) + (l - o) / d;
      h *= u, p *= u, r(a, o, h, p);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return e + t * s + n * a + i * o;
    }
  };
}
var ma = /* @__PURE__ */ new I(), ga = /* @__PURE__ */ new I(), ns = /* @__PURE__ */ new Rs(), is = /* @__PURE__ */ new Rs(), rs = /* @__PURE__ */ new Rs(), wo = class extends tn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new I()) {
    const n = t, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(s), o = s - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : o === 0 && a === r - 1 && (a = r - 2, o = 1);
    let l, c;
    this.closed || a > 0 ? l = i[(a - 1) % r] : (ga.subVectors(i[0], i[1]).add(i[0]), l = ga);
    const u = i[a % r], d = i[(a + 1) % r];
    if (this.closed || a + 2 < r ? c = i[(a + 2) % r] : (ma.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), c = ma), this.curveType === "centripetal" || this.curveType === "chordal") {
      const h = this.curveType === "chordal" ? 0.5 : 0.25;
      let p = Math.pow(l.distanceToSquared(u), h), _ = Math.pow(u.distanceToSquared(d), h), M = Math.pow(d.distanceToSquared(c), h);
      _ < 1e-4 && (_ = 1), p < 1e-4 && (p = _), M < 1e-4 && (M = _), ns.initNonuniformCatmullRom(l.x, u.x, d.x, c.x, p, _, M), is.initNonuniformCatmullRom(l.y, u.y, d.y, c.y, p, _, M), rs.initNonuniformCatmullRom(l.z, u.z, d.z, c.z, p, _, M);
    } else this.curveType === "catmullrom" && (ns.initCatmullRom(l.x, u.x, d.x, c.x, this.tension), is.initCatmullRom(l.y, u.y, d.y, c.y, this.tension), rs.initCatmullRom(l.z, u.z, d.z, c.z, this.tension));
    return n.set(ns.calc(o), is.calc(o), rs.calc(o)), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new I().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
};
function va(e, t, n, i, r) {
  const s = (i - t) * 0.5, a = (r - n) * 0.5, o = e * e, l = e * o;
  return (2 * n - 2 * i + s + a) * l + (-3 * n + 3 * i - 2 * s - a) * o + s * e + n;
}
function oh(e, t) {
  const n = 1 - e;
  return n * n * t;
}
function lh(e, t) {
  return 2 * (1 - e) * e * t;
}
function ch(e, t) {
  return e * e * t;
}
function Li(e, t, n, i) {
  return oh(e, t) + lh(e, n) + ch(e, i);
}
function hh(e, t) {
  const n = 1 - e;
  return n * n * n * t;
}
function uh(e, t) {
  const n = 1 - e;
  return 3 * n * n * e * t;
}
function fh(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function dh(e, t) {
  return e * e * e * t;
}
function Ii(e, t, n, i, r) {
  return hh(e, t) + uh(e, n) + fh(e, i) + dh(e, r);
}
var Ro = class extends tn {
  constructor(e = new de(), t = new de(), n = new de(), i = new de()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return n.set(Ii(e, i.x, r.x, s.x, a.x), Ii(e, i.y, r.y, s.y, a.y)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}, ph = class extends tn {
  constructor(e = new I(), t = new I(), n = new I(), i = new I()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new I()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return n.set(Ii(e, i.x, r.x, s.x, a.x), Ii(e, i.y, r.y, s.y, a.y), Ii(e, i.z, r.z, s.z, a.z)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}, Co = class extends tn {
  constructor(e = new de(), t = new de()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new de()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new de()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, Po = class extends tn {
  constructor(e = new I(), t = new I()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new I()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new I()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, Lo = class extends tn {
  constructor(e = new de(), t = new de(), n = new de()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(Li(e, i.x, r.x, s.x), Li(e, i.y, r.y, s.y)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, Io = class extends tn {
  constructor(e = new I(), t = new I(), n = new I()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new I()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(Li(e, i.x, r.x, s.x), Li(e, i.y, r.y, s.y), Li(e, i.z, r.z, s.z)), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, No = class extends tn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.points, r = (i.length - 1) * e, s = Math.floor(r), a = r - s, o = i[s === 0 ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], u = i[s > i.length - 3 ? i.length - 1 : s + 2];
    return n.set(va(a, o.x, l.x, c.x, u.x), va(a, o.y, l.y, c.y, u.y)), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new de().fromArray(i));
    }
    return this;
  }
}, Rr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: ah,
  CatmullRomCurve3: wo,
  CubicBezierCurve: Ro,
  CubicBezierCurve3: ph,
  EllipseCurve: ws,
  LineCurve: Co,
  LineCurve3: Po,
  QuadraticBezierCurve: Lo,
  QuadraticBezierCurve3: Io,
  SplineCurve: No
}), Uo = class extends tn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Rr[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const s = i[r] - n, a = this.curves[r], o = a.getLength(), l = o === 0 ? 0 : 1 - s / o;
        return a.getPointAt(l, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const s = r[i], a = s.isEllipseCurve ? e * 2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? e * s.points.length : e, o = s.getPoints(a);
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        n && n.equals(c) || (t.push(c), n = c);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Rr[i.type]().fromJSON(i));
    }
    return this;
  }
}, _a = class extends Uo {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new de(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Co(this.currentPoint.clone(), new de(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new Lo(this.currentPoint.clone(), new de(e, t), new de(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, s) {
    const a = new Ro(this.currentPoint.clone(), new de(e, t), new de(n, i), new de(r, s));
    return this.curves.push(a), this.currentPoint.set(r, s), this;
  }
  splineThru(e) {
    const t = new No([this.currentPoint.clone()].concat(e));
    return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, s) {
    const a = this.currentPoint.x, o = this.currentPoint.y;
    return this.absarc(e + a, t + o, n, i, r, s), this;
  }
  absarc(e, t, n, i, r, s) {
    return this.absellipse(e, t, n, n, i, r, s), this;
  }
  ellipse(e, t, n, i, r, s, a, o) {
    const l = this.currentPoint.x, c = this.currentPoint.y;
    return this.absellipse(e + l, t + c, n, i, r, s, a, o), this;
  }
  absellipse(e, t, n, i, r, s, a, o) {
    const l = new ws(e, t, n, i, r, s, a, o);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}, Do = class extends _a {
  constructor(e) {
    super(e), this.uuid = Un(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new _a().fromJSON(i));
    }
    return this;
  }
};
function mh(e, t, n = 2) {
  const i = t && t.length, r = i ? t[0] * n : e.length;
  let s = Oo(e, 0, r, n, !0);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, l, c;
  if (i && (s = Sh(e, t, s, n)), e.length > 80 * n) {
    o = e[0], l = e[1];
    let u = o, d = l;
    for (let h = n; h < r; h += n) {
      const p = e[h], _ = e[h + 1];
      p < o && (o = p), _ < l && (l = _), p > u && (u = p), _ > d && (d = _);
    }
    c = Math.max(u - o, d - l), c = c !== 0 ? 32767 / c : 0;
  }
  return Fi(s, a, n, o, l, c, 0), a;
}
function Oo(e, t, n, i, r) {
  let s;
  if (r === Lh(e, t, n, i) > 0) for (let a = t; a < n; a += i) s = Ma(a / i | 0, e[a], e[a + 1], s);
  else for (let a = n - i; a >= t; a -= i) s = Ma(a / i | 0, e[a], e[a + 1], s);
  return s && di(s, s.next) && (zi(s), s = s.next), s;
}
function Ln(e, t) {
  if (!e) return e;
  t || (t = e);
  let n = e, i;
  do
    if (i = !1, !n.steiner && (di(n, n.next) || ft(n.prev, n, n.next) === 0)) {
      if (zi(n), n = t = n.prev, n === n.next) break;
      i = !0;
    } else n = n.next;
  while (i || n !== t);
  return t;
}
function Fi(e, t, n, i, r, s, a) {
  if (!e) return;
  !a && s && bh(e, i, r, s);
  let o = e;
  for (; e.prev !== e.next; ) {
    const l = e.prev, c = e.next;
    if (s ? vh(e, i, r, s) : gh(e)) {
      t.push(l.i, e.i, c.i), zi(e), e = c.next, o = c.next;
      continue;
    }
    if (e = c, e === o) {
      a ? a === 1 ? (e = _h(Ln(e), t), Fi(e, t, n, i, r, s, 2)) : a === 2 && Mh(e, t, n, i, r, s) : Fi(Ln(e), t, n, i, r, s, 1);
      break;
    }
  }
}
function gh(e) {
  const t = e.prev, n = e, i = e.next;
  if (ft(t, n, i) >= 0) return !1;
  const r = t.x, s = n.x, a = i.x, o = t.y, l = n.y, c = i.y, u = Math.min(r, s, a), d = Math.min(o, l, c), h = Math.max(r, s, a), p = Math.max(o, l, c);
  let _ = i.next;
  for (; _ !== t; ) {
    if (_.x >= u && _.x <= h && _.y >= d && _.y <= p && wi(r, o, s, l, a, c, _.x, _.y) && ft(_.prev, _, _.next) >= 0) return !1;
    _ = _.next;
  }
  return !0;
}
function vh(e, t, n, i) {
  const r = e.prev, s = e, a = e.next;
  if (ft(r, s, a) >= 0) return !1;
  const o = r.x, l = s.x, c = a.x, u = r.y, d = s.y, h = a.y, p = Math.min(o, l, c), _ = Math.min(u, d, h), M = Math.max(o, l, c), g = Math.max(u, d, h), f = _s(p, _, t, n, i), T = _s(M, g, t, n, i);
  let S = e.prevZ, v = e.nextZ;
  for (; S && S.z >= f && v && v.z <= T; ) {
    if (S.x >= p && S.x <= M && S.y >= _ && S.y <= g && S !== r && S !== a && wi(o, u, l, d, c, h, S.x, S.y) && ft(S.prev, S, S.next) >= 0 || (S = S.prevZ, v.x >= p && v.x <= M && v.y >= _ && v.y <= g && v !== r && v !== a && wi(o, u, l, d, c, h, v.x, v.y) && ft(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; S && S.z >= f; ) {
    if (S.x >= p && S.x <= M && S.y >= _ && S.y <= g && S !== r && S !== a && wi(o, u, l, d, c, h, S.x, S.y) && ft(S.prev, S, S.next) >= 0) return !1;
    S = S.prevZ;
  }
  for (; v && v.z <= T; ) {
    if (v.x >= p && v.x <= M && v.y >= _ && v.y <= g && v !== r && v !== a && wi(o, u, l, d, c, h, v.x, v.y) && ft(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function _h(e, t) {
  let n = e;
  do {
    const i = n.prev, r = n.next.next;
    !di(i, r) && Bo(i, n, n.next, r) && Bi(i, r) && Bi(r, i) && (t.push(i.i, n.i, r.i), zi(n), zi(n.next), n = e = r), n = n.next;
  } while (n !== e);
  return Ln(n);
}
function Mh(e, t, n, i, r, s) {
  let a = e;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Rh(a, o)) {
        let l = zo(a, o);
        a = Ln(a, a.next), l = Ln(l, l.next), Fi(a, t, n, i, r, s, 0), Fi(l, t, n, i, r, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== e);
}
function Sh(e, t, n, i) {
  const r = [];
  for (let s = 0, a = t.length; s < a; s++) {
    const o = Oo(e, t[s] * i, s < a - 1 ? t[s + 1] * i : e.length, i, !1);
    o === o.next && (o.steiner = !0), r.push(wh(o));
  }
  r.sort(xh);
  for (let s = 0; s < r.length; s++) n = yh(r[s], n);
  return n;
}
function xh(e, t) {
  let n = e.x - t.x;
  return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function yh(e, t) {
  const n = Eh(e, t);
  if (!n) return t;
  const i = zo(n, e);
  return Ln(i, i.next), Ln(n, n.next);
}
function Eh(e, t) {
  let n = t;
  const i = e.x, r = e.y;
  let s = -1 / 0, a;
  if (di(e, n)) return n;
  do {
    if (di(e, n.next)) return n.next;
    if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
      const d = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (d <= i && d > s && (s = d, a = n.x < n.next.x ? n : n.next, d === i))
        return a;
    }
    n = n.next;
  } while (n !== t);
  if (!a) return null;
  const o = a, l = a.x, c = a.y;
  let u = 1 / 0;
  n = a;
  do {
    if (i >= n.x && n.x >= l && i !== n.x && Fo(r < c ? i : s, r, l, c, r < c ? s : i, r, n.x, n.y)) {
      const d = Math.abs(r - n.y) / (i - n.x);
      Bi(n, e) && (d < u || d === u && (n.x > a.x || n.x === a.x && Th(a, n))) && (a = n, u = d);
    }
    n = n.next;
  } while (n !== o);
  return a;
}
function Th(e, t) {
  return ft(e.prev, e, t.prev) < 0 && ft(t.next, e, e.next) < 0;
}
function bh(e, t, n, i) {
  let r = e;
  do
    r.z === 0 && (r.z = _s(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, Ah(r);
}
function Ah(e) {
  let t, n = 1;
  do {
    let i = e, r;
    e = null;
    let s = null;
    for (t = 0; i; ) {
      t++;
      let a = i, o = 0;
      for (let c = 0; c < n && (o++, a = a.nextZ, !!a); c++)
        ;
      let l = n;
      for (; o > 0 || l > 0 && a; )
        o !== 0 && (l === 0 || !a || i.z <= a.z) ? (r = i, i = i.nextZ, o--) : (r = a, a = a.nextZ, l--), s ? s.nextZ = r : e = r, r.prevZ = s, s = r;
      i = a;
    }
    s.nextZ = null, n *= 2;
  } while (t > 1);
  return e;
}
function _s(e, t, n, i, r) {
  return e = (e - n) * r | 0, t = (t - i) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function wh(e) {
  let t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function Fo(e, t, n, i, r, s, a, o) {
  return (r - a) * (t - o) >= (e - a) * (s - o) && (e - a) * (i - o) >= (n - a) * (t - o) && (n - a) * (s - o) >= (r - a) * (i - o);
}
function wi(e, t, n, i, r, s, a, o) {
  return !(e === a && t === o) && Fo(e, t, n, i, r, s, a, o);
}
function Rh(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !Ch(e, t) && (Bi(e, t) && Bi(t, e) && Ph(e, t) && (ft(e.prev, e, t.prev) || ft(e, t.prev, t)) || di(e, t) && ft(e.prev, e, e.next) > 0 && ft(t.prev, t, t.next) > 0);
}
function ft(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function di(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Bo(e, t, n, i) {
  const r = dr(ft(e, t, n)), s = dr(ft(e, t, i)), a = dr(ft(n, i, e)), o = dr(ft(n, i, t));
  return !!(r !== s && a !== o || r === 0 && fr(e, n, t) || s === 0 && fr(e, i, t) || a === 0 && fr(n, e, i) || o === 0 && fr(n, t, i));
}
function fr(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function dr(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ch(e, t) {
  let n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Bo(n, n.next, e, t)) return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function Bi(e, t) {
  return ft(e.prev, e, e.next) < 0 ? ft(e, t, e.next) >= 0 && ft(e, e.prev, t) >= 0 : ft(e, t, e.prev) < 0 || ft(e, e.next, t) < 0;
}
function Ph(e, t) {
  let n = e, i = !1;
  const r = (e.x + t.x) / 2, s = (e.y + t.y) / 2;
  do
    n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
  while (n !== e);
  return i;
}
function zo(e, t) {
  const n = Ms(e.i, e.x, e.y), i = Ms(t.i, t.x, t.y), r = e.next, s = t.prev;
  return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
}
function Ma(e, t, n, i) {
  const r = Ms(e, t, n);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function zi(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Ms(e, t, n) {
  return {
    i: e,
    x: t,
    y: n,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1
  };
}
function Lh(e, t, n, i) {
  let r = 0;
  for (let s = t, a = n - i; s < n; s += i)
    r += (e[a] - e[s]) * (e[s + 1] + e[a + 1]), a = s;
  return r;
}
var Ih = class {
  static triangulate(e, t, n = 2) {
    return mh(e, t, n);
  }
}, pr = class Vo {
  static area(t) {
    const n = t.length;
    let i = 0;
    for (let r = n - 1, s = 0; s < n; r = s++) i += t[r].x * t[s].y - t[s].x * t[r].y;
    return i * 0.5;
  }
  static isClockWise(t) {
    return Vo.area(t) < 0;
  }
  static triangulateShape(t, n) {
    const i = [], r = [], s = [];
    Sa(t), xa(i, t);
    let a = t.length;
    n.forEach(Sa);
    for (let l = 0; l < n.length; l++)
      r.push(a), a += n[l].length, xa(i, n[l]);
    const o = Ih.triangulate(i, r);
    for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
    return s;
  }
};
function Sa(e) {
  const t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function xa(e, t) {
  for (let n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y);
}
var Nh = class Go extends It {
  constructor(t = new Do([
    new de(0.5, 0.5),
    new de(-0.5, 0.5),
    new de(-0.5, -0.5),
    new de(0.5, -0.5)
  ]), n = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: n
    }, t = Array.isArray(t) ? t : [t];
    const i = this, r = [], s = [];
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o];
      a(c);
    }
    this.setAttribute("position", new it(r, 3)), this.setAttribute("uv", new it(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = n.curveSegments !== void 0 ? n.curveSegments : 12, u = n.steps !== void 0 ? n.steps : 1, d = n.depth !== void 0 ? n.depth : 1;
      let h = n.bevelEnabled !== void 0 ? n.bevelEnabled : !0, p = n.bevelThickness !== void 0 ? n.bevelThickness : 0.2, _ = n.bevelSize !== void 0 ? n.bevelSize : p - 0.1, M = n.bevelOffset !== void 0 ? n.bevelOffset : 0, g = n.bevelSegments !== void 0 ? n.bevelSegments : 3;
      const f = n.extrudePath, T = n.UVGenerator !== void 0 ? n.UVGenerator : Uh;
      let S, v = !1, E, R, w, m;
      if (f) {
        S = f.getSpacedPoints(u), v = !0, h = !1;
        const j = f.isCatmullRomCurve3 ? f.closed : !1;
        E = f.computeFrenetFrames(u, j), R = new I(), w = new I(), m = new I();
      }
      h || (g = 0, p = 0, _ = 0, M = 0);
      const b = o.extractPoints(c);
      let V = b.shape;
      const P = b.holes;
      if (!pr.isClockWise(V)) {
        V = V.reverse();
        for (let j = 0, Q = P.length; j < Q; j++) {
          const le = P[j];
          pr.isClockWise(le) && (P[j] = le.reverse());
        }
      }
      function O(j) {
        const le = 10000000000000001e-36;
        let ve = j[0];
        for (let _e = 1; _e <= j.length; _e++) {
          const Re = _e % j.length, Ie = j[Re], Ve = Ie.x - ve.x, He = Ie.y - ve.y, L = Ve * Ve + He * He, lt = Math.max(Math.abs(Ie.x), Math.abs(Ie.y), Math.abs(ve.x), Math.abs(ve.y));
          if (L <= le * lt * lt) {
            j.splice(Re, 1), _e--;
            continue;
          }
          ve = Ie;
        }
      }
      O(V), P.forEach(O);
      const Y = P.length, N = V;
      for (let j = 0; j < Y; j++) {
        const Q = P[j];
        V = V.concat(Q);
      }
      function C(j, Q, le) {
        return Q || Be("ExtrudeGeometry: vec does not exist"), j.clone().addScaledVector(Q, le);
      }
      const k = V.length;
      function F(j, Q, le) {
        let ve, _e, Re;
        const Ie = j.x - Q.x, Ve = j.y - Q.y, He = le.x - j.x, L = le.y - j.y, lt = Ie * Ie + Ve * Ve, Qe = Ie * L - Ve * He;
        if (Math.abs(Qe) > Number.EPSILON) {
          const Ke = Math.sqrt(lt), A = Math.sqrt(He * He + L * L), x = Q.x - Ve / Ke, U = Q.y + Ie / Ke, W = le.x - L / A, te = le.y + He / A, oe = ((W - x) * L - (te - U) * He) / (Ie * L - Ve * He);
          ve = x + Ie * oe - j.x, _e = U + Ve * oe - j.y;
          const fe = ve * ve + _e * _e;
          if (fe <= 2) return new de(ve, _e);
          Re = Math.sqrt(fe / 2);
        } else {
          let Ke = !1;
          Ie > Number.EPSILON ? He > Number.EPSILON && (Ke = !0) : Ie < -Number.EPSILON ? He < -Number.EPSILON && (Ke = !0) : Math.sign(Ve) === Math.sign(L) && (Ke = !0), Ke ? (ve = -Ve, _e = Ie, Re = Math.sqrt(lt)) : (ve = Ie, _e = Ve, Re = Math.sqrt(lt / 2));
        }
        return new de(ve / Re, _e / Re);
      }
      const ee = [];
      for (let j = 0, Q = N.length, le = Q - 1, ve = j + 1; j < Q; j++, le++, ve++)
        le === Q && (le = 0), ve === Q && (ve = 0), ee[j] = F(N[j], N[le], N[ve]);
      const X = [];
      let Z, J = ee.concat();
      for (let j = 0, Q = Y; j < Q; j++) {
        const le = P[j];
        Z = [];
        for (let ve = 0, _e = le.length, Re = _e - 1, Ie = ve + 1; ve < _e; ve++, Re++, Ie++)
          Re === _e && (Re = 0), Ie === _e && (Ie = 0), Z[ve] = F(le[ve], le[Re], le[Ie]);
        X.push(Z), J = J.concat(Z);
      }
      let Le;
      if (g === 0) Le = pr.triangulateShape(N, P);
      else {
        const j = [], Q = [];
        for (let le = 0; le < g; le++) {
          const ve = le / g, _e = p * Math.cos(ve * Math.PI / 2), Re = _ * Math.sin(ve * Math.PI / 2) + M;
          for (let Ie = 0, Ve = N.length; Ie < Ve; Ie++) {
            const He = C(N[Ie], ee[Ie], Re);
            ae(He.x, He.y, -_e), ve === 0 && j.push(He);
          }
          for (let Ie = 0, Ve = Y; Ie < Ve; Ie++) {
            const He = P[Ie];
            Z = X[Ie];
            const L = [];
            for (let lt = 0, Qe = He.length; lt < Qe; lt++) {
              const Ke = C(He[lt], Z[lt], Re);
              ae(Ke.x, Ke.y, -_e), ve === 0 && L.push(Ke);
            }
            ve === 0 && Q.push(L);
          }
        }
        Le = pr.triangulateShape(j, Q);
      }
      const we = Le.length, rt = _ + M;
      for (let j = 0; j < k; j++) {
        const Q = h ? C(V[j], J[j], rt) : V[j];
        v ? (w.copy(E.normals[0]).multiplyScalar(Q.x), R.copy(E.binormals[0]).multiplyScalar(Q.y), m.copy(S[0]).add(w).add(R), ae(m.x, m.y, m.z)) : ae(Q.x, Q.y, 0);
      }
      for (let j = 1; j <= u; j++) for (let Q = 0; Q < k; Q++) {
        const le = h ? C(V[Q], J[Q], rt) : V[Q];
        v ? (w.copy(E.normals[j]).multiplyScalar(le.x), R.copy(E.binormals[j]).multiplyScalar(le.y), m.copy(S[j]).add(w).add(R), ae(m.x, m.y, m.z)) : ae(le.x, le.y, d / u * j);
      }
      for (let j = g - 1; j >= 0; j--) {
        const Q = j / g, le = p * Math.cos(Q * Math.PI / 2), ve = _ * Math.sin(Q * Math.PI / 2) + M;
        for (let _e = 0, Re = N.length; _e < Re; _e++) {
          const Ie = C(N[_e], ee[_e], ve);
          ae(Ie.x, Ie.y, d + le);
        }
        for (let _e = 0, Re = P.length; _e < Re; _e++) {
          const Ie = P[_e];
          Z = X[_e];
          for (let Ve = 0, He = Ie.length; Ve < He; Ve++) {
            const L = C(Ie[Ve], Z[Ve], ve);
            v ? ae(L.x, L.y + S[u - 1].y, S[u - 1].x + le) : ae(L.x, L.y, d + le);
          }
        }
      }
      Ge(), K();
      function Ge() {
        const j = r.length / 3;
        if (h) {
          let Q = 0, le = k * Q;
          for (let ve = 0; ve < we; ve++) {
            const _e = Le[ve];
            Ce(_e[2] + le, _e[1] + le, _e[0] + le);
          }
          Q = u + g * 2, le = k * Q;
          for (let ve = 0; ve < we; ve++) {
            const _e = Le[ve];
            Ce(_e[0] + le, _e[1] + le, _e[2] + le);
          }
        } else {
          for (let Q = 0; Q < we; Q++) {
            const le = Le[Q];
            Ce(le[2], le[1], le[0]);
          }
          for (let Q = 0; Q < we; Q++) {
            const le = Le[Q];
            Ce(le[0] + k * u, le[1] + k * u, le[2] + k * u);
          }
        }
        i.addGroup(j, r.length / 3 - j, 0);
      }
      function K() {
        const j = r.length / 3;
        let Q = 0;
        re(N, Q), Q += N.length;
        for (let le = 0, ve = P.length; le < ve; le++) {
          const _e = P[le];
          re(_e, Q), Q += _e.length;
        }
        i.addGroup(j, r.length / 3 - j, 1);
      }
      function re(j, Q) {
        let le = j.length;
        for (; --le >= 0; ) {
          const ve = le;
          let _e = le - 1;
          _e < 0 && (_e = j.length - 1);
          for (let Re = 0, Ie = u + g * 2; Re < Ie; Re++) {
            const Ve = k * Re, He = k * (Re + 1);
            Ue(Q + ve + Ve, Q + _e + Ve, Q + _e + He, Q + ve + He);
          }
        }
      }
      function ae(j, Q, le) {
        l.push(j), l.push(Q), l.push(le);
      }
      function Ce(j, Q, le) {
        ue(j), ue(Q), ue(le);
        const ve = r.length / 3, _e = T.generateTopUV(i, r, ve - 3, ve - 2, ve - 1);
        Ye(_e[0]), Ye(_e[1]), Ye(_e[2]);
      }
      function Ue(j, Q, le, ve) {
        ue(j), ue(Q), ue(ve), ue(Q), ue(le), ue(ve);
        const _e = r.length / 3, Re = T.generateSideWallUV(i, r, _e - 6, _e - 3, _e - 2, _e - 1);
        Ye(Re[0]), Ye(Re[1]), Ye(Re[3]), Ye(Re[1]), Ye(Re[2]), Ye(Re[3]);
      }
      function ue(j) {
        r.push(l[j * 3 + 0]), r.push(l[j * 3 + 1]), r.push(l[j * 3 + 2]);
      }
      function Ye(j) {
        s.push(j.x), s.push(j.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), n = this.parameters.shapes, i = this.parameters.options;
    return Dh(n, i, t);
  }
  static fromJSON(t, n) {
    const i = [];
    for (let s = 0, a = t.shapes.length; s < a; s++) {
      const o = n[t.shapes[s]];
      i.push(o);
    }
    const r = t.options.extrudePath;
    return r !== void 0 && (t.options.extrudePath = new Rr[r.type]().fromJSON(r)), new Go(i, t.options);
  }
}, Uh = {
  generateTopUV: function(e, t, n, i, r) {
    const s = t[n * 3], a = t[n * 3 + 1], o = t[i * 3], l = t[i * 3 + 1], c = t[r * 3], u = t[r * 3 + 1];
    return [
      new de(s, a),
      new de(o, l),
      new de(c, u)
    ];
  },
  generateSideWallUV: function(e, t, n, i, r, s) {
    const a = t[n * 3], o = t[n * 3 + 1], l = t[n * 3 + 2], c = t[i * 3], u = t[i * 3 + 1], d = t[i * 3 + 2], h = t[r * 3], p = t[r * 3 + 1], _ = t[r * 3 + 2], M = t[s * 3], g = t[s * 3 + 1], f = t[s * 3 + 2];
    return Math.abs(o - u) < Math.abs(a - c) ? [
      new de(a, 1 - l),
      new de(c, 1 - d),
      new de(h, 1 - _),
      new de(M, 1 - f)
    ] : [
      new de(o, 1 - l),
      new de(u, 1 - d),
      new de(p, 1 - _),
      new de(g, 1 - f)
    ];
  }
};
function Dh(e, t, n) {
  if (n.shapes = [], Array.isArray(e)) for (let i = 0, r = e.length; i < r; i++) {
    const s = e[i];
    n.shapes.push(s.uuid);
  }
  else n.shapes.push(e.uuid);
  return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
var In = class Ho extends It {
  constructor(t = 1, n = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: n,
      widthSegments: i,
      heightSegments: r
    };
    const s = t / 2, a = n / 2, o = Math.floor(i), l = Math.floor(r), c = o + 1, u = l + 1, d = t / o, h = n / l, p = [], _ = [], M = [], g = [];
    for (let f = 0; f < u; f++) {
      const T = f * h - a;
      for (let S = 0; S < c; S++) {
        const v = S * d - s;
        _.push(v, -T, 0), M.push(0, 0, 1), g.push(S / o), g.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let T = 0; T < o; T++) {
      const S = T + c * f, v = T + c * (f + 1), E = T + 1 + c * (f + 1), R = T + 1 + c * f;
      p.push(S, v, R), p.push(v, E, R);
    }
    this.setIndex(p), this.setAttribute("position", new it(_, 3)), this.setAttribute("normal", new it(M, 3)), this.setAttribute("uv", new it(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ho(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, Oh = class ko extends It {
  constructor(t = 0.5, n = 1, i = 32, r = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: n,
      thetaSegments: i,
      phiSegments: r,
      thetaStart: s,
      thetaLength: a
    }, i = Math.max(3, i), r = Math.max(1, r);
    const o = [], l = [], c = [], u = [];
    let d = t;
    const h = (n - t) / r, p = new I(), _ = new de();
    for (let M = 0; M <= r; M++) {
      for (let g = 0; g <= i; g++) {
        const f = s + g / i * a;
        p.x = d * Math.cos(f), p.y = d * Math.sin(f), l.push(p.x, p.y, p.z), c.push(0, 0, 1), _.x = (p.x / n + 1) / 2, _.y = (p.y / n + 1) / 2, u.push(_.x, _.y);
      }
      d += h;
    }
    for (let M = 0; M < r; M++) {
      const g = M * (i + 1);
      for (let f = 0; f < i; f++) {
        const T = f + g, S = T, v = T + i + 1, E = T + i + 2, R = T + 1;
        o.push(S, v, R), o.push(v, E, R);
      }
    }
    this.setIndex(o), this.setAttribute("position", new it(l, 3)), this.setAttribute("normal", new it(c, 3)), this.setAttribute("uv", new it(u, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ko(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}, Cs = class Wo extends It {
  constructor(t = 1, n = 32, i = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: n,
      heightSegments: i,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, n = Math.max(3, Math.floor(n)), i = Math.max(2, Math.floor(i));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [], d = new I(), h = new I(), p = [], _ = [], M = [], g = [];
    for (let f = 0; f <= i; f++) {
      const T = [], S = f / i, v = a + S * o, E = t * Math.cos(v), R = Math.sqrt(t * t - E * E);
      let w = 0;
      f === 0 && a === 0 ? w = 0.5 / n : f === i && l === Math.PI && (w = -0.5 / n);
      for (let m = 0; m <= n; m++) {
        const b = m / n, V = r + b * s;
        d.x = -R * Math.cos(V), d.y = E, d.z = R * Math.sin(V), _.push(d.x, d.y, d.z), h.copy(d).normalize(), M.push(h.x, h.y, h.z), g.push(b + w, 1 - S), T.push(c++);
      }
      u.push(T);
    }
    for (let f = 0; f < i; f++) for (let T = 0; T < n; T++) {
      const S = u[f][T + 1], v = u[f][T], E = u[f + 1][T], R = u[f + 1][T + 1];
      (f !== 0 || a > 0) && p.push(S, v, R), (f !== i - 1 || l < Math.PI) && p.push(v, E, R);
    }
    this.setIndex(p), this.setAttribute("position", new it(_, 3)), this.setAttribute("normal", new it(M, 3)), this.setAttribute("uv", new it(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Wo(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}, Xo = class qo extends It {
  constructor(t = 1, n = 0.4, i = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: n,
      radialSegments: i,
      tubularSegments: r,
      arc: s,
      thetaStart: a,
      thetaLength: o
    }, i = Math.floor(i), r = Math.floor(r);
    const l = [], c = [], u = [], d = [], h = new I(), p = new I(), _ = new I();
    for (let M = 0; M <= i; M++) {
      const g = a + M / i * o;
      for (let f = 0; f <= r; f++) {
        const T = f / r * s;
        p.x = (t + n * Math.cos(g)) * Math.cos(T), p.y = (t + n * Math.cos(g)) * Math.sin(T), p.z = n * Math.sin(g), c.push(p.x, p.y, p.z), h.x = t * Math.cos(T), h.y = t * Math.sin(T), _.subVectors(p, h).normalize(), u.push(_.x, _.y, _.z), d.push(f / r), d.push(M / i);
      }
    }
    for (let M = 1; M <= i; M++) for (let g = 1; g <= r; g++) {
      const f = (r + 1) * M + g - 1, T = (r + 1) * (M - 1) + g - 1, S = (r + 1) * (M - 1) + g, v = (r + 1) * M + g;
      l.push(f, T, v), l.push(T, S, v);
    }
    this.setIndex(l), this.setAttribute("position", new it(c, 3)), this.setAttribute("normal", new it(u, 3)), this.setAttribute("uv", new it(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new qo(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
  }
}, Fh = class Yo extends It {
  constructor(t = 1, n = 0.4, i = 64, r = 8, s = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: n,
      tubularSegments: i,
      radialSegments: r,
      p: s,
      q: a
    }, i = Math.floor(i), r = Math.floor(r);
    const o = [], l = [], c = [], u = [], d = new I(), h = new I(), p = new I(), _ = new I(), M = new I(), g = new I(), f = new I();
    for (let S = 0; S <= i; ++S) {
      const v = S / i * s * Math.PI * 2;
      T(v, s, a, t, p), T(v + 0.01, s, a, t, _), g.subVectors(_, p), f.addVectors(_, p), M.crossVectors(g, f), f.crossVectors(M, g), M.normalize(), f.normalize();
      for (let E = 0; E <= r; ++E) {
        const R = E / r * Math.PI * 2, w = -n * Math.cos(R), m = n * Math.sin(R);
        d.x = p.x + (w * f.x + m * M.x), d.y = p.y + (w * f.y + m * M.y), d.z = p.z + (w * f.z + m * M.z), l.push(d.x, d.y, d.z), h.subVectors(d, p).normalize(), c.push(h.x, h.y, h.z), u.push(S / i), u.push(E / r);
      }
    }
    for (let S = 1; S <= i; S++) for (let v = 1; v <= r; v++) {
      const E = (r + 1) * (S - 1) + (v - 1), R = (r + 1) * S + (v - 1), w = (r + 1) * S + v, m = (r + 1) * (S - 1) + v;
      o.push(E, R, m), o.push(R, w, m);
    }
    this.setIndex(o), this.setAttribute("position", new it(l, 3)), this.setAttribute("normal", new it(c, 3)), this.setAttribute("uv", new it(u, 2));
    function T(S, v, E, R, w) {
      const m = Math.cos(S), b = Math.sin(S), V = E / v * S, P = Math.cos(V);
      w.x = R * (2 + P) * 0.5 * m, w.y = R * (2 + P) * b * 0.5, w.z = R * Math.sin(V) * 0.5;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Yo(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
  }
}, Zo = class Ko extends It {
  constructor(t = new Io(new I(-1, -1, 0), new I(-1, 1, 0), new I(1, 1, 0)), n = 64, i = 1, r = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: n,
      radius: i,
      radialSegments: r,
      closed: s
    };
    const a = t.computeFrenetFrames(n, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new I(), l = new I(), c = new de();
    let u = new I();
    const d = [], h = [], p = [], _ = [];
    M(), this.setIndex(_), this.setAttribute("position", new it(d, 3)), this.setAttribute("normal", new it(h, 3)), this.setAttribute("uv", new it(p, 2));
    function M() {
      for (let S = 0; S < n; S++) g(S);
      g(s === !1 ? n : 0), T(), f();
    }
    function g(S) {
      u = t.getPointAt(S / n, u);
      const v = a.normals[S], E = a.binormals[S];
      for (let R = 0; R <= r; R++) {
        const w = R / r * Math.PI * 2, m = Math.sin(w), b = -Math.cos(w);
        l.x = b * v.x + m * E.x, l.y = b * v.y + m * E.y, l.z = b * v.z + m * E.z, l.normalize(), h.push(l.x, l.y, l.z), o.x = u.x + i * l.x, o.y = u.y + i * l.y, o.z = u.z + i * l.z, d.push(o.x, o.y, o.z);
      }
    }
    function f() {
      for (let S = 1; S <= n; S++) for (let v = 1; v <= r; v++) {
        const E = (r + 1) * (S - 1) + (v - 1), R = (r + 1) * S + (v - 1), w = (r + 1) * S + v, m = (r + 1) * (S - 1) + v;
        _.push(E, R, m), _.push(R, w, m);
      }
    }
    function T() {
      for (let S = 0; S <= n; S++) for (let v = 0; v <= r; v++)
        c.x = S / n, c.y = v / r, p.push(c.x, c.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new Ko(new Rr[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
  }
}, Bh = class extends Fn {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Xe(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
};
function pi(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      if (ya(r)) r.isRenderTargetTexture ? (Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][i] = null) : t[n][i] = r.clone();
      else if (Array.isArray(r)) if (ya(r[0])) {
        const s = [];
        for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
        t[n][i] = s;
      } else t[n][i] = r.slice();
      else t[n][i] = r;
    }
  }
  return t;
}
function Rt(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = pi(e[n]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function ya(e) {
  return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function zh(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function Jo(e) {
  const t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : $e.workingColorSpace;
}
var Vh = {
  clone: pi,
  merge: Rt
}, Gh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Hh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, en = class extends Fn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gh, this.fragmentShader = Hh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      multiDraw: !1
    }, this.defaultAttributeValues = {
      color: [
        1,
        1,
        1
      ],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = pi(e.uniforms), this.uniformsGroups = zh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = { value: r };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
  fromJSON(e, t) {
    if (super.fromJSON(e, t), e.uniforms !== void 0) for (const n in e.uniforms) {
      const i = e.uniforms[n];
      switch (this.uniforms[n] = {}, i.type) {
        case "t":
          this.uniforms[n].value = t[i.value] || null;
          break;
        case "c":
          this.uniforms[n].value = new Xe().setHex(i.value);
          break;
        case "v2":
          this.uniforms[n].value = new de().fromArray(i.value);
          break;
        case "v3":
          this.uniforms[n].value = new I().fromArray(i.value);
          break;
        case "v4":
          this.uniforms[n].value = new gt().fromArray(i.value);
          break;
        case "m3":
          this.uniforms[n].value = new ke().fromArray(i.value);
          break;
        case "m4":
          this.uniforms[n].value = new ht().fromArray(i.value);
          break;
        default:
          this.uniforms[n].value = i.value;
      }
    }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (const n in e.extensions) this.extensions[n] = e.extensions[n];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}, kh = class extends en {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}, St = class extends Fn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Xe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, Rn = class extends St {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new de(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return qe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Xe(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Xe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Xe(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._retroreflectivity = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get retroreflectivity() {
    return this._retroreflectivity;
  }
  set retroreflectivity(e) {
    this._retroreflectivity > 0 != e > 0 && this.version++, this._retroreflectivity = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.retroreflectivity = e.retroreflectivity, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}, Wh = class extends Fn {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pn(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, Xh = class extends Fn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = hc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, qh = class extends Fn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
function $n(e, t) {
  return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function ss(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var ki = class {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let s;
        t: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            s = t.length;
            break t;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let o = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === o) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
            }
            s = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < s; ) {
          const a = n + s >>> 1;
          e < t[a] ? s = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let s = 0; s !== i; ++s) t[s] = n[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  intervalChanged_() {
  }
}, Yh = class extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: qs,
      endingEnd: qs
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, a = i[r], o = i[s];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Ys:
        r = e, a = 2 * t - n;
        break;
      case Zs:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (o === void 0) switch (this.getSettings_().endingEnd) {
      case Ys:
        s = e, o = 2 * n - t;
        break;
      case Zs:
        s = 1, o = n + i[1] - i[0];
        break;
      default:
        s = e - 1, o = t;
    }
    const l = (n - t) * 0.5, c = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, h = this._weightNext, p = (n - t) / (i - t), _ = p * p, M = _ * p, g = -d * M + 2 * d * _ - d * p, f = (1 + d) * M + (-1.5 - 2 * d) * _ + (-0.5 + d) * p + 1, T = (-1 - h) * M + (1.5 + h) * _ + 0.5 * p, S = h * M - h * _;
    for (let v = 0; v !== a; ++v) r[v] = g * s[c + v] + f * s[l + v] + T * s[o + v] + S * s[u + v];
    return r;
  }
}, Zh = class extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = (n - t) / (i - t), u = 1 - c;
    for (let d = 0; d !== a; ++d) r[d] = s[l + d] * u + s[o + d] * c;
    return r;
  }
}, Kh = class extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}, Jh = class extends ki {
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this.inTangents, u = this.outTangents;
    if (!c || !u) {
      const p = (n - t) / (i - t), _ = 1 - p;
      for (let M = 0; M !== a; ++M) r[M] = s[l + M] * _ + s[o + M] * p;
      return r;
    }
    const d = a * 2, h = e - 1;
    for (let p = 0; p !== a; ++p) {
      const _ = s[l + p], M = s[o + p], g = h * d + p * 2, f = u[g], T = u[g + 1], S = e * d + p * 2, v = c[S], E = c[S + 1];
      r[p] = $o(Qh(n, t, f, v, i), _, T, E, M);
    }
    return r;
  }
};
function $o(e, t, n, i, r) {
  const s = 1 - e;
  return s * s * s * t + 3 * s * s * e * n + 3 * s * e * e * i + e * e * e * r;
}
function $h(e, t, n, i, r) {
  const s = 1 - e;
  return 3 * s * s * (n - t) + 6 * s * e * (i - n) + 3 * e * e * (r - i);
}
function Qh(e, t, n, i, r) {
  let s = (e - t) / (r - t);
  for (let a = 0; a < 8; a++) {
    const o = $o(s, t, n, i, r) - e;
    if (Math.abs(o) < 1e-10) break;
    const l = $h(s, t, n, i, r);
    if (Math.abs(l) < 1e-10) break;
    s = Math.max(0, Math.min(1, s - o / l));
  }
  return s;
}
var nn = class {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = $n(t, this.TimeBufferType), this.values = $n(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: $n(e.times, Array),
        values: $n(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i), ss(e.settings) && (n.settings = {
        inTangents: $n(e.settings.inTangents, Array),
        outTangents: $n(e.settings.outTangents, Array)
      });
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Kh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Zh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Yh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new Jh(this.times, this.values, this.getValueSize(), e);
    return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Tr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ms:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ur:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case Xs:
        t = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return Oe("KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Tr;
      case this.InterpolantFactoryMethodLinear:
        return ms;
      case this.InterpolantFactoryMethodSmooth:
        return Ur;
      case this.InterpolantFactoryMethodBezier:
        return Xs;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      ss(this.settings) && (Ea(this.settings.inTangents, e), Ea(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, s = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; s !== -1 && n[s] > t; ) --s;
    if (++s, r !== 0 || s !== i) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, s), this.values = this.values.slice(r * a, s * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (Be("KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (Be("KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let a = 0; a !== r; a++) {
      const o = n[a];
      if (typeof o == "number" && isNaN(o)) {
        Be("KeyframeTrack: Time is not a valid number.", this, a, o), e = !1;
        break;
      }
      if (s !== null && s > o) {
        Be("KeyframeTrack: Out of order keys.", this, a, o, s), e = !1;
        break;
      }
      s = o;
    }
    if (i !== void 0 && dc(i))
      for (let a = 0, o = i.length; a !== o; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          Be("KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ur, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let o = !1;
      const l = e[a];
      if (l !== e[a + 1] && (a !== 1 || l !== e[0])) if (i)
        o = !0;
      else {
        const c = a * n, u = c - n, d = c + n;
        for (let h = 0; h !== n; ++h) {
          const p = t[c + h];
          if (p !== t[u + h] || p !== t[d + h]) {
            o = !0;
            break;
          }
        }
      }
      if (o) {
        if (a !== s) {
          e[s] = e[a];
          const c = a * n, u = s * n;
          for (let d = 0; d !== n; ++d) t[u + d] = t[c + d];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let a = r * n, o = s * n, l = 0; l !== n; ++l) t[o + l] = t[a + l];
      ++s;
    }
    return s !== e.length ? (this.times = e.slice(0, s), this.values = t.slice(0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, ss(this.settings) && (i.settings = {
      inTangents: this.settings.inTangents.slice(),
      outTangents: this.settings.outTangents.slice()
    }), i;
  }
};
function Ea(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] *= t;
}
nn.prototype.ValueTypeName = "";
nn.prototype.TimeBufferType = Float32Array;
nn.prototype.ValueBufferType = Float32Array;
nn.prototype.DefaultInterpolation = ms;
var Wi = class extends nn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Wi.prototype.ValueTypeName = "bool";
Wi.prototype.ValueBufferType = Array;
Wi.prototype.DefaultInterpolation = Tr;
Wi.prototype.InterpolantFactoryMethodLinear = void 0;
Wi.prototype.InterpolantFactoryMethodSmooth = void 0;
var jh = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
jh.prototype.ValueTypeName = "color";
var eu = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
eu.prototype.ValueTypeName = "number";
var tu = class extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - t) / (i - t);
    let l = e * a;
    for (let c = l + a; l !== c; l += 4) Dn.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}, Qo = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new tu(this.times, this.values, this.getValueSize(), e);
  }
};
Qo.prototype.ValueTypeName = "quaternion";
Qo.prototype.InterpolantFactoryMethodSmooth = void 0;
var Xi = class extends nn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Xi.prototype.ValueTypeName = "string";
Xi.prototype.ValueBufferType = Array;
Xi.prototype.DefaultInterpolation = Tr;
Xi.prototype.InterpolantFactoryMethodLinear = void 0;
Xi.prototype.InterpolantFactoryMethodSmooth = void 0;
var nu = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
nu.prototype.ValueTypeName = "vector";
var iu = class {
  constructor(e, t, n) {
    const i = this;
    let r = !1, s = 0, a = 0, o;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(c) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(c, s, a), r = !0;
    }, this.itemEnd = function(c) {
      s++, i.onProgress !== void 0 && i.onProgress(c, s, a), s === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(c) {
      i.onError !== void 0 && i.onError(c);
    }, this.resolveURL = function(c) {
      return c = c.normalize("NFC"), o ? o(c) : c;
    }, this.setURLModifier = function(c) {
      return o = c, this;
    }, this.addHandler = function(c, u) {
      return l.push(c, u), this;
    }, this.removeHandler = function(c) {
      const u = l.indexOf(c);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(c) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const h = l[u], p = l[u + 1];
        if (h.global && (h.lastIndex = 0), h.test(c)) return p;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, ru = /* @__PURE__ */ new iu(), su = class {
  constructor(e) {
    this.manager = e !== void 0 ? e : ru, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  abort() {
    return this;
  }
};
su.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Ps = class extends Lt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Xe(e), this.intensity = t;
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}, au = class extends Ps {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Lt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Xe(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}, as = /* @__PURE__ */ new ht(), Ta = /* @__PURE__ */ new I(), ba = /* @__PURE__ */ new I(), jo = class {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new de(512, 512), this.mapType = Sn, this.map = null, this.mapPass = null, this.matrix = new ht(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new As(), this._frameExtents = new de(1, 1), this._viewportCount = 1, this._viewports = [new gt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    Ta.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ta), ba.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ba), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, n, i) {
    as.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(as, e.coordinateSystem, e.reversedDepth);
    const r = this._frameExtents, s = i ? i.z / r.x : 1, a = i ? i.w / r.y : 1, o = i ? i.x / r.x : 0, l = i ? i.y / r.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth ? t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(as);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}, mr = /* @__PURE__ */ new I(), gr = /* @__PURE__ */ new Dn(), Kt = /* @__PURE__ */ new I(), el = class extends Lt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ht(), this.projectionMatrix = new ht(), this.projectionMatrixInverse = new ht(), this.coordinateSystem = hi, this._reversedDepth = !1;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(mr, gr, Kt), Kt.x === 1 && Kt.y === 1 && Kt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(mr, gr, Kt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(mr, gr, Kt), Kt.x === 1 && Kt.y === 1 && Kt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(mr, gr, Kt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, _n = /* @__PURE__ */ new I(), Aa = /* @__PURE__ */ new de(), wa = /* @__PURE__ */ new de(), Vt = class extends el {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Di * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ci * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Di * 2 * Math.atan(Math.tan(Ci * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    _n.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(_n.x, _n.y).multiplyScalar(-e / _n.z), _n.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(_n.x, _n.y).multiplyScalar(-e / _n.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Aa, wa), t.subVectors(wa, Aa);
  }
  setViewOffset(e, t, n, i, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ci * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const o = s.fullWidth, l = s.fullHeight;
      r += s.offsetX * i / o, t -= s.offsetY * n / l, i *= s.width / o, n *= s.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}, ou = class extends jo {
  constructor() {
    super(new Vt(90, 1, 0.5, 500)), this.isPointLightShadow = !0;
  }
}, lu = class extends Ps {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new ou();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}, Cr = class extends el {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, s = n + e, a = i + t, o = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, s = r + l * this.view.width, a -= c * this.view.offsetY, o = a - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}, cu = class extends jo {
  constructor() {
    super(new Cr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}, os = class extends Ps {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Lt.DEFAULT_UP), this.updateMatrix(), this.target = new Lt(), this.shadow = new cu();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}, Qn = -90, jn = 1, hu = class extends Lt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Vt(Qn, jn, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Vt(Qn, jn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Vt(Qn, jn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Vt(Qn, jn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Vt(Qn, jn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Vt(Qn, jn, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, s, a, o] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, s, a, o, l, c] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), h = e.getActiveMipmapLevel(), p = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let M = !1;
    e.isWebGLRenderer === !0 ? M = e.state.buffers.depth.getReversed() : M = e.reversedDepthBuffer, e.setRenderTarget(n, 0, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, r), e.setRenderTarget(n, 1, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 3, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 4, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), M && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(u, d, h), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
  }
}, uu = class extends Vt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}, Ls = "\\[\\]\\.:\\/", fu = new RegExp("[" + Ls + "]", "g"), Is = "[^" + Ls + "]", du = "[^" + Ls.replace("\\.", "") + "]", pu = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Is), mu = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", du), gu = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Is), vu = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Is), _u = new RegExp("^" + pu + mu + gu + vu + "$"), Mu = [
  "material",
  "materials",
  "bones",
  "map"
], Su = class {
  constructor(e, t, n) {
    const i = n || dt.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}, dt = class ri {
  constructor(t, n, i) {
    this.path = n, this.parsedPath = i || ri.parseTrackName(n), this.node = ri.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, n, i) {
    return t && t.isAnimationObjectGroup ? new ri.Composite(t, n, i) : new ri(t, n, i);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(fu, "");
  }
  static parseTrackName(t) {
    const n = _u.exec(t);
    if (n === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
    const i = {
      nodeName: n[2],
      objectName: n[3],
      objectIndex: n[4],
      propertyName: n[5],
      propertyIndex: n[6]
    }, r = i.nodeName && i.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = i.nodeName.substring(r + 1);
      Mu.indexOf(s) !== -1 && (i.nodeName = i.nodeName.substring(0, r), i.objectName = s);
    }
    if (i.propertyName === null || i.propertyName.length === 0) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
    return i;
  }
  static findNode(t, n) {
    if (n === void 0 || n === "" || n === "." || n === -1 || n === t.name || n === t.uuid) return t;
    if (t.skeleton) {
      const i = t.skeleton.getBoneByName(n);
      if (i !== void 0) return i;
    }
    if (t.children) {
      const i = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === n || o.uuid === n) return o;
          const l = i(o.children);
          if (l) return l;
        }
        return null;
      }, r = i(t.children);
      if (r) return r;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t, n) {
    t[n] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) t[n++] = i[r];
  }
  _getValue_arrayElement(t, n) {
    t[n] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, n) {
    this.resolvedProperty.toArray(t, n);
  }
  _setValue_direct(t, n) {
    this.targetObject[this.propertyName] = t[n];
  }
  _setValue_direct_setNeedsUpdate(t, n) {
    this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, n) {
    this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
  }
  _setValue_array_setNeedsUpdate(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n];
  }
  _setValue_arrayElement_setNeedsUpdate(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(t, n) {
    this.resolvedProperty.fromArray(t, n);
  }
  _setValue_fromArray_setNeedsUpdate(t, n) {
    this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, n) {
    this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, n) {
    this.bind(), this.getValue(t, n);
  }
  _setValue_unbound(t, n) {
    this.bind(), this.setValue(t, n);
  }
  bind() {
    let t = this.node;
    const n = this.parsedPath, i = n.objectName, r = n.propertyName;
    let s = n.propertyIndex;
    if (t || (t = ri.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      Oe("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let c = n.objectIndex;
      switch (i) {
        case "materials":
          if (!t.material) {
            Be("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let u = 0; u < t.length; u++) if (t[u].name === c) {
            c = u;
            break;
          }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            Be("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[i] === void 0) {
            Be("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[i];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const a = t[r];
    if (a === void 0) {
      const c = n.nodeName;
      Be("PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!t.geometry) {
          Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
dt.Composite = Su;
dt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
dt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
dt.prototype.GetterByBindingType = [
  dt.prototype._getValue_direct,
  dt.prototype._getValue_array,
  dt.prototype._getValue_arrayElement,
  dt.prototype._getValue_toArray
];
dt.prototype.SetterByBindingTypeAndVersioning = [
  [
    dt.prototype._setValue_direct,
    dt.prototype._setValue_direct_setNeedsUpdate,
    dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    dt.prototype._setValue_array,
    dt.prototype._setValue_array_setNeedsUpdate,
    dt.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    dt.prototype._setValue_arrayElement,
    dt.prototype._setValue_arrayElement_setNeedsUpdate,
    dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    dt.prototype._setValue_fromArray,
    dt.prototype._setValue_fromArray_setNeedsUpdate,
    dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var Xd = class tl {
  static {
    tl.prototype.isMatrix2 = !0;
  }
  constructor(t, n, i, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, n, i, r);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(t, n = 0) {
    for (let i = 0; i < 4; i++) this.elements[i] = t[i + n];
    return this;
  }
  set(t, n, i, r) {
    const s = this.elements;
    return s[0] = t, s[2] = n, s[1] = i, s[3] = r, this;
  }
};
function Ra(e, t, n, i) {
  const r = xu(i);
  switch (n) {
    case Al:
      return e * t;
    case io:
      return e * t / r.components * r.byteLength;
    case ro:
      return e * t / r.components * r.byteLength;
    case Er:
      return e * t * 2 / r.components * r.byteLength;
    case so:
      return e * t * 2 / r.components * r.byteLength;
    case wl:
      return e * t * 3 / r.components * r.byteLength;
    case Ni:
      return e * t * 4 / r.components * r.byteLength;
    case ao:
      return e * t * 4 / r.components * r.byteLength;
    case Rl:
    case Cl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Pl:
    case Ll:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Nl:
    case Dl:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case Il:
    case Ul:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case Ol:
    case Fl:
    case zl:
    case Vl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Bl:
    case Gl:
    case Hl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case kl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Wl:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Xl:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ql:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Yl:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Zl:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Kl:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Jl:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case $l:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Ql:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case jl:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ec:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case tc:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case nc:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case ic:
    case rc:
    case sc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case ac:
    case oc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case lc:
    case cc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function xu(e) {
  switch (e) {
    case Sn:
    case xl:
      return {
        byteLength: 1,
        components: 1
      };
    case Qa:
    case yl:
    case xn:
      return {
        byteLength: 2,
        components: 1
      };
    case ja:
    case eo:
      return {
        byteLength: 2,
        components: 4
      };
    case Cn:
    case El:
    case Vi:
      return {
        byteLength: 4,
        components: 1
      };
    case Tl:
    case bl:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } }));
typeof window < "u" && (window.__THREE__ ? Oe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
function nl() {
  let e = null, t = !1, n = null, i = null;
  function r(s, a) {
    i = e.requestAnimationFrame(r), n(s, a);
  }
  return {
    start: function() {
      t !== !0 && n !== null && e !== null && (i = e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      e !== null && e.cancelAnimationFrame(i), t = !1;
    },
    setAnimationLoop: function(s) {
      n = s;
    },
    setContext: function(s) {
      e = s;
    }
  };
}
function yu(e) {
  const t = /* @__PURE__ */ new WeakMap();
  function n(o, l) {
    const c = o.array, u = o.usage, d = c.byteLength, h = e.createBuffer();
    e.bindBuffer(l, h), e.bufferData(l, c, u), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = e.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) p = e.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? p = e.HALF_FLOAT : p = e.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = e.SHORT;
    else if (c instanceof Uint32Array) p = e.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = e.INT;
    else if (c instanceof Int8Array) p = e.BYTE;
    else if (c instanceof Uint8Array) p = e.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = e.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: h,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function i(o, l, c) {
    const u = l.array, d = l.updateRanges;
    if (e.bindBuffer(c, o), d.length === 0) e.bufferSubData(c, 0, u);
    else {
      d.sort((p, _) => p.start - _.start);
      let h = 0;
      for (let p = 1; p < d.length; p++) {
        const _ = d[h], M = d[p];
        M.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, M.start + M.count - _.start) : (++h, d[h] = M);
      }
      d.length = h + 1;
      for (let p = 0, _ = d.length; p < _; p++) {
        const M = d[p];
        e.bufferSubData(c, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (e.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, n(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var We = {
  alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
  envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  lightprobes_pars_fragment: `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
}, pe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ke() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ke() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new ke() },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 },
    dfgLUT: { value: null }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new ke() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new ke() },
    normalScale: { value: /* @__PURE__ */ new de(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new ke() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new ke() }
  },
  gradientmap: { gradientMap: { value: null } },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Xe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    sunLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    sunLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    sunShadowMatrix: { value: [] },
    sunShadowCascade: { value: [] },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMatrix: { value: [] },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMatrix: { value: [] },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new I() },
    probesMax: { value: /* @__PURE__ */ new I() },
    probesResolution: { value: /* @__PURE__ */ new I() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ke() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ke() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new de(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ke() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ke() },
    alphaTest: { value: 0 }
  }
}, Qt = {
  basic: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.fog
    ]),
    vertexShader: We.meshbasic_vert,
    fragmentShader: We.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: We.meshlambert_vert,
    fragmentShader: We.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        specular: { value: /* @__PURE__ */ new Xe(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: We.meshphong_vert,
    fragmentShader: We.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.roughnessmap,
      pe.metalnessmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: We.meshphysical_vert,
    fragmentShader: We.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.gradientmap,
      pe.fog,
      pe.lights,
      { emissive: { value: /* @__PURE__ */ new Xe(0) } }
    ]),
    vertexShader: We.meshtoon_vert,
    fragmentShader: We.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      { matcap: { value: null } }
    ]),
    vertexShader: We.meshmatcap_vert,
    fragmentShader: We.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Rt([pe.points, pe.fog]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: We.linedashed_vert,
    fragmentShader: We.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Rt([pe.common, pe.displacementmap]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      { opacity: { value: 1 } }
    ]),
    vertexShader: We.meshnormal_vert,
    fragmentShader: We.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Rt([pe.sprite, pe.fog]),
    vertexShader: We.sprite_vert,
    fragmentShader: We.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ke() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.background_vert,
    fragmentShader: We.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new ke() }
    },
    vertexShader: We.backgroundCube_vert,
    fragmentShader: We.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: We.cube_vert,
    fragmentShader: We.cube_frag
  },
  equirect: {
    uniforms: { tEquirect: { value: null } },
    vertexShader: We.equirect_vert,
    fragmentShader: We.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Rt([
      pe.common,
      pe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distance_vert,
    fragmentShader: We.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Rt([
      pe.lights,
      pe.fog,
      {
        color: { value: /* @__PURE__ */ new Xe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.shadow_vert,
    fragmentShader: We.shadow_frag
  }
};
Qt.physical = {
  uniforms: /* @__PURE__ */ Rt([Qt.standard.uniforms, {
    clearcoat: { value: 0 },
    clearcoatMap: { value: null },
    clearcoatMapTransform: { value: /* @__PURE__ */ new ke() },
    clearcoatNormalMap: { value: null },
    clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ke() },
    clearcoatNormalScale: { value: /* @__PURE__ */ new de(1, 1) },
    clearcoatRoughness: { value: 0 },
    clearcoatRoughnessMap: { value: null },
    clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new ke() },
    dispersion: { value: 0 },
    retroreflectivity: { value: 0 },
    iridescence: { value: 0 },
    iridescenceMap: { value: null },
    iridescenceMapTransform: { value: /* @__PURE__ */ new ke() },
    iridescenceIOR: { value: 1.3 },
    iridescenceThicknessMinimum: { value: 100 },
    iridescenceThicknessMaximum: { value: 400 },
    iridescenceThicknessMap: { value: null },
    iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new ke() },
    sheen: { value: 0 },
    sheenColor: { value: /* @__PURE__ */ new Xe(0) },
    sheenColorMap: { value: null },
    sheenColorMapTransform: { value: /* @__PURE__ */ new ke() },
    sheenRoughness: { value: 1 },
    sheenRoughnessMap: { value: null },
    sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ke() },
    transmission: { value: 0 },
    transmissionMap: { value: null },
    transmissionMapTransform: { value: /* @__PURE__ */ new ke() },
    transmissionSamplerSize: { value: /* @__PURE__ */ new de() },
    transmissionSamplerMap: { value: null },
    thickness: { value: 0 },
    thicknessMap: { value: null },
    thicknessMapTransform: { value: /* @__PURE__ */ new ke() },
    attenuationDistance: { value: 0 },
    attenuationColor: { value: /* @__PURE__ */ new Xe(0) },
    specularColor: { value: /* @__PURE__ */ new Xe(1, 1, 1) },
    specularColorMap: { value: null },
    specularColorMapTransform: { value: /* @__PURE__ */ new ke() },
    specularIntensity: { value: 1 },
    specularIntensityMap: { value: null },
    specularIntensityMapTransform: { value: /* @__PURE__ */ new ke() },
    anisotropyVector: { value: /* @__PURE__ */ new de() },
    anisotropyMap: { value: null },
    anisotropyMapTransform: { value: /* @__PURE__ */ new ke() }
  }]),
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag
};
var vr = {
  r: 0,
  b: 0,
  g: 0
}, Eu = /* @__PURE__ */ new ht(), il = /* @__PURE__ */ new ke();
il.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Tu(e, t, n, i, r, s) {
  const a = new Xe(0);
  let o = r === !0 ? 0 : 1, l, c, u = null, d = 0, h = null;
  function p(T) {
    let S = T.isScene === !0 ? T.background : null;
    if (S && S.isTexture) {
      const v = T.backgroundBlurriness > 0;
      S = t.get(S, v);
    }
    return S;
  }
  function _(T) {
    let S = !1;
    const v = p(T);
    v === null ? g(a, o) : v && v.isColor && (g(v, 1), S = !0);
    const E = e.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function M(T, S) {
    const v = p(S);
    v && (v.isCubeTexture || v.mapping === 306) ? (c === void 0 && (c = new ut(new Hi(1, 1, 1), new en({
      name: "BackgroundCubeMaterial",
      uniforms: pi(Qt.backgroundCube.uniforms),
      vertexShader: Qt.backgroundCube.vertexShader,
      fragmentShader: Qt.backgroundCube.fragmentShader,
      side: 1,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(E, R, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(c)), c.material.uniforms.envMap.value = v, c.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eu.makeRotationFromEuler(S.backgroundRotation)).transpose(), v.isCubeTexture && v.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(il), c.material.toneMapped = $e.getTransfer(v.colorSpace) !== Ar, (u !== v || d !== v.version || h !== e.toneMapping) && (c.material.needsUpdate = !0, u = v, d = v.version, h = e.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new ut(new In(2, 2), new en({
      name: "BackgroundMaterial",
      uniforms: pi(Qt.background.uniforms),
      vertexShader: Qt.background.vertexShader,
      fragmentShader: Qt.background.fragmentShader,
      side: 0,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = $e.getTransfer(v.colorSpace) !== Ar, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || h !== e.toneMapping) && (l.material.needsUpdate = !0, u = v, d = v.version, h = e.toneMapping), l.layers.enableAll(), T.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(T, S) {
    T.getRGB(vr, Jo(e)), n.buffers.color.setClear(vr.r, vr.g, vr.b, S, s);
  }
  function f() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(T, S = 1) {
      a.set(T), o = S, g(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(T) {
      o = T, g(a, o);
    },
    render: _,
    addToRenderList: M,
    dispose: f
  };
}
function bu(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS), i = {}, r = h(null);
  let s = r, a = !1;
  function o(P, O, Y, N, C) {
    let k = !1;
    const F = d(P, N, Y, O);
    s !== F && (s = F, c(s.object)), k = p(P, N, Y, C), k && _(P, N, Y, C), C !== null && t.update(C, e.ELEMENT_ARRAY_BUFFER), (k || a) && (a = !1, v(P, O, Y, N), C !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(C).buffer));
  }
  function l() {
    return e.createVertexArray();
  }
  function c(P) {
    return e.bindVertexArray(P);
  }
  function u(P) {
    return e.deleteVertexArray(P);
  }
  function d(P, O, Y, N) {
    const C = N.wireframe === !0;
    let k = i[O.id];
    k === void 0 && (k = {}, i[O.id] = k);
    const F = P.isInstancedMesh === !0 ? P.id : 0;
    let ee = k[F];
    ee === void 0 && (ee = {}, k[F] = ee);
    let X = ee[Y.id];
    X === void 0 && (X = {}, ee[Y.id] = X);
    let Z = X[C];
    return Z === void 0 && (Z = h(l()), X[C] = Z), Z;
  }
  function h(P) {
    const O = [], Y = [], N = [];
    for (let C = 0; C < n; C++)
      O[C] = 0, Y[C] = 0, N[C] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: Y,
      attributeDivisors: N,
      object: P,
      attributes: {},
      index: null
    };
  }
  function p(P, O, Y, N) {
    const C = s.attributes, k = O.attributes;
    let F = 0;
    const ee = Y.getAttributes();
    for (const X in ee) if (ee[X].location >= 0) {
      const Z = C[X];
      let J = k[X];
      if (J === void 0 && (X === "instanceMatrix" && P.instanceMatrix && (J = P.instanceMatrix), X === "instanceColor" && P.instanceColor && (J = P.instanceColor)), Z === void 0 || Z.attribute !== J || J && Z.data !== J.data) return !0;
      F++;
    }
    return s.attributesNum !== F || s.index !== N;
  }
  function _(P, O, Y, N) {
    const C = {}, k = O.attributes;
    let F = 0;
    const ee = Y.getAttributes();
    for (const X in ee) if (ee[X].location >= 0) {
      let Z = k[X];
      Z === void 0 && (X === "instanceMatrix" && P.instanceMatrix && (Z = P.instanceMatrix), X === "instanceColor" && P.instanceColor && (Z = P.instanceColor));
      const J = {};
      J.attribute = Z, Z && Z.data && (J.data = Z.data), C[X] = J, F++;
    }
    s.attributes = C, s.attributesNum = F, s.index = N;
  }
  function M() {
    const P = s.newAttributes;
    for (let O = 0, Y = P.length; O < Y; O++) P[O] = 0;
  }
  function g(P) {
    f(P, 0);
  }
  function f(P, O) {
    const Y = s.newAttributes, N = s.enabledAttributes, C = s.attributeDivisors;
    Y[P] = 1, N[P] === 0 && (e.enableVertexAttribArray(P), N[P] = 1), C[P] !== O && (e.vertexAttribDivisor(P, O), C[P] = O);
  }
  function T() {
    const P = s.newAttributes, O = s.enabledAttributes;
    for (let Y = 0, N = O.length; Y < N; Y++) O[Y] !== P[Y] && (e.disableVertexAttribArray(Y), O[Y] = 0);
  }
  function S(P, O, Y, N, C, k, F) {
    F === !0 ? e.vertexAttribIPointer(P, O, Y, C, k) : e.vertexAttribPointer(P, O, Y, N, C, k);
  }
  function v(P, O, Y, N) {
    M();
    const C = N.attributes, k = Y.getAttributes(), F = O.defaultAttributeValues;
    for (const ee in k) {
      const X = k[ee];
      if (X.location >= 0) {
        let Z = C[ee];
        if (Z === void 0 && (ee === "instanceMatrix" && P.instanceMatrix && (Z = P.instanceMatrix), ee === "instanceColor" && P.instanceColor && (Z = P.instanceColor)), Z !== void 0) {
          const J = Z.normalized, Le = Z.itemSize, we = t.get(Z);
          if (we === void 0) continue;
          const rt = we.buffer, Ge = we.type, K = we.bytesPerElement, re = Ge === e.INT || Ge === e.UNSIGNED_INT || Z.gpuType === 1013;
          if (Z.isInterleavedBufferAttribute) {
            const ae = Z.data, Ce = ae.stride, Ue = Z.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let ue = 0; ue < X.locationSize; ue++) f(X.location + ue, ae.meshPerAttribute);
              P.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let ue = 0; ue < X.locationSize; ue++) g(X.location + ue);
            e.bindBuffer(e.ARRAY_BUFFER, rt);
            for (let ue = 0; ue < X.locationSize; ue++) S(X.location + ue, Le / X.locationSize, Ge, J, Ce * K, (Ue + Le / X.locationSize * ue) * K, re);
          } else {
            if (Z.isInstancedBufferAttribute) {
              for (let ae = 0; ae < X.locationSize; ae++) f(X.location + ae, Z.meshPerAttribute);
              P.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else for (let ae = 0; ae < X.locationSize; ae++) g(X.location + ae);
            e.bindBuffer(e.ARRAY_BUFFER, rt);
            for (let ae = 0; ae < X.locationSize; ae++) S(X.location + ae, Le / X.locationSize, Ge, J, Le * K, Le / X.locationSize * ae * K, re);
          }
        } else if (F !== void 0) {
          const J = F[ee];
          if (J !== void 0) switch (J.length) {
            case 2:
              e.vertexAttrib2fv(X.location, J);
              break;
            case 3:
              e.vertexAttrib3fv(X.location, J);
              break;
            case 4:
              e.vertexAttrib4fv(X.location, J);
              break;
            default:
              e.vertexAttrib1fv(X.location, J);
          }
        }
      }
    }
    T();
  }
  function E() {
    b();
    for (const P in i) {
      const O = i[P];
      for (const Y in O) {
        const N = O[Y];
        for (const C in N) {
          const k = N[C];
          for (const F in k)
            u(k[F].object), delete k[F];
          delete N[C];
        }
      }
      delete i[P];
    }
  }
  function R(P) {
    if (i[P.id] === void 0) return;
    const O = i[P.id];
    for (const Y in O) {
      const N = O[Y];
      for (const C in N) {
        const k = N[C];
        for (const F in k)
          u(k[F].object), delete k[F];
        delete N[C];
      }
    }
    delete i[P.id];
  }
  function w(P) {
    for (const O in i) {
      const Y = i[O];
      for (const N in Y) {
        const C = Y[N];
        if (C[P.id] === void 0) continue;
        const k = C[P.id];
        for (const F in k)
          u(k[F].object), delete k[F];
        delete C[P.id];
      }
    }
  }
  function m(P) {
    for (const O in i) {
      const Y = i[O], N = P.isInstancedMesh === !0 ? P.id : 0, C = Y[N];
      if (C !== void 0) {
        for (const k in C) {
          const F = C[k];
          for (const ee in F)
            u(F[ee].object), delete F[ee];
          delete C[k];
        }
        delete Y[N], Object.keys(Y).length === 0 && delete i[O];
      }
    }
  }
  function b() {
    V(), a = !0, s !== r && (s = r, c(s.object));
  }
  function V() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: b,
    resetDefaultState: V,
    dispose: E,
    releaseStatesOfGeometry: R,
    releaseStatesOfObject: m,
    releaseStatesOfProgram: w,
    initAttributes: M,
    enableAttribute: g,
    disableUnusedAttributes: T
  };
}
function Au(e, t, n) {
  let i;
  function r(l) {
    i = l;
  }
  function s(l, c) {
    e.drawArrays(i, l, c), n.update(c, i, 1);
  }
  function a(l, c, u) {
    u !== 0 && (e.drawArraysInstanced(i, l, c, u), n.update(c, i, u));
  }
  function o(l, c, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, c, 0, u);
    let d = 0;
    for (let h = 0; h < u; h++) d += c[h];
    n.update(d, i, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function wu(e, t, n, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const w = t.get("EXT_texture_filter_anisotropic");
      r = e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(w) {
    return !(w !== 1023 && i.convert(w) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const m = w === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== 1009 && w !== 1015 && !m && i.convert(w) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function l(w) {
    if (w === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = n.precision !== void 0 ? n.precision : "highp";
  const u = l(c);
  u !== c && (Oe("WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const d = n.logarithmicDepthBuffer === !0, h = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
  n.reversedDepthBuffer === !0 && h === !1 && Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), f = e.getParameter(e.MAX_VERTEX_ATTRIBS), T = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), S = e.getParameter(e.MAX_VARYING_VECTORS), v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), E = e.getParameter(e.MAX_SAMPLES), R = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: h,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: M,
    maxCubemapSize: g,
    maxAttributes: f,
    maxVertexUniforms: T,
    maxVaryings: S,
    maxFragmentUniforms: v,
    maxSamples: E,
    samples: R
  };
}
function Ru(e) {
  const t = this;
  let n = null, i = 0, r = !1, s = !1;
  const a = new Mn(), o = new ke(), l = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, h) {
    const p = d.length !== 0 || h || i !== 0 || r;
    return r = h, i = d.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, h) {
    n = u(d, h, 0);
  }, this.setState = function(d, h, p) {
    const _ = d.clippingPlanes, M = d.clipIntersection, g = d.clipShadows, f = e.get(d);
    if (!r || _ === null || _.length === 0 || s && !g) s ? u(null) : c();
    else {
      const T = s ? 0 : i, S = T * 4;
      let v = f.clippingState || null;
      l.value = v, v = u(_, h, S, p);
      for (let E = 0; E !== S; ++E) v[E] = n[E];
      f.clippingState = v, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function u(d, h, p, _) {
    const M = d !== null ? d.length : 0;
    let g = null;
    if (M !== 0) {
      if (g = l.value, _ !== !0 || g === null) {
        const f = p + M * 4, T = h.matrixWorldInverse;
        o.getNormalMatrix(T), (g === null || g.length < f) && (g = new Float32Array(f));
        for (let S = 0, v = p; S !== M; ++S, v += 4)
          a.copy(d[S]).applyMatrix4(T, o), a.normal.toArray(g, v), g[v + 3] = a.constant;
      }
      l.value = g, l.needsUpdate = !0;
    }
    return t.numPlanes = M, t.numIntersection = 0, g;
  }
}
var ai = 4, Cu = 6, Pu = 20, Lu = 256, Ti = /* @__PURE__ */ new Cr(), Ca = /* @__PURE__ */ new Xe(), ls = null, cs = 0, hs = 0, us = !1, Iu = /* @__PURE__ */ new I(), wn = /* @__PURE__ */ new I(), Ss = class {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: s = 256, position: a = Iu } = r;
    ls = this._renderer.getRenderTarget(), cs = this._renderer.getActiveCubeFace(), hs = this._renderer.getActiveMipmapLevel(), us = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
    const o = this._allocateTargets();
    return o.depthBuffer = !0, this._sceneToCubeUV(e, n, i, o, a), t > 0 && this._blur(o, 0, 0, t), this._applyPMREM(o), this._cleanup(o), o;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ia(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = La(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ls, cs, hs), this._renderer.xr.enabled = us, e.scissorTest = !1, ei(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ls = this._renderer.getRenderTarget(), cs = this._renderer.getActiveCubeFace(), hs = this._renderer.getActiveMipmapLevel(), us = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ot,
      minFilter: Ot,
      generateMipmaps: !1,
      type: xn,
      format: Ni,
      colorSpace: gs,
      depthBuffer: !1
    }, i = Pa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pa(e, t, n);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = Nu(r)), this._blurMaterial = Du(r, e, t), this._ggxMaterial = Uu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ut(new It(), e);
    this._renderer.compile(t, Ti);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const s = new Vt(90, 1, t, n), a = [
      1,
      -1,
      1,
      1,
      1,
      1
    ], o = [
      1,
      1,
      1,
      -1,
      -1,
      -1
    ], l = this._renderer, c = l.autoClear, u = l.toneMapping;
    l.getClearColor(Ca), l.toneMapping = 0, l.autoClear = !1, l.state.buffers.depth.getReversed() && (l.setRenderTarget(i), l.clearDepth(), l.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new ut(new Hi(), new fi({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    })));
    const d = this._backgroundBox, h = d.material;
    let p = !1;
    const _ = e.background;
    _ ? _.isColor && (h.color.copy(_), e.background = null, p = !0) : (h.color.copy(Ca), p = !0);
    for (let M = 0; M < 6; M++) {
      const g = M % 3;
      g === 0 ? (s.up.set(0, a[M], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x + o[M], r.y, r.z)) : g === 1 ? (s.up.set(0, 0, a[M]), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y + o[M], r.z)) : (s.up.set(0, a[M], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y, r.z + o[M]));
      const f = this._cubeSize;
      ei(i, g * f, M > 2 ? f : 0, f, f), l.setRenderTarget(i), p && l.render(d, s), l.render(e, s);
    }
    l.toneMapping = u, l.autoClear = c, e.background = _;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ia()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = La());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, s = this._lodMeshes[0];
    s.material = r;
    const a = r.uniforms;
    a.envMap.value = e;
    const o = this._cubeSize;
    ei(t, 0, 0, 3 * o, 2 * o), n.setRenderTarget(t), n.render(s, Ti);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodMeshes.length;
    for (let r = 1; r < i; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const i = this._renderer, r = this._pingPongRenderTarget, s = this._ggxMaterial, a = this._lodMeshes[n];
    a.material = s;
    const o = s.uniforms, l = n / (this._lodMeshes.length - 1), c = t / (this._lodMeshes.length - 1), u = Math.sqrt(l * l - c * c) * (l * 1.25), { _lodMax: d } = this, h = this._sizeLods[n], p = 3 * h * (n > d - ai ? n - d + ai : 0), _ = 4 * (this._cubeSize - h);
    o.envMap.value = e.texture, o.roughness.value = u, o.mipInt.value = d - t, ei(r, p, _, 3 * h, 2 * h), i.setRenderTarget(r), i.render(a, Ti), o.envMap.value = r.texture, o.roughness.value = 0, o.mipInt.value = d - n, ei(e, p, _, 3 * h, 2 * h), i.setRenderTarget(e), i.render(a, Ti);
  }
  _blur(e, t, n, i) {
    const r = this._pingPongRenderTarget, s = Math.min(i, Math.PI) / Math.SQRT2;
    this._blurPass(e, r, t, n, s), this._blurPass(r, e, n, n, s);
  }
  _blurPass(e, t, n, i, r) {
    const s = this._renderer, a = this._blurMaterial, o = this._lodMeshes[i];
    o.material = a;
    const l = a.uniforms;
    l.envMap.value = e.texture, l.sigma.value = r, l.mipInt.value = this._lodMax - n;
    const c = this._sizeLods[i];
    ei(t, 3 * c * (i > this._lodMax - ai ? i - this._lodMax + ai : 0), 4 * (this._cubeSize - c), 3 * c, 2 * c), s.setRenderTarget(t), s.render(o, Ti);
  }
};
function Nu(e) {
  const t = [], n = [];
  let i = e;
  const r = e - ai + 1 + Cu;
  for (let s = 0; s < r; s++) {
    const a = Math.pow(2, i);
    t.push(a);
    const o = 1 / (a - 2), l = -o, c = 1 + o, u = [
      l,
      l,
      c,
      l,
      c,
      c,
      l,
      l,
      c,
      c,
      l,
      c
    ], d = 6, h = 6, p = 3, _ = new Float32Array(p * h * d), M = new Float32Array(p * h * d);
    for (let f = 0; f < d; f++) {
      const T = f % 3 * 2 / 3 - 1, S = f > 2 ? 0 : -1, v = [
        T,
        S,
        0,
        T + 2 / 3,
        S,
        0,
        T + 2 / 3,
        S + 1,
        0,
        T,
        S,
        0,
        T + 2 / 3,
        S + 1,
        0,
        T,
        S + 1,
        0
      ];
      _.set(v, p * h * f);
      for (let E = 0; E < h; E++) {
        const R = u[E * 2] * 2 - 1, w = u[E * 2 + 1] * 2 - 1;
        f === 0 ? wn.set(1, w, R) : f === 1 ? wn.set(-R, 1, -w) : f === 2 ? wn.set(-R, w, 1) : f === 3 ? wn.set(-1, w, -R) : f === 4 ? wn.set(-R, -1, w) : wn.set(R, w, -1), wn.toArray(M, (f * h + E) * p);
      }
    }
    const g = new It();
    g.setAttribute("position", new jt(_, p)), g.setAttribute("outputDirection", new jt(M, p)), n.push(new ut(g, null)), i > ai && i--;
  }
  return {
    lodMeshes: n,
    sizeLods: t
  };
}
function Pa(e, t, n) {
  const i = new qt(e, t, n);
  return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function ei(e, t, n, i, r) {
  e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
}
function Uu(e, t, n) {
  return new en({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Lu,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Pr(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Du(e, t, n) {
  return new en({
    name: "SphericalGaussianBlur",
    defines: {
      SAMPLES: Pu,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Pr(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function La() {
  return new en({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Pr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ia() {
  return new en({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Pr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Pr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
var rl = class extends qt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = {
      width: e,
      height: e,
      depth: 1
    }, i = [
      n,
      n,
      n,
      n,
      n,
      n
    ];
    this.texture = new yo(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: { tEquirect: { value: null } },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new Hi(5, 5, 5), r = new en({
      name: "CubemapFromEquirect",
      uniforms: pi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const s = new ut(i, r), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = Ot), new hu(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
};
function Ou(e) {
  let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = null;
  function r(h, p = !1) {
    return h == null ? null : p ? a(h) : s(h);
  }
  function s(h) {
    if (h && h.isTexture) {
      const p = h.mapping;
      if (p === 303 || p === 304) if (t.has(h)) {
        const _ = t.get(h).texture;
        return o(_, h.mapping);
      } else {
        const _ = h.image;
        if (_ && _.height > 0) {
          const M = new rl(_.height);
          return M.fromEquirectangularTexture(e, h), t.set(h, M), h.addEventListener("dispose", c), o(M.texture, h.mapping);
        } else return null;
      }
    }
    return h;
  }
  function a(h) {
    if (h && h.isTexture) {
      const p = h.mapping, _ = p === 303 || p === 304, M = p === 301 || p === 302;
      if (_ || M) {
        let g = n.get(h);
        const f = g !== void 0 ? g.texture.pmremVersion : 0;
        if (h.isRenderTargetTexture && h.pmremVersion !== f)
          return i === null && (i = new Ss(e)), g = _ ? i.fromEquirectangular(h, g) : i.fromCubemap(h, g), g.texture.pmremVersion = h.pmremVersion, n.set(h, g), g.texture;
        if (g !== void 0) return g.texture;
        {
          const T = h.image;
          return _ && T && T.height > 0 || M && T && l(T) ? (i === null && (i = new Ss(e)), g = _ ? i.fromEquirectangular(h) : i.fromCubemap(h), g.texture.pmremVersion = h.pmremVersion, n.set(h, g), h.addEventListener("dispose", u), g.texture) : null;
        }
      }
    }
    return h;
  }
  function o(h, p) {
    return p === 303 ? h.mapping = 301 : p === 304 && (h.mapping = 302), h;
  }
  function l(h) {
    let p = 0;
    const _ = 6;
    for (let M = 0; M < _; M++) h[M] !== void 0 && p++;
    return p === _;
  }
  function c(h) {
    const p = h.target;
    p.removeEventListener("dispose", c);
    const _ = t.get(p);
    _ !== void 0 && (t.delete(p), _.dispose());
  }
  function u(h) {
    const p = h.target;
    p.removeEventListener("dispose", u);
    const _ = n.get(p);
    _ !== void 0 && (n.delete(p), _.dispose());
  }
  function d() {
    t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return {
    get: r,
    dispose: d
  };
}
function Fu(e) {
  const t = {};
  function n(i) {
    if (t[i] !== void 0) return t[i];
    const r = e.getExtension(i);
    return t[i] = r, r;
  }
  return {
    has: function(i) {
      return n(i) !== null;
    },
    init: function() {
      n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
    },
    get: function(i) {
      const r = n(i);
      return r === null && oi("WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function Bu(e, t, n, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const h = d.target;
    h.index !== null && t.remove(h.index);
    for (const _ in h.attributes) t.remove(h.attributes[_]);
    h.removeEventListener("dispose", a), delete r[h.id];
    const p = s.get(h);
    p && (t.remove(p), s.delete(h)), i.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, n.memory.geometries--;
  }
  function o(d, h) {
    return r[h.id] === !0 || (h.addEventListener("dispose", a), r[h.id] = !0, n.memory.geometries++), h;
  }
  function l(d) {
    const h = d.attributes;
    for (const p in h) t.update(h[p], e.ARRAY_BUFFER);
  }
  function c(d) {
    const h = [], p = d.index, _ = d.attributes.position;
    let M = 0;
    if (_ === void 0) return;
    if (p !== null) {
      const T = p.array;
      M = p.version;
      for (let S = 0, v = T.length; S < v; S += 3) {
        const E = T[S + 0], R = T[S + 1], w = T[S + 2];
        h.push(E, R, R, w, w, E);
      }
    } else {
      const T = _.array;
      M = _.version;
      for (let S = 0, v = T.length / 3 - 1; S < v; S += 3) {
        const E = S + 0, R = S + 1, w = S + 2;
        h.push(E, R, R, w, w, E);
      }
    }
    const g = new (_.count >= 65535 ? Mo : _o)(h, 1);
    g.version = M;
    const f = s.get(d);
    f && t.remove(f), s.set(d, g);
  }
  function u(d) {
    const h = s.get(d);
    if (h) {
      const p = d.index;
      p !== null && h.version < p.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function zu(e, t, n) {
  let i;
  function r(d) {
    i = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, h) {
    e.drawElements(i, h, s, d * a), n.update(h, i, 1);
  }
  function c(d, h, p) {
    p !== 0 && (e.drawElementsInstanced(i, h, s, d * a, p), n.update(h, i, p));
  }
  function u(d, h, p) {
    if (p === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, h, 0, s, d, 0, p);
    let _ = 0;
    for (let M = 0; M < p; M++) _ += h[M];
    n.update(_, i, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u;
}
function Vu(e) {
  const t = {
    geometries: 0,
    textures: 0
  }, n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (n.calls++, a) {
      case e.TRIANGLES:
        n.triangles += o * (s / 3);
        break;
      case e.LINES:
        n.lines += o * (s / 2);
        break;
      case e.LINE_STRIP:
        n.lines += o * (s - 1);
        break;
      case e.LINE_LOOP:
        n.lines += o * s;
        break;
      case e.POINTS:
        n.points += o * s;
        break;
      default:
        Be("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function Gu(e, t, n) {
  const i = /* @__PURE__ */ new WeakMap(), r = new gt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let h = i.get(o);
    if (h === void 0 || h.count !== d) {
      let V = function() {
        m.dispose(), i.delete(o), o.removeEventListener("dispose", V);
      };
      var p = V;
      h !== void 0 && h.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, M = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], T = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
      let v = 0;
      _ === !0 && (v = 1), M === !0 && (v = 2), g === !0 && (v = 3);
      let E = o.attributes.position.count * v, R = 1;
      E > t.maxTextureSize && (R = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const w = new Float32Array(E * R * 4 * d), m = new fo(w, E, R, d);
      m.type = Vi, m.needsUpdate = !0;
      const b = v * 4;
      for (let P = 0; P < d; P++) {
        const O = f[P], Y = T[P], N = S[P], C = E * R * 4 * P;
        for (let k = 0; k < O.count; k++) {
          const F = k * b;
          _ === !0 && (r.fromBufferAttribute(O, k), w[C + F + 0] = r.x, w[C + F + 1] = r.y, w[C + F + 2] = r.z, w[C + F + 3] = 0), M === !0 && (r.fromBufferAttribute(Y, k), w[C + F + 4] = r.x, w[C + F + 5] = r.y, w[C + F + 6] = r.z, w[C + F + 7] = 0), g === !0 && (r.fromBufferAttribute(N, k), w[C + F + 8] = r.x, w[C + F + 9] = r.y, w[C + F + 10] = r.z, w[C + F + 11] = N.itemSize === 4 ? r.w : 1);
        }
      }
      h = {
        count: d,
        texture: m,
        size: new de(E, R)
      }, i.set(o, h), o.addEventListener("dispose", V);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
    else {
      let _ = 0;
      for (let g = 0; g < c.length; g++) _ += c[g];
      const M = o.morphTargetsRelative ? 1 : 1 - _;
      l.getUniforms().setValue(e, "morphTargetBaseInfluence", M), l.getUniforms().setValue(e, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(e, "morphTargetsTexture", h.texture, n), l.getUniforms().setValue(e, "morphTargetsTextureSize", h.size);
  }
  return { update: s };
}
function Hu(e, t, n, i, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const u = r.render.frame, d = c.geometry, h = t.get(c, d);
    if (s.get(h) !== u && (t.update(h), s.set(h, u)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== u && (n.update(c.instanceMatrix, e.ARRAY_BUFFER), c.instanceColor !== null && n.update(c.instanceColor, e.ARRAY_BUFFER), s.set(c, u))), c.isSkinnedMesh) {
      const p = c.skeleton;
      s.get(p) !== u && (p.update(), s.set(p, u));
    }
    return h;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const u = c.target;
    u.removeEventListener("dispose", l), i.releaseStatesOfObject(u), n.remove(u.instanceMatrix), u.instanceColor !== null && n.remove(u.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
var ku = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Wu(e, t, n, i, r, s) {
  const a = new qt(t, n, {
    type: e,
    depthBuffer: r,
    stencilBuffer: s,
    samples: i ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1
  });
  let o = null, l = null;
  const c = new It();
  c.setAttribute("position", new it([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
  ], 3)), c.setAttribute("uv", new it([
    0,
    2,
    0,
    0,
    2,
    0
  ], 2));
  const u = new kh({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
    depthTest: !1,
    depthWrite: !1
  }), d = new ut(c, u), h = new Cr(-1, 1, 1, -1, 0, 1);
  let p = null, _ = null, M = !1, g, f = null, T = [], S = !1;
  this.setSize = function(v, E) {
    a.setSize(v, E), o !== null && o.setSize(v, E), l !== null && l.setSize(v, E);
    for (let R = 0; R < T.length; R++) {
      const w = T[R];
      w.setSize && w.setSize(v, E);
    }
  }, this.setEffects = function(v) {
    T = v, S = T.length > 0 && T[0].isRenderPass === !0;
    const E = a.width, R = a.height;
    T.length > 0 && o === null && (o = new qt(E, R, {
      type: xn,
      depthBuffer: !1,
      stencilBuffer: !1
    }), l = new qt(E, R, {
      type: xn,
      depthBuffer: !1,
      stencilBuffer: !1
    }));
    for (let w = 0; w < T.length; w++) {
      const m = T[w];
      m.setSize && m.setSize(E, R);
    }
  }, this.begin = function(v, E) {
    if (M || v.toneMapping === 0 && T.length === 0) return !1;
    if (f = E, E !== null) {
      const R = E.width, w = E.height;
      (a.width !== R || a.height !== w) && this.setSize(R, w);
    }
    return S === !1 && v.setRenderTarget(a), g = v.toneMapping, v.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return S;
  }, this.end = function(v, E) {
    v.toneMapping = g, M = !0;
    let R = a, w = o;
    for (let m = 0; m < T.length; m++) {
      const b = T[m];
      b.enabled !== !1 && (b.render(v, w, R, E), b.needsSwap !== !1 && (R = w, w = w === o ? l : o));
    }
    if (p !== v.outputColorSpace || _ !== v.toneMapping) {
      p = v.outputColorSpace, _ = v.toneMapping, u.defines = {}, $e.getTransfer(p) === "srgb" && (u.defines.SRGB_TRANSFER = "");
      const m = ku[_];
      m && (u.defines[m] = ""), u.needsUpdate = !0;
    }
    u.uniforms.tDiffuse.value = R.texture, v.setRenderTarget(f), v.render(d, h), f = null, M = !1;
  }, this.isCompositing = function() {
    return M;
  }, this.dispose = function() {
    a.dispose(), o !== null && o.dispose(), l !== null && l.dispose(), c.dispose(), u.dispose();
  };
}
var sl = /* @__PURE__ */ new Gt(), xs = /* @__PURE__ */ new Oi(1, 1), al = /* @__PURE__ */ new fo(), ol = /* @__PURE__ */ new zc(), ll = /* @__PURE__ */ new yo(), Na = [], Ua = [], Da = new Float32Array(16), Oa = new Float32Array(9), Fa = new Float32Array(4);
function mi(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) return e;
  const r = t * n;
  let s = Na[r];
  if (s === void 0 && (s = new Float32Array(r), Na[r] = s), t !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += n, e[a].toArray(s, o);
  }
  return s;
}
function xt(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function yt(e, t) {
  for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
}
function Lr(e, t) {
  let n = Ua[t];
  n === void 0 && (n = new Int32Array(t), Ua[t] = n);
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function Xu(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function qu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2fv(this.addr, t), yt(n, t);
  }
}
function Yu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (xt(n, t)) return;
    e.uniform3fv(this.addr, t), yt(n, t);
  }
}
function Zu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4fv(this.addr, t), yt(n, t);
  }
}
function Ku(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    Fa.set(i), e.uniformMatrix2fv(this.addr, !1, Fa), yt(n, i);
  }
}
function Ju(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    Oa.set(i), e.uniformMatrix3fv(this.addr, !1, Oa), yt(n, i);
  }
}
function $u(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    Da.set(i), e.uniformMatrix4fv(this.addr, !1, Da), yt(n, i);
  }
}
function Qu(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function ju(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2iv(this.addr, t), yt(n, t);
  }
}
function ef(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (xt(n, t)) return;
    e.uniform3iv(this.addr, t), yt(n, t);
  }
}
function tf(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4iv(this.addr, t), yt(n, t);
  }
}
function nf(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function rf(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2uiv(this.addr, t), yt(n, t);
  }
}
function sf(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (xt(n, t)) return;
    e.uniform3uiv(this.addr, t), yt(n, t);
  }
}
function af(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4uiv(this.addr, t), yt(n, t);
  }
}
function of(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_2D_SHADOW ? (xs.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, s = xs) : s = sl, n.setTexture2D(t || s, r);
}
function lf(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || ol, r);
}
function cf(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(t || ll, r);
}
function hf(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || al, r);
}
function uf(e) {
  switch (e) {
    case 5126:
      return Xu;
    case 35664:
      return qu;
    case 35665:
      return Yu;
    case 35666:
      return Zu;
    case 35674:
      return Ku;
    case 35675:
      return Ju;
    case 35676:
      return $u;
    case 5124:
    case 35670:
      return Qu;
    case 35667:
    case 35671:
      return ju;
    case 35668:
    case 35672:
      return ef;
    case 35669:
    case 35673:
      return tf;
    case 5125:
      return nf;
    case 36294:
      return rf;
    case 36295:
      return sf;
    case 36296:
      return af;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return of;
    case 35679:
    case 36299:
    case 36307:
      return lf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return cf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hf;
  }
}
function ff(e, t) {
  e.uniform1fv(this.addr, t);
}
function df(e, t) {
  const n = mi(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function pf(e, t) {
  const n = mi(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function mf(e, t) {
  const n = mi(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function gf(e, t) {
  const n = mi(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function vf(e, t) {
  const n = mi(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function _f(e, t) {
  const n = mi(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Mf(e, t) {
  e.uniform1iv(this.addr, t);
}
function Sf(e, t) {
  e.uniform2iv(this.addr, t);
}
function xf(e, t) {
  e.uniform3iv(this.addr, t);
}
function yf(e, t) {
  e.uniform4iv(this.addr, t);
}
function Ef(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Tf(e, t) {
  e.uniform2uiv(this.addr, t);
}
function bf(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Af(e, t) {
  e.uniform4uiv(this.addr, t);
}
function wf(e, t, n) {
  const i = this.cache, r = t.length, s = Lr(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  let a;
  this.type === e.SAMPLER_2D_SHADOW ? a = xs : a = sl;
  for (let o = 0; o !== r; ++o) n.setTexture2D(t[o] || a, s[o]);
}
function Rf(e, t, n) {
  const i = this.cache, r = t.length, s = Lr(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture3D(t[a] || ol, s[a]);
}
function Cf(e, t, n) {
  const i = this.cache, r = t.length, s = Lr(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTextureCube(t[a] || ll, s[a]);
}
function Pf(e, t, n) {
  const i = this.cache, r = t.length, s = Lr(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2DArray(t[a] || al, s[a]);
}
function Lf(e) {
  switch (e) {
    case 5126:
      return ff;
    case 35664:
      return df;
    case 35665:
      return pf;
    case 35666:
      return mf;
    case 35674:
      return gf;
    case 35675:
      return vf;
    case 35676:
      return _f;
    case 5124:
    case 35670:
      return Mf;
    case 35667:
    case 35671:
      return Sf;
    case 35668:
    case 35672:
      return xf;
    case 35669:
    case 35673:
      return yf;
    case 5125:
      return Ef;
    case 36294:
      return Tf;
    case 36295:
      return bf;
    case 36296:
      return Af;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return wf;
    case 35679:
    case 36299:
    case 36307:
      return Rf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Cf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Pf;
  }
}
var If = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = uf(t.type);
  }
}, Nf = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Lf(t.type);
  }
}, Uf = class {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}, fs = /(\w+)(\])?(\[|\.)?/g;
function Ba(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function Df(e, t, n) {
  const i = e.name, r = i.length;
  for (fs.lastIndex = 0; ; ) {
    const s = fs.exec(i), a = fs.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Ba(n, c === void 0 ? new If(o, e, t) : new Nf(o, e, t));
      break;
    } else {
      let u = n.map[o];
      u === void 0 && (u = new Uf(o), Ba(n, u)), n = u;
    }
  }
}
var xr = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const a = e.getActiveUniform(t, s);
      Df(a, e.getUniformLocation(t, a.name), this);
    }
    const i = [], r = [];
    for (const s of this.seq) s.type === e.SAMPLER_2D_SHADOW || s.type === e.SAMPLER_CUBE_SHADOW || s.type === e.SAMPLER_2D_ARRAY_SHADOW ? i.push(s) : r.push(s);
    i.length > 0 && (this.seq = i.concat(r));
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r], o = n[a.id];
      o.needsUpdate !== !1 && a.setValue(e, o.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const s = e[i];
      s.id in t && n.push(s);
    }
    return n;
  }
};
function za(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
var Of = 37297, Ff = 0;
function Bf(e, t) {
  const n = e.split(`
`), i = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, n.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === t ? ">" : " "} ${o}: ${n[a]}`);
  }
  return i.join(`
`);
}
var Va = /* @__PURE__ */ new ke();
function zf(e) {
  $e._getMatrix(Va, $e.workingColorSpace, e);
  const t = `mat3( ${Va.elements.map((n) => n.toFixed(4))} )`;
  switch ($e.getTransfer(e)) {
    case br:
      return [t, "LinearTransferOETF"];
    case Ar:
      return [t, "sRGBTransferOETF"];
    default:
      return Oe("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function Ga(e, t, n) {
  const i = e.getShaderParameter(t, e.COMPILE_STATUS), r = (e.getShaderInfoLog(t) || "").trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return n.toUpperCase() + `

` + r + `

` + Bf(e.getShaderSource(t), a);
  } else return r;
}
function Vf(e, t) {
  const n = zf(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
var Gf = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Hf(e, t) {
  const n = Gf[t];
  return n === void 0 ? (Oe("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var _r = /* @__PURE__ */ new I();
function kf() {
  return $e.getLuminanceCoefficients(_r), [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${_r.x.toFixed(4)}, ${_r.y.toFixed(4)}, ${_r.z.toFixed(4)} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Wf(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ri).join(`
`);
}
function Xf(e) {
  const t = [];
  for (const n in e) {
    const i = e[n];
    i !== !1 && t.push("#define " + n + " " + i);
  }
  return t.join(`
`);
}
function qf(e, t) {
  const n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = e.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === e.FLOAT_MAT2 && (o = 2), s.type === e.FLOAT_MAT3 && (o = 3), s.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
      type: s.type,
      location: e.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return n;
}
function Ri(e) {
  return e !== "";
}
function Ha(e, t) {
  const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ka(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Yf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ys(e) {
  return e.replace(Yf, Kf);
}
var Zf = /* @__PURE__ */ new Map();
function Kf(e, t) {
  let n = We[t];
  if (n === void 0) {
    const i = Zf.get(t);
    if (i !== void 0)
      n = We[i], Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
    else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
  }
  return ys(n);
}
var Jf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wa(e) {
  return e.replace(Jf, $f);
}
function $f(e, t, n, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(n); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Xa(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
var Qf = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function jf(e) {
  return Qf[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var ed = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function td(e) {
  return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : ed[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var nd = { 302: "ENVMAP_MODE_REFRACTION" };
function id(e) {
  return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : nd[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var rd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function sd(e) {
  return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : rd[e.combine] || "ENVMAP_BLENDING_NONE";
}
function ad(e) {
  const t = e.envMapCubeUVHeight;
  if (t === null) return null;
  const n = Math.log2(t) - 2, i = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
    texelHeight: i,
    maxMip: n
  };
}
function od(e, t, n, i) {
  const r = e.getContext(), s = n.defines;
  let a = n.vertexShader, o = n.fragmentShader;
  const l = jf(n), c = td(n), u = id(n), d = sd(n), h = ad(n), p = Wf(n), _ = Xf(s), M = r.createProgram();
  let g, f, T = n.glslVersion ? "#version " + n.glslVersion + `
` : "";
  n.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _
  ].filter(Ri).join(`
`), g.length > 0 && (g += `
`), f = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _
  ].filter(Ri).join(`
`), f.length > 0 && (f += `
`)) : (g = [
    Xa(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _,
    n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    n.batching ? "#define USE_BATCHING" : "",
    n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    n.instancing ? "#define USE_INSTANCING" : "",
    n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + u : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.anisotropy ? "#define USE_ANISOTROPY" : "",
    n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.alphaHash ? "#define USE_ALPHAHASH" : "",
    n.transmission ? "#define USE_TRANSMISSION" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    n.mapUv ? "#define MAP_UV " + n.mapUv : "",
    n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
    n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
    n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
    n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
    n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
    n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
    n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
    n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
    n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
    n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
    n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
    n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
    n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
    n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
    n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
    n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
    n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
    n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
    n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
    n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
    n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
    n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
    n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
    n.vertexNormals ? "#define HAS_NORMAL" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    n.vertexUv1s ? "#define USE_UV1" : "",
    n.vertexUv2s ? "#define USE_UV2" : "",
    n.vertexUv3s ? "#define USE_UV3" : "",
    n.pointsUvs ? "#define USE_POINTS_UV" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.skinning ? "#define USE_SKINNING" : "",
    n.morphTargets ? "#define USE_MORPHTARGETS" : "",
    n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    n.morphColors ? "#define USE_MORPHCOLORS" : "",
    n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
    n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + l : "",
    n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ri).join(`
`), f = [
    Xa(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + c : "",
    n.envMap ? "#define " + u : "",
    n.envMap ? "#define " + d : "",
    h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
    h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
    h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.anisotropy ? "#define USE_ANISOTROPY" : "",
    n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    n.clearcoat ? "#define USE_CLEARCOAT" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.dispersion ? "#define USE_DISPERSION" : "",
    n.retroreflection ? "#define USE_RETROREFLECTION" : "",
    n.iridescence ? "#define USE_IRIDESCENCE" : "",
    n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.alphaTest ? "#define USE_ALPHATEST" : "",
    n.alphaHash ? "#define USE_ALPHAHASH" : "",
    n.sheen ? "#define USE_SHEEN" : "",
    n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    n.transmission ? "#define USE_TRANSMISSION" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
    n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
    n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    n.vertexUv1s ? "#define USE_UV1" : "",
    n.vertexUv2s ? "#define USE_UV2" : "",
    n.vertexUv3s ? "#define USE_UV3" : "",
    n.pointsUvs ? "#define USE_POINTS_UV" : "",
    n.gradientMap ? "#define USE_GRADIENTMAP" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + l : "",
    n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    n.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    n.toneMapping !== 0 ? We.tonemapping_pars_fragment : "",
    n.toneMapping !== 0 ? Hf("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.opaque ? "#define OPAQUE" : "",
    We.colorspace_pars_fragment,
    Vf("linearToOutputTexel", n.outputColorSpace),
    kf(),
    n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(Ri).join(`
`)), a = ys(a), a = Ha(a, n), a = ka(a, n), o = ys(o), o = Ha(o, n), o = ka(o, n), a = Wa(a), o = Wa(o), n.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, g = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, f = [
    "#define varying in",
    n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + f);
  const S = T + g + a, v = T + f + o, E = za(r, r.VERTEX_SHADER, S), R = za(r, r.FRAGMENT_SHADER, v);
  r.attachShader(M, E), r.attachShader(M, R), n.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, n.index0AttributeName) : n.hasPositionAttribute === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function w(P) {
    if (e.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(M) || "", Y = r.getShaderInfoLog(E) || "", N = r.getShaderInfoLog(R) || "", C = O.trim(), k = Y.trim(), F = N.trim();
      let ee = !0, X = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (ee = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(r, M, E, R);
        else {
          const Z = Ga(r, E, "vertex"), J = Ga(r, R, "fragment");
          Be("WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + C + `
` + Z + `
` + J);
        }
      else C !== "" ? Oe("WebGLProgram: Program Info Log:", C) : (k === "" || F === "") && (X = !1);
      X && (P.diagnostics = {
        runnable: ee,
        programLog: C,
        vertexShader: {
          log: k,
          prefix: g
        },
        fragmentShader: {
          log: F,
          prefix: f
        }
      });
    }
    r.deleteShader(E), r.deleteShader(R), m = new xr(r, M), b = qf(r, M);
  }
  let m;
  this.getUniforms = function() {
    return m === void 0 && w(this), m;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && w(this), b;
  };
  let V = n.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return V === !1 && (V = r.getProgramParameter(M, Of)), V;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = n.shaderType, this.name = n.shaderName, this.id = Ff++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = E, this.fragmentShader = R, this;
}
var ld = 0, cd = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e, t, n) {
    const i = this._getShaderCacheForMaterial(e);
    return i.has(t) === !1 && (i.add(t), t.usedTimes++), i.has(n) === !1 && (i.add(n), n.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new hd(e), t.set(e, n)), n;
  }
}, hd = class {
  constructor(e) {
    this.id = ld++, this.code = e, this.usedTimes = 0;
  }
};
function ud(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function fd(e, t, n, i, r, s) {
  const a = new mo(), o = new cd(), l = /* @__PURE__ */ new Set(), c = [], u = /* @__PURE__ */ new Map(), d = i.logarithmicDepthBuffer;
  let h = i.precision;
  const p = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(m) {
    return l.add(m), m === 0 ? "uv" : `uv${m}`;
  }
  function M(m, b, V, P, O, Y) {
    const N = P.fog, C = O.geometry, k = m.isMeshStandardMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial ? P.environment : null, F = m.isMeshStandardMaterial || m.isMeshLambertMaterial && !m.envMap || m.isMeshPhongMaterial && !m.envMap, ee = t.get(m.envMap || k, F), X = ee && ee.mapping === 306 ? ee.image.height : null, Z = p[m.type];
    m.precision !== null && (h = i.getMaxPrecision(m.precision), h !== m.precision && Oe("WebGLProgram.getParameters:", m.precision, "not supported, using", h, "instead."));
    const J = C.morphAttributes.position || C.morphAttributes.normal || C.morphAttributes.color, Le = J !== void 0 ? J.length : 0;
    let we = 0;
    C.morphAttributes.position !== void 0 && (we = 1), C.morphAttributes.normal !== void 0 && (we = 2), C.morphAttributes.color !== void 0 && (we = 3);
    let rt, Ge, K, re;
    if (Z) {
      const Mt = Qt[Z];
      rt = Mt.vertexShader, Ge = Mt.fragmentShader;
    } else {
      rt = m.vertexShader, Ge = m.fragmentShader;
      const Mt = o.getVertexShaderStage(m), nt = o.getFragmentShaderStage(m);
      o.update(m, Mt, nt), K = Mt.id, re = nt.id;
    }
    const ae = e.getRenderTarget(), Ce = e.state.buffers.depth.getReversed(), Ue = O.isInstancedMesh === !0, ue = O.isBatchedMesh === !0, Ye = !!m.map, j = !!m.matcap, Q = !!ee, le = !!m.aoMap, ve = !!m.lightMap, _e = !!m.bumpMap && m.wireframe === !1, Re = !!m.normalMap, Ie = !!m.displacementMap, Ve = !!m.emissiveMap, He = !!m.metalnessMap, L = !!m.roughnessMap, lt = m.anisotropy > 0, Qe = m.clearcoat > 0, Ke = m.dispersion > 0, A = m.retroreflectivity > 0, x = m.iridescence > 0, U = m.sheen > 0, W = m.transmission > 0, te = lt && !!m.anisotropyMap, oe = Qe && !!m.clearcoatMap, fe = Qe && !!m.clearcoatNormalMap, z = Qe && !!m.clearcoatRoughnessMap, ce = x && !!m.iridescenceMap, Se = x && !!m.iridescenceThicknessMap, Te = U && !!m.sheenColorMap, se = U && !!m.sheenRoughnessMap, Ee = !!m.specularMap, Ne = !!m.specularColorMap, ze = !!m.specularIntensityMap, je = W && !!m.transmissionMap, B = W && !!m.thicknessMap, $ = !!m.gradientMap, ne = !!m.alphaMap, Me = m.alphaTest > 0, be = !!m.alphaHash, ie = !!m.extensions;
    let ge = 0;
    m.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (ge = e.toneMapping);
    const Fe = {
      shaderID: Z,
      shaderType: m.type,
      shaderName: m.name,
      vertexShader: rt,
      fragmentShader: Ge,
      defines: m.defines,
      customVertexShaderID: K,
      customFragmentShaderID: re,
      isRawShaderMaterial: m.isRawShaderMaterial === !0,
      glslVersion: m.glslVersion,
      precision: h,
      batching: ue,
      batchingColor: ue && O._colorsTexture !== null,
      instancing: Ue,
      instancingColor: Ue && O.instanceColor !== null,
      instancingMorph: Ue && O.morphTexture !== null,
      outputColorSpace: ae === null ? e.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : $e.workingColorSpace,
      alphaToCoverage: !!m.alphaToCoverage,
      map: Ye,
      matcap: j,
      envMap: Q,
      envMapMode: Q && ee.mapping,
      envMapCubeUVHeight: X,
      aoMap: le,
      lightMap: ve,
      bumpMap: _e,
      normalMap: Re,
      displacementMap: Ie,
      emissiveMap: Ve,
      normalMapObjectSpace: Re && m.normalMapType === 1,
      normalMapTangentSpace: Re && m.normalMapType === 0,
      packedNormalMap: Re && m.normalMapType === 0 && ud(m.normalMap.format),
      metalnessMap: He,
      roughnessMap: L,
      anisotropy: lt,
      anisotropyMap: te,
      clearcoat: Qe,
      clearcoatMap: oe,
      clearcoatNormalMap: fe,
      clearcoatRoughnessMap: z,
      dispersion: Ke,
      retroreflection: A,
      iridescence: x,
      iridescenceMap: ce,
      iridescenceThicknessMap: Se,
      sheen: U,
      sheenColorMap: Te,
      sheenRoughnessMap: se,
      specularMap: Ee,
      specularColorMap: Ne,
      specularIntensityMap: ze,
      transmission: W,
      transmissionMap: je,
      thicknessMap: B,
      gradientMap: $,
      opaque: m.transparent === !1 && m.blending === 1 && m.alphaToCoverage === !1,
      alphaMap: ne,
      alphaTest: Me,
      alphaHash: be,
      combine: m.combine,
      mapUv: Ye && _(m.map.channel),
      aoMapUv: le && _(m.aoMap.channel),
      lightMapUv: ve && _(m.lightMap.channel),
      bumpMapUv: _e && _(m.bumpMap.channel),
      normalMapUv: Re && _(m.normalMap.channel),
      displacementMapUv: Ie && _(m.displacementMap.channel),
      emissiveMapUv: Ve && _(m.emissiveMap.channel),
      metalnessMapUv: He && _(m.metalnessMap.channel),
      roughnessMapUv: L && _(m.roughnessMap.channel),
      anisotropyMapUv: te && _(m.anisotropyMap.channel),
      clearcoatMapUv: oe && _(m.clearcoatMap.channel),
      clearcoatNormalMapUv: fe && _(m.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: z && _(m.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ce && _(m.iridescenceMap.channel),
      iridescenceThicknessMapUv: Se && _(m.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && _(m.sheenColorMap.channel),
      sheenRoughnessMapUv: se && _(m.sheenRoughnessMap.channel),
      specularMapUv: Ee && _(m.specularMap.channel),
      specularColorMapUv: Ne && _(m.specularColorMap.channel),
      specularIntensityMapUv: ze && _(m.specularIntensityMap.channel),
      transmissionMapUv: je && _(m.transmissionMap.channel),
      thicknessMapUv: B && _(m.thicknessMap.channel),
      alphaMapUv: ne && _(m.alphaMap.channel),
      vertexTangents: !!C.attributes.tangent && (Re || lt),
      vertexNormals: !!C.attributes.normal,
      vertexColors: m.vertexColors,
      vertexAlphas: m.vertexColors === !0 && !!C.attributes.color && C.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!C.attributes.uv && (Ye || ne),
      fog: !!N,
      useFog: m.fog === !0,
      fogExp2: !!N && N.isFogExp2,
      flatShading: m.wireframe === !1 && (m.flatShading === !0 || C.attributes.normal === void 0 && Re === !1 && (m.isMeshLambertMaterial || m.isMeshPhongMaterial || m.isMeshStandardMaterial || m.isMeshPhysicalMaterial)),
      sizeAttenuation: m.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: Ce,
      skinning: O.isSkinnedMesh === !0,
      hasPositionAttribute: C.attributes.position !== void 0,
      morphTargets: C.morphAttributes.position !== void 0,
      morphNormals: C.morphAttributes.normal !== void 0,
      morphColors: C.morphAttributes.color !== void 0,
      morphTargetsCount: Le,
      morphTextureStride: we,
      numSunLights: b.sun.length,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numSunLightShadows: b.sunShadowMap.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numLightProbes: b.numLightProbes,
      numLightProbeGrids: Y.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: m.dithering,
      shadowMapEnabled: e.shadowMap.enabled && V.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: ge,
      decodeVideoTexture: Ye && m.map.isVideoTexture === !0 && $e.getTransfer(m.map.colorSpace) === "srgb",
      decodeVideoTextureEmissive: Ve && m.emissiveMap.isVideoTexture === !0 && $e.getTransfer(m.emissiveMap.colorSpace) === "srgb",
      premultipliedAlpha: m.premultipliedAlpha,
      doubleSided: m.side === 2,
      flipSided: m.side === 1,
      useDepthPacking: m.depthPacking >= 0,
      depthPacking: m.depthPacking || 0,
      index0AttributeName: m.index0AttributeName,
      extensionClipCullDistance: ie && m.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ie && m.extensions.multiDraw === !0 || ue) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: m.customProgramCacheKey()
    };
    return Fe.vertexUv1s = l.has(1), Fe.vertexUv2s = l.has(2), Fe.vertexUv3s = l.has(3), l.clear(), Fe;
  }
  function g(m) {
    const b = [];
    if (m.shaderID ? b.push(m.shaderID) : (b.push(m.customVertexShaderID), b.push(m.customFragmentShaderID)), m.defines !== void 0) for (const V in m.defines)
      b.push(V), b.push(m.defines[V]);
    return m.isRawShaderMaterial === !1 && (f(b, m), T(b, m), b.push(e.outputColorSpace)), b.push(m.customProgramCacheKey), b.join();
  }
  function f(m, b) {
    m.push(b.precision), m.push(b.outputColorSpace), m.push(b.envMapMode), m.push(b.envMapCubeUVHeight), m.push(b.mapUv), m.push(b.alphaMapUv), m.push(b.lightMapUv), m.push(b.aoMapUv), m.push(b.bumpMapUv), m.push(b.normalMapUv), m.push(b.displacementMapUv), m.push(b.emissiveMapUv), m.push(b.metalnessMapUv), m.push(b.roughnessMapUv), m.push(b.anisotropyMapUv), m.push(b.clearcoatMapUv), m.push(b.clearcoatNormalMapUv), m.push(b.clearcoatRoughnessMapUv), m.push(b.iridescenceMapUv), m.push(b.iridescenceThicknessMapUv), m.push(b.sheenColorMapUv), m.push(b.sheenRoughnessMapUv), m.push(b.specularMapUv), m.push(b.specularColorMapUv), m.push(b.specularIntensityMapUv), m.push(b.transmissionMapUv), m.push(b.thicknessMapUv), m.push(b.combine), m.push(b.fogExp2), m.push(b.sizeAttenuation), m.push(b.morphTargetsCount), m.push(b.morphAttributeCount), m.push(b.numSunLights), m.push(b.numDirLights), m.push(b.numPointLights), m.push(b.numSpotLights), m.push(b.numSpotLightMaps), m.push(b.numHemiLights), m.push(b.numRectAreaLights), m.push(b.numSunLightShadows), m.push(b.numDirLightShadows), m.push(b.numPointLightShadows), m.push(b.numSpotLightShadows), m.push(b.numSpotLightShadowsWithMaps), m.push(b.numLightProbes), m.push(b.shadowMapType), m.push(b.toneMapping), m.push(b.numClippingPlanes), m.push(b.numClipIntersection), m.push(b.depthPacking);
  }
  function T(m, b) {
    a.disableAll(), b.instancing && a.enable(0), b.instancingColor && a.enable(1), b.instancingMorph && a.enable(2), b.matcap && a.enable(3), b.envMap && a.enable(4), b.normalMapObjectSpace && a.enable(5), b.normalMapTangentSpace && a.enable(6), b.clearcoat && a.enable(7), b.iridescence && a.enable(8), b.alphaTest && a.enable(9), b.vertexColors && a.enable(10), b.vertexAlphas && a.enable(11), b.vertexUv1s && a.enable(12), b.vertexUv2s && a.enable(13), b.vertexUv3s && a.enable(14), b.vertexTangents && a.enable(15), b.anisotropy && a.enable(16), b.alphaHash && a.enable(17), b.batching && a.enable(18), b.dispersion && a.enable(19), b.retroreflection && a.enable(24), b.batchingColor && a.enable(20), b.gradientMap && a.enable(21), b.packedNormalMap && a.enable(22), b.vertexNormals && a.enable(23), m.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.reversedDepthBuffer && a.enable(4), b.skinning && a.enable(5), b.morphTargets && a.enable(6), b.morphNormals && a.enable(7), b.morphColors && a.enable(8), b.premultipliedAlpha && a.enable(9), b.shadowMapEnabled && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), b.decodeVideoTexture && a.enable(19), b.decodeVideoTextureEmissive && a.enable(20), b.alphaToCoverage && a.enable(21), b.numLightProbeGrids > 0 && a.enable(22), b.hasPositionAttribute && a.enable(23), m.push(a.mask);
  }
  function S(m) {
    const b = p[m.type];
    let V;
    if (b) {
      const P = Qt[b];
      V = Vh.clone(P.uniforms);
    } else V = m.uniforms;
    return V;
  }
  function v(m, b) {
    let V = u.get(b);
    return V !== void 0 ? ++V.usedTimes : (V = new od(e, b, m, r), c.push(V), u.set(b, V)), V;
  }
  function E(m) {
    if (--m.usedTimes === 0) {
      const b = c.indexOf(m);
      c[b] = c[c.length - 1], c.pop(), u.delete(m.cacheKey), m.destroy();
    }
  }
  function R(m) {
    o.remove(m);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: M,
    getProgramCacheKey: g,
    getUniforms: S,
    acquireProgram: v,
    releaseProgram: E,
    releaseShaderCache: R,
    programs: c,
    dispose: w
  };
}
function dd() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return e.has(a);
  }
  function n(a) {
    let o = e.get(a);
    return o === void 0 && (o = {}, e.set(a, o)), o;
  }
  function i(a) {
    e.delete(a);
  }
  function r(a, o, l) {
    e.get(a)[o] = l;
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: n,
    remove: i,
    update: r,
    dispose: s
  };
}
function pd(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.materialVariant !== t.materialVariant ? e.materialVariant - t.materialVariant : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function qa(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function Ya() {
  const e = [];
  let t = 0;
  const n = [], i = [], r = [];
  function s() {
    t = 0, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(h) {
    let p = 0;
    return h.isInstancedMesh && (p += 2), h.isSkinnedMesh && (p += 1), p;
  }
  function o(h, p, _, M, g, f) {
    let T = e[t];
    return T === void 0 ? (T = {
      id: h.id,
      object: h,
      geometry: p,
      material: _,
      materialVariant: a(h),
      groupOrder: M,
      renderOrder: h.renderOrder,
      z: g,
      group: f
    }, e[t] = T) : (T.id = h.id, T.object = h, T.geometry = p, T.material = _, T.materialVariant = a(h), T.groupOrder = M, T.renderOrder = h.renderOrder, T.z = g, T.group = f), t++, T;
  }
  function l(h, p, _, M, g, f, T) {
    T.reversedDepth === !0 && (g = -g);
    const S = o(h, p, _, M, g, f);
    _.transmission > 0 ? i.push(S) : _.transparent === !0 ? r.push(S) : n.push(S);
  }
  function c(h, p, _, M, g, f) {
    const T = o(h, p, _, M, g, f);
    _.transmission > 0 ? i.unshift(T) : _.transparent === !0 ? r.unshift(T) : n.unshift(T);
  }
  function u(h, p) {
    n.length > 1 && n.sort(h || pd), i.length > 1 && i.sort(p || qa), r.length > 1 && r.sort(p || qa);
  }
  function d() {
    for (let h = t, p = e.length; h < p; h++) {
      const _ = e[h];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: d,
    sort: u
  };
}
function md() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r) {
    const s = e.get(i);
    let a;
    return s === void 0 ? (a = new Ya(), e.set(i, [a])) : r >= s.length ? (a = new Ya(), s.push(a)) : a = s[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function gd() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          direction: new I(),
          color: new Xe()
        };
        break;
      case "SpotLight":
        n = {
          position: new I(),
          direction: new I(),
          color: new Xe(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0
        };
        break;
      case "PointLight":
        n = {
          position: new I(),
          color: new Xe(),
          distance: 0,
          decay: 0
        };
        break;
      case "HemisphereLight":
        n = {
          direction: new I(),
          skyColor: new Xe(),
          groundColor: new Xe()
        };
        break;
      case "RectAreaLight":
        n = {
          color: new Xe(),
          position: new I(),
          halfWidth: new I(),
          halfHeight: new I()
        };
        break;
    }
    return e[t.id] = n, n;
  } };
}
function vd() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new de()
        };
        break;
      case "SpotLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new de()
        };
        break;
      case "PointLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new de(),
          shadowCameraNear: 1,
          shadowCameraFar: 1e3
        };
        break;
    }
    return e[t.id] = n, n;
  } };
}
var _d = 0;
function Md(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function Sd(e) {
  const t = new gd(), n = vd(), i = {
    version: 0,
    hash: {
      sunLength: -1,
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numSunShadows: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [
      0,
      0,
      0
    ],
    probe: [],
    sun: [],
    sunShadow: [],
    sunShadowMap: [],
    sunShadowMatrix: [],
    sunShadowCascade: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) i.probe.push(new I());
  const r = new I(), s = new ht(), a = new ht();
  function o(c) {
    let u = 0, d = 0, h = 0;
    for (let O = 0; O < 9; O++) i.probe[O].set(0, 0, 0);
    let p = 0, _ = 0, M = 0, g = 0, f = 0, T = 0, S = 0, v = 0, E = 0, R = 0, w = 0, m = 0, b = 0, V = 0;
    c.sort(Md);
    for (let O = 0, Y = c.length; O < Y; O++) {
      const N = c[O], C = N.color, k = N.intensity, F = N.distance;
      let ee = null;
      if (N.shadow && N.shadow.map && (N.shadow.map.texture.format === 1030 ? ee = N.shadow.map.texture : ee = N.shadow.map.depthTexture || N.shadow.map.texture), N.isAmbientLight)
        u += C.r * k, d += C.g * k, h += C.b * k;
      else if (N.isLightProbe) {
        for (let X = 0; X < 9; X++) i.probe[X].addScaledVector(N.sh.coefficients[X], k);
        V++;
      } else if (N.isSunLight) {
        const X = t.get(N);
        if (X.color.copy(N.color).multiplyScalar(N.intensity), N.castShadow) {
          const Z = N.shadow, J = n.get(N);
          J.shadowIntensity = Z.intensity, J.shadowBias = Z.bias, J.shadowNormalBias = Z.normalBias, J.shadowRadius = Z.radius, J.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()), i.sunShadow[_] = J, i.sunShadowMap[_] = ee;
          const Le = Z.getViewportCount();
          for (let we = 0; we < Le; we++)
            i.sunShadowMatrix[M + we] = Z.getMatrix(we), i.sunShadowCascade[M + we] = Z._cascadeData[we];
          M += Le, _++;
        }
        i.sun[p] = X, p++;
      } else if (N.isDirectionalLight) {
        const X = t.get(N);
        if (X.color.copy(N.color).multiplyScalar(N.intensity), N.castShadow) {
          const Z = N.shadow, J = n.get(N);
          J.shadowIntensity = Z.intensity, J.shadowBias = Z.bias, J.shadowNormalBias = Z.normalBias, J.shadowRadius = Z.radius, J.shadowMapSize = Z.mapSize, i.directionalShadow[g] = J, i.directionalShadowMap[g] = ee, i.directionalShadowMatrix[g] = N.shadow.matrix, E++;
        }
        i.directional[g] = X, g++;
      } else if (N.isSpotLight) {
        const X = t.get(N);
        X.position.setFromMatrixPosition(N.matrixWorld), X.color.copy(C).multiplyScalar(k), X.distance = F, X.coneCos = Math.cos(N.angle), X.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), X.decay = N.decay, i.spot[T] = X;
        const Z = N.shadow;
        if (N.map && (i.spotLightMap[m] = N.map, m++, Z.updateMatrices(N), N.castShadow && b++), i.spotLightMatrix[T] = Z.matrix, N.castShadow) {
          const J = n.get(N);
          J.shadowIntensity = Z.intensity, J.shadowBias = Z.bias, J.shadowNormalBias = Z.normalBias, J.shadowRadius = Z.radius, J.shadowMapSize = Z.mapSize, i.spotShadow[T] = J, i.spotShadowMap[T] = ee, w++;
        }
        T++;
      } else if (N.isRectAreaLight) {
        const X = t.get(N);
        X.color.copy(C).multiplyScalar(k), X.halfWidth.set(N.width * 0.5, 0, 0), X.halfHeight.set(0, N.height * 0.5, 0), i.rectArea[S] = X, S++;
      } else if (N.isPointLight) {
        const X = t.get(N);
        if (X.color.copy(N.color).multiplyScalar(N.intensity), X.distance = N.distance, X.decay = N.decay, N.castShadow) {
          const Z = N.shadow, J = n.get(N);
          J.shadowIntensity = Z.intensity, J.shadowBias = Z.bias, J.shadowNormalBias = Z.normalBias, J.shadowRadius = Z.radius, J.shadowMapSize = Z.mapSize, J.shadowCameraNear = Z.camera.near, J.shadowCameraFar = Z.camera.far, i.pointShadow[f] = J, i.pointShadowMap[f] = ee, i.pointShadowMatrix[f] = N.shadow.matrix, R++;
        }
        i.point[f] = X, f++;
      } else if (N.isHemisphereLight) {
        const X = t.get(N);
        X.skyColor.copy(N.color).multiplyScalar(k), X.groundColor.copy(N.groundColor).multiplyScalar(k), i.hemi[v] = X, v++;
      }
    }
    S > 0 && (e.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_FLOAT_1, i.rectAreaLTC2 = pe.LTC_FLOAT_2) : (i.rectAreaLTC1 = pe.LTC_HALF_1, i.rectAreaLTC2 = pe.LTC_HALF_2)), i.ambient[0] = u, i.ambient[1] = d, i.ambient[2] = h;
    const P = i.hash;
    (P.sunLength !== p || P.directionalLength !== g || P.pointLength !== f || P.spotLength !== T || P.rectAreaLength !== S || P.hemiLength !== v || P.numSunShadows !== _ || P.numDirectionalShadows !== E || P.numPointShadows !== R || P.numSpotShadows !== w || P.numSpotMaps !== m || P.numLightProbes !== V) && (i.sun.length = p, i.directional.length = g, i.spot.length = T, i.rectArea.length = S, i.point.length = f, i.hemi.length = v, i.sunShadow.length = _, i.sunShadowMap.length = _, i.sunShadowMatrix.length = M, i.sunShadowCascade.length = M, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.directionalShadowMatrix.length = E, i.pointShadow.length = R, i.pointShadowMap.length = R, i.pointShadowMatrix.length = R, i.spotShadow.length = w, i.spotShadowMap.length = w, i.spotLightMatrix.length = w + m - b, i.spotLightMap.length = m, i.numSpotLightShadowsWithMaps = b, i.numLightProbes = V, P.sunLength = p, P.directionalLength = g, P.pointLength = f, P.spotLength = T, P.rectAreaLength = S, P.hemiLength = v, P.numSunShadows = _, P.numDirectionalShadows = E, P.numPointShadows = R, P.numSpotShadows = w, P.numSpotMaps = m, P.numLightProbes = V, i.version = _d++);
  }
  function l(c, u) {
    let d = 0, h = 0, p = 0, _ = 0, M = 0, g = 0;
    const f = u.matrixWorldInverse;
    for (let T = 0, S = c.length; T < S; T++) {
      const v = c[T];
      if (v.isSunLight) {
        const E = i.sun[d];
        E.direction.setFromMatrixPosition(v.matrixWorld), E.direction.transformDirection(f), d++;
      } else if (v.isDirectionalLight) {
        const E = i.directional[h];
        E.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), h++;
      } else if (v.isSpotLight) {
        const E = i.spot[_];
        E.position.setFromMatrixPosition(v.matrixWorld), E.position.applyMatrix4(f), E.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), _++;
      } else if (v.isRectAreaLight) {
        const E = i.rectArea[M];
        E.position.setFromMatrixPosition(v.matrixWorld), E.position.applyMatrix4(f), a.identity(), s.copy(v.matrixWorld), s.premultiply(f), a.extractRotation(s), E.halfWidth.set(v.width * 0.5, 0, 0), E.halfHeight.set(0, v.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), M++;
      } else if (v.isPointLight) {
        const E = i.point[p];
        E.position.setFromMatrixPosition(v.matrixWorld), E.position.applyMatrix4(f), p++;
      } else if (v.isHemisphereLight) {
        const E = i.hemi[g];
        E.direction.setFromMatrixPosition(v.matrixWorld), E.direction.transformDirection(f), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: i
  };
}
function Za(e) {
  const t = new Sd(e), n = [], i = [], r = [];
  function s(h) {
    d.camera = h, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l(h) {
    r.push(h);
  }
  function c() {
    t.setup(n);
  }
  function u(h) {
    t.setupView(n, h);
  }
  const d = {
    lightsArray: n,
    shadowsArray: i,
    lightProbeGridArray: r,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: d,
    setupLights: c,
    setupLightsView: u,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: l
  };
}
function xd(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new Za(e), t.set(r, [o])) : s >= a.length ? (o = new Za(e), a.push(o)) : o = a[s], o;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
var yd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ed = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, Td = [
  /* @__PURE__ */ new I(1, 0, 0),
  /* @__PURE__ */ new I(-1, 0, 0),
  /* @__PURE__ */ new I(0, 1, 0),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, 0, 1),
  /* @__PURE__ */ new I(0, 0, -1)
], bd = [
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, 0, 1),
  /* @__PURE__ */ new I(0, 0, -1),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, -1, 0)
], Ka = /* @__PURE__ */ new ht(), bi = /* @__PURE__ */ new I(), ds = /* @__PURE__ */ new I();
function Ad(e, t, n) {
  let i = new As();
  const r = new de(), s = new de(), a = new gt(), o = new Xh(), l = new qh(), c = {}, u = n.maxTextureSize, d = {
    0: 1,
    1: 0,
    2: 2
  }, h = new en({
    defines: { VSM_SAMPLES: 8 },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new de() },
      radius: { value: 4 }
    },
    vertexShader: yd,
    fragmentShader: Ed
  }), p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new It();
  _.setAttribute("position", new jt(new Float32Array([
    -1,
    -1,
    0.5,
    3,
    -1,
    0.5,
    -1,
    3,
    0.5
  ]), 3));
  const M = new ut(_, h), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let f = this.type;
  this.render = function(R, w, m) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || R.length === 0) return;
    this.type === 2 && (Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const b = e.getRenderTarget(), V = e.getActiveCubeFace(), P = e.getActiveMipmapLevel(), O = e.state;
    O.setBlending(0), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const Y = f !== this.type;
    Y && w.traverse(function(N) {
      N.material && (Array.isArray(N.material) ? N.material.forEach((C) => C.needsUpdate = !0) : N.material.needsUpdate = !0);
    });
    for (let N = 0, C = R.length; N < C; N++) {
      const k = R[N], F = k.shadow;
      if (F === void 0) {
        Oe("WebGLShadowMap:", k, "has no shadow.");
        continue;
      }
      if (F.autoUpdate === !1 && F.needsUpdate === !1) continue;
      r.copy(F.mapSize);
      const ee = F.getFrameExtents();
      r.multiply(ee), s.copy(F.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / ee.x), r.x = s.x * ee.x, F.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / ee.y), r.y = s.y * ee.y, F.mapSize.y = s.y));
      const X = e.state.buffers.depth.getReversed();
      if (F.camera._reversedDepth = X, F.map === null || Y === !0) {
        if (F.map !== null && (F.map.depthTexture !== null && (F.map.depthTexture.dispose(), F.map.depthTexture = null), F.map.dispose()), this.type === 3) {
          if (k.isPointLight) {
            Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          F.map = new qt(r.x, r.y, {
            format: Er,
            type: xn,
            minFilter: Ot,
            magFilter: Ot,
            generateMipmaps: !1
          }), F.map.texture.name = k.name + ".shadowMap", F.map.depthTexture = new Oi(r.x, r.y, Vi), F.map.depthTexture.name = k.name + ".shadowMapDepth", F.map.depthTexture.format = Ui, F.map.depthTexture.compareFunction = null, F.map.depthTexture.minFilter = Pt, F.map.depthTexture.magFilter = Pt;
        } else
          k.isPointLight ? (F.map = new rl(r.x), F.map.depthTexture = new rh(r.x, Cn)) : (F.map = new qt(r.x, r.y), F.map.depthTexture = new Oi(r.x, r.y, Cn)), F.map.depthTexture.name = k.name + ".shadowMap", F.map.depthTexture.format = Ui, this.type === 1 ? (F.map.depthTexture.compareFunction = X ? 518 : 515, F.map.depthTexture.minFilter = Ot, F.map.depthTexture.magFilter = Ot) : (F.map.depthTexture.compareFunction = null, F.map.depthTexture.minFilter = Pt, F.map.depthTexture.magFilter = Pt);
        F.camera.updateProjectionMatrix();
      }
      F.map.isWebGLCubeRenderTarget !== !0 && (F.map.width !== r.x || F.map.height !== r.y) && F.map.setSize(r.x, r.y);
      const Z = F.map.isWebGLCubeRenderTarget ? 6 : F.getViewportCount();
      k.isPointLight !== !0 && F.updateMatrices(k, m);
      for (let J = 0; J < Z; J++) {
        const Le = F.getCamera(J);
        if (k.isPointLight) {
          const we = F.camera, rt = F.matrix, Ge = k.distance || we.far;
          Ge !== we.far && (we.far = Ge, we.updateProjectionMatrix()), bi.setFromMatrixPosition(k.matrixWorld), we.position.copy(bi), ds.copy(we.position), ds.add(Td[J]), we.up.copy(bd[J]), we.lookAt(ds), we.updateMatrixWorld(), rt.makeTranslation(-bi.x, -bi.y, -bi.z), Ka.multiplyMatrices(we.projectionMatrix, we.matrixWorldInverse), F._frustum.setFromProjectionMatrix(Ka, we.coordinateSystem, we.reversedDepth);
        }
        if (F.map.isWebGLCubeRenderTarget)
          e.setRenderTarget(F.map, J), e.clear();
        else {
          J === 0 && (e.setRenderTarget(F.map), e.clear());
          const we = F.getViewport(J);
          a.set(s.x * we.x, s.y * we.y, s.x * we.z, s.y * we.w), O.viewport(a);
        }
        i = F.getFrustum(J), v(w, m, Le, k, this.type);
      }
      F.isPointLightShadow !== !0 && this.type === 3 && T(F, m), F.needsUpdate = !1;
    }
    f = this.type, g.needsUpdate = !1, e.setRenderTarget(b, V, P);
  };
  function T(R, w) {
    const m = t.update(M);
    h.defines.VSM_SAMPLES !== R.blurSamples && (h.defines.VSM_SAMPLES = R.blurSamples, p.defines.VSM_SAMPLES = R.blurSamples, h.needsUpdate = !0, p.needsUpdate = !0), R.mapPass === null ? R.mapPass = new qt(r.x, r.y, {
      format: Er,
      type: xn
    }) : (R.mapPass.width !== R.map.width || R.mapPass.height !== R.map.height) && R.mapPass.setSize(R.map.width, R.map.height), h.uniforms.shadow_pass.value = R.map.depthTexture, h.uniforms.resolution.value.set(R.map.width, R.map.height), h.uniforms.radius.value = R.radius, e.setRenderTarget(R.mapPass), e.clear(), e.renderBufferDirect(w, null, m, h, M, null), p.uniforms.shadow_pass.value = R.mapPass.texture, p.uniforms.resolution.value.set(R.map.width, R.map.height), p.uniforms.radius.value = R.radius, e.setRenderTarget(R.map), e.clear(), e.renderBufferDirect(w, null, m, p, M, null);
  }
  function S(R, w, m, b) {
    let V = null;
    const P = m.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (P !== void 0) V = P;
    else if (V = m.isPointLight === !0 ? l : o, e.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const O = V.uuid, Y = w.uuid;
      let N = c[O];
      N === void 0 && (N = {}, c[O] = N);
      let C = N[Y];
      C === void 0 && (C = V.clone(), N[Y] = C, w.addEventListener("dispose", E)), V = C;
    }
    if (V.visible = w.visible, V.wireframe = w.wireframe, b === 3 ? V.side = w.shadowSide !== null ? w.shadowSide : w.side : V.side = w.shadowSide !== null ? w.shadowSide : d[w.side], V.alphaMap = w.alphaMap, V.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, V.map = w.map, V.clipShadows = w.clipShadows, V.clippingPlanes = w.clippingPlanes, V.clipIntersection = w.clipIntersection, V.displacementMap = w.displacementMap, V.displacementScale = w.displacementScale, V.displacementBias = w.displacementBias, V.wireframeLinewidth = w.wireframeLinewidth, V.linewidth = w.linewidth, m.isPointLight === !0 && V.isMeshDistanceMaterial === !0) {
      const O = e.properties.get(V);
      O.light = m;
    }
    return V;
  }
  function v(R, w, m, b, V) {
    if (R.visible === !1) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && V === 3) && (!R.frustumCulled || R.intersectsFrustum(i))) {
      R.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, R.matrixWorld);
      const O = t.update(R), Y = R.material;
      if (Array.isArray(Y)) {
        const N = O.groups;
        for (let C = 0, k = N.length; C < k; C++) {
          const F = N[C], ee = Y[F.materialIndex];
          if (ee && ee.visible) {
            const X = S(R, ee, b, V);
            R.onBeforeShadow(e, R, w, m, O, X, F), e.renderBufferDirect(m, null, O, X, R, F), R.onAfterShadow(e, R, w, m, O, X, F);
          }
        }
      } else if (Y.visible) {
        const N = S(R, Y, b, V);
        R.onBeforeShadow(e, R, w, m, O, N, null), e.renderBufferDirect(m, null, O, N, R, null), R.onAfterShadow(e, R, w, m, O, N, null);
      }
    }
    const P = R.children;
    for (let O = 0, Y = P.length; O < Y; O++) v(P[O], w, m, b, V);
  }
  function E(R) {
    R.target.removeEventListener("dispose", E);
    for (const w in c) {
      const m = c[w], b = R.target.uuid;
      b in m && (m[b].dispose(), delete m[b]);
    }
  }
}
function wd(e, t) {
  function n() {
    let B = !1;
    const $ = new gt();
    let ne = null;
    const Me = new gt(0, 0, 0, 0);
    return {
      setMask: function(be) {
        ne !== be && !B && (e.colorMask(be, be, be, be), ne = be);
      },
      setLocked: function(be) {
        B = be;
      },
      setClear: function(be, ie, ge, Fe, Mt) {
        Mt === !0 && (be *= Fe, ie *= Fe, ge *= Fe), $.set(be, ie, ge, Fe), Me.equals($) === !1 && (e.clearColor(be, ie, ge, Fe), Me.copy($));
      },
      reset: function() {
        B = !1, ne = null, Me.set(-1, 0, 0, 0);
      }
    };
  }
  function i() {
    let B = !1, $ = !1, ne = null, Me = null, be = null;
    return {
      setReversed: function(ie) {
        if ($ !== ie) {
          const ge = t.get("EXT_clip_control");
          ie ? ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.ZERO_TO_ONE_EXT) : ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.NEGATIVE_ONE_TO_ONE_EXT), $ = ie;
          const Fe = be;
          be = null, this.setClear(Fe);
        }
      },
      getReversed: function() {
        return $;
      },
      setTest: function(ie) {
        ie ? ae(e.DEPTH_TEST) : Ce(e.DEPTH_TEST);
      },
      setMask: function(ie) {
        ne !== ie && !B && (e.depthMask(ie), ne = ie);
      },
      setFunc: function(ie) {
        if ($ && (ie = gc[ie]), Me !== ie) {
          switch (ie) {
            case 0:
              e.depthFunc(e.NEVER);
              break;
            case 1:
              e.depthFunc(e.ALWAYS);
              break;
            case 2:
              e.depthFunc(e.LESS);
              break;
            case 3:
              e.depthFunc(e.LEQUAL);
              break;
            case 4:
              e.depthFunc(e.EQUAL);
              break;
            case 5:
              e.depthFunc(e.GEQUAL);
              break;
            case 6:
              e.depthFunc(e.GREATER);
              break;
            case 7:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          Me = ie;
        }
      },
      setLocked: function(ie) {
        B = ie;
      },
      setClear: function(ie) {
        be !== ie && (be = ie, $ && (ie = 1 - ie), e.clearDepth(ie));
      },
      reset: function() {
        B = !1, ne = null, Me = null, be = null, $ = !1;
      }
    };
  }
  function r() {
    let B = !1, $ = null, ne = null, Me = null, be = null, ie = null, ge = null, Fe = null, Mt = null;
    return {
      setTest: function(nt) {
        B || (nt ? ae(e.STENCIL_TEST) : Ce(e.STENCIL_TEST));
      },
      setMask: function(nt) {
        $ !== nt && !B && (e.stencilMask(nt), $ = nt);
      },
      setFunc: function(nt, Yt, rn) {
        (ne !== nt || Me !== Yt || be !== rn) && (e.stencilFunc(nt, Yt, rn), ne = nt, Me = Yt, be = rn);
      },
      setOp: function(nt, Yt, rn) {
        (ie !== nt || ge !== Yt || Fe !== rn) && (e.stencilOp(nt, Yt, rn), ie = nt, ge = Yt, Fe = rn);
      },
      setLocked: function(nt) {
        B = nt;
      },
      setClear: function(nt) {
        Mt !== nt && (e.clearStencil(nt), Mt = nt);
      },
      reset: function() {
        B = !1, $ = null, ne = null, Me = null, be = null, ie = null, ge = null, Fe = null, Mt = null;
      }
    };
  }
  const s = new n(), a = new i(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, h = {}, p = /* @__PURE__ */ new WeakMap(), _ = [], M = null, g = !1, f = null, T = null, S = null, v = null, E = null, R = null, w = null, m = new Xe(0, 0, 0), b = 0, V = !1, P = null, O = null, Y = null, N = null, C = null;
  const k = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let F = !1, ee = 0;
  const X = e.getParameter(e.VERSION);
  X.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(X)[1]), F = ee >= 1) : X.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), F = ee >= 2);
  let Z = null, J = {};
  const Le = e.getParameter(e.SCISSOR_BOX), we = e.getParameter(e.VIEWPORT), rt = new gt().fromArray(Le), Ge = new gt().fromArray(we);
  function K(B, $, ne, Me) {
    const be = new Uint8Array(4), ie = e.createTexture();
    e.bindTexture(B, ie), e.texParameteri(B, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(B, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let ge = 0; ge < ne; ge++) B === e.TEXTURE_3D || B === e.TEXTURE_2D_ARRAY ? e.texImage3D($, 0, e.RGBA, 1, 1, Me, 0, e.RGBA, e.UNSIGNED_BYTE, be) : e.texImage2D($ + ge, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, be);
    return ie;
  }
  const re = {};
  re[e.TEXTURE_2D] = K(e.TEXTURE_2D, e.TEXTURE_2D, 1), re[e.TEXTURE_CUBE_MAP] = K(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), re[e.TEXTURE_2D_ARRAY] = K(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), re[e.TEXTURE_3D] = K(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ae(e.DEPTH_TEST), a.setFunc(3), _e(!1), Re(1), ae(e.CULL_FACE), le(0);
  function ae(B) {
    u[B] !== !0 && (e.enable(B), u[B] = !0);
  }
  function Ce(B) {
    u[B] !== !1 && (e.disable(B), u[B] = !1);
  }
  function Ue(B, $) {
    return h[B] !== $ ? (e.bindFramebuffer(B, $), h[B] = $, B === e.DRAW_FRAMEBUFFER && (h[e.FRAMEBUFFER] = $), B === e.FRAMEBUFFER && (h[e.DRAW_FRAMEBUFFER] = $), !0) : !1;
  }
  function ue(B, $) {
    let ne = _, Me = !1;
    if (B) {
      ne = p.get($), ne === void 0 && (ne = [], p.set($, ne));
      const be = B.textures;
      if (ne.length !== be.length || ne[0] !== e.COLOR_ATTACHMENT0) {
        for (let ie = 0, ge = be.length; ie < ge; ie++) ne[ie] = e.COLOR_ATTACHMENT0 + ie;
        ne.length = be.length, Me = !0;
      }
    } else ne[0] !== e.BACK && (ne[0] = e.BACK, Me = !0);
    Me && e.drawBuffers(ne);
  }
  function Ye(B) {
    return M !== B ? (e.useProgram(B), M = B, !0) : !1;
  }
  const j = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  j[103] = e.MIN, j[104] = e.MAX;
  const Q = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA
  };
  function le(B, $, ne, Me, be, ie, ge, Fe, Mt, nt) {
    if (B === 0) {
      g === !0 && (Ce(e.BLEND), g = !1);
      return;
    }
    if (g === !1 && (ae(e.BLEND), g = !0), B !== 5) {
      if (B !== f || nt !== V) {
        if ((T !== 100 || E !== 100) && (e.blendEquation(e.FUNC_ADD), T = 100, E = 100), nt) switch (B) {
          case 1:
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFunc(e.ONE, e.ONE);
            break;
          case 3:
            e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
            break;
          case 4:
            e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
            break;
          default:
            Be("WebGLState: Invalid blending: ", B);
            break;
        }
        else switch (B) {
          case 1:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
            break;
          case 3:
            Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case 4:
            Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            Be("WebGLState: Invalid blending: ", B);
            break;
        }
        S = null, v = null, R = null, w = null, m.set(0, 0, 0), b = 0, f = B, V = nt;
      }
      return;
    }
    be = be || $, ie = ie || ne, ge = ge || Me, ($ !== T || be !== E) && (e.blendEquationSeparate(j[$], j[be]), T = $, E = be), (ne !== S || Me !== v || ie !== R || ge !== w) && (e.blendFuncSeparate(Q[ne], Q[Me], Q[ie], Q[ge]), S = ne, v = Me, R = ie, w = ge), (Fe.equals(m) === !1 || Mt !== b) && (e.blendColor(Fe.r, Fe.g, Fe.b, Mt), m.copy(Fe), b = Mt), f = B, V = !1;
  }
  function ve(B, $) {
    B.side === 2 ? Ce(e.CULL_FACE) : ae(e.CULL_FACE);
    let ne = B.side === 1;
    $ && (ne = !ne), _e(ne), B.blending === 1 && B.transparent === !1 ? le(0) : le(B.blending, B.blendEquation, B.blendSrc, B.blendDst, B.blendEquationAlpha, B.blendSrcAlpha, B.blendDstAlpha, B.blendColor, B.blendAlpha, B.premultipliedAlpha), a.setFunc(B.depthFunc), a.setTest(B.depthTest), a.setMask(B.depthWrite), s.setMask(B.colorWrite);
    const Me = B.stencilWrite;
    o.setTest(Me), Me && (o.setMask(B.stencilWriteMask), o.setFunc(B.stencilFunc, B.stencilRef, B.stencilFuncMask), o.setOp(B.stencilFail, B.stencilZFail, B.stencilZPass)), Ve(B.polygonOffset, B.polygonOffsetFactor, B.polygonOffsetUnits), B.alphaToCoverage === !0 ? ae(e.SAMPLE_ALPHA_TO_COVERAGE) : Ce(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function _e(B) {
    P !== B && (B ? e.frontFace(e.CW) : e.frontFace(e.CCW), P = B);
  }
  function Re(B) {
    B !== 0 ? (ae(e.CULL_FACE), B !== O && (B === 1 ? e.cullFace(e.BACK) : B === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : Ce(e.CULL_FACE), O = B;
  }
  function Ie(B) {
    B !== Y && (F && e.lineWidth(B), Y = B);
  }
  function Ve(B, $, ne) {
    B ? (ae(e.POLYGON_OFFSET_FILL), (N !== $ || C !== ne) && (N = $, C = ne, a.getReversed() && ($ = -$), e.polygonOffset($, ne))) : Ce(e.POLYGON_OFFSET_FILL);
  }
  function He(B) {
    B ? ae(e.SCISSOR_TEST) : Ce(e.SCISSOR_TEST);
  }
  function L(B) {
    B === void 0 && (B = e.TEXTURE0 + k - 1), Z !== B && (e.activeTexture(B), Z = B);
  }
  function lt(B, $, ne) {
    ne === void 0 && (Z === null ? ne = e.TEXTURE0 + k - 1 : ne = Z);
    let Me = J[ne];
    Me === void 0 && (Me = {
      type: void 0,
      texture: void 0
    }, J[ne] = Me), (Me.type !== B || Me.texture !== $) && (Z !== ne && (e.activeTexture(ne), Z = ne), e.bindTexture(B, $ || re[B]), Me.type = B, Me.texture = $);
  }
  function Qe() {
    const B = J[Z];
    B !== void 0 && B.type !== void 0 && (e.bindTexture(B.type, null), B.type = void 0, B.texture = void 0);
  }
  function Ke() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function A() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function x() {
    try {
      e.texSubImage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function U() {
    try {
      e.texSubImage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function W() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function te() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function oe() {
    try {
      e.texStorage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function fe() {
    try {
      e.texStorage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function z() {
    try {
      e.texImage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function ce() {
    try {
      e.texImage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function Se(B) {
    return d[B] !== void 0 ? d[B] : e.getParameter(B);
  }
  function Te(B, $) {
    d[B] !== $ && (e.pixelStorei(B, $), d[B] = $);
  }
  function se(B) {
    rt.equals(B) === !1 && (e.scissor(B.x, B.y, B.z, B.w), rt.copy(B));
  }
  function Ee(B) {
    Ge.equals(B) === !1 && (e.viewport(B.x, B.y, B.z, B.w), Ge.copy(B));
  }
  function Ne(B, $) {
    let ne = c.get($);
    ne === void 0 && (ne = /* @__PURE__ */ new WeakMap(), c.set($, ne));
    let Me = ne.get(B);
    Me === void 0 && (Me = e.getUniformBlockIndex($, B.name), ne.set(B, Me));
  }
  function ze(B, $) {
    const ne = c.get($).get(B);
    l.get($) !== ne && (e.uniformBlockBinding($, ne, B.__bindingPointIndex), l.set($, ne));
  }
  function je() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), a.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, Z = null, J = {}, h = {}, p = /* @__PURE__ */ new WeakMap(), _ = [], M = null, g = !1, f = null, T = null, S = null, v = null, E = null, R = null, w = null, m = new Xe(0, 0, 0), b = 0, V = !1, P = null, O = null, Y = null, N = null, C = null, rt.set(0, 0, e.canvas.width, e.canvas.height), Ge.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ae,
    disable: Ce,
    bindFramebuffer: Ue,
    drawBuffers: ue,
    useProgram: Ye,
    setBlending: le,
    setMaterial: ve,
    setFlipSided: _e,
    setCullFace: Re,
    setLineWidth: Ie,
    setPolygonOffset: Ve,
    setScissorTest: He,
    activeTexture: L,
    bindTexture: lt,
    unbindTexture: Qe,
    compressedTexImage2D: Ke,
    compressedTexImage3D: A,
    texImage2D: z,
    texImage3D: ce,
    pixelStorei: Te,
    getParameter: Se,
    updateUBOMapping: Ne,
    uniformBlockBinding: ze,
    texStorage2D: oe,
    texStorage3D: fe,
    texSubImage2D: x,
    texSubImage3D: U,
    compressedTexSubImage2D: W,
    compressedTexSubImage3D: te,
    scissor: se,
    viewport: Ee,
    reset: je
  };
}
function Rd(e, t, n, i, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new de(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set();
  let h;
  const p = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function M(A, x) {
    return _ ? new OffscreenCanvas(A, x) : wr("canvas");
  }
  function g(A, x, U) {
    let W = 1;
    const te = Ke(A);
    if ((te.width > U || te.height > U) && (W = U / Math.max(te.width, te.height)), W < 1) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
      const oe = Math.floor(W * te.width), fe = Math.floor(W * te.height);
      h === void 0 && (h = M(oe, fe));
      const z = x ? M(oe, fe) : h;
      return z.width = oe, z.height = fe, z.getContext("2d").drawImage(A, 0, 0, oe, fe), Oe("WebGLRenderer: Texture has been resized from (" + te.width + "x" + te.height + ") to (" + oe + "x" + fe + ")."), z;
    } else
      return "data" in A && Oe("WebGLRenderer: Image in DataTexture is too big (" + te.width + "x" + te.height + ")."), A;
    return A;
  }
  function f(A) {
    return A.generateMipmaps;
  }
  function T(A) {
    e.generateMipmap(A);
  }
  function S(A) {
    return A.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? e.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function v(A, x, U, W, te, oe = !1) {
    if (A !== null) {
      if (e[A] !== void 0) return e[A];
      Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let fe;
    W && (fe = t.get("EXT_texture_norm16"), fe || Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let z = x;
    if (x === e.RED && (U === e.FLOAT && (z = e.R32F), U === e.HALF_FLOAT && (z = e.R16F), U === e.UNSIGNED_BYTE && (z = e.R8), U === e.UNSIGNED_SHORT && fe && (z = fe.R16_EXT), U === e.SHORT && fe && (z = fe.R16_SNORM_EXT)), x === e.RED_INTEGER && (U === e.UNSIGNED_BYTE && (z = e.R8UI), U === e.UNSIGNED_SHORT && (z = e.R16UI), U === e.UNSIGNED_INT && (z = e.R32UI), U === e.BYTE && (z = e.R8I), U === e.SHORT && (z = e.R16I), U === e.INT && (z = e.R32I)), x === e.RG && (U === e.FLOAT && (z = e.RG32F), U === e.HALF_FLOAT && (z = e.RG16F), U === e.UNSIGNED_BYTE && (z = e.RG8), U === e.UNSIGNED_SHORT && fe && (z = fe.RG16_EXT), U === e.SHORT && fe && (z = fe.RG16_SNORM_EXT)), x === e.RG_INTEGER && (U === e.UNSIGNED_BYTE && (z = e.RG8UI), U === e.UNSIGNED_SHORT && (z = e.RG16UI), U === e.UNSIGNED_INT && (z = e.RG32UI), U === e.BYTE && (z = e.RG8I), U === e.SHORT && (z = e.RG16I), U === e.INT && (z = e.RG32I)), x === e.RGB_INTEGER && (U === e.UNSIGNED_BYTE && (z = e.RGB8UI), U === e.UNSIGNED_SHORT && (z = e.RGB16UI), U === e.UNSIGNED_INT && (z = e.RGB32UI), U === e.BYTE && (z = e.RGB8I), U === e.SHORT && (z = e.RGB16I), U === e.INT && (z = e.RGB32I)), x === e.RGBA_INTEGER && (U === e.UNSIGNED_BYTE && (z = e.RGBA8UI), U === e.UNSIGNED_SHORT && (z = e.RGBA16UI), U === e.UNSIGNED_INT && (z = e.RGBA32UI), U === e.BYTE && (z = e.RGBA8I), U === e.SHORT && (z = e.RGBA16I), U === e.INT && (z = e.RGBA32I)), x === e.RGB && (U === e.UNSIGNED_SHORT && fe && (z = fe.RGB16_EXT), U === e.SHORT && fe && (z = fe.RGB16_SNORM_EXT), U === e.UNSIGNED_INT_5_9_9_9_REV && (z = e.RGB9_E5), U === e.UNSIGNED_INT_10F_11F_11F_REV && (z = e.R11F_G11F_B10F)), x === e.RGBA) {
      const ce = oe ? br : $e.getTransfer(te);
      U === e.FLOAT && (z = e.RGBA32F), U === e.HALF_FLOAT && (z = e.RGBA16F), U === e.UNSIGNED_BYTE && (z = ce === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), U === e.UNSIGNED_SHORT && fe && (z = fe.RGBA16_EXT), U === e.SHORT && fe && (z = fe.RGBA16_SNORM_EXT), U === e.UNSIGNED_SHORT_4_4_4_4 && (z = e.RGBA4), U === e.UNSIGNED_SHORT_5_5_5_1 && (z = e.RGB5_A1);
    }
    return (z === e.R16F || z === e.R32F || z === e.RG16F || z === e.RG32F || z === e.RGBA16F || z === e.RGBA32F) && t.get("EXT_color_buffer_float"), z;
  }
  function E(A, x) {
    let U;
    return A ? x === null || x === 1014 || x === 1020 ? U = e.DEPTH24_STENCIL8 : x === 1015 ? U = e.DEPTH32F_STENCIL8 : x === 1012 && (U = e.DEPTH24_STENCIL8, Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === 1014 || x === 1020 ? U = e.DEPTH_COMPONENT24 : x === 1015 ? U = e.DEPTH_COMPONENT32F : x === 1012 && (U = e.DEPTH_COMPONENT16), U;
  }
  function R(A, x) {
    return f(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(x.width, x.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? x.mipmaps.length : 1;
  }
  function w(A) {
    const x = A.target;
    x.removeEventListener("dispose", w), b(x), x.isVideoTexture && u.delete(x), x.isHTMLTexture && d.delete(x);
  }
  function m(A) {
    const x = A.target;
    x.removeEventListener("dispose", m), P(x);
  }
  function b(A) {
    const x = i.get(A);
    if (x.__webglInit === void 0) return;
    const U = A.source, W = p.get(U);
    if (W) {
      const te = W[x.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && V(A), Object.keys(W).length === 0 && p.delete(U);
    }
    i.remove(A);
  }
  function V(A) {
    const x = i.get(A);
    e.deleteTexture(x.__webglTexture);
    const U = A.source, W = p.get(U);
    delete W[x.__cacheKey], a.memory.textures--;
  }
  function P(A) {
    const x = i.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), i.remove(A.depthTexture)), A.isWebGLCubeRenderTarget) for (let W = 0; W < 6; W++) {
      if (Array.isArray(x.__webglFramebuffer[W])) for (let te = 0; te < x.__webglFramebuffer[W].length; te++) e.deleteFramebuffer(x.__webglFramebuffer[W][te]);
      else e.deleteFramebuffer(x.__webglFramebuffer[W]);
      x.__webglDepthbuffer && e.deleteRenderbuffer(x.__webglDepthbuffer[W]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let W = 0; W < x.__webglFramebuffer.length; W++) e.deleteFramebuffer(x.__webglFramebuffer[W]);
      else e.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && e.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && e.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let W = 0; W < x.__webglColorRenderbuffer.length; W++) x.__webglColorRenderbuffer[W] && e.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);
      x.__webglDepthRenderbuffer && e.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const U = A.textures;
    for (let W = 0, te = U.length; W < te; W++) {
      const oe = i.get(U[W]);
      oe.__webglTexture && (e.deleteTexture(oe.__webglTexture), a.memory.textures--), i.remove(U[W]);
    }
    i.remove(A);
  }
  let O = 0;
  function Y() {
    O = 0;
  }
  function N() {
    return O;
  }
  function C(A) {
    O = A;
  }
  function k() {
    const A = O;
    return A >= r.maxTextures && Oe("WebGLTextures: Trying to use " + (A + 1) + " texture units while this GPU supports only " + r.maxTextures), O += 1, A;
  }
  function F(A) {
    const x = [];
    return x.push(A.wrapS), x.push(A.wrapT), x.push(A.wrapR || 0), x.push(A.magFilter), x.push(A.minFilter), x.push(A.anisotropy), x.push(A.internalFormat), x.push(A.format), x.push(A.type), x.push(A.generateMipmaps), x.push(A.premultiplyAlpha), x.push(A.flipY), x.push(A.unpackAlignment), x.push(A.colorSpace), x.join();
  }
  function ee(A, x) {
    const U = i.get(A);
    if (A.isVideoTexture && lt(A), A.isRenderTargetTexture === !1 && A.isExternalTexture !== !0 && A.version > 0 && U.__version !== A.version) {
      const W = A.image;
      if (W === null) Oe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (W.complete === !1) Oe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ce(U, A, x);
        return;
      }
    } else A.isExternalTexture && (U.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D, U.__webglTexture, e.TEXTURE0 + x);
  }
  function X(A, x) {
    const U = i.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && U.__version !== A.version) {
      Ce(U, A, x);
      return;
    } else A.isExternalTexture && (U.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D_ARRAY, U.__webglTexture, e.TEXTURE0 + x);
  }
  function Z(A, x) {
    const U = i.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && U.__version !== A.version) {
      Ce(U, A, x);
      return;
    }
    n.bindTexture(e.TEXTURE_3D, U.__webglTexture, e.TEXTURE0 + x);
  }
  function J(A, x) {
    const U = i.get(A);
    if (A.isCubeDepthTexture !== !0 && A.version > 0 && U.__version !== A.version) {
      Ue(U, A, x);
      return;
    }
    n.bindTexture(e.TEXTURE_CUBE_MAP, U.__webglTexture, e.TEXTURE0 + x);
  }
  const Le = {
    [yr]: e.REPEAT,
    [hn]: e.CLAMP_TO_EDGE,
    [ps]: e.MIRRORED_REPEAT
  }, we = {
    [Pt]: e.NEAREST,
    [_l]: e.NEAREST_MIPMAP_NEAREST,
    [Ml]: e.NEAREST_MIPMAP_LINEAR,
    [Ot]: e.LINEAR,
    [Sl]: e.LINEAR_MIPMAP_NEAREST,
    [Es]: e.LINEAR_MIPMAP_LINEAR
  }, rt = {
    512: e.NEVER,
    519: e.ALWAYS,
    513: e.LESS,
    515: e.LEQUAL,
    514: e.EQUAL,
    518: e.GEQUAL,
    516: e.GREATER,
    517: e.NOTEQUAL
  };
  function Ge(A, x) {
    if (x.type === 1015 && t.has("OES_texture_float_linear") === !1 && (x.magFilter === 1006 || x.magFilter === 1007 || x.magFilter === 1005 || x.magFilter === 1008 || x.minFilter === 1006 || x.minFilter === 1007 || x.minFilter === 1005 || x.minFilter === 1008) && Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(A, e.TEXTURE_WRAP_S, Le[x.wrapS]), e.texParameteri(A, e.TEXTURE_WRAP_T, Le[x.wrapT]), (A === e.TEXTURE_3D || A === e.TEXTURE_2D_ARRAY) && e.texParameteri(A, e.TEXTURE_WRAP_R, Le[x.wrapR]), e.texParameteri(A, e.TEXTURE_MAG_FILTER, we[x.magFilter]), e.texParameteri(A, e.TEXTURE_MIN_FILTER, we[x.minFilter]), x.compareFunction && (e.texParameteri(A, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(A, e.TEXTURE_COMPARE_FUNC, rt[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === 1003 || x.minFilter !== 1005 && x.minFilter !== 1008 || x.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || i.get(x).__currentAnisotropy) {
        const U = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(A, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())), i.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function K(A, x) {
    let U = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, x.addEventListener("dispose", w));
    const W = x.source;
    let te = p.get(W);
    te === void 0 && (te = {}, p.set(W, te));
    const oe = F(x);
    if (oe !== A.__cacheKey) {
      te[oe] === void 0 && (te[oe] = {
        texture: e.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), te[oe].usedTimes++;
      const fe = te[A.__cacheKey];
      fe !== void 0 && (te[A.__cacheKey].usedTimes--, fe.usedTimes === 0 && V(x)), A.__cacheKey = oe, A.__webglTexture = te[oe].texture;
    }
    return U;
  }
  function re(A, x, U) {
    return Math.floor(Math.floor(A / U) / x);
  }
  function ae(A, x, U, W) {
    const oe = A.updateRanges;
    if (oe.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, x.width, x.height, U, W, x.data);
    else {
      oe.sort((Te, se) => Te.start - se.start);
      let fe = 0;
      for (let Te = 1; Te < oe.length; Te++) {
        const se = oe[fe], Ee = oe[Te], Ne = se.start + se.count, ze = re(Ee.start, x.width, 4), je = re(se.start, x.width, 4);
        Ee.start <= Ne + 1 && ze === je && re(Ee.start + Ee.count - 1, x.width, 4) === ze ? se.count = Math.max(se.count, Ee.start + Ee.count - se.start) : (++fe, oe[fe] = Ee);
      }
      oe.length = fe + 1;
      const z = n.getParameter(e.UNPACK_ROW_LENGTH), ce = n.getParameter(e.UNPACK_SKIP_PIXELS), Se = n.getParameter(e.UNPACK_SKIP_ROWS);
      n.pixelStorei(e.UNPACK_ROW_LENGTH, x.width);
      for (let Te = 0, se = oe.length; Te < se; Te++) {
        const Ee = oe[Te], Ne = Math.floor(Ee.start / 4), ze = Math.ceil(Ee.count / 4), je = Ne % x.width, B = Math.floor(Ne / x.width), $ = ze, ne = 1;
        n.pixelStorei(e.UNPACK_SKIP_PIXELS, je), n.pixelStorei(e.UNPACK_SKIP_ROWS, B), n.texSubImage2D(e.TEXTURE_2D, 0, je, B, $, ne, U, W, x.data);
      }
      A.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, z), n.pixelStorei(e.UNPACK_SKIP_PIXELS, ce), n.pixelStorei(e.UNPACK_SKIP_ROWS, Se);
    }
  }
  function Ce(A, x, U) {
    let W = e.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (W = e.TEXTURE_2D_ARRAY), x.isData3DTexture && (W = e.TEXTURE_3D);
    const te = K(A, x), oe = x.source;
    n.bindTexture(W, A.__webglTexture, e.TEXTURE0 + U);
    const fe = i.get(oe);
    if (oe.version !== fe.__version || te === !0) {
      if (n.activeTexture(e.TEXTURE0 + U), !(typeof ImageBitmap < "u" && x.image instanceof ImageBitmap)) {
        const $ = $e.getPrimaries($e.workingColorSpace), ne = x.colorSpace === "" ? null : $e.getPrimaries(x.colorSpace), Me = x.colorSpace === "" || $ === ne ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, x.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, Me);
      }
      n.pixelStorei(e.UNPACK_ALIGNMENT, x.unpackAlignment);
      let z = g(x.image, !1, r.maxTextureSize);
      z = Qe(x, z);
      const ce = s.convert(x.format, x.colorSpace), Se = s.convert(x.type);
      let Te = v(x.internalFormat, ce, Se, x.normalized, x.colorSpace, x.isVideoTexture);
      Ge(W, x);
      let se;
      const Ee = x.mipmaps, Ne = x.isVideoTexture !== !0, ze = fe.__version === void 0 || te === !0, je = oe.dataReady, B = R(x, z);
      if (x.isDepthTexture)
        Te = E(x.format === no, x.type), ze && (Ne ? n.texStorage2D(e.TEXTURE_2D, 1, Te, z.width, z.height) : n.texImage2D(e.TEXTURE_2D, 0, Te, z.width, z.height, 0, ce, Se, null));
      else if (x.isDataTexture) if (Ee.length > 0) {
        Ne && ze && n.texStorage2D(e.TEXTURE_2D, B, Te, Ee[0].width, Ee[0].height);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, Se, se.data) : n.texImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, ce, Se, se.data);
        x.generateMipmaps = !1;
      } else Ne ? (ze && n.texStorage2D(e.TEXTURE_2D, B, Te, z.width, z.height), je && ae(x, z, ce, Se)) : n.texImage2D(e.TEXTURE_2D, 0, Te, z.width, z.height, 0, ce, Se, z.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        Ne && ze && n.texStorage3D(e.TEXTURE_2D_ARRAY, B, Te, Ee[0].width, Ee[0].height, z.depth);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          if (se = Ee[$], x.format !== 1023) if (ce !== null) if (Ne) {
            if (je) if (x.layerUpdates.size > 0) {
              const Me = Ra(se.width, se.height, x.format, x.type);
              for (const be of x.layerUpdates) {
                const ie = se.data.subarray(be * Me / se.data.BYTES_PER_ELEMENT, (be + 1) * Me / se.data.BYTES_PER_ELEMENT);
                n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, be, se.width, se.height, 1, ce, ie);
              }
            } else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, z.depth, ce, se.data);
          } else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, $, Te, se.width, se.height, z.depth, 0, se.data, 0, 0);
          else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else Ne ? je && n.texSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, z.depth, ce, Se, se.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, $, Te, se.width, se.height, z.depth, 0, ce, Se, se.data);
        x.layerUpdates.size > 0 && x.clearLayerUpdates();
      } else {
        Ne && ze && n.texStorage2D(e.TEXTURE_2D, B, Te, Ee[0].width, Ee[0].height);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], x.format !== 1023 ? ce !== null ? Ne ? je && n.compressedTexSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, se.data) : n.compressedTexImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, se.data) : Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, Se, se.data) : n.texImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, ce, Se, se.data);
      }
      else if (x.isDataArrayTexture) if (Ne) {
        if (ze && n.texStorage3D(e.TEXTURE_2D_ARRAY, B, Te, z.width, z.height, z.depth), je) if (x.layerUpdates.size > 0) {
          const $ = Ra(z.width, z.height, x.format, x.type);
          for (const ne of x.layerUpdates) {
            const Me = z.data.subarray(ne * $ / z.data.BYTES_PER_ELEMENT, (ne + 1) * $ / z.data.BYTES_PER_ELEMENT);
            n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, ne, z.width, z.height, 1, ce, Se, Me);
          }
          x.clearLayerUpdates();
        } else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, z.width, z.height, z.depth, ce, Se, z.data);
      } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, Te, z.width, z.height, z.depth, 0, ce, Se, z.data);
      else if (x.isData3DTexture) Ne ? (ze && n.texStorage3D(e.TEXTURE_3D, B, Te, z.width, z.height, z.depth), je && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, z.width, z.height, z.depth, ce, Se, z.data)) : n.texImage3D(e.TEXTURE_3D, 0, Te, z.width, z.height, z.depth, 0, ce, Se, z.data);
      else if (x.isFramebufferTexture) {
        if (ze) if (Ne) n.texStorage2D(e.TEXTURE_2D, B, Te, z.width, z.height);
        else {
          let $ = z.width, ne = z.height;
          for (let Me = 0; Me < B; Me++)
            n.texImage2D(e.TEXTURE_2D, Me, Te, $, ne, 0, ce, Se, null), $ >>= 1, ne >>= 1;
        }
      } else if (x.isHTMLTexture) {
        if ("texElementImage2D" in e) {
          const $ = e.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), z.parentNode !== $) {
            $.appendChild(z), d.add(x), $.onpaint = (ne) => {
              const Me = ne.changedElements;
              for (const be of d) Me.includes(be.image) && (be.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, z);
          else {
            const Me = e.RGBA, be = e.RGBA, ie = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, Me, be, ie, z);
          }
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
      } else if (Ee.length > 0) {
        if (Ne && ze) {
          const $ = Ke(Ee[0]);
          n.texStorage2D(e.TEXTURE_2D, B, Te, $.width, $.height);
        }
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, ce, Se, se) : n.texImage2D(e.TEXTURE_2D, $, Te, ce, Se, se);
        x.generateMipmaps = !1;
      } else if (Ne) {
        if (ze) {
          const $ = Ke(z);
          n.texStorage2D(e.TEXTURE_2D, B, Te, $.width, $.height);
        }
        je && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, ce, Se, z);
      } else n.texImage2D(e.TEXTURE_2D, 0, Te, ce, Se, z);
      f(x) && T(W), fe.__version = oe.version, x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function Ue(A, x, U) {
    if (x.image.length !== 6) return;
    const W = K(A, x), te = x.source;
    n.bindTexture(e.TEXTURE_CUBE_MAP, A.__webglTexture, e.TEXTURE0 + U);
    const oe = i.get(te);
    if (te.version !== oe.__version || W === !0) {
      n.activeTexture(e.TEXTURE0 + U);
      const fe = $e.getPrimaries($e.workingColorSpace), z = x.colorSpace === "" ? null : $e.getPrimaries(x.colorSpace), ce = x.colorSpace === "" || fe === z ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, x.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, x.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Se = x.isCompressedTexture || x.image[0].isCompressedTexture, Te = x.image[0] && x.image[0].isDataTexture, se = [];
      for (let ie = 0; ie < 6; ie++)
        !Se && !Te ? se[ie] = g(x.image[ie], !0, r.maxCubemapSize) : se[ie] = Te ? x.image[ie].image : x.image[ie], se[ie] = Qe(x, se[ie]);
      const Ee = se[0], Ne = s.convert(x.format, x.colorSpace), ze = s.convert(x.type), je = v(x.internalFormat, Ne, ze, x.normalized, x.colorSpace), B = x.isVideoTexture !== !0, $ = oe.__version === void 0 || W === !0, ne = te.dataReady;
      let Me = R(x, Ee);
      Ge(e.TEXTURE_CUBE_MAP, x);
      let be;
      if (Se) {
        B && $ && n.texStorage2D(e.TEXTURE_CUBE_MAP, Me, je, Ee.width, Ee.height);
        for (let ie = 0; ie < 6; ie++) {
          be = se[ie].mipmaps;
          for (let ge = 0; ge < be.length; ge++) {
            const Fe = be[ge];
            x.format !== 1023 ? Ne !== null ? B ? ne && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, 0, 0, Fe.width, Fe.height, Ne, Fe.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, je, Fe.width, Fe.height, 0, Fe.data) : Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, 0, 0, Fe.width, Fe.height, Ne, ze, Fe.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, je, Fe.width, Fe.height, 0, Ne, ze, Fe.data);
          }
        }
      } else {
        if (be = x.mipmaps, B && $) {
          be.length > 0 && Me++;
          const ie = Ke(se[0]);
          n.texStorage2D(e.TEXTURE_CUBE_MAP, Me, je, ie.width, ie.height);
        }
        for (let ie = 0; ie < 6; ie++) if (Te) {
          B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, 0, 0, se[ie].width, se[ie].height, Ne, ze, se[ie].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, je, se[ie].width, se[ie].height, 0, Ne, ze, se[ie].data);
          for (let ge = 0; ge < be.length; ge++) {
            const Fe = be[ge].image[ie].image;
            B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, 0, 0, Fe.width, Fe.height, Ne, ze, Fe.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, je, Fe.width, Fe.height, 0, Ne, ze, Fe.data);
          }
        } else {
          B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, 0, 0, Ne, ze, se[ie]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, je, Ne, ze, se[ie]);
          for (let ge = 0; ge < be.length; ge++) {
            const Fe = be[ge];
            B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, 0, 0, Ne, ze, Fe.image[ie]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, je, Ne, ze, Fe.image[ie]);
          }
        }
      }
      f(x) && T(e.TEXTURE_CUBE_MAP), oe.__version = te.version, x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function ue(A, x, U, W, te, oe) {
    const fe = s.convert(U.format, U.colorSpace), z = s.convert(U.type), ce = v(U.internalFormat, fe, z, U.normalized, U.colorSpace), Se = i.get(x), Te = i.get(U);
    if (Te.__renderTarget = x, !Se.__hasExternalTextures) {
      const se = Math.max(1, x.width >> oe), Ee = Math.max(1, x.height >> oe);
      te === e.TEXTURE_3D || te === e.TEXTURE_2D_ARRAY ? n.texImage3D(te, oe, ce, se, Ee, x.depth, 0, fe, z, null) : n.texImage2D(te, oe, ce, se, Ee, 0, fe, z, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, A), L(x) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, W, te, Te.__webglTexture, 0, He(x)) : (te === e.TEXTURE_2D || te >= e.TEXTURE_CUBE_MAP_POSITIVE_X && te <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, W, te, Te.__webglTexture, oe), n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function Ye(A, x, U) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, A), x.depthBuffer) {
      const W = x.depthTexture, te = W && W.isDepthTexture ? W.type : null, oe = E(x.stencilBuffer, te), fe = x.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      L(x) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, He(x), oe, x.width, x.height) : U ? e.renderbufferStorageMultisample(e.RENDERBUFFER, He(x), oe, x.width, x.height) : e.renderbufferStorage(e.RENDERBUFFER, oe, x.width, x.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, fe, e.RENDERBUFFER, A);
    } else {
      const W = x.textures;
      for (let te = 0; te < W.length; te++) {
        const oe = W[te], fe = s.convert(oe.format, oe.colorSpace), z = s.convert(oe.type), ce = v(oe.internalFormat, fe, z, oe.normalized, oe.colorSpace);
        L(x) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, He(x), ce, x.width, x.height) : U ? e.renderbufferStorageMultisample(e.RENDERBUFFER, He(x), ce, x.width, x.height) : e.renderbufferStorage(e.RENDERBUFFER, ce, x.width, x.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function j(A, x, U) {
    const W = x.isWebGLCubeRenderTarget === !0;
    if (n.bindFramebuffer(e.FRAMEBUFFER, A), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const te = i.get(x.depthTexture);
    if (te.__renderTarget = x, (!te.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), W) {
      if (te.__webglInit === void 0 && (te.__webglInit = !0, x.depthTexture.addEventListener("dispose", w)), te.__webglTexture === void 0) {
        te.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, te.__webglTexture), Ge(e.TEXTURE_CUBE_MAP, x.depthTexture);
        const Se = s.convert(x.depthTexture.format), Te = s.convert(x.depthTexture.type);
        let se;
        x.depthTexture.format === 1026 ? se = e.DEPTH_COMPONENT24 : x.depthTexture.format === 1027 && (se = e.DEPTH24_STENCIL8);
        for (let Ee = 0; Ee < 6; Ee++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + Ee, 0, se, x.width, x.height, 0, Se, Te, null);
      }
    } else ee(x.depthTexture, 0);
    const oe = te.__webglTexture, fe = He(x), z = W ? e.TEXTURE_CUBE_MAP_POSITIVE_X + U : e.TEXTURE_2D, ce = x.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
    if (x.depthTexture.format === 1026) L(x) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ce, z, oe, 0, fe) : e.framebufferTexture2D(e.FRAMEBUFFER, ce, z, oe, 0);
    else if (x.depthTexture.format === 1027) L(x) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ce, z, oe, 0, fe) : e.framebufferTexture2D(e.FRAMEBUFFER, ce, z, oe, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Q(A) {
    const x = i.get(A), U = A.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== A.depthTexture) {
      const W = A.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), W) {
        const te = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, W.removeEventListener("dispose", te);
        };
        W.addEventListener("dispose", te), x.__depthDisposeCallback = te;
      }
      x.__boundDepthTexture = W;
    }
    if (A.depthTexture && !x.__autoAllocateDepthBuffer) if (U) for (let W = 0; W < 6; W++) j(x.__webglFramebuffer[W], A, W);
    else {
      const W = A.texture.mipmaps;
      W && W.length > 0 ? j(x.__webglFramebuffer[0], A, 0) : j(x.__webglFramebuffer, A, 0);
    }
    else if (U) {
      x.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++)
        if (n.bindFramebuffer(e.FRAMEBUFFER, x.__webglFramebuffer[W]), x.__webglDepthbuffer[W] === void 0)
          x.__webglDepthbuffer[W] = e.createRenderbuffer(), Ye(x.__webglDepthbuffer[W], A, !1);
        else {
          const te = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = x.__webglDepthbuffer[W];
          e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, te, e.RENDERBUFFER, oe);
        }
    } else {
      const W = A.texture.mipmaps;
      if (W && W.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, x.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
        x.__webglDepthbuffer = e.createRenderbuffer(), Ye(x.__webglDepthbuffer, A, !1);
      else {
        const te = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = x.__webglDepthbuffer;
        e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, te, e.RENDERBUFFER, oe);
      }
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function le(A, x, U) {
    const W = i.get(A);
    x !== void 0 && ue(W.__webglFramebuffer, A, A.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), U !== void 0 && Q(A);
  }
  function ve(A) {
    const x = A.texture, U = i.get(A), W = i.get(x);
    A.addEventListener("dispose", m);
    const te = A.textures, oe = A.isWebGLCubeRenderTarget === !0, fe = te.length > 1;
    if (fe || (W.__webglTexture === void 0 && (W.__webglTexture = e.createTexture()), W.__version = x.version, a.memory.textures++), oe) {
      U.__webglFramebuffer = [];
      for (let z = 0; z < 6; z++) if (x.mipmaps && x.mipmaps.length > 0) {
        U.__webglFramebuffer[z] = [];
        for (let ce = 0; ce < x.mipmaps.length; ce++) U.__webglFramebuffer[z][ce] = e.createFramebuffer();
      } else U.__webglFramebuffer[z] = e.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let z = 0; z < x.mipmaps.length; z++) U.__webglFramebuffer[z] = e.createFramebuffer();
      } else U.__webglFramebuffer = e.createFramebuffer();
      if (fe) for (let z = 0, ce = te.length; z < ce; z++) {
        const Se = i.get(te[z]);
        Se.__webglTexture === void 0 && (Se.__webglTexture = e.createTexture(), a.memory.textures++);
      }
      if (A.samples > 0 && L(A) === !1) {
        U.__webglMultisampledFramebuffer = e.createFramebuffer(), U.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let z = 0; z < te.length; z++) {
          const ce = te[z];
          U.__webglColorRenderbuffer[z] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, U.__webglColorRenderbuffer[z]);
          const Se = s.convert(ce.format, ce.colorSpace), Te = s.convert(ce.type), se = v(ce.internalFormat, Se, Te, ce.normalized, ce.colorSpace, A.isXRRenderTarget === !0), Ee = He(A);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, Ee, se, A.width, A.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + z, e.RENDERBUFFER, U.__webglColorRenderbuffer[z]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), A.depthBuffer && (U.__webglDepthRenderbuffer = e.createRenderbuffer(), Ye(U.__webglDepthRenderbuffer, A, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (oe) {
      n.bindTexture(e.TEXTURE_CUBE_MAP, W.__webglTexture), Ge(e.TEXTURE_CUBE_MAP, x);
      for (let z = 0; z < 6; z++) if (x.mipmaps && x.mipmaps.length > 0) for (let ce = 0; ce < x.mipmaps.length; ce++) ue(U.__webglFramebuffer[z][ce], A, x, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + z, ce);
      else ue(U.__webglFramebuffer[z], A, x, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0);
      f(x) && T(e.TEXTURE_CUBE_MAP), n.unbindTexture();
    } else if (fe) {
      for (let z = 0, ce = te.length; z < ce; z++) {
        const Se = te[z], Te = i.get(Se);
        let se = e.TEXTURE_2D;
        (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (se = A.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(se, Te.__webglTexture), Ge(se, Se), ue(U.__webglFramebuffer, A, Se, e.COLOR_ATTACHMENT0 + z, se, 0), f(Se) && T(se);
      }
      n.unbindTexture();
    } else {
      let z = e.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (z = A.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(z, W.__webglTexture), Ge(z, x), x.mipmaps && x.mipmaps.length > 0) for (let ce = 0; ce < x.mipmaps.length; ce++) ue(U.__webglFramebuffer[ce], A, x, e.COLOR_ATTACHMENT0, z, ce);
      else ue(U.__webglFramebuffer, A, x, e.COLOR_ATTACHMENT0, z, 0);
      f(x) && T(z), n.unbindTexture();
    }
    A.depthBuffer && Q(A);
  }
  function _e(A) {
    const x = A.textures;
    for (let U = 0, W = x.length; U < W; U++) {
      const te = x[U];
      if (f(te)) {
        const oe = S(A), fe = i.get(te).__webglTexture;
        n.bindTexture(oe, fe), T(oe), n.unbindTexture();
      }
    }
  }
  const Re = [], Ie = [];
  function Ve(A) {
    if (A.samples > 0) {
      if (L(A) === !1) {
        const x = A.textures, U = A.width, W = A.height;
        let te = e.COLOR_BUFFER_BIT;
        const oe = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, fe = i.get(A), z = x.length > 1;
        if (z) for (let Se = 0; Se < x.length; Se++)
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.TEXTURE_2D, null, 0);
        n.bindFramebuffer(e.READ_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
        const ce = A.texture.mipmaps;
        ce && ce.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer);
        for (let Se = 0; Se < x.length; Se++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (te |= e.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (te |= e.STENCIL_BUFFER_BIT)), z) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Se]);
            const Te = i.get(x[Se]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, Te, 0);
          }
          e.blitFramebuffer(0, 0, U, W, 0, 0, U, W, te, e.NEAREST), l === !0 && (Re.length = 0, Ie.length = 0, Re.push(e.COLOR_ATTACHMENT0 + Se), A.depthBuffer && A.storeMultisampledDepthBuffer === !1 && (Re.push(oe), Ie.push(oe), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Ie)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Re));
        }
        if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), z) for (let Se = 0; Se < x.length; Se++) {
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Se]);
          const Te = i.get(x[Se]).__webglTexture;
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.TEXTURE_2D, Te, 0);
        }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.storeMultisampledDepthBuffer === !1 && l) {
        const x = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function He(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function L(A) {
    const x = i.get(A);
    return A.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function lt(A) {
    const x = a.render.frame;
    u.get(A) !== x && (u.set(A, x), A.update());
  }
  function Qe(A, x) {
    const U = A.colorSpace, W = A.format, te = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || U !== "srgb-linear" && U !== "" && ($e.getTransfer(U) === "srgb" ? (W !== 1023 || te !== 1009) && Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Be("WebGLTextures: Unsupported texture color space:", U)), x;
  }
  function Ke(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = Y, this.getTextureUnits = N, this.setTextureUnits = C, this.setTexture2D = ee, this.setTexture2DArray = X, this.setTexture3D = Z, this.setTextureCube = J, this.rebindTextures = le, this.setupRenderTarget = ve, this.updateRenderTargetMipmap = _e, this.updateMultisampleRenderTarget = Ve, this.setupDepthRenderbuffer = Q, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = L, this.isReversedDepthBuffer = function() {
    return n.buffers.depth.getReversed();
  };
}
function Cd(e, t) {
  function n(i, r = "") {
    let s;
    const a = $e.getTransfer(r);
    if (i === 1009) return e.UNSIGNED_BYTE;
    if (i === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
    if (i === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
    if (i === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
    if (i === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === 1010) return e.BYTE;
    if (i === 1011) return e.SHORT;
    if (i === 1012) return e.UNSIGNED_SHORT;
    if (i === 1013) return e.INT;
    if (i === 1014) return e.UNSIGNED_INT;
    if (i === 1015) return e.FLOAT;
    if (i === 1016) return e.HALF_FLOAT;
    if (i === 1021) return e.ALPHA;
    if (i === 1022) return e.RGB;
    if (i === 1023) return e.RGBA;
    if (i === 1026) return e.DEPTH_COMPONENT;
    if (i === 1027) return e.DEPTH_STENCIL;
    if (i === 1028) return e.RED;
    if (i === 1029) return e.RED_INTEGER;
    if (i === 1030) return e.RG;
    if (i === 1031) return e.RG_INTEGER;
    if (i === 1033) return e.RGBA_INTEGER;
    if (i === 33776 || i === 33777 || i === 33778 || i === 33779) if (a === "srgb")
      if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
        if (i === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (i === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (i === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (i === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
    else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (i === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === 35840 || i === 35841 || i === 35842 || i === 35843)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (i === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === 36196 || i === 37492 || i === 37496 || i === 37488 || i === 37489 || i === 37490 || i === 37491)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (i === 36196 || i === 37492) return a === "srgb" ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === 37496) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (i === 37488) return s.COMPRESSED_R11_EAC;
        if (i === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (i === 37490) return s.COMPRESSED_RG11_EAC;
        if (i === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (i === 37808 || i === 37809 || i === 37810 || i === 37811 || i === 37812 || i === 37813 || i === 37814 || i === 37815 || i === 37816 || i === 37817 || i === 37818 || i === 37819 || i === 37820 || i === 37821)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (i === 37808) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === 37809) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === 37810) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === 37811) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === 37812) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === 37813) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === 37814) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === 37815) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === 37816) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === 37817) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === 37818) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === 37819) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === 37820) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === 37821) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === 36492 || i === 36494 || i === 36495)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (i === 36492) return a === "srgb" ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === 36283 || i === 36284 || i === 36285 || i === 36286)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (i === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === 1020 ? e.UNSIGNED_INT_24_8 : e[i] !== void 0 ? e[i] : null;
  }
  return { convert: n };
}
var Pd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Ld = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, Id = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Eo(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new en({
        vertexShader: Pd,
        fragmentShader: Ld,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new ut(new In(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, Nd = class extends Nn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, u = null, d = null, h = null, p = null;
    const _ = typeof XRWebGLBinding < "u", M = new Id(), g = {}, f = t.getContextAttributes();
    let T = null, S = null;
    const v = [], E = [], R = new de();
    let w = null, m = null;
    const b = new Vt();
    b.viewport = new gt();
    const V = new Vt();
    V.viewport = new gt();
    const P = [b, V], O = new uu();
    let Y = null, N = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(K) {
      let re = v[K];
      return re === void 0 && (re = new Gr(), v[K] = re), re.getTargetRaySpace();
    }, this.getControllerGrip = function(K) {
      let re = v[K];
      return re === void 0 && (re = new Gr(), v[K] = re), re.getGripSpace();
    }, this.getHand = function(K) {
      let re = v[K];
      return re === void 0 && (re = new Gr(), v[K] = re), re.getHandSpace();
    };
    function C(K) {
      const re = E.indexOf(K.inputSource);
      if (re === -1) return;
      const ae = v[re];
      ae !== void 0 && (ae.update(K.inputSource, K.frame, l || s), ae.dispatchEvent({
        type: K.type,
        data: K.inputSource
      }));
    }
    function k() {
      i.removeEventListener("select", C), i.removeEventListener("selectstart", C), i.removeEventListener("selectend", C), i.removeEventListener("squeeze", C), i.removeEventListener("squeezestart", C), i.removeEventListener("squeezeend", C), i.removeEventListener("end", k), i.removeEventListener("inputsourceschange", F);
      for (let K = 0; K < v.length; K++) {
        const re = E[K];
        re !== null && (E[K] = null, v[K].disconnect(re));
      }
      Y = null, N = null, M.reset();
      for (const K in g) delete g[K];
      if (e.setRenderTarget(T), h = null, d = null, u = null, i = null, S = null, Ge.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(R.width, R.height, !1), m !== null) {
        const K = m.camera;
        K.fov = m.fov, K.zoom = m.zoom, K.updateProjectionMatrix(), m = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(K) {
      r = K, n.isPresenting === !0 && Oe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(K) {
      a = K, n.isPresenting === !0 && Oe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(K) {
      l = K;
    }, this.getBaseLayer = function() {
      return d !== null ? d : h;
    }, this.getBinding = function() {
      return u === null && _ && (u = new XRWebGLBinding(i, t)), u;
    }, this.getFrame = function() {
      return p;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(K) {
      if (i = K, i !== null) {
        if (T = e.getRenderTarget(), i.addEventListener("select", C), i.addEventListener("selectstart", C), i.addEventListener("selectend", C), i.addEventListener("squeeze", C), i.addEventListener("squeezestart", C), i.addEventListener("squeezeend", C), i.addEventListener("end", k), i.addEventListener("inputsourceschange", F), f.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(R), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let re = null, ae = null, Ce = null;
          f.depth && (Ce = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, re = f.stencil ? no : Ui, ae = f.stencil ? to : Cn);
          const Ue = {
            colorFormat: t.RGBA8,
            depthFormat: Ce,
            scaleFactor: r
          };
          u = this.getBinding(), d = u.createProjectionLayer(Ue), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), S = new qt(d.textureWidth, d.textureHeight, {
            format: Ni,
            type: Sn,
            depthTexture: new Oi(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, re),
            stencilBuffer: f.stencil,
            colorSpace: e.outputColorSpace,
            samples: f.antialias ? 4 : 0,
            resolveDepthBuffer: d.ignoreDepthValues === !1,
            resolveStencilBuffer: d.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
          });
        } else {
          const re = {
            antialias: f.antialias,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: r
          };
          h = new XRWebGLLayer(i, t, re), i.updateRenderState({ baseLayer: h }), e.setPixelRatio(1), e.setSize(h.framebufferWidth, h.framebufferHeight, !1), S = new qt(h.framebufferWidth, h.framebufferHeight, {
            format: Ni,
            type: Sn,
            colorSpace: e.outputColorSpace,
            stencilBuffer: f.stencil,
            resolveDepthBuffer: h.ignoreDepthValues === !1,
            resolveStencilBuffer: h.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: h.ignoreDepthValues === !1
          });
        }
        S.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), Ge.setContext(i), Ge.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    function F(K) {
      for (let re = 0; re < K.removed.length; re++) {
        const ae = K.removed[re], Ce = E.indexOf(ae);
        Ce >= 0 && (E[Ce] = null, v[Ce].disconnect(ae));
      }
      for (let re = 0; re < K.added.length; re++) {
        const ae = K.added[re];
        let Ce = E.indexOf(ae);
        if (Ce === -1) {
          for (let ue = 0; ue < v.length; ue++) if (ue >= E.length) {
            E.push(ae), Ce = ue;
            break;
          } else if (E[ue] === null) {
            E[ue] = ae, Ce = ue;
            break;
          }
          if (Ce === -1) break;
        }
        const Ue = v[Ce];
        Ue && Ue.connect(ae);
      }
    }
    const ee = new I(), X = new I();
    function Z(K, re, ae) {
      ee.setFromMatrixPosition(re.matrixWorld), X.setFromMatrixPosition(ae.matrixWorld);
      const Ce = ee.distanceTo(X), Ue = re.projectionMatrix.elements, ue = ae.projectionMatrix.elements, Ye = Ue[14] / (Ue[10] - 1), j = Ue[14] / (Ue[10] + 1), Q = (Ue[9] + 1) / Ue[5], le = (Ue[9] - 1) / Ue[5], ve = (Ue[8] - 1) / Ue[0], _e = (ue[8] + 1) / ue[0], Re = Ye * ve, Ie = Ye * _e, Ve = Ce / (-ve + _e), He = Ve * -ve;
      if (re.matrixWorld.decompose(K.position, K.quaternion, K.scale), K.translateX(He), K.translateZ(Ve), K.matrixWorld.compose(K.position, K.quaternion, K.scale), K.matrixWorldInverse.copy(K.matrixWorld).invert(), Ue[10] === -1)
        K.projectionMatrix.copy(re.projectionMatrix), K.projectionMatrixInverse.copy(re.projectionMatrixInverse);
      else {
        const L = Ye + Ve, lt = j + Ve, Qe = Re - He, Ke = Ie + (Ce - He), A = Q * j / lt * L, x = le * j / lt * L;
        K.projectionMatrix.makePerspective(Qe, Ke, A, x, L, lt), K.projectionMatrixInverse.copy(K.projectionMatrix).invert();
      }
    }
    function J(K, re) {
      re === null ? K.matrixWorld.copy(K.matrix) : K.matrixWorld.multiplyMatrices(re.matrixWorld, K.matrix), K.matrixWorldInverse.copy(K.matrixWorld).invert();
    }
    this.updateCamera = function(K) {
      if (i === null) return;
      let re = K.near, ae = K.far;
      M.texture !== null && (M.depthNear > 0 && (re = M.depthNear), M.depthFar > 0 && (ae = M.depthFar)), O.near = V.near = b.near = re, O.far = V.far = b.far = ae, (Y !== O.near || N !== O.far) && (i.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), Y = O.near, N = O.far), O.layers.mask = K.layers.mask | 6, b.layers.mask = O.layers.mask & -5, V.layers.mask = O.layers.mask & -3;
      const Ce = K.parent, Ue = O.cameras;
      J(O, Ce);
      for (let ue = 0; ue < Ue.length; ue++) J(Ue[ue], Ce);
      Ue.length === 2 ? Z(O, b, V) : O.projectionMatrix.copy(b.projectionMatrix), m === null && K.isPerspectiveCamera && (m = {
        camera: K,
        fov: K.fov,
        zoom: K.zoom
      }), Le(K, O, Ce);
    };
    function Le(K, re, ae) {
      ae === null ? K.matrix.copy(re.matrixWorld) : (K.matrix.copy(ae.matrixWorld), K.matrix.invert(), K.matrix.multiply(re.matrixWorld)), K.matrix.decompose(K.position, K.quaternion, K.scale), K.updateMatrixWorld(!0), K.projectionMatrix.copy(re.projectionMatrix), K.projectionMatrixInverse.copy(re.projectionMatrixInverse), K.isPerspectiveCamera && (K.fov = Di * 2 * Math.atan(1 / K.projectionMatrix.elements[5]), K.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(d === null && h === null))
        return o;
    }, this.setFoveation = function(K) {
      o = K, d !== null && (d.fixedFoveation = K), h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = K);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(O);
    }, this.getCameraTexture = function(K) {
      return g[K];
    };
    let we = null;
    function rt(K, re) {
      if (c = re.getViewerPose(l || s), p = re, c !== null) {
        const ae = c.views;
        h !== null && (e.setRenderTargetFramebuffer(S, h.framebuffer), e.setRenderTarget(S));
        let Ce = !1;
        ae.length !== O.cameras.length && (O.cameras.length = 0, Ce = !0);
        for (let ue = 0; ue < ae.length; ue++) {
          const Ye = ae[ue];
          let j = null;
          if (h !== null) j = h.getViewport(Ye);
          else {
            const le = u.getViewSubImage(d, Ye);
            j = le.viewport, ue === 0 && (e.setRenderTargetTextures(S, le.colorTexture, le.depthStencilTexture), e.setRenderTarget(S));
          }
          let Q = P[ue];
          Q === void 0 && (Q = new Vt(), Q.layers.enable(ue), Q.viewport = new gt(), P[ue] = Q), Q.matrix.fromArray(Ye.transform.matrix), Q.matrix.decompose(Q.position, Q.quaternion, Q.scale), Q.projectionMatrix.fromArray(Ye.projectionMatrix), Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(), Q.viewport.set(j.x, j.y, j.width, j.height), ue === 0 && (O.matrix.copy(Q.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Ce === !0 && O.cameras.push(Q);
        }
        const Ue = i.enabledFeatures;
        if (Ue && Ue.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && _) {
          u = n.getBinding();
          const ue = u.getDepthInformation(ae[0]);
          ue && ue.isValid && ue.texture && M.init(ue, i.renderState);
        }
        if (Ue && Ue.includes("camera-access") && _) {
          e.state.unbindTexture(), u = n.getBinding();
          for (let ue = 0; ue < ae.length; ue++) {
            const Ye = ae[ue].camera;
            if (Ye) {
              let j = g[Ye];
              j || (j = new Eo(), g[Ye] = j);
              const Q = u.getCameraImage(Ye);
              j.sourceTexture = Q;
            }
          }
        }
      }
      for (let ae = 0; ae < v.length; ae++) {
        const Ce = E[ae], Ue = v[ae];
        Ce !== null && Ue !== void 0 && Ue.update(Ce, re, l || s);
      }
      we && we(K, re), re.detectedPlanes && n.dispatchEvent({
        type: "planesdetected",
        data: re
      }), p = null;
    }
    const Ge = new nl();
    Ge.setAnimationLoop(rt), this.setAnimationLoop = function(K) {
      we = K;
    }, this.dispose = function() {
    };
  }
}, Ud = /* @__PURE__ */ new ht(), cl = /* @__PURE__ */ new ke();
cl.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Dd(e, t) {
  function n(g, f) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), f.value.copy(g.matrix);
  }
  function i(g, f) {
    f.color.getRGB(g.fogColor.value, Jo(e)), f.isFog ? (g.fogNear.value = f.near, g.fogFar.value = f.far) : f.isFogExp2 && (g.fogDensity.value = f.density);
  }
  function r(g, f, T, S, v) {
    f.isNodeMaterial ? f.uniformsNeedUpdate = !1 : f.isMeshBasicMaterial ? s(g, f) : f.isMeshLambertMaterial ? (s(g, f), f.envMap && (g.envMapIntensity.value = f.envMapIntensity)) : f.isMeshToonMaterial ? (s(g, f), d(g, f)) : f.isMeshPhongMaterial ? (s(g, f), u(g, f), f.envMap && (g.envMapIntensity.value = f.envMapIntensity)) : f.isMeshStandardMaterial ? (s(g, f), h(g, f), f.isMeshPhysicalMaterial && p(g, f, v)) : f.isMeshMatcapMaterial ? (s(g, f), _(g, f)) : f.isMeshDepthMaterial ? s(g, f) : f.isMeshDistanceMaterial ? (s(g, f), M(g, f)) : f.isMeshNormalMaterial ? s(g, f) : f.isLineBasicMaterial ? (a(g, f), f.isLineDashedMaterial && o(g, f)) : f.isPointsMaterial ? l(g, f, T, S) : f.isSpriteMaterial ? c(g, f) : f.isShadowMaterial ? (g.color.value.copy(f.color), g.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(g, f) {
    g.opacity.value = f.opacity, f.color && g.diffuse.value.copy(f.color), f.emissive && g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (g.map.value = f.map, n(f.map, g.mapTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.bumpMap && (g.bumpMap.value = f.bumpMap, n(f.bumpMap, g.bumpMapTransform), g.bumpScale.value = f.bumpScale, f.side === 1 && (g.bumpScale.value *= -1)), f.normalMap && (g.normalMap.value = f.normalMap, n(f.normalMap, g.normalMapTransform), g.normalScale.value.copy(f.normalScale), f.side === 1 && g.normalScale.value.negate()), f.displacementMap && (g.displacementMap.value = f.displacementMap, n(f.displacementMap, g.displacementMapTransform), g.displacementScale.value = f.displacementScale, g.displacementBias.value = f.displacementBias), f.emissiveMap && (g.emissiveMap.value = f.emissiveMap, n(f.emissiveMap, g.emissiveMapTransform)), f.specularMap && (g.specularMap.value = f.specularMap, n(f.specularMap, g.specularMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
    const T = t.get(f), S = T.envMap, v = T.envMapRotation;
    S && (g.envMap.value = S, g.envMapRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(v)).transpose(), S.isCubeTexture && S.isRenderTargetTexture === !1 && g.envMapRotation.value.premultiply(cl), g.reflectivity.value = f.reflectivity, g.ior.value = f.ior, g.refractionRatio.value = f.refractionRatio), f.lightMap && (g.lightMap.value = f.lightMap, g.lightMapIntensity.value = f.lightMapIntensity, n(f.lightMap, g.lightMapTransform)), f.aoMap && (g.aoMap.value = f.aoMap, g.aoMapIntensity.value = f.aoMapIntensity, n(f.aoMap, g.aoMapTransform));
  }
  function a(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, f.map && (g.map.value = f.map, n(f.map, g.mapTransform));
  }
  function o(g, f) {
    g.dashSize.value = f.dashSize, g.totalSize.value = f.dashSize + f.gapSize, g.scale.value = f.scale;
  }
  function l(g, f, T, S) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.size.value = f.size * T, g.scale.value = S * 0.5, f.map && (g.map.value = f.map, n(f.map, g.uvTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
  }
  function c(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.rotation.value = f.rotation, f.map && (g.map.value = f.map, n(f.map, g.mapTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
  }
  function u(g, f) {
    g.specular.value.copy(f.specular), g.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function d(g, f) {
    f.gradientMap && (g.gradientMap.value = f.gradientMap);
  }
  function h(g, f) {
    g.metalness.value = f.metalness, f.metalnessMap && (g.metalnessMap.value = f.metalnessMap, n(f.metalnessMap, g.metalnessMapTransform)), g.roughness.value = f.roughness, f.roughnessMap && (g.roughnessMap.value = f.roughnessMap, n(f.roughnessMap, g.roughnessMapTransform)), f.envMap && (g.envMapIntensity.value = f.envMapIntensity);
  }
  function p(g, f, T) {
    g.ior.value = f.ior, f.sheen > 0 && (g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), g.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (g.sheenColorMap.value = f.sheenColorMap, n(f.sheenColorMap, g.sheenColorMapTransform)), f.sheenRoughnessMap && (g.sheenRoughnessMap.value = f.sheenRoughnessMap, n(f.sheenRoughnessMap, g.sheenRoughnessMapTransform))), f.clearcoat > 0 && (g.clearcoat.value = f.clearcoat, g.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (g.clearcoatMap.value = f.clearcoatMap, n(f.clearcoatMap, g.clearcoatMapTransform)), f.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, n(f.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (g.clearcoatNormalMap.value = f.clearcoatNormalMap, n(f.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && g.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (g.dispersion.value = f.dispersion), f.retroreflectivity > 0 && (g.retroreflectivity.value = f.retroreflectivity), f.iridescence > 0 && (g.iridescence.value = f.iridescence, g.iridescenceIOR.value = f.iridescenceIOR, g.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (g.iridescenceMap.value = f.iridescenceMap, n(f.iridescenceMap, g.iridescenceMapTransform)), f.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = f.iridescenceThicknessMap, n(f.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), f.transmission > 0 && (g.transmission.value = f.transmission, g.transmissionSamplerMap.value = T.texture, g.transmissionSamplerSize.value.set(T.width, T.height), f.transmissionMap && (g.transmissionMap.value = f.transmissionMap, n(f.transmissionMap, g.transmissionMapTransform)), g.thickness.value = f.thickness, f.thicknessMap && (g.thicknessMap.value = f.thicknessMap, n(f.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = f.attenuationDistance, g.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (g.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (g.anisotropyMap.value = f.anisotropyMap, n(f.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = f.specularIntensity, g.specularColor.value.copy(f.specularColor), f.specularColorMap && (g.specularColorMap.value = f.specularColorMap, n(f.specularColorMap, g.specularColorMapTransform)), f.specularIntensityMap && (g.specularIntensityMap.value = f.specularIntensityMap, n(f.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function _(g, f) {
    f.matcap && (g.matcap.value = f.matcap);
  }
  function M(g, f) {
    const T = t.get(f).light;
    g.referencePosition.value.setFromMatrixPosition(T.matrixWorld), g.nearDistance.value = T.shadow.camera.near, g.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function Od(e, t, n, i) {
  let r = {}, s = {}, a = [];
  const o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(v, E) {
    const R = E.program;
    i.uniformBlockBinding(v, R);
  }
  function c(v, E) {
    let R = r[v.id];
    R === void 0 && (g(v), R = u(v), r[v.id] = R, v.addEventListener("dispose", T));
    const w = E.program;
    i.updateUBOMapping(v, w);
    const m = t.render.frame;
    s[v.id] !== m && (h(v), s[v.id] = m);
  }
  function u(v) {
    const E = d();
    v.__bindingPointIndex = E;
    const R = e.createBuffer(), w = v.__size, m = v.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, R), e.bufferData(e.UNIFORM_BUFFER, w, m), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, E, R), R;
  }
  function d() {
    for (let v = 0; v < o; v++) if (a.indexOf(v) === -1)
      return a.push(v), v;
    return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(v) {
    const E = r[v.id], R = v.uniforms, w = v.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, E);
    for (let m = 0, b = R.length; m < b; m++) {
      const V = R[m];
      if (Array.isArray(V)) for (let P = 0, O = V.length; P < O; P++) p(V[P], m, P, w);
      else p(V, m, 0, w);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function p(v, E, R, w) {
    if (M(v, E, R, w) === !0) {
      const m = v.__offset, b = v.value;
      if (Array.isArray(b)) {
        let V = 0;
        for (let P = 0; P < b.length; P++) {
          const O = b[P], Y = f(O);
          _(O, v.__data, V), typeof O != "number" && typeof O != "boolean" && !O.isMatrix3 && !ArrayBuffer.isView(O) && (V += Y.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else _(b, v.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, m, v.__data);
    }
  }
  function _(v, E, R) {
    typeof v == "number" || typeof v == "boolean" ? E[0] = v : v.isMatrix3 ? (E[0] = v.elements[0], E[1] = v.elements[1], E[2] = v.elements[2], E[3] = 0, E[4] = v.elements[3], E[5] = v.elements[4], E[6] = v.elements[5], E[7] = 0, E[8] = v.elements[6], E[9] = v.elements[7], E[10] = v.elements[8], E[11] = 0) : ArrayBuffer.isView(v) ? E.set(new v.constructor(v.buffer, v.byteOffset, E.length)) : v.toArray(E, R);
  }
  function M(v, E, R, w) {
    const m = v.value, b = E + "_" + R;
    if (w[b] === void 0)
      return typeof m == "number" || typeof m == "boolean" ? w[b] = m : ArrayBuffer.isView(m) ? w[b] = m.slice() : w[b] = m.clone(), !0;
    {
      const V = w[b];
      if (typeof m == "number" || typeof m == "boolean") {
        if (V !== m)
          return w[b] = m, !0;
      } else {
        if (ArrayBuffer.isView(m)) return !0;
        if (V.equals(m) === !1)
          return V.copy(m), !0;
      }
    }
    return !1;
  }
  function g(v) {
    const E = v.uniforms;
    let R = 0;
    const w = 16;
    for (let b = 0, V = E.length; b < V; b++) {
      const P = Array.isArray(E[b]) ? E[b] : [E[b]];
      for (let O = 0, Y = P.length; O < Y; O++) {
        const N = P[O], C = Array.isArray(N.value) ? N.value : [N.value];
        for (let k = 0, F = C.length; k < F; k++) {
          const ee = C[k], X = f(ee), Z = R % w, J = Z % X.boundary, Le = Z + J;
          R += J, Le !== 0 && w - Le < X.storage && (R += w - Le), N.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), N.__offset = R, R += X.storage;
        }
      }
    }
    const m = R % w;
    return m > 0 && (R += w - m), v.__size = R, v.__cache = {}, this;
  }
  function f(v) {
    const E = {
      boundary: 0,
      storage: 0
    };
    return typeof v == "number" || typeof v == "boolean" ? (E.boundary = 4, E.storage = 4) : v.isVector2 ? (E.boundary = 8, E.storage = 8) : v.isVector3 || v.isColor ? (E.boundary = 16, E.storage = 12) : v.isVector4 ? (E.boundary = 16, E.storage = 16) : v.isMatrix3 ? (E.boundary = 48, E.storage = 48) : v.isMatrix4 ? (E.boundary = 64, E.storage = 64) : v.isTexture ? Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(v) ? (E.boundary = 16, E.storage = v.byteLength) : Oe("WebGLRenderer: Unsupported uniform value type.", v), E;
  }
  function T(v) {
    const E = v.target;
    E.removeEventListener("dispose", T);
    const R = a.indexOf(E.__bindingPointIndex);
    a.splice(R, 1), e.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function S() {
    for (const v in r) e.deleteBuffer(r[v]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: S
  };
}
var Fd = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]), Jt = null;
function Bd() {
  return Jt === null && (Jt = new xo(Fd, 16, 16, Er, xn), Jt.name = "DFG_LUT", Jt.minFilter = Ot, Jt.magFilter = Ot, Jt.wrapS = hn, Jt.wrapT = hn, Jt.generateMipmaps = !1, Jt.needsUpdate = !0), Jt;
}
var zd = class {
  constructor(e = {}) {
    const { canvas: t = pc(), context: n = null, depth: i = !0, stencil: r = !1, alpha: s = !1, antialias: a = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: l = !1, powerPreference: c = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: h = Sn } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = s;
    const _ = h, M = /* @__PURE__ */ new Set([
      ao,
      so,
      ro
    ]), g = /* @__PURE__ */ new Set([
      Sn,
      Cn,
      Qa,
      to,
      ja,
      eo
    ]), f = new Uint32Array(4), T = new Int32Array(4), S = new I();
    let v = null, E = null;
    const R = [], w = [];
    let m = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      diagnostics: { keywords: !1 },
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const b = this;
    let V = !1, P = null, O = null, Y = null, N = null;
    this._outputColorSpace = Ct;
    let C = 0, k = 0, F = null, ee = -1, X = null;
    const Z = new gt(), J = new gt();
    let Le = null;
    const we = new Xe(0);
    let rt = 0, Ge = t.width, K = t.height, re = 1, ae = null, Ce = null;
    const Ue = new gt(0, 0, Ge, K), ue = new gt(0, 0, Ge, K);
    let Ye = !1;
    const j = new As();
    let Q = !1, le = !1;
    const ve = new ht(), _e = new I(), Re = new gt(), Ie = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    let Ve = !1;
    function He() {
      return F === null ? re : 1;
    }
    let L = n;
    function lt(y, D) {
      return t.getContext(y, D);
    }
    let Qe, Ke, A, x, U, W, te, oe, fe, z, ce, Se, Te, se, Ee, Ne, ze, je, B, $, ne, Me, be;
    try {
      const y = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", Fe, !1), t.addEventListener("webglcontextrestored", Mt, !1), t.addEventListener("webglcontextcreationerror", nt, !1), L === null) {
        const D = "webgl2";
        if (L = lt(D, y), L === null) throw lt(D) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      ie();
    } catch (y) {
      throw t.removeEventListener("webglcontextlost", Fe, !1), t.removeEventListener("webglcontextrestored", Mt, !1), t.removeEventListener("webglcontextcreationerror", nt, !1), Be("WebGLRenderer: " + y.message), y;
    }
    function ie() {
      Qe = new Fu(L), Qe.init(), ne = new Cd(L, Qe), Ke = new wu(L, Qe, e, ne), A = new wd(L, Qe), Ke.reversedDepthBuffer && d && A.buffers.depth.setReversed(!0), O = L.createFramebuffer(), Y = L.createFramebuffer(), N = L.createFramebuffer(), x = new Vu(L), U = new dd(), W = new Rd(L, Qe, A, U, Ke, ne, x), te = new Ou(b), oe = new yu(L), Me = new bu(L, oe), fe = new Bu(L, oe, x, Me), z = new Hu(L, fe, oe, Me, x), je = new Gu(L, Ke, W), Ee = new Ru(U), ce = new fd(b, te, Qe, Ke, Me, Ee), Se = new Dd(b, U), Te = new md(), se = new xd(Qe), ze = new Tu(b, te, A, z, p, o), Ne = new Ad(b, z, Ke), be = new Od(L, x, Ke, A), B = new Au(L, Qe, x), $ = new zu(L, Qe, x), x.programs = ce.programs, b.capabilities = Ke, b.extensions = Qe, b.properties = U, b.renderLists = Te, b.shadowMap = Ne, b.state = A, b.info = x;
    }
    _ !== 1009 && (m = new Wu(_, t.width, t.height, a, i, r));
    const ge = new Nd(b, L);
    this.xr = ge, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const y = Qe.get("WEBGL_lose_context");
      y && y.loseContext();
    }, this.forceContextRestore = function() {
      const y = Qe.get("WEBGL_lose_context");
      y && y.restoreContext();
    }, this.getPixelRatio = function() {
      return re;
    }, this.setPixelRatio = function(y) {
      y !== void 0 && (re = y, this.setSize(Ge, K, !1));
    }, this.getSize = function(y) {
      return y.set(Ge, K);
    }, this.setSize = function(y, D, q = !0) {
      if (ge.isPresenting) {
        Oe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ge = y, K = D, t.width = Math.floor(y * re), t.height = Math.floor(D * re), q === !0 && (t.style.width = y + "px", t.style.height = D + "px"), m !== null && m.setSize(t.width, t.height), this.setViewport(0, 0, y, D);
    }, this.getDrawingBufferSize = function(y) {
      return y.set(Ge * re, K * re).floor();
    }, this.setDrawingBufferSize = function(y, D, q) {
      Ge = y, K = D, re = q, t.width = Math.floor(y * q), t.height = Math.floor(D * q), this.setViewport(0, 0, y, D);
    }, this.setEffects = function(y) {
      if (_ === 1009) {
        Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (y) {
        for (let D = 0; D < y.length; D++) if (y[D].isOutputPass === !0) {
          Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      m.setEffects(y || []);
    }, this.getCurrentViewport = function(y) {
      return y.copy(Z);
    }, this.getViewport = function(y) {
      return y.copy(Ue);
    }, this.setViewport = function(y, D, q, H) {
      y.isVector4 ? Ue.set(y.x, y.y, y.z, y.w) : Ue.set(y, D, q, H), A.viewport(Z.copy(Ue).multiplyScalar(re).round());
    }, this.getScissor = function(y) {
      return y.copy(ue);
    }, this.setScissor = function(y, D, q, H) {
      y.isVector4 ? ue.set(y.x, y.y, y.z, y.w) : ue.set(y, D, q, H), A.scissor(J.copy(ue).multiplyScalar(re).round());
    }, this.getScissorTest = function() {
      return Ye;
    }, this.setScissorTest = function(y) {
      A.setScissorTest(Ye = y);
    }, this.setOpaqueSort = function(y) {
      ae = y;
    }, this.setTransparentSort = function(y) {
      Ce = y;
    }, this.getClearColor = function(y) {
      return y.copy(ze.getClearColor());
    }, this.setClearColor = function() {
      ze.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ze.getClearAlpha();
    }, this.setClearAlpha = function() {
      ze.setClearAlpha(...arguments);
    }, this.clear = function(y = !0, D = !0, q = !0) {
      let H = 0;
      if (y) {
        let G = !1;
        if (F !== null) {
          const he = F.texture.format;
          G = M.has(he);
        }
        if (G) {
          const he = F.texture.type, me = g.has(he), xe = ze.getClearColor(), ye = ze.getClearAlpha(), De = xe.r, Ze = xe.g, Je = xe.b;
          me ? (f[0] = De, f[1] = Ze, f[2] = Je, f[3] = ye, L.clearBufferuiv(L.COLOR, 0, f)) : (T[0] = De, T[1] = Ze, T[2] = Je, T[3] = ye, L.clearBufferiv(L.COLOR, 0, T));
        } else H |= L.COLOR_BUFFER_BIT;
      }
      D && (H |= L.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), q && (H |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), H !== 0 && L.clear(H);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(y) {
      y.setRenderer(this), P = y;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Fe, !1), t.removeEventListener("webglcontextrestored", Mt, !1), t.removeEventListener("webglcontextcreationerror", nt, !1), ze.dispose(), Te.dispose(), se.dispose(), U.dispose(), te.dispose(), z.dispose(), Me.dispose(), be.dispose(), ce.dispose(), ge.dispose(), ge.removeEventListener("sessionstart", Os), ge.removeEventListener("sessionend", Fs), yn.stop();
    };
    function Fe(y) {
      y.preventDefault(), Js("WebGLRenderer: Context Lost."), V = !0;
    }
    function Mt() {
      Js("WebGLRenderer: Context Restored."), V = !1;
      const y = x.autoReset, D = Ne.enabled, q = Ne.autoUpdate, H = Ne.needsUpdate, G = Ne.type;
      ie(), x.autoReset = y, Ne.enabled = D, Ne.autoUpdate = q, Ne.needsUpdate = H, Ne.type = G;
    }
    function nt(y) {
      Be("WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
    }
    function Yt(y) {
      const D = y.target;
      D.removeEventListener("dispose", Yt), rn(D);
    }
    function rn(y) {
      fl(y), U.remove(y);
    }
    function fl(y) {
      const D = U.get(y).programs;
      D !== void 0 && (D.forEach(function(q) {
        ce.releaseProgram(q);
      }), y.isShaderMaterial && ce.releaseShaderCache(y));
    }
    this.renderBufferDirect = function(y, D, q, H, G, he) {
      D === null && (D = Ie);
      const me = G.isMesh && G.matrixWorld.determinantAffine() < 0, xe = ml(y, D, q, H, G);
      A.setMaterial(H, me);
      let ye = q.index, De = 1;
      if (H.wireframe === !0) {
        if (ye = fe.getWireframeAttribute(q), ye === void 0) return;
        De = 2;
      }
      const Ze = q.drawRange, Je = q.attributes.position;
      let Pe = Ze.start * De, st = (Ze.start + Ze.count) * De;
      he !== null && (Pe = Math.max(Pe, he.start * De), st = Math.min(st, (he.start + he.count) * De)), ye !== null ? (Pe = Math.max(Pe, 0), st = Math.min(st, ye.count)) : Je != null && (Pe = Math.max(Pe, 0), st = Math.min(st, Je.count));
      const pt = st - Pe;
      if (pt < 0 || pt === 1 / 0) return;
      Me.setup(G, H, xe, q, ye);
      let ct, et = B;
      if (ye !== null && (ct = oe.get(ye), et = $, et.setIndex(ct)), G.isMesh) H.wireframe === !0 ? (A.setLineWidth(H.wireframeLinewidth * He()), et.setMode(L.LINES)) : et.setMode(L.TRIANGLES);
      else if (G.isLine) {
        let Tt = H.linewidth;
        Tt === void 0 && (Tt = 1), A.setLineWidth(Tt * He()), G.isLineSegments ? et.setMode(L.LINES) : G.isLineLoop ? et.setMode(L.LINE_LOOP) : et.setMode(L.LINE_STRIP);
      } else G.isPoints ? et.setMode(L.POINTS) : G.isSprite && et.setMode(L.TRIANGLES);
      if (G.isBatchedMesh) if (Qe.get("WEBGL_multi_draw"))
        et.renderMultiDraw(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount);
      else {
        const Tt = G._multiDrawStarts, Ae = G._multiDrawCounts, Nt = G._multiDrawCount, tt = ye ? oe.get(ye).bytesPerElement : 1, Ft = U.get(H).currentProgram.getUniforms();
        for (let Zt = 0; Zt < Nt; Zt++)
          Ft.setValue(L, "_gl_DrawID", Zt), et.render(Tt[Zt] / tt, Ae[Zt]);
      }
      else if (G.isInstancedMesh) et.renderInstances(Pe, pt, G.count);
      else if (q.isInstancedBufferGeometry) {
        const Tt = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0, Ae = Math.min(q.instanceCount, Tt);
        et.renderInstances(Pe, pt, Ae);
      } else et.render(Pe, pt);
    };
    function Ds(y, D, q, H) {
      P !== null && y.isNodeMaterial && P.setObject(H, y), Q === !0 && Ee.setState(y, q, !1), y.transparent === !0 && y.side === 2 && y.forceSinglePass === !1 ? (y.side = 1, y.needsUpdate = !0, Yi(y, D, H), y.side = 0, y.needsUpdate = !0, Yi(y, D, H), y.side = 2) : Yi(y, D, H);
    }
    this.compile = function(y, D, q = null) {
      q === null && (q = y), P !== null && P.renderStart(y, D, q), E = se.get(q), E.init(D), w.push(E), q.traverseVisible(function(G) {
        G.isLight && G.layers.test(D.layers) && (E.pushLight(G), G.castShadow && E.pushShadow(G));
      }), y !== q && y.traverseVisible(function(G) {
        G.isLight && G.layers.test(D.layers) && (E.pushLight(G), G.castShadow && E.pushShadow(G));
      }), E.setupLights(), P !== null && P.updateLights(E.state.lightsArray), le = this.localClippingEnabled, Q = Ee.init(this.clippingPlanes, le), Q === !0 && Ee.setGlobalState(this.clippingPlanes, D), P !== null && Ne.render(E.state.shadowsArray, q, D);
      const H = /* @__PURE__ */ new Set();
      return y.traverse(function(G) {
        if (!(G.isMesh || G.isPoints || G.isLine || G.isSprite)) return;
        const he = G.material;
        if (he) if (Array.isArray(he)) for (let me = 0; me < he.length; me++) {
          const xe = he[me];
          Ds(xe, q, D, G), H.add(xe);
        }
        else
          Ds(he, q, D, G), H.add(he);
      }), E = w.pop(), P !== null && P.renderEnd(), H;
    }, this.compileAsync = function(y, D, q = null) {
      const H = this.compile(y, D, q);
      return new Promise((G) => {
        function he() {
          if (H.forEach(function(me) {
            const xe = U.get(me).currentProgram;
            (xe === void 0 || xe.isReady()) && H.delete(me);
          }), H.size === 0) {
            G(y);
            return;
          }
          setTimeout(he, 10);
        }
        Qe.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let Ir = null;
    function dl(y) {
      Ir && Ir(y);
    }
    function Os() {
      yn.stop();
    }
    function Fs() {
      yn.start();
    }
    const yn = new nl();
    yn.setAnimationLoop(dl), typeof self < "u" && yn.setContext(self), this.setAnimationLoop = function(y) {
      Ir = y, ge.setAnimationLoop(y), y === null ? yn.stop() : yn.start();
    }, ge.addEventListener("sessionstart", Os), ge.addEventListener("sessionend", Fs), this.render = function(y, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (V === !0) return;
      P !== null && P.renderStart(y, D);
      const q = ge.enabled === !0 && ge.isPresenting === !0, H = m !== null && (F === null || q) && m.begin(b, F);
      if (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), ge.enabled === !0 && ge.isPresenting === !0 && (m === null || m.isCompositing() === !1) && (ge.cameraAutoUpdate === !0 && ge.updateCamera(D), D = ge.getCamera()), y.isScene === !0 && y.onBeforeRender(b, y, D, F), E = se.get(y, w.length), E.init(D), E.state.textureUnits = W.getTextureUnits(), w.push(E), ve.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), j.setFromProjectionMatrix(ve, hi, D.reversedDepth), le = this.localClippingEnabled, Q = Ee.init(this.clippingPlanes, le), v = Te.get(y, R.length), v.init(), R.push(v), ge.enabled === !0 && ge.isPresenting === !0) {
        const he = b.xr.getDepthSensingMesh();
        he !== null && Nr(he, D, -1 / 0, b.sortObjects);
      }
      Nr(y, D, 0, b.sortObjects), v.finish(), P !== null && P.updateLights(E.state.lightsArray), b.sortObjects === !0 && v.sort(ae, Ce), Ve = ge.enabled === !1 || ge.isPresenting === !1 || ge.hasDepthSensing() === !1, Ve && ze.addToRenderList(v, y), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), Q === !0 && Ee.beginShadows();
      const G = E.state.shadowsArray;
      if (Ne.render(G, y, D), Q === !0 && Ee.endShadows(), (H && m.hasRenderPass()) === !1) {
        const he = v.opaque, me = v.transmissive;
        if (E.setupLights(), D.isArrayCamera) {
          const xe = D.cameras;
          if (me.length > 0) for (let ye = 0, De = xe.length; ye < De; ye++) {
            const Ze = xe[ye];
            zs(he, me, y, Ze);
          }
          Ve && ze.render(y);
          for (let ye = 0, De = xe.length; ye < De; ye++) {
            const Ze = xe[ye];
            Bs(v, y, Ze, Ze.viewport);
          }
        } else
          me.length > 0 && zs(he, me, y, D), Ve && ze.render(y), Bs(v, y, D);
      }
      F !== null && k === 0 && (W.updateMultisampleRenderTarget(F), W.updateRenderTargetMipmap(F)), H && m.end(b), y.isScene === !0 && y.onAfterRender(b, y, D), Me.resetDefaultState(), ee = -1, X = null, w.pop(), w.length > 0 ? (E = w[w.length - 1], W.setTextureUnits(E.state.textureUnits), Q === !0 && Ee.setGlobalState(b.clippingPlanes, E.state.camera)) : E = null, R.pop(), R.length > 0 ? v = R[R.length - 1] : v = null, P !== null && P.renderEnd();
    };
    function Nr(y, D, q, H) {
      if (y.visible === !1) return;
      if (y.layers.test(D.layers)) {
        if (y.isGroup) q = y.renderOrder;
        else if (y.isLOD)
          y.autoUpdate === !0 && y.update(D);
        else if (y.isLightProbeGrid) E.pushLightProbeGrid(y);
        else if (y.isLight)
          E.pushLight(y), y.castShadow && E.pushShadow(y);
        else if (y.isSprite) {
          if (!y.frustumCulled || y.intersectsFrustum(j)) {
            H && Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);
            const he = z.update(y), me = y.material;
            me.visible && v.push(y, he, me, q, Re.z, null, D);
          }
        } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || y.intersectsFrustum(j))) {
          const he = z.update(y), me = y.material;
          if (H && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(), Re.copy(y.boundingSphere.center)) : (he.boundingSphere === null && he.computeBoundingSphere(), Re.copy(he.boundingSphere.center)), Re.applyMatrix4(y.matrixWorld).applyMatrix4(ve)), Array.isArray(me)) {
            const xe = he.groups;
            for (let ye = 0, De = xe.length; ye < De; ye++) {
              const Ze = xe[ye], Je = me[Ze.materialIndex];
              Je && Je.visible && v.push(y, he, Je, q, Re.z, Ze, D);
            }
          } else me.visible && v.push(y, he, me, q, Re.z, null, D);
        }
      }
      const G = y.children;
      for (let he = 0, me = G.length; he < me; he++) Nr(G[he], D, q, H);
    }
    function Bs(y, D, q, H) {
      const { opaque: G, transmissive: he, transparent: me } = y;
      E.setupLightsView(q), Q === !0 && Ee.setGlobalState(b.clippingPlanes, q), H && A.viewport(Z.copy(H)), G.length > 0 && qi(G, D, q), he.length > 0 && qi(he, D, q), me.length > 0 && qi(me, D, q), A.buffers.depth.setTest(!0), A.buffers.depth.setMask(!0), A.buffers.color.setMask(!0), A.setPolygonOffset(!1);
    }
    function zs(y, D, q, H) {
      if ((q.isScene === !0 ? q.overrideMaterial : null) !== null) return;
      if (E.state.transmissionRenderTarget[H.id] === void 0) {
        const Je = Qe.has("EXT_color_buffer_half_float") || Qe.has("EXT_color_buffer_float");
        E.state.transmissionRenderTarget[H.id] = new qt(1, 1, {
          generateMipmaps: !0,
          type: Je ? xn : Sn,
          minFilter: Es,
          samples: Math.max(4, Ke.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: $e.workingColorSpace
        });
      }
      const G = E.state.transmissionRenderTarget[H.id], he = H.viewport || Z;
      G.setSize(he.z * b.transmissionResolutionScale, he.w * b.transmissionResolutionScale);
      const me = b.getRenderTarget(), xe = b.getActiveCubeFace(), ye = b.getActiveMipmapLevel();
      b.setRenderTarget(G), b.getClearColor(we), rt = b.getClearAlpha(), rt < 1 && b.setClearColor(16777215, 0.5), b.clear(), Ve && ze.render(q);
      const De = b.toneMapping;
      b.toneMapping = 0;
      const Ze = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), E.setupLightsView(H), Q === !0 && Ee.setGlobalState(b.clippingPlanes, H), qi(y, q, H), W.updateMultisampleRenderTarget(G), W.updateRenderTargetMipmap(G), Qe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Je = !1;
        for (let Pe = 0, st = D.length; Pe < st; Pe++) {
          const { object: pt, geometry: ct, material: et, group: Tt } = D[Pe];
          if (et.side === 2 && pt.layers.test(H.layers)) {
            const Ae = et.side;
            et.side = 1, et.needsUpdate = !0, Vs(pt, q, H, ct, et, Tt), et.side = Ae, et.needsUpdate = !0, Je = !0;
          }
        }
        Je === !0 && (W.updateMultisampleRenderTarget(G), W.updateRenderTargetMipmap(G));
      }
      b.setRenderTarget(me, xe, ye), b.setClearColor(we, rt), Ze !== void 0 && (H.viewport = Ze), b.toneMapping = De;
    }
    function qi(y, D, q) {
      const H = D.isScene === !0 ? D.overrideMaterial : null;
      for (let G = 0, he = y.length; G < he; G++) {
        const me = y[G], { object: xe, geometry: ye, group: De } = me;
        let Ze = me.material;
        Ze.allowOverride === !0 && H !== null && (Ze = H), xe.layers.test(q.layers) && Vs(xe, D, q, ye, Ze, De);
      }
    }
    function Vs(y, D, q, H, G, he) {
      P !== null && G.isNodeMaterial && P.setObject(y, G), y.onBeforeRender(b, D, q, H, G, he), y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), G.onBeforeRender(b, D, q, H, y, he), G.transparent === !0 && G.side === 2 && G.forceSinglePass === !1 ? (G.side = 1, G.needsUpdate = !0, b.renderBufferDirect(q, D, H, G, y, he), G.side = 0, G.needsUpdate = !0, b.renderBufferDirect(q, D, H, G, y, he), G.side = 2) : b.renderBufferDirect(q, D, H, G, y, he), y.onAfterRender(b, D, q, H, G, he);
    }
    function Yi(y, D, q) {
      D.isScene !== !0 && (D = Ie);
      const H = U.get(y), G = E.state.lights, he = E.state.shadowsArray, me = G.state.version, xe = ce.getParameters(y, G.state, he, D, q, E.state.lightProbeGridArray), ye = ce.getProgramCacheKey(xe);
      let De = H.programs;
      H.environment = y.isMeshStandardMaterial || y.isMeshLambertMaterial || y.isMeshPhongMaterial ? D.environment : null, H.fog = D.fog;
      const Ze = y.isMeshStandardMaterial || y.isMeshLambertMaterial && !y.envMap || y.isMeshPhongMaterial && !y.envMap;
      H.envMap = te.get(y.envMap || H.environment, Ze), H.envMapRotation = H.environment !== null && y.envMap === null ? D.environmentRotation : y.envMapRotation, De === void 0 && (y.addEventListener("dispose", Yt), De = /* @__PURE__ */ new Map(), H.programs = De);
      let Je = De.get(ye);
      if (Je !== void 0) {
        if (H.currentProgram === Je && H.lightsStateVersion === me)
          return Hs(y, xe), Je;
      } else
        xe.uniforms = ce.getUniforms(y), P !== null && y.isNodeMaterial && P.build(y, q, xe), y.onBeforeCompile(xe, b), Je = ce.acquireProgram(xe, ye), De.set(ye, Je), H.uniforms = xe.uniforms;
      const Pe = H.uniforms;
      return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Pe.clippingPlanes = Ee.uniform), Hs(y, xe), H.needsLights = vl(y), H.lightsStateVersion = me, H.needsLights && (Pe.ambientLightColor.value = G.state.ambient, Pe.lightProbe.value = G.state.probe, Pe.sunLights.value = G.state.sun, Pe.sunLightShadows.value = G.state.sunShadow, Pe.directionalLights.value = G.state.directional, Pe.directionalLightShadows.value = G.state.directionalShadow, Pe.spotLights.value = G.state.spot, Pe.spotLightShadows.value = G.state.spotShadow, Pe.rectAreaLights.value = G.state.rectArea, Pe.ltc_1.value = G.state.rectAreaLTC1, Pe.ltc_2.value = G.state.rectAreaLTC2, Pe.pointLights.value = G.state.point, Pe.pointLightShadows.value = G.state.pointShadow, Pe.hemisphereLights.value = G.state.hemi, Pe.sunShadowMatrix.value = G.state.sunShadowMatrix, Pe.sunShadowCascade.value = G.state.sunShadowCascade, Pe.directionalShadowMatrix.value = G.state.directionalShadowMatrix, Pe.spotLightMatrix.value = G.state.spotLightMatrix, Pe.spotLightMap.value = G.state.spotLightMap, Pe.pointShadowMatrix.value = G.state.pointShadowMatrix), H.lightProbeGrid = E.state.lightProbeGridArray.length > 0, H.currentProgram = Je, H.uniformsList = null, Je;
    }
    function Gs(y) {
      if (y.uniformsList === null) {
        const D = y.currentProgram.getUniforms();
        y.uniformsList = xr.seqWithValue(D.seq, y.uniforms);
      }
      return y.uniformsList;
    }
    function Hs(y, D) {
      const q = U.get(y);
      q.outputColorSpace = D.outputColorSpace, q.batching = D.batching, q.batchingColor = D.batchingColor, q.instancing = D.instancing, q.instancingColor = D.instancingColor, q.instancingMorph = D.instancingMorph, q.skinning = D.skinning, q.morphTargets = D.morphTargets, q.morphNormals = D.morphNormals, q.morphColors = D.morphColors, q.morphTargetsCount = D.morphTargetsCount, q.numClippingPlanes = D.numClippingPlanes, q.numIntersection = D.numClipIntersection, q.vertexAlphas = D.vertexAlphas, q.vertexTangents = D.vertexTangents, q.toneMapping = D.toneMapping;
    }
    function pl(y, D) {
      if (y.length === 0) return null;
      if (y.length === 1) return y[0].texture !== null ? y[0] : null;
      S.setFromMatrixPosition(D.matrixWorld);
      for (let q = 0, H = y.length; q < H; q++) {
        const G = y[q];
        if (G.texture !== null && G.boundingBox.containsPoint(S)) return G;
      }
      return null;
    }
    function ml(y, D, q, H, G) {
      D.isScene !== !0 && (D = Ie), W.resetTextureUnits();
      const he = D.fog, me = H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial ? D.environment : null, xe = F === null ? b.outputColorSpace : F.isXRRenderTarget === !0 ? F.texture.colorSpace : $e.workingColorSpace, ye = H.isMeshStandardMaterial || H.isMeshLambertMaterial && !H.envMap || H.isMeshPhongMaterial && !H.envMap, De = te.get(H.envMap || me, ye), Ze = H.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4, Je = !!q.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), Pe = !!q.morphAttributes.position, st = !!q.morphAttributes.normal, pt = !!q.morphAttributes.color;
      let ct = 0;
      H.toneMapped && (F === null || F.isXRRenderTarget === !0) && (ct = b.toneMapping);
      const et = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, Tt = et !== void 0 ? et.length : 0, Ae = U.get(H), Nt = E.state.lights;
      if (Q === !0 && (le === !0 || y !== X)) {
        const ot = y === X && H.id === ee;
        Ee.setState(H, y, ot);
      }
      let tt = !1;
      H.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Nt.state.version || Ae.outputColorSpace !== xe || G.isBatchedMesh && Ae.batching === !1 || !G.isBatchedMesh && Ae.batching === !0 || G.isBatchedMesh && Ae.batchingColor === !0 && G._colorsTexture === null || G.isBatchedMesh && Ae.batchingColor === !1 && G._colorsTexture !== null || G.isInstancedMesh && Ae.instancing === !1 || !G.isInstancedMesh && Ae.instancing === !0 || G.isSkinnedMesh && Ae.skinning === !1 || !G.isSkinnedMesh && Ae.skinning === !0 || G.isInstancedMesh && Ae.instancingColor === !0 && G.instanceColor === null || G.isInstancedMesh && Ae.instancingColor === !1 && G.instanceColor !== null || G.isInstancedMesh && Ae.instancingMorph === !0 && G.morphTexture === null || G.isInstancedMesh && Ae.instancingMorph === !1 && G.morphTexture !== null || Ae.envMap !== De || H.fog === !0 && Ae.fog !== he || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== Ee.numPlanes || Ae.numIntersection !== Ee.numIntersection) || Ae.vertexAlphas !== Ze || Ae.vertexTangents !== Je || Ae.morphTargets !== Pe || Ae.morphNormals !== st || Ae.morphColors !== pt || Ae.toneMapping !== ct || Ae.morphTargetsCount !== Tt || !!Ae.lightProbeGrid != E.state.lightProbeGridArray.length > 0) && (tt = !0) : (tt = !0, Ae.__version = H.version);
      let Ft = Ae.currentProgram;
      tt === !0 && (Ft = Yi(H, D, G), P && H.isNodeMaterial && P.onUpdateProgram(H, Ft, Ae));
      let Zt = !1, fn = !1, Bn = !1;
      const at = Ft.getUniforms(), mt = Ae.uniforms;
      if (A.useProgram(Ft.program) && (Zt = !0, fn = !0, Bn = !0), H.id !== ee && (ee = H.id, fn = !0), Ae.needsLights) {
        const ot = pl(E.state.lightProbeGridArray, G);
        Ae.lightProbeGrid !== ot && (Ae.lightProbeGrid = ot, fn = !0);
      }
      if (Zt || X !== y) {
        A.buffers.depth.getReversed() && y.reversedDepth !== !0 && (y._reversedDepth = !0, y.updateProjectionMatrix()), at.setValue(L, "projectionMatrix", y.projectionMatrix), at.setValue(L, "viewMatrix", y.matrixWorldInverse);
        const ot = at.map.cameraPosition;
        ot !== void 0 && ot.setValue(L, _e.setFromMatrixPosition(y.matrixWorld)), Ke.logarithmicDepthBuffer && at.setValue(L, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && at.setValue(L, "isOrthographic", y.isOrthographicCamera === !0), X !== y && (X = y, fn = !0, Bn = !0);
      }
      if (Ae.needsLights && (Nt.state.sunShadowMap.length > 0 && at.setValue(L, "sunShadowMap", Nt.state.sunShadowMap, W), Nt.state.directionalShadowMap.length > 0 && at.setValue(L, "directionalShadowMap", Nt.state.directionalShadowMap, W), Nt.state.spotShadowMap.length > 0 && at.setValue(L, "spotShadowMap", Nt.state.spotShadowMap, W), Nt.state.pointShadowMap.length > 0 && at.setValue(L, "pointShadowMap", Nt.state.pointShadowMap, W)), G.isSkinnedMesh) {
        at.setOptional(L, G, "bindMatrix"), at.setOptional(L, G, "bindMatrixInverse");
        const ot = G.skeleton;
        ot && (ot.boneTexture === null && ot.computeBoneTexture(), at.setValue(L, "boneTexture", ot.boneTexture, W));
      }
      G.isBatchedMesh && (at.setOptional(L, G, "batchingTexture"), at.setValue(L, "batchingTexture", G._matricesTexture, W), at.setOptional(L, G, "batchingIdTexture"), at.setValue(L, "batchingIdTexture", G._indirectTexture, W), at.setOptional(L, G, "batchingColorTexture"), G._colorsTexture !== null && at.setValue(L, "batchingColorTexture", G._colorsTexture, W));
      const dn = q.morphAttributes;
      if ((dn.position !== void 0 || dn.normal !== void 0 || dn.color !== void 0) && je.update(G, q, Ft), (fn || Ae.receiveShadow !== G.receiveShadow) && (Ae.receiveShadow = G.receiveShadow, at.setValue(L, "receiveShadow", G.receiveShadow)), (H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial) && H.envMap === null && D.environment !== null && (mt.envMapIntensity.value = D.environmentIntensity), mt.dfgLUT !== void 0 && (mt.dfgLUT.value = Bd()), fn) {
        if (at.setValue(L, "toneMappingExposure", b.toneMappingExposure), Ae.needsLights && gl(mt, Bn), he && H.fog === !0 && Se.refreshFogUniforms(mt, he), Se.refreshMaterialUniforms(mt, H, re, K, E.state.transmissionRenderTarget[y.id]), Ae.needsLights && Ae.lightProbeGrid) {
          const ot = Ae.lightProbeGrid;
          mt.probesSH.value = ot.texture, mt.probesMin.value.copy(ot.boundingBox.min), mt.probesMax.value.copy(ot.boundingBox.max), mt.probesResolution.value.copy(ot.resolution);
        }
        xr.upload(L, Gs(Ae), mt, W);
      }
      if (H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (xr.upload(L, Gs(Ae), mt, W), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && at.setValue(L, "center", G.center), at.setValue(L, "modelViewMatrix", G.modelViewMatrix), at.setValue(L, "normalMatrix", G.normalMatrix), at.setValue(L, "modelMatrix", G.matrixWorld), H.uniformsGroups !== void 0) {
        const ot = H.uniformsGroups;
        for (let gi = 0, zn = ot.length; gi < zn; gi++) {
          const Ws = ot[gi];
          be.update(Ws, Ft), be.bind(Ws, Ft);
        }
      }
      return Ft;
    }
    function gl(y, D) {
      y.ambientLightColor.needsUpdate = D, y.lightProbe.needsUpdate = D, y.sunLights.needsUpdate = D, y.sunLightShadows.needsUpdate = D, y.directionalLights.needsUpdate = D, y.directionalLightShadows.needsUpdate = D, y.pointLights.needsUpdate = D, y.pointLightShadows.needsUpdate = D, y.spotLights.needsUpdate = D, y.spotLightShadows.needsUpdate = D, y.rectAreaLights.needsUpdate = D, y.hemisphereLights.needsUpdate = D;
    }
    function vl(y) {
      return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return k;
    }, this.getRenderTarget = function() {
      return F;
    }, this.setRenderTargetTextures = function(y, D, q) {
      const H = U.get(y);
      H.__autoAllocateDepthBuffer = y.resolveDepthBuffer === !1, H.__autoAllocateDepthBuffer === !1 && (H.__useRenderToTexture = !1), U.get(y.texture).__webglTexture = D, U.get(y.depthTexture).__webglTexture = H.__autoAllocateDepthBuffer ? void 0 : q, H.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(y, D) {
      const q = U.get(y);
      q.__webglFramebuffer = D, q.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(y, D = 0, q = 0) {
      F = y, C = D, k = q;
      let H = null, G = !1, he = !1;
      if (y) {
        const me = U.get(y);
        if (me.__useDefaultFramebuffer !== void 0) {
          A.bindFramebuffer(L.FRAMEBUFFER, me.__webglFramebuffer), Z.copy(y.viewport), J.copy(y.scissor), Le = y.scissorTest, A.viewport(Z), A.scissor(J), A.setScissorTest(Le), ee = -1;
          return;
        } else if (me.__webglFramebuffer === void 0) W.setupRenderTarget(y);
        else if (me.__hasExternalTextures) W.rebindTextures(y, U.get(y.texture).__webglTexture, U.get(y.depthTexture).__webglTexture);
        else if (y.depthBuffer) {
          const De = y.depthTexture;
          if (me.__boundDepthTexture !== De) {
            if (De !== null && U.has(De) && (y.width !== De.image.width || y.height !== De.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            W.setupDepthRenderbuffer(y);
          }
        }
        const xe = y.texture;
        (xe.isData3DTexture || xe.isDataArrayTexture || xe.isCompressedArrayTexture) && (he = !0);
        const ye = U.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget ? (Array.isArray(ye[D]) ? H = ye[D][q] : H = ye[D], G = !0) : y.samples > 0 && W.useMultisampledRTT(y) === !1 ? H = U.get(y).__webglMultisampledFramebuffer : Array.isArray(ye) ? H = ye[q] : H = ye, Z.copy(y.viewport), J.copy(y.scissor), Le = y.scissorTest;
      } else
        Z.copy(Ue).multiplyScalar(re).floor(), J.copy(ue).multiplyScalar(re).floor(), Le = Ye;
      if (q !== 0 && (H = O), A.bindFramebuffer(L.FRAMEBUFFER, H) && A.drawBuffers(y, H), A.viewport(Z), A.scissor(J), A.setScissorTest(Le), G) {
        const me = U.get(y.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + D, me.__webglTexture, q);
      } else if (he) {
        const me = D;
        for (let xe = 0; xe < y.textures.length; xe++) {
          const ye = U.get(y.textures[xe]);
          L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + xe, ye.__webglTexture, q, me);
        }
      } else if (y !== null && q !== 0) {
        const me = U.get(y.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, me.__webglTexture, q);
      }
      ee = -1;
    };
    function ks(y) {
      const D = U.get(y);
      return (D.__readFormat !== y.format || D.__readType !== y.type) && (D.__readFormat = y.format, D.__readType = y.type, D.__formatReadable = Ke.textureFormatReadable(y.format), D.__typeReadable = Ke.textureTypeReadable(y.type)), D;
    }
    this.readRenderTargetPixels = function(y, D, q, H, G, he, me, xe = 0) {
      if (!(y && y.isWebGLRenderTarget)) {
        Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ye = U.get(y).__webglFramebuffer;
      if (y.isWebGLCubeRenderTarget && me !== void 0 && (ye = ye[me]), ye) {
        A.bindFramebuffer(L.FRAMEBUFFER, ye);
        try {
          const De = y.textures[xe], Ze = De.format, Je = De.type;
          y.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + xe);
          const Pe = ks(De);
          if (Pe.__formatReadable === !1) {
            Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (Pe.__typeReadable === !1) {
            Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= y.width - H && q >= 0 && q <= y.height - G && L.readPixels(D, q, H, G, ne.convert(Ze), ne.convert(Je), he);
        } finally {
          const De = F !== null ? U.get(F).__webglFramebuffer : null;
          A.bindFramebuffer(L.FRAMEBUFFER, De);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(y, D, q, H, G, he, me, xe = 0) {
      if (!(y && y.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ye = U.get(y).__webglFramebuffer;
      if (y.isWebGLCubeRenderTarget && me !== void 0 && (ye = ye[me]), ye) if (D >= 0 && D <= y.width - H && q >= 0 && q <= y.height - G) {
        A.bindFramebuffer(L.FRAMEBUFFER, ye);
        const De = y.textures[xe], Ze = De.format, Je = De.type;
        y.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + xe);
        const Pe = ks(De);
        if (Pe.__formatReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (Pe.__typeReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const st = L.createBuffer();
        L.bindBuffer(L.PIXEL_PACK_BUFFER, st), L.bufferData(L.PIXEL_PACK_BUFFER, he.byteLength, L.STREAM_READ), L.readPixels(D, q, H, G, ne.convert(Ze), ne.convert(Je), 0), L.bindBuffer(L.PIXEL_PACK_BUFFER, null);
        const pt = F !== null ? U.get(F).__webglFramebuffer : null;
        A.bindFramebuffer(L.FRAMEBUFFER, pt);
        const ct = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return L.flush(), await mc(L, ct, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, st), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, he), L.bindBuffer(L.PIXEL_PACK_BUFFER, null), L.deleteBuffer(st), L.deleteSync(ct), he;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(y, D = null, q = 0) {
      const H = Math.pow(2, -q), G = Math.floor(y.image.width * H), he = Math.floor(y.image.height * H), me = D !== null ? D.x : 0, xe = D !== null ? D.y : 0;
      W.setTexture2D(y, 0), L.copyTexSubImage2D(L.TEXTURE_2D, q, 0, 0, me, xe, G, he), A.unbindTexture();
    }, this.copyTextureToTexture = function(y, D, q = null, H = null, G = 0, he = 0) {
      let me, xe, ye, De, Ze, Je, Pe, st, pt;
      const ct = y.isCompressedTexture ? y.mipmaps[he] : y.image;
      if (q !== null)
        me = q.max.x - q.min.x, xe = q.max.y - q.min.y, ye = q.isBox3 ? q.max.z - q.min.z : 1, De = q.min.x, Ze = q.min.y, Je = q.isBox3 ? q.min.z : 0;
      else {
        const mt = Math.pow(2, -G);
        me = Math.floor(ct.width * mt), xe = Math.floor(ct.height * mt), y.isDataArrayTexture ? ye = ct.depth : y.isData3DTexture ? ye = Math.floor(ct.depth * mt) : ye = 1, De = 0, Ze = 0, Je = 0;
      }
      H !== null ? (Pe = H.x, st = H.y, pt = H.z) : (Pe = 0, st = 0, pt = 0);
      const et = ne.convert(D.format), Tt = ne.convert(D.type);
      let Ae;
      D.isData3DTexture ? (W.setTexture3D(D, 0), Ae = L.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (W.setTexture2DArray(D, 0), Ae = L.TEXTURE_2D_ARRAY) : (W.setTexture2D(D, 0), Ae = L.TEXTURE_2D), A.activeTexture(L.TEXTURE0), A.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(L.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Nt = A.getParameter(L.UNPACK_ROW_LENGTH), tt = A.getParameter(L.UNPACK_IMAGE_HEIGHT), Ft = A.getParameter(L.UNPACK_SKIP_PIXELS), Zt = A.getParameter(L.UNPACK_SKIP_ROWS), fn = A.getParameter(L.UNPACK_SKIP_IMAGES);
      A.pixelStorei(L.UNPACK_ROW_LENGTH, ct.width), A.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ct.height), A.pixelStorei(L.UNPACK_SKIP_PIXELS, De), A.pixelStorei(L.UNPACK_SKIP_ROWS, Ze), A.pixelStorei(L.UNPACK_SKIP_IMAGES, Je);
      const Bn = y.isDataArrayTexture || y.isData3DTexture, at = D.isDataArrayTexture || D.isData3DTexture;
      if (y.isDepthTexture) {
        const mt = U.get(y), dn = U.get(D), ot = U.get(mt.__renderTarget), gi = U.get(dn.__renderTarget);
        A.bindFramebuffer(L.READ_FRAMEBUFFER, ot.__webglFramebuffer), A.bindFramebuffer(L.DRAW_FRAMEBUFFER, gi.__webglFramebuffer);
        for (let zn = 0; zn < ye; zn++)
          Bn && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, U.get(y).__webglTexture, G, Je + zn), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, U.get(D).__webglTexture, he, pt + zn)), L.blitFramebuffer(De, Ze, me, xe, Pe, st, me, xe, L.DEPTH_BUFFER_BIT, L.NEAREST);
        A.bindFramebuffer(L.READ_FRAMEBUFFER, null), A.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else if (G !== 0 || y.isRenderTargetTexture || U.has(y)) {
        const mt = U.get(y), dn = U.get(D);
        A.bindFramebuffer(L.READ_FRAMEBUFFER, Y), A.bindFramebuffer(L.DRAW_FRAMEBUFFER, N);
        for (let ot = 0; ot < ye; ot++)
          Bn ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, mt.__webglTexture, G, Je + ot) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, mt.__webglTexture, G), at ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, dn.__webglTexture, he, pt + ot) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, dn.__webglTexture, he), G !== 0 ? L.blitFramebuffer(De, Ze, me, xe, Pe, st, me, xe, L.COLOR_BUFFER_BIT, L.NEAREST) : at ? L.copyTexSubImage3D(Ae, he, Pe, st, pt + ot, De, Ze, me, xe) : L.copyTexSubImage2D(Ae, he, Pe, st, De, Ze, me, xe);
        A.bindFramebuffer(L.READ_FRAMEBUFFER, null), A.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else at ? y.isDataTexture || y.isData3DTexture ? L.texSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, Tt, ct.data) : D.isCompressedArrayTexture ? L.compressedTexSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, ct.data) : L.texSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, Tt, ct) : y.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, he, Pe, st, me, xe, et, Tt, ct.data) : y.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, he, Pe, st, ct.width, ct.height, et, ct.data) : L.texSubImage2D(L.TEXTURE_2D, he, Pe, st, me, xe, et, Tt, ct);
      A.pixelStorei(L.UNPACK_ROW_LENGTH, Nt), A.pixelStorei(L.UNPACK_IMAGE_HEIGHT, tt), A.pixelStorei(L.UNPACK_SKIP_PIXELS, Ft), A.pixelStorei(L.UNPACK_SKIP_ROWS, Zt), A.pixelStorei(L.UNPACK_SKIP_IMAGES, fn), he === 0 && D.generateMipmaps && L.generateMipmap(Ae), A.unbindTexture();
    }, this.initRenderTarget = function(y) {
      U.get(y).__webglFramebuffer === void 0 && W.setupRenderTarget(y);
    }, this.initTexture = function(y) {
      y.isCubeTexture ? W.setTextureCube(y, 0) : y.isData3DTexture ? W.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? W.setTexture2DArray(y, 0) : W.setTexture2D(y, 0), A.unbindTexture();
    }, this.resetState = function() {
      C = 0, k = 0, F = null, A.reset(), Me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return hi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = $e._getDrawingBufferColorSpace(e), t.unpackColorSpace = $e._getUnpackColorSpace();
  }
}, Ai = new I();
function zt(e, t, n, i, r, s) {
  const a = 2 * Math.PI * r / 4, o = Math.max(s - 2 * r, 0), l = Math.PI / 4;
  Ai.copy(t), Ai[i] = 0, Ai.normalize();
  const c = 0.5 * a / (a + o), u = 1 - Ai.angleTo(e) / l;
  return Math.sign(Ai[n]) === 1 ? u * c : o / (a + o) + c + c * (1 - u);
}
var Ns = class hl extends Hi {
  constructor(t = 1, n = 1, i = 1, r = 2, s = 0.1) {
    const a = r * 2 + 1;
    if (s = Math.min(t / 2, n / 2, i / 2, s), super(1, 1, 1, a, a, a), this.type = "RoundedBoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: i,
      segments: r,
      radius: s
    }, a === 1) return;
    const o = this.toNonIndexed();
    this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
    const l = new I(), c = new I(), u = new I(t, n, i).divideScalar(2).subScalar(s), d = this.attributes.position.array, h = this.attributes.normal.array, p = this.attributes.uv.array, _ = d.length / 6, M = new I(), g = 0.5 / a;
    for (let f = 0, T = 0; f < d.length; f += 3, T += 2)
      switch (l.fromArray(d, f), c.copy(l), c.x -= Math.sign(c.x) * g, c.y -= Math.sign(c.y) * g, c.z -= Math.sign(c.z) * g, c.normalize(), d[f + 0] = u.x * Math.sign(l.x) + c.x * s, d[f + 1] = u.y * Math.sign(l.y) + c.y * s, d[f + 2] = u.z * Math.sign(l.z) + c.z * s, h[f + 0] = c.x, h[f + 1] = c.y, h[f + 2] = c.z, Math.floor(f / _)) {
        case 0:
          M.set(1, 0, 0), p[T + 0] = zt(M, c, "z", "y", s, i), p[T + 1] = 1 - zt(M, c, "y", "z", s, n);
          break;
        case 1:
          M.set(-1, 0, 0), p[T + 0] = 1 - zt(M, c, "z", "y", s, i), p[T + 1] = 1 - zt(M, c, "y", "z", s, n);
          break;
        case 2:
          M.set(0, 1, 0), p[T + 0] = 1 - zt(M, c, "x", "z", s, t), p[T + 1] = zt(M, c, "z", "x", s, i);
          break;
        case 3:
          M.set(0, -1, 0), p[T + 0] = 1 - zt(M, c, "x", "z", s, t), p[T + 1] = 1 - zt(M, c, "z", "x", s, i);
          break;
        case 4:
          M.set(0, 0, 1), p[T + 0] = 1 - zt(M, c, "x", "y", s, t), p[T + 1] = 1 - zt(M, c, "y", "x", s, n);
          break;
        case 5:
          M.set(0, 0, -1), p[T + 0] = zt(M, c, "x", "y", s, t), p[T + 1] = 1 - zt(M, c, "y", "x", s, n);
          break;
      }
  }
  static fromJSON(t) {
    return new hl(t.width, t.height, t.depth, t.segments, t.radius);
  }
}, Vd = class extends vo {
  constructor() {
    super(), this.name = "RoomEnvironment", this.position.y = -3.5;
    const e = new Hi();
    e.deleteAttribute("uv");
    const t = new St({ side: 1 }), n = new St(), i = new lu(16777215, 900, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const r = new ut(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const s = new nh(e, n, 6), a = new Lt();
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), a.updateMatrix(), s.setMatrixAt(0, a.matrix), a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), a.updateMatrix(), s.setMatrixAt(1, a.matrix), a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), a.updateMatrix(), s.setMatrixAt(2, a.matrix), a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), a.updateMatrix(), s.setMatrixAt(3, a.matrix), a.position.set(2.291, -0.756, -2.621), a.rotation.set(0, -0.286, 0), a.scale.set(1.546, 1.552, 1.496), a.updateMatrix(), s.setMatrixAt(4, a.matrix), a.position.set(-2.193, -0.369, -5.547), a.rotation.set(0, 0.516, 0), a.scale.set(3.875, 3.487, 2.986), a.updateMatrix(), s.setMatrixAt(5, a.matrix), this.add(s);
    const o = new ut(e, ti(50));
    o.position.set(-16.116, 14.37, 8.208), o.scale.set(0.1, 2.428, 2.739), this.add(o);
    const l = new ut(e, ti(50));
    l.position.set(-16.109, 18.021, -8.207), l.scale.set(0.1, 2.425, 2.751), this.add(l);
    const c = new ut(e, ti(17));
    c.position.set(14.904, 12.198, -1.832), c.scale.set(0.15, 4.265, 6.331), this.add(c);
    const u = new ut(e, ti(43));
    u.position.set(-0.462, 8.89, 14.52), u.scale.set(4.38, 5.441, 0.088), this.add(u);
    const d = new ut(e, ti(20));
    d.position.set(3.235, 11.486, -12.541), d.scale.set(2.5, 2, 0.1), this.add(d);
    const h = new ut(e, ti(100));
    h.position.set(0, 20, 0), h.scale.set(1, 0.1, 1), this.add(h);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
};
function ti(e) {
  return new Wh({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: e
  });
}
var Us = [...document.querySelectorAll("[data-sculpture], [data-chip-studio]")], $t = matchMedia("(prefers-reduced-motion: reduce)"), Ja = 54e-5, $a = 1.3, _t;
try {
  Us.length && Gd();
} catch (e) {
  ul(), console.warn("3D studio unavailable; using the lightweight sculptures.", e.message);
}
function ul() {
  Us.forEach((e) => {
    e.classList.remove("studio-ready"), e.querySelector(".scene-studio-output")?.remove();
    const t = e.querySelector(".chip-loading");
    t && (t.textContent = "The interactive model couldn’t load in this browser.");
  }), _t?.domElement.remove(), _t?.dispose();
}
function Gd() {
  _t = new zd({
    antialias: !0,
    alpha: !0,
    powerPreference: "low-power"
  }), _t.setPixelRatio(Math.min(Math.max(devicePixelRatio, 1.5), 2)), _t.setClearColor(0, 0), _t.outputColorSpace = Ct, _t.toneMapping = 4, _t.toneMappingExposure = 1.05, _t.shadowMap.enabled = !0, _t.shadowMap.type = 1, _t.shadowMap.autoUpdate = !1;
  const e = _t.domElement;
  e.className = "sculpture-studio-canvas", e.setAttribute("aria-hidden", "true");
  const t = new Ss(_t), n = new Vd(), i = t.fromScene(n, 0.04);
  n.dispose(), t.dispose();
  const r = {
    cream: new Rn({
      color: 15198704,
      roughness: 0.34,
      metalness: 0.04,
      clearcoat: 0.3,
      clearcoatRoughness: 0.26,
      envMapIntensity: 0.9
    }),
    navy: new Rn({
      color: 1579843,
      roughness: 0.27,
      metalness: 0.55,
      clearcoat: 0.36,
      envMapIntensity: 1.15
    }),
    orange: new Rn({
      color: 12088907,
      roughness: 0.3,
      metalness: 0.72,
      clearcoat: 0.5,
      clearcoatRoughness: 0.24,
      envMapIntensity: 0.8
    }),
    metal: new St({
      color: 13150825,
      roughness: 0.29,
      metalness: 0.82,
      envMapIntensity: 1.1
    }),
    glass: new Rn({
      color: 14015218,
      roughness: 0.15,
      metalness: 0.22,
      transparent: !0,
      opacity: 0.38,
      clearcoat: 1,
      depthWrite: !1,
      side: 2
    })
  }, s = Us.map((M, g) => {
    const f = Hd(M, g, r, i.texture), T = document.createElement("canvas");
    return T.className = "scene-studio-output", T.setAttribute("aria-hidden", "true"), f.context = T.getContext("2d", { alpha: !0 }), f.output = T, M.appendChild(T), f;
  });
  let a = 0, o = 0, l = !0, c = !1;
  const u = () => {
    l = !0, h();
  }, d = new IntersectionObserver((M) => {
    M.forEach((g) => {
      s.find((f) => f.el === g.target).visible = g.isIntersecting;
    }), l = !0, h();
  });
  s.forEach((M) => d.observe(M.el));
  function h() {
    !a && !c && !document.hidden && (a = requestAnimationFrame(p));
  }
  function p(M) {
    if (a = 0, c || document.hidden) return;
    if (M - o < 33) {
      h();
      return;
    }
    o = M;
    const g = s.filter((f) => f.visible);
    if (!(!l && ($t.matches || !g.length))) {
      _t.setScissorTest(!1);
      for (const f of g) {
        const { el: T, scene: S, camera: v, object: E, light: R } = f, w = T.getBoundingClientRect();
        if (w.bottom <= 0 || w.top >= innerHeight || w.width <= 0) continue;
        const m = w.width / w.height, b = f.kind === "chip" ? Math.max(2.55, 2.75 / m) : f.projectLayers ? 2.5 : f.kind === "bridge" ? 2.2 : 1.95;
        v.left = -b * m, v.right = b * m, v.top = b, v.bottom = -b, v.updateProjectionMatrix();
        const V = $t.matches ? 0 : M * 22e-5 + f.phase;
        if (f.kind === "chip") {
          const O = T.closest(".maker-model"), Y = $t.matches ? 1 : Number(O.style.getPropertyValue("--assembly-progress")) || 0, N = parseFloat(O.style.getPropertyValue("--yaw"));
          E.rotation.y = ((Number.isFinite(N) ? N : -32) + 32) * Math.PI / 180, f.chipLayers.forEach((C) => {
            C.group.position.y = C.y + (1 - Y) * C.lift;
          }), T.dataset.renderedAssembly = Y.toFixed(3), (E.userData.pulses || []).forEach((C, k) => {
            const F = (M * Ja + k * 0.27) % $a;
            C.group.visible = !$t.matches && F < 1, C.group.visible && C.dots.forEach((ee, X) => {
              const Z = Math.max(0, F - X * 0.025);
              ee.position.copy(C.curve.getPointAt(Z)), ee.position.y += 0.015, ee.material.opacity = Math.sin(Math.PI * F) * (1 - X / C.dots.length);
            });
          }), T.dataset.pulsesActive = String(!$t.matches), T.dataset.pulsePhase = $t.matches ? "0" : (M * Ja % $a).toFixed(3);
        } else
          E.rotation.y = f.rotation + Math.sin(V) * 0.09 + (parseFloat(T.style.getPropertyValue("--look-x")) || 0) * 0.013, E.rotation.x = (parseFloat(T.style.getPropertyValue("--look-y")) || 0) * 8e-3;
        if (f.projectLayers) {
          const O = $t.matches ? 1 : Nc.clamp((innerHeight * 0.92 - w.top) / Math.min(innerHeight * 0.42, 320), 0, 1), Y = O * O * (3 - 2 * O);
          v.top += (1 - Y) * 0.45, v.lookAt(0, 0.95 + (1 - Y) * 0.2, 0), v.updateProjectionMatrix(), f.projectLayers.forEach((N) => {
            N.group.position.y = N.y + (1 - Y) * N.lift;
          }), T.dataset.assemblyProgress = O.toFixed(3);
        }
        E.position.y = $t.matches ? 0 : Math.sin(V * 1.3) * 0.045, R.shadow.needsUpdate = !0, _t.shadowMap.needsUpdate = !0, _t.setSize(Math.ceil(w.width), Math.ceil(w.height), !1), _t.setViewport(0, 0, w.width, w.height), _t.clear(), _t.render(S, v);
        const P = _t.domElement;
        (f.output.width !== P.width || f.output.height !== P.height) && (f.output.width = P.width, f.output.height = P.height), f.context.clearRect(0, 0, P.width, P.height), f.context.drawImage(P, 0, 0), T.classList.add("studio-ready");
      }
      l = !1, g.length && !$t.matches && h();
    }
  }
  const _ = () => {
    l = !0, h();
  };
  addEventListener("resize", u, { passive: !0 }), addEventListener("scroll", _, { passive: !0 }), addEventListener("pageshow", _), document.addEventListener("visibilitychange", () => {
    document.hidden ? (cancelAnimationFrame(a), a = 0) : _();
  }), $t.addEventListener("change", _), document.querySelector(".maker-model")?.addEventListener("maker-model-change", _), e.addEventListener("webglcontextlost", (M) => {
    M.preventDefault(), c = !0, cancelAnimationFrame(a), d.disconnect(), ul();
  }), u();
}
function Hd(e, t, n, i) {
  const r = e.hasAttribute("data-chip-studio") ? "chip" : [...e.classList].find((T) => T.startsWith("sculpture-") && T !== "sculpture-scene").slice(10), s = [
    "apps",
    "physical",
    "research"
  ].includes(r), a = new vo();
  a.environment = i;
  const o = new Cr(-3, 3, 2.15, -2.15, 0.1, 50);
  o.position.set(5.4, 3.9, 6.4), r === "chip" ? o.position.set(4.9, 5.8, 6.9) : s && o.position.set(4.4, 3.5, 7.7), o.lookAt(0, r === "chip" ? 0.8 : s ? 0.95 : 0.9, 0), a.add(new au(r === "chip" || s ? 16774367 : 16119551, 1053481, 1.4));
  const l = new os(r === "chip" || s ? 16772821 : 16382719, r === "chip" || s ? 2.1 : 2.6);
  l.position.set(-3, 7, 4), l.castShadow = !0, l.shadow.mapSize.set(r === "chip" || s ? 1024 : 512, r === "chip" || s ? 1024 : 512), l.shadow.camera.left = l.shadow.camera.bottom = -4, l.shadow.camera.right = l.shadow.camera.top = 4, l.shadow.normalBias = 0.035, l.shadow.bias = -2e-4, l.shadow.radius = 4, a.add(l);
  const c = new os(r === "chip" || s ? 14476782 : 11183615, r === "chip" || s ? 0.75 : 1.5);
  if (c.position.set(4, 3, -4), a.add(c), r === "chip") {
    l.color.set(16774889), l.intensity = 2.5, c.intensity = 1.65;
    const T = new os(14806271, 0.65);
    T.position.set(-5, 1, -2), a.add(T);
  }
  const u = new Xt();
  a.add(u);
  const d = (T, S, v = 0, E = 0, R = 0) => {
    const w = new ut(T, n[S]);
    return w.position.set(v, E, R), w.castShadow = !0, w.receiveShadow = !0, u.add(w), w;
  }, h = (T, S, v, E, R, w, m, b = 0.08) => d(new Ns(T, S, v, 4, b), E, R, w, m), p = (T, S, v, E, R) => d(new Cs(T, 48, 32), S, v, E, R), _ = (T, S, v, E, R, w) => d(new Xo(T, S, 24, 96), v, E, R, w);
  r !== "chip" && !s && h(s ? 4.2 : 3.4, 0.16, s ? 3.1 : 2.65, "navy", 0, -0.04, 0, 0.075);
  const M = new ut(new In(12, 12), new Bh({
    color: 69142,
    opacity: s ? 0.06 : 0.14
  }));
  M.rotation.x = -Math.PI / 2, M.position.y = r === "chip" ? -0.46 : -0.135, M.receiveShadow = !0, a.add(M);
  let g = null, f = null;
  if (r === "chip") f = Wd(u, n);
  else if (s) g = kd(u, n, r)[0].layers;
  else if (r === "tools") {
    h(2.2, 0.14, 1.75, "cream", 0, 0.23, 0);
    const T = h(1.96, 0.12, 1.52, "metal", 0, 0.75, 0, 0.05);
    T.rotation.y = 0.12;
    const S = h(1.74, 0.12, 1.28, "glass", 0, 1.38, 0, 0.05);
    S.rotation.y = -0.12, p(0.37, "orange", 0, 1.04, 0.03);
    for (const v of [-0.69, 0.69]) for (const E of [-0.47, 0.47]) d(new ci(0.035, 0.035, 1.25, 16), "metal", v, 0.79, E);
  } else if (r === "workshops")
    [
      0.23,
      0.59,
      0.95
    ].forEach((T, S) => {
      const v = _(0.7 - S * 0.05, 0.15, S === 1 ? "navy" : "cream", 0, T, 0);
      v.rotation.x = Math.PI / 2;
    }), p(0.32, "orange", 0.12, 1.41, 0), _(0.42, 0.035, "metal", -0.01, 1.4, 0).rotation.y = 0.6;
  else if (r === "community" || r === "people") {
    const T = _(0.62, 0.18, "cream", -0.58, 0.84, 0.06);
    T.rotation.y = -0.3;
    const S = _(0.62, 0.18, "orange", 0.45, 0.84, 0.07);
    S.rotation.y = 0.9, _(0.55, 0.16, "navy", 0.03, 1.27, -0.12).rotation.set(0.3, -0.8, 0.1);
  } else if (r === "hackathon") {
    d(new Fh(0.66, 0.19, 160, 24, 2, 3), "cream", 0, 1.04, 0).rotation.set(0.1, 0.3, -0.35);
    const T = _(1.15, 0.035, "metal", 0, 0.98, 0);
    T.rotation.x = 1.1, p(0.24, "orange", 0.9, 0.51, 0.44);
  } else {
    const T = new Do();
    T.moveTo(-1.12, 0), T.lineTo(-1.12, 1.05), T.absarc(0, 1.05, 1.12, Math.PI, 0, !0), T.lineTo(1.12, 0), T.lineTo(0.73, 0), T.lineTo(0.73, 1.05), T.absarc(0, 1.05, 0.73, 0, Math.PI, !1), T.lineTo(-0.73, 0), T.closePath(), d(new Nh(T, {
      depth: 0.45,
      bevelEnabled: !0,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.055,
      bevelThickness: 0.055,
      curveSegments: 48
    }), "cream", 0, 0.1, -0.3), p(0.38, "orange", 0.08, 0.49, 0.24);
    const S = _(0.51, 0.025, "metal", 0.08, 0.5, 0.24);
    S.rotation.x = 1.25;
  }
  return {
    el: e,
    kind: r,
    scene: a,
    camera: o,
    object: u,
    light: l,
    phase: t * 1.9,
    rotation: -0.12,
    visible: !1,
    projectLayers: g,
    chipLayers: f
  };
}
function kd(e, t, n) {
  const i = {
    cream: new St({
      color: 14341061,
      roughness: 0.54,
      metalness: 0.45
    }),
    navy: new St({
      color: 1516333,
      roughness: 0.62,
      metalness: 0.15
    }),
    black: new St({
      color: 1053979,
      roughness: 0.7
    }),
    copper: new St({
      color: 12025682,
      roughness: 0.4,
      metalness: 0.8
    }),
    brass: new St({
      color: 12428656,
      roughness: 0.48,
      metalness: 0.75
    }),
    silver: new St({
      color: 11976131,
      roughness: 0.38,
      metalness: 0.8
    }),
    paper: new St({
      color: 15525074,
      roughness: 0.96
    }),
    ink: new St({
      color: 5792619,
      roughness: 0.9
    }),
    green: new St({
      color: 2375997,
      roughness: 0.78,
      metalness: 0.12
    })
  }, r = new Xt();
  e.add(r);
  const s = [];
  function a(f, T) {
    const S = new Xt();
    return S.position.y = f, r.add(S), s.push({
      group: S,
      y: f,
      lift: T
    }), S;
  }
  function o(f, T, S, v = 0, E = 0, R = 0) {
    const w = new ut(T, typeof S == "string" ? i[S] : S);
    return w.position.set(v, E, R), w.castShadow = !0, w.receiveShadow = !0, f.add(w), w;
  }
  const l = (f, T, S, v, E, R = 0, w = 0, m = 0, b = 0.03) => o(f, new Ns(T, S, v, 6, Math.min(b, T / 2, S / 2, v / 2)), E, R, w, m), c = (f, T, S, v, E, R, w) => o(f, new ci(T, T, S, 40), v, E, R, w);
  function u(f, T, S = "copper", v = 9e-3) {
    return o(f, new Zo(new wo(T.map((E) => new I(...E)), !1, "centripetal"), 40, v, 8, !1), S);
  }
  function d(f = !1) {
    const T = document.createElement("canvas");
    T.width = 1200, T.height = 760;
    const S = T.getContext("2d");
    if (S.fillStyle = "#101c28", S.fillRect(0, 0, 1200, 760), S.fillStyle = "#1d2a37", S.fillRect(0, 0, 1200, 58), [
      "#b9825c",
      "#c6b17d",
      "#6e8b80"
    ].forEach((E, R) => {
      S.fillStyle = E, S.beginPath(), S.arc(30 + R * 25, 29, 7, 0, Math.PI * 2), S.fill();
    }), S.font = "22px sans-serif", S.fillStyle = "#cbd1d4", S.fillText(f ? "Research notebook" : "Project workspace", 145, 38), S.fillStyle = "#182531", S.fillRect(0, 58, 210, 702), S.fillStyle = "#a5adb5", S.font = "18px sans-serif", [
      "EXPLORER",
      "notebooks",
      "  analysis.py",
      "  observations",
      "  results",
      "README.md"
    ].forEach((E, R) => S.fillText(E, 22, 108 + R * 46)), f) {
      S.fillStyle = "#e5dfd1", S.font = "32px sans-serif", S.fillText("Exploring the data", 255, 119), S.fillStyle = "#758590", S.font = "19px sans-serif", S.fillText("Observations / model / comparison", 255, 154);
      for (let E = 0; E < 5; E++)
        S.strokeStyle = "#2c3a46", S.lineWidth = 1, S.beginPath(), S.moveTo(270, 213 + E * 72), S.lineTo(1130, 213 + E * 72), S.stroke();
      for (let E = 0; E < 2; E++) {
        S.strokeStyle = E ? "#8ca9ac" : "#c49560", S.lineWidth = E ? 3 : 5, S.beginPath();
        for (let R = 0; R < 58; R++) {
          const w = 280 + R * 14.5, m = 465 - R * 3.4 + Math.sin(R * 0.72 + E) * 18 + Math.cos(R * 0.27) * 22 + E * 42;
          R ? S.lineTo(w, m) : S.moveTo(w, m);
        }
        S.stroke();
      }
      for (let E = 0; E < 3; E++)
        S.fillStyle = "#1c2b37", S.fillRect(260 + E * 295, 580, 270, 122), S.fillStyle = "#85959f", S.font = "17px sans-serif", S.fillText([
          "SAMPLE",
          "METHOD",
          "OUTPUT"
        ][E], 280 + E * 295, 610), S.fillStyle = "#dfd8c9", S.font = "23px sans-serif", S.fillText([
          "Time series",
          "Compare & test",
          "Notebook"
        ][E], 280 + E * 295, 659);
    } else {
      const E = [
        "const project = {",
        '  idea: "something useful",',
        '  tools: ["AI", "curiosity"],',
        '  status: "work in progress"',
        "};",
        "",
        "function makeSomething() {",
        "  build(project);",
        "  test();",
        "  tryAgain();",
        "}"
      ];
      S.font = "22px monospace", E.forEach((R, w) => {
        S.fillStyle = "#50616e", S.fillText(String(w + 1), 234, 121 + w * 43), S.fillStyle = w % 3 === 0 ? "#c59a70" : w % 3 === 1 ? "#9bb5b4" : "#d0d2cb", S.fillText(R, 278, 121 + w * 43);
      }), S.fillStyle = "#e5dfd1", S.fillRect(795, 90, 370, 608), S.fillStyle = "#183044", S.fillRect(813, 112, 334, 39), S.fillStyle = "#b98a57", S.beginPath(), S.arc(980, 326, 89, 0, Math.PI * 2), S.fill(), S.strokeStyle = "#263c4c", S.lineWidth = 8, S.beginPath(), S.ellipse(980, 326, 123, 44, -0.55, 0, Math.PI * 2), S.stroke(), S.fillStyle = "#253748", S.font = "28px sans-serif", S.fillText("A small idea.", 843, 502), S.fillStyle = "#a19787", S.fillRect(844, 530, 242, 6), S.fillRect(844, 551, 190, 6), S.fillStyle = "#be945e", S.fillRect(844, 597, 146, 42);
    }
    const v = new si(T);
    return v.colorSpace = Ct, v.anisotropy = 4, v;
  }
  function h(f, T, S, v, E, R, w) {
    l(f, T, S, 0.085, "cream", v, E, R, 0.04), l(f, T - 0.07, S - 0.07, 0.018, "black", v, E, R + 0.05, 0.025);
    const m = o(f, new In(T - 0.18, S - 0.18), new fi({
      map: d(w),
      toneMapped: !1
    }), v, E, R + 0.061);
    m.castShadow = !1;
    const b = o(f, new Cs(0.015, 12, 8), "black", v, E + S / 2 - 0.04, R + 0.059);
    b.castShadow = !1;
  }
  const p = document.createElement("canvas");
  p.width = p.height = 128;
  const _ = p.getContext("2d"), M = _.createRadialGradient(64, 64, 8, 64, 64, 64);
  M.addColorStop(0, "rgba(0,0,0,.35)"), M.addColorStop(0.55, "rgba(0,0,0,.15)"), M.addColorStop(1, "rgba(0,0,0,0)"), _.fillStyle = M, _.fillRect(0, 0, 128, 128);
  const g = o(r, new In(5.8, 4.1), new fi({
    map: new si(p),
    transparent: !0,
    depthWrite: !1
  }), 0, -0.095, 0.1);
  if (g.rotation.x = -Math.PI / 2, g.castShadow = !1, g.receiveShadow = !1, n === "apps") {
    const f = a(0.04, 0);
    l(f, 3.55, 0.13, 2.3, "cream", 0, 0, 0.12, 0.06), l(f, 3.45, 0.025, 2.2, "silver", 0, -0.068, 0.12, 0.012);
    for (const R of [-0.48, -0.22]) l(f, 0.012, 0.034, 0.16, "black", -1.776, 0, R, 0.012);
    l(f, 0.55, 0.025, 0.035, "ink", 0, 0.065, 1.25, 0.012);
    const T = c(f, 0.065, 3.05, "silver", 0, 0.09, -0.9);
    T.rotation.z = Math.PI / 2;
    const S = a(0.114, 0.3);
    l(S, 2.96, 0.018, 1.15, "black", 0, 0, -0.27, 0.04);
    for (let R = 0; R < 5; R++) for (let w = 0; w < 12; w++) {
      const m = -1.35 + w * 0.245, b = -0.72 + R * 0.225;
      l(S, 0.205, 0.022, 0.17, "navy", m, 0.018, b, 0.018), R < 4 && l(S, 0.025, 2e-3, 9e-3, "silver", m - 0.055, 0.031, b - 0.04, 3e-3);
    }
    l(S, 1.08, 0.024, 0.17, "navy", 0, 0.018, 0.18, 0.018), l(S, 1.1, 9e-3, 0.54, "silver", 0, 1e-3, 0.77, 0.035), l(S, 1.07, 0.01, 0.51, "cream", 0, 4e-3, 0.77, 0.03);
    for (const R of [-1, 1]) for (let w = 0; w < 20; w++) l(S, 0.09, 3e-3, 0.012, "ink", R * 1.58, 4e-3, -0.72 + w * 0.055, 4e-3);
    const v = a(0.14, 0.7), E = new Xt();
    E.position.z = -0.92, E.rotation.x = -0.19, v.add(E), h(E, 3.55, 2.25, 0, 1.13, 0, !1);
  } else if (n === "physical") {
    const f = a(0.1, 0);
    l(f, 3.25, 0.2, 2.35, "cream", 0, 0, 0, 0.08), l(f, 2.99, 0.022, 2.09, "black", 0, 0.111, 0, 0.05);
    for (const m of [-1.38, 1.38]) for (const b of [-0.92, 0.92]) c(f, 0.06, 0.21, "brass", m, 0.18, b);
    const T = a(0.28, 0.48);
    l(T, 2.94, 0.045, 2.04, "green", 0, 0, 0, 0.04);
    for (const m of [-1, 1]) for (let b = 0; b < 8; b++) {
      const V = -0.95 + b * 0.27;
      u(T, [
        [
          V,
          0.028,
          m * 0.92
        ],
        [
          V,
          0.028,
          m * 0.63
        ],
        [
          V * 0.45,
          0.028,
          m * 0.44
        ]
      ], "brass", 7e-3), l(T, 0.055, 0.025, 0.1, "silver", V, 0.035, m * 0.87, 8e-3);
    }
    l(T, 0.92, 0.12, 0.85, "black", -0.23, 0.085, 0.05, 0.025);
    for (let m = 0; m < 10; m++) for (const b of [-1, 1])
      l(T, 0.038, 0.026, 0.15, "silver", -0.61 + m * 0.085, 0.047, 0.05 + b * 0.49, 5e-3), l(T, 0.15, 0.026, 0.035, "silver", -0.23 + b * 0.52, 0.047, -0.32 + m * 0.08, 5e-3);
    l(T, 0.42, 0.21, 0.32, "silver", -1.2, 0.13, 0.55, 0.05), l(T, 0.33, 0.13, 0.013, "black", -1.2, 0.13, 0.716, 0.04);
    for (let m = 0; m < 5; m++)
      l(T, 0.13, 0.07, 0.065, "paper", 0.64 + m * 0.13, 0.061, -0.55, 0.012), l(T, 0.03, 0.075, 0.07, "silver", 0.59 + m * 0.13, 0.063, -0.55, 5e-3);
    for (let m = 0; m < 3; m++)
      c(T, 0.095, 0.2, "black", 0.72 + m * 0.24, 0.12, 0.61), c(T, 0.08, 8e-3, "silver", 0.72 + m * 0.24, 0.223, 0.61);
    const S = a(0.5, 0.78);
    l(S, 0.77, 0.045, 0.74, "navy", 0.87, 0, -0.18, 0.025), c(S, 0.25, 0.13, "silver", 0.87, 0.085, -0.18), c(S, 0.18, 0.012, "black", 0.87, 0.157, -0.18);
    for (let m = 0; m < 9; m++) for (let b = 0; b < 9; b++) {
      const V = (m - 4) * 0.035, P = (b - 4) * 0.035;
      V * V + P * P < 0.025 && c(S, 9e-3, 4e-3, "ink", 0.87 + V, 0.165, -0.18 + P);
    }
    const v = a(0.08, 0.45);
    v.position.x = 1.73, v.rotation.y = -0.22;
    const E = c(v, 0.105, 0.68, "navy", 0, 0.045, 0.54);
    E.rotation.x = Math.PI / 2;
    for (let m = 0; m < 5; m++) o(v, new Xo(0.106, 9e-3, 8, 32), "ink", 0, 0.045, 0.31 + m * 0.105);
    const R = c(v, 0.085, 0.12, "brass", 0, 0.045, 0.16);
    R.rotation.x = Math.PI / 2;
    const w = c(v, 0.025, 0.8, "silver", 0, 0.045, -0.28);
    w.rotation.x = Math.PI / 2, l(v, 0.045, 0.018, 0.13, "silver", 0, 0.045, -0.74, 4e-3);
  } else {
    const f = a(0.015, 0);
    l(f, 1.52, 0.085, 1.03, "cream", 0.1, 0, -0.45, 0.08);
    const T = l(f, 0.3, 0.86, 0.18, "silver", 0.1, 0.46, -0.77, 0.04);
    T.rotation.x = -0.12;
    const S = a(1.65, 0.7);
    h(S, 3.55, 2.24, 0, 0, -0.76, !0), l(S, 3.4, 0.035, 0.03, "silver", 0, -1.08, -0.7, 0.01);
    const v = a(0.06, 0.3);
    v.rotation.y = -0.18, l(v, 1.67, 0.12, 1.15, "navy", -0.6, 0, 0.85, 0.035), l(v, 1.59, 0.084, 1.08, "paper", -0.6, 0.02, 0.85, 0.02);
    for (let w = 0; w < 5; w++) l(v, 1.52, 2e-3, 9e-3, "ink", -0.6, -0.01 + w * 0.012, 1.393, 1e-3);
    for (let w = 0; w < 7; w++) l(v, 1.12, 2e-3, 7e-3, "ink", -0.61, 0.065, 0.48 + w * 0.115, 1e-3);
    const E = c(v, 0.032, 1.4, "copper", 0.58, 0.1, 0.85);
    E.rotation.x = Math.PI / 2, E.rotation.z = -0.13;
    const R = o(v, new sh(0.032, 0.16, 24), "silver", 0.58, 0.1, 1.63);
    R.rotation.x = Math.PI / 2, l(f, 0.47, 0.18, 0.71, "cream", 1.38, 0.08, 0.5, 0.085), l(f, 0.013, 8e-3, 0.24, "ink", 1.38, 0.175, 0.36, 4e-3), c(f, 0.025, 0.065, "black", 1.38, 0.18, 0.43).rotation.x = Math.PI / 2;
  }
  return n === "physical" && r.scale.setScalar(1.15), [{
    branch: n,
    group: r,
    layers: s
  }];
}
function Wd(e, t) {
  const n = document.createElement("canvas");
  n.width = n.height = 256;
  const i = n.getContext("2d"), r = i.createImageData(256, 256);
  let s = 173;
  for (let C = 0; C < r.data.length; C += 4) {
    s = s * 1664525 + 1013904223 >>> 0;
    const k = 175 + s % 55;
    r.data.set([
      k,
      k,
      k,
      255
    ], C);
  }
  i.putImageData(r, 0, 0);
  const a = new si(n);
  a.wrapS = a.wrapT = yr, a.repeat.set(3, 3);
  const o = document.createElement("canvas");
  o.width = o.height = 512;
  const l = o.getContext("2d");
  l.fillStyle = "#9b9b9b", l.fillRect(0, 0, 512, 512);
  for (let C = 0; C < 512; C++) {
    s = s * 1664525 + 1013904223 >>> 0;
    const k = 120 + s % 65;
    l.strokeStyle = `rgb(${k},${k},${k})`, l.beginPath(), l.moveTo(0, C), l.lineTo(512, C), l.stroke();
  }
  const c = new si(o), u = {
    ...t,
    cream: new Rn({
      color: 13357266,
      roughness: 0.23,
      metalness: 0.94,
      bumpMap: c,
      bumpScale: 12e-4,
      envMapIntensity: 1.65,
      clearcoat: 0.18
    }),
    navy: new Rn({
      color: 795440,
      roughness: 0.32,
      metalness: 0.15,
      bumpMap: a,
      bumpScale: 12e-4,
      clearcoat: 0.65,
      clearcoatRoughness: 0.2,
      envMapIntensity: 1.25
    }),
    orange: new St({
      color: 12219721,
      roughness: 0.22,
      metalness: 0.95,
      envMapIntensity: 1.45
    }),
    metal: new St({
      color: 14268265,
      roughness: 0.19,
      metalness: 1,
      envMapIntensity: 1.7
    }),
    substrate: new St({
      color: 1186077,
      roughness: 0.48,
      metalness: 0.08
    }),
    solder: new St({
      color: 13028305,
      roughness: 0.22,
      metalness: 0.95,
      envMapIntensity: 1.4
    }),
    ceramic: new St({
      color: 7101768,
      roughness: 0.5,
      metalness: 0.05
    })
  };
  e.userData.pulses = [];
  const d = [];
  function h(C, k) {
    const F = new Xt();
    return F.position.y = C, e.add(F), d.push({
      group: F,
      y: C,
      lift: k
    }), F;
  }
  function p(C, k, F, ee = 0, X = 0, Z = 0) {
    const J = new ut(k, typeof F == "string" ? u[F] : F);
    return J.position.set(ee, X, Z), J.castShadow = !0, J.receiveShadow = !0, C.add(J), J;
  }
  const _ = (C, k, F, ee, X, Z, J, Le, we = 0.08) => p(C, new Ns(k, F, ee, 5, we), X, Z, J, Le);
  function M(C, k) {
    for (const F of [-1.38, 1.38]) for (const ee of [-1.38, 1.38])
      p(C, new ci(0.079, 0.079, 8e-3, 32), "substrate", F, k - 9e-3, ee), p(C, new ci(0.059, 0.066, 0.028, 32), "solder", F, k, ee), _(C, 0.062, 3e-3, 0.011, "substrate", F, k + 0.015, ee, 2e-3), _(C, 0.011, 3e-3, 0.062, "substrate", F, k + 0.015, ee, 2e-3);
  }
  function g(C, k) {
    const F = new Uo();
    k.slice(1).forEach((Z, J) => F.add(new Po(new I(...k[J]), new I(...Z)))), p(C, new Zo(F, 32, 6e-3, 8, !1), "metal");
    const ee = new Xt();
    C.add(ee);
    const X = Array.from({ length: 6 }, (Z, J) => {
      const Le = new ut(new Cs(J ? 0.017 : 0.027, 12, 8), new fi({
        color: J ? 15054431 : 16773575,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      }));
      return ee.add(Le), Le;
    });
    e.userData.pulses.push({
      group: ee,
      dots: X,
      curve: F
    });
  }
  const f = h(0.32, -0.65);
  _(f, 3.38, 0.11, 3.38, "cream", 0, 0, 0, 0.045), _(f, 3.27, 0.022, 3.27, "substrate", 0, -0.06, 0, 0.035), _(f, 2.62, 0.018, 2.62, "metal", 0, 0.064, 0, 0.025), _(f, 2.48, 0.019, 2.48, "cream", 0, 0.075, 0, 0.02), M(f, 0.09);
  const T = h(0.5, 0);
  _(T, 3.3, 0.095, 3.3, "navy", 0, 0, 0, 0.035), _(T, 3.29, 0.012, 3.29, "orange", 0, -0.024, 0, 0.03), _(T, 3.3, 0.018, 3.3, "navy", 0, -0.038, 0, 0.03);
  for (let C = 0; C < 12; C++) {
    const k = -1.2 + C * 0.218;
    for (const F of [-1, 1]) for (const [ee, X] of [[k, F * 1.49], [F * 1.49, k]]) {
      const Z = p(T, new Oh(0.012, 0.024, 12), "metal", ee, 0.049, X);
      Z.rotation.x = -Math.PI / 2, Z.castShadow = !1;
    }
  }
  for (const C of [-1, 1]) for (let k = 0; k < 5; k++) {
    const F = -0.48 + k * 0.24;
    for (const [ee, X, Z] of [[
      F,
      C * 0.94,
      !1
    ], [
      C * 0.94,
      F,
      !0
    ]]) {
      const J = new Xt();
      J.position.set(ee, 0.065, X), J.rotation.y = Z ? Math.PI / 2 : 0, T.add(J), _(J, 0.11, 0.045, 0.055, "ceramic", 0, 0, 0, 6e-3);
      for (const Le of [-1, 1]) _(J, 0.026, 0.048, 0.06, "solder", Le * 0.05, 0, 0, 5e-3);
    }
  }
  const S = document.createElement("canvas");
  S.width = S.height = 1024;
  const v = S.getContext("2d");
  v.strokeStyle = "#b7c6c2", v.lineWidth = 2, v.globalAlpha = 0.5, v.strokeRect(283, 283, 458, 458), v.font = "18px monospace", v.fillStyle = "#d1dbd6", v.fillText("OxAIMS / MAKER BOARD", 100, 860), v.font = "13px monospace", v.fillText("REV 01", 100, 884);
  for (let C = 0; C < 5; C++)
    v.fillText(`C${C + 1}`, 360 + C * 74, 242), v.fillText(`R${C + 1}`, 360 + C * 74, 797);
  v.beginPath(), v.moveTo(280, 280), v.lineTo(305, 280), v.lineTo(280, 305), v.closePath(), v.fill();
  const E = new si(S);
  E.colorSpace = Ct;
  const R = p(T, new In(3.3, 3.3), new fi({
    map: E,
    transparent: !0,
    depthWrite: !1
  }), 0, 0.05, 0);
  R.rotation.x = -Math.PI / 2, R.castShadow = !1;
  for (const C of [-1, 1])
    g(T, [
      [
        -1.6,
        0.056,
        C * 0.66
      ],
      [
        -1.05,
        0.056,
        C * 0.66
      ],
      [
        -0.72,
        0.056,
        C * 0.3
      ],
      [
        -0.48,
        0.056,
        C * 0.3
      ]
    ]), g(T, [
      [
        1.6,
        0.056,
        C * 0.66
      ],
      [
        1.05,
        0.056,
        C * 0.66
      ],
      [
        0.72,
        0.056,
        C * 0.3
      ],
      [
        0.48,
        0.056,
        C * 0.3
      ]
    ]), g(T, [
      [
        C * 0.74,
        0.056,
        -1.61
      ],
      [
        C * 0.74,
        0.056,
        -1.08
      ],
      [
        C * 0.32,
        0.056,
        -0.65
      ]
    ]), g(T, [
      [
        C * 0.74,
        0.056,
        1.61
      ],
      [
        C * 0.74,
        0.056,
        1.08
      ],
      [
        C * 0.32,
        0.056,
        0.65
      ]
    ]), p(T, new ci(0.035, 0.035, 0.012, 20), "metal", C * 1.05, 0.065, 0.66);
  M(T, 0.065);
  const w = h(0.65, 0.45);
  _(w, 1.25, 0.06, 1.25, "substrate", 0, -5e-3, 0, 0.022), _(w, 1.16, 0.028, 1.16, "orange", 0, 0.036, 0, 0.025), _(w, 1.06, 0.105, 1.06, "cream", 0, 0.095, 0, 0.037);
  for (let C = 0; C < 10; C++) {
    const k = -0.48 + C * 0.107;
    for (const F of [-1, 1])
      _(w, 0.032, 0.022, 0.18, "metal", k, -0.016, F * 0.65, 5e-3), _(w, 0.18, 0.022, 0.032, "metal", F * 0.65, -0.016, k, 5e-3), _(w, 0.035, 0.037, 0.042, "solder", k, -0.027, F * 0.73, 5e-3), _(w, 0.042, 0.037, 0.035, "solder", F * 0.73, -0.027, k, 5e-3);
  }
  const m = document.createElement("canvas");
  m.width = m.height = 512;
  const b = m.getContext("2d"), V = new si(m);
  V.colorSpace = Ct;
  function P() {
    b.clearRect(0, 0, 512, 512), b.fillStyle = "#424c50", b.textAlign = "left", b.textBaseline = "middle", b.font = "600 76px sans-serif", b.fillText("OxAIMS", 63, 210), b.font = "24px monospace", b.fillText("MAKER SERIES", 66, 280), b.font = "19px monospace", b.fillText("OXA-01   /   REV A", 66, 325), b.beginPath(), b.arc(70, 80, 9, 0, Math.PI * 2), b.fill();
    for (let C = 0; C < 8; C++) for (let k = 0; k < 8; k++) (k * C + k + C) % 3 !== 0 && b.fillRect(345 + k * 7, 354 + C * 7, 5, 5);
    V.needsUpdate = !0, document.querySelector(".maker-model")?.dispatchEvent(new Event("maker-model-change"));
  }
  P();
  const O = p(w, new In(0.98, 0.98), new St({
    map: V,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.5,
    metalness: 0.55,
    polygonOffset: !0,
    polygonOffsetFactor: -1
  }), 0, 0.148, 0);
  O.rotation.x = -Math.PI / 2, O.castShadow = !1;
  const Y = h(0.85, 1.15), N = _(Y, 3.32, 0.035, 3.32, new Rn({
    color: 11979736,
    transparent: !0,
    opacity: 0.12,
    roughness: 0.08,
    metalness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.07,
    envMapIntensity: 1.8,
    depthWrite: !1,
    side: 0
  }), 0, 0, 0, 0.035);
  N.castShadow = !1;
  for (const C of [-1.49, 1.49])
    _(Y, 2.96, 0.025, 0.025, "metal", 0, 0.041, C, 0.01), _(Y, 0.025, 0.025, 2.96, "metal", C, 0.041, 0, 0.01);
  return M(Y, 0.055), d;
}
