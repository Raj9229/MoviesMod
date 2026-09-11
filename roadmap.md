# Movie Ticket Booking System - Development Roadmap

Yeh roadmap aapke MERN project ko step-by-step build karne ke liye hai. Isko ek checklist ki tarah use karein. Har phase complete hone ke baad hi next phase par jaane ki koshish karein.

Aapke current project mein React + Vite + Tailwind CSS + Axios frontend par already setup hai. `Home` aur `Movies` ka basic start bhi ho chuka hai. Backend mein Express aur Mongoose ka base available hai. Ab humein code ko dheere-dheere clean structure mein le jaana hai.

---

# 1. Project Overview

## Hum kya bana rahe hain?

Hum ek **Movie Ticket Booking System** bana rahe hain jahan user:

- Movies dekh sakega
- Movie ki details padh sakega
- Theatre, date aur show time select kar sakega
- Available seats dekh sakega
- Seats select karke booking kar sakega
- Login/register kar sakega
- Apni bookings dekh sakega

Admin:

- Movies add, update aur delete kar sakega
- Theatres aur screens manage karega
- Shows create karega
- Bookings aur basic statistics dekh sakega

## Complete system kaise work karega?

Simple flow:

```text
User browser mein React app open karta hai
        ↓
React page user ka action leta hai
        ↓
Axios backend API ko request bhejta hai
        ↓
Express route request ko receive karta hai
        ↓
Controller business logic handle karta hai
        ↓
Service (jab logic complex ho) help karti hai
        ↓
Mongoose model MongoDB se data read/write karta hai
        ↓
Backend JSON response bhejta hai
        ↓
React state update karke screen par result dikhata hai
```

## Frontend -> API -> Backend -> Database

- **Frontend:** React user ko pages, buttons, forms aur movie information dikhata hai.
- **API communication:** Axios HTTP request bhejta hai, jaise `GET /api/movies`.
- **Backend:** Express request validate karta hai aur sahi controller ko bhejta hai.
- **Database:** MongoDB movies, users, shows aur bookings ka data store karta hai.

## React View layer kaise hai?

MVC mein View ka kaam user interface dikhana hota hai. Is project mein React hi View layer hai. React:

- Data ko screen par show karta hai
- Forms aur buttons handle karta hai
- Page ke parts ko components mein todta hai
- API se aaye data ko state mein rakhta hai

React ko EJS ke jaise backend ke andar `views` folder mein rakhne ki zaroorat nahi hai. React ek separate frontend application hai.

## Backend mein MVC kaise apply hoga?

- **Model:** MongoDB documents ka structure, jaise `Movie` ya `Booking`.
- **View:** Is project mein backend HTML view render nahi karega. JSON response React ko milega.
- **Controller:** Request ka main logic, jaise movie list fetch karna.
- **Routes:** URL aur HTTP method ko controller se connect karna.

Backend ka simple example:

```text
GET /api/movies
        ↓
movieRoutes.js
        ↓
movieController.js
        ↓
Movie model
        ↓
MongoDB
        ↓
JSON response
        ↓
React Movies page
```

---

# 2. Recommended Project Architecture

Shuruaat mein structure simple rakhein. Har cheez ke liye alag abstraction banane ki zaroorat nahi hai.

