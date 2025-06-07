# **4. Dashboard con Layout Anidado**

📌 **Conceptos nuevos**:

-  Rutas anidadas (`<Route>` dentro de `<Route>`)
-  `<Outlet />` para contenido dinámico

🔨 **Proyecto**: Panel con layout compartido (sidebar) y subrutas.

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
   <Route index element={<DashboardHome />} />
   <Route path="settings" element={<Settings />} />
</Route>
```

```jsx
// DashboardLayout.jsx
<Sidebar />
<Outlet />  {/* Aquí se renderizan Settings o DashboardHome */}
```

## Steps ✔️

-  Make the routes ✔️
-  Make the Dashboard, DashboardHome, Sidebar, and Settings components ✔️
-  Make the layout structure ✔️
