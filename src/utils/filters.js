export default {
  /**超出默认隐藏长度的文本显示省略号 */
  ellipsisNormal(value) {
    if (!value) return "";
    return value.slice(0, 6) + "...";
  },
  /**钱包地址超出 */
  ellipsisWallet(value) {
    if (!value) return "";
    const index = value.length;
    return value.slice(0, 6) + "..." + value.slice(index - 4, index);
  },
  /**邮箱超出 */
  ellipsisMail(value) {
    if (!value) return "";
    const index = value.length;
    const index2 = value.indexOf("@");
    return value.slice(0, 2) + "***" + value.slice(index2, index);
  },

  /**数字转换千分位 */
  numberThousands(value) {
    if (!value) return 0;
    return (Math.round(value) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
  },
  /**数字转换计数单位 */
  numberTally(value) {
    if (!value) return 0;
    // Number.isInteger(num) 判断是否是整数
    if (1000000 <= value) {
      return value / 1000000 + " M";
    } else if (1000 <= value && value < 1000000) {
      return value / 1000 + " K";
    } else {
      return value;
    }
  },
  /**数字四舍五入去0 */
  numberToFixed(value, digits) {
    if (!value) return 0;
    return Number(value.toFixed(digits));
  },

  /**去掉小数后的0 */
  numberCutZero(value) {
    const str = value.toString();
    const newstr = str;
    const leng = str.length - str.indexOf(".") - 1;
    if (str.indexOf(".") > -1) {
      for (let i = leng; i > 0; i--) {
        if (newstr.lastIndexOf("0") > -1 && Number(newstr.substr(newstr.length - 1, 1)) == 0) {
          const k = newstr.lastIndexOf("0");
          if (newstr.charAt(k - 1) == ".") return newstr.substring(0, k - 1);
          return newstr.substring(0, k);
        }
        return newstr;
      }
    }
    return value;
  },
};
