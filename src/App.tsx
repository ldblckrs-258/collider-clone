import { LANDING_DATA } from '@statics/landing-data'

function App() {
  return (
    <>
      <section className="relative mt-[-34px] h-[calc(100dvh-34px)]">
        <video
          className="h-full w-full object-cover"
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          poster={LANDING_DATA.banner.poster}
        >
          <source src={LANDING_DATA.banner.video} type="video/mp4" />
        </video>
      </section>
      <main className="container h-[200vh]"></main>
    </>
  )
}

export default App
