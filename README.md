# FutureVerse

**FutureVerse** is a campus-connecting application built during an inter-college hackathon organized by **Future Institute of Engineering and Management**. It aims to provide a platform for students and departments to connect, share resources, and stay informed. Using **FutureVerse**, students can post about selling or buying academic materials like books, notes, organizers, and educational kits. It also serves as a hub for department notices, club announcements, and a lost-and-found section. The application is developed using the **MERN stack**.

## Features

- **Buy/Sell Academic Resources**: Students can post listings to sell or buy used books, notes, organizers, educational kits, and more.
- **Notices from Departments and Clubs**: Departments and student clubs can post important updates and announcements.
- **Lost and Found**: Users can report lost or found items within the campus.
- **Campus Feed**: A common feed where students can post or engage with various campus-related activities and resources.
- **User Authentication**: Secure sign-up and login functionality using JWT (JSON Web Tokens).
- **Interactive and User-friendly UI**: A smooth and intuitive interface that enhances user experience.

## Tech Stack

FutureVerse is developed using the **MERN stack**, consisting of the following technologies:

- **MongoDB**: NoSQL database for storing user posts, notices, and lost-found items.
- **Express.js**: Backend framework for building the RESTful API and managing routes.
- **React.js**: Frontend JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.
- **JWT (JSON Web Tokens)**: Used for user authentication and session management.

## Installation and Setup

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- MongoDB
- Git

### Steps to Set Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Explore13/Future_Verse.git
   cd Future_Verse
   ```

2. **Install Dependencies**

   Navigate to both the client and server directories to install dependencies.

   ```bash
   # For backend
   cd server
   npm install

   # For frontend
   cd ../client
   npm install
   ```

3. **Configure Environment Variables**

   In the `server` directory, create a `.env` file and add the following variables:

   ```bash
   NODE_ENV=development
   PORT=4000
   DATABASE=<YOUR_MONGODB_URL>
   JWT_SECRET_KEY=<SET_YOUR_JWT_SECRET_KEY>
   ```

   - `NODE_ENV`: Set the environment to `development` or `production`.
   - `PORT`: The port where the backend server will run.
   - `DATABASE`: The remote MongoDB connection string for production.
   - `JWT_SECRET_KEY`: Secret key for JWT-based authentication.

4. **Start the Application**

   Open two terminal windows or tabs:

   - For running the backend server:

     ```bash
     cd server
     npm start
     ```

   - For running the frontend development server:

     ```bash
     cd client
     npm start
     ```

   The backend will run on `http://localhost:4000` and the frontend will run on `http://localhost:5173`.

## Project Structure

```
Future_Verse/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components and Pages
│   │   ├── redux/        # Redux store and slices for state management
│   │   ├── utils/        # Utility functions and hooks
│   │   └── App.jsx       # Main app component
│   └── package.json      # Client dependencies
│
├── server/               # Node.js/Express backend
│   ├── models/           # Mongoose schemas and models
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   ├── public/           # Folder to store static files
│   ├── app.js            # Express app setup and middleware configuration
│   └── server.js         # Entry point for running the server
│
├── README.md             # Project documentation
└── package.json          # Root project metadata and scripts
```



## Usage

- **Buy/Sell Items**: Create a post by selecting the "Sell" option. Users can browse through the listings and contact sellers directly.
- **Lost and Found**: Use the "Lost/Found" section to post lost or found items, helping students retrieve their belongings.
- **Notices**: Departments and clubs can publish important notices or announcements, which will appear on the feed.
- **Profile Management**: Users can edit their profile and manage their posts under their dashboard.

## Contributing

We welcome contributions to improve **FutureVerse**! To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We would like to thank **Future Institute of Engineering and Management** for organizing the hackathon and providing a platform for building this project.

A special thanks to **[Shankar022](https://github.com/Shankar022)** for guiding us throughout the development process and providing valuable insights and support.

---

