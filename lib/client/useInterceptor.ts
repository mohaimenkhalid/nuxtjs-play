import {getToken} from "~/storage/appStorage";

export default function useInterceptor(){
  const onConfig = (config: any) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }

  return {
    onConfig
  }
}