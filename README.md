# 🚀 SENATI Backend - API REST

API REST para gestión de usuarios con Node.js, Express, Sequelize y MySQL.

## 📋 Requisitos

- Node.js (v14 o superior)
- MySQL
- npm

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/edissonparicahua123/SENATI-BACKEND-2.git

# Instalar dependencias
npm install
```

## ⚙️ Configuración

1. Crear base de datos en MySQL:
```sql
CREATE DATABASE `senati-users`;
```

2. Configurar credenciales en `src/settings/db.js`:
```javascript
const sequelize = new Sequelize(
    "senati-users", "root", "", { host: "localhost", dialect: "mysql" }
);
```

## 🚀 Ejecutar

```bash
node index.js
```

Servidor corriendo en: `http://localhost:3000`

## 📊 Estructura de Datos

**Tabla:** `usuarios`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | ID auto-incremental |
| nombres | STRING | Nombres del usuario |
| apellidos | STRING | Apellidos del usuario |
| dni | STRING | DNI único |
| fecha_nac | DATE | Fecha de nacimiento (YYYY-MM-DD) |

## 🔌 Endpoints

### Listar usuarios
```
GET /u/users/
```

### Crear usuario
```
POST /u/users/new/
Content-Type: application/json

{
  "nombres": "Juan Alberto",
  "apellidos": "Robles Morales",
  "dni": "0254542",
  "fecha_nac": "2000-12-12"
}
```

### Actualizar usuario
```
PUT /u/users/:id
Content-Type: application/json

{
  "nombres": "Juan Carlos",
  "apellidos": "Robles Morales",
  "dni": "0254542",
  "fecha_nac": "2000-12-12"
}
```

### Eliminar usuario
```
DELETE /u/users/:id
```

## 🧪 Pruebas

Ver archivo `PRUEBAS_CRUD.md` para guía completa de pruebas.

### Ejemplo rápido con cURL:
```bash
# Crear usuario
curl -X POST http://localhost:3000/u/users/new/ -H "Content-Type: application/json" -d '{"nombres":"Juan Alberto","apellidos":"Robles Morales","dni":"0254542","fecha_nac":"2000-12-12"}'

# Listar usuarios
curl http://localhost:3000/u/users/
```

## 📁 Estructura del Proyecto

```
├── index.js                          # Punto de entrada
├── package.json
└── src/
    ├── app.js                        # Configuración Express
    ├── controllers/
    │   └── user.controller.js        # Lógica CRUD
    ├── models/
    │   └── user.js                   # Modelo Sequelize
    ├── routes/
    │   └── user.routes.js            # Rutas API
    └── settings/
        └── db.js                     # Conexión MySQL
```

## 🛡️ Tecnologías

- **Express** v5.1.0 - Framework web
- **Sequelize** v6.37.7 - ORM
- **MySQL2** v3.15.3 - Driver MySQL

## 👨‍💻 Autor

SENATI - Backend 2

## 📝 Licencia

ISC