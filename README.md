# Информационный сайт партнера Яндекс Лавка

Простое одностраничное приложение, созданное на nuxt без использования backend.
Приложение отображает статичный контент и рендер виджета Yandex Maps.

## Технологии

- Nuxt.js 4.2.2
- Node.js 24
- Docker

## Cборка и запуск через Docker

Сборка Docker контейнера

``` shell
docker build -t nuxt-lavka .
```

Запуск контейнера

```shell
docker run -d -p 3000:3000 nuxt-lavka
```

## Cборка и запуск без Docker

Сборка проекта

```shell
# npm
npm run build
```

Запуск сервера
```shell
node .output/server/index.mjs

# Или используй статическую генерацию с веб сервером
npm run generate
```