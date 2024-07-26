import Cookies from "js-cookie";

export function getCookieValue(name: string) {
  return Cookies.get(name) || null;
}

// export function getCookieValue(name: string) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
//   return null;
// }
