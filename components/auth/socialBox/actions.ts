"use server";

export async function signIn(formData: FormData) {
  const provider = formData.get("provider");
  const redirectUri = `http://localhost:3000/api/auth/callback/${provider}`;
  let authUrl = "";

  switch (provider) {
    case "google":
      authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.AUTH_GOOGLE_ID}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email`;
      break;
    case "kakao":
      authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${redirectUri}&response_type=code`;
      break;
    case "naver":
      authUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.AUTH_NAVER_ID}&redirect_uri=${redirectUri}&response_type=code&state=YOUR_UNIQUE_STATE`;
      break;
    default:
      throw new Error("Invalid provider");
  }

  return { url: authUrl };
}
