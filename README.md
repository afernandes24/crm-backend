# CRM Backend

Projekt backendu aplikacji CRM do zarządzania klientami i usługami.

## Funkcjonalności

- CRUD klientów (tworzenie, odczyt, aktualizacja, usuwanie)
- Rejestracja i logowanie użytkowników z uwierzytelnianiem JWT
- Obsługa bazy danych MongoDB
- Bezpieczne przechowywanie haseł (bcrypt)

## Uruchomienie

1. Zainstaluj zależności:

```bash
npm install
```

2. Skonfiguruj plik `.env` z odpowiednimi zmiennymi środowiskowymi, np.:

```
MONGO_URI=mongodb://localhost:27017/crm
JWT_SECRET=twoj_sekretny_klucz
```

3. Uruchom serwer:

```bash
npm start
```

## API

- `POST /register` - rejestracja użytkownika
- `POST /login` - logowanie i otrzymanie tokena JWT
- `GET /customers` - pobranie listy klientów
- `POST /customers` - dodanie klienta
- `PUT /customers/:id` - aktualizacja klienta
- `DELETE /customers/:id` - usunięcie klienta

## Autor

Aleksander Fernandes