```text
MoviesMod/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── SeatSelection.jsx
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── movieService.js
│   │   │   ├── showService.js
│   │   │   └── bookingService.js
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── BookingContext.jsx
│   │   ├── utils/
│   │   │   └── formatDate.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── movieController.js
│   │   ├── authController.js
│   │   ├── showController.js
│   │   └── bookingController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   └── errorMiddleware.js
│   ├── model/
│   │   ├── usermodel.js
│   │   ├── moviemodel.js
│   │   ├── theatreModel.js
│   │   ├── showModel.js
│   │   └── bookingModel.js
│   ├── routes/
│   │   ├── movieRoutes.js
│   │   ├── authRoutes.js
│   │   ├── showRoutes.js
│   │   └── bookingRoutes.js
│   ├── services/
│   │   └── bookingService.js
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── asyncHandler.js
│   ├── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Important folders ka purpose

### Frontend

- `components/`: Reusable UI pieces. `MovieCard` ko Home aur Movies dono par reuse kar sakte hain.
- `pages/`: Complete screen/page. Page API data laakar components ko props de sakta hai.
- `services/`: Axios calls. Isse API logic JSX se alag rehta hai.
- `hooks/`: Reusable React logic, jaise current user read karna.
- `context/`: Shared state, jaise logged-in user ya current booking.
- `utils/`: Small helper functions, jaise date format karna.

### Backend

- `routes/`: URL aur HTTP method define karte hain.
- `controllers/`: Request receive karke response bhejte hain.
- `model/`: Mongoose schemas aur MongoDB models.
- `middleware/`: Request ke beech mein chalne wale checks, jaise JWT verify karna.
- `services/`: Complex business logic. Simple CRUD mein controller directly model use kar sakta hai.
- `config/`: Database connection aur environment configuration.
- `utils/`: Token generation, error helpers jaise common functions.

---

# 3. Development Order

Neeche exact recommended order hai. Har phase ki dependency pehle complete karein.

## Phase 1 -> Frontend basic setup

- [ ] React Router se Home aur Movies routes clean karein.
- [ ] Navbar aur Footer ko layout ki tarah use karein.
- [ ] Tailwind se common spacing, colors aur responsive layout banayein.
- [ ] Loading, empty aur error state ka basic pattern banayein.
- [ ] Axios instance ko `services/api.js` mein rakhein.

**Dependency:** Koi nahi. Yeh current starting point hai.

## Phase 2 -> Home page

- [ ] Hero section banayein.
- [ ] Now Showing movie section banayein.
- [ ] Coming Soon section ka static version banayein.
- [ ] `MovieCard` reusable component banayein.
- [ ] Home se Movies page par navigation add karein.

**Dependency:** Phase 1.

## Phase 3 -> Movies page

- [ ] Movies list display karein.
- [ ] Search input add karein.
- [ ] Genre/language filter add karein.
- [ ] Loading aur error state dikhayein.
- [ ] Pehle mock data se UI test karein, phir `GET /api/movies` connect karein.

**Dependency:** Phase 2 ka `MovieCard`.

## Phase 4 -> Movie Details

- [ ] Movie poster, title, description, genre, language, rating dikhayein.
- [ ] `GET /api/movies/:id` call karein.
- [ ] `Book Tickets` button add karein.
- [ ] User ko show selection par bhejein.

**Dependency:** Movies page aur Movie API.

## Phase 5 -> Theatre/Show selection

- [ ] Movie ke liye date select karwayein.
- [ ] Theatres aur show timings list karein.
- [ ] `GET /api/shows?movieId=...&date=...` use karein.
- [ ] Selected show ko next page ya booking context mein rakhein.

**Dependency:** Movie details aur Show model/API.

## Phase 6 -> Seat selection

- [ ] Screen ke seats grid mein show karein.
- [ ] Available, selected aur booked seats ke different styles rakhein.
- [ ] User ko sirf available seats select karne dein.
- [ ] Selected seats ka count aur total amount calculate karein.
- [ ] `GET /api/shows/:showId/seats` call karein.

**Dependency:** Show selection.

## Phase 7 -> Booking summary

- [ ] Movie, theatre, screen, date, time aur seats ka summary dikhayein.
- [ ] Ticket price, convenience fee aur total show karein.
- [ ] Login na ho to Login/Register page par bhejein.
- [ ] Confirm button ke liye booking payload ready karein.

**Dependency:** Seat selection aur later authentication.

## Phase 8 -> Backend setup

- [ ] Express app ko `app.js` mein clean karein.
- [ ] MongoDB connection ko `config/db.js` mein move karein.
- [ ] `.env` se `PORT` aur `MONGO_URI` read karein.
- [ ] `routes/`, `controllers/` aur `model/` ko connect karein.
- [ ] `/api/health` jaisa health endpoint banayein.

**Dependency:** Frontend ka basic flow samajh aa chuka ho.

## Phase 9 -> MongoDB models

- [ ] Movie model improve karein.
- [ ] Theatre aur Show models banayein.
- [ ] User aur Booking models baad mein authentication ke saath complete karein.
- [ ] Mongoose validation add karein.
- [ ] Unnecessary Seat collection shuruaat mein na banayein; show ke andar seat status rakh sakte hain.

## Phase 10 -> Movie aur show APIs

- [ ] Public movie list/detail APIs banayein.
- [ ] Admin movie CRUD APIs banayein.
- [ ] Show list API banayein.
- [ ] Admin show create/update/delete APIs banayein.
- [ ] Frontend services se APIs call karein.

## Phase 11 -> Authentication

- [ ] Register API banayein.
- [ ] Password ko `bcryptjs` se hash karein.
- [ ] Login API JWT return kare.
- [ ] Frontend `AuthContext` banayein.
- [ ] Protected routes aur logout add karein.
- [ ] Admin role check add karein.

## Phase 12 -> User dashboard

- [ ] User Profile page banayein.
- [ ] My Bookings list banayein.
- [ ] Booking Details page banayein.
- [ ] Cancel policy agar required ho to baad mein add karein.

## Phase 13 -> Admin panel

- [ ] Admin Dashboard banayein.
- [ ] Admin Movies CRUD page banayein.
- [ ] Admin Theatres page banayein.
- [ ] Admin Shows page banayein.
- [ ] Admin Bookings page banayein.
- [ ] Har admin API par role middleware lagayein.

## Phase 14 -> Booking management

- [ ] Booking create API banayein.
- [ ] Seat availability server par dobara check karein.
- [ ] Booking ko logged-in user se link karein.
- [ ] Double booking rokne ke liye database-level validation/transaction approach samjhein.
- [ ] Confirmation page banayein.

## Phase 15 -> Advanced features

- [ ] Payment gateway.
- [ ] Email confirmation.
- [ ] Search optimisation.
- [ ] Pagination.
- [ ] Caching.
- [ ] Logging aur monitoring.
- [ ] Better validation aur automated tests.

## Phase 16 -> Deployment

- [ ] Frontend production build test karein.
- [ ] Backend environment variables configure karein.
- [ ] MongoDB Atlas use karein.
- [ ] Frontend aur backend deploy karein.
- [ ] CORS aur production API URL update karein.
- [ ] Domain, HTTPS aur logs configure karein.

---

# 4. Page-by-Page Breakdown

Har page ke liye pehle UI ko mock/static data se complete karein. API connection tab add karein jab page ka layout clear ho.

## Home Page

**Purpose:** User ko movies discover karwana aur booking journey start karwana.

**Components:** `Navbar`, `HeroSection`, `MovieSection`, `MovieCard`, `ComingSoon`, `Footer`.

**Static data:** Hero text, button labels, temporary coming-soon movies.

**API data:** Now Showing movies, featured movie, popular movies.

**API call:** `homeService.js` ya `movieService.js` se `GET /api/movies?status=now-showing`. Call Home page ke `useEffect` mein service function ke through karein.

**React learning:** JSX, components, props, `useState`, `useEffect`, `map()`, conditional rendering, React Router `Link`.

## Movies Page

**Purpose:** Saari available movies browse, search aur filter karna.

**Components:** `Navbar`, `SearchBar`, `FilterBar`, `MovieGrid`, `MovieCard`, `Pagination`, `Footer`.

**Static data:** Filter options ya temporary mock movies.

**API data:** Movie list, genre, language, rating, poster.

**API call:** `movieService.js` ka `getMovies(filters)` function, page ke effect se call hoga: `GET /api/movies`.

**React learning:** Controlled input, filtering, query parameters, loading/error states, URL search params.

## Movie Details Page

**Purpose:** Ek movie ke baare mein full information dikhana aur booking start karna.

**Components:** `MovieHero`, `MovieInfo`, `Rating`, `CastList` (optional), `ShowCTA`.

**Static data:** Initial skeleton/loading layout.

**API data:** Movie title, poster, description, language, genre, duration, rating.

**API call:** `movieService.js` se `GET /api/movies/:id`, `useParams()` se id milegi.

**React learning:** Dynamic route, `useParams`, async data, error page, navigation.

## Theatre/Show Selection Page

**Purpose:** User ko selected movie ke liye date, theatre aur show time choose karwana.

**Components:** `DateSelector`, `TheatreList`, `ShowCard`, `PriceTag`.

**Static data:** Development ke liye dates.

**API data:** Theatre name, address, screen, show time, ticket price.

**API call:** `showService.js` se `GET /api/shows?movieId=...&date=...`. Call date/movie selection change hone par page se karein.

**React learning:** Dependent data fetching, selected state, query params, empty results.

## Seat Selection Page

**Purpose:** User ko show ki available seats select karwana.

**Components:** `ScreenLabel`, `SeatGrid`, `Seat`, `SeatLegend`, `BookingPriceBar`.

**Static data:** Temporary seat layout only.

**API data:** Seat number, row, price category, available/booked status.

**API call:** `showService.js` se `GET /api/shows/:showId/seats`. Confirm karte waqt booking service ko selected seats bhejein.

**React learning:** Arrays of objects, toggle selection, derived total, disabled buttons, Context ya lifted state.

## Booking Summary Page

**Purpose:** Confirm karne se pehle user ko complete order review karwana.

**Components:** `BookingSummary`, `SelectedSeats`, `PriceBreakdown`, `ConfirmButton`.

**Static data:** Fee labels aur UI text.

**API data:** Selected movie/show/theatre/seat data; final price server se validate hoga.

**API call:** Page load par zaroori data booking context se lein. Confirm par `POST /api/bookings` ko `bookingService.js` se call karein.

**React learning:** Context/state sharing, form validation, navigation guard, async submit.

## Login Page

**Purpose:** Existing user ko authenticate karna.

**Components:** `LoginForm`, `FormInput`, `FormError`.

**Static data:** Labels aur validation messages.

**API data:** Login response mein token aur user details.

**API call:** `authService.js` se `POST /api/auth/login`. Successful response `AuthContext` mein save karein.

**React learning:** Controlled forms, validation, `localStorage`, redirect.

## Register Page

**Purpose:** Naya account create karna.

**Components:** `RegisterForm`, `FormInput`, `PasswordInput`.

**Static data:** Form labels.

**API data:** Created user ka basic response.

**API call:** `authService.js` se `POST /api/auth/register`.

**React learning:** Form state, validation, password confirmation, reusable inputs.

## User Profile Page

**Purpose:** User ko apni basic profile dekhne/update karne dena.

**Components:** `ProfileForm`, `ProfileHeader`, `LogoutButton`.

**Static data:** Field labels.

**API data:** Name, email, phone, account role.

**API call:** `userService.js` se `GET /api/users/me`; update par `PUT /api/users/me`.

**React learning:** Protected route, context user, update form, optimistic UI ka basic idea.

## My Bookings Page

**Purpose:** Logged-in user ki saari bookings dikhana.

**Components:** `BookingList`, `BookingCard`, `BookingStatus`, `EmptyState`.

**Static data:** Empty state.

**API data:** Booking id, movie, show, seats, amount, status, date.

**API call:** `bookingService.js` se `GET /api/bookings/my`.

**React learning:** Protected fetching, list rendering, status-based UI.

## Booking Details Page

**Purpose:** Ek booking ka ticket/receipt-style detail dikhana.

**Components:** `BookingHeader`, `TicketDetails`, `SeatList`, `DownloadButton` (later).

**Static data:** Labels aur ticket layout.

**API data:** Full booking, theatre, show aur payment status.

**API call:** `bookingService.js` se `GET /api/bookings/:id`.

**React learning:** Dynamic protected route, nested object rendering, error handling.

## About Page

**Purpose:** Project/company ke baare mein simple information.

**Components:** `Navbar`, `AboutContent`, `Footer`.

**Static data:** Mostly static content.

**API data:** Usually required nahi.

**API call:** Nahi, jab tak content CMS se nahi aata.

**React learning:** Reusable layout aur static page routing.

## Contact Page

**Purpose:** User ko contact details ya contact form dena.

**Components:** `ContactInfo`, `ContactForm`, `FormInput`.

**Static data:** Email, phone, address.

**API data:** Later contact messages.

**API call:** Optional `POST /api/contact`; shuruaat mein form validation ke baad success message kaafi hai.

**React learning:** Form state, validation, submit handling.

## Admin Dashboard

**Purpose:** Admin ko movies, bookings aur users ka overview dena.

**Components:** `AdminSidebar`, `StatCard`, `RecentBookings`, `QuickActions`.

**Static data:** Pehle placeholder stats.

**API data:** Movie count, theatre count, booking count, revenue.

**API call:** `adminService.js` se `GET /api/admin/dashboard`; Admin protected route se call karein.

**React learning:** Role-based UI, parallel data, dashboard layout.

## Admin Movies Page

**Purpose:** Movies ka CRUD manage karna.

**Components:** `AdminTable`, `MovieForm`, `EditMovieModal`, `DeleteButton`.

**Static data:** Form labels.

**API data:** Movie list.

**API calls:** `GET /api/movies`, `POST /api/movies`, `PUT /api/movies/:id`, `DELETE /api/movies/:id`. Calls `adminMovieService.js` se.

**React learning:** CRUD forms, modal state, refresh after mutation.

## Admin Theatres Page

**Purpose:** Theatre aur screen details manage karna.

**Components:** `TheatreTable`, `TheatreForm`, `ScreenForm`.

**Static data:** Form structure.

**API data:** Theatre, address, screens, seat capacity.

**API calls:** `GET/POST/PUT/DELETE /api/theatres` aur screens ke endpoints. Calls `theatreService.js` se.

**React learning:** Parent-child data, nested forms, admin validation.

## Admin Shows Page

**Purpose:** Movie, theatre, screen, date aur time ko combine karke show create karna.

**Components:** `ShowForm`, `MovieSelect`, `TheatreSelect`, `ShowTable`.

**Static data:** Select placeholders.

**API data:** Movies, theatres aur existing shows.

**API calls:** `GET /api/shows`, `POST /api/shows`, `PUT /api/shows/:id`, `DELETE /api/shows/:id`. Calls `showService.js` se.

**React learning:** Dependent selects, date/time inputs, complex forms.

## Admin Bookings Page

**Purpose:** Admin ko bookings search aur review karne dena.

**Components:** `BookingTable`, `BookingFilters`, `BookingStatus`, `BookingDetailsModal`.

**Static data:** Filter options.

**API data:** User, movie, show, seats, amount aur status.

**API calls:** `GET /api/admin/bookings`, `GET /api/admin/bookings/:id`, optional status update endpoint. Calls `adminBookingService.js` se.

**React learning:** Tables, filters, pagination, role-based API errors.

---

# 5. Component Breakdown

## Home

```text
Home
├── Navbar
├── HeroSection
│   └── PrimaryButton
├── MovieSection
│   └── MovieCard
├── ComingSoon
│   └── MovieCard
└── Footer
```

## Movies

```text
Movies
├── Navbar
├── PageHeader
├── SearchBar
├── FilterBar
├── MovieGrid
│   └── MovieCard
├── LoadingState
├── EmptyState
└── Footer
```

## Movie Details

```text
MovieDetails
├── Navbar
├── MovieHero
│   ├── MoviePoster
│   └── MovieInfo
├── MovieDescription
├── Rating
├── BookTicketsButton
└── Footer
```

## Theatre/Show Selection

```text
ShowSelection
├── Navbar
├── MovieMiniHeader
├── DateSelector
├── TheatreList
│   └── TheatreCard
│       └── ShowCard
└── Footer
```

## Seat Selection

```text
SeatSelection
├── Navbar
├── ShowSummary
├── ScreenLabel
├── SeatLegend
├── SeatGrid
│   └── Seat
├── PriceSummary
└── ContinueButton
```

## Booking Summary

```text
BookingSummary
├── Navbar
├── BookingDetails
├── SelectedSeats
├── PriceBreakdown
├── ConfirmBookingButton
└── Footer
```

## Authentication

```text
Login / Register
├── Navbar
├── AuthCard
│   ├── FormInput
│   ├── PasswordInput
│   ├── FormError
│   └── SubmitButton
└── Footer
```

## User pages

```text
Profile
├── Navbar
├── ProfileForm
└── Footer

