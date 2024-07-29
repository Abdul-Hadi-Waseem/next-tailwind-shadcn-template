import { IExampleParams, IExampleResponse } from "@/types/queries";
import { IExampleError } from "@/types/types";
import axios from "@/utils/axios";
export const exampleFn = async (
  params: IExampleParams
): Promise<IExampleResponse> => {
  const response = await axios.get<IExampleResponse>("/example-endpoint", {
    params,
  });
  return response.data;
};
