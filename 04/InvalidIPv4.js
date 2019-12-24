/**
 * 给定一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
 * 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
 *
 * 输入：address = "1.1.1.1"；
 * 输出："1[.]1[.]1[.]1"。
 */
const str = "1.1.1.1";
/**
 * 直接正则匹配
 */
const invalidIPv4 = (address) => {
  return address.replace(/\./g, '[.]');
};

console.log(invalidIPv4(str));


/**
 * 循环，正则匹配每个元素
 */
const _invalidIPv4 = (address) => {

  let str = '';
  for (add of address) {
    str += add.replace(/\./i, "[.]");
  }

  return str;
};

console.log(_invalidIPv4(str));


// 转数组 -- 字符串拼接截取
const __invalidIPv4 = (address) => {

  let str = '';

  address.split('.').forEach(item => str += item + '[.]');
  str = str.slice(0, str.length - 3);

  return str;
};

console.log(__invalidIPv4(str));


// 转数组 -- 再转字符串
const ___invalidIPv4 = (address) => {

  return address.split('.').join("[.]");
};

console.log(___invalidIPv4(str));
