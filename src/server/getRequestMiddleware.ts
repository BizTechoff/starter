import { AsyncLocalStorage } from 'async_hooks';
import { Request, RequestHandler } from "express";
import { getRequestConfig } from "./getRequest";

const requestAsyncStorage = new AsyncLocalStorage<Request>();

getRequestConfig.requestFactory = () => requestAsyncStorage.getStore()!;
export const getRequestMiddleware: RequestHandler = (req, res, next) => {
  requestAsyncStorage.run(req, () => next());
}
