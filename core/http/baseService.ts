import { IHttpClient, IBaseService } from '../interfaces'
import { httpClient } from './baseHttp'

export abstract class BaseService implements IBaseService {
  protected httpClient: IHttpClient
  public readonly baseUrl: string

  constructor(baseUrl: string, httpClientInstance: IHttpClient = httpClient) {
    this.baseUrl = baseUrl
    this.httpClient = httpClientInstance
  }

  protected buildUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`
  }

  protected handleServiceError(error: unknown): never {
    console.error(`${this.constructor.name} error:`, error)
    throw error
  }
}
