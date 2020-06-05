export function getCurrentAuthority() {
  //通常由後端傳回
  return ["admin"];
}

export function checking(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}

//每個公司登入邏輯都不一樣，此處是一個小範例
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