MyBookings
├── Navbar
├── BookingList
│   └── BookingCard
└── Footer

BookingDetails
├── Navbar
├── TicketDetails
└── Footer
```

## Admin pages

```text
AdminLayout
├── AdminSidebar
├── AdminHeader
└── AdminContent
    ├── AdminDashboard
    ├── AdminMovies
    │   ├── MovieForm
    │   └── AdminTable
    ├── AdminTheatres
    ├── AdminShows
    └── AdminBookings
```

## Reusable components

- `Navbar`, `Footer`
- `MovieCard`
- `SearchBar`
- `FormInput`, `Button`, `Modal`
- `LoadingState`, `ErrorState`, `EmptyState`
- `BookingCard`
- `AdminTable`

Reusable component mein business logic hard-code na karein. Data props ke through pass karein. Example: `MovieCard` ko movie object aur click/navigation information mile.

---

# 6. API Mapping

Neeche common APIs ka practical mapping diya gaya hai. `PUBLIC`, `AUTHENTICATED` aur `ADMIN ONLY` access ko API ke saath hamesha document karein.

| Feature | Frontend Page | HTTP Method | API Endpoint | Backend Controller | MongoDB Model |
|---|---|---:|---|---|---|
| Get all movies | Movies, Home | GET | `/api/movies` | `movieController.js` | `Movie` |
| Get movie details | Movie Details | GET | `/api/movies/:id` | `movieController.js` | `Movie` |
| Create movie | Admin Movies | POST | `/api/movies` | `movieController.js` | `Movie` |
| Update movie | Admin Movies | PUT | `/api/movies/:id` | `movieController.js` | `Movie` |
| Delete movie | Admin Movies | DELETE | `/api/movies/:id` | `movieController.js` | `Movie` |
| Get theatres | Show Selection | GET | `/api/theatres` | `theatreController.js` | `Theatre` |
| Get shows | Show Selection | GET | `/api/shows?movieId=&date=` | `showController.js` | `Show` |
| Get show seats | Seat Selection | GET | `/api/shows/:showId/seats` | `showController.js` | `Show` |
| Create show | Admin Shows | POST | `/api/shows` | `showController.js` | `Show` |
| Register | Register | POST | `/api/auth/register` | `authController.js` | `User` |
| Login | Login | POST | `/api/auth/login` | `authController.js` | `User` |
| Current user | Profile | GET | `/api/users/me` | `userController.js` | `User` |
| Create booking | Booking Summary | POST | `/api/bookings` | `bookingController.js` | `Booking`, `Show` |
| My bookings | My Bookings | GET | `/api/bookings/my` | `bookingController.js` | `Booking` |
| Booking details | Booking Details | GET | `/api/bookings/:id` | `bookingController.js` | `Booking` |
| Admin dashboard | Admin Dashboard | GET | `/api/admin/dashboard` | `adminController.js` | Multiple |
| All bookings | Admin Bookings | GET | `/api/admin/bookings` | `adminController.js` | `Booking` |

## Axios calls kahan likhein?

Axios ka base instance `frontend/src/services/api.js` mein rakhein. Feature-wise functions alag files mein rakhein:

- `movieService.js`: movie APIs
- `authService.js`: register/login
- `showService.js`: theatre/show/seat APIs
- `bookingService.js`: booking APIs
- `adminService.js`: admin APIs

Page sirf service function call kare. Example idea:

```text
Movies page
  -> movieService.getMovies()
  -> api.get('/api/movies')
