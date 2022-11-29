import { Message } from "element-ui";
export default {
  /**数组根据某个字段去重 */
  unique(arr, val) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[val]) && res.set(item[val], 1));
  },
  /**
   * 格式化时间
   * 调用 FormatDate(strDate, "yyyy-MM-dd HH:mm:ss")
   * @param strDate （中国标准时间）时间戳等都可以
   * @param strFormat 返回格式
   * @returns
   */
  formatDate(strDate, strFormat) {
    if (!strDate) return;
    if (!strFormat) strFormat = "yyyy/MM/dd HH:mm";
    switch (typeof strDate) {
      case "string":
        strDate = new Date(strDate.replace(/-/g, "/"));
        break;
      case "number":
        strDate = new Date(strDate);
        break;
    }
    if (strDate instanceof Date) {
      const dict = {
        yyyy: strDate.getFullYear(),
        M: strDate.getMonth() + 1,
        d: strDate.getDate(),
        H: strDate.getHours(),
        m: strDate.getMinutes(),
        s: strDate.getSeconds(),
        MM: ("" + (strDate.getMonth() + 101)).substr(1),
        dd: ("" + (strDate.getDate() + 100)).substr(1),
        HH: ("" + (strDate.getHours() + 100)).substr(1),
        mm: ("" + (strDate.getMinutes() + 100)).substr(1),
        ss: ("" + (strDate.getSeconds() + 100)).substr(1),
      };
      return strFormat.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function (m) {
        return dict[m];
      });
    }
  },
  /**数字千分位 */
  formatNumber(num) {
    return (Math.round(num) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
  },
  /**
   * 复制
   * @param value
   */
  handleCopy(value) {
    // const dummy = document.createElement("input"); // 不支持换行符
    const dummy = document.createElement("textarea"); // 支持换行符
    document.body.appendChild(dummy);
    dummy.value = value;
    dummy.select(); // 选择对象
    document.execCommand("copy"); // 执行浏览器复制命令
    document.body.removeChild(dummy);
    Message({ message: "Copy Success" });
  },

  // 设置cookie过期时间
  setCookie(key, value, time) {
    const num = new Date(new Date().getTime() + time * 60 * 1000 * 60);
    document.cookie = `${key} = ${value};expires = ` + num.toUTCString() + ";path = /";
  },
  // 获取cookie
  getCookie(name) {
    let arr = [];
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  },
  delCookie(name) {
    this.setCookie(name, "", -1);
  },
  // //禁止滚动条滚动
  // forbiddenScroll() {
  //   const scroll = (e) => {
  //     e.preventDefault();
  //   };
  //   document.body.style.overflow = "hidden";
  //   document.addEventListener("touchmove", scroll, false);
  // },
  // //恢复滚动条滚动
  // restoreTheScroll() {
  //   const scroll = (e) => {
  //     e.preventDefault();
  //   };
  //   document.body.style.overflow = "";
  //   document.removeEventListener("touchmove", scroll, false);
  // },
};
