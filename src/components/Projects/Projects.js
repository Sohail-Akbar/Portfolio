import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyDjnlHWD0Az8wPfhmnDb6PFBWY8BB8AzY8";
  const CHANNEL_ID = "UC9U6BZnjtZY4uReyKpvLInQ";
  const MAX_RESULTS = 6;

  // 🔹 Fetch YouTube videos
  const fetchVideos = async (pageToken = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&maxResults=${MAX_RESULTS}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();

      if (data.items) {
        setVideos((prev) => [...prev, ...data.items]);
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
    setLoading(false);
  };

  // 🔹 Load first videos
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  // 🔹 Infinite Scroll: load more when scrolling near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.scrollHeight
      ) {
        if (nextPageToken && !loading) {
          fetchVideos(nextPageToken);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [nextPageToken, loading]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-color">
          <span className="text-color">My Recent</span> <strong className="purple">YouTube Works</strong>
        </h1>
        <p className="text-color">
          Here are my recent YouTube videos fetched dynamically.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {videos.map((video, index) => {
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const description = video.snippet.description;
            const thumbnail = video.snippet.thumbnails.high.url;

            return (
              <Col key={index} md={4} className="project-card">
                <ProjectCard
                  imgPath={thumbnail}
                  isBlog={false}
                  title={title}
                  description={description}
                  demoLink={`https://www.youtube.com/watch?v=${videoId}`}
                />
              </Col>
            );
          })}
        </Row>

        {loading && <p style={{ color: "white" }}>Loading more videos...</p>}
      </Container>
    </Container>
  );
}

export default Projects;