```

API logic directly JSX component mein bahut zyada rakhne se component difficult ho jaata hai. Error handling repeat hoti hai, testing mushkil hoti hai aur endpoint change karna painful hota hai. Isliye component ka main kaam UI aur state handle karna rakhein.

---

# 7. Backend MVC Flow

```text
React page
   ↓
Axios request
   ↓
Express route
   ↓
Controller
   ↓
Service (sirf jab logic complex ho)
   ↓
Mongoose model
   ↓
MongoDB
   ↓
JSON response
   ↓
React state update
```

## Har layer ka simple kaam

- **React:** User interface dikhata hai aur user action capture karta hai.
- **Axios:** HTTP request backend tak bhejta hai.
- **Route:** Decide karta hai ki kaunsa URL kis controller ko call karega.
- **Controller:** Request body/params padhta hai, validation/checks karta hai, response bhejta hai.
- **Service:** Reusable ya complex logic rakhti hai, jaise seat lock aur price calculation.
- **Model:** MongoDB document ka structure aur database operations deta hai.
- **MongoDB:** Actual data store karta hai.

## Example: `GET /api/movies`

```text
movieRoutes.js
  GET /api/movies -> getMovies
        ↓
movieController.js
  getMovies(req, res)
        ↓
Movie model
  Movie.find({ status: 'now-showing' })
        ↓
