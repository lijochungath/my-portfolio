import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="container">

        <div className="max-w-4xl">

          <p className="text-blue-400 text-xl">
            Hello, I'm
          </p>

          <h1 className="mt-4 text-7xl font-extrabold">
            Lijo
            <span className="gradient-text">
              {" "}Chungath Jose
            </span>
          </h1>

          <h2 className="mt-5 text-3xl text-slate-300">
            Senior Data Engineer
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Designing scalable Azure Data Engineering solutions,
            Microsoft Fabric implementations,
            Enterprise Analytics,
            Power BI,
            Azure Synapse,
            SQL,
            Python and Cloud Data Platforms.
          </p>

          <div className="mt-10 flex gap-4">

            <Button>
              View Projects
            </Button>

            <button className="btn-secondary">
              Download Resume
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}