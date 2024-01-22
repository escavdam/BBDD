# Estructura

MongoDB se compone de bases de datos, que a su vez se componen de colecciones, que a su vez se componen de documentos:

[![](https://mermaid.ink/img/pako:eNptkMFuwjAMhl8l8i6tRA702MMkWt4AbgShNDZQrbGnLBVCiHcnLRvLpF3iX98f2798AydIUMNxkIs72xDVdm3YC5-kKOaCXVka7jrEXeH7Q4fl3rCTgZzrhYuXUm_LMjOq3KmSg-JWu_SMnjiKWu1n1GSoeaI2Q21C33GU1lpNMWbxGv6M9pdVU9Pveq3f1bT9H9bkiX9gO7XDAjwFb3tM17kZVspAPJMnA3WSaMOHAcP39M-OUTZXdlDHMNICxk-0kda9PQXroT7a4YvuD2ppfeI?type=png)](https://mermaid.live/edit#pako:eNptkMFuwjAMhl8l8i6tRA702MMkWt4AbgShNDZQrbGnLBVCiHcnLRvLpF3iX98f2798AydIUMNxkIs72xDVdm3YC5-kKOaCXVka7jrEXeH7Q4fl3rCTgZzrhYuXUm_LMjOq3KmSg-JWu_SMnjiKWu1n1GSoeaI2Q21C33GU1lpNMWbxGv6M9pdVU9Pveq3f1bT9H9bkiX9gO7XDAjwFb3tM17kZVspAPJMnA3WSaMOHAcP39M-OUTZXdlDHMNICxk-0kda9PQXroT7a4YvuD2ppfeI)

En este ejemplo tenemos una única base de datos llamada `mi_bd`, contiene dos colecciones, `coleccion #1` y `coleccion #2`, y cada colección contiene varios documentos.

Veamos un ejemplo mas real:

[![](https://mermaid.ink/img/pako:eNpVjssKgzAQRX8lzCqCbly69g_aXaeLyUMNTSYlRkoR_73RltKu5nK49zAr6GgsdDD4-NATpSzOPXKIPEYpj2NUVSErZcxFeqdSnKsrso7eau0iy1m7wVU_pJWBeKSCPiLRNI3YBUf49t7Sf9buI2SoIdgUyJny2oosBEKebLAIXYmG0g0BeSs9WnI8PVlDl9Nia1juhrLtHY2JAnQD-dluL7BWUDI?type=png)](https://mermaid.live/edit#pako:eNpVjssKgzAQRX8lzCqCbly69g_aXaeLyUMNTSYlRkoR_73RltKu5nK49zAr6GgsdDD4-NATpSzOPXKIPEYpj2NUVSErZcxFeqdSnKsrso7eau0iy1m7wVU_pJWBeKSCPiLRNI3YBUf49t7Sf9buI2SoIdgUyJny2oosBEKebLAIXYmG0g0BeSs9WnI8PVlDl9Nia1juhrLtHY2JAnQD-dluL7BWUDI)

En este ejemplo, tenemos una base de datos llamada `libros`, con dos colecciones, `scifi` y `manga`.

Dentro de cada colección podemos crear diferentes documentos:

```json
{
    autor: "Isaac Asimov",
    titulo: "Fundación",
}
```

Este podria ser un documento de la colección `scifi`, que contiene dos campos, `autor` y `titulo`.