MongoDB movies collection
        ↓
Controller res.json(movies)
        ↓
movieService.getMovies()
        ↓
Movies.jsx setMovies(data)
        ↓
MovieCard list screen par show
```

Simple CRUD ke liye controller se model call karna acceptable hai. Jab booking, seat availability ya payment logic complex ho, tab service layer add karein.

---

# 8. Database Models

Shuruaat mein models ko simple rakhein. Pehle working booking flow banayein, phir fields add karein.

## User

**Why:** User account aur role store karne ke liye.

**Important fields:** `name`, `email`, `passwordHash`, `phone`, `role` (`user`/`admin`), `createdAt`.

**Relationship:** User ki multiple `Booking` ho sakti hain.

## Movie

**Why:** Movie catalogue store karne ke liye.

**Important fields:** `title`, `description`, `posterUrl`, `genre`, `language`, `duration`, `rating`, `status` (`now-showing`/`coming-soon`), `releaseDate`.

**Relationship:** Ek Movie ke multiple `Show` ho sakte hain.

## Theatre

**Why:** Cinema location store karne ke liye.

**Important fields:** `name`, `address`, `city`, `screens`.

**Relationship:** Theatre mein ek ya multiple screens ho sakti hain. Theatre ke multiple `Show` ho sakte hain.

## Screen

**Why:** Theatre ke andar screen aur seat capacity define karne ke liye.

**Important fields:** `name`, `theatreId`, `totalRows`, `totalSeats`.

**Relationship:** Screen ek Theatre se belong karti hai. Screen par shows hote hain.

> Beginner version mein Screen ko separate collection banane ke bajay Theatre document ke andar embedded data ke roop mein bhi rakh sakte hain. Jab project badhe tab separate model karein.

## Show

**Why:** Kis movie ka kis theatre/screen par kis date/time par show hai.

**Important fields:** `movieId`, `theatreId`, `screenId`, `showDate`, `startTime`, `price`, `seats`.

**Relationship:** Show ek Movie, Theatre aur Screen se linked hota hai.

**Seat approach:** Start mein `seats` array ke andar `{ seatNumber, status }` rakh sakte hain. Har seat ke liye separate `Seat` model shuruaat mein required nahi hai.

## Booking

**Why:** User ki confirmed ticket booking store karne ke liye.

**Important fields:** `userId`, `showId`, `movieId`, `theatreId`, `seatNumbers`, `totalAmount`, `status`, `bookingReference`, `createdAt`.

**Relationship:** Booking ek User aur ek Show se linked hoti hai.

## Payment

**Why:** Payment gateway ke baad payment status aur transaction id store karne ke liye.

**Important fields:** `bookingId`, `provider`, `transactionId`, `amount`, `status`.

**When:** Payment gateway se pehle is model ki zaroorat nahi. Booking ko pehle `pending` ya test `confirmed` flow se complete karein.

## Starting model recommendation

Pehle sirf yeh models rakhein:

1. `User`
2. `Movie`
3. `Theatre`
4. `Show`
5. `Booking`

`Screen`, `Seat` aur `Payment` ko tab separate karein jab basic flow working ho.

---

# 9. API Development Order

API ek saath sab mat banayein. UI flow ke order mein APIs banayein.

## Step 1: Health check

- `GET /api/health` - **PUBLIC**
- Backend running hai ya nahi, yeh check karne ke liye.

## Step 2: Movies

- `GET /api/movies` - **PUBLIC**
- `GET /api/movies/:id` - **PUBLIC**
- `POST /api/movies` - **ADMIN ONLY**
- `PUT /api/movies/:id` - **ADMIN ONLY**
- `DELETE /api/movies/:id` - **ADMIN ONLY**

Frontend calls: Home aur Movies pages read APIs call karenge. Admin Movies page write APIs call karega.

## Step 3: Theatres

- `GET /api/theatres` - **PUBLIC**
- `GET /api/theatres/:id` - **PUBLIC**
- `POST /api/theatres` - **ADMIN ONLY**
- `PUT /api/theatres/:id` - **ADMIN ONLY**
- `DELETE /api/theatres/:id` - **ADMIN ONLY**

Frontend calls: Show Selection read karega; Admin Theatres CRUD karega.

## Step 4: Shows

- `GET /api/shows?movieId=&date=` - **PUBLIC**
- `GET /api/shows/:id` - **PUBLIC**
- `GET /api/shows/:id/seats` - **PUBLIC**
- `POST /api/shows` - **ADMIN ONLY**
- `PUT /api/shows/:id` - **ADMIN ONLY**
- `DELETE /api/shows/:id` - **ADMIN ONLY**

Frontend calls: Show Selection aur Seat Selection pages read APIs call karenge; Admin Shows write APIs call karega.

## Step 5: Users and auth

- `POST /api/auth/register` - **PUBLIC**
- `POST /api/auth/login` - **PUBLIC**
- `GET /api/users/me` - **AUTHENTICATED**
- `PUT /api/users/me` - **AUTHENTICATED**

Frontend calls: Register, Login aur Profile pages.

## Step 6: Bookings

- `POST /api/bookings` - **AUTHENTICATED**
- `GET /api/bookings/my` - **AUTHENTICATED**
- `GET /api/bookings/:id` - **AUTHENTICATED**
- `PATCH /api/bookings/:id/cancel` - **AUTHENTICATED**, policy ke baad

Frontend calls: Booking Summary, My Bookings aur Booking Details pages.

## Step 7: Admin

- `GET /api/admin/dashboard` - **ADMIN ONLY**
- `GET /api/admin/bookings` - **ADMIN ONLY**
- `GET /api/admin/bookings/:id` - **ADMIN ONLY**
- `GET /api/admin/users` - **ADMIN ONLY**, later
- `GET /api/admin/statistics` - **ADMIN ONLY**, later

Frontend calls: Admin Dashboard aur Admin Bookings pages.

---

# 10. Authentication and Authorization

Authentication ko movie browsing se pehle implement karna zaroori nahi hai. Pehle public pages aur read-only movie flow samajh lein.

## Recommended order

1. Public movie list/detail banao.
2. Theatre aur show selection banao.
3. Seat selection aur summary UI banao.
4. Register API banao.
5. Login API banao.
6. Password ko `bcryptjs` se hash karo.
7. Login par JWT generate karo.
8. JWT ko frontend mein carefully store karo.
9. Backend `authMiddleware` se token verify karo.
10. `req.user` mein user information attach karo.
11. Protected booking/profile routes lagao.
12. `adminMiddleware` se `role === 'admin'` check karo.
13. Admin routes protect karo.

## Important terms

- **Register:** User ka account create karta hai.
- **Login:** Email/password check karke JWT deta hai.
- **JWT:** Signed token, jisse backend request karne wale user ko pehchanta hai.
- **Authentication middleware:** Token valid hai ya nahi check karta hai.
- **Authorization:** Valid user ko kis action ki permission hai, yeh decide karta hai.
- **User/Admin roles:** Normal user booking karega; admin management APIs use karega.
- **Protected route:** Login/token required route.

Frontend par `AuthContext` current user, token aur logout manage karega. `ProtectedRoute` login ke bina profile/bookings pages ko access rok sakta hai. Lekin sirf frontend protection par depend na karein; backend par bhi middleware zaroor lagayein.

---

# 11. Complete User Flow

```text
User website open karta hai
        ↓
