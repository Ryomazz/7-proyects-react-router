# **3. Tienda con Navegación Programática**

📌 **Conceptos nuevos**:

-  `useNavigate()` para redirecciones
-  Pasar estado entre rutas (`state` en `<Link>`)

🔨 **Proyecto**: Catálogo de productos + página de detalles.

```jsx
// Al hacer clic en un producto:
navigate(`/product/${id}`, { state: { product } });
```

```jsx
// ProductDetail.jsx
const { state } = useLocation();
```

## Steps ✔️

-  Configure the routes ✔️
