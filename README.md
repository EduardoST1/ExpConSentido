# Experiencias ConSentido

Plataforma editorial y de reconocimiento independiente para descubrir experiencias turísticas, gastronómicas, culturales y comunitarias. La primera edición territorial está dedicada a Cholula, Puebla.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
APPLICATION_WEBHOOK_URL=https://tu-receptor-de-postulaciones
REPORT_WEBHOOK_URL=https://tu-receptor-de-reportes
```

`NEXT_PUBLIC_SITE_URL` se utiliza para metadatos, sitemap y robots. Los webhooks conectan los formularios con n8n, Make, Zapier o un backend propio; sin ellos el sitio no acepta ni pierde datos silenciosamente.

## Comandos

- `npm run dev`: servidor de desarrollo.
- `npm run lint`: validación de TypeScript.
- `npm run build`: compilación de producción.
- `npm run start`: servidor de producción.

## Contenido

La información inicial se encuentra en `src/data/content.ts`. Las experiencias actuales son fichas demostrativas y no representan reconocimientos emitidos ni ofertas confirmadas.

## Posicionamiento

Experiencias ConSentido es una iniciativa independiente y no gubernamental. Postularse o pagar un proceso de evaluación no garantiza recibir un reconocimiento.
