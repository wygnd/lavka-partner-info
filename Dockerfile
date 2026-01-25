# ---------- Build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

# Для нативных зависимостей (часто нужны)
RUN apk add --no-cache libc6-compat

# Копируем только манифесты — кэш npm
COPY package.json package-lock.json ./

RUN npm ci

# Копируем исходники
COPY . .

# Сборка Nuxt
RUN npm run build


# ---------- Runtime stage ----------
FROM node:22-alpine
WORKDIR /app

# Минимум зависимостей
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV NITRO_PORT=80
ENV NITRO_HOST=0.0.0.0

# Копируем только runtime-артефакты
COPY --from=build /app/.output ./.output

EXPOSE 80

CMD ["node", ".output/server/index.mjs"]