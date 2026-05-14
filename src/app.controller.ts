import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get welcome message' })
  @ApiResponse({
    status: 200,
    description: 'Returns the default welcome message.',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @ApiOperation({ summary: 'Check API health status' })
  @ApiResponse({
    status: 200,
    description: 'Returns API health status and current backend version.',
    schema: {
      example: {
        status: 'ok',
        app: 'USIApp Backend',
        version: '0.2.0',
      },
    },
  })
  getHealth() {
    return {
      status: 'ok',
      app: 'USIApp Backend',
      version: '0.2.0',
    };
  }
}