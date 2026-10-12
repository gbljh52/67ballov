# Tutor Platform - Веб-сервис поиска репетиторов

Веб-приложение для поиска и управления профилями репетиторов.

## Инструкция по запуску

### Требования
- Node.js v16+
- npm v7+

### Установка

1. **Распакуйте архив**
```bash
tar -xzf tutor-platform.tar.gz
cd tutor-platform
```

2. **Установите зависимости**
```bash
npm install
```

3. **Запустите в режиме разработки**
```bash
npm run dev
```

Откройте http://localhost:5173 в браузере

4. **Сборка для продакшена**
```bash
npm run build
```

## Структура проекта

```
src/
├── pages/              # 6 основных страниц
│   ├── Dashboard.tsx
│   ├── TutorsList.tsx
│   ├── TutorDetail.tsx
│   ├── TutorForm.tsx
│   ├── Analytics.tsx
│   └── Moderation.tsx
├── types/
│   └── index.ts        # TypeScript типы
├── data/
│   └── mockTutors.ts   # Данные
├── App.tsx
├── App.css
└── main.tsx
```

## Технологии

- React 18
- TypeScript
- Vite
- React Router

## Основная сущность (Tutor)

```typescript
interface Tutor {
  id: string;
  name: string;
  description: string;
  experience: number;
  rating: number;
  registrationDate: string;
  status: 'active' | 'pending' | 'inactive';
  isAvailable: boolean;
  subjects: string[];
  hourlyRate: number;
  reviewCount: number;
}
```

## 6 страниц приложения

1. **Dashboard** (`/`) - Главная со статистикой
2. **TutorsList** (`/tutors`) - Каталог репетиторов
3. **TutorDetail** (`/tutors/:id`) - Профиль репетитора
4. **TutorForm** (`/tutors/create`, `/tutors/:id/edit`) - Форма профиля
5. **Analytics** (`/analytics`) - Аналитика платформы
6. **Moderation** (`/moderation`) - Панель модерации
