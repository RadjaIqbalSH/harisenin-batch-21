import type { ReactNode } from "react";

interface ICarouselProps {
  title: string;
  children: ReactNode;
}

export default function Carousel(props: ICarouselProps) {
  const { title, children } = props;

  return (
    <section className="section-1">
      <h2 className="heading-3" style={{ marginBottom: 32 }}>
        {title}
      </h2>
      <div className="section-1-carousel">
        <button className="btn-prev">
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        {children}
        <button className="btn-next">
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