Home page
        ↓
Movies page
        ↓
Movie Details
        ↓
Theatre/Show Selection
        ↓
Seat Selection
        ↓
Booking Summary
        ↓
Login/Register agar user logged-in nahi hai
        ↓
Confirm Booking
        ↓
Booking Confirmation
        ↓
My Bookings
```

| Step | Frontend page | Backend API |
|---|---|---|
| Website open | Home | `GET /api/movies?status=featured` |
| Movies browse | Movies | `GET /api/movies` |
| Movie inspect | Movie Details | `GET /api/movies/:id` |
| Theatre/date/show choose | Show Selection | `GET /api/shows?movieId=&date=` |
| Seats dekhna | Seat Selection | `GET /api/shows/:showId/seats` |
| Summary review | Booking Summary | Context state; final price server validate karega |
| Login | Login | `POST /api/auth/login` |
| Booking confirm | Booking Summary | `POST /api/bookings` |
| Confirmation | Booking Details | `GET /api/bookings/:id` |
| Previous bookings | My Bookings | `GET /api/bookings/my` |

Important: Seat availability ko sirf frontend par trust na karein. Booking create karte waqt backend ko current availability dobara check karni chahiye.

---

# 12. Admin Flow

```text
Admin Login
    ↓
Admin Dashboard
    ↓
