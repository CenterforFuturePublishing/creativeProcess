## api

### POST

poem
```
:3000/api/poem
```

### GET

## test

```bash
curl    --header "Content-Type: application/json" \
        --request POST \
        --data '{"poem": "coucou poem tèste\nretour de ligne","graisse": 30,"contraste": 50,"rigidite": 0}' \
        http://localhost:3000/api/poem
```
