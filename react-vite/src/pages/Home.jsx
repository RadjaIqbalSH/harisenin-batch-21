import "../assets/styles/index.css" 

import LogoImage from "../assets/logo.png"
import UserImage from "../assets/user-icon.png"
import HomeBG1Image from "../assets/home-bg-1.png"
import FilmCover1Image from "../assets/film-cover-1.png"
import FilmCover2Image from "../assets/film-cover-2.png"
import FilmCover3Image from "../assets/film-cover-3.png"
import FilmCover4Image from "../assets/film-cover-4.png"
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import DetailVideoModal from "../components/DetailVideoModal";

export default function HomePage() {
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
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={1}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={1}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={1}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={1}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={1}
          />
        </Carousel>
        <Carousel title="Top Rating Film dan Series Hari ini">
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
          <Card
            id={"asdasd"}
            onClick={() => {}}
            title="asd"
            rating="4.3"
            isPremium={true}
            image="https://dytuputtiertanijmjev.supabase.co/storage/v1/object/public/video/horizontal-image-1.png"
            type={2}
          />
        </Carousel>
        <DetailVideoModal/>
      </main>
    </>
  );
}
