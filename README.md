Example `.env` file, Modify it as per requirements

```env
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_SERVER_URL="http://localhost:5000"
```

Generate `NEXTAUTH_SECRET` using this command

```bash
openssl rand -base64 32
```
