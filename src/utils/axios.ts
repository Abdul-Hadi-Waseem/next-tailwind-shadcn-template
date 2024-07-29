import globalAxios from "axios";
import { useRouter } from "next/router";

const axios = globalAxios.create({
  baseURL: "", //API PATH,
});

axios.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem(
      process.env.NEXT_PUBLIC_CURRENTUSER_LOCAL_KEY as string
    );
    const parsed = user && JSON.parse(user);
    const token = parsed?.state?.currentUser?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // const status = error.response.status;
    // if (status === 401) {
    //   // Clear local storage
    //   localStorage.removeItem(process.env.NEXT_PUBLIC_CURRENTUSER_LOCAL_KEY);

    //   // Display popup asking user to login again

    //   // Redirect to login page
    //   // const router = useRouter();
    //   // router.push("/auth/registration");

    //   // Returning an empty promise to prevent the error from being propagated further
    //   return new Promise(() => {});
    // }
    return Promise.reject(error);
  }
);

export default axios;
