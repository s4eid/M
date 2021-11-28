import React, { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";
function getCookie(cname) {
  if (process.browser) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

export default async function useGetUser({ name }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getCookies = async () => {
      const cookie = await getCookie(name);
      const data = await JSON.stringify(cookie);
      const user = await jwt_decode(data);
      setUser(user);
    };
    getCookies();
  }, []);
  console.log(user);
  return { user };
}
