### 1\.Настройка порта json-server

В файле package.json:

```json
"server": "json-server -w db.json5 -p 3001",
```

Настройте порт на любой удобный для вас, кроме 3000.



### 2\.Запуск json-server

В терминале:

`npm run server`

или

```json
npx json-server -w db.json5 -p 3001
```



### 3\.Запуск основного приложения(react)

В терминале:

`npm run start`





#### После этого приложение будет доступно на <http://localhost:3000>
