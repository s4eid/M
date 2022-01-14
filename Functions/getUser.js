import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

// function getCookie(cname) {
//   if (process.browser) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(";");
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == " ") {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
// }

export const getUser = async (name) => {
  // const cookie = await getCookie(name);
  const cookie = Cookies.get(name);
  console.log(`here i can reaid ${cookie}`);
  const data = await JSON.stringify(cookie);
  const user = await jwt_decode(data);
  return user;
};
