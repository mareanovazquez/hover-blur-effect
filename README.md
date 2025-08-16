# Hover Blur Effect 🎨

Un proyecto de demostración que implementa efectos de desenfoque (blur) al hacer hover sobre elementos, utilizando tanto **CSS puro** como **JavaScript** para mostrar diferentes enfoques de implementación.

## 📋 Descripción

Este proyecto presenta dos implementaciones distintas del mismo efecto visual:
- **Efecto con CSS**: Utilizando pseudo-selectores y transiciones CSS
- **Efecto con JavaScript**: Utilizando event listeners y manipulación de clases

Cuando el usuario hace hover sobre un elemento, este se agranda y enfoca, mientras que los elementos adyacentes se desenfocan y reducen su tamaño, creando un efecto visual atractivo que resalta el elemento seleccionado.

## 🚀 Características

### ✨ Efectos Visuales
- **Efecto blur**: Desenfoque suave en elementos no seleccionados
- **Escala dinámica**: Crecimiento del elemento hover y reducción de los demás
- **Transiciones fluidas**: Animaciones suaves con curvas de bezier optimizadas
- **Efectos de brillo**: Gradiente animado que se desliza sobre los elementos
- **Sombras dinámicas**: Sombras que se intensifican durante el hover

### 🎯 Optimizaciones de Rendimiento
- **Hardware acceleration**: Uso de `transform: translateZ(0)` para acelización GPU
- **CSS Containment**: Propiedades `contain` para mejorar el rendimiento
- **Transiciones específicas**: Optimización de las propiedades que se animan
- **Will-change**: Preparación del navegador para cambios futuros

### ♿ Accesibilidad
- **Prefers-reduced-motion**: Respeta las preferencias del usuario sobre animaciones
- **Focus states**: Estados de foco visibles para navegación por teclado
- **Responsive design**: Adaptación completa a dispositivos móviles

## 📁 Estructura del Proyecto

```
hover-blur-effect/
├── index.html              # Estructura HTML principal
├── css/
│   └── style.css           # Estilos CSS con ambas implementaciones
├── js/
│   └── mouseoverBlur.js    # Lógica JavaScript para el efecto
└── README.md               # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del documento
- **CSS3**: 
  - Flexbox para layout
  - Transformaciones y transiciones
  - Filtros CSS (blur, brightness)
  - Media queries para responsive design
  - Animaciones keyframe
- **JavaScript (Vanilla)**: 
  - Event listeners
  - Manipulación del DOM
  - classList API

## 🎨 Implementaciones

### 1. Efecto CSS Puro
```css
.contenedor-general:hover .content:not(:hover) {
    filter: blur(3px) brightness(0.7);
    transform: scale(0.9) translateZ(0);
    opacity: 0.6;
}
```

**Ventajas:**
- No requiere JavaScript
- Mejor rendimiento
- Menor complejidad de código

### 2. Efecto JavaScript
```javascript
element.addEventListener('mouseenter', () => {
    elements.forEach(other => {
        if (other !== element) {
            other.classList.add('blur');
        }
    });
});
```

**Ventajas:**
- Mayor control programático
- Facilidad para agregar lógica compleja
- Mejor compatibilidad con frameworks

## 🚀 Cómo Usar

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/hover-blur-effect.git
   ```

2. **Navega al directorio:**
   ```bash
   cd hover-blur-effect
   ```

3. **Abre el archivo HTML:**
   - Abre `index.html` en tu navegador
   - O usa un servidor local (Live Server, Python HTTP server, etc.)

## 🎯 Funcionamiento

### Efecto CSS
- Utiliza el selector `:hover` en el contenedor padre
- Aplica efectos a todos los elementos que NO tienen hover con `:not(:hover)`
- Las transiciones se manejan completamente con CSS

### Efecto JavaScript  
- Escucha eventos `mouseenter` y `mouseleave`
- Agrega/remueve la clase `blur` dinámicamente
- Itera sobre todos los elementos para aplicar el efecto

## 📱 Responsive Design

El proyecto incluye breakpoints para diferentes dispositivos:

- **Desktop**: Layout horizontal con espaciado amplio
- **Tablet/Mobile (≤768px)**: 
  - Layout vertical
  - Tamaños de fuente reducidos
  - Espaciado optimizado para touch
  - Efectos simplificados para mejor rendimiento

## ⚡ Optimizaciones Implementadas

### Rendimiento
- **GPU Layers**: `transform: translateZ(0)` fuerza aceleración hardware
- **CSS Containment**: `contain: layout style paint` limita recálculos
- **Efficient Transitions**: Solo anima propiedades que no causan reflow

### Accesibilidad
```css
@media (prefers-reduced-motion: reduce) {
    .content {
        transition: none;
    }
}
```

### UX/UI
- Animaciones de entrada escalonadas
- Estados de foco visibles
- Feedback visual inmediato

## 🔧 Personalización

### Colores
```css
:root {
    --primary-color: #ED9455;
    --background-color: #FFFBDA;
    --text-color: #FEFAF6;
}
```

### Tiempos de Animación
```css
.content {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Intensidad del Blur
```css
.contenedor-general:hover .content:not(:hover) {
    filter: blur(3px); /* Ajusta el valor */
}
```

## 🌟 Características Destacadas

- **Dual Implementation**: Comparación directa entre CSS y JS
- **Performance Optimized**: Múltiples optimizaciones implementadas
- **Accessibility First**: Soporte completo para usuarios con preferencias especiales
- **Mobile Ready**: Diseño completamente responsive
- **Modern CSS**: Uso de características CSS modernas
- **Clean Code**: Código limpio y bien documentado

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
