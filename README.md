
# AUTH

This project is a secure authentication system leveraging key technologies for robust protection and performance. ZeroBounce ensures valid email addresses, while JWT handles secure session management. Helmet secures HTTP headers, and Joi validates user inputs with clear error handling. CSRF middleware prevents cross-site request forgery, and Cloudflare rate limiting protects against brute force and DDoS attacks. Together, these tools create a reliable, efficient, and secure user authentication framework


## Deployment

To deploy this project run

```bash
  git pull https://github.com/astitva3110/VRV.git
```

```bash
node app.js
```
## Documentation

Register Route


```bash
http://localhost:8000/auth/register
```
```bash
{
    "Email":"abc@gmail.com",
    "Password":"ABC@1234"
}
```
```bash
{
    "message": "User registered Sucesfully",
    "success": false
}
```

Login Route


```bash
http://localhost:8000/auth/login
```
```bash
{
    "Email":"abc@gmail.com",
    "Password":"ABC@1234"
}
```
```bash
{
    "message": "Login Succesfully",
    "token": "v4.public.eyJpZCI6IjY3NGExMjMxOTNmY2UxOGRhYjRkZWY4NiIsIkVtYWlsIjoiYXN0aXR2YXJhjfkew"
}
```

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Feedback
- PAESTO: Secures tokens with advanced encryption mechanisms.
- ZeroBounce: Validates email addresses for authenticity.
- JWT: Manages secure sessions with JSON Web Tokens.
- Helmet: Protects against vulnerabilities by securing HTTP headers.
- Joi: Validates user inputs with custom error messages.
- CSRF Middleware: Prevents cross-site request forgery attacks.

