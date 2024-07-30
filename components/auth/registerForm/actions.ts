"use server";

export async function createAccount(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    nickname: formData.get("nickName")?.toString() || "",
    password: formData.get("password")?.toString() || "",
    passwordConfirmation: formData.get("confirmPassword")?.toString() || "",
  };
  try {
    const response = await fetch(process.env.BASE_URL + "api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);
      return false;
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData.redrect;
  } catch (e) {
    console.log(e);
    throw new Error("Failed");
  }
}
