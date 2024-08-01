// "use server";

// type Provider = "google" | "kakao" | "naver";

// export async function oauth(formData: FormData) {
//   // const oauthForm = {
//   //   state: "string",
//   //   redirectUri: process.env.REDIRECT_URL + provider,
//   //   token: session?.accessToken,
//   // };
//   try {
//     const response = await fetch(
//       `${process.env.EPIGRAM_API}/auth/signIn/${provider}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // body: JSON.stringify(oauthForm),
//       }
//     );
//     // console.log(response);
//     if (response.status === 201) {
//       const result = await response.json();
//       // console.log(result);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }
