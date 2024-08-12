function ask() {
    let inputField = document.getElementById("input");
    let str = inputField.value;
    const mapObj = {
      a: "1~",
      b: "2~",
      c: "3~",
      d: "4~",
      e: "5~",
      f: "6~",
      g: "7~",
      h: "8~",
      i: "9~",
      j: "10~",
      k: "11~",
      l: "12~",
      m: "13~",
      n: "14~",
      o: "15~",
      p: "16~",
      q: "17~",
      r: "18~",
      s: "19~",
      t: "20~",
      u: "21~",
      v: "22~",
      w: "23~",
      x: "24~",
      y: "25~",
      z: "26~",
      " ": "001~",
      ".": "002~",
      ",": "003~",
      ":": "004~",
      ";": "005~",
      "/": "006~",
      "(": "007~",
      ")": "008~",
      "-": "009~",
      "+": "010~",
      "_": "011~",
      "=": "012~",
      "'": "013~",
      "!": "014~",
      "@": "015~",
      "#": "016~",
      "$": "017~",
      "%": "018~",
      "^": "019~",
      "&": "020~",
      "*": "021~",
      "[": "022~",
      "]": "023~",
      "{": "024~",
      "}": "025~",
      "<": "026~",
      ">": "027~",
      "?": "028~",
      "1": "111~",
      "2": "222~",
      "3": "333~",
      "4": "444~",
      "5": "555~",
      "6": "666~",
      "7": "777~",
      "8": "888~",
      "9": "999~",
      "0": "000~",
    };
  
    str = str.replace(
      /(?:a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\s|\.|\,|\:|\;|\/|\(|\)|\-|\+|\_|\=|\'|\!|\@|\#|\$|\%|\^|\&|\*|\[|\]|\{|\}|\<|\>|\?|1|2|3|4|5|6|7|8|9|0)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("output").value = str;
  }
  
  function askAgain() {
    let inputFieldAgain = document.getElementById("inputAgain");
    let strAgain = inputFieldAgain.value;
    const mapObj = {
      1: "a",
      2: "b",
      3: "c",
      4: "d",
      5: "e",
      6: "f",
      7: "g",
      8: "h",
      9: "i",
      10: "j",
      11: "k",
      12: "l",
      13: "m",
      14: "n",
      15: "o",
      16: "p",
      17: "q",
      18: "r",
      19: "s",
      20: "t",
      21: "u",
      22: "v",
      23: "w",
      24: "x",
      25: "y",
      26: "z",
      "001": " ",
      "002": ".",
      "003": ",",
      "004": ":",
      "005": ";",
      "006": "/",
      "007": "(",
      "008": ")",
      "009": "-",
      "010": "+",
      "011": "_",
      "012": "=",
      "013": "'",
      "014": "!",
      "015": "@",
      "016": "#",
      "017": "$",
      "018": "%",
      "019": "^",
      "020": "&",
      "021": "*",
      "022": "[",
      "023": "]",
      "024": "{",
      "025": "}",
      "026": "<",
      "027": ">",
      "028": "?",
      "111": "1~",
      "222": "2~",
      "333": "3~",
      "444": "4~",
      "555": "5~",
      "666": "6~",
      "777": "7~",
      "888": "8~",
      "999": "9~",
      "000": "0~",
      "~": "",
    };
  
    strAgain = strAgain.replace(
      /\b(?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|001|002|003|004|005|006|007|008|009|010|011|012|013|014|015|016|017|018|019|020|021|022|023|024|025|026|027|028|111|222|333|444|555|666|777|888|999|000)\b/gi,
      (matched) => mapObj[matched]
    );
    strAgain = strAgain.replace(
      /(?:\~)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("outputAgain").value = strAgain;
  }
  
  
  
  // encryptor 2
  
  
  
  function askEla() {
    let inputField = document.getElementById("input-ela");
    let str = inputField.value;
    const mapObj = {
      a: "1974~",
      b: "1782~",
      c: "4493~",
      d: "1728~",
      e: "5565~",
      f: "9019~",
      g: "4893~",
      h: "2987~",
      i: "1289~",
      j: "1530~",
      k: "1114~",
      l: "4992~",
      m: "3623~",
      n: "9853~",
      o: "9923~",
      p: "1092~",
      q: "1093~",
      r: "7771~",
      s: "1983~",
      t: "1925~",
      u: "8493~",
      v: "1199~",
      w: "8853~",
      x: "1882~",
      y: "1234~",
      z: "1823~",
      " ": "0001~",
      ".": "0002~",
      ",": "0003~",
      ":": "0004~",
      ";": "0005~",
      "/": "0006~",
      "(": "0007~",
      ")": "0008~",
      "-": "0009~",
      "+": "0010~",
      "_": "0011~",
      "=": "0012~",
      "'": "0013~",
      "!": "0014~",
      "@": "0015~",
      "#": "0016~",
      "$": "0017~",
      "%": "0018~",
      "^": "0019~",
      "&": "0020~",
      "*": "0021~",
      "[": "0022~",
      "]": "0023~",
      "{": "0024~",
      "}": "0025~",
      "<": "0026~",
      ">": "0027~",
      "?": "0028~",
      "1": "64~",
      "2": "128~",
      "3": "256~",
      "4": "512~",
      "5": "1024~",
      "6": "2048~",
      "7": "4096~",
      "8": "8192~",
      "9": "16384~",
      "0": "32768~",
    };
  
    str = str.replace(
      /(?:a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\s|\.|\,|\:|\;|\/|\(|\)|\-|\+|\_|\=|\'|\!|\@|\#|\$|\%|\^|\&|\*|\[|\]|\{|\}|\<|\>|\?|1|2|3|4|5|6|7|8|9|0)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("output-ela").value = str;
  }
  
  function askAgainEla() {
    let inputFieldAgain = document.getElementById("inputAgain-ela");
    let strAgain = inputFieldAgain.value;
    const mapObj = {
      1974: "a",
      1782: "b",
      4493: "c",
      1728: "d",
      5565: "e",
      9019: "f",
      4893: "g",
      2987: "h",
      1289: "i",
      1530: "j",
      1114: "k",
      4992: "l",
      3623: "m",
      9853: "n",
      9923: "o",
      1092: "p",
      1093: "q",
      7771: "r",
      1983: "s",
      1925: "t",
      8493: "u",
      1199: "v",
      8853: "w",
      1882: "x",
      1234: "y",
      1823: "z",
      "0001": " ",
      "0002": ".",
      "0003": ",",
      "0004": ":",
      "0005": ";",
      "0006": "/",
      "0007": "(",
      "0008": ")",
      "0009": "-",
      "0010": "+",
      "0011": "_",
      "0012": "=",
      "0013": "'",
      "0014": "!",
      "0015": "@",
      "0016": "#",
      "0017": "$",
      "0018": "%",
      "0019": "^",
      "0020": "&",
      "0021": "*",
      "0022": "[",
      "0023": "]",
      "0024": "{",
      "0025": "}",
      "0026": "<",
      "0027": ">",
      "0028": "?",
      "64": "1~",
      "128": "2~",
      "256": "3~",
      "512": "4~",
      "1024": "5~",
      "2048": "6~",
      "4096": "7~",
      "8192": "8~",
      "16384": "9~",
      "32768": "0~",
      "~": ""
    };
  
    strAgain = strAgain.replace(
      /\b(?:1974|1782|4493|1728|5565|9019|4893|2987|1289|1530|1114|4992|3623|9853|9923|1092|1093|7771|1983|1925|8493|1199|8853|1882|1234|1823|0001|0002|0003|0004|0005|0006|0007|0008|0009|0010|0011|0012|0013|0014|0015|0016|0017|0018|0019|0020|0021|0022|0023|0024|0025|0026|0027|0028|64|128|256|512|1024|2048|4096|8192|16384|32768)\b/gi,
      (matched) => mapObj[matched]
    );
    strAgain = strAgain.replace(
      /(?:\~)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("outputAgain-ela").value = strAgain;
  }
  
  
  // third encrypter
  
  
  
  function askTwelve() {
    let inputField = document.getElementById("input-twelve");
    let str = inputField.value;
    const mapObj = {
      a: "n2xsrxyz5eus~",
      b: "erggsiguc4ij~",
      c: "1u37kiumg4fa~",
      d: "vc3kyn3hhb3m~",
      e: "iwez2y66juon~",
      f: "iah9tmbx5se4~",
      g: "8f42t7rn9d3d~",
      h: "6ijwnjgw0ha4~",
      i: "po8ni61donf4~",
      j: "rsdivm5m2ft4~",
      k: "wcjns71x16fl~",
      l: "6xd0ri7jn920~",
      m: "5pm2qbwbx6e4~",
      n: "xg33gw3y10f4~",
      o: "xkpme80gy29j~",
      p: "oz1km42vod7l~",
      q: "2mgjv4ked99l~",
      r: "34u9ps3cwk3e~",
      s: "s9h15a7icgv3~",
      t: "75o2fawywew8~",
      u: "u8wekfv0bqkf~",
      v: "y1xtijqby286~",
      w: "o50uyt8qv82l~",
      x: "jaubyfk3f88f~",
      y: "jmr48wyw6p4g~",
      z: "gt68vyy6fnu4~",
      " ": "lk5a7sin0zpp~",
      ".": "pfvr78k7sugk~",
      ",": "s223dva7erjl~",
      ":": "pnejil9mie7s~",
      ";": "tq631oa1ef4r~",
      "/": "lc0xdg3dgic9~",
      "(": "r1o9ekp4qem2~",
      ")": "a7f3ik55sdey~",
      "-": "lwynxyoff2qr~",
      "+": "5yyiztwa3kfm~",
      "_": "1isxubsl8pk3~",
      "=": "74yyl8t1kgqf~",
      "'": "6h7afbadm4of~",
      "!": "zhmw4ds2tqu9~",
      "@": "1l150zs32ps1~",
      "#": "uxie5kgywj3j~",
      "$": "g5k5ek8hizgd~",
      "%": "nm8d85dcnhzk~",
      "^": "xy9gbr9kh39b~",
      "&": "ke16o1c46e8d~",
      "*": "w55zmpgxu81q~",
      "[": "jvf060c8t8hq~",
      "]": "10ao33n1bvl9~",
      "{": "xly595skleyp~",
      "}": "izbqemp3jx9f~",
      "<": "ctpvu4zmkz4k~",
      ">": "51mkpxff4slg~",
      "?": "k0at3hh1nuep~",
      "1": "yjmb8ck7wivi~",
      "2": "mb7t13y8rf0k~",
      "3": "q7fya8x6kcig~",
      "4": "robh5w2f88dg~",
      "5": "s1fqayb99oug~",
      "6": "xj8oa5or4gi5~",
      "7": "6p6obj7nbv1n~",
      "8": "tfeqa55yrhf3~",
      "9": "9k3zfs1b3rsf~",
      "0": "xfdmuprat5jx~",
    };
  
    str = str.replace(
      /(?:a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\s|\.|\,|\:|\;|\/|\(|\)|\-|\+|\_|\=|\'|\!|\@|\#|\$|\%|\^|\&|\*|\[|\]|\{|\}|\<|\>|\?|1|2|3|4|5|6|7|8|9|0)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("output-twelve").value = str;
  }
  
  function askAgainTwelve() {
    let inputFieldAgain = document.getElementById("inputAgain-twelve");
    let strAgain = inputFieldAgain.value;
    const mapObj = {
      "n2xsrxyz5eus": "a",
      "erggsiguc4ij": "b",
      "1u37kiumg4fa": "c",
      "vc3kyn3hhb3m": "d",
      "iwez2y66juon": "e",
      "iah9tmbx5se4": "f",
      "8f42t7rn9d3d": "g",
      "6ijwnjgw0ha4": "h",
      "po8ni61donf4": "i",
      "rsdivm5m2ft4": "j",
      "wcjns71x16fl": "k",
      "6xd0ri7jn920": "l",
      "5pm2qbwbx6e4": "m",
      "xg33gw3y10f4": "n",
      "xkpme80gy29j": "o",
      "oz1km42vod7l": "p",
      "2mgjv4ked99l": "q",
      "34u9ps3cwk3e": "r",
      "s9h15a7icgv3": "s",
      "75o2fawywew8": "t",
      "u8wekfv0bqkf": "u",
      "y1xtijqby286": "v",
      "o50uyt8qv82l": "w",
      "jaubyfk3f88f": "x",
      "jmr48wyw6p4g": "y",
      "gt68vyy6fnu4": "z",
      "lk5a7sin0zpp": " ",
      "pfvr78k7sugk": ".",
      "s223dva7erjl": ",",
      "pnejil9mie7s": ":",
      "tq631oa1ef4r": ";",
      "lc0xdg3dgic9": "/",
      "r1o9ekp4qem2": "(",
      "a7f3ik55sdey": ")",
      "lwynxyoff2qr": "-",
      "5yyiztwa3kfm": "+",
      "1isxubsl8pk3": "_",
      "74yyl8t1kgqf": "=",
      "6h7afbadm4of": "'",
      "zhmw4ds2tqu9": "!",
      "1l150zs32ps1": "@",
      "uxie5kgywj3j": "#",
      "g5k5ek8hizgd": "$",
      "nm8d85dcnhzk": "%",
      "xy9gbr9kh39b": "^",
      "ke16o1c46e8d": "&",
      "w55zmpgxu81q": "*",
      "jvf060c8t8hq": "[",
      "10ao33n1bvl9": "]",
      "xly595skleyp": "{",
      "izbqemp3jx9f": "}",
      "ctpvu4zmkz4k": "<",
      "51mkpxff4slg": ">",
      "k0at3hh1nuep": "?",
      "yjmb8ck7wivi": "1~",
      "mb7t13y8rf0k": "2~",
      "q7fya8x6kcig": "3~",
      "robh5w2f88dg": "4~",
      "s1fqayb99oug": "5~",
      "xj8oa5or4gi5": "6~",
      "6p6obj7nbv1n": "7~",
      "tfeqa55yrhf3": "8~",
      "9k3zfs1b3rsf": "9~",
      "xfdmuprat5jx": "0~",
      "~": ""
    };
  
    strAgain = strAgain.replace(
      /\b(?:n2xsrxyz5eus|erggsiguc4ij|1u37kiumg4fa|vc3kyn3hhb3m|iwez2y66juon|iah9tmbx5se4|8f42t7rn9d3d|6ijwnjgw0ha4|po8ni61donf4|rsdivm5m2ft4|wcjns71x16fl|6xd0ri7jn920|5pm2qbwbx6e4|xg33gw3y10f4|xkpme80gy29j|oz1km42vod7l|2mgjv4ked99l|34u9ps3cwk3e|s9h15a7icgv3|75o2fawywew8|u8wekfv0bqkf|y1xtijqby286|o50uyt8qv82l|jaubyfk3f88f|jmr48wyw6p4g|gt68vyy6fnu4|lk5a7sin0zpp|pfvr78k7sugk|s223dva7erjl|pnejil9mie7s|tq631oa1ef4r|lc0xdg3dgic9|r1o9ekp4qem2|a7f3ik55sdey|lwynxyoff2qr|5yyiztwa3kfm|1isxubsl8pk3|74yyl8t1kgqf|6h7afbadm4of|zhmw4ds2tqu9|1l150zs32ps1|uxie5kgywj3j|g5k5ek8hizgd|nm8d85dcnhzk|xy9gbr9kh39b|ke16o1c46e8d|w55zmpgxu81q|jvf060c8t8hq|10ao33n1bvl9|xly595skleyp|izbqemp3jx9f|ctpvu4zmkz4k|51mkpxff4slg|k0at3hh1nuep|yjmb8ck7wivi|mb7t13y8rf0k|q7fya8x6kcig|robh5w2f88dg|s1fqayb99oug|xj8oa5or4gi5|6p6obj7nbv1n|tfeqa55yrhf3|9k3zfs1b3rsf|xfdmuprat5jx)\b/gi,
      (matched) => mapObj[matched]
    );
    strAgain = strAgain.replace(
      /(?:\~)/gi,
      (matched) => mapObj[matched]
    );
    document.getElementById("outputAgain-ela").value = strAgain;
  }
