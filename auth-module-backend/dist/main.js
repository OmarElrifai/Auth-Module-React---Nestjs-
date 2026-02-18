"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const global_exception_filter_1 = require("./common/filters/global-exception.filter");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept, Authorization,App-Token',
        credentials: true,
    });
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter());
    app.use((req, res, next) => {
        const logger = new common_1.Logger('HTTP');
        const { method, originalUrl, ip, headers } = req;
        const userAgent = headers['user-agent'] || '';
        const requestTime = new Date().toISOString();
        res.on('finish', () => {
            const { statusCode } = res;
            const logMessage = {
                timestamp: requestTime,
                method,
                url: originalUrl,
                statusCode,
                userAgent,
                ip: ip || 'unknown',
            };
            if (statusCode >= 400) {
                logger.error(JSON.stringify(logMessage));
            }
            else {
                logger.log(JSON.stringify(logMessage));
            }
        });
        next();
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest App API')
        .setDescription('User management API with JWT authentication')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .addGlobalParameters({
        name: 'app-token',
        description: 'Application token for authentication',
        required: true,
        in: 'header',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map