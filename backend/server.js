const express = require('express');
const connectDB = require('./db'); // adjust path as needed

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes);

const simpleBlogRoutes = require("./routes/blogModel");
app.use("/api/simple-blogs", simpleBlogRoutes);

const courseRoutes = require("./routes/courses");
app.use("/api/courses", courseRoutes);

const eventRoutes = require("./routes/eventModel");
app.use("/api/events", eventRoutes);

const festivalEventRoutes = require("./routes/eventRoute");
app.use("/api/festival-events", festivalEventRoutes);


const qnaRoutes = require("./routes/faq");
app.use("/api/qna", qnaRoutes);

const galleryRoutes = require("./routes/galleryCards");
app.use("/api/gallery", galleryRoutes);

const quoteRoutes = require("./routes/quote");
app.use("/api/quotes", quoteRoutes);

const recentPostRoutes = require("./routes/sideComponent");
app.use("/api/recentposts", recentPostRoutes);

const alumniRoutes = require("./routes/team");
app.use("/api/alumni", alumniRoutes);

const testimonialRoutes = require("./routes/testimonial");
app.use("/api/testimonials", testimonialRoutes);

const timelineRoutes = require("./routes/timeline");
app.use("/api/event-highlights", timelineRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
