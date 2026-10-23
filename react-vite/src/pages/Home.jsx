import "../assets/styles/index.css" 
import axios from 'axios';

import LogoImage from "../assets/logo.png"
import UserImage from "../assets/user-icon.png"
import HomeBG1Image from "../assets/home-bg-1.png"
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { useEffect, useState } from "react";
// import DetailVideoModal from "../components/DetailVideoModal";

export default function HomePage() {

  const [movieRecent, setMovieRecent] = useState([])
  const [movieTopRating, setMovieTopRating] = useState([])
  const [movieTranding, setMovieTranding] = useState([])

  async function getRecentMovie () {
    const token = localStorage.getItem("token")
    const options = {
      method: 'GET',
      url: 'https://dytuputtiertanijmjev.supabase.co/rest/v1/video',
      params: {select: '*', type: 'eq.recent'},
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHVwdXR0aWVydGFuaWptamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NDcwMTcsImV4cCI6MjEwODMyMzAxN30.9j8Ur3SGzGbvq6RZlVUjrrSZnZ-Glyrtypi2CbPTDlA',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setMovieRecent(data.slice(0,3))
    } catch (error) {
      console.error(error);
    }
  }
  async function getTopRatingMovie () {
    const token = localStorage.getItem("token")
    const options = {
      method: 'GET',
      url: 'https://dytuputtiertanijmjev.supabase.co/rest/v1/video',
      params: {select: '*', type: 'eq.top_rating'},
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHVwdXR0aWVydGFuaWptamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NDcwMTcsImV4cCI6MjEwODMyMzAxN30.9j8Ur3SGzGbvq6RZlVUjrrSZnZ-Glyrtypi2CbPTDlA',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setMovieTopRating(data.slice(0,3))
    } catch (error) {
      console.error(error);
    }
  }
  async function getTrandingMovie () {
    const token = localStorage.getItem("token")
    const options = {
      method: 'GET',
      url: 'https://dytuputtiertanijmjev.supabase.co/rest/v1/video',
      params: {select: '*', type: 'eq.trending'},
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHVwdXR0aWVydGFuaWptamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NDcwMTcsImV4cCI6MjEwODMyMzAxN30.9j8Ur3SGzGbvq6RZlVUjrrSZnZ-Glyrtypi2CbPTDlA',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setMovieTranding(data.slice(0,3))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRecentMovie()
  }, [])
  useEffect(() => {
    getTopRatingMovie()
  }, [])
  useEffect(() => {
    getTrandingMovie()
  }, [])

  return (
    <>
      <header className="navbar">
        <img className="navbar-logo" src={LogoImage} alt="" />
        <nav className="navbar-link">
          <a className="body-large-medium" href="">
            Series
          </a>
          <a className="body-large-medium" href="">
            Film
          </a>
          <a className="body-large-medium" href="">
            Daftar Saya
          </a>
        </nav>
        <div className="profile">
          <img className="user-icon" src={UserImage} alt="" />
          <button className="btn-unstyled">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <img className="hero-image" src={HomeBG1Image} alt="" />
          <div className="wrapper-gradient" />
          <h2 className="heading-1" style={{ marginBottom: 20 }}>
            Duty After School
          </h2>
          <p className="body-large-medium" style={{ marginBottom: 40 }}>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="hero-action">
            <button className="btn-primary-shadow body-small-bold">
              Mulai
            </button>
            <button className="btn-secondary-contained">
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              Selengkapnya
            </button>
            <div className="tag body-medium-regular">18+</div>
            <button className="btn-sound">
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>
          </div>
        </section>
        <Carousel title="Melanjutkan Tonton Film">
          {
            movieRecent.map((item) => (
              <Card
              key={item.id}
                id={item.id}
                onClick={() => {}}
                title={item.name}
                rating={item.rating}
                isPremium={item.is_premium}
                image={item.cover_url}
                type={1}
              />
            ))
          }
        </Carousel>
        <Carousel title="Top Rating Film dan Series Hari ini">
           {
            movieTopRating.map((item) => (
              <Card
              key={item.id}
                id={item.id}
                onClick={() => {}}
                title={item.name}
                rating={item.rating}
                isPremium={item.is_premium}
                image={item.cover_url}
                type={2}
              />
            ))
          }
        </Carousel>
        <Carousel title="Tranding">
           {
            movieTranding.map((item) => (
              <Card
              key={item.id}
                id={item.id}
                onClick={() => {}}
                title={item.name}
                rating={item.rating}
                isPremium={item.is_premium}
                image={item.cover_url}
                type={2}
              />
            ))
          }
        </Carousel>
        {/* <DetailVideoModal/> */}
      </main>
    </>
  );
}