Manage Movies
    ↓
Manage Theatres/Screens
    ↓
Manage Shows
    ↓
Manage Bookings
    ↓
Users/Statistics
```

## Admin Login

- Frontend: `Login` page.
- API: `POST /api/auth/login`.
- Backend: JWT ke saath admin role return kare.
- Access: **PUBLIC endpoint**, lekin admin panel ke liye role required.

## Dashboard

- Frontend: `AdminDashboard`.
- API: `GET /api/admin/dashboard`.
- Data: Movie count, show count, booking count, recent bookings.

## Manage Movies

- Frontend: `AdminMovies`.
- APIs: `GET`, `POST`, `PUT`, `DELETE /api/movies`.
- Access: **ADMIN ONLY**.

## Manage Theatres

- Frontend: `AdminTheatres`.
- APIs: `GET`, `POST`, `PUT`, `DELETE /api/theatres`.
- Access: Read public ho sakta hai; write **ADMIN ONLY**.

## Manage Shows

- Frontend: `AdminShows`.
- APIs: `GET /api/shows`, `POST/PUT/DELETE /api/shows`.
- Access: Write APIs **ADMIN ONLY**.

## Manage Bookings

- Frontend: `AdminBookings`.
- APIs: `GET /api/admin/bookings`, `GET /api/admin/bookings/:id`.
- Access: **ADMIN ONLY**.

## Users/Statistics

- Frontend: Dashboard ya future `AdminUsers`.
- APIs: `GET /api/admin/users`, `GET /api/admin/statistics`.
- Access: **ADMIN ONLY**, basic project stable hone ke baad.

---

# 13. What NOT to Build Initially

Pehle working local project banao. Neeche wali cheezein baad mein add karein:

- **Redis:** Pehle simple MongoDB queries samjhein. Redis tab jab caching/session/seat locking ki real need ho.
- **Nginx:** Local development mein zaroorat nahi. Deployment aur reverse proxy ke time use karein.
- **Docker:** App local machine par properly chalne ke baad containerize karein.
- **Payment gateway:** Pehle fake/test booking complete karein. Real payment sabse baad mein add karein.
- **Email OTP:** Basic register/login ke baad email verification add karein.
- **Advanced caching:** Pehle correct API aur database queries banayein; performance issue measure hone par cache lagayein.
- **Microservices:** Solo beginner project ke liye monolith Express app kaafi hai. Scale ki actual need par split karein.
- **Complex state management:** Pehle `useState`, props aur `useContext` samjhein. Redux/Zustand tab jab state genuinely difficult ho.
- **WebSockets:** Live seat updates ki need ho tab add karein.
- **Complicated seat inventory system:** Pehle one-show seat array approach se working flow complete karein.

Later order: tests and validation -> deployment -> payment/email -> caching -> Docker/Nginx -> scaling.

---

# 14. Learning Along the Way

## Phase 1: Frontend setup

- React component structure
- React Router
- Tailwind responsive styling
- Loading aur error UI
- Basic project organisation

## Phase 2: Home

- Props
- Reusable components
- `map()` se list rendering
- Static vs dynamic data
- Navigation

## Phase 3: Movies

- `useState`
- Controlled search input
- Filtering
- `useEffect`
- Axios GET request
- Empty/loading/error states

## Phase 4: Movie Details

- Dynamic routes
- `useParams`
- API response handle karna
- Component composition

## Phase 5: Shows

- Dependent API requests
- Date selection
- Query parameters
- Multiple selected states

## Phase 6: Seats

- Arrays of objects
- Toggle selection
- Derived state aur total amount
- Disabled UI
- Availability ka basic concept

## Phase 7: Booking summary

- Context ya lifted state
- Form submit
- Navigation guards
- Client aur server validation ka difference

## Phase 8: Backend setup

- Express app
- Middleware
- Environment variables
- CORS
- REST API basics
- Error handling

## Phase 9: Models

- Mongoose schemas
- Validation
- References
- Embedded data
- MongoDB documents aur collections

## Phase 10: APIs

- Routes
- Controllers
- CRUD
- HTTP methods/status codes
- Service layer kab use karni hai

## Phase 11: Authentication

- Password hashing
- JWT
- Middleware
- Protected routes
- Roles aur authorization

## Phase 12-14: User/Admin/Booking

- Shared context
- CRUD forms
- Relationships
- Seat availability
- Booking lifecycle
- Transactions/concurrency ka basic concept
- Server-side validation

## Phase 15-16: Advanced and deployment

- Testing
- Logging
- Performance measurement
- Environment-based config
- Production build
- Docker, Nginx, caching aur monitoring

---

# 15. Final Project Architecture

Basic features complete hone ke baad realistic solo-project structure kuch is tarah dikhega:

```text
MoviesMod/
├── README.md
├── roadmap.md
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── assets/
│       ├── components/
│       │   ├── common/
│       │   │   ├── Button.jsx
│       │   │   ├── LoadingState.jsx
│       │   │   └── ErrorState.jsx
│       │   ├── layout/
│       │   │   ├── Navbar.jsx
│       │   │   └── Footer.jsx
│       │   ├── movies/
│       │   │   ├── MovieCard.jsx
│       │   │   └── MovieGrid.jsx
│       │   ├── booking/
│       │   │   ├── Seat.jsx
│       │   │   ├── SeatGrid.jsx
│       │   │   └── BookingSummary.jsx
│       │   └── admin/
│       │       ├── AdminSidebar.jsx
│       │       └── AdminTable.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Movies.jsx
│       │   ├── MovieDetails.jsx
│       │   ├── ShowSelection.jsx
│       │   ├── SeatSelection.jsx
│       │   ├── BookingSummary.jsx
│       │   ├── BookingConfirmation.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Profile.jsx
│       │   ├── MyBookings.jsx
│       │   ├── BookingDetails.jsx
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   └── admin/
│       │       ├── AdminDashboard.jsx
│       │       ├── AdminMovies.jsx
│       │       ├── AdminTheatres.jsx
│       │       ├── AdminShows.jsx
│       │       └── AdminBookings.jsx
│       ├── services/
│       │   ├── api.js
│       │   ├── authService.js
│       │   ├── movieService.js
│       │   ├── showService.js
│       │   ├── bookingService.js
│       │   └── adminService.js
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── BookingContext.jsx
│       ├── hooks/
│       │   ├── useAuth.js
│       │   └── useFetch.js
│       └── utils/
│           ├── formatDate.js
│           └── formatCurrency.js
│
└── backend/
    ├── package.json
    ├── .env
    ├── app.js
    ├── server.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── authController.js
    │   ├── movieController.js
    │   ├── theatreController.js
    │   ├── showController.js
    │   ├── bookingController.js
    │   ├── userController.js
    │   └── adminController.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── movieRoutes.js
    │   ├── theatreRoutes.js
    │   ├── showRoutes.js
    │   ├── bookingRoutes.js
    │   ├── userRoutes.js
    │   └── adminRoutes.js
    ├── model/
    │   ├── usermodel.js
    │   ├── moviemodel.js
    │   ├── theatreModel.js
    │   ├── showModel.js
    │   └── bookingModel.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   ├── adminMiddleware.js
    │   ├── notFoundMiddleware.js
    │   └── errorMiddleware.js
    ├── services/
    │   └── bookingService.js
    └── utils/
        ├── generateToken.js
        └── asyncHandler.js
