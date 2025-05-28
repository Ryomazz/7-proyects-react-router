# **2. Blog de Posts Estáticos**

📌 **Conceptos nuevos**:

-  Rutas dinámicas (`:id`)
-  `useParams()` para acceder a parámetros de URL

🔨 **Proyecto**: Muestra posts guardados en un array.

```jsx
<Route path="/post/:id" element={<PostDetail />} />
```

```jsx
// PostDetail.jsx
const { id } = useParams();
const post = posts.find((p) => p.id === id);
```

## Steps ✔️

-  Configurate the routes ✔️
-  Get the id and render by this info ✔️
