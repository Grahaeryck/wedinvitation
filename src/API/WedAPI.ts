import axios, { AxiosResponse, AxiosError } from "axios";

const wedAPI = axios.create({
    baseURL: "https://api.hatiuntukbersandar.com/",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/json;charset=UTF-8",
    },
  });

  export const getComments = async (
    dataCallback: (data: any) => void,
    errorCallback: (error: Error | AxiosError) => void
  ) => {
    await wedAPI
      .get("GetComments.php")
      .then((res) => dataCallback(res.data.data))
      .catch((error) => errorCallback(error));
  };

  export const addReqComment = async (
    name: string,
    comments: string,
    sesi: string,
    jumlahTamu: string,
    kehadiran: string,
    dataCallback: (data: any) => void,
    errorCallback: (error: Error | AxiosError) => void
  ) => {
    const addParam = {
      name: name,
      comments: comments,
      sesi: sesi,
      jumlahTamu: jumlahTamu,
      kehadiran: kehadiran,
    };
    await wedAPI
      .post("PostComments.php", addParam)
      .then((res) => dataCallback(res))
      .catch((error) => errorCallback(error));
  };