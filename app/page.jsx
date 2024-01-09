import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="">Dashboard</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos saepe libero architecto, voluptatem tempore est eum cum tenetur incidunt quam numquam repudiandae eligendi id minus odit hic! Culpa, dicta!</p>
      <div>
        <Link href={"/tickets"} className="flex justify-center my-8">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New Member of the web dev team...</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis doloribus rerum similique dolorum mollitia unde? Impedit maxime quibusdam aspernatur sint libero placeat amet minima rem. Eligendi tempore ratione minima.</p>

      </div>

      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas quibusdam nostrum? Nobis temporibus dicta amet numquam aperiam vitae fuga repellat blanditiis necessitatibus voluptates unde beatae possimus ullam, similique laboriosam.</p>
      </div>
    </main>
  );
}
