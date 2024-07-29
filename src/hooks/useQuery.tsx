import { exampleFn } from "@/services/queries.service";
import { IExampleParams, IExampleResponse } from "@/types/queries";
import { IExampleError } from "@/types/types";
import axios from "@/utils/axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useExample = (
  params: IExampleParams,
  options?: UseQueryOptions<IExampleResponse, IExampleError>
) => {
  return useQuery<IExampleResponse, IExampleError>({
    queryKey: ["example-key", JSON.stringify(params)],
    queryFn: () => exampleFn(params),
    ...options,
  });
};