```

Yeh final structure bhi fixed rule nahi hai. Agar koi folder empty hai ya uski zaroorat nahi hai, use abhi create mat karein. Codebase ko actual complexity ke saath grow hone dein.

---

# Practical Weekly/Session Checklist

Har coding session mein ek chhota, complete task choose karein:

- [ ] Ek page ka layout complete kiya.
- [ ] Loading/error/empty state add ki.
- [ ] Ek reusable component nikala.
- [ ] Ek API endpoint banaya ya connect kiya.
- [ ] Browser mein happy path test kiya.
- [ ] Invalid input aur empty data test kiya.
- [ ] Code ko next phase ke liye readable rakha.

Ek time par poora project banane ki koshish na karein. Pehle ek vertical slice complete karein: **movie list -> movie details -> show selection**. Isse frontend, API, backend aur database ka connection jaldi samajh aayega.

---

# Current Progress

Yahan apna current status manually update karein:

- [x] Frontend React/Vite setup
- [x] Tailwind CSS setup
- [x] Axios instance ka initial setup
- [x] Basic Navbar aur Footer
- [x] Basic Home page start
- [x] Basic Movies page start
- [x] Backend Express setup ka initial version
- [x] Initial User aur Movie Mongoose models
- [ ] Clean backend MVC folders connect karna
- [ ] Real Movie API banana
- [ ] Movie Details page
- [ ] Theatre/Show selection
- [ ] Seat selection
- [ ] Booking summary
- [ ] Register/Login
- [ ] JWT authentication
- [ ] User profile aur My Bookings
- [ ] Admin panel
- [ ] Booking management
- [ ] Payment/email features
- [ ] Testing
- [ ] Deployment

## Abhi next kya build karein?

**Recommended next step: Phase 1 complete karke Movies vertical slice banayein.** Is order mein kaam karein:

1. Backend mein `GET /api/movies` ko proper route/controller/model flow mein banayein.
2. Temporary hard-coded `movies` array hata kar MongoDB se movies return karein.
3. Frontend `movieService.js` banakar Movies page ko us service se connect karein.
4. `MovieCard` reusable component banayein.
5. Movie Details ke liye `GET /api/movies/:id` ready karein.

Yeh next step recommended hai kyunki movies project ki central entity hai. Isse aap React page, Axios, Express route, controller, Mongoose model aur MongoDB ka complete end-to-end flow ek chhote feature mein seekh lenge. Uske baad show selection aur booking ka kaam zyada clear lagega.
