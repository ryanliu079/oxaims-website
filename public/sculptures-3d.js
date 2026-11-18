var Er = 1e3, fn = 1001, _s = 1002, Ct = 1003, Tl = 1004, bl = 1005, Ot = 1006, Al = 1007, Rs = 1008, yn = 1009, wl = 1010, Rl = 1011, io = 1012, Cl = 1013, Un = 1014, Gi = 1015, En = 1016, ro = 1017, so = 1018, ao = 1020, Pl = 35902, Ll = 35899, Il = 1021, Nl = 1022, Di = 1023, Oi = 1026, oo = 1027, lo = 1028, co = 1029, Tr = 1030, ho = 1031, uo = 1033, Ul = 33776, Dl = 33777, Ol = 33778, Fl = 33779, Bl = 35840, zl = 35841, Vl = 35842, Gl = 35843, Hl = 36196, kl = 37492, Wl = 37496, Xl = 37488, ql = 37489, Yl = 37490, Kl = 37491, Jl = 37808, Zl = 37809, $l = 37810, Ql = 37811, jl = 37812, ec = 37813, tc = 37814, nc = 37815, ic = 37816, rc = 37817, sc = 37818, ac = 37819, oc = 37820, lc = 37821, cc = 36492, hc = 36494, uc = 36495, fc = 36283, dc = 36284, pc = 36285, mc = 36286, br = 2300, Ms = 2301, Dr = 2302, Zs = 2303, $s = 2400, Qs = 2401, js = 2402, gc = 3200;
var Rt = "srgb", Ss = "srgb-linear", Ar = "linear", wr = "srgb", Or = 7680;
var vc = 35044;
var di = 2e3;
function _c(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function Mc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Rr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Sc() {
  const e = Rr("canvas");
  return e.style.display = "block", e;
}
var ea = {}, pi = null;
function ta(...e) {
  const t = "THREE." + e.shift();
  pi ? pi("log", t, ...e) : console.log(t, ...e);
}
function fo(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const n = e[1];
    n && n.isStackTrace ? e[0] += " " + n.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function Fe(...e) {
  e = fo(e);
  const t = "THREE." + e.shift();
  if (pi) pi("warn", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function Be(...e) {
  e = fo(e);
  const t = "THREE." + e.shift();
  if (pi) pi("error", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function hi(...e) {
  const t = e.join(" ");
  t in ea || (ea[t] = !0, Fe(...e));
}
function xc(e, t, n) {
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
var yc = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
}, Bn = class {
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
], Fr = Math.PI / 180, xs = 180 / Math.PI;
function vi() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (bt[e & 255] + bt[e >> 8 & 255] + bt[e >> 16 & 255] + bt[e >> 24 & 255] + "-" + bt[t & 255] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 15 | 64] + bt[t >> 24 & 255] + "-" + bt[n & 63 | 128] + bt[n >> 8 & 255] + "-" + bt[n >> 16 & 255] + bt[n >> 24 & 255] + bt[i & 255] + bt[i >> 8 & 255] + bt[i >> 16 & 255] + bt[i >> 24 & 255]).toLowerCase();
}
function Ye(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ec(e, t) {
  return (e % t + t) % t;
}
function Br(e, t, n) {
  return (1 - n) * e + n * t;
}
function Si(e, t) {
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
function Pt(e, t) {
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
var de = class po {
  static {
    po.prototype.isVector2 = !0;
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
    return this.x = Ye(this.x, t.x, n.x), this.y = Ye(this.y, t.y, n.y), this;
  }
  clampScalar(t, n) {
    return this.x = Ye(this.x, t, n), this.y = Ye(this.y, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ye(i, t, n));
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
    return Math.acos(Ye(i, -1, 1));
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
}, zn = class {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, a) {
    let o = n[i + 0], c = n[i + 1], l = n[i + 2], u = n[i + 3], d = r[s + 0], h = r[s + 1], m = r[s + 2], _ = r[s + 3];
    if (u !== _ || o !== d || c !== h || l !== m) {
      let v = o * d + c * h + l * m + u * _;
      v < 0 && (d = -d, h = -h, m = -m, _ = -_, v = -v);
      let p = 1 - a;
      if (v < 0.9995) {
        const f = Math.acos(v), b = Math.sin(f);
        p = Math.sin(p * f) / b, a = Math.sin(a * f) / b, o = o * p + d * a, c = c * p + h * a, l = l * p + m * a, u = u * p + _ * a;
      } else {
        o = o * p + d * a, c = c * p + h * a, l = l * p + m * a, u = u * p + _ * a;
        const f = 1 / Math.sqrt(o * o + c * c + l * l + u * u);
        o *= f, c *= f, l *= f, u *= f;
      }
    }
    e[t] = o, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const a = n[i], o = n[i + 1], c = n[i + 2], l = n[i + 3], u = r[s], d = r[s + 1], h = r[s + 2], m = r[s + 3];
    return e[t] = a * m + l * u + o * h - c * d, e[t + 1] = o * m + l * d + c * u - a * h, e[t + 2] = c * m + l * h + a * d - o * u, e[t + 3] = l * m - a * u - o * d - c * h, e;
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
    const n = e._x, i = e._y, r = e._z, s = e._order, a = Math.cos, o = Math.sin, c = a(n / 2), l = a(i / 2), u = a(r / 2), d = o(n / 2), h = o(i / 2), m = o(r / 2);
    switch (s) {
      case "XYZ":
        this._x = d * l * u + c * h * m, this._y = c * h * u - d * l * m, this._z = c * l * m + d * h * u, this._w = c * l * u - d * h * m;
        break;
      case "YXZ":
        this._x = d * l * u + c * h * m, this._y = c * h * u - d * l * m, this._z = c * l * m - d * h * u, this._w = c * l * u + d * h * m;
        break;
      case "ZXY":
        this._x = d * l * u - c * h * m, this._y = c * h * u + d * l * m, this._z = c * l * m + d * h * u, this._w = c * l * u - d * h * m;
        break;
      case "ZYX":
        this._x = d * l * u - c * h * m, this._y = c * h * u + d * l * m, this._z = c * l * m - d * h * u, this._w = c * l * u + d * h * m;
        break;
      case "YZX":
        this._x = d * l * u + c * h * m, this._y = c * h * u + d * l * m, this._z = c * l * m - d * h * u, this._w = c * l * u - d * h * m;
        break;
      case "XZY":
        this._x = d * l * u - c * h * m, this._y = c * h * u - d * l * m, this._z = c * l * m + d * h * u, this._w = c * l * u + d * h * m;
        break;
      default:
        Fe("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], c = t[2], l = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const h = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / h, this._x = (l - o) * h, this._y = (r - c) * h, this._z = (s - i) * h;
    } else if (n > a && n > u) {
      const h = 2 * Math.sqrt(1 + n - a - u);
      this._w = (l - o) / h, this._x = 0.25 * h, this._y = (i + s) / h, this._z = (r + c) / h;
    } else if (a > u) {
      const h = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / h, this._x = (i + s) / h, this._y = 0.25 * h, this._z = (o + l) / h;
    } else {
      const h = 2 * Math.sqrt(1 + u - n - a);
      this._w = (s - i) / h, this._x = (r + c) / h, this._y = (o + l) / h, this._z = 0.25 * h;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ye(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, s = e._w, a = t._x, o = t._y, c = t._z, l = t._w;
    return this._x = n * l + s * a + i * c - r * o, this._y = i * l + s * o + r * a - n * c, this._z = r * l + s * c + n * o - i * a, this._w = s * l - n * a - i * o - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let n = e._x, i = e._y, r = e._z, s = e._w, a = this.dot(e);
    a < 0 && (n = -n, i = -i, r = -r, s = -s, a = -a);
    let o = 1 - t;
    if (a < 0.9995) {
      const c = Math.acos(a), l = Math.sin(c);
      o = Math.sin(o * c) / l, t = Math.sin(t * c) / l, this._x = this._x * o + n * t, this._y = this._y * o + i * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this._onChangeCallback();
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
}, D = class mo {
  static {
    mo.prototype.isVector3 = !0;
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
    return this.applyQuaternion(na.setFromEuler(t));
  }
  applyAxisAngle(t, n) {
    return this.applyQuaternion(na.setFromAxisAngle(t, n));
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
    const n = this.x, i = this.y, r = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * r - o * i), u = 2 * (o * n - s * r), d = 2 * (s * i - a * n);
    return this.x = n + c * l + a * d - o * u, this.y = i + c * u + o * l - s * d, this.z = r + c * d + s * u - a * l, this;
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
    return this.x = Ye(this.x, t.x, n.x), this.y = Ye(this.y, t.y, n.y), this.z = Ye(this.z, t.z, n.z), this;
  }
  clampScalar(t, n) {
    return this.x = Ye(this.x, t, n), this.y = Ye(this.y, t, n), this.z = Ye(this.z, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ye(i, t, n));
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
    const i = t.x, r = t.y, s = t.z, a = n.x, o = n.y, c = n.z;
    return this.x = r * c - s * o, this.y = s * a - i * c, this.z = i * o - r * a, this;
  }
  projectOnVector(t) {
    const n = t.lengthSq();
    if (n === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / n;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return zr.copy(this).projectOnVector(t), this.sub(zr);
  }
  reflect(t) {
    return this.sub(zr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const n = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(t) / n;
    return Math.acos(Ye(i, -1, 1));
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
}, zr = /* @__PURE__ */ new D(), na = /* @__PURE__ */ new zn(), ke = class go {
  static {
    go.prototype.isMatrix3 = !0;
  }
  constructor(t, n, i, r, s, a, o, c, l) {
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
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, c, l);
  }
  set(t, n, i, r, s, a, o, c, l) {
    const u = this.elements;
    return u[0] = t, u[1] = r, u[2] = o, u[3] = n, u[4] = s, u[5] = c, u[6] = i, u[7] = a, u[8] = l, this;
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
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[3], c = i[6], l = i[1], u = i[4], d = i[7], h = i[2], m = i[5], _ = i[8], v = r[0], p = r[3], f = r[6], b = r[1], y = r[4], g = r[7], E = r[2], w = r[5], C = r[8];
    return s[0] = a * v + o * b + c * E, s[3] = a * p + o * y + c * w, s[6] = a * f + o * g + c * C, s[1] = l * v + u * b + d * E, s[4] = l * p + u * y + d * w, s[7] = l * f + u * g + d * C, s[2] = h * v + m * b + _ * E, s[5] = h * p + m * y + _ * w, s[8] = h * f + m * g + _ * C, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= t, n[4] *= t, n[7] *= t, n[2] *= t, n[5] *= t, n[8] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8];
    return n * a * u - n * o * l - i * s * u + i * o * c + r * s * l - r * a * c;
  }
  invert() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = u * a - o * l, h = o * c - u * s, m = l * s - a * c, _ = n * d + i * h + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return t[0] = d * v, t[1] = (r * l - u * i) * v, t[2] = (o * i - r * a) * v, t[3] = h * v, t[4] = (u * n - r * c) * v, t[5] = (r * s - o * n) * v, t[6] = m * v, t[7] = (i * c - l * n) * v, t[8] = (a * n - i * s) * v, this;
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
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(i * c, i * l, -i * (c * a + l * o) + a + t, -r * l, r * c, -r * (-l * a + c * o) + o + n, 0, 0, 1), this;
  }
  scale(t, n) {
    return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Vr.makeScale(t, n)), this;
  }
  rotate(t) {
    return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Vr.makeRotation(-t)), this;
  }
  translate(t, n) {
    return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Vr.makeTranslation(t, n)), this;
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
}, Vr = /* @__PURE__ */ new ke(), ia = /* @__PURE__ */ new ke().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ra = /* @__PURE__ */ new ke().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Tc() {
  const e = {
    enabled: !0,
    workingColorSpace: Ss,
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === "srgb" && (r.r = dn(r.r), r.g = dn(r.g), r.b = dn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === "srgb" && (r.r = ui(r.r), r.g = ui(r.g), r.b = ui(r.b))), r;
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
      return r === "" ? Ar : this.spaces[r].transfer;
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
      return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(r, s);
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
    [Ss]: {
      primaries: t,
      whitePoint: i,
      transfer: Ar,
      toXYZ: ia,
      fromXYZ: ra,
      luminanceCoefficients: n,
      workingColorSpaceConfig: { unpackColorSpace: Rt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Rt }
    },
    [Rt]: {
      primaries: t,
      whitePoint: i,
      transfer: wr,
      toXYZ: ia,
      fromXYZ: ra,
      luminanceCoefficients: n,
      outputColorSpaceConfig: { drawingBufferColorSpace: Rt }
    }
  }), e;
}
var $e = /* @__PURE__ */ Tc();
function dn(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function ui(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
var Wn, bc = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Wn === void 0 && (Wn = Rr("canvas")), Wn.width = e.width, Wn.height = e.height;
      const i = Wn.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Wn;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Rr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++) r[s] = dn(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(dn(t[n] / 255) * 255) : t[n] = dn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, Ac = 0, Cs = class {
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Ac++ }), this.uuid = vi(), this.data = e, this.dataReady = !0, this.version = 0;
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
        for (let s = 0, a = i.length; s < a; s++) i[s].isDataTexture ? r.push(Gr(i[s].image)) : r.push(Gr(i[s]));
      } else r = Gr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
};
function Gr(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? bc.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (Fe("Texture: Unable to serialize Texture."), {});
}
var wc = 0, Hr = /* @__PURE__ */ new D(), Gt = class Sr extends Bn {
  constructor(t = Sr.DEFAULT_IMAGE, n = Sr.DEFAULT_MAPPING, i = fn, r = fn, s = Ot, a = Rs, o = Di, c = yn, l = Sr.DEFAULT_ANISOTROPY, u = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: wc++ }), this.uuid = vi(), this.name = "", this.source = new Cs(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new de(0, 0), this.repeat = new de(1, 1), this.center = new de(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ke(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  get width() {
    return this.source.getSize(Hr).x;
  }
  get height() {
    return this.source.getSize(Hr).y;
  }
  get depth() {
    return this.source.getSize(Hr).z;
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
        Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);
        continue;
      }
      const r = this[n];
      if (r === void 0) {
        Fe(`Texture.setValues(): property '${n}' does not exist.`);
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
      case Er:
        t.x = t.x - Math.floor(t.x);
        break;
      case fn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case _s:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Er:
        t.y = t.y - Math.floor(t.y);
        break;
      case fn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case _s:
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
var vt = class vo {
  static {
    vo.prototype.isVector4 = !0;
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
    const c = t.elements, l = c[0], u = c[4], d = c[8], h = c[1], m = c[5], _ = c[9], v = c[2], p = c[6], f = c[10];
    if (Math.abs(u - h) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(u + h) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(l + m + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      n = Math.PI;
      const y = (l + 1) / 2, g = (m + 1) / 2, E = (f + 1) / 2, w = (u + h) / 4, C = (d + v) / 4, M = (_ + p) / 4;
      return y > g && y > E ? y < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(y), r = w / i, s = C / i) : g > E ? g < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(g), i = w / r, s = M / r) : E < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(E), i = C / s, r = M / s), this.set(i, r, s, n), this;
    }
    let b = Math.sqrt((p - _) * (p - _) + (d - v) * (d - v) + (h - u) * (h - u));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (p - _) / b, this.y = (d - v) / b, this.z = (h - u) / b, this.w = Math.acos((l + m + f - 1) / 2), this;
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
    return this.x = Ye(this.x, t.x, n.x), this.y = Ye(this.y, t.y, n.y), this.z = Ye(this.z, t.z, n.z), this.w = Ye(this.w, t.w, n.w), this;
  }
  clampScalar(t, n) {
    return this.x = Ye(this.x, t, n), this.y = Ye(this.y, t, n), this.z = Ye(this.z, t, n), this.w = Ye(this.w, t, n), this;
  }
  clampLength(t, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ye(i, t, n));
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
}, Rc = class extends Bn {
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
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new vt(0, 0, e, t), this.scissorTest = !1, this.viewport = new vt(0, 0, e, t), this.textures = [];
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
      this.textures[t].source = new Cs(i);
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
}, Yt = class extends Rc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}, _o = class extends Gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = fn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
}, Cc = class extends Gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = fn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}, ht = class ys {
  static {
    ys.prototype.isMatrix4 = !0;
  }
  constructor(t, n, i, r, s, a, o, c, l, u, d, h, m, _, v, p) {
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
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, c, l, u, d, h, m, _, v, p);
  }
  set(t, n, i, r, s, a, o, c, l, u, d, h, m, _, v, p) {
    const f = this.elements;
    return f[0] = t, f[4] = n, f[8] = i, f[12] = r, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = u, f[10] = d, f[14] = h, f[3] = m, f[7] = _, f[11] = v, f[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ys().fromArray(this.elements);
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
    const n = this.elements, i = t.elements, r = 1 / Xn.setFromMatrixColumn(t, 0).length(), s = 1 / Xn.setFromMatrixColumn(t, 1).length(), a = 1 / Xn.setFromMatrixColumn(t, 2).length();
    return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * s, n[5] = i[5] * s, n[6] = i[6] * s, n[7] = 0, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z, a = Math.cos(i), o = Math.sin(i), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (t.order === "XYZ") {
      const h = a * u, m = a * d, _ = o * u, v = o * d;
      n[0] = c * u, n[4] = -c * d, n[8] = l, n[1] = m + _ * l, n[5] = h - v * l, n[9] = -o * c, n[2] = v - h * l, n[6] = _ + m * l, n[10] = a * c;
    } else if (t.order === "YXZ") {
      const h = c * u, m = c * d, _ = l * u, v = l * d;
      n[0] = h + v * o, n[4] = _ * o - m, n[8] = a * l, n[1] = a * d, n[5] = a * u, n[9] = -o, n[2] = m * o - _, n[6] = v + h * o, n[10] = a * c;
    } else if (t.order === "ZXY") {
      const h = c * u, m = c * d, _ = l * u, v = l * d;
      n[0] = h - v * o, n[4] = -a * d, n[8] = _ + m * o, n[1] = m + _ * o, n[5] = a * u, n[9] = v - h * o, n[2] = -a * l, n[6] = o, n[10] = a * c;
    } else if (t.order === "ZYX") {
      const h = a * u, m = a * d, _ = o * u, v = o * d;
      n[0] = c * u, n[4] = _ * l - m, n[8] = h * l + v, n[1] = c * d, n[5] = v * l + h, n[9] = m * l - _, n[2] = -l, n[6] = o * c, n[10] = a * c;
    } else if (t.order === "YZX") {
      const h = a * c, m = a * l, _ = o * c, v = o * l;
      n[0] = c * u, n[4] = v - h * d, n[8] = _ * d + m, n[1] = d, n[5] = a * u, n[9] = -o * u, n[2] = -l * u, n[6] = m * d + _, n[10] = h - v * d;
    } else if (t.order === "XZY") {
      const h = a * c, m = a * l, _ = o * c, v = o * l;
      n[0] = c * u, n[4] = -d, n[8] = l * u, n[1] = h * d + v, n[5] = a * u, n[9] = m * d - _, n[2] = _ * d - m, n[6] = o * u, n[10] = v * d + h;
    }
    return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Pc, t, Lc);
  }
  lookAt(t, n, i) {
    const r = this.elements;
    return Ut.subVectors(t, n), Ut.lengthSq() === 0 && (Ut.z = 1), Ut.normalize(), gn.crossVectors(i, Ut), gn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ut.x += 1e-4 : Ut.z += 1e-4, Ut.normalize(), gn.crossVectors(i, Ut)), gn.normalize(), Ji.crossVectors(Ut, gn), r[0] = gn.x, r[4] = Ji.x, r[8] = Ut.x, r[1] = gn.y, r[5] = Ji.y, r[9] = Ut.y, r[2] = gn.z, r[6] = Ji.z, r[10] = Ut.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, n) {
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[4], c = i[8], l = i[12], u = i[1], d = i[5], h = i[9], m = i[13], _ = i[2], v = i[6], p = i[10], f = i[14], b = i[3], y = i[7], g = i[11], E = i[15], w = r[0], C = r[4], M = r[8], T = r[12], z = r[1], L = r[5], I = r[9], q = r[13], P = r[2], R = r[6], G = r[10], U = r[14], Q = r[3], W = r[7], Y = r[11], Z = r[15];
    return s[0] = a * w + o * z + c * P + l * Q, s[4] = a * C + o * L + c * R + l * W, s[8] = a * M + o * I + c * G + l * Y, s[12] = a * T + o * q + c * U + l * Z, s[1] = u * w + d * z + h * P + m * Q, s[5] = u * C + d * L + h * R + m * W, s[9] = u * M + d * I + h * G + m * Y, s[13] = u * T + d * q + h * U + m * Z, s[2] = _ * w + v * z + p * P + f * Q, s[6] = _ * C + v * L + p * R + f * W, s[10] = _ * M + v * I + p * G + f * Y, s[14] = _ * T + v * q + p * U + f * Z, s[3] = b * w + y * z + g * P + E * Q, s[7] = b * C + y * L + g * R + E * W, s[11] = b * M + y * I + g * G + E * Y, s[15] = b * T + y * q + g * U + E * Z, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[4] *= t, n[8] *= t, n[12] *= t, n[1] *= t, n[5] *= t, n[9] *= t, n[13] *= t, n[2] *= t, n[6] *= t, n[10] *= t, n[14] *= t, n[3] *= t, n[7] *= t, n[11] *= t, n[15] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], u = t[2], d = t[6], h = t[10], m = t[14], _ = t[3], v = t[7], p = t[11], f = t[15], b = c * m - l * h, y = o * m - l * d, g = o * h - c * d, E = a * m - l * u, w = a * h - c * u, C = a * d - o * u;
    return n * (v * b - p * y + f * g) - i * (_ * b - p * E + f * w) + r * (_ * y - v * E + f * C) - s * (_ * g - v * w + p * C);
  }
  determinantAffine() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], c = t[2], l = t[6], u = t[10];
    return n * (a * u - o * l) - i * (s * u - o * c) + r * (s * l - a * c);
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
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = t[9], h = t[10], m = t[11], _ = t[12], v = t[13], p = t[14], f = t[15], b = n * o - i * a, y = n * c - r * a, g = n * l - s * a, E = i * c - r * o, w = i * l - s * o, C = r * l - s * c, M = u * v - d * _, T = u * p - h * _, z = u * f - m * _, L = d * p - h * v, I = d * f - m * v, q = h * f - m * p, P = b * q - y * I + g * L + E * z - w * T + C * M;
    if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / P;
    return t[0] = (o * q - c * I + l * L) * R, t[1] = (r * I - i * q - s * L) * R, t[2] = (v * C - p * w + f * E) * R, t[3] = (h * w - d * C - m * E) * R, t[4] = (c * z - a * q - l * T) * R, t[5] = (n * q - r * z + s * T) * R, t[6] = (p * g - _ * C - f * y) * R, t[7] = (u * C - h * g + m * y) * R, t[8] = (a * I - o * z + l * M) * R, t[9] = (i * z - n * I - s * M) * R, t[10] = (_ * w - v * g + f * b) * R, t[11] = (d * g - u * w - m * b) * R, t[12] = (o * T - a * L - c * M) * R, t[13] = (n * L - i * T + r * M) * R, t[14] = (v * y - _ * E - p * b) * R, t[15] = (u * E - d * y + h * b) * R, this;
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
    const i = Math.cos(n), r = Math.sin(n), s = 1 - i, a = t.x, o = t.y, c = t.z, l = s * a, u = s * o;
    return this.set(l * a + i, l * o - r * c, l * c + r * o, 0, l * o + r * c, u * o + i, u * c - r * a, 0, l * c - r * o, u * c + r * a, s * c * c + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, n, i) {
    return this.set(t, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, n, i, r, s, a) {
    return this.set(1, i, s, 0, t, 1, a, 0, n, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, n, i) {
    const r = this.elements, s = n._x, a = n._y, o = n._z, c = n._w, l = s + s, u = a + a, d = o + o, h = s * l, m = s * u, _ = s * d, v = a * u, p = a * d, f = o * d, b = c * l, y = c * u, g = c * d, E = i.x, w = i.y, C = i.z;
    return r[0] = (1 - (v + f)) * E, r[1] = (m + g) * E, r[2] = (_ - y) * E, r[3] = 0, r[4] = (m - g) * w, r[5] = (1 - (h + f)) * w, r[6] = (p + b) * w, r[7] = 0, r[8] = (_ + y) * C, r[9] = (p - b) * C, r[10] = (1 - (h + v)) * C, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, n, i) {
    const r = this.elements;
    t.x = r[12], t.y = r[13], t.z = r[14];
    const s = this.determinantAffine();
    if (s === 0)
      return i.set(1, 1, 1), n.identity(), this;
    let a = Xn.set(r[0], r[1], r[2]).length();
    const o = Xn.set(r[4], r[5], r[6]).length(), c = Xn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Ht.copy(this);
    const l = 1 / a, u = 1 / o, d = 1 / c;
    return Ht.elements[0] *= l, Ht.elements[1] *= l, Ht.elements[2] *= l, Ht.elements[4] *= u, Ht.elements[5] *= u, Ht.elements[6] *= u, Ht.elements[8] *= d, Ht.elements[9] *= d, Ht.elements[10] *= d, n.setFromRotationMatrix(Ht), i.x = a, i.y = o, i.z = c, this;
  }
  makePerspective(t, n, i, r, s, a, o = di, c = !1) {
    const l = this.elements, u = 2 * s / (n - t), d = 2 * s / (i - r), h = (n + t) / (n - t), m = (i + r) / (i - r);
    let _, v;
    if (c)
      _ = s / (a - s), v = a * s / (a - s);
    else if (o === 2e3)
      _ = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === 2001)
      _ = -a / (a - s), v = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = d, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, n, i, r, s, a, o = di, c = !1) {
    const l = this.elements, u = 2 / (n - t), d = 2 / (i - r), h = -(n + t) / (n - t), m = -(i + r) / (i - r);
    let _, v;
    if (c)
      _ = 1 / (a - s), v = a / (a - s);
    else if (o === 2e3)
      _ = -2 / (a - s), v = -(a + s) / (a - s);
    else if (o === 2001)
      _ = -1 / (a - s), v = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = h, l[1] = 0, l[5] = d, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
}, Xn = /* @__PURE__ */ new D(), Ht = /* @__PURE__ */ new ht(), Pc = /* @__PURE__ */ new D(0, 0, 0), Lc = /* @__PURE__ */ new D(1, 1, 1), gn = /* @__PURE__ */ new D(), Ji = /* @__PURE__ */ new D(), Ut = /* @__PURE__ */ new D(), sa = /* @__PURE__ */ new ht(), aa = /* @__PURE__ */ new zn(), Dn = class Mo {
  constructor(t = 0, n = 0, i = 0, r = Mo.DEFAULT_ORDER) {
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
    const r = t.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], u = r[9], d = r[2], h = r[6], m = r[10];
    switch (n) {
      case "XYZ":
        this._y = Math.asin(Ye(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(h, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ye(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ye(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ye(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ye(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ye(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(h, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        Fe("Euler: .setFromRotationMatrix() encountered an unknown order: " + n);
    }
    return this._order = n, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, n, i) {
    return sa.makeRotationFromQuaternion(t), this.setFromRotationMatrix(sa, n, i);
  }
  setFromVector3(t, n = this._order) {
    return this.set(t.x, t.y, t.z, n);
  }
  reorder(t) {
    return aa.setFromEuler(this), this.setFromQuaternion(aa, t);
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
Dn.DEFAULT_ORDER = "XYZ";
var So = class {
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
}, Ic = 0, oa = /* @__PURE__ */ new D(), qn = /* @__PURE__ */ new zn(), sn = /* @__PURE__ */ new ht(), Zi = /* @__PURE__ */ new D(), xi = /* @__PURE__ */ new D(), Nc = /* @__PURE__ */ new D(), Uc = /* @__PURE__ */ new zn(), la = /* @__PURE__ */ new D(1, 0, 0), ca = /* @__PURE__ */ new D(0, 1, 0), ha = /* @__PURE__ */ new D(0, 0, 1), ua = { type: "added" }, Dc = { type: "removed" }, Yn = {
  type: "childadded",
  child: null
}, kr = {
  type: "childremoved",
  child: null
}, Lt = class xr extends Bn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ic++ }), this.uuid = vi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = xr.DEFAULT_UP.clone();
    const t = new D(), n = new Dn(), i = new zn(), r = new D(1, 1, 1);
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
    }), this.matrix = new ht(), this.matrixWorld = new ht(), this.matrixAutoUpdate = xr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = xr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new So(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return qn.setFromAxisAngle(t, n), this.quaternion.multiply(qn), this;
  }
  rotateOnWorldAxis(t, n) {
    return qn.setFromAxisAngle(t, n), this.quaternion.premultiply(qn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(la, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ca, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(ha, t);
  }
  translateOnAxis(t, n) {
    return oa.copy(t).applyQuaternion(this.quaternion), this.position.add(oa.multiplyScalar(n)), this;
  }
  translateX(t) {
    return this.translateOnAxis(la, t);
  }
  translateY(t) {
    return this.translateOnAxis(ca, t);
  }
  translateZ(t) {
    return this.translateOnAxis(ha, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(sn.copy(this.matrixWorld).invert());
  }
  lookAt(t, n, i) {
    t.isVector3 ? Zi.copy(t) : Zi.set(t, n, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), xi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? sn.lookAt(xi, Zi, this.up) : sn.lookAt(Zi, xi, this.up), this.quaternion.setFromRotationMatrix(sn), r && (sn.extractRotation(r.matrixWorld), qn.setFromRotationMatrix(sn), this.quaternion.premultiply(qn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return t === this ? (Be("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ua), Yn.child = t, this.dispatchEvent(Yn), Yn.child = null) : Be("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(t);
    return n !== -1 && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(Dc), kr.child = t, this.dispatchEvent(kr), kr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), sn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), sn.multiply(t.parent.matrixWorld)), t.applyMatrix4(sn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(ua), Yn.child = t, this.dispatchEvent(Yn), Yn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xi, t, Nc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xi, Uc, t), t;
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
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) {
          const d = c[l];
          s(t.shapes, d);
        }
        else s(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(s(t.materials, this.material[c]));
      r.material = o;
    } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(t.animations, c));
      }
    }
    if (n) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), u = a(t.images), d = a(t.shapes), h = a(t.skeletons), m = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (i.geometries = o), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), u.length > 0 && (i.images = u), d.length > 0 && (i.shapes = d), h.length > 0 && (i.skeletons = h), m.length > 0 && (i.animations = m), _.length > 0 && (i.nodes = _);
    }
    return i.object = r, i;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
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
Lt.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
Lt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var qt = class extends Lt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, Oc = { type: "move" }, Wr = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new qt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new qt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new qt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D(), this._grip.eventsEnabled = !1), this._grip;
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
    const a = this._targetRay, o = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        s = !0;
        for (const _ of e.hand.values()) {
          const v = t.getJointPose(_, n), p = this._getHandJoint(c, _);
          v !== null && (p.matrix.fromArray(v.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = v.radius), p.visible = v !== null;
        }
        const l = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = l.position.distanceTo(u.position), h = 0.02, m = 5e-3;
        c.inputState.pinching && d > h + m ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= h - m && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else o !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, o.eventsEnabled && o.dispatchEvent({
        type: "gripUpdated",
        data: e,
        target: this
      })));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Oc)));
    }
    return a !== null && (a.visible = i !== null), o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new qt();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}, xo = {
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
}, vn = {
  h: 0,
  s: 0,
  l: 0
}, $i = {
  h: 0,
  s: 0,
  l: 0
};
function Xr(e, t, n) {
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
  setHex(e, t = Rt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, i = $e.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, $e.colorSpaceToWorking(this, i), this;
  }
  setHSL(e, t, n, i = $e.workingColorSpace) {
    if (e = Ec(e, 1), t = Ye(t, 0, 1), n = Ye(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Xr(s, r, e + 1 / 3), this.g = Xr(s, r, e), this.b = Xr(s, r, e - 1 / 3);
    }
    return $e.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = Rt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Fe("Color: Alpha component of " + e + " will be ignored.");
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
          Fe("Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(r, 16), t);
      Fe("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Rt) {
    const n = xo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Fe("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = dn(e.r), this.g = dn(e.g), this.b = dn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ui(e.r), this.g = ui(e.g), this.b = ui(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Rt) {
    return $e.workingToColorSpace(At.copy(this), e), Math.round(Ye(At.r * 255, 0, 255)) * 65536 + Math.round(Ye(At.g * 255, 0, 255)) * 256 + Math.round(Ye(At.b * 255, 0, 255));
  }
  getHexString(e = Rt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.workingToColorSpace(At.copy(this), t);
    const n = At.r, i = At.g, r = At.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
    let o, c;
    const l = (a + s) / 2;
    if (a === s)
      o = 0, c = 0;
    else {
      const u = s - a;
      switch (c = l <= 0.5 ? u / (s + a) : u / (2 - s - a), s) {
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
    return e.h = o, e.s = c, e.l = l, e;
  }
  getRGB(e, t = $e.workingColorSpace) {
    return $e.workingToColorSpace(At.copy(this), t), e.r = At.r, e.g = At.g, e.b = At.b, e;
  }
  getStyle(e = Rt) {
    $e.workingToColorSpace(At.copy(this), e);
    const t = At.r, n = At.g, i = At.b;
    return e !== "srgb" ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(vn), this.setHSL(vn.h + e, vn.s + t, vn.l + n);
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
    this.getHSL(vn), e.getHSL($i);
    const n = Br(vn.h, $i.h, t), i = Br(vn.s, $i.s, t), r = Br(vn.l, $i.l, t);
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
Xe.NAMES = xo;
var yo = class extends Lt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Dn(), this.environmentIntensity = 1, this.environmentRotation = new Dn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, kt = /* @__PURE__ */ new D(), an = /* @__PURE__ */ new D(), qr = /* @__PURE__ */ new D(), on = /* @__PURE__ */ new D(), Kn = /* @__PURE__ */ new D(), Jn = /* @__PURE__ */ new D(), fa = /* @__PURE__ */ new D(), Yr = /* @__PURE__ */ new D(), Kr = /* @__PURE__ */ new D(), Jr = /* @__PURE__ */ new D(), Zr = /* @__PURE__ */ new vt(), $r = /* @__PURE__ */ new vt(), Qr = /* @__PURE__ */ new vt(), yi = class ai {
  constructor(t = new D(), n = new D(), i = new D()) {
    this.a = t, this.b = n, this.c = i;
  }
  static getNormal(t, n, i, r) {
    r.subVectors(i, n), kt.subVectors(t, n), r.cross(kt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, n, i, r, s) {
    kt.subVectors(r, n), an.subVectors(i, n), qr.subVectors(t, n);
    const a = kt.dot(kt), o = kt.dot(an), c = kt.dot(qr), l = an.dot(an), u = an.dot(qr), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const h = 1 / d, m = (l * c - o * u) * h, _ = (a * u - o * c) * h;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(t, n, i, r) {
    return this.getBarycoord(t, n, i, r, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(t, n, i, r, s, a, o, c) {
    return this.getBarycoord(t, n, i, r, on) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, on.x), c.addScaledVector(a, on.y), c.addScaledVector(o, on.z), c);
  }
  static getInterpolatedAttribute(t, n, i, r, s, a) {
    return Zr.setScalar(0), $r.setScalar(0), Qr.setScalar(0), Zr.fromBufferAttribute(t, n), $r.fromBufferAttribute(t, i), Qr.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(Zr, s.x), a.addScaledVector($r, s.y), a.addScaledVector(Qr, s.z), a;
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
    return ai.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, n) {
    return ai.getBarycoord(t, this.a, this.b, this.c, n);
  }
  getInterpolation(t, n, i, r, s) {
    return ai.getInterpolation(t, this.a, this.b, this.c, n, i, r, s);
  }
  containsPoint(t) {
    return ai.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return ai.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, n) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Kn.subVectors(r, i), Jn.subVectors(s, i), Yr.subVectors(t, i);
    const c = Kn.dot(Yr), l = Jn.dot(Yr);
    if (c <= 0 && l <= 0) return n.copy(i);
    Kr.subVectors(t, r);
    const u = Kn.dot(Kr), d = Jn.dot(Kr);
    if (u >= 0 && d <= u) return n.copy(r);
    const h = c * d - u * l;
    if (h <= 0 && c >= 0 && u <= 0)
      return a = c / (c - u), n.copy(i).addScaledVector(Kn, a);
    Jr.subVectors(t, s);
    const m = Kn.dot(Jr), _ = Jn.dot(Jr);
    if (_ >= 0 && m <= _) return n.copy(s);
    const v = m * l - c * _;
    if (v <= 0 && l >= 0 && _ <= 0)
      return o = l / (l - _), n.copy(i).addScaledVector(Jn, o);
    const p = u * _ - m * d;
    if (p <= 0 && d - u >= 0 && m - _ >= 0)
      return fa.subVectors(s, r), o = (d - u) / (d - u + (m - _)), n.copy(r).addScaledVector(fa, o);
    const f = 1 / (p + v + h);
    return a = v * f, o = h * f, n.copy(i).addScaledVector(Kn, a).addScaledVector(Jn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, Vn = class {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
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
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Qi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Qi.copy(n.boundingBox)), Qi.applyMatrix4(e.matrixWorld), this.union(Qi);
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
    this.getCenter(Ei), ji.subVectors(this.max, Ei), Zn.subVectors(e.a, Ei), $n.subVectors(e.b, Ei), Qn.subVectors(e.c, Ei), _n.subVectors($n, Zn), Mn.subVectors(Qn, $n), bn.subVectors(Zn, Qn);
    let t = [
      0,
      -_n.z,
      _n.y,
      0,
      -Mn.z,
      Mn.y,
      0,
      -bn.z,
      bn.y,
      _n.z,
      0,
      -_n.x,
      Mn.z,
      0,
      -Mn.x,
      bn.z,
      0,
      -bn.x,
      -_n.y,
      _n.x,
      0,
      -Mn.y,
      Mn.x,
      0,
      -bn.y,
      bn.x,
      0
    ];
    return !jr(t, Zn, $n, Qn, ji) || (t = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], !jr(t, Zn, $n, Qn, ji)) ? !1 : (er.crossVectors(_n, Mn), t = [
      er.x,
      er.y,
      er.z
    ], jr(t, Zn, $n, Qn, ji));
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
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], Wt = /* @__PURE__ */ new D(), Qi = /* @__PURE__ */ new Vn(), Zn = /* @__PURE__ */ new D(), $n = /* @__PURE__ */ new D(), Qn = /* @__PURE__ */ new D(), _n = /* @__PURE__ */ new D(), Mn = /* @__PURE__ */ new D(), bn = /* @__PURE__ */ new D(), Ei = /* @__PURE__ */ new D(), ji = /* @__PURE__ */ new D(), er = /* @__PURE__ */ new D(), An = /* @__PURE__ */ new D();
function jr(e, t, n, i, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    An.fromArray(e, s);
    const o = r.x * Math.abs(An.x) + r.y * Math.abs(An.y) + r.z * Math.abs(An.z), c = t.dot(An), l = n.dot(An), u = i.dot(An);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
var _t = /* @__PURE__ */ new D(), tr = /* @__PURE__ */ new de(), Fc = 0, jt = class extends Bn {
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Fc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = vc, this.updateRanges = [], this.gpuType = Gi, this.version = 0;
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
      tr.fromBufferAttribute(this, t), tr.applyMatrix3(e), this.setXY(t, tr.x, tr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyMatrix3(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyMatrix4(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyNormalMatrix(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.transformDirection(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Si(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Pt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Pt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Pt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Pt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Pt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Pt(t, this.array), n = Pt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Pt(t, this.array), n = Pt(n, this.array), i = Pt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Pt(t, this.array), n = Pt(n, this.array), i = Pt(i, this.array), r = Pt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
}, Eo = class extends jt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}, To = class extends jt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}, it = class extends jt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}, Bc = /* @__PURE__ */ new Vn(), Ti = /* @__PURE__ */ new D(), es = /* @__PURE__ */ new D(), Hi = class {
  constructor(e = new D(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Bc.setFromPoints(e).getCenter(n);
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
    Ti.subVectors(e, this.center);
    const t = Ti.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ti, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (es.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ti.copy(e.center).add(es)), this.expandByPoint(Ti.copy(e.center).sub(es))), this);
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
}, zc = 0, Bt = /* @__PURE__ */ new ht(), ts = /* @__PURE__ */ new Lt(), jn = /* @__PURE__ */ new D(), Dt = /* @__PURE__ */ new Vn(), bi = /* @__PURE__ */ new Vn(), Et = /* @__PURE__ */ new D(), It = class bo extends Bn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: zc++ }), this.uuid = vi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = !1;
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (_c(t) ? To : Eo)(t, 1) : this.index = t, this;
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
    return ts.lookAt(t), ts.updateMatrix(), this.applyMatrix4(ts.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(jn).negate(), this.translate(jn.x, jn.y, jn.z), this;
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
      t.length > n.count && Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), n.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Vn());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new D(-1 / 0, -1 / 0, -1 / 0), new D(1 / 0, 1 / 0, 1 / 0));
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
    this.boundingSphere === null && (this.boundingSphere = new Hi());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(t), n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        bi.setFromBufferAttribute(o), this.morphTargetsRelative ? (Et.addVectors(Dt.min, bi.min), Dt.expandByPoint(Et), Et.addVectors(Dt.max, bi.max), Dt.expandByPoint(Et)) : (Dt.expandByPoint(bi.min), Dt.expandByPoint(bi.max));
      }
      Dt.getCenter(i);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        Et.fromBufferAttribute(t, s), r = Math.max(r, i.distanceToSquared(Et));
      if (n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s], c = this.morphTargetsRelative;
        for (let l = 0, u = o.count; l < u; l++)
          Et.fromBufferAttribute(o, l), c && (jn.fromBufferAttribute(t, l), Et.add(jn)), r = Math.max(r, i.distanceToSquared(Et));
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
    const o = [], c = [];
    for (let M = 0; M < i.count; M++)
      o[M] = new D(), c[M] = new D();
    const l = new D(), u = new D(), d = new D(), h = new de(), m = new de(), _ = new de(), v = new D(), p = new D();
    function f(M, T, z) {
      l.fromBufferAttribute(i, M), u.fromBufferAttribute(i, T), d.fromBufferAttribute(i, z), h.fromBufferAttribute(s, M), m.fromBufferAttribute(s, T), _.fromBufferAttribute(s, z), u.sub(l), d.sub(l), m.sub(h), _.sub(h);
      const L = 1 / (m.x * _.y - _.x * m.y);
      isFinite(L) && (v.copy(u).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(L), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -_.x).multiplyScalar(L), o[M].add(v), o[T].add(v), o[z].add(v), c[M].add(p), c[T].add(p), c[z].add(p));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let M = 0, T = b.length; M < T; ++M) {
      const z = b[M], L = z.start, I = z.count;
      for (let q = L, P = L + I; q < P; q += 3) f(t.getX(q + 0), t.getX(q + 1), t.getX(q + 2));
    }
    const y = new D(), g = new D(), E = new D(), w = new D();
    function C(M) {
      E.fromBufferAttribute(r, M), w.copy(E);
      const T = o[M];
      y.copy(T), y.sub(E.multiplyScalar(E.dot(T))).normalize(), g.crossVectors(w, T);
      const z = g.dot(c[M]) < 0 ? -1 : 1;
      a.setXYZW(M, y.x, y.y, y.z, z);
    }
    for (let M = 0, T = b.length; M < T; ++M) {
      const z = b[M], L = z.start, I = z.count;
      for (let q = L, P = L + I; q < P; q += 3)
        C(t.getX(q + 0)), C(t.getX(q + 1)), C(t.getX(q + 2));
    }
    this._transformed = !0;
  }
  computeVertexNormals() {
    const t = this.index, n = this.getAttribute("position");
    if (n !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== n.count)
        i = new jt(new Float32Array(n.count * 3), 3), this.setAttribute("normal", i);
      else for (let h = 0, m = i.count; h < m; h++) i.setXYZ(h, 0, 0, 0);
      const r = new D(), s = new D(), a = new D(), o = new D(), c = new D(), l = new D(), u = new D(), d = new D();
      if (t) for (let h = 0, m = t.count; h < m; h += 3) {
        const _ = t.getX(h + 0), v = t.getX(h + 1), p = t.getX(h + 2);
        r.fromBufferAttribute(n, _), s.fromBufferAttribute(n, v), a.fromBufferAttribute(n, p), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), o.fromBufferAttribute(i, _), c.fromBufferAttribute(i, v), l.fromBufferAttribute(i, p), o.add(u), c.add(u), l.add(u), i.setXYZ(_, o.x, o.y, o.z), i.setXYZ(v, c.x, c.y, c.z), i.setXYZ(p, l.x, l.y, l.z);
      }
      else for (let h = 0, m = n.count; h < m; h += 3)
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
    function t(o, c) {
      const l = o.array, u = o.itemSize, d = o.normalized, h = new l.constructor(c.length * u);
      let m = 0, _ = 0;
      for (let v = 0, p = c.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = c[v] * o.data.stride + o.offset : m = c[v] * u;
        for (let f = 0; f < u; f++) h[_++] = l[m++];
      }
      return new jt(h, u, d);
    }
    if (this.index === null)
      return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const n = new bo(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = t(c, i);
      n.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const h = l[u], m = t(h, i);
        c.push(m);
      }
      n.morphAttributes[o] = c;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      n.addGroup(l.start, l.count, l.materialIndex);
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
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const n = this.index;
    n !== null && (t.data.index = {
      type: n.array.constructor.name,
      array: Array.prototype.slice.call(n.array)
    });
    const i = this.attributes;
    for (const c in i) {
      const l = i[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, h = l.length; d < h; d++) {
        const m = l[d];
        u.push(m.toJSON(t.data));
      }
      u.length > 0 && (r[c] = u, s = !0);
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
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(n));
    }
    const s = t.morphAttributes;
    for (const l in s) {
      const u = [], d = s[l];
      for (let h = 0, m = d.length; h < m; h++) u.push(d[h].clone(n));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, ns = /* @__PURE__ */ new D(), Vc = /* @__PURE__ */ new D(), Gc = /* @__PURE__ */ new ke(), xn = class {
  constructor(e = new D(1, 0, 0), t = 0) {
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
    const i = ns.subVectors(n, t).cross(Vc.subVectors(e, t)).normalize();
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
    const i = e.delta(ns), r = this.normal.dot(i);
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
    const n = t || Gc.getNormalMatrix(e), i = this.coplanarPoint(ns).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
}, Hc = 0, Gn = class extends Bn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Hc++ }), this.uuid = vi(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Or, this.stencilZFail = Or, this.stencilZPass = Or, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          Fe(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);
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
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Xe().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new xn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
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
}, cn = /* @__PURE__ */ new D(), is = /* @__PURE__ */ new D(), nr = /* @__PURE__ */ new D(), ir = /* @__PURE__ */ new D(), kc = class {
  constructor(e = new D(), t = new D(0, 0, -1)) {
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
    is.copy(e).add(t).multiplyScalar(0.5), nr.copy(t).sub(e).normalize(), ir.copy(this.origin).sub(is);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(nr), a = ir.dot(this.direction), o = -ir.dot(nr), c = ir.lengthSq(), l = Math.abs(1 - s * s);
    let u, d, h, m;
    if (l > 0)
      if (u = s * o - a, d = s * a - o, m = r * l, u >= 0) if (d >= -m) if (d <= m) {
        const _ = 1 / l;
        u *= _, d *= _, h = u * (u + s * d + 2 * a) + d * (s * u + d + 2 * o) + c;
      } else
        d = r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + c;
      else
        d = -r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + c;
      else d <= -m ? (u = Math.max(0, -(-s * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -o), r), h = -u * u + d * (d + 2 * o) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-r, -o), r), h = d * (d + 2 * o) + c) : (u = Math.max(0, -(s * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -o), r), h = -u * u + d * (d + 2 * o) + c);
    else
      d = s > 0 ? -r : r, u = Math.max(0, -(s * d + a)), h = -u * u + d * (d + 2 * o) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(is).addScaledVector(nr, d), h;
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
    const c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), l >= 0 ? (r = (e.min.y - d.y) * l, s = (e.max.y - d.y) * l) : (r = (e.max.y - d.y) * l, s = (e.min.y - d.y) * l), n > s || r > i || ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), u >= 0 ? (a = (e.min.z - d.z) * u, o = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, o = (e.min.z - d.z) * u), n > o || a > i) || ((a > n || n !== n) && (n = a), (o < i || i !== i) && (i = o), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, cn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    const s = this.origin, a = this.direction, o = a.x, c = a.y, l = a.z, u = e.x - s.x, d = e.y - s.y, h = e.z - s.z, m = t.x - s.x, _ = t.y - s.y, v = t.z - s.z, p = n.x - s.x, f = n.y - s.y, b = n.z - s.z, y = Math.abs(o), g = Math.abs(c), E = Math.abs(l);
    let w, C, M, T, z, L, I, q, P, R, G, U;
    if (y >= g && y >= E ? (M = o, L = u, P = m, U = p, o >= 0 ? (w = c, C = l, T = d, z = h, I = _, q = v, R = f, G = b) : (w = l, C = c, T = h, z = d, I = v, q = _, R = b, G = f)) : g >= E ? (M = c, L = d, P = _, U = f, c >= 0 ? (w = l, C = o, T = h, z = u, I = v, q = m, R = b, G = p) : (w = o, C = l, T = u, z = h, I = m, q = v, R = p, G = b)) : (M = l, L = h, P = v, U = b, l >= 0 ? (w = o, C = c, T = u, z = d, I = m, q = _, R = p, G = f) : (w = c, C = o, T = d, z = u, I = _, q = m, R = f, G = p)), M === 0) return null;
    const Q = w / M, W = C / M, Y = 1 / M, Z = T - Q * L, Le = z - W * L, we = I - Q * P, rt = q - W * P, Ge = R - Q * U, J = G - W * U, re = Ge * rt - J * we, ae = Z * J - Le * Ge, Ce = we * Le - rt * Z;
    if (i) {
      if (re < 0 || ae < 0 || Ce < 0) return null;
    } else if ((re < 0 || ae < 0 || Ce < 0) && (re > 0 || ae > 0 || Ce > 0)) return null;
    const Ue = re + ae + Ce;
    if (Ue === 0) return null;
    const ue = Y * (re * L + ae * P + Ce * U);
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
}, Nn = class extends Gn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Dn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, da = /* @__PURE__ */ new ht(), wn = /* @__PURE__ */ new kc(), rr = /* @__PURE__ */ new Hi(), pa = /* @__PURE__ */ new D(), sr = /* @__PURE__ */ new D(), ar = /* @__PURE__ */ new D(), or = /* @__PURE__ */ new D(), rs = /* @__PURE__ */ new D(), lr = /* @__PURE__ */ new D(), ma = /* @__PURE__ */ new D(), cr = /* @__PURE__ */ new D(), ut = class extends Lt {
  constructor(e = new It(), t = new Nn()) {
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
      lr.set(0, 0, 0);
      for (let o = 0, c = r.length; o < c; o++) {
        const l = a[o], u = r[o];
        l !== 0 && (rs.fromBufferAttribute(u, e), s ? lr.addScaledVector(rs, l) : lr.addScaledVector(rs.sub(t), l));
      }
      t.add(lr);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), rr.copy(n.boundingSphere), rr.applyMatrix4(r), wn.copy(e.ray).recast(e.near), !(rr.containsPoint(wn.origin) === !1 && (wn.intersectSphere(rr, pa) === null || wn.origin.distanceToSquared(pa) > (e.far - e.near) ** 2)) && (da.copy(r).invert(), wn.copy(e.ray).applyMatrix4(da), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, wn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, c = r.attributes.uv, l = r.attributes.uv1, u = r.attributes.normal, d = r.groups, h = r.drawRange;
    if (a !== null) if (Array.isArray(s)) for (let m = 0, _ = d.length; m < _; m++) {
      const v = d[m], p = s[v.materialIndex], f = Math.max(v.start, h.start), b = Math.min(a.count, Math.min(v.start + v.count, h.start + h.count));
      for (let y = f, g = b; y < g; y += 3) {
        const E = a.getX(y), w = a.getX(y + 1), C = a.getX(y + 2);
        i = hr(this, p, e, n, c, l, u, E, w, C), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = v.materialIndex, t.push(i));
      }
    }
    else {
      const m = Math.max(0, h.start), _ = Math.min(a.count, h.start + h.count);
      for (let v = m, p = _; v < p; v += 3) {
        const f = a.getX(v), b = a.getX(v + 1), y = a.getX(v + 2);
        i = hr(this, s, e, n, c, l, u, f, b, y), i && (i.faceIndex = Math.floor(v / 3), t.push(i));
      }
    }
    else if (o !== void 0) if (Array.isArray(s)) for (let m = 0, _ = d.length; m < _; m++) {
      const v = d[m], p = s[v.materialIndex], f = Math.max(v.start, h.start), b = Math.min(o.count, Math.min(v.start + v.count, h.start + h.count));
      for (let y = f, g = b; y < g; y += 3) {
        const E = y, w = y + 1, C = y + 2;
        i = hr(this, p, e, n, c, l, u, E, w, C), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = v.materialIndex, t.push(i));
      }
    }
    else {
      const m = Math.max(0, h.start), _ = Math.min(o.count, h.start + h.count);
      for (let v = m, p = _; v < p; v += 3) {
        const f = v, b = v + 1, y = v + 2;
        i = hr(this, s, e, n, c, l, u, f, b, y), i && (i.faceIndex = Math.floor(v / 3), t.push(i));
      }
    }
  }
};
function Wc(e, t, n, i, r, s, a, o) {
  let c;
  if (t.side === 1 ? c = i.intersectTriangle(a, s, r, !0, o) : c = i.intersectTriangle(r, s, a, t.side === 0, o), c === null) return null;
  cr.copy(o), cr.applyMatrix4(e.matrixWorld);
  const l = n.ray.origin.distanceTo(cr);
  return l < n.near || l > n.far ? null : {
    distance: l,
    point: cr.clone(),
    object: e
  };
}
function hr(e, t, n, i, r, s, a, o, c, l) {
  e.getVertexPosition(o, sr), e.getVertexPosition(c, ar), e.getVertexPosition(l, or);
  const u = Wc(e, t, n, i, sr, ar, or, ma);
  if (u) {
    const d = new D();
    yi.getBarycoord(ma, sr, ar, or, d), r && (u.uv = yi.getInterpolatedAttribute(r, o, c, l, d, new de())), s && (u.uv1 = yi.getInterpolatedAttribute(s, o, c, l, d, new de())), a && (u.normal = yi.getInterpolatedAttribute(a, o, c, l, d, new D()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: c,
      c: l,
      normal: new D(),
      materialIndex: 0
    };
    yi.getNormal(sr, ar, or, h.normal), u.face = h, u.barycoord = d;
  }
  return u;
}
var Ao = class extends Gt {
  constructor(e = null, t = 1, n = 1, i, r, s, a, o, c = Ct, l = Ct, u, d) {
    super(null, s, a, o, c, l, i, r, u, d), this.isDataTexture = !0, this.image = {
      data: e,
      width: t,
      height: n
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, ga = class extends jt {
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
}, ei = /* @__PURE__ */ new ht(), va = /* @__PURE__ */ new ht(), ur = [], _a = /* @__PURE__ */ new Vn(), Xc = /* @__PURE__ */ new ht(), Ai = /* @__PURE__ */ new ut(), wi = /* @__PURE__ */ new Hi(), qc = class extends ut {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ga(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Xc);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Vn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ei), _a.copy(e.boundingBox).applyMatrix4(ei), this.boundingBox.union(_a);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Hi()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ei), wi.copy(e.boundingSphere).applyMatrix4(ei), this.boundingSphere.union(wi);
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
    if (Ai.geometry = this.geometry, Ai.material = this.material, Ai.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), wi.copy(this.boundingSphere), wi.applyMatrix4(n), e.ray.intersectsSphere(wi) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, ei), va.multiplyMatrices(n, ei), Ai.matrixWorld = va, Ai.raycast(e, ur);
        for (let s = 0, a = ur.length; s < a; s++) {
          const o = ur[s];
          o.instanceId = r, o.object = this, t.push(o);
        }
        ur.length = 0;
      }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new ga(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ao(new Float32Array(i * this.count), i, this.count, lo, Gi));
    const r = this.morphTexture.source.data.data;
    let s = 0;
    for (let c = 0; c < n.length; c++) s += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - s, o = i * e;
    return r[o] = a, r.set(n, o + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    super.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}, Rn = /* @__PURE__ */ new Hi(), Yc = /* @__PURE__ */ new de(0.5, 0.5), fr = /* @__PURE__ */ new D(), Ps = class {
  constructor(e = new xn(), t = new xn(), n = new xn(), i = new xn(), r = new xn(), s = new xn()) {
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
  setFromProjectionMatrix(e, t = di, n = !1) {
    const i = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], c = r[3], l = r[4], u = r[5], d = r[6], h = r[7], m = r[8], _ = r[9], v = r[10], p = r[11], f = r[12], b = r[13], y = r[14], g = r[15];
    if (i[0].setComponents(c - s, h - l, p - m, g - f).normalize(), i[1].setComponents(c + s, h + l, p + m, g + f).normalize(), i[2].setComponents(c + a, h + u, p + _, g + b).normalize(), i[3].setComponents(c - a, h - u, p - _, g - b).normalize(), n)
      i[4].setComponents(o, d, v, y).normalize(), i[5].setComponents(c - o, h - d, p - v, g - y).normalize();
    else if (i[4].setComponents(c - o, h - d, p - v, g - y).normalize(), t === 2e3) i[5].setComponents(c + o, h + d, p + v, g + y).normalize();
    else if (t === 2001) i[5].setComponents(o, d, v, y).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Rn);
  }
  intersectsSprite(e) {
    return Rn.center.set(0, 0, 0), Rn.radius = 0.7071067811865476 + Yc.distanceTo(e.center), Rn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Rn);
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
      if (fr.x = i.normal.x > 0 ? e.max.x : e.min.x, fr.y = i.normal.y > 0 ? e.max.y : e.min.y, fr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(fr) < 0) return !1;
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
}, wo = class extends Gt {
  constructor(e = [], t = 301, n, i, r, s, a, o, c, l) {
    super(e, t, n, i, r, s, a, o, c, l), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, li = class extends Gt {
  constructor(e, t, n, i, r, s, a, o, c) {
    super(e, t, n, i, r, s, a, o, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}, Fi = class extends Gt {
  constructor(e, t, n = Un, i, r, s, a = Ct, o = Ct, c, l = Oi, u = 1) {
    if (l !== 1026 && l !== 1027) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({
      width: e,
      height: t,
      depth: u
    }, i, r, s, a, o, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Cs(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}, Kc = class extends Fi {
  constructor(e, t = Un, n = 301, i, r, s = Ct, a = Ct, o, c = Oi) {
    const l = {
      width: e,
      height: e,
      depth: 1
    }, u = [
      l,
      l,
      l,
      l,
      l,
      l
    ];
    super(e, e, t, n, i, r, s, a, o, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Ro = class extends Gt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, ki = class Co extends It {
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
    const c = [], l = [], u = [], d = [];
    let h = 0, m = 0;
    _("z", "y", "x", -1, -1, i, n, t, a, s, 0), _("z", "y", "x", 1, -1, i, n, -t, a, s, 1), _("x", "z", "y", 1, 1, t, i, n, r, a, 2), _("x", "z", "y", 1, -1, t, i, -n, r, a, 3), _("x", "y", "z", 1, -1, t, n, i, r, s, 4), _("x", "y", "z", -1, -1, t, n, -i, r, s, 5), this.setIndex(c), this.setAttribute("position", new it(l, 3)), this.setAttribute("normal", new it(u, 3)), this.setAttribute("uv", new it(d, 2));
    function _(v, p, f, b, y, g, E, w, C, M, T) {
      const z = g / C, L = E / M, I = g / 2, q = E / 2, P = w / 2, R = C + 1, G = M + 1;
      let U = 0, Q = 0;
      const W = new D();
      for (let Y = 0; Y < G; Y++) {
        const Z = Y * L - q;
        for (let Le = 0; Le < R; Le++)
          W[v] = (Le * z - I) * b, W[p] = Z * y, W[f] = P, l.push(W.x, W.y, W.z), W[v] = 0, W[p] = 0, W[f] = w > 0 ? 1 : -1, u.push(W.x, W.y, W.z), d.push(Le / C), d.push(1 - Y / M), U += 1;
      }
      for (let Y = 0; Y < M; Y++) for (let Z = 0; Z < C; Z++) {
        const Le = h + Z + R * Y, we = h + Z + R * (Y + 1), rt = h + (Z + 1) + R * (Y + 1), Ge = h + (Z + 1) + R * Y;
        c.push(Le, we, Ge), c.push(we, rt, Ge), Q += 6;
      }
      o.addGroup(m, Q, T), m += Q, h += U;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Co(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}, fi = class Po extends It {
  constructor(t = 1, n = 1, i = 1, r = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: n,
      height: i,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    r = Math.floor(r), s = Math.floor(s);
    const u = [], d = [], h = [], m = [];
    let _ = 0;
    const v = [], p = i / 2;
    let f = 0;
    b(), a === !1 && (t > 0 && y(!0), n > 0 && y(!1)), this.setIndex(u), this.setAttribute("position", new it(d, 3)), this.setAttribute("normal", new it(h, 3)), this.setAttribute("uv", new it(m, 2));
    function b() {
      const g = new D(), E = new D();
      let w = 0;
      const C = (n - t) / i;
      for (let M = 0; M <= s; M++) {
        const T = [], z = M / s, L = z * (n - t) + t;
        for (let I = 0; I <= r; I++) {
          const q = I / r, P = q * c + o, R = Math.sin(P), G = Math.cos(P);
          E.x = L * R, E.y = -z * i + p, E.z = L * G, d.push(E.x, E.y, E.z), g.set(R, C, G).normalize(), h.push(g.x, g.y, g.z), m.push(q, 1 - z), T.push(_++);
        }
        v.push(T);
      }
      for (let M = 0; M < r; M++) for (let T = 0; T < s; T++) {
        const z = v[T][M], L = v[T + 1][M], I = v[T + 1][M + 1], q = v[T][M + 1];
        (t > 0 || T !== 0) && (u.push(z, L, q), w += 3), (n > 0 || T !== s - 1) && (u.push(L, I, q), w += 3);
      }
      l.addGroup(f, w, 0), f += w;
    }
    function y(g) {
      const E = _, w = new de(), C = new D();
      let M = 0;
      const T = g === !0 ? t : n, z = g === !0 ? 1 : -1;
      for (let I = 1; I <= r; I++)
        d.push(0, p * z, 0), h.push(0, z, 0), m.push(0.5, 0.5), _++;
      const L = _;
      for (let I = 0; I <= r; I++) {
        const q = I / r * c + o, P = Math.cos(q), R = Math.sin(q);
        C.x = T * R, C.y = p * z, C.z = T * P, d.push(C.x, C.y, C.z), h.push(0, z, 0), w.x = P * 0.5 + 0.5, w.y = R * 0.5 * z + 0.5, m.push(w.x, w.y), _++;
      }
      for (let I = 0; I < r; I++) {
        const q = E + I, P = L + I;
        g === !0 ? u.push(P, P + 1, q) : u.push(P + 1, P, q), M += 3;
      }
      l.addGroup(f, M, g === !0 ? 1 : 2), f += M;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Po(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, Jc = class Lo extends fi {
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
    return new Lo(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, tn = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  getPoint() {
    Fe("Curve: .getPoint() not implemented.");
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
    let a = 0, o = r - 1, c;
    for (; a <= o; )
      if (i = Math.floor(a + (o - a) / 2), c = n[i] - s, c < 0) a = i + 1;
      else if (c > 0) o = i - 1;
      else {
        o = i;
        break;
      }
    if (i = o, n[i] === s) return i / (r - 1);
    const l = n[i], u = n[i + 1] - l, d = (s - l) / u;
    return (i + d) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const s = this.getPoint(i), a = this.getPoint(r), o = t || (s.isVector2 ? new de() : new D());
    return o.copy(a).sub(s).normalize(), o;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = !1) {
    const n = new D(), i = [], r = [], s = [], a = new D(), o = new ht();
    for (let h = 0; h <= e; h++) {
      const m = h / e;
      i[h] = this.getTangentAt(m, new D());
    }
    r[0] = new D(), s[0] = new D();
    let c = Number.MAX_VALUE;
    const l = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
    for (let h = 1; h <= e; h++) {
      if (r[h] = r[h - 1].clone(), s[h] = s[h - 1].clone(), a.crossVectors(i[h - 1], i[h]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(Ye(i[h - 1].dot(i[h]), -1, 1));
        r[h].applyMatrix4(o.makeRotationAxis(a, m));
      }
      s[h].crossVectors(i[h], r[h]);
    }
    if (t === !0) {
      let h = Math.acos(Ye(r[0].dot(r[e]), -1, 1));
      h /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (h = -h);
      for (let m = 1; m <= e; m++)
        r[m].applyMatrix4(o.makeRotationAxis(i[m], h * m)), s[m].crossVectors(i[m], r[m]);
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
}, Ls = class extends tn {
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
    let o = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const l = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = o - this.aX, h = c - this.aY;
      o = d * l - h * u + this.aX, c = d * u + h * l + this.aY;
    }
    return n.set(o, c);
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
}, Zc = class extends Ls {
  constructor(e, t, n, i, r, s) {
    super(e, t, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
  }
};
function Is() {
  let e = 0, t = 0, n = 0, i = 0;
  function r(s, a, o, c) {
    e = s, t = o, n = -3 * s + 3 * a - 2 * o - c, i = 2 * s - 2 * a + o + c;
  }
  return {
    initCatmullRom: function(s, a, o, c, l) {
      r(a, o, l * (o - s), l * (c - a));
    },
    initNonuniformCatmullRom: function(s, a, o, c, l, u, d) {
      let h = (a - s) / l - (o - s) / (l + u) + (o - a) / u, m = (o - a) / u - (c - a) / (u + d) + (c - o) / d;
      h *= u, m *= u, r(a, o, h, m);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return e + t * s + n * a + i * o;
    }
  };
}
var Ma = /* @__PURE__ */ new D(), Sa = /* @__PURE__ */ new D(), ss = /* @__PURE__ */ new Is(), as = /* @__PURE__ */ new Is(), os = /* @__PURE__ */ new Is(), Io = class extends tn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new D()) {
    const n = t, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(s), o = s - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : o === 0 && a === r - 1 && (a = r - 2, o = 1);
    let c, l;
    this.closed || a > 0 ? c = i[(a - 1) % r] : (Sa.subVectors(i[0], i[1]).add(i[0]), c = Sa);
    const u = i[a % r], d = i[(a + 1) % r];
    if (this.closed || a + 2 < r ? l = i[(a + 2) % r] : (Ma.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), l = Ma), this.curveType === "centripetal" || this.curveType === "chordal") {
      const h = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(u), h), _ = Math.pow(u.distanceToSquared(d), h), v = Math.pow(d.distanceToSquared(l), h);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), v < 1e-4 && (v = _), ss.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, m, _, v), as.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, m, _, v), os.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, m, _, v);
    } else this.curveType === "catmullrom" && (ss.initCatmullRom(c.x, u.x, d.x, l.x, this.tension), as.initCatmullRom(c.y, u.y, d.y, l.y, this.tension), os.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
    return n.set(ss.calc(o), as.calc(o), os.calc(o)), n;
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
      this.points.push(new D().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
};
function xa(e, t, n, i, r) {
  const s = (i - t) * 0.5, a = (r - n) * 0.5, o = e * e, c = e * o;
  return (2 * n - 2 * i + s + a) * c + (-3 * n + 3 * i - 2 * s - a) * o + s * e + n;
}
function $c(e, t) {
  const n = 1 - e;
  return n * n * t;
}
function Qc(e, t) {
  return 2 * (1 - e) * e * t;
}
function jc(e, t) {
  return e * e * t;
}
function Ni(e, t, n, i) {
  return $c(e, t) + Qc(e, n) + jc(e, i);
}
function eh(e, t) {
  const n = 1 - e;
  return n * n * n * t;
}
function th(e, t) {
  const n = 1 - e;
  return 3 * n * n * e * t;
}
function nh(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function ih(e, t) {
  return e * e * e * t;
}
function Ui(e, t, n, i, r) {
  return eh(e, t) + th(e, n) + nh(e, i) + ih(e, r);
}
var No = class extends tn {
  constructor(e = new de(), t = new de(), n = new de(), i = new de()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return n.set(Ui(e, i.x, r.x, s.x, a.x), Ui(e, i.y, r.y, s.y, a.y)), n;
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
}, rh = class extends tn {
  constructor(e = new D(), t = new D(), n = new D(), i = new D()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new D()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return n.set(Ui(e, i.x, r.x, s.x, a.x), Ui(e, i.y, r.y, s.y, a.y), Ui(e, i.z, r.z, s.z, a.z)), n;
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
}, Uo = class extends tn {
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
}, Do = class extends tn {
  constructor(e = new D(), t = new D()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new D()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new D()) {
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
}, Oo = class extends tn {
  constructor(e = new de(), t = new de(), n = new de()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(Ni(e, i.x, r.x, s.x), Ni(e, i.y, r.y, s.y)), n;
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
}, Fo = class extends tn {
  constructor(e = new D(), t = new D(), n = new D()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new D()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(Ni(e, i.x, r.x, s.x), Ni(e, i.y, r.y, s.y), Ni(e, i.z, r.z, s.z)), n;
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
}, Bo = class extends tn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new de()) {
    const n = t, i = this.points, r = (i.length - 1) * e, s = Math.floor(r), a = r - s, o = i[s === 0 ? s : s - 1], c = i[s], l = i[s > i.length - 2 ? i.length - 1 : s + 1], u = i[s > i.length - 3 ? i.length - 1 : s + 2];
    return n.set(xa(a, o.x, c.x, l.x, u.x), xa(a, o.y, c.y, l.y, u.y)), n;
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
}, Cr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Zc,
  CatmullRomCurve3: Io,
  CubicBezierCurve: No,
  CubicBezierCurve3: rh,
  EllipseCurve: Ls,
  LineCurve: Uo,
  LineCurve3: Do,
  QuadraticBezierCurve: Oo,
  QuadraticBezierCurve3: Fo,
  SplineCurve: Bo
}), zo = class extends tn {
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
      this.curves.push(new Cr[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const s = i[r] - n, a = this.curves[r], o = a.getLength(), c = o === 0 ? 0 : 1 - s / o;
        return a.getPointAt(c, t);
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
      for (let c = 0; c < o.length; c++) {
        const l = o[c];
        n && n.equals(l) || (t.push(l), n = l);
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
      this.curves.push(new Cr[i.type]().fromJSON(i));
    }
    return this;
  }
}, ya = class extends zo {
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
    const n = new Uo(this.currentPoint.clone(), new de(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new Oo(this.currentPoint.clone(), new de(e, t), new de(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, s) {
    const a = new No(this.currentPoint.clone(), new de(e, t), new de(n, i), new de(r, s));
    return this.curves.push(a), this.currentPoint.set(r, s), this;
  }
  splineThru(e) {
    const t = new Bo([this.currentPoint.clone()].concat(e));
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
    const c = this.currentPoint.x, l = this.currentPoint.y;
    return this.absellipse(e + c, t + l, n, i, r, s, a, o), this;
  }
  absellipse(e, t, n, i, r, s, a, o) {
    const c = new Ls(e, t, n, i, r, s, a, o);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const l = c.getPoint(1);
    return this.currentPoint.copy(l), this;
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
}, Vo = class extends ya {
  constructor(e) {
    super(e), this.uuid = vi(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new ya().fromJSON(i));
    }
    return this;
  }
};
function sh(e, t, n = 2) {
  const i = t && t.length, r = i ? t[0] * n : e.length;
  let s = Go(e, 0, r, n, !0);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, c, l;
  if (i && (s = hh(e, t, s, n)), e.length > 80 * n) {
    o = e[0], c = e[1];
    let u = o, d = c;
    for (let h = n; h < r; h += n) {
      const m = e[h], _ = e[h + 1];
      m < o && (o = m), _ < c && (c = _), m > u && (u = m), _ > d && (d = _);
    }
    l = Math.max(u - o, d - c), l = l !== 0 ? 32767 / l : 0;
  }
  return Bi(s, a, n, o, c, l, 0), a;
}
function Go(e, t, n, i, r) {
  let s;
  if (r === xh(e, t, n, i) > 0) for (let a = t; a < n; a += i) s = Ea(a / i | 0, e[a], e[a + 1], s);
  else for (let a = n - i; a >= t; a -= i) s = Ea(a / i | 0, e[a], e[a + 1], s);
  return s && mi(s, s.next) && (Vi(s), s = s.next), s;
}
function On(e, t) {
  if (!e) return e;
  t || (t = e);
  let n = e, i;
  do
    if (i = !1, !n.steiner && (mi(n, n.next) || ft(n.prev, n, n.next) === 0)) {
      if (Vi(n), n = t = n.prev, n === n.next) break;
      i = !0;
    } else n = n.next;
  while (i || n !== t);
  return t;
}
function Bi(e, t, n, i, r, s, a) {
  if (!e) return;
  !a && s && mh(e, i, r, s);
  let o = e;
  for (; e.prev !== e.next; ) {
    const c = e.prev, l = e.next;
    if (s ? oh(e, i, r, s) : ah(e)) {
      t.push(c.i, e.i, l.i), Vi(e), e = l.next, o = l.next;
      continue;
    }
    if (e = l, e === o) {
      a ? a === 1 ? (e = lh(On(e), t), Bi(e, t, n, i, r, s, 2)) : a === 2 && ch(e, t, n, i, r, s) : Bi(On(e), t, n, i, r, s, 1);
      break;
    }
  }
}
function ah(e) {
  const t = e.prev, n = e, i = e.next;
  if (ft(t, n, i) >= 0) return !1;
  const r = t.x, s = n.x, a = i.x, o = t.y, c = n.y, l = i.y, u = Math.min(r, s, a), d = Math.min(o, c, l), h = Math.max(r, s, a), m = Math.max(o, c, l);
  let _ = i.next;
  for (; _ !== t; ) {
    if (_.x >= u && _.x <= h && _.y >= d && _.y <= m && Li(r, o, s, c, a, l, _.x, _.y) && ft(_.prev, _, _.next) >= 0) return !1;
    _ = _.next;
  }
  return !0;
}
function oh(e, t, n, i) {
  const r = e.prev, s = e, a = e.next;
  if (ft(r, s, a) >= 0) return !1;
  const o = r.x, c = s.x, l = a.x, u = r.y, d = s.y, h = a.y, m = Math.min(o, c, l), _ = Math.min(u, d, h), v = Math.max(o, c, l), p = Math.max(u, d, h), f = Es(m, _, t, n, i), b = Es(v, p, t, n, i);
  let y = e.prevZ, g = e.nextZ;
  for (; y && y.z >= f && g && g.z <= b; ) {
    if (y.x >= m && y.x <= v && y.y >= _ && y.y <= p && y !== r && y !== a && Li(o, u, c, d, l, h, y.x, y.y) && ft(y.prev, y, y.next) >= 0 || (y = y.prevZ, g.x >= m && g.x <= v && g.y >= _ && g.y <= p && g !== r && g !== a && Li(o, u, c, d, l, h, g.x, g.y) && ft(g.prev, g, g.next) >= 0)) return !1;
    g = g.nextZ;
  }
  for (; y && y.z >= f; ) {
    if (y.x >= m && y.x <= v && y.y >= _ && y.y <= p && y !== r && y !== a && Li(o, u, c, d, l, h, y.x, y.y) && ft(y.prev, y, y.next) >= 0) return !1;
    y = y.prevZ;
  }
  for (; g && g.z <= b; ) {
    if (g.x >= m && g.x <= v && g.y >= _ && g.y <= p && g !== r && g !== a && Li(o, u, c, d, l, h, g.x, g.y) && ft(g.prev, g, g.next) >= 0) return !1;
    g = g.nextZ;
  }
  return !0;
}
function lh(e, t) {
  let n = e;
  do {
    const i = n.prev, r = n.next.next;
    !mi(i, r) && ko(i, n, n.next, r) && zi(i, r) && zi(r, i) && (t.push(i.i, n.i, r.i), Vi(n), Vi(n.next), n = e = r), n = n.next;
  } while (n !== e);
  return On(n);
}
function ch(e, t, n, i, r, s) {
  let a = e;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && _h(a, o)) {
        let c = Wo(a, o);
        a = On(a, a.next), c = On(c, c.next), Bi(a, t, n, i, r, s, 0), Bi(c, t, n, i, r, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== e);
}
function hh(e, t, n, i) {
  const r = [];
  for (let s = 0, a = t.length; s < a; s++) {
    const o = Go(e, t[s] * i, s < a - 1 ? t[s + 1] * i : e.length, i, !1);
    o === o.next && (o.steiner = !0), r.push(vh(o));
  }
  r.sort(uh);
  for (let s = 0; s < r.length; s++) n = fh(r[s], n);
  return n;
}
function uh(e, t) {
  let n = e.x - t.x;
  return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function fh(e, t) {
  const n = dh(e, t);
  if (!n) return t;
  const i = Wo(n, e);
  return On(i, i.next), On(n, n.next);
}
function dh(e, t) {
  let n = t;
  const i = e.x, r = e.y;
  let s = -1 / 0, a;
  if (mi(e, n)) return n;
  do {
    if (mi(e, n.next)) return n.next;
    if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
      const d = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (d <= i && d > s && (s = d, a = n.x < n.next.x ? n : n.next, d === i))
        return a;
    }
    n = n.next;
  } while (n !== t);
  if (!a) return null;
  const o = a, c = a.x, l = a.y;
  let u = 1 / 0;
  n = a;
  do {
    if (i >= n.x && n.x >= c && i !== n.x && Ho(r < l ? i : s, r, c, l, r < l ? s : i, r, n.x, n.y)) {
      const d = Math.abs(r - n.y) / (i - n.x);
      zi(n, e) && (d < u || d === u && (n.x > a.x || n.x === a.x && ph(a, n))) && (a = n, u = d);
    }
    n = n.next;
  } while (n !== o);
  return a;
}
function ph(e, t) {
  return ft(e.prev, e, t.prev) < 0 && ft(t.next, e, e.next) < 0;
}
function mh(e, t, n, i) {
  let r = e;
  do
    r.z === 0 && (r.z = Es(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, gh(r);
}
function gh(e) {
  let t, n = 1;
  do {
    let i = e, r;
    e = null;
    let s = null;
    for (t = 0; i; ) {
      t++;
      let a = i, o = 0;
      for (let l = 0; l < n && (o++, a = a.nextZ, !!a); l++)
        ;
      let c = n;
      for (; o > 0 || c > 0 && a; )
        o !== 0 && (c === 0 || !a || i.z <= a.z) ? (r = i, i = i.nextZ, o--) : (r = a, a = a.nextZ, c--), s ? s.nextZ = r : e = r, r.prevZ = s, s = r;
      i = a;
    }
    s.nextZ = null, n *= 2;
  } while (t > 1);
  return e;
}
function Es(e, t, n, i, r) {
  return e = (e - n) * r | 0, t = (t - i) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function vh(e) {
  let t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function Ho(e, t, n, i, r, s, a, o) {
  return (r - a) * (t - o) >= (e - a) * (s - o) && (e - a) * (i - o) >= (n - a) * (t - o) && (n - a) * (s - o) >= (r - a) * (i - o);
}
function Li(e, t, n, i, r, s, a, o) {
  return !(e === a && t === o) && Ho(e, t, n, i, r, s, a, o);
}
function _h(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !Mh(e, t) && (zi(e, t) && zi(t, e) && Sh(e, t) && (ft(e.prev, e, t.prev) || ft(e, t.prev, t)) || mi(e, t) && ft(e.prev, e, e.next) > 0 && ft(t.prev, t, t.next) > 0);
}
function ft(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function mi(e, t) {
  return e.x === t.x && e.y === t.y;
}
function ko(e, t, n, i) {
  const r = pr(ft(e, t, n)), s = pr(ft(e, t, i)), a = pr(ft(n, i, e)), o = pr(ft(n, i, t));
  return !!(r !== s && a !== o || r === 0 && dr(e, n, t) || s === 0 && dr(e, i, t) || a === 0 && dr(n, e, i) || o === 0 && dr(n, t, i));
}
function dr(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function pr(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Mh(e, t) {
  let n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && ko(n, n.next, e, t)) return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function zi(e, t) {
  return ft(e.prev, e, e.next) < 0 ? ft(e, t, e.next) >= 0 && ft(e, e.prev, t) >= 0 : ft(e, t, e.prev) < 0 || ft(e, e.next, t) < 0;
}
function Sh(e, t) {
  let n = e, i = !1;
  const r = (e.x + t.x) / 2, s = (e.y + t.y) / 2;
  do
    n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
  while (n !== e);
  return i;
}
function Wo(e, t) {
  const n = Ts(e.i, e.x, e.y), i = Ts(t.i, t.x, t.y), r = e.next, s = t.prev;
  return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
}
function Ea(e, t, n, i) {
  const r = Ts(e, t, n);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function Vi(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Ts(e, t, n) {
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
function xh(e, t, n, i) {
  let r = 0;
  for (let s = t, a = n - i; s < n; s += i)
    r += (e[a] - e[s]) * (e[s + 1] + e[a + 1]), a = s;
  return r;
}
var yh = class {
  static triangulate(e, t, n = 2) {
    return sh(e, t, n);
  }
}, mr = class Xo {
  static area(t) {
    const n = t.length;
    let i = 0;
    for (let r = n - 1, s = 0; s < n; r = s++) i += t[r].x * t[s].y - t[s].x * t[r].y;
    return i * 0.5;
  }
  static isClockWise(t) {
    return Xo.area(t) < 0;
  }
  static triangulateShape(t, n) {
    const i = [], r = [], s = [];
    Ta(t), ba(i, t);
    let a = t.length;
    n.forEach(Ta);
    for (let c = 0; c < n.length; c++)
      r.push(a), a += n[c].length, ba(i, n[c]);
    const o = yh.triangulate(i, r);
    for (let c = 0; c < o.length; c += 3) s.push(o.slice(c, c + 3));
    return s;
  }
};
function Ta(e) {
  const t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function ba(e, t) {
  for (let n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y);
}
var Eh = class qo extends It {
  constructor(t = new Vo([
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
    for (let o = 0, c = t.length; o < c; o++) {
      const l = t[o];
      a(l);
    }
    this.setAttribute("position", new it(r, 3)), this.setAttribute("uv", new it(s, 2)), this.computeVertexNormals();
    function a(o) {
      const c = [], l = n.curveSegments !== void 0 ? n.curveSegments : 12, u = n.steps !== void 0 ? n.steps : 1, d = n.depth !== void 0 ? n.depth : 1;
      let h = n.bevelEnabled !== void 0 ? n.bevelEnabled : !0, m = n.bevelThickness !== void 0 ? n.bevelThickness : 0.2, _ = n.bevelSize !== void 0 ? n.bevelSize : m - 0.1, v = n.bevelOffset !== void 0 ? n.bevelOffset : 0, p = n.bevelSegments !== void 0 ? n.bevelSegments : 3;
      const f = n.extrudePath, b = n.UVGenerator !== void 0 ? n.UVGenerator : Th;
      let y, g = !1, E, w, C, M;
      if (f) {
        y = f.getSpacedPoints(u), g = !0, h = !1;
        const ee = f.isCatmullRomCurve3 ? f.closed : !1;
        E = f.computeFrenetFrames(u, ee), w = new D(), C = new D(), M = new D();
      }
      h || (p = 0, m = 0, _ = 0, v = 0);
      const T = o.extractPoints(l);
      let z = T.shape;
      const L = T.holes;
      if (!mr.isClockWise(z)) {
        z = z.reverse();
        for (let ee = 0, j = L.length; ee < j; ee++) {
          const le = L[ee];
          mr.isClockWise(le) && (L[ee] = le.reverse());
        }
      }
      function I(ee) {
        const le = 10000000000000001e-36;
        let ve = ee[0];
        for (let _e = 1; _e <= ee.length; _e++) {
          const Re = _e % ee.length, Ie = ee[Re], Ve = Ie.x - ve.x, He = Ie.y - ve.y, N = Ve * Ve + He * He, lt = Math.max(Math.abs(Ie.x), Math.abs(Ie.y), Math.abs(ve.x), Math.abs(ve.y));
          if (N <= le * lt * lt) {
            ee.splice(Re, 1), _e--;
            continue;
          }
          ve = Ie;
        }
      }
      I(z), L.forEach(I);
      const q = L.length, P = z;
      for (let ee = 0; ee < q; ee++) {
        const j = L[ee];
        z = z.concat(j);
      }
      function R(ee, j, le) {
        return j || Be("ExtrudeGeometry: vec does not exist"), ee.clone().addScaledVector(j, le);
      }
      const G = z.length;
      function U(ee, j, le) {
        let ve, _e, Re;
        const Ie = ee.x - j.x, Ve = ee.y - j.y, He = le.x - ee.x, N = le.y - ee.y, lt = Ie * Ie + Ve * Ve, Qe = Ie * N - Ve * He;
        if (Math.abs(Qe) > Number.EPSILON) {
          const Je = Math.sqrt(lt), A = Math.sqrt(He * He + N * N), S = j.x - Ve / Je, O = j.y + Ie / Je, X = le.x - N / A, te = le.y + He / A, oe = ((X - S) * N - (te - O) * He) / (Ie * N - Ve * He);
          ve = S + Ie * oe - ee.x, _e = O + Ve * oe - ee.y;
          const fe = ve * ve + _e * _e;
          if (fe <= 2) return new de(ve, _e);
          Re = Math.sqrt(fe / 2);
        } else {
          let Je = !1;
          Ie > Number.EPSILON ? He > Number.EPSILON && (Je = !0) : Ie < -Number.EPSILON ? He < -Number.EPSILON && (Je = !0) : Math.sign(Ve) === Math.sign(N) && (Je = !0), Je ? (ve = -Ve, _e = Ie, Re = Math.sqrt(lt)) : (ve = Ie, _e = Ve, Re = Math.sqrt(lt / 2));
        }
        return new de(ve / Re, _e / Re);
      }
      const Q = [];
      for (let ee = 0, j = P.length, le = j - 1, ve = ee + 1; ee < j; ee++, le++, ve++)
        le === j && (le = 0), ve === j && (ve = 0), Q[ee] = U(P[ee], P[le], P[ve]);
      const W = [];
      let Y, Z = Q.concat();
      for (let ee = 0, j = q; ee < j; ee++) {
        const le = L[ee];
        Y = [];
        for (let ve = 0, _e = le.length, Re = _e - 1, Ie = ve + 1; ve < _e; ve++, Re++, Ie++)
          Re === _e && (Re = 0), Ie === _e && (Ie = 0), Y[ve] = U(le[ve], le[Re], le[Ie]);
        W.push(Y), Z = Z.concat(Y);
      }
      let Le;
      if (p === 0) Le = mr.triangulateShape(P, L);
      else {
        const ee = [], j = [];
        for (let le = 0; le < p; le++) {
          const ve = le / p, _e = m * Math.cos(ve * Math.PI / 2), Re = _ * Math.sin(ve * Math.PI / 2) + v;
          for (let Ie = 0, Ve = P.length; Ie < Ve; Ie++) {
            const He = R(P[Ie], Q[Ie], Re);
            ae(He.x, He.y, -_e), ve === 0 && ee.push(He);
          }
          for (let Ie = 0, Ve = q; Ie < Ve; Ie++) {
            const He = L[Ie];
            Y = W[Ie];
            const N = [];
            for (let lt = 0, Qe = He.length; lt < Qe; lt++) {
              const Je = R(He[lt], Y[lt], Re);
              ae(Je.x, Je.y, -_e), ve === 0 && N.push(Je);
            }
            ve === 0 && j.push(N);
          }
        }
        Le = mr.triangulateShape(ee, j);
      }
      const we = Le.length, rt = _ + v;
      for (let ee = 0; ee < G; ee++) {
        const j = h ? R(z[ee], Z[ee], rt) : z[ee];
        g ? (C.copy(E.normals[0]).multiplyScalar(j.x), w.copy(E.binormals[0]).multiplyScalar(j.y), M.copy(y[0]).add(C).add(w), ae(M.x, M.y, M.z)) : ae(j.x, j.y, 0);
      }
      for (let ee = 1; ee <= u; ee++) for (let j = 0; j < G; j++) {
        const le = h ? R(z[j], Z[j], rt) : z[j];
        g ? (C.copy(E.normals[ee]).multiplyScalar(le.x), w.copy(E.binormals[ee]).multiplyScalar(le.y), M.copy(y[ee]).add(C).add(w), ae(M.x, M.y, M.z)) : ae(le.x, le.y, d / u * ee);
      }
      for (let ee = p - 1; ee >= 0; ee--) {
        const j = ee / p, le = m * Math.cos(j * Math.PI / 2), ve = _ * Math.sin(j * Math.PI / 2) + v;
        for (let _e = 0, Re = P.length; _e < Re; _e++) {
          const Ie = R(P[_e], Q[_e], ve);
          ae(Ie.x, Ie.y, d + le);
        }
        for (let _e = 0, Re = L.length; _e < Re; _e++) {
          const Ie = L[_e];
          Y = W[_e];
          for (let Ve = 0, He = Ie.length; Ve < He; Ve++) {
            const N = R(Ie[Ve], Y[Ve], ve);
            g ? ae(N.x, N.y + y[u - 1].y, y[u - 1].x + le) : ae(N.x, N.y, d + le);
          }
        }
      }
      Ge(), J();
      function Ge() {
        const ee = r.length / 3;
        if (h) {
          let j = 0, le = G * j;
          for (let ve = 0; ve < we; ve++) {
            const _e = Le[ve];
            Ce(_e[2] + le, _e[1] + le, _e[0] + le);
          }
          j = u + p * 2, le = G * j;
          for (let ve = 0; ve < we; ve++) {
            const _e = Le[ve];
            Ce(_e[0] + le, _e[1] + le, _e[2] + le);
          }
        } else {
          for (let j = 0; j < we; j++) {
            const le = Le[j];
            Ce(le[2], le[1], le[0]);
          }
          for (let j = 0; j < we; j++) {
            const le = Le[j];
            Ce(le[0] + G * u, le[1] + G * u, le[2] + G * u);
          }
        }
        i.addGroup(ee, r.length / 3 - ee, 0);
      }
      function J() {
        const ee = r.length / 3;
        let j = 0;
        re(P, j), j += P.length;
        for (let le = 0, ve = L.length; le < ve; le++) {
          const _e = L[le];
          re(_e, j), j += _e.length;
        }
        i.addGroup(ee, r.length / 3 - ee, 1);
      }
      function re(ee, j) {
        let le = ee.length;
        for (; --le >= 0; ) {
          const ve = le;
          let _e = le - 1;
          _e < 0 && (_e = ee.length - 1);
          for (let Re = 0, Ie = u + p * 2; Re < Ie; Re++) {
            const Ve = G * Re, He = G * (Re + 1);
            Ue(j + ve + Ve, j + _e + Ve, j + _e + He, j + ve + He);
          }
        }
      }
      function ae(ee, j, le) {
        c.push(ee), c.push(j), c.push(le);
      }
      function Ce(ee, j, le) {
        ue(ee), ue(j), ue(le);
        const ve = r.length / 3, _e = b.generateTopUV(i, r, ve - 3, ve - 2, ve - 1);
        qe(_e[0]), qe(_e[1]), qe(_e[2]);
      }
      function Ue(ee, j, le, ve) {
        ue(ee), ue(j), ue(ve), ue(j), ue(le), ue(ve);
        const _e = r.length / 3, Re = b.generateSideWallUV(i, r, _e - 6, _e - 3, _e - 2, _e - 1);
        qe(Re[0]), qe(Re[1]), qe(Re[3]), qe(Re[1]), qe(Re[2]), qe(Re[3]);
      }
      function ue(ee) {
        r.push(c[ee * 3 + 0]), r.push(c[ee * 3 + 1]), r.push(c[ee * 3 + 2]);
      }
      function qe(ee) {
        s.push(ee.x), s.push(ee.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), n = this.parameters.shapes, i = this.parameters.options;
    return bh(n, i, t);
  }
  static fromJSON(t, n) {
    const i = [];
    for (let s = 0, a = t.shapes.length; s < a; s++) {
      const o = n[t.shapes[s]];
      i.push(o);
    }
    const r = t.options.extrudePath;
    return r !== void 0 && (t.options.extrudePath = new Cr[r.type]().fromJSON(r)), new qo(i, t.options);
  }
}, Th = {
  generateTopUV: function(e, t, n, i, r) {
    const s = t[n * 3], a = t[n * 3 + 1], o = t[i * 3], c = t[i * 3 + 1], l = t[r * 3], u = t[r * 3 + 1];
    return [
      new de(s, a),
      new de(o, c),
      new de(l, u)
    ];
  },
  generateSideWallUV: function(e, t, n, i, r, s) {
    const a = t[n * 3], o = t[n * 3 + 1], c = t[n * 3 + 2], l = t[i * 3], u = t[i * 3 + 1], d = t[i * 3 + 2], h = t[r * 3], m = t[r * 3 + 1], _ = t[r * 3 + 2], v = t[s * 3], p = t[s * 3 + 1], f = t[s * 3 + 2];
    return Math.abs(o - u) < Math.abs(a - l) ? [
      new de(a, 1 - c),
      new de(l, 1 - d),
      new de(h, 1 - _),
      new de(v, 1 - f)
    ] : [
      new de(o, 1 - c),
      new de(u, 1 - d),
      new de(m, 1 - _),
      new de(p, 1 - f)
    ];
  }
};
function bh(e, t, n) {
  if (n.shapes = [], Array.isArray(e)) for (let i = 0, r = e.length; i < r; i++) {
    const s = e[i];
    n.shapes.push(s.uuid);
  }
  else n.shapes.push(e.uuid);
  return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
var Fn = class Yo extends It {
  constructor(t = 1, n = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: n,
      widthSegments: i,
      heightSegments: r
    };
    const s = t / 2, a = n / 2, o = Math.floor(i), c = Math.floor(r), l = o + 1, u = c + 1, d = t / o, h = n / c, m = [], _ = [], v = [], p = [];
    for (let f = 0; f < u; f++) {
      const b = f * h - a;
      for (let y = 0; y < l; y++) {
        const g = y * d - s;
        _.push(g, -b, 0), v.push(0, 0, 1), p.push(y / o), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++) for (let b = 0; b < o; b++) {
      const y = b + l * f, g = b + l * (f + 1), E = b + 1 + l * (f + 1), w = b + 1 + l * f;
      m.push(y, g, w), m.push(g, E, w);
    }
    this.setIndex(m), this.setAttribute("position", new it(_, 3)), this.setAttribute("normal", new it(v, 3)), this.setAttribute("uv", new it(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Yo(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, Ah = class Ko extends It {
  constructor(t = 0.5, n = 1, i = 32, r = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: n,
      thetaSegments: i,
      phiSegments: r,
      thetaStart: s,
      thetaLength: a
    }, i = Math.max(3, i), r = Math.max(1, r);
    const o = [], c = [], l = [], u = [];
    let d = t;
    const h = (n - t) / r, m = new D(), _ = new de();
    for (let v = 0; v <= r; v++) {
      for (let p = 0; p <= i; p++) {
        const f = s + p / i * a;
        m.x = d * Math.cos(f), m.y = d * Math.sin(f), c.push(m.x, m.y, m.z), l.push(0, 0, 1), _.x = (m.x / n + 1) / 2, _.y = (m.y / n + 1) / 2, u.push(_.x, _.y);
      }
      d += h;
    }
    for (let v = 0; v < r; v++) {
      const p = v * (i + 1);
      for (let f = 0; f < i; f++) {
        const b = f + p, y = b, g = b + i + 1, E = b + i + 2, w = b + 1;
        o.push(y, g, w), o.push(g, E, w);
      }
    }
    this.setIndex(o), this.setAttribute("position", new it(c, 3)), this.setAttribute("normal", new it(l, 3)), this.setAttribute("uv", new it(u, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ko(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}, Ns = class Jo extends It {
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
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const u = [], d = new D(), h = new D(), m = [], _ = [], v = [], p = [];
    for (let f = 0; f <= i; f++) {
      const b = [], y = f / i, g = a + y * o, E = t * Math.cos(g), w = Math.sqrt(t * t - E * E);
      let C = 0;
      f === 0 && a === 0 ? C = 0.5 / n : f === i && c === Math.PI && (C = -0.5 / n);
      for (let M = 0; M <= n; M++) {
        const T = M / n, z = r + T * s;
        d.x = -w * Math.cos(z), d.y = E, d.z = w * Math.sin(z), _.push(d.x, d.y, d.z), h.copy(d).normalize(), v.push(h.x, h.y, h.z), p.push(T + C, 1 - y), b.push(l++);
      }
      u.push(b);
    }
    for (let f = 0; f < i; f++) for (let b = 0; b < n; b++) {
      const y = u[f][b + 1], g = u[f][b], E = u[f + 1][b], w = u[f + 1][b + 1];
      (f !== 0 || a > 0) && m.push(y, g, w), (f !== i - 1 || c < Math.PI) && m.push(g, E, w);
    }
    this.setIndex(m), this.setAttribute("position", new it(_, 3)), this.setAttribute("normal", new it(v, 3)), this.setAttribute("uv", new it(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Jo(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}, Zo = class $o extends It {
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
    const c = [], l = [], u = [], d = [], h = new D(), m = new D(), _ = new D();
    for (let v = 0; v <= i; v++) {
      const p = a + v / i * o;
      for (let f = 0; f <= r; f++) {
        const b = f / r * s;
        m.x = (t + n * Math.cos(p)) * Math.cos(b), m.y = (t + n * Math.cos(p)) * Math.sin(b), m.z = n * Math.sin(p), l.push(m.x, m.y, m.z), h.x = t * Math.cos(b), h.y = t * Math.sin(b), _.subVectors(m, h).normalize(), u.push(_.x, _.y, _.z), d.push(f / r), d.push(v / i);
      }
    }
    for (let v = 1; v <= i; v++) for (let p = 1; p <= r; p++) {
      const f = (r + 1) * v + p - 1, b = (r + 1) * (v - 1) + p - 1, y = (r + 1) * (v - 1) + p, g = (r + 1) * v + p;
      c.push(f, b, g), c.push(b, y, g);
    }
    this.setIndex(c), this.setAttribute("position", new it(l, 3)), this.setAttribute("normal", new it(u, 3)), this.setAttribute("uv", new it(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new $o(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
  }
}, wh = class Qo extends It {
  constructor(t = 1, n = 0.4, i = 64, r = 8, s = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: n,
      tubularSegments: i,
      radialSegments: r,
      p: s,
      q: a
    }, i = Math.floor(i), r = Math.floor(r);
    const o = [], c = [], l = [], u = [], d = new D(), h = new D(), m = new D(), _ = new D(), v = new D(), p = new D(), f = new D();
    for (let y = 0; y <= i; ++y) {
      const g = y / i * s * Math.PI * 2;
      b(g, s, a, t, m), b(g + 0.01, s, a, t, _), p.subVectors(_, m), f.addVectors(_, m), v.crossVectors(p, f), f.crossVectors(v, p), v.normalize(), f.normalize();
      for (let E = 0; E <= r; ++E) {
        const w = E / r * Math.PI * 2, C = -n * Math.cos(w), M = n * Math.sin(w);
        d.x = m.x + (C * f.x + M * v.x), d.y = m.y + (C * f.y + M * v.y), d.z = m.z + (C * f.z + M * v.z), c.push(d.x, d.y, d.z), h.subVectors(d, m).normalize(), l.push(h.x, h.y, h.z), u.push(y / i), u.push(E / r);
      }
    }
    for (let y = 1; y <= i; y++) for (let g = 1; g <= r; g++) {
      const E = (r + 1) * (y - 1) + (g - 1), w = (r + 1) * y + (g - 1), C = (r + 1) * y + g, M = (r + 1) * (y - 1) + g;
      o.push(E, w, M), o.push(w, C, M);
    }
    this.setIndex(o), this.setAttribute("position", new it(c, 3)), this.setAttribute("normal", new it(l, 3)), this.setAttribute("uv", new it(u, 2));
    function b(y, g, E, w, C) {
      const M = Math.cos(y), T = Math.sin(y), z = E / g * y, L = Math.cos(z);
      C.x = w * (2 + L) * 0.5 * M, C.y = w * (2 + L) * T * 0.5, C.z = w * Math.sin(z) * 0.5;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Qo(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
  }
}, jo = class el extends It {
  constructor(t = new Fo(new D(-1, -1, 0), new D(-1, 1, 0), new D(1, 1, 0)), n = 64, i = 1, r = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: n,
      radius: i,
      radialSegments: r,
      closed: s
    };
    const a = t.computeFrenetFrames(n, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new D(), c = new D(), l = new de();
    let u = new D();
    const d = [], h = [], m = [], _ = [];
    v(), this.setIndex(_), this.setAttribute("position", new it(d, 3)), this.setAttribute("normal", new it(h, 3)), this.setAttribute("uv", new it(m, 2));
    function v() {
      for (let y = 0; y < n; y++) p(y);
      p(s === !1 ? n : 0), b(), f();
    }
    function p(y) {
      u = t.getPointAt(y / n, u);
      const g = a.normals[y], E = a.binormals[y];
      for (let w = 0; w <= r; w++) {
        const C = w / r * Math.PI * 2, M = Math.sin(C), T = -Math.cos(C);
        c.x = T * g.x + M * E.x, c.y = T * g.y + M * E.y, c.z = T * g.z + M * E.z, c.normalize(), h.push(c.x, c.y, c.z), o.x = u.x + i * c.x, o.y = u.y + i * c.y, o.z = u.z + i * c.z, d.push(o.x, o.y, o.z);
      }
    }
    function f() {
      for (let y = 1; y <= n; y++) for (let g = 1; g <= r; g++) {
        const E = (r + 1) * (y - 1) + (g - 1), w = (r + 1) * y + (g - 1), C = (r + 1) * y + g, M = (r + 1) * (y - 1) + g;
        _.push(E, w, M), _.push(w, C, M);
      }
    }
    function b() {
      for (let y = 0; y <= n; y++) for (let g = 0; g <= r; g++)
        l.x = y / n, l.y = g / r, m.push(l.x, l.y);
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
    return new el(new Cr[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
  }
}, Rh = class extends Gn {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Xe(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
};
function gi(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      if (Aa(r)) r.isRenderTargetTexture ? (Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][i] = null) : t[n][i] = r.clone();
      else if (Array.isArray(r)) if (Aa(r[0])) {
        const s = [];
        for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
        t[n][i] = s;
      } else t[n][i] = r.slice();
      else t[n][i] = r;
    }
  }
  return t;
}
function wt(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = gi(e[n]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function Aa(e) {
  return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Ch(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function tl(e) {
  const t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : $e.workingColorSpace;
}
var Ph = {
  clone: gi,
  merge: wt
}, Lh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ih = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, en = class extends Gn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Lh, this.fragmentShader = Ih, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = gi(e.uniforms), this.uniformsGroups = Ch(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
          this.uniforms[n].value = new D().fromArray(i.value);
          break;
        case "v4":
          this.uniforms[n].value = new vt().fromArray(i.value);
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
}, Nh = class extends en {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}, gt = class extends Gn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Xe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Dn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, Ln = class extends gt {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new de(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ye(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
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
}, Uh = class extends Gn {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new de(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Dn(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, Dh = class extends Gn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = gc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, Oh = class extends Gn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
function ti(e, t) {
  return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function ls(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Wi = class {
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
}, Fh = class extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: $s,
      endingEnd: $s
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, a = i[r], o = i[s];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Qs:
        r = e, a = 2 * t - n;
        break;
      case js:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (o === void 0) switch (this.getSettings_().endingEnd) {
      case Qs:
        s = e, o = 2 * n - t;
        break;
      case js:
        s = 1, o = n + i[1] - i[0];
        break;
      default:
        s = e - 1, o = t;
    }
    const c = (n - t) * 0.5, l = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (o - n), this._offsetPrev = r * l, this._offsetNext = s * l;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, c = o - a, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, h = this._weightNext, m = (n - t) / (i - t), _ = m * m, v = _ * m, p = -d * v + 2 * d * _ - d * m, f = (1 + d) * v + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, b = (-1 - h) * v + (1.5 + h) * _ + 0.5 * m, y = h * v - h * _;
    for (let g = 0; g !== a; ++g) r[g] = p * s[l + g] + f * s[c + g] + b * s[o + g] + y * s[u + g];
    return r;
  }
}, Bh = class extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, c = o - a, l = (n - t) / (i - t), u = 1 - l;
    for (let d = 0; d !== a; ++d) r[d] = s[c + d] * u + s[o + d] * l;
    return r;
  }
}, zh = class extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}, Vh = class extends Wi {
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, c = o - a, l = this.inTangents, u = this.outTangents;
    if (!l || !u) {
      const m = (n - t) / (i - t), _ = 1 - m;
      for (let v = 0; v !== a; ++v) r[v] = s[c + v] * _ + s[o + v] * m;
      return r;
    }
    const d = a * 2, h = e - 1;
    for (let m = 0; m !== a; ++m) {
      const _ = s[c + m], v = s[o + m], p = h * d + m * 2, f = u[p], b = u[p + 1], y = e * d + m * 2, g = l[y], E = l[y + 1];
      r[m] = nl(Hh(n, t, f, g, i), _, b, E, v);
    }
    return r;
  }
};
function nl(e, t, n, i, r) {
  const s = 1 - e;
  return s * s * s * t + 3 * s * s * e * n + 3 * s * e * e * i + e * e * e * r;
}
function Gh(e, t, n, i, r) {
  const s = 1 - e;
  return 3 * s * s * (n - t) + 6 * s * e * (i - n) + 3 * e * e * (r - i);
}
function Hh(e, t, n, i, r) {
  let s = (e - t) / (r - t);
  for (let a = 0; a < 8; a++) {
    const o = nl(s, t, n, i, r) - e;
    if (Math.abs(o) < 1e-10) break;
    const c = Gh(s, t, n, i, r);
    if (Math.abs(c) < 1e-10) break;
    s = Math.max(0, Math.min(1, s - o / c));
  }
  return s;
}
var nn = class {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ti(t, this.TimeBufferType), this.values = ti(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ti(e.times, Array),
        values: ti(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i), ls(e.settings) && (n.settings = {
        inTangents: ti(e.settings.inTangents, Array),
        outTangents: ti(e.settings.outTangents, Array)
      });
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new zh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Bh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Fh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new Vh(this.times, this.values, this.getValueSize(), e);
    return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case br:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ms:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Dr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case Zs:
        t = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return Fe("KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return br;
      case this.InterpolantFactoryMethodLinear:
        return Ms;
      case this.InterpolantFactoryMethodSmooth:
        return Dr;
      case this.InterpolantFactoryMethodBezier:
        return Zs;
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
      ls(this.settings) && (wa(this.settings.inTangents, e), wa(this.settings.outTangents, e));
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
    if (i !== void 0 && Mc(i))
      for (let a = 0, o = i.length; a !== o; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          Be("KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Dr, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let o = !1;
      const c = e[a];
      if (c !== e[a + 1] && (a !== 1 || c !== e[0])) if (i)
        o = !0;
      else {
        const l = a * n, u = l - n, d = l + n;
        for (let h = 0; h !== n; ++h) {
          const m = t[l + h];
          if (m !== t[u + h] || m !== t[d + h]) {
            o = !0;
            break;
          }
        }
      }
      if (o) {
        if (a !== s) {
          e[s] = e[a];
          const l = a * n, u = s * n;
          for (let d = 0; d !== n; ++d) t[u + d] = t[l + d];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let a = r * n, o = s * n, c = 0; c !== n; ++c) t[o + c] = t[a + c];
      ++s;
    }
    return s !== e.length ? (this.times = e.slice(0, s), this.values = t.slice(0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, ls(this.settings) && (i.settings = {
      inTangents: this.settings.inTangents.slice(),
      outTangents: this.settings.outTangents.slice()
    }), i;
  }
};
function wa(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] *= t;
}
nn.prototype.ValueTypeName = "";
nn.prototype.TimeBufferType = Float32Array;
nn.prototype.ValueBufferType = Float32Array;
nn.prototype.DefaultInterpolation = Ms;
var Xi = class extends nn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Xi.prototype.ValueTypeName = "bool";
Xi.prototype.ValueBufferType = Array;
Xi.prototype.DefaultInterpolation = br;
Xi.prototype.InterpolantFactoryMethodLinear = void 0;
Xi.prototype.InterpolantFactoryMethodSmooth = void 0;
var kh = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
kh.prototype.ValueTypeName = "color";
var Wh = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Wh.prototype.ValueTypeName = "number";
var Xh = class extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - t) / (i - t);
    let c = e * a;
    for (let l = c + a; c !== l; c += 4) zn.slerpFlat(r, 0, s, c - a, s, c, o);
    return r;
  }
}, il = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Xh(this.times, this.values, this.getValueSize(), e);
  }
};
il.prototype.ValueTypeName = "quaternion";
il.prototype.InterpolantFactoryMethodSmooth = void 0;
var qi = class extends nn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
qi.prototype.ValueTypeName = "string";
qi.prototype.ValueBufferType = Array;
qi.prototype.DefaultInterpolation = br;
qi.prototype.InterpolantFactoryMethodLinear = void 0;
qi.prototype.InterpolantFactoryMethodSmooth = void 0;
var qh = class extends nn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
qh.prototype.ValueTypeName = "vector";
var Yh = class {
  constructor(e, t, n) {
    const i = this;
    let r = !1, s = 0, a = 0, o;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(l) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(l, s, a), r = !0;
    }, this.itemEnd = function(l) {
      s++, i.onProgress !== void 0 && i.onProgress(l, s, a), s === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(l) {
      i.onError !== void 0 && i.onError(l);
    }, this.resolveURL = function(l) {
      return l = l.normalize("NFC"), o ? o(l) : l;
    }, this.setURLModifier = function(l) {
      return o = l, this;
    }, this.addHandler = function(l, u) {
      return c.push(l, u), this;
    }, this.removeHandler = function(l) {
      const u = c.indexOf(l);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(l) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const h = c[u], m = c[u + 1];
        if (h.global && (h.lastIndex = 0), h.test(l)) return m;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, Kh = /* @__PURE__ */ new Yh(), Jh = class {
  constructor(e) {
    this.manager = e !== void 0 ? e : Kh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
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
Jh.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Us = class extends Lt {
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
}, Zh = class extends Us {
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
}, cs = /* @__PURE__ */ new ht(), Ra = /* @__PURE__ */ new D(), Ca = /* @__PURE__ */ new D(), rl = class {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new de(512, 512), this.mapType = yn, this.map = null, this.mapPass = null, this.matrix = new ht(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ps(), this._frameExtents = new de(1, 1), this._viewportCount = 1, this._viewports = [new vt(0, 0, 1, 1)];
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
    Ra.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ra), Ca.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ca), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, n, i) {
    cs.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(cs, e.coordinateSystem, e.reversedDepth);
    const r = this._frameExtents, s = i ? i.z / r.x : 1, a = i ? i.w / r.y : 1, o = i ? i.x / r.x : 0, c = i ? i.y / r.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth ? t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + c, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(cs);
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
}, gr = /* @__PURE__ */ new D(), vr = /* @__PURE__ */ new zn(), Zt = /* @__PURE__ */ new D(), sl = class extends Lt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ht(), this.projectionMatrix = new ht(), this.projectionMatrixInverse = new ht(), this.coordinateSystem = di, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(gr, vr, Zt), Zt.x === 1 && Zt.y === 1 && Zt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(gr, vr, Zt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(gr, vr, Zt), Zt.x === 1 && Zt.y === 1 && Zt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(gr, vr, Zt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Sn = /* @__PURE__ */ new D(), Pa = /* @__PURE__ */ new de(), La = /* @__PURE__ */ new de(), Vt = class extends sl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = xs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Fr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return xs * 2 * Math.atan(Math.tan(Fr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Sn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Sn.x, Sn.y).multiplyScalar(-e / Sn.z), Sn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Sn.x, Sn.y).multiplyScalar(-e / Sn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Pa, La), t.subVectors(La, Pa);
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
    let t = e * Math.tan(Fr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const o = s.fullWidth, c = s.fullHeight;
      r += s.offsetX * i / o, t -= s.offsetY * n / c, i *= s.width / o, n *= s.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}, $h = class extends rl {
  constructor() {
    super(new Vt(90, 1, 0.5, 500)), this.isPointLightShadow = !0;
  }
}, Qh = class extends Us {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new $h();
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
}, Pr = class extends sl {
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
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, s = r + c * this.view.width, a -= l * this.view.offsetY, o = a - l * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}, jh = class extends rl {
  constructor() {
    super(new Pr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}, hs = class extends Us {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Lt.DEFAULT_UP), this.updateMatrix(), this.target = new Lt(), this.shadow = new jh();
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
}, ni = -90, ii = 1, eu = class extends Lt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Vt(ni, ii, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Vt(ni, ii, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Vt(ni, ii, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Vt(ni, ii, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Vt(ni, ii, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Vt(ni, ii, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, s, a, o] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, s, a, o, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), h = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let v = !1;
    e.isWebGLRenderer === !0 ? v = e.state.buffers.depth.getReversed() : v = e.reversedDepthBuffer, e.setRenderTarget(n, 0, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, r), e.setRenderTarget(n, 1, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 3, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 4, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), v && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, h), e.xr.enabled = m, n.texture.needsPMREMUpdate = !0;
  }
}, tu = class extends Vt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}, Ds = "\\[\\]\\.:\\/", nu = new RegExp("[" + Ds + "]", "g"), Os = "[^" + Ds + "]", iu = "[^" + Ds.replace("\\.", "") + "]", ru = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Os), su = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", iu), au = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Os), ou = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Os), lu = new RegExp("^" + ru + su + au + ou + "$"), cu = [
  "material",
  "materials",
  "bones",
  "map"
], hu = class {
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
}, dt = class oi {
  constructor(t, n, i) {
    this.path = n, this.parsedPath = i || oi.parseTrackName(n), this.node = oi.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, n, i) {
    return t && t.isAnimationObjectGroup ? new oi.Composite(t, n, i) : new oi(t, n, i);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(nu, "");
  }
  static parseTrackName(t) {
    const n = lu.exec(t);
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
      cu.indexOf(s) !== -1 && (i.nodeName = i.nodeName.substring(0, r), i.objectName = s);
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
          const c = i(o.children);
          if (c) return c;
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
    if (t || (t = oi.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      Fe("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let l = n.objectIndex;
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
          for (let u = 0; u < t.length; u++) if (t[u].name === l) {
            l = u;
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
      if (l !== void 0) {
        if (t[l] === void 0) {
          Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[l];
      }
    }
    const a = t[r];
    if (a === void 0) {
      const l = n.nodeName;
      Be("PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
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
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
dt.Composite = hu;
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
var Bd = class al {
  static {
    al.prototype.isMatrix2 = !0;
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
function Ia(e, t, n, i) {
  const r = uu(i);
  switch (n) {
    case Il:
      return e * t;
    case lo:
      return e * t / r.components * r.byteLength;
    case co:
      return e * t / r.components * r.byteLength;
    case Tr:
      return e * t * 2 / r.components * r.byteLength;
    case ho:
      return e * t * 2 / r.components * r.byteLength;
    case Nl:
      return e * t * 3 / r.components * r.byteLength;
    case Di:
      return e * t * 4 / r.components * r.byteLength;
    case uo:
      return e * t * 4 / r.components * r.byteLength;
    case Ul:
    case Dl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ol:
    case Fl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case zl:
    case Gl:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case Bl:
    case Vl:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case Hl:
    case kl:
    case Xl:
    case ql:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Wl:
    case Yl:
    case Kl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Jl:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Zl:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case $l:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Ql:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case jl:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ec:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case tc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case nc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case ic:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case rc:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case sc:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ac:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case oc:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case lc:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case cc:
    case hc:
    case uc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case fc:
    case dc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case pc:
    case mc:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function uu(e) {
  switch (e) {
    case yn:
    case wl:
      return {
        byteLength: 1,
        components: 1
      };
    case io:
    case Rl:
    case En:
      return {
        byteLength: 2,
        components: 1
      };
    case ro:
    case so:
      return {
        byteLength: 2,
        components: 4
      };
    case Un:
    case Cl:
    case Gi:
      return {
        byteLength: 4,
        components: 1
      };
    case Pl:
    case Ll:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } }));
typeof window < "u" && (window.__THREE__ ? Fe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
function ol() {
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
function fu(e) {
  const t = /* @__PURE__ */ new WeakMap();
  function n(o, c) {
    const l = o.array, u = o.usage, d = l.byteLength, h = e.createBuffer();
    e.bindBuffer(c, h), e.bufferData(c, l, u), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array) m = e.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) m = e.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? m = e.HALF_FLOAT : m = e.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) m = e.SHORT;
    else if (l instanceof Uint32Array) m = e.UNSIGNED_INT;
    else if (l instanceof Int32Array) m = e.INT;
    else if (l instanceof Int8Array) m = e.BYTE;
    else if (l instanceof Uint8Array) m = e.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) m = e.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: h,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function i(o, c, l) {
    const u = c.array, d = c.updateRanges;
    if (e.bindBuffer(l, o), d.length === 0) e.bufferSubData(l, 0, u);
    else {
      d.sort((m, _) => m.start - _.start);
      let h = 0;
      for (let m = 1; m < d.length; m++) {
        const _ = d[h], v = d[m];
        v.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, v.start + v.count - _.start) : (++h, d[h] = v);
      }
      d.length = h + 1;
      for (let m = 0, _ = d.length; m < _; m++) {
        const v = d[m];
        e.bufferSubData(l, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (e.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
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
    const l = t.get(o);
    if (l === void 0) t.set(o, n(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(l.buffer, o, c), l.version = o.version;
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
    probesMin: { value: /* @__PURE__ */ new D() },
    probesMax: { value: /* @__PURE__ */ new D() },
    probesResolution: { value: /* @__PURE__ */ new D() }
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([pe.points, pe.fog]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([pe.common, pe.displacementmap]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ wt([
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
    uniforms: /* @__PURE__ */ wt([pe.sprite, pe.fog]),
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
    uniforms: /* @__PURE__ */ wt([
      pe.common,
      pe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distance_vert,
    fragmentShader: We.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ wt([
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
  uniforms: /* @__PURE__ */ wt([Qt.standard.uniforms, {
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
var _r = {
  r: 0,
  b: 0,
  g: 0
}, du = /* @__PURE__ */ new ht(), ll = /* @__PURE__ */ new ke();
ll.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function pu(e, t, n, i, r, s) {
  const a = new Xe(0);
  let o = r === !0 ? 0 : 1, c, l, u = null, d = 0, h = null;
  function m(b) {
    let y = b.isScene === !0 ? b.background : null;
    if (y && y.isTexture) {
      const g = b.backgroundBlurriness > 0;
      y = t.get(y, g);
    }
    return y;
  }
  function _(b) {
    let y = !1;
    const g = m(b);
    g === null ? p(a, o) : g && g.isColor && (p(g, 1), y = !0);
    const E = e.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || y) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function v(b, y) {
    const g = m(y);
    g && (g.isCubeTexture || g.mapping === 306) ? (l === void 0 && (l = new ut(new ki(1, 1, 1), new en({
      name: "BackgroundCubeMaterial",
      uniforms: gi(Qt.backgroundCube.uniforms),
      vertexShader: Qt.backgroundCube.vertexShader,
      fragmentShader: Qt.backgroundCube.fragmentShader,
      side: 1,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(E, w, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(l)), l.material.uniforms.envMap.value = g, l.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(du.makeRotationFromEuler(y.backgroundRotation)).transpose(), g.isCubeTexture && g.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(ll), l.material.toneMapped = $e.getTransfer(g.colorSpace) !== wr, (u !== g || d !== g.version || h !== e.toneMapping) && (l.material.needsUpdate = !0, u = g, d = g.version, h = e.toneMapping), l.layers.enableAll(), b.unshift(l, l.geometry, l.material, 0, 0, null)) : g && g.isTexture && (c === void 0 && (c = new ut(new Fn(2, 2), new en({
      name: "BackgroundMaterial",
      uniforms: gi(Qt.background.uniforms),
      vertexShader: Qt.background.vertexShader,
      fragmentShader: Qt.background.fragmentShader,
      side: 0,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = g, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = $e.getTransfer(g.colorSpace) !== wr, g.matrixAutoUpdate === !0 && g.updateMatrix(), c.material.uniforms.uvTransform.value.copy(g.matrix), (u !== g || d !== g.version || h !== e.toneMapping) && (c.material.needsUpdate = !0, u = g, d = g.version, h = e.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(b, y) {
    b.getRGB(_r, tl(e)), n.buffers.color.setClear(_r.r, _r.g, _r.b, y, s);
  }
  function f() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(b, y = 1) {
      a.set(b), o = y, p(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(b) {
      o = b, p(a, o);
    },
    render: _,
    addToRenderList: v,
    dispose: f
  };
}
function mu(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS), i = {}, r = h(null);
  let s = r, a = !1;
  function o(L, I, q, P, R) {
    let G = !1;
    const U = d(L, P, q, I);
    s !== U && (s = U, l(s.object)), G = m(L, P, q, R), G && _(L, P, q, R), R !== null && t.update(R, e.ELEMENT_ARRAY_BUFFER), (G || a) && (a = !1, g(L, I, q, P), R !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(R).buffer));
  }
  function c() {
    return e.createVertexArray();
  }
  function l(L) {
    return e.bindVertexArray(L);
  }
  function u(L) {
    return e.deleteVertexArray(L);
  }
  function d(L, I, q, P) {
    const R = P.wireframe === !0;
    let G = i[I.id];
    G === void 0 && (G = {}, i[I.id] = G);
    const U = L.isInstancedMesh === !0 ? L.id : 0;
    let Q = G[U];
    Q === void 0 && (Q = {}, G[U] = Q);
    let W = Q[q.id];
    W === void 0 && (W = {}, Q[q.id] = W);
    let Y = W[R];
    return Y === void 0 && (Y = h(c()), W[R] = Y), Y;
  }
  function h(L) {
    const I = [], q = [], P = [];
    for (let R = 0; R < n; R++)
      I[R] = 0, q[R] = 0, P[R] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: q,
      attributeDivisors: P,
      object: L,
      attributes: {},
      index: null
    };
  }
  function m(L, I, q, P) {
    const R = s.attributes, G = I.attributes;
    let U = 0;
    const Q = q.getAttributes();
    for (const W in Q) if (Q[W].location >= 0) {
      const Y = R[W];
      let Z = G[W];
      if (Z === void 0 && (W === "instanceMatrix" && L.instanceMatrix && (Z = L.instanceMatrix), W === "instanceColor" && L.instanceColor && (Z = L.instanceColor)), Y === void 0 || Y.attribute !== Z || Z && Y.data !== Z.data) return !0;
      U++;
    }
    return s.attributesNum !== U || s.index !== P;
  }
  function _(L, I, q, P) {
    const R = {}, G = I.attributes;
    let U = 0;
    const Q = q.getAttributes();
    for (const W in Q) if (Q[W].location >= 0) {
      let Y = G[W];
      Y === void 0 && (W === "instanceMatrix" && L.instanceMatrix && (Y = L.instanceMatrix), W === "instanceColor" && L.instanceColor && (Y = L.instanceColor));
      const Z = {};
      Z.attribute = Y, Y && Y.data && (Z.data = Y.data), R[W] = Z, U++;
    }
    s.attributes = R, s.attributesNum = U, s.index = P;
  }
  function v() {
    const L = s.newAttributes;
    for (let I = 0, q = L.length; I < q; I++) L[I] = 0;
  }
  function p(L) {
    f(L, 0);
  }
  function f(L, I) {
    const q = s.newAttributes, P = s.enabledAttributes, R = s.attributeDivisors;
    q[L] = 1, P[L] === 0 && (e.enableVertexAttribArray(L), P[L] = 1), R[L] !== I && (e.vertexAttribDivisor(L, I), R[L] = I);
  }
  function b() {
    const L = s.newAttributes, I = s.enabledAttributes;
    for (let q = 0, P = I.length; q < P; q++) I[q] !== L[q] && (e.disableVertexAttribArray(q), I[q] = 0);
  }
  function y(L, I, q, P, R, G, U) {
    U === !0 ? e.vertexAttribIPointer(L, I, q, R, G) : e.vertexAttribPointer(L, I, q, P, R, G);
  }
  function g(L, I, q, P) {
    v();
    const R = P.attributes, G = q.getAttributes(), U = I.defaultAttributeValues;
    for (const Q in G) {
      const W = G[Q];
      if (W.location >= 0) {
        let Y = R[Q];
        if (Y === void 0 && (Q === "instanceMatrix" && L.instanceMatrix && (Y = L.instanceMatrix), Q === "instanceColor" && L.instanceColor && (Y = L.instanceColor)), Y !== void 0) {
          const Z = Y.normalized, Le = Y.itemSize, we = t.get(Y);
          if (we === void 0) continue;
          const rt = we.buffer, Ge = we.type, J = we.bytesPerElement, re = Ge === e.INT || Ge === e.UNSIGNED_INT || Y.gpuType === 1013;
          if (Y.isInterleavedBufferAttribute) {
            const ae = Y.data, Ce = ae.stride, Ue = Y.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let ue = 0; ue < W.locationSize; ue++) f(W.location + ue, ae.meshPerAttribute);
              L.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let ue = 0; ue < W.locationSize; ue++) p(W.location + ue);
            e.bindBuffer(e.ARRAY_BUFFER, rt);
            for (let ue = 0; ue < W.locationSize; ue++) y(W.location + ue, Le / W.locationSize, Ge, Z, Ce * J, (Ue + Le / W.locationSize * ue) * J, re);
          } else {
            if (Y.isInstancedBufferAttribute) {
              for (let ae = 0; ae < W.locationSize; ae++) f(W.location + ae, Y.meshPerAttribute);
              L.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = Y.meshPerAttribute * Y.count);
            } else for (let ae = 0; ae < W.locationSize; ae++) p(W.location + ae);
            e.bindBuffer(e.ARRAY_BUFFER, rt);
            for (let ae = 0; ae < W.locationSize; ae++) y(W.location + ae, Le / W.locationSize, Ge, Z, Le * J, Le / W.locationSize * ae * J, re);
          }
        } else if (U !== void 0) {
          const Z = U[Q];
          if (Z !== void 0) switch (Z.length) {
            case 2:
              e.vertexAttrib2fv(W.location, Z);
              break;
            case 3:
              e.vertexAttrib3fv(W.location, Z);
              break;
            case 4:
              e.vertexAttrib4fv(W.location, Z);
              break;
            default:
              e.vertexAttrib1fv(W.location, Z);
          }
        }
      }
    }
    b();
  }
  function E() {
    T();
    for (const L in i) {
      const I = i[L];
      for (const q in I) {
        const P = I[q];
        for (const R in P) {
          const G = P[R];
          for (const U in G)
            u(G[U].object), delete G[U];
          delete P[R];
        }
      }
      delete i[L];
    }
  }
  function w(L) {
    if (i[L.id] === void 0) return;
    const I = i[L.id];
    for (const q in I) {
      const P = I[q];
      for (const R in P) {
        const G = P[R];
        for (const U in G)
          u(G[U].object), delete G[U];
        delete P[R];
      }
    }
    delete i[L.id];
  }
  function C(L) {
    for (const I in i) {
      const q = i[I];
      for (const P in q) {
        const R = q[P];
        if (R[L.id] === void 0) continue;
        const G = R[L.id];
        for (const U in G)
          u(G[U].object), delete G[U];
        delete R[L.id];
      }
    }
  }
  function M(L) {
    for (const I in i) {
      const q = i[I], P = L.isInstancedMesh === !0 ? L.id : 0, R = q[P];
      if (R !== void 0) {
        for (const G in R) {
          const U = R[G];
          for (const Q in U)
            u(U[Q].object), delete U[Q];
          delete R[G];
        }
        delete q[P], Object.keys(q).length === 0 && delete i[I];
      }
    }
  }
  function T() {
    z(), a = !0, s !== r && (s = r, l(s.object));
  }
  function z() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: T,
    resetDefaultState: z,
    dispose: E,
    releaseStatesOfGeometry: w,
    releaseStatesOfObject: M,
    releaseStatesOfProgram: C,
    initAttributes: v,
    enableAttribute: p,
    disableUnusedAttributes: b
  };
}
function gu(e, t, n) {
  let i;
  function r(c) {
    i = c;
  }
  function s(c, l) {
    e.drawArrays(i, c, l), n.update(l, i, 1);
  }
  function a(c, l, u) {
    u !== 0 && (e.drawArraysInstanced(i, c, l, u), n.update(l, i, u));
  }
  function o(c, l, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, l, 0, u);
    let d = 0;
    for (let h = 0; h < u; h++) d += l[h];
    n.update(d, i, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function vu(e, t, n, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const C = t.get("EXT_texture_filter_anisotropic");
      r = e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(C) {
    return !(C !== 1023 && i.convert(C) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const M = C === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== 1009 && C !== 1015 && !M && i.convert(C) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function c(C) {
    if (C === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = n.precision !== void 0 ? n.precision : "highp";
  const u = c(l);
  u !== l && (Fe("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const d = n.logarithmicDepthBuffer === !0, h = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
  n.reversedDepthBuffer === !0 && h === !1 && Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const m = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = e.getParameter(e.MAX_TEXTURE_SIZE), p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), f = e.getParameter(e.MAX_VERTEX_ATTRIBS), b = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), g = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), E = e.getParameter(e.MAX_SAMPLES), w = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: h,
    maxTextures: m,
    maxVertexTextures: _,
    maxTextureSize: v,
    maxCubemapSize: p,
    maxAttributes: f,
    maxVertexUniforms: b,
    maxVaryings: y,
    maxFragmentUniforms: g,
    maxSamples: E,
    samples: w
  };
}
function _u(e) {
  const t = this;
  let n = null, i = 0, r = !1, s = !1;
  const a = new xn(), o = new ke(), c = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, h) {
    const m = d.length !== 0 || h || i !== 0 || r;
    return r = h, i = d.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, h) {
    n = u(d, h, 0);
  }, this.setState = function(d, h, m) {
    const _ = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, f = e.get(d);
    if (!r || _ === null || _.length === 0 || s && !p) s ? u(null) : l();
    else {
      const b = s ? 0 : i, y = b * 4;
      let g = f.clippingState || null;
      c.value = g, g = u(_, h, y, m);
      for (let E = 0; E !== y; ++E) g[E] = n[E];
      f.clippingState = g, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function l() {
    c.value !== n && (c.value = n, c.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function u(d, h, m, _) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = c.value, _ !== !0 || p === null) {
        const f = m + v * 4, b = h.matrixWorldInverse;
        o.getNormalMatrix(b), (p === null || p.length < f) && (p = new Float32Array(f));
        for (let y = 0, g = m; y !== v; ++y, g += 4)
          a.copy(d[y]).applyMatrix4(b, o), a.normal.toArray(p, g), p[g + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return t.numPlanes = v, t.numIntersection = 0, p;
  }
}
var ci = 4, Mu = 6, Su = 20, xu = 256, Ri = /* @__PURE__ */ new Pr(), Na = /* @__PURE__ */ new Xe(), us = null, fs = 0, ds = 0, ps = !1, yu = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new D(), bs = class {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: s = 256, position: a = yu } = r;
    us = this._renderer.getRenderTarget(), fs = this._renderer.getActiveCubeFace(), ds = this._renderer.getActiveMipmapLevel(), ps = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Oa(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Da(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(us, fs, ds), this._renderer.xr.enabled = ps, e.scissorTest = !1, ri(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), us = this._renderer.getRenderTarget(), fs = this._renderer.getActiveCubeFace(), ds = this._renderer.getActiveMipmapLevel(), ps = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ot,
      minFilter: Ot,
      generateMipmaps: !1,
      type: En,
      format: Di,
      colorSpace: Ss,
      depthBuffer: !1
    }, i = Ua(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ua(e, t, n);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = Eu(r)), this._blurMaterial = bu(r, e, t), this._ggxMaterial = Tu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ut(new It(), e);
    this._renderer.compile(t, Ri);
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
    ], c = this._renderer, l = c.autoClear, u = c.toneMapping;
    c.getClearColor(Na), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(i), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new ut(new ki(), new Nn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    })));
    const d = this._backgroundBox, h = d.material;
    let m = !1;
    const _ = e.background;
    _ ? _.isColor && (h.color.copy(_), e.background = null, m = !0) : (h.color.copy(Na), m = !0);
    for (let v = 0; v < 6; v++) {
      const p = v % 3;
      p === 0 ? (s.up.set(0, a[v], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x + o[v], r.y, r.z)) : p === 1 ? (s.up.set(0, 0, a[v]), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y + o[v], r.z)) : (s.up.set(0, a[v], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y, r.z + o[v]));
      const f = this._cubeSize;
      ri(i, p * f, v > 2 ? f : 0, f, f), c.setRenderTarget(i), m && c.render(d, s), c.render(e, s);
    }
    c.toneMapping = u, c.autoClear = l, e.background = _;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Oa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Da());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, s = this._lodMeshes[0];
    s.material = r;
    const a = r.uniforms;
    a.envMap.value = e;
    const o = this._cubeSize;
    ri(t, 0, 0, 3 * o, 2 * o), n.setRenderTarget(t), n.render(s, Ri);
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
    const o = s.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (c * 1.25), { _lodMax: d } = this, h = this._sizeLods[n], m = 3 * h * (n > d - ci ? n - d + ci : 0), _ = 4 * (this._cubeSize - h);
    o.envMap.value = e.texture, o.roughness.value = u, o.mipInt.value = d - t, ri(r, m, _, 3 * h, 2 * h), i.setRenderTarget(r), i.render(a, Ri), o.envMap.value = r.texture, o.roughness.value = 0, o.mipInt.value = d - n, ri(e, m, _, 3 * h, 2 * h), i.setRenderTarget(e), i.render(a, Ri);
  }
  _blur(e, t, n, i) {
    const r = this._pingPongRenderTarget, s = Math.min(i, Math.PI) / Math.SQRT2;
    this._blurPass(e, r, t, n, s), this._blurPass(r, e, n, n, s);
  }
  _blurPass(e, t, n, i, r) {
    const s = this._renderer, a = this._blurMaterial, o = this._lodMeshes[i];
    o.material = a;
    const c = a.uniforms;
    c.envMap.value = e.texture, c.sigma.value = r, c.mipInt.value = this._lodMax - n;
    const l = this._sizeLods[i];
    ri(t, 3 * l * (i > this._lodMax - ci ? i - this._lodMax + ci : 0), 4 * (this._cubeSize - l), 3 * l, 2 * l), s.setRenderTarget(t), s.render(o, Ri);
  }
};
function Eu(e) {
  const t = [], n = [];
  let i = e;
  const r = e - ci + 1 + Mu;
  for (let s = 0; s < r; s++) {
    const a = Math.pow(2, i);
    t.push(a);
    const o = 1 / (a - 2), c = -o, l = 1 + o, u = [
      c,
      c,
      l,
      c,
      l,
      l,
      c,
      c,
      l,
      l,
      c,
      l
    ], d = 6, h = 6, m = 3, _ = new Float32Array(m * h * d), v = new Float32Array(m * h * d);
    for (let f = 0; f < d; f++) {
      const b = f % 3 * 2 / 3 - 1, y = f > 2 ? 0 : -1, g = [
        b,
        y,
        0,
        b + 2 / 3,
        y,
        0,
        b + 2 / 3,
        y + 1,
        0,
        b,
        y,
        0,
        b + 2 / 3,
        y + 1,
        0,
        b,
        y + 1,
        0
      ];
      _.set(g, m * h * f);
      for (let E = 0; E < h; E++) {
        const w = u[E * 2] * 2 - 1, C = u[E * 2 + 1] * 2 - 1;
        f === 0 ? Cn.set(1, C, w) : f === 1 ? Cn.set(-w, 1, -C) : f === 2 ? Cn.set(-w, C, 1) : f === 3 ? Cn.set(-1, C, -w) : f === 4 ? Cn.set(-w, -1, C) : Cn.set(w, C, -1), Cn.toArray(v, (f * h + E) * m);
      }
    }
    const p = new It();
    p.setAttribute("position", new jt(_, m)), p.setAttribute("outputDirection", new jt(v, m)), n.push(new ut(p, null)), i > ci && i--;
  }
  return {
    lodMeshes: n,
    sizeLods: t
  };
}
function Ua(e, t, n) {
  const i = new Yt(e, t, n);
  return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function ri(e, t, n, i, r) {
  e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
}
function Tu(e, t, n) {
  return new en({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: xu,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Lr(),
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
function bu(e, t, n) {
  return new en({
    name: "SphericalGaussianBlur",
    defines: {
      SAMPLES: Su,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Lr(),
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
function Da() {
  return new en({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Lr(),
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
function Oa() {
  return new en({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Lr(),
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
function Lr() {
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
var cl = class extends Yt {
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
    this.texture = new wo(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, i = new ki(5, 5, 5), r = new en({
      name: "CubemapFromEquirect",
      uniforms: gi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const s = new ut(i, r), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = Ot), new eu(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
};
function Au(e) {
  let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = null;
  function r(h, m = !1) {
    return h == null ? null : m ? a(h) : s(h);
  }
  function s(h) {
    if (h && h.isTexture) {
      const m = h.mapping;
      if (m === 303 || m === 304) if (t.has(h)) {
        const _ = t.get(h).texture;
        return o(_, h.mapping);
      } else {
        const _ = h.image;
        if (_ && _.height > 0) {
          const v = new cl(_.height);
          return v.fromEquirectangularTexture(e, h), t.set(h, v), h.addEventListener("dispose", l), o(v.texture, h.mapping);
        } else return null;
      }
    }
    return h;
  }
  function a(h) {
    if (h && h.isTexture) {
      const m = h.mapping, _ = m === 303 || m === 304, v = m === 301 || m === 302;
      if (_ || v) {
        let p = n.get(h);
        const f = p !== void 0 ? p.texture.pmremVersion : 0;
        if (h.isRenderTargetTexture && h.pmremVersion !== f)
          return i === null && (i = new bs(e)), p = _ ? i.fromEquirectangular(h, p) : i.fromCubemap(h, p), p.texture.pmremVersion = h.pmremVersion, n.set(h, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const b = h.image;
          return _ && b && b.height > 0 || v && b && c(b) ? (i === null && (i = new bs(e)), p = _ ? i.fromEquirectangular(h) : i.fromCubemap(h), p.texture.pmremVersion = h.pmremVersion, n.set(h, p), h.addEventListener("dispose", u), p.texture) : null;
        }
      }
    }
    return h;
  }
  function o(h, m) {
    return m === 303 ? h.mapping = 301 : m === 304 && (h.mapping = 302), h;
  }
  function c(h) {
    let m = 0;
    const _ = 6;
    for (let v = 0; v < _; v++) h[v] !== void 0 && m++;
    return m === _;
  }
  function l(h) {
    const m = h.target;
    m.removeEventListener("dispose", l);
    const _ = t.get(m);
    _ !== void 0 && (t.delete(m), _.dispose());
  }
  function u(h) {
    const m = h.target;
    m.removeEventListener("dispose", u);
    const _ = n.get(m);
    _ !== void 0 && (n.delete(m), _.dispose());
  }
  function d() {
    t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return {
    get: r,
    dispose: d
  };
}
function wu(e) {
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
      return r === null && hi("WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function Ru(e, t, n, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const h = d.target;
    h.index !== null && t.remove(h.index);
    for (const _ in h.attributes) t.remove(h.attributes[_]);
    h.removeEventListener("dispose", a), delete r[h.id];
    const m = s.get(h);
    m && (t.remove(m), s.delete(h)), i.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, n.memory.geometries--;
  }
  function o(d, h) {
    return r[h.id] === !0 || (h.addEventListener("dispose", a), r[h.id] = !0, n.memory.geometries++), h;
  }
  function c(d) {
    const h = d.attributes;
    for (const m in h) t.update(h[m], e.ARRAY_BUFFER);
  }
  function l(d) {
    const h = [], m = d.index, _ = d.attributes.position;
    let v = 0;
    if (_ === void 0) return;
    if (m !== null) {
      const b = m.array;
      v = m.version;
      for (let y = 0, g = b.length; y < g; y += 3) {
        const E = b[y + 0], w = b[y + 1], C = b[y + 2];
        h.push(E, w, w, C, C, E);
      }
    } else {
      const b = _.array;
      v = _.version;
      for (let y = 0, g = b.length / 3 - 1; y < g; y += 3) {
        const E = y + 0, w = y + 1, C = y + 2;
        h.push(E, w, w, C, C, E);
      }
    }
    const p = new (_.count >= 65535 ? To : Eo)(h, 1);
    p.version = v;
    const f = s.get(d);
    f && t.remove(f), s.set(d, p);
  }
  function u(d) {
    const h = s.get(d);
    if (h) {
      const m = d.index;
      m !== null && h.version < m.version && l(d);
    } else l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: u
  };
}
function Cu(e, t, n) {
  let i;
  function r(d) {
    i = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function c(d, h) {
    e.drawElements(i, h, s, d * a), n.update(h, i, 1);
  }
  function l(d, h, m) {
    m !== 0 && (e.drawElementsInstanced(i, h, s, d * a, m), n.update(h, i, m));
  }
  function u(d, h, m) {
    if (m === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, h, 0, s, d, 0, m);
    let _ = 0;
    for (let v = 0; v < m; v++) _ += h[v];
    n.update(_, i, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function Pu(e) {
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
function Lu(e, t, n) {
  const i = /* @__PURE__ */ new WeakMap(), r = new vt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let h = i.get(o);
    if (h === void 0 || h.count !== d) {
      let z = function() {
        M.dispose(), i.delete(o), o.removeEventListener("dispose", z);
      };
      var m = z;
      h !== void 0 && h.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], b = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let g = 0;
      _ === !0 && (g = 1), v === !0 && (g = 2), p === !0 && (g = 3);
      let E = o.attributes.position.count * g, w = 1;
      E > t.maxTextureSize && (w = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const C = new Float32Array(E * w * 4 * d), M = new _o(C, E, w, d);
      M.type = Gi, M.needsUpdate = !0;
      const T = g * 4;
      for (let L = 0; L < d; L++) {
        const I = f[L], q = b[L], P = y[L], R = E * w * 4 * L;
        for (let G = 0; G < I.count; G++) {
          const U = G * T;
          _ === !0 && (r.fromBufferAttribute(I, G), C[R + U + 0] = r.x, C[R + U + 1] = r.y, C[R + U + 2] = r.z, C[R + U + 3] = 0), v === !0 && (r.fromBufferAttribute(q, G), C[R + U + 4] = r.x, C[R + U + 5] = r.y, C[R + U + 6] = r.z, C[R + U + 7] = 0), p === !0 && (r.fromBufferAttribute(P, G), C[R + U + 8] = r.x, C[R + U + 9] = r.y, C[R + U + 10] = r.z, C[R + U + 11] = P.itemSize === 4 ? r.w : 1);
        }
      }
      h = {
        count: d,
        texture: M,
        size: new de(E, w)
      }, i.set(o, h), o.addEventListener("dispose", z);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null) c.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
    else {
      let _ = 0;
      for (let p = 0; p < l.length; p++) _ += l[p];
      const v = o.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(e, "morphTargetBaseInfluence", v), c.getUniforms().setValue(e, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(e, "morphTargetsTexture", h.texture, n), c.getUniforms().setValue(e, "morphTargetsTextureSize", h.size);
  }
  return { update: s };
}
function Iu(e, t, n, i, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const u = r.render.frame, d = l.geometry, h = t.get(l, d);
    if (s.get(h) !== u && (t.update(h), s.set(h, u)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== u && (n.update(l.instanceMatrix, e.ARRAY_BUFFER), l.instanceColor !== null && n.update(l.instanceColor, e.ARRAY_BUFFER), s.set(l, u))), l.isSkinnedMesh) {
      const m = l.skeleton;
      s.get(m) !== u && (m.update(), s.set(m, u));
    }
    return h;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const u = l.target;
    u.removeEventListener("dispose", c), i.releaseStatesOfObject(u), n.remove(u.instanceMatrix), u.instanceColor !== null && n.remove(u.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
var Nu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Uu(e, t, n, i, r, s) {
  const a = new Yt(t, n, {
    type: e,
    depthBuffer: r,
    stencilBuffer: s,
    samples: i ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1
  });
  let o = null, c = null;
  const l = new It();
  l.setAttribute("position", new it([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
  ], 3)), l.setAttribute("uv", new it([
    0,
    2,
    0,
    0,
    2,
    0
  ], 2));
  const u = new Nh({
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
  }), d = new ut(l, u), h = new Pr(-1, 1, 1, -1, 0, 1);
  let m = null, _ = null, v = !1, p, f = null, b = [], y = !1;
  this.setSize = function(g, E) {
    a.setSize(g, E), o !== null && o.setSize(g, E), c !== null && c.setSize(g, E);
    for (let w = 0; w < b.length; w++) {
      const C = b[w];
      C.setSize && C.setSize(g, E);
    }
  }, this.setEffects = function(g) {
    b = g, y = b.length > 0 && b[0].isRenderPass === !0;
    const E = a.width, w = a.height;
    b.length > 0 && o === null && (o = new Yt(E, w, {
      type: En,
      depthBuffer: !1,
      stencilBuffer: !1
    }), c = new Yt(E, w, {
      type: En,
      depthBuffer: !1,
      stencilBuffer: !1
    }));
    for (let C = 0; C < b.length; C++) {
      const M = b[C];
      M.setSize && M.setSize(E, w);
    }
  }, this.begin = function(g, E) {
    if (v || g.toneMapping === 0 && b.length === 0) return !1;
    if (f = E, E !== null) {
      const w = E.width, C = E.height;
      (a.width !== w || a.height !== C) && this.setSize(w, C);
    }
    return y === !1 && g.setRenderTarget(a), p = g.toneMapping, g.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return y;
  }, this.end = function(g, E) {
    g.toneMapping = p, v = !0;
    let w = a, C = o;
    for (let M = 0; M < b.length; M++) {
      const T = b[M];
      T.enabled !== !1 && (T.render(g, C, w, E), T.needsSwap !== !1 && (w = C, C = C === o ? c : o));
    }
    if (m !== g.outputColorSpace || _ !== g.toneMapping) {
      m = g.outputColorSpace, _ = g.toneMapping, u.defines = {}, $e.getTransfer(m) === "srgb" && (u.defines.SRGB_TRANSFER = "");
      const M = Nu[_];
      M && (u.defines[M] = ""), u.needsUpdate = !0;
    }
    u.uniforms.tDiffuse.value = w.texture, g.setRenderTarget(f), g.render(d, h), f = null, v = !1;
  }, this.isCompositing = function() {
    return v;
  }, this.dispose = function() {
    a.dispose(), o !== null && o.dispose(), c !== null && c.dispose(), l.dispose(), u.dispose();
  };
}
var hl = /* @__PURE__ */ new Gt(), As = /* @__PURE__ */ new Fi(1, 1), ul = /* @__PURE__ */ new _o(), fl = /* @__PURE__ */ new Cc(), dl = /* @__PURE__ */ new wo(), Fa = [], Ba = [], za = new Float32Array(16), Va = new Float32Array(9), Ga = new Float32Array(4);
function _i(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) return e;
  const r = t * n;
  let s = Fa[r];
  if (s === void 0 && (s = new Float32Array(r), Fa[r] = s), t !== 0) {
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
function Ir(e, t) {
  let n = Ba[t];
  n === void 0 && (n = new Int32Array(t), Ba[t] = n);
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function Du(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Ou(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2fv(this.addr, t), yt(n, t);
  }
}
function Fu(e, t) {
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
function Bu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4fv(this.addr, t), yt(n, t);
  }
}
function zu(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    Ga.set(i), e.uniformMatrix2fv(this.addr, !1, Ga), yt(n, i);
  }
}
function Vu(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    Va.set(i), e.uniformMatrix3fv(this.addr, !1, Va), yt(n, i);
  }
}
function Gu(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (xt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), yt(n, t);
  } else {
    if (xt(n, i)) return;
    za.set(i), e.uniformMatrix4fv(this.addr, !1, za), yt(n, i);
  }
}
function Hu(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function ku(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2iv(this.addr, t), yt(n, t);
  }
}
function Wu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (xt(n, t)) return;
    e.uniform3iv(this.addr, t), yt(n, t);
  }
}
function Xu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4iv(this.addr, t), yt(n, t);
  }
}
function qu(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Yu(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (xt(n, t)) return;
    e.uniform2uiv(this.addr, t), yt(n, t);
  }
}
function Ku(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (xt(n, t)) return;
    e.uniform3uiv(this.addr, t), yt(n, t);
  }
}
function Ju(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (xt(n, t)) return;
    e.uniform4uiv(this.addr, t), yt(n, t);
  }
}
function Zu(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_2D_SHADOW ? (As.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, s = As) : s = hl, n.setTexture2D(t || s, r);
}
function $u(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || fl, r);
}
function Qu(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(t || dl, r);
}
function ju(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || ul, r);
}
function ef(e) {
  switch (e) {
    case 5126:
      return Du;
    case 35664:
      return Ou;
    case 35665:
      return Fu;
    case 35666:
      return Bu;
    case 35674:
      return zu;
    case 35675:
      return Vu;
    case 35676:
      return Gu;
    case 5124:
    case 35670:
      return Hu;
    case 35667:
    case 35671:
      return ku;
    case 35668:
    case 35672:
      return Wu;
    case 35669:
    case 35673:
      return Xu;
    case 5125:
      return qu;
    case 36294:
      return Yu;
    case 36295:
      return Ku;
    case 36296:
      return Ju;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zu;
    case 35679:
    case 36299:
    case 36307:
      return $u;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ju;
  }
}
function tf(e, t) {
  e.uniform1fv(this.addr, t);
}
function nf(e, t) {
  const n = _i(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function rf(e, t) {
  const n = _i(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function sf(e, t) {
  const n = _i(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function af(e, t) {
  const n = _i(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function of(e, t) {
  const n = _i(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function lf(e, t) {
  const n = _i(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function cf(e, t) {
  e.uniform1iv(this.addr, t);
}
function hf(e, t) {
  e.uniform2iv(this.addr, t);
}
function uf(e, t) {
  e.uniform3iv(this.addr, t);
}
function ff(e, t) {
  e.uniform4iv(this.addr, t);
}
function df(e, t) {
  e.uniform1uiv(this.addr, t);
}
function pf(e, t) {
  e.uniform2uiv(this.addr, t);
}
function mf(e, t) {
  e.uniform3uiv(this.addr, t);
}
function gf(e, t) {
  e.uniform4uiv(this.addr, t);
}
function vf(e, t, n) {
  const i = this.cache, r = t.length, s = Ir(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  let a;
  this.type === e.SAMPLER_2D_SHADOW ? a = As : a = hl;
  for (let o = 0; o !== r; ++o) n.setTexture2D(t[o] || a, s[o]);
}
function _f(e, t, n) {
  const i = this.cache, r = t.length, s = Ir(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture3D(t[a] || fl, s[a]);
}
function Mf(e, t, n) {
  const i = this.cache, r = t.length, s = Ir(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTextureCube(t[a] || dl, s[a]);
}
function Sf(e, t, n) {
  const i = this.cache, r = t.length, s = Ir(n, r);
  xt(i, s) || (e.uniform1iv(this.addr, s), yt(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2DArray(t[a] || ul, s[a]);
}
function xf(e) {
  switch (e) {
    case 5126:
      return tf;
    case 35664:
      return nf;
    case 35665:
      return rf;
    case 35666:
      return sf;
    case 35674:
      return af;
    case 35675:
      return of;
    case 35676:
      return lf;
    case 5124:
    case 35670:
      return cf;
    case 35667:
    case 35671:
      return hf;
    case 35668:
    case 35672:
      return uf;
    case 35669:
    case 35673:
      return ff;
    case 5125:
      return df;
    case 36294:
      return pf;
    case 36295:
      return mf;
    case 36296:
      return gf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vf;
    case 35679:
    case 36299:
    case 36307:
      return _f;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Mf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Sf;
  }
}
var yf = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = ef(t.type);
  }
}, Ef = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = xf(t.type);
  }
}, Tf = class {
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
}, ms = /(\w+)(\])?(\[|\.)?/g;
function Ha(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function bf(e, t, n) {
  const i = e.name, r = i.length;
  for (ms.lastIndex = 0; ; ) {
    const s = ms.exec(i), a = ms.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      Ha(n, l === void 0 ? new yf(o, e, t) : new Ef(o, e, t));
      break;
    } else {
      let u = n.map[o];
      u === void 0 && (u = new Tf(o), Ha(n, u)), n = u;
    }
  }
}
var yr = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const a = e.getActiveUniform(t, s);
      bf(a, e.getUniformLocation(t, a.name), this);
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
function ka(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
var Af = 37297, wf = 0;
function Rf(e, t) {
  const n = e.split(`
`), i = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, n.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === t ? ">" : " "} ${o}: ${n[a]}`);
  }
  return i.join(`
`);
}
var Wa = /* @__PURE__ */ new ke();
function Cf(e) {
  $e._getMatrix(Wa, $e.workingColorSpace, e);
  const t = `mat3( ${Wa.elements.map((n) => n.toFixed(4))} )`;
  switch ($e.getTransfer(e)) {
    case Ar:
      return [t, "LinearTransferOETF"];
    case wr:
      return [t, "sRGBTransferOETF"];
    default:
      return Fe("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function Xa(e, t, n) {
  const i = e.getShaderParameter(t, e.COMPILE_STATUS), r = (e.getShaderInfoLog(t) || "").trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return n.toUpperCase() + `

` + r + `

` + Rf(e.getShaderSource(t), a);
  } else return r;
}
function Pf(e, t) {
  const n = Cf(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
var Lf = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function If(e, t) {
  const n = Lf[t];
  return n === void 0 ? (Fe("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Mr = /* @__PURE__ */ new D();
function Nf() {
  return $e.getLuminanceCoefficients(Mr), [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${Mr.x.toFixed(4)}, ${Mr.y.toFixed(4)}, ${Mr.z.toFixed(4)} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Uf(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ii).join(`
`);
}
function Df(e) {
  const t = [];
  for (const n in e) {
    const i = e[n];
    i !== !1 && t.push("#define " + n + " " + i);
  }
  return t.join(`
`);
}
function Of(e, t) {
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
function Ii(e) {
  return e !== "";
}
function qa(e, t) {
  const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ya(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Ff = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ws(e) {
  return e.replace(Ff, zf);
}
var Bf = /* @__PURE__ */ new Map();
function zf(e, t) {
  let n = We[t];
  if (n === void 0) {
    const i = Bf.get(t);
    if (i !== void 0)
      n = We[i], Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
    else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
  }
  return ws(n);
}
var Vf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ka(e) {
  return e.replace(Vf, Gf);
}
function Gf(e, t, n, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(n); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ja(e) {
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
var Hf = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function kf(e) {
  return Hf[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var Wf = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Xf(e) {
  return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Wf[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var qf = { 302: "ENVMAP_MODE_REFRACTION" };
function Yf(e) {
  return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : qf[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var Kf = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function Jf(e) {
  return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Kf[e.combine] || "ENVMAP_BLENDING_NONE";
}
function Zf(e) {
  const t = e.envMapCubeUVHeight;
  if (t === null) return null;
  const n = Math.log2(t) - 2, i = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
    texelHeight: i,
    maxMip: n
  };
}
function $f(e, t, n, i) {
  const r = e.getContext(), s = n.defines;
  let a = n.vertexShader, o = n.fragmentShader;
  const c = kf(n), l = Xf(n), u = Yf(n), d = Jf(n), h = Zf(n), m = Uf(n), _ = Df(s), v = r.createProgram();
  let p, f, b = n.glslVersion ? "#version " + n.glslVersion + `
` : "";
  n.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _
  ].filter(Ii).join(`
`), p.length > 0 && (p += `
`), f = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _
  ].filter(Ii).join(`
`), f.length > 0 && (f += `
`)) : (p = [
    Ja(n),
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
    n.shadowMapEnabled ? "#define " + c : "",
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
  ].filter(Ii).join(`
`), f = [
    Ja(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    _,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + l : "",
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
    n.shadowMapEnabled ? "#define " + c : "",
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
    n.toneMapping !== 0 ? If("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.opaque ? "#define OPAQUE" : "",
    We.colorspace_pars_fragment,
    Pf("linearToOutputTexel", n.outputColorSpace),
    Nf(),
    n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(Ii).join(`
`)), a = ws(a), a = qa(a, n), a = Ya(a, n), o = ws(o), o = qa(o, n), o = Ya(o, n), a = Ka(a), o = Ka(o), n.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, f = [
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
  const y = b + p + a, g = b + f + o, E = ka(r, r.VERTEX_SHADER, y), w = ka(r, r.FRAGMENT_SHADER, g);
  r.attachShader(v, E), r.attachShader(v, w), n.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, n.index0AttributeName) : n.hasPositionAttribute === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function C(L) {
    if (e.debug.checkShaderErrors) {
      const I = r.getProgramInfoLog(v) || "", q = r.getShaderInfoLog(E) || "", P = r.getShaderInfoLog(w) || "", R = I.trim(), G = q.trim(), U = P.trim();
      let Q = !0, W = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (Q = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(r, v, E, w);
        else {
          const Y = Xa(r, E, "vertex"), Z = Xa(r, w, "fragment");
          Be("WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + R + `
` + Y + `
` + Z);
        }
      else R !== "" ? Fe("WebGLProgram: Program Info Log:", R) : (G === "" || U === "") && (W = !1);
      W && (L.diagnostics = {
        runnable: Q,
        programLog: R,
        vertexShader: {
          log: G,
          prefix: p
        },
        fragmentShader: {
          log: U,
          prefix: f
        }
      });
    }
    r.deleteShader(E), r.deleteShader(w), M = new yr(r, v), T = Of(r, v);
  }
  let M;
  this.getUniforms = function() {
    return M === void 0 && C(this), M;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && C(this), T;
  };
  let z = n.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return z === !1 && (z = r.getProgramParameter(v, Af)), z;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = n.shaderType, this.name = n.shaderName, this.id = wf++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = E, this.fragmentShader = w, this;
}
var Qf = 0, jf = class {
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
    return n === void 0 && (n = new ed(e), t.set(e, n)), n;
  }
}, ed = class {
  constructor(e) {
    this.id = Qf++, this.code = e, this.usedTimes = 0;
  }
};
function td(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function nd(e, t, n, i, r, s) {
  const a = new So(), o = new jf(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = i.logarithmicDepthBuffer;
  let h = i.precision;
  const m = {
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
  function _(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function v(M, T, z, L, I, q) {
    const P = L.fog, R = I.geometry, G = M.isMeshStandardMaterial || M.isMeshLambertMaterial || M.isMeshPhongMaterial ? L.environment : null, U = M.isMeshStandardMaterial || M.isMeshLambertMaterial && !M.envMap || M.isMeshPhongMaterial && !M.envMap, Q = t.get(M.envMap || G, U), W = Q && Q.mapping === 306 ? Q.image.height : null, Y = m[M.type];
    M.precision !== null && (h = i.getMaxPrecision(M.precision), h !== M.precision && Fe("WebGLProgram.getParameters:", M.precision, "not supported, using", h, "instead."));
    const Z = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color, Le = Z !== void 0 ? Z.length : 0;
    let we = 0;
    R.morphAttributes.position !== void 0 && (we = 1), R.morphAttributes.normal !== void 0 && (we = 2), R.morphAttributes.color !== void 0 && (we = 3);
    let rt, Ge, J, re;
    if (Y) {
      const St = Qt[Y];
      rt = St.vertexShader, Ge = St.fragmentShader;
    } else {
      rt = M.vertexShader, Ge = M.fragmentShader;
      const St = o.getVertexShaderStage(M), nt = o.getFragmentShaderStage(M);
      o.update(M, St, nt), J = St.id, re = nt.id;
    }
    const ae = e.getRenderTarget(), Ce = e.state.buffers.depth.getReversed(), Ue = I.isInstancedMesh === !0, ue = I.isBatchedMesh === !0, qe = !!M.map, ee = !!M.matcap, j = !!Q, le = !!M.aoMap, ve = !!M.lightMap, _e = !!M.bumpMap && M.wireframe === !1, Re = !!M.normalMap, Ie = !!M.displacementMap, Ve = !!M.emissiveMap, He = !!M.metalnessMap, N = !!M.roughnessMap, lt = M.anisotropy > 0, Qe = M.clearcoat > 0, Je = M.dispersion > 0, A = M.retroreflectivity > 0, S = M.iridescence > 0, O = M.sheen > 0, X = M.transmission > 0, te = lt && !!M.anisotropyMap, oe = Qe && !!M.clearcoatMap, fe = Qe && !!M.clearcoatNormalMap, V = Qe && !!M.clearcoatRoughnessMap, ce = S && !!M.iridescenceMap, Se = S && !!M.iridescenceThicknessMap, Te = O && !!M.sheenColorMap, se = O && !!M.sheenRoughnessMap, Ee = !!M.specularMap, Ne = !!M.specularColorMap, ze = !!M.specularIntensityMap, je = X && !!M.transmissionMap, B = X && !!M.thicknessMap, $ = !!M.gradientMap, ne = !!M.alphaMap, Me = M.alphaTest > 0, be = !!M.alphaHash, ie = !!M.extensions;
    let ge = 0;
    M.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (ge = e.toneMapping);
    const Oe = {
      shaderID: Y,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: rt,
      fragmentShader: Ge,
      defines: M.defines,
      customVertexShaderID: J,
      customFragmentShaderID: re,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: h,
      batching: ue,
      batchingColor: ue && I._colorsTexture !== null,
      instancing: Ue,
      instancingColor: Ue && I.instanceColor !== null,
      instancingMorph: Ue && I.morphTexture !== null,
      outputColorSpace: ae === null ? e.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : $e.workingColorSpace,
      alphaToCoverage: !!M.alphaToCoverage,
      map: qe,
      matcap: ee,
      envMap: j,
      envMapMode: j && Q.mapping,
      envMapCubeUVHeight: W,
      aoMap: le,
      lightMap: ve,
      bumpMap: _e,
      normalMap: Re,
      displacementMap: Ie,
      emissiveMap: Ve,
      normalMapObjectSpace: Re && M.normalMapType === 1,
      normalMapTangentSpace: Re && M.normalMapType === 0,
      packedNormalMap: Re && M.normalMapType === 0 && td(M.normalMap.format),
      metalnessMap: He,
      roughnessMap: N,
      anisotropy: lt,
      anisotropyMap: te,
      clearcoat: Qe,
      clearcoatMap: oe,
      clearcoatNormalMap: fe,
      clearcoatRoughnessMap: V,
      dispersion: Je,
      retroreflection: A,
      iridescence: S,
      iridescenceMap: ce,
      iridescenceThicknessMap: Se,
      sheen: O,
      sheenColorMap: Te,
      sheenRoughnessMap: se,
      specularMap: Ee,
      specularColorMap: Ne,
      specularIntensityMap: ze,
      transmission: X,
      transmissionMap: je,
      thicknessMap: B,
      gradientMap: $,
      opaque: M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1,
      alphaMap: ne,
      alphaTest: Me,
      alphaHash: be,
      combine: M.combine,
      mapUv: qe && _(M.map.channel),
      aoMapUv: le && _(M.aoMap.channel),
      lightMapUv: ve && _(M.lightMap.channel),
      bumpMapUv: _e && _(M.bumpMap.channel),
      normalMapUv: Re && _(M.normalMap.channel),
      displacementMapUv: Ie && _(M.displacementMap.channel),
      emissiveMapUv: Ve && _(M.emissiveMap.channel),
      metalnessMapUv: He && _(M.metalnessMap.channel),
      roughnessMapUv: N && _(M.roughnessMap.channel),
      anisotropyMapUv: te && _(M.anisotropyMap.channel),
      clearcoatMapUv: oe && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: fe && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: V && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ce && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: Se && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: se && _(M.sheenRoughnessMap.channel),
      specularMapUv: Ee && _(M.specularMap.channel),
      specularColorMapUv: Ne && _(M.specularColorMap.channel),
      specularIntensityMapUv: ze && _(M.specularIntensityMap.channel),
      transmissionMapUv: je && _(M.transmissionMap.channel),
      thicknessMapUv: B && _(M.thicknessMap.channel),
      alphaMapUv: ne && _(M.alphaMap.channel),
      vertexTangents: !!R.attributes.tangent && (Re || lt),
      vertexNormals: !!R.attributes.normal,
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!R.attributes.color && R.attributes.color.itemSize === 4,
      pointsUvs: I.isPoints === !0 && !!R.attributes.uv && (qe || ne),
      fog: !!P,
      useFog: M.fog === !0,
      fogExp2: !!P && P.isFogExp2,
      flatShading: M.wireframe === !1 && (M.flatShading === !0 || R.attributes.normal === void 0 && Re === !1 && (M.isMeshLambertMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isMeshPhysicalMaterial)),
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: Ce,
      skinning: I.isSkinnedMesh === !0,
      hasPositionAttribute: R.attributes.position !== void 0,
      morphTargets: R.morphAttributes.position !== void 0,
      morphNormals: R.morphAttributes.normal !== void 0,
      morphColors: R.morphAttributes.color !== void 0,
      morphTargetsCount: Le,
      morphTextureStride: we,
      numSunLights: T.sun.length,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numSunLightShadows: T.sunShadowMap.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numLightProbeGrids: q.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: e.shadowMap.enabled && z.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: ge,
      decodeVideoTexture: qe && M.map.isVideoTexture === !0 && $e.getTransfer(M.map.colorSpace) === "srgb",
      decodeVideoTextureEmissive: Ve && M.emissiveMap.isVideoTexture === !0 && $e.getTransfer(M.emissiveMap.colorSpace) === "srgb",
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === 2,
      flipSided: M.side === 1,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance: ie && M.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ie && M.extensions.multiDraw === !0 || ue) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
    return Oe.vertexUv1s = c.has(1), Oe.vertexUv2s = c.has(2), Oe.vertexUv3s = c.has(3), c.clear(), Oe;
  }
  function p(M) {
    const T = [];
    if (M.shaderID ? T.push(M.shaderID) : (T.push(M.customVertexShaderID), T.push(M.customFragmentShaderID)), M.defines !== void 0) for (const z in M.defines)
      T.push(z), T.push(M.defines[z]);
    return M.isRawShaderMaterial === !1 && (f(T, M), b(T, M), T.push(e.outputColorSpace)), T.push(M.customProgramCacheKey), T.join();
  }
  function f(M, T) {
    M.push(T.precision), M.push(T.outputColorSpace), M.push(T.envMapMode), M.push(T.envMapCubeUVHeight), M.push(T.mapUv), M.push(T.alphaMapUv), M.push(T.lightMapUv), M.push(T.aoMapUv), M.push(T.bumpMapUv), M.push(T.normalMapUv), M.push(T.displacementMapUv), M.push(T.emissiveMapUv), M.push(T.metalnessMapUv), M.push(T.roughnessMapUv), M.push(T.anisotropyMapUv), M.push(T.clearcoatMapUv), M.push(T.clearcoatNormalMapUv), M.push(T.clearcoatRoughnessMapUv), M.push(T.iridescenceMapUv), M.push(T.iridescenceThicknessMapUv), M.push(T.sheenColorMapUv), M.push(T.sheenRoughnessMapUv), M.push(T.specularMapUv), M.push(T.specularColorMapUv), M.push(T.specularIntensityMapUv), M.push(T.transmissionMapUv), M.push(T.thicknessMapUv), M.push(T.combine), M.push(T.fogExp2), M.push(T.sizeAttenuation), M.push(T.morphTargetsCount), M.push(T.morphAttributeCount), M.push(T.numSunLights), M.push(T.numDirLights), M.push(T.numPointLights), M.push(T.numSpotLights), M.push(T.numSpotLightMaps), M.push(T.numHemiLights), M.push(T.numRectAreaLights), M.push(T.numSunLightShadows), M.push(T.numDirLightShadows), M.push(T.numPointLightShadows), M.push(T.numSpotLightShadows), M.push(T.numSpotLightShadowsWithMaps), M.push(T.numLightProbes), M.push(T.shadowMapType), M.push(T.toneMapping), M.push(T.numClippingPlanes), M.push(T.numClipIntersection), M.push(T.depthPacking);
  }
  function b(M, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.retroreflection && a.enable(24), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), T.packedNormalMap && a.enable(22), T.vertexNormals && a.enable(23), M.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), T.numLightProbeGrids > 0 && a.enable(22), T.hasPositionAttribute && a.enable(23), M.push(a.mask);
  }
  function y(M) {
    const T = m[M.type];
    let z;
    if (T) {
      const L = Qt[T];
      z = Ph.clone(L.uniforms);
    } else z = M.uniforms;
    return z;
  }
  function g(M, T) {
    let z = u.get(T);
    return z !== void 0 ? ++z.usedTimes : (z = new $f(e, T, M, r), l.push(z), u.set(T, z)), z;
  }
  function E(M) {
    if (--M.usedTimes === 0) {
      const T = l.indexOf(M);
      l[T] = l[l.length - 1], l.pop(), u.delete(M.cacheKey), M.destroy();
    }
  }
  function w(M) {
    o.remove(M);
  }
  function C() {
    o.dispose();
  }
  return {
    getParameters: v,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: g,
    releaseProgram: E,
    releaseShaderCache: w,
    programs: l,
    dispose: C
  };
}
function id() {
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
  function r(a, o, c) {
    e.get(a)[o] = c;
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
function rd(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.materialVariant !== t.materialVariant ? e.materialVariant - t.materialVariant : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function Za(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function $a() {
  const e = [];
  let t = 0;
  const n = [], i = [], r = [];
  function s() {
    t = 0, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(h) {
    let m = 0;
    return h.isInstancedMesh && (m += 2), h.isSkinnedMesh && (m += 1), m;
  }
  function o(h, m, _, v, p, f) {
    let b = e[t];
    return b === void 0 ? (b = {
      id: h.id,
      object: h,
      geometry: m,
      material: _,
      materialVariant: a(h),
      groupOrder: v,
      renderOrder: h.renderOrder,
      z: p,
      group: f
    }, e[t] = b) : (b.id = h.id, b.object = h, b.geometry = m, b.material = _, b.materialVariant = a(h), b.groupOrder = v, b.renderOrder = h.renderOrder, b.z = p, b.group = f), t++, b;
  }
  function c(h, m, _, v, p, f, b) {
    b.reversedDepth === !0 && (p = -p);
    const y = o(h, m, _, v, p, f);
    _.transmission > 0 ? i.push(y) : _.transparent === !0 ? r.push(y) : n.push(y);
  }
  function l(h, m, _, v, p, f) {
    const b = o(h, m, _, v, p, f);
    _.transmission > 0 ? i.unshift(b) : _.transparent === !0 ? r.unshift(b) : n.unshift(b);
  }
  function u(h, m) {
    n.length > 1 && n.sort(h || rd), i.length > 1 && i.sort(m || Za), r.length > 1 && r.sort(m || Za);
  }
  function d() {
    for (let h = t, m = e.length; h < m; h++) {
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
    push: c,
    unshift: l,
    finish: d,
    sort: u
  };
}
function sd() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r) {
    const s = e.get(i);
    let a;
    return s === void 0 ? (a = new $a(), e.set(i, [a])) : r >= s.length ? (a = new $a(), s.push(a)) : a = s[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function ad() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          direction: new D(),
          color: new Xe()
        };
        break;
      case "SpotLight":
        n = {
          position: new D(),
          direction: new D(),
          color: new Xe(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0
        };
        break;
      case "PointLight":
        n = {
          position: new D(),
          color: new Xe(),
          distance: 0,
          decay: 0
        };
        break;
      case "HemisphereLight":
        n = {
          direction: new D(),
          skyColor: new Xe(),
          groundColor: new Xe()
        };
        break;
      case "RectAreaLight":
        n = {
          color: new Xe(),
          position: new D(),
          halfWidth: new D(),
          halfHeight: new D()
        };
        break;
    }
    return e[t.id] = n, n;
  } };
}
function od() {
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
var ld = 0;
function cd(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function hd(e) {
  const t = new ad(), n = od(), i = {
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
  for (let l = 0; l < 9; l++) i.probe.push(new D());
  const r = new D(), s = new ht(), a = new ht();
  function o(l) {
    let u = 0, d = 0, h = 0;
    for (let I = 0; I < 9; I++) i.probe[I].set(0, 0, 0);
    let m = 0, _ = 0, v = 0, p = 0, f = 0, b = 0, y = 0, g = 0, E = 0, w = 0, C = 0, M = 0, T = 0, z = 0;
    l.sort(cd);
    for (let I = 0, q = l.length; I < q; I++) {
      const P = l[I], R = P.color, G = P.intensity, U = P.distance;
      let Q = null;
      if (P.shadow && P.shadow.map && (P.shadow.map.texture.format === 1030 ? Q = P.shadow.map.texture : Q = P.shadow.map.depthTexture || P.shadow.map.texture), P.isAmbientLight)
        u += R.r * G, d += R.g * G, h += R.b * G;
      else if (P.isLightProbe) {
        for (let W = 0; W < 9; W++) i.probe[W].addScaledVector(P.sh.coefficients[W], G);
        z++;
      } else if (P.isSunLight) {
        const W = t.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const Y = P.shadow, Z = n.get(P);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()), i.sunShadow[_] = Z, i.sunShadowMap[_] = Q;
          const Le = Y.getViewportCount();
          for (let we = 0; we < Le; we++)
            i.sunShadowMatrix[v + we] = Y.getMatrix(we), i.sunShadowCascade[v + we] = Y._cascadeData[we];
          v += Le, _++;
        }
        i.sun[m] = W, m++;
      } else if (P.isDirectionalLight) {
        const W = t.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const Y = P.shadow, Z = n.get(P);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, i.directionalShadow[p] = Z, i.directionalShadowMap[p] = Q, i.directionalShadowMatrix[p] = P.shadow.matrix, E++;
        }
        i.directional[p] = W, p++;
      } else if (P.isSpotLight) {
        const W = t.get(P);
        W.position.setFromMatrixPosition(P.matrixWorld), W.color.copy(R).multiplyScalar(G), W.distance = U, W.coneCos = Math.cos(P.angle), W.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), W.decay = P.decay, i.spot[b] = W;
        const Y = P.shadow;
        if (P.map && (i.spotLightMap[M] = P.map, M++, Y.updateMatrices(P), P.castShadow && T++), i.spotLightMatrix[b] = Y.matrix, P.castShadow) {
          const Z = n.get(P);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, i.spotShadow[b] = Z, i.spotShadowMap[b] = Q, C++;
        }
        b++;
      } else if (P.isRectAreaLight) {
        const W = t.get(P);
        W.color.copy(R).multiplyScalar(G), W.halfWidth.set(P.width * 0.5, 0, 0), W.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[y] = W, y++;
      } else if (P.isPointLight) {
        const W = t.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), W.distance = P.distance, W.decay = P.decay, P.castShadow) {
          const Y = P.shadow, Z = n.get(P);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, Z.shadowCameraNear = Y.camera.near, Z.shadowCameraFar = Y.camera.far, i.pointShadow[f] = Z, i.pointShadowMap[f] = Q, i.pointShadowMatrix[f] = P.shadow.matrix, w++;
        }
        i.point[f] = W, f++;
      } else if (P.isHemisphereLight) {
        const W = t.get(P);
        W.skyColor.copy(P.color).multiplyScalar(G), W.groundColor.copy(P.groundColor).multiplyScalar(G), i.hemi[g] = W, g++;
      }
    }
    y > 0 && (e.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_FLOAT_1, i.rectAreaLTC2 = pe.LTC_FLOAT_2) : (i.rectAreaLTC1 = pe.LTC_HALF_1, i.rectAreaLTC2 = pe.LTC_HALF_2)), i.ambient[0] = u, i.ambient[1] = d, i.ambient[2] = h;
    const L = i.hash;
    (L.sunLength !== m || L.directionalLength !== p || L.pointLength !== f || L.spotLength !== b || L.rectAreaLength !== y || L.hemiLength !== g || L.numSunShadows !== _ || L.numDirectionalShadows !== E || L.numPointShadows !== w || L.numSpotShadows !== C || L.numSpotMaps !== M || L.numLightProbes !== z) && (i.sun.length = m, i.directional.length = p, i.spot.length = b, i.rectArea.length = y, i.point.length = f, i.hemi.length = g, i.sunShadow.length = _, i.sunShadowMap.length = _, i.sunShadowMatrix.length = v, i.sunShadowCascade.length = v, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.directionalShadowMatrix.length = E, i.pointShadow.length = w, i.pointShadowMap.length = w, i.pointShadowMatrix.length = w, i.spotShadow.length = C, i.spotShadowMap.length = C, i.spotLightMatrix.length = C + M - T, i.spotLightMap.length = M, i.numSpotLightShadowsWithMaps = T, i.numLightProbes = z, L.sunLength = m, L.directionalLength = p, L.pointLength = f, L.spotLength = b, L.rectAreaLength = y, L.hemiLength = g, L.numSunShadows = _, L.numDirectionalShadows = E, L.numPointShadows = w, L.numSpotShadows = C, L.numSpotMaps = M, L.numLightProbes = z, i.version = ld++);
  }
  function c(l, u) {
    let d = 0, h = 0, m = 0, _ = 0, v = 0, p = 0;
    const f = u.matrixWorldInverse;
    for (let b = 0, y = l.length; b < y; b++) {
      const g = l[b];
      if (g.isSunLight) {
        const E = i.sun[d];
        E.direction.setFromMatrixPosition(g.matrixWorld), E.direction.transformDirection(f), d++;
      } else if (g.isDirectionalLight) {
        const E = i.directional[h];
        E.direction.setFromMatrixPosition(g.matrixWorld), r.setFromMatrixPosition(g.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), h++;
      } else if (g.isSpotLight) {
        const E = i.spot[_];
        E.position.setFromMatrixPosition(g.matrixWorld), E.position.applyMatrix4(f), E.direction.setFromMatrixPosition(g.matrixWorld), r.setFromMatrixPosition(g.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), _++;
      } else if (g.isRectAreaLight) {
        const E = i.rectArea[v];
        E.position.setFromMatrixPosition(g.matrixWorld), E.position.applyMatrix4(f), a.identity(), s.copy(g.matrixWorld), s.premultiply(f), a.extractRotation(s), E.halfWidth.set(g.width * 0.5, 0, 0), E.halfHeight.set(0, g.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), v++;
      } else if (g.isPointLight) {
        const E = i.point[m];
        E.position.setFromMatrixPosition(g.matrixWorld), E.position.applyMatrix4(f), m++;
      } else if (g.isHemisphereLight) {
        const E = i.hemi[p];
        E.direction.setFromMatrixPosition(g.matrixWorld), E.direction.transformDirection(f), p++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: i
  };
}
function Qa(e) {
  const t = new hd(e), n = [], i = [], r = [];
  function s(h) {
    d.camera = h, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function c(h) {
    r.push(h);
  }
  function l() {
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
    setupLights: l,
    setupLightsView: u,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function ud(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new Qa(e), t.set(r, [o])) : s >= a.length ? (o = new Qa(e), a.push(o)) : o = a[s], o;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
var fd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, dd = `uniform sampler2D shadow_pass;
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
}`, pd = [
  /* @__PURE__ */ new D(1, 0, 0),
  /* @__PURE__ */ new D(-1, 0, 0),
  /* @__PURE__ */ new D(0, 1, 0),
  /* @__PURE__ */ new D(0, -1, 0),
  /* @__PURE__ */ new D(0, 0, 1),
  /* @__PURE__ */ new D(0, 0, -1)
], md = [
  /* @__PURE__ */ new D(0, -1, 0),
  /* @__PURE__ */ new D(0, -1, 0),
  /* @__PURE__ */ new D(0, 0, 1),
  /* @__PURE__ */ new D(0, 0, -1),
  /* @__PURE__ */ new D(0, -1, 0),
  /* @__PURE__ */ new D(0, -1, 0)
], ja = /* @__PURE__ */ new ht(), Ci = /* @__PURE__ */ new D(), gs = /* @__PURE__ */ new D();
function gd(e, t, n) {
  let i = new Ps();
  const r = new de(), s = new de(), a = new vt(), o = new Dh(), c = new Oh(), l = {}, u = n.maxTextureSize, d = {
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
    vertexShader: fd,
    fragmentShader: dd
  }), m = h.clone();
  m.defines.HORIZONTAL_PASS = 1;
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
  const v = new ut(_, h), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let f = this.type;
  this.render = function(w, C, M) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || w.length === 0) return;
    this.type === 2 && (Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const T = e.getRenderTarget(), z = e.getActiveCubeFace(), L = e.getActiveMipmapLevel(), I = e.state;
    I.setBlending(0), I.buffers.depth.getReversed() === !0 ? I.buffers.color.setClear(0, 0, 0, 0) : I.buffers.color.setClear(1, 1, 1, 1), I.buffers.depth.setTest(!0), I.setScissorTest(!1);
    const q = f !== this.type;
    q && C.traverse(function(P) {
      P.material && (Array.isArray(P.material) ? P.material.forEach((R) => R.needsUpdate = !0) : P.material.needsUpdate = !0);
    });
    for (let P = 0, R = w.length; P < R; P++) {
      const G = w[P], U = G.shadow;
      if (U === void 0) {
        Fe("WebGLShadowMap:", G, "has no shadow.");
        continue;
      }
      if (U.autoUpdate === !1 && U.needsUpdate === !1) continue;
      r.copy(U.mapSize);
      const Q = U.getFrameExtents();
      r.multiply(Q), s.copy(U.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / Q.x), r.x = s.x * Q.x, U.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / Q.y), r.y = s.y * Q.y, U.mapSize.y = s.y));
      const W = e.state.buffers.depth.getReversed();
      if (U.camera._reversedDepth = W, U.map === null || q === !0) {
        if (U.map !== null && (U.map.depthTexture !== null && (U.map.depthTexture.dispose(), U.map.depthTexture = null), U.map.dispose()), this.type === 3) {
          if (G.isPointLight) {
            Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          U.map = new Yt(r.x, r.y, {
            format: Tr,
            type: En,
            minFilter: Ot,
            magFilter: Ot,
            generateMipmaps: !1
          }), U.map.texture.name = G.name + ".shadowMap", U.map.depthTexture = new Fi(r.x, r.y, Gi), U.map.depthTexture.name = G.name + ".shadowMapDepth", U.map.depthTexture.format = Oi, U.map.depthTexture.compareFunction = null, U.map.depthTexture.minFilter = Ct, U.map.depthTexture.magFilter = Ct;
        } else
          G.isPointLight ? (U.map = new cl(r.x), U.map.depthTexture = new Kc(r.x, Un)) : (U.map = new Yt(r.x, r.y), U.map.depthTexture = new Fi(r.x, r.y, Un)), U.map.depthTexture.name = G.name + ".shadowMap", U.map.depthTexture.format = Oi, this.type === 1 ? (U.map.depthTexture.compareFunction = W ? 518 : 515, U.map.depthTexture.minFilter = Ot, U.map.depthTexture.magFilter = Ot) : (U.map.depthTexture.compareFunction = null, U.map.depthTexture.minFilter = Ct, U.map.depthTexture.magFilter = Ct);
        U.camera.updateProjectionMatrix();
      }
      U.map.isWebGLCubeRenderTarget !== !0 && (U.map.width !== r.x || U.map.height !== r.y) && U.map.setSize(r.x, r.y);
      const Y = U.map.isWebGLCubeRenderTarget ? 6 : U.getViewportCount();
      G.isPointLight !== !0 && U.updateMatrices(G, M);
      for (let Z = 0; Z < Y; Z++) {
        const Le = U.getCamera(Z);
        if (G.isPointLight) {
          const we = U.camera, rt = U.matrix, Ge = G.distance || we.far;
          Ge !== we.far && (we.far = Ge, we.updateProjectionMatrix()), Ci.setFromMatrixPosition(G.matrixWorld), we.position.copy(Ci), gs.copy(we.position), gs.add(pd[Z]), we.up.copy(md[Z]), we.lookAt(gs), we.updateMatrixWorld(), rt.makeTranslation(-Ci.x, -Ci.y, -Ci.z), ja.multiplyMatrices(we.projectionMatrix, we.matrixWorldInverse), U._frustum.setFromProjectionMatrix(ja, we.coordinateSystem, we.reversedDepth);
        }
        if (U.map.isWebGLCubeRenderTarget)
          e.setRenderTarget(U.map, Z), e.clear();
        else {
          Z === 0 && (e.setRenderTarget(U.map), e.clear());
          const we = U.getViewport(Z);
          a.set(s.x * we.x, s.y * we.y, s.x * we.z, s.y * we.w), I.viewport(a);
        }
        i = U.getFrustum(Z), g(C, M, Le, G, this.type);
      }
      U.isPointLightShadow !== !0 && this.type === 3 && b(U, M), U.needsUpdate = !1;
    }
    f = this.type, p.needsUpdate = !1, e.setRenderTarget(T, z, L);
  };
  function b(w, C) {
    const M = t.update(v);
    h.defines.VSM_SAMPLES !== w.blurSamples && (h.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, h.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null ? w.mapPass = new Yt(r.x, r.y, {
      format: Tr,
      type: En
    }) : (w.mapPass.width !== w.map.width || w.mapPass.height !== w.map.height) && w.mapPass.setSize(w.map.width, w.map.height), h.uniforms.shadow_pass.value = w.map.depthTexture, h.uniforms.resolution.value.set(w.map.width, w.map.height), h.uniforms.radius.value = w.radius, e.setRenderTarget(w.mapPass), e.clear(), e.renderBufferDirect(C, null, M, h, v, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value.set(w.map.width, w.map.height), m.uniforms.radius.value = w.radius, e.setRenderTarget(w.map), e.clear(), e.renderBufferDirect(C, null, M, m, v, null);
  }
  function y(w, C, M, T) {
    let z = null;
    const L = M.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (L !== void 0) z = L;
    else if (z = M.isPointLight === !0 ? c : o, e.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
      const I = z.uuid, q = C.uuid;
      let P = l[I];
      P === void 0 && (P = {}, l[I] = P);
      let R = P[q];
      R === void 0 && (R = z.clone(), P[q] = R, C.addEventListener("dispose", E)), z = R;
    }
    if (z.visible = C.visible, z.wireframe = C.wireframe, T === 3 ? z.side = C.shadowSide !== null ? C.shadowSide : C.side : z.side = C.shadowSide !== null ? C.shadowSide : d[C.side], z.alphaMap = C.alphaMap, z.alphaTest = C.alphaToCoverage === !0 ? 0.5 : C.alphaTest, z.map = C.map, z.clipShadows = C.clipShadows, z.clippingPlanes = C.clippingPlanes, z.clipIntersection = C.clipIntersection, z.displacementMap = C.displacementMap, z.displacementScale = C.displacementScale, z.displacementBias = C.displacementBias, z.wireframeLinewidth = C.wireframeLinewidth, z.linewidth = C.linewidth, M.isPointLight === !0 && z.isMeshDistanceMaterial === !0) {
      const I = e.properties.get(z);
      I.light = M;
    }
    return z;
  }
  function g(w, C, M, T, z) {
    if (w.visible === !1) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && z === 3) && (!w.frustumCulled || w.intersectsFrustum(i))) {
      w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse, w.matrixWorld);
      const I = t.update(w), q = w.material;
      if (Array.isArray(q)) {
        const P = I.groups;
        for (let R = 0, G = P.length; R < G; R++) {
          const U = P[R], Q = q[U.materialIndex];
          if (Q && Q.visible) {
            const W = y(w, Q, T, z);
            w.onBeforeShadow(e, w, C, M, I, W, U), e.renderBufferDirect(M, null, I, W, w, U), w.onAfterShadow(e, w, C, M, I, W, U);
          }
        }
      } else if (q.visible) {
        const P = y(w, q, T, z);
        w.onBeforeShadow(e, w, C, M, I, P, null), e.renderBufferDirect(M, null, I, P, w, null), w.onAfterShadow(e, w, C, M, I, P, null);
      }
    }
    const L = w.children;
    for (let I = 0, q = L.length; I < q; I++) g(L[I], C, M, T, z);
  }
  function E(w) {
    w.target.removeEventListener("dispose", E);
    for (const C in l) {
      const M = l[C], T = w.target.uuid;
      T in M && (M[T].dispose(), delete M[T]);
    }
  }
}
function vd(e, t) {
  function n() {
    let B = !1;
    const $ = new vt();
    let ne = null;
    const Me = new vt(0, 0, 0, 0);
    return {
      setMask: function(be) {
        ne !== be && !B && (e.colorMask(be, be, be, be), ne = be);
      },
      setLocked: function(be) {
        B = be;
      },
      setClear: function(be, ie, ge, Oe, St) {
        St === !0 && (be *= Oe, ie *= Oe, ge *= Oe), $.set(be, ie, ge, Oe), Me.equals($) === !1 && (e.clearColor(be, ie, ge, Oe), Me.copy($));
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
          const Oe = be;
          be = null, this.setClear(Oe);
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
        if ($ && (ie = yc[ie]), Me !== ie) {
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
    let B = !1, $ = null, ne = null, Me = null, be = null, ie = null, ge = null, Oe = null, St = null;
    return {
      setTest: function(nt) {
        B || (nt ? ae(e.STENCIL_TEST) : Ce(e.STENCIL_TEST));
      },
      setMask: function(nt) {
        $ !== nt && !B && (e.stencilMask(nt), $ = nt);
      },
      setFunc: function(nt, Kt, rn) {
        (ne !== nt || Me !== Kt || be !== rn) && (e.stencilFunc(nt, Kt, rn), ne = nt, Me = Kt, be = rn);
      },
      setOp: function(nt, Kt, rn) {
        (ie !== nt || ge !== Kt || Oe !== rn) && (e.stencilOp(nt, Kt, rn), ie = nt, ge = Kt, Oe = rn);
      },
      setLocked: function(nt) {
        B = nt;
      },
      setClear: function(nt) {
        St !== nt && (e.clearStencil(nt), St = nt);
      },
      reset: function() {
        B = !1, $ = null, ne = null, Me = null, be = null, ie = null, ge = null, Oe = null, St = null;
      }
    };
  }
  const s = new n(), a = new i(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, h = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], v = null, p = !1, f = null, b = null, y = null, g = null, E = null, w = null, C = null, M = new Xe(0, 0, 0), T = 0, z = !1, L = null, I = null, q = null, P = null, R = null;
  const G = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let U = !1, Q = 0;
  const W = e.getParameter(e.VERSION);
  W.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(W)[1]), U = Q >= 1) : W.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), U = Q >= 2);
  let Y = null, Z = {};
  const Le = e.getParameter(e.SCISSOR_BOX), we = e.getParameter(e.VIEWPORT), rt = new vt().fromArray(Le), Ge = new vt().fromArray(we);
  function J(B, $, ne, Me) {
    const be = new Uint8Array(4), ie = e.createTexture();
    e.bindTexture(B, ie), e.texParameteri(B, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(B, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let ge = 0; ge < ne; ge++) B === e.TEXTURE_3D || B === e.TEXTURE_2D_ARRAY ? e.texImage3D($, 0, e.RGBA, 1, 1, Me, 0, e.RGBA, e.UNSIGNED_BYTE, be) : e.texImage2D($ + ge, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, be);
    return ie;
  }
  const re = {};
  re[e.TEXTURE_2D] = J(e.TEXTURE_2D, e.TEXTURE_2D, 1), re[e.TEXTURE_CUBE_MAP] = J(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), re[e.TEXTURE_2D_ARRAY] = J(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), re[e.TEXTURE_3D] = J(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ae(e.DEPTH_TEST), a.setFunc(3), _e(!1), Re(1), ae(e.CULL_FACE), le(0);
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
      ne = m.get($), ne === void 0 && (ne = [], m.set($, ne));
      const be = B.textures;
      if (ne.length !== be.length || ne[0] !== e.COLOR_ATTACHMENT0) {
        for (let ie = 0, ge = be.length; ie < ge; ie++) ne[ie] = e.COLOR_ATTACHMENT0 + ie;
        ne.length = be.length, Me = !0;
      }
    } else ne[0] !== e.BACK && (ne[0] = e.BACK, Me = !0);
    Me && e.drawBuffers(ne);
  }
  function qe(B) {
    return v !== B ? (e.useProgram(B), v = B, !0) : !1;
  }
  const ee = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  ee[103] = e.MIN, ee[104] = e.MAX;
  const j = {
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
  function le(B, $, ne, Me, be, ie, ge, Oe, St, nt) {
    if (B === 0) {
      p === !0 && (Ce(e.BLEND), p = !1);
      return;
    }
    if (p === !1 && (ae(e.BLEND), p = !0), B !== 5) {
      if (B !== f || nt !== z) {
        if ((b !== 100 || E !== 100) && (e.blendEquation(e.FUNC_ADD), b = 100, E = 100), nt) switch (B) {
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
        y = null, g = null, w = null, C = null, M.set(0, 0, 0), T = 0, f = B, z = nt;
      }
      return;
    }
    be = be || $, ie = ie || ne, ge = ge || Me, ($ !== b || be !== E) && (e.blendEquationSeparate(ee[$], ee[be]), b = $, E = be), (ne !== y || Me !== g || ie !== w || ge !== C) && (e.blendFuncSeparate(j[ne], j[Me], j[ie], j[ge]), y = ne, g = Me, w = ie, C = ge), (Oe.equals(M) === !1 || St !== T) && (e.blendColor(Oe.r, Oe.g, Oe.b, St), M.copy(Oe), T = St), f = B, z = !1;
  }
  function ve(B, $) {
    B.side === 2 ? Ce(e.CULL_FACE) : ae(e.CULL_FACE);
    let ne = B.side === 1;
    $ && (ne = !ne), _e(ne), B.blending === 1 && B.transparent === !1 ? le(0) : le(B.blending, B.blendEquation, B.blendSrc, B.blendDst, B.blendEquationAlpha, B.blendSrcAlpha, B.blendDstAlpha, B.blendColor, B.blendAlpha, B.premultipliedAlpha), a.setFunc(B.depthFunc), a.setTest(B.depthTest), a.setMask(B.depthWrite), s.setMask(B.colorWrite);
    const Me = B.stencilWrite;
    o.setTest(Me), Me && (o.setMask(B.stencilWriteMask), o.setFunc(B.stencilFunc, B.stencilRef, B.stencilFuncMask), o.setOp(B.stencilFail, B.stencilZFail, B.stencilZPass)), Ve(B.polygonOffset, B.polygonOffsetFactor, B.polygonOffsetUnits), B.alphaToCoverage === !0 ? ae(e.SAMPLE_ALPHA_TO_COVERAGE) : Ce(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function _e(B) {
    L !== B && (B ? e.frontFace(e.CW) : e.frontFace(e.CCW), L = B);
  }
  function Re(B) {
    B !== 0 ? (ae(e.CULL_FACE), B !== I && (B === 1 ? e.cullFace(e.BACK) : B === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : Ce(e.CULL_FACE), I = B;
  }
  function Ie(B) {
    B !== q && (U && e.lineWidth(B), q = B);
  }
  function Ve(B, $, ne) {
    B ? (ae(e.POLYGON_OFFSET_FILL), (P !== $ || R !== ne) && (P = $, R = ne, a.getReversed() && ($ = -$), e.polygonOffset($, ne))) : Ce(e.POLYGON_OFFSET_FILL);
  }
  function He(B) {
    B ? ae(e.SCISSOR_TEST) : Ce(e.SCISSOR_TEST);
  }
  function N(B) {
    B === void 0 && (B = e.TEXTURE0 + G - 1), Y !== B && (e.activeTexture(B), Y = B);
  }
  function lt(B, $, ne) {
    ne === void 0 && (Y === null ? ne = e.TEXTURE0 + G - 1 : ne = Y);
    let Me = Z[ne];
    Me === void 0 && (Me = {
      type: void 0,
      texture: void 0
    }, Z[ne] = Me), (Me.type !== B || Me.texture !== $) && (Y !== ne && (e.activeTexture(ne), Y = ne), e.bindTexture(B, $ || re[B]), Me.type = B, Me.texture = $);
  }
  function Qe() {
    const B = Z[Y];
    B !== void 0 && B.type !== void 0 && (e.bindTexture(B.type, null), B.type = void 0, B.texture = void 0);
  }
  function Je() {
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
  function S() {
    try {
      e.texSubImage2D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function O() {
    try {
      e.texSubImage3D(...arguments);
    } catch (B) {
      Be("WebGLState:", B);
    }
  }
  function X() {
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
  function V() {
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
    let ne = l.get($);
    ne === void 0 && (ne = /* @__PURE__ */ new WeakMap(), l.set($, ne));
    let Me = ne.get(B);
    Me === void 0 && (Me = e.getUniformBlockIndex($, B.name), ne.set(B, Me));
  }
  function ze(B, $) {
    const ne = l.get($).get(B);
    c.get($) !== ne && (e.uniformBlockBinding($, ne, B.__bindingPointIndex), c.set($, ne));
  }
  function je() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), a.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, Y = null, Z = {}, h = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], v = null, p = !1, f = null, b = null, y = null, g = null, E = null, w = null, C = null, M = new Xe(0, 0, 0), T = 0, z = !1, L = null, I = null, q = null, P = null, R = null, rt.set(0, 0, e.canvas.width, e.canvas.height), Ge.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), a.reset(), o.reset();
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
    useProgram: qe,
    setBlending: le,
    setMaterial: ve,
    setFlipSided: _e,
    setCullFace: Re,
    setLineWidth: Ie,
    setPolygonOffset: Ve,
    setScissorTest: He,
    activeTexture: N,
    bindTexture: lt,
    unbindTexture: Qe,
    compressedTexImage2D: Je,
    compressedTexImage3D: A,
    texImage2D: V,
    texImage3D: ce,
    pixelStorei: Te,
    getParameter: Se,
    updateUBOMapping: Ne,
    uniformBlockBinding: ze,
    texStorage2D: oe,
    texStorage3D: fe,
    texSubImage2D: S,
    texSubImage3D: O,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: te,
    scissor: se,
    viewport: Ee,
    reset: je
  };
}
function _d(e, t, n, i, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new de(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set();
  let h;
  const m = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(A, S) {
    return _ ? new OffscreenCanvas(A, S) : Rr("canvas");
  }
  function p(A, S, O) {
    let X = 1;
    const te = Je(A);
    if ((te.width > O || te.height > O) && (X = O / Math.max(te.width, te.height)), X < 1) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
      const oe = Math.floor(X * te.width), fe = Math.floor(X * te.height);
      h === void 0 && (h = v(oe, fe));
      const V = S ? v(oe, fe) : h;
      return V.width = oe, V.height = fe, V.getContext("2d").drawImage(A, 0, 0, oe, fe), Fe("WebGLRenderer: Texture has been resized from (" + te.width + "x" + te.height + ") to (" + oe + "x" + fe + ")."), V;
    } else
      return "data" in A && Fe("WebGLRenderer: Image in DataTexture is too big (" + te.width + "x" + te.height + ")."), A;
    return A;
  }
  function f(A) {
    return A.generateMipmaps;
  }
  function b(A) {
    e.generateMipmap(A);
  }
  function y(A) {
    return A.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? e.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function g(A, S, O, X, te, oe = !1) {
    if (A !== null) {
      if (e[A] !== void 0) return e[A];
      Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let fe;
    X && (fe = t.get("EXT_texture_norm16"), fe || Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let V = S;
    if (S === e.RED && (O === e.FLOAT && (V = e.R32F), O === e.HALF_FLOAT && (V = e.R16F), O === e.UNSIGNED_BYTE && (V = e.R8), O === e.UNSIGNED_SHORT && fe && (V = fe.R16_EXT), O === e.SHORT && fe && (V = fe.R16_SNORM_EXT)), S === e.RED_INTEGER && (O === e.UNSIGNED_BYTE && (V = e.R8UI), O === e.UNSIGNED_SHORT && (V = e.R16UI), O === e.UNSIGNED_INT && (V = e.R32UI), O === e.BYTE && (V = e.R8I), O === e.SHORT && (V = e.R16I), O === e.INT && (V = e.R32I)), S === e.RG && (O === e.FLOAT && (V = e.RG32F), O === e.HALF_FLOAT && (V = e.RG16F), O === e.UNSIGNED_BYTE && (V = e.RG8), O === e.UNSIGNED_SHORT && fe && (V = fe.RG16_EXT), O === e.SHORT && fe && (V = fe.RG16_SNORM_EXT)), S === e.RG_INTEGER && (O === e.UNSIGNED_BYTE && (V = e.RG8UI), O === e.UNSIGNED_SHORT && (V = e.RG16UI), O === e.UNSIGNED_INT && (V = e.RG32UI), O === e.BYTE && (V = e.RG8I), O === e.SHORT && (V = e.RG16I), O === e.INT && (V = e.RG32I)), S === e.RGB_INTEGER && (O === e.UNSIGNED_BYTE && (V = e.RGB8UI), O === e.UNSIGNED_SHORT && (V = e.RGB16UI), O === e.UNSIGNED_INT && (V = e.RGB32UI), O === e.BYTE && (V = e.RGB8I), O === e.SHORT && (V = e.RGB16I), O === e.INT && (V = e.RGB32I)), S === e.RGBA_INTEGER && (O === e.UNSIGNED_BYTE && (V = e.RGBA8UI), O === e.UNSIGNED_SHORT && (V = e.RGBA16UI), O === e.UNSIGNED_INT && (V = e.RGBA32UI), O === e.BYTE && (V = e.RGBA8I), O === e.SHORT && (V = e.RGBA16I), O === e.INT && (V = e.RGBA32I)), S === e.RGB && (O === e.UNSIGNED_SHORT && fe && (V = fe.RGB16_EXT), O === e.SHORT && fe && (V = fe.RGB16_SNORM_EXT), O === e.UNSIGNED_INT_5_9_9_9_REV && (V = e.RGB9_E5), O === e.UNSIGNED_INT_10F_11F_11F_REV && (V = e.R11F_G11F_B10F)), S === e.RGBA) {
      const ce = oe ? Ar : $e.getTransfer(te);
      O === e.FLOAT && (V = e.RGBA32F), O === e.HALF_FLOAT && (V = e.RGBA16F), O === e.UNSIGNED_BYTE && (V = ce === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), O === e.UNSIGNED_SHORT && fe && (V = fe.RGBA16_EXT), O === e.SHORT && fe && (V = fe.RGBA16_SNORM_EXT), O === e.UNSIGNED_SHORT_4_4_4_4 && (V = e.RGBA4), O === e.UNSIGNED_SHORT_5_5_5_1 && (V = e.RGB5_A1);
    }
    return (V === e.R16F || V === e.R32F || V === e.RG16F || V === e.RG32F || V === e.RGBA16F || V === e.RGBA32F) && t.get("EXT_color_buffer_float"), V;
  }
  function E(A, S) {
    let O;
    return A ? S === null || S === 1014 || S === 1020 ? O = e.DEPTH24_STENCIL8 : S === 1015 ? O = e.DEPTH32F_STENCIL8 : S === 1012 && (O = e.DEPTH24_STENCIL8, Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : S === null || S === 1014 || S === 1020 ? O = e.DEPTH_COMPONENT24 : S === 1015 ? O = e.DEPTH_COMPONENT32F : S === 1012 && (O = e.DEPTH_COMPONENT16), O;
  }
  function w(A, S) {
    return f(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(S.width, S.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? S.mipmaps.length : 1;
  }
  function C(A) {
    const S = A.target;
    S.removeEventListener("dispose", C), T(S), S.isVideoTexture && u.delete(S), S.isHTMLTexture && d.delete(S);
  }
  function M(A) {
    const S = A.target;
    S.removeEventListener("dispose", M), L(S);
  }
  function T(A) {
    const S = i.get(A);
    if (S.__webglInit === void 0) return;
    const O = A.source, X = m.get(O);
    if (X) {
      const te = X[S.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && z(A), Object.keys(X).length === 0 && m.delete(O);
    }
    i.remove(A);
  }
  function z(A) {
    const S = i.get(A);
    e.deleteTexture(S.__webglTexture);
    const O = A.source, X = m.get(O);
    delete X[S.__cacheKey], a.memory.textures--;
  }
  function L(A) {
    const S = i.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), i.remove(A.depthTexture)), A.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(S.__webglFramebuffer[X])) for (let te = 0; te < S.__webglFramebuffer[X].length; te++) e.deleteFramebuffer(S.__webglFramebuffer[X][te]);
      else e.deleteFramebuffer(S.__webglFramebuffer[X]);
      S.__webglDepthbuffer && e.deleteRenderbuffer(S.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(S.__webglFramebuffer)) for (let X = 0; X < S.__webglFramebuffer.length; X++) e.deleteFramebuffer(S.__webglFramebuffer[X]);
      else e.deleteFramebuffer(S.__webglFramebuffer);
      if (S.__webglDepthbuffer && e.deleteRenderbuffer(S.__webglDepthbuffer), S.__webglMultisampledFramebuffer && e.deleteFramebuffer(S.__webglMultisampledFramebuffer), S.__webglColorRenderbuffer)
        for (let X = 0; X < S.__webglColorRenderbuffer.length; X++) S.__webglColorRenderbuffer[X] && e.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);
      S.__webglDepthRenderbuffer && e.deleteRenderbuffer(S.__webglDepthRenderbuffer);
    }
    const O = A.textures;
    for (let X = 0, te = O.length; X < te; X++) {
      const oe = i.get(O[X]);
      oe.__webglTexture && (e.deleteTexture(oe.__webglTexture), a.memory.textures--), i.remove(O[X]);
    }
    i.remove(A);
  }
  let I = 0;
  function q() {
    I = 0;
  }
  function P() {
    return I;
  }
  function R(A) {
    I = A;
  }
  function G() {
    const A = I;
    return A >= r.maxTextures && Fe("WebGLTextures: Trying to use " + (A + 1) + " texture units while this GPU supports only " + r.maxTextures), I += 1, A;
  }
  function U(A) {
    const S = [];
    return S.push(A.wrapS), S.push(A.wrapT), S.push(A.wrapR || 0), S.push(A.magFilter), S.push(A.minFilter), S.push(A.anisotropy), S.push(A.internalFormat), S.push(A.format), S.push(A.type), S.push(A.generateMipmaps), S.push(A.premultiplyAlpha), S.push(A.flipY), S.push(A.unpackAlignment), S.push(A.colorSpace), S.join();
  }
  function Q(A, S) {
    const O = i.get(A);
    if (A.isVideoTexture && lt(A), A.isRenderTargetTexture === !1 && A.isExternalTexture !== !0 && A.version > 0 && O.__version !== A.version) {
      const X = A.image;
      if (X === null) Fe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === !1) Fe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ce(O, A, S);
        return;
      }
    } else A.isExternalTexture && (O.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D, O.__webglTexture, e.TEXTURE0 + S);
  }
  function W(A, S) {
    const O = i.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && O.__version !== A.version) {
      Ce(O, A, S);
      return;
    } else A.isExternalTexture && (O.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D_ARRAY, O.__webglTexture, e.TEXTURE0 + S);
  }
  function Y(A, S) {
    const O = i.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && O.__version !== A.version) {
      Ce(O, A, S);
      return;
    }
    n.bindTexture(e.TEXTURE_3D, O.__webglTexture, e.TEXTURE0 + S);
  }
  function Z(A, S) {
    const O = i.get(A);
    if (A.isCubeDepthTexture !== !0 && A.version > 0 && O.__version !== A.version) {
      Ue(O, A, S);
      return;
    }
    n.bindTexture(e.TEXTURE_CUBE_MAP, O.__webglTexture, e.TEXTURE0 + S);
  }
  const Le = {
    [Er]: e.REPEAT,
    [fn]: e.CLAMP_TO_EDGE,
    [_s]: e.MIRRORED_REPEAT
  }, we = {
    [Ct]: e.NEAREST,
    [Tl]: e.NEAREST_MIPMAP_NEAREST,
    [bl]: e.NEAREST_MIPMAP_LINEAR,
    [Ot]: e.LINEAR,
    [Al]: e.LINEAR_MIPMAP_NEAREST,
    [Rs]: e.LINEAR_MIPMAP_LINEAR
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
  function Ge(A, S) {
    if (S.type === 1015 && t.has("OES_texture_float_linear") === !1 && (S.magFilter === 1006 || S.magFilter === 1007 || S.magFilter === 1005 || S.magFilter === 1008 || S.minFilter === 1006 || S.minFilter === 1007 || S.minFilter === 1005 || S.minFilter === 1008) && Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(A, e.TEXTURE_WRAP_S, Le[S.wrapS]), e.texParameteri(A, e.TEXTURE_WRAP_T, Le[S.wrapT]), (A === e.TEXTURE_3D || A === e.TEXTURE_2D_ARRAY) && e.texParameteri(A, e.TEXTURE_WRAP_R, Le[S.wrapR]), e.texParameteri(A, e.TEXTURE_MAG_FILTER, we[S.magFilter]), e.texParameteri(A, e.TEXTURE_MIN_FILTER, we[S.minFilter]), S.compareFunction && (e.texParameteri(A, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(A, e.TEXTURE_COMPARE_FUNC, rt[S.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (S.magFilter === 1003 || S.minFilter !== 1005 && S.minFilter !== 1008 || S.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (S.anisotropy > 1 || i.get(S).__currentAnisotropy) {
        const O = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(A, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, r.getMaxAnisotropy())), i.get(S).__currentAnisotropy = S.anisotropy;
      }
    }
  }
  function J(A, S) {
    let O = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, S.addEventListener("dispose", C));
    const X = S.source;
    let te = m.get(X);
    te === void 0 && (te = {}, m.set(X, te));
    const oe = U(S);
    if (oe !== A.__cacheKey) {
      te[oe] === void 0 && (te[oe] = {
        texture: e.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, O = !0), te[oe].usedTimes++;
      const fe = te[A.__cacheKey];
      fe !== void 0 && (te[A.__cacheKey].usedTimes--, fe.usedTimes === 0 && z(S)), A.__cacheKey = oe, A.__webglTexture = te[oe].texture;
    }
    return O;
  }
  function re(A, S, O) {
    return Math.floor(Math.floor(A / O) / S);
  }
  function ae(A, S, O, X) {
    const oe = A.updateRanges;
    if (oe.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, S.width, S.height, O, X, S.data);
    else {
      oe.sort((Te, se) => Te.start - se.start);
      let fe = 0;
      for (let Te = 1; Te < oe.length; Te++) {
        const se = oe[fe], Ee = oe[Te], Ne = se.start + se.count, ze = re(Ee.start, S.width, 4), je = re(se.start, S.width, 4);
        Ee.start <= Ne + 1 && ze === je && re(Ee.start + Ee.count - 1, S.width, 4) === ze ? se.count = Math.max(se.count, Ee.start + Ee.count - se.start) : (++fe, oe[fe] = Ee);
      }
      oe.length = fe + 1;
      const V = n.getParameter(e.UNPACK_ROW_LENGTH), ce = n.getParameter(e.UNPACK_SKIP_PIXELS), Se = n.getParameter(e.UNPACK_SKIP_ROWS);
      n.pixelStorei(e.UNPACK_ROW_LENGTH, S.width);
      for (let Te = 0, se = oe.length; Te < se; Te++) {
        const Ee = oe[Te], Ne = Math.floor(Ee.start / 4), ze = Math.ceil(Ee.count / 4), je = Ne % S.width, B = Math.floor(Ne / S.width), $ = ze, ne = 1;
        n.pixelStorei(e.UNPACK_SKIP_PIXELS, je), n.pixelStorei(e.UNPACK_SKIP_ROWS, B), n.texSubImage2D(e.TEXTURE_2D, 0, je, B, $, ne, O, X, S.data);
      }
      A.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, V), n.pixelStorei(e.UNPACK_SKIP_PIXELS, ce), n.pixelStorei(e.UNPACK_SKIP_ROWS, Se);
    }
  }
  function Ce(A, S, O) {
    let X = e.TEXTURE_2D;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (X = e.TEXTURE_2D_ARRAY), S.isData3DTexture && (X = e.TEXTURE_3D);
    const te = J(A, S), oe = S.source;
    n.bindTexture(X, A.__webglTexture, e.TEXTURE0 + O);
    const fe = i.get(oe);
    if (oe.version !== fe.__version || te === !0) {
      if (n.activeTexture(e.TEXTURE0 + O), !(typeof ImageBitmap < "u" && S.image instanceof ImageBitmap)) {
        const $ = $e.getPrimaries($e.workingColorSpace), ne = S.colorSpace === "" ? null : $e.getPrimaries(S.colorSpace), Me = S.colorSpace === "" || $ === ne ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, S.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, Me);
      }
      n.pixelStorei(e.UNPACK_ALIGNMENT, S.unpackAlignment);
      let V = p(S.image, !1, r.maxTextureSize);
      V = Qe(S, V);
      const ce = s.convert(S.format, S.colorSpace), Se = s.convert(S.type);
      let Te = g(S.internalFormat, ce, Se, S.normalized, S.colorSpace, S.isVideoTexture);
      Ge(X, S);
      let se;
      const Ee = S.mipmaps, Ne = S.isVideoTexture !== !0, ze = fe.__version === void 0 || te === !0, je = oe.dataReady, B = w(S, V);
      if (S.isDepthTexture)
        Te = E(S.format === oo, S.type), ze && (Ne ? n.texStorage2D(e.TEXTURE_2D, 1, Te, V.width, V.height) : n.texImage2D(e.TEXTURE_2D, 0, Te, V.width, V.height, 0, ce, Se, null));
      else if (S.isDataTexture) if (Ee.length > 0) {
        Ne && ze && n.texStorage2D(e.TEXTURE_2D, B, Te, Ee[0].width, Ee[0].height);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, Se, se.data) : n.texImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, ce, Se, se.data);
        S.generateMipmaps = !1;
      } else Ne ? (ze && n.texStorage2D(e.TEXTURE_2D, B, Te, V.width, V.height), je && ae(S, V, ce, Se)) : n.texImage2D(e.TEXTURE_2D, 0, Te, V.width, V.height, 0, ce, Se, V.data);
      else if (S.isCompressedTexture) if (S.isCompressedArrayTexture) {
        Ne && ze && n.texStorage3D(e.TEXTURE_2D_ARRAY, B, Te, Ee[0].width, Ee[0].height, V.depth);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          if (se = Ee[$], S.format !== 1023) if (ce !== null) if (Ne) {
            if (je) if (S.layerUpdates.size > 0) {
              const Me = Ia(se.width, se.height, S.format, S.type);
              for (const be of S.layerUpdates) {
                const ie = se.data.subarray(be * Me / se.data.BYTES_PER_ELEMENT, (be + 1) * Me / se.data.BYTES_PER_ELEMENT);
                n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, be, se.width, se.height, 1, ce, ie);
              }
            } else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, V.depth, ce, se.data);
          } else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, $, Te, se.width, se.height, V.depth, 0, se.data, 0, 0);
          else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else Ne ? je && n.texSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, V.depth, ce, Se, se.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, $, Te, se.width, se.height, V.depth, 0, ce, Se, se.data);
        S.layerUpdates.size > 0 && S.clearLayerUpdates();
      } else {
        Ne && ze && n.texStorage2D(e.TEXTURE_2D, B, Te, Ee[0].width, Ee[0].height);
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], S.format !== 1023 ? ce !== null ? Ne ? je && n.compressedTexSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, se.data) : n.compressedTexImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, se.data) : Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, ce, Se, se.data) : n.texImage2D(e.TEXTURE_2D, $, Te, se.width, se.height, 0, ce, Se, se.data);
      }
      else if (S.isDataArrayTexture) if (Ne) {
        if (ze && n.texStorage3D(e.TEXTURE_2D_ARRAY, B, Te, V.width, V.height, V.depth), je) if (S.layerUpdates.size > 0) {
          const $ = Ia(V.width, V.height, S.format, S.type);
          for (const ne of S.layerUpdates) {
            const Me = V.data.subarray(ne * $ / V.data.BYTES_PER_ELEMENT, (ne + 1) * $ / V.data.BYTES_PER_ELEMENT);
            n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, ne, V.width, V.height, 1, ce, Se, Me);
          }
          S.clearLayerUpdates();
        } else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, V.width, V.height, V.depth, ce, Se, V.data);
      } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, Te, V.width, V.height, V.depth, 0, ce, Se, V.data);
      else if (S.isData3DTexture) Ne ? (ze && n.texStorage3D(e.TEXTURE_3D, B, Te, V.width, V.height, V.depth), je && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, V.width, V.height, V.depth, ce, Se, V.data)) : n.texImage3D(e.TEXTURE_3D, 0, Te, V.width, V.height, V.depth, 0, ce, Se, V.data);
      else if (S.isFramebufferTexture) {
        if (ze) if (Ne) n.texStorage2D(e.TEXTURE_2D, B, Te, V.width, V.height);
        else {
          let $ = V.width, ne = V.height;
          for (let Me = 0; Me < B; Me++)
            n.texImage2D(e.TEXTURE_2D, Me, Te, $, ne, 0, ce, Se, null), $ >>= 1, ne >>= 1;
        }
      } else if (S.isHTMLTexture) {
        if ("texElementImage2D" in e) {
          const $ = e.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), V.parentNode !== $) {
            $.appendChild(V), d.add(S), $.onpaint = (ne) => {
              const Me = ne.changedElements;
              for (const be of d) Me.includes(be.image) && (be.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, V);
          else {
            const Me = e.RGBA, be = e.RGBA, ie = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, Me, be, ie, V);
          }
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
      } else if (Ee.length > 0) {
        if (Ne && ze) {
          const $ = Je(Ee[0]);
          n.texStorage2D(e.TEXTURE_2D, B, Te, $.width, $.height);
        }
        for (let $ = 0, ne = Ee.length; $ < ne; $++)
          se = Ee[$], Ne ? je && n.texSubImage2D(e.TEXTURE_2D, $, 0, 0, ce, Se, se) : n.texImage2D(e.TEXTURE_2D, $, Te, ce, Se, se);
        S.generateMipmaps = !1;
      } else if (Ne) {
        if (ze) {
          const $ = Je(V);
          n.texStorage2D(e.TEXTURE_2D, B, Te, $.width, $.height);
        }
        je && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, ce, Se, V);
      } else n.texImage2D(e.TEXTURE_2D, 0, Te, ce, Se, V);
      f(S) && b(X), fe.__version = oe.version, S.onUpdate && S.onUpdate(S);
    }
    A.__version = S.version;
  }
  function Ue(A, S, O) {
    if (S.image.length !== 6) return;
    const X = J(A, S), te = S.source;
    n.bindTexture(e.TEXTURE_CUBE_MAP, A.__webglTexture, e.TEXTURE0 + O);
    const oe = i.get(te);
    if (te.version !== oe.__version || X === !0) {
      n.activeTexture(e.TEXTURE0 + O);
      const fe = $e.getPrimaries($e.workingColorSpace), V = S.colorSpace === "" ? null : $e.getPrimaries(S.colorSpace), ce = S.colorSpace === "" || fe === V ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, S.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, S.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Se = S.isCompressedTexture || S.image[0].isCompressedTexture, Te = S.image[0] && S.image[0].isDataTexture, se = [];
      for (let ie = 0; ie < 6; ie++)
        !Se && !Te ? se[ie] = p(S.image[ie], !0, r.maxCubemapSize) : se[ie] = Te ? S.image[ie].image : S.image[ie], se[ie] = Qe(S, se[ie]);
      const Ee = se[0], Ne = s.convert(S.format, S.colorSpace), ze = s.convert(S.type), je = g(S.internalFormat, Ne, ze, S.normalized, S.colorSpace), B = S.isVideoTexture !== !0, $ = oe.__version === void 0 || X === !0, ne = te.dataReady;
      let Me = w(S, Ee);
      Ge(e.TEXTURE_CUBE_MAP, S);
      let be;
      if (Se) {
        B && $ && n.texStorage2D(e.TEXTURE_CUBE_MAP, Me, je, Ee.width, Ee.height);
        for (let ie = 0; ie < 6; ie++) {
          be = se[ie].mipmaps;
          for (let ge = 0; ge < be.length; ge++) {
            const Oe = be[ge];
            S.format !== 1023 ? Ne !== null ? B ? ne && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, 0, 0, Oe.width, Oe.height, Ne, Oe.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, je, Oe.width, Oe.height, 0, Oe.data) : Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, 0, 0, Oe.width, Oe.height, Ne, ze, Oe.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge, je, Oe.width, Oe.height, 0, Ne, ze, Oe.data);
          }
        }
      } else {
        if (be = S.mipmaps, B && $) {
          be.length > 0 && Me++;
          const ie = Je(se[0]);
          n.texStorage2D(e.TEXTURE_CUBE_MAP, Me, je, ie.width, ie.height);
        }
        for (let ie = 0; ie < 6; ie++) if (Te) {
          B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, 0, 0, se[ie].width, se[ie].height, Ne, ze, se[ie].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, je, se[ie].width, se[ie].height, 0, Ne, ze, se[ie].data);
          for (let ge = 0; ge < be.length; ge++) {
            const Oe = be[ge].image[ie].image;
            B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, 0, 0, Oe.width, Oe.height, Ne, ze, Oe.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, je, Oe.width, Oe.height, 0, Ne, ze, Oe.data);
          }
        } else {
          B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, 0, 0, Ne, ze, se[ie]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0, je, Ne, ze, se[ie]);
          for (let ge = 0; ge < be.length; ge++) {
            const Oe = be[ge];
            B ? ne && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, 0, 0, Ne, ze, Oe.image[ie]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ge + 1, je, Ne, ze, Oe.image[ie]);
          }
        }
      }
      f(S) && b(e.TEXTURE_CUBE_MAP), oe.__version = te.version, S.onUpdate && S.onUpdate(S);
    }
    A.__version = S.version;
  }
  function ue(A, S, O, X, te, oe) {
    const fe = s.convert(O.format, O.colorSpace), V = s.convert(O.type), ce = g(O.internalFormat, fe, V, O.normalized, O.colorSpace), Se = i.get(S), Te = i.get(O);
    if (Te.__renderTarget = S, !Se.__hasExternalTextures) {
      const se = Math.max(1, S.width >> oe), Ee = Math.max(1, S.height >> oe);
      te === e.TEXTURE_3D || te === e.TEXTURE_2D_ARRAY ? n.texImage3D(te, oe, ce, se, Ee, S.depth, 0, fe, V, null) : n.texImage2D(te, oe, ce, se, Ee, 0, fe, V, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, A), N(S) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, X, te, Te.__webglTexture, 0, He(S)) : (te === e.TEXTURE_2D || te >= e.TEXTURE_CUBE_MAP_POSITIVE_X && te <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, X, te, Te.__webglTexture, oe), n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function qe(A, S, O) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, A), S.depthBuffer) {
      const X = S.depthTexture, te = X && X.isDepthTexture ? X.type : null, oe = E(S.stencilBuffer, te), fe = S.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      N(S) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, He(S), oe, S.width, S.height) : O ? e.renderbufferStorageMultisample(e.RENDERBUFFER, He(S), oe, S.width, S.height) : e.renderbufferStorage(e.RENDERBUFFER, oe, S.width, S.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, fe, e.RENDERBUFFER, A);
    } else {
      const X = S.textures;
      for (let te = 0; te < X.length; te++) {
        const oe = X[te], fe = s.convert(oe.format, oe.colorSpace), V = s.convert(oe.type), ce = g(oe.internalFormat, fe, V, oe.normalized, oe.colorSpace);
        N(S) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, He(S), ce, S.width, S.height) : O ? e.renderbufferStorageMultisample(e.RENDERBUFFER, He(S), ce, S.width, S.height) : e.renderbufferStorage(e.RENDERBUFFER, ce, S.width, S.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function ee(A, S, O) {
    const X = S.isWebGLCubeRenderTarget === !0;
    if (n.bindFramebuffer(e.FRAMEBUFFER, A), !(S.depthTexture && S.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const te = i.get(S.depthTexture);
    if (te.__renderTarget = S, (!te.__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), X) {
      if (te.__webglInit === void 0 && (te.__webglInit = !0, S.depthTexture.addEventListener("dispose", C)), te.__webglTexture === void 0) {
        te.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, te.__webglTexture), Ge(e.TEXTURE_CUBE_MAP, S.depthTexture);
        const Se = s.convert(S.depthTexture.format), Te = s.convert(S.depthTexture.type);
        let se;
        S.depthTexture.format === 1026 ? se = e.DEPTH_COMPONENT24 : S.depthTexture.format === 1027 && (se = e.DEPTH24_STENCIL8);
        for (let Ee = 0; Ee < 6; Ee++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + Ee, 0, se, S.width, S.height, 0, Se, Te, null);
      }
    } else Q(S.depthTexture, 0);
    const oe = te.__webglTexture, fe = He(S), V = X ? e.TEXTURE_CUBE_MAP_POSITIVE_X + O : e.TEXTURE_2D, ce = S.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
    if (S.depthTexture.format === 1026) N(S) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ce, V, oe, 0, fe) : e.framebufferTexture2D(e.FRAMEBUFFER, ce, V, oe, 0);
    else if (S.depthTexture.format === 1027) N(S) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ce, V, oe, 0, fe) : e.framebufferTexture2D(e.FRAMEBUFFER, ce, V, oe, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function j(A) {
    const S = i.get(A), O = A.isWebGLCubeRenderTarget === !0;
    if (S.__boundDepthTexture !== A.depthTexture) {
      const X = A.depthTexture;
      if (S.__depthDisposeCallback && S.__depthDisposeCallback(), X) {
        const te = () => {
          delete S.__boundDepthTexture, delete S.__depthDisposeCallback, X.removeEventListener("dispose", te);
        };
        X.addEventListener("dispose", te), S.__depthDisposeCallback = te;
      }
      S.__boundDepthTexture = X;
    }
    if (A.depthTexture && !S.__autoAllocateDepthBuffer) if (O) for (let X = 0; X < 6; X++) ee(S.__webglFramebuffer[X], A, X);
    else {
      const X = A.texture.mipmaps;
      X && X.length > 0 ? ee(S.__webglFramebuffer[0], A, 0) : ee(S.__webglFramebuffer, A, 0);
    }
    else if (O) {
      S.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (n.bindFramebuffer(e.FRAMEBUFFER, S.__webglFramebuffer[X]), S.__webglDepthbuffer[X] === void 0)
          S.__webglDepthbuffer[X] = e.createRenderbuffer(), qe(S.__webglDepthbuffer[X], A, !1);
        else {
          const te = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = S.__webglDepthbuffer[X];
          e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, te, e.RENDERBUFFER, oe);
        }
    } else {
      const X = A.texture.mipmaps;
      if (X && X.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, S.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, S.__webglFramebuffer), S.__webglDepthbuffer === void 0)
        S.__webglDepthbuffer = e.createRenderbuffer(), qe(S.__webglDepthbuffer, A, !1);
      else {
        const te = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = S.__webglDepthbuffer;
        e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, te, e.RENDERBUFFER, oe);
      }
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function le(A, S, O) {
    const X = i.get(A);
    S !== void 0 && ue(X.__webglFramebuffer, A, A.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), O !== void 0 && j(A);
  }
  function ve(A) {
    const S = A.texture, O = i.get(A), X = i.get(S);
    A.addEventListener("dispose", M);
    const te = A.textures, oe = A.isWebGLCubeRenderTarget === !0, fe = te.length > 1;
    if (fe || (X.__webglTexture === void 0 && (X.__webglTexture = e.createTexture()), X.__version = S.version, a.memory.textures++), oe) {
      O.__webglFramebuffer = [];
      for (let V = 0; V < 6; V++) if (S.mipmaps && S.mipmaps.length > 0) {
        O.__webglFramebuffer[V] = [];
        for (let ce = 0; ce < S.mipmaps.length; ce++) O.__webglFramebuffer[V][ce] = e.createFramebuffer();
      } else O.__webglFramebuffer[V] = e.createFramebuffer();
    } else {
      if (S.mipmaps && S.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let V = 0; V < S.mipmaps.length; V++) O.__webglFramebuffer[V] = e.createFramebuffer();
      } else O.__webglFramebuffer = e.createFramebuffer();
      if (fe) for (let V = 0, ce = te.length; V < ce; V++) {
        const Se = i.get(te[V]);
        Se.__webglTexture === void 0 && (Se.__webglTexture = e.createTexture(), a.memory.textures++);
      }
      if (A.samples > 0 && N(A) === !1) {
        O.__webglMultisampledFramebuffer = e.createFramebuffer(), O.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let V = 0; V < te.length; V++) {
          const ce = te[V];
          O.__webglColorRenderbuffer[V] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, O.__webglColorRenderbuffer[V]);
          const Se = s.convert(ce.format, ce.colorSpace), Te = s.convert(ce.type), se = g(ce.internalFormat, Se, Te, ce.normalized, ce.colorSpace, A.isXRRenderTarget === !0), Ee = He(A);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, Ee, se, A.width, A.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + V, e.RENDERBUFFER, O.__webglColorRenderbuffer[V]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), A.depthBuffer && (O.__webglDepthRenderbuffer = e.createRenderbuffer(), qe(O.__webglDepthRenderbuffer, A, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (oe) {
      n.bindTexture(e.TEXTURE_CUBE_MAP, X.__webglTexture), Ge(e.TEXTURE_CUBE_MAP, S);
      for (let V = 0; V < 6; V++) if (S.mipmaps && S.mipmaps.length > 0) for (let ce = 0; ce < S.mipmaps.length; ce++) ue(O.__webglFramebuffer[V][ce], A, S, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce);
      else ue(O.__webglFramebuffer[V], A, S, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0);
      f(S) && b(e.TEXTURE_CUBE_MAP), n.unbindTexture();
    } else if (fe) {
      for (let V = 0, ce = te.length; V < ce; V++) {
        const Se = te[V], Te = i.get(Se);
        let se = e.TEXTURE_2D;
        (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (se = A.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(se, Te.__webglTexture), Ge(se, Se), ue(O.__webglFramebuffer, A, Se, e.COLOR_ATTACHMENT0 + V, se, 0), f(Se) && b(se);
      }
      n.unbindTexture();
    } else {
      let V = e.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (V = A.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(V, X.__webglTexture), Ge(V, S), S.mipmaps && S.mipmaps.length > 0) for (let ce = 0; ce < S.mipmaps.length; ce++) ue(O.__webglFramebuffer[ce], A, S, e.COLOR_ATTACHMENT0, V, ce);
      else ue(O.__webglFramebuffer, A, S, e.COLOR_ATTACHMENT0, V, 0);
      f(S) && b(V), n.unbindTexture();
    }
    A.depthBuffer && j(A);
  }
  function _e(A) {
    const S = A.textures;
    for (let O = 0, X = S.length; O < X; O++) {
      const te = S[O];
      if (f(te)) {
        const oe = y(A), fe = i.get(te).__webglTexture;
        n.bindTexture(oe, fe), b(oe), n.unbindTexture();
      }
    }
  }
  const Re = [], Ie = [];
  function Ve(A) {
    if (A.samples > 0) {
      if (N(A) === !1) {
        const S = A.textures, O = A.width, X = A.height;
        let te = e.COLOR_BUFFER_BIT;
        const oe = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, fe = i.get(A), V = S.length > 1;
        if (V) for (let Se = 0; Se < S.length; Se++)
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.TEXTURE_2D, null, 0);
        n.bindFramebuffer(e.READ_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
        const ce = A.texture.mipmaps;
        ce && ce.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer);
        for (let Se = 0; Se < S.length; Se++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (te |= e.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (te |= e.STENCIL_BUFFER_BIT)), V) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Se]);
            const Te = i.get(S[Se]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, Te, 0);
          }
          e.blitFramebuffer(0, 0, O, X, 0, 0, O, X, te, e.NEAREST), c === !0 && (Re.length = 0, Ie.length = 0, Re.push(e.COLOR_ATTACHMENT0 + Se), A.depthBuffer && A.storeMultisampledDepthBuffer === !1 && (Re.push(oe), Ie.push(oe), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Ie)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Re));
        }
        if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), V) for (let Se = 0; Se < S.length; Se++) {
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Se]);
          const Te = i.get(S[Se]).__webglTexture;
          n.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Se, e.TEXTURE_2D, Te, 0);
        }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.storeMultisampledDepthBuffer === !1 && c) {
        const S = A.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [S]);
      }
    }
  }
  function He(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function N(A) {
    const S = i.get(A);
    return A.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && S.__useRenderToTexture !== !1;
  }
  function lt(A) {
    const S = a.render.frame;
    u.get(A) !== S && (u.set(A, S), A.update());
  }
  function Qe(A, S) {
    const O = A.colorSpace, X = A.format, te = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || O !== "srgb-linear" && O !== "" && ($e.getTransfer(O) === "srgb" ? (X !== 1023 || te !== 1009) && Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Be("WebGLTextures: Unsupported texture color space:", O)), S;
  }
  function Je(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (l.width = A.naturalWidth || A.width, l.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (l.width = A.displayWidth, l.height = A.displayHeight) : (l.width = A.width, l.height = A.height), l;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = q, this.getTextureUnits = P, this.setTextureUnits = R, this.setTexture2D = Q, this.setTexture2DArray = W, this.setTexture3D = Y, this.setTextureCube = Z, this.rebindTextures = le, this.setupRenderTarget = ve, this.updateRenderTargetMipmap = _e, this.updateMultisampleRenderTarget = Ve, this.setupDepthRenderbuffer = j, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = N, this.isReversedDepthBuffer = function() {
    return n.buffers.depth.getReversed();
  };
}
function Md(e, t) {
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
var Sd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, xd = `
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

}`, yd = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Ro(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new en({
        vertexShader: Sd,
        fragmentShader: xd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new ut(new Fn(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, Ed = class extends Bn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, a = "local-floor", o = 1, c = null, l = null, u = null, d = null, h = null, m = null;
    const _ = typeof XRWebGLBinding < "u", v = new yd(), p = {}, f = t.getContextAttributes();
    let b = null, y = null;
    const g = [], E = [], w = new de();
    let C = null, M = null;
    const T = new Vt();
    T.viewport = new vt();
    const z = new Vt();
    z.viewport = new vt();
    const L = [T, z], I = new tu();
    let q = null, P = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(J) {
      let re = g[J];
      return re === void 0 && (re = new Wr(), g[J] = re), re.getTargetRaySpace();
    }, this.getControllerGrip = function(J) {
      let re = g[J];
      return re === void 0 && (re = new Wr(), g[J] = re), re.getGripSpace();
    }, this.getHand = function(J) {
      let re = g[J];
      return re === void 0 && (re = new Wr(), g[J] = re), re.getHandSpace();
    };
    function R(J) {
      const re = E.indexOf(J.inputSource);
      if (re === -1) return;
      const ae = g[re];
      ae !== void 0 && (ae.update(J.inputSource, J.frame, c || s), ae.dispatchEvent({
        type: J.type,
        data: J.inputSource
      }));
    }
    function G() {
      i.removeEventListener("select", R), i.removeEventListener("selectstart", R), i.removeEventListener("selectend", R), i.removeEventListener("squeeze", R), i.removeEventListener("squeezestart", R), i.removeEventListener("squeezeend", R), i.removeEventListener("end", G), i.removeEventListener("inputsourceschange", U);
      for (let J = 0; J < g.length; J++) {
        const re = E[J];
        re !== null && (E[J] = null, g[J].disconnect(re));
      }
      q = null, P = null, v.reset();
      for (const J in p) delete p[J];
      if (e.setRenderTarget(b), h = null, d = null, u = null, i = null, y = null, Ge.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(w.width, w.height, !1), M !== null) {
        const J = M.camera;
        J.fov = M.fov, J.zoom = M.zoom, J.updateProjectionMatrix(), M = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(J) {
      r = J, n.isPresenting === !0 && Fe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(J) {
      a = J, n.isPresenting === !0 && Fe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || s;
    }, this.setReferenceSpace = function(J) {
      c = J;
    }, this.getBaseLayer = function() {
      return d !== null ? d : h;
    }, this.getBinding = function() {
      return u === null && _ && (u = new XRWebGLBinding(i, t)), u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(J) {
      if (i = J, i !== null) {
        if (b = e.getRenderTarget(), i.addEventListener("select", R), i.addEventListener("selectstart", R), i.addEventListener("selectend", R), i.addEventListener("squeeze", R), i.addEventListener("squeezestart", R), i.addEventListener("squeezeend", R), i.addEventListener("end", G), i.addEventListener("inputsourceschange", U), f.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(w), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let re = null, ae = null, Ce = null;
          f.depth && (Ce = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, re = f.stencil ? oo : Oi, ae = f.stencil ? ao : Un);
          const Ue = {
            colorFormat: t.RGBA8,
            depthFormat: Ce,
            scaleFactor: r
          };
          u = this.getBinding(), d = u.createProjectionLayer(Ue), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new Yt(d.textureWidth, d.textureHeight, {
            format: Di,
            type: yn,
            depthTexture: new Fi(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, re),
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
          h = new XRWebGLLayer(i, t, re), i.updateRenderState({ baseLayer: h }), e.setPixelRatio(1), e.setSize(h.framebufferWidth, h.framebufferHeight, !1), y = new Yt(h.framebufferWidth, h.framebufferHeight, {
            format: Di,
            type: yn,
            colorSpace: e.outputColorSpace,
            stencilBuffer: f.stencil,
            resolveDepthBuffer: h.ignoreDepthValues === !1,
            resolveStencilBuffer: h.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: h.ignoreDepthValues === !1
          });
        }
        y.isXRRenderTarget = !0, this.setFoveation(o), c = null, s = await i.requestReferenceSpace(a), Ge.setContext(i), Ge.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function U(J) {
      for (let re = 0; re < J.removed.length; re++) {
        const ae = J.removed[re], Ce = E.indexOf(ae);
        Ce >= 0 && (E[Ce] = null, g[Ce].disconnect(ae));
      }
      for (let re = 0; re < J.added.length; re++) {
        const ae = J.added[re];
        let Ce = E.indexOf(ae);
        if (Ce === -1) {
          for (let ue = 0; ue < g.length; ue++) if (ue >= E.length) {
            E.push(ae), Ce = ue;
            break;
          } else if (E[ue] === null) {
            E[ue] = ae, Ce = ue;
            break;
          }
          if (Ce === -1) break;
        }
        const Ue = g[Ce];
        Ue && Ue.connect(ae);
      }
    }
    const Q = new D(), W = new D();
    function Y(J, re, ae) {
      Q.setFromMatrixPosition(re.matrixWorld), W.setFromMatrixPosition(ae.matrixWorld);
      const Ce = Q.distanceTo(W), Ue = re.projectionMatrix.elements, ue = ae.projectionMatrix.elements, qe = Ue[14] / (Ue[10] - 1), ee = Ue[14] / (Ue[10] + 1), j = (Ue[9] + 1) / Ue[5], le = (Ue[9] - 1) / Ue[5], ve = (Ue[8] - 1) / Ue[0], _e = (ue[8] + 1) / ue[0], Re = qe * ve, Ie = qe * _e, Ve = Ce / (-ve + _e), He = Ve * -ve;
      if (re.matrixWorld.decompose(J.position, J.quaternion, J.scale), J.translateX(He), J.translateZ(Ve), J.matrixWorld.compose(J.position, J.quaternion, J.scale), J.matrixWorldInverse.copy(J.matrixWorld).invert(), Ue[10] === -1)
        J.projectionMatrix.copy(re.projectionMatrix), J.projectionMatrixInverse.copy(re.projectionMatrixInverse);
      else {
        const N = qe + Ve, lt = ee + Ve, Qe = Re - He, Je = Ie + (Ce - He), A = j * ee / lt * N, S = le * ee / lt * N;
        J.projectionMatrix.makePerspective(Qe, Je, A, S, N, lt), J.projectionMatrixInverse.copy(J.projectionMatrix).invert();
      }
    }
    function Z(J, re) {
      re === null ? J.matrixWorld.copy(J.matrix) : J.matrixWorld.multiplyMatrices(re.matrixWorld, J.matrix), J.matrixWorldInverse.copy(J.matrixWorld).invert();
    }
    this.updateCamera = function(J) {
      if (i === null) return;
      let re = J.near, ae = J.far;
      v.texture !== null && (v.depthNear > 0 && (re = v.depthNear), v.depthFar > 0 && (ae = v.depthFar)), I.near = z.near = T.near = re, I.far = z.far = T.far = ae, (q !== I.near || P !== I.far) && (i.updateRenderState({
        depthNear: I.near,
        depthFar: I.far
      }), q = I.near, P = I.far), I.layers.mask = J.layers.mask | 6, T.layers.mask = I.layers.mask & -5, z.layers.mask = I.layers.mask & -3;
      const Ce = J.parent, Ue = I.cameras;
      Z(I, Ce);
      for (let ue = 0; ue < Ue.length; ue++) Z(Ue[ue], Ce);
      Ue.length === 2 ? Y(I, T, z) : I.projectionMatrix.copy(T.projectionMatrix), M === null && J.isPerspectiveCamera && (M = {
        camera: J,
        fov: J.fov,
        zoom: J.zoom
      }), Le(J, I, Ce);
    };
    function Le(J, re, ae) {
      ae === null ? J.matrix.copy(re.matrixWorld) : (J.matrix.copy(ae.matrixWorld), J.matrix.invert(), J.matrix.multiply(re.matrixWorld)), J.matrix.decompose(J.position, J.quaternion, J.scale), J.updateMatrixWorld(!0), J.projectionMatrix.copy(re.projectionMatrix), J.projectionMatrixInverse.copy(re.projectionMatrixInverse), J.isPerspectiveCamera && (J.fov = xs * 2 * Math.atan(1 / J.projectionMatrix.elements[5]), J.zoom = 1);
    }
    this.getCamera = function() {
      return I;
    }, this.getFoveation = function() {
      if (!(d === null && h === null))
        return o;
    }, this.setFoveation = function(J) {
      o = J, d !== null && (d.fixedFoveation = J), h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = J);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(I);
    }, this.getCameraTexture = function(J) {
      return p[J];
    };
    let we = null;
    function rt(J, re) {
      if (l = re.getViewerPose(c || s), m = re, l !== null) {
        const ae = l.views;
        h !== null && (e.setRenderTargetFramebuffer(y, h.framebuffer), e.setRenderTarget(y));
        let Ce = !1;
        ae.length !== I.cameras.length && (I.cameras.length = 0, Ce = !0);
        for (let ue = 0; ue < ae.length; ue++) {
          const qe = ae[ue];
          let ee = null;
          if (h !== null) ee = h.getViewport(qe);
          else {
            const le = u.getViewSubImage(d, qe);
            ee = le.viewport, ue === 0 && (e.setRenderTargetTextures(y, le.colorTexture, le.depthStencilTexture), e.setRenderTarget(y));
          }
          let j = L[ue];
          j === void 0 && (j = new Vt(), j.layers.enable(ue), j.viewport = new vt(), L[ue] = j), j.matrix.fromArray(qe.transform.matrix), j.matrix.decompose(j.position, j.quaternion, j.scale), j.projectionMatrix.fromArray(qe.projectionMatrix), j.projectionMatrixInverse.copy(j.projectionMatrix).invert(), j.viewport.set(ee.x, ee.y, ee.width, ee.height), ue === 0 && (I.matrix.copy(j.matrix), I.matrix.decompose(I.position, I.quaternion, I.scale)), Ce === !0 && I.cameras.push(j);
        }
        const Ue = i.enabledFeatures;
        if (Ue && Ue.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && _) {
          u = n.getBinding();
          const ue = u.getDepthInformation(ae[0]);
          ue && ue.isValid && ue.texture && v.init(ue, i.renderState);
        }
        if (Ue && Ue.includes("camera-access") && _) {
          e.state.unbindTexture(), u = n.getBinding();
          for (let ue = 0; ue < ae.length; ue++) {
            const qe = ae[ue].camera;
            if (qe) {
              let ee = p[qe];
              ee || (ee = new Ro(), p[qe] = ee);
              const j = u.getCameraImage(qe);
              ee.sourceTexture = j;
            }
          }
        }
      }
      for (let ae = 0; ae < g.length; ae++) {
        const Ce = E[ae], Ue = g[ae];
        Ce !== null && Ue !== void 0 && Ue.update(Ce, re, c || s);
      }
      we && we(J, re), re.detectedPlanes && n.dispatchEvent({
        type: "planesdetected",
        data: re
      }), m = null;
    }
    const Ge = new ol();
    Ge.setAnimationLoop(rt), this.setAnimationLoop = function(J) {
      we = J;
    }, this.dispose = function() {
    };
  }
}, Td = /* @__PURE__ */ new ht(), pl = /* @__PURE__ */ new ke();
pl.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function bd(e, t) {
  function n(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function i(p, f) {
    f.color.getRGB(p.fogColor.value, tl(e)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function r(p, f, b, y, g) {
    f.isNodeMaterial ? f.uniformsNeedUpdate = !1 : f.isMeshBasicMaterial ? s(p, f) : f.isMeshLambertMaterial ? (s(p, f), f.envMap && (p.envMapIntensity.value = f.envMapIntensity)) : f.isMeshToonMaterial ? (s(p, f), d(p, f)) : f.isMeshPhongMaterial ? (s(p, f), u(p, f), f.envMap && (p.envMapIntensity.value = f.envMapIntensity)) : f.isMeshStandardMaterial ? (s(p, f), h(p, f), f.isMeshPhysicalMaterial && m(p, f, g)) : f.isMeshMatcapMaterial ? (s(p, f), _(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), v(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? c(p, f, b, y) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, n(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, n(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, n(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === 1 && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, n(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === 1 && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, n(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, n(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, n(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const b = t.get(f), y = b.envMap, g = b.envMapRotation;
    y && (p.envMap.value = y, p.envMapRotation.value.setFromMatrix4(Td.makeRotationFromEuler(g)).transpose(), y.isCubeTexture && y.isRenderTargetTexture === !1 && p.envMapRotation.value.premultiply(pl), p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap && (p.lightMap.value = f.lightMap, p.lightMapIntensity.value = f.lightMapIntensity, n(f.lightMap, p.lightMapTransform)), f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, n(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, n(f.map, p.mapTransform));
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function c(p, f, b, y) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * b, p.scale.value = y * 0.5, f.map && (p.map.value = f.map, n(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, n(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, n(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, n(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function u(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function d(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function h(p, f) {
    p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, n(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, n(f.roughnessMap, p.roughnessMapTransform)), f.envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, b) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, n(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, n(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, n(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, n(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, n(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && p.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (p.dispersion.value = f.dispersion), f.retroreflectivity > 0 && (p.retroreflectivity.value = f.retroreflectivity), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, n(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, n(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = b.texture, p.transmissionSamplerSize.value.set(b.width, b.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, n(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, n(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap, n(f.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, n(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, n(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function v(p, f) {
    const b = t.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(b.matrixWorld), p.nearDistance.value = b.shadow.camera.near, p.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function Ad(e, t, n, i) {
  let r = {}, s = {}, a = [];
  const o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(g, E) {
    const w = E.program;
    i.uniformBlockBinding(g, w);
  }
  function l(g, E) {
    let w = r[g.id];
    w === void 0 && (p(g), w = u(g), r[g.id] = w, g.addEventListener("dispose", b));
    const C = E.program;
    i.updateUBOMapping(g, C);
    const M = t.render.frame;
    s[g.id] !== M && (h(g), s[g.id] = M);
  }
  function u(g) {
    const E = d();
    g.__bindingPointIndex = E;
    const w = e.createBuffer(), C = g.__size, M = g.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, w), e.bufferData(e.UNIFORM_BUFFER, C, M), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, E, w), w;
  }
  function d() {
    for (let g = 0; g < o; g++) if (a.indexOf(g) === -1)
      return a.push(g), g;
    return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(g) {
    const E = r[g.id], w = g.uniforms, C = g.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, E);
    for (let M = 0, T = w.length; M < T; M++) {
      const z = w[M];
      if (Array.isArray(z)) for (let L = 0, I = z.length; L < I; L++) m(z[L], M, L, C);
      else m(z, M, 0, C);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function m(g, E, w, C) {
    if (v(g, E, w, C) === !0) {
      const M = g.__offset, T = g.value;
      if (Array.isArray(T)) {
        let z = 0;
        for (let L = 0; L < T.length; L++) {
          const I = T[L], q = f(I);
          _(I, g.__data, z), typeof I != "number" && typeof I != "boolean" && !I.isMatrix3 && !ArrayBuffer.isView(I) && (z += q.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else _(T, g.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, M, g.__data);
    }
  }
  function _(g, E, w) {
    typeof g == "number" || typeof g == "boolean" ? E[0] = g : g.isMatrix3 ? (E[0] = g.elements[0], E[1] = g.elements[1], E[2] = g.elements[2], E[3] = 0, E[4] = g.elements[3], E[5] = g.elements[4], E[6] = g.elements[5], E[7] = 0, E[8] = g.elements[6], E[9] = g.elements[7], E[10] = g.elements[8], E[11] = 0) : ArrayBuffer.isView(g) ? E.set(new g.constructor(g.buffer, g.byteOffset, E.length)) : g.toArray(E, w);
  }
  function v(g, E, w, C) {
    const M = g.value, T = E + "_" + w;
    if (C[T] === void 0)
      return typeof M == "number" || typeof M == "boolean" ? C[T] = M : ArrayBuffer.isView(M) ? C[T] = M.slice() : C[T] = M.clone(), !0;
    {
      const z = C[T];
      if (typeof M == "number" || typeof M == "boolean") {
        if (z !== M)
          return C[T] = M, !0;
      } else {
        if (ArrayBuffer.isView(M)) return !0;
        if (z.equals(M) === !1)
          return z.copy(M), !0;
      }
    }
    return !1;
  }
  function p(g) {
    const E = g.uniforms;
    let w = 0;
    const C = 16;
    for (let T = 0, z = E.length; T < z; T++) {
      const L = Array.isArray(E[T]) ? E[T] : [E[T]];
      for (let I = 0, q = L.length; I < q; I++) {
        const P = L[I], R = Array.isArray(P.value) ? P.value : [P.value];
        for (let G = 0, U = R.length; G < U; G++) {
          const Q = R[G], W = f(Q), Y = w % C, Z = Y % W.boundary, Le = Y + Z;
          w += Z, Le !== 0 && C - Le < W.storage && (w += C - Le), P.__data = new Float32Array(W.storage / Float32Array.BYTES_PER_ELEMENT), P.__offset = w, w += W.storage;
        }
      }
    }
    const M = w % C;
    return M > 0 && (w += C - M), g.__size = w, g.__cache = {}, this;
  }
  function f(g) {
    const E = {
      boundary: 0,
      storage: 0
    };
    return typeof g == "number" || typeof g == "boolean" ? (E.boundary = 4, E.storage = 4) : g.isVector2 ? (E.boundary = 8, E.storage = 8) : g.isVector3 || g.isColor ? (E.boundary = 16, E.storage = 12) : g.isVector4 ? (E.boundary = 16, E.storage = 16) : g.isMatrix3 ? (E.boundary = 48, E.storage = 48) : g.isMatrix4 ? (E.boundary = 64, E.storage = 64) : g.isTexture ? Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(g) ? (E.boundary = 16, E.storage = g.byteLength) : Fe("WebGLRenderer: Unsupported uniform value type.", g), E;
  }
  function b(g) {
    const E = g.target;
    E.removeEventListener("dispose", b);
    const w = a.indexOf(E.__bindingPointIndex);
    a.splice(w, 1), e.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function y() {
    for (const g in r) e.deleteBuffer(r[g]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: y
  };
}
var wd = new Uint16Array([
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
]), $t = null;
function Rd() {
  return $t === null && ($t = new Ao(wd, 16, 16, Tr, En), $t.name = "DFG_LUT", $t.minFilter = Ot, $t.magFilter = Ot, $t.wrapS = fn, $t.wrapT = fn, $t.generateMipmaps = !1, $t.needsUpdate = !0), $t;
}
var Cd = class {
  constructor(e = {}) {
    const { canvas: t = Sc(), context: n = null, depth: i = !0, stencil: r = !1, alpha: s = !1, antialias: a = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: h = yn } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = s;
    const _ = h, v = /* @__PURE__ */ new Set([
      uo,
      ho,
      co
    ]), p = /* @__PURE__ */ new Set([
      yn,
      Un,
      io,
      ao,
      ro,
      so
    ]), f = new Uint32Array(4), b = new Int32Array(4), y = new D();
    let g = null, E = null;
    const w = [], C = [];
    let M = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      diagnostics: { keywords: !1 },
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const T = this;
    let z = !1, L = null, I = null, q = null, P = null;
    this._outputColorSpace = Rt;
    let R = 0, G = 0, U = null, Q = -1, W = null;
    const Y = new vt(), Z = new vt();
    let Le = null;
    const we = new Xe(0);
    let rt = 0, Ge = t.width, J = t.height, re = 1, ae = null, Ce = null;
    const Ue = new vt(0, 0, Ge, J), ue = new vt(0, 0, Ge, J);
    let qe = !1;
    const ee = new Ps();
    let j = !1, le = !1;
    const ve = new ht(), _e = new D(), Re = new vt(), Ie = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    let Ve = !1;
    function He() {
      return U === null ? re : 1;
    }
    let N = n;
    function lt(x, F) {
      return t.getContext(x, F);
    }
    let Qe, Je, A, S, O, X, te, oe, fe, V, ce, Se, Te, se, Ee, Ne, ze, je, B, $, ne, Me, be;
    try {
      const x = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: c,
        powerPreference: l,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", Oe, !1), t.addEventListener("webglcontextrestored", St, !1), t.addEventListener("webglcontextcreationerror", nt, !1), N === null) {
        const F = "webgl2";
        if (N = lt(F, x), N === null) throw lt(F) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      ie();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", Oe, !1), t.removeEventListener("webglcontextrestored", St, !1), t.removeEventListener("webglcontextcreationerror", nt, !1), Be("WebGLRenderer: " + x.message), x;
    }
    function ie() {
      Qe = new wu(N), Qe.init(), ne = new Md(N, Qe), Je = new vu(N, Qe, e, ne), A = new vd(N, Qe), Je.reversedDepthBuffer && d && A.buffers.depth.setReversed(!0), I = N.createFramebuffer(), q = N.createFramebuffer(), P = N.createFramebuffer(), S = new Pu(N), O = new id(), X = new _d(N, Qe, A, O, Je, ne, S), te = new Au(T), oe = new fu(N), Me = new mu(N, oe), fe = new Ru(N, oe, S, Me), V = new Iu(N, fe, oe, Me, S), je = new Lu(N, Je, X), Ee = new _u(O), ce = new nd(T, te, Qe, Je, Me, Ee), Se = new bd(T, O), Te = new sd(), se = new ud(Qe), ze = new pu(T, te, A, V, m, o), Ne = new gd(T, V, Je), be = new Ad(N, S, Je, A), B = new gu(N, Qe, S), $ = new Cu(N, Qe, S), S.programs = ce.programs, T.capabilities = Je, T.extensions = Qe, T.properties = O, T.renderLists = Te, T.shadowMap = Ne, T.state = A, T.info = S;
    }
    _ !== 1009 && (M = new Uu(_, t.width, t.height, a, i, r));
    const ge = new Ed(T, N);
    this.xr = ge, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Qe.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Qe.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return re;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (re = x, this.setSize(Ge, J, !1));
    }, this.getSize = function(x) {
      return x.set(Ge, J);
    }, this.setSize = function(x, F, K = !0) {
      if (ge.isPresenting) {
        Fe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ge = x, J = F, t.width = Math.floor(x * re), t.height = Math.floor(F * re), K === !0 && (t.style.width = x + "px", t.style.height = F + "px"), M !== null && M.setSize(t.width, t.height), this.setViewport(0, 0, x, F);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Ge * re, J * re).floor();
    }, this.setDrawingBufferSize = function(x, F, K) {
      Ge = x, J = F, re = K, t.width = Math.floor(x * K), t.height = Math.floor(F * K), this.setViewport(0, 0, x, F);
    }, this.setEffects = function(x) {
      if (_ === 1009) {
        Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let F = 0; F < x.length; F++) if (x[F].isOutputPass === !0) {
          Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      M.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(Y);
    }, this.getViewport = function(x) {
      return x.copy(Ue);
    }, this.setViewport = function(x, F, K, k) {
      x.isVector4 ? Ue.set(x.x, x.y, x.z, x.w) : Ue.set(x, F, K, k), A.viewport(Y.copy(Ue).multiplyScalar(re).round());
    }, this.getScissor = function(x) {
      return x.copy(ue);
    }, this.setScissor = function(x, F, K, k) {
      x.isVector4 ? ue.set(x.x, x.y, x.z, x.w) : ue.set(x, F, K, k), A.scissor(Z.copy(ue).multiplyScalar(re).round());
    }, this.getScissorTest = function() {
      return qe;
    }, this.setScissorTest = function(x) {
      A.setScissorTest(qe = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
    }, this.setTransparentSort = function(x) {
      Ce = x;
    }, this.getClearColor = function(x) {
      return x.copy(ze.getClearColor());
    }, this.setClearColor = function() {
      ze.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ze.getClearAlpha();
    }, this.setClearAlpha = function() {
      ze.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, F = !0, K = !0) {
      let k = 0;
      if (x) {
        let H = !1;
        if (U !== null) {
          const he = U.texture.format;
          H = v.has(he);
        }
        if (H) {
          const he = U.texture.type, me = p.has(he), xe = ze.getClearColor(), ye = ze.getClearAlpha(), De = xe.r, Ke = xe.g, Ze = xe.b;
          me ? (f[0] = De, f[1] = Ke, f[2] = Ze, f[3] = ye, N.clearBufferuiv(N.COLOR, 0, f)) : (b[0] = De, b[1] = Ke, b[2] = Ze, b[3] = ye, N.clearBufferiv(N.COLOR, 0, b));
        } else k |= N.COLOR_BUFFER_BIT;
      }
      F && (k |= N.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), K && (k |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), k !== 0 && N.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), L = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Oe, !1), t.removeEventListener("webglcontextrestored", St, !1), t.removeEventListener("webglcontextcreationerror", nt, !1), ze.dispose(), Te.dispose(), se.dispose(), O.dispose(), te.dispose(), V.dispose(), Me.dispose(), be.dispose(), ce.dispose(), ge.dispose(), ge.removeEventListener("sessionstart", Gs), ge.removeEventListener("sessionend", Hs), Tn.stop();
    };
    function Oe(x) {
      x.preventDefault(), ta("WebGLRenderer: Context Lost."), z = !0;
    }
    function St() {
      ta("WebGLRenderer: Context Restored."), z = !1;
      const x = S.autoReset, F = Ne.enabled, K = Ne.autoUpdate, k = Ne.needsUpdate, H = Ne.type;
      ie(), S.autoReset = x, Ne.enabled = F, Ne.autoUpdate = K, Ne.needsUpdate = k, Ne.type = H;
    }
    function nt(x) {
      Be("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Kt(x) {
      const F = x.target;
      F.removeEventListener("dispose", Kt), rn(F);
    }
    function rn(x) {
      _l(x), O.remove(x);
    }
    function _l(x) {
      const F = O.get(x).programs;
      F !== void 0 && (F.forEach(function(K) {
        ce.releaseProgram(K);
      }), x.isShaderMaterial && ce.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, F, K, k, H, he) {
      F === null && (F = Ie);
      const me = H.isMesh && H.matrixWorld.determinantAffine() < 0, xe = xl(x, F, K, k, H);
      A.setMaterial(k, me);
      let ye = K.index, De = 1;
      if (k.wireframe === !0) {
        if (ye = fe.getWireframeAttribute(K), ye === void 0) return;
        De = 2;
      }
      const Ke = K.drawRange, Ze = K.attributes.position;
      let Pe = Ke.start * De, st = (Ke.start + Ke.count) * De;
      he !== null && (Pe = Math.max(Pe, he.start * De), st = Math.min(st, (he.start + he.count) * De)), ye !== null ? (Pe = Math.max(Pe, 0), st = Math.min(st, ye.count)) : Ze != null && (Pe = Math.max(Pe, 0), st = Math.min(st, Ze.count));
      const pt = st - Pe;
      if (pt < 0 || pt === 1 / 0) return;
      Me.setup(H, k, xe, K, ye);
      let ct, et = B;
      if (ye !== null && (ct = oe.get(ye), et = $, et.setIndex(ct)), H.isMesh) k.wireframe === !0 ? (A.setLineWidth(k.wireframeLinewidth * He()), et.setMode(N.LINES)) : et.setMode(N.TRIANGLES);
      else if (H.isLine) {
        let Tt = k.linewidth;
        Tt === void 0 && (Tt = 1), A.setLineWidth(Tt * He()), H.isLineSegments ? et.setMode(N.LINES) : H.isLineLoop ? et.setMode(N.LINE_LOOP) : et.setMode(N.LINE_STRIP);
      } else H.isPoints ? et.setMode(N.POINTS) : H.isSprite && et.setMode(N.TRIANGLES);
      if (H.isBatchedMesh) if (Qe.get("WEBGL_multi_draw"))
        et.renderMultiDraw(H._multiDrawStarts, H._multiDrawCounts, H._multiDrawCount);
      else {
        const Tt = H._multiDrawStarts, Ae = H._multiDrawCounts, Nt = H._multiDrawCount, tt = ye ? oe.get(ye).bytesPerElement : 1, Ft = O.get(k).currentProgram.getUniforms();
        for (let Jt = 0; Jt < Nt; Jt++)
          Ft.setValue(N, "_gl_DrawID", Jt), et.render(Tt[Jt] / tt, Ae[Jt]);
      }
      else if (H.isInstancedMesh) et.renderInstances(Pe, pt, H.count);
      else if (K.isInstancedBufferGeometry) {
        const Tt = K._maxInstanceCount !== void 0 ? K._maxInstanceCount : 1 / 0, Ae = Math.min(K.instanceCount, Tt);
        et.renderInstances(Pe, pt, Ae);
      } else et.render(Pe, pt);
    };
    function Vs(x, F, K, k) {
      L !== null && x.isNodeMaterial && L.setObject(k, x), j === !0 && Ee.setState(x, K, !1), x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, Ki(x, F, k), x.side = 0, x.needsUpdate = !0, Ki(x, F, k), x.side = 2) : Ki(x, F, k);
    }
    this.compile = function(x, F, K = null) {
      K === null && (K = x), L !== null && L.renderStart(x, F, K), E = se.get(K), E.init(F), C.push(E), K.traverseVisible(function(H) {
        H.isLight && H.layers.test(F.layers) && (E.pushLight(H), H.castShadow && E.pushShadow(H));
      }), x !== K && x.traverseVisible(function(H) {
        H.isLight && H.layers.test(F.layers) && (E.pushLight(H), H.castShadow && E.pushShadow(H));
      }), E.setupLights(), L !== null && L.updateLights(E.state.lightsArray), le = this.localClippingEnabled, j = Ee.init(this.clippingPlanes, le), j === !0 && Ee.setGlobalState(this.clippingPlanes, F), L !== null && Ne.render(E.state.shadowsArray, K, F);
      const k = /* @__PURE__ */ new Set();
      return x.traverse(function(H) {
        if (!(H.isMesh || H.isPoints || H.isLine || H.isSprite)) return;
        const he = H.material;
        if (he) if (Array.isArray(he)) for (let me = 0; me < he.length; me++) {
          const xe = he[me];
          Vs(xe, K, F, H), k.add(xe);
        }
        else
          Vs(he, K, F, H), k.add(he);
      }), E = C.pop(), L !== null && L.renderEnd(), k;
    }, this.compileAsync = function(x, F, K = null) {
      const k = this.compile(x, F, K);
      return new Promise((H) => {
        function he() {
          if (k.forEach(function(me) {
            const xe = O.get(me).currentProgram;
            (xe === void 0 || xe.isReady()) && k.delete(me);
          }), k.size === 0) {
            H(x);
            return;
          }
          setTimeout(he, 10);
        }
        Qe.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let Nr = null;
    function Ml(x) {
      Nr && Nr(x);
    }
    function Gs() {
      Tn.stop();
    }
    function Hs() {
      Tn.start();
    }
    const Tn = new ol();
    Tn.setAnimationLoop(Ml), typeof self < "u" && Tn.setContext(self), this.setAnimationLoop = function(x) {
      Nr = x, ge.setAnimationLoop(x), x === null ? Tn.stop() : Tn.start();
    }, ge.addEventListener("sessionstart", Gs), ge.addEventListener("sessionend", Hs), this.render = function(x, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (z === !0) return;
      L !== null && L.renderStart(x, F);
      const K = ge.enabled === !0 && ge.isPresenting === !0, k = M !== null && (U === null || K) && M.begin(T, U);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), ge.enabled === !0 && ge.isPresenting === !0 && (M === null || M.isCompositing() === !1) && (ge.cameraAutoUpdate === !0 && ge.updateCamera(F), F = ge.getCamera()), x.isScene === !0 && x.onBeforeRender(T, x, F, U), E = se.get(x, C.length), E.init(F), E.state.textureUnits = X.getTextureUnits(), C.push(E), ve.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), ee.setFromProjectionMatrix(ve, di, F.reversedDepth), le = this.localClippingEnabled, j = Ee.init(this.clippingPlanes, le), g = Te.get(x, w.length), g.init(), w.push(g), ge.enabled === !0 && ge.isPresenting === !0) {
        const he = T.xr.getDepthSensingMesh();
        he !== null && Ur(he, F, -1 / 0, T.sortObjects);
      }
      Ur(x, F, 0, T.sortObjects), g.finish(), L !== null && L.updateLights(E.state.lightsArray), T.sortObjects === !0 && g.sort(ae, Ce), Ve = ge.enabled === !1 || ge.isPresenting === !1 || ge.hasDepthSensing() === !1, Ve && ze.addToRenderList(g, x), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), j === !0 && Ee.beginShadows();
      const H = E.state.shadowsArray;
      if (Ne.render(H, x, F), j === !0 && Ee.endShadows(), (k && M.hasRenderPass()) === !1) {
        const he = g.opaque, me = g.transmissive;
        if (E.setupLights(), F.isArrayCamera) {
          const xe = F.cameras;
          if (me.length > 0) for (let ye = 0, De = xe.length; ye < De; ye++) {
            const Ke = xe[ye];
            Ws(he, me, x, Ke);
          }
          Ve && ze.render(x);
          for (let ye = 0, De = xe.length; ye < De; ye++) {
            const Ke = xe[ye];
            ks(g, x, Ke, Ke.viewport);
          }
        } else
          me.length > 0 && Ws(he, me, x, F), Ve && ze.render(x), ks(g, x, F);
      }
      U !== null && G === 0 && (X.updateMultisampleRenderTarget(U), X.updateRenderTargetMipmap(U)), k && M.end(T), x.isScene === !0 && x.onAfterRender(T, x, F), Me.resetDefaultState(), Q = -1, W = null, C.pop(), C.length > 0 ? (E = C[C.length - 1], X.setTextureUnits(E.state.textureUnits), j === !0 && Ee.setGlobalState(T.clippingPlanes, E.state.camera)) : E = null, w.pop(), w.length > 0 ? g = w[w.length - 1] : g = null, L !== null && L.renderEnd();
    };
    function Ur(x, F, K, k) {
      if (x.visible === !1) return;
      if (x.layers.test(F.layers)) {
        if (x.isGroup) K = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(F);
        else if (x.isLightProbeGrid) E.pushLightProbeGrid(x);
        else if (x.isLight)
          E.pushLight(x), x.castShadow && E.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || x.intersectsFrustum(ee)) {
            k && Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);
            const he = V.update(x), me = x.material;
            me.visible && g.push(x, he, me, K, Re.z, null, F);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || x.intersectsFrustum(ee))) {
          const he = V.update(x), me = x.material;
          if (k && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Re.copy(x.boundingSphere.center)) : (he.boundingSphere === null && he.computeBoundingSphere(), Re.copy(he.boundingSphere.center)), Re.applyMatrix4(x.matrixWorld).applyMatrix4(ve)), Array.isArray(me)) {
            const xe = he.groups;
            for (let ye = 0, De = xe.length; ye < De; ye++) {
              const Ke = xe[ye], Ze = me[Ke.materialIndex];
              Ze && Ze.visible && g.push(x, he, Ze, K, Re.z, Ke, F);
            }
          } else me.visible && g.push(x, he, me, K, Re.z, null, F);
        }
      }
      const H = x.children;
      for (let he = 0, me = H.length; he < me; he++) Ur(H[he], F, K, k);
    }
    function ks(x, F, K, k) {
      const { opaque: H, transmissive: he, transparent: me } = x;
      E.setupLightsView(K), j === !0 && Ee.setGlobalState(T.clippingPlanes, K), k && A.viewport(Y.copy(k)), H.length > 0 && Yi(H, F, K), he.length > 0 && Yi(he, F, K), me.length > 0 && Yi(me, F, K), A.buffers.depth.setTest(!0), A.buffers.depth.setMask(!0), A.buffers.color.setMask(!0), A.setPolygonOffset(!1);
    }
    function Ws(x, F, K, k) {
      if ((K.isScene === !0 ? K.overrideMaterial : null) !== null) return;
      if (E.state.transmissionRenderTarget[k.id] === void 0) {
        const Ze = Qe.has("EXT_color_buffer_half_float") || Qe.has("EXT_color_buffer_float");
        E.state.transmissionRenderTarget[k.id] = new Yt(1, 1, {
          generateMipmaps: !0,
          type: Ze ? En : yn,
          minFilter: Rs,
          samples: Math.max(4, Je.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: $e.workingColorSpace
        });
      }
      const H = E.state.transmissionRenderTarget[k.id], he = k.viewport || Y;
      H.setSize(he.z * T.transmissionResolutionScale, he.w * T.transmissionResolutionScale);
      const me = T.getRenderTarget(), xe = T.getActiveCubeFace(), ye = T.getActiveMipmapLevel();
      T.setRenderTarget(H), T.getClearColor(we), rt = T.getClearAlpha(), rt < 1 && T.setClearColor(16777215, 0.5), T.clear(), Ve && ze.render(K);
      const De = T.toneMapping;
      T.toneMapping = 0;
      const Ke = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), E.setupLightsView(k), j === !0 && Ee.setGlobalState(T.clippingPlanes, k), Yi(x, K, k), X.updateMultisampleRenderTarget(H), X.updateRenderTargetMipmap(H), Qe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ze = !1;
        for (let Pe = 0, st = F.length; Pe < st; Pe++) {
          const { object: pt, geometry: ct, material: et, group: Tt } = F[Pe];
          if (et.side === 2 && pt.layers.test(k.layers)) {
            const Ae = et.side;
            et.side = 1, et.needsUpdate = !0, Xs(pt, K, k, ct, et, Tt), et.side = Ae, et.needsUpdate = !0, Ze = !0;
          }
        }
        Ze === !0 && (X.updateMultisampleRenderTarget(H), X.updateRenderTargetMipmap(H));
      }
      T.setRenderTarget(me, xe, ye), T.setClearColor(we, rt), Ke !== void 0 && (k.viewport = Ke), T.toneMapping = De;
    }
    function Yi(x, F, K) {
      const k = F.isScene === !0 ? F.overrideMaterial : null;
      for (let H = 0, he = x.length; H < he; H++) {
        const me = x[H], { object: xe, geometry: ye, group: De } = me;
        let Ke = me.material;
        Ke.allowOverride === !0 && k !== null && (Ke = k), xe.layers.test(K.layers) && Xs(xe, F, K, ye, Ke, De);
      }
    }
    function Xs(x, F, K, k, H, he) {
      L !== null && H.isNodeMaterial && L.setObject(x, H), x.onBeforeRender(T, F, K, k, H, he), x.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), H.onBeforeRender(T, F, K, k, x, he), H.transparent === !0 && H.side === 2 && H.forceSinglePass === !1 ? (H.side = 1, H.needsUpdate = !0, T.renderBufferDirect(K, F, k, H, x, he), H.side = 0, H.needsUpdate = !0, T.renderBufferDirect(K, F, k, H, x, he), H.side = 2) : T.renderBufferDirect(K, F, k, H, x, he), x.onAfterRender(T, F, K, k, H, he);
    }
    function Ki(x, F, K) {
      F.isScene !== !0 && (F = Ie);
      const k = O.get(x), H = E.state.lights, he = E.state.shadowsArray, me = H.state.version, xe = ce.getParameters(x, H.state, he, F, K, E.state.lightProbeGridArray), ye = ce.getProgramCacheKey(xe);
      let De = k.programs;
      k.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? F.environment : null, k.fog = F.fog;
      const Ke = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      k.envMap = te.get(x.envMap || k.environment, Ke), k.envMapRotation = k.environment !== null && x.envMap === null ? F.environmentRotation : x.envMapRotation, De === void 0 && (x.addEventListener("dispose", Kt), De = /* @__PURE__ */ new Map(), k.programs = De);
      let Ze = De.get(ye);
      if (Ze !== void 0) {
        if (k.currentProgram === Ze && k.lightsStateVersion === me)
          return Ys(x, xe), Ze;
      } else
        xe.uniforms = ce.getUniforms(x), L !== null && x.isNodeMaterial && L.build(x, K, xe), x.onBeforeCompile(xe, T), Ze = ce.acquireProgram(xe, ye), De.set(ye, Ze), k.uniforms = xe.uniforms;
      const Pe = k.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Pe.clippingPlanes = Ee.uniform), Ys(x, xe), k.needsLights = El(x), k.lightsStateVersion = me, k.needsLights && (Pe.ambientLightColor.value = H.state.ambient, Pe.lightProbe.value = H.state.probe, Pe.sunLights.value = H.state.sun, Pe.sunLightShadows.value = H.state.sunShadow, Pe.directionalLights.value = H.state.directional, Pe.directionalLightShadows.value = H.state.directionalShadow, Pe.spotLights.value = H.state.spot, Pe.spotLightShadows.value = H.state.spotShadow, Pe.rectAreaLights.value = H.state.rectArea, Pe.ltc_1.value = H.state.rectAreaLTC1, Pe.ltc_2.value = H.state.rectAreaLTC2, Pe.pointLights.value = H.state.point, Pe.pointLightShadows.value = H.state.pointShadow, Pe.hemisphereLights.value = H.state.hemi, Pe.sunShadowMatrix.value = H.state.sunShadowMatrix, Pe.sunShadowCascade.value = H.state.sunShadowCascade, Pe.directionalShadowMatrix.value = H.state.directionalShadowMatrix, Pe.spotLightMatrix.value = H.state.spotLightMatrix, Pe.spotLightMap.value = H.state.spotLightMap, Pe.pointShadowMatrix.value = H.state.pointShadowMatrix), k.lightProbeGrid = E.state.lightProbeGridArray.length > 0, k.currentProgram = Ze, k.uniformsList = null, Ze;
    }
    function qs(x) {
      if (x.uniformsList === null) {
        const F = x.currentProgram.getUniforms();
        x.uniformsList = yr.seqWithValue(F.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ys(x, F) {
      const K = O.get(x);
      K.outputColorSpace = F.outputColorSpace, K.batching = F.batching, K.batchingColor = F.batchingColor, K.instancing = F.instancing, K.instancingColor = F.instancingColor, K.instancingMorph = F.instancingMorph, K.skinning = F.skinning, K.morphTargets = F.morphTargets, K.morphNormals = F.morphNormals, K.morphColors = F.morphColors, K.morphTargetsCount = F.morphTargetsCount, K.numClippingPlanes = F.numClippingPlanes, K.numIntersection = F.numClipIntersection, K.vertexAlphas = F.vertexAlphas, K.vertexTangents = F.vertexTangents, K.toneMapping = F.toneMapping;
    }
    function Sl(x, F) {
      if (x.length === 0) return null;
      if (x.length === 1) return x[0].texture !== null ? x[0] : null;
      y.setFromMatrixPosition(F.matrixWorld);
      for (let K = 0, k = x.length; K < k; K++) {
        const H = x[K];
        if (H.texture !== null && H.boundingBox.containsPoint(y)) return H;
      }
      return null;
    }
    function xl(x, F, K, k, H) {
      F.isScene !== !0 && (F = Ie), X.resetTextureUnits();
      const he = F.fog, me = k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial ? F.environment : null, xe = U === null ? T.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : $e.workingColorSpace, ye = k.isMeshStandardMaterial || k.isMeshLambertMaterial && !k.envMap || k.isMeshPhongMaterial && !k.envMap, De = te.get(k.envMap || me, ye), Ke = k.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4, Ze = !!K.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Pe = !!K.morphAttributes.position, st = !!K.morphAttributes.normal, pt = !!K.morphAttributes.color;
      let ct = 0;
      k.toneMapped && (U === null || U.isXRRenderTarget === !0) && (ct = T.toneMapping);
      const et = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, Tt = et !== void 0 ? et.length : 0, Ae = O.get(k), Nt = E.state.lights;
      if (j === !0 && (le === !0 || x !== W)) {
        const ot = x === W && k.id === Q;
        Ee.setState(k, x, ot);
      }
      let tt = !1;
      k.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Nt.state.version || Ae.outputColorSpace !== xe || H.isBatchedMesh && Ae.batching === !1 || !H.isBatchedMesh && Ae.batching === !0 || H.isBatchedMesh && Ae.batchingColor === !0 && H._colorsTexture === null || H.isBatchedMesh && Ae.batchingColor === !1 && H._colorsTexture !== null || H.isInstancedMesh && Ae.instancing === !1 || !H.isInstancedMesh && Ae.instancing === !0 || H.isSkinnedMesh && Ae.skinning === !1 || !H.isSkinnedMesh && Ae.skinning === !0 || H.isInstancedMesh && Ae.instancingColor === !0 && H.instanceColor === null || H.isInstancedMesh && Ae.instancingColor === !1 && H.instanceColor !== null || H.isInstancedMesh && Ae.instancingMorph === !0 && H.morphTexture === null || H.isInstancedMesh && Ae.instancingMorph === !1 && H.morphTexture !== null || Ae.envMap !== De || k.fog === !0 && Ae.fog !== he || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== Ee.numPlanes || Ae.numIntersection !== Ee.numIntersection) || Ae.vertexAlphas !== Ke || Ae.vertexTangents !== Ze || Ae.morphTargets !== Pe || Ae.morphNormals !== st || Ae.morphColors !== pt || Ae.toneMapping !== ct || Ae.morphTargetsCount !== Tt || !!Ae.lightProbeGrid != E.state.lightProbeGridArray.length > 0) && (tt = !0) : (tt = !0, Ae.__version = k.version);
      let Ft = Ae.currentProgram;
      tt === !0 && (Ft = Ki(k, F, H), L && k.isNodeMaterial && L.onUpdateProgram(k, Ft, Ae));
      let Jt = !1, pn = !1, Hn = !1;
      const at = Ft.getUniforms(), mt = Ae.uniforms;
      if (A.useProgram(Ft.program) && (Jt = !0, pn = !0, Hn = !0), k.id !== Q && (Q = k.id, pn = !0), Ae.needsLights) {
        const ot = Sl(E.state.lightProbeGridArray, H);
        Ae.lightProbeGrid !== ot && (Ae.lightProbeGrid = ot, pn = !0);
      }
      if (Jt || W !== x) {
        A.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), at.setValue(N, "projectionMatrix", x.projectionMatrix), at.setValue(N, "viewMatrix", x.matrixWorldInverse);
        const ot = at.map.cameraPosition;
        ot !== void 0 && ot.setValue(N, _e.setFromMatrixPosition(x.matrixWorld)), Je.logarithmicDepthBuffer && at.setValue(N, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && at.setValue(N, "isOrthographic", x.isOrthographicCamera === !0), W !== x && (W = x, pn = !0, Hn = !0);
      }
      if (Ae.needsLights && (Nt.state.sunShadowMap.length > 0 && at.setValue(N, "sunShadowMap", Nt.state.sunShadowMap, X), Nt.state.directionalShadowMap.length > 0 && at.setValue(N, "directionalShadowMap", Nt.state.directionalShadowMap, X), Nt.state.spotShadowMap.length > 0 && at.setValue(N, "spotShadowMap", Nt.state.spotShadowMap, X), Nt.state.pointShadowMap.length > 0 && at.setValue(N, "pointShadowMap", Nt.state.pointShadowMap, X)), H.isSkinnedMesh) {
        at.setOptional(N, H, "bindMatrix"), at.setOptional(N, H, "bindMatrixInverse");
        const ot = H.skeleton;
        ot && (ot.boneTexture === null && ot.computeBoneTexture(), at.setValue(N, "boneTexture", ot.boneTexture, X));
      }
      H.isBatchedMesh && (at.setOptional(N, H, "batchingTexture"), at.setValue(N, "batchingTexture", H._matricesTexture, X), at.setOptional(N, H, "batchingIdTexture"), at.setValue(N, "batchingIdTexture", H._indirectTexture, X), at.setOptional(N, H, "batchingColorTexture"), H._colorsTexture !== null && at.setValue(N, "batchingColorTexture", H._colorsTexture, X));
      const mn = K.morphAttributes;
      if ((mn.position !== void 0 || mn.normal !== void 0 || mn.color !== void 0) && je.update(H, K, Ft), (pn || Ae.receiveShadow !== H.receiveShadow) && (Ae.receiveShadow = H.receiveShadow, at.setValue(N, "receiveShadow", H.receiveShadow)), (k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial) && k.envMap === null && F.environment !== null && (mt.envMapIntensity.value = F.environmentIntensity), mt.dfgLUT !== void 0 && (mt.dfgLUT.value = Rd()), pn) {
        if (at.setValue(N, "toneMappingExposure", T.toneMappingExposure), Ae.needsLights && yl(mt, Hn), he && k.fog === !0 && Se.refreshFogUniforms(mt, he), Se.refreshMaterialUniforms(mt, k, re, J, E.state.transmissionRenderTarget[x.id]), Ae.needsLights && Ae.lightProbeGrid) {
          const ot = Ae.lightProbeGrid;
          mt.probesSH.value = ot.texture, mt.probesMin.value.copy(ot.boundingBox.min), mt.probesMax.value.copy(ot.boundingBox.max), mt.probesResolution.value.copy(ot.resolution);
        }
        yr.upload(N, qs(Ae), mt, X);
      }
      if (k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (yr.upload(N, qs(Ae), mt, X), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && at.setValue(N, "center", H.center), at.setValue(N, "modelViewMatrix", H.modelViewMatrix), at.setValue(N, "normalMatrix", H.normalMatrix), at.setValue(N, "modelMatrix", H.matrixWorld), k.uniformsGroups !== void 0) {
        const ot = k.uniformsGroups;
        for (let Mi = 0, kn = ot.length; Mi < kn; Mi++) {
          const Js = ot[Mi];
          be.update(Js, Ft), be.bind(Js, Ft);
        }
      }
      return Ft;
    }
    function yl(x, F) {
      x.ambientLightColor.needsUpdate = F, x.lightProbe.needsUpdate = F, x.sunLights.needsUpdate = F, x.sunLightShadows.needsUpdate = F, x.directionalLights.needsUpdate = F, x.directionalLightShadows.needsUpdate = F, x.pointLights.needsUpdate = F, x.pointLightShadows.needsUpdate = F, x.spotLights.needsUpdate = F, x.spotLightShadows.needsUpdate = F, x.rectAreaLights.needsUpdate = F, x.hemisphereLights.needsUpdate = F;
    }
    function El(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return G;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(x, F, K) {
      const k = O.get(x);
      k.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, k.__autoAllocateDepthBuffer === !1 && (k.__useRenderToTexture = !1), O.get(x.texture).__webglTexture = F, O.get(x.depthTexture).__webglTexture = k.__autoAllocateDepthBuffer ? void 0 : K, k.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, F) {
      const K = O.get(x);
      K.__webglFramebuffer = F, K.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(x, F = 0, K = 0) {
      U = x, R = F, G = K;
      let k = null, H = !1, he = !1;
      if (x) {
        const me = O.get(x);
        if (me.__useDefaultFramebuffer !== void 0) {
          A.bindFramebuffer(N.FRAMEBUFFER, me.__webglFramebuffer), Y.copy(x.viewport), Z.copy(x.scissor), Le = x.scissorTest, A.viewport(Y), A.scissor(Z), A.setScissorTest(Le), Q = -1;
          return;
        } else if (me.__webglFramebuffer === void 0) X.setupRenderTarget(x);
        else if (me.__hasExternalTextures) X.rebindTextures(x, O.get(x.texture).__webglTexture, O.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const De = x.depthTexture;
          if (me.__boundDepthTexture !== De) {
            if (De !== null && O.has(De) && (x.width !== De.image.width || x.height !== De.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            X.setupDepthRenderbuffer(x);
          }
        }
        const xe = x.texture;
        (xe.isData3DTexture || xe.isDataArrayTexture || xe.isCompressedArrayTexture) && (he = !0);
        const ye = O.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(ye[F]) ? k = ye[F][K] : k = ye[F], H = !0) : x.samples > 0 && X.useMultisampledRTT(x) === !1 ? k = O.get(x).__webglMultisampledFramebuffer : Array.isArray(ye) ? k = ye[K] : k = ye, Y.copy(x.viewport), Z.copy(x.scissor), Le = x.scissorTest;
      } else
        Y.copy(Ue).multiplyScalar(re).floor(), Z.copy(ue).multiplyScalar(re).floor(), Le = qe;
      if (K !== 0 && (k = I), A.bindFramebuffer(N.FRAMEBUFFER, k) && A.drawBuffers(x, k), A.viewport(Y), A.scissor(Z), A.setScissorTest(Le), H) {
        const me = O.get(x.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + F, me.__webglTexture, K);
      } else if (he) {
        const me = F;
        for (let xe = 0; xe < x.textures.length; xe++) {
          const ye = O.get(x.textures[xe]);
          N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0 + xe, ye.__webglTexture, K, me);
        }
      } else if (x !== null && K !== 0) {
        const me = O.get(x.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, me.__webglTexture, K);
      }
      Q = -1;
    };
    function Ks(x) {
      const F = O.get(x);
      return (F.__readFormat !== x.format || F.__readType !== x.type) && (F.__readFormat = x.format, F.__readType = x.type, F.__formatReadable = Je.textureFormatReadable(x.format), F.__typeReadable = Je.textureTypeReadable(x.type)), F;
    }
    this.readRenderTargetPixels = function(x, F, K, k, H, he, me, xe = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ye = O.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && me !== void 0 && (ye = ye[me]), ye) {
        A.bindFramebuffer(N.FRAMEBUFFER, ye);
        try {
          const De = x.textures[xe], Ke = De.format, Ze = De.type;
          x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + xe);
          const Pe = Ks(De);
          if (Pe.__formatReadable === !1) {
            Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (Pe.__typeReadable === !1) {
            Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= x.width - k && K >= 0 && K <= x.height - H && N.readPixels(F, K, k, H, ne.convert(Ke), ne.convert(Ze), he);
        } finally {
          const De = U !== null ? O.get(U).__webglFramebuffer : null;
          A.bindFramebuffer(N.FRAMEBUFFER, De);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, F, K, k, H, he, me, xe = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ye = O.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && me !== void 0 && (ye = ye[me]), ye) if (F >= 0 && F <= x.width - k && K >= 0 && K <= x.height - H) {
        A.bindFramebuffer(N.FRAMEBUFFER, ye);
        const De = x.textures[xe], Ke = De.format, Ze = De.type;
        x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + xe);
        const Pe = Ks(De);
        if (Pe.__formatReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (Pe.__typeReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const st = N.createBuffer();
        N.bindBuffer(N.PIXEL_PACK_BUFFER, st), N.bufferData(N.PIXEL_PACK_BUFFER, he.byteLength, N.STREAM_READ), N.readPixels(F, K, k, H, ne.convert(Ke), ne.convert(Ze), 0), N.bindBuffer(N.PIXEL_PACK_BUFFER, null);
        const pt = U !== null ? O.get(U).__webglFramebuffer : null;
        A.bindFramebuffer(N.FRAMEBUFFER, pt);
        const ct = N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return N.flush(), await xc(N, ct, 4), N.bindBuffer(N.PIXEL_PACK_BUFFER, st), N.getBufferSubData(N.PIXEL_PACK_BUFFER, 0, he), N.bindBuffer(N.PIXEL_PACK_BUFFER, null), N.deleteBuffer(st), N.deleteSync(ct), he;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, F = null, K = 0) {
      const k = Math.pow(2, -K), H = Math.floor(x.image.width * k), he = Math.floor(x.image.height * k), me = F !== null ? F.x : 0, xe = F !== null ? F.y : 0;
      X.setTexture2D(x, 0), N.copyTexSubImage2D(N.TEXTURE_2D, K, 0, 0, me, xe, H, he), A.unbindTexture();
    }, this.copyTextureToTexture = function(x, F, K = null, k = null, H = 0, he = 0) {
      let me, xe, ye, De, Ke, Ze, Pe, st, pt;
      const ct = x.isCompressedTexture ? x.mipmaps[he] : x.image;
      if (K !== null)
        me = K.max.x - K.min.x, xe = K.max.y - K.min.y, ye = K.isBox3 ? K.max.z - K.min.z : 1, De = K.min.x, Ke = K.min.y, Ze = K.isBox3 ? K.min.z : 0;
      else {
        const mt = Math.pow(2, -H);
        me = Math.floor(ct.width * mt), xe = Math.floor(ct.height * mt), x.isDataArrayTexture ? ye = ct.depth : x.isData3DTexture ? ye = Math.floor(ct.depth * mt) : ye = 1, De = 0, Ke = 0, Ze = 0;
      }
      k !== null ? (Pe = k.x, st = k.y, pt = k.z) : (Pe = 0, st = 0, pt = 0);
      const et = ne.convert(F.format), Tt = ne.convert(F.type);
      let Ae;
      F.isData3DTexture ? (X.setTexture3D(F, 0), Ae = N.TEXTURE_3D) : F.isDataArrayTexture || F.isCompressedArrayTexture ? (X.setTexture2DArray(F, 0), Ae = N.TEXTURE_2D_ARRAY) : (X.setTexture2D(F, 0), Ae = N.TEXTURE_2D), A.activeTexture(N.TEXTURE0), A.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, F.flipY), A.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), A.pixelStorei(N.UNPACK_ALIGNMENT, F.unpackAlignment);
      const Nt = A.getParameter(N.UNPACK_ROW_LENGTH), tt = A.getParameter(N.UNPACK_IMAGE_HEIGHT), Ft = A.getParameter(N.UNPACK_SKIP_PIXELS), Jt = A.getParameter(N.UNPACK_SKIP_ROWS), pn = A.getParameter(N.UNPACK_SKIP_IMAGES);
      A.pixelStorei(N.UNPACK_ROW_LENGTH, ct.width), A.pixelStorei(N.UNPACK_IMAGE_HEIGHT, ct.height), A.pixelStorei(N.UNPACK_SKIP_PIXELS, De), A.pixelStorei(N.UNPACK_SKIP_ROWS, Ke), A.pixelStorei(N.UNPACK_SKIP_IMAGES, Ze);
      const Hn = x.isDataArrayTexture || x.isData3DTexture, at = F.isDataArrayTexture || F.isData3DTexture;
      if (x.isDepthTexture) {
        const mt = O.get(x), mn = O.get(F), ot = O.get(mt.__renderTarget), Mi = O.get(mn.__renderTarget);
        A.bindFramebuffer(N.READ_FRAMEBUFFER, ot.__webglFramebuffer), A.bindFramebuffer(N.DRAW_FRAMEBUFFER, Mi.__webglFramebuffer);
        for (let kn = 0; kn < ye; kn++)
          Hn && (N.framebufferTextureLayer(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, O.get(x).__webglTexture, H, Ze + kn), N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, O.get(F).__webglTexture, he, pt + kn)), N.blitFramebuffer(De, Ke, me, xe, Pe, st, me, xe, N.DEPTH_BUFFER_BIT, N.NEAREST);
        A.bindFramebuffer(N.READ_FRAMEBUFFER, null), A.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
      } else if (H !== 0 || x.isRenderTargetTexture || O.has(x)) {
        const mt = O.get(x), mn = O.get(F);
        A.bindFramebuffer(N.READ_FRAMEBUFFER, q), A.bindFramebuffer(N.DRAW_FRAMEBUFFER, P);
        for (let ot = 0; ot < ye; ot++)
          Hn ? N.framebufferTextureLayer(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, mt.__webglTexture, H, Ze + ot) : N.framebufferTexture2D(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, mt.__webglTexture, H), at ? N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, mn.__webglTexture, he, pt + ot) : N.framebufferTexture2D(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, mn.__webglTexture, he), H !== 0 ? N.blitFramebuffer(De, Ke, me, xe, Pe, st, me, xe, N.COLOR_BUFFER_BIT, N.NEAREST) : at ? N.copyTexSubImage3D(Ae, he, Pe, st, pt + ot, De, Ke, me, xe) : N.copyTexSubImage2D(Ae, he, Pe, st, De, Ke, me, xe);
        A.bindFramebuffer(N.READ_FRAMEBUFFER, null), A.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
      } else at ? x.isDataTexture || x.isData3DTexture ? N.texSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, Tt, ct.data) : F.isCompressedArrayTexture ? N.compressedTexSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, ct.data) : N.texSubImage3D(Ae, he, Pe, st, pt, me, xe, ye, et, Tt, ct) : x.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, he, Pe, st, me, xe, et, Tt, ct.data) : x.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, he, Pe, st, ct.width, ct.height, et, ct.data) : N.texSubImage2D(N.TEXTURE_2D, he, Pe, st, me, xe, et, Tt, ct);
      A.pixelStorei(N.UNPACK_ROW_LENGTH, Nt), A.pixelStorei(N.UNPACK_IMAGE_HEIGHT, tt), A.pixelStorei(N.UNPACK_SKIP_PIXELS, Ft), A.pixelStorei(N.UNPACK_SKIP_ROWS, Jt), A.pixelStorei(N.UNPACK_SKIP_IMAGES, pn), he === 0 && F.generateMipmaps && N.generateMipmap(Ae), A.unbindTexture();
    }, this.initRenderTarget = function(x) {
      O.get(x).__webglFramebuffer === void 0 && X.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? X.setTextureCube(x, 0) : x.isData3DTexture ? X.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? X.setTexture2DArray(x, 0) : X.setTexture2D(x, 0), A.unbindTexture();
    }, this.resetState = function() {
      R = 0, G = 0, U = null, A.reset(), Me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return di;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = $e._getDrawingBufferColorSpace(e), t.unpackColorSpace = $e._getUnpackColorSpace();
  }
}, Pi = new D();
function zt(e, t, n, i, r, s) {
  const a = 2 * Math.PI * r / 4, o = Math.max(s - 2 * r, 0), c = Math.PI / 4;
  Pi.copy(t), Pi[i] = 0, Pi.normalize();
  const l = 0.5 * a / (a + o), u = 1 - Pi.angleTo(e) / c;
  return Math.sign(Pi[n]) === 1 ? u * l : o / (a + o) + l + l * (1 - u);
}
var Fs = class ml extends ki {
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
    const c = new D(), l = new D(), u = new D(t, n, i).divideScalar(2).subScalar(s), d = this.attributes.position.array, h = this.attributes.normal.array, m = this.attributes.uv.array, _ = d.length / 6, v = new D(), p = 0.5 / a;
    for (let f = 0, b = 0; f < d.length; f += 3, b += 2)
      switch (c.fromArray(d, f), l.copy(c), l.x -= Math.sign(l.x) * p, l.y -= Math.sign(l.y) * p, l.z -= Math.sign(l.z) * p, l.normalize(), d[f + 0] = u.x * Math.sign(c.x) + l.x * s, d[f + 1] = u.y * Math.sign(c.y) + l.y * s, d[f + 2] = u.z * Math.sign(c.z) + l.z * s, h[f + 0] = l.x, h[f + 1] = l.y, h[f + 2] = l.z, Math.floor(f / _)) {
        case 0:
          v.set(1, 0, 0), m[b + 0] = zt(v, l, "z", "y", s, i), m[b + 1] = 1 - zt(v, l, "y", "z", s, n);
          break;
        case 1:
          v.set(-1, 0, 0), m[b + 0] = 1 - zt(v, l, "z", "y", s, i), m[b + 1] = 1 - zt(v, l, "y", "z", s, n);
          break;
        case 2:
          v.set(0, 1, 0), m[b + 0] = 1 - zt(v, l, "x", "z", s, t), m[b + 1] = zt(v, l, "z", "x", s, i);
          break;
        case 3:
          v.set(0, -1, 0), m[b + 0] = 1 - zt(v, l, "x", "z", s, t), m[b + 1] = 1 - zt(v, l, "z", "x", s, i);
          break;
        case 4:
          v.set(0, 0, 1), m[b + 0] = 1 - zt(v, l, "x", "y", s, t), m[b + 1] = 1 - zt(v, l, "y", "x", s, n);
          break;
        case 5:
          v.set(0, 0, -1), m[b + 0] = zt(v, l, "x", "y", s, t), m[b + 1] = 1 - zt(v, l, "y", "x", s, n);
          break;
      }
  }
  static fromJSON(t) {
    return new ml(t.width, t.height, t.depth, t.segments, t.radius);
  }
}, Pd = class extends yo {
  constructor() {
    super(), this.name = "RoomEnvironment", this.position.y = -3.5;
    const e = new ki();
    e.deleteAttribute("uv");
    const t = new gt({ side: 1 }), n = new gt(), i = new Qh(16777215, 900, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const r = new ut(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const s = new qc(e, n, 6), a = new Lt();
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), a.updateMatrix(), s.setMatrixAt(0, a.matrix), a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), a.updateMatrix(), s.setMatrixAt(1, a.matrix), a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), a.updateMatrix(), s.setMatrixAt(2, a.matrix), a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), a.updateMatrix(), s.setMatrixAt(3, a.matrix), a.position.set(2.291, -0.756, -2.621), a.rotation.set(0, -0.286, 0), a.scale.set(1.546, 1.552, 1.496), a.updateMatrix(), s.setMatrixAt(4, a.matrix), a.position.set(-2.193, -0.369, -5.547), a.rotation.set(0, 0.516, 0), a.scale.set(3.875, 3.487, 2.986), a.updateMatrix(), s.setMatrixAt(5, a.matrix), this.add(s);
    const o = new ut(e, si(50));
    o.position.set(-16.116, 14.37, 8.208), o.scale.set(0.1, 2.428, 2.739), this.add(o);
    const c = new ut(e, si(50));
    c.position.set(-16.109, 18.021, -8.207), c.scale.set(0.1, 2.425, 2.751), this.add(c);
    const l = new ut(e, si(17));
    l.position.set(14.904, 12.198, -1.832), l.scale.set(0.15, 4.265, 6.331), this.add(l);
    const u = new ut(e, si(43));
    u.position.set(-0.462, 8.89, 14.52), u.scale.set(4.38, 5.441, 0.088), this.add(u);
    const d = new ut(e, si(20));
    d.position.set(3.235, 11.486, -12.541), d.scale.set(2.5, 2, 0.1), this.add(d);
    const h = new ut(e, si(100));
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
function si(e) {
  return new Uh({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: e
  });
}
var Bs = [...document.querySelectorAll("[data-sculpture], [data-chip-studio]")], Xt = matchMedia("(prefers-reduced-motion: reduce)"), eo = 54e-5, to = 1.3, hn = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", Pn = '"Source Sans 3", system-ui, sans-serif', Mt;
try {
  Bs.length && Ld();
} catch (e) {
  gl(), console.warn("3D studio unavailable; using the lightweight sculptures.", e.message);
}
function gl() {
  Bs.forEach((e) => {
    e.classList.remove("studio-ready"), e.querySelector(".scene-studio-output")?.remove();
    const t = e.querySelector(".chip-loading");
    t && (t.textContent = "The interactive model couldn’t load in this browser.");
  }), Mt?.domElement.remove(), Mt?.dispose();
}
function Ld() {
  Mt = new Cd({
    antialias: !0,
    alpha: !0,
    powerPreference: "low-power"
  }), Mt.setPixelRatio(Math.min(Math.max(devicePixelRatio, 1.5), 2)), Mt.setClearColor(0, 0), Mt.outputColorSpace = Rt, Mt.toneMapping = 4, Mt.toneMappingExposure = 1.05, Mt.shadowMap.enabled = !0, Mt.shadowMap.type = 1, Mt.shadowMap.autoUpdate = !1;
  const e = Mt.domElement;
  e.className = "sculpture-studio-canvas", e.setAttribute("aria-hidden", "true");
  const t = new bs(Mt), n = new Pd(), i = t.fromScene(n, 0.04);
  n.dispose(), t.dispose();
  const r = {
    cream: new Ln({
      color: 15198704,
      roughness: 0.34,
      metalness: 0.04,
      clearcoat: 0.3,
      clearcoatRoughness: 0.26,
      envMapIntensity: 0.9
    }),
    navy: new Ln({
      color: 1579843,
      roughness: 0.27,
      metalness: 0.55,
      clearcoat: 0.36,
      envMapIntensity: 1.15
    }),
    orange: new Ln({
      color: 12088907,
      roughness: 0.3,
      metalness: 0.72,
      clearcoat: 0.5,
      clearcoatRoughness: 0.24,
      envMapIntensity: 0.8
    }),
    metal: new gt({
      color: 13150825,
      roughness: 0.29,
      metalness: 0.82,
      envMapIntensity: 1.1
    }),
    glass: new Ln({
      color: 14015218,
      roughness: 0.15,
      metalness: 0.22,
      transparent: !0,
      opacity: 0.38,
      clearcoat: 1,
      depthWrite: !1,
      side: 2
    })
  }, s = Bs.map((v, p) => {
    const f = Id(v, p, r, i.texture), b = document.createElement("canvas");
    return b.className = "scene-studio-output", b.setAttribute("aria-hidden", "true"), f.context = b.getContext("2d", { alpha: !0 }), f.output = b, v.appendChild(b), f;
  });
  let a = 0, o = 0, c = !0, l = !1;
  const u = () => {
    c = !0, h();
  }, d = new IntersectionObserver((v) => {
    v.forEach((p) => {
      s.find((f) => f.el === p.target).visible = p.isIntersecting;
    }), c = !0, h();
  });
  s.forEach((v) => d.observe(v.el)), s.filter((v) => v.hover).forEach((v) => {
    const p = v.el.closest(".branch-art") || v.el;
    p.addEventListener("pointermove", (f) => {
      if (f.pointerType !== "mouse") return;
      const b = p.getBoundingClientRect();
      v.hover.x = (f.clientX - b.left) / b.width - 0.5, v.hover.y = (f.clientY - b.top) / b.height - 0.5, v.hover.active = !0, h();
    }), p.addEventListener("pointerleave", () => {
      v.hover.active = !1, h();
    });
  });
  function h() {
    !a && !l && !document.hidden && (a = requestAnimationFrame(m));
  }
  function m(v) {
    if (a = 0, l || document.hidden) return;
    if (v - o < 33) {
      h();
      return;
    }
    o = v;
    const p = s.filter((f) => f.visible);
    if (!(!c && (Xt.matches || !p.length))) {
      Mt.setScissorTest(!1);
      for (const f of p) {
        const { el: b, scene: y, camera: g, object: E, light: w } = f, C = b.getBoundingClientRect();
        if (C.bottom <= 0 || C.top >= innerHeight || C.width <= 0) continue;
        const M = C.width / C.height, T = f.kind === "chip" ? Math.max(2.55, 2.75 / M) : f.hover ? f.size : f.kind === "bridge" ? 2.2 : 1.95;
        g.left = -T * M, g.right = T * M, g.top = T, g.bottom = -T, g.updateProjectionMatrix();
        const z = Xt.matches ? 0 : v * 22e-5 + f.phase;
        if (f.kind === "chip") {
          const I = b.closest(".maker-model"), q = Xt.matches ? 1 : Number(I.style.getPropertyValue("--assembly-progress")) || 0, P = parseFloat(I.style.getPropertyValue("--yaw"));
          E.rotation.y = ((Number.isFinite(P) ? P : -32) + 32) * Math.PI / 180, f.chipLayers.forEach((R) => {
            R.group.position.y = R.y + (1 - q) * R.lift;
          }), b.dataset.renderedAssembly = q.toFixed(3), (E.userData.pulses || []).forEach((R, G) => {
            const U = (v * eo + G * 0.27) % to;
            R.group.visible = !Xt.matches && U < 1, R.group.visible && R.dots.forEach((Q, W) => {
              const Y = Math.max(0, U - W * 0.025);
              Q.position.copy(R.curve.getPointAt(Y)), Q.position.y += 0.015, Q.material.opacity = Math.sin(Math.PI * U) * (1 - W / R.dots.length);
            });
          }), b.dataset.pulsesActive = String(!Xt.matches), b.dataset.pulsePhase = Xt.matches ? "0" : (v * eo % to).toFixed(3);
        } else if (f.hover) {
          const I = f.hover, q = I.active ? I.x * 1.5 : Math.sin(z) * 0.12, P = I.active ? I.y * 0.22 : 0;
          I.yaw += (q - I.yaw) * (Xt.matches ? 1 : 0.14), I.pitch += (P - I.pitch) * (Xt.matches ? 1 : 0.14), E.rotation.y = f.rotation + I.yaw, E.rotation.x = I.pitch;
        } else
          E.rotation.y = f.rotation + Math.sin(z) * 0.09 + (parseFloat(b.style.getPropertyValue("--look-x")) || 0) * 0.013, E.rotation.x = (parseFloat(b.style.getPropertyValue("--look-y")) || 0) * 8e-3;
        E.position.y = Xt.matches || f.hover ? 0 : Math.sin(z * 1.3) * 0.045, w.shadow.needsUpdate = !0, Mt.shadowMap.needsUpdate = !0, Mt.setSize(Math.ceil(C.width), Math.ceil(C.height), !1), Mt.setViewport(0, 0, C.width, C.height), Mt.clear(), Mt.render(y, g);
        const L = Mt.domElement;
        (f.output.width !== L.width || f.output.height !== L.height) && (f.output.width = L.width, f.output.height = L.height), f.context.clearRect(0, 0, L.width, L.height), f.context.drawImage(L, 0, 0), b.classList.add("studio-ready");
      }
      c = !1, p.length && !Xt.matches && h();
    }
  }
  const _ = () => {
    c = !0, h();
  };
  addEventListener("resize", u, { passive: !0 }), addEventListener("scroll", _, { passive: !0 }), addEventListener("pageshow", _), document.addEventListener("visibilitychange", () => {
    document.hidden ? (cancelAnimationFrame(a), a = 0) : _();
  }), Xt.addEventListener("change", _), document.querySelector(".maker-model")?.addEventListener("maker-model-change", _), e.addEventListener("webglcontextlost", (v) => {
    v.preventDefault(), l = !0, cancelAnimationFrame(a), d.disconnect(), gl();
  }), u();
}
function Id(e, t, n, i) {
  const r = e.hasAttribute("data-chip-studio") ? "chip" : [...e.classList].find((y) => y.startsWith("sculpture-") && y !== "sculpture-scene").slice(10), s = [
    "apps",
    "physical",
    "research",
    "other"
  ].includes(r), a = new yo();
  a.environment = i;
  const o = new Pr(-3, 3, 2.15, -2.15, 0.1, 50);
  o.position.set(5.4, 3.9, 6.4), r === "chip" ? o.position.set(4.9, 5.8, 6.9) : s && o.position.set(4.4, 3.5, 7.7);
  const c = {
    apps: [
      1.05,
      2.25,
      0.3
    ],
    physical: [
      0.85,
      1.95,
      0.1
    ],
    research: [
      1.02,
      2,
      0.36
    ],
    other: [
      0.95,
      2,
      0.2
    ]
  }[r];
  o.lookAt(0, r === "chip" ? 0.8 : c ? c[0] : 0.9, 0), a.add(new Zh(r === "chip" || s ? 16774367 : 16119551, 1053481, 1.4));
  const l = new hs(r === "chip" || s ? 16772821 : 16382719, r === "chip" || s ? 2.1 : 2.6);
  l.position.set(-3, 7, 4), l.castShadow = !0, l.shadow.mapSize.set(r === "chip" || s ? 1024 : 512, r === "chip" || s ? 1024 : 512), l.shadow.camera.left = l.shadow.camera.bottom = -4, l.shadow.camera.right = l.shadow.camera.top = 4, l.shadow.normalBias = 0.035, l.shadow.bias = -2e-4, l.shadow.radius = 4, a.add(l);
  const u = new hs(r === "chip" || s ? 14476782 : 11183615, r === "chip" || s ? 0.75 : 1.5);
  if (u.position.set(4, 3, -4), a.add(u), r === "chip") {
    l.color.set(16774889), l.intensity = 2.5, u.intensity = 1.65;
    const y = new hs(14806271, 0.65);
    y.position.set(-5, 1, -2), a.add(y);
  }
  const d = new qt();
  a.add(d);
  const h = (y, g, E = 0, w = 0, C = 0) => {
    const M = new ut(y, n[g]);
    return M.position.set(E, w, C), M.castShadow = !0, M.receiveShadow = !0, d.add(M), M;
  }, m = (y, g, E, w, C, M, T, z = 0.08) => h(new Fs(y, g, E, 4, z), w, C, M, T), _ = (y, g, E, w, C) => h(new Ns(y, 48, 32), g, E, w, C), v = (y, g, E, w, C, M) => h(new Zo(y, g, 24, 96), E, w, C, M);
  r !== "chip" && !s && m(s ? 4.2 : 3.4, 0.16, s ? 3.1 : 2.65, "navy", 0, -0.04, 0, 0.075);
  const p = new ut(new Fn(12, 12), new Rh({
    color: 69142,
    opacity: s ? 0.06 : 0.14
  }));
  p.rotation.x = -Math.PI / 2, p.position.y = r === "chip" ? -0.46 : -0.135, p.receiveShadow = !0, a.add(p);
  let f = null;
  if (r === "chip") f = Fd(d, n);
  else if (s) Nd(d, r);
  else if (r === "tools") {
    m(2.2, 0.14, 1.75, "cream", 0, 0.23, 0);
    const y = m(1.96, 0.12, 1.52, "metal", 0, 0.75, 0, 0.05);
    y.rotation.y = 0.12;
    const g = m(1.74, 0.12, 1.28, "glass", 0, 1.38, 0, 0.05);
    g.rotation.y = -0.12, _(0.37, "orange", 0, 1.04, 0.03);
    for (const E of [-0.69, 0.69]) for (const w of [-0.47, 0.47]) h(new fi(0.035, 0.035, 1.25, 16), "metal", E, 0.79, w);
  } else if (r === "workshops")
    [
      0.23,
      0.59,
      0.95
    ].forEach((y, g) => {
      const E = v(0.7 - g * 0.05, 0.15, g === 1 ? "navy" : "cream", 0, y, 0);
      E.rotation.x = Math.PI / 2;
    }), _(0.32, "orange", 0.12, 1.41, 0), v(0.42, 0.035, "metal", -0.01, 1.4, 0).rotation.y = 0.6;
  else if (r === "community" || r === "people") {
    const y = v(0.62, 0.18, "cream", -0.58, 0.84, 0.06);
    y.rotation.y = -0.3;
    const g = v(0.62, 0.18, "orange", 0.45, 0.84, 0.07);
    g.rotation.y = 0.9, v(0.55, 0.16, "navy", 0.03, 1.27, -0.12).rotation.set(0.3, -0.8, 0.1);
  } else if (r === "hackathon") {
    h(new wh(0.66, 0.19, 160, 24, 2, 3), "cream", 0, 1.04, 0).rotation.set(0.1, 0.3, -0.35);
    const y = v(1.15, 0.035, "metal", 0, 0.98, 0);
    y.rotation.x = 1.1, _(0.24, "orange", 0.9, 0.51, 0.44);
  } else {
    const y = new Vo();
    y.moveTo(-1.12, 0), y.lineTo(-1.12, 1.05), y.absarc(0, 1.05, 1.12, Math.PI, 0, !0), y.lineTo(1.12, 0), y.lineTo(0.73, 0), y.lineTo(0.73, 1.05), y.absarc(0, 1.05, 0.73, 0, Math.PI, !1), y.lineTo(-0.73, 0), y.closePath(), h(new Eh(y, {
      depth: 0.45,
      bevelEnabled: !0,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.055,
      bevelThickness: 0.055,
      curveSegments: 48
    }), "cream", 0, 0.1, -0.3), _(0.38, "orange", 0.08, 0.49, 0.24);
    const g = v(0.51, 0.025, "metal", 0.08, 0.5, 0.24);
    g.rotation.x = 1.25;
  }
  const b = c ? {
    x: 0,
    y: 0,
    yaw: 0,
    pitch: 0,
    active: !1
  } : null;
  return {
    el: e,
    kind: r,
    scene: a,
    camera: o,
    object: d,
    light: l,
    phase: t * 1.9,
    rotation: c ? c[2] : -0.12,
    size: c?.[1],
    visible: !1,
    hover: b,
    chipLayers: f
  };
}
function Nd(e, t) {
  const n = {
    cream: new gt({
      color: 14341061,
      roughness: 0.54,
      metalness: 0.45
    }),
    navy: new gt({
      color: 1516333,
      roughness: 0.62,
      metalness: 0.15
    }),
    black: new gt({
      color: 1053979,
      roughness: 0.7
    }),
    copper: new gt({
      color: 12025682,
      roughness: 0.4,
      metalness: 0.8
    }),
    brass: new gt({
      color: 12428656,
      roughness: 0.48,
      metalness: 0.75
    }),
    silver: new gt({
      color: 11976131,
      roughness: 0.38,
      metalness: 0.8
    }),
    graphite: new gt({
      color: 2764599,
      roughness: 0.45,
      metalness: 0.6
    }),
    paper: new gt({
      color: 15525074,
      roughness: 0.96
    }),
    ink: new gt({
      color: 5792619,
      roughness: 0.9
    }),
    green: new gt({
      color: 2375997,
      roughness: 0.78,
      metalness: 0.12
    }),
    led: new Nn({
      color: 8380584,
      toneMapped: !1
    })
  }, i = new qt();
  e.add(i);
  const r = (_, v = 0) => {
    const p = new qt();
    return p.position.y = v, _.add(p), p;
  };
  function s(_, v, p, f = 0, b = 0, y = 0) {
    const g = new ut(v, typeof p == "string" ? n[p] : p);
    return g.position.set(f, b, y), g.castShadow = !0, g.receiveShadow = !0, _.add(g), g;
  }
  const a = (_, v, p, f, b, y = 0, g = 0, E = 0, w = 0.03) => s(_, new Fs(v, p, f, 6, Math.min(w, v / 2, p / 2, f / 2)), b, y, g, E), o = (_, v, p, f, b, y, g, E = 40) => s(_, new fi(v, v, p, E), f, b, y, g);
  function c(_, v, p = "copper", f = 9e-3) {
    return s(_, new jo(new Io(v.map((b) => new D(...b)), !1, "centripetal"), 40, f, 8, !1), p);
  }
  function l(_, v, p, f, b, y, g, E = "cream") {
    a(_, v, p, 0.085, E, f, b, y, 0.04), a(_, v - 0.07, p - 0.07, 0.018, "black", f, b, y + 0.05, 0.025);
    const w = s(_, new Fn(v - 0.16, p - 0.16), new Nn({
      map: g,
      toneMapped: !1
    }), f, b, y + 0.061);
    w.castShadow = !1;
  }
  const u = document.createElement("canvas");
  u.width = u.height = 128;
  const d = u.getContext("2d"), h = d.createRadialGradient(64, 64, 8, 64, 64, 64);
  h.addColorStop(0, "rgba(0,0,0,.35)"), h.addColorStop(0.55, "rgba(0,0,0,.15)"), h.addColorStop(1, "rgba(0,0,0,0)"), d.fillStyle = h, d.fillRect(0, 0, 128, 128);
  const m = s(i, new Fn(t === "research" ? 7.4 : 5.8, 4.1), new Nn({
    map: new li(u),
    transparent: !0,
    depthWrite: !1
  }), 0, -0.095, 0.1);
  if (m.rotation.x = -Math.PI / 2, m.castShadow = !1, m.receiveShadow = !1, t === "apps") {
    const _ = r(i, 0.04);
    a(_, 3.55, 0.13, 2.3, "cream", 0, 0, 0.12, 0.06), a(_, 3.45, 0.025, 2.2, "silver", 0, -0.068, 0.12, 0.012);
    for (const y of [-0.48, -0.22]) a(_, 0.012, 0.034, 0.16, "black", -1.776, 0, y, 0.012);
    a(_, 0.55, 0.025, 0.035, "ink", 0, 0.065, 1.25, 0.012);
    const v = o(_, 0.065, 3.05, "silver", 0, 0.09, -0.9);
    v.rotation.z = Math.PI / 2;
    const p = r(i, 0.114);
    a(p, 2.96, 0.018, 1.15, "black", 0, 0, -0.27, 0.04);
    for (let y = 0; y < 5; y++) for (let g = 0; g < 12; g++) {
      const E = -1.35 + g * 0.245, w = -0.72 + y * 0.225;
      a(p, 0.205, 0.022, 0.17, "navy", E, 0.018, w, 0.018), y < 4 && a(p, 0.025, 2e-3, 9e-3, "silver", E - 0.055, 0.031, w - 0.04, 3e-3);
    }
    a(p, 1.08, 0.024, 0.17, "navy", 0, 0.018, 0.18, 0.018), a(p, 1.1, 9e-3, 0.54, "silver", 0, 1e-3, 0.77, 0.035), a(p, 1.07, 0.01, 0.51, "cream", 0, 4e-3, 0.77, 0.03);
    for (const y of [-1, 1]) for (let g = 0; g < 20; g++) a(p, 0.09, 3e-3, 0.012, "ink", y * 1.58, 4e-3, -0.72 + g * 0.055, 4e-3);
    const f = r(i, 0.14), b = new qt();
    b.position.z = -0.92, b.rotation.x = -0.17, f.add(b), l(b, 3.55, 2.25, 0, 1.13, 0, vs(1630, 1e3, Ud));
  } else if (t === "physical") {
    const _ = r(i, 0);
    a(_, 4.1, 0.05, 2.9, "green", 0, 0.025, 0, 0.04);
    for (let z = 1; z < 10; z++) a(_, 6e-3, 4e-3, 2.7, "ink", -2 + z * 0.4, 0.052, 0, 2e-3);
    for (let z = 1; z < 7; z++) a(_, 3.9, 4e-3, 6e-3, "ink", 0, 0.052, -1.45 + z * 0.41, 2e-3);
    const v = r(i, 0.05);
    v.position.set(1.35, 0.05, -0.55), a(v, 1.05, 0.06, 0.85, "cream", 0, 0.03, 0, 0.03);
    for (const z of [-0.4, 0.4]) a(v, 1.05, 0.2, 0.05, "cream", 0, 0.12, z, 0.02);
    for (const z of [-0.5, 0.5]) a(v, 0.05, 0.2, 0.85, "cream", z, 0.12, 0, 0.02);
    a(v, 0.24, 0.24, 0.24, "copper", -0.2, 0.18, -0.12, 0.03), a(v, 0.24, 0.24, 0.24, "copper", 0.2, 0.18, 0.1, 0.03), [
      [
        -1.55,
        0.75,
        "navy"
      ],
      [
        -1.15,
        1.05,
        "copper"
      ],
      [
        -0.15,
        1.05,
        "paper"
      ]
    ].forEach(([z, L, I]) => a(_, 0.24, 0.24, 0.24, I, z, 0.17, L, 0.03));
    const p = r(i, 0.05);
    p.position.set(-0.5, 0.05, -0.55), p.rotation.y = Math.PI / 2, o(p, 0.52, 0.16, "graphite", 0, 0.08, 0), o(p, 0.42, 0.14, "cream", 0, 0.23, 0);
    for (const z of [-0.17, 0.17]) a(p, 0.08, 0.42, 0.34, "graphite", z, 0.47, 0, 0.03);
    const f = r(p, 0.58);
    f.rotation.x = 0.6;
    const b = o(f, 0.17, 0.44, "silver", 0, 0, 0);
    b.rotation.z = Math.PI / 2, a(f, 0.26, 1.5, 0.26, "cream", 0, 0.75, 0, 0.1), a(f, 0.27, 0.9, 0.04, "graphite", 0, 0.75, 0.12, 0.02);
    const y = r(f, 1.5);
    y.rotation.x = 1.5;
    const g = o(y, 0.15, 0.36, "silver", 0, 0, 0);
    g.rotation.z = Math.PI / 2, a(y, 0.21, 1.2, 0.21, "cream", 0, 0.6, 0, 0.08), c(y, [
      [
        0.12,
        0.05,
        -0.12
      ],
      [
        0.18,
        0.4,
        -0.2
      ],
      [
        0.14,
        0.9,
        -0.14
      ],
      [
        0.1,
        1.15,
        -0.06
      ]
    ], "black", 0.018);
    const E = r(y, 1.2);
    E.rotation.x = 1.02;
    const w = o(E, 0.11, 0.28, "silver", 0, 0, 0);
    w.rotation.z = Math.PI / 2, o(E, 0.1, 0.16, "graphite", 0, 0.13, 0), a(E, 0.42, 0.08, 0.16, "graphite", 0, 0.24, 0, 0.025);
    for (const z of [-0.155, 0.155]) a(E, 0.045, 0.32, 0.12, "silver", z, 0.42, 0, 0.015);
    a(E, 0.24, 0.24, 0.24, "navy", 0, 0.5, 0, 0.03);
    const C = r(i, 0);
    C.position.set(-1.7, 0, -1.05), o(C, 0.18, 0.05, "graphite", 0, 0.075, 0), o(C, 0.035, 1.4, "silver", 0, 0.8, 0);
    const M = r(C, 1.5);
    M.rotation.set(0.5, 1.15, 0), a(M, 0.34, 0.22, 0.24, "graphite", 0, 0, 0, 0.04);
    const T = o(M, 0.08, 0.08, "black", 0, 0, 0.14);
    T.rotation.x = Math.PI / 2, a(M, 0.035, 0.035, 0.02, "led", 0.12, 0.07, 0.125, 8e-3);
  } else if (t === "other") {
    const _ = r(i, 0);
    _.position.set(-0.35, 0, 0.2), _.rotation.y = -0.16;
    for (const w of [-1, 1])
      a(_, 1.5, 0.06, 2.05, "navy", w * 0.78, 0.03, 0, 0.03), a(_, 1.4, 0.05, 1.95, "paper", w * 0.76, 0.085, 0, 0.02);
    a(_, 0.06, 0.07, 1.95, "ink", 0, 0.09, 0, 0.02);
    for (let w = 0; w < 8; w++) a(_, 1.05, 4e-3, 0.014, "ink", 0.8, 0.112, -0.72 + w * 0.2, 2e-3);
    c(_, [
      [
        -1.25,
        0.115,
        0.62
      ],
      [
        -1.05,
        0.115,
        0.05
      ],
      [
        -0.75,
        0.115,
        0.45
      ],
      [
        -0.55,
        0.115,
        -0.3
      ],
      [
        -0.3,
        0.115,
        0.1
      ]
    ], "copper", 0.014), c(_, [
      [
        -1.3,
        0.115,
        -0.55
      ],
      [
        -0.95,
        0.115,
        -0.75
      ],
      [
        -0.55,
        0.115,
        -0.62
      ]
    ], "ink", 0.01);
    const v = r(i, 0.07);
    v.position.set(0.55, 0.07, 0.95), v.rotation.y = 0.5;
    const p = o(v, 0.055, 1.3, "brass", 0, 0, 0, 6);
    p.rotation.z = Math.PI / 2;
    const f = s(v, new Jc(0.055, 0.22, 6), "paper", -0.76, 0, 0);
    f.rotation.z = Math.PI / 2;
    const b = o(v, 0.056, 0.14, "copper", 0.72, 0, 0);
    b.rotation.z = Math.PI / 2;
    const y = r(i, 0);
    y.position.set(1.55, 0, -0.65), y.scale.setScalar(1.35), o(y, 0.3, 0.08, "graphite", 0, 0.04, 0);
    for (let w = 0; w < 4; w++) o(y, 0.2 - w * 4e-3, 0.07, "brass", 0, 0.13 + w * 0.08, 0);
    o(y, 0.13, 0.1, "brass", 0, 0.47, 0);
    const g = new gt({
      color: 16773576,
      emissive: 16764787,
      emissiveIntensity: 0.85,
      roughness: 0.25,
      transparent: !0,
      opacity: 0.92
    });
    s(y, new Ns(0.46, 48, 32), g, 0, 0.92, 0);
    const E = r(i, 0);
    E.position.set(1.55, 0, 0.75), a(E, 0.3, 0.3, 0.3, "copper", 0, 0.15, 0, 0.04), a(E, 0.3, 0.3, 0.3, "cream", 0.38, 0.15, -0.1, 0.04).rotation.y = 0.4, a(E, 0.3, 0.3, 0.3, "navy", 0.17, 0.45, -0.05, 0.04).rotation.y = 0.2, i.scale.setScalar(1.28);
  } else {
    const _ = [vs(1600, 960, Dd), vs(1600, 960, Od)];
    [-1, 1].forEach((b, y) => {
      const g = r(i, 0);
      g.position.set(b * 1.5, 0, -0.55), g.rotation.y = -b * 0.24, a(g, 0.95, 0.05, 0.62, "graphite", 0, 0.025, 0.05, 0.04), a(g, 0.2, 1.05, 0.1, "graphite", 0, 0.55, -0.1, 0.03), l(g, 2.9, 1.74, 0, 1.45, 0, _[y], "graphite");
    });
    const v = r(i, 0);
    a(v, 2.3, 0.07, 0.72, "cream", -0.1, 0.035, 0.85, 0.05);
    for (let b = 0; b < 4; b++) for (let y = 0; y < 13; y++) a(v, 0.14, 0.025, 0.12, "navy", -1.07 + y * 0.162, 0.08, 0.62 + b * 0.155, 0.015);
    a(v, 0.34, 0.12, 0.55, "cream", 1.6, 0.06, 0.92, 0.1);
    const p = r(i, 0);
    p.position.set(-1.95, 0, 0.95), o(p, 0.22, 0.48, "paper", 0, 0.24, 0), o(p, 0.19, 0.02, "navy", 0, 0.475, 0);
    const f = s(p, new Zo(0.12, 0.035, 10, 24), "paper", -0.22, 0.26, 0);
    f.rotation.y = Math.PI / 2, i.scale.setScalar(0.92);
  }
}
function vs(e, t, n) {
  const i = document.createElement("canvas");
  i.width = e, i.height = t, n(i.getContext("2d"), e, t);
  const r = new li(i);
  return r.colorSpace = Rt, r.anisotropy = 8, r;
}
function vl(e) {
  return () => {
    e |= 0, e = e + 1831565813 | 0;
    let t = Math.imul(e ^ e >>> 15, 1 | e);
    return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function un(e, t, n, i, r, s, a, o, c = 2) {
  e.beginPath(), e.roundRect(t, n, i, r, s), a && (e.fillStyle = a, e.fill()), o && (e.strokeStyle = o, e.lineWidth = c, e.stroke());
}
function zs(e, t, n) {
  e.fillStyle = "#1b2029", e.fillRect(0, 0, t, 64), [
    "#e0695a",
    "#e2b354",
    "#62b46d"
  ].forEach((i, r) => {
    e.fillStyle = i, e.beginPath(), e.arc(34 + r * 30, 32, 9, 0, Math.PI * 2), e.fill();
  }), e.fillStyle = "#9aa3ae", e.font = "26px ui-monospace, Menlo, monospace", e.textAlign = "center", e.fillText(n, t / 2, 41), e.textAlign = "left";
}
function Ud(e, t, n) {
  e.fillStyle = "#14161b", e.fillRect(0, 0, t, n), zs(e, t, "~/revision-planner — claude");
  const i = "#d97757", r = "#e9e4da", s = "#8b919b", a = "#7cc28a";
  un(e, 34, 92, 846, 128, 14, null, i, 3), e.strokeStyle = i, e.lineWidth = 6, e.lineCap = "round";
  for (let f = 0; f < 4; f++) {
    const b = f * Math.PI / 4;
    e.beginPath(), e.moveTo(78 - Math.cos(b) * 17, 140 - Math.sin(b) * 17), e.lineTo(78 + Math.cos(b) * 17, 140 + Math.sin(b) * 17), e.stroke();
  }
  e.font = `600 34px ${hn}`, e.fillStyle = r, e.fillText("Welcome to Claude Code", 112, 152), e.font = `24px ${hn}`, e.fillStyle = s, e.fillText("cwd: ~/revision-planner", 112, 196);
  const o = (f, b) => {
    e.fillStyle = b, e.beginPath(), e.arc(52, f - 10, 9, 0, Math.PI * 2), e.fill();
  }, c = (f) => {
    e.strokeStyle = s, e.lineWidth = 3, e.beginPath(), e.moveTo(78, f - 30), e.lineTo(78, f - 10), e.lineTo(96, f - 10), e.stroke();
  };
  let l = 290;
  e.font = `30px ${hn}`, e.fillStyle = s, e.fillText(">", 36, l), e.fillStyle = r, e.fillText("build a revision planner for", 70, l), l += 44, e.fillText("my college", 70, l), l += 74, o(l, r), e.fillText("I'll add a week view with", 80, l), l += 44, e.fillText("study blocks.", 80, l), l += 70, o(l, a), e.fillStyle = r, e.fillText("Write", 80, l), e.fillStyle = s, e.fillText("(src/Planner.tsx)", 182, l), l += 46, c(l), e.fillStyle = s, e.font = `26px ${hn}`, e.fillText("Wrote 128 lines", 108, l), l += 62, e.font = `30px ${hn}`, o(l, a), e.fillStyle = r, e.fillText("Bash", 80, l), e.fillStyle = s, e.fillText("(npm test)", 164, l), l += 46, c(l), e.font = `26px ${hn}`, e.fillStyle = a, e.fillText("12 tests passed", 108, l), l += 66, e.font = `30px ${hn}`, e.fillStyle = i, e.fillText("* Polishing the layout…", 36, l), un(e, 34, n - 110, 846, 74, 12, null, "#4a505a", 3), e.fillStyle = s, e.fillText(">", 58, n - 62), e.fillStyle = r, e.fillRect(92, n - 88, 16, 34);
  const u = 920, d = 92, h = t - u - 34, m = n - d - 36;
  un(e, u, d, h, m, 18, "#f4f0e7"), e.save(), e.beginPath(), e.roundRect(u, d, h, m, 18), e.clip(), e.fillStyle = "#e2dccf", e.fillRect(u, d, h, 58), e.restore(), un(e, u + 150, d + 12, h - 190, 34, 17, "#f8f5ee"), e.fillStyle = "#7c7568", e.font = `22px ${Pn}`, e.fillText("localhost:3000", u + 172, d + 37), e.fillStyle = "#1d2433", e.font = `700 50px ${Pn}`, e.fillText("Week 3", u + 40, d + 132), e.fillStyle = "#8a8272", e.font = `26px ${Pn}`, e.fillText("Hilary term · 14 hours planned", u + 40, d + 172);
  const _ = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"
  ], v = (h - 80) / 5, p = [
    [[
      0,
      2,
      "#d9864f"
    ], [
      3,
      4,
      "#2f3e66"
    ]],
    [[
      1,
      3,
      "#5e9c8f"
    ]],
    [[
      0,
      1,
      "#2f3e66"
    ], [
      2,
      5,
      "#d6b25e"
    ]],
    [[
      1,
      2,
      "#d9864f"
    ], [
      3,
      5,
      "#5e9c8f"
    ]],
    [[
      0,
      3,
      "#2f3e66"
    ]]
  ];
  _.forEach((f, b) => {
    const y = u + 40 + b * v;
    e.fillStyle = "#6f6858", e.font = `600 24px ${Pn}`, e.fillText(f, y + 8, d + 228), e.fillStyle = "#e8e2d5", e.fillRect(y + 4, d + 246, v - 8, 420), p[b].forEach(([g, E, w]) => un(e, y + 10, d + 256 + g * 82, v - 20, (E - g) * 82 - 12, 10, w));
  }), e.fillStyle = "#1d2433", e.font = `600 26px ${Pn}`, e.fillText("68% of the week done", u + 40, d + m - 58), un(e, u + 40, d + m - 40, h - 80, 16, 8, "#e2dccf"), un(e, u + 40, d + m - 40, (h - 80) * 0.68, 16, 8, "#d9864f");
}
function In(e, t, n, i, r, s, a) {
  un(e, t, n, i, r, 12, "#131a24", "#232c38", 2), e.fillStyle = "#8f9aa8", e.font = `24px ${Pn}`, e.fillText(s, t + 22, n + 38), a && (e.fillStyle = "#e6edf3", e.font = `600 24px ${hn}`, e.textAlign = "right", e.fillText(a, t + i - 22, n + 38), e.textAlign = "left"), e.strokeStyle = "#202935", e.lineWidth = 1.5;
  for (let o = 1; o < 4; o++)
    e.beginPath(), e.moveTo(t + 18, n + 56 + o * (r - 74) / 4), e.lineTo(t + i - 18, n + 56 + o * (r - 74) / 4), e.stroke();
}
function no(e, t, n, i, r, s, a, o, c) {
  const l = Math.min(...t), u = Math.max(...t) - l || 1, d = (m) => n + m / (t.length - 1) * r, h = (m) => i + s - (m - l) / u * s;
  if (e.beginPath(), t.forEach((m, _) => _ ? e.lineTo(d(_), h(m)) : e.moveTo(d(_), h(m))), c) {
    e.save(), e.lineTo(n + r, i + s), e.lineTo(n, i + s), e.closePath();
    const m = e.createLinearGradient(0, i, 0, i + s);
    m.addColorStop(0, c), m.addColorStop(1, "rgba(0,0,0,0)"), e.fillStyle = m, e.fill(), e.restore(), e.beginPath(), t.forEach((_, v) => v ? e.lineTo(d(v), h(_)) : e.moveTo(d(v), h(_)));
  }
  e.strokeStyle = a, e.lineWidth = o, e.lineJoin = "round", e.stroke();
}
function Dd(e, t, n) {
  const i = vl(7);
  e.fillStyle = "#0c1118", e.fillRect(0, 0, t, n), zs(e, t, "pnl_dashboard.ipynb");
  const r = [], s = [], a = [];
  let o = 0, c = 0;
  for (let l = 0; l < 160; l++) {
    const u = (i() - 0.38) * 1.6 - (i() < 0.035 ? 2.4 : 0);
    r.push(u), o += u, s.push(o), c = Math.max(c, o), a.push(o - c);
  }
  In(e, 28, 86, 1080, 500, "Cumulative PnL", "+£12,480"), no(e, s, 50, 160, 1036, 400, "#4cc38a", 5, "rgba(76,195,138,.35)"), In(e, 28, 602, 1080, 160, "Drawdown", "−4.8%"), no(e, a, 50, 660, 1036, 86, "#e5534b", 3, "rgba(229,83,75,.4)"), In(e, 28, 778, 1080, 158, "Daily returns"), r.forEach((l, u) => {
    e.fillStyle = l > 0 ? "#4cc38a" : "#e5534b";
    const d = Math.min(Math.abs(l) * 22, 58);
    e.fillRect(52 + u * 6.45, l > 0 ? 868 - d : 868, 4.4, d);
  }), [
    [
      "Sharpe",
      "2.14",
      "#e6edf3"
    ],
    [
      "Annual return",
      "18.2%",
      "#4cc38a"
    ],
    [
      "Max drawdown",
      "−4.8%",
      "#e5534b"
    ],
    [
      "Win rate",
      "57%",
      "#e6edf3"
    ],
    [
      "Volatility",
      "8.5%",
      "#e6edf3"
    ]
  ].forEach(([l, u, d], h) => {
    const m = 86 + h * 172;
    un(e, 1128, m, 444, 156, 12, "#131a24", "#232c38", 2), e.fillStyle = "#8f9aa8", e.font = `24px ${Pn}`, e.fillText(l, 1152, m + 44), e.fillStyle = d, e.font = `600 58px ${hn}`, e.fillText(u, 1150, m + 122);
  });
}
function Od(e, t, n) {
  const i = vl(21), r = () => {
    let P = 0;
    for (let R = 0; R < 6; R++) P += i();
    return P - 3;
  };
  e.fillStyle = "#0c1118", e.fillRect(0, 0, t, n), zs(e, t, "model_fits.ipynb");
  const s = (t - 84) / 2, a = (n - 128) / 2, o = [
    [28, 86],
    [56 + s, 86],
    [28, 114 + a],
    [56 + s, 114 + a]
  ];
  let [c, l] = o[0];
  In(e, c, l, s, a, "OLS fit", "β = 0.82  R² = 0.61");
  const u = c + 40, d = l + a - 30, h = s - 80, m = a - 110;
  e.fillStyle = "rgba(217,150,90,.18)", e.beginPath(), e.moveTo(u, d - m * 0.12), e.lineTo(u + h, d - m * 0.78), e.lineTo(u + h, d - m * 0.98), e.lineTo(u, d - m * 0.3), e.fill();
  for (let P = 0; P < 70; P++) {
    const R = i(), G = 0.2 + 0.68 * R + r() * 0.09;
    e.fillStyle = "#6ca0dc", e.beginPath(), e.arc(u + R * h, d - Math.min(Math.max(G, 0), 1) * m, 6, 0, Math.PI * 2), e.fill();
  }
  e.strokeStyle = "#e0975a", e.lineWidth = 5, e.beginPath(), e.moveTo(u, d - m * 0.21), e.lineTo(u + h, d - m * 0.88), e.stroke(), [c, l] = o[1], In(e, c, l, s, a, "Return distribution", "σ = 1.03");
  const _ = new Array(24).fill(0);
  for (let P = 0; P < 900; P++) {
    const R = Math.floor((r() + 3) / 6 * 24);
    R >= 0 && R < 24 && _[R]++;
  }
  const v = Math.max(..._), p = (s - 80) / 24, f = l + a - 30, b = a - 110;
  _.forEach((P, R) => {
    e.fillStyle = "#3d6e9e", e.fillRect(c + 40 + R * p + 2, f - P / v * b, p - 4, P / v * b);
  }), e.strokeStyle = "#e0975a", e.lineWidth = 5, e.beginPath();
  for (let P = 0; P <= 100; P++) {
    const R = -3 + P * 0.06, G = c + 40 + P / 100 * (s - 80), U = f - Math.exp(-R * R / 2) * b * 0.98;
    P ? e.lineTo(G, U) : e.moveTo(G, U);
  }
  e.stroke(), [c, l] = o[2], In(e, c, l, s, a, "Factor correlation");
  const y = 8, g = Math.min((s - 80) / y, (a - 90) / y), E = c + (s - g * y) / 2, w = l + 60;
  for (let P = 0; P < y; P++) for (let R = 0; R < y; R++) {
    const G = P === R ? 1 : Math.sin((P + 1) * (R + 2) * 1.7) * 0.8, U = Math.abs(G);
    e.fillStyle = G > 0 ? `rgba(224,151,90,${0.15 + U * 0.85})` : `rgba(108,160,220,${0.15 + U * 0.85})`, e.fillRect(E + P * g + 2, w + R * g + 2, g - 4, g - 4);
  }
  [c, l] = o[3], In(e, c, l, s, a, "FTSE 100 · 1h", "8,214.6");
  let C = 50;
  const M = [];
  for (let P = 0; P < 34; P++) {
    const R = C;
    C += r() * 2.2 + 0.25;
    const G = Math.max(R, C) + i() * 2.4, U = Math.min(R, C) - i() * 2.4;
    M.push([
      R,
      C,
      G,
      U
    ]);
  }
  const T = M.flat(), z = Math.min(...T), L = Math.max(...T), I = (P) => l + a - 30 - (P - z) / (L - z) * (a - 110), q = (s - 80) / M.length;
  M.forEach(([P, R, G, U], Q) => {
    const W = c + 40 + Q * q + q / 2, Y = R >= P ? "#4cc38a" : "#e5534b";
    e.strokeStyle = Y, e.lineWidth = 3, e.beginPath(), e.moveTo(W, I(G)), e.lineTo(W, I(U)), e.stroke(), e.fillStyle = Y, e.fillRect(W - q * 0.32, Math.min(I(P), I(R)), q * 0.64, Math.max(Math.abs(I(P) - I(R)), 3));
  }), e.strokeStyle = "#e2b354", e.lineWidth = 4, e.beginPath(), M.forEach((P, R) => {
    const G = M.slice(Math.max(0, R - 5), R + 1), U = G.reduce((W, Y) => W + Y[1], 0) / G.length, Q = c + 40 + R * q + q / 2;
    R ? e.lineTo(Q, I(U)) : e.moveTo(Q, I(U));
  }), e.stroke();
}
function Fd(e, t) {
  const n = document.createElement("canvas");
  n.width = n.height = 256;
  const i = n.getContext("2d"), r = i.createImageData(256, 256);
  let s = 173;
  for (let R = 0; R < r.data.length; R += 4) {
    s = s * 1664525 + 1013904223 >>> 0;
    const G = 175 + s % 55;
    r.data.set([
      G,
      G,
      G,
      255
    ], R);
  }
  i.putImageData(r, 0, 0);
  const a = new li(n);
  a.wrapS = a.wrapT = Er, a.repeat.set(3, 3);
  const o = document.createElement("canvas");
  o.width = o.height = 512;
  const c = o.getContext("2d");
  c.fillStyle = "#9b9b9b", c.fillRect(0, 0, 512, 512);
  for (let R = 0; R < 512; R++) {
    s = s * 1664525 + 1013904223 >>> 0;
    const G = 120 + s % 65;
    c.strokeStyle = `rgb(${G},${G},${G})`, c.beginPath(), c.moveTo(0, R), c.lineTo(512, R), c.stroke();
  }
  const l = new li(o), u = {
    ...t,
    cream: new Ln({
      color: 13357266,
      roughness: 0.23,
      metalness: 0.94,
      bumpMap: l,
      bumpScale: 12e-4,
      envMapIntensity: 1.65,
      clearcoat: 0.18
    }),
    navy: new Ln({
      color: 795440,
      roughness: 0.32,
      metalness: 0.15,
      bumpMap: a,
      bumpScale: 12e-4,
      clearcoat: 0.65,
      clearcoatRoughness: 0.2,
      envMapIntensity: 1.25
    }),
    orange: new gt({
      color: 12219721,
      roughness: 0.22,
      metalness: 0.95,
      envMapIntensity: 1.45
    }),
    metal: new gt({
      color: 14268265,
      roughness: 0.19,
      metalness: 1,
      envMapIntensity: 1.7
    }),
    substrate: new gt({
      color: 1186077,
      roughness: 0.48,
      metalness: 0.08
    }),
    solder: new gt({
      color: 13028305,
      roughness: 0.22,
      metalness: 0.95,
      envMapIntensity: 1.4
    }),
    ceramic: new gt({
      color: 7101768,
      roughness: 0.5,
      metalness: 0.05
    })
  };
  e.userData.pulses = [];
  const d = [];
  function h(R, G) {
    const U = new qt();
    return U.position.y = R, e.add(U), d.push({
      group: U,
      y: R,
      lift: G
    }), U;
  }
  function m(R, G, U, Q = 0, W = 0, Y = 0) {
    const Z = new ut(G, typeof U == "string" ? u[U] : U);
    return Z.position.set(Q, W, Y), Z.castShadow = !0, Z.receiveShadow = !0, R.add(Z), Z;
  }
  const _ = (R, G, U, Q, W, Y, Z, Le, we = 0.08) => m(R, new Fs(G, U, Q, 5, we), W, Y, Z, Le);
  function v(R, G) {
    for (const U of [-1.38, 1.38]) for (const Q of [-1.38, 1.38])
      m(R, new fi(0.079, 0.079, 8e-3, 32), "substrate", U, G - 9e-3, Q), m(R, new fi(0.059, 0.066, 0.028, 32), "solder", U, G, Q), _(R, 0.062, 3e-3, 0.011, "substrate", U, G + 0.015, Q, 2e-3), _(R, 0.011, 3e-3, 0.062, "substrate", U, G + 0.015, Q, 2e-3);
  }
  function p(R, G) {
    const U = new zo();
    G.slice(1).forEach((Y, Z) => U.add(new Do(new D(...G[Z]), new D(...Y)))), m(R, new jo(U, 32, 6e-3, 8, !1), "metal");
    const Q = new qt();
    R.add(Q);
    const W = Array.from({ length: 6 }, (Y, Z) => {
      const Le = new ut(new Ns(Z ? 0.017 : 0.027, 12, 8), new Nn({
        color: Z ? 15054431 : 16773575,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      }));
      return Q.add(Le), Le;
    });
    e.userData.pulses.push({
      group: Q,
      dots: W,
      curve: U
    });
  }
  const f = h(0.32, -0.65);
  _(f, 3.38, 0.11, 3.38, "cream", 0, 0, 0, 0.045), _(f, 3.27, 0.022, 3.27, "substrate", 0, -0.06, 0, 0.035), _(f, 2.62, 0.018, 2.62, "metal", 0, 0.064, 0, 0.025), _(f, 2.48, 0.019, 2.48, "cream", 0, 0.075, 0, 0.02), v(f, 0.09);
  const b = h(0.5, 0);
  _(b, 3.3, 0.095, 3.3, "navy", 0, 0, 0, 0.035), _(b, 3.29, 0.012, 3.29, "orange", 0, -0.024, 0, 0.03), _(b, 3.3, 0.018, 3.3, "navy", 0, -0.038, 0, 0.03);
  for (let R = 0; R < 12; R++) {
    const G = -1.2 + R * 0.218;
    for (const U of [-1, 1]) for (const [Q, W] of [[G, U * 1.49], [U * 1.49, G]]) {
      const Y = m(b, new Ah(0.012, 0.024, 12), "metal", Q, 0.049, W);
      Y.rotation.x = -Math.PI / 2, Y.castShadow = !1;
    }
  }
  for (const R of [-1, 1]) for (let G = 0; G < 5; G++) {
    const U = -0.48 + G * 0.24;
    for (const [Q, W, Y] of [[
      U,
      R * 0.94,
      !1
    ], [
      R * 0.94,
      U,
      !0
    ]]) {
      const Z = new qt();
      Z.position.set(Q, 0.065, W), Z.rotation.y = Y ? Math.PI / 2 : 0, b.add(Z), _(Z, 0.11, 0.045, 0.055, "ceramic", 0, 0, 0, 6e-3);
      for (const Le of [-1, 1]) _(Z, 0.026, 0.048, 0.06, "solder", Le * 0.05, 0, 0, 5e-3);
    }
  }
  const y = document.createElement("canvas");
  y.width = y.height = 1024;
  const g = y.getContext("2d");
  g.strokeStyle = "#b7c6c2", g.lineWidth = 2, g.globalAlpha = 0.5, g.strokeRect(283, 283, 458, 458), g.font = "18px monospace", g.fillStyle = "#d1dbd6", g.fillText("OxAIMS / MAKER BOARD", 100, 860), g.font = "13px monospace", g.fillText("REV 01", 100, 884);
  for (let R = 0; R < 5; R++)
    g.fillText(`C${R + 1}`, 360 + R * 74, 242), g.fillText(`R${R + 1}`, 360 + R * 74, 797);
  g.beginPath(), g.moveTo(280, 280), g.lineTo(305, 280), g.lineTo(280, 305), g.closePath(), g.fill();
  const E = new li(y);
  E.colorSpace = Rt;
  const w = m(b, new Fn(3.3, 3.3), new Nn({
    map: E,
    transparent: !0,
    depthWrite: !1
  }), 0, 0.05, 0);
  w.rotation.x = -Math.PI / 2, w.castShadow = !1;
  for (const R of [-1, 1])
    p(b, [
      [
        -1.6,
        0.056,
        R * 0.66
      ],
      [
        -1.05,
        0.056,
        R * 0.66
      ],
      [
        -0.72,
        0.056,
        R * 0.3
      ],
      [
        -0.48,
        0.056,
        R * 0.3
      ]
    ]), p(b, [
      [
        1.6,
        0.056,
        R * 0.66
      ],
      [
        1.05,
        0.056,
        R * 0.66
      ],
      [
        0.72,
        0.056,
        R * 0.3
      ],
      [
        0.48,
        0.056,
        R * 0.3
      ]
    ]), p(b, [
      [
        R * 0.74,
        0.056,
        -1.61
      ],
      [
        R * 0.74,
        0.056,
        -1.08
      ],
      [
        R * 0.32,
        0.056,
        -0.65
      ]
    ]), p(b, [
      [
        R * 0.74,
        0.056,
        1.61
      ],
      [
        R * 0.74,
        0.056,
        1.08
      ],
      [
        R * 0.32,
        0.056,
        0.65
      ]
    ]), m(b, new fi(0.035, 0.035, 0.012, 20), "metal", R * 1.05, 0.065, 0.66);
  v(b, 0.065);
  const C = h(0.65, 0.45);
  _(C, 1.25, 0.06, 1.25, "substrate", 0, -5e-3, 0, 0.022), _(C, 1.16, 0.028, 1.16, "orange", 0, 0.036, 0, 0.025), _(C, 1.06, 0.105, 1.06, "cream", 0, 0.095, 0, 0.037);
  for (let R = 0; R < 10; R++) {
    const G = -0.48 + R * 0.107;
    for (const U of [-1, 1])
      _(C, 0.032, 0.022, 0.18, "metal", G, -0.016, U * 0.65, 5e-3), _(C, 0.18, 0.022, 0.032, "metal", U * 0.65, -0.016, G, 5e-3), _(C, 0.035, 0.037, 0.042, "solder", G, -0.027, U * 0.73, 5e-3), _(C, 0.042, 0.037, 0.035, "solder", U * 0.73, -0.027, G, 5e-3);
  }
  const M = document.createElement("canvas");
  M.width = M.height = 512;
  const T = M.getContext("2d"), z = new li(M);
  z.colorSpace = Rt;
  function L() {
    T.clearRect(0, 0, 512, 512), T.fillStyle = "#424c50", T.textAlign = "left", T.textBaseline = "middle", T.font = "600 76px sans-serif", T.fillText("OxAIMS", 63, 210), T.font = "24px monospace", T.fillText("MAKER SERIES", 66, 280), T.font = "19px monospace", T.fillText("OXA-01   /   REV A", 66, 325), T.beginPath(), T.arc(70, 80, 9, 0, Math.PI * 2), T.fill();
    for (let R = 0; R < 8; R++) for (let G = 0; G < 8; G++) (G * R + G + R) % 3 !== 0 && T.fillRect(345 + G * 7, 354 + R * 7, 5, 5);
    z.needsUpdate = !0, document.querySelector(".maker-model")?.dispatchEvent(new Event("maker-model-change"));
  }
  L();
  const I = m(C, new Fn(0.98, 0.98), new gt({
    map: z,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.5,
    metalness: 0.55,
    polygonOffset: !0,
    polygonOffsetFactor: -1
  }), 0, 0.148, 0);
  I.rotation.x = -Math.PI / 2, I.castShadow = !1;
  const q = h(0.85, 1.15), P = _(q, 3.32, 0.035, 3.32, new Ln({
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
  P.castShadow = !1;
  for (const R of [-1.49, 1.49])
    _(q, 2.96, 0.025, 0.025, "metal", 0, 0.041, R, 0.01), _(q, 0.025, 0.025, 2.96, "metal", R, 0.041, 0, 0.01);
  return v(q, 0.055), d;
}
