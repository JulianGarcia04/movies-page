export type Lang =
  | "aa"
  | "ab"
  | "af"
  | "ak"
  | "am"
  | "ar"
  | "an"
  | "as"
  | "av"
  | "ae"
  | "ay"
  | "az"
  | "ba"
  | "bm"
  | "be"
  | "bn"
  | "bh"
  | "bi"
  | "bo"
  | "bs"
  | "br"
  | "bg"
  | "ca"
  | "cs"
  | "ch"
  | "ce"
  | "cn"
  | "cu"
  | "cv"
  | "kw"
  | "co"
  | "cr"
  | "cy"
  | "da"
  | "de"
  | "dv"
  | "dz"
  | "el"
  | "en"
  | "eo"
  | "et"
  | "eu"
  | "ee"
  | "fo"
  | "fa"
  | "fj"
  | "fi"
  | "fr"
  | "fy"
  | "ff"
  | "gd"
  | "ga"
  | "gl"
  | "gv"
  | "gn"
  | "gu"
  | "ht"
  | "ha"
  | "he"
  | "hz"
  | "hi"
  | "ho"
  | "hr"
  | "hu"
  | "hy"
  | "ig"
  | "io"
  | "ii"
  | "iu"
  | "ie"
  | "ia"
  | "id"
  | "ik"
  | "is"
  | "it"
  | "jv"
  | "ja"
  | "kl"
  | "kn"
  | "ks"
  | "kr"
  | "kk"
  | "km"
  | "ki"
  | "rw"
  | "ky"
  | "kv"
  | "kg"
  | "ko"
  | "kj"
  | "ku"
  | "lo"
  | "la"
  | "lv"
  | "li"
  | "ln"
  | "lt"
  | "lb"
  | "lu"
  | "lg"
  | "mk"
  | "mh"
  | "ml"
  | "mi"
  | "mr"
  | "ms"
  | "mg"
  | "mt"
  | "mn"
  | "na"
  | "nv"
  | "nr"
  | "nd"
  | "ng"
  | "ne"
  | "nl"
  | "nn"
  | "nb"
  | "no"
  | "ny"
  | "oc"
  | "oj"
  | "or"
  | "om"
  | "os"
  | "pa"
  | "pi"
  | "pl"
  | "pt"
  | "ps"
  | "qu"
  | "rm"
  | "ro"
  | "rn"
  | "ru"
  | "sg"
  | "sa"
  | "si"
  | "sk"
  | "sl"
  | "se"
  | "sm"
  | "sn"
  | "sd"
  | "so"
  | "st"
  | "es"
  | "sc"
  | "sr"
  | "ss"
  | "su"
  | "sw"
  | "sv"
  | "ty"
  | "ta"
  | "tt"
  | "te"
  | "tg"
  | "tl"
  | "th"
  | "ti"
  | "to"
  | "tn"
  | "ts"
  | "tk"
  | "tr"
  | "tw"
  | "ug"
  | "uk"
  | "ur"
  | "uz"
  | "ve"
  | "vi"
  | "vo"
  | "wa"
  | "wo"
  | "xh"
  | "yi"
  | "yo"
  | "za"
  | "zh"
  | "zu";

export const langs: readonly [Lang, ...Lang[]] = [
  "aa",
  "ab",
  "af",
  "ak",
  "am",
  "ar",
  "an",
  "as",
  "av",
  "ae",
  "ay",
  "az",
  "ba",
  "bm",
  "be",
  "bn",
  "bh",
  "bi",
  "bo",
  "bs",
  "br",
  "bg",
  "ca",
  "cs",
  "ch",
  "ce",
  "cn",
  "cu",
  "cv",
  "kw",
  "co",
  "cr",
  "cy",
  "da",
  "de",
  "dv",
  "dz",
  "el",
  "en",
  "eo",
  "et",
  "eu",
  "ee",
  "fo",
  "fa",
  "fj",
  "fi",
  "fr",
  "fy",
  "ff",
  "gd",
  "ga",
  "gl",
  "gv",
  "gn",
  "gu",
  "ht",
  "ha",
  "he",
  "hz",
  "hi",
  "ho",
  "hr",
  "hu",
  "hy",
  "ig",
  "io",
  "ii",
  "iu",
  "ie",
  "ia",
  "id",
  "ik",
  "is",
  "it",
  "jv",
  "ja",
  "kl",
  "kn",
  "ks",
  "kr",
  "kk",
  "km",
  "ki",
  "rw",
  "ky",
  "kv",
  "kg",
  "ko",
  "kj",
  "ku",
  "lo",
  "la",
  "lv",
  "li",
  "ln",
  "lt",
  "lb",
  "lu",
  "lg",
  "mk",
  "mh",
  "ml",
  "mi",
  "mr",
  "ms",
  "mg",
  "mt",
  "mn",
  "na",
  "nv",
  "nr",
  "nd",
  "ng",
  "ne",
  "nl",
  "nn",
  "nb",
  "no",
  "ny",
  "oc",
  "oj",
  "or",
  "om",
  "os",
  "pa",
  "pi",
  "pl",
  "pt",
  "ps",
  "qu",
  "rm",
  "ro",
  "rn",
  "ru",
  "sg",
  "sa",
  "si",
  "sk",
  "sl",
  "se",
  "sm",
  "sn",
  "sd",
  "so",
  "st",
  "es",
  "sc",
  "sr",
  "ss",
  "su",
  "sw",
  "sv",
  "ty",
  "ta",
  "tt",
  "te",
  "tg",
  "tl",
  "th",
  "ti",
  "to",
  "tn",
  "ts",
  "tk",
  "tr",
  "tw",
  "ug",
  "uk",
  "ur",
  "uz",
  "ve",
  "vi",
  "vo",
  "wa",
  "wo",
  "xh",
  "yi",
  "yo",
  "za",
  "zh",
  "zu",
] as const;
