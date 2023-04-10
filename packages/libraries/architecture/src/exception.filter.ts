import { type ArgumentsHost, Catch, type ExceptionFilter } from '@nestjs/common'
import { type Request, type Response } from 'express'
import { FeatureError } from './errors'

@Catch(FeatureError)
export class FeatureErrorFilter implements ExceptionFilter {
  catch (error: FeatureError<string, string>, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = 400

    response
      .status(status)
      .json({
        statusCode: status,
        namespace: error.namespace,
        name: error.name,
        message: error.message,
        timestamp: new Date().toISOString(),
        path: request.url
      })
  }
}
