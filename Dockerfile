# Multi-stage build для оптимизации размера образа
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production=false

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Production stage. CI pushes only this stage.
FROM node:20-alpine AS production

# Устанавливаем serve глобально
RUN npm install -g serve

WORKDIR /app

# Копируем собранное приложение из builder stage
COPY --from=builder /app/dist ./dist

# Копируем package.json для версионирования (опционально)
COPY --from=builder /app/package.json ./package.json

# Создаем непривилегированного пользователя
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Меняем владельца файлов
RUN chown -R nextjs:nodejs /app

# Переключаемся на непривилегированного пользователя
USER nextjs

EXPOSE 3000

# Healthcheck для Kubernetes liveness/readiness probes
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

CMD ["serve", "-s", "dist", "-l", "3000", "--no-clipboard"]

