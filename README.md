
# MiniBlog

A full-stack blog application built with React and Firebase. Users can register, log in, create and manage posts, and search content by tags.


## Features

- **Authentication** — Register and sign in with email/password via Firebase Auth
- **Create post** — Add a title, image URL, body content and tags
- **Edit post** — Update your existing posts
- **Delete post** — Remove posts from your dashboard
- **Dashboard** — View and manage all posts created by the logged-in user
- **Search by tags** — Filter posts by tag on the home page
- **Post page** — Individual page for reading each post

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| React Router DOM | Client-side routing |
| Firebase Auth | User authentication |
| Firebase Firestore | NoSQL database |
| CSS Modules | Component-scoped styling |

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   └── PostDetails/
├── context/
│   └── AuthContext.js
├── firebase/
│   └── config.js
├── hooks/
│   ├── useAuthentication.js
│   ├── useFetchDocument.js
│   ├── useFetchDocuments.js
│   ├── useInsertDocument.js
│   ├── useUpdateDocument.js
│   ├── useDeleteDocument.js
│   └── useQuery.js
└── pages/
    ├── Home/
    ├── About/
    ├── Login/
    ├── Register/
    ├── Dashboard/
    ├── CreatePost/
    ├── EditPost/
    ├── Post/
    └── Search/
```
### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A [Firebase](https://firebase.google.com/) account

### Installation

```bash
# Clone the repository
git clone https://github.com/lucas-delazeri/minblog-react-project.git

# Navigate to the project folder
cd minblog-react-project

# Install dependencies
npm install
```

### Firebase Setup

1. Create a project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable **Firestore Database** and **Authentication** (email/password)
3. Create a `.env` file in the root of the project:

```env
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
